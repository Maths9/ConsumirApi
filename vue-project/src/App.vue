<template>
  <div id="card">
    <p v-if="advice">{{ advice }}</p>
    
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// Definindo a propriedade reativa advice e error
const advice = ref('');
const error = ref('');

// Função para buscar um conselho da API usando fetch
const fetchAdvice = async () => {
  
    const response = await fetch('https://api.adviceslip.com/advice');
    if (!response.ok) {
      throw new Error(`Erro ao buscar conselho: ${response.statusText}`);
    }
    const data = await response.json();
    advice.value = data.slip.advice; // Atualizando a propriedade reativa com o conselho
  }
;
// Chamando a função fetchAdvice quando o componente é montado
onMounted(fetchAdvice);
</script>

<style scoped>
#card {
    color:white; 
    background-color: rgb(136, 48, 28);
    padding: 8%;
    position: relative;
    align-content: center;
    text-align: center;
    width: 70%;
    height: 40%;
    margin-left: 15%;
    margin-top: 15%;
    margin: 0, auto;
   
  
}
#card p {

  font-size: xx-large;
  font-weight: 500;
}
</style>


