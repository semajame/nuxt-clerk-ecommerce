<template>
  <header class="flex justify-between items-center">
    <div>
      <NuxtLink to="/">
        <NuxtImg
          src="https://cdn.prod.website-files.com/63de71ba2edc49315eb29625/63de868edd106636841b2c2c_habitat-logo.svg"
          alt="Logo Image"
          densities="x1"
          format="webp"
        />
      </NuxtLink>
    </div>
    <nav>
      <ul class="flex gap-2 items-center">
        <li>
          <NuxtLink to="/" class="fontFamily-sans">About</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/">Contact</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/">Shop</NuxtLink>
        </li>
      </ul>
    </nav>
    <div class="flex gap-3 items-center">
      <SignedOut>
        <SignInButton
          class="px-4 py-2 rounded-full bg-[#131316] text-white text-sm font-semibold"
        >
          <Icon name="uil:cart" size="1.3em" class="cursor-pointer" />
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <Icon name="uil:cart" size="1.3em" class="cursor-pointer" />
      </SignedIn>
      <UserButton
        :appearance="{
          elements: {
            userButtonAvatarBox: 'size-6',
          },
        }"
        default-open
      />
    </div>
  </header>
</template>

<script setup></script>
