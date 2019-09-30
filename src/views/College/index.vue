<template>
  <Layout title="院校库" :has-padding="false">
    <template #view>
      <div class="college">
        <div class="search-wrapper">
          <cube-input v-model="collegeName" placeholder="请输入院校名称" @keyup.enter.native="submit"></cube-input>
        </div>

        <div class="filter-wrapper">
          <Dropdown label="一区省份" :options="provinces_1" v-model="province_1" @change="handleChange"/>
          <Dropdown label="二区省份" :options="provinces_2" v-model="province_2" @change="handleChange"/>
          <Dropdown label="院校类型" :options="types" v-model="type" @change="handleChange"/>
          <Dropdown label="院校特性" :options="properties" v-model="property" @change="handleChange"/>
          <Dropdown label="院校隶属" :options="attaches" v-model="attache" @change="handleChange"/>
          <Dropdown label="适合人群" :options="suitables" v-model="suitable" @change="handleChange"/>
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
    data() {
      return {
        collegeName: '',
        province_1: '',
        province_2: '',
        type: '',
        attache: '',
        property: '',
        suitable: '',

        provinces_1: cloneObject(provinces.filter(p => p.type === 1)),
        provinces_2: cloneObject(provinces.filter(p => p.type === 2)),
        types: cloneObject(types),
        attaches: cloneObject(attaches),
        properties: cloneObject(properties),
        suitables: cloneObject(suitables),

        collegeList: [],
        total: 0,
        page: 1,
        pageSize: 20
      }
    },
    methods: {
      async fetchCollegeList() {
        try {
          let {collegeName, province_1, province_2, type, attache, property, suitable, page, pageSize} = this;
          let response = await fetchCollegeList(
            collegeName, province_1 + province_2, type, attache, property, suitable, page, pageSize);
          if (response.code === 200) {
            let collegeList = response.data.list;
            collegeList.forEach(college => {
              college.attachName = collegeAttachDict[college.attach] ? collegeAttachDict[college.attach].name : '';
              college.provinceName = provinceDict[college.provinceId] ? provinceDict[college.provinceId].name : '';
              college.propertyList = college.property != null ? college.property.split(',') : [];
            });
            this.collegeList = collegeList;
            this.total = response.data.total;
          }
        } catch (e) {
          console.log(e);
        }
      },
      resetConditions() {
        this.province_1 = '';
        this.province_2 = '';
        this.type = '';
        this.attache = '';
        this.property = '';
        this.suitable = '';
      },
      resetPage() {
        this.page = 1;
        this.total = 0;
        this.collegeList = [];
      },
      submit() {
        this.resetPage();
        this.resetConditions();
        // this.fetchCollegeList();
        document.activeElement.blur();
      },
      handleChange() {
        this.collegeName = '';
        this.resetPage();
        // this.fetchCollegeList();
      }
    },
    mounted() {
      // this.fetchCollegeList();
    }
  }
</script>

<style lang="stylus" scoped>
  .search-wrapper
    margin-bottom 10px
    padding 20px 20px 10px
    box-sizing border-box
</style>
