import { createResource } from "solid-js";
import api from '../api'



export interface Order {
    _id: string,
    customer_id: string,
    type: string,
    description: string,
    status: string
}

export const [orders, { refetch: refetchOrders }] = createResource<Order[]>(() => api.get('/orders').then(res => res.data), { initialValue: [] })


export const getOrder = (id: string) => orders().find(order => order._id === id)



