import React from 'react'
import { useSelector } from 'react-redux'
import ProductItem from './ProductItem';

const Cart = () => {

  const itemsArr = useSelector((state) => state.cart);

  return (
    <div className="container">
            <h2 className="text-center my-4">Cart</h2>
            <div className="row">
                {itemsArr.map((item) => {
                    return (
                        <div className="col-md-3" key={item.id}>
                            <ProductItem product={item} />
                        </div>
                    )
                })}
            </div>
        </div>
  )
}

export default Cart
