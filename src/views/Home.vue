<template>
  <Layout title="首页">
    <template #view>
      <div class="home">
        <cube-button @click="navigateToMaster">master</cube-button>
      </div>
    </template>
  </Layout>
</template>

<script>
  export default {
    methods: {
      navigateToMaster() {
        this.$navigate('master');
      }
    }
  }
</script>
