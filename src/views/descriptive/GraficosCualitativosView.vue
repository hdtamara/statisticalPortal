<template>
  <div class="graficos-cualitativos-view">
    <div class="container">
      <div class="hero">
        <h1>Gráficos para Datos Cualitativos</h1>
        <p>Aprende a crear e interpretar diagramas de barras y circulares para datos cualitativos</p>
      </div>

      <div class="nav-tabs">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          class="tab"
          :class="{ active: activeTab === tab.id }"
          @click="activeTab = tab.id"
        >
          {{ tab.label }}
        </button>
      </div>

      <!-- DIAGRAMAS DE BARRAS -->
      <div v-if="activeTab === 'barras'" class="content-section">
        <h2>Diagramas de Barras</h2>

        <div class="explanation-box">
          <p>
            Los datos cualitativos (o categóricos) representan características o cualidades que no se pueden medir con números. Estos gráficos nos ayudan a visualizar la frecuencia o proporción de cada categoría.
          </p>
        </div>

        <div class="chart-explanation">
          <div class="explanation-content">
            <h3>¿Cómo elaborar un diagrama de barras?</h3>
            <div class="steps">
              <div class="step">
                <div class="step-number">1</div>
                <div class="step-content">
                  <h4>Ejes</h4>
                  <p>Se dibuja un eje horizontal (eje X) para las categorías y un eje vertical (eje Y) para las frecuencias</p>
                </div>
              </div>
              <div class="step">
                <div class="step-number">2</div>
                <div class="step-content">
                  <h4>Barras</h4>
                  <p>Para cada categoría, se dibuja una barra rectangular. La altura de la barra debe corresponder a su frecuencia en el eje Y</p>
                </div>
              </div>
              <div class="step">
                <div class="step-number">3</div>
                <div class="step-content">
                  <h4>Separación</h4>
                  <p>Es fundamental que las barras estén separadas entre sí. Esta separación visual enfatiza que las categorías son discretas e independientes</p>
                </div>
              </div>
            </div>
          </div>

          <div class="interpretation-content">
            <h3>¿Cómo interpretar un diagrama de barras?</h3>
            <ul>
              <li><strong>Comparar categorías:</strong> Permite ver fácilmente qué categoría es la más frecuente (la barra más alta, que representa la moda) y cuál es la menos frecuente</li>
              <li><strong>Identificar patrones:</strong> Se puede observar de un vistazo cómo se distribuyen los datos entre las diferentes categorías</li>
            </ul>
          </div>
        </div>

        <div class="interactive-chart">
          <h3>Ejemplo Interactivo: Colores Favoritos</h3>

          <div class="chart-controls">
            <div class="control-group">
              <label>Selecciona un conjunto de datos:</label>
              <select v-model="datosSeleccionados" @change="actualizarGrafico">
                <option value="colores">Colores favoritos</option>
                <option value="transporte">Medios de transporte</option>
                <option value="deportes">Deportes favoritos</option>
              </select>
            </div>

            <div class="control-group">
              <label>Tipo de frecuencia:</label>
              <select v-model="tipoFrecuencia" @change="actualizarGrafico">
                <option value="absoluta">Frecuencia Absoluta</option>
                <option value="relativa">Frecuencia Relativa</option>
                <option value="porcentual">Frecuencia Porcentual</option>
              </select>
            </div>
          </div>

          <div class="chart-container">
            <Bar :data="chartData" :options="chartOptions" />
          </div>

          <div class="data-table">
            <h4>Datos utilizados:</h4>
            <table>
              <thead>
                <tr>
                  <th>Categoría</th>
                  <th>Frecuencia Absoluta</th>
                  <th>Frecuencia Relativa</th>
                  <th>Frecuencia %</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in datosActuales" :key="index">
                  <td>{{ item.categoria }}</td>
                  <td>{{ item.frecuencia }}</td>
                  <td>{{ item.relativa.toFixed(3) }}</td>
                  <td>{{ item.porcentual.toFixed(1) }}%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="interactive-zones">
          <h3>Zonas Interactivas: Identifica los Elementos</h3>
          <p>Haz clic en los elementos del gráfico para aprender más:</p>

          <div class="zones-container">
            <div class="zone-item" @click="mostrarInfo('barra')" :class="{ active: zonaActiva === 'barra' }">
              <div class="zone-visual">
                <div class="sample-bar"></div>
              </div>
              <div class="zone-info">
                <h4>Barra</h4>
                <p>Rectángulo vertical que representa la frecuencia</p>
              </div>
            </div>

            <div class="zone-item" @click="mostrarInfo('eje-x')" :class="{ active: zonaActiva === 'eje-x' }">
              <div class="zone-visual">
                <div class="sample-axis-x"></div>
              </div>
              <div class="zone-info">
                <h4>Eje X (Horizontal)</h4>
                <p>Contiene las categorías o clases</p>
              </div>
            </div>

            <div class="zone-item" @click="mostrarInfo('eje-y')" :class="{ active: zonaActiva === 'eje-y' }">
              <div class="zone-visual">
                <div class="sample-axis-y"></div>
              </div>
              <div class="zone-info">
                <h4>Eje Y (Vertical)</h4>
                <p>Escala de frecuencias o valores</p>
              </div>
            </div>

            <div class="zone-item" @click="mostrarInfo('titulo')" :class="{ active: zonaActiva === 'titulo' }">
              <div class="zone-visual">
                <div class="sample-title">Título del Gráfico</div>
              </div>
              <div class="zone-info">
                <h4>Título</h4>
                <p>Describe qué representa el gráfico</p>
              </div>
            </div>
          </div>

          <div v-if="infoZona" class="zone-detail">
            <h4>{{ infoZona.titulo }}</h4>
            <p>{{ infoZona.descripcion }}</p>
            <div v-if="infoZona.ejemplo" class="zone-example">
              <strong>Ejemplo:</strong> {{ infoZona.ejemplo }}
            </div>
          </div>
        </div>
      </div>

      <!-- DIAGRAMAS CIRCULARES -->
      <div v-if="activeTab === 'circulares'" class="content-section">
        <h2>Diagramas Circulares (Pastel)</h2>

        <div class="explanation-box">
          <p>
            Un diagrama circular es un gráfico que representa las categorías como porciones de un círculo. El círculo completo equivale al 100% del total de los datos, y el tamaño de cada "porción" es proporcional a la frecuencia de su categoría.
          </p>
        </div>

        <div class="chart-explanation">
          <div class="explanation-content">
            <h3>¿Cómo elaborar un diagrama circular?</h3>
            <div class="steps">
              <div class="step">
                <div class="step-number">1</div>
                <div class="step-content">
                  <h4>Calcular la Proporción</h4>
                  <p>Primero, convierte la frecuencia de cada categoría a un porcentaje del total</p>
                  <p>Porcentaje = (Frecuencia de la categoría / Total de datos) × 100%</p>
                </div>
              </div>
              <div class="step">
                <div class="step-number">2</div>
                <div class="step-content">
                  <h4>Determinar los Ángulos</h4>
                  <p>Para dibujar cada sector, se calcula el ángulo correspondiente multiplicando la proporción por 360°</p>
                  <p>Ángulo = (Frecuencia de la categoría / Total de datos) × 360°</p>
                </div>
              </div>
              <div class="step">
                <div class="step-number">3</div>
                <div class="step-content">
                  <h4>Dibujar</h4>
                  <p>Se dibuja un círculo y, usando un transportador, se trazan los sectores con los ángulos calculados. Es crucial etiquetar cada sector con el nombre de la categoría y su porcentaje</p>
                </div>
              </div>
            </div>
          </div>

          <div class="interpretation-content">
            <h3>¿Cómo interpretar un diagrama circular?</h3>
            <ul>
              <li><strong>Parte de un todo:</strong> Es ideal para mostrar cómo se distribuye un total entre sus diferentes componentes</li>
              <li><strong>Relevancia:</strong> Permite identificar rápidamente qué categorías tienen mayor o menor peso sobre el total</li>
              <li><strong>Limitación:</strong> Es menos efectivo para comparar categorías entre sí, especialmente si sus valores son muy similares. Se recomienda usarlo con pocas categorías (generalmente menos de 7)</li>
            </ul>
          </div>
        </div>

        <div class="interactive-chart">
          <h3>Ejemplo Interactivo: Distribución por Categorías</h3>

          <div class="chart-controls">
            <div class="control-group">
              <label>Selecciona un conjunto de datos:</label>
              <select v-model="datosSeleccionadosPie" @change="actualizarGraficoPie">
                <option value="colores">Colores favoritos</option>
                <option value="transporte">Medios de transporte</option>
                <option value="deportes">Deportes favoritos</option>
              </select>
            </div>

            <div class="control-group">
              <label>Mostrar etiquetas:</label>
              <select v-model="mostrarEtiquetas" @change="actualizarGraficoPie">
                <option value="porcentaje">Porcentajes</option>
                <option value="categoria">Categorías</option>
                <option value="ambos">Ambos</option>
              </select>
            </div>
          </div>

          <div class="chart-container">
            <Pie :data="pieChartData" :options="pieChartOptions" />
          </div>

          <div class="data-table">
            <h4>Datos utilizados:</h4>
            <table>
              <thead>
                <tr>
                  <th>Categoría</th>
                  <th>Frecuencia</th>
                  <th>Porcentaje</th>
                  <th>Ángulo (°)</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in datosActualesPie" :key="index">
                  <td>{{ item.categoria }}</td>
                  <td>{{ item.frecuencia }}</td>
                  <td>{{ item.porcentual.toFixed(1) }}%</td>
                  <td>{{ item.angulo.toFixed(1) }}°</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="interactive-zones">
          <h3>Zonas Interactivas: Elementos del Diagrama Circular</h3>
          <p>Haz clic en los elementos para aprender más:</p>

          <div class="zones-container">
            <div class="zone-item" @click="mostrarInfoPie('sector')" :class="{ active: zonaActivaPie === 'sector' }">
              <div class="zone-visual">
                <div class="sample-sector"></div>
              </div>
              <div class="zone-info">
                <h4>Sector</h4>
                <p>Porción del círculo que representa una categoría</p>
              </div>
            </div>

            <div class="zone-item" @click="mostrarInfoPie('etiqueta')" :class="{ active: zonaActivaPie === 'etiqueta' }">
              <div class="zone-visual">
                <div class="sample-label">25%</div>
              </div>
              <div class="zone-info">
                <h4>Etiqueta</h4>
                <p>Texto que identifica el sector y su valor</p>
              </div>
            </div>

            <div class="zone-item" @click="mostrarInfoPie('leyenda')" :class="{ active: zonaActivaPie === 'leyenda' }">
              <div class="zone-visual">
                <div class="sample-legend">
                  <div class="legend-item">
                    <div class="color-box"></div>
                    <span>Categoría</span>
                  </div>
                </div>
              </div>
              <div class="zone-info">
                <h4>Leyenda</h4>
                <p>Explica qué representa cada color</p>
              </div>
            </div>

            <div class="zone-item" @click="mostrarInfoPie('titulo')" :class="{ active: zonaActivaPie === 'titulo' }">
              <div class="zone-visual">
                <div class="sample-title">Título del Gráfico</div>
              </div>
              <div class="zone-info">
                <h4>Título</h4>
                <p>Describe qué representa el gráfico circular</p>
              </div>
            </div>
          </div>

          <div v-if="infoZonaPie" class="zone-detail">
            <h4>{{ infoZonaPie.titulo }}</h4>
            <p>{{ infoZonaPie.descripcion }}</p>
            <div v-if="infoZonaPie.ejemplo" class="zone-example">
              <strong>Ejemplo:</strong> {{ infoZonaPie.ejemplo }}
            </div>
          </div>
        </div>
      </div>

      <div class="navigation-buttons">
        <router-link to="/descriptiva" class="btn btn-secondary">
          Volver a Estadística Descriptiva
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js'
import { Bar, Pie } from 'vue-chartjs'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement)

