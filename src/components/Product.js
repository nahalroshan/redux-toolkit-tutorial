import React from 'react'
import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { useDispatch } from 'react-redux'
import { add } from '../store/cartSlice'
function Product () {
    const dispatch = useDispatch();
  const [products, getProducts] = useState([])

  useEffect(() => {
    //api calling
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(result => getProducts(result))
  }, [])

  const addToCart = (product)=>{
    //dispatch the action
    dispatch(add(product))

  }

  const cards = products.map(product => (
    <div className='col-md-3'>
      <Card
        key={product.id}
        style={{ width: '20rem', borderRadius: '15px', height: '100',padding:"5px",display:"flex", }}
      >
        <div className='text-center'>
          <Card.Img
            
            src={product.image}
            style={{ width: '100px', height: '120px', borderRadius: 45 }}
          />
        </div>

        <Card.Body>
          <Card.Title style={{ fontWeight: '20px' }}>
            {product.title}
          </Card.Title>
          <Card.Text>INR:{product.price}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant='primary'onClick={()=>{
            addToCart(product)
          }} >Add to cart</Button>
        </Card.Footer>
      </Card>
    </div>
  ))

  return (
    <div>
      <h2>Product Dashboard</h2>
      <div className='row'>{cards}</div>
    </div>
  )
}

export default Product
