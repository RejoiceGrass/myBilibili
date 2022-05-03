<template>
  <div>
    <div class="bili-header">
      <div class="header-bar">
        <ul class="left-entry">
          <li >
            <a href="//www.baidu.com" class="entry-title">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="zhuzhan-icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.73252 2.67094C3.33229 2.28484 3.33229 1.64373 3.73252 1.25764C4.11291 0.890684 4.71552 0.890684 5.09591 1.25764L7.21723 3.30403C7.27749 3.36218 7.32869 3.4261 7.37081 3.49407H10.5789C10.6211 3.4261 10.6723 3.36218 10.7325 3.30403L12.8538 1.25764C13.2342 0.890684 13.8368 0.890684 14.2172 1.25764C14.6175 1.64373 14.6175 2.28484 14.2172 2.67094L13.364 3.49407H14C16.2091 3.49407 18 5.28493 18 7.49407V12.9996C18 15.2087 16.2091 16.9996 14 16.9996H4C1.79086 16.9996 0 15.2087 0 12.9996V7.49406C0 5.28492 1.79086 3.49407 4 3.49407H4.58579L3.73252 2.67094ZM4 5.42343C2.89543 5.42343 2 6.31886 2 7.42343V13.0702C2 14.1748 2.89543 15.0702 4 15.0702H14C15.1046 15.0702 16 14.1748 16 13.0702V7.42343C16 6.31886 15.1046 5.42343 14 5.42343H4ZM5 9.31747C5 8.76519 5.44772 8.31747 6 8.31747C6.55228 8.31747 7 8.76519 7 9.31747V10.2115C7 10.7638 6.55228 11.2115 6 11.2115C5.44772 11.2115 5 10.7638 5 10.2115V9.31747ZM12 8.31747C11.4477 8.31747 11 8.76519 11 9.31747V10.2115C11 10.7638 11.4477 11.2115 12 11.2115C12.5523 11.2115 13 10.7638 13 10.2115V9.31747C13 8.76519 12.5523 8.31747 12 8.31747Z" fill="currentColor"></path></svg>
              <span>首页</span>
            </a>
          </li>
          <li class="v-popover-wrap" v-for="item in titleList" :key="item.id">
            <a class="default-entry" target="_blank">
              <span>{{item.title}}</span>
            </a>
          </li>
        </ul>
        <div class="center-search-container">
          <div class="center-search__bar" :class="focus" @click="changeMood">
            <!-- {{is-focus}} -->
            <form id="nav-searchform" :class="focus" style="border-radius:8px">
              <div class="nav-search-content">
                <input class="nav-search-input"  @focus="focus"  @input="input" type="text" autocomplete="off" accesskey="s" maxlength="100" x-webkit-speech x-webkit-grammar="builtin:translate" placeholder="游戏作者是怎样在镜头外“偷懒”的？" title="游戏作者是怎样在镜头外“偷懒”的？">
                <div class="nav-search-clean">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 14.75C11.7279 14.75 14.75 11.7279 14.75 8C14.75 4.27208 11.7279 1.25 8 1.25C4.27208 1.25 1.25 4.27208 1.25 8C1.25 11.7279 4.27208 14.75 8 14.75ZM9.64999 5.64303C9.84525 5.44777 10.1618 5.44777 10.3571 5.64303C10.5524 5.83829 10.5524 6.15487 10.3571 6.35014L8.70718 8.00005L10.3571 9.64997C10.5524 9.84523 10.5524 10.1618 10.3571 10.3571C10.1618 10.5523 9.84525 10.5523 9.64999 10.3571L8.00007 8.70716L6.35016 10.3571C6.15489 10.5523 5.83831 10.5523 5.64305 10.3571C5.44779 10.1618 5.44779 9.84523 5.64305 9.64997L7.29296 8.00005L5.64305 6.35014C5.44779 6.15487 5.44779 5.83829 5.64305 5.64303C5.83831 5.44777 6.15489 5.44777 6.35016 5.64303L8.00007 7.29294L9.64999 5.64303Z" fill="#C9CCD0"></path></svg>
                </div>
              </div>
              <div class="nav-search-btn"></div>
            </form>
            <div class="search-panel" style="display:none">
              <div class="history" style="max:372px">
                  <div class="header">
                    <div class="title">搜索历史</div>
                    <div class="clear">清空</div>
                  </div>
                  <div class="histories-wrap"></div>
              </div>
              <div class="trending" style="max:372px">
              </div>
            </div>
          </div>
        </div>
        <ul></ul>
      </div>
      <div class="header-banner">
        <picture class="v-img banner-img" id="bili-header-banner-img">
          <source srcset="https://dd-static.jd.com/ddimg/jfs/t1/52587/31/17780/39887/6270c314E1dad229b/77b40e7020389b11.png" type="image/webp"> 
          <img src="https://dd-static.jd.com/ddimg/jfs/t1/52587/31/17780/39887/6270c314E1dad229b/77b40e7020389b11.png" alt loading="eager" onload>
        </picture>
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
        },
         {
          id:3,
          title:"游戏中心"
        },
         {
          id:4,
          title:"会员购"
        }, {
          id:5,
          title:"漫画"
        },{
          id:6,
          title:"赛事"
        }
      ],
      focus:'',
      history: {
        field: [],
        record: [],
      },
      historyFlag: false,
      historyRecord: [],
      historyField: [],
    }
  },
  methods:{
    changeMood(){
      if(this.focus == ''){
      this.focus = "is-focus"
      }else{
        this.focus = ''
      }
    }
  }
}
</script>

