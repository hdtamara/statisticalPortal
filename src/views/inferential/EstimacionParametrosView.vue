<template>
  <div class="estimacion-parametros-view">
    <div class="container">
      <div class="hero">
        <h1>Estimación de Parámetros e Intervalos de Confianza</h1>
        <p>
          La estimación estadística nos permite hacer inferencias sobre parámetros poblacionales
          desconocidos usando información de una muestra. Aprende la diferencia entre estimación
          puntual e intervalos de confianza, y cómo construir intervalos para la media poblacional.
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

      <!-- INTRODUCCIÓN A LA ESTIMACIÓN -->
      <div v-if="activeTab === 'introduccion'" class="content-section">
        <h2>Introducción a la Estimación</h2>
        <p>
          En estadística inferencial, rara vez conocemos los parámetros poblacionales exactos (como
          μ, σ, p). La estimación nos permite usar datos muestrales para hacer conjeturas educadas
          sobre estos valores desconocidos.
        </p>

        <div class="theory-content">
          <div class="definition-box">
            <h3>¿Qué es un Parámetro vs. un Estadístico?</h3>
            <div class="parameter-comparison">
              <div class="parameter-card">
                <h4>📊 Parámetro</h4>
                <p>
                  <strong>Definición:</strong> Valor numérico que describe una característica de
                  toda la población.
                </p>
                <p><strong>Ejemplos:</strong></p>
                <ul>
                  <li>μ (mu): Media poblacional</li>
                  <li>σ (sigma): Desviación estándar poblacional</li>
                  <li>p: Proporción poblacional</li>
                </ul>
                <p><strong>Característica:</strong> Generalmente desconocido y fijo</p>
              </div>

              <div class="parameter-card">
                <h4>🎯 Estadístico</h4>
                <p>
                  <strong>Definición:</strong> Valor numérico calculado a partir de datos
                  muestrales.
                </p>
                <p><strong>Ejemplos:</strong></p>
                <ul>
                  <li>x̄ (x-barra): Media muestral</li>
                  <li>s: Desviación estándar muestral</li>
                  <li>p̂ (p-sombrero): Proporción muestral</li>
                </ul>
                <p><strong>Característica:</strong> Conocido y variable (cambia entre muestras)</p>
              </div>
            </div>
          </div>

          <div class="estimation-types">
            <h3>Tipos de Estimación</h3>
            <div class="estimation-cards">
              <div class="estimation-card">
                <h4>🎯 Estimación Puntual</h4>
                <p>
                  <strong>¿Qué es?</strong> Un solo valor que se usa como la "mejor conjetura" del
                  parámetro poblacional.
                </p>
                <p><strong>Ejemplo:</strong> Si x̄ = 85, entonces estimamos que μ = 85</p>
                <div class="pros-cons">
                  <div class="pros">
                    <h5>✅ Ventajas:</h5>
                    <ul>
                      <li>Simple y directo</li>
                      <li>Fácil de comunicar</li>
                      <li>Útil para decisiones rápidas</li>
                    </ul>
                  </div>
                  <div class="cons">
                    <h5>❌ Desventajas:</h5>
                    <ul>
                      <li>No indica incertidumbre</li>
                      <li>Probabilidad de ser exacto es prácticamente cero</li>
                      <li>No proporciona margen de error</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="estimation-card">
                <h4>📏 Estimación por Intervalos</h4>
                <p>
                  <strong>¿Qué es?</strong> Un rango de valores plausibles para el parámetro
                  poblacional, junto con un nivel de confianza.
                </p>
                <p><strong>Ejemplo:</strong> "Estamos 95% seguros de que μ está entre 82 y 88"</p>
                <div class="pros-cons">
                  <div class="pros">
                    <h5>✅ Ventajas:</h5>
                    <ul>
                      <li>Incluye medida de incertidumbre</li>
                      <li>Más realista y honesto</li>
                      <li>Permite evaluar precisión</li>
                    </ul>
                  </div>
                  <div class="cons">
                    <h5>❌ Desventajas:</h5>
                    <ul>
                      <li>Más complejo de interpretar</li>
                      <li>Requiere elegir nivel de confianza</li>
                      <li>Puede ser menos preciso para decisiones</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="estimator-properties">
            <h3>Propiedades Deseables de un Estimador</h3>
            <div class="properties-grid">
              <div class="property-card">
                <h4>🎯 Insesgado (Unbiased)</h4>
                <p>El valor esperado del estimador es igual al parámetro que estima.</p>
                <p><strong>Matemáticamente:</strong></p>
                <div class="formula-display">
                  <div
                    class="katex-equation"
                    v-html="renderLatex('E[\\hat{\\theta}] = \\theta')"
                  ></div>
                </div>
                <p><strong>Ejemplo:</strong> x̄ es un estimador insesgado de μ</p>
              </div>

              <div class="property-card">
                <h4>🎪 Consistente</h4>
                <p>
                  A medida que aumenta el tamaño de la muestra, el estimador se acerca al parámetro
                  verdadero.
                </p>
                <p><strong>Ejemplo:</strong></p>
                <div class="formula-display">
                  <div
                    class="katex-equation"
                    v-html="renderLatex('n \\to \\infty \\implies \\bar{x} \\to \\mu')"
                  ></div>
                </div>
              </div>

              <div class="property-card">
                <h4>⚡ Eficiente</h4>
                <p>Entre todos los estimadores insesgados, tiene la menor varianza.</p>
                <p><strong>Significa:</strong> Menor dispersión = mayor precisión</p>
              </div>
            </div>
          </div>
        </div>

        <div class="examples-section">
          <h3>Ejemplo Práctico: Estimación Puntual</h3>
          <div class="example-scenario">
            <p>
              <strong>Escenario:</strong> Una empresa quiere estimar el tiempo promedio que sus
              empleados tardan en completar una tarea específica.
            </p>

            <div class="example-details">
              <h4>Datos de la muestra:</h4>
              <ul>
                <li>Tamaño de muestra: n = 30 empleados</li>
                <li>Media muestral: x̄ = 24.5 minutos</li>
                <li>Desviación estándar muestral: s = 4.2 minutos</li>
              </ul>

              <h4>Estimaciones puntuales:</h4>
              <div class="estimation-results">
                <div class="result-item">
                  <span class="parameter">Media poblacional (μ):</span>
                  <span class="estimate">≈ 24.5 minutos</span>
                </div>
                <div class="result-item">
                  <span class="parameter">Desviación estándar poblacional (σ):</span>
                  <span class="estimate">≈ 4.2 minutos</span>
                </div>
              </div>

              <div class="interpretation">
                <h4>Interpretación:</h4>
                <p>
                  Basándose en esta muestra, estimamos que el tiempo promedio poblacional para
                  completar la tarea es de 24.5 minutos. Sin embargo, esta es solo nuestra "mejor
                  conjetura" - el valor real podría ser diferente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- INTERVALOS DE CONFIANZA -->
      <div v-if="activeTab === 'intervalos'" class="content-section">
        <h2>Intervalos de Confianza para la Media Poblacional</h2>
        <p>
          Un intervalo de confianza proporciona un rango de valores plausibles para un parámetro
          poblacional, junto con un nivel de confianza que indica qué tan seguros estamos de que el
          parámetro verdadero esté dentro de ese rango.
        </p>

        <div class="theory-content">
          <div class="definition-box">
            <h3>¿Qué significa "95% de confianza"?</h3>
            <p>
              Si construyéramos 100 intervalos de confianza del 95% usando diferentes muestras de la
              misma población, esperaríamos que aproximadamente 95 de esos intervalos contengan el
              parámetro poblacional verdadero.
            </p>

            <div class="confidence-visualization">
              <h4>Visualización Conceptual:</h4>
              <div class="intervals-demo">
                <div class="interval-line correct">Intervalo 1: [22.1, 26.9] ✓</div>
                <div class="interval-line correct">Intervalo 2: [23.4, 28.2] ✓</div>
                <div class="interval-line correct">Intervalo 3: [21.8, 26.6] ✓</div>
                <div class="interval-line incorrect">Intervalo 4: [26.7, 31.5] ✗</div>
                <div class="interval-line correct">Intervalo 5: [22.9, 27.7] ✓</div>
                <div class="true-mean">μ verdadero = 25.0</div>
              </div>
              <p class="visualization-note">
                En este ejemplo, 4 de 5 intervalos (80%) contienen μ = 25.0. Con más intervalos,
                esperaríamos que aproximadamente 95% lo contengan.
              </p>
            </div>
          </div>

          <div class="confidence-levels">
            <h3>Niveles de Confianza Comunes</h3>
            <div class="levels-grid">
              <div class="level-card">
                <h4>90% de Confianza</h4>
                <p><strong>α = 0.10</strong></p>
                <p>Intervalo más estrecho, menos certeza</p>
                <p><strong>Uso:</strong> Estimaciones preliminares</p>
              </div>

              <div class="level-card popular">
                <h4>95% de Confianza</h4>
                <p><strong>α = 0.05</strong></p>
                <p>Balance entre precisión y certeza</p>
                <p><strong>Uso:</strong> Estándar en investigación</p>
              </div>

              <div class="level-card">
                <h4>99% de Confianza</h4>
                <p><strong>α = 0.01</strong></p>
                <p>Intervalo más amplio, mayor certeza</p>
                <p><strong>Uso:</strong> Decisiones críticas</p>
              </div>
            </div>
          </div>

          <div class="interval-components">
            <h3>Componentes de un Intervalo de Confianza</h3>
            <div class="formula-section">
              <div class="formula-container">
                <div class="formula">
                  <div
                    class="katex-equation"
                    v-html="
                      renderLatex('\\text{IC} = \\text{Estimador} \\pm \\text{Margen de Error}')
                    "
                  ></div>
                </div>
                <div class="formula-detailed">
                  <div
                    class="katex-equation"
                    v-html="
                      renderLatex(
                        '\\text{IC} = \\bar{x} \\pm (\\text{Valor Crítico} \\times \\text{Error Estándar})',
                      )
                    "
                  ></div>
                </div>
              </div>
            </div>

            <div class="components-explanation">
              <div class="component-card">
                <h4>📊 Estimador Puntual</h4>
                <p>El centro del intervalo (x̄)</p>
                <p>Nuestra "mejor conjetura" del parámetro</p>
              </div>

              <div class="component-card">
                <h4>🎯 Valor Crítico</h4>
                <p>Depende del nivel de confianza y la distribución</p>
                <p>Z para σ conocida, t para σ desconocida</p>
              </div>

              <div class="component-card">
                <h4>📏 Error Estándar</h4>
                <p>Mide la variabilidad del estimador</p>
                <p>σ/√n o s/√n</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- CASO SIGMA CONOCIDA -->
      <div v-if="activeTab === 'sigma-conocida'" class="content-section">
        <h2>Intervalos de Confianza: σ Conocida (Distribución Z)</h2>
        <p>
          Cuando conocemos la desviación estándar poblacional (σ), usamos la distribución normal
          estándar (Z) para construir intervalos de confianza.
        </p>

        <div class="theory-content">
          <div class="formula-section">
            <h3>Fórmula del Intervalo de Confianza (σ conocida)</h3>
            <div class="formula-container">
              <div class="formula">
                <div
                  class="katex-equation"
                  v-html="
                    renderLatex(
                      '\\text{IC} = \\bar{x} \\pm Z_{\\alpha/2} \\times \\left(\\frac{\\sigma}{\\sqrt{n}}\\right)',
                    )
                  "
                ></div>
              </div>
              <div class="formula-explanation">
                <p>Donde:</p>
                <ul>
                  <li>
                    <strong><span v-html="renderLatex('\\bar{x}')"></span></strong> = Media muestral
                  </li>
                  <li>
                    <strong><span v-html="renderLatex('Z_{\\alpha/2}')"></span></strong> = Valor
                    crítico de Z para el nivel de confianza deseado
                  </li>
                  <li>
                    <strong><span v-html="renderLatex('\\sigma')"></span></strong> = Desviación
                    estándar poblacional (conocida)
                  </li>
                  <li>
                    <strong><span v-html="renderLatex('n')"></span></strong> = Tamaño de la muestra
                  </li>
                  <li>
                    <strong
                      ><span v-html="renderLatex('\\frac{\\sigma}{\\sqrt{n}}')"></span
                    ></strong>
                    = Error estándar de la media
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="critical-values">
            <h3>Valores Críticos de Z Más Comunes</h3>
            <table class="values-table">
              <thead>
                <tr>
                  <th>Nivel de Confianza</th>
                  <th><span v-html="renderLatex('\\alpha')"></span></th>
                  <th><span v-html="renderLatex('\\alpha/2')"></span></th>
                  <th><span v-html="renderLatex('Z_{\\alpha/2}')"></span></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>90%</td>
                  <td>0.10</td>
                  <td>0.05</td>
                  <td>1.645</td>
                </tr>
                <tr class="highlighted">
                  <td>95%</td>
                  <td>0.05</td>
                  <td>0.025</td>
                  <td>1.96</td>
                </tr>
                <tr>
                  <td>99%</td>
                  <td>0.01</td>
                  <td>0.005</td>
                  <td>2.576</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="interactive-section">
            <h3>Calculadora de Intervalos de Confianza (σ conocida)</h3>

            <div class="calculator-controls">
              <div class="control-group">
                <label for="z-sample-mean">Media Muestral (x̄):</label>
                <input type="number" id="z-sample-mean" v-model="zSampleMean" step="0.1" />
              </div>

              <div class="control-group">
                <label for="z-sigma">Desviación Estándar Poblacional (σ):</label>
                <input type="number" id="z-sigma" v-model="zSigma" step="0.1" min="0.1" />
              </div>

              <div class="control-group">
                <label for="z-sample-size">Tamaño de Muestra (n):</label>
                <input type="number" id="z-sample-size" v-model="zSampleSize" min="1" />
              </div>

              <div class="control-group">
                <label for="z-confidence">Nivel de Confianza:</label>
                <select id="z-confidence" v-model="zConfidence">
                  <option value="90">90%</option>
                  <option value="95">95%</option>
                  <option value="99">99%</option>
                </select>
              </div>
            </div>

            <div class="calculation-results">
              <div class="result-card">
                <h4>Resultados del Intervalo de Confianza:</h4>
                <div class="result-item">
                  <span class="result-label">Error Estándar:</span>
                  <span class="result-value">{{ standardError.toFixed(4) }}</span>
                </div>
                <div class="result-item">
                  <span class="result-label"
                    >Valor Crítico (<span v-html="renderLatex('Z_{\\alpha/2}')"></span>):</span
                  >
                  <span class="result-value">{{ criticalValue.toFixed(3) }}</span>
                </div>
                <div class="result-item">
                  <span class="result-label">Margen de Error:</span>
                  <span class="result-value">{{ marginOfError.toFixed(4) }}</span>
                </div>
                <div class="result-item interval-result">
                  <span class="result-label">Intervalo de Confianza {{ zConfidence }}%:</span>
                  <span class="result-value"
                    >[{{ lowerBound.toFixed(3) }}, {{ upperBound.toFixed(3) }}]</span
                  >
                </div>
                <div class="interpretation">
                  <p>
                    <strong>Interpretación:</strong> Estamos {{ zConfidence }}% seguros de que la
                    media poblacional (μ) está entre {{ lowerBound.toFixed(3) }} y
                    {{ upperBound.toFixed(3) }}.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="examples-section">
          <h3>Ejemplo Paso a Paso (σ conocida)</h3>
          <div class="example-scenario">
            <p>
              <strong>Problema:</strong> Una máquina llena bolsas de café. Se sabe que la desviación
              estándar del peso es σ = 2.5 gramos. Una muestra de 36 bolsas tiene un peso promedio
              de 250.3 gramos. Construye un intervalo de confianza del 95% para el peso promedio
              poblacional.
            </p>

            <div class="step-by-step">
              <div class="step">
                <h4>Paso 1: Identificar los datos</h4>
                <ul>
                  <li>x̄ = 250.3 gramos</li>
                  <li>σ = 2.5 gramos (conocida)</li>
                  <li>n = 36 bolsas</li>
                  <li>Nivel de confianza = 95%</li>
                </ul>
              </div>

              <div class="step">
                <h4>Paso 2: Encontrar el valor crítico</h4>
                <p>Para 95% de confianza: Z<sub>α/2</sub> = Z<sub>0.025</sub> = 1.96</p>
              </div>

              <div class="step">
                <h4>Paso 3: Calcular el error estándar</h4>
                <p>Error estándar = σ/√n = 2.5/√36 = 2.5/6 = 0.417</p>
              </div>

              <div class="step">
                <h4>Paso 4: Calcular el margen de error</h4>
                <p>Margen de error = Z<sub>α/2</sub> × Error estándar = 1.96 × 0.417 = 0.817</p>
              </div>

              <div class="step">
                <h4>Paso 5: Construir el intervalo</h4>
                <p>IC = 250.3 ± 0.817 = [249.483, 251.117]</p>
              </div>

              <div class="step conclusion">
                <h4>Conclusión:</h4>
                <p>
                  Estamos 95% seguros de que el peso promedio poblacional de las bolsas de café está
                  entre 249.48 y 251.12 gramos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- CASO SIGMA DESCONOCIDA -->
      <div v-if="activeTab === 'sigma-desconocida'" class="content-section">
        <h2>Intervalos de Confianza: σ Desconocida (Distribución t)</h2>
        <p>
          En la mayoría de situaciones reales, no conocemos σ. En estos casos, la estimamos con s
          (desviación estándar muestral) y usamos la distribución t de Student.
        </p>

        <div class="theory-content">
          <div class="formula-section">
            <h3>Fórmula del Intervalo de Confianza (σ desconocida)</h3>
            <div class="formula-container">
              <div class="formula">
                <div
                  class="katex-equation"
                  v-html="
                    renderLatex(
                      '\\text{IC} = \\bar{x} \\pm t_{\\alpha/2,\\text{gl}} \\times \\left(\\frac{s}{\\sqrt{n}}\\right)',
                    )
                  "
                ></div>
              </div>
              <div class="formula-explanation">
                <p>Donde:</p>
                <ul>
                  <li>
                    <strong><span v-html="renderLatex('\\bar{x}')"></span></strong> = Media muestral
                  </li>
                  <li>
                    <strong><span v-html="renderLatex('t_{\\alpha/2,\\text{gl}}')"></span></strong>
                    = Valor crítico de t con gl = n-1 grados de libertad
                  </li>
                  <li>
                    <strong><span v-html="renderLatex('s')"></span></strong> = Desviación estándar
                    muestral
                  </li>
                  <li>
                    <strong><span v-html="renderLatex('n')"></span></strong> = Tamaño de la muestra
                  </li>
                  <li>
                    <strong><span v-html="renderLatex('\\text{gl} = n-1')"></span></strong> = Grados
                    de libertad
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="t-distribution-info">
            <h3>¿Por qué usar la distribución t?</h3>
            <div class="reason-cards">
              <div class="reason-card">
                <h4>🎯 Incertidumbre Adicional</h4>
                <p>
                  Al usar s en lugar de σ, introducimos incertidumbre adicional que debe ser
                  considerada.
                </p>
              </div>

              <div class="reason-card">
                <h4>📊 Colas Más Pesadas</h4>
                <p>
                  La distribución t tiene colas más pesadas que la normal, reflejando mayor
                  variabilidad.
                </p>
              </div>

              <div class="reason-card">
                <h4>🔄 Converge a Normal</h4>
                <p>Con muestras grandes (n ≥ 30), t se aproxima a la distribución normal.</p>
              </div>
            </div>
          </div>

          <div class="interactive-section">
            <h3>Calculadora de Intervalos de Confianza (σ desconocida)</h3>

            <div class="calculator-controls">
              <div class="control-group">
                <label for="t-sample-mean">Media Muestral (x̄):</label>
                <input type="number" id="t-sample-mean" v-model="tSampleMean" step="0.1" />
              </div>

              <div class="control-group">
                <label for="t-sample-std">Desviación Estándar Muestral (s):</label>
                <input type="number" id="t-sample-std" v-model="tSampleStd" step="0.1" min="0.1" />
              </div>

              <div class="control-group">
                <label for="t-sample-size">Tamaño de Muestra (n):</label>
                <input type="number" id="t-sample-size" v-model="tSampleSize" min="2" />
              </div>

              <div class="control-group">
                <label for="t-confidence">Nivel de Confianza:</label>
                <select id="t-confidence" v-model="tConfidence">
                  <option value="90">90%</option>
                  <option value="95">95%</option>
                  <option value="99">99%</option>
                </select>
              </div>
            </div>

            <div class="calculation-results">
              <div class="result-card">
                <h4>Resultados del Intervalo de Confianza (t):</h4>
                <div class="result-item">
                  <span class="result-label">Grados de Libertad (gl):</span>
                  <span class="result-value">{{ degreesOfFreedom }}</span>
                </div>
                <div class="result-item">
                  <span class="result-label">Error Estándar:</span>
                  <span class="result-value">{{ tStandardError.toFixed(4) }}</span>
                </div>
                <div class="result-item">
                  <span class="result-label"
                    >Valor Crítico (<span v-html="renderLatex('t_{\\alpha/2}')"></span>):</span
                  >
                  <span class="result-value">{{ tCriticalValue.toFixed(3) }}</span>
                </div>
                <div class="result-item">
                  <span class="result-label">Margen de Error:</span>
                  <span class="result-value">{{ tMarginOfError.toFixed(4) }}</span>
                </div>
                <div class="result-item interval-result">
                  <span class="result-label">Intervalo de Confianza {{ tConfidence }}%:</span>
                  <span class="result-value"
                    >[{{ tLowerBound.toFixed(3) }}, {{ tUpperBound.toFixed(3) }}]</span
                  >
                </div>
                <div class="interpretation">
                  <p>
                    <strong>Interpretación:</strong> Estamos {{ tConfidence }}% seguros de que la
                    media poblacional (μ) está entre {{ tLowerBound.toFixed(3) }} y
                    {{ tUpperBound.toFixed(3) }}.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="examples-section">
          <h3>Ejemplo Paso a Paso (σ desconocida)</h3>
          <div class="example-scenario">
            <p>
              <strong>Problema:</strong> Un investigador quiere estimar el tiempo promedio de
              reacción en una prueba cognitiva. Toma una muestra de 20 participantes y obtiene x̄ =
              0.85 segundos con s = 0.12 segundos. Construye un intervalo de confianza del 95%.
            </p>

            <div class="step-by-step">
              <div class="step">
                <h4>Paso 1: Identificar los datos</h4>
                <ul>
                  <li>x̄ = 0.85 segundos</li>
                  <li>s = 0.12 segundos</li>
                  <li>n = 20 participantes</li>
                  <li>Nivel de confianza = 95%</li>
                  <li>gl = n - 1 = 20 - 1 = 19</li>
                </ul>
              </div>

              <div class="step">
                <h4>Paso 2: Encontrar el valor crítico</h4>
                <p>Para 95% de confianza con gl = 19: t<sub>0.025,19</sub> = 2.093</p>

                <div class="tip-critical-value">
                  <h5>💡 Tip: Cómo calcular el valor crítico</h5>
                  <div class="tip-content">
                    <p>
                      <strong>¿Por qué 0.975?</strong> Para intervalos de confianza de dos colas,
                      usamos 1 - α/2, donde α es el nivel de significancia.
                    </p>
                    <ul>
                      <li>90% confianza: α = 0.10 → 1 - 0.05 = 0.95</li>
                      <li>95% confianza: α = 0.05 → 1 - 0.025 = 0.975</li>
                      <li>99% confianza: α = 0.01 → 1 - 0.005 = 0.995</li>
                    </ul>

                    <p><strong>En Python (usando scipy):</strong></p>
                    <pre><code>from scipy.stats import t

