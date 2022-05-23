<script setup>
import { SearchIcon, XIcon } from '@heroicons/vue/outline'
import { ref } from 'vue';


const search_term = ref('')

const emit = defineEmits(['search', ])
const props = defineProps(['search_term',])
search_term.value = props.search_term || ''

function search() {
  emit('search', search_term.value)
}

const search_input = ref(null)
function clearSearch() {
  search_term.value = ''
  search_input.value.focus()
}

</script>


<template>
  <form @submit.prevent="search" class="border-2 border-gray-300 dark:border-gray-700 rounded-lg p-2 flex items-center space-x-2 text-gray-400 shadow-md w-full">
    
    <input type="text" ref="search_input" v-model="search_term" placeholder="Search anything..." class="w-full placeholder-gray-400 text-black dark:text-gray-100 outline-none dark:bg-inherit">
    <button type="button" v-if="search_term" @click="clearSearch" class="mr-2">
      <XIcon class="h-5 w-5"/>
    </button>
    <div v-if="search_term" class="w-px h-6 bg-gray-400"></div>
    <button type="submit">
      <SearchIcon class="h-5 w-5 text-green-600" />
    </button>
  </form>
  
</template>


<style lang="postcss" scoped>

</style>