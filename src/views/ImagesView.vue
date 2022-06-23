<script setup>
import { ref } from 'vue';
import BaseLayout from './BaseLayout.vue';
import { useRoute, useRouter } from 'vue-router'
import useSearch from '../composables/useSearch';
import Loading from '../components/Loading.vue';


const router = useRouter()
const route = useRoute()

const search_term = ref('')
search_term.value = route.query.q || ''
router.push({ path: '/images', query: { q: search_term.value } })

const load = ref(true)
const results = ref(null)
async function search(search_text) {
  if (search_text) search_term.value = search_text
  router.push({ path: '/images', query: { q: search_term.value } })
  load.value = true
  const { is_loading, data } = await useSearch('image', search_term.value)
  load.value = is_loading.value
  results.value = data.value
}

search()

</script>


<template>
  <BaseLayout :search_term="search_term" @search="search">
    <template #default>
      <div v-if="load" class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 ">
        <Loading />
      </div>
      <div v-else class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        <div v-for="image in results.image_results" :key="image.id" class="">
          <a :href="image.link.href" class="">
            <img :src="image.image.src" :alt="image.image.alt" class=" rounded-lg">
            <span class="text-xs mt-1">
              {{image.link.title}}
            </span>
          </a>
        </div>
      </div>
    </template>
  </BaseLayout>
  
</template>


<style lang="postcss" scoped>

</style>