// Configuración de pestañas
const tabs = [
  { id: 'barras', label: 'Diagramas de Barras' },
  { id: 'circulares', label: 'Diagramas Circulares' },
]

const activeTab = ref('barras')

// Datos para diagramas de barras
const datosSeleccionados = ref('colores')
const tipoFrecuencia = ref('absoluta')

// Conjuntos de datos
const conjuntosDatos = {
  colores: [
    { categoria: 'Azul', frecuencia: 12 },
    { categoria: 'Rojo', frecuencia: 8 },
    { categoria: 'Verde', frecuencia: 6 },
    { categoria: 'Amarillo', frecuencia: 4 },
    { categoria: 'Morado', frecuencia: 3 },
  ],
  transporte: [
    { categoria: 'Autobús', frecuencia: 25 },
    { categoria: 'Metro', frecuencia: 18 },
    { categoria: 'Bicicleta', frecuencia: 12 },
    { categoria: 'Coche', frecuencia: 8 },
    { categoria: 'Caminando', frecuencia: 5 },
  ],
  deportes: [
    { categoria: 'Fútbol', frecuencia: 20 },
    { categoria: 'Baloncesto', frecuencia: 15 },
    { categoria: 'Natación', frecuencia: 10 },
    { categoria: 'Tenis', frecuencia: 8 },
    { categoria: 'Atletismo', frecuencia: 5 },
  ],
}

