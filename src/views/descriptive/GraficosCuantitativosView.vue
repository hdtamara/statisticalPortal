<template>
  <div class="graficos-cuantitativos-view">
    <div class="container">
      <div class="hero">
        <h1>Gráficos para Datos Cuantitativos</h1>
        <p>Aprende a crear e interpretar histogramas y polígonos de frecuencia para datos cuantitativos</p>
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

      <!-- HISTOGRAMAS -->
      <div v-if="activeTab === 'histogramas'" class="content-section">
        <h2>Histogramas</h2>

        <div class="explanation-box">
          <p>
            Los datos cuantitativos son numéricos y se obtienen de mediciones o conteos. Estos gráficos son clave cuando los datos han sido agrupados en una tabla de frecuencias con intervalos de clase.
          </p>
        </div>

        <div class="chart-explanation">
          <div class="explanation-content">
            <h3>¿Cómo elaborar un histograma?</h3>
            <div class="steps">
              <div class="step">
                <div class="step-number">1</div>
                <div class="step-content">
                  <h4>Ejes</h4>
                  <p>El eje horizontal (eje X) representa los intervalos de clase de la variable. El eje vertical (eje Y) representa la frecuencia (absoluta o relativa) de cada intervalo</p>
                </div>
              </div>
              <div class="step">
                <div class="step-number">2</div>
                <div class="step-content">
                  <h4>Barras</h4>
                  <p>Se dibuja una barra rectangular para cada intervalo de clase. La base de la barra abarca todo el intervalo en el eje X, y su altura corresponde a la frecuencia de ese intervalo</p>
                </div>
              </div>
              <div class="step">
                <div class="step-number">3</div>
                <div class="step-content">
                  <h4>Sin separación</h4>
                  <p>Las barras van una al lado de la otra, indicando que no hay vacíos entre los intervalos</p>
                </div>
              </div>
            </div>
          </div>

          <div class="interpretation-content">
            <h3>¿Cómo interpretar un histograma?</h3>
            <ul>
              <li><strong>Forma de la distribución:</strong> Es su uso más importante. Permite identificar si la distribución es simétrica (con una forma de campana, típico de la distribución normal), asimétrica o sesgada (si tiene una "cola" más larga hacia un lado)</li>
              <li><strong>Centro:</strong> Se puede estimar visualmente dónde se concentran la mayoría de los datos (el intervalo con la barra más alta es la clase modal)</li>
              <li><strong>Dispersión:</strong> Permite ver qué tan dispersos o concentrados están los datos</li>
              <li><strong>Valores atípicos:</strong> Se pueden detectar barras aisladas lejos del cuerpo principal de datos</li>
            </ul>
          </div>
        </div>

        <div class="interactive-chart">
          <h3>Ejemplo Interactivo: Distribución de Datos Cuantitativos</h3>

          <div class="chart-controls">
            <div class="control-group">
              <label>Selecciona un conjunto de datos:</label>
              <select v-model="datosSeleccionados" @change="actualizarGrafico">
                <option value="estaturas">Estaturas (cm)</option>
                <option value="pesos">Pesos (kg)</option>
                <option value="edades">Edades (años)</option>
              </select>
            </div>

            <div class="control-group">
              <label>Número de clases:</label>
              <select v-model="numeroClases" @change="actualizarGrafico">
                <option value="5">5 clases</option>
                <option value="7">7 clases</option>
                <option value="10">10 clases</option>
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
            <div ref="histogramDiv" class="plotly-chart"></div>
          </div>

          <div class="data-table">
            <h4>Datos agrupados:</h4>
            <table>
              <thead>
                <tr>
                  <th>Clase</th>
                  <th>Límites</th>
                  <th>Frecuencia Absoluta</th>
                  <th>Frecuencia Relativa</th>
                  <th>Frecuencia %</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(bin, index) in binsData" :key="index">
                  <td>{{ bin.clase }}</td>
                  <td>{{ bin.limites }}</td>
                  <td>{{ bin.frecuencia }}</td>
                  <td>{{ bin.relativa.toFixed(3) }}</td>
                  <td>{{ bin.porcentual.toFixed(1) }}%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="interactive-zones">
          <h3>Zonas Interactivas: Elementos del Histograma</h3>
          <p>Haz clic en los elementos para aprender más:</p>

          <div class="zones-container">
            <div class="zone-item" @click="mostrarInfo('barra')" :class="{ active: zonaActiva === 'barra' }">
              <div class="zone-visual">
                <div class="sample-bar"></div>
              </div>
              <div class="zone-info">
                <h4>Barra</h4>
                <p>Rectángulo que representa la frecuencia en un intervalo</p>
              </div>
            </div>

            <div class="zone-item" @click="mostrarInfo('eje-x')" :class="{ active: zonaActiva === 'eje-x' }">
              <div class="zone-visual">
                <div class="sample-axis-x"></div>
              </div>
              <div class="zone-info">
                <h4>Eje X (Horizontal)</h4>
                <p>Contiene los intervalos de clases</p>
              </div>
            </div>

            <div class="zone-item" @click="mostrarInfo('eje-y')" :class="{ active: zonaActiva === 'eje-y' }">
              <div class="zone-visual">
                <div class="sample-axis-y"></div>
              </div>
              <div class="zone-info">
                <h4>Eje Y (Vertical)</h4>
                <p>Escala de frecuencias</p>
              </div>
            </div>

            <div class="zone-item" @click="mostrarInfo('titulo')" :class="{ active: zonaActiva === 'titulo' }">
              <div class="zone-visual">
                <div class="sample-title">Título del Histograma</div>
              </div>
              <div class="zone-info">
                <h4>Título</h4>
                <p>Describe la variable cuantitativa representada</p>
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

      <!-- POLÍGONOS DE FRECUENCIA -->
      <div v-if="activeTab === 'polygonos'" class="content-section">
        <h2>Polígonos de Frecuencia</h2>

        <div class="explanation-box">
          <p>
            Un polígono de frecuencia es un gráfico de líneas que se utiliza para mostrar la forma de una distribución. Se construye uniendo los puntos medios de la parte superior de las barras de un histograma.
          </p>
        </div>

        <div class="chart-explanation">
          <div class="explanation-content">
            <h3>¿Cómo elaborar un polígono de frecuencia?</h3>
            <div class="steps">
              <div class="step">
                <div class="step-number">1</div>
                <div class="step-content">
                  <h4>Calcular la Marca de Clase</h4>
                  <p>Para cada intervalo, se necesita su punto medio. Esto se llama marca de clase</p>
                  <p>Marca de Clase = (Límite Inferior + Límite Superior) / 2</p>
                </div>
              </div>
              <div class="step">
                <div class="step-number">2</div>
                <div class="step-content">
                  <h4>Marcar los Puntos</h4>
                  <p>En un plano cartesiano, el eje X representa las marcas de clase y el eje Y las frecuencias. Se marca un punto para cada par (marca de clase, frecuencia)</p>
                </div>
              </div>
              <div class="step">
                <div class="step-number">3</div>
                <div class="step-content">
                  <h4>Unir los Puntos</h4>
                  <p>Se conectan los puntos consecutivos con líneas rectas</p>
                </div>
              </div>
              <div class="step">
                <div class="step-number">4</div>
                <div class="step-content">
                  <h4>Cerrar el Polígono</h4>
                  <p>Para que el gráfico comience y termine en el eje horizontal, se suele añadir una marca de clase imaginaria antes de la primera y después de la última, ambas con frecuencia cero</p>
                </div>
              </div>
            </div>
          </div>

          <div class="interpretation-content">
            <h3>¿Cómo interpretar un polígono de frecuencia?</h3>
            <ul>
              <li><strong>Visualizar la Forma:</strong> Al igual que el histograma, muestra la forma de la distribución (simetría, sesgo, picos). A veces, la línea suavizada facilita la visualización de la tendencia</li>
              <li><strong>Comparar Distribuciones:</strong> Su principal ventaja es que permite superponer dos o más polígonos en el mismo gráfico (usando diferentes colores o estilos de línea) para comparar diferentes conjuntos de datos de manera clara</li>
            </ul>
          </div>
        </div>

        <div class="interactive-chart">
          <h3>Ejemplo Interactivo: Polígono de Frecuencia</h3>

          <div class="chart-controls">
            <div class="control-group">
              <label>Selecciona un conjunto de datos:</label>
              <select v-model="datosSeleccionadosPoly" @change="actualizarGraficoPoly">
                <option value="estaturas">Estaturas (cm)</option>
                <option value="pesos">Pesos (kg)</option>
                <option value="edades">Edades (años)</option>
              </select>
            </div>

            <div class="control-group">
              <label>Número de clases:</label>
              <select v-model="numeroClasesPoly" @change="actualizarGraficoPoly">
                <option value="5">5 clases</option>
                <option value="7">7 clases</option>
                <option value="10">10 clases</option>
              </select>
            </div>

            <div class="control-group">
              <label>Tipo de frecuencia:</label>
              <select v-model="tipoFrecuenciaPoly" @change="actualizarGraficoPoly">
                <option value="absoluta">Frecuencia Absoluta</option>
                <option value="relativa">Frecuencia Relativa</option>
                <option value="porcentual">Frecuencia Porcentual</option>
              </select>
            </div>
          </div>

          <div class="chart-container">
            <div ref="polygonDiv" class="plotly-chart"></div>
          </div>

          <div class="data-table">
            <h4>Puntos del polígono:</h4>
            <table>
              <thead>
                <tr>
                  <th>Punto Medio</th>
                  <th>Frecuencia</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(point, index) in polygonPoints" :key="index">
                  <td>{{ point.x }}</td>
                  <td>{{ point.y }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="interactive-zones">
          <h3>Zonas Interactivas: Elementos del Polígono</h3>
          <p>Haz clic en los elementos para aprender más:</p>

          <div class="zones-container">
            <div class="zone-item" @click="mostrarInfoPoly('linea')" :class="{ active: zonaActivaPoly === 'linea' }">
              <div class="zone-visual">
                <div class="sample-line"></div>
              </div>
              <div class="zone-info">
                <h4>Línea del Polígono</h4>
                <p>Conecta los puntos medios de las barras del histograma</p>
              </div>
            </div>

            <div class="zone-item" @click="mostrarInfoPoly('puntos')" :class="{ active: zonaActivaPoly === 'puntos' }">
              <div class="zone-visual">
                <div class="sample-points"></div>
              </div>
              <div class="zone-info">
                <h4>Puntos</h4>
                <p>Ubicados en el centro de cada intervalo</p>
              </div>
            </div>

            <div class="zone-item" @click="mostrarInfoPoly('ejes')" :class="{ active: zonaActivaPoly === 'ejes' }">
              <div class="zone-visual">
                <div class="sample-axes"></div>
              </div>
              <div class="zone-info">
                <h4>Ejes</h4>
                <p>Mismos que en el histograma</p>
              </div>
            </div>

            <div class="zone-item" @click="mostrarInfoPoly('titulo')" :class="{ active: zonaActivaPoly === 'titulo' }">
              <div class="zone-visual">
                <div class="sample-title">Título del Polígono</div>
              </div>
              <div class="zone-info">
                <h4>Título</h4>
                <p>Describe la distribución representada</p>
              </div>
            </div>
          </div>

          <div v-if="infoZonaPoly" class="zone-detail">
            <h4>{{ infoZonaPoly.titulo }}</h4>
            <p>{{ infoZonaPoly.descripcion }}</p>
            <div v-if="infoZonaPoly.ejemplo" class="zone-example">
              <strong>Ejemplo:</strong> {{ infoZonaPoly.ejemplo }}
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
import { ref, computed, onMounted, watch, nextTick } from 'vue'

// Configuración de pestañas
const tabs = [
  { id: 'histogramas', label: 'Histogramas' },
  { id: 'polygonos', label: 'Polígonos de Frecuencia' },
]

const activeTab = ref('histogramas')

// Refs for Plotly charts
const histogramDiv = ref<HTMLElement>()
const polygonDiv = ref<HTMLElement>()

// Datos cuantitativos
const conjuntosDatos = {
  estaturas: [
    160, 165, 170, 175, 168, 172, 158, 180, 169, 173,
    167, 178, 162, 176, 171, 159, 174, 166, 177, 161,
    163, 179, 164, 168, 172, 170, 175, 169, 173, 167,
    160, 165, 170, 175, 168, 172, 158, 180, 169, 173,
    167, 178, 162, 176, 171, 159, 174, 166, 177, 161
  ],
  pesos: [
    65, 70, 75, 80, 68, 72, 63, 85, 69, 73,
    67, 78, 62, 76, 71, 64, 74, 66, 77, 61,
    63, 79, 64, 68, 72, 70, 75, 69, 73, 67,
    65, 70, 75, 80, 68, 72, 63, 85, 69, 73,
    67, 78, 62, 76, 71, 64, 74, 66, 77, 61
  ],
  edades: [
    18, 22, 25, 30, 21, 24, 19, 35, 23, 26,
    20, 28, 17, 27, 24, 19, 29, 21, 31, 18,
    20, 32, 19, 22, 25, 23, 30, 24, 26, 21,
    18, 22, 25, 30, 21, 24, 19, 35, 23, 26,
    20, 28, 17, 27, 24, 19, 29, 21, 31, 18
  ],
}

// Función para crear bins
const crearBins = (datos: number[], numClases: string) => {
  const num = parseInt(numClases)
  const min = Math.min(...datos)
  const max = Math.max(...datos)
  const rango = max - min
  const anchoClase = Math.ceil(rango / num)

  const bins = []
  for (let i = 0; i < num; i++) {
    const limiteInferior = min + (i * anchoClase)
    const limiteSuperior = limiteInferior + anchoClase
    const frecuencia = datos.filter(d => d >= limiteInferior && d < limiteSuperior).length
    bins.push({
      clase: `${i + 1}`,
      limites: `${limiteInferior}-${limiteSuperior}`,
      limiteInferior,
      limiteSuperior,
      puntoMedio: (limiteInferior + limiteSuperior) / 2,
      frecuencia,
    })
  }
  return bins
}

// Histograma
const datosSeleccionados = ref('estaturas')
const numeroClases = ref(7)
const tipoFrecuencia = ref('absoluta')

const binsData = computed(() => {
  const datos = conjuntosDatos[datosSeleccionados.value as keyof typeof conjuntosDatos]
  const bins = crearBins(datos, numeroClases.value.toString())
  const total = datos.length

  return bins.map(bin => ({
    ...bin,
    relativa: bin.frecuencia / total,
    porcentual: (bin.frecuencia / total) * 100,
  }))
})

// Function to get histogram data for Plotly
const getHistogramData = () => {
  const bins = binsData.value
  return [{
    x: bins.map(bin => bin.puntoMedio),
    y: bins.map(bin => tipoFrecuencia.value === 'absoluta' ? bin.frecuencia :
                      tipoFrecuencia.value === 'relativa' ? bin.relativa : bin.porcentual),
    type: 'bar' as const,
    marker: { color: 'rgba(54, 162, 235, 0.8)' },
    name: 'Frecuencia',
    width: bins.length > 0 ? bins[0].limiteSuperior - bins[0].limiteInferior : 1
  }]
}

// Function to get histogram layout for Plotly
const getHistogramLayout = () => ({
  title: { text: `Histograma - ${datosSeleccionados.value.charAt(0).toUpperCase() + datosSeleccionados.value.slice(1)}` },
  xaxis: { title: { text: 'Valor' } },
  yaxis: { title: { text: 'Frecuencia' } },
  bargap: 0, // This makes bars touch
  bargroupgap: 0
})

const actualizarGrafico = async () => {
  if (histogramDiv.value) {
    const Plotly = await import('plotly.js-basic-dist')
    Plotly.default.react(histogramDiv.value, getHistogramData(), getHistogramLayout())
  }
}

// Polígono
const datosSeleccionadosPoly = ref('estaturas')
const numeroClasesPoly = ref(7)
const tipoFrecuenciaPoly = ref('absoluta')

const polygonPoints = computed(() => {
  const datos = conjuntosDatos[datosSeleccionadosPoly.value as keyof typeof conjuntosDatos]
  const bins = crearBins(datos, numeroClasesPoly.value.toString())
  const total = datos.length

  return bins.map(bin => {
    let y = bin.frecuencia
    if (tipoFrecuenciaPoly.value === 'relativa') {
      y = bin.frecuencia / total
    } else if (tipoFrecuenciaPoly.value === 'porcentual') {
      y = (bin.frecuencia / total) * 100
    }
    return { x: bin.puntoMedio, y }
  })
})

// Function to get polygon data for Plotly
const getPolygonData = () => {
  const points = polygonPoints.value
  return [{
    x: points.map(p => p.x),
    y: points.map(p => p.y),
    type: 'scatter' as const,
    mode: 'lines+markers' as const,
    line: { color: 'rgba(255, 99, 132, 1)' },
    marker: { color: 'rgba(255, 99, 132, 0.8)' },
    name: tipoFrecuenciaPoly.value === 'absoluta' ? 'Frecuencia' :
          tipoFrecuenciaPoly.value === 'relativa' ? 'Frecuencia Relativa' : 'Porcentaje (%)'
  }]
}

// Function to get polygon layout for Plotly
const getPolygonLayout = () => ({
  title: { text: `Polígono de Frecuencia - ${datosSeleccionadosPoly.value.charAt(0).toUpperCase() + datosSeleccionadosPoly.value.slice(1)}` },
  xaxis: { title: { text: 'Valor' } },
  yaxis: { title: { text: tipoFrecuenciaPoly.value === 'absoluta' ? 'Frecuencia' :
                           tipoFrecuenciaPoly.value === 'relativa' ? 'Frecuencia Relativa' : 'Porcentaje (%)' } }
})

const actualizarGraficoPoly = async () => {
  if (polygonDiv.value) {
    const Plotly = await import('plotly.js-basic-dist')
    Plotly.default.react(polygonDiv.value, getPolygonData(), getPolygonLayout())
  }
}

// Zonas interactivas para histograma
const zonaActiva = ref('')
const infoZona = ref<{ titulo: string; descripcion: string; ejemplo?: string } | null>(null)

const mostrarInfo = (zona: string) => {
  zonaActiva.value = zona
  const infos = {
    barra: {
      titulo: 'La Barra del Histograma',
      descripcion: 'Representa la frecuencia de observaciones dentro de un intervalo específico.',
      ejemplo: 'Una barra alta indica que muchos datos caen en ese intervalo.',
    },
    'eje-x': {
      titulo: 'Eje X (Horizontal)',
      descripcion: 'Muestra los intervalos o clases en las que se agrupan los datos.',
      ejemplo: '160-170 cm para estaturas.',
    },
    'eje-y': {
      titulo: 'Eje Y (Vertical)',
      descripcion: 'Indica la escala de frecuencias o densidad de los datos.',
      ejemplo: 'De 0 hasta la frecuencia máxima observada.',
    },
    titulo: {
      titulo: 'Título del Histograma',
      descripcion: 'Describe qué variable cuantitativa se está representando.',
      ejemplo: '"Distribución de Estaturas" o "Histograma de Pesos"',
    },
  }
  infoZona.value = infos[zona as keyof typeof infos]
}

// Zonas interactivas para polígono
const zonaActivaPoly = ref('')
const infoZonaPoly = ref<{ titulo: string; descripcion: string; ejemplo?: string } | null>(null)

const mostrarInfoPoly = (zona: string) => {
  zonaActivaPoly.value = zona
  const infos = {
    linea: {
      titulo: 'Línea del Polígono',
      descripcion: 'Conecta los puntos medios de las barras del histograma correspondiente.',
      ejemplo: 'Muestra la tendencia continua de la distribución.',
    },
    puntos: {
      titulo: 'Puntos de Conexión',
      descripcion: 'Ubicados en el centro de cada intervalo del histograma.',
      ejemplo: 'Cada punto representa la frecuencia en el punto medio del intervalo.',
    },
    ejes: {
      titulo: 'Ejes del Polígono',
      descripcion: 'Iguales a los del histograma: X para valores, Y para frecuencias.',
      ejemplo: 'Permiten comparar con el histograma base.',
    },
    titulo: {
      titulo: 'Título del Polígono',
      descripcion: 'Indica la variable y el tipo de representación.',
      ejemplo: '"Polígono de Frecuencia de Edades"',
    },
  }
  infoZonaPoly.value = infos[zona as keyof typeof infos]
}

onMounted(() => {
  actualizarGrafico()
  actualizarGraficoPoly()
})

watch(activeTab, async (newTab) => {
  await nextTick()
  if (newTab === 'histogramas') {
    actualizarGrafico()
  } else if (newTab === 'polygonos') {
    actualizarGraficoPoly()
  }
})
</script>

<style scoped>
.graficos-cuantitativos-view {
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

.plotly-chart {
  width: 100%;
  height: 100%;
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

.sample-line {
  width: 60px;
  height: 2px;
  background: #e74c3c;
  position: relative;
}

.sample-line::before {
  content: '';
  position: absolute;
  left: -3px;
  top: -3px;
  width: 8px;
  height: 8px;
  background: #e74c3c;
  border-radius: 50%;
}

.sample-line::after {
  content: '';
  position: absolute;
  right: -3px;
  top: -3px;
  width: 8px;
  height: 8px;
  background: #e74c3c;
  border-radius: 50%;
}

.sample-points {
  display: flex;
  gap: 5px;
}

.sample-points::before,
.sample-points::after {
  content: '';
  width: 6px;
  height: 6px;
  background: #e74c3c;
  border-radius: 50%;
}

.sample-axes {
  position: relative;
  width: 50px;
  height: 40px;
}

.sample-axes::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 2px;
  background: #2c3e50;
}

.sample-axes::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 2px;
  height: 30px;
  background: #2c3e50;
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
