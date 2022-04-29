<script setup>
defineProps({ id: String })
</script>

<template>
  <div class="drawer-side">
    <label :for="id" class="drawer-overlay"></label>
    <ul class="menu overflow-y-auto w-80 bg-base-100 text-base-content">
      <slot />
    </ul>
  </div>
</template>