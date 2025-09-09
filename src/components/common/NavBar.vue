<template>
  <header>
    <div class="header-content">
      <div class="logo">EstadísticaFacil</div>
      <nav>
        <ul>
          <li>
            <router-link
              to="/"
              :class="{ active: $route.path === '/' }"
            >
              Inicio
            </router-link>
          </li>
          <li>
            <router-link
              to="/descriptiva"
              :class="{ active: $route.path === '/descriptiva' }"
            >
              Descriptiva
            </router-link>
          </li>
          <li>
            <router-link
              to="/inferencial"
              :class="{ active: $route.path === '/inferencial' }"
            >
              Inferencial
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
// Lógica del componente si es necesaria
</script>

<style scoped>
header {
  background: linear-gradient(135deg, var(--primary), var(--dark));
  color: white;
  padding: 1.5rem;
  box-shadow: var(--shadow);
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.8rem;
  font-weight: bold;
}

nav ul {
  display: flex;
  list-style: none;
}

nav li {
  margin-left: 1.5rem;
}

nav a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem;
  border-radius: 4px;
  transition: var(--transition);
}

nav a:hover,
nav a.active {
  background: rgba(255, 255, 255, 0.2);
}

@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    text-align: center;
  }

  nav ul {
    margin-top: 1rem;
    justify-content: center;
  }

  nav li {
    margin: 0 0.5rem;
  }
}
</style>
