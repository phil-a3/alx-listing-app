import React from 'react'
import AlxIcon from '@/public/assets/icons/AlxIcon'
import Button from '@/components/common/Button'

function Header() {
    return (
        <header className='grid grid-rows-2 gap-4'>
            <div className='grid grid-cols-3 gap-3'>
                <AlxIcon />
                <input className='w-{25%}'></input>
                <div className='grid grid-cols-3 gap-3'>
                    <Button></Button>
                    <Button></Button>
                </div>

            </div>
            <div></div>
        </header>
    )
}

export default Header