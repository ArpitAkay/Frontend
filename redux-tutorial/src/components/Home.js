import React, { useEffect, useState } from 'react'
import ProductItem from './ProductItem';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/slices/ProductSlice';

const Home = () => {

    // const [products, setProducts] = useState([]);

    const dispatch = useDispatch();

    const {data:products, status} = useSelector((state) => state.product);

    // const fetchProducts = async () => {
    //     let res = await fetch("https://fakestoreapi.com/products");
    //     let data = await res.json();
    //     console.log(data);
    //     setProducts(data);
    // }

    useEffect(() => {
        // fetchProducts();
        dispatch(fetchProducts());
    }, [])

    return (
        <div className="container">
            <h2 className="text-center my-4">Products</h2>
            <div className="row">
                {products.map((product) => {
                    return (
                        <div className="col-md-3" key={product.id}>
                            <ProductItem product={product} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Home
