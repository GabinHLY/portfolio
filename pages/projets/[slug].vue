<template>
  <div v-if="project">
    <div :style="{ backgroundColor: project.colors.secondary, color: project.colors.primary }" class="min-h-screen p-8">
      <h1 class="text-4xl font-bold mb-6">{{ project.title }}</h1>
      <img :src="project.image1" alt="Project image" class="w-full mb-6 rounded-lg shadow-lg" />
      <p class="text-lg">Bienvenue sur la page du projet {{ project.title }}.</p>
    </div>
  </div>
  <div v-else>
    <p>Projet non trouvé.</p>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import projects from '@/utils/projects';

const route = useRoute();
const project = ref(null);

const loadProject = () => {
  project.value = projects.find(p => p.slug === route.params.slug);
};

onMounted(() => {
  loadProject();
});

watch(() => route.params.slug, () => {
  loadProject();
});
</script>