# Para 95% de confianza con 19 grados de libertad
valor_critico = t.ppf(0.975, 19)
print(f"Valor crítico: {valor_critico:.3f}")  # 2.093

# Para otros niveles de confianza:
# 90%: t.ppf(0.95, 19)
# 99%: t.ppf(0.995, 19)</code></pre>

                    <p><strong>En Excel:</strong></p>
                    <p>
                      Usa la función <code>=INV.T.2C(α; grados_libertad)</code> donde α es el nivel
                      de significancia:
                    </p>
                    <ul>
                      <li>90% confianza: <code>=INV.T.2C(0.10; 19)</code></li>
                      <li>95% confianza: <code>=INV.T.2C(0.05; 19)</code></li>
                      <li>99% confianza: <code>=INV.T.2C(0.01; 19)</code></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="step">
                <h4>Paso 3: Calcular el error estándar</h4>
                <p>Error estándar = s/√n = 0.12/√20 = 0.12/4.472 = 0.0268</p>
              </div>

              <div class="step">
                <h4>Paso 4: Calcular el margen de error</h4>
                <p>
                  Margen de error = t<sub>α/2,gl</sub> × Error estándar = 2.093 × 0.0268 = 0.0561
                </p>
              </div>

              <div class="step">
                <h4>Paso 5: Construir el intervalo</h4>
                <p>IC = 0.85 ± 0.0561 = [0.794, 0.906]</p>
              </div>

              <div class="step conclusion">
                <h4>Conclusión:</h4>
                <p>
                  Estamos 95% seguros de que el tiempo promedio de reacción poblacional está entre
                  0.794 y 0.906 segundos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- COMPARACIÓN Y APLICACIONES -->
      <div v-if="activeTab === 'aplicaciones'" class="content-section">
        <h2>Comparación y Aplicaciones Prácticas</h2>

        <div class="comparison-section">
          <h3>¿Cuándo usar cada método?</h3>
          <div class="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>Aspecto</th>
                  <th>σ Conocida (Z)</th>
                  <th>σ Desconocida (t)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Condición</strong></td>
                  <td>σ es conocida</td>
                  <td>σ es desconocida (caso típico)</td>
                </tr>
                <tr>
                  <td><strong>Distribución</strong></td>
                  <td>Normal estándar (Z)</td>
                  <td>t de Student</td>
                </tr>
                <tr>
                  <td><strong>Parámetros</strong></td>
                  <td>Solo nivel de confianza</td>
                  <td>Nivel de confianza + grados de libertad</td>
                </tr>
                <tr>
                  <td><strong>Amplitud del intervalo</strong></td>
                  <td>Más estrecho</td>
                  <td>Más amplio (especialmente con n pequeño)</td>
                </tr>
                <tr>
                  <td><strong>Casos típicos</strong></td>
                  <td>Control de calidad, procesos establecidos</td>
                  <td>Investigación, estudios exploratorios</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="factors-affecting">
          <h3>Factores que Afectan la Amplitud del Intervalo</h3>
          <div class="factors-grid">
            <div class="factor-card">
              <h4>📏 Tamaño de Muestra (n)</h4>
              <p><strong>Efecto:</strong> ↑ n → ↓ amplitud del intervalo</p>
              <p><strong>Razón:</strong> Mayor n reduce el error estándar</p>
              <div class="factor-demo">
                <div class="demo-item">n = 10: IC más amplio</div>
                <div class="demo-item">n = 100: IC más estrecho</div>
              </div>
            </div>

            <div class="factor-card">
              <h4>🎯 Nivel de Confianza</h4>
              <p><strong>Efecto:</strong> ↑ confianza → ↑ amplitud del intervalo</p>
              <p><strong>Razón:</strong> Mayor certeza requiere intervalo más amplio</p>
              <div class="factor-demo">
                <div class="demo-item">90%: IC más estrecho</div>
                <div class="demo-item">99%: IC más amplio</div>
              </div>
            </div>

            <div class="factor-card">
              <h4>📊 Variabilidad (σ o s)</h4>
              <p><strong>Efecto:</strong> ↑ variabilidad → ↑ amplitud del intervalo</p>
              <p><strong>Razón:</strong> Más dispersión = más incertidumbre</p>
              <div class="factor-demo">
                <div class="demo-item">Baja variabilidad: IC estrecho</div>
                <div class="demo-item">Alta variabilidad: IC amplio</div>
              </div>
            </div>
          </div>
        </div>

        <div class="practical-applications">
          <h3>Aplicaciones Prácticas en Diferentes Campos</h3>
          <div class="applications-grid">
            <div class="application-card">
              <h4>🏥 Medicina y Salud</h4>
              <ul>
                <li>Efectividad de tratamientos</li>
                <li>Tiempo promedio de recuperación</li>
                <li>Niveles de biomarcadores</li>
                <li>Dosis óptimas de medicamentos</li>
              </ul>
              <p>
                <strong>Ejemplo:</strong> "El tiempo promedio de recuperación está entre 7.2 y 9.8
                días con 95% de confianza"
              </p>
            </div>

            <div class="application-card">
              <h4>🏭 Control de Calidad</h4>
              <ul>
                <li>Peso promedio de productos</li>
                <li>Dimensiones de piezas manufacturadas</li>
                <li>Tiempo de vida útil</li>
                <li>Resistencia de materiales</li>
              </ul>
              <p>
                <strong>Ejemplo:</strong> "El peso promedio de las latas está entre 349.2 y 350.8
                gramos"
              </p>
            </div>

            <div class="application-card">
              <h4>📊 Investigación de Mercados</h4>
              <ul>
                <li>Satisfacción del cliente</li>
                <li>Tiempo promedio de compra</li>
                <li>Gasto promedio por cliente</li>
                <li>Efectividad de campañas</li>
              </ul>
              <p>
                <strong>Ejemplo:</strong> "El gasto promedio por cliente está entre $45.30 y $52.70"
              </p>
            </div>

            <div class="application-card">
              <h4>🎓 Educación</h4>
              <ul>
                <li>Rendimiento académico promedio</li>
                <li>Tiempo de estudio efectivo</li>
                <li>Efectividad de métodos de enseñanza</li>
                <li>Tasas de graduación</li>
              </ul>
              <p>
                <strong>Ejemplo:</strong> "La calificación promedio está entre 78.5 y 83.2 puntos"
              </p>
            </div>
          </div>
        </div>

        <div class="interpretation-guide">
          <h3>Guía para Interpretar Intervalos de Confianza</h3>
          <div class="interpretation-dos-donts">
            <div class="dos">
              <h4>✅ Interpretaciones Correctas:</h4>
              <ul>
                <li>"Estamos 95% seguros de que μ está entre a y b"</li>
                <li>
                  "Si repitiéramos el estudio muchas veces, 95% de los intervalos contendrían μ"
                </li>
                <li>"El intervalo [a, b] es compatible con los datos observados"</li>
                <li>"Valores fuera del intervalo son menos plausibles"</li>
              </ul>
            </div>

            <div class="donts">
              <h4>❌ Interpretaciones Incorrectas:</h4>
              <ul>
                <li>"Hay 95% de probabilidad de que μ esté entre a y b"</li>
                <li>"95% de los datos están entre a y b"</li>
                <li>"μ cambia y está 95% del tiempo entre a y b"</li>
                <li>"El intervalo contiene 95% de las medias muestrales"</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="navigation-buttons">
        <router-link to="/inferencial" class="btn btn-secondary">
          Volver a Estadística Inferencial
        </router-link>
        <router-link to="/inferencial/distribuciones-z-t" class="btn btn-primary">
          Ver Distribuciones Z y t
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import katex from 'katex'
import 'katex/dist/katex.min.css'

