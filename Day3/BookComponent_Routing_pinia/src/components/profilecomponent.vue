<template>
  <mainwrapper/>
</template>

<script>
import { userAuthenticated } from '@/store/authontication';
import mainwrapper from '../mainwrapper.vue'
export default {
  name: 'profilecomponent',
  components:{mainwrapper},
  data() {
    return {
      auth: userAuthenticated(),
    };
  },
};
</script>

<style>
</style>
