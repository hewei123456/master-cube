<template>
  <div class="dropdown-wrapper">
    <div class="dropdown-btn" @click="activited = !activited">
      <span class="dropdown-label">一区省份</span>
      <div class="dropdown-value">
        不限
      </div>
      <div class="dropdown-arrow">
        <div :class="`arrow-wrapper ${activited ? 'activited' : ''}`">
          <i class="cubeic-arrow"></i>
        </div>
      </div>
    </div>
    <div class="dropdown-content" v-if="activited">
      <div class="dropdown-content-top">
        <cube-button outline inline>确 认</cube-button>
      </div>
      <div class="dropdown-content-list">
        <cube-checkbox-group v-model="checkList" :options="opts"/>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      options: {
        type: Array,
        default: () => []
      }
    },
    mounted(){
      this.opts = this.options;
    },
    data() {
      return {
        activited: false,
        checkList: [],
        opts: []
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @require "../../style/color.styl"

  .dropdown-wrapper
    position relative

    .dropdown-btn
      height 50px
      line-height 50px
      display flex
      border-bottom 1px solid $--color-border

      .dropdown-arrow
        width 30px
        font-size 18px
        text-align right

        .arrow-wrapper
          display inline-block
          transition all .2s

          &.activited
            transform: rotate(90deg)

      .dropdown-label
        width 80px

      .dropdown-value
        flex 1
        text-align right

</style>
