import React, { useEffect, useState } from 'react'
import GuestCards from './GuestCards'
import axios from 'axios'

export default function Category() {
    const [category, setcategory] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/api/get-all-categories')
            .then(json => {
                if (json.data.categories) {
                    setcategory(json.data.categories);
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
                {categories && categories.length > 0 ? (
                    categories.map((val, key) => <GuestCards key={key} image={val.CategoryImage} name={val.CategoryName} />)
                ) : (
                    <p>No categories available.</p>
                )}
            </div>
        </div>
    );
    
}
