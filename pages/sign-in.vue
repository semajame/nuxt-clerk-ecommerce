<template>
  <div class="flex justify-center flex-row-reverse">
    <!-- Correct background image application -->
    <div class="bg-cover bg-center h-screen w-1/2">
      <NuxtImg
        src="https://cdn.prod.website-files.com/63de71ba2edc49d65cb29657/63eaa01ee84f0594af1ba875_02.jpg"
        class="w-full h-full"
        densities="x1"
        format="webp"
      />
    </div>
    <div class="w-1/2 flex justify-center items-center">
      <SignIn />
    </div>
  </div>
</template>

<script setup>
definePageMeta({ middleware: 'guest', layout: 'sign-in-page' })
useHead({
  title: 'Sign In - Lacoste Ecommerce',
  meta: [
    {
      name: 'description',
      content: 'Lacoste Ecommerce sign in page.',
    },
  ],
})
</script>
