<template>
  <div class="content">
    <div class="back-button" @click="$router.push('/projects')">
      ← Back to Projects
    </div>

    <div v-if="project" class="project-details">
      <h1 class="project-title">{{ project.name }}</h1>
      <div class="project-metadata">
        <span class="project-date">{{ project.date }}</span>
        <span class="project-type">{{ getProjectType(project.name) }}</span>
      </div>
      
      <img 
        :src="project.image" 
        :alt="project.name" 
        class="project-image"
      />
      
      <div class="project-content">
        <h2>About this project</h2>
        <p class="project-description">{{ project.description }}</p>
      </div>
    </div>
    
    <div v-else class="not-found">
      <h2>Project Not Found</h2>
      <p>Sorry, we couldn't find the project you're looking for.</p>
      <router-link to="/projects" class="back-link">Return to Projects</router-link>
    </div>
  </div>
</template>

<script>
import { useRoute, useRouter } from 'vue-router';
import { ref, watchEffect } from 'vue';

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    const project = ref(null);
    
    const projects = [
      { 
        name: "CLUTCH | PERSONAL PROJECT", 
        date: "2024 - NOW", 
        slug: "clutch", 
        image: new URL('@/assets/images/valorant.jpg', import.meta.url).href,
        description: "A betting platform for esports, featuring real-time odds updates and secure payment processing. Built with Vue.js and Node.js."
      },
      { 
        name: "SPORT ADDICT | PROFESSIONAL PROJECT", 
        date: "2024 - 2025", 
        slug: "sport-addict", 
        image: new URL('@/assets/images/valorant.jpg', import.meta.url).href,
        description: "A betting platform for esports, featuring real-time odds updates and secure payment processing. Built with Vue.js and Node.js."
      },
      { 
        name: "HORSCAPE | SCHOOL PROJECT", 
        date: "2024 - NOW", 
        slug: "horscape", 
        image: new URL('@/assets/images/valorant.jpg', import.meta.url).href,
        description: "A betting platform for esports, featuring real-time odds updates and secure payment processing. Built with Vue.js and Node.js."
      },
      { 
        name: "API_UNIVERSE | SCHOOL PROJECT", 
        date: "2024 - 2025", 
        slug: "api-universe", 
        image: new URL('@/assets/images/valorant.jpg', import.meta.url).href,
        description: "A betting platform for esports, featuring real-time odds updates and secure payment processing. Built with Vue.js and Node.js."
      },
      { 
        name: "STOCK | PERSONAL PROJECT", 
        date: "2024 - 2025", 
        slug: "stock", 
        image: new URL('@/assets/images/valorant.jpg', import.meta.url).href,
        description: "A betting platform for esports, featuring real-time odds updates and secure payment processing. Built with Vue.js and Node.js."
      },
      { 
        name: "BREAKOUT | SCHOOL PROJECT", 
        date: "2024", 
        slug: "breakout", 
        image: new URL('@/assets/images/valorant.jpg', import.meta.url).href,
        description: "A betting platform for esports, featuring real-time odds updates and secure payment processing. Built with Vue.js and Node.js."
      },
      
    ];

    const getProjectType = (name) => {
      if (name.includes('PERSONAL')) return 'Personal Project';
      if (name.includes('PROFESSIONAL')) return 'Professional Project';
      if (name.includes('SCHOOL')) return 'School Project';
      return 'Project';
    };

    const loadProject = () => {
      project.value = projects.find(p => p.slug === route.params.slug);
    };

    watchEffect(loadProject);

    return { 
      project,
      getProjectType
    };
  }
};
</script>

<style scoped>
.content {
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 20px;
}

.back-button {
  cursor: pointer;
  display: inline-block;
  padding: 8px 16px;
  margin-bottom: 32px;
  color: #666;
  transition: color 0.3s;
}

.back-button:hover {
  color: #e65100;
}

.project-details {
  text-align: left;
}

.project-title {
  font-size: 2.5rem;
  margin-bottom: 16px;
  color: #333;
}

.project-metadata {
  margin-bottom: 32px;
}

.project-date,
.project-type {
  display: inline-block;
  margin-right: 24px;
  color: #666;
  font-size: 1.1rem;
}

.project-image {
  width: 100%;
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 32px;
}

.project-content {
  max-width: 800px;
}

.project-content h2 {
  font-size: 1.8rem;
  margin-bottom: 16px;
  color: #444;
}

.project-description {
  font-size: 1.2rem;
  line-height: 1.6;
  color: #555;
}

.not-found {
  text-align: center;
  padding: 48px 0;
}

.not-found h2 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 16px;
}

.back-link {
  display: inline-block;
  margin-top: 24px;
  padding: 12px 24px;
  background-color: #e65100;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.back-link:hover {
  background-color: #d84315;
}
</style>