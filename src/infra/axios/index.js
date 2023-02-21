import axios from "axios";
import Swal from "sweetalert2"

// env name API_PATH
const instance = axios.create({
  baseURL: process.env.API_PATH+"/api/",
  timeout: 1000 * 60 * 3,
})

// try {
//   const tk = globalThis?.localStorage?.getItem('ACCESS_TOKEN')
//   instance.defaults.headers.common['Authorization'] = 'Bearer ' + tk
// }catch(error){
//   Swal.fire({
//     title: "Error!",
//     text: error.response.data.message,
//     icon: "warning",
//     confirmButtonColor: "#0e2f58",
//   });
// }

export default instance;
