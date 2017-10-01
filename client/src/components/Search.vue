<template>
  <div>
    <form action="submit" @submit.prevent="searcha">
    <v-text-field
     solo clearable
      label="Search" prepend-icon="search"
       v-model="searchParams" >
    </v-text-field>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      searchParams: ''
    }
  },
  methods: {
    searcha () {
      console.log('searching', this.searchParams)
    }
  }
}
</script>

