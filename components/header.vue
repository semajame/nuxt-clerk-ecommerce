<template>
  <header
    class="flex justify-between items-center py-3 px-6 md:px-20 fixed left-0 right-0 bg-white z-10"
  >
    <div>
      <NuxtLink to="/">
        <NuxtImg
          src="https://lacoste.com.ph/media/logo/websites/1/Initial_Lacoste_Logo-svg_2.svg"
          alt="Logo Image"
          densities="x1"
          format="webp"
          width="262"
          height="43"
          class="logo"
        />
      </NuxtLink>
    </div>

    <!-- Cart and Menu Buttons for Mobile -->
    <div class="flex items-center gap-4 md:hidden z-50">
      <SignedOut>
        <SignInButton
          class="px-4 py-2 rounded-full bg-[#131316] text-white text-sm font-semibold"
        >
          <Icon name="uil:cart" size="1.4em" class="cursor-pointer" />
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <Dialog>
          <DialogTrigger>
            <Icon
              name="uil:cart"
              size="1.4em"
              class="cursor-pointer text-gray-800"
            />
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle
                >Cart{{ user.value.firstName }}
                {{ user.value.lastName }}</DialogTitle
              >
              <DialogDescription>
                Make changes to your profile here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </SignedIn>

      <button
        @click="isMenuOpen = !isMenuOpen"
        class="relative"
        aria-label="Toggle Menu"
      >
        <Icon
          :name="isMenuOpen ? 'heroicons:x-mark' : 'heroicons:bars-3'"
          size="1.8em"
        />
      </button>
    </div>

    <!-- Desktop Navigation -->
    <nav class="hidden md:block w-1/2">
      <div class="relative w-full items-center">
        <Input
          id="search"
          type="text"
          placeholder="Find a product..."
          class="pl-10 rounded-full bg-gray-200 outline-none"
        />
        <span
          class="absolute start-0 inset-y-0 flex items-center justify-center px-2"
        >
          <Search class="size-5 text-muted-foreground" />
        </span>
      </div>
      <!-- <ul class="flex gap-8 items-center">
        <li>
          <NuxtLink to="/fish" class="font-semibold text-sm tracking-wide"
            >Fish</NuxtLink
          >
        </li>
        <li>
          <NuxtLink to="/plants" class="font-semibold text-sm tracking-wide"
            >Plants</NuxtLink
          >
        </li>

        <div class="border border-l-gray-400 h-5"></div>

        <li>
          <NuxtLink to="/about" class="font-semibold text-sm tracking-wide"
            >About</NuxtLink
          >
        </li>
        <li>
          <NuxtLink to="/contacts" class="font-semibold text-sm tracking-wide"
            >Contact</NuxtLink
          >
        </li>
        <li>
          <NuxtLink to="/" class="font-semibold text-sm tracking-wide"
            >Shop</NuxtLink
          >
        </li>
      </ul> -->
    </nav>

    <!-- Mobile Navigation Overlay -->
    <div v-if="isMenuOpen" class="fixed inset-0 bg-white z-40 md:hidden">
      <nav class="h-full flex items-center justify-center">
        <ul class="flex flex-col gap-8 text-center">
          <li v-for="(link, index) in navLinks" :key="index">
            <NuxtLink
              @click="isMenuOpen = false"
              :to="link.path"
              class="font-semibold text-lg tracking-wide"
            >
              {{ link.name }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>

    <!-- Desktop Cart and User Button -->
    <div class="hidden md:flex gap-5 items-center">
      <SignedOut>
        <SignInButton
          class="px-4 py-2 rounded-full text-white text-sm font-semibold cursor-pointer"
        >
          <NuxtImg src="/cart.svg" densities="x1" />
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserDetails :user="user" :session="session" />
      </SignedIn>

      <UserButton
        :appearance="{
          elements: {
            userButtonAvatarBox: 'size-8',
          },
        }"
        default-open
        showName
      />
    </div>
  </header>
</template>

<script setup>
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-vue-next'

const { user } = useUser()
const { session } = useSession()

const isMenuOpen = ref(false)

const navLinks = [
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contacts' },
  { name: 'Shop', path: '/' },
]

// Close mobile menu when route changes
watch(
  () => useRoute().fullPath,
  () => {
    isMenuOpen.value = false
  }
)

// Prevent scrolling when mobile menu is open
watchEffect(() => {
  if (process.client) {
    document.body.style.overflow = isMenuOpen.value ? 'hidden' : ''
  }
})
</script>
