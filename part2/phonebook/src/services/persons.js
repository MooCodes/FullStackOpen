import axios from 'axios'
const baseUrl = (process.env.NODE_ENV === 'development') ? 'https://damp-plateau-97459.herokuapp.com/api/persons' : 'api/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(res => res.data)
}

const create = newPerson => {
    const request = axios.post(baseUrl, newPerson)
    return request.then(res => res.data)
}

const update = (id, newPerson) => {
    const request = axios.put(`${baseUrl}/${id}`, newPerson)
    return request.then(res => res.data)
}

const deletePerson = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(res => res.data)
}

export default { getAll, create, update, deletePerson }