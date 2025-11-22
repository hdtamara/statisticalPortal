<template>
  <header>
    <div class="header-content">
      <div class="logo">EstadísticaFacil</div>
      <nav>
        <ul>
          <li>
            <router-link to="/" :class="{ active: $route.path === '/' }"> Inicio </router-link>
          </li>
          <li>
            <router-link to="/descriptiva" :class="{ active: $route.path === '/descriptiva' }">
              Descriptiva
            </router-link>
          </li>
          <li>
            <router-link to="/inferencial" :class="{ active: $route.path === '/inferencial' }">
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
  background: var(--gradient-brand);
  color: var(--text-on-primary);
  padding: var(--spacing-lg);
  box-shadow: var(--shadow-md);
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(8px);
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  background: linear-gradient(135deg, #ffffff 0%, rgba(255, 255, 255, 0.9) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

nav ul {
  display: flex;
  list-style: none;
  gap: var(--spacing-xs);
}

nav li {
  margin: 0;
}

nav a {
  color: var(--text-on-primary);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9375rem;
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-md);
  transition: var(--transition);
  display: inline-block;
}

nav a:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-1px);
}

nav a.active {
  background: rgba(255, 255, 255, 0.2);
  font-weight: 600;
}

@media (max-width: 768px) {
  header {
    padding: var(--spacing-md);
  }

  .header-content {
    flex-direction: column;
    text-align: center;
    gap: var(--spacing-md);
  }

  .logo {
    font-size: 1.25rem;
  }

  nav ul {
    margin-top: 0;
    justify-content: center;
    flex-wrap: wrap;
  }

  nav a {
    font-size: 0.875rem;
    padding: var(--spacing-xs) var(--spacing-sm);
  }
}
</style>