const tabs = [
  { id: 'introduccion', label: 'Introducción' },
  { id: 'intervalos', label: 'Intervalos de Confianza' },
  { id: 'sigma-conocida', label: 'σ Conocida (Z)' },
  { id: 'sigma-desconocida', label: 'σ Desconocida (t)' },
  { id: 'aplicaciones', label: 'Aplicaciones' },
]

const activeTab = ref('introduccion')

// Variables para calculadora Z (σ conocida)
const zSampleMean = ref(250.3)
const zSigma = ref(2.5)
const zSampleSize = ref(36)
const zConfidence = ref(95)

// Variables para calculadora t (σ desconocida)
const tSampleMean = ref(0.85)
const tSampleStd = ref(0.12)
const tSampleSize = ref(20)
const tConfidence = ref(95)

// Calculadora Z (σ conocida)
const standardError = computed(() => {
  return zSigma.value / Math.sqrt(zSampleSize.value)
})

const criticalValue = computed(() => {
  const confidence = zConfidence.value
  if (confidence === 90) return 1.645
  if (confidence === 95) return 1.96
  if (confidence === 99) return 2.576
  return 1.96
})

const marginOfError = computed(() => {
  return criticalValue.value * standardError.value
})

const lowerBound = computed(() => {
  return zSampleMean.value - marginOfError.value
})

