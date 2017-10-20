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
                <v-list>
                  <v-list-tile>Created at: {{data.created || '?'}}</v-list-tile>
                  <v-list-tile>Changed at: {{data.changed || '?'}}</v-list-tile>
                <div v-if="data.contacts && data.contacts.owner.length > 0">
                  <div v-for="(owner,index) in data.contacts.owner" :key="index">
                    <v-list-tile>Organization: {{owner.organization || 'not found'}}</v-list-tile>
                    <v-list-tile>Email: {{owner.email || 'not found'}}</v-list-tile>
                    <v-list-tile>Address: {{owner.address || 'not found'}}</v-list-tile>
                    <v-list-tile>Zipcode: {{owner.zipcode || 'not found'}}</v-list-tile>
                    <v-list-tile>City: {{owner.city || 'not found'}}</v-list-tile>
                    <v-list-tile>State: {{owner.state || 'not found'}}</v-list-tile>
                    <v-list-tile>Country: {{owner.country || 'not found'}}</v-list-tile>
                    <v-list-tile>Phone: {{owner.phone || 'not found'}}</v-list-tile>
                    <v-list-tile>Fax: {{owner.fax || 'not found'}}</v-list-tile>
                  </div>
                </div>
                <v-list-tile v-else>The owner is not found</v-list-tile>
                </v-list>
              </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>

  <v-layout v-if="data && data.reliability" class="mt-3">
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Reliability</h3>
                <v-list>
                  <v-list-tile>type: {{data.reliability.type}}</v-list-tile>
                  <v-list-tile>2nd type: {{data.reliability['2nd type']}}</v-list-tile>
                  <v-list-tile>3rd type: {{data.reliability['2nd type']}}</v-list-tile>
                  <v-list-tile>Source Notes (things to know?): {{data.reliability['Source Notes (things to know?)']}}</v-list-tile>
                </v-list>
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
