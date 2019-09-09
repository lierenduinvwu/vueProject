<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <button @click="table">click</button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import {export2Excel} from './utils/export2Excel'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data () {
    return {
      tHeader: [
		// '鲜花',
		// '颜色',
		// '照片'
  ],
  tbody: [
		{
			name: '玫瑰花',
      color: '红色',
      age: 20,
			pic: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2801998497,4036145562&fm=27&gp=0.jpg'
		},
		{
			name: '菊花',
			color: '黄色',
      age: 20,
			pic: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1506844670,1837003941&fm=200&gp=0.jpg'
		}
  ]
    }
  },
  methods: {
    table () {
      export2Excel(this.tHeader, this.tbody, '我爱花朵')
    }
  }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
