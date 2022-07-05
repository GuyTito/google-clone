<script setup>
import ThemeBtn from '../components/ThemeBtn.vue'
import Searchbar from '../components/Searchbar.vue';
import Loading from '../components/Loading.vue';
import { ExclamationCircleIcon } from '@heroicons/vue/solid'



const menu = ['search', 'Images', 'Videos']

const props = defineProps(['search_term', 'load', 'error_object' ])

const emit = defineEmits(['search', ])
function search(search_text) {
  emit('search', search_text)
}

</script>


<template>
  <div class="flex flex-col min-h-screen">
    <div class="mx-2 space-x-3 flex justify-between items-center sm:justify-center mt-5 sm:relative flex-shrink-0">
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
  
    <div class="flex-grow">
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
    
        <div v-if="load" class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 ">
          <Loading />
        </div>
        <div v-else-if="error_object.status" class="text-red-500 py-2 px-3 bg-red-100 flex items-center rounded-lg">
          <div class="h-8 w-8 mr-3"><ExclamationCircleIcon /></div> {{error_object.status + ' - ' + error_object.statusText }}
        </div>
        <div v-else>
          <slot></slot>
        </div>
      </div>
    </div>
  
    <footer class="mt-5 pt-5 pb-5 text-center text-[10px] text-gray-600/80 bg-gray-200 flex-shrink-0">
      Inspired by <a href="https://youtu.be/GDa8kZLNhJ4?t=28148" target="_blank" class="underline hover:font-bold">JavaScript Mastery</a>. 
         <a href="https://github.com/GuyTito/google-clone"  target="_blank" class="underline hover:font-bold">Source Code</a>.
    </footer>
  </div>

</template>


<style lang="postcss" scoped>
.router-link-exact-active{
  @apply font-medium text-green-600 border-green-600
}
</style>

<style scoped>

</style>