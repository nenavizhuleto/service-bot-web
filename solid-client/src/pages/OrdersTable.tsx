import { Component, For } from 'solid-js'
import { A } from '@solidjs/router'
import { orders, Order, refetchOrders, updateOrder } from '../store/orders'
import { User } from '../store/users'

const OrderTableRow: Component<{ order: Order; index: () => number }> = ({
  order,
  index,
}) => {
  const handleAction = async (action: string) => {
    if (action == 'accept') {
      await updateOrder({ ...order, status: 'accepted' })
      refetchOrders()
    } else {
      await updateOrder({ ...order, status: 'declined' })
      refetchOrders()
    }
  }

  return (
    <tr>
      <td>{index() + 1}</td>
      <td>
        <A class='btn btn-secondary w-100' href={`/orders/${order._id}`}>
          {order._id}
        </A>
      </td>
      <td>
        <A class='btn btn-secondary w-100' href={`/users/${order.customer_id}`}>
          {order.customer_id}
        </A>
      </td>
      <td class='text-truncate'>{order.type}</td>
      <td class='text-truncate'>{order.description}</td>
      <td>{order.status}</td>
      <td>
        {order.status == 'new' && (
          <div class='btn-group w-100' role='group'>
            <button
              type='button'
              class='btn btn-success'
              onclick={() => handleAction('accept')}
            >
              Accept
            </button>
            <button
              type='button'
              class='btn btn-danger'
              onclick={() => handleAction('decline')}
            >
              Decline
            </button>
          </div>
        )}
      </td>
    </tr>
  )
}

const OrdersTable: Component<{ user: (() => User) | null }> = ({ user }) => {
  return (
    <>
      <div>
        <button class={`btn btn-primary`} onClick={() => refetchOrders()}>
          Refresh
        </button>
      </div>
      <hr />
      <table class='table table-dark'>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>ID</th>
            <th scope='col'>User</th>
            <th scope='col'>Type</th>
            <th scope='col'>Description</th>
            <th scope='col'>Status</th>
            <th scope='col'>Action</th>
          </tr>
        </thead>
        <tbody>
          <For
            each={
              user == null
                ? orders()
                : orders().filter((order) => order.customer_id == user().id)
            }
          >
            {(order, index) => <OrderTableRow order={order} index={index} />}
          </For>
        </tbody>
      </table>
    </>
  )
}

export default OrdersTable
