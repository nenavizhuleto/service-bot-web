import { Component } from 'solid-js'
import { orders } from '../store/orders'
import { users } from '../store/users'

const Home: Component = () => {
  return (
    <div class='vstack gap-3'>
      <h1>Total orders count: {orders().length}</h1>
      <h1>Total users count: {users().length}</h1>
    </div>
  )
}

export default Home
