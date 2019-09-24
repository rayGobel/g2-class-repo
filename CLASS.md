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
5. Passing props to a component can be done with vue-router via its route parameter
6. Those are the basics of vue-router

## Using Vuex

### General Concept

Vuex consist of several concepts in state management.

1. State
  - In which an application (app) state is registered
  - State are read-only and cannot be directly mutated
2. Getters
  - A modifier on how to access app state
3. Mutations
  - Mutations take a state, and replace it with an updated state
  - Mutations are synchronous
4. Actions
5. Modules

### Creating simple vuex module

1. Create a store to store all state related module/class
2. Register to main vue js app
3. Register state, getters, mutations, actions
