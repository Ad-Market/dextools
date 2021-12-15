import bars from './data.json';
import TokenApi from '../../../apis/token_api';

const history = {};

export default {
    history: history,
    getBars: function (pair_address, from, to, symbolInfo, first) {
        var split_symbol = symbolInfo.name.split(/[:/]/);
        // return new Promise((resolve, reject) => {
        //     // resolve(bars);

        //     TokenApi.getPirceChartData(pair_address, from, to)
        //     .then(res => {
        //         let bar1 = res.data.reverse().map(i => {
        //             return {
        //                 time: (new Date(i.timeInterval.minute)).getTime(),
        //                 low: i.minimum_price,
        //                 high: i.maximum_price,
        //                 open: i.open_price,
        //                 close: i.close_price,
        //                 volume: 0 
        //             }

        //         })

        //         console.log(bar1);
        //         resolve(bar1);
        //     })
        //     .catch(error => {
        //         reject();
        //     })
        // })

        
            // resolve(bars);

        return TokenApi.getPirceChartData(pair_address, from, to)
            .then(res => {
                const rawData = res.data.reverse();
                if (rawData.length) {
                    let bar1 = rawData.map(i => {
                        return {
                            time: (new Date(i.timeInterval.minute)).getTime(),
                            low: i.minimum_price,
                            high: i.maximum_price,
                            open: i.open_price,
                            close: i.close_price,
                            volume: 0 
                        }

                    })

                    if (first) {
                        var lastBar = bars[bars.length - 1];
                        history[symbolInfo.name] = { lastBar: lastBar };
                    }

                    return bar1
                } else {
                    return [];
                }
            })
            .catch(error => {
                return []
            })
        
    }
}