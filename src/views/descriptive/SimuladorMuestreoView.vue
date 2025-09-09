<template>
  <div class="simulador-muestreo-view">
    <div class="container">
      <div class="hero">
        <h1>Simulador de Muestreo Probabilístico</h1>
        <p>Explora y comprende los diferentes métodos de muestreo probabilístico mediante este simulador interactivo</p>
      </div>

      <div class="controls">
        <div class="control-group">
          <label for="sampling-method">Selecciona un método de muestreo:</label>
          <select id="sampling-method" v-model="metodoMuestreoSeleccionado">
            <option value="simple">Aleatorio Simple</option>
            <option value="systematic">Sistemático</option>
            <option value="stratified">Estratificado</option>
            <option value="cluster">Por Conglomerados</option>
          </select>
        </div>

        <div class="control-group">
          <label for="sample-size">Tamaño de la muestra:</label>
          <input type="number" id="sample-size" min="10" max="100" v-model="tamanoMuestra">
        </div>

        <div class="control-group" v-if="metodoMuestreoSeleccionado === 'stratified'">
          <label for="strata-count">Número de estratos:</label>
          <input type="number" id="strata-count" min="2" max="5" v-model="numeroEstratos">
        </div>

        <div class="control-group" v-if="metodoMuestreoSeleccionado === 'cluster'">
          <label for="cluster-count">Número de conglomerados:</label>
          <input type="number" id="cluster-count" min="2" max="6" v-model="numeroConglomerados">
        </div>

        <div class="control-group">
          <label for="visualization-type">Tipo de visualización:</label>
          <select id="visualization-type" v-model="tipoVisualizacion">
            <option value="colors">Colores</option>
            <option value="numbers">Números</option>
            <option value="both">Colores y Números</option>
          </select>
        </div>

        <div class="buttons-group">
          <button @click="aplicarMuestreo" class="btn btn-primary">
            Aplicar Muestreo
          </button>
          <button @click="reiniciar" class="btn btn-secondary">
            Reiniciar
          </button>
        </div>
      </div>

      <div class="visualization">
        <div class="population-container">
          <div class="container-title">Población (100 elementos)</div>
          <div class="dots-container">
            <div
              v-for="i in 100"
              :key="i"
              class="dot population-dot"
              :class="{
                'selected-dot': muestraSeleccionada.includes(i-1),
                'stratum-0': metodoMuestreoSeleccionado === 'stratified' && obtenerEstrato(i-1) === 0,
                'stratum-1': metodoMuestreoSeleccionado === 'stratified' && obtenerEstrato(i-1) === 1,
                'stratum-2': metodoMuestreoSeleccionado === 'stratified' && obtenerEstrato(i-1) === 2,
                'stratum-3': metodoMuestreoSeleccionado === 'stratified' && obtenerEstrato(i-1) === 3,
                'stratum-4': metodoMuestreoSeleccionado === 'stratified' && obtenerEstrato(i-1) === 4,
                'cluster-0': metodoMuestreoSeleccionado === 'cluster' && obtenerConglomerado(i-1) === 0,
                'cluster-1': metodoMuestreoSeleccionado === 'cluster' && obtenerConglomerado(i-1) === 1,
                'cluster-2': metodoMuestreoSeleccionado === 'cluster' && obtenerConglomerado(i-1) === 2,
                'cluster-3': metodoMuestreoSeleccionado === 'cluster' && obtenerConglomerado(i-1) === 3,
                'cluster-4': metodoMuestreoSeleccionado === 'cluster' && obtenerConglomerado(i-1) === 4,
                'cluster-5': metodoMuestreoSeleccionado === 'cluster' && obtenerConglomerado(i-1) === 5
              }"
              :style="obtenerColorPoblacion(i-1)"
            >
              <span v-if="tipoVisualizacion === 'numbers' || tipoVisualizacion === 'both'">{{ i }}</span>
            </div>
          </div>
          <div class="visualization-legend" v-if="metodoMuestreoSeleccionado === 'stratified' || metodoMuestreoSeleccionado === 'cluster'">
            <h4>Leyenda:</h4>
            <div class="legend-items">
              <div v-for="(item, index) in leyendaItems" :key="index" class="legend-item">
                <div class="legend-color" :class="item.clase"></div>
                <span>{{ item.texto }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="sample-container">
          <div class="container-title">Muestra ({{ muestraSeleccionada.length }} elementos)</div>
          <div class="dots-container">
            <div
              v-for="(elemento, index) in muestraSeleccionada"
              :key="index"
              class="dot sample-dot"
              :style="obtenerColorMuestra(elemento)"
              :class="obtenerClaseMuestra(elemento)"
            >
              <span v-if="tipoVisualizacion === 'numbers' || tipoVisualizacion === 'both'">{{ elemento + 1 }}</span>
            </div>
          </div>
          <div class="sample-info" v-if="muestraSeleccionada.length > 0">
            <p>Elementos seleccionados: {{ muestraSeleccionada.map(e => e + 1).join(', ') }}</p>
          </div>
        </div>
      </div>

      <div class="explanation">
        <h3>Explicación del método:</h3>
        <div v-html="explicacionMetodo"></div>

        <div v-if="metodoMuestreoSeleccionado === 'stratified' && estratos.length > 0" class="method-details">
          <h4>Composición de Estratos</h4>
          <div class="stratified-strata">
            <div v-for="(estrato, index) in estratos" :key="index" class="stratum" :class="'stratum-' + index">
              <h5>Estrato {{ index + 1 }}</h5>
              <p>{{ estrato.length }} elementos</p>
              <p>Rango: {{ Math.min(...estrato) + 1 }} - {{ Math.max(...estrato) + 1 }}</p>
            </div>
          </div>
        </div>

        <div v-if="metodoMuestreoSeleccionado === 'cluster' && conglomerados.length > 0" class="method-details">
          <h4>Composición de Conglomerados</h4>
          <div class="cluster-container">
            <div
              v-for="(conglomerado, index) in conglomerados"
              :key="index"
              class="cluster"
              :class="{
                'selected-cluster': conglomeradosSeleccionados.includes(index),
                'cluster-': + index
              }"
            >
              <h5>Conglomerado {{ index + 1 }}</h5>
              <p>{{ conglomerado.length }} elementos</p>
              <p>Rango: {{ Math.min(...conglomerado) + 1 }} - {{ Math.max(...conglomerado) + 1 }}</p>
            </div>
          </div>
        </div>

        <div class="method-steps" v-if="pasosMuestreo.length > 0">
          <h4>Proceso de selección:</h4>
          <ol>
            <li v-for="(paso, index) in pasosMuestreo" :key="index">{{ paso }}</li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';

