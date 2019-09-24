# Vue Router and Vuex

## Goals

* Use Vue Router to accomplish some kind of path based routing
* Use Vuex to maintain application state

## Motivation

### 1. Why use Vue Router

* Make Single Page Application / PWA simpler
* Achieve modularity based on path routing
* Make complex application structure by using routes

### 2. Why use Vuex

* Develop complex deep nested components with shared state easier
* Create application structure in the form of state and mutations
* Make communication between components simpler regardless of
component hierarchy

## Installation

Use these command to install both vue-router and vuex:

```js
npm install --save vue-router vuex
```

## Using Vue-Router

1. Create `routes` to list all available routes in your application and
which component for each route
2. Change main App to render component corresponds to its route. Use `router-view`
3. Create links by using `router-link`
4. Note: you can make a button as a link
