import React, { useEffect } from 'react'
import ShippingAddress from './ShippingAddress/ShippingAddress'

const Order = () => {
    // useEffect(() => {
    //     fetch("https://furniture-shop-be.herokuapp.com/api/product?fbclid=IwAR2q-iMX1G-NLrusLqZcZk8NERQHIW8E1GjAilfAr-93EQzeNscCpJOmFhk")
    //         .then((respone) => {
    //             console.log(respone)
    //         })
    // }, [])

    return (
        <section
            className='furniturer-container grid grid-cols-3 gap-x-4'
            style={{
                marginTop: "70px",
                marginBottom: "70px"
            }}>
            <div className='col-span-3 order-2 md:order-1 md:col-span-2'>
                <ShippingAddress />
            </div>

            <div className='col-span-3 order-1 md:order-2 md:col-span-1'>
                <h1>part 2</h1>
            </div>
        </section>
    )
}

export default Order