<template>
  <footer>
    <p>Portal de Estadística - Diseñado para fines educativos</p>
    <p>© 2025 - Todos los derechos reservados</p>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped>
footer {
  background: var(--neutral-900);
  color: var(--text-on-primary);
  text-align: center;
  padding: var(--spacing-2xl);
  margin-top: var(--spacing-2xl);
  border-top: 1px solid var(--border);
}

footer p {
  color: var(--neutral-300);
  font-size: 0.875rem;
  margin: var(--spacing-xs) 0;
}
</style>
