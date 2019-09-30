<template>
  <div class="dropdown-wrapper">
    <div class="dropdown-btn" @click="activited = !activited">
      <span class="dropdown-label">{{label}}</span>
      <div class="dropdown-value">{{value}}</div>
      <div class="dropdown-arrow">
        <div :class="`arrow-wrapper ${activited ? 'activited' : ''}`">
          <i class="cubeic-arrow"></i>
        </div>
      </div>
    </div>
    <div class="dropdown-content" v-if="activited">
      <div class="dropdown-content-top">
        <div class="check-item-wrapper" @click="clear">
          <div :class="`check-item ${unlimited ? 'activited' : ''}`">不限</div>
        </div>
        <span class="confirm right" @click="activited = !activited">收起</span>
      </div>
      <p class="dropdown-type">{{type === 'checkbox' ? '可多选' : '单选'}}</p>
      <div class="dropdown-content-list">
        <div class="check-item-wrapper" v-for="option in opts" :key="option.label" @click="toggle(option)">
          <div :class="`check-item ${option.checked ? 'activited' : ''}`">{{option.label}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {cloneObject} from '../../utils'

  export default {
    model: {
      prop: 'v',
      event: 'change'
    },
    props: {
      label: {
        type: String,
        default: ''
      },
      options: {
        type: Array,
        default: () => []
      },
      type: {
        type: String,
        default: 'checkbox'
      }
    },
    mounted() {
      let opts = cloneObject(this.options);
      opts.forEach(opt => opt.checked = (this.$attrs.v.split(',').indexOf(opt.value) > -1));
      this.opts = opts;
    },
    watch: {
      '$attrs.v'(value) {
        this.opts.forEach(opt => opt.checked = (value.split(',').indexOf(opt.value) > -1));
      }
    },
    data() {
      return {
        activited: false,
        opts: []
      }
    },
    computed: {
      unlimited() {
        return this.opts.filter(opt => opt.checked).length === 0;
      },
      value() {
        return this.unlimited ? '不限' : this.opts.filter(option => option.checked).map(option => option.label).join('、');
      }
    },
    methods: {
      toggle(option) {
        if (this.type === 'radio') {
          this.opts.forEach(opt => opt.checked = false);
          option.checked = true;
        } else
          option.checked = !option.checked;

        this.$emit('change', this.opts.filter(option => option.checked).map(option => option.value).join(','));
      },
      clear() {
        this.opts.forEach(opt => opt.checked = false);
        this.$emit('change', '');
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @require "../../style/color.styl"

  .check-item-wrapper
    width 33.33%
    padding 0 5px
    margin 10px 0
    box-sizing border-box
    display inline-block

    .check-item
      height: 40px;
      text-align: center;
      line-height: 40px;
      color: #8b93a6;
      background-color: #fff;

      &.activited
        background-color $--color-primary
        color white

  .dropdown-wrapper
    position relative

    .dropdown-btn
      padding 0 20px
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
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;

    .dropdown-type
      line-height 30px
      padding 0 5px
      color #8b93a6
      font-size 13px

    .dropdown-content
      padding 10px
      background-color #f8f9fa

      .dropdown-content-top
        .confirm
          color $--color-primary
          line-height 60px
          font-size 15px
          margin-right 5px
</style>
