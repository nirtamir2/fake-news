<template>
  <div id="app">
    <v-app>
      <v-toolbar fixed dark class="red">
        <v-toolbar-title>Fake News</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn flat to='/'>Title</v-btn>
          <v-btn flat to='/domain'>URL</v-btn>
        </v-toolbar-items>
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
