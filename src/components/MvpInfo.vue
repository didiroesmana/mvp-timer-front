<template>
  <div>
    
    <b-jumbotron :header="mvp.name"
                    lead="History of MVP" >
                    <img :src="'https://db.idrowiki.org/klasik/resources/images/v2/mobs-gif/'+mvp.sprite_name+'.gif'">  

                    <p>For more information see below</p>
    </b-jumbotron>

    <ul class="list-group" v-if="mvp.history && mvp.history.length">
      <li class="list-group-item" v-for="ht of mvp.history">
        Death Timer : {{moment(ht.time).format('MMMM Do YYYY, h:mm:ss a')}} - 
        {{moment.duration(moment(ht.time).diff(moment(),'minutes'),'minutes').humanize(true)}}
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
    msg: 'Ulala',
    mvp: [],
    errors: []
  }),
  created () {
    axios.get('http://localhost:3000/api/mvp/' + this.$route.params.id)
    .then(response => {
      // JSON responses are automatically parsed.
      this.mvp = response.data
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
