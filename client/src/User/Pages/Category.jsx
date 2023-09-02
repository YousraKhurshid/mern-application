import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './card.css'; 

export default function Category() {
    const [category, setcategory] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/api/get-all-categories')
            .then(json => {
                if (json.data.category) {
                    setcategory(json.data.category);
                }
            })
            .catch(err => alert(err.message));
    }, []);
    

    return (
        <div className="container my-5">
            <div className="text-center">
                <h2>Category</h2>
                <small className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum delectus magnam doloribus voluptatibus possimus corrupti aliquid itaque harum debitis ipsa!</small>
            </div>
    
            <div className="row my-5">
                {category?.map((val, key) => (
                    <div key={key} className="col-md-4">
                        <div className="card">
                            <img className="card-image" src={val.CategoryImage} alt={val.CategoryName} />
                            <h3 className="card-name">{val.CategoryName}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
    
}