<style scoped>
    .bili-header{
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
    .bili-header .left-entry .entry-title, .bili-header .left-entry .download-entry, .bili-header .left-entry .default-entry, .bili-header .left-entry .loc-entry{
      height: 64px;
      line-height: 64px;
      color: #fff;
      font-size: 14px;
      cursor: pointer;
      margin-right: 10px;
    }
    body ul{
      list-style-type: none;
    }
    body a{
      text-decoration: none;
      background-color: transparent;
    }
    li{
      border:0;
      font-family: inherit;
      font-size: 100%;
      font-weight: normal;
      font-style: normal;
      line-height: 1.25;
    }
    body, div, img,dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, legend, input, button, textarea, p, blockquote, table, th, td {margin:0; padding:0;}  
    .bili-header .left-entry .default-entry{
      margin-right: 10px;
    }
    .v-img{
    display: inline-block;
    line-height: 1;
    width: 100%;
    height: 100%;
    vertical-align: middle;
    background-color: #F1F2F3;
    }
    .center-search-container{
      flex: 1 auto;
      height: 38rpx;
    }
    .center-search__bar{
      position: relative;
      margin: 0 auto;
      min-width: 181px;
      max-width: 500px;
    }
    .center-search__bar is-focus{
      box-shadow: 0 0 30px rgba(0 0 0 / 10%);
      border-radius: 8px;
    }
    .search-panel{
      width: 100%;
      max-height: 612px;
      overflow-y: auto;
      background: #ffffff;
      border: 1px solid #E3E5E7;
      border-top: none;
      border-radius: 0 0 8px 8px;
      padding: 13px 0 16px;
    }
    #nav-searchform{
      display: flex;
      align-items: center;
      padding: 0 48px 0 4px;
      position: relative;
      z-index: 1;
      overflow: hidden;
      line-height: 38px;
      height: 40px;
      border: 1px solid #E3E5E7;
      background-color: #F1F2F3;
      opacity: .9;
      transition: background-color .3s;  
      transition-property: background-color;
      transition-duration: 0.3s;
      transition-timing-function: ease;
      transition-delay: 0s;
    }
    .nav-search-content{
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
      padding: 0 8px;
      width: 100%;
      height: 32px;
      border: 2px solid transparent;
      border-radius: 6px;
    }
    .nav-search-input{
      flex: 1;
      overflow: hidden;
      padding-right: 8px;
      border: none;
      background-color: transparent;
      box-shadow: none;
      color: #61666D;
      font-size: 14px;
      line-height: 20px;
    }
    .nav-search-clean{
      width: 16px;
      height: 16px;
      right: 10px;
      cursor: pointer;
      visibility: hidden;
    }
    #nav-searchform .is-focus{
      border: 1px solid E3E5E7;
      border-bottom: none;
      background: #F1F2F3;
    }
    #nav-searchform .is-focus::before{
      opacity: 1;
      background: #F1F2F3;
     }
     /* 聚焦搜索框显示 */
     .header{
       display: flex;
       align-items: center;
       justify-content: center;
       padding: 0 16px;
     }
     .bili-header .header .title{
      height: 24px;
      font-size: 16px;
      line-height: 24px;
     }
</style>