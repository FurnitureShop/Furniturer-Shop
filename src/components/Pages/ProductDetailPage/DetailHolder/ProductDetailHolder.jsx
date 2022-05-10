import { Form } from "antd";
import React from "react";
import "./ProductDetailHolder.scss"
import QuantityControl from "components/Controls/QuantityControl/QuantityControl";
import { useForm } from 'react-hook-form'

const tags = [
    "bedroom",
    "decorative"
]

const ProductDetailHolder = () => {


    return (
        <div className="productdetail">
            <div className="detail--thumbnail">
                <img
                    className="detail--thumbnail__img"
                    src="https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/shoplist6.jpg"
                    alt="This is a thumbnail for product" />
            </div>

            <div className="detail--info flex flex-col gap-y-7">
                <div>
                    <h1 className="detail--info__name">The name of the Product</h1>
                    <p className="detail--info__price">$20.0</p>
                </div>
                <div className="detail--info__description">
                    <p>Metal meets oak in this three-legged floor lamp designed by the Danish designer Henrik Pedersen. The Outrigger floor lamp has an adjustable shade that makes it easy to light things up in any height or direction.</p>
                </div>

                <Form className="detail--info__add gap-x-6">
                    <div>
                        <QuantityControl />
                    </div>

                    <div className="detail--info__add-submit">
                        <a href="">
                            <span>Add to cart</span>
                        </a>
                    </div>
                </Form>

                <div className="detail--info__tags">
                    <span className="detail--info__tags-label">Categories: </span>
                    <span className="detail--info__tags-tag">
                        {tags.map((item, index) => {
                            return (
                                <span key={index}>
                                    {index !== 0 ? ", " : " "}
                                    <a>{item}</a>
                                </span>
                            )
                        })}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailHolder