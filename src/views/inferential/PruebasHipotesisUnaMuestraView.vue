<template>
  <div class="pruebas-hipotesis-una-muestra-view">
    <div class="container">
      <div class="hero">
        <h1>Pruebas de Hipótesis de Una Muestra</h1>
        <p>
          Aprende a probar afirmaciones sobre parámetros poblacionales usando evidencia muestral.
          Incluye ejemplos prácticos y una calculadora interactiva.
        </p>
      </div>

      <!-- Tabs -->
      <div class="tabs">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          @click="activeTab = tab.id"
          :class="['tab-button', { active: activeTab === tab.id }]"
        >
          {{ tab.label }}
        </button>
      </div>

      <!-- INTRODUCCIÓN -->
      <div v-if="activeTab === 'introduccion'" class="content-section">
        <h2>¿Qué es una Prueba de Hipótesis?</h2>

        <div class="intro-content">
          <p>
            Iniciamos nuestro estudio de la inferencia estadística aprendiendo a estimar parámetros
            poblacionales, por ejemplo, usando un intervalo de confianza. Ahora, avanzamos a un
            procedimiento para probar la validez de una afirmación sobre dicho parámetro.
          </p>

          <div class="definition-box">
            <h3>Hipótesis</h3>
            <p>
              Es una afirmación o enunciado relativo a un parámetro de la población, que está sujeta
              a verificación.
            </p>
            <div class="example">
              <strong>Ejemplo:</strong> "La velocidad media de los automóviles en la autopista es de
              68 millas por hora"
            </div>
          </div>

          <div class="definition-box">
            <h3>🔬 Prueba de Hipótesis</h3>
            <p>
              Es un procedimiento, basado en la evidencia de una muestra y la teoría de la
              probabilidad, para determinar si la afirmación (hipótesis) es razonable.
            </p>
          </div>

          <div class="analogy-box">
            <h3>⚖️ Analogía con el Sistema Legal</h3>
            <p>
              Pensemos en el sistema legal: una persona es "inocente hasta que se pruebe su
              culpabilidad". En estadística, hacemos algo similar: planteamos una hipótesis (como la
              inocencia) y luego usamos datos (evidencia) para verificarla.
            </p>
          </div>
        </div>
      </div>

      <!-- 5 PASOS DEL PROCEDIMIENTO -->
      <div v-if="activeTab === 'cinco-pasos'" class="content-section">
        <h2>El Procedimiento de 5 Pasos para Probar una Hipótesis</h2>

        <div class="intro-content">
          <p>
            Existe un procedimiento sistemático de cinco pasos para realizar una prueba de
            hipótesis. Este método asegura que el proceso sea riguroso y reproducible.
          </p>
        </div>

        <div class="steps-container">
          <div class="step-card">
            <div class="step-number">1</div>
            <div class="step-content">
              <h3>Establecer las Hipótesis</h3>
              <p>Definir la hipótesis nula (H₀) y la hipótesis alternativa (H₁)</p>
              <div class="step-detail">
                <h4>Hipótesis Nula (H₀)</h4>
                <ul>
                  <li>Es la afirmación que se va a probar</li>
                  <li>Generalmente, es un enunciado de "no diferencia" o "no cambio"</li>
                  <li>Siempre incluye el signo de igual (=, ≤ o ≥)</li>
                </ul>
                <div class="formula-example"><strong>Ejemplo:</strong> H₀: μ = 200</div>

                <h4>Hipótesis Alternativa (H₁)</h4>
                <ul>
                  <li>Es el enunciado que se acepta si rechazamos H₀</li>
                  <li>También se conoce como "hipótesis de investigación"</li>
                  <li>Nunca incluye el signo de igual (≠, &lt; o &gt;)</li>
                </ul>
                <div class="formula-example"><strong>Ejemplo:</strong> H₁: μ &ne; 200</div>
              </div>
            </div>
          </div>

          <div class="step-card">
            <div class="step-number">2</div>
            <div class="step-content">
              <h3>Seleccionar el Nivel de Significancia (α)</h3>
              <p>Establecer la probabilidad de cometer un error tipo I</p>
              <div class="step-detail">
                <p>
                  El nivel de significancia (α) es la probabilidad de rechazar H₀ cuando esta es
                  verdadera. También se conoce como el nivel de riesgo.
                </p>
                <div class="alpha-levels">
                  <div class="alpha-option">
                    <strong>α = 0.10 (10%)</strong> - Nivel más permisivo
                  </div>
                  <div class="alpha-option"><strong>α = 0.05 (5%)</strong> - Nivel más común</div>
                  <div class="alpha-option">
                    <strong>α = 0.01 (1%)</strong> - Nivel más estricto
                  </div>
                </div>

                <h4>Errores en las Pruebas de Hipótesis</h4>
                <div class="errors-table">
                  <table>
                    <thead>
                      <tr>
                        <th>Realidad</th>
                        <th>Decisión: No Rechazar H₀</th>
                        <th>Decisión: Rechazar H₀</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>H₀ es verdadera</strong></td>
                        <td class="correct">Decisión correcta</td>
                        <td class="error-type-i">Error Tipo I<br /><em>Probabilidad = α</em></td>
                      </tr>
                      <tr>
                        <td><strong>H₀ es falsa</strong></td>
                        <td class="error-type-ii">Error Tipo II<br /><em>Probabilidad = β</em></td>
                        <td class="correct">Decisión correcta</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div class="step-card">
            <div class="step-number">3</div>
            <div class="step-content">
              <h3>Identificar el Estadístico de Prueba</h3>
              <p>Seleccionar la fórmula apropiada según el parámetro y las condiciones</p>
              <div class="step-detail">
                <p>
                  El estadístico de prueba es un valor calculado a partir de la muestra que se usa
                  para decidir si rechazar o no la hipótesis nula.
                </p>

                <div class="important-note">
                  <h4>💡 ¿Qué estadístico usar?</h4>
                  <p>
                    La selección del estadístico apropiado depende de si conocemos la desviación
                    estándar poblacional (σ):
                  </p>
                  <div class="stat-selection">
                    <div class="stat-option">
                      <h5>Estadístico Z (Distribución Normal)</h5>
                      <p><strong>Usar cuando:</strong> σ es conocida</p>
                      <p>Ver la sección <strong>"Pruebas Z"</strong> para la fórmula detallada</p>
                    </div>
                    <div class="stat-option">
                      <h5>📈 Estadístico t-Student</h5>
                      <p><strong>Usar cuando:</strong> σ es desconocida</p>
                      <p>
                        Ver la sección <strong>"Pruebas t-Student"</strong> para la fórmula
                        detallada
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="step-card">
            <div class="step-number">4</div>
            <div class="step-content">
              <h3>Formular la Regla de Decisión</h3>
              <p>Establecer cuándo rechazar H₀ basado en valores críticos</p>
              <div class="step-detail">
                <p>
                  La regla de decisión establece las condiciones específicas bajo las cuales
                  rechazaremos la hipótesis nula, basándose en el valor crítico.
                </p>

                <div class="chart-container">
                  <img
                    src="/images/hypothesis-testing/rejection-region-general.png"
                    alt="Distribución normal con región de rechazo"
                    class="hypothesis-chart"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="step-card">
            <div class="step-number">5</div>
            <div class="step-content">
              <h3>Tomar una Decisión e Interpretar</h3>
              <p>Comparar el estadístico calculado con el valor crítico</p>
              <div class="step-detail">
                <p>
                  Se calcula el valor del estadístico de prueba usando los datos de la muestra y se
                  compara con el valor crítico para tomar la decisión final.
                </p>

                <div class="decision-rules">
                  <h4>Reglas de Decisión:</h4>
                  <ul>
                    <li>
                      <strong>Si</strong> el estadístico de prueba cae en la región de rechazo →
                      <em>Rechazar H₀</em>
                    </li>
                    <li>
                      <strong>Si</strong> el estadístico de prueba NO cae en la región de rechazo →
                      <em>No rechazar H₀</em>
                    </li>
                  </ul>
                </div>

                <div class="important-note">
                  <strong>Nota importante:</strong> No rechazar H₀ no significa que hayamos probado
                  que H₀ es verdadera. Simplemente significa que la información de la muestra no
                  ofreció evidencia convincente para rechazarla.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- PRUEBAS DE UNA COLA VS DOS COLAS -->
      <div v-if="activeTab === 'tipos-pruebas'" class="content-section">
        <h2>Pruebas de Una Cola vs. Dos Colas</h2>

        <div class="intro-content">
          <p>
            La ubicación de la región de rechazo depende de cómo se formule la hipótesis alternativa
            (H₁). Podemos tener pruebas de una cola (izquierda o derecha) o de dos colas.
          </p>
        </div>

        <div class="test-types-container">
          <div class="test-type-card">
            <h3>🔍 Prueba de Una Cola</h3>
            <p>
              Se usa cuando la hipótesis alternativa indica una dirección específica, usando los
              signos &lt; (menor que) o &gt; (mayor que).
            </p>

            <div class="subtypes">
              <div class="subtype">
                <h4>Prueba de Cola Derecha</h4>
                <p>Se usa si H₁ contiene el signo &gt; (mayor que)</p>
                <div class="example">
                  <strong>Ejemplo:</strong><br />
                  H₀: μ ≤ 453 gramos<br />
                  H₁: μ &gt; 453 gramos<br />
                  <em>(Nos preocupa que las cajas excedan el peso)</em>
                </div>

                <div class="chart-container">
                  <img
                    src="/images/hypothesis-testing/rejection-region-right-tail.png"
                    alt="Región de rechazo cola derecha"
                    class="hypothesis-chart"
                  />
                </div>
              </div>

              <div class="subtype">
                <h4>Prueba de Cola Izquierda</h4>
                <p>Se usa si H₁ contiene el signo &lt; (menor que)</p>
                <div class="example">
                  <strong>Ejemplo:</strong><br />
                  H₀: μ ≥ 60,000 millas<br />
                  H₁: μ &lt; 60,000 millas<br />
                  <em>(Nos preocupa que los neumáticos duren menos)</em>
                </div>

                <div class="chart-container">
                  <img
                    src="/images/hypothesis-testing/rejection-region-left-tail.png"
                    alt="Región de rechazo cola izquierda"
                    class="hypothesis-chart"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="test-type-card">
            <h3>🔄 Prueba de Dos Colas</h3>
            <p>
              Se usa cuando no se especifica dirección en la hipótesis alternativa, usando el signo
              ≠ (diferente de).
            </p>

            <div class="example">
              <strong>Ejemplo:</strong><br />
              H₀: μ = 65,000<br />
              H₁: μ &ne; 65,000<br />
              <em>(Solo nos interesa saber si es diferente)</em>
            </div>

            <p>
              En este caso, el nivel de significancia (α) se divide por igual entre las dos colas.
              Por ejemplo, si α = 0.05, se asigna 0.025 a cada cola.
            </p>

            <div class="chart-container">
              <img
                src="/images/hypothesis-testing/rejection-region-two-tails.png"
                alt="Región de rechazo dos colas"
                class="hypothesis-chart"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- PRUEBAS Z (σ CONOCIDA) -->
      <div v-if="activeTab === 'pruebas-z'" class="content-section">
        <h2>Pruebas de Hipótesis z (Desviación Estándar Poblacional Conocida)</h2>

        <div class="intro-box">
          <h3>¿Cuándo usar la distribución Normal (z)?</h3>
          <p>La distribución <strong>Normal Estándar (z)</strong> se utiliza cuando:</p>
          <ul>
            <li>La <strong>desviación estándar poblacional (σ) es conocida</strong></li>
            <li>
              El tamaño de muestra es <strong>grande (n ≥ 30)</strong> o la población es normal
            </li>
            <li>Cumple con el Teorema del Límite Central</li>
          </ul>
        </div>

        <div class="formula-section">
          <h3>Fórmula del Estadístico z</h3>
          <div
            v-html="renderLatexDisplay('z = \\frac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}')"
          ></div>

          <p><strong>Donde:</strong></p>
          <ul>
            <li><span v-html="renderLatex('\\bar{x}')"></span> = Media muestral</li>
            <li><span v-html="renderLatex('\\mu_0')"></span> = Media hipotética (de H₀)</li>
            <li>
              <span v-html="renderLatex('\\sigma')"></span> = Desviación estándar
              <strong>poblacional</strong> (conocida)
            </li>
            <li><span v-html="renderLatex('n')"></span> = Tamaño de la muestra</li>
          </ul>
        </div>

        <div class="formula-section">
          <h3>🔍 Cálculo del Valor Crítico z</h3>
          <p>
            El valor crítico z determina la región de rechazo y depende del tipo de prueba y el
            nivel de significancia α.
          </p>

          <h4>1. Prueba de Dos Colas (H₁: μ ≠ μ₀)</h4>
          <p>Dividimos α entre 2 porque la región de rechazo está en ambas colas.</p>

          <div class="code-block">
            <strong>Python:</strong>
            <pre><code>from scipy.stats import norm

