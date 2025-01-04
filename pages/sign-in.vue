<template>
  <div class="flex justify-center py-24">
    <div
      class="bg-url('https://assets.website-files.com/63de71ba2edc49315eb29625/63de8cdf371ddd8ee10b00e4_colorful-fish-from-the-spieces-symphysodon-discus--AH63L92.webp')"
    ></div>
    <div>
      <h1>sign in</h1>
      <SignIn />
    </div>
  </div>
</template>

<script setup>
definePageMeta({ middleware: 'guest' })
</script>
