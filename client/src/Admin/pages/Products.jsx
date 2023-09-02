import React, { useEffect, useState } from 'react'
import ProductModal from '../components/ProductModal'
import axios from 'axios'
import { AiOutlineDelete, AiOutlineEdit } from react-icons/ai
import { AppRoute } from '../../App'

export default function Products() {
     const [Products, setProduct] = useState([])
     useEffect (()=> {
         axios.get('http://localhost:8000/api/getallproducts')
                .then(json => setProduct(json.data.products))
                .catch(err => console.log(err.message))
     })

    let config = {
        method: 'delete',
        url: 'http://localhost:8000/api/delete-product',
        data: payload
    };
    axios(config).then(json => console.log (json.data)).catch(err => console.log(err.message))




    return (
        <div className="container">
            <div className="d-flex justify-content-between align-items-center bg-primary p-2 my-3 rounded">
                <span className='fs-4 fw-bold text-white'>Products</span>
                <ProductModal />
            </div>

            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Image</th>
                            <th scope="col">Name</th>
                            <th scope="col">Product</th>
                            <th scope="col">Brand</th>
                            <th scope="col">Price</th>
                            <th scope="col">Description</th>




                        </tr>
                    </thead>
                    <tbody>
                        {/* {
                            Product.map((val, key) =>
                                <tr key={key}>
                                    <th scope="row">{val._id}</th>
                                    <td>{val.ProductName}</td>
                                    <td><img src={val.ProductImage} className='img-fluid' style={{ height: '5vh', objectFit: 'contain' }} alt="" srcSet="" /></td>

                                </tr>)
                        } */}



                    </tbody>
                </table>

            </div>
        </div>
    )
}
