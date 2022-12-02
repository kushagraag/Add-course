import axios from 'axios'
const loginBaseUrl = `http://localhost:8080/api/course/addCourse`

const courseEntry = async (credentials) => {
  console.log("in service course")
  console.log(credentials);
  const response = await axios.post(loginBaseUrl, credentials)
  console.log(response.data + "response data");
  return response.data
}
const exportObject = { courseEntry }
export default exportObject