alpha = 0.05
z_critico = norm.ppf(1 - alpha/2)
print(f"Valor crítico: ±{z_critico:.3f}")
# Resultado: ±1.960

# Región de rechazo: z &lt; -1.96 o z &gt; 1.96</code></pre>
          </div>

          <div class="code-block">
            <strong>Excel:</strong>
            <pre><code>=INV.NORM.ESTAND(1-0.05/2)
Resultado: 1.96

Región de rechazo: z &lt; -1.96 o z &gt; 1.96</code></pre>
          </div>

          <div class="decision-rule">
            <p><strong>Regla de Decisión:</strong></p>
            <div
              v-html="
                renderLatexDisplay('\\text{Si } |z| > z_{\\alpha/2}, \\text{ se rechaza } H_0')
              "
            ></div>
            <div
              v-html="
                renderLatexDisplay(
                  '\\text{Si } |z| \\leq z_{\\alpha/2}, \\text{ no se rechaza } H_0',
                )
              "
            ></div>
          </div>

          <h4>2. Prueba de Cola Derecha (H₁: μ &gt; μ₀)</h4>
          <p>Toda la región de rechazo está en la cola derecha.</p>

          <div class="code-block">
            <strong>Python:</strong>
            <pre><code>from scipy.stats import norm

alpha = 0.05
z_critico = norm.ppf(1 - alpha)
print(f"Valor crítico: +{z_critico:.3f}")
# Resultado: +1.645

# Región de rechazo: z &gt; 1.645</code></pre>
          </div>

          <div class="code-block">
            <strong>Excel:</strong>
            <pre><code>=INV.NORM.ESTAND(1-0.05)
Resultado: 1.645

Región de rechazo: z &gt; 1.645</code></pre>
          </div>

          <div class="decision-rule">
            <p><strong>Regla de Decisión:</strong></p>
            <div
              v-html="renderLatexDisplay('\\text{Si } z > z_{\\alpha}, \\text{ se rechaza } H_0')"
            ></div>
            <div
              v-html="
                renderLatexDisplay('\\text{Si } z \\leq z_{\\alpha}, \\text{ no se rechaza } H_0')
              "
            ></div>
          </div>

          <h4>3. Prueba de Cola Izquierda (H₁: μ &lt; μ₀)</h4>
          <p>Toda la región de rechazo está en la cola izquierda.</p>

          <div class="code-block">
            <strong>Python:</strong>
            <pre><code>from scipy.stats import norm

alpha = 0.05
z_critico = norm.ppf(alpha)
print(f"Valor crítico: {z_critico:.3f}")
# Resultado: -1.645

# Región de rechazo: z &lt; -1.645</code></pre>
          </div>

          <div class="code-block">
            <strong>Excel:</strong>
            <pre><code>=INV.NORM.ESTAND(0.05)
Resultado: -1.645

Región de rechazo: z &lt; -1.645</code></pre>
          </div>

          <div class="decision-rule">
            <p><strong>Regla de Decisión:</strong></p>
            <div
              v-html="renderLatexDisplay('\\text{Si } z < z_{\\alpha}, \\text{ se rechaza } H_0')"
            ></div>
            <div
              v-html="
                renderLatexDisplay('\\text{Si } z \\geq z_{\\alpha}, \\text{ no se rechaza } H_0')
              "
            ></div>
          </div>
        </div>

        <div class="examples-section">
          <h3>Ejemplos Completos con Pruebas z</h3>

          <div class="example-box">
            <h3>Ejemplo 1: Prueba de Dos Colas (Paso a Paso)</h3>
            <p>
              Una compañía afirma que la duración promedio de sus baterías es de 100 horas. Se toma
              una muestra de 36 baterías y se obtiene una duración promedio de 98 horas con una
              desviación estándar poblacional de 10 horas. ¿Hay evidencia para rechazar la
              afirmación a un nivel de significancia de 0.05?
            </p>

            <div class="hypothesis-setup">
              <h4>Paso 1: Establecer las Hipótesis</h4>
              <ul>
                <li>H₀: μ = 100 horas (la afirmación es correcta)</li>
                <li>H₁: μ ≠ 100 horas (la afirmación es incorrecta)</li>
              </ul>
            </div>

            <div class="hypothesis-setup">
              <h4>Paso 2: Nivel de Significancia</h4>
              <p>α = 0.05 (5%)</p>
            </div>

            <div class="hypothesis-setup">
              <h4>Paso 3: Calcular el Valor Crítico</h4>
              <p><strong>Como es prueba de dos colas, dividimos α entre 2:</strong></p>

              <div class="code-example python">
                <strong>Python:</strong>
                <pre><code>from scipy.stats import norm
alpha = 0.05
z_critico = norm.ppf(1 - alpha/2)
print(f"Valor crítico: ±{z_critico:.3f}")
# Resultado: ±1.960</code></pre>
              </div>

              <div class="code-example excel">
                <strong>Excel:</strong>
                <pre><code>=INV.NORM.ESTAND(1-0.05/2)
Resultado: 1.96</code></pre>
              </div>

              <p class="highlight-result">✓ Valor crítico: ±1.96</p>
              <p>Región de rechazo: z &lt; -1.96 o z &gt; 1.96</p>
            </div>

            <div class="calculation">
              <h4>Paso 4: Calcular el Estadístico de Prueba</h4>
              <div class="formula-steps">
                <p><strong>Fórmula:</strong></p>
                <div
                  class="step"
                  v-html="
                    renderLatex(
                      'z = \\frac{98 - 100}{\\frac{10}{\\sqrt{36}}} = \\frac{-2}{\\frac{10}{6}} = \\frac{-2}{1.667} = -1.20',
                    )
                  "
                ></div>
              </div>

              <div class="code-block">
                <strong>Python:</strong>
                <pre><code>import math
x_bar = 98
mu_0 = 100
sigma = 10
n = 36

z_calculado = (x_bar - mu_0) / (sigma / math.sqrt(n))
print(f"Estadístico z: {z_calculado:.2f}")
# Resultado: -1.20</code></pre>
              </div>

              <div class="code-block">
                <strong>Excel:</strong>
                <pre><code>=(98-100)/(10/RAIZ(36))
Resultado: -1.20</code></pre>
              </div>
            </div>

            <div class="calculation">
              <h4>Paso 5: Tomar la Decisión</h4>

              <div class="decision-rule">
                <p><strong>Regla de Decisión para Prueba de Dos Colas:</strong></p>
                <div
                  v-html="
                    renderLatexDisplay('\\text{Si } |z| > z_{\\alpha/2}, \\text{ se rechaza } H_0')
                  "
                ></div>
                <div
                  v-html="
                    renderLatexDisplay(
                      '\\text{Si } |z| \\leq z_{\\alpha/2}, \\text{ no se rechaza } H_0',
                    )
                  "
                ></div>
              </div>

              <div class="step"><strong>Comparación:</strong> |-1.20| = 1.20 &lt; 1.96</div>
              <div class="step">El estadístico z NO cae en la región de rechazo</div>
              <div class="step decision-highlight"><strong>Decisión:</strong> No rechazar H₀</div>
            </div>

            <div class="conclusion">
              <strong>Conclusión:</strong> No hay evidencia suficiente para afirmar que la duración
              promedio difiere de 100 horas al nivel de significancia del 5%.
            </div>
          </div>

          <div class="example-card">
            <h3>Ejemplo 2: Prueba de Cola Izquierda (Paso a Paso)</h3>
            <p>
              Un fabricante de focos afirma que sus productos duran al menos 800 horas. Se prueba
              una muestra de 50 focos obteniendo una duración promedio de 780 horas con desviación
              estándar poblacional de 50 horas. ¿Hay evidencia de que duran menos de lo afirmado?
              Use α = 0.01.
            </p>

            <div class="hypothesis-setup">
              <h4>Paso 1: Establecer las Hipótesis</h4>
              <ul>
                <li>H₀: μ ≥ 800 horas (duran al menos 800 horas)</li>
                <li>H₁: μ &lt; 800 horas (duran menos de 800 horas)</li>
              </ul>
              <p><strong>Nota:</strong> Es cola izquierda porque H₁ usa el signo &lt;</p>
            </div>

            <div class="hypothesis-setup">
              <h4>Paso 2: Nivel de Significancia</h4>
              <p>α = 0.01 (1%)</p>
            </div>

            <div class="hypothesis-setup">
              <h4>Paso 3: Calcular el Valor Crítico</h4>
              <p><strong>Como es prueba de cola izquierda, usamos directamente α:</strong></p>

              <div class="code-example python">
                <strong>Python:</strong>
                <pre><code>from scipy.stats import norm
alpha = 0.01
z_critico = norm.ppf(alpha)
print(f"Valor crítico: {z_critico:.3f}")
# Resultado: -2.326</code></pre>
              </div>

              <div class="code-example excel">
                <strong>Excel:</strong>
                <pre><code>=INV.NORM.ESTAND(0.01)
Resultado: -2.33</code></pre>
              </div>

              <p class="highlight-result">✓ Valor crítico: -2.33</p>
              <p>Región de rechazo: z &lt; -2.33</p>
            </div>

            <div class="calculation">
              <h4>Paso 4: Calcular el Estadístico de Prueba</h4>
              <div class="formula-steps">
                <p><strong>Fórmula:</strong></p>
                <div
                  class="step"
                  v-html="
                    renderLatex(
                      'z = \\frac{780 - 800}{\\frac{50}{\\sqrt{50}}} = \\frac{-20}{\\frac{50}{7.071}} = \\frac{-20}{7.071} = -2.83',
                    )
                  "
                ></div>
              </div>

              <div class="code-example python">
                <strong>Python:</strong>
                <pre><code>import math
x_bar = 780
mu_0 = 800
sigma = 50
n = 50

z_calculado = (x_bar - mu_0) / (sigma / math.sqrt(n))
print(f"Estadístico z: {z_calculado:.2f}")
# Resultado: -2.83</code></pre>
              </div>

              <div class="code-block">
                <strong>Excel:</strong>
                <pre><code>=(780-800)/(50/RAIZ(50))
Resultado: -2.83</code></pre>
              </div>
            </div>

            <div class="calculation">
              <h4>Paso 5: Tomar la Decisión</h4>

              <div class="decision-rule">
                <p><strong>Regla de Decisión para Prueba de Cola Izquierda:</strong></p>
                <div
                  v-html="
                    renderLatexDisplay('\\text{Si } z < z_{\\alpha}, \\text{ se rechaza } H_0')
                  "
                ></div>
                <div
                  v-html="
                    renderLatexDisplay(
                      '\\text{Si } z \\geq z_{\\alpha}, \\text{ no se rechaza } H_0',
                    )
                  "
                ></div>
              </div>

              <div class="step"><strong>Comparación:</strong> -2.83 &lt; -2.33</div>
              <div class="step">El estadístico z SÍ cae en la región de rechazo</div>
              <div class="step decision-highlight"><strong>Decisión:</strong> Rechazar H₀</div>
            </div>

            <div class="conclusion">
              <strong>Conclusión:</strong> Hay evidencia suficiente para afirmar que la duración
              promedio es menor a 800 horas al nivel de significancia del 1%.
            </div>
          </div>
        </div>

        <div class="tip-section">
          <h3>🧮 Código Completo en Python</h3>
          <p>Programa completo para realizar una prueba z con decisión automática:</p>

          <div class="code-block">
            <pre><code>from scipy.stats import norm
import math

# Datos del problema
x_bar = 98      # Media muestral
mu_0 = 100      # Media hipotética
sigma = 10      # Desviación estándar poblacional
n = 36          # Tamaño de muestra
alpha = 0.05    # Nivel de significancia
tipo = "dos_colas"  # Tipo de prueba: "dos_colas", "cola_derecha", "cola_izquierda"

# Paso 1: Calcular estadístico z
z_calculado = (x_bar - mu_0) / (sigma / math.sqrt(n))
print(f"Estadístico z: {z_calculado:.2f}")

# Paso 2: Calcular valor crítico según tipo de prueba
if tipo == "dos_colas":
    z_critico = norm.ppf(1 - alpha/2)
    print(f"Valor crítico: ±{z_critico:.3f}")
    decision = abs(z_calculado) > z_critico
elif tipo == "cola_derecha":
    z_critico = norm.ppf(1 - alpha)
    print(f"Valor crítico: +{z_critico:.3f}")
    decision = z_calculado > z_critico
else:  # cola_izquierda
    z_critico = norm.ppf(alpha)
    print(f"Valor crítico: {z_critico:.3f}")
    decision = z_calculado &lt; z_critico

# Paso 3: Decisión
if decision:
    print("Decisión: Rechazar H₀")
else:
    print("Decisión: No rechazar H₀")</code></pre>
          </div>
        </div>

        <div class="tip-section">
          <h3>📈 Tabla de Referencia en Excel</h3>
          <div class="excel-table">
            <table>
              <thead>
                <tr>
                  <th>Celda</th>
                  <th>Fórmula</th>
                  <th>Descripción</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>A1</td>
                  <td><code>100</code></td>
                  <td>Media hipotética (μ₀)</td>
                </tr>
                <tr>
                  <td>B1</td>
                  <td><code>98</code></td>
                  <td>Media muestral (x̄)</td>
                </tr>
                <tr>
                  <td>C1</td>
                  <td><code>10</code></td>
                  <td>Desviación estándar (σ)</td>
                </tr>
                <tr>
                  <td>D1</td>
                  <td><code>36</code></td>
                  <td>Tamaño muestra (n)</td>
                </tr>
                <tr>
                  <td>E1</td>
                  <td><code>0.05</code></td>
                  <td>Nivel significancia (α)</td>
                </tr>
                <tr>
                  <td>F1</td>
                  <td><code>=(B1-A1)/(C1/RAIZ(D1))</code></td>
                  <td>Estadístico z calculado</td>
                </tr>
                <tr>
                  <td>G1</td>
                  <td><code>=INV.NORM.ESTAND(1-E1/2)</code></td>
                  <td>Valor crítico (dos colas)</td>
                </tr>
                <tr>
                  <td>H1</td>
                  <td><code>=SI(ABS(F1)>G1,"Rechazar H₀","No rechazar H₀")</code></td>
                  <td>Decisión (dos colas)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="tip-section">
          <h3>⚠️ Errores Comunes</h3>
          <ul>
            <li>
              <strong>Dividir α incorrectamente:</strong> Recuerda que solo en pruebas de dos colas,
              usa α/2 para calcular el valor crítico
            </li>
            <li>
              <strong>Usar σ cuando se desconoce:</strong> Si σ es desconocida, debes usar la
              distribución t-Student en lugar de z
            </li>
            <li>
              <strong>Comparar incorrectamente en dos colas:</strong> Debes comparar el valor
              absoluto del estadístico z con el valor crítico positivo
            </li>
            <li>
              <strong>Olvidar verificar los supuestos:</strong> La prueba z requiere que la
              población sea normal o n ≥ 30 (Teorema del Límite Central)
            </li>
          </ul>
        </div>

        <div class="tip-section">
          <h3>💡 Tips Adicionales</h3>
          <ul>
            <li>
              <strong>Verificar siempre el tipo de prueba:</strong> Lee cuidadosamente H₁ para
              determinar si es una prueba de una cola o dos colas
            </li>
            <li>
              <strong>Interpretar correctamente "no rechazar":</strong> No rechazar H₀ NO significa
              que H₀ sea verdadera, solo que no hay suficiente evidencia para rechazarla
            </li>
            <li>
              <strong>Usar decimales suficientes:</strong> Mantén al menos 2-3 decimales en los
              cálculos intermedios para evitar errores de redondeo
            </li>
            <li>
              <strong>Documentar tus pasos:</strong> Siempre escribe claramente las hipótesis, el
              nivel de significancia y el tipo de prueba antes de calcular
            </li>
          </ul>
        </div>
      </div>

      <!-- PRUEBAS t-STUDENT -->
      <div v-if="activeTab === 'pruebas-t'" class="content-section">
        <h2>Pruebas de Hipótesis con Distribución t-Student</h2>

        <div class="intro-box">
          <h3>¿Cuándo usar la distribución t-Student?</h3>
          <p>
            La distribución <strong>t-Student</strong> se utiliza cuando la
            <strong>desviación estándar poblacional (σ) es desconocida</strong>
            y se estima con la desviación estándar muestral (s). Es especialmente importante cuando:
          </p>
          <ul>
            <li>El tamaño de muestra es <strong>pequeño (n &lt; 30)</strong></li>
            <li>No conocemos σ, solo tenemos la desviación estándar de la muestra (s)</li>
            <li>La población es aproximadamente normal (requisito importante para n pequeños)</li>
          </ul>
        </div>

        <div class="formula-section">
          <h3>Fórmula del Estadístico t</h3>
          <div v-html="renderLatexDisplay('t = \\frac{\\bar{x} - \\mu_0}{s / \\sqrt{n}}')"></div>

          <p><strong>Donde:</strong></p>
          <ul>
            <li><span v-html="renderLatex('\\bar{x}')"></span> = Media muestral</li>
            <li><span v-html="renderLatex('\\mu_0')"></span> = Media hipotética (de H₀)</li>
            <li>
              <span v-html="renderLatex('s')"></span> = Desviación estándar
              <strong>muestral</strong> (no σ)
            </li>
            <li><span v-html="renderLatex('n')"></span> = Tamaño de la muestra</li>
          </ul>

          <p><strong>Grados de Libertad:</strong></p>
          <div v-html="renderLatexDisplay('gl = n - 1')"></div>
        </div>

        <div class="formula-section">
          <h3>🔍 Cálculo del Valor Crítico t</h3>
          <p>
            El valor crítico t depende de los <strong>grados de libertad (gl = n - 1)</strong> y el
            nivel de significancia α. A diferencia de z, no hay un único valor crítico para cada α.
          </p>

          <h4>1. Prueba de Dos Colas (H₁: μ ≠ μ₀)</h4>
          <p>Dividimos α entre 2 porque la región de rechazo está en ambas colas.</p>

          <div class="code-block">
            <strong>Python:</strong>
            <pre><code>from scipy.stats import t

alpha = 0.05
gl = 24  # n - 1 = 25 - 1
t_critico = t.ppf(1 - alpha/2, gl)
print(f"Valor crítico: ±{t_critico:.3f}")
# Resultado: ±2.064

# Región de rechazo: t &lt; -2.064 o t &gt; 2.064</code></pre>
          </div>

          <div class="code-block">
            <strong>Excel:</strong>
            <pre><code>=INV.T.2C(0.05, 24)
Resultado: 2.064

Región de rechazo: t &lt; -2.064 o t &gt; 2.064</code></pre>
          </div>

          <div class="decision-rule">
            <p><strong>Regla de Decisión:</strong></p>
            <div
              v-html="
                renderLatexDisplay('\\text{Si } |t| > t_{\\alpha/2, gl}, \\text{ se rechaza } H_0')
              "
            ></div>
            <div
              v-html="
                renderLatexDisplay(
                  '\\text{Si } |t| \\leq t_{\\alpha/2, gl}, \\text{ no se rechaza } H_0',
                )
              "
            ></div>
          </div>

          <h4>2. Prueba de Cola Derecha (H₁: μ &gt; μ₀)</h4>
          <p>Toda la región de rechazo está en la cola derecha.</p>

          <div class="code-block">
            <strong>Python:</strong>
            <pre><code>from scipy.stats import t

alpha = 0.05
gl = 24
t_critico = t.ppf(1 - alpha, gl)
print(f"Valor crítico: +{t_critico:.3f}")
# Resultado: +1.711

# Región de rechazo: t &gt; 1.711</code></pre>
          </div>

          <div class="code-block">
            <strong>Excel:</strong>
            <pre><code>=INV.T(1-0.05, 24)
Resultado: 1.711

Región de rechazo: t &gt; 1.711</code></pre>
          </div>

          <div class="decision-rule">
            <p><strong>Regla de Decisión:</strong></p>
            <div
              v-html="
                renderLatexDisplay('\\text{Si } t > t_{\\alpha, gl}, \\text{ se rechaza } H_0')
              "
            ></div>
            <div
              v-html="
                renderLatexDisplay(
                  '\\text{Si } t \\leq t_{\\alpha, gl}, \\text{ no se rechaza } H_0',
                )
              "
            ></div>
          </div>

          <h4>3. Prueba de Cola Izquierda (H₁: μ &lt; μ₀)</h4>
          <p>Toda la región de rechazo está en la cola izquierda.</p>

          <div class="code-block">
            <strong>Python:</strong>
            <pre><code>from scipy.stats import t

alpha = 0.05
gl = 24
t_critico = t.ppf(alpha, gl)
print(f"Valor crítico: {t_critico:.3f}")
# Resultado: -1.711

# Región de rechazo: t &lt; -1.711</code></pre>
          </div>

          <div class="code-block">
            <strong>Excel:</strong>
            <pre><code>=INV.T(0.05, 24)
Resultado: -1.711

Región de rechazo: t &lt; -1.711</code></pre>
          </div>

          <div class="decision-rule">
            <p><strong>Regla de Decisión:</strong></p>
            <div
              v-html="
                renderLatexDisplay('\\text{Si } t < t_{\\alpha, gl}, \\text{ se rechaza } H_0')
              "
            ></div>
            <div
              v-html="
                renderLatexDisplay(
                  '\\text{Si } t \\geq t_{\\alpha, gl}, \\text{ no se rechaza } H_0',
                )
              "
            ></div>
          </div>
        </div>

        <div class="examples-section">
          <h3>Ejemplo Completo: Prueba t de Dos Colas</h3>

          <div class="example-box">
            <p><strong>Problema:</strong></p>
            <p>
              Un fabricante afirma que el peso promedio de sus productos es de 500 gramos. Se toma
              una muestra aleatoria de 16 productos y se obtiene:
            </p>
            <ul>
              <li>Media muestral: <span v-html="renderLatex('\\bar{x} = 495')"></span> gramos</li>
              <li>
                Desviación estándar muestral: <span v-html="renderLatex('s = 12')"></span> gramos
              </li>
              <li>Tamaño de muestra: <span v-html="renderLatex('n = 16')"></span></li>
            </ul>
            <p>¿Hay evidencia para rechazar la afirmación del fabricante con α = 0.05?</p>

            <h4>Paso 1: Establecer las hipótesis</h4>
            <div v-html="renderLatexDisplay('H_0: \\mu = 500')"></div>
            <div v-html="renderLatexDisplay('H_1: \\mu \\neq 500')"></div>
            <p><em>Es una prueba de dos colas porque H₁ usa ≠</em></p>

            <h4>Paso 2: Nivel de significancia</h4>
            <div v-html="renderLatexDisplay('\\alpha = 0.05')"></div>

            <h4>Paso 3: Calcular el estadístico de prueba</h4>
            <div
              v-html="
                renderLatexDisplay(
                  't = \\frac{\\bar{x} - \\mu_0}{s / \\sqrt{n}} = \\frac{495 - 500}{12 / \\sqrt{16}} = \\frac{-5}{3} = -1.667',
                )
              "
            ></div>
            <div v-html="renderLatexDisplay('gl = n - 1 = 16 - 1 = 15')"></div>

            <div class="code-block">
              <pre><code>from scipy.stats import t
import math

# Datos
x_bar = 495
mu_0 = 500
s = 12
n = 16
gl = n - 1

# Calcular estadístico t
t_calculado = (x_bar - mu_0) / (s / math.sqrt(n))
print(f"Estadístico t: {t_calculado:.3f}")
# Resultado: -1.667</code></pre>
            </div>

            <h4>Paso 4: Determinar el valor crítico</h4>
            <div class="code-block">
              <pre><code>from scipy.stats import t

alpha = 0.05
gl = 15
t_critico = t.ppf(1 - alpha/2, gl)
print(f"Valor crítico: ±{t_critico:.3f}")
# Resultado: ±2.131</code></pre>
            </div>

            <p>
              <strong>Valor crítico:</strong>
              <span v-html="renderLatex('t_{\\alpha/2, gl} = \\pm 2.131')"></span>
            </p>
            <p>
              <strong>Región de rechazo:</strong> <span v-html="renderLatex('t < -2.131')"></span> o
              <span v-html="renderLatex('t > 2.131')"></span>
            </p>

            <h4>Paso 5: Tomar la decisión</h4>
            <p><strong>Comparación:</strong></p>
            <div v-html="renderLatexDisplay('|t| = |-1.667| = 1.667')"></div>
            <div v-html="renderLatexDisplay('t_{crítico} = 2.131')"></div>

            <div class="decision-rule">
              <p><strong>Regla de Decisión para Prueba de Dos Colas:</strong></p>
              <div
                v-html="
                  renderLatexDisplay(
                    '\\text{Si } |t| > t_{\\alpha/2, gl}, \\text{ se rechaza } H_0',
                  )
                "
              ></div>
              <div
                v-html="
                  renderLatexDisplay(
                    '\\text{Si } |t| \\leq t_{\\alpha/2, gl}, \\text{ no se rechaza } H_0',
                  )
                "
              ></div>
            </div>

            <p><strong>Conclusión:</strong></p>
            <p>
              Como <span v-html="renderLatex('1.667 < 2.131')"></span>,
              <strong>no rechazamos H₀</strong>. No hay suficiente evidencia para rechazar la
              afirmación del fabricante de que el peso promedio es 500 gramos.
            </p>
          </div>

          <h3>Ejemplo 2: Prueba t de Cola Izquierda</h3>

          <div class="example-box">
            <p><strong>Problema:</strong></p>
            <p>
              Una empresa afirma que el tiempo promedio de espera en su servicio al cliente es menor
              a 15 minutos. Se toma una muestra de 20 clientes:
            </p>
            <ul>
              <li>Media muestral: <span v-html="renderLatex('\\bar{x} = 13.5')"></span> minutos</li>
              <li>
                Desviación estándar muestral: <span v-html="renderLatex('s = 4')"></span> minutos
              </li>
              <li>Tamaño de muestra: <span v-html="renderLatex('n = 20')"></span></li>
            </ul>
            <p>¿Hay evidencia para apoyar la afirmación de la empresa con α = 0.01?</p>

            <h4>Paso 1: Establecer las hipótesis</h4>
            <div v-html="renderLatexDisplay('H_0: \\mu \\geq 15')"></div>
            <div v-html="renderLatexDisplay('H_1: \\mu < 15')"></div>
            <p><em>Es una prueba de cola izquierda porque H₁ usa &lt;</em></p>

            <h4>Paso 2: Nivel de significancia</h4>
            <div v-html="renderLatexDisplay('\\alpha = 0.01')"></div>

            <h4>Paso 3: Calcular el estadístico de prueba</h4>
            <div
              v-html="
                renderLatexDisplay(
                  't = \\frac{13.5 - 15}{4 / \\sqrt{20}} = \\frac{-1.5}{0.894} = -1.677',
                )
              "
            ></div>
            <div v-html="renderLatexDisplay('gl = 20 - 1 = 19')"></div>

            <div class="code-block">
              <pre><code>from scipy.stats import t
