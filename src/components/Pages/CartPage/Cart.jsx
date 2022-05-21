import React from "react";
import CartList from "./CartItem/CartList";

let CoverImg = require("../../../assets/images/cart-cover.jpg")

const Cart = () => {

    return (
        <section className="CartPage">
            <div
                className="w-full bg-cover bg-center h-96 mb-4"
                style={{ backgroundImage: `url(${CoverImg})` }}>
                <div className="flex justify-center items-center h-full">
                    <div className="">
                        <h1
                            className="text-black text-2xl font-josefins font-bold tracking-widest uppercase md:text-4xl"
                        >YOUR CART</h1>
                    </div>
                </div>
            </div>

            <div>
                <CartList />
            </div>
        </section>
    )
}

export default Cart