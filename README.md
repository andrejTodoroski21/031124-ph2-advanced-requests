# Advanced Fetch Requests

## Learning Goals

- immutability of state

- POST requests / spreading data

- PATCH requests / mapping over data

- DELETE requests / filtering data

## Getting Started

Fork and clone the repository. Inside the repo you can start the json-server with `npm run server`. 

You can then start the react server in a seperate terminal tab with `npm run dev`.

## Endpoints

You can fetch books from `http://localhost:3003/books` once the json-server is running.

## Headers

For the POST and PATCH request use these headers:

```js
{
    'Content-Type': 'application/json',
    'Accept': 'application/json'
}
```