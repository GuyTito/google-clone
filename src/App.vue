<script setup>
import { ref } from 'vue';
import { SearchIcon } from '@heroicons/vue/outline'

const move_top = ref(false)
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

const menu = ['All', 'Images', 'Videos', 'News']


</script>


<template>
  <!-- <div class="min-h-screen  "> -->
    <div class=" mx-5 sm:mx-14 relative min-h-screen md:max-w-3xl md:mx-auto">
      <form @submit.prevent="search" class="border-2 border-gray-300 rounded-lg p-4 flex items-center space-x-2 text-gray-400 w-full absolute transition-all duration-700 top-1/2 -translate-y-1/2" :class="{'top-5 translate-y-0': move_top}">
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
            <a v-for="item in menu" :key="item" href="#" class="border-b-4 border-transparent py-2 px-4 inline-block hover:font-medium hover:text-black hover:border-black">
              {{ item }}
            </a>
            <!-- apply hover properties when you install vue-router -->
          </nav>

          <div >
            Day definition and meaning | Collins English Dictionaryhttps://www.collinsdictionary.com › dictionary › day
            1. the interval of light between two successive nights; the time between sunrise and sunset · 2. the light of day; daylight · 3. Astronomy · 4. an analogous ...
            20 Mar 2018 · Uploaded by Collins A-Z
  
            DAY (noun) definition and synonyms | Macmillan Dictionaryhttps://www.macmillandictionary.com › british › day
            1. countable one of the periods of time that a week is divided into, equal to 24 hours. We're going away for five days. · 2. countable/uncountable the period of ...
  
            Day Definition & Meaning | Dictionary.comhttps://www.dictionary.com › browse › day
            Day definition, the interval of light between two successive nights; the time between sunrise and sunset: Since there was no artificial illumination, ...
  
            Day Definition & Meaning | Britannica Dictionaryhttps://www.britannica.com › dictionary › day
            DAY meaning: 1 : a period of 24 hours beginning at midnight one of the seven time periods that make up a week; 2 : the time of light between one night and ...
  
            National Day Calendar: Homehttps://nationaldaycalendar.com
            On May 25th each year, wine lovers everywhere pour a glass of their favorite wine to celebrate National Wine Day. Advertisement. National Day Podcast. Hear the ...
            
            Day definition and meaning | Collins English Dictionaryhttps://www.collinsdictionary.com › dictionary › day
            1. the interval of light between two successive nights; the time between sunrise and sunset · 2. the light of day; daylight · 3. Astronomy · 4. an analogous ...
            20 Mar 2018 · Uploaded by Collins A-Z
  
            DAY (noun) definition and synonyms | Macmillan Dictionaryhttps://www.macmillandictionary.com › british › day
            1. countable one of the periods of time that a week is divided into, equal to 24 hours. We're going away for five days. · 2. countable/uncountable the period of ...
  
            Day Definition & Meaning | Dictionary.comhttps://www.dictionary.com › browse › day
            Day definition, the interval of light between two successive nights; the time between sunrise and sunset: Since there was no artificial illumination, ...
  
            Day Definition & Meaning | Britannica Dictionaryhttps://www.britannica.com › dictionary › day
            DAY meaning: 1 : a period of 24 hours beginning at midnight one of the seven time periods that make up a week; 2 : the time of light between one night and ...
  
            National Day Calendar: Homehttps://nationaldaycalendar.com
            On May 25th each year, wine lovers everywhere pour a glass of their favorite wine to celebrate National Wine Day. Advertisement. National Day Podcast. Hear the ...
          </div>
        </div>
        
      </div>
    </div>
  <!-- </div> -->
</template>


<style>
</style>
