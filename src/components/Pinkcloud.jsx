import React from 'react'

const Pinkcloud = () => {
    const items = [
        { label: 'CA :0x846A6Ed3704031C181b7563c5c02Fe9254c31504', alt: 'Chart icon' },

    ];

    return (
        <div className='flex flex-row justify-end  '>
            {items.map((item, index) => (
                <div key={index} className="text-center">
                    <div className='relative'>
                        <img alt={item.alt} src='/img/pink.png' loading="lazy" />
                        <div className='absolute inset-0 flex  justify-center font-bold  text-[#080574]    mix-blend-color-burn text-[24px] mb-[80px]  items-end md:text-lg md:mb-[50px] xs:text-[10px]  xs:mb-[30px] xxxs:mb-[20px]'>
                            <span>{item.label}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Pinkcloud
