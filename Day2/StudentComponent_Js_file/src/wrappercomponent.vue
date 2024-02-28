<template>
  <div class="container my-5">
    <!-----header------->
    <div class="row">
        <div class="col-12">
            <!-- <h3 class="text-center">Header</h3> -->
            <headercomponent/>
        </div>
    </div>
    <!-----body------->
    <div class="row">
        <div class="col-4">
            <linkscomponent/>
        </div>
        <div class="col-8">
            <bodycomponent/>
        </div>
    </div>
    <!-----footer------->
    <div class="row">
        <div class="col-12">
            <footercomponent/>
        </div>
    </div>
  </div>
</template>

<script>
import headercomponent from './components/headercomponent.vue'
import linkscomponent from './components/linkscomponent.vue'
import bodycomponent from './components/bodycomponent.vue'
import footercomponent from './components/footercomponent.vue'

export default {
    name: 'wrappercomponent',
    components:{
        headercomponent,
        linkscomponent,
        bodycomponent,
        footercomponent,
},
}
</script>

<style>

</style>