// Configuración del simulador
const metodoMuestreoSeleccionado = ref('simple');
const tamanoMuestra = ref(20);
const numeroEstratos = ref(3);
const numeroConglomerados = ref(4);
const tipoVisualizacion = ref('colors');
const muestraSeleccionada = ref<number[]>([]);
const estratos = ref<number[][]>([]);
const conglomerados = ref<number[][]>([]);
const conglomeradosSeleccionados = ref<number[]>([]);
const pasosMuestreo = ref<string[]>([]);

// Colores base para los elementos
const coloresBase = ['#3498db', '#2ecc71', '#f39c12', '#9b59b6', '#1abc9c', '#d35400', '#16a085', '#8e44ad', '#27ae60'];

// Leyenda para estratos y conglomerados
const leyendaItems = computed(() => {
  if (metodoMuestreoSeleccionado.value === 'stratified') {
    return Array.from({ length: numeroEstratos.value }, (_, i) => ({
      clase: `stratum-${i}`,
      texto: `Estrato ${i + 1}`
    }));
  } else if (metodoMuestreoSeleccionado.value === 'cluster') {
    return Array.from({ length: numeroConglomerados.value }, (_, i) => ({
      clase: `cluster-${i}`,
      texto: `Conglomerado ${i + 1}`
    }));
  }
  return [];
});

// Obtener el estrato de un elemento
const obtenerEstrato = (elemento: number) => {
  if (estratos.value.length === 0) return -1;
  for (let i = 0; i < estratos.value.length; i++) {
    if (estratos.value[i].includes(elemento)) {
      return i;
    }
  }
  return -1;
};

