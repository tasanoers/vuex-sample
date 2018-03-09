<template>
  <div class="sample">
    <h1>{{ msg }}</h1>
    <input type="text" v-model="newMsg" />
    <button @click="repeat">繰り返す</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import * as types from '@/store/mutation-types'

export default {
  name: 'sample',
  data () {
    return {
      newMsg: null
    }
  },
  computed: {
    ...mapState({
      msg: state => state.msg
    })
  },
  methods: {
    repeat () {
    // this.$store.state.msg = this.newMsg
      this.$store.dispatch('repeat')
    }
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
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
