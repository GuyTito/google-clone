import { it, expect } from "vitest";
import useSearch from "../composables/useSearch";

it('returns promise which resolves to nothing if search_text/page arg are not provided', () => {
  const res = useSearch('', '')
  expect(res).resolves.toBeUndefined()
})