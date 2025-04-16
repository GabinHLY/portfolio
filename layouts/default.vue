<template>
    <div>
      <!-- Navbar -->
      <header class="fixed top-0 left-0 w-full z-50">
        <nav class="container mx-auto flex justify-between items-center px-6 py-4 text-sm uppercase font-semibold">
          <div class="flex space-x-6">
            <a href="#apropos" class="hover:text-orange-600">À propos</a>
            <a href="#projets" class="hover:text-orange-600">Projets</a>
            <a href="#skills" class="hover:text-orange-600">Skills</a>
            <a href="#experience" class="hover:text-orange-600">Expérience</a>
          </div>
          <div class="flex space-x-4">
            <a href="mailto:gabin@example.com" aria-label="email">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 4a2 2 0 012-2h12a2 2 0 012 2v1l-8 5-8-5V4z"/><path d="M18 8l-8 5-8-5v8a2 2 0 002 2h12a2 2 0 002-2V8z"/></svg>
            </a>
            <a href="https://github.com/gabinduboc" target="_blank" aria-label="github">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.29 3.438 9.772 8.207 11.387.6.112.793-.26.793-.577 0-.285-.01-1.04-.016-2.042-3.338.726-4.042-1.61-4.042-1.61-.546-1.386-1.333-1.754-1.333-1.754-1.09-.745.083-.73.083-.73 1.204.085 1.837 1.236 1.837 1.236 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.76-1.605-2.665-.304-5.466-1.332-5.466-5.932 0-1.31.468-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.323 3.3 1.23a11.51 11.51 0 013.006-.404c1.02.005 2.048.138 3.006.404 2.292-1.553 3.298-1.23 3.298-1.23.655 1.653.243 2.873.12 3.176.77.84 1.234 1.91 1.234 3.22 0 4.61-2.803 5.624-5.475 5.922.43.372.814 1.104.814 2.222 0 1.605-.015 2.9-.015 3.293 0 .32.19.694.8.576C20.565 22.27 24 17.79 24 12.5 24 5.87 18.63.5 12 .5z"/></svg>
            </a>
          </div>
        </nav>
      </header>
  
      <!-- Page content with padding for navbar -->
      <main class="pt-20">
        <slot />
      </main>
    </div>
  </template>
  