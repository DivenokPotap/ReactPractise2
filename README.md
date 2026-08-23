# Q&A

1. Як обробити помилку у маршрутизації ?
2. Які є способи програмно зробити редірект на певний маршрут ?
3. Який хук дозволяє працювати з рядком запиту та параметрами в url ?
4. Розібрати наступний код, пояснити що робить useMemo() та метод fromEntries()

```jsx
const [searchParams] = useSearchParams();
const params = useMemo(
  () => Object.fromEntries([...searchParams]),
  [searchParams],
);
```

5. Який хук з бібліотеки повертає об'єкт місцезнаходження
   Розібрати url на частини згідно об'єкту location
   **http://localhost:5173/producst?query=fpv-drones&type=fiber-optic#ronni**

```js
{
  pathname: string;
  search: string;
  hash: string;
  state: any;
  key: string;
}
```

## Tasks

1. Refactor search query for search articles. Add check if search is Empty
2. Create program navigation (redirect) after logout
3. Code splitting + search and update import paths in entire project page (see vite.config.js)
4. Create Reset btn in ArticleSearch

### Results (ВИСНОВКИ)
