<template>
  <div>
    <form action="submit" @submit.prevent="search">
      <v-text-field solo clearable label="Search Domain" prepend-icon="search" v-model="searchParams">
      </v-text-field>
    </form>
    {{data}}
  </div>
</template>

<script>
import Api from '@/services/Api'

export default {
  data () {
    return {
      searchParams: '',
      data: null
    }
  },
  methods: {
    search () {
      const hostName = new URL(this.searchParams).hostname
      Api().get('search-domain/' + hostName)
        .then((domainData) => {
          this.data = domainData.data
        })
        .catch(err => console.log(err))
    }
  }
}
</script>
