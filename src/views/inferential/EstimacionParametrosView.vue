<template>
  <div class="estimacion-parametros-view">
    <div class="container">
      <div class="hero">
        <h1>Estimación de Parámetros e Intervalos de Confianza</h1>
        <p>
          La estimación estadística nos permite hacer inferencias sobre parámetros poblacionales desconocidos usando información de una muestra.
          Aprende la diferencia entre estimación puntual e intervalos de confianza, y cómo construir intervalos para la media poblacional.
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
        <p>En estadística inferencial, rara vez conocemos los parámetros poblacionales exactos (como μ, σ, p). La estimación nos permite usar datos muestrales para hacer conjeturas educadas sobre estos valores desconocidos.</p>

        <div class="theory-content">
          <div class="definition-box">
            <h3>¿Qué es un Parámetro vs. un Estadístico?</h3>
            <div class="parameter-comparison">
              <div class="parameter-card">
                <h4>📊 Parámetro</h4>
                <p><strong>Definición:</strong> Valor numérico que describe una característica de toda la población.</p>
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
                <p><strong>Definición:</strong> Valor numérico calculado a partir de datos muestrales.</p>
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
                <p><strong>¿Qué es?</strong> Un solo valor que se usa como la "mejor conjetura" del parámetro poblacional.</p>
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
                <p><strong>¿Qué es?</strong> Un rango de valores plausibles para el parámetro poblacional, junto con un nivel de confianza.</p>
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
                  <div class="katex-equation" v-html="renderLatex('E[\\hat{\\theta}] = \\theta')"></div>
                </div>
                <p><strong>Ejemplo:</strong> x̄ es un estimador insesgado de μ</p>
              </div>

              <div class="property-card">
                <h4>🎪 Consistente</h4>
                <p>A medida que aumenta el tamaño de la muestra, el estimador se acerca al parámetro verdadero.</p>
                <p><strong>Ejemplo:</strong></p>
                <div class="formula-display">
                  <div class="katex-equation" v-html="renderLatex('n \\to \\infty \\implies \\bar{x} \\to \\mu')"></div>
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
            <p><strong>Escenario:</strong> Una empresa quiere estimar el tiempo promedio que sus empleados tardan en completar una tarea específica.</p>

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
                <p>Basándose en esta muestra, estimamos que el tiempo promedio poblacional para completar la tarea es de 24.5 minutos. Sin embargo, esta es solo nuestra "mejor conjetura" - el valor real podría ser diferente.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- INTERVALOS DE CONFIANZA -->
      <div v-if="activeTab === 'intervalos'" class="content-section">
        <h2>Intervalos de Confianza para la Media Poblacional</h2>
        <p>Un intervalo de confianza proporciona un rango de valores plausibles para un parámetro poblacional, junto con un nivel de confianza que indica qué tan seguros estamos de que el parámetro verdadero esté dentro de ese rango.</p>

        <div class="theory-content">
          <div class="definition-box">
            <h3>¿Qué significa "95% de confianza"?</h3>
            <p>Si construyéramos 100 intervalos de confianza del 95% usando diferentes muestras de la misma población, esperaríamos que aproximadamente 95 de esos intervalos contengan el parámetro poblacional verdadero.</p>

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
              <p class="visualization-note">En este ejemplo, 4 de 5 intervalos (80%) contienen μ = 25.0. Con más intervalos, esperaríamos que aproximadamente 95% lo contengan.</p>
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
                  <div class="katex-equation" v-html="renderLatex('\\text{IC} = \\text{Estimador} \\pm \\text{Margen de Error}')"></div>
                </div>
                <div class="formula-detailed">
                  <div class="katex-equation" v-html="renderLatex('\\text{IC} = \\bar{x} \\pm (\\text{Valor Crítico} \\times \\text{Error Estándar})')"></div>
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
        <p>Cuando conocemos la desviación estándar poblacional (σ), usamos la distribución normal estándar (Z) para construir intervalos de confianza.</p>

        <div class="theory-content">
          <div class="formula-section">
            <h3>Fórmula del Intervalo de Confianza (σ conocida)</h3>
            <div class="formula-container">
              <div class="formula">
                <div class="katex-equation" v-html="renderLatex('\\text{IC} = \\bar{x} \\pm Z_{\\alpha/2} \\times \\left(\\frac{\\sigma}{\\sqrt{n}}\\right)')"></div>
              </div>
              <div class="formula-explanation">
                <p>Donde:</p>
                <ul>
                  <li><strong><span v-html="renderLatex('\\bar{x}')"></span></strong> = Media muestral</li>
                  <li><strong><span v-html="renderLatex('Z_{\\alpha/2}')"></span></strong> = Valor crítico de Z para el nivel de confianza deseado</li>
                  <li><strong><span v-html="renderLatex('\\sigma')"></span></strong> = Desviación estándar poblacional (conocida)</li>
                  <li><strong><span v-html="renderLatex('n')"></span></strong> = Tamaño de la muestra</li>
                  <li><strong><span v-html="renderLatex('\\frac{\\sigma}{\\sqrt{n}}')"></span></strong> = Error estándar de la media</li>
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
                <input type="number" id="z-sample-mean" v-model="zSampleMean" step="0.1">
              </div>

              <div class="control-group">
                <label for="z-sigma">Desviación Estándar Poblacional (σ):</label>
                <input type="number" id="z-sigma" v-model="zSigma" step="0.1" min="0.1">
              </div>

              <div class="control-group">
                <label for="z-sample-size">Tamaño de Muestra (n):</label>
                <input type="number" id="z-sample-size" v-model="zSampleSize" min="1">
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
                  <span class="result-label">Valor Crítico (<span v-html="renderLatex('Z_{\\alpha/2}')"></span>):</span>
                  <span class="result-value">{{ criticalValue.toFixed(3) }}</span>
                </div>
                <div class="result-item">
                  <span class="result-label">Margen de Error:</span>
                  <span class="result-value">{{ marginOfError.toFixed(4) }}</span>
                </div>
                <div class="result-item interval-result">
                  <span class="result-label">Intervalo de Confianza {{ zConfidence }}%:</span>
                  <span class="result-value">[{{ lowerBound.toFixed(3) }}, {{ upperBound.toFixed(3) }}]</span>
                </div>
                <div class="interpretation">
                  <p><strong>Interpretación:</strong> Estamos {{ zConfidence }}% seguros de que la media poblacional (μ) está entre {{ lowerBound.toFixed(3) }} y {{ upperBound.toFixed(3) }}.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="examples-section">
          <h3>Ejemplo Paso a Paso (σ conocida)</h3>
          <div class="example-scenario">
            <p><strong>Problema:</strong> Una máquina llena bolsas de café. Se sabe que la desviación estándar del peso es σ = 2.5 gramos. Una muestra de 36 bolsas tiene un peso promedio de 250.3 gramos. Construye un intervalo de confianza del 95% para el peso promedio poblacional.</p>

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
                <p>Estamos 95% seguros de que el peso promedio poblacional de las bolsas de café está entre 249.48 y 251.12 gramos.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- CASO SIGMA DESCONOCIDA -->
      <div v-if="activeTab === 'sigma-desconocida'" class="content-section">
        <h2>Intervalos de Confianza: σ Desconocida (Distribución t)</h2>
        <p>En la mayoría de situaciones reales, no conocemos σ. En estos casos, la estimamos con s (desviación estándar muestral) y usamos la distribución t de Student.</p>

        <div class="theory-content">
          <div class="formula-section">
            <h3>Fórmula del Intervalo de Confianza (σ desconocida)</h3>
            <div class="formula-container">
              <div class="formula">
                <div class="katex-equation" v-html="renderLatex('\\text{IC} = \\bar{x} \\pm t_{\\alpha/2,\\text{gl}} \\times \\left(\\frac{s}{\\sqrt{n}}\\right)')"></div>
              </div>
              <div class="formula-explanation">
                <p>Donde:</p>
                <ul>
                  <li><strong><span v-html="renderLatex('\\bar{x}')"></span></strong> = Media muestral</li>
                  <li><strong><span v-html="renderLatex('t_{\\alpha/2,\\text{gl}}')"></span></strong> = Valor crítico de t con gl = n-1 grados de libertad</li>
                  <li><strong><span v-html="renderLatex('s')"></span></strong> = Desviación estándar muestral</li>
                  <li><strong><span v-html="renderLatex('n')"></span></strong> = Tamaño de la muestra</li>
                  <li><strong><span v-html="renderLatex('\\text{gl} = n-1')"></span></strong> = Grados de libertad</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="t-distribution-info">
            <h3>¿Por qué usar la distribución t?</h3>
            <div class="reason-cards">
              <div class="reason-card">
                <h4>🎯 Incertidumbre Adicional</h4>
                <p>Al usar s en lugar de σ, introducimos incertidumbre adicional que debe ser considerada.</p>
              </div>

              <div class="reason-card">
                <h4>📊 Colas Más Pesadas</h4>
                <p>La distribución t tiene colas más pesadas que la normal, reflejando mayor variabilidad.</p>
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
                <input type="number" id="t-sample-mean" v-model="tSampleMean" step="0.1">
              </div>

              <div class="control-group">
                <label for="t-sample-std">Desviación Estándar Muestral (s):</label>
                <input type="number" id="t-sample-std" v-model="tSampleStd" step="0.1" min="0.1">
              </div>

              <div class="control-group">
                <label for="t-sample-size">Tamaño de Muestra (n):</label>
                <input type="number" id="t-sample-size" v-model="tSampleSize" min="2">
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
                  <span class="result-label">Valor Crítico (<span v-html="renderLatex('t_{\\alpha/2}')"></span>):</span>
                  <span class="result-value">{{ tCriticalValue.toFixed(3) }}</span>
                </div>
                <div class="result-item">
                  <span class="result-label">Margen de Error:</span>
                  <span class="result-value">{{ tMarginOfError.toFixed(4) }}</span>
                </div>
                <div class="result-item interval-result">
                  <span class="result-label">Intervalo de Confianza {{ tConfidence }}%:</span>
                  <span class="result-value">[{{ tLowerBound.toFixed(3) }}, {{ tUpperBound.toFixed(3) }}]</span>
                </div>
                <div class="interpretation">
                  <p><strong>Interpretación:</strong> Estamos {{ tConfidence }}% seguros de que la media poblacional (μ) está entre {{ tLowerBound.toFixed(3) }} y {{ tUpperBound.toFixed(3) }}.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="examples-section">
          <h3>Ejemplo Paso a Paso (σ desconocida)</h3>
          <div class="example-scenario">
            <p><strong>Problema:</strong> Un investigador quiere estimar el tiempo promedio de reacción en una prueba cognitiva. Toma una muestra de 20 participantes y obtiene x̄ = 0.85 segundos con s = 0.12 segundos. Construye un intervalo de confianza del 95%.</p>

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
                    <p><strong>¿Por qué 0.975?</strong> Para intervalos de confianza de dos colas, usamos 1 - α/2, donde α es el nivel de significancia.</p>
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
                    <p>Usa la función <code>=INV.T.2C(α; grados_libertad)</code> donde α es el nivel de significancia:</p>
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
                <p>Margen de error = t<sub>α/2,gl</sub> × Error estándar = 2.093 × 0.0268 = 0.0561</p>
              </div>

              <div class="step">
                <h4>Paso 5: Construir el intervalo</h4>
                <p>IC = 0.85 ± 0.0561 = [0.794, 0.906]</p>
              </div>

              <div class="step conclusion">
                <h4>Conclusión:</h4>
                <p>Estamos 95% seguros de que el tiempo promedio de reacción poblacional está entre 0.794 y 0.906 segundos.</p>
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
              <p><strong>Ejemplo:</strong> "El tiempo promedio de recuperación está entre 7.2 y 9.8 días con 95% de confianza"</p>
            </div>

            <div class="application-card">
              <h4>🏭 Control de Calidad</h4>
              <ul>
                <li>Peso promedio de productos</li>
                <li>Dimensiones de piezas manufacturadas</li>
                <li>Tiempo de vida útil</li>
                <li>Resistencia de materiales</li>
              </ul>
              <p><strong>Ejemplo:</strong> "El peso promedio de las latas está entre 349.2 y 350.8 gramos"</p>
            </div>

            <div class="application-card">
              <h4>📊 Investigación de Mercados</h4>
              <ul>
                <li>Satisfacción del cliente</li>
                <li>Tiempo promedio de compra</li>
                <li>Gasto promedio por cliente</li>
                <li>Efectividad de campañas</li>
              </ul>
              <p><strong>Ejemplo:</strong> "El gasto promedio por cliente está entre $45.30 y $52.70"</p>
            </div>

            <div class="application-card">
              <h4>🎓 Educación</h4>
              <ul>
                <li>Rendimiento académico promedio</li>
                <li>Tiempo de estudio efectivo</li>
                <li>Efectividad de métodos de enseñanza</li>
                <li>Tasas de graduación</li>
              </ul>
              <p><strong>Ejemplo:</strong> "La calificación promedio está entre 78.5 y 83.2 puntos"</p>
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
                <li>"Si repitiéramos el estudio muchas veces, 95% de los intervalos contendrían μ"</li>
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
import { ref, computed } from 'vue';
import katex from 'katex';
import 'katex/dist/katex.min.css';

