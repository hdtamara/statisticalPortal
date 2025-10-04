<template>
  <div class="distribuciones-muestrales-view">
    <div class="container">
      <div class="hero">
        <h1>Introducción a las Distribuciones Muestrales</h1>
        <p>Comprende los conceptos fundamentales de las distribuciones muestrales y su importancia en la inferencia estadística</p>
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

      <!-- CONCEPTOS FUNDAMENTALES -->
      <div v-if="activeTab === 'conceptos'" class="content-section">
        <h2>Conceptos Fundamentales de Muestreo</h2>

        <div class="concept-cards">
          <ContentCard
            title="Población"
            content="Conjunto completo de individuos, objetos o eventos que comparten características observables y son de interés para una investigación."
            card-type="descriptive"
          />

          <ContentCard
            title="Muestra"
            content="Subconjunto representativo de la población que seleccionamos para estudiar, con el objetivo de hacer inferencias sobre toda la población."
            card-type="descriptive"
          />

          <ContentCard
            title="Muestreo"
            content="Proceso de selección de una muestra de una población. Puede ser probabilístico (aleatorio) o no probabilístico."
            card-type="descriptive"
          />

          <ContentCard
            title="Parámetro Poblacional"
            content="Valor numérico que describe una característica de una población (ej: media μ, desviación σ). Es un valor fijo pero generalmente desconocido."
            card-type="descriptive"
          />

          <ContentCard
            title="Estadístico Muestral"
            content="Valor numérico que describe una característica de una muestra (ej: media x̄, desviación s). Es una variable aleatoria que varía entre muestras."
            card-type="descriptive"
          />

          <ContentCard
            title="Distribución Muestral"
            content="Distribución de probabilidad de un estadístico (como la media) calculado a partir de todas las muestras posibles de un tamaño dado."
            card-type="descriptive"
          />
        </div>

        <div class="example-box">
          <h3>Ejemplo de Muestreo</h3>
          <p>Si queremos estudiar el ingreso promedio de todos los hogares en un país (población), seleccionamos una muestra de 2,000 hogares para entrevistar. Los resultados de esta muestra nos permiten estimar el ingreso promedio de toda la población.</p>
        </div>
      </div>

      <!-- PARÁMETROS VS ESTADÍSTICOS -->
      <div v-if="activeTab === 'parametros'" class="content-section">
        <h2>Diferencia entre Parámetros Poblacionales y Estadísticos Muestrales</h2>

        <div class="comparison-table">
          <table>
            <thead>
              <tr>
                <th>Concepto</th>
                <th>Parámetro Poblacional</th>
                <th>Estadístico Muestral</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Definición</strong></td>
                <td>Característica numérica que describe a toda la población</td>
                <td>Característica numérica que describe una muestra</td>
              </tr>
              <tr>
                <td><strong>Símbolo (Media)</strong></td>
                <td>μ (mu)</td>
                <td>x̄ (x-barra)</td>
              </tr>
              <tr>
                <td><strong>Símbolo (Desviación)</strong></td>
                <td>σ (sigma)</td>
                <td>s</td>
              </tr>
              <tr>
                <td><strong>Símbolo (Proporción)</strong></td>
                <td>p</td>
                <td>p̂ (p-sombrero)</td>
              </tr>
              <tr>
                <td><strong>Naturaleza</strong></td>
                <td>Valor fijo (generalmente desconocido)</td>
                <td>Variable aleatoria (cambia entre muestras)</td>
              </tr>
              <tr>
                <td><strong>Ejemplo</strong></td>
                <td>Altura promedio exacta de todos los adultos en un país</td>
                <td>Altura promedio de una muestra de 500 adultos</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="example-box">
          <h3>Importancia de la Distinción</h3>
          <p>Comprender la diferencia entre parámetros y estadísticos es fundamental en inferencia estadística. Los parámetros son valores fijos que queremos conocer, mientras que los estadísticos son estimaciones variables que usamos para inferir los valores de los parámetros.</p>
        </div>
      </div>

      <!-- ERROR ESTÁNDAR -->
      <div v-if="activeTab === 'error'" class="content-section">
        <h2>Error Estándar: Medida de la Variabilidad Muestral</h2>

        <div class="theory-content">
          <h3>¿Qué es el Error Estándar?</h3>
          <p>El <strong>error estándar</strong> es la desviación estándar de la distribución muestral de un estadístico. Mide la variabilidad que esperaríamos ver en el estadístico si repitiéramos el muestreo muchas veces.</p>

          <div class="formula-box">
            <h4>Fórmula del Error Estándar de la Media</h4>
            <div class="formula-display">
              <div class="katex-equation" v-html="renderLatex('\\sigma_{\\bar{x}} = \\frac{\\sigma}{\\sqrt{n}}')"></div>
            </div>
            <div class="formula-explanation">
              <h4>¿Qué significa cada símbolo?</h4>
              <div class="variables-grid">
                <div class="variable-item">
                  <span class="variable-symbol">σₓ̄</span>
                  <span class="variable-desc">Error estándar de la media</span>
                </div>
                <div class="variable-item">
                  <span class="variable-symbol">σ</span>
                  <span class="variable-desc">Desviación estándar poblacional</span>
                </div>
                <div class="variable-item">
                  <span class="variable-symbol">n</span>
                  <span class="variable-desc">Tamaño de la muestra</span>
                </div>
              </div>
            </div>
          </div>

          <div class="properties-box">
            <h3>Propiedades del Error Estándar</h3>
            <ul>
              <li>Cuanto <strong>mayor es el tamaño de muestra (n)</strong>, menor es el error estándar</li>
              <li>Cuanto <strong>mayor es la variabilidad poblacional (σ)</strong>, mayor es el error estándar</li>
              <li>El error estándar <strong>cuantifica la precisión</strong> de nuestra estimación</li>
              <li>Cuando no conocemos σ, usamos la desviación estándar muestral (s) como estimación</li>
            </ul>
          </div>

          <div class="example-box">
            <h3>Ejemplo de Cálculo</h3>
            <p>Supongamos que la estatura de los adultos tiene una desviación estándar poblacional de σ = 10 cm. Si tomamos una muestra de 100 personas:</p>
            <div class="calculation-steps">
              <div class="calc-step">
                <div class="calc-equation" v-html="renderLatex('\\sigma_{\\bar{x}} = \\frac{\\sigma}{\\sqrt{n}}')"></div>
                <span class="calc-desc">Aplicamos la fórmula general</span>
              </div>
              <div class="calc-step">
                <div class="calc-equation" v-html="renderLatex('\\sigma_{\\bar{x}} = \\frac{10}{\\sqrt{100}}')"></div>
                <span class="calc-desc">Sustituimos los valores</span>
              </div>
              <div class="calc-step">
                <div class="calc-equation" v-html="renderLatex('\\sigma_{\\bar{x}} = \\frac{10}{10}')"></div>
                <span class="calc-desc">Calculamos la raíz cuadrada</span>
              </div>
              <div class="calc-step result">
                <div class="calc-equation" v-html="renderLatex('\\sigma_{\\bar{x}} = \\mathbf{1\\ cm}')"></div>
                <span class="calc-desc">Resultado final</span>
              </div>
            </div>
            <p>Esto significa que esperamos que las medias de diferentes muestras varíen aproximadamente 1 cm alrededor de la media poblacional real.</p>
          </div>
        </div>
      </div>

      <!-- DISTRIBUCIÓN DE MEDIAS -->
      <div v-if="activeTab === 'distribucion'" class="content-section">
        <h2>Distribución de la Media Muestral</h2>

        <div class="theory-content">
          <p>Cuando tomamos múltiples muestras de tamaño <strong>n</strong> de una población y calculamos la media de cada muestra, estas medias muestrales forman su propia distribución llamada <strong>distribución muestral de la media</strong>.</p>

          <div class="properties-box">
            <h3>Propiedades de la Distribución Muestral de la Media</h3>
            <div class="properties-list">
              <div class="property-item">
                <div class="property-text">
                  La <strong>media de las medias muestrales</strong> es igual a la media poblacional:
                </div>
                <div class="property-formula" v-html="renderLatex('\\mu_{\\bar{x}} = \\mu')"></div>
              </div>
              <div class="property-item">
                <div class="property-text">
                  La <strong>desviación estándar de las medias muestrales</strong> (error estándar) es igual a la desviación estándar poblacional dividida por la raíz cuadrada del tamaño de muestra:
                </div>
                <div class="property-formula" v-html="renderLatex('\\sigma_{\\bar{x}} = \\frac{\\sigma}{\\sqrt{n}}')"></div>
              </div>
              <div class="property-item">
                <div class="property-text">
                  Para muestras grandes (n ≥ 30), la distribución de las medias muestrales es aproximadamente normal, <strong>sin importar la forma de la distribución poblacional</strong>
                </div>
              </div>
            </div>
          </div>

          <div class="example-box">
            <h3>Ejemplo Práctico</h3>
            <p>Supongamos que la estatura de los adultos en una ciudad sigue una distribución con media μ = 170 cm y desviación estándar σ = 10 cm. Si tomamos muestras de 100 personas:</p>
            <div class="example-properties">
              <div class="property-item">
                <div class="property-text">La media de las medias muestrales será:</div>
                <div class="property-formula" v-html="renderLatex('\\mu_{\\bar{x}} = 170\\ \\text{cm}')"></div>
              </div>
              <div class="property-item">
                <div class="property-text">El error estándar será:</div>
                <div class="property-formula" v-html="renderLatex('\\sigma_{\\bar{x}} = \\frac{10}{\\sqrt{100}} = 1\\ \\text{cm}')"></div>
              </div>
              <div class="property-item">
                <div class="property-text">La distribución de las medias muestrales será aproximadamente normal</div>
              </div>
              <div class="property-item">
                <div class="property-text">Aproximadamente el 95% de las medias muestrales estarán entre 168 y 172 cm</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- SIMULACIÓN -->
      <div v-if="activeTab === 'simulacion'" class="content-section">
        <h2>Simulación: Variabilidad de Medias Muestrales</h2>

        <div class="explanation-box">
          <h3>¿Qué demuestra esta simulación?</h3>
          <p>Esta simulación muestra cómo las <strong>medias de diferentes muestras</strong> varían aunque provengan de la <strong>misma población</strong>.
          Esto ilustra por qué los estadísticos muestrales son variables aleatorias, mientras que los parámetros poblacionales son valores fijos.</p>
        </div>

        <div class="viz-controls">
          <div class="control-group">
            <label for="sample-size">Tamaño de cada muestra:</label>
            <input type="range" id="sample-size" min="5" max="100" v-model="tamanoMuestra">
            <span>{{ tamanoMuestra }} elementos</span>
            <div class="control-help">
              <small>Muestras más grandes tendrán menos variabilidad</small>
            </div>
          </div>

          <div class="control-group">
            <label for="num-samples">Número de muestras:</label>
            <input type="range" id="num-samples" min="1" max="50" v-model="numeroMuestras">
            <span>{{ numeroMuestras }} muestras</span>
            <div class="control-help">
              <small>Cuantas más muestras, mejor se ve la distribución</small>
            </div>
          </div>

          <button @click="generarMuestras" class="btn btn-primary">Generar Muestras</button>
        </div>

        <div class="simulation-results">
          <h3>Resultados de la Simulación</h3>

          <div class="results-grid">
            <div class="population-info">
              <h4>Población de Referencia</h4>
              <p>Supongamos una población con:</p>
              <ul>
                <li>Media real (μ) = {{ mediaPoblacional }}</li>
                <li>Desviación estándar (σ) = {{ desviacionPoblacional }}</li>
                <li>Distribución: Normal</li>
              </ul>
            </div>

            <div class="stats-results">
              <h4>Estadísticas de las Medias Muestrales</h4>
              <div class="stats-box">
                <div class="stat">
                  <span class="stat-label">Media de las medias:</span>
                  <span class="stat-value">{{ mediaMedias.toFixed(2) }}</span>
                </div>
                <div class="stat">
                  <span class="stat-label">Desviación estándar:</span>
                  <span class="stat-value">{{ desviacionMedias.toFixed(2) }}</span>
                </div>
                <div class="stat">
                  <span class="stat-label">Error estándar teórico (σ/√n):</span>
                  <span class="stat-value">{{ errorEstandarTeorico.toFixed(2) }}</span>
                </div>
                <div class="stat">
                  <span class="stat-label">Rango de valores:</span>
                  <span class="stat-value">{{ rangoMedias }}</span>
                </div>
              </div>
            </div>
          </div>

          <div class="visualization">
            <h4>Distribución de las Medias Muestrales</h4>
            <div class="viz-container">
              <div class="dot-plot">
                <div class="plot-axis">
                  <div class="axis-label">Valor de la media muestral</div>
                  <div class="axis-line"></div>
                  <div class="axis-ticks">
                    <span v-for="tick in axisTicks" :key="tick" class="axis-tick">
                      {{ tick }}
                    </span>
                  </div>
                </div>

                <div class="dots-container">
                  <div
                    v-for="(media, index) in mediasMuestrales"
                    :key="index"
                    class="value-dot"
                    :style="{ left: calcularPosicion(media) + '%' }"
                    :title="'Muestra ' + (index + 1) + ': ' + media.toFixed(2)"
                  ></div>
                </div>

                <div class="mean-line" :style="{ left: calcularPosicion(mediaPoblacional) + '%' }">
                  <div class="line"></div>
                  <div class="label">Media poblacional ({{ mediaPoblacional }})</div>
                </div>
              </div>

              <div class="histogram">
                <div class="histogram-title">Histograma de Frecuencias</div>
                <div class="histogram-bars">
                  <div
                    v-for="(bar, index) in histogramaBarras"
                    :key="index"
                    class="histogram-bar"
                    :style="{ height: bar.altura + 'px' }"
                    :title="'Intervalo: ' + bar.intervalo + ', Frecuencia: ' + bar.frecuencia"
                  >
                    <span class="bar-label">{{ bar.frecuencia }}</span>
                  </div>
                </div>
                <div class="histogram-axis">
                  <span>{{ ejeXMin.toFixed(1) }}</span>
                  <span>{{ mediaPoblacional }}</span>
                  <span>{{ ejeXMax.toFixed(1) }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="interpretation">
          <h4>Interpretación de los Resultados</h4>
          <div class="interpretation-content">
            <p>Como puedes observar en la simulación:</p>
            <ul>
              <li>Cada muestra produce una <strong>media diferente</strong>, aunque provengan de la misma población</li>
              <li>La <strong>media de todas las medias muestrales</strong> ({{ mediaMedias.toFixed(2) }}) se acerca a la media poblacional real ({{ mediaPoblacional }})</li>
              <li>La <strong>variabilidad de las medias</strong> (desviación estándar = {{ desviacionMedias.toFixed(2) }}) es menor que la variabilidad poblacional ({{ desviacionPoblacional }})</li>
              <li>El <strong>error estándar</strong> ({{ errorEstandarTeorico.toFixed(2) }}) nos dice cuánto esperamos que varíen las medias muestrales</li>
              <li v-if="tamanoMuestra > 1">Con muestras de tamaño {{ tamanoMuestra }}, la variabilidad es aproximadamente <span v-html="renderLatex('\\frac{' + desviacionPoblacional + '}{\\sqrt{' + tamanoMuestra + '}} = ' + errorEstandarTeorico.toFixed(2))"></span></li>
            </ul>

            <div class="key-insight">
              <h5>¿Por qué es importante?</h5>
              <p>Esta variabilidad natural explica por qué diferentes estudios pueden obtener resultados ligeramente distintos incluso cuando estudian la misma población.
              El error estándar nos ayuda a cuantificar esta incertidumbre inherente al proceso de muestreo.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- TLC -->
      <div v-if="activeTab === 'tlc'" class="content-section">
        <h2>Teorema del Límite Central</h2>

        <div class="theory-content">
          <div class="tlc-definition">
            <h3>¿Qué es el Teorema del Límite Central?</h3>
            <p>El <strong>Teorema del Límite Central (TLC)</strong> establece que, para muestras suficientemente grandes, la distribución de las medias muestrales se aproxima a una distribución normal, sin importar la forma de la distribución de la población de origen.</p>
          </div>

          <div class="tlc-conditions">
            <h3>Condiciones para Aplicar el TLC</h3>
            <ul>
              <li><strong>Muestras aleatorias</strong>: Las observaciones deben ser independientes y seleccionadas al azar</li>
              <li><strong>Tamaño de muestra</strong>: Generalmente n ≥ 30, pero puede ser menor si la población es aproximadamente normal</li>
              <li><strong>Independencia</strong>: El tamaño de muestra no debe exceder el 10% de la población cuando el muestreo es sin reemplazo</li>
            </ul>
          </div>

          <div class="applications">
            <h3>Aplicaciones Prácticas del TLC</h3>

            <div class="application-cards">
              <ContentCard
                title="Control de Calidad"
                content="En procesos industriales, se usan medias muestrales para monitorear si un proceso está bajo control estadístico."
                card-type="inferential"
              />

              <ContentCard
                title="Encuestas y Sondeos"
                content="Las encuestas de opinión usan el TLC para estimar parámetros poblacionales (como proporciones) a partir de muestras."
                card-type="inferential"
              />

              <ContentCard
                title="Investigación Médica"
                content="En ensayos clínicos, se comparan las medias de grupos tratamiento y control usando los principios del TLC."
                card-type="inferential"
              />
            </div>
          </div>

          <div class="example-box">
            <h3>Ejemplo del Teorema del Límite Central</h3>
            <p>Imaginemos una población con una distribución muy sesgada (como el ingreso económico). Aunque la población no sea normal:</p>
            <ul>
              <li>Si tomamos muestras de tamaño n = 40</li>
              <li>Calculamos la media de cada muestra</li>
              <li>La distribución de estas medias muestrales será aproximadamente normal</li>
              <li>Podemos usar propiedades de la distribución normal para hacer inferencias</li>
            </ul>
            <p>Esto permite aplicar técnicas estadísticas basadas en la normalidad incluso cuando la población original no es normal.</p>
          </div>
        </div>
      </div>

      <div class="navigation-buttons">
        <router-link to="/inferencial" class="btn btn-secondary">
          Volver a Estadística Inferencial
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import katex from 'katex';
import 'katex/dist/katex.min.css';
import ContentCard from '@/components/common/ContentCard.vue';

// Configuración de pestañas
const tabs = [
  { id: 'conceptos', label: 'Conceptos' },
  { id: 'parametros', label: 'Parámetros vs Estadísticos' },
  { id: 'error', label: 'Error Estándar' },
  { id: 'distribucion', label: 'Distribución de Medias' },
  { id: 'simulacion', label: 'Simulación' },
  { id: 'tlc', label: 'Teorema Límite Central' }
];

const activeTab = ref('conceptos');

// Configuración para la simulación
const tamanoMuestra = ref(30);
const numeroMuestras = ref(20);
const mediasMuestrales = ref<number[]>([]);

// Parámetros poblacionales (supuestos)
const mediaPoblacional = ref(50);
const desviacionPoblacional = ref(10);

// Generar muestras aleatorias
const generarMuestras = () => {
  mediasMuestrales.value = [];

  for (let i = 0; i < numeroMuestras.value; i++) {
    let suma = 0;

    // Generar una muestra aleatoria
    for (let j = 0; j < tamanoMuestra.value; j++) {
      // Generar un valor aleatorio con distribución normal
      const u1 = Math.random();
      const u2 = Math.random();
      const z = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);

      // Escalar y desplazar para obtener la distribución deseada
      const valor = mediaPoblacional.value + z * desviacionPoblacional.value;
      suma += valor;
    }

    // Calcular la media de esta muestra
    const mediaMuestra = suma / tamanoMuestra.value;
    mediasMuestrales.value.push(mediaMuestra);
  }
};

