<script setup>
import { ref } from 'vue';
import BaseLayout from './BaseLayout.vue';
import { useRoute, useRouter } from 'vue-router'
import useSearch from '../composables/useSearch';
import Searchbar from '../components/Searchbar.vue';
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
  <BaseLayout :search_term="search_term">
    <template #search_bar>
      <div class="w-full sm:w-1/2">
        <Searchbar :search_term="search_term" @search="search"/>
      </div>
    </template>

    <template #default>
      <div v-if="load" class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 ">
        <Loading />
      </div>
      <div v-else class="space-y-8">
        {{ results }}
      </div>
    </template>
  </BaseLayout>
  
</template>


<style lang="postcss" scoped>

</style>