const upperBound = computed(() => {
  return zSampleMean.value + marginOfError.value
})

// Calculadora t (σ desconocida)
const degreesOfFreedom = computed(() => {
  return tSampleSize.value - 1
})

const tStandardError = computed(() => {
  return tSampleStd.value / Math.sqrt(tSampleSize.value)
})

const tCriticalValue = computed(() => {
  // Valores precisos de t para diferentes niveles de confianza y grados de libertad
  const df = degreesOfFreedom.value
  const confidence = tConfidence.value

  // Tabla de valores críticos de t para α/2 (cola superior)
  const tTable = {
    90: {
      // 90% confianza (α = 0.10, α/2 = 0.05)
      1: 6.314,
      2: 2.92,
      3: 2.353,
      4: 2.132,
      5: 2.015,
      6: 1.943,
      7: 1.895,
      8: 1.86,
      9: 1.833,
      10: 1.812,
      11: 1.796,
      12: 1.782,
      13: 1.771,
      14: 1.761,
      15: 1.753,
      16: 1.746,
      17: 1.74,
      18: 1.734,
      19: 1.729,
      20: 1.725,
      21: 1.721,
      22: 1.717,
      23: 1.714,
      24: 1.711,
      25: 1.708,
      26: 1.706,
      27: 1.703,
      28: 1.701,
      29: 1.699,
      30: 1.697,
    },
    95: {
      // 95% confianza (α = 0.05, α/2 = 0.025)
      1: 12.706,
      2: 4.303,
      3: 3.182,
      4: 2.776,
      5: 2.571,
      6: 2.447,
      7: 2.365,
      8: 2.306,
      9: 2.262,
      10: 2.228,
      11: 2.201,
      12: 2.179,
      13: 2.16,
      14: 2.145,
      15: 2.131,
      16: 2.12,
      17: 2.11,
      18: 2.101,
      19: 2.093,
      20: 2.086,
      21: 2.08,
      22: 2.074,
      23: 2.069,
      24: 2.064,
      25: 2.06,
      26: 2.056,
      27: 2.052,
      28: 2.048,
      29: 2.045,
      30: 2.042,
    },
    99: {
      // 99% confianza (α = 0.01, α/2 = 0.005)
      1: 63.657,
      2: 9.925,
      3: 5.841,
      4: 4.604,
      5: 4.032,
      6: 3.707,
      7: 3.5,
      8: 3.355,
      9: 3.25,
      10: 3.169,
      11: 3.106,
      12: 3.055,
      13: 3.012,
      14: 2.977,
      15: 2.947,
      16: 2.921,
      17: 2.898,
      18: 2.878,
      19: 2.861,
      20: 2.845,
      21: 2.831,
      22: 2.819,
      23: 2.807,
      24: 2.797,
      25: 2.787,
      26: 2.779,
      27: 2.771,
      28: 2.763,
      29: 2.756,
      30: 2.75,
    },
  }

  // Para df > 30, usar aproximación normal
  if (df > 30) {
    if (confidence === 90) return 1.645
    if (confidence === 95) return 1.96
    if (confidence === 99) return 2.576
  }

  // Retornar valor de la tabla o aproximación para df <= 30
  const confidenceTable = tTable[confidence as keyof typeof tTable]
  return confidenceTable?.[df as keyof typeof confidenceTable] || 2.086 // Default para 95% con df moderado
})

