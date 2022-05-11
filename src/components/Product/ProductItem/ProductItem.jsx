import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./ProductItem.scss"

const ProductItem = ({ id }) => {

    const navigate = useNavigate();
    const handleNavigation = () => {
        navigate(`/products/${id}`)
    }

    return (
        <div className='product'>
            <div className='product__thumbnail'
                onClick={handleNavigation}>
                <img
                    className="product__thumbnail-image"
                    src='https://konsept.qodeinteractive.com/wp-content/uploads/2020/04/shoplist6.jpg'
                    alt="thumbnail"
                />
                <div className='product__thumbnail-overlay'>

                    <div className='product__thumbnail-overlay-addcart'>
                        <a  href="/"
                            className='furniturer-link text--italic'>
                            Read more
                        </a>
                    </div>
                </div>
            </div>

            <div className='product__content'>
                <div className='product__content__info'>
                    <h5 className='product__content__info-name'>
                        Chair demo
                    </h5>
                    <div className='product__content__info-category'>
                        <span>
                            <a href="/">Home demo</a>
                        </span>
                    </div>
                </div>
                <div className='product__content__price'>
                    $20.00
                </div>
            </div>
        </div>
    )
}

export default ProductItem;