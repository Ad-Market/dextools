import React, {useEffect, useState} from 'react';
import './index.css';
import datafeed from './api/';
import {useTradingviewContext} from '../../context/TradingviewContext';

function getLanguageFromURL() {
  const regex = new RegExp('[\\?&]lang=([^&#]*)');
  const results = regex.exec(window.location.search);
  return results === null
    ? null
    : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

const TradingView = (props) => {
	const options = {...{
		symbol: ':BTC/BNB',
		interval: '15',
		containerId: 'tv_chart_container',
		libraryPath: '/charting_library/',
		chartsStorageUrl: 'https://saveload.tradingview.com',
		chartsStorageApiVersion: '1.1',
		clientId: 'tradingview.com',
		userId: 'public_user_id',
		fullscreen: false,
		autosize: true,
		studiesOverrides: {},
	}, ...props};

    const {tradingViewReady} = useTradingviewContext();

    useEffect(() => {
        // console.log('tradingViewready', tradingViewReady);

        // console.log(options);

        const widgetOptions = {
			debug: false,
			symbol: options.symbol,
			datafeed: datafeed(options.pair_address),
			interval: options.interval,
			theme: 'dark',
			container_id: options.containerId,
			library_path: options.libraryPath,
			locale: getLanguageFromURL() || 'en',
			disabled_features: ['use_localstorage_for_settings'],
			enabled_features: ['study_templates'],
			charts_storage_url: options.chartsStorageUrl,
			charts_storage_api_version: options.chartsStorageApiVersion,
			client_id: options.clientId,
			user_id: options.userId,
			fullscreen: options.fullscreen,
			autosize: options.autosize,
			studies_overrides: options.studiesOverrides,
			overrides: {
				'mainSeriesProperties.showCountdown': true,
				'paneProperties.background': '#131722',
				'paneProperties.vertGridProperties.color': '#363c4e',
				'paneProperties.horzGridProperties.color': '#363c4e',
				'symbolWatermarkProperties.transparency': 90,
				'scalesProperties.textColor': '#AAA',
				'mainSeriesProperties.candleStyle.wickUpColor': '#336854',
				'mainSeriesProperties.candleStyle.wickDownColor': '#7f323f',
			},
		};

        const widget = (window.tvWidget = new window.TradingView.widget(
            widgetOptions
        ));

        widget.onChartReady(() => {
            // console.log('Chart has loaded!');
        });
    }, [props, tradingViewReady])
	
    return <div id={ options.containerId } className={ 'TVChartContainer' }/>;
	
}

export default TradingView;