import math

# Datos
x_bar = 13.5
mu_0 = 15
s = 4
n = 20
gl = n - 1

# Calcular estadístico t
t_calculado = (x_bar - mu_0) / (s / math.sqrt(n))
print(f"Estadístico t: {t_calculado:.3f}")
# Resultado: -1.677</code></pre>
            </div>

            <h4>Paso 4: Determinar el valor crítico</h4>
            <div class="code-block">
              <pre><code>from scipy.stats import t

alpha = 0.01
gl = 19
t_critico = t.ppf(alpha, gl)
print(f"Valor crítico: {t_critico:.3f}")
# Resultado: -2.539</code></pre>
            </div>

            <p>
              <strong>Valor crítico:</strong>
              <span v-html="renderLatex('t_{\\alpha, gl} = -2.539')"></span>
            </p>
            <p>
              <strong>Región de rechazo:</strong> <span v-html="renderLatex('t < -2.539')"></span>
            </p>

            <h4>Paso 5: Tomar la decisión</h4>
            <p><strong>Comparación:</strong></p>
            <div v-html="renderLatexDisplay('t = -1.677')"></div>
            <div v-html="renderLatexDisplay('t_{crítico} = -2.539')"></div>

            <div class="decision-rule">
              <p><strong>Regla de Decisión para Prueba de Cola Izquierda:</strong></p>
              <div
                v-html="
                  renderLatexDisplay('\\text{Si } t < t_{\\alpha, gl}, \\text{ se rechaza } H_0')
                "
              ></div>
              <div
                v-html="
                  renderLatexDisplay(
                    '\\text{Si } t \\geq t_{\\alpha, gl}, \\text{ no se rechaza } H_0',
                  )
                "
              ></div>
            </div>

            <p><strong>Conclusión:</strong></p>
            <p>
              Como <span v-html="renderLatex('-1.677 > -2.539')"></span> (es decir, -1.677 no es
              menor que -2.539), <strong>no rechazamos H₀</strong>. No hay suficiente evidencia para
              apoyar la afirmación de que el tiempo promedio es menor a 15 minutos.
            </p>
          </div>
        </div>

        <div class="tip-section">
          <h3>Diferencias Clave: Pruebas z vs Pruebas t</h3>

          <div class="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>Característica</th>
                  <th>Prueba z</th>
                  <th>Prueba t</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>σ (Desv. Estándar Poblacional)</strong></td>
                  <td>Conocida</td>
                  <td>Desconocida (se usa s)</td>
                </tr>
                <tr>
                  <td><strong>Tamaño de Muestra</strong></td>
                  <td>Generalmente n ≥ 30</td>
                  <td>Cualquier n (especialmente n &lt; 30)</td>
                </tr>
                <tr>
                  <td><strong>Estadístico</strong></td>
                  <td>
                    <span
                      v-html="renderLatex('z = \\frac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}')"
                    ></span>
                  </td>
                  <td>
                    <span
                      v-html="renderLatex('t = \\frac{\\bar{x} - \\mu_0}{s / \\sqrt{n}}')"
                    ></span>
                  </td>
                </tr>
                <tr>
                  <td><strong>Grados de Libertad</strong></td>
                  <td>No aplica</td>
                  <td>gl = n - 1</td>
                </tr>
                <tr>
                  <td><strong>Distribución</strong></td>
                  <td>Normal Estándar</td>
                  <td>t-Student (varía según gl)</td>
                </tr>
                <tr>
                  <td><strong>Python</strong></td>
                  <td>scipy.stats.norm</td>
                  <td>scipy.stats.t</td>
                </tr>
                <tr>
                  <td><strong>Excel</strong></td>
                  <td>INV.NORM.ESTAND</td>
                  <td>INV.T o INV.T.2C</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="tip-section">
          <h3>💡 Reglas de Decisión para Pruebas t</h3>

          <h4>1. Prueba de Dos Colas</h4>
          <div class="decision-rule">
            <div
              v-html="
                renderLatexDisplay('\\text{Si } |t| > t_{\\alpha/2, gl}, \\text{ se rechaza } H_0')
              "
            ></div>
            <div
              v-html="
                renderLatexDisplay(
                  '\\text{Si } |t| \\leq t_{\\alpha/2, gl}, \\text{ no se rechaza } H_0',
                )
              "
            ></div>
          </div>

          <h4>2. Prueba de Cola Derecha</h4>
          <div class="decision-rule">
            <div
              v-html="
                renderLatexDisplay('\\text{Si } t > t_{\\alpha, gl}, \\text{ se rechaza } H_0')
              "
            ></div>
            <div
              v-html="
                renderLatexDisplay(
                  '\\text{Si } t \\leq t_{\\alpha, gl}, \\text{ no se rechaza } H_0',
                )
              "
            ></div>
          </div>

          <h4>3. Prueba de Cola Izquierda</h4>
          <div class="decision-rule">
            <div
              v-html="
                renderLatexDisplay('\\text{Si } t < t_{\\alpha, gl}, \\text{ se rechaza } H_0')
              "
            ></div>
            <div
              v-html="
                renderLatexDisplay(
                  '\\text{Si } t \\geq t_{\\alpha, gl}, \\text{ no se rechaza } H_0',
                )
              "
            ></div>
          </div>
        </div>
      </div>

      <!-- PRUEBAS DE PROPORCIÓN -->
      <div v-if="activeTab === 'pruebas-proporcion'" class="content-section">
        <h2>Pruebas de Hipótesis de Una Proporción</h2>

        <div class="intro-box">
          <h3>¿Cuándo usar pruebas de proporción?</h3>
          <p>
            Las pruebas de hipótesis de una proporción se utilizan cuando queremos probar
            afirmaciones sobre la proporción de una población que tiene una característica
            específica (éxito/fracaso, sí/no, etc.).
          </p>
          <ul>
            <li>La variable es <strong>cualitativa dicotómica</strong> (dos categorías)</li>
            <li>Trabajamos con <strong>proporciones muestrales</strong> (p̂)</li>
            <li>La distribución muestral es aproximadamente <strong>normal</strong></li>
            <li>
              Se cumple la condición: <span v-html="renderLatex('np \\geq 5')"></span> y
              <span v-html="renderLatex('n(1-p) \\geq 5')"></span>
            </li>
          </ul>
        </div>

        <div class="formula-section">
          <h3>Fórmula del Estadístico z para Proporciones</h3>
          <div v-html="formulaProporciones"></div>

          <p><strong>Donde:</strong></p>
          <ul>
            <li><span v-html="renderLatex('\\bar{p}')"></span> = Proporción muestral</li>
            <li><span v-html="renderLatex('p_0')"></span> = Proporción hipotética (de H₀)</li>
            <li><span v-html="renderLatex('n')"></span> = Tamaño de la muestra</li>
          </ul>

          <div class="important-note">
            <h4>⚠️ Condiciones de Aplicabilidad</h4>
            <p>Para usar esta fórmula, se deben cumplir:</p>
            <div
              v-html="renderLatexDisplay('np_0 \\geq 5 \\quad \\text{y} \\quad n(1-p_0) \\geq 5')"
            ></div>
            <p>Si no se cumplen, considerar pruebas exactas como la prueba binomial.</p>
          </div>
        </div>

        <div class="formula-section">
          <h3>🔍 Cálculo del Valor Crítico z</h3>
          <p>
            El valor crítico z se obtiene de la distribución normal estándar, igual que en las
            pruebas de medias con σ conocida.
          </p>

          <h4>1. Prueba de Dos Colas (H1: p ≠ p0)</h4>
          <div class="code-block">
            <strong>Python:</strong>
            <pre><code>from scipy.stats import norm

alpha = 0.05
z_critico = norm.ppf(1 - alpha/2)
print(f"Valor crítico: ±{z_critico:.3f}")
# Resultado: ±1.960</code></pre>
          </div>

          <div class="code-block">
            <strong>Excel:</strong>
            <pre><code>=INV.NORM.ESTAND(1-0.05/2)
Resultado: 1.96</code></pre>
          </div>

          <h4>2. Prueba de Cola Derecha (H1: p > p0)</h4>
          <div class="code-block">
            <strong>Python:</strong>
            <pre><code>from scipy.stats import norm

alpha = 0.05
z_critico = norm.ppf(1 - alpha)
print(f"Valor crítico: +{z_critico:.3f}")
# Resultado: +1.645</code></pre>
          </div>

          <div class="code-block">
            <strong>Excel:</strong>
            <pre><code>=INV.NORM.ESTAND(1-0.05)
