<template>
    <div class="content">
      <h1 class="title">PROJECTS</h1>
  
      <div class="projects-container">
        <div class="projects-list">
          <router-link 
            v-for="(project, index) in projects" 
            :key="project.slug"
            :to="`/projects/${project.slug}`"
            class="project-item"
          >
            <span class="arrow"> > </span>
            <div class="project-info">
              <p class="project-title">{{ project.name }}</p>
              <p class="project-date">{{ project.date }}</p>
            </div>
            <div class="view-arrow">></div>
          </router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        projects: [
          { name: "CLUTCH | PROJET PERSONNEL", date: "2024 - MAINTENANT", slug: "clutch", image: new URL('@/assets/images/valorant.jpg', import.meta.url).href },
          { name: "SPORT ADDICT | PROJET PROFESSIONEL", date: "2024 - 2025", slug: "sport-addict", image: "/images/project2.png" },
          { name: "HORSCAPE | PROJET ACADÉMIQUE", date: "2024 - MAINTENANT", slug: "horscape", image: "/images/project3.png" },
          { name: "API_UNIVERSE | PROJET ACADÉMIQUE", date: "2024 - 2025", slug: "api-universe", image: "/images/project4.png" },
          { name: "STOCK | PROJET PERSONNEL", date: "2024", slug: "stock", image: "/images/project5.png" },
          { name: "BREAKOUT | PROJET ACADÉMIQUE", date: "2024", slug: "breakout", image: "/images/project6.png" },
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .content {
    max-width: 1100px;
    margin: auto;
    padding: 40px 20px;
    text-align: left;
  }
  
  .projects-container {
    display: flex;
    align-items: flex-start;
    margin-top: 20px;
    gap: 30px;
  }
  
  .projects-list {
    width: 100%;
  }
  
  .project-item {
    display: flex;
    align-items: center;
    padding: 15px 10px;
    border-bottom: 2px solid black;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    color: black;
  }
  
  .project-item:hover {
    background: rgba(0, 0, 0, 0.05);
  }
  
  .arrow {
    font-size: 1.5rem;
    font-weight: bold;
    margin-right: 10px;
  }
  
  .project-info {
    flex: 1;
  }
  
  .project-title {
    font-weight: bold;
  }
  
  .project-date {
    font-size: 0.9rem;
    color: gray;
  }
  
  .view-arrow {
    background: #e65100;
    color: white;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
  }
  </style>
  