// Calcular estadísticas de las medias muestrales
const mediaMedias = computed(() => {
  if (mediasMuestrales.value.length === 0) return 0;
  const suma = mediasMuestrales.value.reduce((total, media) => total + media, 0);
  return suma / mediasMuestrales.value.length;
});

const desviacionMedias = computed(() => {
  if (mediasMuestrales.value.length < 2) return 0;

  const media = mediaMedias.value;
  const sumaCuadrados = mediasMuestrales.value.reduce(
    (total, mediaMuestra) => total + Math.pow(mediaMuestra - media, 2),
    0
  );

  return Math.sqrt(sumaCuadrados / mediasMuestrales.value.length);
});

const errorEstandarTeorico = computed(() => {
  return desviacionPoblacional.value / Math.sqrt(tamanoMuestra.value);
});

const rangoMedias = computed(() => {
  if (mediasMuestrales.value.length === 0) return "N/A";

  const min = Math.min(...mediasMuestrales.value).toFixed(2);
  const max = Math.max(...mediasMuestrales.value).toFixed(2);
  return `${min} - ${max}`;
});

// Configuración para la visualización
const ejeXMin = computed(() => {
  return mediaPoblacional.value - 3 * errorEstandarTeorico.value;
});

const ejeXMax = computed(() => {
  return mediaPoblacional.value + 3 * errorEstandarTeorico.value;
});

