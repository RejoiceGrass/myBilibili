<template>
  <div>
    <div class="bili_header">
      <div class="header-bar">
        <ul class="left-entry">
          <li class="entry-title">
            <a>
              <span>首页</span>
            </a>
          </li>
          <li class="v-popover-wrap" v-for="item in titleList" :key="item.id">
            <a>
              <span>{{item.title}}</span>
            </a>
          </li>
        </ul>
        <div></div>
        <ul></ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'topHder',
  data () {
    return {
      titleList:[
        {
          id:1,
          title:"番剧"
        },
        {
          id:2,
          title:"直播"
        }
      ]
    }
  }
}
</script>

<style scoped>
    .bili_header{
        width: 100%;
        position: relative;
        min-height: 64px;
        margin: 0 auto;
        max-width: 2560px;
    }
    .header-bar{
      position: absolute;
      top: 0;
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items:center;
      padding: 0 24px;
      height: 64px;
      max-width: 2560px;
    }
    .left-entry{
      display: flex;
      align-items: center;
      flex-shrink: 0;
    }
    .bili-header .left-entry .entry-title{
      height: 64px;
      line-height: 64px;
      color: #fff;
      font-size: 14px;
      cursor: pointer;
      margin-right: 10px;
    }
    body{
      margin: 0;
      padding: 0;
    }
    body ul{
      list-style-type: none;
    }
    body a{
      text-decoration: none;
      background-color: transparent;
    }
</style>