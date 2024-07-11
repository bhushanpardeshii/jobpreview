import React from 'react'
import Image from 'next/image';
import trash from '../../assets/trash.svg'
import edit from '../../assets/edit.svg'
import { JOB_INFO } from '@/constants/jobs.constants'
export default function Sidebar() {
    return (
        <div className={'flex flex-col mr-3 border-l-2'}>

            <div className={'flex flex-row mt-8 ml-2 gap-3 '}>
                <button className={'border rounded-md bg-[#FEF4F2] flex items-center gap-2 text-orange-600  pl-7 pr-7 p-1'}>
                    <Image src={trash} w={24} h={24} alt='lkjf' />
                    Delete job
                </button>
                <button className={'border rounded-md bg-[#DC4A2D] flex items-center gap-2 text-white  pl-7 pr-7 p-1'}>
                    <Image src={edit} w={24} h={24} alt='lkjf' />
                    Edit Job
                </button>
            </div>

            <div>
                {JOB_INFO.map((item, index) => {
                    return (
                        <div key={index} className="flex flex-row justify-between mr-4 ml-4 text-[#4F4F4F] border-b-2 items-center">
                            <div className="flex flex-row gap-3 p-6 items-center">
                                <Image src={item.icon} w={24} h={24} alt='lkjf' />
                                <div> {item.label}</div>
                            </div>
                            <div className='font-semibold'>{item.value}</div>

                        </div>)
                })}


            </div>


        </div>
    )
}
