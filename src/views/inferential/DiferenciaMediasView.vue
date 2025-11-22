<template>
  <div class="diferencia-medias-view">
    <div class="container">
      <div class="hero">
        <h1>Distribución Muestral de la Diferencia de Medias</h1>
        <p>
          Aprende a explorar cómo se comporta la diferencia entre dos medias cuando repetimos el
          proceso de muestreo
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

      <!-- INTRODUCCIÓN -->
      <div v-if="activeTab === 'introduccion'" class="content-section">
        <h2>Introducción a la Comparación de Medias</h2>

        <div class="intro-content">
          <p>
            El objetivo ahora es ver cómo se comporta la diferencia de medias cuando repetimos el
            muestreo. ¿Es estable o varía mucho?
          </p>

          <p>
            El parámetro que nos interesa ya no es <strong>μ</strong>, sino la
            <strong>diferencia entre las medias poblacionales</strong>, <strong>μ₁ - μ₂</strong>.
          </p>

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
            <p>
              Dos muestras son <strong>independientes</strong> cuando los individuos seleccionados
              para un grupo no tienen ninguna relación con los individuos del otro grupo.
            </p>
          </div>

          <div class="example-box">
            <h3>Ejemplo Clave</h3>
            <p>
              Comparar las calificaciones promedio de un grupo de estudiantes de la
              <code>Universidad A</code> con las de un grupo de estudiantes de la
              <code>Universidad B</code>. Son dos grupos de personas totalmente distintos.
            </p>
          </div>

          <div class="concept-explanation">
            <h3>La Idea</h3>
            <p>
              Tomamos una muestra de cada población, calculamos la media de cada una (<strong
                >x̄₁</strong
              >
              y <strong>x̄₂</strong>), y analizamos la diferencia (<strong>x̄₁ - x̄₂</strong>). La
              distribución de todas las posibles diferencias se aproxima a una normal.
            </p>
          </div>

          <h3>Fórmulas para Muestras Independientes</h3>
          <p>La diferencia observada y su error estándar se calculan de la siguiente manera:</p>

          <div class="concept-explanation">
            <p>
              El error estándar nos dice cuánta variabilidad esperaríamos en la diferencia de medias
              si repitiéramos el muestreo muchas veces.
            </p>
          </div>

          <div class="formula-box">
            <h4>Fórmulas para Muestras Independientes</h4>
            <div class="formula-display">
              <div class="formula-item">
                <div class="formula-label">Diferencia observada:</div>
                <div class="formula-equation" v-html="renderLatex('\\bar{x}_1 - \\bar{x}_2')"></div>
              </div>
              <div class="formula-item">
                <div class="formula-label">Error estándar:</div>
                <div
                  class="formula-equation"
                  v-html="renderLatex('\\sqrt{\\frac{s_1^2}{n_1} + \\frac{s_2^2}{n_2}}')"
                ></div>
              </div>
            </div>
            <div class="formula-explanation">
              <h4>¿Qué significa cada símbolo?</h4>
              <div class="variables-grid">
                <div class="variable-item">
                  <span class="variable-symbol">x̄₁, x̄₂</span>
                  <span class="variable-desc">Medias muestrales de cada grupo</span>
                </div>
                <div class="variable-item">
                  <span class="variable-symbol">s₁, s₂</span>
                  <span class="variable-desc">Desviaciones estándar muestrales</span>
                </div>
                <div class="variable-item">
                  <span class="variable-symbol">n₁, n₂</span>
                  <span class="variable-desc">Tamaños de las muestras</span>
                </div>
              </div>
            </div>
          </div>

          <div class="parameters-explanation">
            <h3>Explicación de Parámetros</h3>
            <ul>
              <li>
                <strong>n₁, x̄₁, s₁</strong>: Tamaño, media y desviación estándar de la muestra del
                grupo 1
              </li>
              <li>
                <strong>n₂, x̄₂, s₂</strong>: Tamaño, media y desviación estándar de la muestra del
                grupo 2
              </li>
              <li>
                <strong>Error estándar</strong>: Mide la variabilidad esperada en la diferencia si
                repitiéramos el muestreo
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- EJEMPLO INDEPENDIENTES -->
      <div v-if="activeTab === 'ejemplo-independientes'" class="content-section">
        <h2>Ejemplo: Muestras Independientes</h2>

        <div class="example-scenario">
          <h3>Escenario</h3>
          <p>
            Un agrónomo quiere comparar el rendimiento de dos tipos de fertilizantes. Registra el
            rendimiento (kg/ha) de varias parcelas para cada fertilizante.
          </p>
        </div>

        <div class="data-table">
          <h3>Datos del Experimento</h3>
          <div class="raw-data-tables">
            <div class="fertilizer-table">
              <h4>Fertilizante A (kg/ha)</h4>
              <table>
                <tbody>
                  <tr>
                    <td>580</td>
                    <td>520</td>
                    <td>590</td>
                    <td>540</td>
                  </tr>
                  <tr>
                    <td>560</td>
                    <td>570</td>
                    <td>530</td>
                    <td>550</td>
                  </tr>
                  <tr>
                    <td>540</td>
                    <td>580</td>
                    <td>520</td>
                    <td>570</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="fertilizer-table">
              <h4>Fertilizante B (kg/ha)</h4>
              <table>
                <tbody>
                  <tr>
                    <td>490</td>
                    <td>530</td>
                    <td>480</td>
                    <td>520</td>
                    <td>500</td>
                  </tr>
                  <tr>
                    <td>540</td>
                    <td>510</td>
                    <td>490</td>
                    <td>530</td>
                    <td>510</td>
                  </tr>
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
              <div class="calc-steps">
                <div class="calc-step">
                  <div
                    class="calc-equation"
                    v-html="renderLatex('SE = \\sqrt{\\frac{s_1^2}{n_1} + \\frac{s_2^2}{n_2}}')"
                  ></div>
                  <span class="calc-desc">Aplicamos la fórmula general</span>
                </div>
                <div class="calc-step">
                  <div
                    class="calc-equation"
                    v-html="renderLatex('SE = \\sqrt{\\frac{23.26^2}{12} + \\frac{18.97^2}{10}}')"
                  ></div>
                  <span class="calc-desc">Sustituimos los valores</span>
                </div>
                <div class="calc-step">
                  <div
                    class="calc-equation"
                    v-html="renderLatex('SE = \\sqrt{45.08 + 36.00}')"
                  ></div>
                  <span class="calc-desc">Calculamos cada fracción</span>
                </div>
                <div class="calc-step result">
                  <div
                    class="calc-equation"
                    v-html="renderLatex('SE = \\sqrt{81.08} \\approx \\mathbf{9.00}')"
                  ></div>
                  <span class="calc-desc">Resultado final</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="interpretation-box">
          <h3>Interpretación de los Resultados</h3>
          <p>
            Observamos una diferencia de <strong>44 kg/ha</strong> entre los fertilizantes, con un
            error estándar de <strong>9.00 kg/ha</strong>.
          </p>
          <p>
            El error estándar nos indica que si repitiéramos este experimento muchas veces con
            muestras del mismo tamaño, esperaríamos que las diferencias observadas varíen
            aproximadamente ±9.00 kg/ha alrededor de la diferencia real entre los fertilizantes.
          </p>
          <p>
            Esta información nos ayuda a entender la
            <strong>precisión de nuestra estimación</strong> y nos prepara para explorar cómo se
            comporta esta diferencia cuando repetimos el proceso de muestreo.
          </p>
        </div>
      </div>

      <!-- DATOS PAREADOS -->
      <div v-if="activeTab === 'pareados'" class="content-section">
        <h2>2. Datos Pareados (Muestras Dependientes) 🏃➡️🏃‍♀️</h2>

        <div class="theory-content">
          <div class="definition-box">
            <h3>¿Qué son los Datos Pareados?</h3>
            <p>
              Los datos son <strong>pareados</strong> o <strong>dependientes</strong> cuando cada
              observación de la primera muestra está conectada de forma natural con una observación
              de la segunda. ¡Son dos medidas del mismo individuo o de pares emparejados!
            </p>
          </div>

          <div class="examples-grid">
            <div class="example-box">
              <h3>Ejemplo Clave</h3>
              <p>
                Medir el peso de un grupo de 15 personas <strong>antes</strong> y
                <strong>después</strong> de un programa de dieta. Tenemos dos conjuntos de datos
                (peso_antes, peso_después), pero provienen de las mismas 15 personas.
              </p>
            </div>

            <div class="other-examples">
              <h3>Otros Ejemplos</h3>
              <ul>
                <li>Las calificaciones de un estudiante en el examen parcial vs. el final</li>
                <li>
                  El tiempo de reacción de una persona con su mano derecha vs. su mano izquierda
                </li>
                <li>Presión arterial antes y después de un medicamento</li>
                <li>Productividad de trabajadores antes y después de capacitación</li>
              </ul>
            </div>
          </div>

          <div class="key-insight">
            <h3>💡 El Truco Genial de los Datos Pareados</h3>
            <p><strong>¡Conviértelo en un problema de una sola muestra!</strong></p>
            <p>
              No analizamos los dos grupos por separado. En su lugar, creamos una
              <strong>nueva variable: la diferencia (d)</strong> para cada par.
            </p>

            <div class="formula-simple">
              <div
                class="katex-equation"
                v-html="renderLatex('d = x_{\\text{después}} - x_{\\text{antes}}')"
              ></div>
            </div>

            <p>
              Una vez que tenemos esta única columna de diferencias,
              <strong>nos olvidamos de los datos originales</strong> y realizamos un simple
              <strong>análisis de una muestra</strong> sobre estas diferencias.
            </p>
          </div>

          <div class="formula-box">
            <h3>Fórmulas para Datos Pareados</h3>
            <p>Calculamos la media de las diferencias y su error estándar.</p>
            <div class="formula-display">
              <div class="formula-item">
                <div class="formula-label">Media de diferencias:</div>
                <div class="formula-equation" v-html="renderLatex('\\bar{d}')"></div>
              </div>
              <div class="formula-item">
                <div class="formula-label">Error estándar:</div>
                <div class="formula-equation" v-html="renderLatex('\\frac{s_d}{\\sqrt{n}}')"></div>
              </div>
            </div>

            <div class="formula-explanation">
              <h4>¿Qué significa cada símbolo?</h4>
              <div class="variables-grid">
                <div class="variable-item">
                  <span class="variable-symbol">d̄</span>
                  <span class="variable-desc">Media de todas las diferencias</span>
                </div>
                <div class="variable-item">
                  <span class="variable-symbol">s_d</span>
                  <span class="variable-desc">Desviación estándar de las diferencias</span>
                </div>
                <div class="variable-item">
                  <span class="variable-symbol">n</span>
                  <span class="variable-desc">Número de pares (no observaciones totales)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- EJEMPLO PAREADOS -->
      <div v-if="activeTab === 'ejemplo-pareados'" class="content-section">
        <h2>Ejemplo: Datos Pareados</h2>

        <div class="example-scenario">
          <h3>Escenario</h3>
          <p>
            Se mide el nivel de colesterol de 8 pacientes <strong>antes</strong> y
            <strong>después</strong> de un tratamiento.
          </p>
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
              <tr>
                <td>1</td>
                <td>210</td>
                <td>195</td>
                <td class="difference">15</td>
              </tr>
              <tr>
                <td>2</td>
                <td>235</td>
                <td>220</td>
                <td class="difference">15</td>
              </tr>
              <tr>
                <td>3</td>
                <td>222</td>
                <td>215</td>
                <td class="difference">7</td>
              </tr>
              <tr>
                <td>4</td>
                <td>250</td>
                <td>230</td>
                <td class="difference">20</td>
              </tr>
              <tr>
                <td>5</td>
                <td>218</td>
                <td>210</td>
                <td class="difference">8</td>
              </tr>
              <tr>
                <td>6</td>
                <td>242</td>
                <td>225</td>
                <td class="difference">17</td>
              </tr>
              <tr>
                <td>7</td>
                <td>260</td>
                <td>240</td>
                <td class="difference">20</td>
              </tr>
              <tr>
                <td>8</td>
                <td>225</td>
                <td>222</td>
                <td class="difference">3</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="solution-steps">
          <h3>Solución Paso a Paso</h3>

          <div class="step">
            <h4>Paso 1: Calcular la media y desviación de las diferencias (d)</h4>
            <div class="calculation">
              <p><strong>Media de las diferencias:</strong></p>
              <p>
                d̄ = (15 + 15 + 7 + 20 + 8 + 17 + 20 + 3) / 8 = 105 / 8 = <strong>13.125</strong>
              </p>

              <p><strong>Desviación estándar de las diferencias:</strong></p>
              <p>s<sub>d</sub> ≈ <strong>6.35</strong> (calculado con software o calculadora)</p>
            </div>
          </div>

          <div class="step">
            <h4>Paso 2: Calcular el Error Estándar de la Diferencia</h4>
            <div class="calculation">
              <div class="calc-steps">
                <div class="calc-step">
                  <div
                    class="calc-equation"
                    v-html="renderLatex('SE = \\frac{s_d}{\\sqrt{n}}')"
                  ></div>
                  <span class="calc-desc">Aplicamos la fórmula para datos pareados</span>
                </div>
                <div class="calc-step">
                  <div
                    class="calc-equation"
                    v-html="renderLatex('SE = \\frac{6.35}{\\sqrt{8}}')"
                  ></div>
                  <span class="calc-desc">Sustituimos los valores</span>
                </div>
                <div class="calc-step">
                  <div
                    class="calc-equation"
                    v-html="renderLatex('SE = \\frac{6.35}{2.828} \\approx 2.25')"
                  ></div>
                  <span class="calc-desc">Calculamos la raíz cuadrada</span>
                </div>
                <div class="calc-step result">
                  <div
                    class="calc-equation"
                    v-html="renderLatex('SE \\approx \\mathbf{2.25}')"
                  ></div>
                  <span class="calc-desc">Resultado final</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="interpretation-box">
          <h3>Interpretación de los Resultados</h3>
          <p>
            Observamos que la media de las diferencias es <strong>13.125 mg/dL</strong>, con un
            error estándar de <strong>2.25 mg/dL</strong>.
          </p>
          <p>
            El error estándar nos indica que si midiéramos el colesterol antes y después en muchos
            grupos similares de 8 pacientes, esperaríamos que las medias de las diferencias varíen
            aproximadamente ±2.25 mg/dL alrededor del efecto real del tratamiento.
          </p>
          <p>
            Esta información nos ayuda a entender la
            <strong>consistencia del efecto observado</strong> y nos prepara para explorar cómo se
            comporta esta media de diferencias cuando repetimos el proceso de muestreo.
          </p>
        </div>
      </div>

      <!-- SIMULACIÓN -->
      <div v-if="activeTab === 'simulacion'" class="content-section">
        <h2>Simulación: Distribución de Diferencias de Medias</h2>

        <div class="explanation-box">
          <h3>¿Qué demuestra esta simulación?</h3>
          <p>
            Esta simulación muestra cómo varían las diferencias de medias cuando repetimos el
            proceso de muestreo.
            <strong
              >No prueba nada estadísticamente, solo nos ayuda a visualizar la variabilidad
              esperada</strong
            >
            en las diferencias si repitiéramos el experimento muchas veces con los mismos tamaños de
            muestra.
          </p>
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
            <input
              type="range"
              id="num-simulaciones"
              min="100"
              max="5000"
              step="100"
              v-model="numeroSimulaciones"
            />
            <span>{{ numeroSimulaciones }} simulaciones</span>
          </div>

          <button @click="ejecutarSimulacion" class="btn btn-primary">Ejecutar Simulación</button>
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
            <p>
              El histograma muestra cómo se distribuyen las diferencias de medias si repitiéramos el
              muestreo {{ numeroSimulaciones }} veces. La línea roja marca nuestra diferencia
              observada ({{ diferenciaObservada.toFixed(2) }}).
            </p>
            <p>
              La variabilidad que vemos (desviación estándar = {{ desviacionSimulada.toFixed(2) }})
              nos da una idea de cuánto esperaríamos que varíen las diferencias por pura casualidad
              del muestreo.
            </p>
            <div class="key-insight">
              <strong>Recuerda:</strong> Esta simulación no es una prueba estadística. Solo ilustra
              el concepto de variabilidad muestral y nos ayuda a contextualizar qué tan grande es
              nuestra diferencia observada en relación con la variabilidad esperada.
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
                <td>
                  <div class="table-formula" v-html="renderLatex('\\bar{x}_1 - \\bar{x}_2')"></div>
                  <div
                    class="table-formula"
                    v-html="renderLatex('\\sqrt{\\frac{s_1^2}{n_1} + \\frac{s_2^2}{n_2}}')"
                  ></div>
                </td>
                <td>
                  <div class="table-formula" v-html="renderLatex('\\bar{d}')"></div>
                  <div class="table-formula" v-html="renderLatex('\\frac{s_d}{\\sqrt{n}}')"></div>
                </td>
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
              <p>
                Los datos pareados son generalmente más precisos porque eliminan la variabilidad
                entre individuos.
              </p>
            </div>

            <div class="insight-card">
              <h4>📊 Tamaño de muestra</h4>
              <p>
                Los datos pareados necesitan menos participantes para detectar diferencias
                significativas.
              </p>
            </div>

            <div class="insight-card">
              <h4>🔍 Identificación</h4>
              <p>
                La clave está en identificar correctamente si existe una relación natural entre las
                observaciones.
              </p>
            </div>

            <div class="insight-card">
              <h4>⚠️ Error común</h4>
              <p>
                Tratar datos pareados como independientes reduce el poder estadístico del análisis.
              </p>
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
import { ref } from 'vue'
import katex from 'katex'
import 'katex/dist/katex.min.css'
import ContentCard from '@/components/common/ContentCard.vue'

// Configuración de pestañas
const tabs = [
  { id: 'introduccion', label: 'Introducción' },
  { id: 'independientes', label: 'Muestras Independientes' },
  { id: 'ejemplo-independientes', label: 'Ejemplo Independientes' },
  { id: 'pareados', label: 'Datos Pareados' },
  { id: 'ejemplo-pareados', label: 'Ejemplo Pareados' },
  { id: 'simulacion', label: 'Simulación' },
  { id: 'comparacion', label: 'Comparación' },
]

const activeTab = ref('introduccion')

// Función para renderizar LaTeX
const renderLatex = (latex: string) => {
  try {
    return katex.renderToString(latex, {
      throwOnError: false,
      displayMode: false,
    })
  } catch (error) {
    console.error('Error rendering LaTeX:', error)
    return latex
  }
}

// Función para ejecutar la simulación
const ejecutarSimulacion = async () => {
  diferenciasSimuladas.value = []

  if (tipoSimulacion.value === 'independientes') {
    // Simulación para muestras independientes
    diferenciaObservada.value = 44 // Diferencia observada en el ejemplo
    errorEstandarCalculado.value = 9.0 // Error estándar calculado

    for (let i = 0; i < numeroSimulaciones.value; i++) {
      // Muestreo con reemplazo de fertilizante A
      const muestraA = []
      for (let j = 0; j < fertilizanteA.length; j++) {
        muestraA.push(fertilizanteA[Math.floor(Math.random() * fertilizanteA.length)])
      }

      // Muestreo con reemplazo de fertilizante B
      const muestraB = []
      for (let j = 0; j < fertilizanteB.length; j++) {
        muestraB.push(fertilizanteB[Math.floor(Math.random() * fertilizanteB.length)])
      }

      // Calcular diferencia de medias
      const mediaA = muestraA.reduce((a, b) => a + b, 0) / muestraA.length
      const mediaB = muestraB.reduce((a, b) => a + b, 0) / muestraB.length
      const diferencia = mediaA - mediaB
      diferenciasSimuladas.value.push(diferencia)
    }
  } else {
    // Simulación para datos pareados
    diferenciaObservada.value = 13.125 // Media de diferencias observada
    errorEstandarCalculado.value = 2.25 // Error estándar calculado

    for (let i = 0; i < numeroSimulaciones.value; i++) {
      // Muestreo con reemplazo de las diferencias
      const muestraDiferencias = []
      for (let j = 0; j < diferenciasColesterol.length; j++) {
        muestraDiferencias.push(
          diferenciasColesterol[Math.floor(Math.random() * diferenciasColesterol.length)],
        )
      }

      // Calcular media de las diferencias
      const mediaDiferencias =
        muestraDiferencias.reduce((a, b) => a + b, 0) / muestraDiferencias.length
      diferenciasSimuladas.value.push(mediaDiferencias)
    }
  }

  // Calcular estadísticas
  mediaSimulada.value =
    diferenciasSimuladas.value.reduce((a, b) => a + b, 0) / diferenciasSimuladas.value.length
  const varianza =
    diferenciasSimuladas.value.reduce((a, b) => a + Math.pow(b - mediaSimulada.value, 2), 0) /
    diferenciasSimuladas.value.length
  desviacionSimulada.value = Math.sqrt(varianza)

  // Actualizar gráfico
  if (simulacionDiv.value) {
    const Plotly = await import('plotly.js-basic-dist')
    Plotly.default.react(simulacionDiv.value, getSimulacionData(), getSimulacionLayout())
  }
}

// Función para obtener datos del histograma de simulación
const getSimulacionData = () => {
  const diferencias = diferenciasSimuladas.value
  if (diferencias.length === 0) return []

  // Crear histograma
  const min = Math.min(...diferencias)
  const max = Math.max(...diferencias)
  const bins = 30
  const binWidth = (max - min) / bins

  const histogram = []
  for (let i = 0; i < bins; i++) {
    const binStart = min + i * binWidth
    const binEnd = binStart + binWidth
    const count = diferencias.filter((d) => d >= binStart && d < binEnd).length
    histogram.push({
      x: binStart + binWidth / 2,
      y: count,
    })
  }

  return [
    {
      x: histogram.map((h) => h.x),
      y: histogram.map((h) => h.y),
      type: 'bar' as const,
      name: 'Frecuencia',
      marker: { color: 'rgba(52, 152, 219, 0.7)' },
      width: binWidth * 0.9,
    },
    {
      x: [diferenciaObservada.value, diferenciaObservada.value],
      y: [0, Math.max(...histogram.map((h) => h.y))],
      type: 'scatter' as const,
      mode: 'lines' as const,
      name: 'Diferencia Observada',
      line: { color: 'red', width: 3 },
    },
  ]
}

// Función para obtener layout del gráfico de simulación
const getSimulacionLayout = () => ({
  title: {
    text: `Distribución Simulada de Diferencias (${tipoSimulacion.value === 'independientes' ? 'Muestras Independientes' : 'Datos Pareados'})`,
  },
  xaxis: {
    title: { text: 'Diferencia de Medias' },
  },
  yaxis: {
    title: { text: 'Frecuencia' },
  },
  showlegend: true,
  bargap: 0,
})

// Variables para la simulación
const simulacionDiv = ref<HTMLElement>()
const tipoSimulacion = ref('independientes')
const numeroSimulaciones = ref(1000)
const diferenciasSimuladas = ref<number[]>([])
const diferenciaObservada = ref(40) // Para fertilizantes
const mediaSimulada = ref(0)
const desviacionSimulada = ref(0)
const errorEstandarCalculado = ref(9.49) // Para fertilizantes

// Datos de ejemplo
const fertilizanteA = [580, 520, 590, 540, 560, 570, 530, 550, 540, 580, 520, 570]
const fertilizanteB = [490, 530, 480, 520, 500, 540, 510, 490, 530, 510]
const diferenciasColesterol = [15, 15, 7, 20, 8, 17, 20, 3]
</script>

<style scoped>
@import '@/assets/styles/main.css';

.diferencia-medias-view {
  padding-bottom: var(--spacing-2xl);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
}

/* Tabs */
.nav-tabs {
  display: flex;
  justify-content: center;
  margin-bottom: var(--spacing-xl);
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  background: var(--surface);
  border-radius: var(--radius-full);
  padding: var(--spacing-xs);
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border);
  max-width: fit-content;
  margin-left: auto;
  margin-right: auto;
}

.tab {
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  border-radius: var(--radius-full);
  transition: var(--transition);
  font-weight: 600;
  border: none;
  background: transparent;
  color: var(--text-secondary);
  font-size: 0.9375rem;
}

.tab.active {
  background: var(--primary);
  color: white;
  box-shadow: var(--shadow-sm);
}

.tab:hover:not(.active) {
  background: var(--surface-variant);
  color: var(--text-primary);
}

/* Content Sections */
.content-section {
  background: var(--surface);
  padding: var(--spacing-xl);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow);
  margin-bottom: var(--spacing-xl);
  border: 1px solid var(--border);
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.content-section h2 {
  color: var(--primary);
  margin-bottom: var(--spacing-lg);
  padding-bottom: var(--spacing-sm);
  border-bottom: 2px solid var(--border-light);
  font-size: 1.75rem;
}

/* Intro Content */
.intro-content {
  line-height: 1.6;
  color: var(--text-primary);
}

.intro-content p {
  margin-bottom: var(--spacing-md);
}

.key-question {
  background: var(--primary-50);
  padding: var(--spacing-lg);
  border-radius: var(--radius-md);
  margin: var(--spacing-lg) 0;
  border-left: 4px solid var(--primary);
}

.key-question h3 {
  margin-top: 0;
  color: var(--primary-800);
  margin-bottom: var(--spacing-sm);
}

.comparison-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

/* Theory Content */
.theory-content {
  line-height: 1.6;
}

.definition-box {
  background: var(--surface);
  padding: var(--spacing-lg);
  border-radius: var(--radius-md);
  margin: var(--spacing-lg) 0;
  border-left: 4px solid var(--neutral-500);
  border: 1px solid var(--border);
  box-shadow: var(--shadow-sm);
}

.definition-box h3 {
  margin-top: 0;
  color: var(--text-primary);
  margin-bottom: var(--spacing-sm);
}

.example-box {
  background: var(--surface-variant);
  padding: var(--spacing-lg);
  border-radius: var(--radius-md);
  margin: var(--spacing-lg) 0;
  border-left: 4px solid var(--secondary);
  border: 1px solid var(--border);
}

.example-box h3 {
  margin-top: 0;
  color: var(--secondary);
  margin-bottom: var(--spacing-sm);
}

.concept-explanation {
  background: var(--warning-50);
  padding: var(--spacing-lg);
  border-radius: var(--radius-md);
  margin: var(--spacing-lg) 0;
  border-left: 4px solid var(--warning);
}

.concept-explanation h3 {
  margin-top: 0;
  color: var(--warning-700);
  margin-bottom: var(--spacing-sm);
}

.formula-box {
  background: var(--success-50);
  padding: var(--spacing-lg);
  border-radius: var(--radius-md);
  margin: var(--spacing-lg) 0;
  border-left: 4px solid var(--success);
}

.formula-box h4 {
  margin-top: 0;
  color: var(--success-800);
  margin-bottom: var(--spacing-md);
}

.formula-box h3 {
  margin-top: 0;
  color: var(--success-800);
  margin-bottom: var(--spacing-md);
}

.formula-display {
  text-align: center;
  margin: var(--spacing-lg) 0;
}

.formula-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-md);
  background: var(--surface);
  border-radius: var(--radius-md);
  margin-bottom: var(--spacing-sm);
  border-left: 3px solid var(--primary);
  border: 1px solid var(--border-light);
}

.formula-label {
  font-weight: 600;
  color: var(--text-primary);
  flex: 1;
}

.formula-equation {
  font-family: 'Times New Roman', serif;
  font-size: 1.2rem;
  color: var(--primary);
  font-weight: bold;
  flex: 1;
  text-align: right;
}

.katex-equation {
  font-family: 'Times New Roman', serif;
  font-size: 1.3rem;
  color: var(--primary);
  font-weight: bold;
}

.formula-explanation {
  margin-top: var(--spacing-lg);
}

.formula-explanation h4 {
  color: var(--success);
  margin-bottom: var(--spacing-md);
  font-size: 1.1rem;
}

.variables-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-md);
  margin-top: var(--spacing-md);
}

.variable-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: var(--spacing-md);
  background: var(--surface);
  border-radius: var(--radius-md);
  border: 1px solid var(--border);
  text-align: center;
}

.variable-symbol {
  font-weight: bold;
  color: var(--primary);
  font-size: 1.1rem;
}

.variable-desc {
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.4;
}

.parameters-explanation {
  background: var(--warning-50);
  padding: var(--spacing-lg);
  border-radius: var(--radius-md);
  margin: var(--spacing-lg) 0;
  border-left: 4px solid var(--warning);
}

.parameters-explanation h3 {
  margin-top: 0;
  color: var(--warning-800);
  margin-bottom: var(--spacing-sm);
}

.parameters-explanation ul {
  margin-left: 1.5rem;
  color: var(--text-primary);
}

.parameters-explanation li {
  margin-bottom: 0.5rem;
}

/* Example Scenario */
.example-scenario {
  background: var(--secondary-50);
  padding: var(--spacing-lg);
  border-radius: var(--radius-md);
  margin: var(--spacing-lg) 0;
  border-left: 4px solid var(--secondary);
}

