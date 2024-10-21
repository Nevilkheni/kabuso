import React from 'react'
import Kabuso from './Kabuso'
import Monkey from './Monkey'
import Whitecloud from './Whitecloud'
import Pinkcloud from './Pinkcloud'
import Pink from './Pink'
import Blue from './Blue'

const Display = () => {
    return (
        <>
            <div className='relative'>

                <Kabuso />
                <Monkey />
                <Whitecloud/>
                <Pinkcloud/>
                <Pink/>
                <Blue/>

            </div>
        </>
    )
}

export default Display
