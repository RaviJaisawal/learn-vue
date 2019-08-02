<template>
  <div id="app">
      <v-app>
        <app-hedaer />
        <v-content>
          <v-container fluid>
            <router-view></router-view>
          </v-container>
        </v-content>
      </v-app>
  </div>
</template>



<script>

import About from './components/about'
import Home from './components/Home'


export default {
  name: 'app',
  components: {
    'app-hedaer' : Home
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
