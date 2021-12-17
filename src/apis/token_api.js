import api from './api';
import axios from 'axios';

const BSCSCAN_KEY = '8JU4FEUI92MMCVMNXCV95YWMMNA75WDQ49';

const TokenApi = {
    getTokenPairs: (token_address) => {
        return api.get('token_pair/get_token_pairs/' + token_address);
    },

    getPirceChartData: (pair_address, from, to) => {
        return api.post('token_pair/get_price_chart_data', {
            pair_address: pair_address, 
            from: from, 
            to: to
        });
    },

    getBSCTokenInfo: (token_address) => {
        const url = `https://api.bscscan.com/api?module=token&action=tokeninfo&contractaddress=${token_address}&apikey=${BSCSCAN_KEY}`;
        return axios.get(url);
    },

    searchBSCToken: (search) => {
        return api.post('token_pair/search_bsc_token', {
            search: search
        });
    },

    getLPInfo: (pair_address) => {
        return api.post('token_pair/get_lp_info', {
            pair_address, pair_address
        });
    }
}

export default TokenApi;