const axisTicks = computed(() => {
  const ticks = [];
  const min = Math.floor(ejeXMin.value);
  const max = Math.ceil(ejeXMax.value);
  const step = Math.ceil((max - min) / 5);

  for (let i = min; i <= max; i += step) {
    ticks.push(i);
  }

  return ticks;
});

const calcularPosicion = (valor: number) => {
  const rango = ejeXMax.value - ejeXMin.value;
  const posicion = ((valor - ejeXMin.value) / rango) * 100;
  return Math.max(0, Math.min(100, posicion));
};

// Configuración del histograma
const histogramaBarras = computed(() => {
  const numBarras = 10;
  const barras = Array.from({ length: numBarras }, () => ({
    intervalo: "",
    frecuencia: 0,
    altura: 0
  }));

  if (mediasMuestrales.value.length === 0) return barras;

  const rango = ejeXMax.value - ejeXMin.value;
  const anchoIntervalo = rango / numBarras;

  // Inicializar barras con sus intervalos
  for (let i = 0; i < numBarras; i++) {
    const inicio = ejeXMin.value + i * anchoIntervalo;
    const fin = inicio + anchoIntervalo;
    barras[i].intervalo = `${inicio.toFixed(1)} - ${fin.toFixed(1)}`;
  }

  // Contar frecuencias
  mediasMuestrales.value.forEach(media => {
    const indice = Math.min(
      Math.floor((media - ejeXMin.value) / anchoIntervalo),
      numBarras - 1
    );
    if (indice >= 0 && indice < numBarras) {
      barras[indice].frecuencia++;
    }
  });

  // Calcular alturas (normalizadas) - Corregido para evitar undefined
  const maxFrecuencia = Math.max(...barras.map(b => b.frecuencia || 0));
  barras.forEach(bar => {
    bar.altura = maxFrecuencia > 0 ? ((bar.frecuencia || 0) / maxFrecuencia) * 100 : 0;
  });

  return barras;
});

