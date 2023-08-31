import React, { useReducer } from 'react'
import { Card } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';


export default function Login() {
  
  const counterCallback = (state, action) => {
    switch (action.type) {
      case "SET_EMAIL":
        return {...state, email: action.payload.email }

        default:
          return state;
        }
  
    }
  
    const data = {
       count: 0, 
       email: "hhf"
    }
    const [state, dispatch] = useReducer(counterCallback, data)
  
  return (

      <>
      <div className='d-flex justify-content-center my-5'>
      <Card  style={{ width: '40vw', height: 'auto' }}>
      <div className="m-2 text-center">
        <h1 style={{ fontFamily: 'Amazon Ember'}} >LogIn</h1>

      </div>
  <div className="mb-3 m-5">
    <label htmlFor="exampleFormControlInput1" className="form-label">
      Email address
    </label>
    <input
      type="email"
      className="form-control"
      id="exampleFormControlInput1"
      placeholder="name@example.com"
      value={state.email}
      onChange={(e) => dispatch({
        type: "SET_EMAIL",
        payload: {
          email: e.target.value
        }
      })}
    />
  </div>
   <div className="mx-5">
   <Form.Label htmlFor="inputPassword5">Password</Form.Label>
      <Form.Control
        type="password"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
      />
      <Form.Text id="passwordHelpBlock" muted>
        Your password must be 8-20 characters long, contain letters and numbers,
        and must not contain spaces, special characters, or emoji.
      </Form.Text>
   </div>
   <button className='m-5 btn btn-success'>Login</button>
  <div className="mx-5">
        <Link>
        <p className="text-secondary">
          Forgot Password
        </p>
        </Link>
  </div>
  <div className="mx-5">
        <p className="text-secondary">
        By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
        </p>
  </div>
      </Card>
      </div>
      <div className='d-flex justify-content-center my-5'>
        <Link to="/Signup">
        <button className='m-2 btn btn-warning'>Create a New Account</button>
        </Link>
      </div>
      
</>
  )
}
