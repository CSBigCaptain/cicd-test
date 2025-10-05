<template>
  <div class="p-[32px]">
    <h1 class="text-5xl fw-bolder">CI/CD Environments Test Page</h1>
    <h2 class="text-3xl fw-bold">INFO</h2>
    <UTable :data="data"></UTable>
  </div> 
</template>

<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig()

const data = ref([
  {
    key: 'Site URL',
    value: runtimeConfig.public.siteUrl,
  },
  {
    key: 'Platform',
    value: runtimeConfig.public.platiform,
  },
  {
    key: 'Private Env Test A',
    value: runtimeConfig.public.private_test_a,
  },
  {
    key: 'Public Env Test A',
    value: runtimeConfig.public.vars_test_a,
  },
])
</script>

<style scoped>
div > * {
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>

<style>
table td {
  font-size: 1.1em;
  font-family: 'Public Sans', 'Noto Sans SC', 'Source Han Sans SC', sans-serif;
}
</style>
