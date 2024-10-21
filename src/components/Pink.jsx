import React from 'react';

const Pink = () => {
    return (
        <div className="max-w-8xl mx-auto px-4 py-12 md:px-0 md:py-0  flex flex-col  items-center justify-center ">

            <div className='flex flex-row xl:flex-col'>
                <div className='flex flex-col'>
                    <div className="relative mb-10 ">
                        <img src="/img/pinkcloud.png" alt="Our Vision Cloud" className="w-auto  xs:w-full " />
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
                            <h2 className="text-3xl font-semibold mt-20 xs:text-lg xxxs:text-sm">Our Vision</h2>
                            <p className=" text-2xl md:text-lg px-20 my-5 xs:text-sm xs:w-[20rem] xs:mb-20 xs:my-2 xs:px-0 xxxs:text-[10px] xxxs:w-[15rem] xxxs:leading-3">
                                We envision a world where memes do more than entertain; they empower and inspire. Kabuso is dedicated to transforming the fleeting joy of meme culture into lasting impact through our token, community engagement, and support for animal welfare initiatives.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-center gap-8">

                        <div className="relative">
                            <img src="/img/pinkcloud.png" alt="Stay Connected Cloud" className="w-auto " />
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
                                <h2 className="text-3xl font-semibold mt-20 xs:text-lg xs:mt-24 xxxs:text-sm">Stay Connected</h2>
                                <p className="text-2xl md:text-lg px-20 my-5 xs:text-sm xs:w-[20rem] xs:mb-20 xs:my-2 xs:px-0 xxxs:text-[10px] xxxs:w-[15rem] xxxs:leading-3">
                                    Keep up with all things Kabuso by following us on social media platforms and joining our community on Telegram. Stay informed, get involved, and share the journey with fellow enthusiasts who believe in the power of memes and the impact of community.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='items-center mt-52 xl:mt-0'>
                    <div className="relative">
                        <img src="/img/pinkcloud.png" alt="Start Your Journey Cloud " className="w-auto" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
                            <h2 className="text-3xl font-semibold mt-20 xs:text-lg xs:mt-28 xxxs:text-sm">Start Your Journey with Kabuso</h2>
                            <p className="text-2xl md:text-lg px-20 my-5 xs:text-sm xs:w-[20rem] xs:mb-20 xs:my-2 xs:px-0 xxxs:text-[10px] xxxs:w-[15rem] xxxs:leading-3">
                                Ready to be a part of something bigger? Join us at Kabuso to trade, connect, and explore the potential of cryptocurrencies inspired by the most beloved figures in meme history. Learn more about how you can get involved, make a difference, and keep the memory of Kabuso alive.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Pink;
