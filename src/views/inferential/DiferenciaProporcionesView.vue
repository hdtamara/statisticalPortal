<template>
  <div class="diferencia-proporciones-view">
    <div class="container">
      <div class="hero">
        <h1>Distribución Muestral de la Diferencia de Proporciones 📊</h1>
        <p>Aprende a explorar cómo se comporta la diferencia entre dos proporciones cuando repetimos el proceso de muestreo</p>
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

      <!-- INTRODUCCIÓN -->
      <div v-if="activeTab === 'introduccion'" class="content-section">
        <h2>1. ¿Cuál es la idea principal?</h2>

        <div class="intro-content">
          <p>Hasta ahora hemos comparado cantidades promedio (medias). Pero muchas veces, lo que nos interesa es comparar porcentajes o proporciones de dos grupos diferentes.</p>

          <div class="examples-section">
            <h3>Ejemplos cotidianos:</h3>
            <div class="examples-grid">
              <div class="example-card">
                <h4>📊 Encuestas Políticas</h4>
                <p>¿Qué porcentaje de votantes apoya al candidato A en la ciudad 1 vs. la ciudad 2?</p>
              </div>

              <div class="example-card">
                <h4>🏥 Estudios Médicos</h4>
                <p>¿Qué proporción de pacientes mejora con el tratamiento A en comparación con el tratamiento B?</p>
              </div>

              <div class="example-card">
                <h4>📱 Marketing Digital</h4>
                <p>¿El porcentaje de clics en un anuncio es mayor en la versión roja que en la azul?</p>
              </div>
            </div>
          </div>

          <div class="key-concept">
            <h3>🤔 La Pregunta Central</h3>
            <p>En todos estos casos, tomamos dos muestras, calculamos la proporción en cada una y las restamos. La pregunta central que abordamos hoy es: <strong>Si repitiéramos el experimento muchas veces, ¿cómo se comportaría esa diferencia? ¿Cuánto variaría por puro azar?</strong></p>
          </div>
        </div>
      </div>

      <!-- INGREDIENTES CLAVE -->
      <div v-if="activeTab === 'ingredientes'" class="content-section">
        <h2>2. Los Ingredientes Clave</h2>

        <div class="theory-content">
          <div class="definition-box">
            <h3>Proporciones Poblacionales (p₁, p₂)</h3>
            <p>Son los porcentajes verdaderos y reales en toda la población (por ejemplo, el porcentaje real de todos los hombres que fuman). <strong>Casi nunca las conocemos.</strong></p>
          </div>

          <div class="definition-box">
            <h3>Proporciones Muestrales (p̂₁, p̂₂)</h3>
            <p>Son los porcentajes que calculamos a partir de nuestras muestras. Son nuestras mejores estimaciones de las proporciones poblacionales.</p>
            <div class="formula-display">
              <div class="katex-equation" v-html="renderLatex('\\hat{p} = \\frac{\\text{éxitos en la muestra}}{n}')"></div>
              <div class="formula-note">
                Donde <span class="formula-var">n</span> es el tamaño de la muestra
              </div>
            </div>
          </div>

          <div class="definition-box">
            <h3>Diferencia Observada</h3>
            <p>Es simplemente la resta de las proporciones de nuestras dos muestras:</p>
            <div class="formula-display">
              <div class="katex-equation" v-html="renderLatex('\\text{Diferencia} = \\hat{p}_1 - \\hat{p}_2')"></div>
              <div class="formula-note">
                La diferencia entre las proporciones de los dos grupos
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- DISTRIBUCIÓN Y VARIABILIDAD -->
      <div v-if="activeTab === 'distribucion'" class="content-section">
        <h2>3. La Distribución de las Diferencias y su Variabilidad</h2>

        <div class="theory-content">
          <div class="concept-explanation">
            <h3>El Teorema del Límite Central</h3>
            <p>Gracias al Teorema del Límite Central, sabemos que si las muestras son suficientemente grandes, la distribución de las proporciones muestrales se aproxima a una normal. Lo mismo ocurre con su diferencia.</p>

            <p>Imagina que tomamos miles de pares de muestras y calculamos la diferencia p̂₁ - p̂₂ para cada par. Si hiciéramos un histograma de todas esas diferencias, veríamos una curva normal.</p>
          </div>

          <div class="key-question">
            <h3>¿Qué tan ancha o estrecha es esa curva?</h3>
            <p>La respuesta nos la da el <strong>Error Estándar de la Diferencia</strong>.</p>
          </div>

          <div class="formula-box">
            <h3>Fórmula del Error Estándar (SE)</h3>
            <p>Esta fórmula mide la desviación estándar de la distribución muestral de las diferencias. En otras palabras, nos dice cuánto esperamos que la diferencia entre las proporciones de las muestras varíe por simple azar.</p>

            <div class="formula-display">
              <div class="katex-equation" v-html="renderLatex('SE = \\sqrt{\\hat{p}_1(1-\\hat{p}_1)/n_1 + \\hat{p}_2(1-\\hat{p}_2)/n_2}')"></div>
            </div>

            <div class="formula-explanation">
              <h4>¿Qué significa cada símbolo?</h4>
              <div class="variables-grid">
                <div class="variable-item">
                  <span class="variable-symbol">p̂₁, p̂₂</span>
                  <span class="variable-desc">Proporciones muestrales de cada grupo</span>
                </div>
                <div class="variable-item">
                  <span class="variable-symbol">n₁, n₂</span>
                  <span class="variable-desc">Tamaños de las muestras</span>
                </div>
                <div class="variable-item">
                  <span class="variable-symbol">SE</span>
                  <span class="variable-desc">Error estándar de la diferencia</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- EJEMPLO PRÁCTICO -->
      <div v-if="activeTab === 'ejemplo'" class="content-section">
        <h2>4. Ejemplo Práctico: Campaña de Marketing 📧</h2>

        <div class="example-scenario">
          <h3>Escenario</h3>
          <p>Un equipo de marketing prueba dos asuntos de correo distintos.</p>
        </div>

        <div class="data-summary">
          <div class="data-cards">
            <div class="data-card">
              <h4>Grupo A: Asunto Actual</h4>
              <ul>
                <li><strong>Tamaño muestra:</strong> n₁ = 100 personas</li>
                <li><strong>Éxitos (clics):</strong> 48</li>
                <li><strong>Proporción muestral:</strong> p̂₁ = 48/100 = 0.48 (48%)</li>
              </ul>
            </div>

            <div class="data-card">
              <h4>Grupo B: Asunto Nuevo</h4>
              <ul>
                <li><strong>Tamaño muestra:</strong> n₂ = 120 personas</li>
                <li><strong>Éxitos (clics):</strong> 36</li>
                <li><strong>Proporción muestral:</strong> p̂₂ = 36/120 = 0.30 (30%)</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="solution-steps">
          <h3>Cálculos Paso a Paso</h3>

          <div class="step">
            <h4>Paso 1: Calcular las proporciones muestrales (p̂)</h4>
            <div class="calculation">
              <p><strong>Grupo A:</strong> <span class="calc-equation" v-html="renderLatex('p̂₁ = \\frac{48}{100} = 0.48')"></span> (o 48%)</p>
              <p><strong>Grupo B:</strong> <span class="calc-equation" v-html="renderLatex('p̂₂ = \\frac{36}{120} = 0.30')"></span> (o 30%)</p>
            </div>
          </div>

          <div class="step">
            <h4>Paso 2: Calcular la diferencia observada</h4>
            <div class="calculation">
              <p><strong>Diferencia = <span class="calc-equation" v-html="renderLatex('p̂₁ - p̂₂ = 0.48 - 0.30 = 0.18')"></span></strong> (o una diferencia de 18 puntos porcentuales)</p>
            </div>
          </div>

          <div class="step">
            <h4>Paso 3: Calcular el Error Estándar (SE)</h4>
            <div class="calculation-steps">
              <div class="calc-step">
                <div class="calc-equation" v-html="renderLatex('SE = \\sqrt{\\hat{p}_1(1-\\hat{p}_1)/n_1 + \\hat{p}_2(1-\\hat{p}_2)/n_2}')"></div>
                <span class="calc-desc">Aplicamos la fórmula general</span>
              </div>
              <div class="calc-step">
                <div class="calc-equation" v-html="renderLatex('SE = \\sqrt{0.48(1-0.48)/100 + 0.30(1-0.30)/120}')"></div>
                <span class="calc-desc">Sustituimos los valores</span>
              </div>
              <div class="calc-step">
                <div class="calc-equation" v-html="renderLatex('SE = \\sqrt{0.48 \\times 0.52/100 + 0.30 \\times 0.70/120}')"></div>
                <span class="calc-desc">Calculamos los productos</span>
              </div>
              <div class="calc-step">
                <div class="calc-equation" v-html="renderLatex('SE = \\sqrt{0.002496 + 0.00175}')"></div>
                <span class="calc-desc">Dividimos y sumamos</span>
              </div>
              <div class="calc-step result">
                <div class="calc-equation" v-html="renderLatex('SE = \\sqrt{0.004246} \\approx \\mathbf{0.065}')"></div>
                <span class="calc-desc">Resultado final</span>
              </div>
            </div>
          </div>
        </div>

        <div class="interpretation-box">
          <h3>Interpretación (¡La clave!)</h3>
          <p>Observamos una diferencia del <strong>18%</strong> a favor del Asunto A. El Error Estándar de <strong>0.065</strong> (o 6.5%) nos dice que si repitiéramos este experimento muchas veces, la diferencia que obtengamos variaría típicamente en unos ±6.5% alrededor de la diferencia real solo por el azar del muestreo.</p>
          <p>Esto nos da una idea de qué tan "estable" es nuestra estimación del 18%.</p>
        </div>
      </div>

      <!-- SIMULACIÓN -->
      <div v-if="activeTab === 'simulacion'" class="content-section">
        <h2>Simulación: Distribución de Diferencias de Proporciones</h2>

        <div class="explanation-box">
          <h3>¿Qué demuestra esta simulación?</h3>
          <p>Esta simulación muestra cómo varían las diferencias de proporciones cuando repetimos el proceso de muestreo. <strong>No prueba nada estadísticamente, solo nos ayuda a visualizar la variabilidad esperada</strong> en las diferencias si repitiéramos el experimento muchas veces con los mismos tamaños de muestra.</p>
        </div>

        <div class="simulation-controls">
          <div class="control-group">
            <label for="num-simulaciones">Número de simulaciones:</label>
            <input type="range" id="num-simulaciones" min="100" max="5000" step="100" v-model="numeroSimulaciones">
            <span>{{ numeroSimulaciones }} simulaciones</span>
          </div>

          <button @click="ejecutarSimulacion" class="btn btn-primary">
            Ejecutar Simulación
          </button>
        </div>

        <div class="simulation-results">
          <h3>Resultados de la Simulación</h3>

          <div class="results-summary">
            <div class="summary-item">
              <h4>Diferencia Observada</h4>
              <p class="stat-value">{{ diferenciaObservada.toFixed(3) }}</p>
            </div>
            <div class="summary-item">
              <h4>Media de las Diferencias Simuladas</h4>
              <p class="stat-value">{{ mediaSimulada.toFixed(3) }}</p>
            </div>
            <div class="summary-item">
              <h4>Desviación Estándar de las Diferencias</h4>
              <p class="stat-value">{{ desviacionSimulada.toFixed(3) }}</p>
            </div>
            <div class="summary-item">
              <h4>Error Estándar Calculado</h4>
              <p class="stat-value">{{ errorEstandarCalculado.toFixed(3) }}</p>
            </div>
          </div>

          <div class="chart-container">
            <div ref="simulacionDiv" class="plotly-chart"></div>
          </div>

          <div class="interpretation">
            <h4>Interpretación</h4>
            <p>El histograma muestra cómo se distribuyen las diferencias de proporciones si repitiéramos el muestreo {{ numeroSimulaciones }} veces. La línea roja marca nuestra diferencia observada ({{ diferenciaObservada.toFixed(3) }}).</p>
            <p>La variabilidad que vemos (desviación estándar = {{ desviacionSimulada.toFixed(3) }}) nos da una idea de cuánto esperaríamos que varíen las diferencias por pura casualidad del muestreo.</p>
            <div class="key-insight">
              <strong>Recuerda:</strong> Esta simulación no es una prueba estadística. Solo ilustra el concepto de variabilidad muestral y nos ayuda a contextualizar qué tan grande es nuestra diferencia observada en relación con la variabilidad esperada.
            </div>
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
import { ref } from 'vue';
import katex from 'katex';
import 'katex/dist/katex.min.css';