const datosActuales = computed(() => {
  const datos = conjuntosDatos[datosSeleccionados.value as keyof typeof conjuntosDatos]
  const total = datos.reduce((sum, item) => sum + item.frecuencia, 0)

  return datos.map(item => ({
    ...item,
    relativa: item.frecuencia / total,
    porcentual: (item.frecuencia / total) * 100,
  }))
})

const chartData = computed(() => {
  const labels = datosActuales.value.map(item => item.categoria)
  let data: number[] = []

  if (tipoFrecuencia.value === 'absoluta') {
    data = datosActuales.value.map(item => item.frecuencia)
  } else if (tipoFrecuencia.value === 'relativa') {
    data = datosActuales.value.map(item => item.relativa)
  } else {
    data = datosActuales.value.map(item => item.porcentual)
  }

  return {
    labels,
    datasets: [
      {
        label: tipoFrecuencia.value === 'absoluta' ? 'Frecuencia' :
               tipoFrecuencia.value === 'relativa' ? 'Frecuencia Relativa' : 'Porcentaje (%)',
        data,
        backgroundColor: [
          'rgba(54, 162, 235, 0.8)',
          'rgba(255, 99, 132, 0.8)',
          'rgba(75, 192, 192, 0.8)',
          'rgba(255, 205, 86, 0.8)',
          'rgba(153, 102, 255, 0.8)',
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(255, 205, 86, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }
})

const chartOptions = computed(() => ({
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: `Diagrama de Barras - ${datosSeleccionados.value.charAt(0).toUpperCase() + datosSeleccionados.value.slice(1)}`,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: tipoFrecuencia.value === 'absoluta' ? 'Frecuencia' :
              tipoFrecuencia.value === 'relativa' ? 'Frecuencia Relativa' : 'Porcentaje (%)',
      },
    },
    x: {
      title: {
        display: true,
        text: 'Categorías',
      },
    },
  },
}))

const actualizarGrafico = () => {
  // El gráfico se actualiza automáticamente por computed
}

// Zonas interactivas para barras
const zonaActiva = ref('')
const infoZona = ref<{ titulo: string; descripcion: string; ejemplo?: string } | null>(null)

const mostrarInfo = (zona: string) => {
  zonaActiva.value = zona
  const infos = {
    barra: {
      titulo: 'La Barra',
      descripcion: 'Es el elemento principal del diagrama. Su altura representa la frecuencia de la categoría correspondiente.',
      ejemplo: 'En un gráfico de colores favoritos, una barra de altura 12 indica que 12 personas prefieren ese color.',
    },
    'eje-x': {
      titulo: 'Eje X (Horizontal)',
      descripcion: 'Contiene las etiquetas de las categorías que estamos comparando.',
      ejemplo: 'Para colores favoritos: Azul, Rojo, Verde, etc.',
    },
    'eje-y': {
      titulo: 'Eje Y (Vertical)',
      descripcion: 'Muestra la escala de valores (frecuencias) desde cero hasta el valor máximo.',
      ejemplo: 'Si la frecuencia máxima es 12, el eje Y irá de 0 a 12 o más.',
    },
    titulo: {
      titulo: 'Título del Gráfico',
      descripcion: 'Describe claramente qué información representa el gráfico.',
      ejemplo: '"Colores favoritos de los estudiantes" o "Distribución de medios de transporte"',
    },
  }
  infoZona.value = infos[zona as keyof typeof infos]
}

// Datos para diagramas circulares
const datosSeleccionadosPie = ref('colores')
const mostrarEtiquetas = ref('porcentaje')

const datosActualesPie = computed(() => {
  const datos = conjuntosDatos[datosSeleccionadosPie.value as keyof typeof conjuntosDatos]
  const total = datos.reduce((sum, item) => sum + item.frecuencia, 0)

  return datos.map(item => ({
    ...item,
    porcentual: (item.frecuencia / total) * 100,
    angulo: (item.frecuencia / total) * 360,
  }))
})

const pieChartData = computed(() => {
  const labels = datosActualesPie.value.map(item => {
    if (mostrarEtiquetas.value === 'porcentaje') {
      return `${item.categoria} (${item.porcentual.toFixed(1)}%)`
    } else if (mostrarEtiquetas.value === 'categoria') {
      return item.categoria
    } else {
      return `${item.categoria}\n${item.porcentual.toFixed(1)}%`
    }
  })

  return {
    labels,
    datasets: [
      {
        data: datosActualesPie.value.map(item => item.frecuencia),
        backgroundColor: [
          'rgba(54, 162, 235, 0.8)',
          'rgba(255, 99, 132, 0.8)',
          'rgba(75, 192, 192, 0.8)',
          'rgba(255, 205, 86, 0.8)',
          'rgba(153, 102, 255, 0.8)',
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(255, 205, 86, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }
})

const pieChartOptions = computed(() => ({
  responsive: true,
  plugins: {
    legend: {
      position: 'right' as const,
    },
    title: {
      display: true,
      text: `Diagrama Circular - ${datosSeleccionadosPie.value.charAt(0).toUpperCase() + datosSeleccionadosPie.value.slice(1)}`,
    },
  },
}))

const actualizarGraficoPie = () => {
  // El gráfico se actualiza automáticamente por computed
}

// Zonas interactivas para circular
const zonaActivaPie = ref('')
const infoZonaPie = ref<{ titulo: string; descripcion: string; ejemplo?: string } | null>(null)

const mostrarInfoPie = (zona: string) => {
  zonaActivaPie.value = zona
  const infos = {
    sector: {
      titulo: 'Sector del Pastel',
      descripcion: 'Cada "rebanada" del círculo representa una categoría. El tamaño del ángulo es proporcional a su frecuencia.',
      ejemplo: 'Un sector de 90° representa el 25% de los datos totales.',
    },
    etiqueta: {
      titulo: 'Etiqueta',
      descripcion: 'Texto dentro o fuera del sector que indica el nombre de la categoría y/o su porcentaje.',
      ejemplo: '"Azul (30%)" o simplemente "30%" dentro del sector azul.',
    },
    leyenda: {
      titulo: 'Leyenda',
      descripcion: 'Lista que explica qué representa cada color utilizado en el gráfico.',
      ejemplo: 'Un cuadrado azul al lado de "Azul" indica que los sectores azules representan esa categoría.',
    },
    titulo: {
      titulo: 'Título del Gráfico',
      descripcion: 'Texto que describe qué información representa el diagrama circular.',
      ejemplo: '"Preferencias de colores" o "Distribución de deportes favoritos"',
    },
  }
  infoZonaPie.value = infos[zona as keyof typeof infos]
}

onMounted(() => {
  // Inicialización si es necesaria
})
</script>

<style scoped>
.graficos-cualitativos-view {
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
  color: #2ecc71;
  margin-bottom: 1rem;
  font-size: 2.2rem;
}

.hero p {
  font-size: 1.1rem;
  color: #7f8c8d;
}

.nav-tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  background: white;
  border-radius: 50px;
  padding: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.tab {
  padding: 0.8rem 1.5rem;
  cursor: pointer;
  border-radius: 50px;
  transition: all 0.3s ease;
  font-weight: bold;
  border: none;
  background: none;
}

.tab.active {
  background: #2ecc71;
  color: white;
}

.tab:hover:not(.active) {
  background: #e0e0e0;
}

.content-section {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
}

.content-section h2 {
  color: #2ecc71;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid #ecf0f1;
  padding-bottom: 0.5rem;
}

.explanation-box {
  background: #e8f4f8;
  padding: 1rem;
  border-radius: 6px;
  margin-bottom: 1.5rem;
  border-left: 4px solid #3498db;
}

.chart-explanation {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin: 2rem 0;
}

.steps {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.step {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.step-number {
  background: #2ecc71;
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  flex-shrink: 0;
}

.step-content h4 {
  margin: 0 0 0.5rem 0;
  color: #2c3e50;
}

.interpretation-content ul {
  margin-left: 1.5rem;
}

.interpretation-content li {
  margin-bottom: 0.5rem;
}

.interactive-chart {
  margin: 2rem 0;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 8px;
}

.chart-controls {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.control-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.control-group label {
  font-weight: bold;
  color: #2c3e50;
}

.control-group select {
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.chart-container {
  height: 400px;
  margin: 2rem 0;
}

.data-table {
  margin-top: 2rem;
}

.data-table table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;
}

.data-table th,
.data-table td {
  padding: 0.8rem;
  text-align: center;
  border-bottom: 1px solid #ddd;
}

.data-table th {
  background-color: #2ecc71;
  color: white;
}

.interactive-zones {
  margin: 2rem 0;
  padding: 1.5rem;
  background: #f0f8ff;
  border-radius: 8px;
}

.zones-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1.5rem 0;
}

.zone-item {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.zone-item:hover,
.zone-item.active {
  border-color: #2ecc71;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.zone-visual {
  flex-shrink: 0;
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sample-bar {
  width: 40px;
  height: 50px;
  background: #3498db;
  border-radius: 2px;
}

.sample-axis-x {
  width: 60px;
  height: 2px;
  background: #2c3e50;
  position: relative;
}

.sample-axis-x::after {
  content: '';
  position: absolute;
  right: -5px;
  top: -5px;
  width: 0;
  height: 0;
  border-left: 5px solid #2c3e50;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
}

.sample-axis-y {
  width: 2px;
  height: 50px;
  background: #2c3e50;
  position: relative;
}

.sample-axis-y::after {
  content: '';
  position: absolute;
  top: -5px;
  left: -5px;
  width: 0;
  height: 0;
  border-bottom: 5px solid #2c3e50;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
}

.sample-title {
  font-size: 0.8rem;
  font-weight: bold;
  color: #2c3e50;
  text-align: center;
}

.sample-sector {
  width: 50px;
  height: 50px;
  background: conic-gradient(from 0deg, #3498db 0deg 90deg, #e74c3c 90deg 360deg);
  border-radius: 50%;
}

.sample-label {
  font-size: 0.8rem;
  font-weight: bold;
  color: #2c3e50;
  background: white;
  padding: 2px 4px;
  border-radius: 2px;
}

.sample-legend {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 4px;
}

.color-box {
  width: 12px;
  height: 12px;
  background: #3498db;
  border-radius: 2px;
}

.legend-item span {
  font-size: 0.7rem;
  color: #2c3e50;
}

.zone-info h4 {
  margin: 0 0 0.5rem 0;
  color: #2c3e50;
}

.zone-info p {
  font-size: 0.9rem;
  color: #7f8c8d;
  margin: 0;
}

.zone-detail {
  margin-top: 1.5rem;
  padding: 1rem;
  background: white;
  border-radius: 6px;
  border-left: 4px solid #2ecc71;
}

.zone-detail h4 {
  margin: 0 0 0.5rem 0;
  color: #2c3e50;
}

.zone-detail p {
  margin: 0 0 1rem 0;
  color: #555;
}

.zone-example {
  font-style: italic;
  color: #e74c3c;
}

.navigation-buttons {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

.btn {
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  border: none;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;
  text-decoration: none;
  display: inline-block;
}

.btn-primary {
  background: #2ecc71;
  color: white;
}

.btn-primary:hover {
  background: #27ae60;
}

.btn-secondary {
  background: #7f8c8d;
  color: white;
}

.btn-secondary:hover {
  background: #6c7a7b;
}

@media (max-width: 768px) {
  .chart-explanation {
    grid-template-columns: 1fr;
  }

  .chart-controls {
    flex-direction: column;
  }

  .zones-container {
    grid-template-columns: 1fr;
  }

  .zone-item {
    flex-direction: column;
    text-align: center;
  }

  .step {
    flex-direction: column;
    text-align: center;
  }
}
</style>
