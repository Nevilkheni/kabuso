import React from 'react';

const Blue = () => {
    const items = [
        {num:'/img/Group1.png', label: 'Embrace the Legacy,  Revolution', data:'Dive into the heart of meme magic at Kabuso, where the spirit of Kabuso, the iconic Shiba Inu behind the Doge meme, lives on. Kabuso inspired millions with her playful glare and unwittingly became a symbol of internet culture. Sadly, Kabuso passed away from leukemia on May 24, 2024, at the age of 18, leaving behind a legacy that continues to influence the digital world.'  ,alt: 'Chart icon' },
        {num:'/img/Group2.png', label: 'What is Kabuso Token?', data:'Kabuso Token is crafted on the innovative BaseChain platform, merging the whimsical world of memes with robust blockchain technology. Designed for meme enthusiasts and serious investors alike, Kabuso Token celebrates the joy that Kabuso brought to the world while offering a tangible asset in the growing crypto economy.', alt: 'Uniswap icon' },
        {num:'/img/Group3.png', label: 'Why Join the Kabuso Community?', data:'Tribute to a Legend: Honor culture.Experience the Joy of KabusoKabuso was more than just a meme; she was a part of our digital family. At Kabuso, we channel her playful spirit into every aspect of our community and initiatives. From engaging social media events to serious discussions about the future of cryptocurrency, Kabuso is at the heart of it all.', alt: 'Telegram icon' },
    ];

    return (<>
        <div className='relative flex justify-center '>
        <img alt='blue' src='/img/bluecloud.png' loading="lazy" />
        <div className=' text-6xl font-bold absolute inset-0 flex items-center text-center flex-col justify-center  text-white  mt-[23px] xxxs:mt-[0]'>
            <span><h1 className='xs:text-5xl xxxs:text-3xl'>WHO WE ARE?</h1></span>
        </div>      
        </div>
        <div className='flex flex-col justify-center '>
            {items.map((item, index) => (
                <div key={index} className="text-center mx-auto">
                    <div className='relative '>
                        <img  alt={item.alt} src='/img/blue.png' loading="lazy" />
                        <div className='absolute inset-0 flex items-center text-center flex-col justify-center  text-white  mt-[23px] sm:mt-0 xxxs:mt-0'>
                            <span className=' xs:w-14 xxxs:w-10'><img src={item.num} alt='num'/></span>
                            <span className='text-3xl my-5 xs:text-sm xs:my-2 xxxs:text-[15px] xxxs:my-0'>{item.label}</span>
                            <spam className='text-2xl w-[40rem] xs:leading-3 sm:text-lg sm:w-[30rem]   xs:text-[10px] xs:w-[22rem] xxxs:text-[10px] xxxs:w-[17rem] xxxs:leading-3'>{item.data}</spam>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        </>
    );
}

export default Blue;
