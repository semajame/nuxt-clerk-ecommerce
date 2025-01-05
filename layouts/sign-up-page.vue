<template>
  <div>
    <!-- Correct background image application -->
    <slot />
  </div>
</template>

<script setup>
definePageMeta({ middleware: 'guest' })
</script>