const tabs = [
  { id: 'introduccion', label: 'Introducción' },
  { id: 'intervalos', label: 'Intervalos de Confianza' },
  { id: 'sigma-conocida', label: 'σ Conocida (Z)' },
  { id: 'sigma-desconocida', label: 'σ Desconocida (t)' },
  { id: 'aplicaciones', label: 'Aplicaciones' }
];

const activeTab = ref('introduccion');

// Variables para calculadora Z (σ conocida)
const zSampleMean = ref(250.3);
const zSigma = ref(2.5);
const zSampleSize = ref(36);
const zConfidence = ref(95);

// Variables para calculadora t (σ desconocida)
const tSampleMean = ref(0.85);
const tSampleStd = ref(0.12);
const tSampleSize = ref(20);
const tConfidence = ref(95);

// Calculadora Z (σ conocida)
const standardError = computed(() => {
  return zSigma.value / Math.sqrt(zSampleSize.value);
});

const criticalValue = computed(() => {
  const confidence = zConfidence.value;
  if (confidence === 90) return 1.645;
  if (confidence === 95) return 1.96;
  if (confidence === 99) return 2.576;
  return 1.96;
});

const marginOfError = computed(() => {
  return criticalValue.value * standardError.value;
});

const lowerBound = computed(() => {
  return zSampleMean.value - marginOfError.value;
});

