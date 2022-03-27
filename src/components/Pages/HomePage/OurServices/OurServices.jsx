import React from 'react'
import './OurServices.scss'

const OurServices = () => {
    return (
        <section className='mb-10 mx-10 lg:mx-0'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8
                            services-container furniturer-container">
                <div className="services-item">
                    <div className="services-item__icon">
                        <img
                            src="https://konsept.qodeinteractive.com/wp-content/uploads/2020/03/Home2_icons-1.png"
                            alt="1st"
                            className="services-item__icon--img"
                        />
                    </div>
                    <div className="services-item__content">
                        <h4>24H Service</h4>
                        <a
                            className="furniturer-link"
                            href="">More info</a>
                    </div>
                </div>
                <div className="services-item">
                    <div className="services-item__icon">
                        <img
                            src="https://konsept.qodeinteractive.com/wp-content/uploads/2020/03/Home2_icons-2.png"
                            alt="2nd"
                            className="services-item__icon--img" />
                    </div>
                    <div className="services-item__content">
                        <h4>Free Returns</h4>
                        <a href="" className="furniturer-link">More info</a>
                    </div>
                </div>
                <div className="services-item">
                    <div className="services-item__icon">
                        <img
                            src="https://konsept.qodeinteractive.com/wp-content/uploads/2020/03/Home2_icons-3.png"
                            alt="3rd"
                            className="services-item__icon--img" />
                    </div>
                    <div className="services-item__content">
                        <h4>Order Tracking</h4>
                        <a href="" className="furniturer-link">More info</a>
                    </div>
                </div>
                <div className="services-item">
                    <div className="services-item__icon">
                        <img
                            src="https://konsept.qodeinteractive.com/wp-content/uploads/2020/03/Home2_icons-4.png"
                            alt=""
                            className="services-item__icon--img" />
                    </div>
                    <div className="services-item__content">
                        <h4>Fast Delivery</h4>
                        <a href="" className="furniturer-link">More info</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurServices