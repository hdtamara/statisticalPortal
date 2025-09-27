<template>
  <div class="diferencia-medias-view">
    <div class="container">
      <div class="hero">
        <h1>Distribución Muestral de la Diferencia de Medias</h1>
        <p>Aprende a explorar cómo se comporta la diferencia entre dos medias cuando repetimos el proceso de muestreo</p>
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
        <h2>Introducción a la Comparación de Medias</h2>

        <div class="intro-content">
          <p>El objetivo ahora es ver cómo se comporta la diferencia de medias cuando repetimos el muestreo. ¿Es estable o varía mucho?</p>

          <p>El parámetro que nos interesa ya no es <strong>μ</strong>, sino la <strong>diferencia entre las medias poblacionales</strong>, <strong>μ₁ - μ₂</strong>.</p>

          <div class="key-question">
            <h3>🤔 La Pregunta Fundamental</h3>
            <p><strong>¿Cómo se relacionan las dos muestras entre sí?</strong></p>
            <p>La respuesta a esto divide el problema en dos caminos completamente diferentes:</p>
          </div>

          <div class="comparison-cards">
            <ContentCard
              title="🧑‍🤝‍🧑 Muestras Independientes"
              content="Dos grupos de individuos completamente distintos, sin ninguna relación entre ellos."
              card-type="inferential"
            />

            <ContentCard
              title="🏃➡️🏃‍♀️ Datos Pareados"
              content="Dos medidas del mismo individuo o de pares emparejados naturalmente."
              card-type="inferential"
            />
          </div>
        </div>
      </div>

      <!-- MUESTRAS INDEPENDIENTES -->
      <div v-if="activeTab === 'independientes'" class="content-section">
        <h2>1. Muestras Independientes 🧑‍🤝‍🧑 vs. 🙍</h2>

        <div class="theory-content">
          <div class="definition-box">
            <h3>¿Qué son las Muestras Independientes?</h3>
            <p>Dos muestras son <strong>independientes</strong> cuando los individuos seleccionados para un grupo no tienen ninguna relación con los individuos del otro grupo.</p>
          </div>

          <div class="example-box">
            <h3>Ejemplo Clave</h3>
            <p>Comparar las calificaciones promedio de un grupo de estudiantes de la <code>Universidad A</code> con las de un grupo de estudiantes de la <code>Universidad B</code>. Son dos grupos de personas totalmente distintos.</p>
          </div>

          <div class="concept-explanation">
            <h3>La Idea</h3>
            <p>Tomamos una muestra de cada población, calculamos la media de cada una (<strong>x̄₁</strong> y <strong>x̄₂</strong>), y analizamos la diferencia (<strong>x̄₁ - x̄₂</strong>). La distribución de todas las posibles diferencias se aproxima a una normal.</p>
          </div>

          <h3>Fórmulas para Muestras Independientes</h3>
          <p>La diferencia observada y su error estándar se calculan de la siguiente manera:</p>


          <div class="concept-explanation">
            <p>El error estándar nos dice cuánta variabilidad esperaríamos en la diferencia de medias si repitiéramos el muestreo muchas veces.</p>
          </div>

          <div class="formula-box">
            <h4>Fórmula de la Diferencia</h4>
            <div class="formula">
              Diferencia observada = x̄₁ - x̄₂
            </div>
            <div class="formula">
              Error estándar = √(s₁²/n₁ + s₂²/n₂)
            </div>
          </div>

          <div class="parameters-explanation">
            <h3>Explicación de Parámetros</h3>
            <ul>
              <li><strong>n₁, x̄₁, s₁</strong>: Tamaño, media y desviación estándar de la muestra del grupo 1</li>
              <li><strong>n₂, x̄₂, s₂</strong>: Tamaño, media y desviación estándar de la muestra del grupo 2</li>
              <li><strong>Error estándar</strong>: Mide la variabilidad esperada en la diferencia si repitiéramos el muestreo</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- EJEMPLO INDEPENDIENTES -->
      <div v-if="activeTab === 'ejemplo-independientes'" class="content-section">
        <h2>Ejemplo: Muestras Independientes</h2>

        <div class="example-scenario">
          <h3>Escenario</h3>
          <p>Un agrónomo quiere comparar el rendimiento de dos tipos de fertilizantes. Registra el rendimiento (kg/ha) de varias parcelas para cada fertilizante.</p>
        </div>

        <div class="data-table">
          <h3>Datos del Experimento</h3>
          <div class="raw-data-tables">
            <div class="fertilizer-table">
              <h4>Fertilizante A (kg/ha)</h4>
              <table>
                <tbody>
                  <tr><td>580</td><td>520</td><td>590</td><td>540</td></tr>
                  <tr><td>560</td><td>570</td><td>530</td><td>550</td></tr>
                  <tr><td>540</td><td>580</td><td>520</td><td>570</td></tr>
                </tbody>
              </table>
            </div>

            <div class="fertilizer-table">
              <h4>Fertilizante B (kg/ha)</h4>
              <table>
                <tbody>
                  <tr><td>490</td><td>530</td><td>480</td><td>520</td><td>500</td></tr>
                  <tr><td>540</td><td>510</td><td>490</td><td>530</td><td>510</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div class="solution-steps">
          <h3>Solución Paso a Paso</h3>

          <div class="step">
            <h4>Paso 1: Calcular las estadísticas de cada grupo</h4>
            <div class="calculation">
              <p><strong>Fertilizante A:</strong></p>
              <p>n₁ = 12, x̄₁ = 554 kg/ha, s₁ = 23.26 kg/ha</p>

              <p><strong>Fertilizante B:</strong></p>
              <p>n₂ = 10, x̄₂ = 510 kg/ha, s₂ = 18.97 kg/ha</p>

              <p><strong>Diferencia observada:</strong> 554 - 510 = 44 kg/ha</p>
            </div>
          </div>

          <div class="step">
            <h4>Paso 2: Calcular el Error Estándar de la Diferencia</h4>
            <div class="calculation">
              <p>Error Estándar = √(s₁²/n₁ + s₂²/n₂)</p>

              <p>Error Estándar = √(23.26²/12 + 18.97²/10)</p>

              <p>Error Estándar = √(45.08 + 36.00) = √81.08 ≈ <strong>9.00</strong></p>
            </div>
          </div>
        </div>

        <div class="interpretation-box">
          <h3>Interpretación de los Resultados</h3>
          <p>Observamos una diferencia de <strong>44 kg/ha</strong> entre los fertilizantes, con un error estándar de <strong>9.00 kg/ha</strong>.</p>
          <p>El error estándar nos indica que si repitiéramos este experimento muchas veces con muestras del mismo tamaño, esperaríamos que las diferencias observadas varíen aproximadamente ±9.00 kg/ha alrededor de la diferencia real entre los fertilizantes.</p>
          <p>Esta información nos ayuda a entender la <strong>precisión de nuestra estimación</strong> y nos prepara para explorar cómo se comporta esta diferencia cuando repetimos el proceso de muestreo.</p>
        </div>

      </div>

      <!-- DATOS PAREADOS -->
      <div v-if="activeTab === 'pareados'" class="content-section">
        <h2>2. Datos Pareados (Muestras Dependientes) 🏃➡️🏃‍♀️</h2>

        <div class="theory-content">
          <div class="definition-box">
            <h3>¿Qué son los Datos Pareados?</h3>
            <p>Los datos son <strong>pareados</strong> o <strong>dependientes</strong> cuando cada observación de la primera muestra está conectada de forma natural con una observación de la segunda. ¡Son dos medidas del mismo individuo o de pares emparejados!</p>
          </div>

          <div class="examples-grid">
            <div class="example-box">
              <h3>Ejemplo Clave</h3>
              <p>Medir el peso de un grupo de 15 personas <strong>antes</strong> y <strong>después</strong> de un programa de dieta. Tenemos dos conjuntos de datos (peso_antes, peso_después), pero provienen de las mismas 15 personas.</p>
            </div>

            <div class="other-examples">
              <h3>Otros Ejemplos</h3>
              <ul>
                <li>Las calificaciones de un estudiante en el examen parcial vs. el final</li>
                <li>El tiempo de reacción de una persona con su mano derecha vs. su mano izquierda</li>
                <li>Presión arterial antes y después de un medicamento</li>
                <li>Productividad de trabajadores antes y después de capacitación</li>
              </ul>
            </div>
          </div>

          <div class="key-insight">
            <h3>💡 El Truco Genial de los Datos Pareados</h3>
            <p><strong>¡Conviértelo en un problema de una sola muestra!</strong></p>
            <p>No analizamos los dos grupos por separado. En su lugar, creamos una <strong>nueva variable: la diferencia (d)</strong> para cada par.</p>

            <div class="formula-simple">
              <strong>d = x<sub>después</sub> - x<sub>antes</sub></strong>
            </div>

            <p>Una vez que tenemos esta única columna de diferencias, <strong>nos olvidamos de los datos originales</strong> y realizamos un simple <strong>análisis de una muestra</strong> sobre estas diferencias.</p>
          </div>

          <div class="formula-box">
            <h3>Fórmula para Datos Pareados</h3>
            <p>Calculamos la media de las diferencias y su error estándar.</p>
            <div class="formula">
              Media de diferencias = d̄
            </div>
            <div class="formula">
              Error estándar = s<sub>d</sub>/√n
            </div>

            <div class="formula-explanation">
              <ul>
                <li><strong>d̄</strong>: La media de todas las diferencias que calculaste</li>
                <li><strong>s<sub>d</sub></strong>: La desviación estándar de esas diferencias</li>
                <li><strong>n</strong>: El número de <strong>pares</strong> (no el número total de observaciones)</li>
                <li><strong>Error estándar</strong>: Mide la variabilidad en la diferencia media</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- EJEMPLO PAREADOS -->
      <div v-if="activeTab === 'ejemplo-pareados'" class="content-section">
        <h2>Ejemplo: Datos Pareados</h2>

        <div class="example-scenario">
          <h3>Escenario</h3>
          <p>Se mide el nivel de colesterol de 8 pacientes <strong>antes</strong> y <strong>después</strong> de un tratamiento.</p>
        </div>

        <div class="data-table">
          <h3>Datos del Experimento</h3>
          <table>
            <thead>
              <tr>
                <th>Paciente</th>
                <th>Antes</th>
                <th>Después</th>
                <th>Diferencia (d = Antes - Después)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>1</td><td>210</td><td>195</td><td class="difference">15</td></tr>
              <tr><td>2</td><td>235</td><td>220</td><td class="difference">15</td></tr>
              <tr><td>3</td><td>222</td><td>215</td><td class="difference">7</td></tr>
              <tr><td>4</td><td>250</td><td>230</td><td class="difference">20</td></tr>
              <tr><td>5</td><td>218</td><td>210</td><td class="difference">8</td></tr>
              <tr><td>6</td><td>242</td><td>225</td><td class="difference">17</td></tr>
              <tr><td>7</td><td>260</td><td>240</td><td class="difference">20</td></tr>
              <tr><td>8</td><td>225</td><td>222</td><td class="difference">3</td></tr>
            </tbody>
          </table>
        </div>

        <div class="solution-steps">
          <h3>Solución Paso a Paso</h3>

          <div class="step">
            <h4>Paso 1: Calcular la media y desviación de las diferencias (d)</h4>
            <div class="calculation">
              <p><strong>Media de las diferencias:</strong></p>
              <p>d̄ = (15 + 15 + 7 + 20 + 8 + 17 + 20 + 3) / 8 = 105 / 8 = <strong>13.125</strong></p>

              <p><strong>Desviación estándar de las diferencias:</strong></p>
              <p>s<sub>d</sub> ≈ <strong>6.35</strong> (calculado con software o calculadora)</p>
            </div>
          </div>

          <div class="step">
            <h4>Paso 2: Calcular el Error Estándar de la Diferencia</h4>
            <div class="calculation">
              <p>Error Estándar = s<sub>d</sub>/√n = 6.35/√8 ≈ 6.35/2.828 ≈ <strong>2.25</strong></p>
            </div>
          </div>
        </div>

        <div class="interpretation-box">
          <h3>Interpretación de los Resultados</h3>
          <p>Observamos que la media de las diferencias es <strong>13.125 mg/dL</strong>, con un error estándar de <strong>2.25 mg/dL</strong>.</p>
          <p>El error estándar nos indica que si midiéramos el colesterol antes y después en muchos grupos similares de 8 pacientes, esperaríamos que las medias de las diferencias varíen aproximadamente ±2.25 mg/dL alrededor del efecto real del tratamiento.</p>
          <p>Esta información nos ayuda a entender la <strong>consistencia del efecto observado</strong> y nos prepara para explorar cómo se comporta esta media de diferencias cuando repetimos el proceso de muestreo.</p>
        </div>

      </div>

      <!-- SIMULACIÓN -->
      <div v-if="activeTab === 'simulacion'" class="content-section">
        <h2>Simulación: Distribución de Diferencias de Medias</h2>

        <div class="explanation-box">
          <h3>¿Qué demuestra esta simulación?</h3>
          <p>Esta simulación muestra cómo varían las diferencias de medias cuando repetimos el proceso de muestreo. <strong>No prueba nada estadísticamente, solo nos ayuda a visualizar la variabilidad esperada</strong> en las diferencias si repitiéramos el experimento muchas veces con los mismos tamaños de muestra.</p>
        </div>

        <div class="simulation-controls">
          <div class="control-group">
            <label for="tipo-simulacion">Tipo de simulación:</label>
            <select id="tipo-simulacion" v-model="tipoSimulacion">
              <option value="independientes">Muestras Independientes (Fertilizantes)</option>
              <option value="pareados">Datos Pareados (Colesterol)</option>
            </select>
          </div>

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
              <p class="stat-value">{{ diferenciaObservada.toFixed(2) }}</p>
            </div>
            <div class="summary-item">
              <h4>Media de las Diferencias Simuladas</h4>
              <p class="stat-value">{{ mediaSimulada.toFixed(2) }}</p>
            </div>
            <div class="summary-item">
              <h4>Desviación Estándar de las Diferencias</h4>
              <p class="stat-value">{{ desviacionSimulada.toFixed(2) }}</p>
            </div>
            <div class="summary-item">
              <h4>Error Estándar Calculado</h4>
              <p class="stat-value">{{ errorEstandarCalculado.toFixed(2) }}</p>
            </div>
          </div>

          <div class="chart-container">
            <div ref="simulacionDiv" class="plotly-chart"></div>
          </div>

          <div class="interpretation">
            <h4>Interpretación</h4>
            <p>El histograma muestra cómo se distribuyen las diferencias de medias si repitiéramos el muestreo {{ numeroSimulaciones }} veces. La línea roja marca nuestra diferencia observada ({{ diferenciaObservada.toFixed(2) }}).</p>
            <p>La variabilidad que vemos (desviación estándar = {{ desviacionSimulada.toFixed(2) }}) nos da una idea de cuánto esperaríamos que varíen las diferencias por pura casualidad del muestreo.</p>
            <div class="key-insight">
              <strong>Recuerda:</strong> Esta simulación no es una prueba estadística. Solo ilustra el concepto de variabilidad muestral y nos ayuda a contextualizar qué tan grande es nuestra diferencia observada en relación con la variabilidad esperada.
            </div>
          </div>
        </div>
      </div>

      <!-- COMPARACIÓN -->
      <div v-if="activeTab === 'comparacion'" class="content-section">
        <h2>Comparación: Independientes vs. Pareados</h2>

        <div class="comparison-table">
          <table>
            <thead>
              <tr>
                <th>Aspecto</th>
                <th>Muestras Independientes</th>
                <th>Datos Pareados</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Relación entre grupos</strong></td>
                <td>Ninguna relación entre individuos</td>
                <td>Cada observación está emparejada</td>
              </tr>
              <tr>
                <td><strong>Ejemplo típico</strong></td>
                <td>Grupo A vs. Grupo B (personas diferentes)</td>
                <td>Antes vs. Después (mismas personas)</td>
              </tr>
              <tr>
                <td><strong>Enfoque de análisis</strong></td>
                <td>Comparar dos medias directamente</td>
                <td>Analizar las diferencias como una sola muestra</td>
              </tr>
              <tr>
                <td><strong>Fórmula de la diferencia</strong></td>
                <td>Diferencia = x̄₁ - x̄₂<br>Error estándar = √(s₁²/n₁ + s₂²/n₂)</td>
                <td>Media de diferencias = d̄<br>Error estándar = s<sub>d</sub>/√n</td>
              </tr>
              <tr>
                <td><strong>Ventaja principal</strong></td>
                <td>Permite comparar poblaciones diferentes</td>
                <td>Controla la variabilidad individual</td>
              </tr>
              <tr>
                <td><strong>Cuándo usar</strong></td>
                <td>Grupos naturalmente separados</td>
                <td>Medidas repetidas o pares naturales</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="decision-flowchart">
          <h3>¿Cómo Decidir Qué Método Usar?</h3>

          <div class="flowchart">
            <div class="question-node">
              <p><strong>¿Las observaciones están naturalmente emparejadas?</strong></p>
            </div>

            <div class="branches">
              <div class="branch">
                <div class="answer">SÍ</div>
                <div class="method">
                  <h4>Usar Datos Pareados</h4>
                  <ul>
                    <li>Calcular diferencias (d)</li>
                    <li>Calcular media de diferencias</li>
                    <li>Calcular error estándar</li>
                  </ul>
                </div>
              </div>

              <div class="branch">
                <div class="answer">NO</div>
                <div class="method">
                  <h4>Usar Muestras Independientes</h4>
                  <ul>
                    <li>Calcular diferencia de medias</li>
                    <li>Calcular error estándar</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="key-insights">
          <h3>Puntos Clave para Recordar</h3>
          <div class="insights-grid">
            <div class="insight-card">
              <h4>🎯 Precisión</h4>
              <p>Los datos pareados son generalmente más precisos porque eliminan la variabilidad entre individuos.</p>
            </div>

            <div class="insight-card">
              <h4>📊 Tamaño de muestra</h4>
              <p>Los datos pareados necesitan menos participantes para detectar diferencias significativas.</p>
            </div>

            <div class="insight-card">
              <h4>🔍 Identificación</h4>
              <p>La clave está en identificar correctamente si existe una relación natural entre las observaciones.</p>
            </div>

            <div class="insight-card">
              <h4>⚠️ Error común</h4>
              <p>Tratar datos pareados como independientes reduce el poder estadístico del análisis.</p>
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
import ContentCard from '@/components/common/ContentCard.vue';

// Configuración de pestañas
const tabs = [
  { id: 'introduccion', label: 'Introducción' },
  { id: 'independientes', label: 'Muestras Independientes' },
  { id: 'ejemplo-independientes', label: 'Ejemplo Independientes' },
  { id: 'pareados', label: 'Datos Pareados' },
  { id: 'ejemplo-pareados', label: 'Ejemplo Pareados' },
  { id: 'simulacion', label: 'Simulación' },
  { id: 'comparacion', label: 'Comparación' }
];

const activeTab = ref('introduccion');

// Función para ejecutar la simulación
const ejecutarSimulacion = async () => {
  diferenciasSimuladas.value = [];

  if (tipoSimulacion.value === 'independientes') {
    // Simulación para muestras independientes
    diferenciaObservada.value = 44; // Diferencia observada en el ejemplo
    errorEstandarCalculado.value = 9.00; // Error estándar calculado

    for (let i = 0; i < numeroSimulaciones.value; i++) {
      // Muestreo con reemplazo de fertilizante A
      const muestraA = [];
      for (let j = 0; j < fertilizanteA.length; j++) {
        muestraA.push(fertilizanteA[Math.floor(Math.random() * fertilizanteA.length)]);
      }

      // Muestreo con reemplazo de fertilizante B
      const muestraB = [];
      for (let j = 0; j < fertilizanteB.length; j++) {
        muestraB.push(fertilizanteB[Math.floor(Math.random() * fertilizanteB.length)]);
      }

      // Calcular diferencia de medias
      const mediaA = muestraA.reduce((a, b) => a + b, 0) / muestraA.length;
      const mediaB = muestraB.reduce((a, b) => a + b, 0) / muestraB.length;
      const diferencia = mediaA - mediaB;
      diferenciasSimuladas.value.push(diferencia);
    }
  } else {
    // Simulación para datos pareados
    diferenciaObservada.value = 13.125; // Media de diferencias observada
    errorEstandarCalculado.value = 2.25; // Error estándar calculado

    for (let i = 0; i < numeroSimulaciones.value; i++) {
      // Muestreo con reemplazo de las diferencias
      const muestraDiferencias = [];
      for (let j = 0; j < diferenciasColesterol.length; j++) {
        muestraDiferencias.push(diferenciasColesterol[Math.floor(Math.random() * diferenciasColesterol.length)]);
      }

      // Calcular media de las diferencias
      const mediaDiferencias = muestraDiferencias.reduce((a, b) => a + b, 0) / muestraDiferencias.length;
      diferenciasSimuladas.value.push(mediaDiferencias);
    }
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
    text: `Distribución Simulada de Diferencias (${tipoSimulacion.value === 'independientes' ? 'Muestras Independientes' : 'Datos Pareados'})`
  },
  xaxis: {
    title: { text: 'Diferencia de Medias' }
  },
  yaxis: {
    title: { text: 'Frecuencia' }
  },
  showlegend: true,
  bargap: 0
});

