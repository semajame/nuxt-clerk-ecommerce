<template>
  <div v-if="user && session">
    <Dialog>
      <DialogTrigger>
        <Icon name="uil:cart" size="1.5em" class="cursor-pointer" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle class="tracking-wide">
            Cart {{ user.firstName }} {{ user.lastName }}
          </DialogTitle>
          <DialogDescription class="tracking-wide">
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  </div>
</template>

<script setup>
const { user } = useUser() // Nuxt composable for user management
const { session } = useSession() // Nuxt composable for session management
</script>
