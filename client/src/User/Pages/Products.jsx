import React, { useEffect, useState } from 'react';
import UserCards from '../Components/UserCards';
import axios from 'axios';

export default function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true); // Add loading state

    useEffect(() => {
        axios.get(`http://localhost:8000/api/getallproducts`)
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
                {loading ? (
                    <p>Loading products...</p>
                ) : (
                    products.map((val, key) => (
                        <UserCards key={key} image={val.thumbnail} name={val.productName} url={`/products/${val._id}`} />
                    ))
                )}
            </div>
        </div>
    );
}
