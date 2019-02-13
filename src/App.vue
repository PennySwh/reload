<template>
  <div id="app">
    <router-link to="/">App</router-link>
    <router-link to="/TableList">TableList</router-link>
    <router-view class="TableList" v-if="isRouterAlive"></router-view>
  </div>
</template>

<script>
import TableList from './components/TableList.vue'
export default {
  name: 'app',
  components:{
    TableList
  },
  provide () {
    return {
      reload:this.reload
    }
  },
  data(){
    return{
      isRouterAlive:true
    }
  },
  methods:{
    reload(){
      this.isRouterAlive = false;
      this.$nextTick(function(){
        this.isRouterAlive = true;
      })
    }
  }
}
console.log(123);
</script>

<style>

</style>
