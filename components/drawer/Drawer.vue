<script setup>
defineProps({ id: String })
</script>

<template>
  <div class="drawer drawer-mobile drawer-end">
    <input :id="id" type="checkbox" class="drawer-toggle">
    <slot />
  </div>
</template>