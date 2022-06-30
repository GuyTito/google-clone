<script setup>
import { ref } from 'vue';
import BaseLayout from './BaseLayout.vue';
import { useRoute, useRouter } from 'vue-router'
import useSearch from '../composables/useSearch';


const router = useRouter()
const route = useRoute()

const search_term = ref('')
search_term.value = route.query.q || ''
router.push({ path: '/videos', query: { q: search_term.value } })

const load = ref(true)
const results = ref(null)
async function search(search_text) {
  if (search_text) search_term.value = search_text
  router.push({ path: '/videos', query: { q: search_term.value } })
  load.value = true
  const { is_loading, data } = await useSearch('video', search_term.value)
  load.value = is_loading.value
  results.value = data.value
}

search()

</script>


<template>
  <BaseLayout :search_term="search_term" @search="search" :load="load">
    <div class="space-y-8">
      <div v-for="video in results.results" :key="video.id" class="">
        <a :href="video.link" target="_blank" rel="noopener" class="flex flex-col group">
          <span class="text-sm text-gray-400">{{video.cite.domain}}</span>
          <span class="font-semibold text-xl text-green-600 group-hover:underline">{{video.title}}</span>
        </a>
        <div class="flex space-x-5 mt-2">
          <div class="grid">
            <a :href="video.link" target="_blank" rel="noopener" class="h-28 w-44">
              <img src="../assets/video_player-min.PNG" alt="" class="rounded-lg object-cover w-full h-full">
            </a>
          </div>
          <p class="break-words"> {{video.description.substr(0, 200)}} </p>
        </div>
      </div>
    </div>
  </BaseLayout>
  
</template>


<style lang="postcss" scoped>

</style>