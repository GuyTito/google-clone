<script setup>
import { ref } from 'vue';
import Searchbar from '../components/Searchbar.vue';
import { useRoute, useRouter } from 'vue-router'
import ThemeBtn from '../components/ThemeBtn.vue'
import Loading from '../components/Loading.vue'


const route = useRoute()
const router = useRouter()

const search_term = ref('')
search_term.value = route.query.q || ''

const data = ref(null)
const is_loading = ref(false)
async function search(search_text) {
  is_loading.value = true
  if (search_text) search_term.value = search_text
  if (search_term.value) {
    router.replace({ path: '/search', query: { q: search_term.value } })
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
      is_loading.value = false
    } catch (error) {
      console.error(error.msg)
    }
  }
}
search()

const menu = ['search', 'Images', 'Videos', 'News']

</script>


<template>
  <div class="mx-2 space-x-3 flex justify-between items-center sm:justify-center mt-5 sm:relative">
    <div class="sm:absolute sm:left-[10%] sm:top-1/2 sm:-translate-y-1/2">
      <router-link to="/" class="font-bold text-xl text-green-600">goGGL</router-link>
    </div>
    
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

    <div v-if="is_loading" class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 ">
      <Loading />
    </div>
    <div v-else class="space-y-8">
      <div v-for="item in data.results" :key="item.id" class="">
        <a :href="item.link" target="_blank" rel="noopener" class="flex flex-col group">
          <span class="text-sm text-gray-400">{{item.cite.domain}}</span>
          <span class="font-semibold text-xl text-green-600 group-hover:underline">{{item.title}}</span>
        </a>
        <p class="break-words"> {{item.description.substr(0, 200)}} </p>
      </div>
    </div>
    
  </div>
</template>


<style lang="postcss" scoped>
.router-link-exact-active{
  @apply font-medium text-green-600 border-green-600
}
</style>

<style scoped>

</style>