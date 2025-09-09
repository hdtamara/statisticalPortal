<template>
  <div class="container">
    <div class="hero">
      <h1>Bienvenido al Portal de Estadística</h1>
      <p>Descubre los fundamentos de la estadística y cómo se aplica en la investigación y el análisis de datos. Explora los diferentes tipos de estadística y sus aplicaciones prácticas.</p>
    </div>

    <div class="intro-content">
      <h2>¿Qué es la Estadística?</h2>
      <p>La estadística es la ciencia que se encarga de recopilar, organizar, analizar, interpretar y presentar datos. Nos ayuda a tomar decisiones informadas en condiciones de incertidumbre y a comprender patrones en los datos.</p>

      <h3>Importancia de la Estadística</h3>
      <p>La estadística es fundamental en diversos campos como:</p>
      <ul>
        <li>Investigación científica y médica</li>
        <li>Economía y negocios</li>
        <li>Ciencias sociales</li>
        <li>Tecnología e inteligencia artificial</li>
        <li>Políticas públicas y gobierno</li>
      </ul>

      <h3>Tipos de Estadística</h3>
      <p>La estadística se divide principalmente en dos ramas:</p>

      <div class="cards-container">
        <ContentCard
          title="Estadística Descriptiva"
          content="Se encarga de describir, visualizar y resumir datos de manera significativa. Utiliza medidas como promedios, medianas, modas, desviaciones estándar y gráficos para representar las características principales de un conjunto de datos."
          card-type="descriptive"
          :show-button="true"
          button-text="Explorar"
          button-type="descriptive"
          :router-link="'/descriptiva'"

        />

        <ContentCard
          title="Estadística Inferencial"
          content="Permite hacer generalizaciones sobre una población basándose en el estudio de una muestra. Incluye técnicas como estimación de parámetros, pruebas de hipótesis, análisis de regresión y modelos predictivos."
          card-type="inferential"
          :show-button="true"
          button-text="Explorar"
          button-type="inferential"
          :router-link="'/inferencial'"

        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ContentCard from '@/components/common/ContentCard.vue';
</script>
