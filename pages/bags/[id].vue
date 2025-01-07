<template>
  <div class="my-5">
    <NuxtLink to="/bags" class="text-blue-500 underline"
      >Back to Bags List</NuxtLink
    >
    <div v-if="bags">
      <h1 class="text-4xl font-bold">{{ bags.id }}</h1>
      <NuxtImg
        :src="bags.image"
        format="webp"
        densities="x1"
        class="my-4"
        alt="Bag image"
      />
      <p class="text-gray-700 text-lg">PHP{{ bags.price }}</p>
      <p class="text-gray-600">{{ bags.description }}</p>
    </div>
    <div v-else>
      <h1 class="text-2xl text-red-500">Bag not found</h1>
    </div>
  </div>
</template>

<script setup>
import { BAGS } from '~/api/products'

const route = useRoute()
const bags = BAGS.find((item) => item.id === Number(route.params.id))

console.log('Route ID:', route.params.id)
console.log('Bags:', bags)
</script>
