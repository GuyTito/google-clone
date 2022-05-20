<script setup>
import { SearchIcon } from '@heroicons/vue/outline'
import { ref } from 'vue';


const search_term = ref('')

const emit = defineEmits(['search', ])
const props = defineProps(['search_term',])
search_term.value = props.search_term || ''

function search() {
  emit('search', search_term.value)
}

</script>


<template>
  <form @submit.prevent="search" class="border-2 border-gray-300 dark:border-gray-700 rounded-lg p-2 flex items-center space-x-2 text-gray-400 shadow-md w-full">
    <SearchIcon class="h-5 w-5" />
    <input type="text" v-model="search_term" placeholder="Search anything..." class="w-full placeholder-gray-400 text-black dark:text-gray-100 outline-none dark:bg-inherit">
    <button type="submit" class=""></button>
  </form>
  
</template>


<style lang="postcss" scoped>

</style>