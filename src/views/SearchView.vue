<script setup>
import { ref } from 'vue';
import Searchbar from '../components/Searchbar.vue';
import { useRoute } from 'vue-router'
// import data from '@/composables/data.js'
import ThemeBtn from '../components/ThemeBtn.vue'

const route = useRoute()

const search_term = ref('')
search_term.value = route.query.q || ''

const data = ref(null)
async function search(search_text) {
  if (search_text) search_term.value = search_text
  if (search_term.value) {
    const options = {
      method: 'GET',
      headers: {
        'X-User-Agent': 'desktop',
        'X-Proxy-Location': 'US',
        'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
        'X-RapidAPI-Key': import.meta.env.VITE_API_KEY
      }
    }

    try {
      const res = await fetch(`https://google-search3.p.rapidapi.com/api/v1/search/q=${search_term.value}&num=40`, options)
      data.value = await res.json()
    } catch (error) {
      console.error(error.msg)
    }
  }
}

const menu = ['search', 'Images', 'Videos', 'News']

</script>


<template>
  <div class="mx-2 space-x-3 flex justify-between items-center sm:justify-center mt-5 sm:relative">
    <div class="w-full sm:w-1/2">
      <Searchbar :search_term="search_term" @search="search"/>
    </div>

    <div class="sm:absolute sm:right-[10%] sm:top-1/2 sm:-translate-y-1/2">
      <ThemeBtn />
    </div>
  </div>

  <div class="mt-5 mx-5 sm:mx-14 md:max-w-3xl md:mx-auto">
    <nav class="space-x-5 sm:space-x-10 flex sm:block justify-between mb-5 sm:mb-8 border-b-2 dark:border-gray-700 text-gray-400">
      <router-link 
        v-for="item in menu" :key="item" 
        :to="`/${item.toLowerCase()}?q=${search_term}`" 
        class="border-b-4 border-transparent py-2 px-4 inline-block "
      >
        {{ item == 'search' ? 'All' : item }}
      </router-link>
    </nav>

    <div v-if="data" class="space-y-8">
      <div v-for="item in data.results" :key="item.id" class="">
        <a :href="item.link" target="_blank" rel="noopener" class="flex flex-col group">
          <span class="text-sm text-gray-400">{{item.cite.domain}}</span>
          <span class="font-semibold text-xl text-green-600 group-hover:underline">{{item.title}}</span>
        </a>
        <p> {{item.description.substr(0, 250)}} </p>
      </div>
    </div>
  </div>
</template>


<style lang="postcss" scoped>
.router-link-exact-active{
  @apply font-medium text-green-600 border-green-600
}
</style>