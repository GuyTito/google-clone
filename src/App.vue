<script setup>
import { ref } from 'vue';
import { SearchIcon } from '@heroicons/vue/outline'

const middle = ref(true)
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

</script>


<template>
  <div class="min-h-screen bg-gray-200 ">
    <div class="flex justify-center flex-col items-center pt-5 mx-5" :class="{'min-h-screen' : middle}">
      <form @submit.prevent="search" class="bg-white rounded-lg p-4 flex items-center space-x-2 text-gray-400 w-full sm:max-w-xl">
        <SearchIcon class="h-5 w-5" />
        <input type="text" v-model="search_term" @keydown="middle = false" placeholder="Search anything..." class="w-full placeholder-gray-400 text-black outline-none">
        <button type="submit" class=""></button>
      </form>
  
      <!-- <div v-if="data" class="mt-5 text-black sm:max-w-xl">
        {{ data }}
      </div> -->
      <div  class="mt-5 text-black sm:max-w-xl">
        { "results": [ { "title": "Elon Musk - Wikipedia", "link": "https://en.wikipedia.org/wiki/Elon_Musk", "description": "Elon Reeve Musk FRS (/ˈiːlɒn/; born June 28, 1971) is an entrepreneur, investor, and business tycoon. He is the founder, CEO, and Chief Engineer at SpaceX; ...", "additional_links": [ { "text": "Elon Musk - Wikipediahttps://en.wikipedia.org › wiki › Elon_Musk", "href": "https://en.wikipedia.org/wiki/Elon_Musk" }, { "text": "Tosca Musk", "href": "http://en.wikipedia.org/wiki/Tosca_Musk" }, { "text": "Kimbal Musk", "href": "http://en.wikipedia.org/wiki/Kimbal_Musk" }, { "text": "University of Pennsylvania", "href": "http://en.wikipedia.org/wiki/University_of_Pennsylvania" }, { "text": "BS", "href": "http://en.wikipedia.org/wiki/Bachelor_of_Science" }, { "text": "BA", "href": "http://en.wikipedia.org/wiki/Bachelor_of_Arts" }, { "text": "Maye Musk", "href": "http://en.wikipedia.org/wiki/Maye_Musk" }, { "text": "Justine Musk", "href": "https://en.wikipedia.org/wiki/Justine_Musk" }, { "text": "Maye Musk", "href": "https://en.wikipedia.org/wiki/Maye_Musk" }, { "text": "Kimbal Musk", "href": "https://en.wikipedia.org/wiki/Kimbal_Musk" }, { "text": "Tosca Musk", "href": "https://en.wikipedia.org/wiki/Tosca_Musk" }, { "text": "", "href": "https://en.wikipedia.org/wiki/Elon_Musk" } ], "cite": { "domain": "https://en.wikipedia.org › wiki › Elon_Musk", "span": " › wiki › Elon_Musk" } }, { "title": "Elon Musk (@elonmusk) · Twitter", "link": "https://twitter.com/elonmusk?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor", "description": "", "cite": {} }, { "title": "Elon Musk - Forbes", "link": "https://www.forbes.com/profile/elon-musk/", "description": "Elon Musk is working to revolutionize transportation both on Earth, through electric car maker Tesla -- and in space, via rocket producer SpaceX.", "additional_links": [ { "text": "Elon Musk - Forbeshttps://www.forbes.com › profile › elon-musk", "href": "https://www.forbes.com/profile/elon-musk/" }, { "text": "", "href": "https://www.forbes.com/profile/elon-musk/" } ], "cite": { "domain": "https://www.forbes.com › profile › elon-musk", "span": " › profile › elon-musk" } }, { "title": "Elon Musk | Tesla", "link": "https://www.tesla.com/elon-musk", "description": "As the co-founder and CEO of Tesla, Elon leads all product design, engineering and global manufacturing of the company's electric vehicles, battery products and ...", "additional_links": [ { "text": "Elon Musk | Teslahttps://www.tesla.com › elon-musk", "href": "https://www.tesla.com/elon-musk" } ], "cite": { "domain": "https://www.tesla.com › elon-musk", "span": " › elon-musk" } }, { "title": "@elonmusk • Instagram photos and videos", "link": "https://www.instagram.com/elonmusk/?hl=en", "description": "507k Followers, 2 Following, 448 Posts - See Instagram photos and videos from @elonmusk. ... Elon and his mother, Maye Musk, at the 2022 Met Gala.", "additional_links": [ { "text": "@elonmusk • Instagram photos and videoshttps://www.instagram.com › elonmusk", "href": "https://www.instagram.com/elonmusk/?hl=en" } ], "cite": { "domain": "https://www.instagram.com › elonmusk", "span": " › elonmusk" } }, { "title": "Who Is Elon Musk? What Is His Claim to Fame?", "link": "https://www.investopedia.com/articles/personal-finance/061015/how-elon-musk-became-elon-musk.asp", "description": "Place of birth: Pretoria", "additional_links": [ { "text": "Who Is Elon Musk? What Is His Claim to Fame?https://www.investopedia.com › ... › Entrepreneurs", "href": "https://www.investopedia.com/articles/personal-finance/061015/how-elon-musk-became-elon-musk.asp" }, { "text": "", "href": "https://www.investopedia.com/articles/personal-finance/061015/how-elon-musk-became-elon-musk.asp" } ], "cite": { "domain": "https://www.investopedia.com › ... › Entrepreneurs", "span": " › ... › Entrepreneurs" } }, { "title": "Elon Musk - CNBC", "link": "https://www.cnbc.com/elon-musk/", "description": "Elon Musk, Tesla. ... Lora KolodnyMay 10, 2022. thumbnail. Elon Musk says he would lift Twitter ban on Donald Trump after deal closes.", "additional_links": [ { "text": "Elon Musk - CNBChttps://www.cnbc.com › elon-musk", "href": "https://www.cnbc.com/elon-musk/" } ], "cite": { "domain": "https://www.cnbc.com › elon-musk", "span": " › elon-musk" } }, { "title": "Elon Musk Gives Many Headlines In 40-Minute Interview", "link": "https://www.ndtv.com/world-news/elon-musk-assures-tesla-worrywarts-he-isnt-going-anywhere-2968162", "description": "2 hours ago — Elon Musk said he'll stay at Tesla \"as long as I can be useful,\" assuaging concern that a foray into social media will compromise the amount ...", "additional_links": [ { "text": "Elon Musk Gives Many Headlines In 40-Minute Interviewhttps://www.ndtv.com › World", "href": "https://www.ndtv.com/world-news/elon-musk-assures-tesla-worrywarts-he-isnt-going-anywhere-2968162" } ], "cite": { "domain": "https://www.ndtv.com › World", "span": " › World" } } ], "image_results": [], "total": 653000000, "answers": [ "Why is Elon Musk famous?", "How do I talk to Elon Musk?" ], "ts": 4.823960542678833, "device_region": "EU", "device_type": "desktop" }
      </div>
    </div>
  </div>
</template>


<style>
</style>