// Obtener el conglomerado de un elemento
const obtenerConglomerado = (elemento: number) => {
  if (conglomerados.value.length === 0) return -1;
  for (let i = 0; i < conglomerados.value.length; i++) {
    if (conglomerados.value[i].includes(elemento)) {
      return i;
    }
  }
  return -1;
};

// Obtener color de la poblacion
const obtenerColorPoblacion = (elemento: number) => {
  if (metodoMuestreoSeleccionado.value === 'simple' || metodoMuestreoSeleccionado.value === 'systematic') {
    return { backgroundColor: coloresBase[(elemento + 1) % coloresBase.length] };
  }
  // Para estratificado y conglomerados, no aplicamos color inline para que las clases CSS funcionen
  return {};
};

// Función para obtener el color de cada elemento en la muestra
const obtenerColorMuestra = (elemento: number) => {
  if (metodoMuestreoSeleccionado.value === 'simple' || metodoMuestreoSeleccionado.value === 'systematic') {
    return { backgroundColor: coloresBase[(elemento + 1) % coloresBase.length] };
  }
  // Para estratificado y conglomerados, usamos las clases CSS
  return {};
};

// Función para obtener las clases CSS de cada elemento en la muestra
const obtenerClaseMuestra = (elemento: number) => {
  const clases: Record<string, boolean> = {};

  if (metodoMuestreoSeleccionado.value === 'stratified') {
    const estrato = obtenerEstrato(elemento);
    if (estrato !== -1) {
      clases[`stratum-${estrato}`] = true;
    }
  } else if (metodoMuestreoSeleccionado.value === 'cluster') {
    const conglomerado = obtenerConglomerado(elemento);
    if (conglomerado !== -1) {
      clases[`cluster-${conglomerado}`] = true;
    }
  }

  return clases;
};

// Explicación del método seleccionado
const explicacionMetodo = computed(() => {
  switch(metodoMuestreoSeleccionado.value) {
    case 'simple':
      return `
        <p><strong>Muestreo Aleatorio Simple:</strong> Cada elemento de la población tiene la misma probabilidad de ser seleccionado.
        Es como sortear nombres de una urna.</p>
        <p>En este simulador, se seleccionarán ${tamanoMuestra.value} elementos al azar de la población.</p>
      `;
    case 'systematic':
      const k = Math.floor(100 / parseInt(tamanoMuestra.value as unknown as string));
      return `
        <p><strong>Muestreo Sistemático:</strong> Se selecciona un punto de inicio aleatorio y luego se elige cada k-ésimo elemento de la población.</p>
        <p>El valor de k se calcula como tamaño de población / tamaño de muestra. Para una población de 100 elementos y muestra de ${tamanoMuestra.value},
        k = ${k}. Se elige un inicio aleatorio entre 1 y k, y luego se selecciona cada k-ésimo elemento.</p>
      `;
    case 'stratified':
      const muestrasPorEstrato = Math.floor(parseInt(tamanoMuestra.value as unknown as string) / parseInt(numeroEstratos.value as unknown as string));
      return `
        <p><strong>Muestreo Estratificado:</strong> La población se divide en ${numeroEstratos.value} grupos homogéneos (estratos)
        y se selecciona una muestra de cada estrato.</p>
        <p>Los elementos se dividen en ${numeroEstratos.value} estratos. De cada estrato, se seleccionará aproximadamente
        ${muestrasPorEstrato} elementos aleatoriamente.</p>
      `;
    case 'cluster':
      const conglomeradosASeleccionar = Math.floor(parseInt(numeroConglomerados.value as unknown as string) / 2);
      return `
        <p><strong>Muestreo por Conglomerados:</strong> La población se divide en ${numeroConglomerados.value} grupos naturales (conglomerados)
        y se seleccionan algunos conglomerados aleatoriamente para estudiarlos completos.</p>
        <p>Se seleccionarán ${conglomeradosASeleccionar} conglomerados al azar, y todos los elementos
        de esos conglomerados formarán la muestra.</p>
      `;
    default:
      return '<p>Selecciona un método de muestreo y haz clic en "Aplicar Muestreo" para ver cómo funciona.</p>';
  }
});

