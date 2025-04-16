<template>
  <NuxtLayout>
    <div class="font-montserrat">
      <NuxtPage />
    </div>
  </NuxtLayout>
</template>

<script setup>
useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900&display=swap'
    }
  ]
})
</script>

<style>
html, body {
  background-color: #efefef;
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
}
</style>
