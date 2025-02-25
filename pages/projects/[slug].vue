<template>
  <div class="content">
    <div class="back-button" @click="$router.push('/projects')">
      ← Retour aux projets
    </div>

    <div v-if="project" class="project-details">
      <div class="header">
        <h1 class="title">{{ project.name }}</h1>
        <span class="project-subtitle">{{ project.subtitle }}</span>
        <span class="project-date">{{ project.date }}</span>
      </div>
      <div class="ligne"><img 
        :src="project.image" 
        :alt="project.name" 
        class="project-image"
      />

      <div class="project-content">
        <h2>À propos de ce projet</h2>
        <p class="project-description">{{ project.description }}</p>
      </div>
</div>
      
      <button class="learn-more">LEARN MORE</button>
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
        subtitle : "PROJET PERSONNEL",
        slug: "clutch", 
        image: valorantImage,
        description: "CLUTCH est une application innovante dédiée aux passionnés d’e-sport, offrant une plateforme centralisée pour suivre les résultats, les calendriers et les lives des plus grandes compétitions. Conçu pour les amateurs et les parieurs, CLUTCH intègre un système de paris basé sur des jetons virtuels, permettant aux utilisateurs de tester leurs connaissances sans contraintes légales."
      },
      { 
        name: "SPORT ADDICT", 
        date: "2024 - 2025",
        subtitle : "PROJET PROFESSIONNEL", 
        slug: "sport-addict", 
        image: valorantImage,
        description: "SportAddict est un site vitrine conçu pour un magasin de vêtements de sport, mettant en avant ses produits sans fonctionnalité d’achat en ligne. Développé avec Nuxt, Directus et Tailwind CSS, il offre une navigation fluide et une présentation optimisée des articles, triés par marque et catégorie de sport. Ce site permet aux clients de découvrir l’offre du magasin et d’obtenir des informations essentielles sur les produits disponibles en boutique."
      },
      { 
        name: "HORSCAPE", 
        date: "2024 - NOW", 
        subtitle : "PROJET ACADÉMIQUE",
        slug: "horscape", 
        image: valorantImage,
        description: "Horscape est une plateforme conçue pour la réservation de box pour chevaux, inspirée du modèle Airbnb. Elle permet aux propriétaires de chevaux de trouver et de réserver des hébergements adaptés à leurs besoins, tout en offrant aux propriétaires de box un moyen simple de gérer leurs disponibilités. Développée avec une approche centrée sur l’expérience utilisateur, Horscape facilite la mise en relation entre les passionnés d’équitation et les structures d’accueil, en intégrant des fonctionnalités intuitives pour une réservation rapide et sécurisée."
      },
      { 
        name: "API_UNIVERSE", 
        date: "2024 - 2025", 
        subtitle : "PROJET ACADÉMIQUE",
        slug: "api-universe", 
        image: valorantImage,
        description: "API_Universe est un projet académique visant à créer une API connectée à un frontend, permettant aux utilisateurs d’imaginer et de construire leurs propres univers peuplés de personnages interactifs. Grâce à l’intelligence artificielle, l’application génère des visuels uniques pour les mondes et leurs habitants, tout en offrant une expérience immersive où les utilisateurs peuvent dialoguer avec leurs créations. Cette fusion entre storytelling, IA et génération d’images ouvre la voie à une nouvelle forme d’interaction narrative et créative."
      },
      { 
        name: "STOCK", 
        date: "2024 - 2025", 
        subtitle : "PROJET PERSONNEL",
        slug: "stock", 
        image: valorantImage,
        description: "STOCK est un outil de gestion de stocks développé avec React, Express et MySQL, conçu pour simplifier le suivi des produits d’un magasin. Il permet d’ajouter, modifier et supprimer des articles tout en affichant leur quantité disponible en temps réel. Grâce à une interface intuitive, les utilisateurs peuvent facilement gérer leur inventaire et éviter les ruptures de stock. Cet outil offre une solution efficace pour optimiser la gestion des produits et faciliter le suivi des entrées et sorties en magasin."
      },
      { 
        name: "BREAKOUT", 
        date: "2024", 
        subtitle : "PROJET ACADÉMIQUE",
        slug: "breakout", 
        image: valorantImage,
        description: "Breakout est un projet académique réalisé en équipe de trois, consistant à recréer le célèbre jeu d’arcade Breakout. Fidèle au gameplay original, le projet met en œuvre une gestion précise des collisions, une physique dynamique et une progression de difficulté. Ce développement a permis d’explorer des concepts clés du game development, comme la gestion des animations, les interactions avec le joueur et l’optimisation des performances."
      },
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
/* Amélioration du style pour une meilleure mise en page et lisibilité */
.content {
  max-width: 1100px;
  margin: 0 auto;
  padding: 50px 20px;
  font-family: 'Inter', sans-serif;

  border-radius: 12px;
}

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

.project-details {
  text-align: center;
  padding: 40px;
}


.project-subtitle {
  font-size: 1.2rem;
  font-weight: 600;
  color: #666;
  display: block;
  margin-bottom: 10px;
}

.project-date {
  font-size: 1.1rem;
  font-weight: 500;
  color: #888;
}

.ligne {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
}

.project-image {
  width: 50%;
  height: auto;
  border-radius: 8px;
  transition: transform 0.3s ease-in-out;
}

.project-image:hover {
  transform: scale(1.05);
}

.project-content {
  width: 45%;
  text-align: left;
}

.project-content h2 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 15px;
  color: #333;
}

.project-description {
  font-size: 1.2rem;
  line-height: 1.6;
  color: #444;
}

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