// Función para renderizar LaTeX
const renderLatex = (latex: string) => {
  try {
    return katex.renderToString(latex, {
      throwOnError: false,
      displayMode: false
    });
  } catch (error) {
    console.error('Error rendering LaTeX:', error);
    return latex;
  }
};

// Inicializar la simulación
onMounted(() => {
  generarMuestras();
});
</script>

<style scoped>
.distribuciones-muestrales-view {
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
  background: var(--brand1);
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
  color: var(--brand1);
  margin-bottom: 1.5rem;
  border-bottom: 2px solid var(--border);
  padding-bottom: 0.5rem;
}

.concept-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0;
}

.example-box {
  background: #ecf0f1;
  padding: 1.5rem;
  border-radius: 8px;
  margin: 1.5rem 0;
  border-left: 4px solid #3498db;
}

.comparison-table {
  overflow-x: auto;
  margin: 1.5rem 0;
}

.comparison-table table {
  width: 100%;
  border-collapse: collapse;
}

.comparison-table th, .comparison-table td {
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.comparison-table th {
  background-color: var(--brand1);
  color: white;
}

.comparison-table tr:nth-child(even) {
  background-color: #f9f9f9;
}

.theory-content {
  line-height: 1.6;
}

.theory-content p {
  margin-bottom: 1rem;
}

.formula-box {
  background: #e8f5e8;
  padding: 1.5rem;
  border-radius: 8px;
  margin: 1.5rem 0;
  border-left: 4px solid #2ecc71;
  text-align: center;
}

.formula {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 1rem 0;
}

.formula-display {
  text-align: center;
  margin: 1rem 0;
}

.katex-equation {
  font-family: 'Times New Roman', serif;
  font-size: 1.3rem;
  color: var(--brand1);
  font-weight: bold;
}

.formula-explanation {
  text-align: left;
  margin-top: 1.5rem;
}

.formula-explanation h4 {
  color: #27ae60;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.variables-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.variable-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  background: #f8fff8;
  border-radius: 6px;
  border: 1px solid #d4edda;
}

.variable-symbol {
  font-weight: bold;
  color: var(--brand1);
  font-size: 1.1rem;
  text-align: center;
}

.variable-desc {
  color: #2c3e50;
  font-size: 0.9rem;
  text-align: center;
  line-height: 1.4;
}

.properties-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.property-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
  border-left: 4px solid var(--brand2);
}

