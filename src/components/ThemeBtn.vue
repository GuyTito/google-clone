<script setup>
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)

</script>


<template>
  <div>
    <input @click="toggleDark()" id="toggle" type="checkbox" class="hidden"/>
    <label for="toggle" class="w-9 h-5 flex items-center bg-gray-200 dark:bg-gray-500 rounded-full p-1 cursor-pointer duration-300 ease-in-out">
      <div class="bg-white dark:bg-black w-4 h-4 rounded-full transform dark:translate-x-3 duration-300 ease-in-out"></div>
    </label>
  </div>
  
</template>


<style lang="postcss" scoped>

</style>