
import image4 from '../../icons/icons8-slack-96.png'
import image5 from '../../icons/icons8-zapier-96.png'
import image6 from '../../icons/icons8-telegram-96.png'
import image8 from '../../icons/icons8-discord-144.png'
import image9 from '../../icons/icons8-teams-144.png'
import { MdMarkEmailRead, MdOutlineSms } from 'react-icons/md'
import { VscCallOutgoing } from 'react-icons/vsc'
import { FaSteamSymbol } from 'react-icons/fa'
import { useState } from 'react'

const Social = () => {

    // const [hover, setHover] = useState(false);

    const icons = [

        {
            image: < MdMarkEmailRead key={1} className='mx-auto' />,
            text: "will be"
        },
        {
            image: <MdOutlineSms key={2} className='mx-auto' />,
            text: "will be"
        },
        {
            image: <VscCallOutgoing key={3} className='mx-auto' />,
            text: "will be"
        },
        {
            image: <img key={4} className='h-15 w-15 mx-auto' src={image4} alt="" />,
            text: "will be"
        },
        {
            image: <img key={5} className='h-15 w-15 mx-auto' src={image5} alt="" />,
            text: "will be"
        },
        {
            image: <img key={6} className='h-15 w-15 mx-auto' src={image6} alt="" />,
            text: "will be"
        },
        {
            image: <FaSteamSymbol key={7} className='mx-auto' />,
            text: "will be"
        },
        {
            image: <img key={8} className='h-15 w-15 mx-auto' src={image8} alt="" />,
            text: "will be"
        },
        {
            image: <img key={9} className='h-15 w-15 mx-auto' src={image9} alt="" />,
            text: "will be"
        },

    ]


    return (
        <section className="max-w-[1900px] mx-auto py-[10%] my-16 bg-[#131a26] text-white">

            <div className=' lg:ml-[15vw]'>
                <div className='grid grid-cols-2 gap-[2%] items-center'>
                    {/* social icon grid */}

                    <div className="grid grid-cols-3 gap-[7vh] text-5xl">

                        {
                            icons.map((icon, index) => {
                                return <div key={index} className='group'>

                                    <div className="group-hover:hidden">{icon.image}</div>
                                    <div className="hidden group-hover:block">{icon.text}</div>

                                </div>
                            })
                        }

                    </div>

                    {/* text content  */}

                    <div className='flex flex-col gap-[3vh] justify-start'>
                        {/* title  */}
                        <h2 className='text-4xl font-semibold leading-13'>Downtime <br /> happens. <br />
                            <span className='text-[#3bd671]'>Get notified!</span>
                        </h2>
                        {/* description */}
                        <p className=' font-semibold'>Downtime happens even to the <br /> best of us. But it’s important to <br /> know it before customers are <br />  affected!</p>

                        <button className='text-left underline cursor-pointer text-xl font-semibold hover:text-[#3bd671]'>Show all integrations</button>

                    </div>
                </div>

            </div>
        </section >
    );
};

export default Social;