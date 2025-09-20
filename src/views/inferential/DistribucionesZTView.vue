<template>
  <div class="distribuciones-zt-view">
    <div class="container">
      <div class="hero">
        <h1>La Distribución Muestral de la Media: Calculando Probabilidades</h1>
        <p>
          Cuando tomamos una muestra de una población y calculamos su media (x̄), raramente será idéntica a la media de la población entera (μ). La pregunta que nos hacemos es: ¿Qué tan probable es que nuestra muestra tenga la media que obtuvimos?
        </p>
        <p>
          Para responder a esto, estandarizamos la media muestral para ver dónde cae dentro de una "distribución de referencia". Las dos herramientas principales para esto son la distribución Z y la distribución t.
        </p>
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

      <!-- DISTRIBUCIÓN Z -->
      <div v-if="activeTab === 'z'" class="content-section">
        <h2>Distribución Z (Cuando conocemos la desviación estándar de la población, σ)</h2>
        <p>Usamos la distribución Z cuando tenemos la suerte de conocer la desviación estándar (σ) de toda la población. Esto es el "caso ideal" y nos permite usar la distribución normal estándar.</p>

        <div class="theory-content">
          <div class="definition-box">
            <h3>¿Cómo se calcula el puntaje Z para una media muestral?</h3>
            <p>Para convertir tu media muestral (x̄) a un puntaje Z, usas la siguiente fórmula:</p>
          </div>

          <div class="formula-section">
            <div class="formula-container">
              <div class="formula">
                Z = (x̄ - μ) / (σ / √n)
              </div>
              <div class="formula-explanation">
                <p>Donde:</p>
                <ul>
                  <li><strong>x̄</strong> es la media de tu muestra.</li>
                  <li><strong>μ</strong> es la media de la población.</li>
                  <li><strong>σ</strong> es la desviación estándar de la población (conocida).</li>
                  <li><strong>n</strong> es el tamaño de la muestra.</li>
                </ul>
                <p>El denominador, σ / √n, se conoce como el error estándar.</p>
              </div>
            </div>
          </div>

          <div class="probability-calculation">
            <h3>¿Cómo se calculan las probabilidades con Z?</h3>
            <p>Una vez que tienes el puntaje Z, buscas la probabilidad correspondiente en una tabla de distribución normal estándar o usas una calculadora estadística.</p>

            <div class="probability-types">
              <div class="probability-type">
                <h4>Probabilidad de que la media sea menor que un valor (P(x̄ < a)):</h4>
                <ol>
                  <li>Calculas el puntaje Z para el valor 'a'.</li>
                  <li>Buscas ese Z en la tabla. El valor que encuentras es directamente la probabilidad.</li>
                </ol>
              </div>

              <div class="probability-type">
                <h4>Probabilidad de que la media sea mayor que un valor (P(x̄ > a)):</h4>
                <ol>
                  <li>Calculas el puntaje Z para el valor 'a'.</li>
                  <li>Buscas el Z en la tabla. Como la tabla da el área a la izquierda, calculas: 1 - (valor de la tabla).</li>
                </ol>
              </div>

              <div class="probability-type">
                <h4>Probabilidad de que la media esté entre dos valores (P(a < x̄ < b)):</h4>
                <ol>
                  <li>Calculas el puntaje Z para el valor 'b' (Zb) y para el valor 'a' (Za).</li>
                  <li>Buscas ambas probabilidades en la tabla.</li>
                  <li>Restas la probabilidad menor de la mayor: P(Zb) - P(Za).</li>
                </ol>
              </div>
            </div>
          </div>

          <div class="visualization-section">
            <h3>Visualización de la Distribución Z</h3>
            <div class="image-container">
              <img src="@/assets/distribucion-z.webp" alt="Distribución Normal Estándar Z" class="distribution-image">
              <div class="image-caption">
                La distribución Z o normal estándar tiene media 0 y desviación estándar 1.
              </div>
            </div>
          </div>

          <div class="interactive-section">
            <h3>Simulador Interactivo: Distribución Z</h3>

            <div class="simulator-controls">
              <div class="control-group">
                <label for="z-mean">Media Poblacional (μ):</label>
                <input type="number" id="z-mean" v-model="zMean" step="0.1">
              </div>

              <div class="control-group">
                <label for="z-sigma">Desviación Estándar Poblacional (σ):</label>
                <input type="number" id="z-sigma" v-model="zSigma" step="0.1" min="0.1">
              </div>

              <div class="control-group">
                <label for="z-sample-mean">Media Muestral (x̄):</label>
                <input type="number" id="z-sample-mean" v-model="zSampleMean" step="0.1">
              </div>

              <div class="control-group">
                <label for="z-sample-size">Tamaño de Muestra (n):</label>
                <input type="number" id="z-sample-size" v-model="zSampleSize" min="1">
              </div>
            </div>

            <div class="simulation-results">
              <div class="result-card">
                <h4>Resultados del Cálculo Z:</h4>
                <div class="result-item">
                  <span class="result-label">Estadístico Z:</span>
                  <span class="result-value">{{ zScore.toFixed(4) }}</span>
                </div>
                <div class="result-item">
                  <span class="result-label">Probabilidad (Z ≤ valor):</span>
                  <span class="result-value">{{ (zProbability * 100).toFixed(2) }}%</span>
                </div>
                <div class="result-item">
                  <span class="result-label">Interpretación:</span>
                  <span class="result-value">{{ zInterpretation }}</span>
                </div>
              </div>
            </div>

            <div class="distribution-plot">
              <h4>Distribución Z con el Valor Calculado</h4>
              <div class="plot-container">
                <div class="z-plot">
                  <div class="plot-area">
                    <div class="mean-line">μ = 0</div>
                    <div
                      class="z-value-marker"
                      :style="{ left: calculateZPosition(zScore) + '%' }"
                    >
                      <div class="marker-line"></div>
                      <div class="marker-label">Z = {{ zScore.toFixed(2) }}</div>
                    </div>
                  </div>
                  <div class="plot-labels">
                    <span>-3</span>
                    <span>-2</span>
                    <span>-1</span>
                    <span>0</span>
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="examples-section">
          <h3>Ejemplo Práctico (usando Z)</h3>
          <p>Un fabricante de cereales sabe que sus cajas tienen un peso medio de μ=500 gramos con una desviación estándar poblacional de σ=10 gramos. Si tomamos una muestra aleatoria de n=25 cajas, ¿cuál es la probabilidad de que el peso medio de la muestra sea inferior a 496 gramos?</p>

          <div class="example-details">
            <h4>Identificar los datos:</h4>
            <ul>
              <li>μ = 500 g</li>
              <li>σ = 10 g</li>
              <li>n = 25</li>
              <li>x̄ = 496 g</li>
            </ul>

            <h4>Calcular el puntaje Z:</h4>
            <p>Z = (496 - 500) / (10 / √25) = (-4) / (10 / 5) = (-4) / 2 = -2.00</p>

            <h4>Buscar la probabilidad en la tabla Z:</h4>
            <p>Buscamos Z = -2.00 en la tabla de distribución normal. El valor correspondiente es 0.0228.</p>

            <h4>Respuesta:</h4>
            <p>La probabilidad de que una muestra de 25 cajas tenga un peso medio inferior a 496 gramos es de 2.28%.</p>
          </div>
        </div>
      </div>

      <!-- DISTRIBUCIÓN T -->
      <div v-if="activeTab === 't'" class="content-section">
        <h2>Distribución t (Cuando NO conocemos la desviación estándar de la población, σ)</h2>
        <p>Este es el escenario más realista. No conocemos σ, así que la estimamos usando la desviación estándar de nuestra propia muestra (s). Esto introduce más incertidumbre, por lo que usamos la distribución t, que es como la normal pero con "colas más pesadas".</p>

        <div class="theory-content">
          <div class="definition-box">
            <h3>Concepto Clave: Grados de Libertad</h3>
            <p>La forma exacta de la distribución t depende del tamaño de la muestra a través de los grados de libertad (gl). Para problemas de una media muestral, el cálculo es simple:</p>
            <p><strong>gl = n - 1</strong></p>
            <p>A mayor tamaño de muestra (y más grados de libertad), la distribución t se parece más a la distribución Z.</p>
          </div>

          <div class="formula-section">
            <h3>¿Cómo se calcula el estadístico t para una media muestral?</h3>
            <p>La fórmula es muy similar a la de Z, pero reemplazamos σ por s.</p>
            <div class="formula-container">
              <div class="formula">
                t = (x̄ - μ) / (s / √n)
              </div>
              <div class="formula-explanation">
                <p>Donde:</p>
                <ul>
                  <li><strong>x̄</strong> es la media de tu muestra.</li>
                  <li><strong>μ</strong> es la media de la población (hipotética).</li>
                  <li><strong>s</strong> es la desviación estándar de la muestra (calculada a partir de tus datos).</li>
                  <li><strong>n</strong> es el tamaño de la muestra.</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="probability-calculation">
            <h3>¿Cómo se calculan las probabilidades con t?</h3>
            <p>El proceso es similar, pero en lugar de una tabla Z, usas una tabla de distribución t o una calculadora que te pida el valor de t y los grados de libertad.</p>

            <div class="probability-types">
              <div class="probability-type">
                <h4>Probabilidad de que la media sea menor que un valor (P(x̄ < a)):</h4>
                <ol>
                  <li>Calculas los grados de libertad (gl = n - 1).</li>
                  <li>Calculas el estadístico t para el valor 'a'.</li>
                  <li>Usas una calculadora o software estadístico para encontrar P(t < t_calculado) con los gl correspondientes.</li>
                </ol>
              </div>

              <div class="probability-type">
                <h4>Probabilidad de que la media sea mayor que un valor (P(x̄ > a)):</h4>
                <ol>
                  <li>Calculas los gl y el estadístico t.</li>
                  <li>Encuentras P(t > t_calculado). Esto a menudo se calcula como 1 - P(t < t_calculado).</li>
                </ol>
              </div>

              <div class="probability-type">
                <h4>Probabilidad de que la media esté entre dos valores (P(a < x̄ < b)):</h4>
                <ol>
                  <li>Calculas los gl y los estadísticos t para 'a' y 'b' (ta y tb).</li>
                  <li>Calculas la probabilidad acumulada para cada uno y restas: P(t < tb) - P(t < ta).</li>
                </ol>
              </div>
            </div>
          </div>

          <div class="visualization-section">
            <h3>Visualización de la Distribución t</h3>
            <div class="image-container">
              <img src="@/assets/distribucion-t.webp" alt="Distribución t de Student" class="distribution-image">
              <div class="image-caption">
                La distribución t tiene colas más pesadas que la normal, especialmente con pocos grados de libertad.
              </div>
            </div>
          </div>

          <div class="interactive-section">
            <h3>Calculadora de Distribución t</h3>
            <p>Calcula el estadístico t y el p-valor correspondiente usando la distribución t de Student.</p>

            <div class="t-calculator">
              <div class="calculator-controls">
                <div class="control-group">
                  <label for="t-mean">Media Poblacional (μ):</label>
                  <input type="number" id="t-mean" v-model="tMean" step="0.1">
                </div>

                <div class="control-group">
                  <label for="t-sample-mean">Media Muestral (x̄):</label>
                  <input type="number" id="t-sample-mean" v-model="tSampleMean" step="0.1">
                </div>

                <div class="control-group">
                  <label for="t-sample-std">Desviación Muestral (s):</label>
                  <input type="number" id="t-sample-std" v-model="tSampleStd" step="0.1" min="0.1">
                </div>

                <div class="control-group">
                  <label for="t-sample-size">Tamaño de Muestra (n):</label>
                  <input type="number" id="t-sample-size" v-model="tSampleSize" min="2">
                </div>
              </div>

              <div class="calculation-results">
                <div class="result-item">
                  <span class="result-label">Estadístico t:</span>
                  <span class="result-value">{{ tScore.toFixed(4) }}</span>
                </div>
                <div class="result-item">
                  <span class="result-label">Grados de Libertad (gl):</span>
                  <span class="result-value">{{ tSampleSize - 1 }}</span>
                </div>
                <div class="result-item">
                  <span class="result-label">p-valor (bilateral):</span>
                  <span class="result-value">{{ tPValue.toFixed(4) }}</span>
                </div>
                <div class="result-item">
                  <span class="result-label">Interpretación:</span>
                  <span class="result-value">{{ tInterpretation }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="examples-section">
          <h3>Ejemplo Práctico (usando t)</h3>
          <p>Un investigador quiere saber el tiempo promedio que tardan los estudiantes en completar un nuevo examen. Toma una muestra de n=16 estudiantes y encuentra que el tiempo medio fue de x̄=85 minutos, con una desviación estándar muestral de s=12 minutos. Si la norma para exámenes similares es de μ=80 minutos, ¿cuál es la probabilidad de que una muestra de 16 estudiantes tarde 85 minutos o más?</p>

          <div class="example-details">
            <h4>Identificar los datos:</h4>
            <ul>
              <li>μ = 80 min</li>
              <li>x̄ = 85 min</li>
              <li>s = 12 min</li>
              <li>n = 16</li>
            </ul>

            <h4>Calcular los grados de libertad:</h4>
            <p>gl = 16 - 1 = 15</p>

            <h4>Calcular el estadístico t:</h4>
            <p>t = (85 - 80) / (12 / √16) = 5 / (12 / 4) = 5 / 3 ≈ 1.667</p>

            <h4>Buscar la probabilidad (usando una calculadora o software):</h4>
            <p>Necesitamos encontrar P(t > 1.667) con 15 grados de libertad. Una calculadora estadística nos daría un valor de aproximadamente 0.058 (5.8%).</p>

            <h4>Respuesta:</h4>
            <p>La probabilidad de que una muestra de 16 estudiantes tenga un tiempo medio de 85 minutos o más es de aproximadamente 5.8%.</p>
          </div>
        </div>
      </div>

      <!-- COMPARACIÓN -->
      <div v-if="activeTab === 'comparacion'" class="content-section">
        <h2>Decisiones Clave: ¿Cuándo uso Z o t? 🤔</h2>

        <div class="comparison-content">
          <div class="decision-guide">
            <h3>El Diagrama de Decisión Definitivo</h3>
            <div class="decision-chart">
              <div class="decision-flow">
                <div class="decision-start">
                  <div class="decision-box start">
                    <h4>Inicio</h4>
                    <p>Tengo datos muestrales y quiero hacer inferencias sobre la población</p>
                  </div>
                  <div class="arrow-down">↓</div>
                </div>

                <div class="decision-step">
                  <div class="step-question">
                    <strong>Pregunta Principal:</strong><br>
                    ¿Conozco la desviación estándar de TODA la población (σ)?
                  </div>
                  <div class="step-answers">
                    <div class="answer yes-answer">
                      <div class="answer-connector">
                        <span class="answer-label">SÍ →</span>
                      </div>
                      <div class="answer-box">
                        <h5>Distribución Z</h5>
                        <p>Caso ideal pero poco común</p>
                        <ul>
                          <li>Procesos de calidad establecidos</li>
                          <li>Estudios con σ conocida</li>
                          <li>Investigaciones controladas</li>
                        </ul>
                      </div>
                    </div>
                    <div class="answer no-answer">
                      <div class="answer-connector">
                        <span class="answer-label">NO →</span>
                      </div>
                      <div class="answer-box">
                        <h5>Distribución t</h5>
                        <p>Caso realista y más común</p>
                        <ul>
                          <li>Investigación científica</li>
                          <li>Estudios sociales</li>
                          <li>Muestras limitadas</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="decision-additional">
                  <div class="additional-note">
                    <h4>Consideración Adicional</h4>
                    <p>Si n ≥ 30, los resultados de Z y t son prácticamente iguales</p>
                    <div class="sample-size-indicator">
                      <div class="size-small">n &lt; 30<br><span class="recommendation">Usa t</span></div>
                      <div class="size-large">n ≥ 30<br><span class="recommendation">Z o t (similar)</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="note-box">
              <h4>Nota Importante sobre Muestras Grandes</h4>
              <p>Habrás oído que "si n ≥ 30, se puede usar Z". ¿Por qué? Porque con una muestra grande, la desviación estándar de la muestra (s) es una estimación <strong>muy buena</strong> de la desviación estándar de la población (σ). En esos casos, la distribución t es casi idéntica a la Z.</p>
              <p><strong>Conclusión:</strong> Técnicamente, si no conoces σ, <strong>siempre deberías usar t</strong>. Pero en la práctica, con muestras muy grandes, los resultados de Z y t serán prácticamente iguales.</p>
            </div>
          </div>

          <div class="comparison-table">
            <h3>Tabla Comparativa Rápida</h3>
            <table>
              <thead>
                <tr>
                  <th>Aspecto</th>
                  <th>Distribución Z (Ideal)</th>
                  <th>Distribución t (Realista)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Condición Clave</strong></td>
                  <td><strong>σ es conocida</strong></td>
                  <td><strong>σ es desconocida</strong> (se usa 's')</td>
                </tr>
                <tr>
                  <td><strong>Incertidumbre</strong></td>
                  <td>Menor (basada en un parámetro real)</td>
                  <td>Mayor (basada en una estimación)</td>
                </tr>
                <tr>
                  <td><strong>Forma</strong></td>
                  <td>Normal estándar (una sola curva)</td>
                  <td>Similar a la normal, pero con colas más pesadas</td>
                </tr>
                <tr>
                  <td><strong>Dependencia</strong></td>
                  <td>No depende del tamaño de la muestra</td>
                  <td>Su forma depende de los grados de libertad (n-1)</td>
                </tr>
                <tr>
                  <td><strong>Uso típico</strong></td>
                  <td>Control de calidad con procesos establecidos</td>
                  <td>Investigación científica con muestras limitadas</td>
                </tr>
              </tbody>
            </table>
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
import { ref, computed } from 'vue';
// @ts-expect-error jstat doesn't have TypeScript definitions
import * as jStat from 'jstat';

const tabs = [
  { id: 'z', label: 'Distribución Z' },
  { id: 't', label: 'Distribución t' },
  { id: 'comparacion', label: 'Comparación' }
];

const activeTab = ref('z');

// Variables para distribución Z
const zMean = ref(500);
const zSigma = ref(10);
const zSampleMean = ref(496);
const zSampleSize = ref(25);

// Variables para distribución t
const tMean = ref(80);
const tSampleMean = ref(85);
const tSampleStd = ref(12);
const tSampleSize = ref(16);

// Calculadora Z
const zScore = computed(() => {
  return (zSampleMean.value - zMean.value) / (zSigma.value / Math.sqrt(zSampleSize.value));
});

const zProbability = computed(() => {
  // Simplificación para propósitos educativos
  const z = Math.abs(zScore.value);
  if (z >= 2.5) return 0.0062;
  if (z >= 2.0) return 0.0228;
  if (z >= 1.5) return 0.0668;
  if (z >= 1.0) return 0.1587;
  if (z >= 0.5) return 0.3085;
  return 0.5;
});

const zInterpretation = computed(() => {
  const absZ = Math.abs(zScore.value);
  if (absZ >= 2.0) return 'Resultado muy inusual (p < 0.05)';
  if (absZ >= 1.5) return 'Resultado poco común';
  return 'Variación dentro de lo esperado';
});

const calculateZPosition = (zValue: number) => {
  // Convertir valor Z (-3 a 3) a porcentaje (0% a 100%)
  return ((zValue + 3) / 6) * 100;
};

// Calculadora t
const tScore = computed(() => {
  return (tSampleMean.value - tMean.value) / (tSampleStd.value / Math.sqrt(tSampleSize.value));
});

const tPValue =  computed(() => {
  const t = tScore.value; // Sin valor absoluto
  const df = tSampleSize.value - 1;
  return jStat.studentt.cdf(t, df); // P(T ≤ t)
});

const tInterpretation = computed(() => {
  const p = tPValue.value;
  if (p < 0.001) return 'Evidencia muy fuerte (p < 0.001)';
  if (p < 0.01) return 'Evidencia fuerte (p < 0.01)';
  if (p < 0.05) return 'Evidencia moderada (p < 0.05)';
  if (p < 0.10) return 'Evidencia débil (p < 0.10)';
  return 'Sin evidencia significativa (p ≥ 0.10)';
});

// No initialization needed
</script>

<style scoped>
/* Estilos generales */
.distribuciones-zt-view {
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
  margin-bottom: 1rem;
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
  background: #3498db;
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
  color: #2c3e50;
  margin-bottom: 1rem;
}

.content-section p {
  line-height: 1.6;
  margin-bottom: 1rem;
}

/* Estilos para teoría */
.theory-content {
  margin-bottom: 2rem;
}

.definition-box {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #3498db;
  margin-bottom: 2rem;
}

.definition-box h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

/* Estilos para fórmulas */
.formula-section {
  margin: 2rem 0;
}

.formula-container {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.formula {
  font-size: 1.5rem;
  font-weight: bold;
  color: #e74c3c;
  text-align: center;
  margin-bottom: 1rem;
  font-family: 'Courier New', monospace;
}

.formula-explanation ul {
  margin: 1rem 0;
  padding-left: 1.5rem;
}

.formula-explanation li {
  margin-bottom: 0.5rem;
  line-height: 1.5;
}

/* Estilos para cálculo de probabilidades */
.probability-calculation {
  margin: 2rem 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e8f4f8 100%);
  padding: 2rem;
  border-radius: 12px;
  border-left: 4px solid #3498db;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.probability-calculation h3 {
  color: #2c3e50;
  margin-bottom: 1.5rem;
  font-size: 1.3rem;
  text-align: center;
  position: relative;
}

.probability-calculation h3::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #3498db, #2980b9);
  border-radius: 2px;
}

