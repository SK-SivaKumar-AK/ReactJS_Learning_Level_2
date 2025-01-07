import React, { Fragment, useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { useSearchParams } from 'react-router-dom';

function Home() {

    const [products , setProducts] = useState([]);
    const[searchParams , setSearchParams] = useSearchParams();

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URI}/products?${searchParams}`).then((res) => {
            return res.json();
        }).then((jsonresponse) => {
            setProducts(jsonresponse.allProducts);
        })
    } , [searchParams])
    return (
        <Fragment>
            

            <h1 id="products_heading">Latest Products</h1>

            <section id="products" className="container mt-5">
                <div className="row">
                    {
                        products.map((product) => {
                            return <ProductCard product={product} key={product._id}/>
                        })
                    }
                </div>
            </section>

            
        </Fragment>
    )
}

export default Home;