.property-text {
  color: #2c3e50;
  line-height: 1.5;
}

.property-formula {
  font-family: 'Times New Roman', serif;
  font-size: 1.2rem;
  color: var(--brand1);
  font-weight: bold;
  text-align: center;
  padding: 0.5rem;
  background: white;
  border-radius: 4px;
  border: 1px solid #ddd;
}

.example-properties {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
}

.calculation-steps {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin: 1rem 0;
}

.calc-step {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem;
  background: #f8f9fa;
  border-radius: 6px;
  border-left: 3px solid var(--brand1);
  transition: all 0.3s ease;
}

.calc-step:hover {
  background: #e8f4f8;
  transform: translateX(5px);
}

.calc-step.result {
  background: #e8f5e8;
  border-left-color: #2ecc71;
  font-weight: bold;
}

.calc-equation {
  font-family: 'Times New Roman', serif;
  font-size: 1.1rem;
  color: #2c3e50;
  flex: 1;
}

.calc-desc {
  font-size: 0.85rem;
  color: #7f8c8d;
  font-style: italic;
  margin-left: 1rem;
  min-width: 150px;
  text-align: right;
}

@media (max-width: 768px) {
  .calc-step {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .calc-desc {
    text-align: left;
    margin-left: 0;
  }

  .variables-grid {
    grid-template-columns: 1fr;
  }

  .property-item {
    padding: 0.8rem;
  }
}

.properties-box {
  background: #fff4e6;
  padding: 1.5rem;
  border-radius: 8px;
  margin: 1.5rem 0;
  border-left: 4px solid #f39c12;
}

.properties-box ul {
  margin-left: 1.5rem;
}

.properties-box li {
  margin-bottom: 0.5rem;
}

.tlc-definition, .tlc-conditions {
  margin-bottom: 1.5rem;
}

.applications {
  margin: 2rem 0;
}

.application-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0;
}