// Método: Muestreo aleatorio simple
const muestreoAleatorioSimple = (size: number) => {
  const poblacion = Array.from({ length: 100 }, (_, i) => i);
  pasosMuestreo.value = [`Población de 100 elementos numerados del 1 al 100.`];

  // Mezclar la población
  for (let i = poblacion.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [poblacion[i], poblacion[j]] = [poblacion[j], poblacion[i]];
  }

  pasosMuestreo.value.push(`Se mezclaron aleatoriamente todos los elementos.`);
  pasosMuestreo.value.push(`Se seleccionaron los primeros ${size} elementos: ${poblacion.slice(0, size).map(e => e + 1).join(', ')}`);

  return poblacion.slice(0, size);
};

// Método: Muestreo sistemático
const muestreoSistematico = (size: number) => {
  const k = Math.floor(100 / size);
  const start = Math.floor(Math.random() * k);
  const sample = [];

  pasosMuestreo.value = [
    `Población de 100 elementos numerados del 1 al 100.`,
    `Tamaño de muestra deseado: ${size}`,
    `Cálculo de k = Población / Muestra = 100 / ${size} = ${k}`,
    `Punto de inicio aleatorio: ${start + 1}`
  ];

  for (let i = start; i < 100; i += k) {
    if (sample.length < size) {
      sample.push(i);
      pasosMuestreo.value.push(`Seleccionado elemento ${i + 1} (posición ${i + 1})`);
    }
  }

  pasosMuestreo.value.push(`Muestra final: ${sample.map(e => e + 1).join(', ')}`);

  return sample;
};

const seleccionAleatoria = (array: number[], cantidad: number): number[] => {
  if (cantidad >= array.length) return [...array];

  const copia = [...array];

  // Mezclar array usando Fisher-Yates
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }

  return copia.slice(0, cantidad);
}

// Método: Muestreo estratificado CORREGIDO con función auxiliar
const muestreoEstratificado = (size: number, strataCount: number) => {
  // Crear estratos
  const stratumSize = Math.floor(100 / strataCount);
  estratos.value = [];
  pasosMuestreo.value = [
    `Población de 100 elementos numerados del 1 al 100.`,
    `División en ${strataCount} estratos de aproximadamente ${stratumSize} elementos cada uno.`
  ];

  // Crear estratos con elementos secuenciales
  for (let i = 0; i < strataCount; i++) {
    const start = i * stratumSize;
    const end = i === strataCount - 1 ? 100 : (i + 1) * stratumSize; // El último estrato incluye elementos restantes
    estratos.value.push(Array.from({ length: end - start }, (_, j) => start + j));
    pasosMuestreo.value.push(`Estrato ${i + 1}: elementos ${start + 1} a ${end} (${end - start} elementos)`);
  }

  // Calcular muestras por estrato
  const samplesPerStratum = Math.floor(size / strataCount);
  const extraSamples = size % strataCount; // Muestras adicionales para distribuir

  const sample = [];

  // Tomar muestras de cada estrato
  for (let i = 0; i < strataCount; i++) {
    // Algunos estratos tendrán una muestra extra si size no es divisible por strataCount
    const currentStratumSamples = samplesPerStratum + (i < extraSamples ? 1 : 0);

    if (currentStratumSamples > 0) {
      pasosMuestreo.value.push(`Seleccionando ${currentStratumSamples} elemento(s) del Estrato ${i + 1}`);

      // Usar la función auxiliar para seleccionar aleatoriamente del estrato
      const stratumSample = seleccionAleatoria(estratos.value[i], currentStratumSamples);

      sample.push(...stratumSample);
      pasosMuestreo.value.push(`Elementos seleccionados del Estrato ${i + 1}: ${stratumSample.map(e => e + 1).join(', ')}`);
    }
  }

  pasosMuestreo.value.push(`Muestra final estratificada: ${sample.map(e => e + 1).join(', ')} (${sample.length} elementos)`);
  return sample;
};

