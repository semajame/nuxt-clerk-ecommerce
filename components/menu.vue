<template>
  <nav class="flex justify-center items-center pb-5">
    <ul class="flex gap-10 items-center">
      <li>
        <NuxtLink to="/bags" class="text-sm tracking-wide">Bags</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/polo" class="text-sm tracking-wide">Polo</NuxtLink>
      </li>

      <!-- <div class="border border-l-gray-400 h-5"></div> -->

      <li>
        <NuxtLink to="/about" class="text-sm tracking-wide">About</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/contacts" class="text-sm tracking-wide"
          >Contact</NuxtLink
        >
      </li>
      <li>
        <NuxtLink to="/" class="text-sm tracking-wide">Shop</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup></script>

<style lang="scss" scoped></style>