Resultado: 1.645</code></pre>
          </div>

          <h4>3. Prueba de Cola Izquierda (H1: p &lt; p0)</h4>
          <div class="code-block">
            <strong>Python:</strong>
            <pre><code>from scipy.stats import norm

alpha = 0.05
z_critico = norm.ppf(alpha)
print(f"Valor crítico: {z_critico:.3f}")
# Resultado: -1.645</code></pre>
          </div>

          <div class="code-block">
            <strong>Excel:</strong>
            <pre><code>=INV.NORM.ESTAND(0.05)
Resultado: -1.645</code></pre>
          </div>
        </div>

        <div class="examples-section">
          <h3>Ejemplo Completo: Prueba de Proporción</h3>

          <div class="example-box">
            <p><strong>Problema:</strong></p>
            <p>
              Una fábrica afirma que el 85% de sus productos no tienen defectos. Se inspecciona una
              muestra de 200 productos y se encuentra que 160 no tienen defectos. ¿Hay evidencia
              para rechazar la afirmación de la fábrica con α = 0.05?
            </p>

            <h4>Paso 1: Establecer las hipótesis</h4>
            <div v-html="renderLatexDisplay('H_0: p = 0.85')"></div>
            <div v-html="renderLatexDisplay('H_1: p \\neq 0.85')"></div>
            <p><em>Es una prueba de dos colas porque H₁ usa ≠</em></p>

            <h4>Paso 2: Nivel de significancia</h4>
            <div v-html="renderLatexDisplay('\\alpha = 0.05')"></div>

            <h4>Paso 3: Calcular la proporción muestral</h4>
            <div v-html="renderLatexDisplay('\\hat{p} = \\frac{160}{200} = 0.80')"></div>

            <h4>🔍 Paso 4: Verificar condiciones</h4>
            <div v-html="renderLatexDisplay('np_0 = 200 \\times 0.85 = 170 \\geq 5')"></div>
            <div v-html="renderLatexDisplay('n(1-p_0) = 200 \\times 0.15 = 30 \\geq 5')"></div>
            <p><em>Las condiciones se cumplen ✓</em></p>

            <h4>Paso 5: Calcular el estadístico de prueba</h4>
            <div
              v-html="
                renderLatexDisplay(
                  'z = \\frac{0.80 - 0.85}{\\sqrt{\\frac{0.85 \\times 0.15}{200}}} = \\frac{-0.05}{\\sqrt{\\frac{0.1275}{200}}} = \\frac{-0.05}{\\sqrt{0.0006375}} = \\frac{-0.05}{0.02524} = -1.98',
                )
              "
            ></div>

            <div class="code-block">
              <pre><code>from scipy.stats import norm
import math

# Datos
p_hat = 160/200  # 0.80
p0 = 0.85
n = 200

# Calcular estadístico z
z = (p_hat - p0) / math.sqrt(p0 * (1 - p0) / n)
print(f"Estadístico z: {z:.3f}")
# Resultado: -1.980</code></pre>
            </div>

            <h4>Paso 6: Determinar el valor crítico</h4>
            <div class="code-block">
              <pre><code>from scipy.stats import norm

alpha = 0.05
z_critico = norm.ppf(1 - alpha/2)
print(f"Valor crítico: ±{z_critico:.3f}")
# Resultado: ±1.960</code></pre>
            </div>

            <p>
              <strong>Valor crítico:</strong>
              <span v-html="renderLatex('z_{\\alpha/2} = \\pm 1.960')"></span>
            </p>
            <p>
              <strong>Región de rechazo:</strong> <span v-html="renderLatex('z < -1.960')"></span> o
              <span v-html="renderLatex('z > 1.960')"></span>
            </p>

            <h4>Paso 7: Tomar la decisión</h4>
            <p><strong>Comparación:</strong></p>
            <div v-html="renderLatexDisplay('|z| = |-1.98| = 1.98')"></div>
            <div v-html="renderLatexDisplay('z_{crítico} = 1.96')"></div>

            <div class="decision-rule">
              <p><strong>Regla de Decisión:</strong></p>
              <div
                v-html="
                  renderLatexDisplay('\\text{Si } |z| > z_{\\alpha/2}, \\text{ se rechaza } H_0')
                "
              ></div>
              <div
                v-html="
                  renderLatexDisplay(
                    '\\text{Si } |z| \\leq z_{\\alpha/2}, \\text{ no se rechaza } H_0',
                  )
                "
              ></div>
            </div>

            <p><strong>Conclusión:</strong></p>
            <p>
              Como <span v-html="renderLatex('1.98 > 1.96')"></span>,
              <strong>rechazamos H0</strong>. Hay evidencia suficiente para afirmar que la
              proporción de productos sin defectos es diferente del 85%.
            </p>
          </div>
        </div>

        <div class="tip-section">
          <h3>Diferencias: Pruebas de Medias vs Pruebas de Proporciones</h3>

          <div class="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>Aspecto</th>
                  <th>Pruebas de Medias</th>
                  <th>Pruebas de Proporciones</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Tipo de Variable</strong></td>
                  <td>Cuatitativa continua</td>
                  <td>Cualitativa dicotómica</td>
                </tr>
                <tr>
                  <td><strong>Parámetro</strong></td>
                  <td>Media poblacional (μ)</td>
                  <td>Proporción poblacional (p)</td>
                </tr>
                <tr>
                  <td><strong>Estadístico Muestral</strong></td>
                  <td>Media muestral (x̄)</td>
                  <td>Proporción muestral (p̂)</td>
                </tr>
                <tr>
                  <td><strong>Distribución</strong></td>
                  <td>Normal o t-Student</td>
                  <td>Siempre Normal (z)</td>
                </tr>
                <tr>
                  <td><strong>Condiciones</strong></td>
                  <td>Normalidad, σ conocido/desconocido</td>
                  <td>np ≥ 5 y n(1-p) ≥ 5</td>
                </tr>
                <tr>
                  <td><strong>Ejemplos</strong></td>
                  <td>Peso, altura, ingresos</td>
                  <td>Porcentaje de aprobación, defectos</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- CALCULADORA INTERACTIVA -->
      <div v-if="activeTab === 'calculadora'" class="content-section">
        <h2>Calculadora Interactiva de Pruebas de Hipótesis</h2>

        <div class="calculator-container">
          <div class="calculator-form">
            <h3>Parámetros de la Prueba</h3>

            <div class="form-group">
              <label>Tipo de Prueba:</label>
              <select v-model="tipoPrueba">
                <option value="dos-colas">Dos Colas (μ &ne; μ₀)</option>
                <option value="cola-derecha">Cola Derecha (μ &gt; μ₀)</option>
                <option value="cola-izquierda">Cola Izquierda (μ &lt; μ₀)</option>
              </select>
            </div>

            <div class="form-group">
              <label>¿Conoces la desviación estándar poblacional (σ)?</label>
              <select v-model="tipoDesviacion">
                <option value="conocida">Sí, σ es conocida</option>
                <option value="desconocida">No, σ es desconocida (usar t-Student)</option>
              </select>
            </div>

            <div class="form-group">
              <label>Media hipotética (μ₀):</label>
              <input v-model.number="mu0" type="number" step="0.01" />
            </div>

            <div class="form-group">
              <label v-html="'Media muestral (' + renderLatex('\\overline{x}') + ')'"></label>
              <input v-model.number="mediaMuestral" type="number" step="0.01" />
            </div>

            <div v-if="tipoDesviacion === 'conocida'" class="form-group">
              <label>Desviación estándar poblacional (σ):</label>
              <input v-model.number="sigma" type="number" step="0.01" />
            </div>

            <div v-else class="form-group">
              <label v-html="'Desviación estándar muestral (' + renderLatex('s') + ')'"></label>
              <input v-model.number="desviacionMuestral" type="number" step="0.01" />
            </div>

            <div class="form-group">
              <label>Tamaño de muestra (n):</label>
              <input v-model.number="n" type="number" min="1" />
            </div>

            <div class="form-group">
              <label>Nivel de significancia (α):</label>
              <select v-model="alpha">
                <option value="0.10">0.10 (10%)</option>
                <option value="0.05">0.05 (5%)</option>
                <option value="0.01">0.01 (1%)</option>
              </select>
            </div>

            <button @click="calcularPrueba" class="calculate-btn">Calcular Prueba</button>
          </div>

          <div v-if="resultadoPrueba" class="calculator-results">
            <h3>Resultados de la Prueba</h3>

            <div class="result-item">
              <strong>Hipótesis:</strong>
              <div class="hypothesis-display">
                <div>H₀: μ {{ simboloH0 }} {{ mu0 }}</div>
                <div>H₁: μ {{ simboloH1 }} {{ mu0 }}</div>
              </div>
            </div>

            <div class="result-item">
              <strong
                >Estadístico de prueba ({{ resultadoPrueba.tipoEstadistico }})<span
                  v-if="resultadoPrueba.gradosLibertad"
                >
                  con {{ resultadoPrueba.gradosLibertad }} gl</span
                >:</strong
              >
              <span class="result-value">{{ resultadoPrueba.estadistico.toFixed(4) }}</span>
            </div>

            <div class="result-item">
              <strong>Valor crítico:</strong>
              <span class="result-value">{{ resultadoPrueba.valorCritico.toFixed(4) }}</span>
            </div>

            <div class="result-item">
              <strong>Región de rechazo:</strong>
              <span class="result-value">{{ resultadoPrueba.regionRechazo }}</span>
            </div>

            <div class="decision-result" :class="resultadoPrueba.decision">
              <strong>Decisión:</strong>
              <span>{{ resultadoPrueba.decisionTexto }}</span>
            </div>

            <div class="conclusion-result">
              <strong>Conclusión:</strong>
              <p>{{ resultadoPrueba.conclusion }}</p>
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
import { ref, computed } from 'vue'
import * as katex from 'katex'
import 'katex/dist/katex.min.css'

