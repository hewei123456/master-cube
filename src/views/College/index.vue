<template>
  <Layout title="院校库">
    <template #view>
      <!--<span class="filter-btn icon iconfont icon-boshimao"></span>-->

      <div class="college">
        <div class="search-wrapper">
          <cube-input v-model="collegeName" placeholder="请输入院校名称" @keyup.enter.native="submit"></cube-input>
        </div>
        <div class="filter-wrapper">
          <Dropdown/>
          <!--<ul class="filter-list">-->
          <!--<li class="filter-item">-->
          <!--<span class="label">一区省份：</span>-->
          <!--<div class="content">-->
          <!--<ul class="selector clearfix">-->
          <!--<li class="option active"-->
          <!--@click="cancelAll(1)"-->
          <!--v-if="provinceAll"-->
          <!--&gt;全选-->
          <!--</li>-->
          <!--<li class="option"-->
          <!--@click="checkAll(1)"-->
          <!--v-else-->
          <!--&gt;全选-->
          <!--</li>-->
          <!--<li :class="{option: true, active: i.checked}" v-for="i in provinces" :key="i.value"-->
          <!--@click="toggle(i)">{{i.label}}-->
          <!--</li>-->
          <!--</ul>-->
          <!--</div>-->
          <!--</li>-->
          <!--<li class="filter-item">-->
          <!--<span class="label">二区省份：</span>-->
          <!--<div class="content">-->
          <!--<ul class="selector clearfix">-->
          <!--<li class="option active"-->
          <!--@click="cancelAll(2)"-->
          <!--v-if="otherAll"-->
          <!--&gt;全选-->
          <!--</li>-->
          <!--<li class="option"-->
          <!--@click="checkAll(2)"-->
          <!--v-else-->
          <!--&gt;全选-->
          <!--</li>-->
          <!--<li :class="{option: true, active: i.checked}" v-for="i in otherProvinces" :key="i.value"-->
          <!--@click="toggle(i)">{{i.label}}-->
          <!--</li>-->
          <!--</ul>-->
          <!--</div>-->
          <!--</li>-->

          <!--<li class="filter-item">-->
          <!--<span class="label">院校类型：</span>-->
          <!--<div class="content">-->
          <!--<ul class="selector clearfix">-->
          <!--<li :class="{option: true, active: i.checked}" v-for="i in types" :key="i.value"-->
          <!--@click="toggle(i)">{{i.label}}-->
          <!--</li>-->
          <!--</ul>-->
          <!--</div>-->
          <!--</li>-->

          <!--<li class="filter-item">-->
          <!--<span class="label">院校特性：</span>-->
          <!--<div class="content">-->
          <!--<ul class="selector clearfix">-->
          <!--<li :class="{option: true, active: i.checked}" v-for="i in properties" :key="i.value"-->
          <!--@click="toggle(i)">{{i.label}}-->
          <!--</li>-->
          <!--</ul>-->
          <!--</div>-->
          <!--</li>-->

          <!--<li class="filter-item">-->
          <!--<span class="label">院校隶属：</span>-->
          <!--<div class="content">-->
          <!--<ul class="selector clearfix">-->
          <!--<li :class="{option: true, active: i.checked}" v-for="i in attaches" :key="i.value"-->
          <!--@click="toggle(i)">{{i.label}}-->
          <!--</li>-->
          <!--</ul>-->
          <!--</div>-->
          <!--</li>-->

          <!--<li class="filter-item">-->
          <!--<span class="label">适合人群：</span>-->
          <!--<div class="content">-->
          <!--<ul class="selector clearfix">-->
          <!--<li :class="{option: true, active: i.checked}" v-for="i in suitables" :key="i.value"-->
          <!--@click="toggle(i)">{{i.label}}-->
          <!--</li>-->
          <!--</ul>-->
          <!--</div>-->
          <!--</li>-->
          <!--</ul>-->
        </div>
      </div>
    </template>
  </Layout>
</template>

