<template>
  <div v-if="user && session">
    <Dialog>
      <DialogTrigger>
        <Icon name="uil:cart" size="1.5em" class="cursor-pointer" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle class="tracking-wide">
            Cart
            <span class="text-gray-500 text-xs"
              >{{ user?.firstName }} {{ user?.lastName }}</span
            >
          </DialogTitle>
          <DialogDescription class="tracking-wide mt-5">
            Your Cart is Empty.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  </div>
</template>

<script setup>
defineProps({
  user: Object,
  session: Object,
})
</script>
