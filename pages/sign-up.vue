<template>
  <div class="flex justify-between h-screen">
    <!-- Correct background image application -->
    <div class="bg-cover bg-center w-1/2">
      <NuxtImg
        src="https://assets.website-files.com/63de71ba2edc49315eb29625/63de8cdf371ddd8ee10b00e4_colorful-fish-from-the-spieces-symphysodon-discus--AH63L92.webp"
        class="w-full h-full"
        densities="x1"
        format="webp"
      />
    </div>
    <div class="flex justify-center items-center overflow-hidden w-1/2">
      <SignUp />
    </div>
  </div>
</template>

<script setup>
definePageMeta({ middleware: 'guest', layout: 'sign-up-page' })
useHead({
  title: 'Sign Up - Lacoste Ecommerce',
  meta: [
    {
      name: 'description',
      content: 'Lacoste Ecommerce sign up page.',
    },
  ],
})
</script>
