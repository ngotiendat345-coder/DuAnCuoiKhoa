import axios from "axios";
const axiosClient = axios.create({
  baseURL: "https://movie0706.cybersoft.edu.vn/api/",
  headers: {
    "content-type": "application/json",
  },
});

// axiosClient.interceptors.request.use(async (config) => {
//   const token = JSON.parse(localStorage.getItem("accessToken"));
//   //let config;
//   if (token) {
//     config = {
//       headers: {
//         Authorization: "Bearer " + token,
//       },
//     };
//     console.log(config);
//   }
//   return config;
// });

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }

    return response;
  },
  (error) => {
    console.log(error);
    // Handle errors
    throw error;
  }
);

export default axiosClient;
