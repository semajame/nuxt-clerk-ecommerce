<template>
  <div class="my-5">
    <div>
      <h1 class="text-3xl font-bold">All Women's Bags & Handbags</h1>
      <p class="my-5 text-black text-sm max-w-[900px]">
        Endlessly elegant, inevitably practical, our women’s handbags, pouches,
        and tote bags always adapt to your dynamic lifestyle. In signature Piqué
        canvas, foldable or reversible? They'll follow you everywhere, any time.
      </p>
    </div>

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
        <p class="text-gray-700 text-xs">PHP {{ bags.price }}</p>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { BAGS } from '~/api/products'
useHead({
  title: 'Bags - Lacoste Ecommerce',
  meta: [
    {
      name: 'description',
      content: 'Lacoste Ecommerce bags market page.',
    },
  ],
})
</script>