const upperBound = computed(() => {
  return zSampleMean.value + marginOfError.value;
});

// Calculadora t (σ desconocida)
const degreesOfFreedom = computed(() => {
  return tSampleSize.value - 1;
});

const tStandardError = computed(() => {
  return tSampleStd.value / Math.sqrt(tSampleSize.value);
});

const tCriticalValue = computed(() => {
  // Valores aproximados de t para diferentes niveles de confianza y gl
  const df = degreesOfFreedom.value;
  const confidence = tConfidence.value;

  // Aproximaciones basadas en valores comunes de t
  if (confidence === 90) {
    if (df >= 30) return 1.645;
    if (df >= 20) return 1.725;
    if (df >= 15) return 1.753;
    if (df >= 10) return 1.812;
    return 1.833;
  }

  if (confidence === 95) {
    if (df >= 30) return 1.96;
    if (df >= 20) return 2.086;
    if (df >= 15) return 2.131;
    if (df >= 10) return 2.228;
    return 2.262;
  }

  if (confidence === 99) {
    if (df >= 30) return 2.576;
    if (df >= 20) return 2.845;
    if (df >= 15) return 2.947;
    if (df >= 10) return 3.169;
    return 3.250;
  }

  return 2.086; // Default para 95% con df moderado
});

const tMarginOfError = computed(() => {
  return tCriticalValue.value * tStandardError.value;
});

