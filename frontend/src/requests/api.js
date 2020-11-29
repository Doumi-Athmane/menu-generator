import axios from 'axios'

//export const host = "http://localhost:3500"
export const host = window.location.origin;

export default axios.create({
    baseURL : `${host}/api`
  })