const tMarginOfError = computed(() => {
  return tCriticalValue.value * tStandardError.value
})

const tLowerBound = computed(() => {
  return tSampleMean.value - tMarginOfError.value
})

const tUpperBound = computed(() => {
  return tSampleMean.value + tMarginOfError.value
})

// Función para renderizar LaTeX
const renderLatex = (latex: string) => {
  try {
    return katex.renderToString(latex, {
      throwOnError: false,
      displayMode: false,
      macros: {
        '\\RR': '\\mathbb{R}',
        '\\NN': '\\mathbb{N}',
        '\\ZZ': '\\mathbb{Z}',
        '\\QQ': '\\mathbb{Q}',
        '\\CC': '\\mathbb{C}',
      },
    })
  } catch (error) {
    console.error('Error rendering LaTeX:', error)
    return latex
  }
}
</script>

<style scoped>
@import '@/assets/styles/main.css';

.estimacion-parametros-view {
  padding-bottom: var(--spacing-2xl);
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

/* Definition Box */
.definition-box {
  background: var(--primary-50);
  padding: var(--spacing-lg);
  border-radius: var(--radius-md);
  border-left: 4px solid var(--primary);
  margin-bottom: var(--spacing-xl);
}
.definition-box h3 {
  color: var(--primary-800);
  margin-bottom: var(--spacing-md);
}

/* Cards & Grids */
.parameter-comparison,
.estimation-cards,
.properties-grid,
.levels-grid,
.components-explanation,
.reason-cards,
.factors-grid,
.applications-grid,
.interpretation-dos-donts {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--spacing-lg);
  margin-top: var(--spacing-lg);
}

