<template>
  <div class="container">
    <div class="content">
      <!-- Texte SKILLS en vertical -->
      <div class="title">SKILLS</div>

      <!-- Image de profil -->
      <img src="../assets/images/shoot.jpg" alt="Profile Image" class="profile-image" />
    </div>

    <!-- Liste des compétences -->
    <div class="skills-list">
      <div v-for="(category, key) in skillCategories" :key="key">
        <h3 class="category-title" @click="toggleSection(key)">{{ category.title }}</h3>
        <div v-if="activeSection === key" class="skills-grid">
          <img v-for="(skill, index) in category.skills" :key="index" :src="skill.icon" :alt="skill.name" class="skill-icon" />
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
      skillCategories: {
        frontend: {
          title: 'FRONT-END',
          skills: [
            { name: 'HTML', icon: htmlIcon },
            { name: 'CSS', icon: cssIcon },
            { name: 'JavaScript', icon: jsIcon },
            { name: 'Vue.js', icon: vueIcon }
          ]
        },
        backend: {
          title: 'BACK-END',
          skills: [
            { name: 'Node.js', icon: nodeIcon },
            { name: 'Express', icon: expressIcon },
            { name: 'PHP', icon: phpIcon },
            { name: 'MySQL', icon: mysqlIcon }
          ]
        },
        tools: {
          title: 'OUTILS',
          skills: [
            { name: 'Git', icon: gitIcon },
            { name: 'Docker', icon: dockerIcon }
          ]
        }
      }
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
  max-width: 1200px;
  margin: auto;
}

@media (min-width: 768px) {
  .container {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .content {
    display: flex;
    align-items: center;
    gap: 20px;
  }
}

@media (max-width: 767px) {
  .content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
}

.title {
    transform: rotate(0deg);
    writing-mode: vertical-lr;
  }

.profile-image {
  width: 100%;
  max-width: 300px;
  height: auto;
  object-fit: cover;
}

@media (min-width: 768px) {
  .profile-image {
    width: 250px;
    height: 550px;
  }
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
  text-align: center;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  gap: 15px;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
  padding: 10px;
}

.skill-icon {
  width: 100%;
  max-width: 80px;
  height: auto;
  object-fit: contain;
}
</style>
