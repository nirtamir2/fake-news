<template>
  <div>
    <form action="submit" @submit.prevent="search">
      <v-text-field solo clearable label="Search Domain" prepend-icon="search" v-model="searchParams">
      </v-text-field>
    </form>
    <v-list subheader>
      {{data}}
    </v-list>
  </div>
</template>

<script>
export default {
  data () {
    return {
      searchParams: '',
      data: []
    }
  },
  methods: {
    search () {
      this.data = this.searchParams
    }
  }
}
</script>
