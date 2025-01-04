<template>
  <div class="flex justify-center py-24">
    <SignUp />
  </div>
</template>

<script setup>
definePageMeta({ middleware: 'guest' })
</script>
