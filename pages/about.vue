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
  </div>
</template>

<style scoped>
.content {
  max-width: 900px;
  margin: auto;
  text-align: left;
  padding: 40px 20px 0;
}


.profile {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
}

.image-profile {
  width: 400px; /* Taille contrôlée */
  height: 500px;
  max-height: 300px; /* Limite la hauteur */
  object-fit: cover;

}

.description {
  flex: 1;
  font-size: 1rem;
  line-height: 1.6;
}
</style>
