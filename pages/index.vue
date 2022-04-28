<script setup>
const editor = useEditor();
</script>

<template>
<div class="navbar bg-base-100 shadow-md">
  <div class="flex-1">
    <a class="btn btn-ghost normal-case text-xl">BerryDeck</a>
  </div>
</div>

<div class="drawer drawer-mobile drawer-end">
  <input id="main-drawer" type="checkbox" class="drawer-toggle">
  <div class="drawer-content flex flex-col items-center justify-center">
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content text-center">
      <div class="max-w-md">
        <p class="py-6">coming soon? currently editing? {{ editor.open }}</p>
        <div class="btn-group">
          <button class="btn btn-active" @click="!editor.open"><IconsPlus /> New Savefile</button>
          <button class="btn"><IconsFolder /> Open Savefile</button>
        </div>
      </div>
      </div>
    </div>
  </div>

  <div class="drawer-side">
    <label for="main-drawer" class="drawer-overlay"></label>
    <ul class="menu overflow-y-auto w-80 bg-base-100 text-base-content">
      <li class="bordered"><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  </div>
</div>
</template>
