import React from "react";
import { useState } from "react";
import job_icon from '../../assets/jobs.svg'
import message_icon from '../../assets/message.svg'
import payments_icon from '../../assets/coins-hand.svg'
import bell_icon from '../../assets/bellicon.svg'
import atlassian1 from '../../assets/Rectangle5.svg'
import arrow from '../../assets/chevron-down.svg'
import Image from "next/image";
export default function Navbar() {
    const [activeButton, setActiveButton] = useState('Jobs');

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };

    const getButtonStyle = (buttonName) => ({
        backgroundColor: activeButton === buttonName ? 'rgba(220, 74, 45, 1)' : 'initial',
        borderRadius: activeButton === buttonName ? '30px' : '0px',
        color: activeButton === buttonName ? 'white' : '#B0B0B0',
        padding: activeButton === buttonName ? '6px 10px' : '0px',
    });

    return (<>
        < div className={'flex flex-row items-center justify-between ml-10 mt-3 mb-3 '}>
            <button className={'bg-gray-200 text-orange-600 font-medium px-6 py-2'}>
                Logo
            </button>
            <div className={'sm:flex hidden  border rounded-full 1px px-2 py-1 gap-2 items-center md:gap-20'}>
                <button style={getButtonStyle('Jobs')}
                    onClick={() => handleButtonClick('Jobs')} className={' flex gap-2 text-lg'}>
                    <Image src={job_icon} w={20} h={18} alt='lkj' />
                    Jobs
                </button>
                <button style={getButtonStyle('Messages')}
                    onClick={() => handleButtonClick('Messages')} className={' flex gap-2 text-lg'}>
                    <Image src={message_icon} w={20} h={18} alt='lkj' />
                    Messages
                </button>
                <button style={getButtonStyle('Payments')}
                    onClick={() => handleButtonClick('Payments')} className={' flex gap-2 text-lg mr-1'}>
                    <Image src={payments_icon} w={20} h={18} alt='lkj' />
                    Payments
                </button>

            </div>
            <div className="flex gap-4 ">
                <Image src={bell_icon} w={32} h={32} alt='lkj' />
                <div className="flex gap-1 mr-2">
                    <Image src={atlassian1} w={24} h={24} alt='lkj' />
                    <Image src={arrow} w={24} h={24} alt='lkj' />
                </div>

            </div>
        </div>
        <hr></hr>
    </>
    )
}