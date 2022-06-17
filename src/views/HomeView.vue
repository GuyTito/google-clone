<script setup>
import { useRouter } from 'vue-router'
import Searchbar from '../components/Searchbar.vue';
import ThemeBtn from '../components/ThemeBtn.vue';

const router = useRouter()

function search(search_term) {
  if (search_term) {
    router.push({ path: '/search', query: { q: search_term } })
  }
}

</script>

<template>
  <div >
    <div class="mt-5 sm:mt-10 absolute right-5 sm:right-16">
      <ThemeBtn />
     </div>

    <div class="absolute top-1/2 -translate-y-1/2 w-full">
      <div class="mx-5 space-x-3 flex justify-between items-center sm:justify-center mt-5 sm:relative">
        <div class="w-full sm:w-1/2">
          <Searchbar @search="search"/>
        </div>
      </div>
    </div>
  </div>
</template>