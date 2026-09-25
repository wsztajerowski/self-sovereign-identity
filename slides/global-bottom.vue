<!-- Slide number in the bottom-right corner, like reveal.js' slideNumber. -->
<template>
  <div
    v-if="$slidev.nav.currentPage > 1"
    class="absolute bottom-3 right-3 px-2 py-0.5 text-xs"
    style="background: rgba(0, 0, 0, 0.4); color: #93a1a1; font-family: Lato, sans-serif"
  >
    {{ $slidev.nav.currentPage }}
  </div>
</template>
