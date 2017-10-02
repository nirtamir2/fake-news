<template>
  <div>
    <form action="submit" @submit.prevent="search">
    <v-text-field
     solo clearable
      label="Search" prepend-icon="search"
       v-model="searchParams" >
    </v-text-field>
    </form>
    <score :score="score">{{score}}</score>
    <v-list subheader>
        <v-list-tile v-for="item in data" :key="item.time">
          date: {{item.formattedTime}} | {{item.value[0]}}%
          </v-list-tile>
    </v-list>
  </div>
</template>

<script>
import SearchService from '@/services/searchService'
import ScoreService from '@/services/scoreService'
import Score from './Score'
export default {
  data () {
    return {
      searchParams: '',
      data: [],
      score: 0.5
    }
  },
  components: {
    Score
  },
  methods: {
    search () {
      SearchService.search(this.searchParams)
        .then((data) => { this.data = data })
        .catch(err => console.log(err))

      ScoreService.score(this.searchParams)
        .then((res) => {
          this.score = res.data.score
        })
        .catch((err) =>
          console.error(err))
    }
  }
}
</script>