.parameter-card,
.estimation-card,
.property-card,
.level-card,
.component-card,
.reason-card,
.factor-card,
.application-card {
  background: var(--surface);
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border);
  box-shadow: var(--shadow-sm);
  transition: var(--transition);
}

.parameter-card:hover,
.estimation-card:hover,
.property-card:hover,
.level-card:hover,
.component-card:hover,
.reason-card:hover,
.factor-card:hover,
.application-card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
}

.parameter-card h4,
.estimation-card h4,
.property-card h4,
.level-card h4,
.component-card h4,
.reason-card h4,
.factor-card h4,
.application-card h4 {
  color: var(--primary);
  margin-bottom: var(--spacing-md);
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

/* Specific Card Styles */
.level-card.popular {
  border: 2px solid var(--primary);
  background: var(--primary-50);
}

.factor-card {
  border-left: 4px solid var(--accent);
}
.factor-card h4 {
  color: var(--accent);
}

.application-card {
  border-left: 4px solid var(--success);
}
.application-card h4 {
  color: var(--success);
}

/* Pros & Cons */
.pros-cons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-md);
  margin-top: var(--spacing-md);
}

.pros,
.cons,
.dos,
.donts {
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
}

.pros,
.dos {
  background: var(--success-50);
  border: 1px solid var(--success-200);
}
.pros h5,
.dos h4 {
  color: var(--success-900);
  margin-bottom: var(--spacing-xs);
}
.pros ul,
.dos ul {
  color: var(--success-800);
  padding-left: 1.2rem;
}

