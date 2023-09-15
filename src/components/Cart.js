import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { remove } from '../store/cartSlice'
function Cart() {
  const cartDetails = useSelector(state=>state.cart)
  const dispatch = useDispatch();
  const removeFromCart=(id)=>{
    dispatch(remove(id))
  }
  const cards = cartDetails.map(product => (
    <div className='col-md-12'>
      <Card
        key={product.id}
        style={{ width: '18rem', borderRadius: '20px', height: '100' }}
      >
        <div className='text-center'>
          <Card.Img
            variant='top'
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
          <Button variant='danger'onClick={()=>{
           removeFromCart(product.id)
          }} >Remove</Button>
        </Card.Footer>
      </Card>
    </div>
  ))

  return (
    <div>
     <h2>Cart</h2>
     <div>
      {cards}
     </div>
    </div>
  )
}

export default Cart