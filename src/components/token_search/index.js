import React, { useState } from 'react';

import AsyncSelect from 'react-select/async';
import TokenApi from '../../apis/token_api';

const customStyles = {
    indicatorsContainer: () => {
        return {
            display: 'none'
        }
    },
    singleValue: (provided, state) => {
        const styles = {
            color: '#efe8e8'
        }
        return {...provided, ...styles}
    },
    placeholder: (provided, state) => {
        const styles = {
            color: '#efe8e8'
        }
        return {...provided, ...styles}
    },
    control: (provided, state) => {
        const styles = {
            background: 'rgb(66,148,254)',
            background: 'linear-gradient(90deg, rgba(66,148,254,1) 0%, rgba(47,121,231,1) 100%)',
            borderRadius: '30px',
            padding: '5px 16px'
        }
        return {...provided, ...styles}
    },
    container: (provided, state) => {
        const styles = {
            width: '100%'
        }
        return {...provided, ...styles}
    },
}

const TokenSearch = (props) => {

    const [inputValue, setInputValue] = useState('');

    const loadOptions = (
        iValue,
        callback
    ) => {
        if (iValue.length > 1) {
            console.log('filter');
            TokenApi.searchBSCToken(iValue).then(res => {
                if (res.data.length > 0) {
                    const options = (res.data.map(token_pair => {
                        return {value: token_pair.token0_address, label: `${token_pair.token0_symbol}(${token_pair.token0_name})`}
                    }))

                    callback(options);
                } else {
                    callback([]);
                }
            });
            // setTimeout(() => {
            //     callback(filterColors(iValue));
            // }, 1000);
        } else {
            // callback([]);
        }
    };
      
    const handleInputChange = (newValue) => {
        const iValue = newValue.replace(/\W/g, '');
        setInputValue(iValue);
        return iValue;
    };
  
    return (
        <div className='w-full flex lg:w-1/2 relative z-10'>
            <AsyncSelect
                cacheOptions
                loadOptions={loadOptions}
                defaultOptions
                onInputChange={handleInputChange}
                onChange={props.handleChange}
                styles={customStyles}
                placeholder="Search pair by ame, symbol, pair contract or token contract"
            />
        </div>
    );
}

export default TokenSearch;