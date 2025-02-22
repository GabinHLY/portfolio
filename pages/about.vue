<template>
  <div class="content">
    <h1 class="title">A PROPOS</h1>

    <div class="profile">
      <img src="../assets/images/Leonard_pres.png" alt="Image" class="image-profile">
      <p class="description">
        Je m'appelle Gabin, un passionné de développement web avec une approche axée sur l'innovation et la performance.<br>
        Curieux et rigoureux, je suis toujours à la recherche de nouveaux défis pour progresser et affiner mes compétences techniques.<br>
        <br>
        💡 Pourquoi le développement web ?<br>
        Parce que j’aime créer, expérimenter et voir mes idées prendre vie à travers des interfaces modernes et interactives.<br>
        <br>
        🎯 Mon objectif ?<br>
        Évoluer dans le domaine du développement web, travailler sur des projets variés et pourquoi pas, intégrer une entreprise dynamique où je pourrais continuer à apprendre et à innover.<br>
        <br>
        Si tu veux en savoir plus ou échanger sur un projet, contacte-moi !
      </p>
    </div>

    <!-- Timeline Section -->
    <div class="timeline-section">
      <h2 class="timeline-title">MON PARCOURS</h2>
      <div class="timeline">
        <div v-for="(experience, index) in experiences" :key="index" class="timeline-item">
          <div class="timeline-marker"></div>
          <div class="timeline-date">{{ experience.date }}</div>
          <div class="timeline-content">
            <h3 class="experience-title">{{ experience.title }}</h3>
            <p class="experience-company">@ {{ experience.company }}</p>
            <p class="experience-description">{{ experience.description }}</p>
            <div class="tags">
              <span v-for="tag in experience.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const experiences = [ 
  {
    date: "Mars 2025 - Juin 2025",
    title: "Stage en entreprise",
    company: "onRuntime Studio",
    description: "Développement du front d'une application.",
    tags: ["React", "Typescript", "Kitchn"]
  },
  {
    date: "Déc 2024 - Mars 2025",
    title: "Stage en entreprise",
    company: "SportAddict",
    description: "Développement d’un site pour un magasin de sport.",
    tags: ["Nuxt", "Directus", "TailwindCSS"]
  },
  {
    date: "Fév 2022 - Mai 2022",
    title: "Stage en entreprise",
    company: "Senteurs&Cie",
    description: "Création d'un site e-commerce avec un back-office.",
    tags: ["Wordpress"]
  },
];
</script>

<style scoped>
/* Section principale */
.content {
  max-width: 900px;
  margin: auto;
  text-align: left;
  padding: 40px 20px 0;
}

/* Profil */
.profile {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
}

.image-profile {
  width: 400px;
  height: 500px;
  max-height: 300px;
  object-fit: cover;
}

.description {
  flex: 1;
  font-size: 1rem;
  line-height: 1.6;
}

/* Timeline */
.timeline-section {
  margin-top: 60px;
}

.timeline-title {
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size: 5rem;
  font-weight: 900;
  text-align: center;
  color:#E55C0E;
  margin: 0;
  letter-spacing: 7.5px;
}

.timeline {
  position: relative;
  max-width: 800px;
  margin: auto;
  padding: 20px 0;
  border-left: 4px solid #E65100; /* Ligne verticale */
}

.timeline-item {
  display: flex;
  align-items: flex-start;
  position: relative;
  margin-bottom: 40px;
  padding-left: 30px;
}

.timeline-marker {
  width: 16px;
  height: 16px;
  background: #E65100;
  border-radius: 50%;
  position: absolute;
  left: -10px;
  top: 5px;
}

.timeline-date {
  font-weight: bold;
  color: #E65100;
  min-width: 150px;
  text-align: right;
  margin-right: 20px;
}

.timeline-content {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.1);
  flex: 1;
  min-height: 180px; /* Hauteur minimale pour uniformiser */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.timeline-content:hover {
  transform: translateY(-5px);
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.15);
}

/* Ajuste la hauteur du texte pour éviter les écarts */
.experience-description {
  flex-grow: 1; /* Force la description à occuper un espace égal */
  min-height: 50px; /* Hauteur fixe pour éviter les variations */
  display: flex;
  align-items: center; /* Aligne verticalement */
}

.tags {
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
}

.tag {
  display: inline-block;
  background: #E65100;
  color: white;
  padding: 6px 12px;
  border-radius: 5px;
  font-size: 0.85rem;
  font-weight: bold;
  margin-right: 5px;
}

</style>
