<template>
  <div class="text-[#111]">
    <!-- Hero -->
    <section class="flex flex-row items-center justify-center pt-16 pb-0 gap-12 font-montserrat">
      <img src="/img/avatar1.png" alt="avatar" class="w-100 h-auto" />
      <div class="text-left">
        <h1 class="text-[150px] font-black leading-none">
          <span class="text-[#E55C0E] block">GABIN</span>
          <span class="text-[#E55C0E] block">DUBOC</span>
        </h1>
        <p class="text-[43px] font-medium mt-4">DÉVELOPPEUR WEB</p>
      </div>
    </section>

    <!-- À propos -->
    <section id="apropos" class="bg-[#E55C0E] py-20 pb-0 text-white">
      <h2 class="text-[64px] text-[#EFEFEF] font-black uppercase mb-8 text-center">À propos de moi</h2>
      <div class="container mx-auto flex flex-row items-end">
        <div class="w-1/2 text-left pr-8 pb-20">
          <p class="text-xl mb-6">
            Passionné par le développement web, je crée des applications modernes
            et intuitives en utilisant les dernières technologies.
          </p>
          <p class="text-xl mb-6">
            Mon approche combine créativité et rigueur technique pour
            livrer des solutions adaptées aux besoins de chaque projet.
          </p>
        </div>
        <div class="w-1/2 flex justify-end">
          <img src="/img/avatar2.png" alt="avatar" class="w-100 h-auto" />
        </div>
      </div>
    </section>

    <!-- Projets -->
    <section id="projets" class="py-20 px-4 font-montserrat bg-[#efefef] relative overflow-hidden">
      <div class="container mx-auto">
        <h2 class="text-[64px] font-black uppercase text-[#E55C0E] text-center">Mes Projets</h2>

        <div class="flex justify-end items-start mb-8">
          <p class="text-[32px] font-medium">
            {{ currentIndex + 1 }} <span class="text-[#999]">/ {{ total }}</span>
          </p>
        </div>

        <div class="flex justify-center mb-12">
          <div class="relative rounded-2xl max-w-4xl w-full group">
            <img
              :src="projects[currentIndex].pres"
              :alt="projects[currentIndex].title"
              class="rounded-2xl w-full object-contain transition duration-300"
            />
            <div
              class="absolute inset-0 bg-[#202328] opacity-0 group-hover:opacity-90 transition-opacity duration-300 rounded-2xl flex items-center justify-center"
            >
              <NuxtLink :to="`/projets/${projects[currentIndex].slug}`">
                <button
                  class="bg-[#E55C0E] text-white px-6 py-3 rounded-lg font-medium opacity-100 cursor-pointer hover:bg-[#F15A24] transition duration-300"
                >
                  En savoir plus
                </button>
              </NuxtLink>
            </div>
          </div>
        </div>

        <div class="flex justify-center items-center space-x-6 mb-12">
          <button
            v-for="(project, index) in projects"
            :key="index"
            @click="setCurrent(index)"
            :class="[
              'text-[32px] w-8 h-8 rounded-full flex items-center justify-center transition',
              currentIndex === index
                ? 'text-white bg-[#E55C0E]'
                : 'text-[#111] hover:text-[#F15A24]'
            ]"
          >
            {{ index + 1 }}
          </button>
        </div>

        <div class="relative">
          <img src="/img/avatar3.png" alt="avatar pensif" class="absolute bottom-0 left-50 w-70 z-10" />
        </div>
      </div>
    </section>

    <!-- Skills Carousel -->
    <section id="skills" class="py-20 font-montserrat overflow-hidden w-full">
      <h2 class="text-[64px] font-black uppercase text-[#E55C0E] mb-16 text-center">Skills</h2>

      <div class="relative w-full">
      <!-- Avatar positioned on top of carousel -->
      <div class="absolute left-16 top-1/2 transform -translate-y-1/2 z-10">
        <img src="/img/avatar4.png" alt="avatar café" class="w-60 h-auto" />
      </div>

      <!-- Carousel full width, passing under the avatar -->
      <div class="w-full overflow-hidden">
        <div
        class="flex items-center space-x-12 animate-scroll"
        :style="{ animationDuration: scrollDuration + 's' }"
        >
        <template v-for="(logo, index) in duplicatedLogos" :key="index">
          <img
          :src="`/img/${logo}`"
          :alt="logo.replace('.png', '')"
          class="h-20 w-auto object-contain transition-transform duration-300"
          />
        </template>
        </div>
      </div>
      </div>
    </section>

    <!-- Expérience -->
    <section id="experience" class="bg-[#E55C0E] py-24 text-white font-montserrat">
      <div class="container mx-auto flex flex-col md:flex-row justify-between items-start">
        <!-- Liste des entreprises -->
        <div class="w-full md:w-1/3 relative">
          <ul class="border-l-4 border-white pl-6 space-y-6 text-xl font-medium">
            <li
              v-for="(exp, index) in experiences"
              :key="index"
              @click="selected = index"
              :class="[
                'cursor-pointer',
                selected === index ? 'text-white font-bold' : 'text-white/70 hover:text-white'
              ]"
            >
              {{ exp.company }}
            </li>
          </ul>
        </div>

        <!-- Détail expérience -->
        <div class="w-full md:w-2/3 mt-12 md:mt-0 md:pl-16">
          <h3 class="text-2xl font-bold mb-2">
            {{ experiences[selected].title }} - {{ experiences[selected].company }}
          </h3>
          <p class="text-sm text-white/80 mb-6">{{ experiences[selected].dates }}</p>
          <ul class="space-y-4 text-lg">
            <li
              v-for="(task, i) in experiences[selected].tasks"
              :key="i"
              class="flex items-start gap-3"
            >
              <span class="text-2xl">✓</span>
              <span>{{ task }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>




  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import projects from '@/utils/projects'

const currentIndex = ref(0)
const total = computed(() => projects.length)
const setCurrent = (index) => {
  currentIndex.value = index
}

const logos = [
  'html.png',
  'css.png',
  'js.png',
  'node.png',
  'express.png',
  'php.png',
  'react.png',
  'vue.png',
  'docker.png',
  'mysql.png',
  'mongodb.png',
  'wordpress.png',
  'github.png',
  'directus.png'
]

const duplicatedLogos = [...logos, ...logos]
const scrollDuration = 40


const experiences = [
  {
    company: 'OnRuntimeStudio',
    title: 'Développeur Web',
    dates: 'AVRIL 2025 - MAI 2025',
    tasks: [
      'Développement front-end avec React',
      'Intégration de la bibliothèque CSS “kitchn”',
      'Collaboration avec l’équipe projet'
    ]
  },
  {
    company: 'SportAddict',
    title: 'Développeur Front-End',
    dates: 'JANVIER 2025 - MARS 2025',
    tasks: [
      'Création du site vitrine avec Nuxt',
      'Optimisation SEO',
      'Intégration du catalogue produit avec Directus'
    ]
  },
  {
    company: 'Conciergerie&Voyage',
    title: 'Développeur Full-Stack',
    dates: '2024',
    tasks: [
      'Développement d’un système de réservation',
      'Mise en place de l’espace client',
      'Gestion d’API pour les paiements'
    ]
  },
  {
    company: 'Senteurs&Cie',
    title: 'Assistant développeur',
    dates: 'ÉTÉ 2024',
    tasks: [
      'Refonte graphique du site',
      'Ajout de fonctionnalités e-commerce',
      'Suivi des commandes'
    ]
  },
  {
    company: 'BAFA',
    title: 'Animateur',
    dates: 'ÉTÉ 2023',
    tasks: [
      'Encadrement de groupes d’enfants',
      'Animation d’ateliers créatifs',
      'Responsable logistique des sorties'
    ]
  }
]

const selected = ref(0)

</script>

<style scoped>
@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-scroll {
  display: flex;
  width: max-content;
  animation: scroll linear infinite;
}

.animate-scroll:hover {
  animation-play-state: paused;
}
</style>
