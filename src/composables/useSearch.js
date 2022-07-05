import { reactive, ref } from 'vue';


async function useSearch(page, search_text){
  const data = ref(null)
  const is_loading = ref(true)
  const error_obj = reactive({
    status: null,
    statusText: null
  })
  const menu = ['search', 'image', 'video']
  if (search_text || page) {
    if (!menu.includes(page)) return 

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
      const response = await fetch(`https://google-search3.p.rapidapi.com/api/v1/${page}/q=${search_text}&num=30`, options)
      data.value = await response.json()
      is_loading.value = false
      if (!response.ok) {
        error_obj.status = response.status
        error_obj.statusText = response.statusText
      }
    } catch (error) {
      console.log('Network Error: ', error.message)
    }

    return { is_loading, data, error_obj }
  }

  
}

export default useSearch
