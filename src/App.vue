<template>
  <div id="app">
      <img src="@/assets/img/rounded-top.png" class="d-none d-md-block" alt="" style="position: absolute; left: -1%; z-index: 10000; top:-1%;">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

