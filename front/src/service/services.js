import axios from 'axios'

// const TOKEN = ''
/* request apis */
export const getRequest = async (url) => {
  /* const config = {
    headers: { Authorization: `Bearer ${TOKEN}` }
  } */
  const request = await axios.get(`http://localhost:3001/${url}`)
  return request.data
}

export const createRequest = async (endpoint, data) => {
  /* const config = {
    headers: { Authorization: `Bearer ${TOKEN}` }
  } */
  const request = await axios.post(`http://localhost:3001/${endpoint}`, data)
  return request.data
}

export const deleteRequest = async (endpoint, data) => {
  /* const config = {
    headers: { Authorization: `Bearer ${TOKEN}` },
    data
  } */
  const request = await axios.delete(`http://localhost:3001/${endpoint}`)
  return request.data
}

export const updateRequest = async (endpoint, data) => {
  /* const config = {
    headers: { Authorization: `Bearer ${TOKEN}` }
  } */
  const request = await axios.put(`http://localhost:3001/${endpoint}`, data)
  return request.data
}

export const patchRequest = async (endpoint, data) => {
  /* const config = {
    headers: { Authorization: `Bearer ${TOKEN}` }
  } */
  const request = await axios.patch(`http://localhost:3001/${endpoint}`, data)
  return request.data
}
