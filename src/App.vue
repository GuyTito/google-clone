<script setup>
import { ref } from 'vue';
import { SearchIcon } from '@heroicons/vue/outline'

const search_term = ref('')
const data = ref(null)
async function search() {
  if (search_term) {
    const options = {
      method: 'GET',
      headers: {
        'X-User-Agent': 'desktop',
        'X-Proxy-Location': 'EU',
        'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
        'X-RapidAPI-Key': import.meta.env.VITE_API_KEY
      }
    }

    try {
      const res = await fetch(`https://google-search3.p.rapidapi.com/api/v1/search/q=${search_term.value}`, options)
      data.value = await res.json()
    } catch (error) {
      console.error(error.msg)
    }
  }
  
}

</script>


<template>
  <div class="min-h-screen bg-gray-200 flex justify-center items-center">
    <form @submit.prevent="search" class="bg-white rounded-lg p-4 flex items-center space-x-2 text-gray-400 mx-5 w-full sm:max-w-xl">
      <SearchIcon class="h-5 w-5" />
      <input type="text" v-model="search_term" placeholder="Search anything..." class="w-full placeholder-gray-400 text-black outline-none">
      <button type="submit" class=""></button>
    </form>

    <pre v-if="data" class="mt-5 text-white">
      {{ data }}
    </pre>
  </div>
</template>


<style>
</style>