.probability-calculation > p {
  text-align: center;
  font-size: 1.1rem;
  color: #7f8c8d;
  margin-bottom: 2rem;
  font-style: italic;
}

.probability-types {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.probability-type {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  border: 2px solid transparent;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  position: relative;
  overflow: hidden;
}

.probability-type::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: linear-gradient(180deg, #3498db, #2980b9);
}

.probability-type:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(52, 152, 219, 0.15);
  border-color: #3498db;
}

.probability-type h4 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.probability-type h4::before {
  content: '📊';
  font-size: 1.2rem;
}

.probability-type ol {
  margin: 0;
  padding-left: 1.5rem;
}

.probability-type li {
  margin-bottom: 0.8rem;
  line-height: 1.6;
  color: #555;
  position: relative;
}

.probability-type li::marker {
  color: #3498db;
  font-weight: bold;
}

.probability-type li:last-child {
  margin-bottom: 0;
}

/* Responsive para probabilidad types */
@media (max-width: 768px) {
  .probability-types {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .probability-calculation {
    padding: 1.5rem;
  }

  .probability-type {
    padding: 1.2rem;
  }
}

/* Estilos para visualización de imágenes */
.visualization-section {
  margin: 2rem 0;
}

.image-container {
  text-align: center;
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
}

.distribution-image {
  max-width: 100%;
  height: auto;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.image-caption {
  margin-top: 1rem;
  font-style: italic;
  color: #7f8c8d;
}

/* Estilos para gráficos interactivos */
.plot-container {
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
  margin: 1rem 0;
}

.plot-area {
  height: 150px;
  background: white;
  border-radius: 6px;
  position: relative;
  border: 1px solid #ddd;
}

.z-plot .plot-area {
  background: linear-gradient(90deg, #e8f4f8 0%, #3498db 50%, #e8f4f8 100%);
}

.t-plot .plot-area {
  background: linear-gradient(90deg, #fff4e6 0%, #f39c12 50%, #fff4e6 100%);
}

.curve-z, .curve-t {
  height: 100%;
  background: radial-gradient(ellipse at center, rgba(52, 152, 219, 0.3) 0%, transparent 70%);
}

.curve-t {
  background: radial-gradient(ellipse at center, rgba(243, 156, 18, 0.3) 0%, transparent 70%);
}

.mean-line {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 100%;
  width: 2px;
  background: #e74c3c;
}

.mean-line::after {
  content: 'μ = 0';
  position: absolute;
  top: -25px;
  left: 50%;
  transform: translateX(-50%);
  color: #e74c3c;
  font-weight: bold;
}

.z-value-marker {
  position: absolute;
  top: 0;
  height: 100%;
  width: 2px;
  background: #2ecc71;
  transform: translateX(-50%);
}

.marker-line {
  height: 100%;
  width: 2px;
}

.marker-label {
  position: absolute;
  top: -25px;
  left: 50%;
  transform: translateX(-50%);
  color: #2c3e50;
  font-weight: bold;
  white-space: nowrap;
}

.plot-labels {
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  color: #7f8c8d;
  font-size: 0.8rem;
  margin-top: 0.5rem;
}

/* Estilos para comparación - removidos ya que no se usan */

/* Estilos para tabla comparativa */
.comparison-table table {
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.comparison-table th,
.comparison-table td {
  border: 1px solid #ddd;
  padding: 12px 16px;
  text-align: left;
  vertical-align: top;
}

.comparison-table th {
  background: linear-gradient(135deg, #3498db, #2980b9);
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 0.9rem;
  letter-spacing: 0.5px;
}

.comparison-table td {
  background: #f8f9fa;
  color: #2c3e50;
  line-height: 1.5;
}

.comparison-table tr:nth-child(even) td {
  background: #ffffff;
}

.comparison-table tr:hover td {
  background: #e8f4f8;
  transition: background-color 0.3s ease;
}

.comparison-table td strong {
  color: #3498db;
  font-weight: 600;
}

/* Estilos para ejemplos */
.examples-section {
  margin-top: 2rem;
}

.examples-section h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.example-details {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #3498db;
}

.example-details h4 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.example-details ul {
  margin: 1rem 0;
  padding-left: 1.5rem;
}

.example-details li {
  margin-bottom: 0.5rem;
  line-height: 1.5;
}

.example-details p {
  margin-bottom: 1rem;
  line-height: 1.6;
}

/* Estilos para controles */
.simulator-controls, .calculator-controls {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.control-group {
  display: flex;
  flex-direction: column;
}

.control-group label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #2c3e50;
}

.control-group input {
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

/* Estilos para resultados */
.simulation-results, .calculation-results {
  margin: 1rem 0;
}

.result-card {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid #ddd;
}

.result-card h4 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.result-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
}

.result-item:last-child {
  border-bottom: none;
}

.result-label {
  font-weight: bold;
  color: #7f8c8d;
}

.result-value {
  font-weight: bold;
  color: #3498db;
}

/* Estilos para diagrama de decisión */
.decision-chart {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 2rem 0;
}

.decision-flow {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.decision-start {
  text-align: center;
}

.decision-box {
  background: #3498db;
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  min-width: 200px;
}

.decision-box.start {
  background: #2ecc71;
}

.decision-box h4 {
  margin: 0 0 0.5rem 0;
  font-size: 1.1rem;
}

.decision-box p {
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.4;
}

.arrow-down {
  font-size: 2rem;
  color: #7f8c8d;
  margin: 0.5rem 0;
}

.decision-step {
  text-align: center;
  margin: 1rem 0;
}

.step-question {
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
  border: 2px solid #3498db;
  margin-bottom: 1rem;
  font-size: 1rem;
  line-height: 1.5;
}

.step-answers {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 1rem 0;
}

.yes-answer, .no-answer {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.answer-connector {
  background: #3498db;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: bold;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.no-answer .answer-connector {
  background: #f39c12;
}

.answer-box {
  background: white;
  border: 2px solid #3498db;
  border-radius: 8px;
  padding: 1rem;
  min-width: 200px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.no-answer .answer-box {
  border-color: #f39c12;
}

.answer-box h5 {
  margin: 0 0 0.5rem 0;
  color: #2c3e50;
  font-size: 1rem;
}

.answer-box p {
  margin: 0 0 0.5rem 0;
  font-size: 0.9rem;
  color: #7f8c8d;
}

.answer-box ul {
  margin: 0;
  padding-left: 1rem;
  text-align: left;
}

.answer-box li {
  font-size: 0.8rem;
  margin-bottom: 0.3rem;
  color: #2c3e50;
}

.decision-additional {
  margin-top: 2rem;
  text-align: center;
}

.additional-note {
  background: #fff3cd;
  border: 1px solid #ffeaa7;
  border-radius: 8px;
  padding: 1rem;
  display: inline-block;
}

.additional-note h4 {
  margin: 0 0 0.5rem 0;
  color: #856404;
  font-size: 1rem;
}

.additional-note p {
  margin: 0 0 1rem 0;
  color: #856404;
  font-size: 0.9rem;
}

.sample-size-indicator {
  display: flex;
  justify-content: center;
  gap: 2rem;
}

.size-small, .size-large {
  background: white;
  border: 2px solid #3498db;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.size-large {
  border-color: #f39c12;
}

.recommendation {
  display: block;
  font-weight: bold;
  color: #3498db;
  margin-top: 0.3rem;
}

.size-large .recommendation {
  color: #f39c12;
}

.note-box {
  background: #fff3cd;
  border: 1px solid #ffeaa7;
  border-radius: 8px;
  padding: 1rem;
  margin: 2rem 0;
}

.note-box h4 {
  margin: 0 0 0.5rem 0;
  color: #856404;
  font-size: 1rem;
}

.note-box p {
  margin: 0 0 1rem 0;
  color: #856404;
  font-size: 0.9rem;
  line-height: 1.5;
}

/* Estilos responsivos */
@media (max-width: 768px) {
  .nav-tabs {
    flex-direction: column;
  }

  /* plot-comparison removed */

  .result-comparison {
    grid-template-columns: 1fr;
  }

  .simulator-controls {
    flex-direction: column;
  }

  .calculator-controls {
    grid-template-columns: 1fr;
  }

  .step-answers {
    flex-direction: column;
    gap: 1rem;
  }

  .yes-answer, .no-answer {
    flex-direction: column;
    text-align: center;
  }

  .sample-size-indicator {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
