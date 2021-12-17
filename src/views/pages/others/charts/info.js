import { useEffect, useState } from "react";
import TokenApi from "../../../../apis/token_api";
import bscscanImg from '../../../../assets/img/bscscan.png'
import { numberWithCommas } from "../../../../utils/helper";

const PriceChartInfo = ({selectedPair}) => {

    const [tokenInfo, setTokenInfo] = useState(false);

    useEffect(() => {
        TokenApi.getBSCTokenInfo(selectedPair.token0_address).then(res=> {
            if (res.data.status == '1') {
                // console.log('token info: ', res.data.result[0]);
                
                setTokenInfo(res.data.result[0]);
            }
        })
    }, [selectedPair])

    const marketCap = (token) => {
        const tsupply = Number(token.totalSupply).toFixed(2);
        const price = Number(token.tokenPriceUSD);
        return (tsupply * price).toFixed(2);
    }

    return (
        <>
            { tokenInfo ? 
                <div className='bg-gradient rounded p-5'>
                    <div className='font-bold text-xl'>{tokenInfo.symbol}({tokenInfo.tokenName})
                        <a href={'https://bscscan.com/token/' + tokenInfo.contractAddress} target="_blank" className='inline-block align-bottom ml-3' style={{width: '25px'}}><img src={bscscanImg} /></a>
                    </div>
                    <div className='pl-2'>
                        <div className='grid grid-cols-3 mt-2'>
                            <div className='col-span-1'>
                                <div className='font-bold text-white text-lg'>Total supply:</div>
                            </div>

                            <div className='col-span-2'>
                                <div className='text-pink-700 text-xl font-bold'>{numberWithCommas(Number(tokenInfo.totalSupply).toFixed(0))}</div>
                            </div>
                        </div>

                        <div className='grid grid-cols-3 mt-2'>
                            <div className='col-span-1'>
                                <div className='font-bold text-white text-lg'>Market Cap:</div>
                            </div>
                            <div className='col-span-2'>
                                <div className='text-pink-700 text-xl font-bold'>${numberWithCommas(marketCap(tokenInfo))}</div>
                            </div>
                        </div>

                        <div className='pl-2 mt-4'>
                            <a href={'https://bscscan.com/token/' + tokenInfo.contractAddress} target="_blank">
                                <img src={bscscanImg} className='inline-block' style={{width: '20px'}}/>
                                <span className='ml-2 font-bold align-middle'>{tokenInfo.symbol} Transactions</span>
                            </a>
                        </div>

                        <div className='pl-2 mt-4'>
                            <a href={'https://bscscan.com/address/' + tokenInfo.contractAddress + '#code'} target="_blank">
                                <img src={bscscanImg} className='inline-block' style={{width: '20px'}}/>
                                <span className='ml-2 font-bold align-middle'>{tokenInfo.symbol} Contract</span>
                            </a>
                        </div>

                        <div className='pl-2 mt-4'>
                            <a href={'https://bscscan.com/token/' + tokenInfo.contractAddress + '#balances'} target="_blank">
                                <img src={bscscanImg} className='inline-block' style={{width: '20px'}}/>
                                <span className='ml-2 font-bold align-middle'>{tokenInfo.symbol} Holders</span>
                            </a>
                        </div>
                        

                        <div className='mt-4 font-bold text-xl mt-7'>Social Links</div>
                        <div className="grid grid-cols-4 divide-x divide-green-500 px-3 text-center text-blue-900 mb-5">
                            
                            {tokenInfo.website ? <div className='mt-2'><a href={tokenInfo.website} target="_blank">Website</a></div> : ''}
                            {tokenInfo.facebook ? <div className='mt-2'><a href={tokenInfo.facebook} target="_blank">Facebook</a></div> : ''}
                            {tokenInfo.twitter ? <div className='mt-2'><a href={tokenInfo.twitter} target="_blank">Twitter</a></div> : ''}
                            {tokenInfo.linkedin ? <div className='mt-2'><a href={tokenInfo.linkedin} target="_blank">LinkedIn</a></div> : ''}
                            {tokenInfo.telegram ? <div className='mt-2'><a href={tokenInfo.telegram} target="_blank">Telegram</a></div> : ''}
                            {tokenInfo.discord ? <div className='mt-2'><a href={tokenInfo.discord} target="_blank">Discord</a></div> : ''}
                            {tokenInfo.blog ? <div className='mt-2'><a href={tokenInfo.blog} target="_blank">Blog</a></div> : ''}
                            {tokenInfo.slack ? <div className='mt-2'><a href={tokenInfo.slack} target="_blank">Slack</a></div> : ''}
                            {tokenInfo.github ? <div className='mt-2'><a href={tokenInfo.github} target="_blank">Github</a></div> : ''}
                        </div>
                    </div>
                </div>
                
                : ''
            }
        </>
    )
}

export default PriceChartInfo;