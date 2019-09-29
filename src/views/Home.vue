<template>
  <Layout title="首页">
    <template #view>
      <div class="home">
        <!--<cube-button @click="navigateToMaster">master</cube-button>-->

        <ul class="panel clearfix">
          <li class="panel-item left" v-for="item in panelList" :key="item.icon">
            <div class="panel-item-inner" @click="navigateToMaster(item.name)">
              <p class="panel-item-icon">
                <span :class="`icon iconfont icon-${item.icon}`"></span>
              </p>

              <p class="panel-item-text">{{item.text}}</p>
            </div>
          </li>
        </ul>
      </div>
    </template>
  </Layout>
</template>

<script>

  export default {
    data() {
      return {
        panelList: [
          {
            text: '硕士目录',
            icon: 'boshimao',
            name: 'master'
          }, {
            text: '复试&调剂',
            icon: 'xuexizhongxin',
            name: 'reexam'
          }, {
            text: '院校检索',
            icon: 'xuexiao',
            name: 'college'
          }, {
            text: '专业检索',
            icon: 'zhuanye',
            name: 'major'
          }
        ]
      }
    },
    methods: {
      navigateToMaster(name) {
        this.$navigate(name);
      }
    }
  }
</script>


<style lang="stylus">
  @require "../style/color.styl";
  .panel
    .panel-item
      width 50%
      padding 20px
      box-sizing border-box

      .panel-item-inner
        border-radius 5px
        border 1px solid $--color-border
        height 100%

        .panel-item-icon
          line-height 60px
          text-align center

          .icon
            font-size 50px
            color #fdc2a5

        .panel-item-text
          line-height: 40px
          text-align center
          font-size 15px

</style>
