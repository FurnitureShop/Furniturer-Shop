import { Form } from "antd";
import React from "react";
import "./ProductDetailHolder.scss"
import QuantityControl from "components/Controls/QuantityControl/QuantityControl";
import { useForm } from 'react-hook-form'

const ProductDetailHolder = () => {
    

    return (
        <div className="productdetail">
            <div className="detail--thumbnail">
                <img
                    className="detail--thumbnail__img"
                    src="https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/shoplist6.jpg"
                    alt="This is a thumbnail for product"/>
            </div>

            <div className="detail--info">
                <h1 className="detail--info__name">The name of the Product</h1>
                <p className="detail--info__price">$20.0</p>
                <div className="detail--info__description">
                    <p>Metal meets oak in this three-legged floor lamp designed by the Danish designer Henrik Pedersen. The Outrigger floor lamp has an adjustable shade that makes it easy to light things up in any height or direction.</p>
                </div>
                
                <Form>
                    <div>
                        <QuantityControl />
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default ProductDetailHolder