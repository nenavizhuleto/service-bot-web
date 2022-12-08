import { createResource } from "solid-js"
import api from '../api'

export interface User {
    _id: string,
    id: string,
    username: string,
    fullname: string,
    role: string,
    language: string
}

export const [users] = createResource<User[]>(() => api.get('/users').then(res => res.data), { initialValue: []})
