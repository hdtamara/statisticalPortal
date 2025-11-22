<template>
  <div class="view-container">
    <div class="hero">
      <h1 class="gradient-text">Estadística Inferencial</h1>
      <p>
        La estadística inferencial permite hacer generalizaciones sobre una población basándose en
        el análisis de una muestra.
      </p>
    </div>

    <div class="intro-content">
      <h2>¿Qué es la Estadística Inferencial?</h2>
      <p>
        La estadística inferencial es la rama de la estadística que se encarga de hacer inferencias,
        estimaciones o predicciones sobre una población basándose en los resultados obtenidos de una
        muestra. A diferencia de la estadística descriptiva que solo describe los datos, la
        inferencial permite sacar conclusiones que van más allá de los datos inmediatos.
      </p>

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

      <ContentCard
        title="Distribuciones Z y t"
        content="Uso de la distribución normal estándar (Z) y la distribución t-Student para inferencias sobre medias poblacionales."
        :show-button="true"
        button-text="Explorar"
        :router-link="'/inferencial/distribuciones-z-t'"
      />

      <ContentCard
        title="Diferencia de Medias"
        content="Comparación de dos medias poblacionales: muestras independientes y datos pareados. Aprende cuándo y cómo usar cada método."
        :show-button="true"
        button-text="Explorar"
        :router-link="'/inferencial/diferencia-medias'"
      />

      <ContentCard
        title="Diferencia de Proporciones"
        content="Distribución muestral de la diferencia entre dos proporciones. Aprende a comparar porcentajes entre grupos y entender su variabilidad."
        :show-button="true"
        button-text="Explorar"
        :router-link="'/inferencial/diferencia-proporciones'"
      />

      <ContentCard
        title="Estimación de Parámetros"
        content="Métodos para estimar valores poblacionales usando datos muestrales. Aprende sobre estimación puntual vs intervalos de confianza, y cómo construir intervalos para la media poblacional con σ conocida y desconocida."
        :show-button="true"
        button-text="Explorar"
        :router-link="'/inferencial/estimacion-parametros'"
      />

      <ContentCard
        title="Intervalos de Confianza para Proporciones"
        content="Aprende a calcular intervalos de confianza para proporciones poblacionales. Comprende la distribución muestral de proporciones y cómo estimar rangos con diferentes niveles de confianza."
        :show-button="true"
        button-text="Explorar"
        :router-link="'/inferencial/intervalos-confianza'"
      />

      <ContentCard
        title="Determinación del Tamaño de Muestra"
        content="Aprende a calcular el tamaño de muestra necesario para estudios estadísticos. Comprende cómo el margen de error, el nivel de confianza y la variabilidad afectan el tamaño muestral para medias y proporciones."
        :show-button="true"
        button-text="Explorar"
        :router-link="'/inferencial/tamano-muestra'"
      />

      <ContentCard
        title="Factor de Corrección para Poblaciones Finitas"
        content="Descubre cuándo y cómo aplicar el factor de corrección al trabajar con poblaciones finitas. Aprende a ajustar intervalos de confianza para obtener estimaciones más precisas."
        :show-button="true"
        button-text="Explorar"
        :router-link="'/inferencial/factor-correccion'"
      />

      <ContentCard
        title="Introducción a las Pruebas de Hipótesis"
        content="Procedimientos estadísticos para contrastar supuestos sobre parámetros poblacionales y tomar decisiones basadas en evidencia muestral."
        :show-button="true"
        button-text="Explorar"
        :router-link="'/inferencial/pruebas-hipotesis'"
      />

      <ContentCard
        title="Pruebas de Hipótesis para Dos Muestras"
        content="Comparación de dos poblaciones: diferencia de medias (independientes y pareadas) y diferencia de proporciones. Incluye calculadora interactiva para realizar pruebas estadísticas."
        :show-button="true"
        button-text="Explorar"
        :router-link="'/inferencial/hipotesis-dos-muestras'"
      />
      <ContentCard
        title="Correlación y Regresión Lineal"
        content="Técnicas para modelar y analizar relaciones entre variables, permitiendo hacer predicciones y entender dependencias. Incluye diagrama de dispersión y cálculo de coeficientes."
        :show-button="true"
        button-text="Explorar"
        :router-link="'/inferencial/correlacion-regresion'"
      />

      <!--
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
import ContentCard from '@/components/common/ContentCard.vue'
</script>