const tLowerBound = computed(() => {
  return tSampleMean.value - tMarginOfError.value;
});

const tUpperBound = computed(() => {
  return tSampleMean.value + tMarginOfError.value;
});

// Función para renderizar LaTeX
const renderLatex = (latex: string) => {
  try {
    return katex.renderToString(latex, {
      throwOnError: false,
      displayMode: false,
      macros: {
        "\\RR": "\\mathbb{R}",
        "\\NN": "\\mathbb{N}",
        "\\ZZ": "\\mathbb{Z}",
        "\\QQ": "\\mathbb{Q}",
        "\\CC": "\\mathbb{C}"
      }
    });
  } catch (error) {
    console.error('Error rendering LaTeX:', error);
    return latex;
  }
};
</script>

<style scoped>
/* Estilos generales */
.estimacion-parametros-view {
  padding: 1rem 0;
}

/* Estilos para KaTeX */
.katex-equation {
  font-family: 'Times New Roman', serif;
  font-size: 1.4rem;
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
  line-height: 1.6;
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
  font-size: 1.8rem;
}

.content-section p {
  line-height: 1.6;
  margin-bottom: 1rem;
  color: #555;
}

/* Estilos para teoría */
.theory-content {
  margin-bottom: 2rem;
}

.definition-box {
  background: linear-gradient(135deg, #f8f9fa 0%, #e8f4f8 100%);
  padding: 2rem;
  border-radius: 12px;
  border-left: 5px solid #3498db;
  margin-bottom: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.definition-box h3 {
  color: #2c3e50;
  margin-bottom: 1.5rem;
  font-size: 1.3rem;
}

/* Comparación de parámetros */
.parameter-comparison {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.parameter-card {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  border: 2px solid transparent;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.parameter-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(52, 152, 219, 0.15);
  border-color: #3498db;
}

.parameter-card h4 {
  color: #3498db;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.parameter-card ul {
  margin: 1rem 0;
  padding-left: 1.5rem;
}

.parameter-card li {
  margin-bottom: 0.5rem;
  line-height: 1.5;
}

/* Tipos de estimación */
.estimation-types {
  margin: 2rem 0;
}

.estimation-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-top: 1.5rem;
}

.estimation-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  border: 2px solid #e9ecef;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.estimation-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(52, 152, 219, 0.15);
  border-color: #3498db;
}

.estimation-card h4 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.pros-cons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 1.5rem;
}

