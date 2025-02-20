<template>
    <div class="project-details">
      <h1 class="project-title">{{ project.name }}</h1>
      <p class="project-date">{{ project.date }}</p>
      <img v-if="project.image" :src="project.image" alt="Project Image" class="project-image">
      <p class="project-description">{{ project.description }}</p>
  
      <nuxt-link to="/projects">
        <button class="back-button">Back to Projects</button>
      </nuxt-link>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        projects: [
          { name: "CLUCTH | PERSONAL PROJECT", date: "2024 - NOW", slug: "clutch", image: "/images/valorant.jpg", description: "A Valorant-based Esports prediction app." },
          { name: "SPORT ADDICT | PROFESSIONAL PROJECT", date: "2024 - 2025", slug: "sport-addict", image: "/images/project2.png", description: "A fitness tracking and coaching platform." },
          { name: "HORSCAPE | SCHOOL PROJECT", date: "2024 - 2025", slug: "horscape", image: "/images/project3.png", description: "An educational game about horse care and riding." },
          { name: "API_UNIVERSE | SCHOOL PROJECT", date: "2024 - 2025", slug: "api-universe", image: "/images/project4.png", description: "A universal API hub for developers." },
          { name: "STOCK | PERSONAL PROJECT", date: "2024", slug: "stock", image: "/images/project5.png", description: "A stock management system for small businesses." },
          { name: "BREAKOUT | SCHOOL PROJECT", date: "2024", slug: "breakout", image: "/images/project6.png", description: "A modern rework of the classic Breakout game." }
        ],
        project: null
      };
    },
    mounted() {
      const slug = this.$route.params.slug;
      this.project = this.projects.find(p => p.slug === slug);
  
      if (!this.project) {
        console.error("Projet introuvable ! Redirection...");
        this.$router.push("/projects"); // Retourne vers la liste des projets
      }
    }
  };
  </script>
  
  <style scoped>
  .project-details {
    max-width: 900px;
    margin: auto;
    text-align: center;
    padding: 40px 20px;
  }
  
  .project-title {
    font-size: 3rem;
    font-weight: bold;
    color: #e65100;
  }
  
  .project-date {
    font-size: 1.2rem;
    color: gray;
    margin-bottom: 20px;
  }
  
  .project-image {
    width: 100%;
    max-width: 600px;
    height: auto;
    border-radius: 10px;
    margin-bottom: 20px;
  }
  
  .project-description {
    font-size: 1.1rem;
    line-height: 1.6;
  }
  
  .back-button {
    background: #e65100;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 5px;
    margin-top: 20px;
  }
  
  .back-button:hover {
    background: #c14400;
  }
  </style>
  