import React, { useEffect, useState, useReducer } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ReactStars from 'react-stars'
import Swal from 'sweetalert2' 
import ImageSection from '../Components/ImageSection'


export default function ProductsPage() {

  
  const initialData= {
    counter: 1,
    username : "" 

  }
  const myCallback = (state,action) => {
    switch (action.type) {
      case "INCREMENT_COUNTER":
            return {...state, counter : state.counter++ }
      case "DECREMENT_COUNTER":
            return {...state, counter : state.counter-- }
      case "SET_USER":
            return{...state, [action.payload.name] : action.payload.value}
        default:
          return state;

    }
  }
const[state,dispatch] = useReducer(myCallback,initialData)
       
     const {productID} = useParams()
     const [product, setProduct] = useState({})
     const [review, setReview] = useState("")
     const [ratingstar,setratingStar] = useState(0)
     const [productQuantity, setproductQuantity] = useState(1)

     const ratingChanged = (newRating) => {
     setratingStar(newRating)
     }
     const submitReview = () => {
       const payload = {
       productID : productID,
       review : review,
       rating : ratingstar
       }
       console.log(payload) 
       Swal.fire({
        title: 'Successfully Submitted!',
        text: 'Thanks for reviewing our product',
        icon: 'success',
        confirmButtonText: 'Continue Shopping'
       })
  
  
       setReview('')
       setratingStar(0)
  
      }

      const addtoCart = () => {

        const payload = {
          ...product,
          productQuantity,
          totalPrice : product.price * productQuantity
        }
        console.log(payload)
        
        Swal.fire({
          title: 'Added to Cart',
          text: 'Check your Cart for Check Out',
          icon: 'success',
          confirmButtonText: 'Continue Shopping'
         })
      }
 useEffect(()=>{
    axios.get(`https://dummyjson.com/products/${productID}`).then(json=> setProduct(json.data))

  }, [])
    return (
    <div className="container">
        <div className="text-center my-5">
            <h1>{product.title} - {product.price}$</h1>
            <p className="text-secondary">{product.description}</p>
            <div className='d-flex justify-content-center'>
            <ReactStars
               count={5}
               size={24}        
               edit={false}
               value={product.rating}
               color2={'#ffd700'} 
            />
            </div>

            
        </div>
        {/* <div className="text-center my-3">
        <button className="btn btn-dark mx-3" disabled={productQuantity > 1 ? false : true} onClick={() => setproductQuantity(productQuantity - 1)}>-</button>
            {productQuantity}
            <button className="btn btn-dark mx-3" onClick={() => setproductQuantity(productQuantity + 1)}>+</button>
        </div> */}
        <div className="text-center my-3">
        <button className="btn btn-dark mx-3" disabled={state.counter > 1 ? false : true} onClick={ 
          () => dispatch (
            {
              type : "DECREMENT_COUNTER"

          }
          )
        }>-</button>
            {/* {productQuantity} */}
            {state.counter}
            <button className="btn btn-dark mx-3" onClick={ 
          () => dispatch (
            {
              type : "INCREMENT_COUNTER"

          }
          )
        }>+</button>
            <div>
              <input type='text' value={state.username} name= "username"
               onChange={(e) => dispatch({
                type : 'SET_USER',
                payload : { 
                  "name" : e.target.name,
                  "value" : e.target.value
                }
              })}
              />
             
              {state.username}
            </div>

        </div>
        <div className='text-center my-3'>
        <button className='btn btn-dark' onClick={addtoCart}> Add to Cart </button>
        </div>
        <div className="row">
          <div className="col-md-6">
          {
              product?.images?.length > 0 && <ImageSection images={product.images} />
          }
          </div>
          <div className="col-md-6">
            <div className="container">
              <div className='mb-5'>
              <h1 className="text-center">Review Us</h1>
              <p className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro </p>
              </div>
              <div>
              <div className="form-floating">
                  <textarea
                  className="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea"
                  defaultValue={review}
                  onChange={(e) => setReview(e.target.value)}
                  />
                  <label htmlFor="floatingTextarea">Comments</label>
              </div>

              <div className='mt-3'>
                
                Rate Us :
                <div className="d-flex align-items-center"> 
                <ReactStars
                     count={5}
                     size={24}
                     value={ratingstar}      
                     onChange={ratingChanged}
                     color2={'#ffd700'} 
                />
                <span className='ms-3'> ({ratingstar}) </span>
                </div>

              </div>
              <button className='my-3 btn btn-dark' onClick={submitReview} >Submit Review</button>
              </div>

            </div>
          </div>
        </div>
    </div>
  )
}