<script>
  import {
    collegeAttachList as attaches, provinceList as provinces, collegeTypeList as types,
    suitableList as suitables, collegePropertyList as properties, collegeAttachDict, provinceDict
  } from '../../config'
  import {cloneObject} from '../../utils'
  import {fetchCollegeList} from '../../axios/apis'
  import {Dropdown} from '../../components'

  export default {
    components: {Dropdown},
    computed: {
      provinceAll() {
        let r = true;
        this.provinces.forEach(d => r = r && d.checked);
        return r;
      },
      otherAll() {
        let r = true;
        this.otherProvinces.forEach(d => r = r && d.checked);
        return r;
      },
      provinceIds() {
        return this.provinces.filter(i => i.checked).map(i => i.value).concat(this.otherProvinces.filter(i => i.checked).map(i => i.value)).join(',');
      },
      provinceStr() {
        return this.provinces.filter(i => i.checked).map(i => i.label).concat(this.otherProvinces.filter(i => i.checked).map(i => i.label)).join('、');
      },
      typeIds() {
        return this.types.filter(i => i.checked).map(i => i.value).join(',');
      },
      typeStr() {
        return this.types.filter(i => i.checked).map(i => i.label).join('、');
      },
      attacheIds() {
        return this.attaches.filter(i => i.checked).map(i => i.value).join(',');
      },
      attacheStr() {
        return this.attaches.filter(i => i.checked).map(i => i.label).join('、');
      },
      propertyIds() {
        return this.properties.filter(i => i.checked).map(i => i.value).join(',');
      },
      propertyStr() {
        return this.properties.filter(i => i.checked).map(i => i.label).join('、');
      },
      suitableIds() {
        return this.suitables.filter(i => i.checked).map(i => i.value).join(',');
      },
      suitableStr() {
        return this.suitables.filter(i => i.checked).map(i => i.label).join('、');
      }
    },
    data() {
      return {
        keywords: '',
        collegeName: '',
        page: 1,
        pageSize: 20,
        collegeList: [],
        total: 0,
        loading: false,
        provinces: cloneObject(provinces.filter(p => p.type === 1)),
        otherProvinces: cloneObject(provinces.filter(p => p.type === 2)),
        types: cloneObject(types),
        attaches: cloneObject(attaches),
        properties: cloneObject(properties),
        suitables: cloneObject(suitables)
      }
    },
    methods: {
      async fetchCollegeList() {
        try {
          let {collegeName, provinceIds, typeIds, attacheIds, propertyIds, suitableIds, page, pageSize} = this;
          let response = await fetchCollegeList(collegeName, provinceIds, typeIds, attacheIds, propertyIds, suitableIds, page, pageSize);
          if (response.code === 200) {
            let collegeList = response.data.list;
            collegeList.forEach(college => {
              college.attachName = collegeAttachDict[college.attach] ? collegeAttachDict[college.attach].name : '';
              college.provinceName = provinceDict[college.provinceId] ? provinceDict[college.provinceId].name : '';
              college.propertyList = college.property ? college.property.split(',') : [];
            });
            this.collegeList = collegeList;
            this.total = response.data.total;
          } else
            this.collegeList = [];
        } catch (e) {
          this.collegeList = [];
          console.log(e);
        }
      },
      checkAll(type, bool = true) {
        let res = cloneObject(provinces.filter(p => p.type === type));

        res.forEach(p => p.checked = bool);

        if (type === 1) {
          this.provinces = res;
        } else {
          this.otherProvinces = res;
        }

        this.fetchCollegeList();
      },
      cancelAll(type) {
        this.checkAll(type, false);
      },
      toggle(i) {
        i.checked = !i.checked;
        this.collegeName = '';
        this.keywords = '';
        this.page = 1;
        this.fetchCollegeList();
      },
      resetConditions() {
        this.provinces = cloneObject(provinces.filter(p => p.type === 1));
        this.otherProvinces = cloneObject(provinces.filter(p => p.type === 2));
        this.types = cloneObject(types);
        this.attaches = cloneObject(attaches);
        this.properties = cloneObject(properties);
        this.suitables = cloneObject(suitables);
      },
      submit() {
        this.resetConditions();
        this.page = 1;
        this.keywords = this.collegeName;
        this.fetchCollegeList();
      },
    },
    mounted() {
      // this.fetchCollegeList();
    }
  }
</script>

<style lang="stylus" scoped>
  .filter-btn
    position fixed
    top 30px
    right 10px
    z-index 999
    font-size 30px

  .search-wrapper
    margin-bottom 10px

  .filter-wrapper
    .filter-list
      .filter-item {
        display: flex;
        font-size: 14px;
        padding: 14px 0 6px;
        border-bottom: 1px dotted #e6e6e6;

        .label {
          width: 75px;
          line-height: 24px;
        }

        .content {
          flex: 1;

          .selector {
            .option {
              float: left;
              padding: 0 9px;
              margin-right: 10px;
              margin-bottom: 8px;
              cursor: pointer;
              border: 1px solid transparent;
              line-height: 22px;
              user-select: none;

              &.active {
                background-color: #fdc2a5;
                border-radius: 24px;
                color: white;
              }
            }
          }
        }
      }


</style>
