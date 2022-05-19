<script setup>
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)

</script>


<template>
  <header>
    <button @click="toggleDark()">
      <span class="ml-2">{{ isDark ? 'Dark' : 'Light' }}</span>
    </button>
  </header>
  
</template>


<style lang="postcss" scoped>

</style>