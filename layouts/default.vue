<template>
    <div>
      <!-- Navbar -->
      <header class="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-[#EFEFEF]">
        <nav class="container mx-auto flex justify-between items-center px-6 py-6 font-montserrat">
          <!-- Logo/Brand -->
        <div class="flex items-center text-2xl font-black text-[#111]">
        <img src="/img/avatar1.png" alt="avatar" class="h-12 w-auto mr-3" />
        <p class="text-[#E55C0E]">GABIN<br>DUBOC</p>
        </div>
          
          <!-- Navigation Links -->
          <div class="hidden md:flex space-x-12">
        <a href="#apropos" class="text-[#111] font-bold uppercase text-sm hover:text-[#E55C0E] transition-colors duration-300 tracking-wide">
          À propos
        </a>
        <a href="#projets" class="text-[#111] font-bold uppercase text-sm hover:text-[#E55C0E] transition-colors duration-300 tracking-wide">
          Projets
        </a>
        <a href="#skills" class="text-[#111] font-bold uppercase text-sm hover:text-[#E55C0E] transition-colors duration-300 tracking-wide">
          Skills
        </a>
        <a href="#experience" class="text-[#111] font-bold uppercase text-sm hover:text-[#E55C0E] transition-colors duration-300 tracking-wide">
          Expérience
        </a>
          </div>
          
          <!-- Social Links -->
          <div class="flex space-x-3">
        <a href="mailto:gabin@example.com" 
           aria-label="email" 
           class="p-3 text-[#111] hover:text-[#E55C0E] hover:bg-[#E55C0E]/10 rounded-full transition-all duration-300">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 4a2 2 0 012-2h12a2 2 0 012 2v1l-8 5-8-5V4z"/>
            <path d="M18 8l-8 5-8-5v8a2 2 0 002 2h12a2 2 0 002-2V8z"/>
          </svg>
        </a>
        <a href="https://github.com/gabinduboc" 
           target="_blank" 
           aria-label="github"
           class="p-3 text-[#111] hover:text-[#E55C0E] hover:bg-[#E55C0E]/10 rounded-full transition-all duration-300">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.29 3.438 9.772 8.207 11.387.6.112.793-.26.793-.577 0-.285-.01-1.04-.016-2.042-3.338.726-4.042-1.61-4.042-1.61-.546-1.386-1.333-1.754-1.333-1.754-1.09-.745.083-.73.083-.73 1.204.085 1.837 1.236 1.837 1.236 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.76-1.605-2.665-.304-5.466-1.332-5.466-5.932 0-1.31.468-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.323 3.3 1.23a11.51 11.51 0 013.006-.404c1.02.005 2.048.138 3.006.404 2.292-1.553 3.298-1.23 3.298-1.23.655 1.653.243 2.873.12 3.176.77.84 1.234 1.91 1.234 3.22 0 4.61-2.803 5.624-5.475 5.922.43.372.814 1.104.814 2.222 0 1.605-.015 2.9-.015 3.293 0 .32.19.694.8.576C20.565 22.27 24 17.79 24 12.5 24 5.87 18.63.5 12 .5z"/>
          </svg>
        </a>
        
        <!-- Mobile Menu Button -->
        <button class="md:hidden p-3 text-[#111] hover:text-[#E55C0E] hover:bg-[#E55C0E]/10 rounded-full transition-all duration-300" 
            @click="mobileMenuOpen = !mobileMenuOpen">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
          </div>
        </nav>
        
        <!-- Trait sous la navbar -->
        <div class="h-1 w-full transition-colors duration-500 ease-in-out" 
             :class="isOnOrangeSection ? 'bg-[#EFEFEF]' : 'bg-[#E55C0E]'"></div>
        
        <!-- Mobile Menu -->
        <div v-show="mobileMenuOpen" class="md:hidden backdrop-blur-xl border-t border-[#efefef] font-montserrat">
          <div class="px-6 py-6 space-y-4">
        <a href="#apropos" 
           class="block text-[#111] font-bold uppercase text-sm hover:text-[#E55C0E] transition-colors duration-300 tracking-wide py-2"
           @click="mobileMenuOpen = false">
          À propos
        </a>
        <a href="#projets" 
           class="block text-[#111] font-bold uppercase text-sm hover:text-[#E55C0E] transition-colors duration-300 tracking-wide py-2"
           @click="mobileMenuOpen = false">
          Projets
        </a>
        <a href="#skills" 
           class="block text-[#111] font-bold uppercase text-sm hover:text-[#E55C0E] transition-colors duration-300 tracking-wide py-2"
           @click="mobileMenuOpen = false">
          Skills
        </a>
        <a href="#experience" 
           class="block text-[#111] font-bold uppercase text-sm hover:text-[#E55C0E] transition-colors duration-300 tracking-wide py-2"
           @click="mobileMenuOpen = false">
          Expérience
        </a>
          </div>
        </div>
      </header>
  
      <!-- Page content with padding for navbar -->
      <main class="pt-20">
        <slot />
      </main>
      
      <!-- Footer -->
      <footer class="bg-[#EFEFEF] text-[#111] font-medium py-12 md:py-16 font-montserrat">
        <div class="container mx-auto px-6">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <!-- Section Contact -->
            <div class="text-center md:text-left">
              <h3 class="text-xl md:text-2xl font-bold text-[#E55C0E] mb-4">Contact</h3>
              <div class="space-y-3">
                <a href="mailto:gabin@example.com" 
                   class="flex items-center justify-center md:justify-start space-x-2 hover:text-[#E55C0E] transition-colors duration-300">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 4a2 2 0 012-2h12a2 2 0 012 2v1l-8 5-8-5V4z"/>
                    <path d="M18 8l-8 5-8-5v8a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                  </svg>
                  <span class="text-sm md:text-base">gabinduboc@gmail.com</span>
                </a>
                <div class="flex items-center justify-center md:justify-start space-x-2">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M5.05 3.636A1 1 0 015.964 3h8.072a1 1 0 01.914.636l1.5 3.5A1 1 0 0116 8v8a1 1 0 01-1 1H5a1 1 0 01-1-1V8a1 1 0 01-.45-.864l1.5-3.5zM15 9H5v6h10V9z"/>
                  </svg>
                  <span class="text-sm md:text-base">Portfolio - 2025</span>
                </div>
              </div>
            </div>
            
            <!-- Section Liens rapides -->
            <div class="text-center md:text-left">
              <h3 class="text-xl md:text-2xl font-bold text-[#E55C0E] mb-4">Navigation</h3>
              <div class="space-y-3">
                <a href="#apropos" class="block text-sm md:text-base hover:text-[#E55C0E] transition-colors duration-300">À propos</a>
                <a href="#projets" class="block text-sm md:text-base hover:text-[#E55C0E] transition-colors duration-300">Projets</a>
                <a href="#skills" class="block text-sm md:text-base hover:text-[#E55C0E] transition-colors duration-300">Skills</a>
                <a href="#experience" class="block text-sm md:text-base hover:text-[#E55C0E] transition-colors duration-300">Expérience</a>
              </div>
            </div>
            
            <!-- Section Réseaux sociaux -->
            <div class="text-center md:text-left">
              <h3 class="text-xl md:text-2xl font-bold text-[#E55C0E] mb-4">Suivez-moi</h3>
              <div class="flex justify-center md:justify-start space-x-4">
                <a href="mailto:gabin@example.com" 
                   aria-label="email" 
                   class="p-3 bg-[#d3d3d3] hover:bg-[#E55C0E] rounded-full transition-all duration-300 group">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 4a2 2 0 012-2h12a2 2 0 012 2v1l-8 5-8-5V4z"/>
                    <path d="M18 8l-8 5-8-5v8a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                  </svg>
                </a>
                <a href="https://github.com/gabinduboc" 
                   target="_blank" 
                   aria-label="github"
                   class="p-3 bg-[#d3d3d3] hover:bg-[#E55C0E] rounded-full transition-all duration-300 group">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.29 3.438 9.772 8.207 11.387.6.112.793-.26.793-.577 0-.285-.01-1.04-.016-2.042-3.338.726-4.042-1.61-4.042-1.61-.546-1.386-1.333-1.754-1.333-1.754-1.09-.745.083-.73.083-.73 1.204.085 1.837 1.236 1.837 1.236 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.76-1.605-2.665-.304-5.466-1.332-5.466-5.932 0-1.31.468-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.323 3.3 1.23a11.51 11.51 0 013.006-.404c1.02.005 2.048.138 3.006.404 2.292-1.553 3.298-1.23 3.298-1.23.655 1.653.243 2.873.12 3.176.77.84 1.234 1.91 1.234 3.22 0 4.61-2.803 5.624-5.475 5.922.43.372.814 1.104.814 2.222 0 1.605-.015 2.9-.015 3.293 0 .32.19.694.8.576C20.565 22.27 24 17.79 24 12.5 24 5.87 18.63.5 12 .5z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <!-- Ligne de séparation -->
          <div class="border-t border-[#333] mt-8 md:mt-12 pt-6 md:pt-8">
            <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div class="flex items-center">
                <img src="/img/avatar1.png" alt="avatar" class="h-8 w-auto mr-3" />
                <p class="text-[#E55C0E] font-bold">GABIN DUBOC</p>
              </div>
              <p class="text-sm text-center md:text-right">
                © 2025 Gabin Duboc. Tous droits réservés.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </template>

  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  
  const mobileMenuOpen = ref(false)
  const isOnOrangeSection = ref(false)
  
  const checkCurrentSection = () => {
    const scrollY = window.scrollY
    const aproposSection = document.getElementById('apropos')
    
    if (aproposSection) {
      const aproposTop = aproposSection.offsetTop - 100 // Offset pour la navbar
      const aproposBottom = aproposTop + aproposSection.offsetHeight
      
      // Si on est dans la section "À propos" (qui a un fond orange)
      isOnOrangeSection.value = scrollY >= aproposTop && scrollY < aproposBottom
    }
  }
  
  onMounted(() => {
    window.addEventListener('scroll', checkCurrentSection)
    checkCurrentSection() // Check initial position
  })
  
  onUnmounted(() => {
    window.removeEventListener('scroll', checkCurrentSection)
  })
  </script>
  