// Configuración de pestañas
const tabs = [
  { id: 'introduccion', label: 'Introducción' },
  { id: 'ingredientes', label: 'Ingredientes Clave' },
  { id: 'distribucion', label: 'Distribución y Variabilidad' },
  { id: 'ejemplo', label: 'Ejemplo Práctico' },
  { id: 'simulacion', label: 'Simulación' }
];

const activeTab = ref('introduccion');

// Función para ejecutar la simulación
const ejecutarSimulacion = async () => {
  diferenciasSimuladas.value = [];

  // Simulación para diferencias de proporciones
  diferenciaObservada.value = 0.18; // Diferencia observada en el ejemplo
  errorEstandarCalculado.value = 0.065; // Error estándar calculado

  // Datos del ejemplo
  const n1 = 100;
  const p1 = 0.48;
  const n2 = 120;
  const p2 = 0.30;

  for (let i = 0; i < numeroSimulaciones.value; i++) {
    // Generar muestra bootstrap para grupo 1
    const muestra1 = [];
    for (let j = 0; j < n1; j++) {
      muestra1.push(Math.random() < p1 ? 1 : 0);
    }
    const prop1 = muestra1.reduce((a, b) => a + b, 0) / n1;

    // Generar muestra bootstrap para grupo 2
    const muestra2 = [];
    for (let j = 0; j < n2; j++) {
      muestra2.push(Math.random() < p2 ? 1 : 0);
    }
    const prop2 = muestra2.reduce((a, b) => a + b, 0) / n2;

    // Calcular diferencia
    const diferencia = prop1 - prop2;
    diferenciasSimuladas.value.push(diferencia);
  }

  // Calcular estadísticas
  mediaSimulada.value = diferenciasSimuladas.value.reduce((a, b) => a + b, 0) / diferenciasSimuladas.value.length;
  const varianza = diferenciasSimuladas.value.reduce((a, b) => a + Math.pow(b - mediaSimulada.value, 2), 0) / diferenciasSimuladas.value.length;
  desviacionSimulada.value = Math.sqrt(varianza);

  // Actualizar gráfico
  if (simulacionDiv.value) {
    const Plotly = await import('plotly.js-basic-dist');
    Plotly.default.react(simulacionDiv.value, getSimulacionData(), getSimulacionLayout());
  }
};

