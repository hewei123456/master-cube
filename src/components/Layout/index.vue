<template>
  <div class='container-wrapper'>
    <header class='navbar-wrapper'>
      <div class='navbar-title'>
        {{$attrs.title}}
        <div class='nav-left clearfix'>
          <i v-if="pages.length > 0" class="cubeic-back" @click="goBack"></i>
        </div>
      </div>
    </header>
    <section class='container'>
      <cube-scroll>
        <div class="view-wrapper">
          <slot name="view"></slot>
        </div>
      </cube-scroll>
    </section>
  </div>
</template>
<script>
  import {mapState, mapMutations} from 'vuex'

  export default {
    computed: {
      ...mapState({
        pages: state => state.pages,
      })
    },
    methods: {
      ...mapMutations(['popPage']),
      goBack() {
        this.$router.go(-1);
        this.popPage();
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .container-wrapper
    display: flex
    flex-direction: column
    height: calc(100vh)

    .navbar-wrapper
      padding 8px 0
      line-height 28px
      border-bottom: 1px solid #eee

      .navbar-title
        position: relative
        font-size: 18px
        text-align: center

        .nav-left
          position: absolute
          left: 20px
          top: 0
          width: 130px
          display: flex
          justify-content: space-between

    .container
      flex: 1
      overflow-y: scroll
      font-size 16px

      .view-wrapper
        box-sizing border-box
        padding 10px
</style>
