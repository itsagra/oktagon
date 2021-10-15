import axios from "axios";

export default axios.create({
  baseURL: "https://client.elevenscore.com/api",
  headers: {
    "x-api-key": "c00e4634-2c9c-11ec-8d3d-0242ac130003",
  },
});
