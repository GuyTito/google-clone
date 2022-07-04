import { it, expect, vi } from "vitest";
import useSearch from "../composables/useSearch";

const test_response_data = { key: 'test value'}

const fetchMock = vi.fn((url, options) => {
  return new Promise((resolve, reject) => {
    const test_response = {
      ok: true,
      json(){
        return new Promise((resolve, reject) => {
          resolve(test_response_data)
        })
      }
    }

    resolve(test_response)
  })
})

vi.stubGlobal('fetch', fetchMock)

beforeEach(() => {
  fetch.mockClear();
});

it('returns promise which resolves to nothing if search_text/page arg are not provided', () => {
  const res = useSearch('', '')
  expect(res).resolves.toBeUndefined()
})

it('should not call fetch if page is not in menu', () => {
  const res = useSearch('test','test')
  expect(fetch).not.toBeCalled()
})

it('should make sure fetch is called', () => {
  const res = useSearch('image','test')
  expect(fetch).toBeCalled()
})

it('should make sure data is converted to json', async () => {
  let error_msg 
  try {
    await useSearch('image','test')
  } catch (error) {
    error_msg = error
  }
  expect(error_msg).not.toBe('Not a string!')
})