// @ts-expect-error - jstat no tiene tipos oficiales
import * as jStat from 'jstat'

// Interfaz para el resultado de la prueba
interface ResultadoPrueba {
  estadistico: number
  tipoEstadistico: 'z' | 't'
  gradosLibertad?: number
  valorCritico: number
  regionRechazo: string
  decision: string
  decisionTexto: string
  conclusion: string
}

// Funciones para renderizar LaTeX
const renderLatex = (latex: string): string => {
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

const renderLatexDisplay = (latex: string): string => {
  try {
    return katex.renderToString(latex, {
      throwOnError: false,
      displayMode: true,
    })
  } catch (error) {
    console.error('Error rendering LaTeX:', error)
    return latex
  }
}

// Computed property para la fórmula de proporciones
const formulaProporciones = computed(() => {
  try {
    return katex.renderToString('z = \\frac{\\bar{p} - p_{0}}{\\sqrt{\\frac{p_{0}(1-p_{0})}{n}}}', {
      throwOnError: false,
      displayMode: true,
    })
  } catch (error) {
    console.error('Error rendering formula:', error)
    return 'z = \\frac{\\bar{p} - p_{0}}{\\sqrt{\\frac{p_{0}(1-p_{0})}{n}}}'
  }
})

// Configuración de pestañas
const tabs = [
  { id: 'introduccion', label: 'Introducción' },
  { id: 'cinco-pasos', label: '5 Pasos del Procedimiento' },
  { id: 'tipos-pruebas', label: 'Tipos de Pruebas' },
  { id: 'pruebas-z', label: 'Pruebas z (σ conocida)' },
  { id: 'pruebas-t', label: 'Pruebas t-Student (σ desconocida)' },
  { id: 'pruebas-proporcion', label: 'Pruebas de Proporción' },
  { id: 'calculadora', label: 'Calculadora' },
]

const activeTab = ref('introduccion')

// Calculadora
const tipoPrueba = ref('dos-colas')
const tipoDesviacion = ref('conocida') // 'conocida' o 'desconocida'
const mu0 = ref(100)
const mediaMuestral = ref(98)
const sigma = ref(10)
const desviacionMuestral = ref(10) // Para cuando σ es desconocida
const n = ref(36)
const alpha = ref('0.05')

const simboloH0 = computed(() => {
  switch (tipoPrueba.value) {
    case 'dos-colas':
      return '='
    case 'cola-derecha':
      return '≤'
    case 'cola-izquierda':
      return '≥'
    default:
      return '='
  }
})

const simboloH1 = computed(() => {
  switch (tipoPrueba.value) {
    case 'dos-colas':
      return '≠'
    case 'cola-derecha':
      return '>'
    case 'cola-izquierda':
      return '<'
    default:
      return '≠'
  }
})

const resultadoPrueba = ref<ResultadoPrueba | null>(null)

const calcularPrueba = () => {
  let estadistico = 0
  let tipoEstadistico: 'z' | 't' = 'z'
  let gradosLibertad: number | undefined

  if (tipoDesviacion.value === 'conocida') {
    // Prueba Z: σ conocida
    estadistico = (mediaMuestral.value - mu0.value) / (sigma.value / Math.sqrt(n.value))
    tipoEstadistico = 'z'
  } else {
    // Prueba t-Student: σ desconocida
    estadistico =
      (mediaMuestral.value - mu0.value) / (desviacionMuestral.value / Math.sqrt(n.value))
    tipoEstadistico = 't'
    gradosLibertad = n.value - 1
  }

  let valorCritico = 0
  let regionRechazo = ''
  let decision = ''
  let decisionTexto = ''
  let conclusion = ''

  const alphaNum = parseFloat(alpha.value)

  // Función para obtener valor crítico t-Student usando jStat
  const getValorCriticoT = (df: number, alpha: number): number => {
    // Usar jStat para calcular el percentil de la distribución t
    // jStat.studentt.inv(p, df) calcula el valor t donde P(T <= t) = p
    // Para cola derecha: queremos P(T > t) = alpha, entonces p = 1 - alpha
    // Para cola izquierda: queremos P(T < t) = alpha, entonces p = alpha
    // Para dos colas: queremos P(|T| > t) = alpha, entonces p = 1 - alpha/2

    // Nota: Esta función recibe el alpha ya ajustado según el tipo de prueba
    // Para dos colas: alpha = alpha/2
    // Para cola derecha: alpha = alpha
    // Para cola izquierda: alpha = alpha

    // Calcular el percentil correspondiente
    const p = 1 - alpha
    return jStat.studentt.inv(p, df)
  }

  switch (tipoPrueba.value) {
    case 'dos-colas':
      if (tipoEstadistico === 'z') {
        // Valores críticos z para α/2
        valorCritico =
          alphaNum === 0.1 ? 1.645 : alphaNum === 0.05 ? 1.96 : alphaNum === 0.01 ? 2.576 : 1.96
      } else {
        // Valores críticos t para α/2
        valorCritico = getValorCriticoT(gradosLibertad!, alphaNum / 2)
      }
      regionRechazo = `${tipoEstadistico} < -${valorCritico.toFixed(3)} o ${tipoEstadistico} > ${valorCritico.toFixed(3)}`
      if (Math.abs(estadistico) > valorCritico) {
        decision = 'rechazar'
        decisionTexto = 'Rechazar H₀'
        conclusion = `Hay evidencia suficiente para afirmar que la media poblacional es diferente de ${mu0.value}.`
      } else {
        decision = 'no-rechazar'
        decisionTexto = 'No rechazar H₀'
        conclusion = `No hay evidencia suficiente para afirmar que la media poblacional difiere de ${mu0.value}.`
      }
      break

    case 'cola-derecha':
      if (tipoEstadistico === 'z') {
        // Valores críticos z para α (cola derecha)
        valorCritico =
          alphaNum === 0.1 ? 1.282 : alphaNum === 0.05 ? 1.645 : alphaNum === 0.01 ? 2.326 : 1.645
      } else {
        // Valores críticos t para α (cola derecha)
        valorCritico = getValorCriticoT(gradosLibertad!, alphaNum)
      }
      regionRechazo = `${tipoEstadistico} > ${valorCritico.toFixed(3)}`
      if (estadistico > valorCritico) {
        decision = 'rechazar'
        decisionTexto = 'Rechazar H₀'
        conclusion = `Hay evidencia suficiente para afirmar que la media poblacional es mayor que ${mu0.value}.`
      } else {
        decision = 'no-rechazar'
        decisionTexto = 'No rechazar H₀'
        conclusion = `No hay evidencia suficiente para afirmar que la media poblacional es mayor que ${mu0.value}.`
      }
      break

    case 'cola-izquierda':
      if (tipoEstadistico === 'z') {
        // Valores críticos z para α (cola izquierda)
        valorCritico =
          alphaNum === 0.1
            ? -1.282
            : alphaNum === 0.05
              ? -1.645
              : alphaNum === 0.01
                ? -2.326
                : -1.645
      } else {
        // Valores críticos t para α (cola izquierda)
        valorCritico = -getValorCriticoT(gradosLibertad!, alphaNum)
      }
      regionRechazo = `${tipoEstadistico} < ${valorCritico.toFixed(3)}`
      if (estadistico < valorCritico) {
        decision = 'rechazar'
        decisionTexto = 'Rechazar H₀'
        conclusion = `Hay evidencia suficiente para afirmar que la media poblacional es menor que ${mu0.value}.`
      } else {
        decision = 'no-rechazar'
        decisionTexto = 'No rechazar H₀'
        conclusion = `No hay evidencia suficiente para afirmar que la media poblacional es menor que ${mu0.value}.`
      }
      break
  }

  resultadoPrueba.value = {
    estadistico,
    tipoEstadistico,
    gradosLibertad,
    valorCritico,
    regionRechazo,
    decision,
    decisionTexto,
    conclusion,
  }
}

// Función para calcular valores críticos (simplificada)
// Para producción, usar una librería completa como jStat
</script>

<style scoped>
@import '@/assets/styles/main.css';

.pruebas-hipotesis-una-muestra-view {
  padding: 1rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.hero {
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  color: white;
  padding: 3rem 2rem;
  border-radius: 12px;
  margin-bottom: 2rem;
  text-align: center;
}

.hero h1 {
  margin-bottom: 1rem;
  font-size: 2.5rem;
  font-weight: 700;
}

.hero p {
  font-size: 1.2rem;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
}

.tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  background: white;
  border-radius: 50px;
  padding: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.tab-button {
  padding: 0.8rem 1.5rem;
  cursor: pointer;
  border-radius: 50px;
  transition: all 0.3s ease;
  font-weight: bold;
  border: none;
  background: none;
}

.tab-button.active {
  background: var(--primary);
  color: white;
}

.tab-button:hover:not(.active) {
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
  color: var(--primary);
  margin-bottom: 1.5rem;
  border-bottom: 2px solid #ecf0f1;
  padding-bottom: 0.5rem;
}

.definition-box {
  background: #e8f4f8;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  border-left: 4px solid #3498db;
}

.definition-box h3 {
  color: #1976d2;
  margin-bottom: 1rem;
}

.analogy-box {
  background: #fff3cd;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  border-left: 4px solid #ffc107;
}

.analogy-box h3 {
  color: #856404;
  margin-bottom: 1rem;
}

.steps-container {
  display: grid;
  gap: 2rem;
}

.step-card {
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 10px;
  border-left: 4px solid var(--primary);
}

.step-number {
  background: var(--primary);
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2rem;
  flex-shrink: 0;
}

.step-content h3 {
  color: var(--primary);
  margin-bottom: 1rem;
}

.step-detail {
  margin-top: 1rem;
}

.formula-example {
  background: white;
  padding: 1rem;
  border-radius: 6px;
  margin: 1rem 0;
  border: 1px solid #e0e0e0;
  font-family: 'Courier New', monospace;
}

.alpha-levels {
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
  flex-wrap: wrap;
}

.alpha-option {
  background: white;
  padding: 0.8rem;
  border-radius: 6px;
  border: 1px solid #e0e0e0;
  flex: 1;
  min-width: 150px;
  text-align: center;
}

.errors-table {
  margin: 1.5rem 0;
}

.errors-table table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;
}

.errors-table th,
.errors-table td {
  padding: 0.8rem;
  text-align: center;
  border: 1px solid #ddd;
}

.errors-table th {
  background: var(--primary);
  color: white;
}

.correct {
  background: #d4edda;
  color: #155724;
}

.error-type-i {
  background: #f8d7da;
  color: #721c24;
}

.error-type-ii {
  background: #fff3cd;
  color: #856404;
}

.formula-box {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  margin: 1.5rem 0;
  border: 1px solid #e0e0e0;
}

.latex-formula {
  text-align: center;
  margin: 1rem 0;
  padding: 1rem;
  background: white;
  border-radius: 6px;
  font-size: 1.2rem;
}

.formula-display {
  font-size: 1.3rem;
  text-align: center;
  margin: 1rem 0;
  font-family: 'Courier New', monospace;
  font-weight: 600;
}

.formula {
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 1rem;
  font-family: 'Times New Roman', serif;
}

.chart-placeholder {
  margin: 2rem 0;
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 8px;
  border: 2px dashed #dee2e6;
  text-align: center;
}

.placeholder-box {
  background: white;
  padding: 3rem;
  border-radius: 6px;
  margin: 1rem 0;
  border: 1px solid #e0e0e0;
  color: #6c757d;
}

.decision-rules {
  background: #e8f4f8;
  padding: 1rem;
  border-radius: 6px;
  margin: 1rem 0;
}

.important-note {
  background: #fff3cd;
  padding: 1.5rem;
  border-radius: 6px;
  margin: 1rem 0;
  border-left: 4px solid #ffc107;
}

.critical-list {
  padding-left: 0.5rem;
}

.critical-list ul {
  margin: 0.5rem 0;
  padding-left: 1.5rem;
}

.critical-list li {
  margin: 0.5rem 0;
  line-height: 1.6;
}

.test-types-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.test-type-card {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 10px;
  border-left: 4px solid var(--primary);
}

.test-type-card h3 {
  color: var(--primary);
  margin-bottom: 1rem;
}

.subtypes {
  margin-top: 1.5rem;
}

.subtype {
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e0e0e0;
}

.subtype:last-child {
  border-bottom: none;
}

.subtype h4 {
  color: var(--secondary);
  margin-bottom: 0.5rem;
}

.example {
  background: white;
  padding: 1rem;
  border-radius: 6px;
  margin: 1rem 0;
  border: 1px solid #e0e0e0;
  font-family: 'Courier New', monospace;
}

.examples-container {
  display: grid;
  gap: 2rem;
}

.example-card {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 10px;
  border-left: 4px solid var(--primary);
}

.example-card h3 {
  color: var(--primary);
  margin-bottom: 1rem;
}

.hypothesis-setup {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  margin: 1.5rem 0;
  border: 1px solid #e0e0e0;
}

.calculation {
  background: #e8f4f8;
  padding: 1.5rem;
  border-radius: 8px;
  margin: 1.5rem 0;
}

.formula-steps {
  font-family: 'Courier New', monospace;
  background: white;
  padding: 1rem;
  border-radius: 6px;
  border: 1px solid #e0e0e0;
}

.step {
  margin: 0.5rem 0;
  padding: 0.5rem;
  background: #f8f9fa;
  border-radius: 4px;
}

.conclusion {
  background: #d4edda;
  padding: 1rem;
  border-radius: 6px;
  margin: 1rem 0;
  border-left: 4px solid #28a745;
}

.code-example {
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem 0;
  font-family: 'Courier New', monospace;
  overflow-x: auto;
}

.code-example.python {
  border-left: 4px solid #3776ab;
}

.code-example.excel {
  border-left: 4px solid #217346;
}

.highlight-result {
  background: #fff3cd;
  padding: 0.8rem;
  border-radius: 6px;
  margin: 1rem 0;
  font-weight: bold;
  color: #856404;
  border-left: 4px solid #ffc107;
}

.decision-highlight {
  background: #e8f4f8;
  padding: 1rem;
  border-radius: 6px;
  margin: 1rem 0;
  font-weight: bold;
  color: #0c5460;
  border-left: 4px solid #17a2b8;
  font-size: 1.1rem;
}

.calculator-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.calculator-form {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 10px;
}

.calculator-form h3 {
  color: var(--primary);
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #2c3e50;
}

.form-group input,
.form-group select {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

.calculate-btn {
  width: 100%;
  padding: 1rem;
  background: var(--primary);
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;
}

.calculate-btn:hover {
  background: var(--primary-dark);
}

.calculator-results {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  border: 1px solid #e0e0e0;
}

.calculator-results h3 {
  color: var(--primary);
  margin-bottom: 1.5rem;
}

.result-item {
  margin-bottom: 1rem;
  padding: 0.8rem;
  background: #f8f9fa;
  border-radius: 6px;
}

.result-value {
  font-weight: bold;
  color: var(--primary);
  font-family: 'Courier New', monospace;
}

.hypothesis-display {
  font-family: 'Courier New', monospace;
  font-size: 1.1rem;
  margin-top: 0.5rem;
}

.decision-result {
  margin: 1.5rem 0;
  padding: 1rem;
  border-radius: 6px;
  font-weight: bold;
  text-align: center;
}

.decision-result.rechazar {
  background: #d4edda;
  color: #155724;
  border: 2px solid #28a745;
}

.decision-result.no-rechazar {
  background: #fff3cd;
  color: #856404;
  border: 2px solid #ffc107;
}

.conclusion-result {
  margin-top: 1.5rem;
  padding: 1rem;
  background: #e8f4f8;
  border-radius: 6px;
  border-left: 4px solid #3498db;
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
  background: var(--primary);
  color: white;
}

.btn-primary:hover {
  background: var(--primary-dark);
}

.btn-secondary {
  background: #7f8c8d;
  color: white;
}

.btn-secondary:hover {
  background: #6c7a7b;
}

.chart-container {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
  border: 1px solid #e9ecef;
}

.hypothesis-chart {
  max-width: 100%;
  height: auto;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.critical-values-table {
  margin: 1rem 0;
  overflow-x: auto;
}

.critical-values-table table {
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
  background: white;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.critical-values-table th,
.critical-values-table td {
  padding: 0.75rem;
  text-align: center;
  border: 1px solid #dee2e6;
}

.critical-values-table th {
  background: var(--primary);
  color: white;
  font-weight: 600;
}

.critical-values-table td {
  background: #f8f9fa;
}

.tips-container {
  display: grid;
  gap: 2rem;
}

.tip-section {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid var(--primary);
}

.tip-section h3 {
  color: var(--primary);
  margin-bottom: 1rem;
}

.code-example {
  background: white;
  padding: 1rem;
  border-radius: 6px;
  border: 1px solid #e9ecef;
}

.code-block {
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 6px;
  overflow-x: auto;
}

.code-block pre {
  margin: 0;
  padding: 1rem;
  background: #2d3748;
  color: #e2e8f0;
  border-radius: 6px;
  overflow-x: auto;
}

.code-block code {
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 0.9rem;
  line-height: 1.5;
}

.excel-table {
  background: white;
  border-radius: 6px;
  overflow-x: auto;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.excel-table table {
  width: 100%;
  border-collapse: collapse;
}

.excel-table th,
.excel-table td {
  padding: 0.75rem;
  border: 1px solid #dee2e6;
  text-align: left;
}

.excel-table th {
  background: #198754;
  color: white;
  font-weight: 600;
}

.excel-table code {
  background: #f8f9fa;
  padding: 0.25rem 0.5rem;
  border-radius: 3px;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 0.85rem;
}

.decision-rule {
  background: #e7f3ff;
  border: 2px solid #2196f3;
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1.5rem 0;
}

.decision-rule p {
  margin-bottom: 0.5rem;
  color: #0d47a1;
  font-weight: 600;
}

.comparison-table {
  background: white;
  border-radius: 6px;
  overflow-x: auto;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 1rem 0;
}

.comparison-table table {
  width: 100%;
  border-collapse: collapse;
}

.comparison-table th,
.comparison-table td {
  padding: 0.75rem;
  border: 1px solid #dee2e6;
  text-align: left;
}

.comparison-table th {
  background: #2196f3;
  color: white;
  font-weight: 600;
}

.comparison-table tr:nth-child(even) {
  background: #f8f9fa;
}

.intro-box {
  background: #e8f4f8;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  border-left: 4px solid var(--primary);
}

.intro-box h3 {
  color: var(--primary);
  margin-bottom: 1rem;
}

.formula-section {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 10px;
  margin: 2rem 0;
  border: 1px solid #e0e0e0;
}

.formula-section h3 {
  color: var(--primary);
  margin-bottom: 1.5rem;
}

.examples-section {
  margin: 2rem 0;
}

@media (max-width: 768px) {
  .test-types-container {
    grid-template-columns: 1fr;
  }

  .calculator-container {
    grid-template-columns: 1fr;
  }

  .step-card {
    flex-direction: column;
    text-align: center;
  }

  .alpha-levels {
    flex-direction: column;
  }

  .alpha-option {
    min-width: auto;
  }

  .hypothesis-chart {
    max-width: 100%;
    height: auto;
  }

  .critical-values-table {
    font-size: 0.9rem;
  }

  .tips-container {
    grid-template-columns: 1fr;
  }
}
</style>
