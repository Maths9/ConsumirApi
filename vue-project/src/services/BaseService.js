// src/services/BaseService.ts
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.adviceslip.com',  // Utiliza o prefixo /api para utilizar o proxy configurado
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
