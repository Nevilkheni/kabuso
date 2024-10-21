import React from 'react'
import Display from './Display'
import Header from './Header'

const Bg = () => {
    return (
        <>
            <div className='bg-cloud w-full min-h-screen bg-no-repeat bg-cover bg-fixed'>
                <Header />
                
                <div>
                    <Display />
                </div>
            </div>
        </>
    )
}

export default Bg
