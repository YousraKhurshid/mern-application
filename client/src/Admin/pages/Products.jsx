import React, { useEffect, useState } from 'react';
import ProductModal from '../components/ProductModal';
import axios from 'axios';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { AppRoute } from '../../App';

export default function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch products when the component mounts
        axios.get(`${AppRoute}api/get-all-products`)
            .then(response => {
                // Update the state with the fetched products
                setProducts(response.data.products);
            })
            .catch(err => console.error(err));
    }, []); // Empty dependency array to run this effect only once

    const deleteProduct = (_id) => {
        console.log(_id);
        const payload = { _id };

        let config = {
            method: 'delete',
            url: '/api/delete-products',
            data: payload,
        };

        axios(config)
            .then(response => console.log(response.data))
            .catch(err => console.error(err));
    };

    return (
        <div className="container">
            <div className="d-flex justify-content-between align-items-center bg-warning p-2 my-3 rounded">
                <span className='fs-4 fw-bold text-white'>Products</span>
                <ProductModal />
            </div>

            <div className="container">
                <table className="table align-middle">
                    <thead>
                        <tr>
                            <th scope="col">Image</th>
                            <th scope="col">Name</th>
                            <th scope="col">Product</th>
                            <th scope="col">Brand</th>
                            <th scope="col">Price</th>
                            <th scope="col">Description</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product._id}>
                                <td>
                                    <img
                                        src={product.thumbnail}
                                        className="img-fluid rounded-circle border border-secondary"
                                        style={{ height: '10vh', aspectRatio: 1 / 1, objectFit: 'contain' }}
                                        alt=""
                                    />
                                </td>
                                <td>{product.productName}</td>
                                <td>{product.category}</td>
                                <td>{product.brands}</td>
                                <td>{product.price}</td>
                                <td>
                                    {product.description.length < 20
                                        ? product.description
                                        : product.description.substring(0, 20) + '...'}
                                </td>
                                <td className="d-flex justify-content-between">
                                    <button className="btn btn-dark" onClick={() => deleteProduct(product._id)}>
                                        <AiOutlineDelete />
                                    </button>
                                    <button className="btn btn-dark">
                                        <AiOutlineEdit />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
