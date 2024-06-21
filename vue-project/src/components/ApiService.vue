
<template>
  <div id="card">
    <p v-if="advice">{{ advice }}</p>
    <p v-if="error">{{ error }}</p>
    <v-btn variant="outlined" id='btn' @click="fetchAdvice"> Gerar frase</v-btn>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from '../services/BaseService';


const advice = ref<string>('');
const error = ref<string>('');

async function fetchAdvice() {
  try {
    const response = await axios.get('/advice');
    console.log('Response:', response);
    console.log('Response data:', response.data);
    if (response.data && response.data.slip) {
      advice.value = response.data.slip.advice;
    } else {
      throw new Error('Unexpected response format');
    }
  } catch (err) {
    console.log('Error:', err);
    error.value = `Erro ao buscar conselho: ${err.message}`;
  }
}

onMounted(fetchAdvice);
</script>

<style scoped>
#card {
  color: white;
  background-color: darkslategray;
  padding: 6%;
  position: relative;
  align-content: center;
  text-align: center;
  width: 60%;
  height: 30%;
  margin-left: 18%;
  margin-top: 10%;
  margin: 0 auto;
}

#card p {
  font-size: x-large;
  font-weight: 200;
}

#btn {
  margin-top: 4%;
  background-color: rgb(0, 0, 0);
  font-size: x-small;
}
</style>
