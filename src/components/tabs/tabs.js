import React from 'react'

export default function Tabs() {
    return (
        < >
            <div className='sm:flex hidden flex-row gap-20 ml-20 my-3 text-xl text-[#888888]'>
                <h2 className='text-[#DC4A2D] font-semibold underline underline-offset-[20px]'>Job preview</h2>
                <h2>Applicants</h2>
                <h2>Match</h2>
                <h2>Messages</h2>
            </div>
            <hr></hr>
        </>
    )
}
