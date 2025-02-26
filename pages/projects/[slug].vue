<template>
  <div class="content">
    <div class="back-button" @click="$router.push('/projects')">
      ← Retour aux projets
    </div>

    <div v-if="project" class="project-details">
      <div class="header">
        <h1 class="title">{{ project.name }}</h1>

        <!-- Conteneur flex pour aligner le sous-titre à gauche et la date à droite -->
        <div class="project-meta">
          <span class="project-subtitle">{{ project.subtitle }}</span>
          <span class="project-date">{{ project.date }}</span>
        </div>
      </div>

      <div class="ligne">
        <img 
          :src="project.image" 
          :alt="project.name" 
          class="project-image"
        />
        <div class="project-content">
          <h2>A PROPOS DE CE PROJET</h2>
          <p class="project-description">{{ project.description }}</p>
        </div>
      </div>

      <button class="learn-more">Voir le site</button>
    </div>

    <div v-else class="not-found">
      <h2>Projet indisponible</h2>
      <p>Désolé, nous n'avons pas pu trouver le projet que vous recherchez.</p>
      <router-link to="/projects" class="back-link">Retourner aux projets</router-link>
    </div>
  </div>
</template>

<script>
import { useRoute, useRouter } from 'vue-router';
import { ref, watchEffect } from 'vue';
import valorantImage from '@/assets/images/valorant.jpg';

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    const project = ref(null);

    const projects = [
      { 
        name: "CLUTCH", 
        date: "2024 - MAINTENANT", 
        subtitle: "PROJET PERSONNEL",
        slug: "clutch", 
        image: valorantImage,
        description: "CLUTCH est une application innovante dédiée aux passionnés d’e-sport, offrant une plateforme centralisée pour suivre les résultats, les calendriers et les lives des plus grandes compétitions. Conçu pour les amateurs et les parieurs, CLUTCH intègre un système de paris basé sur des jetons virtuels, permettant aux utilisateurs de tester leurs connaissances sans contraintes légales."
      },
      { 
        name: "SPORT ADDICT", 
        date: "2024 - 2025",
        subtitle: "PROJET PROFESSIONNEL", 
        slug: "sport-addict", 
        image: valorantImage,
        description: "SportAddict est un site vitrine conçu pour un magasin de vêtements de sport, mettant en avant ses produits sans fonctionnalité d’achat en ligne. Développé avec Nuxt, Directus et Tailwind CSS, il offre une navigation fluide et une présentation optimisée des articles, triés par marque et catégorie de sport. Ce site permet aux clients de découvrir l’offre du magasin et d’obtenir des informations essentielles sur les produits disponibles en boutique."
      }
    ];

    const loadProject = () => {
      project.value = projects.find(p => p.slug === route.params.slug);
    };

    watchEffect(loadProject);

    return { project };
  }
};
</script>

<style scoped>
/* Contenu principal */
.content {
  max-width: 1100px;
  margin: 0 auto;
  padding: 50px 20px;
  font-family: 'Inter', sans-serif;
  border-radius: 12px;
}

/* Bouton retour */
.back-button {
  cursor: pointer;
  display: inline-block;
  padding: 10px 18px;
  margin-bottom: 30px;
  color: #E55C0E;
  font-size: 1rem;
  font-weight: 600;
  transition: color 0.3s ease-in-out;
}

.back-button:hover {
  color: #E55C0E;
}

/* En-tête du projet */
.project-details {
  text-align: center;
  padding: 40px;
}

/* Conteneur flex pour aligner le sous-titre et la date */
.project-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 600px;
  margin: 10px auto;
}

.project-subtitle {
  font-size: 1.2rem;
  font-weight: 600;
  font-style: italic;
  color: #111;
  text-align: left;
}

.project-date {
  font-size: 1.1rem;
  font-weight: 600;
  font-style: italic;
  color: #111;
  text-align: right;
}

/* Conteneur principal du projet */
.ligne {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
}

/* Image du projet */
.project-image {
  width: 50%;
  height: auto;
  border-radius: 8px;
  transition: transform 0.3s ease-in-out;
}

.project-image:hover {
  transform: scale(1.05);
}

/* Description du projet */
.project-content {
  width: 45%;
  display: flex;
  text-align: left;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.project-content h2 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 15px;
  color: #111;
}

.project-description {
  font-size: 1.2rem;
  font-weight: 400;
  color: #111;
}

/* Bouton "Learn More" */
.learn-more {
  display: inline-block;
  margin-top: 20px;
  padding: 14px 24px;
  background-color: #ff5722;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;
}

.learn-more:hover {
  background-color: #e64a19;
}

/* Projet introuvable */
.not-found {
  text-align: center;
  padding: 50px 0;
}

.not-found h2 {
  font-size: 2.2rem;
  color: #222;
  margin-bottom: 20px;
}

.back-link {
  display: inline-block;
  margin-top: 20px;
  padding: 12px 20px;
  background-color: #ff5722;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 6px;
  text-decoration: none;
  transition: background 0.3s;
}

.back-link:hover {
  background-color: #d84315;
}
</style>
