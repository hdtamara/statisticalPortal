<template>
  <div class="container">
    <div class="hero">
      <h1>Estadística Inferencial</h1>
      <p>La estadística inferencial permite hacer generalizaciones sobre una población basándose en el análisis de una muestra.</p>
    </div>

    <div class="intro-content">
      <h2>¿Qué es la Estadística Inferencial?</h2>
      <p>La estadística inferencial es la rama de la estadística que se encarga de hacer inferencias, estimaciones o predicciones sobre una población basándose en los resultados obtenidos de una muestra. A diferencia de la estadística descriptiva que solo describe los datos, la inferencial permite sacar conclusiones que van más allá de los datos inmediatos.</p>

      <h3>Técnicas principales</h3>
      <ul>
        <li><strong>Estimación de parámetros:</strong> Puntual y por intervalos</li>
        <li><strong>Pruebas de hipótesis:</strong> Contrastar supuestos sobre la población</li>
        <li><strong>Análisis de regresión:</strong> Modelar relaciones entre variables</li>
        <li><strong>Análisis de varianza (ANOVA):</strong> Comparar medias entre grupos</li>
      </ul>
    </div>

    <h2 class="section-title">Temas de Estadística Inferencial</h2>

    <div class="cards-container">
    <ContentCard
      title="Distribuciones Muestrales"
      content="Conceptos fundamentales de muestreo, diferencia entre parámetros y estadísticos, distribución de la media muestral y Teorema del Límite Central."
      :show-button="true"
      button-text="Explorar"
      :router-link="'/inferencial/distribuciones-muestrales'"
    />
      <!-- <ContentCard
        title="Estimación de Parámetros"
        content="Métodos para estimar valores poblacionales usando datos muestrales, incluyendo estimación puntual e intervalos de confianza."
        :show-button="true"
        button-text="Explorar"
      />

      <ContentCard
        title="Pruebas de Hipótesis"
        content="Procedimientos estadísticos para contrastar supuestos sobre parámetros poblacionales y tomar decisiones basadas en evidencia muestral."
        :show-button="true"
        button-text="Explorar"
      />

      <ContentCard
        title="Análisis de Regresión"
        content="Técnicas para modelar y analizar relaciones entre variables, permitiendo hacer predicciones y entender dependencias."
        :show-button="true"
        button-text="Explorar"
      />

      <ContentCard
        title="Análisis de Varianza (ANOVA)"
        content="Métodos para comparar medias entre múltiples grupos y determinar si existen diferencias significativas entre ellos."
        :show-button="true"
        button-text="Explorar"
      /> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import ContentCard from '@/components/common/ContentCard.vue';
</script>
