<template>
  <div class="container mx-auto">
    <Header />
    <div>
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script setup></script>

<style>
:root {
  --font-geist-sans: 'GeistVF', sans-serif;
  --font-geist-mono: 'GeistMonoVF', monospace;
}

.background {
  overflow: hidden;
  background: #f8f8f8;
  background-image: repeating-linear-gradient(
      0deg,
      transparent,
      transparent 11px,
      #f2f2f2 11px,
      #f2f2f2 12px
    ),
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 11px,
      #f2f2f2 11px,
      #f2f2f2 12px
    );
}

@font-face {
  font-family: 'GeistVF';
  src: url('/fonts/GeistVF.woff') format('woff');
  font-display: swap;
}

@font-face {
  font-family: 'GeistMonoVF';
  src: url('/fonts/GeistMonoVF.woff') format('woff');
  font-display: swap;
}

.mask {
  mask-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 40px,
    rgba(0, 0, 0, 1) calc(100% - 20px),
    rgba(0, 0, 0, 0) 100%
  );
}
</style>