// Método: Muestreo por conglomerados
const muestreoPorConglomerados = (clusterCount: number) => {
  // Crear conglomerados
  const clusterSize = Math.floor(100 / clusterCount);
  conglomerados.value = [];

  pasosMuestreo.value = [
    `Población de 100 elementos numerados del 1 al 100.`,
    `División en ${clusterCount} conglomerados de aproximadamente ${clusterSize} elementos cada uno.`
  ];

  for (let i = 0; i < clusterCount; i++) {
    const start = i * clusterSize;
    const end = (i + 1) * clusterSize;
    conglomerados.value.push(Array.from({ length: end - start }, (_, j) => start + j));
    pasosMuestreo.value.push(`Conglomerado ${i + 1}: elementos ${start + 1} a ${end}`);
  }

  // Seleccionar aleatoriamente la mitad de los conglomerados
  conglomeradosSeleccionados.value = [];
  const clustersToSelect = Math.floor(clusterCount / 2);

  // Crear array de índices de conglomerados y mezclar
  const clusterIndices = Array.from({ length: clusterCount }, (_, i) => i);
  for (let i = clusterIndices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [clusterIndices[i], clusterIndices[j]] = [clusterIndices[j], clusterIndices[i]];
  }

  pasosMuestreo.value.push(`Conglomerados mezclados aleatoriamente: ${clusterIndices.map(i => i + 1).join(', ')}`);

  // Tomar los primeros clusters
  const selectedClusters = clusterIndices.slice(0, clustersToSelect);
  conglomeradosSeleccionados.value = selectedClusters;

  pasosMuestreo.value.push(`Conglomerados seleccionados: ${selectedClusters.map(i => i + 1).join(', ')}`);

  // Devolver todos los elementos de los conglomerados seleccionados
  const sample = selectedClusters.flatMap(idx => conglomerados.value[idx]);
  pasosMuestreo.value.push(`Muestra final (todos los elementos de los conglomerados seleccionados): ${sample.map(e => e + 1).join(', ')}`);

  return sample;
};

// Aplicar el método de muestreo seleccionado
const aplicarMuestreo = () => {
  const size = parseInt(tamanoMuestra.value as unknown as string);
  pasosMuestreo.value = [];

  switch(metodoMuestreoSeleccionado.value) {
    case 'simple':
      muestraSeleccionada.value = muestreoAleatorioSimple(size);
      break;
    case 'systematic':
      muestraSeleccionada.value = muestreoSistematico(size);
      break;
    case 'stratified':
      const strataNum = parseInt(numeroEstratos.value as unknown as string);
      muestraSeleccionada.value = muestreoEstratificado(size, strataNum);
      break;
    case 'cluster':
      const clusterNum = parseInt(numeroConglomerados.value as unknown as string);
      muestraSeleccionada.value = muestreoPorConglomerados(clusterNum);
      break;
  }
};

// Reiniciar la visualización
const reiniciar = () => {
  muestraSeleccionada.value = [];
  estratos.value = [];
  conglomerados.value = [];
  conglomeradosSeleccionados.value = [];
  pasosMuestreo.value = [];
};

// Inicializar con una muestra aleatoria simple
onMounted(() => {
  muestraSeleccionada.value = muestreoAleatorioSimple(parseInt(tamanoMuestra.value as unknown as string));
});

// Watch para cambios en el método de muestreo
watch(metodoMuestreoSeleccionado, () => {
  reiniciar();
});
</script>

