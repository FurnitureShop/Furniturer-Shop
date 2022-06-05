import React from 'react'

const comments = [
    {
        imgUrl: require("../../../assets/images/binh.jpg"),
        name: "Number 1",
        title: "Work at McDonald",
        quote: "This is a no-brainer if you want to take your business to the next level. If you are looking for the ultimate toolset, this is it!",
    },
    {
        imgUrl: require("../../../assets/images/binh.jpg"),
        name: "Number 1",
        title: "Work at McDonald",
        quote: "This is a no-brainer if you want to take your business to the next level. If you are looking for the ultimate toolset, this is it!",
    },
    {
        imgUrl: require("../../../assets/images/binh.jpg"),
        name: "Number 1",
        title: "Work at McDonald",
        quote: "This is a no-brainer if you want to take your business to the next level. If you are looking for the ultimate toolset, this is it!",
    },
]

const AboutUsComment = (props) => {
    return (
        <section className={`about-us--comment ${props.container}`}>
            <div className='self-center py-12 px-12 bg-white'>
                <div className='flex flex-col items-center'>
                    <p className='relative uppercase font-josefins text-lg font-bold tracking-widest text-purple-500'>
                        Don't just take our word for it
                    </p>
                    <h2 className='relative font-josefins w-full max-w-3xl md:text-center mt-2 md:mt-0 text-5xl font-bold'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            className="absolute right-0 hidden w-12 h-12 -mt-2 -mr-16 text-gray-200 lg:inline-block"
                            viewBox="0 0 975.036 975.036"
                        >
                            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                        </svg>
                        See what others are saying
                    </h2>

                    <div className="block w-full h-0.5 max-w-lg mt-6 bg-purple-100 rounded-full" />

                    <div className='flex flex-col md:flex-row my-6 w-full gap-x-8'>
                        {comments.map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-col mb-12"
                            >
                                <div className='flex flex-row'>
                                    <div className='w-16 h-16 mr-4 overflow-hidden rounded-full bg-gray-200'>
                                        <img
                                            className='object-cover w-full h-full'
                                            src={item.imgUrl}
                                            alt=""
                                        />
                                    </div>
                                    <div className='flex flex-col justify-center'>
                                        <h4 className='font-josefins font-bold text-gray-800'>
                                            {item.name}
                                        </h4>
                                        <p className='font-josefins font-bold   text-gray-600'>
                                            {item.title}
                                        </p>
                                    </div>
                                </div>
                                <blockquote className='font-josefins mt-8 text-lg text-gray-500'>
                                    {item.quote}
                                </blockquote>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}

export default AboutUsComment