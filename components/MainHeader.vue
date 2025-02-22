<template>
  <header class="header">
    <div class="container">
      <nav class="navbar">
        <div class="menu-toggle" @click="toggleMenu">
          <span :class="{ 'active': isMenuOpen }"></span>
          <span :class="{ 'active': isMenuOpen }"></span>
          <span :class="{ 'active': isMenuOpen }"></span>
        </div>
        <div class="nav-links" :class="{ 'open': isMenuOpen }">
          <button class="close-menu" @click="closeMenu">&times;</button>
          <NuxtLink to="/" @click="closeMenu">ACCUEIL</NuxtLink>
          <NuxtLink to="/about" @click="closeMenu">A PROPOS</NuxtLink>
          <NuxtLink to="/projects" @click="closeMenu">PROJETS</NuxtLink>
          <NuxtLink to="/skills" @click="closeMenu">COMPETENCES</NuxtLink>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<style scoped>
.header {
  background-color: #efefef;
  padding: 1rem;
  position: relative;
  z-index: 10;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar {
  display: flex;
  align-items: center;
  width: 100%;
}

.nav-links {
  display: flex;
  gap: 1rem;
}

.nav-links a {
  text-decoration: none;
  color: #000;
  font-weight: bold;
}

/* Responsive */
.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
}

.menu-toggle span {
  display: block;
  width: 30px;
  height: 3px;
  background-color: #000;
  transition: all 0.3s;
}

@media (max-width: 768px) {
  .menu-toggle {
    display: flex;
  }

  .nav-links {
    position: fixed;
    top: 0;
    right: 0;
    width: 250px;
    height: 100vh;
    background-color: #efefef;
    box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
    flex-direction: column;
    align-items: flex-start;
    padding: 2rem;
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
    z-index: 1000;
  }

  .nav-links.open {
    transform: translateX(0);
  }

  .close-menu {
    background: none;
    border: none;
    font-size: 2rem;
    color: #000;
    position: absolute;
    top: 10px;
    right: 15px;
    cursor: pointer;
    display: block;
  }
}

@media (min-width: 769px) {
  .close-menu {
    display: none;
  }
}
</style>
