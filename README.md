# No db review

## frontend checklist

- package.json
  - main => server/
  - proxy => http://localhost:4000
- reset.css

### Folder Structure

- src/
  - App.js
  - index.js
  - components/
    - Header/
      - Header.js
      - Header.css
    //All base universes listed
    - UniverseList/
      - UniverseList.js
      - UniverseList.css
    //User favorite universes
    - UserUniverses/
      - UserUniverses.js
      - UserUniverses.css
    //User added universes
    - AddForm/
      - UniverseForm.js
      - UniverseForm.css

### dependencies

- `axios`

## Backend Checklist

### Folder Structure

- server/
  - index.js
  - controller/
    - universeController.js
  - data/
    - data.json

### Endpoints

Get: (get all universes) `/api/dimensions`

Post: ( add a universe ) `/api/dimensions`

Put: ( update universes in list ) `/api/dimensions/:id`

Delete: ( delete this crap ) `/api/dimensions/:id`

```js
{
  id, universe_name, your_name, your_country, your_occupation, your_hobbies, personality_type;
}


```

### dependencies

- express
- body-parser
