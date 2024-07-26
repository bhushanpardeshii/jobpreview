import rect_icon from '../../assets/Rectangle-43.svg'
import location from '../../assets/location.svg'
import coins from '../../assets/coins-stacked-03.svg'
import figma from '../../assets/figma.svg'
import adobe from '../../assets/adobe.svg'
import adobe2 from '../../assets/adobe2.svg'
import Image from 'next/image';
export default function Job() {
    return (
        <>
            <div className={''}>

                <div className={'flex flex-col gap-6 mt-9 mb-9 ml-20'}>
                    <div className={'flex flex-row gap-3 items-center'}>
                        <h1 className={'font-semibold text-4xl text-[#3D3D3D]'}>Senior Product Designer</h1>
                        <div className='w-1 h-1 rounded-full mt-1 ml-1 bg-[#D1D1D1]'></div>
                        <p className={'mt-2 text-[#888888]'}>posted 2 days ago Open</p>
                        <button className='flex items-center  rounded-full px-3 h-6  bg-[#ECFDF3] text-[#067647] border border-[#ABEFC6]'>
                            <div className='w-2 h-2 rounded-full mr-1 bg-[#17B26A]'></div>
                            <p className='text-xs'>Open</p>
                        </button>
                    </div>
                    <div className={'flex flex-row gap-4 items-center'}>
                        <div className='flex gap-2'>
                            <Image src={location} w={24} h={24} alt='lkj' />
                            <h3 className={'text-[#5D5D5D]'}> Delaware,USA</h3>
                        </div>
                        <div className='w-1 h-1 rounded-full  ml-1 bg-[#D1D1D1]'></div>
                        <div className='flex gap-2'>
                            <Image src={coins} w={24} h={24} alt='lkj' />
                            <p className={'text-[#5D5D5D]'}>$300k-$400k</p>
                        </div>
                    </div>
                </div>

                <hr></hr>
                <div className={'ml-20 mt-8 mb-8 flex flex-row gap-16'}>
                    <div className={'flex flex-col gap-2'}>
                        <h1 className={'text-[#6E6D6D] text-sm font-medium'}>Skills Required</h1>
                        <p className={'text-[#344054] flex p-1 text-xs border gap-1 rounded-md w-16 text-center'}> <Image src={figma} w={24} h={24} alt='lkj' />Figma</p>
                        <p className={'text-[#344054]  flex p-1 text-xs border gap-1 rounded-md w-30 text-center'}> <Image src={adobe} w={24} h={24} alt='lkj' />Adobe Illustartor</p>
                        <p className={'text-[#344054]  flex p-1 text-xs border gap-1 rounded-md w-22 text-center'}><Image src={adobe2} w={24} h={24} alt='lkj' /> Adobe XD</p>

                    </div>
                    <div>
                        <h1 className={'text-[#6E6D6D] text-sm font-medium'}>Preferred Language</h1>
                        <p className={'font-semibold text-[#3D3D3D]'}>English</p>
                    </div>
                    <div>
                        <h1 className={'text-[#6E6D6D] text-sm font-medium'}>Type</h1>
                        <p className={'font-semibold text-[#3D3D3D]'}>Full Time</p>
                    </div>
                    <div className='sm:flex hidden'>
                        <h1 className={'text-[#6E6D6D] text-sm font-medium'}>Years of Experience</h1>
                        <p className={'font-semibold text-[#3D3D3D]'}>3+ Years of Experience </p>
                    </div>

                </div>
                <hr></hr>
                <div className={'ml-20 mt-8 mb-10 text-[#3D3D3D] text-base font-medium flex flex-col gap-2'}>
                    <h1 className={'text-[#6E6D6D] text-sm '}>About the job</h1>
                    <ol className={'list-decimal list-inside'}>
                        <li> Handle the UI/UX research design</li>
                        <li>  Work on researching on latest web applications designs & trends</li>
                        <li>  Work on conceptualizing and visualizing</li>
                        <li>  Work on creating graphics content and other graphic related works</li>
                    </ol>
                    <p>Benefits:</p>
                    <ul className={'list-disc list-inside pl-3'}>
                        <li>Health insurance</li>
                        <li>Provident Fund</li>
                    </ul>
                    <p>Schedule:</p>
                    <ul className={'list-disc list-inside pl-3'}>
                        <li>Day Shift</li>
                    </ul>
                    <p>Supplemental pay types:</p>
                    <ul className={'list-disc list-inside pl-3'}>
                        <li>Performance bonus</li>
                        <li>Yearly bonus</li>
                    </ul>
                    <p>Work Location: In person</p>
                </div>
                <hr></hr>
                <div className={'ml-20 mt-10 mb-4'}>
                    <div className='flex gap-3 mb-4  items-center'>

                        <Image src={rect_icon} w={24} h={24} alt='lkj' />
                        <h1 className={'text-xl text-[#4F4F4F] font-medium'}>Atlassian</h1>
                    </div>
                    <div className={'flex gap-12 '}>
                        <div className={'flex flex-col gap-4'}>
                            <div>
                                <h1 className={'text-[#6E6D6D] font-medium text-sm'}>Company Size</h1>
                                <p className={'text-[#3D3D3D] font-medium text-base '}>1k-2k Employees</p>
                            </div>
                            <div>
                                <h1 className={'text-[#6E6D6D] font-medium text-sm'}>Sector</h1>
                                <p className={'text-[#3D3D3D] font-medium text-base '}>Information Technology,Infrastructure</p>
                            </div>
                            <div>
                                <h1 className={'text-[#6E6D6D] font-medium text-sm'}>Founded In</h1>
                                <p className={'text-[#3D3D3D] font-medium text-base '}>2019</p>
                            </div>
                        </div>
                        <div className={'flex flex-col gap-4'}>
                            <div>
                                <h1 className={'text-[#6E6D6D] font-medium text-sm'}>Type</h1>
                                <p className={'text-[#3D3D3D] font-medium text-base '}>Private</p>
                            </div>
                            <div>
                                <h1 className={'text-[#6E6D6D] font-medium text-sm'}>Funding</h1>
                                <p className={'text-[#3D3D3D] font-medium text-base '}>Bootstrapped</p>
                            </div>
                            <div>
                                <h1 className={'text-[#6E6D6D] font-medium text-sm'}>Founded By</h1>
                                <p className={'text-[#3D3D3D] font-medium text-base '}>Scott Farquhar,Mike Cannon-Brookes</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}