import bars from './data.json';
import TokenApi from '../../../apis/token_api';

const history = {};

export default {
    history: history,
    getBars: function (pair_address, from, to, symbolInfo, first) {
        return TokenApi.getPirceChartData(pair_address, from, to)
            .then(res => {
                const rawData = res.data.reverse();
                if (rawData.length) {
                    let bars = rawData.map(i => {
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

                    return bars
                } else {
                    return [];
                }
            })
            .catch(error => {
                return []
            })
        
    }
}