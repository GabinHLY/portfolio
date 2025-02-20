<template>
    <div class="container">
      <!-- Texte SKILLS en vertical -->
      <div class="title">SKILLS</div>
  
      <!-- Image -->
      <img src="../assets/images/shoot.jpg" alt="Profile Image" class="profile-image" />
  
      <!-- Liste des compétences -->
      <div class="skills-list">
        <div>
          <h3 class="category-title" @click="toggleSection('frontend')">FRONT-END</h3>
          <div v-if="activeSection === 'frontend'" class="skills-grid">
            <img v-for="(tech, index) in frontendSkills" :key="index" :src="tech.icon" :alt="tech.name" class="skill-icon" />
          </div>
        </div>
        <div>
          <h3 class="category-title" @click="toggleSection('backend')">BACK-END</h3>
          <div v-if="activeSection === 'backend'" class="skills-grid">
            <img v-for="(tech, index) in backendSkills" :key="index" :src="tech.icon" :alt="tech.name" class="skill-icon" />
          </div>
        </div>
        <div>
          <h3 class="category-title" @click="toggleSection('tools')">OUTILS</h3>
          <div v-if="activeSection === 'tools'" class="skills-grid">
            <img v-for="(tool, index) in toolsSkills" :key="index" :src="tool.icon" :alt="tool.name" class="skill-icon" />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        activeSection: null,
        frontendSkills: [
          { name: 'HTML', icon: '../assets/icons/html.png' },
          { name: 'CSS', icon: '../assets/icons/css.png' },
          { name: 'JavaScript', icon: '../assets/icons/js.png' },
          { name: 'Vue.js', icon: '../assets/icons/vue.png' }
        ],
        backendSkills: [
          { name: 'Node.js', icon: '../assets/icons/node.png' },
          { name: 'Express', icon: '../assets/icons/express.png' },
          { name: 'PHP', icon: '../assets/icons/php.png' },
          { name: 'MySQL', icon: '../assets/icons/mysql.png' }
        ],
        toolsSkills: [
          { name: 'Git', icon: '/icons/git.png' },
          { name: 'Docker', icon: '/icons/docker.png' },
          { name: 'Webpack', icon: '/icons/webpack.png' }
        ]
      };
    },
    methods: {
      toggleSection(section) {
        this.activeSection = this.activeSection === section ? null : section;
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
  
  @media (min-width: 768px) {
    .container {
      flex-direction: row;
      align-items: flex-start;
    }
  }
  
  .title {
    transform: rotate(0deg);
    writing-mode: vertical-lr;
  }
  
  .profile-image {
    width: 250px;
    height: 550px;
    object-fit: cover;
    margin: 20px;
  }
  
  .skills-list {
    width: 100%;
  }
  
  .category-title {
    color: #555;
    font-style: italic;
    font-weight: bold;
    margin-top: 20px;
    border-top: 2px solid #ddd;
    padding-top: 10px;
    cursor: pointer;
  }
  
  .skills-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 15px;
    margin-top: 10px;
  }
  
  .skill-icon {
    width: 40px;
    height: 40px;
  }
  </style>
  