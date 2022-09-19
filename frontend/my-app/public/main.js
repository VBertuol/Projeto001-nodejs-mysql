let form = document.getElementById("form");
let name = document.getElementById("campo_nome");
let email = document.getElementById("campo_email");
let ID = document.getElementById("campo_ID");
let enviar = document.getElementById("enviar");

export const axiosInstance = axios.create({ baseUrl: 'http://localhost:8080' });
