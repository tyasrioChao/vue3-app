<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import HelloWorld from './components/HelloWorld.vue'
  import { zhCN, dateZhCN } from 'naive-ui';
	import NaiveProvider from '@/components/NaiveProvider.vue';
	// import { useThemeStore, subscribeStore } from '@/store';
	// const theme = useThemeStore();

  const themeOverrides = {
    common: {
      primaryColor: '#333'
    },
    Button: {
      textColor: '#333'
    },
    Select: {
      peers: {
        InternalSelection: {
          textColor: '#333'
        }
      }
    }
  }
</script>

<template>
  <n-config-provider
    :locale="zhCN"
    :date-locale="dateZhCN"
  >
    <naive-provider>
      <router-view />
    </naive-provider>
  </n-config-provider>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
