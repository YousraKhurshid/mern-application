import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import AboutUs from './AboutUs';

export default function CategoriesSection() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products/categories').then((json) => setCategories(json.data));
  }, []);

  return (
    <div className="container">
      <div className="my-5 text-center">
        <h1>Product Categories</h1>
        <p className="text-secondary">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur eum saepe ipsum quo nam, expedita
          facere est alias incidunt fuga mollitia cupiditate rem id quos aperiam quisquam laboriosam deleniti hic.
        </p>
      </div>
      <div className="row">
        {categories.map((val, key) => (
          <div className="col-md-4 my-3" key={key}>
            <Link className="text-decoration-none" to={`/products/category/${val}`}>
              <Card className="card">
                {/* Add the style to make the image responsive */}
                <div className="card-image">
                  <Card.Img src={val.image} alt={val.title} className="img-fluid" />
                </div>
                <Card.Body>
                  <Card.Title style={{ maxWidth: '100%', height: 'auto' }}>
                    {key + 1} - {val.toUpperCase().replace('-', ' ')}
                  </Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </div>
        ))}
      </div>
      <AboutUs/>
    </div>
  );
}
