<template>
    <div class="p-12 font-montserrat">
      <h1 class="text-[64px] font-bold text-[#E55C0E]">{{ project?.title }}</h1>
      <img :src="project?.image1" :alt="project?.title" class="mt-4 rounded-lg max-w-xs w-full" />
      <p class="mt-6 text-xl max-w-3xl">
        Voici la page dédiée au projet <strong>{{ project?.title }}</strong>.
        Tu pourras bientôt y retrouver une description détaillée, le stack utilisé, les objectifs, et un lien vers la démo.
      </p>
    </div>
  </template>
  
  <script setup>
  import { useRoute, useRouter } from 'vue-router'
  import { ref, onMounted } from 'vue'
  import projects from '@/utils/projects'
  
  const route = useRoute()
  const router = useRouter()
  const project = ref(null)
  
  onMounted(() => {
    const found = projects.find(p => p.slug === route.params.slug)
    if (!found) {
      router.push('/404') // Redirige vers une vraie page 404 si elle existe
    } else {
      project.value = found
    }
  })
  </script>
  