<template>
  <div class="container">
    <div class="hero">
      <h1>Estadística Descriptiva</h1>
      <p>La estadística descriptiva se encarga de resumir, organizar y presentar datos de manera significativa para facilitar su interpretación.</p>
    </div>

    <div class="intro-content">
      <h2>¿Qué es la Estadística Descriptiva?</h2>
      <p>La estadística descriptiva es la rama de la estadística que se dedica a describir y resumir conjuntos de datos. Utiliza diversas técnicas para organizar la información, calcular medidas representativas y crear visualizaciones que permitan comprender las características principales de los datos.</p>

      <h3>Técnicas principales</h3>
      <ul>
        <li><strong>Medidas de tendencia central:</strong> Media, mediana y moda</li>
        <li><strong>Medidas de dispersión:</strong> Rango, varianza, desviación estándar</li>
        <li><strong>Medidas de posición:</strong> Cuartiles, percentiles</li>
        <li><strong>Visualización de datos:</strong> Gráficos, tablas, histogramas</li>
      </ul>
    </div>

    <h2 class="section-title">Temas de Estadística Descriptiva</h2>

    <div class="cards-container">
      <ContentCard
        title="Población y Muestra"
        content="Conceptos fundamentales sobre el conjunto completo de elementos de estudio (población) y el subconjunto seleccionado para análisis (muestra)."
        :show-button="true"
        button-text="Explorar"
        :router-link="'/descriptiva/poblacion-muestra'"
      />
      <ContentCard
        title="Tipos de Datos y Tabulación"
        content="Clasificación de datos cualitativos y cuantitativos, cálculo de frecuencias y organización de datos agrupados."
        :show-button="true"
        button-text="Explorar"
        :router-link="'/descriptiva/tipos-datos'"
      />
      <ContentCard
        title="Gráficos para Datos Cualitativos"
        content="Diagramas de barras y circulares para representar datos cualitativos. Aprende a crearlos e interpretarlos."
        :show-button="true"
        button-text="Explorar"
        :router-link="'/descriptiva/graficos-cualitativos'"
      />
      <ContentCard
        title="Gráficos para Datos Cuantitativos"
        content="Histogramas y polígonos de frecuencia para representar datos cuantitativos. Aprende a crearlos e interpretarlos."
        :show-button="true"
        button-text="Explorar"
        :router-link="'/descriptiva/graficos-cuantitativos'"
      />

      <!-- <ContentCard
        title="Medidas de Tendencia Central"
        content="Valores que representan el centro de un conjunto de datos: media, mediana y moda."
        :show-button="true"
        button-text="Explorar"
      /> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import ContentCard from '@/components/common/ContentCard.vue';
</script>
