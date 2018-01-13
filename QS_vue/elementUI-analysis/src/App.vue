<template>
  
  <div id="app">
    <el-badge class="item" :value="10" :max="9">
    <el-button :disabled="saveDisabled" nativeType="submit" size="medium" type="primary" @click="addComment" >点我</el-button>
    </el-badge>
  </div>
</template>

<script>
import ElBadge from './components/ElBadge'
import ElButton from './components/ElButton.vue'

export default {
  name: 'app',
  data(){
    return{
      saveDisabled:true
    }
  },
  mounted(){
    setTimeout(() => {
      this.saveDisabled = false;
    }, 5000);
  },
  methods:{
    addComment(){
      console.log('添加评论')
    }
  },
  components: {
    ElButton,
    ElBadge
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
