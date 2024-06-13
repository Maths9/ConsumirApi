<template>
  <div id="card">
    <p v-if="advice">{{ advice }}</p>
    <v-btn variant="outlined" id='btn' @click="fetchAdvice"> Gerar frase</v-btn>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const advice = ref('');
const error = ref('');

async function fetchAdvice() {

    const response = await axios.get('https://api.adviceslip.com/advice');
    advice.value = response.data.slip.advice;

}

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
