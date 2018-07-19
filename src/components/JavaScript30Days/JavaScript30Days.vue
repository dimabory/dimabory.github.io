<template>
  <div id="js-30-days">
    <div class="row justify-content-end">
      <a href="https://javascript30.com/" target="_blank" class="badge badge-secondary mr-3">JavaScript 30 Day Challenge</a>
    </div>
    <b-card no-body>
      <b-tabs pills card vertical navWrapperClass="col-12 col-sm-3 col-md-2">
        <b-tab :title="i.title" v-for="(i, key) in tabs" :key="key" :active="i.active">
          <transition name="fade" mode="out-in" appear>
            <keep-alive>
              <component :is="i.component"></component>
            </keep-alive>
          </transition>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
  import tabs from './tabs'

  export default {
    name: 'JavaScript30Days',
    data: () => ({
      tabs
    })
  }
</script>

<style scoped>
  #js-30-days >>> .card-header {
    padding: 0.75rem 0.3rem;
  }
  /*
   * or scss
   #js-30-days {
      /deep/ .card-header {}
   }
   */
</style>
