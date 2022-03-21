import React from "react";
import "./CoverImages.scss"

const coverItems = [
    {
        src: "https://konsept.qodeinteractive.com/wp-content/uploads/sb-instagram-feed-images/82176465_256624332109571_1159199082029158434_nlow.jpg",
        alt: "1st"
    },
    {
        src: "https://konsept.qodeinteractive.com/wp-content/uploads/sb-instagram-feed-images/101332623_1394947904026208_5844355112229304732_nlow.jpg",
        alt: "2nd"
    },
    {
        src: "https://konsept.qodeinteractive.com/wp-content/uploads/sb-instagram-feed-images/101118979_2927420374039488_3155069194091268435_nlow.jpg",
        alt: "3rd"
    },
    {
        src: "https://konsept.qodeinteractive.com/wp-content/uploads/sb-instagram-feed-images/101519408_245446196878121_8730808137382785977_nlow.jpg",
        alt: "4th"
    },
    {
        src: "https://konsept.qodeinteractive.com/wp-content/uploads/sb-instagram-feed-images/101430495_279912596726245_815325566694950172_nlow.jpg",
        alt: "5th"
    },
    {
        src: "https://konsept.qodeinteractive.com/wp-content/uploads/sb-instagram-feed-images/101645520_616307002570705_5986228114882814629_nlow.jpg",
        alt: "6th"
    },
]

const CoverImages = () => {
    return (
        <section className="coverimages-container">
            <div className="coverimages-list grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-1.5">
                {coverItems.map((item) => {
                        return (
                            <div className="coverimages-list__item" key={item.alt}>
                                <img
                                    src={item.src}
                                    alt={item.alt}/>
                            </div>
                        )
                    }
                )}
            </div>
        </section>
    )
}

export default CoverImages