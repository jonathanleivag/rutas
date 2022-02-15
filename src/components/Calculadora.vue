<script lang="ts" setup>
import { ref, watch } from 'vue'

const num1 = ref<number>(0)
const num2 = ref<number>(0)
const result = ref<number>(0)

watch([num1, num2], () => {
  result.value = num1.value + num2.value
})
</script>
<template>
  <h1>Calculadora</h1>
  <input type="number" name="num1" id="num1" v-model="num1" />
  <p>+</p>
  <input type="number" name="num2" id="num2" v-model="num2" />
  <p>=</p>
  <p>{{ result }}</p>
</template>
