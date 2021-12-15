import React, {useState} from 'react';
import { useBannerContext } from '../../context/BannerContext';
import banner from '../../assets/img/banner.jpg'

const Banner = () => {

    const {showBanner } = useBannerContext();

    return (
        <div className='banner'>
            {showBanner ? 
                <div className="grid grid-cols-6 gap-4">
                    <div className="lg:col-start-2 lg:col-span-4 col-span-6">
                        <a>
                            <img src={banner} />
                        </a>
                    </div>
                </div>
                :
                <></>
            }
        </div>
    )
}

export default Banner;