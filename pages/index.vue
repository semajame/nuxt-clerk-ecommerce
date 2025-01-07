<template>
  <div>
    <Menu />
    <main
      class="grid grid-cols-[3fr_5fr] gap-x-5 gap-y-1 auto-rows-auto items-end pt-4"
    >
      <div class="w-full h-full">
        <div class="w-full h-full">
          <NuxtImg
            src="https://assets.website-files.com/63de71ba2edc49315eb29625/63de8cdf371ddd8ee10b00e4_colorful-fish-from-the-spieces-symphysodon-discus--AH63L92.webp"
            class="w-full h-full object-cover"
            densities="x1"
            format="webp"
          />
        </div>
      </div>
      <div class="flex flex-col gap-9 justify-between">
        <div class="flex flex-col">
          <div class="px-5 flex flex-col gap-8">
            <h1 class="text-7xl font-semibold tracking-wide">
              The Aquascape Virtuoso
            </h1>
            <div class="flex gap-3 justify-between items-center">
              <p class="text-sm text-black max-w-[500px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut conseetur adipiscing elit labore et
                dolore.
              </p>
              <NuxtLink
                to="/"
                class="bg-black text-white hover:bg-white hover:text-black hover:border hover:border-black py-3 px-10 text-sm border"
              >
                Get Inspired
              </NuxtLink>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-3 gap-2">
          <NuxtLink
            :to="items.to"
            v-for="(items, index) in data"
            :key="index"
            class="relative"
          >
            <NuxtImg
              :src="items.src"
              format="webp"
              densities="x1"
              class="object-cover border-none"
            />
            <div class="absolute z-10 bottom-5 px-3">
              <div class="flex flex-col gap-3">
                <span class="text-white font-bold">{{ items.span }} </span>
                <p class="text-white text-sm">
                  {{ items.paragraph }}
                </p>
                <!-- <span class="text-white text-sm">
                  {{ items.link }}
                </span> -->
                <div class="flex items-center gap-1">
                  <p class="text-white text-sm">Shop Now</p>
                  <Icon
                    name="uil:arrow-right"
                    size="1.4em"
                    class="cursor-pointer text-white"
                  />
                </div>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </main>
  </div>
</template>
<script setup>
const data = ref([
  {
    src: 'https://cdn.prod.website-files.com/63de71ba2edc49d65cb29657/63eaa01ee84f0594af1ba875_02.jpg',

    span: 'Live Fish',
    paragraph:
      'Shop our extensive collection of freshwater fish for tanks of all sizes.',
    link: 'Shop Items >',
    to: '/fish',
  },
  {
    src: 'https://assets.website-files.com/63de71ba2edc49315eb29625/63de8d7cf46ebfc8eb84d897_01.webp',

    span: 'Live Plants',
    paragraph:
      'Shop our large collection of live premium aquatic plants and algaes.',
    link: 'Shop Items >',
    to: '/plants',
  },
  {
    src: 'https://cdn.prod.website-files.com/63de71ba2edc49d65cb29657/63eaa0149ee2aa7daaea1583_03.jpg',

    span: 'Tanks & Accessories',
    paragraph:
      'Quality hand-picked and unique aquarium friendly natural rocks, stones and wood.',
    link: 'Shop Items >',
    to: '/fish',
  },
])
</script>
