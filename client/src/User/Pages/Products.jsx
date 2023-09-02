import React, { useEffect, useState } from 'react';
import UserCards from '../Components/UserCards';
import axios from 'axios';

export default function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true); // Add loading state

    useEffect(() => {
        axios.get('http://localhost:8000/api/get-all-products')
            .then(response => {
                if (response.data && response.data.products) {
                    setProducts(response.data.products);
                } else {
                    console.error('Invalid API response:', response.data);
                }
            })
            .catch(err => {
                console.error('Error fetching data:', err);
            })
            .finally(() => {
                setLoading(false); // Update loading state
            });
    }, []);

    return (
        <div className="container my-5">
            <div className="text-center">
                <h2>Products</h2>
                <small className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum delectus magnam doloribus voluptatibus possimus corrupti aliquid itaque harum debitis ipsa!</small>
            </div>

            <div className="row my-5">
            {products.length > 0 ? (
    product?.map((val, key) => (
        <UserCards key={key} image={val.thumbnail} name={val.productName} url={`/product/${val._id}`} />
    ))
) : (
    <p>No products available.</p>
)}
                {/* {product?.map((val, key) => (
                    <div key={key} className="col-md-4">
                        <div className="card">
                            <img className="card-image" src={val.ProductImage} alt={val.CategoryName} />
                            <h3 className="card-name">{val.CategoryName}</h3>
                        </div>
                    </div>
                ))} */}

            </div>
        </div>
    );
}
