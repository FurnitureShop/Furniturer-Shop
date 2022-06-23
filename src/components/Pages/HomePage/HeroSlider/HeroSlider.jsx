import React, {useState} from "react";
import './HeroSlider.scss'
// import { Button } from "antd";
import { Carousel } from "antd";
import { Link } from "react-router-dom";

const sliderItem = [
    {
        type: 'Authentic',
        title: 'Made with love',
        description:
            'Imagine the feeling of a home designed to fit your lifestyle and reflect your personality. The benefits are clear. When you combine a pleasing colour scheme; free-flowing and functional space; perfect mood lighting and clever storage, you get pleasurable home-experiences and a happier life.',
        imageUrl: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/03/Home1_rev1.jpg',
        path: '/',
        backgroundColor: 'bg-slider_bg-orange'
    },
    {
        type: 'Timeless',
        title: 'Interior designs',
        description: 'Konsept was born in Vietnam in 2021, and is today a premium retail lifestyle brand. We design, produce and sell a range of contemporary Danish design furniture , accessories and lighting for the living room, dining room, bedroom, home-office and outdoor spaces.',
        imageUrl: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/03/Home1_rev1.jpg',
        path: '/',
        backgroundColor: 'bg-slider_bg-blue'
    },
    {
        type: 'Tailored',
        title: 'Classic interiors',
        description: 'Today, the company continues to address new lifestyles with the creation of complete, harmonious interior decor solutions that embody the best contemporary design for all areas of the home.',
        imageUrl: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/03/Home1_rev1.jpg',
        path: '/',
        backgroundColor: 'bg-slider_bg-yellow'
    },
    {
        type: 'Authentic',
        title: 'Made with love',
        description: 'Imagine the feeling of a home designed to fit your lifestyle and reflect your personality. The benefits are clear. When you combine a pleasing colour scheme; free-flowing and functional space; perfect mood lighting and clever storage, you get pleasurable home-experiences and a happier life.',
        imageUrl: 'https://konsept.qodeinteractive.com/wp-content/uploads/2020/03/Home1_rev1.jpg',
        path: '/',
        backgroundColor: 'bg-slider_bg-blue'
    }
]

const HeroSlider = () => {
    const [active, setActive] = useState(true);

    const carouselSetting = {
        autoplay: true,
        useTransform: true,
        useCSS: true,
        fade: true,
        autoplaySpeed: 4000,
        beforeChange: (current, next) => setActive(false),
        afterChange: (current) => setActive(true)
    }

    return (
        <section className="heroslider font-poppins">
            <Carousel
                {...carouselSetting}>
                {sliderItem.map((x, index) => <HeroSliderItem item={x} isActive={active} key={index}/>)}
            </Carousel>
        </section>
    )
}

const HeroSliderItem = (props) => {
    return (
        <div className={`heroslider-container ${props.item.backgroundColor} ${props.isActive ? "active" : " "}`}>
            <div className="heroslider-container__item furniturer-container">
                <div className="heroslider-container__item__content">
                    <h2 className="type font-handwriter">{props.item.type}</h2>
                    <h2 className="title">{props.item.title}</h2>
                    <div className="description">{props.item.description}</div>
                    <div className="readmore">
                        <Link to="/products">
                            <span>Read more</span>
                        </Link>
                    </div>
                </div>
                <div className="heroslider-container__item__thumbnail">
                    <img src={props.item.imageUrl} alt="" />
                </div>
            </div>
        </div>
    )
}

export default HeroSlider;