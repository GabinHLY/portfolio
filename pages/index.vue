<template>
  <div class="container">
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
  width: 100%;
  min-height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

/* Section principale */
.main-section {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  gap: 30px;
  padding: 20px;
}

/* Images */
.image-left {
  width: 100%;
  max-width: 600px;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
}

.image-right {
  width: 100px;
  height: auto;
  margin: 10px 0;
  object-fit: cover;
  border-radius: 5px;
}

/* Section de texte */
.text-section {
  max-width: 500px;
  text-align: center;
}

/* Titre Web Developer */
.web-title {
  font-size: 28px;
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

/* Responsive */
@media (max-width: 768px) {
  .main-section {
    flex-direction: column;
    text-align: center;
  }

  .image-left {
    max-width: 90%;
  }

  .image-right {
    width: 80px;
  }
}
</style>
