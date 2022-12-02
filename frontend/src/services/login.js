import axios from 'axios'
const loginBaseUrl = `http://localhost:8080/api/employee/login`

const login = async (credentials) => {
  const response = await axios.post(loginBaseUrl, credentials)
  return response.data
}

// Export the method as an object so that it can be accessible outside this file as a service
const exportObject = { login }
export default exportObject