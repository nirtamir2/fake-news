<template>
  <v-layout justify-center xs-5 offset-xs2 mt-3>
      <h1 class="text-xs-center">{{Math.round(100*score)}}%</h1>
      <radial-progress-bar :diameter="200" :completed-steps="score" :total-steps="1" class="inner">
      </radial-progress-bar>
  </v-layout>
</template>
<script>
import RadialProgressBar from 'vue-radial-progress/dist/vue-radial-progress.min.js'
export default {
  data () {
    return {
    }
  },
  components: {
    RadialProgressBar
  },
  props: ['score']
}
</script>


