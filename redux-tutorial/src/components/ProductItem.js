import React from 'react'
import { useDispatch } from 'react-redux'
import { add, remove } from '../redux/slices/CartSlice';

const ProductItem = (props) => {

    const dispatch = useDispatch();

    const handleMinusProduct = (product) => {
        console.log("handleMinusProduct");
        dispatch(remove(product));
    }

    const handlePlusProduct = (product) => {
        console.log("handlePlusProduct");
        dispatch(add(product));
    }

    return (
        <div className="card">
            <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-primary">{props.product.category}</span>
            <img src={props.product.image} className="card-img-top" alt="Error loading" />
            <div className="card-body">
                <h5 className="card-title">{props.product.title}</h5>
                <p className="card-text">{props.product.description}</p>
                <div className="d-flex justify-content-between">
                    <p className="card-text">{props.product.price}</p>
                    <p className="card-text"><b>Rating : </b> {props.product.rating.rate}</p>
                    <p className="card-text"><b>Count : </b> {props.product.rating.count}</p>
                </div>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-primary" onClick={() => handleMinusProduct(props.product)}>-</button>
                    <button  disabled className="btn btn-primary">Add to cart</button>
                    <button className="btn btn-primary" onClick={() => handlePlusProduct(props.product)}>+</button>
                </div>
            </div>
        </div>
    )
}

export default ProductItem
