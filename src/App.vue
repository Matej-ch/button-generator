<template>
  <div id="app">
    <btnGenerator/>
  </div>
</template>

<script>

import btnGenerator from "@/components/btnGenerator";

export default {
  name: 'App',
  components: {
      btnGenerator
  }
}
</script>

<style>

@import './assets/styles/main.css';
@import './assets/styles/tailwind.css';

</style>