.example-scenario h3 {
  margin-top: 0;
  color: var(--secondary-800);
  margin-bottom: var(--spacing-sm);
}

.data-table {
  margin: var(--spacing-lg) 0;
}

.data-table table {
  width: 100%;
  border-collapse: collapse;
  margin-top: var(--spacing-md);
  background: var(--surface);
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border);
}

.data-table th,
.data-table td {
  padding: var(--spacing-md);
  text-align: center;
  border: 1px solid var(--border);
}

.data-table th {
  background-color: var(--accent);
  color: white;
  font-weight: bold;
}

.data-table tr:nth-child(even) {
  background-color: var(--surface-variant);
}

.difference {
  background-color: var(--success-50) !important;
  font-weight: bold;
  color: var(--success);
}

.raw-data-tables {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-lg);
  margin: var(--spacing-md) 0;
}

.fertilizer-table {
  background: var(--surface);
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  border-left: 4px solid var(--success);
  border: 1px solid var(--border);
  box-shadow: var(--shadow-sm);
}

.fertilizer-table h4 {
  margin-top: 0;
  margin-bottom: var(--spacing-sm);
  color: var(--success);
  text-align: center;
}

.fertilizer-table table {
  width: 100%;
  border-collapse: collapse;
}

/* Solution Steps */
.solution-steps {
  margin: var(--spacing-lg) 0;
}

.step {
  background: var(--surface);
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  margin: var(--spacing-md) 0;
  border-left: 4px solid var(--neutral-400);
  border: 1px solid var(--border);
}

.step h4 {
  margin-top: 0;
  color: var(--text-secondary);
  margin-bottom: var(--spacing-sm);
}

.calculation {
  background: var(--neutral-50);
  padding: var(--spacing-md);
  border-radius: var(--radius-sm);
  margin: var(--spacing-md) 0;
  font-family: 'Fira Code', monospace;
  border: 1px solid var(--border-light);
}

.calculation p {
  margin: 0.5rem 0;
}

.calc-steps {
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
  background: var(--surface);
  border-radius: var(--radius-sm);
  border-left: 3px solid var(--primary);
  transition: var(--transition);
  border: 1px solid var(--border-light);
}

.calc-step:hover {
  background: var(--primary-50);
  transform: translateX(5px);
}

.calc-step.result {
  background: var(--success-50);
  border-left-color: var(--success);
  font-weight: bold;
}

.calc-equation {
  font-family: 'Times New Roman', serif;
  font-size: 1.1rem;
  color: var(--text-primary);
  flex: 1;
}

.calc-desc {
  font-size: 0.85rem;
  color: var(--text-secondary);
  font-style: italic;
  margin-left: 1rem;
  min-width: 150px;
  text-align: right;
}

.interpretation-box {
  background: var(--success-50);
  padding: var(--spacing-lg);
  border-radius: var(--radius-md);
  margin: var(--spacing-lg) 0;
  border-left: 4px solid var(--success);
}

.interpretation-box h3 {
  margin-top: 0;
  color: var(--success-800);
  margin-bottom: var(--spacing-sm);
}

/* Examples Grid */
.examples-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

.other-examples {
  background: var(--surface);
  padding: var(--spacing-lg);
  border-radius: var(--radius-md);
  border-left: 4px solid var(--neutral-500);
  border: 1px solid var(--border);
  box-shadow: var(--shadow-sm);
}

.other-examples h3 {
  margin-top: 0;
  color: var(--text-primary);
  margin-bottom: var(--spacing-sm);
}

.other-examples ul {
  margin-left: 1.5rem;
  color: var(--text-secondary);
}

.other-examples li {
  margin-bottom: 0.5rem;
}

.key-insight {
  background: var(--warning-50);
  padding: var(--spacing-lg);
  border-radius: var(--radius-md);
  margin: var(--spacing-lg) 0;
  border-left: 4px solid var(--warning);
}

.key-insight h3 {
  margin-top: 0;
  color: var(--warning-800);
  margin-bottom: var(--spacing-sm);
}

.formula-simple {
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
  margin: var(--spacing-md) 0;
  padding: var(--spacing-sm);
  background: var(--surface);
  border-radius: var(--radius-sm);
  border: 1px solid var(--border-light);
}

/* Simulation */
.explanation-box {
  background: var(--secondary-50);
  padding: var(--spacing-lg);
  border-radius: var(--radius-md);
  margin: var(--spacing-lg) 0;
  border-left: 4px solid var(--secondary);
}

.explanation-box h3 {
  margin-top: 0;
  color: var(--secondary-800);
  margin-bottom: var(--spacing-sm);
}

.simulation-controls {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
  padding: var(--spacing-lg);
  background: var(--surface-variant);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border);
  align-items: center;
}

.simulation-results {
  background: var(--surface);
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border);
}

.results-summary {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-lg);
}

.summary-item {
  background: var(--surface-variant);
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  text-align: center;
  border: 1px solid var(--border);
}

