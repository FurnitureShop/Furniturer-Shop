import FacebookIcon from 'assets/icons/IconFacebook'
import GithubIcon from 'assets/icons/IconGithub'
import React from 'react'

// const members = [
//     {
//         imgUrl: require("../../../assets/images/tuyen.jpg"),
//         name: "Tuyen Pham",
//         role: "Frontend",
//     },
//     {
//         imgUrl: require("../../../assets/images/bao.jpg"),
//         name: "Bao Pham",
//         role: "Backend",
//     }
// ]

const AboutUsTeam = (props) => {
    return (
        <section className={`about-us--team ${props.container}`}>
            <div className='relative py-8 overflow-hidden bg-white'>
                <span className="absolute top-0 right-0 flex flex-col items-end mt-0 -mr-16 opacity-60">
                    <span className="container hidden w-screen h-24 max-w-xs mt-20 transform rounded-full rounded-r-none md:block md:max-w-xs lg:max-w-lg 2xl:max-w-3xl bg-green-50" />
                </span>
                <div className='relative'>
                    <h2 className='uppercase font-josefins max-w-lg mt-5 mb-10 text-4xl font-bold lg:text-5xl'>
                        Our team
                    </h2>
                    <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-32 px-4 md:px-8 md:py-10'>

                        <div className='flex flex-col'>
                            <div className='relative p-5'>
                                <div className="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-blue-50" />
                                <img
                                    className='relative z-20 w-full h-full rounded-full'
                                    src={require("../../../assets/images/tuyen.jpg")}
                                    alt=""
                                />
                            </div>
                            <div className='mt-4 text-center'>
                                <div className='space-y-1 font-josefins text-lg font-medium leading-6'>
                                    <h3 className=''>
                                        Tuyen Pham
                                    </h3>
                                    <p className='text-blue-600'>
                                        Frontend Engineer
                                    </p>
                                </div>
                                <div className='mt-2 flex flex-row justify-center gap-x-3'>
                                    <a
                                        href='#_'
                                        className='text-gray-300 hover:text-gray-400'
                                    >
                                        <FacebookIcon />
                                    </a>
                                    <a
                                        href="#_"
                                        className="text-gray-300 hover:text-gray-400"
                                    >
                                        <GithubIcon />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col'>
                            <div className='relative p-5'>
                                <div className="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-pink-50" />
                                <img
                                    className='relative z-20 w-full h-full rounded-full'
                                    src={require("../../../assets/images/bao.jpg")}
                                    alt=""
                                />
                            </div>
                            <div className='mt-4 text-center'>
                                <div className='space-y-1 font-josefins text-lg font-medium leading-6'>
                                    <h3 className=''>
                                        Bao Pham
                                    </h3>
                                    <p className='text-blue-600'>
                                        Backend Engineer
                                    </p>
                                </div>
                                <div className='mt-2 flex flex-row justify-center gap-x-3'>
                                    <a
                                        href='#_'
                                        className='text-gray-300 hover:text-gray-400'
                                    >
                                        <FacebookIcon />
                                    </a>
                                    <a
                                        href="#_"
                                        className="text-gray-300 hover:text-gray-400"
                                    >
                                        <GithubIcon />
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}

export default AboutUsTeam