// Variables para la simulación
const simulacionDiv = ref<HTMLElement>();
const tipoSimulacion = ref('independientes');
const numeroSimulaciones = ref(1000);
const diferenciasSimuladas = ref<number[]>([]);
const diferenciaObservada = ref(40); // Para fertilizantes
const mediaSimulada = ref(0);
const desviacionSimulada = ref(0);
const errorEstandarCalculado = ref(9.49); // Para fertilizantes

// Datos de ejemplo
const fertilizanteA = [580, 520, 590, 540, 560, 570, 530, 550, 540, 580, 520, 570];
const fertilizanteB = [490, 530, 480, 520, 500, 540, 510, 490, 530, 510];
const diferenciasColesterol = [15, 15, 7, 20, 8, 17, 20, 3];
</script>

<style scoped>
.diferencia-medias-view {
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

.comparison-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0;
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

.example-box {
  background: #ecf0f1;
  padding: 1.5rem;
  border-radius: 8px;
  margin: 1.5rem 0;
  border-left: 4px solid #3498db;
}

.example-box h3 {
  margin-top: 0;
  color: #2980b9;
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

.formula-box {
  background: #e8f5e8;
  padding: 1.5rem;
  border-radius: 8px;
  margin: 1.5rem 0;
  border-left: 4px solid #2ecc71;
}


.formula {
  font-size: 1.3rem;
  font-weight: bold;
  margin: 1rem 0;
  text-align: center;
}

.fraction {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  vertical-align: middle;
}

.numerator {
  border-bottom: 2px solid #333;
  padding-bottom: 2px;
  margin-bottom: 2px;
}

.denominator {
  padding-top: 2px;
}

.formulas-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0;
}

.z-case {
  background: #e3f2fd;
  border-left-color: #2196f3;
}

.t-case {
  background: #f3e5f5;
  border-left-color: #9c27b0;
}

.parameters-explanation {
  background: #fff8e1;
  padding: 1.5rem;
  border-radius: 8px;
  margin: 1.5rem 0;
  border-left: 4px solid #ff9800;
}

.parameters-explanation h3 {
  margin-top: 0;
  color: #f57c00;
}

.parameters-explanation ul {
  margin-left: 1.5rem;
}

.parameters-explanation li {
  margin-bottom: 0.5rem;
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

.data-table {
  margin: 1.5rem 0;
}

.data-table table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
}

.data-table th, .data-table td {
  padding: 0.75rem;
  text-align: center;
  border: 1px solid #ddd;
}

.data-table th {
  background-color: #e74c3c;
  color: white;
  font-weight: bold;
}

.data-table tr:nth-child(even) {
  background-color: #f9f9f9;
}

.difference {
  background-color: #e8f5e8 !important;
  font-weight: bold;
  color: #2ecc71;
}

.question-box {
  background: #fff4e6;
  padding: 1.5rem;
  border-radius: 8px;
  margin: 1.5rem 0;
  border-left: 4px solid #f39c12;
}

.question-box h3 {
  margin-top: 0;
  color: #d35400;
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

.examples-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0;
}

.other-examples {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #6c757d;
}

.other-examples h3 {
  margin-top: 0;
  color: #495057;
}

.other-examples ul {
  margin-left: 1.5rem;
}

.other-examples li {
  margin-bottom: 0.5rem;
}

.key-insight {
  background: #fff3cd;
  padding: 1.5rem;
  border-radius: 8px;
  margin: 1.5rem 0;
  border-left: 4px solid #ffc107;
}

.key-insight h3 {
  margin-top: 0;
  color: #856404;
}

.formula-simple {
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
  margin: 1rem 0;
  padding: 0.5rem;
  background: white;
  border-radius: 4px;
}

.formula-explanation {
  margin-top: 1rem;
}

.formula-explanation ul {
  margin-left: 1.5rem;
}

.formula-explanation li {
  margin-bottom: 0.5rem;
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
  vertical-align: top;
}

.comparison-table th {
  background-color: #e74c3c;
  color: white;
}

.comparison-table tr:nth-child(even) {
  background-color: #f9f9f9;
}

.decision-flowchart {
  margin: 2rem 0;
}

.flowchart {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.question-node {
  background: #3498db;
  color: white;
  padding: 1rem 2rem;
  border-radius: 50px;
  text-align: center;
  font-weight: bold;
}

.branches {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;
}

.branch {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.answer {
  background: #2ecc71;
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 25px;
  font-weight: bold;
}

.method {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #2ecc71;
  width: 100%;
}

.method h4 {
  margin-top: 0;
  color: #27ae60;
}

.method ul {
  margin-left: 1.5rem;
}

.method li {
  margin-bottom: 0.5rem;
}

.key-insights {
  margin: 2rem 0;
}

.insights-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0;
}

.insight-card {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #e74c3c;
  text-align: center;
}

.insight-card h4 {
  margin-top: 0;
  color: #c0392b;
  font-size: 1.1rem;
}

.insight-card p {
  margin-bottom: 0;
  font-size: 0.9rem;
  line-height: 1.4;
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

.software-solutions {
  margin: 2rem 0;
}

.excel-solution, .python-solution {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  margin: 1.5rem 0;
  border-left: 4px solid #17a2b8;
}

.excel-solution h4, .python-solution h4 {
  margin-top: 0;
  color: #138496;
}

.excel-steps {
  background: white;
  padding: 1rem;
  border-radius: 6px;
  margin: 1rem 0;
}

.excel-steps ol {
  margin-left: 1.5rem;
}

.excel-steps li {
  margin-bottom: 0.5rem;
  line-height: 1.4;
}

.code-block {
  background: #2d3748;
  border-radius: 6px;
  margin: 1rem 0;
  overflow-x: auto;
}

.code-block pre {
  margin: 0;
  padding: 1.5rem;
  color: #e2e8f0;
  font-family: 'Courier New', 'Monaco', monospace;
  font-size: 0.9rem;
  line-height: 1.4;
  overflow-x: auto;
}

.code-block code {
  background: none;
  color: inherit;
  padding: 0;
  font-size: inherit;
}

.simulation-box {
  background: #e8f4f8;
  padding: 1.5rem;
  border-radius: 8px;
  margin: 1.5rem 0;
  border-left: 4px solid #3498db;
}

.simulation-box h3 {
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

  .formulas-grid {
    grid-template-columns: 1fr;
  }

  .examples-grid, .comparison-cards, .insights-grid {
    grid-template-columns: 1fr;
  }

  .branches {
    grid-template-columns: 1fr;
  }

  .data-table {
    overflow-x: auto;
  }

  .formula {
    font-size: 1.1rem;
  }

  .btn {
    width: 100%;
    text-align: center;
    margin-bottom: 0.5rem;
  }

  .raw-data-tables {
    grid-template-columns: 1fr;
  }
}

.raw-data-tables {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 1rem 0;
}

.fertilizer-table {
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 6px;
  border-left: 4px solid #28a745;
}

.fertilizer-table h4 {
  margin-top: 0;
  margin-bottom: 0.5rem;
  color: #155724;
  text-align: center;
}

.fertilizer-table table {
  width: 100%;
  border-collapse: collapse;
}

.fertilizer-table td {
  padding: 0.5rem;
  text-align: center;
  border: 1px solid #dee2e6;
  background: white;
  font-weight: 500;
}
</style>
