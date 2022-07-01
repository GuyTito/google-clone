<script setup>
import { ref } from 'vue';
import BaseLayout from './BaseLayout.vue';
import { useRoute, useRouter } from 'vue-router'
import useSearch from '../composables/useSearch';


const router = useRouter()
const route = useRoute()

const search_term = ref('')
search_term.value = route.query.q || ''
router.push({ path: '/search', query: { q: search_term.value } })

const load = ref(true)
const results = ref(null)
async function search(search_text) {
  if (search_text) search_term.value = search_text
  router.push({ path: '/search', query: { q: search_term.value } })
  load.value = true
  const { is_loading, data } = await useSearch('search', search_term.value)
  load.value = is_loading.value
  results.value = data.value
}

search()

</script>


<template>
  <BaseLayout :search_term="search_term" @search="search" :load="load">
    <div class="space-y-8">
      <div v-for="item in results.results" :key="item.id" class="">
        <a :href="item.link" target="_blank" rel="noopener" class="flex flex-col group">
          <span class="text-sm text-gray-400">{{item.cite.domain}}</span>
          <span class="font-semibold text-xl text-green-600 group-hover:underline">{{item.title}}</span>
        </a>
        <p class="break-words"> {{item.description.substr(0, 200)}} </p>
      </div>
    </div>
  </BaseLayout>
  
</template>


<style lang="postcss" scoped>

</style>