.pros, .cons {
  padding: 1rem;
  border-radius: 8px;
}

.pros {
  background: #d4edda;
  border-left: 4px solid #28a745;
}

.cons {
  background: #f8d7da;
  border-left: 4px solid #dc3545;
}

.pros h5, .cons h5 {
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.pros ul, .cons ul {
  margin: 0;
  padding-left: 1.2rem;
}

.pros li, .cons li {
  margin-bottom: 0.3rem;
  font-size: 0.9rem;
  line-height: 1.4;
}

/* Propiedades de estimadores */
.estimator-properties {
  margin: 2rem 0;
}

.properties-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.property-card {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  border-left: 4px solid #f39c12;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.property-card:hover {
  transform: translateY(-3px);
}

.property-card h4 {
  color: #f39c12;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

/* Niveles de confianza */
.confidence-levels {
  margin: 2rem 0;
}

.levels-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.level-card {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  border: 2px solid #e9ecef;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.level-card.popular {
  border-color: #3498db;
  background: linear-gradient(135deg, #f8f9fa 0%, #e8f4f8 100%);
}

.level-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(52, 152, 219, 0.15);
}

.level-card h4 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.level-card p {
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

/* Visualización de confianza */
.confidence-visualization {
  margin: 1.5rem 0;
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
}

.intervals-demo {
  background: white;
  padding: 1rem;
  border-radius: 6px;
  margin: 1rem 0;
  font-family: monospace;
}

.interval-line {
  padding: 0.3rem 0;
  margin-bottom: 0.2rem;
}

.interval-line.correct {
  color: #28a745;
}

.interval-line.incorrect {
  color: #dc3545;
}

.true-mean {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 2px solid #3498db;
  font-weight: bold;
  color: #3498db;
}

.visualization-note {
  font-style: italic;
  color: #7f8c8d;
  font-size: 0.9rem;
  margin-top: 1rem;
}

/* Componentes del intervalo */
.interval-components {
  margin: 2rem 0;
}

.components-explanation {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.component-card {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  border-left: 4px solid #e74c3c;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.component-card:hover {
  transform: translateY(-3px);
}

.component-card h4 {
  color: #e74c3c;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

/* Fórmulas */
.formula-section {
  margin: 2rem 0;
}

.formula-container {
  background: linear-gradient(135deg, #f8f9fa 0%, #e8f4f8 100%);
  padding: 2rem;
  border-radius: 12px;
  border-left: 5px solid #3498db;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.formula {
  font-size: 1.8rem;
  font-weight: bold;
  color: #e74c3c;
  text-align: center;
  margin-bottom: 1rem;
  font-family: 'Courier New', monospace;
  background: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.formula-detailed {
  font-size: 1.3rem;
  font-weight: bold;
  color: #3498db;
  text-align: center;
  margin-top: 1rem;
  font-family: 'Courier New', monospace;
}

.formula-explanation {
  margin-top: 1.5rem;
}

.formula-explanation ul {
  margin: 1rem 0;
  padding-left: 1.5rem;
}

.formula-explanation li {
  margin-bottom: 0.8rem;
  line-height: 1.5;
}

/* Valores críticos */
.critical-values {
  margin: 2rem 0;
}

.values-table {
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.values-table th,
.values-table td {
  border: 1px solid #ddd;
  padding: 12px 16px;
  text-align: center;
}

.values-table th {
  background: linear-gradient(135deg, #3498db, #2980b9);
  color: white;
  font-weight: bold;
}

.values-table td {
  background: #f8f9fa;
}

.values-table tr.highlighted td {
  background: #e8f4f8;
  font-weight: bold;
}

.values-table tr:hover td {
  background: #e8f4f8;
}

/* Sección interactiva */
.interactive-section {
  margin: 2rem 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e8f4f8 100%);
  padding: 2rem;
  border-radius: 12px;
  border-left: 5px solid #3498db;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.interactive-section h3 {
  color: #2c3e50;
  margin-bottom: 1.5rem;
  text-align: center;
}

/* Controles de calculadora */
.calculator-controls {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 1.5rem 0;
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

.control-group input,
.control-group select {
  padding: 0.8rem;
  border: 2px solid #e9ecef;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.control-group input:focus,
.control-group select:focus {
  outline: none;
  border-color: #3498db;
}

/* Resultados */
.calculation-results {
  margin: 2rem 0;
}

.result-card {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  border: 2px solid #e9ecef;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.result-card h4 {
  color: #2c3e50;
  margin-bottom: 1.5rem;
  text-align: center;
  font-size: 1.2rem;
}

.result-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding: 0.8rem;
  background: #f8f9fa;
  border-radius: 6px;
  border-left: 4px solid #3498db;
}

.result-item.interval-result {
  background: linear-gradient(135deg, #e8f4f8 0%, #d4edda 100%);
  border-left-color: #28a745;
  font-weight: bold;
  font-size: 1.1rem;
}

.result-label {
  font-weight: bold;
  color: #7f8c8d;
}

.result-value {
  font-weight: bold;
  color: #3498db;
  font-family: 'Courier New', monospace;
}

.interpretation {
  margin-top: 1.5rem;
  padding: 1rem;
  background: #d4edda;
  border-radius: 6px;
  border-left: 4px solid #28a745;
}

.interpretation p {
  margin: 0;
  color: #155724;
  font-weight: 500;
}

/* Ejemplos */
.examples-section {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 2px solid #e9ecef;
}

.examples-section h3 {
  color: #2c3e50;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
}

.example-scenario {
  background: linear-gradient(135deg, #f8f9fa 0%, #e8f4f8 100%);
  padding: 2rem;
  border-radius: 12px;
  border-left: 5px solid #3498db;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.example-details {
  margin-top: 1.5rem;
}

.example-details h4 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.example-details ul {
  margin: 1rem 0;
  padding-left: 1.5rem;
}

.example-details li {
  margin-bottom: 0.5rem;
  line-height: 1.5;
}

.estimation-results {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  margin: 1rem 0;
  border: 1px solid #e9ecef;
}

/* Pasos del ejemplo */
.step-by-step {
  margin-top: 1.5rem;
}

.step {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  border-left: 4px solid #3498db;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.step.conclusion {
  border-left-color: #28a745;
  background: linear-gradient(135deg, #f8f9fa 0%, #d4edda 100%);
}

.step h4 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.step p {
  margin-bottom: 0.5rem;
  line-height: 1.6;
}

.step ul {
  margin: 1rem 0;
  padding-left: 1.5rem;
}

.step li {
  margin-bottom: 0.5rem;
  line-height: 1.5;
}

/* Información de distribución t */
.t-distribution-info {
  margin: 2rem 0;
}

.reason-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.reason-card {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  border-left: 4px solid #f39c12;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.reason-card:hover {
  transform: translateY(-3px);
}

.reason-card h4 {
  color: #f39c12;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

/* Comparación */
.comparison-section {
  margin: 2rem 0;
}

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
}

.comparison-table td {
  background: #f8f9fa;
}

.comparison-table tr:nth-child(even) td {
  background: #ffffff;
}

.comparison-table tr:hover td {
  background: #e8f4f8;
}

/* Factores que afectan */
.factors-affecting {
  margin: 2rem 0;
}

.factors-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.factor-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  border-left: 5px solid #e74c3c;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.factor-card:hover {
  transform: translateY(-5px);
}

.factor-card h4 {
  color: #e74c3c;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.factor-demo {
  margin-top: 1rem;
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 6px;
}

.demo-item {
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  background: white;
  border-radius: 4px;
  border-left: 3px solid #3498db;
  font-size: 0.9rem;
}

/* Aplicaciones prácticas */
.practical-applications {
  margin: 2rem 0;
}

.applications-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.application-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  border-left: 5px solid #27ae60;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.application-card:hover {
  transform: translateY(-5px);
}

.application-card h4 {
  color: #27ae60;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.application-card ul {
  margin: 1rem 0;
  padding-left: 1.5rem;
}

.application-card li {
  margin-bottom: 0.5rem;
  line-height: 1.5;
}

.application-card p {
  margin-top: 1rem;
  font-style: italic;
  color: #7f8c8d;
  background: #f8f9fa;
  padding: 0.8rem;
  border-radius: 6px;
  border-left: 3px solid #27ae60;
}

/* Guía de interpretación */
.interpretation-guide {
  margin: 2rem 0;
}

.interpretation-dos-donts {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-top: 1.5rem;
}

.dos, .donts {
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.dos {
  background: linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%);
  border-left: 5px solid #28a745;
}

.donts {
  background: linear-gradient(135deg, #f8d7da 0%, #f5c6cb 100%);
  border-left: 5px solid #dc3545;
}

.dos h4, .donts h4 {
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.dos h4 {
  color: #155724;
}

.donts h4 {
  color: #721c24;
}

.dos ul, .donts ul {
  margin: 0;
  padding-left: 1.5rem;
}

.dos li, .donts li {
  margin-bottom: 0.8rem;
  line-height: 1.5;
}

.dos li {
  color: #155724;
}

.donts li {
  color: #721c24;
}

/* Botones de navegación */
.navigation-buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  gap: 1rem;
}

/* Responsive */
/* Tip para valor crítico */
.tip-critical-value {
  margin-top: 1rem;
  background: linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%);
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid #f39c12;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.tip-critical-value h5 {
  color: #f39c12;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.tip-content {
  margin-top: 0.5rem;
}

.tip-content pre {
  background: #f8f9fa;
  padding: 0.8rem;
  border-radius: 6px;
  overflow-x: auto;
  font-size: 0.9rem;
  margin: 0.5rem 0;
}

.tip-content code {
  background: #e9ecef;
  padding: 0.2rem 0.4rem;
  border-radius: 3px;
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
}

.tip-content ul {
  margin: 0.5rem 0;
  padding-left: 1.5rem;
}

.tip-content li {
  margin-bottom: 0.3rem;
  line-height: 1.4;
}

@media (max-width: 768px) {
  .nav-tabs {
    flex-direction: column;
    border-radius: 10px;
  }

  .tab {
    border-radius: 6px;
    margin-bottom: 0.5rem;
  }

  .parameter-comparison,
  .estimation-cards {
    grid-template-columns: 1fr;
  }

  .pros-cons {
    grid-template-columns: 1fr;
  }

  .calculator-controls {
    grid-template-columns: 1fr;
  }

  .result-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .interpretation-dos-donts {
    grid-template-columns: 1fr;
  }

  .navigation-buttons {
    flex-direction: column;
  }

  .hero h1 {
    font-size: 1.8rem;
  }

  .content-section {
    padding: 1.5rem;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 0.5rem;
  }

  .hero {
    padding: 1.5rem;
  }

  .content-section {
    padding: 1rem;
  }

  .formula {
    font-size: 1.3rem;
  }

  .formula-detailed {
    font-size: 1.1rem;
  }
}
</style>