<style scoped>
.simulador-muestreo-view {
  padding: 1rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.hero {
  text-align: center;
  margin-bottom: 2rem;
  padding: 2rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.hero h1 {
  color: #3498db;
  margin-bottom: 1rem;
  font-size: 2.2rem;
}

.hero p {
  font-size: 1.1rem;
  color: #7f8c8d;
}

.controls {
  background: #ecf0f1;
  padding: 1.5rem;
  border-radius: 8px;
  margin: 1.5rem 0;
}

.control-group {
  margin-bottom: 1rem;
}

.control-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.control-group select, .control-group input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  max-width: 300px;
}

.buttons-group {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.btn {
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  border: none;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;
}

.btn-primary {
  background: #3498db;
  color: white;
}

.btn-primary:hover {
  background: #2980b9;
}

.btn-secondary {
  background: #7f8c8d;
  color: white;
}

.btn-secondary:hover {
  background: #6c7a7b;
}

.visualization {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin: 2rem 0;
}

.population-container, .sample-container {
  flex: 1;
  min-width: 300px;
  background: #ecf0f1;
  padding: 1.5rem;
  border-radius: 8px;
}

.container-title {
  text-align: center;
  margin-bottom: 1rem;
  font-weight: bold;
  color: #2c3e50;
}

.dots-container {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  margin: 1rem 0;
  min-height: 200px;
}

.dot {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
  transition: all 0.3s ease;
}

.population-dot {
  background: #3498db;
  color: white;
}

.sample-dot {
  background: #2ecc71;
  color: white;
}

.selected-dot {
  border: 3px solid #e74c3c;
  transform: scale(1.2);
}

/* Colores para estratos */
.stratum-0 { background-color: #3498db; }
.stratum-1 { background-color: #2ecc71; }
.stratum-2 { background-color: #58d3e9; }
.stratum-3 { background-color: #f39c12; }
.stratum-4 { background-color: #9b59b6; }

/* Colores para conglomerados */
.cluster-0 { background-color: #3498db; }
.cluster-1 { background-color: #2ecc71; }
.cluster-2 { background-color: #58d3e9; }
.cluster-3 { background-color: #f39c12; }
.cluster-4 { background-color: #9b59b6; }
.cluster-5 { background-color: #1abc9c; }

/* Asegurar que los colores se apliquen tanto en población como en muestra */
.sample-dot.stratum-0, .population-dot.stratum-0 { background-color: #3498db !important; }
.sample-dot.stratum-1, .population-dot.stratum-1 { background-color: #2ecc71 !important; }
.sample-dot.stratum-2, .population-dot.stratum-2 { background-color: #58d3e9 !important; }
.sample-dot.stratum-3, .population-dot.stratum-3 { background-color: #f39c12 !important; }
.sample-dot.stratum-4, .population-dot.stratum-4 { background-color: #9b59b6 !important; }

.sample-dot.cluster-0, .population-dot.cluster-0 { background-color: #3498db !important; }
.sample-dot.cluster-1, .population-dot.cluster-1 { background-color: #2ecc71 !important; }
.sample-dot.cluster-2, .population-dot.cluster-2 { background-color: #58d3e9 !important; }
.sample-dot.cluster-4, .population-dot.cluster-4 { background-color: #9b59b6 !important; }
.sample-dot.cluster-5, .population-dot.cluster-5 { background-color: #1abc9c !important; }
.sample-dot.cluster-3, .population-dot.cluster-3 { background-color: #f39c12 !important; }


.visualization-legend {
  margin-top: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 8px;
}

.visualization-legend h4 {
  margin-bottom: 0.5rem;
  color: #2c3e50;
}

.legend-items {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.legend-color {
  width: 20px;
  height: 20px;
  border-radius: 50%;
}

.sample-info {
  margin-top: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  font-size: 0.9rem;
}

.explanation {
  background: #f9f9f9;
  padding: 1.5rem;
  border-radius: 8px;
  margin: 1.5rem 0;
  border-left: 4px solid #2ecc71;
}

.method-details {
  margin-top: 1.5rem;
}

.method-details h4 {
  color: #3498db;
  margin-bottom: 1rem;
}

.stratified-strata {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 1rem 0;
}

.stratum {
  padding: 1rem;
  border-radius: 8px;
  flex: 1;
  min-width: 150px;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.stratum h5 {
  margin-bottom: 0.5rem;
}

.cluster-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 1rem 0;
}

.cluster {
  padding: 1rem;
  border: 2px solid #ccc;
  border-radius: 8px;
  flex: 1;
  min-width: 150px;
  background: white;
  text-align: center;
}

.cluster h5 {
  margin-bottom: 0.5rem;
}

.selected-cluster {
  border-color: #e74c3c;
  background-color: rgba(231, 76, 60, 0.1);
}

.method-steps {
  margin-top: 1.5rem;
}

.method-steps h4 {
  color: #3498db;
  margin-bottom: 1rem;
}

.method-steps ol {
  margin-left: 1.5rem;
}

.method-steps li {
  margin-bottom: 0.5rem;
  line-height: 1.4;
}

@media (max-width: 768px) {
  .visualization {
    flex-direction: column;
  }

  .buttons-group {
    flex-direction: column;
  }

  .btn {
    width: 100%;
  }

  .dot {
    width: 25px;
    height: 25px;
    font-size: 10px;
  }

  .stratified-strata, .cluster-container {
    flex-direction: column;
  }
}
</style>