.summary-item h4 {
  margin: 0 0 0.5rem 0;
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.stat-value {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--primary);
  margin: 0;
  font-family: 'Fira Code', monospace;
}

.chart-container {
  margin: var(--spacing-lg) 0;
  min-height: 400px;
  border: 1px solid var(--border-light);
  border-radius: var(--radius-md);
  padding: var(--spacing-md);
}

.interpretation {
  margin-top: var(--spacing-lg);
  padding: var(--spacing-lg);
  background: var(--secondary-50);
  border-radius: var(--radius-md);
  border: 1px solid var(--secondary-200);
}

.interpretation h4 {
  margin: 0 0 1rem 0;
  color: var(--secondary-800);
}

/* Comparison Table */
.comparison-table {
  overflow-x: auto;
  margin: var(--spacing-lg) 0;
}

.comparison-table table {
  width: 100%;
  border-collapse: collapse;
  background: var(--surface);
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border);
}

.comparison-table th,
.comparison-table td {
  padding: var(--spacing-md);
  text-align: left;
  border-bottom: 1px solid var(--border);
  vertical-align: top;
}

.comparison-table th {
  background-color: var(--primary-50);
  color: var(--primary-900);
  font-weight: bold;
  text-transform: uppercase;
  font-size: 0.85rem;
  letter-spacing: 0.05em;
}

.comparison-table tr:nth-child(even) {
  background-color: var(--surface-variant);
}

.table-formula {
  font-family: 'Times New Roman', serif;
  font-size: 0.9rem;
  color: var(--primary);
  font-weight: bold;
  margin: 0.2rem 0;
  text-align: center;
}

/* Decision Flowchart */
.decision-flowchart {
  margin: var(--spacing-2xl) 0;
}

.flowchart {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-lg);
}

.question-node {
  background: var(--primary);
  color: white;
  padding: var(--spacing-md) var(--spacing-xl);
  border-radius: var(--radius-full);
  text-align: center;
  font-weight: bold;
  box-shadow: var(--shadow-sm);
}

.branches {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-xl);
  width: 100%;
}

.branch {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-md);
}

.answer {
  background: var(--success);
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: var(--radius-full);
  font-weight: bold;
  box-shadow: var(--shadow-sm);
}

.method {
  background: var(--surface);
  padding: var(--spacing-lg);
  border-radius: var(--radius-md);
  border-left: 4px solid var(--success);
  width: 100%;
  border: 1px solid var(--border);
  box-shadow: var(--shadow-sm);
}

.method h4 {
  margin-top: 0;
  color: var(--success);
  margin-bottom: var(--spacing-sm);
}

.method ul {
  margin-left: 1.5rem;
  color: var(--text-secondary);
}

.method li {
  margin-bottom: 0.5rem;
}

/* Key Insights */
.key-insights {
  margin: var(--spacing-2xl) 0;
}

.insights-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

.insight-card {
  background: var(--surface-variant);
  padding: var(--spacing-lg);
  border-radius: var(--radius-md);
  border-left: 4px solid var(--accent);
  text-align: center;
  border: 1px solid var(--border);
  transition: var(--transition);
}

.insight-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
}

.insight-card h4 {
  margin-top: 0;
  color: var(--accent);
  font-size: 1.1rem;
  margin-bottom: var(--spacing-sm);
}

.insight-card p {
  margin-bottom: 0;
  font-size: 0.9rem;
  line-height: 1.4;
  color: var(--text-secondary);
}

/* Navigation */
.navigation-buttons {
  display: flex;
  justify-content: center;
  margin-top: var(--spacing-2xl);
}

.btn {
  padding: var(--spacing-md) var(--spacing-xl);
  border-radius: var(--radius-md);
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
  text-decoration: none;
  display: inline-block;
  font-size: 1rem;
}

.btn-secondary {
  background: var(--neutral-200);
  color: var(--text-primary);
}
.btn-secondary:hover {
  background: var(--neutral-300);
}

.btn-primary {
  background: var(--primary);
  color: white;
  box-shadow: var(--shadow-sm);
}
.btn-primary:hover {
  background: var(--primary-700);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

/* Responsive */
@media (max-width: 768px) {
  .nav-tabs {
    flex-direction: column;
    border-radius: var(--radius-lg);
  }

  .tab {
    border-radius: 0;
    text-align: center;
    font-size: 0.9rem;
    padding: 0.8rem 1rem;
  }

  .tab:first-child {
    border-top-left-radius: var(--radius-lg);
    border-top-right-radius: var(--radius-lg);
  }

  .tab:last-child {
    border-bottom-left-radius: var(--radius-lg);
    border-bottom-right-radius: var(--radius-lg);
  }

  .formulas-grid,
  .examples-grid,
  .comparison-cards,
  .insights-grid,
  .branches,
  .raw-data-tables {
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

  .calc-step {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .calc-desc {
    text-align: left;
    margin-left: 0;
  }

  .formula-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .formula-equation {
    text-align: left;
  }

  .variables-grid {
    grid-template-columns: 1fr;
  }
}
</style>
