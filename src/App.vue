<script setup>
import { ref } from 'vue';
import { SearchIcon } from '@heroicons/vue/outline'
import data from '@/composables/data.js'

const move_top = ref(false)
const search_term = ref('')
// const data = ref(null)
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

const menu = ['All', 'Images', 'Videos', 'News']


</script>


<template>
  <!-- <div class="min-h-screen  "> -->
    <div class=" mx-5 sm:mx-14 relative min-h-screen md:max-w-3xl md:mx-auto">
      <form @submit.prevent="search" class="border-2 border-gray-300 rounded-lg p-4 flex items-center space-x-2 text-gray-400 w-full absolute transition-all duration-700 top-1/2 -translate-y-1/2 shadow-md" :class="{'top-5 translate-y-0': move_top}">
        <SearchIcon class="h-5 w-5" />
        <input type="text" v-model="search_term" @keydown="move_top = true" placeholder="Search anything..." class="w-full placeholder-gray-400 text-black outline-none">
        <button type="submit" class=""></button>
      </form>
  
      <!-- <div v-if="data" class="mt-5 text-black sm:max-w-xl">
        {{ data }}
      </div> -->
      <div  class="opacity-0 transition-all transform scale-0 duration-300 delay-500 absolute top-20 mt-5 text-black w-full" :class="{'opacity-100 scale-100' : move_top}">
        <div v-if="move_top">
          <nav class="space-x-5 sm:space-x-10 flex sm:block justify-between mb-5 sm:mb-8 border-b-2 text-gray-400">
            <a v-for="item in menu" :key="item" href="#" class="border-b-4 border-transparent py-2 px-4 inline-block hover:font-medium hover:text-green-600 hover:border-green-600">
              {{ item }}
            </a>
            <!-- apply hover properties when you install vue-router -->
          </nav>

          <div v-if="data" class="space-y-8">
            <div v-for="item in data.results" :key="item.id" class="">
              <a :href="item.link" target="_blank" rel="noopener" class="flex flex-col group">
                <span>{{item.cite.domain}}</span>
                <span class="font-semibold text-xl text-green-600 group-hover:underline">{{item.title}}</span>
              </a>
              <p> {{item.description}} </p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  <!-- </div> -->
</template>


<style>
</style>
