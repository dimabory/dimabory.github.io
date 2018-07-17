<template>
    <div>
        <h2>Giphy</h2>

        <div class="form-query">
            <b-form inline novalidate @submit="event => event.preventDefault() || fetchGif()">
                <b-input v-model="q" class="mb-2 mr-sm-2 mb-sm-0" id="query" name="query" placeholder="..."
                         :disabled="loading"/>
                <b-button variant="primary" @click="fetchGif" :disabled="loading">
                    <template v-if="!loading">
                        Go
                    </template>
                    <font-awesome-icon v-if="loading" class="text-secondary" :icon="['fas', 'spinner']" size="lg" spin/>
                </b-button>
            </b-form>
        </div>

        <div v-if="gifEmbeddedUrl" class="embed-responsive embed-responsive-21by9">
            <iframe :src="gifEmbeddedUrl" class="embed-responsive-item"></iframe>
        </div>

        <div v-else-if="!loading">No gif found</div>
    </div>
</template>

<script>
  import axios from 'axios'
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faSpinner } from '@fortawesome/free-solid-svg-icons'

  library.add(faSpinner)
  const {
          VUE_APP_FAKE_JSON_API_URL: FAKE_JSON_API_URL,
          VUE_APP_FAKE_JSON_API_TOKEN: FAKE_JSON_API_TOKEN,
          VUE_APP_GIPHY_API_URL: GIPHY_API_URL,
          VUE_APP_GIPHY_API_TOKEN: GIPHY_API_TOKEN
        } = process.env

  export default {
    name: 'GiphyTab',
    data: () => ({
      q: '',
      cached_q: '',
      gifEmbeddedUrl: null,
      loading: true,
      offset: 0,
      limit: 1
    }),
    methods: {
      async fetchGif () {
        this.loading = true

        const giphyReponse = await axios.get(`${GIPHY_API_URL}/search`, {
          params: {
            api_key: GIPHY_API_TOKEN,
            q: this.q,
            offset: this.cached_q === this.q ? ++this.offset : this.offset = 0,
            limit: this.limit,
            rating: 'G',
            lang: 'en'
          }
        })

        if (giphyReponse.data.data.length) {
          this.gifEmbeddedUrl = giphyReponse.data.data[0].embed_url
        } else {
          this.gifEmbeddedUrl = null
        }

        setTimeout(
          () => this.loading = false,
          100
        )

        this.cached_q = this.q
      }
    },
    async created () {
      const fakeJsonResponse = await axios({
        method: 'post',
        url: `${FAKE_JSON_API_URL}/q?${Date.now()}`,
        data: {
          token: FAKE_JSON_API_TOKEN,
          data: {
            q: 'stringWords|1,3'
          }
        }
      })

      this.q = fakeJsonResponse.data.q

      await this.fetchGif()
    }
  }
</script>

<style scoped>
    .form-query {
        padding: 10px 0;
    }
</style>