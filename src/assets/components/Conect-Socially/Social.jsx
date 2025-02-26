
import image4 from '../../icons/icons8-slack-96.png'
import image5 from '../../icons/icons8-zapier-96.png'
import image6 from '../../icons/icons8-telegram-96.png'
import image8 from '../../icons/icons8-discord-144.png'
import image9 from '../../icons/icons8-teams-144.png'
import { MdMarkEmailRead, MdOutlineSms } from 'react-icons/md'
import { VscCallOutgoing } from 'react-icons/vsc'
import { FaSteamSymbol } from 'react-icons/fa'

const Social = () => {

    // const [hover, setHover] = useState(false);

    const icons = [

        {
            image: < MdMarkEmailRead key={1} className='mx-auto' />,
            text: "Email is the most popular",
            name: "Email"
        },
        {
            image: <MdOutlineSms key={2} className='mx-auto' />,
            text: "Get alerted instantly by SMS",
            name: "SMS"
        },
        {
            image: <VscCallOutgoing key={3} className='mx-auto' />,
            text: "Get an automated voice call",
            name: "CALL"
        },
        {
            image: <img key={4} className='h-15 w-15 mx-auto' src={image4} alt="" />,
            text: "Slack messages are a great way to inform the entire team!",
            name: "slack"
        },
        {
            image: <img key={5} className='h-15 w-15 mx-auto' src={image5} alt="" />,
            text: "Integrate your Zapier account to get alerted right away.",
            name: "Zapier"
        },
        {
            image: <img key={6} className='h-15 w-15 mx-auto' src={image6} alt="" />,
            text: "Telegram messages are great to get quickly alerted.",
            name: "Telegram"
        },
        {
            image: <FaSteamSymbol key={7} className='mx-auto' />,
            text: "For advanced alerting you can setup custom webhooks to your specific system.",
            name: "webhooks"
        },
        {
            image: <img key={8} className='h-15 w-15 mx-auto' src={image8} alt="" />,
            text: "Get important monitor status updates in your Discord messages.",
            name: "Discord"
        },
        {
            image: <img key={9} className='h-15 w-15 mx-auto' src={image9} alt="" />,
            text: "Get notifications inside your MS Teams app to alert everyone in the group.",
            name: "Teams"
        },

    ]

    return (
        <section className=" max-w-[1900px] mx-auto py-[10%] mt-16 bg-[#131a26] text-white">

            <div className=' lg:ml-[15vw]'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-[2%] items-center'>
                    {/* social icon grid */}

                    <div className="grid order-2 lg:order-1  grid-cols-3 gap-[7vh] text-5xl">

                        {
                            icons.map((icon, index) => {
                                return <div key={index} className='group'>

                                    <div className="group-hover:hidden space-y-2">
                                        {icon.image}
                                        <p className='text-sm font-bold text-center'>
                                            {icon.name}
                                        </p>
                                    </div>
                                    <div className="hidden group-hover:block bg-slate-600 rounded-md  text-sm px-4 py-2 text-white">{icon.text}</div>

                                </div>
                            })
                        }

                    </div>

                    {/* text content  */}

                    <div className='order-1 lg:order-2 flex flex-col gap-[3vh] mx-auto lg:justify-start '>
                        {/* title  */}
                        <h2 className='text-4xl text-center lg:text-left font-semibold leading-13'>Downtime  <br /> happens. <br />
                            <span className='text-[#3bd671]'>Get notified!</span>
                        </h2>
                        {/* description */}
                        <p className=' font-semibold'>Downtime happens even to the <br /> best of us. But it’s important to <br /> know it before customers are <br />  affected!</p>

                        <button className='text-left underline cursor-pointer text-xl font-semibold hover:text-[#3bd671]'>Show all integrations</button>

                    </div>
                </div>

            </div>

            {/* overlay green  */}

            {/* <div className='absolute hidden lg:block top-0 right-0 h-full w-1/7 bg-[#3bd671] rounded-l-full rounded-[100%]'>
            </div> */}
        </section >
    );
};

export default Social;