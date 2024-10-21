/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';

const Whitecloud = () => {
    const items = [
        { label: 'CHART', alt: 'Chart icon', href: 'https://dexscreener.com/base/0x888cba473d3627372585aed15e4bedb0d3b684da' },
        { label: 'UNISWAP', alt: 'Uniswap icon', href:'https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0x846A6Ed3704031C181b7563c5c02Fe9254c31504'},
        { label: 'TELEGRAM', alt: 'Telegram icon',href:'https://t.me/+GwvS-H2y90Q2ZTQx' },
        { label: 'TWITTER', alt: 'Twitter icon' ,href:'https://x.com/harambasetoken'}
    ];

    return (
        <div className='flex flex-row justify-end space-x-4 md:flex-wrap md:justify-center'>
            {items.map((item, index) => (
                <div key={index} className="text-center">
                    <div className='relative'>
                        <img alt={item.alt} src='/img/whitecloude.png' loading="lazy" />
                        <div className='absolute inset-0 flex items-center justify-center font-bold text-[#080574]    mix-blend-color-burn text-[24px] font- mt-[23px]'>
                            <a href={item.href} target='_blank'>
                                <span>{item.label}</span>

                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Whitecloud;
