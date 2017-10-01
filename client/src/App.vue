<template>
  <div id="app">
    <v-app>
      <v-toolbar fixed class="red" dark>
        <v-toolbar-title>Fake News</v-toolbar-title>
      </v-toolbar>
      <main>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </main>
      <v-footer></v-footer>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
