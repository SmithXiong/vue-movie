<template>
  <div class="home">
    <h3>正在热映</h3>
    <ul class="ul-list">
      <li class="li-list" v-for="item in movies">
        <ul class="ul-item">
          <li class="li-item">
            <img :src="item.images.medium" class="img-item"/>
          </li>
          <li class="li-item">
            <div class="item-title">{{item.title}}</div>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
  export default{
    name: 'home',
    data () {
      return {
        movies: []
      }
    },
    created () {
      this.initData()
    },
    methods: {
      initData: function () {
        var xhr = new XMLHttpRequest()
        var that = this
        xhr.open('GET', '/v2/movie/in_theaters')
        xhr.onload = function () {
          var result = JSON.parse(xhr.responseText)
          console.log(result)
          that.movies = result.subjects
        }
        xhr.send()
      }
    }
  }
</script>

<style scoped>
  .home {
    width: 950px;
    margin: 0 auto;
    text-align: left;
  }

  .ul-list {
    list-style-type: none;
    padding: 0;
  }

  .li-list {
    display: inline-block;
    margin: 0 10px;
    float: left;
    height: 200px;
  }

  .ul-item {
    list-style-type: none;
    padding: 0;
  }

  .li-item {
    display: block;
    margin: 10px 10px;
    width: 100px;
  }

  .img-item {
    width: 100px;
    height:150px;
  }

  .item-title {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  .item-title:hover {
    text-overflow: inherit;
    overflow: visible;
    white-space: pre-line;
  }
</style>