.cons,
.donts {
  background: var(--error-50);
  border: 1px solid var(--error-200);
}
.cons h5,
.donts h4 {
  color: var(--error-900);
  margin-bottom: var(--spacing-xs);
}
.cons ul,
.donts ul {
  color: var(--error-800);
  padding-left: 1.2rem;
}

/* Formulas */
.formula-section {
  margin: var(--spacing-xl) 0;
}

.formula-container {
  background: var(--surface-variant);
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border);
  text-align: center;
}

.formula {
  background: var(--surface);
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  border: 1px solid var(--border);
  margin-bottom: var(--spacing-md);
  overflow-x: auto;
}

.formula-explanation ul {
  text-align: left;
  margin-top: var(--spacing-md);
  padding-left: 1.5rem;
}
.formula-explanation li {
  margin-bottom: 0.5rem;
}

/* Examples */
.examples-section {
  margin-top: var(--spacing-xl);
}
.example-scenario {
  background: var(--neutral-50);
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border);
}

.estimation-results {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-md);
  margin: var(--spacing-md) 0;
}

.result-item {
  background: var(--surface);
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  border: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
.result-item .parameter,
.result-item .result-label {
  font-weight: 600;
  color: var(--text-secondary);
  font-size: 0.9rem;
}
.result-item .estimate,
.result-item .result-value {
  font-weight: 700;
  color: var(--primary);
  font-size: 1.1rem;
  font-family: 'Fira Code', monospace;
}

.interval-result {
  background: var(--primary-50);
  border-color: var(--primary-200);
}

/* Visualization */
.confidence-visualization {
  background: var(--neutral-900);
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
  color: white;
  margin-top: var(--spacing-lg);
}

.intervals-demo {
  font-family: 'Fira Code', monospace;
  margin: var(--spacing-md) 0;
}

.interval-line {
  margin: 0.5rem 0;
}
.interval-line.correct {
  color: var(--success-400);
}
.interval-line.incorrect {
  color: var(--error-400);
}
.true-mean {
  border-top: 1px dashed var(--neutral-500);
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  color: var(--secondary-400);
}

/* Tables */
.values-table,
.comparison-table {
  width: 100%;
  border-collapse: collapse;
  margin: var(--spacing-lg) 0;
  background: var(--surface);
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border);
}

