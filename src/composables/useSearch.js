import { ref } from 'vue';


async function useSearch(page, search_text){
  const data = ref(null)
  const is_loading = ref(true)
  if (search_text || page) {
    const options = {
      method: 'GET',
      headers: {
        'X-User-Agent': 'desktop',
        'X-Proxy-Location': 'US',
        'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
        'X-RapidAPI-Key': import.meta.env.VITE_API_KEY
      }
    }
    
    try {
      const res = await fetch(`https://google-search3.p.rapidapi.com/api/v1/${page}/q=${search_text}&num=30`, options)
      data.value = await res.json()
      is_loading.value = false
    } catch (error) {
      console.error(error.msg)
    }

    return { is_loading, data }
  }

  
}

export default useSearch
