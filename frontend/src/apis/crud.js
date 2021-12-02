import axios from "axios";

const baseUrl = "http://localhost:5000";

export function buscarruta(nombreRuta, callback) {
  axios.get(baseUrl + "/ruta/"+nombreRuta).then((res) => {
    callback(res.data);
  });
}