/* Estilos para la simulación */
.interactive-viz {
  margin: 2rem 0;
}

.explanation-box {
  background: #e8f4f8;
  padding: 1rem;
  border-radius: 6px;
  margin-bottom: 1.5rem;
  border-left: 4px solid #3498db;
}

.viz-controls {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.control-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
  min-width: 200px;
}

.control-group label {
  font-weight: bold;
}

.control-help {
  font-size: 0.8rem;
  color: #7f8c8d;
}

.simulation-results {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.results-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.population-info, .stats-results {
  background: #f5f5f5;
  padding: 1rem;
  border-radius: 6px;
}

.population-info h4, .stats-results h4 {
  margin-top: 0;
  color: #2c3e50;
  border-bottom: 1px solid #ddd;
  padding-bottom: 0.5rem;
}

.stats-box {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.stat {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  background: white;
  border-radius: 4px;
}

.stat-label {
  font-weight: 500;
}

.stat-value {
  font-weight: bold;
  color: var(--brand1);
}

.visualization {
  margin-top: 1.5rem;
}

.viz-container {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1.5rem;
  margin-top: 1rem;
}

.dot-plot {
  position: relative;
  height: 120px;
  background: #f8f9fa;
  border-radius: 6px;
  padding: 1rem;
}

.plot-axis {
  position: relative;
  height: 30px;
  margin-bottom: 10px;
}

.axis-label {
  text-align: center;
  font-size: 0.8rem;
  margin-bottom: 5px;
}

.axis-line {
  height: 2px;
  background: #34495e;
  position: relative;
}

.axis-ticks {
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
}

.axis-tick {
  font-size: 0.7rem;
  color: #7f8c8d;
}

.dots-container {
  position: relative;
  height: 60px;
}

.value-dot {
  position: absolute;
  width: 12px;
  height: 12px;
  background: var(--brand1);
  border-radius: 50%;
  bottom: 0;
  transform: translateX(-50%);
  cursor: pointer;
}

.mean-line {
  position: absolute;
  top: 0;
  height: 100%;
  width: 2px;
  transform: translateX(-50%);
}

.mean-line .line {
  height: 100%;
  background: var(--brand2);
  width: 2px;
}

.mean-line .label {
  position: absolute;
  top: -25px;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  font-size: 0.8rem;
  color: var(--brand2);
  font-weight: bold;
}

.histogram {
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 6px;
}

.histogram-title {
  text-align: center;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  font-weight: 500;
}

.histogram-bars {
  display: flex;
  align-items: flex-end;
  height: 100px;
  gap: 2px;
  margin-bottom: 1rem;
}

.histogram-bar {
  flex: 1;
  background: var(--brand3);
  min-width: 5px;
  position: relative;
  display: flex;
  justify-content: center;
}

.bar-label {
  position: absolute;
  top: -20px;
  font-size: 0.7rem;
  font-weight: bold;
}

.histogram-axis {
  display: flex;
  justify-content: space-between;
  font-size: 0.7rem;
  color: #7f8c8d;
}

.interpretation {
  margin-top: 1.5rem;
  padding: 1.5rem;
  background: #e8f4f8;
  border-radius: 8px;
}

.interpretation-content {
  line-height: 1.6;
}

.interpretation-content ul {
  margin-left: 1.5rem;
}

.interpretation-content li {
  margin-bottom: 0.5rem;
}

.key-insight {
  margin-top: 1rem;
  padding: 1rem;
  background: #fff4e6;
  border-radius: 6px;
  border-left: 4px solid #f39c12;
}

.key-insight h5 {
  margin-top: 0;
  color: #d35400;
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
  background: var(--brand1);
  color: white;
}

.btn-primary:hover {
  background: var(--brand1-dark);
}

.btn-secondary {
  background: #7f8c8d;
  color: white;
}

.btn-secondary:hover {
  background: #6c7a7b;
}

@media (max-width: 768px) {
  .nav-tabs {
    flex-direction: column;
    border-radius: 10px;
  }

  .tab {
    border-radius: 0;
    text-align: center;
  }

  .tab:first-child {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .tab:last-child {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  .viz-controls {
    flex-direction: column;
  }

  .results-grid {
    grid-template-columns: 1fr;
  }

  .viz-container {
    grid-template-columns: 1fr;
  }

  .concept-cards, .application-cards {
    grid-template-columns: 1fr;
  }

  .btn {
    width: 100%;
    text-align: center;
    margin-bottom: 0.5rem;
  }
}
</style>
