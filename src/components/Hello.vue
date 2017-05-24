<template>
  <div>
    <h1>Acikiwir</h1>
    <h2>History</h2>

    <ul v-if="histories && histories.length" class="row">
      <li class="col-md-3" v-for="ht of histories">
        
        <b-card 
          :title="ht.mvp.name"
          class="mb-2" show-footer>
          <router-link :to="{ name: 'MVP Info', params: { id: ht.mvp.id }}"><img :src="'https://db.idrowiki.org/klasik/resources/images/v2/mobs-gif/'+ht.mvp.sprite_name+'.gif'"></router-link>
          <p>Min Respawn = {{moment(ht.time).add(ht.mvp.respawn_time_min, 'minutes').format('MMMM Do YYYY, h:mm:ss a')}}</p>
          <p>Max Respawn = {{moment(ht.time).add(ht.mvp.respawn_time_max, 'minutes').format('MMMM Do YYYY, h:mm:ss a')}}</p>
          <small slot="footer" class="text-muted">
            {{moment.duration(moment(ht.time).diff(moment(),'hours'),'hours').humanize(true)}}
          </small>

        </b-card>
        
      </li>
    </ul>

    <ul v-if="errors && errors.length">
      <li v-for="error of errors">
        {{error.message}}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'hello',
  data: () => ({
    histories: [],
    errors: []
  }),
  created () {
    axios.get('http://localhost:3000/api/history')
    .then(response => {
      // JSON responses are automatically parsed.
      this.histories = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

a {
  color: #42b983;
}

.max-respawn {
  color:red;
}
</style>
