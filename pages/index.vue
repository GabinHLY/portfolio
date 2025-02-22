<template>
  <h1 class="title">GABIN DUBOC</h1>

    <!-- Section principale -->
    <div class="main-section">
      <img src="../assets/images/KawhiLeonard1.jpg" alt="Image" class="image-left">
      <div class="text-section">
        <h2 class="web-title">
          <span class="black-bold">DÉVELOPPEUR</span> 
          <span class="black-bold">WEB</span>
        </h2>
        <img src="../assets/images/KawhiLeonard2.jpg" alt="Image" class="image-right">
        <p class="description">
          Salut, moi c’est Gabin, étudiant en développement web. Passionné par la création de sites et d’applications, j’explore différentes technologies pour concevoir des projets modernes et performants. Toujours en quête d’apprentissage, je développe mes compétences en frontend et backend à travers des projets concrets. Mon objectif : allier technique et créativité pour proposer des solutions adaptées aux besoins des utilisateurs. 
        </p>
      </div>
    </div>
</template>
  
<style scoped>
/* Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Conteneur principal */
.container {
  background-color: #F5F5F5;
  width: 100%;
  min-height: 100vh;
  padding: 20px;
}


/* Section principale */
.main-section {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 50px 0;
  gap: 50px;
}

/* Images */
.image-left {
  width: 650px;
  height: 400px;
  background-color: #87CEFA; /* Couleur temporaire si image non chargée */
  object-fit: cover;
}

.image-right {
  width: 200px;
  height: auto;
  display: block;
  margin: 10px 0;
  background-color: #87CEFA; /* Couleur temporaire si image non chargée */
}

/* Section de texte */
.text-section {
  max-width: 500px;
}

/* Titre Web Developer */
.web-title {
  font-size: 32px;
  font-weight: bold;
  text-transform: uppercase;
}

.black-bold {
  font-weight: bold;
  color: black;
}

/* Paragraphe */
.description {
  color: #333;
  font-size: 16px;
  line-height: 1.6;
  margin-top: 10px;
  font-weight: 500;
}
</style>