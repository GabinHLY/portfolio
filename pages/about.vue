<template>
  <div class="content">
    <h1 class="title">A PROPOS</h1>

    <div class="profile">
      <img src="../assets/images/Leonard_pres.png" alt="Image" class="image-profile">
      <p class="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
        sunt in culpa qui officia deserunt mollit anim id est laborum.
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
