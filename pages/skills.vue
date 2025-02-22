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
  import htmlIcon from '../assets/icons/html.png';
import cssIcon from '../assets/icons/css.png';
import jsIcon from '../assets/icons/js.png';
import vueIcon from '../assets/icons/vue.png';
import nodeIcon from '../assets/icons/node.png';
import expressIcon from '../assets/icons/express.png';
import phpIcon from '../assets/icons/php.png';
import mysqlIcon from '../assets/icons/mysql.png';
import gitIcon from '../assets/icons/git.png';
import dockerIcon from '../assets/icons/docker.png';

export default {
  data() {
    return {
      activeSection: null,
      frontendSkills: [
        { name: 'HTML', icon: htmlIcon },
        { name: 'CSS', icon: cssIcon },
        { name: 'JavaScript', icon: jsIcon },
        { name: 'Vue.js', icon: vueIcon }
      ],
      backendSkills: [
        { name: 'Node.js', icon: nodeIcon },
        { name: 'Express', icon: expressIcon },
        { name: 'PHP', icon: phpIcon },
        { name: 'MySQL', icon: mysqlIcon }
      ],
      toolsSkills: [
        { name: 'Git', icon: gitIcon },
        { name: 'Docker', icon: dockerIcon }
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
    width: 100%;
    height: 40px;
    object-fit: contain;
  }
  </style>
  