<template>
  <div class="grid grid-cols-4 gap-2">
    <!-- Loop through FISH array -->
    <NuxtLink
      :to="`/bags/${bags.id}`"
      v-for="bags in BAGS"
      :key="bags.id"
      class="my-4"
    >
      <div>
        <NuxtImg
          :src="bags.image"
          format="webp
          "
          densities="x1"
        />
      </div>
      <h2 class="text-xs font-bold">{{ bags.title }}</h2>
      <p class="text-gray-700 text-xs">Price: ${{ bags.price }}</p>
    </NuxtLink>
  </div>
</template>

<script setup>
import { BAGS } from '~/api/products'
</script>
