<script setup>
import { ref } from 'vue';
import Searchbar from '../components/Searchbar.vue';
import { useRoute } from 'vue-router'

const route = useRoute()


const search_term = ref('')
search_term.value = route.query.q || ''

function search() {
  
}

</script>


<template>
  <div class="flex justify-center">
    <Searchbar :search_term="search_term" @search="search"/>
  </div>
  
</template>


<style lang="postcss" scoped>

</style>