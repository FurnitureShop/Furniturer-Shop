import { Button } from 'antd'
import React from 'react'
import "./ContactForm.scss"

const ContactForm = (props) => {
    return (
        <section id='contact-form' className={`${props.container}`}>
            <form
                className='main-form'
            >
                <label className="label-name">
                    <input name="from_name" type="text" placeholder="Name" autoComplete="new-password" />
                </label>
                <label className="label-email">
                    <input name="reply_to" type="email" placeholder="Email" />
                </label>
                <label className="label-message">
                    <textarea name="message" placeholder="Message"></textarea>
                </label>
                <Button className='submit-button'>Send</Button>
            </form>

            <aside className='aside-description mt-8 md:mt-0'>
                {/* <span className="contact-us-title">Contact Us</span> */}
                <h2 className="contact-title">GOT ANY QUESTIONS?</h2>
                <p className="contact-description">
                    Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat
                    consequat auctor eu in elit.
                </p>
                <div className="description-address">
                    <div className="store-address-container">
                        <h4 className="title-store">STORE</h4>
                        <a className="space-y-2 text-base text-konsept-gray" href="tel:+1123456789">
                            +321 421 4331
                        </a>
                        <br />
                        <a
                            className="space-y-1 text-base text-konsept-gray"
                            href="https://www.google.com/maps/search/1316+Abbot+Kinney+Blvd.+Copenhagen+CA+90291/@34.9860999,-100.5448383,4z?hl"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            1316 Birmingham Avenue.
                        </a>
                        <br />
                        <a
                            className="space-y-1 text-base text-konsept-gray"
                            href="https://www.google.com/maps/search/1316+Abbot+Kinney+Blvd.+Copenhagen+CA+90291/@34.9860999,-100.5448383,4z?hl"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Manchester City UK 38310
                        </a>
                    </div>
                    <div className="store-address-container">
                        <h4 className="title-store">OFFICE</h4>
                        <a className="space-y-2 text-base text-konsept-gray" href="tel:+1123456789">
                            +112 345 6789
                        </a>
                        <br />
                        <a
                            className="space-y-1 text-base text-konsept-gray"
                            href="https://www.google.com/maps/search/1316+Abbot+Kinney+Blvd.+Copenhagen+CA+90291/@34.9860999,-100.5448383,4z?hl"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            1316 Abbot Kinney Blvd.
                        </a>
                        <br />
                        <a
                            className="space-y-1 text-base text-konsept-gray"
                            href="https://www.google.com/maps/search/1316+Abbot+Kinney+Blvd.+Copenhagen+CA+90291/@34.9860999,-100.5448383,4z?hl"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Copenhagen CA 90291
                        </a>
                    </div>
                </div>
            </aside>
        </section>
    )
}

export default ContactForm