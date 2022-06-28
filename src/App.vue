<script setup lang="ts"></script>

<template>
  <header>
    <!--  v-show="$route.path !== '/'"-->
    <div v-show="$route.path !== '/'"><RouterLink to="/">Home</RouterLink></div>
  </header>

  <RouterView />
</template>

<style lang="scss">
@import "./assets/base.css";

header {
  //height: 46px;
  padding: 10px;
  position: absolute;
  z-index: 100;
  left: 10px;
  top: 10px;
  border-radius: 4px;
  backdrop-filter: blur(25px);
  div {
    height: 32px;
    width: 60px;
    //background: #f40;
    border-radius: 4px;
    text-align: center;
    line-height: 30px;
    a,
    .green {
      text-decoration: none;
      color: hsla(160, 100%, 37%, 1);
      transition: 0.4s;
    }
    &:hover {
      cursor: pointer;
      background-color: hsla(160, 100%, 37%, 0.2);
    }
  }
}

//
//#app {
//  display: grid;
//  grid-template-rows: 46px 1fr;
//  height: 100vh;
//  margin: 0;
//}
//
//header {
//  line-height: 1.5;
//  max-height: 100vh;
//}
//
//a,
//.green {
//  text-decoration: none;
//  color: hsla(160, 100%, 37%, 1);
//  transition: 0.4s;
//}
//nav a {
//  border-radius: 4px;
//  //background-color: hsla(160, 100%, 37%, 1);
//}
//main {
//  display: grid;
//  grid-template-rows: 1fr;
//}
//@media (hover: hover) {
//  a:hover {
//    background-color: hsla(160, 100%, 37%, 0.2);
//  }
//}
//
//nav {
//  width: 100%;
//  font-size: 12px;
//  text-align: center;
//  margin-top: 2rem;
//}
//
//nav a.router-link-exact-active {
//  color: var(--color-text);
//}
//
//nav a.router-link-exact-active:hover {
//  background-color: transparent;
//}
//
//nav a {
//  display: inline-block;
//  padding: 0 1rem;
//  border-left: 1px solid var(--color-border);
//}
//
//nav a:first-of-type {
//  border: 0;
//}
//
//@media (min-width: 1024px) {
//  body {
//    display: flex;
//    place-items: start;
//  }
//
//  #app {
//    display: grid;
//    grid-template-rows: 3.5rem 1fr;
//    padding: 0 2rem;
//  }
//
//  header {
//    display: flex;
//    flex-direction: column;
//    place-items: start;
//    padding-right: calc(var(--section-gap) / 2);
//  }
//
//  header .wrapper {
//    display: flex;
//    place-items: flex-start;
//    flex-wrap: wrap;
//  }
//
//  nav {
//    text-align: left;
//    margin-left: -1rem;
//    font-size: 1rem;
//
//    padding: 1rem 0;
//    margin-top: 1rem;
//  }
//}
</style>
