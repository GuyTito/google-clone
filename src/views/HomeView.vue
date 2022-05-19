<script setup>
import { useRouter } from 'vue-router'
import Searchbar from '../components/Searchbar.vue';

const router = useRouter()

function search(search_term) {
  if (search_term) {
    router.push({ path: '/search', query: { q: search_term } })
  }
}

</script>

<template>
  <div class="grid place-items-center min-h-screen">
    <Searchbar @search="search"/>
  </div>
</template>