th,
td {
  padding: var(--spacing-md);
  border: 1px solid var(--border);
  text-align: left;
}

th {
  background: var(--primary-50);
  color: var(--primary-900);
  font-weight: 600;
}

tr.highlighted td {
  background: var(--primary-50);
  font-weight: 600;
}

/* Calculator */
.interactive-section {
  margin-top: var(--spacing-2xl);
}
.calculator-controls {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-md);
  background: var(--surface-variant);
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border);
  margin-bottom: var(--spacing-lg);
}

.control-group label {
  display: block;
  margin-bottom: var(--spacing-xs);
  font-weight: 600;
  color: var(--text-primary);
}

.control-group input,
.control-group select {
  width: 100%;
  padding: 0.6rem;
  border: 1px solid var(--border-dark);
  border-radius: var(--radius-md);
  font-size: 1rem;
}

.result-card {
  background: var(--surface);
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border);
  box-shadow: var(--shadow-sm);
}

/* Steps */
.step-by-step {
  margin-top: var(--spacing-lg);
}
.step {
  background: var(--surface);
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  border-left: 4px solid var(--secondary);
  margin-bottom: var(--spacing-md);
  border: 1px solid var(--border);
  border-left-width: 4px;
}
.step.conclusion {
  border-left-color: var(--success);
  background: var(--success-50);
}

/* Tips */
.tip-critical-value {
  background: var(--warning-50);
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  border-left: 4px solid var(--warning);
  margin-top: var(--spacing-md);
}
.tip-critical-value h5 {
  color: var(--warning-700);
  margin-bottom: var(--spacing-xs);
}
.tip-content pre {
  background: var(--neutral-50);
  padding: var(--spacing-sm);
  border-radius: var(--radius-sm);
  overflow-x: auto;
}
.tip-content code {
  background: var(--neutral-100);
  padding: 0.2rem 0.4rem;
  border-radius: 3px;
  font-family: 'Fira Code', monospace;
}

/* KaTeX */
.katex-equation {
  font-size: 1.2rem;
  overflow-x: auto;
  padding: 0.5rem 0;
}

/* Responsive */
@media (max-width: 768px) {
  .nav-tabs {
    flex-direction: column;
  }
  .calculator-controls {
    grid-template-columns: 1fr;
  }
  .pros-cons {
    grid-template-columns: 1fr;
  }
  .container {
    padding: 0 1rem;
  }
}
</style>
```
