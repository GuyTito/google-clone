<script setup>
import ThemeBtn from '../components/ThemeBtn.vue'
import Searchbar from '../components/Searchbar.vue';
import Loading from '../components/Loading.vue';


const menu = ['search', 'Images', 'Videos', 'News']

const props = defineProps(['search_term', 'load', ])

const emit = defineEmits(['search', ])
function search(search_text) {
  emit('search', search_text)
}

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

    <div v-if="load" class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 ">
      <Loading />
    </div>
    <div v-else>
      <slot></slot>
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