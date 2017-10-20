<template>
  <div>
    <form action="submit" @submit.prevent="search">
      <v-text-field solo clearable label="Search Domain" prepend-icon="search" v-model="searchParams">
      </v-text-field>
    </form>
    <v-layout v-if="data" class="mt-3">
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">{{data.name}}</h3>
                <ul>
                  <li>Created at: {{data.created}}</li>
                  <li>Changed at: {{data.changed}}</li>

                <ul v-if="data.contacts && data.contacts.owner.length > 0">
                  <hr v-for="(owner,index) in data.contacts.owner" :key="index">
                    <li>Organization: {{owner.organization || 'not found'}}</li>
                    <li>Email: {{owner.email || 'not found'}}</li>
                    <li>Address: {{owner.address || 'not found'}}</li>
                    <li>Zipcode: {{owner.zipcode || 'not found'}}</li>
                    <li>City: {{owner.city || 'not found'}}</li>
                    <li>State: {{owner.state || 'not found'}}</li>
                    <li>Country: {{owner.country || 'not found'}}</li>
                    <li>Phone: {{owner.phone || 'not found'}}</li>
                    <li>Fax: {{owner.fax || 'not found'}}</li>
                  </hr>
                </ul>
                <li v-else>The owner is not found</li>
                </ul>
              </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  <div v-if="error">{{error}}</div>
  </div>
</template>

<script>
  import Api from '@/services/Api'

  export default {
    data () {
      return {
        searchParams: '',
        data: null,
        error: ''
      }
    },
    methods: {
      search () {
        this.data = null
        this.error = ''
        try {
          const hostName = new URL(this.searchParams).hostname
          this.getUrlData(hostName)
        } catch (err) {
          this.error = 'Not a valid url - it should start with http / https. Please copy it from the address bar'
        }
      },
      getUrlData (hostName) {
        Api().get('search-domain/' + hostName)
          .then((domainData) => {
            this.data = domainData.data
          })
      }
    }
  }
</script>