// Función para obtener datos del histograma de simulación
const getSimulacionData = () => {
  const diferencias = diferenciasSimuladas.value;
  if (diferencias.length === 0) return [];

  // Crear histograma
  const min = Math.min(...diferencias);
  const max = Math.max(...diferencias);
  const bins = 30;
  const binWidth = (max - min) / bins;

  const histogram = [];
  for (let i = 0; i < bins; i++) {
    const binStart = min + i * binWidth;
    const binEnd = binStart + binWidth;
    const count = diferencias.filter(d => d >= binStart && d < binEnd).length;
    histogram.push({
      x: binStart + binWidth / 2,
      y: count
    });
  }

  return [
    {
      x: histogram.map(h => h.x),
      y: histogram.map(h => h.y),
      type: 'bar' as const,
      name: 'Frecuencia',
      marker: { color: 'rgba(52, 152, 219, 0.7)' },
      width: binWidth * 0.9
    },
    {
      x: [diferenciaObservada.value, diferenciaObservada.value],
      y: [0, Math.max(...histogram.map(h => h.y))],
      type: 'scatter' as const,
      mode: 'lines' as const,
      name: 'Diferencia Observada',
      line: { color: 'red', width: 3 }
    }
  ];
};

// Función para obtener layout del gráfico de simulación
const getSimulacionLayout = () => ({
  title: {
    text: `Distribución Simulada de Diferencias de Proporciones`
  },
  xaxis: {
    title: { text: 'Diferencia de Proporciones' }
  },
  yaxis: {
    title: { text: 'Frecuencia' }
  },
  showlegend: true,
  bargap: 0
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

// Variables para la simulación
const simulacionDiv = ref<HTMLElement>();
const numeroSimulaciones = ref(1000);
const diferenciasSimuladas = ref<number[]>([]);
const diferenciaObservada = ref(0.18);
const mediaSimulada = ref(0);
const desviacionSimulada = ref(0);
const errorEstandarCalculado = ref(0.065);
</script>

<style scoped>
.diferencia-proporciones-view {
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
  color: #e74c3c;
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
  font-size: 0.9rem;
}

.tab.active {
  background: #e74c3c;
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
  color: #e74c3c;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid #ecf0f1;
  padding-bottom: 0.5rem;
}

.intro-content {
  line-height: 1.6;
}

.intro-content p {
  margin-bottom: 1rem;
}

.examples-section {
  margin: 2rem 0;
}

.examples-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0;
}

.example-card {
  background: #ecf0f1;
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #3498db;
}

.example-card h4 {
  margin-top: 0;
  color: #2980b9;
  margin-bottom: 0.5rem;
}

.key-concept {
  background: #e8f4f8;
  padding: 1.5rem;
  border-radius: 8px;
  margin: 1.5rem 0;
  border-left: 4px solid #3498db;
}

.key-concept h3 {
  margin-top: 0;
  color: #2980b9;
}

.theory-content {
  line-height: 1.6;
}

.definition-box {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  margin: 1.5rem 0;
  border-left: 4px solid #6c757d;
}

.definition-box h3 {
  margin-top: 0;
  color: #495057;
}

.formula {
  font-size: 1.3rem;
  font-weight: bold;
  margin: 1rem 0;
  text-align: center;
  padding: 0.5rem;
  background: white;
  border-radius: 4px;
  border: 1px solid #ddd;
}

.concept-explanation {
  background: #fff4e6;
  padding: 1.5rem;
  border-radius: 8px;
  margin: 1.5rem 0;
  border-left: 4px solid #f39c12;
}

.concept-explanation h3 {
  margin-top: 0;
  color: #d35400;
}

.key-question {
  background: #e8f4f8;
  padding: 1.5rem;
  border-radius: 8px;
  margin: 1.5rem 0;
  border-left: 4px solid #3498db;
}

.key-question h3 {
  margin-top: 0;
  color: #2980b9;
}

.formula-box {
  background: #e8f5e8;
  padding: 1.5rem;
  border-radius: 8px;
  margin: 1.5rem 0;
  border-left: 4px solid #2ecc71;
}

.formula-box h3 {
  margin-top: 0;
  color: #27ae60;
}

.formula-display {
  text-align: center;
  margin: 1.5rem 0;
  padding: 1.5rem;
  background: white;
  border-radius: 8px;
  border: 2px solid #e8f5e8;
}

.katex-equation {
  font-size: 1.4rem;
  color: #2c3e50;
}

.complex-equation {
  display: inline-block;
  text-align: left;
  font-family: 'Times New Roman', serif;
  line-height: 1.2;
}

.equation-main {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
  font-size: 1.6rem;
}

.sqrt-symbol {
  font-size: 2rem;
  margin: 0 0.2rem;
  position: relative;
  top: 0.2rem;
}

.bracket-large {
  font-size: 2.5rem;
  font-weight: bold;
  color: #2ecc71;
  position: relative;
  top: -0.3rem;
}

.equation-terms {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.term {
  display: flex;
  align-items: center;
  gap: 0.1rem;
  font-size: 1.4rem;
}

.paren {
  color: #3498db;
  font-weight: bold;
}

.fraction {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  margin-left: 0.2rem;
  position: relative;
}

.fraction .numerator {
  border-bottom: 1px solid #2ecc71;
  padding-bottom: 1px;
  font-size: 0.8em;
  line-height: 1;
}

.fraction .denominator {
  padding-top: 1px;
  font-size: 0.8em;
  line-height: 1;
}

.plus {
  font-size: 1.4rem;
  color: #e74c3c;
  font-weight: bold;
  margin: 0 0.5rem;
}

.bracket-close {
  display: flex;
  justify-content: center;
  margin-top: 0.5rem;
}

@media (max-width: 768px) {
  .equation-terms {
    flex-direction: column;
    gap: 0.5rem;
  }

  .term {
    font-size: 1.2rem;
  }

  .equation-main {
    font-size: 1.4rem;
  }

  .bracket-large {
    font-size: 2rem;
  }
}

.formula-large {
  font-size: 1.8rem;
  font-weight: bold;
  color: #2ecc71;
  font-family: 'Times New Roman', serif;
  line-height: 1.4;
}

.formula-var {
  color: #e74c3c;
  font-weight: bold;
}

.formula-note {
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: #7f8c8d;
  font-style: italic;
}

.formula-fraction {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  vertical-align: middle;
  margin: 0 0.2rem;
}

.numerator {
  border-bottom: 2px solid #2ecc71;
  padding-bottom: 2px;
  margin-bottom: 2px;
  font-size: 0.9em;
}

.denominator {
  padding-top: 2px;
  font-size: 0.9em;
}

.formula-explanation {
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
  color: #e74c3c;
  font-size: 1.1rem;
  text-align: center;
}

.variable-desc {
  color: #2c3e50;
  font-size: 0.9rem;
  text-align: center;
  line-height: 1.4;
}

.example-scenario {
  background: #e8f4f8;
  padding: 1.5rem;
  border-radius: 8px;
  margin: 1.5rem 0;
  border-left: 4px solid #3498db;
}

.example-scenario h3 {
  margin-top: 0;
  color: #2980b9;
}

.data-summary {
  margin: 1.5rem 0;
}

.data-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.data-card {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #28a745;
}

.data-card h4 {
  margin-top: 0;
  color: #155724;
  margin-bottom: 1rem;
}

.data-card ul {
  margin-left: 1.5rem;
}

.data-card li {
  margin-bottom: 0.5rem;
}

.solution-steps {
  margin: 1.5rem 0;
}

.step {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  margin: 1rem 0;
  border-left: 4px solid #6c757d;
}

.step h4 {
  margin-top: 0;
  color: #495057;
}

.calculation {
  background: white;
  padding: 1rem;
  border-radius: 6px;
  margin: 1rem 0;
  font-family: 'Courier New', monospace;
}

.calculation p {
  margin: 0.5rem 0;
}

.calculation-steps {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.calc-step {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem;
  background: #f8f9fa;
  border-radius: 6px;
  border-left: 3px solid #3498db;
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
}

.interpretation-box {
  background: #e8f5e8;
  padding: 1.5rem;
  border-radius: 8px;
  margin: 1.5rem 0;
  border-left: 4px solid #2ecc71;
}

.interpretation-box h3 {
  margin-top: 0;
  color: #27ae60;
}

.explanation-box {
  background: #e8f4f8;
  padding: 1.5rem;
  border-radius: 8px;
  margin: 1.5rem 0;
  border-left: 4px solid #3498db;
}

.explanation-box h3 {
  margin-top: 0;
  color: #2980b9;
}

.simulation-controls {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  padding: 1.5rem;
  background: #ecf0f1;
  border-radius: 8px;
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

.control-group input {
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ddd;
}

.simulation-results {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.results-summary {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
}

.summary-item {
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 6px;
  text-align: center;
}

.summary-item h4 {
  margin: 0 0 0.5rem 0;
  color: #2c3e50;
  font-size: 0.9rem;
}

.stat-value {
  font-size: 1.5rem;
  font-weight: bold;
  color: #e74c3c;
  margin: 0;
}

.chart-container {
  margin: 2rem 0;
  min-height: 400px;
}

.interpretation {
  margin-top: 1.5rem;
  padding: 1.5rem;
  background: #e8f4f8;
  border-radius: 8px;
}

.interpretation h4 {
  margin: 0 0 1rem 0;
  color: #2980b9;
}

.key-insight {
  margin-top: 1rem;
  padding: 1rem;
  background: #fff4e6;
  border-radius: 6px;
  border-left: 4px solid #f39c12;
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

.btn-secondary {
  background: #7f8c8d;
  color: white;
}

.btn-secondary:hover {
  background: #6c7a7b;
}

.btn-primary {
  background: #e74c3c;
  color: white;
}

.btn-primary:hover {
  background: #c0392b;
}

@media (max-width: 768px) {
  .nav-tabs {
    flex-direction: column;
    border-radius: 10px;
  }

  .tab {
    border-radius: 0;
    text-align: center;
    font-size: 0.8rem;
    padding: 0.6rem 1rem;
  }

  .tab:first-child {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .tab:last-child {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  .examples-grid, .data-cards {
    grid-template-columns: 1fr;
  }

  .results-summary {
    grid-template-columns: 1fr;
  }

  .btn {
    width: 100%;
    text-align: center;
    margin-bottom: 0.5rem;
  }
}
</style>
