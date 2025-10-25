<template>
  <div class="container">
    <div class="hero">
      <h1>Intervalos de Confianza para Proporciones</h1>
      <p>
        Aprende a estimar rangos donde se encuentra la proporción poblacional real con un nivel de
        confianza determinado
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

    <!-- Proporción Muestral -->
    <div v-if="activeTab === 'proporcion'" class="content-section">
      <h2>🧩 Concepto de Proporción Muestral</h2>

      <div class="theory-box">
        <h3>Definición</h3>
        <p>
          Es el valor que obtenemos al calcular el
          <strong>porcentaje de individuos en una muestra</strong> que tienen cierta característica.
          Se representa como <strong v-html="renderLatex('\\hat{p}')"></strong>
          (p sombrero) y se calcula así:
        </p>

        <div class="formula-box">
          <div v-html="renderLatexDisplay('\\hat{p} = \\frac{x}{n}')"></div>
          <p class="formula-note">
            donde:<br />
            <strong>x:</strong> número de individuos con la característica de interés<br />
            <strong>n:</strong> tamaño de la muestra
          </p>
        </div>

        <div class="concept-card">
          <h4>💡 Interpretación</h4>
          <p>
            La proporción muestral <span v-html="renderLatex('\\hat{p}')"></span> es una
            <strong>estimación</strong> de la verdadera proporción poblacional (p). Como trabajamos
            con una muestra, no conocemos el valor exacto de p, pero podemos aproximarlo.
          </p>
        </div>
      </div>

      <div class="example-section">
        <h3>Ejemplo Práctico: Preferencia de Marca</h3>
        <p>
          Una empresa quiere conocer qué porcentaje de consumidores prefiere su marca. Encuesta a
          <strong>200 consumidores</strong> y encuentra que <strong>60</strong> prefieren su marca.
        </p>

        <div class="solution-steps">
          <div class="step">
            <h4>Paso 1: Identificar los valores</h4>
            <p><strong>x (éxitos):</strong> 60 consumidores prefieren la marca</p>
            <p><strong>n (tamaño de muestra):</strong> 200 consumidores</p>
          </div>

          <div class="step">
            <h4>Paso 2: Calcular la proporción muestral</h4>
            <div class="calculation">
              <div v-html="renderLatex('\\hat{p} = \\frac{x}{n} = \\frac{60}{200}')"></div>
              <div v-html="renderLatex('\\hat{p} = 0.3')"></div>
            </div>
          </div>

          <div class="result-box">
            <strong>Resultado:</strong> La proporción muestral es <strong>0.3 (30%)</strong>
            <p class="interpretation">
              Esto significa que en la muestra, el 30% de los consumidores prefieren la marca.
            </p>
          </div>
        </div>
      </div>

      <!-- Calculadora Interactiva -->
      <div class="interactive-section">
        <h3>Calculadora de Proporción Muestral</h3>
        <p>Calcula la proporción muestral con tus propios datos:</p>

        <div class="input-grid">
          <div class="input-group">
            <label>Número de éxitos (x):</label>
            <input
              v-model.number="calcProp.x"
              type="number"
              min="0"
              placeholder="Ej: 60"
              class="data-input"
            />
          </div>

          <div class="input-group">
            <label>Tamaño de muestra (n):</label>
            <input
              v-model.number="calcProp.n"
              type="number"
              min="1"
              placeholder="Ej: 200"
              class="data-input"
            />
          </div>
        </div>

        <button @click="calcularProporcion" class="btn btn-primary">Calcular</button>

        <div v-if="calcProp.resultado !== null" class="result-display">
          <h4>Resultados:</h4>
          <p>
            <strong>Proporción muestral (<span v-html="renderLatex('\\hat{p}')"></span>):</strong>
            {{ calcProp.resultado.toFixed(4) }}
          </p>
          <p><strong>Porcentaje:</strong> {{ (calcProp.resultado * 100).toFixed(2) }}%</p>
          <p>
            <strong>Complemento (<span v-html="renderLatex('1 - \\hat{p}')"></span>):</strong>
            {{ (1 - calcProp.resultado).toFixed(4) }} ({{
              ((1 - calcProp.resultado) * 100).toFixed(2)
            }}%)
          </p>
        </div>
      </div>

      <!-- Navegación -->
      <div class="tab-navigation">
        <router-link to="/inferencial" class="nav-btn nav-btn-prev">
          ← Volver a Estadística Inferencial
        </router-link>
        <button @click="activeTab = 'distribucion'" class="nav-btn nav-btn-next">
          Siguiente: Distribución Muestral →
        </button>
      </div>
    </div>

    <!-- Distribución de la Proporción Muestral -->
    <div v-if="activeTab === 'distribucion'" class="content-section">
      <h2>📈 Distribución de la Proporción Muestral</h2>

      <div class="theory-box">
        <h3>¿Qué sucede al tomar muchas muestras?</h3>
        <p>
          Cuando tomamos muchas muestras del mismo tamaño, la proporción muestral
          <span v-html="renderLatex('\\hat{p}')"></span>
          <strong>varía de muestra a muestra</strong>, y sigue una
          <strong>distribución aproximadamente normal</strong> si se cumplen ciertas condiciones.
        </p>

        <div class="warning-box">
          <h4>⚠️ Condiciones para Normalidad</h4>
          <p>
            La distribución de <span v-html="renderLatex('\\hat{p}')"></span> es aproximadamente
            normal si:
          </p>
          <ul>
            <li><span v-html="renderLatex('np \\geq 5')"></span></li>
            <li><span v-html="renderLatex('n(1-p) \\geq 5')"></span></li>
          </ul>
          <p>Estas condiciones aseguran que hay suficientes "éxitos" y "fracasos" en la muestra.</p>
        </div>

        <h3>Media y Desviación Estándar</h3>
        <p>
          La distribución de <span v-html="renderLatex('\\hat{p}')"></span> tiene las siguientes
          características:
        </p>

        <div class="formula-box">
          <p><strong>Media (valor esperado):</strong></p>
          <div v-html="renderLatexDisplay('\\mu_{\\hat{p}} = p')"></div>
          <p class="formula-note">
            La proporción muestral es un estimador insesgado de la proporción poblacional
          </p>
        </div>

        <div class="formula-box">
          <p><strong>Error estándar (desviación estándar):</strong></p>
          <div v-html="renderLatexDisplay('\\sigma_{\\hat{p}} = \\sqrt{\\frac{p(1-p)}{n}}')"></div>
          <p class="formula-note">
            Mide la variabilidad esperada de <span v-html="renderLatex('\\hat{p}')"></span> entre
            muestras
          </p>
        </div>
      </div>

      <div class="example-section">
        <h3>Ejemplo: Satisfacción de Clientes</h3>
        <p>
          Si la proporción real de clientes satisfechos es <strong>p = 0.8</strong> y se toma una
          muestra de <strong>n = 100</strong>, ¿cuál es la distribución de la proporción muestral?
        </p>

        <div class="solution-steps">
          <div class="step">
            <h4>Paso 1: Verificar condiciones de normalidad</h4>
            <div class="calculation">
              <div v-html="renderLatex('np = 100 \\times 0.8 = 80 \\geq 5 \\quad ✓')"></div>
              <div v-html="renderLatex('n(1-p) = 100 \\times 0.2 = 20 \\geq 5 \\quad ✓')"></div>
            </div>
            <p class="success-message">
              ✅ Se cumplen las condiciones, la distribución es aproximadamente normal
            </p>
          </div>

          <div class="step">
            <h4>Paso 2: Calcular la media</h4>
            <div class="calculation">
              <div v-html="renderLatex('\\mu_{\\hat{p}} = p = 0.8')"></div>
            </div>
          </div>

          <div class="step">
            <h4>Paso 3: Calcular el error estándar</h4>
            <div class="calculation">
              <div
                v-html="
                  renderLatex(
                    '\\sigma_{\\hat{p}} = \\sqrt{\\frac{p(1-p)}{n}} = \\sqrt{\\frac{0.8 \\times 0.2}{100}}',
                  )
                "
              ></div>
              <div
                v-html="
                  renderLatex('\\sigma_{\\hat{p}} = \\sqrt{\\frac{0.16}{100}} = \\sqrt{0.0016}')
                "
              ></div>
              <div v-html="renderLatex('\\sigma_{\\hat{p}} = 0.04')"></div>
            </div>
          </div>

          <div class="result-box">
            <strong>Conclusión:</strong>
            <p>
              Las proporciones muestrales estarán, en promedio, cerca de <strong>0.8</strong>, con
              una variación (error estándar) de <strong>±0.04</strong>.
            </p>
            <p>
              Esto significa que si tomáramos muchas muestras de 100 clientes, aproximadamente el
              68% de las muestras tendrían proporciones entre 0.76 y 0.84.
            </p>
          </div>
        </div>
      </div>

      <!-- Calculadora de Distribución -->
      <div class="interactive-section">
        <h3>Calculadora de Distribución Muestral</h3>
        <p>Calcula las características de la distribución:</p>

        <div class="input-grid">
          <div class="input-group">
            <label>Proporción poblacional (p):</label>
            <input
              v-model.number="calcDist.p"
              type="number"
              min="0"
              max="1"
              step="0.01"
              placeholder="Ej: 0.8"
              class="data-input"
            />
          </div>

          <div class="input-group">
            <label>Tamaño de muestra (n):</label>
            <input
              v-model.number="calcDist.n"
              type="number"
              min="1"
              placeholder="Ej: 100"
              class="data-input"
            />
          </div>
        </div>

        <button @click="calcularDistribucion" class="btn btn-primary">Calcular</button>

        <div v-if="calcDist.resultado !== null" class="result-display">
          <h4>Resultados:</h4>

          <div class="validation-box" v-if="calcDist.resultado.valido">
            <p class="success-message">✅ Se cumplen las condiciones de normalidad</p>
            <p>
              <span
                v-html="renderLatex('np = ' + calcDist.resultado.np.toFixed(2) + ' \\geq 5')"
              ></span>
            </p>
            <p>
              <span
                v-html="renderLatex('n(1-p) = ' + calcDist.resultado.nq.toFixed(2) + ' \\geq 5')"
              ></span>
            </p>
          </div>
          <div class="validation-box error" v-else>
            <p class="error-message">⚠️ No se cumplen las condiciones de normalidad</p>
            <p><span v-html="renderLatex('np = ' + calcDist.resultado.np.toFixed(2))"></span></p>
            <p>
              <span v-html="renderLatex('n(1-p) = ' + calcDist.resultado.nq.toFixed(2))"></span>
            </p>
            <p>Se requiere una muestra más grande o usar métodos alternativos.</p>
          </div>

          <div class="distribution-params">
            <div class="param-card">
              <h5>Media</h5>
              <div
                v-html="renderLatex('\\mu_{\\hat{p}} = ' + calcDist.resultado.media.toFixed(4))"
              ></div>
            </div>
            <div class="param-card">
              <h5>Error Estándar</h5>
              <div
                v-html="
                  renderLatex('\\sigma_{\\hat{p}} = ' + calcDist.resultado.errorEstandar.toFixed(4))
                "
              ></div>
            </div>
          </div>

          <div class="interpretation-box">
            <h5>💡 Interpretación (Regla 68-95-99.7):</h5>
            <ul>
              <li>
                <strong>68%</strong> de las muestras tendrán
                <span v-html="renderLatex('\\hat{p}')"></span> entre
                {{ (calcDist.resultado.media - calcDist.resultado.errorEstandar).toFixed(4) }} y
                {{ (calcDist.resultado.media + calcDist.resultado.errorEstandar).toFixed(4) }}
              </li>
              <li>
                <strong>95%</strong> de las muestras tendrán
                <span v-html="renderLatex('\\hat{p}')"></span> entre
                {{ (calcDist.resultado.media - 2 * calcDist.resultado.errorEstandar).toFixed(4) }} y
                {{ (calcDist.resultado.media + 2 * calcDist.resultado.errorEstandar).toFixed(4) }}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Navegación -->
      <div class="tab-navigation">
        <button @click="activeTab = 'proporcion'" class="nav-btn nav-btn-prev">
          ← Anterior: Proporción Muestral
        </button>
        <button @click="activeTab = 'intervalos'" class="nav-btn nav-btn-next">
          Siguiente: Intervalos de Confianza →
        </button>
      </div>
    </div>

    <!-- Intervalos de Confianza -->
    <div v-if="activeTab === 'intervalos'" class="content-section">
      <h2>🎯 Intervalos de Confianza para una Proporción</h2>

      <div class="theory-box">
        <h3>¿Qué es un Intervalo de Confianza?</h3>
        <p>
          Un intervalo de confianza nos permite estimar, con cierto
          <strong>nivel de confianza</strong> (por ejemplo, 95%), el
          <strong>rango donde se encuentra la proporción poblacional real (p)</strong>.
        </p>

        <div class="concept-card">
          <h4>💡 Concepto Clave</h4>
          <p>
            Un intervalo de confianza del 95% significa que si tomáramos 100 muestras diferentes y
            calculáramos 100 intervalos de confianza, esperaríamos que aproximadamente
            <strong>95 de ellos</strong> contengan el verdadero valor de p.
          </p>
        </div>

        <h3>Fórmula del Intervalo de Confianza</h3>
        <div class="formula-box">
          <div
            v-html="renderLatexDisplay('\\hat{p} \\pm z \\sqrt{\\frac{\\hat{p}(1-\\hat{p})}{n}}')"
          ></div>
          <p class="formula-note">
            donde:<br />
            <span v-html="renderLatex('\\hat{p}')"></span>: proporción muestral<br />
            <strong>z:</strong> valor crítico que depende del nivel de confianza<br />
            <strong>n:</strong> tamaño de la muestra
          </p>
        </div>

        <h3>Valores de Z según el Nivel de Confianza</h3>
        <table class="z-table">
          <thead>
            <tr>
              <th>Nivel de Confianza</th>
              <th>Valor de z</th>
              <th>Área en las colas</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>90%</td>
              <td>1.645</td>
              <td>10% (5% en cada cola)</td>
            </tr>
            <tr class="highlight-row">
              <td>95%</td>
              <td>1.96</td>
              <td>5% (2.5% en cada cola)</td>
            </tr>
            <tr>
              <td>99%</td>
              <td>2.575</td>
              <td>1% (0.5% en cada cola)</td>
            </tr>
          </tbody>
        </table>

        <div class="insight-box">
          <h4>📌 Interpretación de los Componentes</h4>
          <ul>
            <li>
              <strong><span v-html="renderLatex('\\hat{p}')"></span>:</strong> El centro del
              intervalo (nuestra mejor estimación puntual)
            </li>
            <li>
              <strong
                ><span v-html="renderLatex('z \\sqrt{\\frac{\\hat{p}(1-\\hat{p})}{n}}')"></span
                >:</strong
              >
              Margen de error (qué tan lejos podríamos estar del verdadero valor)
            </li>
            <li>A mayor nivel de confianza → mayor valor de z → intervalo más amplio</li>
            <li>A mayor tamaño de muestra (n) → menor margen de error → intervalo más preciso</li>
          </ul>
        </div>
      </div>

      <div class="example-section">
        <h3>Ejemplo Completo: Satisfacción del Producto</h3>
        <p>
          Una empresa encuesta a <strong>400 personas</strong> y encuentra que <strong>120</strong>
          están satisfechas con un producto. ¿Cuál es el intervalo de confianza del 95% para la
          proporción de clientes satisfechos?
        </p>

        <div class="solution-steps">
          <div class="step">
            <h4>Paso 1: Calcular la proporción muestral</h4>
            <div class="calculation">
              <div v-html="renderLatex('\\hat{p} = \\frac{x}{n} = \\frac{120}{400} = 0.3')"></div>
            </div>
          </div>

          <div class="step">
            <h4>Paso 2: Identificar el valor de z</h4>
            <p>Para un nivel de confianza del 95%: <strong>z = 1.96</strong></p>
          </div>

          <div class="step">
            <h4>Paso 3: Calcular el error estándar</h4>
            <div class="calculation">
              <div
                v-html="
                  renderLatex(
                    'SE = \\sqrt{\\frac{\\hat{p}(1-\\hat{p})}{n}} = \\sqrt{\\frac{0.3 \\times 0.7}{400}}',
                  )
                "
              ></div>
              <div v-html="renderLatex('SE = \\sqrt{\\frac{0.21}{400}} = \\sqrt{0.000525}')"></div>
              <div v-html="renderLatex('SE = 0.0229')"></div>
            </div>
          </div>

          <div class="step">
            <h4>Paso 4: Calcular el margen de error</h4>
            <div class="calculation">
              <div v-html="renderLatex('ME = z \\times SE = 1.96 \\times 0.0229')"></div>
              <div v-html="renderLatex('ME = 0.045')"></div>
            </div>
          </div>

          <div class="step">
            <h4>Paso 5: Construir el intervalo</h4>
            <div class="calculation">
              <div v-html="renderLatex('IC = \\hat{p} \\pm ME = 0.3 \\pm 0.045')"></div>
              <div v-html="renderLatex('IC = [0.255, 0.345]')"></div>
            </div>
          </div>

          <div class="result-box">
            <strong>Conclusión:</strong>
            <p>
              Con un <strong>95% de confianza</strong>, podemos afirmar que entre
              <strong>25.5% y 34.5%</strong>
              de todos los clientes están satisfechos con el producto.
            </p>
            <div class="interpretation">
              <p><strong>En términos prácticos:</strong></p>
              <ul>
                <li>
                  Si la población total es de 10,000 clientes, esperamos que entre 2,550 y 3,450
                  estén satisfechos
                </li>
                <li>
                  Hay un 5% de probabilidad de que el verdadero valor esté fuera de este rango
                </li>
                <li>El margen de error es ±4.5 puntos porcentuales</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Calculadora de Intervalos de Confianza -->
      <div class="interactive-section">
        <h3>Calculadora de Intervalos de Confianza</h3>
        <p>Calcula intervalos de confianza para proporciones:</p>

        <div class="input-grid">
          <div class="input-group">
            <label>Número de éxitos (x):</label>
            <input
              v-model.number="calcIC.x"
              type="number"
              min="0"
              placeholder="Ej: 120"
              class="data-input"
            />
          </div>

          <div class="input-group">
            <label>Tamaño de muestra (n):</label>
            <input
              v-model.number="calcIC.n"
              type="number"
              min="1"
              placeholder="Ej: 400"
              class="data-input"
            />
          </div>

          <div class="input-group">
            <label>Nivel de confianza:</label>
            <select v-model.number="calcIC.confianza" class="data-input">
              <option :value="90">90%</option>
              <option :value="95">95%</option>
              <option :value="99">99%</option>
            </select>
          </div>
        </div>

        <button @click="calcularIntervalo" class="btn btn-primary">Calcular Intervalo</button>

        <div v-if="calcIC.resultado !== null" class="result-display">
          <h4>Resultados Detallados:</h4>

          <div class="calc-summary">
            <div class="summary-item">
              <span class="label"
                >Proporción muestral (<span v-html="renderLatex('\\hat{p}')"></span>):</span
              >
              <span class="value"
                >{{ calcIC.resultado.pHat.toFixed(4) }} ({{
                  (calcIC.resultado.pHat * 100).toFixed(2)
                }}%)</span
              >
            </div>
            <div class="summary-item">
              <span class="label">Valor de z:</span>
              <span class="value">{{ calcIC.resultado.z }}</span>
            </div>
            <div class="summary-item">
              <span class="label">Error estándar (SE):</span>
              <span class="value">{{ calcIC.resultado.se.toFixed(4) }}</span>
            </div>
            <div class="summary-item">
              <span class="label">Margen de error (ME):</span>
              <span class="value"
                >{{ calcIC.resultado.me.toFixed(4) }} (±{{
                  (calcIC.resultado.me * 100).toFixed(2)
                }}%)</span
              >
            </div>
          </div>

          <div class="interval-result">
            <h5>Intervalo de Confianza al {{ calcIC.confianza }}%:</h5>
            <div class="interval-display">
              <span class="bracket">[</span>
              <span class="value">{{ calcIC.resultado.limiteInferior.toFixed(4) }}</span>
              <span class="separator">,</span>
              <span class="value">{{ calcIC.resultado.limiteSuperior.toFixed(4) }}</span>
              <span class="bracket">]</span>
            </div>
            <div class="interval-percentage">
              [{{ (calcIC.resultado.limiteInferior * 100).toFixed(2) }}%,
              {{ (calcIC.resultado.limiteSuperior * 100).toFixed(2) }}%]
            </div>
          </div>

          <div class="interpretation-box">
            <h5>💡 Interpretación:</h5>
            <p>
              Con un <strong>{{ calcIC.confianza }}% de confianza</strong>, podemos afirmar que la
              verdadera proporción poblacional se encuentra entre
              <strong>{{ (calcIC.resultado.limiteInferior * 100).toFixed(2) }}%</strong> y
              <strong>{{ (calcIC.resultado.limiteSuperior * 100).toFixed(2) }}%</strong>.
            </p>
            <p>
              El margen de error es de
              <strong>±{{ (calcIC.resultado.me * 100).toFixed(2) }}%</strong>, lo que significa que
              nuestra estimación puntual ({{ (calcIC.resultado.pHat * 100).toFixed(2) }}%) podría
              variar en ese rango.
            </p>
          </div>

          <div class="visual-interval">
            <h5>Visualización del Intervalo:</h5>
            <div class="interval-bar">
              <div class="bar-container">
                <div
                  class="confidence-bar"
                  :style="{
                    left: calcIC.resultado.limiteInferior * 100 + '%',
                    width:
                      (calcIC.resultado.limiteSuperior - calcIC.resultado.limiteInferior) * 100 +
                      '%',
                  }"
                >
                  <span class="bar-label">{{ calcIC.confianza }}% IC</span>
                </div>
                <div class="point-estimate" :style="{ left: calcIC.resultado.pHat * 100 + '%' }">
                  <span class="point-label"><span v-html="renderLatex('\\hat{p}')"></span></span>
                </div>
              </div>
              <div class="bar-scale">
                <span>0%</span>
                <span>25%</span>
                <span>50%</span>
                <span>75%</span>
                <span>100%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Navegación -->
      <div class="tab-navigation">
        <button @click="activeTab = 'distribucion'" class="nav-btn nav-btn-prev">
          ← Anterior: Distribución Muestral
        </button>
        <button @click="activeTab = 'ejercicios'" class="nav-btn nav-btn-next">
          Siguiente: Ejercicios Prácticos →
        </button>
      </div>
    </div>

    <!-- Ejercicios Prácticos -->
    <div v-if="activeTab === 'ejercicios'" class="content-section">
      <h2>� Ejercicios Prácticos</h2>
      <!-- Ejercicios Prácticos -->
      <div v-if="activeTab === 'ejercicios'" class="content-section">
        <h2>📝 Ejercicios Prácticos</h2>

        <div class="exercises-container">
          <!-- Ejercicio 1 -->
          <div class="exercise-card">
            <h3>Ejercicio 1: Aprobación Política</h3>
            <div class="exercise-statement">
              <p>
                Una encuesta a <strong>500 votantes</strong> muestra que
                <strong>280</strong> aprueban la gestión del alcalde. Calcula un intervalo de
                confianza del 95% para la proporción de votantes que aprueban la gestión.
              </p>
            </div>

            <button @click="mostrarSolucion1 = !mostrarSolucion1" class="btn btn-secondary">
              {{ mostrarSolucion1 ? 'Ocultar Solución' : 'Ver Solución' }}
            </button>

            <div v-if="mostrarSolucion1" class="solution">
              <div class="solution-steps">
                <div class="step">
                  <h4>Datos:</h4>
                  <p>x = 280, n = 500, Confianza = 95% → z = 1.96</p>
                </div>

                <div class="step">
                  <h4>Proporción muestral:</h4>
                  <div v-html="renderLatex('\\hat{p} = \\frac{280}{500} = 0.56')"></div>
                </div>

                <div class="step">
                  <h4>Error estándar:</h4>
                  <div
                    v-html="renderLatex('SE = \\sqrt{\\frac{0.56 \\times 0.44}{500}} = 0.0222')"
                  ></div>
                </div>

                <div class="step">
                  <h4>Margen de error:</h4>
                  <div v-html="renderLatex('ME = 1.96 \\times 0.0222 = 0.0435')"></div>
                </div>

                <div class="step">
                  <h4>Intervalo:</h4>
                  <div v-html="renderLatex('IC = 0.56 \\pm 0.0435 = [0.5165, 0.6035]')"></div>
                </div>

                <div class="result-box">
                  <strong>Respuesta:</strong> [51.65%, 60.35%]
                  <p>
                    Con 95% de confianza, entre 51.65% y 60.35% de los votantes aprueban la gestión
                    del alcalde.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Ejercicio 2 -->
          <div class="exercise-card">
            <h3>Ejercicio 2: Control de Calidad</h3>
            <div class="exercise-statement">
              <p>
                En una fábrica se inspeccionan <strong>300 productos</strong> y se encuentran
                <strong>12 defectuosos</strong>. Construye un intervalo de confianza del 99% para la
                proporción de productos defectuosos.
              </p>
            </div>

            <button @click="mostrarSolucion2 = !mostrarSolucion2" class="btn btn-secondary">
              {{ mostrarSolucion2 ? 'Ocultar Solución' : 'Ver Solución' }}
            </button>

            <div v-if="mostrarSolucion2" class="solution">
              <div class="solution-steps">
                <div class="step">
                  <h4>Datos:</h4>
                  <p>x = 12, n = 300, Confianza = 99% → z = 2.575</p>
                </div>

                <div class="step">
                  <h4>Proporción muestral:</h4>
                  <div v-html="renderLatex('\\hat{p} = \\frac{12}{300} = 0.04')"></div>
                </div>

                <div class="step">
                  <h4>Error estándar:</h4>
                  <div
                    v-html="renderLatex('SE = \\sqrt{\\frac{0.04 \\times 0.96}{300}} = 0.0113')"
                  ></div>
                </div>

                <div class="step">
                  <h4>Margen de error:</h4>
                  <div v-html="renderLatex('ME = 2.575 \\times 0.0113 = 0.0291')"></div>
                </div>

                <div class="step">
                  <h4>Intervalo:</h4>
                  <div v-html="renderLatex('IC = 0.04 \\pm 0.0291 = [0.0109, 0.0691]')"></div>
                </div>

                <div class="result-box">
                  <strong>Respuesta:</strong> [1.09%, 6.91%]
                  <p>Con 99% de confianza, entre 1.09% y 6.91% de los productos tienen defectos.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Ejercicio 3 -->
          <div class="exercise-card">
            <h3>Ejercicio 3: Preferencia de Sabores</h3>
            <div class="exercise-statement">
              <p>
                De <strong>800 consumidores</strong>, <strong>480</strong> prefieren el sabor nuevo.
                Calcula intervalos de confianza al 90%, 95% y 99%. Compara el ancho de los
                intervalos.
              </p>
            </div>

            <button @click="mostrarSolucion3 = !mostrarSolucion3" class="btn btn-secondary">
              {{ mostrarSolucion3 ? 'Ocultar Solución' : 'Ver Solución' }}
            </button>

            <div v-if="mostrarSolucion3" class="solution">
              <div class="solution-steps">
                <div class="step">
                  <h4>Datos comunes:</h4>
                  <p>x = 480, n = 800</p>
                  <div v-html="renderLatex('\\hat{p} = \\frac{480}{800} = 0.6')"></div>
                  <div
                    v-html="renderLatex('SE = \\sqrt{\\frac{0.6 \\times 0.4}{800}} = 0.0173')"
                  ></div>
                </div>

                <div class="step">
                  <h4>90% de confianza (z = 1.645):</h4>
                  <div v-html="renderLatex('ME = 1.645 \\times 0.0173 = 0.0285')"></div>
                  <div v-html="renderLatex('IC_{90} = [0.5715, 0.6285]')"></div>
                  <p><strong>Ancho:</strong> 0.057 (5.7%)</p>
                </div>

                <div class="step">
                  <h4>95% de confianza (z = 1.96):</h4>
                  <div v-html="renderLatex('ME = 1.96 \\times 0.0173 = 0.0339')"></div>
                  <div v-html="renderLatex('IC_{95} = [0.5661, 0.6339]')"></div>
                  <p><strong>Ancho:</strong> 0.068 (6.8%)</p>
                </div>

                <div class="step">
                  <h4>99% de confianza (z = 2.575):</h4>
                  <div v-html="renderLatex('ME = 2.575 \\times 0.0173 = 0.0445')"></div>
                  <div v-html="renderLatex('IC_{99} = [0.5555, 0.6445]')"></div>
                  <p><strong>Ancho:</strong> 0.089 (8.9%)</p>
                </div>

                <div class="result-box">
                  <strong>Conclusión:</strong>
                  <p>
                    A mayor nivel de confianza, el intervalo es más amplio. Esto refleja el
                    compromiso entre confianza y precisión: más confianza requiere un rango más
                    amplio.
                  </p>
                  <ul>
                    <li>90% → más preciso pero menos confiable</li>
                    <li>95% → equilibrio común en la práctica</li>
                    <li>99% → muy confiable pero menos preciso</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Navegación -->
        <div class="tab-navigation">
          <button @click="activeTab = 'intervalos'" class="nav-btn nav-btn-prev">
            ← Anterior: Intervalos de Confianza
          </button>
          <router-link to="/inferencial" class="nav-btn nav-btn-next">
            Volver a Estadística Inferencial →
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import katex from 'katex'
import 'katex/dist/katex.min.css'

// Configuración de pestañas
const tabs = [
  { id: 'proporcion', label: 'Proporción Muestral' },
  { id: 'distribucion', label: 'Distribución Muestral' },
  { id: 'intervalos', label: 'Intervalos de Confianza' },
  { id: 'ejercicios', label: 'Ejercicios Prácticos' },
]

const activeTab = ref('proporcion')

// Función para renderizar LaTeX
const renderLatex = (latex: string): string => {
  try {
    return katex.renderToString(latex, {
      throwOnError: false,
      displayMode: false,
    })
  } catch {
    return latex
  }
}

const renderLatexDisplay = (latex: string): string => {
  try {
    return katex.renderToString(latex, {
      throwOnError: false,
      displayMode: true,
    })
  } catch {
    return latex
  }
}

// Calculadora de Proporción Muestral
const calcProp = ref({
  x: null as number | null,
  n: null as number | null,
  resultado: null as number | null,
})

const calcularProporcion = () => {
  if (calcProp.value.x === null || calcProp.value.n === null || calcProp.value.n === 0) {
    alert('Por favor ingresa valores válidos')
    return
  }
  if (calcProp.value.x > calcProp.value.n) {
    alert('El número de éxitos no puede ser mayor que el tamaño de la muestra')
    return
  }
  calcProp.value.resultado = calcProp.value.x / calcProp.value.n
}

// Calculadora de Distribución Muestral
const calcDist = ref({
  p: null as number | null,
  n: null as number | null,
  resultado: null as {
    media: number
    errorEstandar: number
    np: number
    nq: number
    valido: boolean
  } | null,
})

const calcularDistribucion = () => {
  if (calcDist.value.p === null || calcDist.value.n === null) {
    alert('Por favor ingresa valores válidos')
    return
  }
  if (calcDist.value.p < 0 || calcDist.value.p > 1) {
    alert('La proporción debe estar entre 0 y 1')
    return
  }

  const p = calcDist.value.p
  const n = calcDist.value.n
  const q = 1 - p

  const np = n * p
  const nq = n * q
  const valido = np >= 5 && nq >= 5

  calcDist.value.resultado = {
    media: p,
    errorEstandar: Math.sqrt((p * q) / n),
    np,
    nq,
    valido,
  }
}

// Calculadora de Intervalos de Confianza
const calcIC = ref({
  x: null as number | null,
  n: null as number | null,
  confianza: 95,
  resultado: null as {
    pHat: number
    z: number
    se: number
    me: number
    limiteInferior: number
    limiteSuperior: number
  } | null,
})

const getZValue = (confidence: number): number => {
  const zValues: Record<number, number> = {
    90: 1.645,
    95: 1.96,
    99: 2.575,
  }
  return zValues[confidence] || 1.96
}

const calcularIntervalo = () => {
  if (calcIC.value.x === null || calcIC.value.n === null || calcIC.value.n === 0) {
    alert('Por favor ingresa valores válidos')
    return
  }
  if (calcIC.value.x > calcIC.value.n) {
    alert('El número de éxitos no puede ser mayor que el tamaño de la muestra')
    return
  }

  const pHat = calcIC.value.x / calcIC.value.n
  const z = getZValue(calcIC.value.confianza)
  const se = Math.sqrt((pHat * (1 - pHat)) / calcIC.value.n)
  const me = z * se

  calcIC.value.resultado = {
    pHat,
    z,
    se,
    me,
    limiteInferior: Math.max(0, pHat - me),
    limiteSuperior: Math.min(1, pHat + me),
  }
}

// Control de soluciones de ejercicios
const mostrarSolucion1 = ref(false)
const mostrarSolucion2 = ref(false)
const mostrarSolucion3 = ref(false)
</script>

<style scoped>
@import '@/assets/styles/main.css';

/* Estilos para las pestañas */
.tabs {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
  border-bottom: 2px solid var(--light);
  overflow-x: auto;
  padding-bottom: 0;
}

.tab-button {
  padding: 1rem 1.5rem;
  background: transparent;
  border: none;
  border-bottom: 3px solid transparent;
  color: var(--gray);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  position: relative;
  bottom: -2px;
}

.tab-button:hover {
  color: var(--primary);
  background: var(--light);
}

.tab-button.active {
  color: var(--primary);
  border-bottom-color: var(--primary);
  background: transparent;
}

.content-section {
  animation: fadeIn 0.3s ease;
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

.theory-box {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: var(--shadow);
  margin-bottom: 2rem;
}

.theory-box h3 {
  color: var(--secondary);
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.theory-box h4 {
  color: var(--primary);
  margin: 1.5rem 0 0.75rem 0;
  font-size: 1.2rem;
}

.formula-box {
  background: var(--light);
  padding: 1.5rem;
  border-radius: 8px;
  margin: 1rem 0;
  border-left: 4px solid var(--primary);
}

.formula-note {
  font-size: 0.95rem;
  color: var(--gray);
  margin-top: 1rem;
  line-height: 1.6;
}

.concept-card {
  background: #e3f2fd;
  border-left: 4px solid #2196f3;
  padding: 1.5rem;
  border-radius: 8px;
  margin: 1.5rem 0;
}

.concept-card h4 {
  color: #1976d2;
  margin-bottom: 0.75rem;
}

.warning-box {
  background: #fff3cd;
  border-left: 4px solid #ffc107;
  padding: 1.5rem;
  border-radius: 8px;
  margin: 1.5rem 0;
}

.warning-box h4 {
  color: #f57c00;
  margin-bottom: 1rem;
}

.warning-box ul {
  margin-left: 1.5rem;
  margin-top: 0.5rem;
}

.example-section {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: var(--shadow);
  margin-bottom: 2rem;
}

.example-section h3 {
  color: var(--secondary);
  margin-bottom: 1rem;
}

.solution-steps {
  margin: 1.5rem 0;
}

.step {
  background: var(--light);
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  border-left: 4px solid var(--accent);
}

.step h4 {
  color: var(--secondary);
  margin-bottom: 1rem;
}

.calculation {
  background: white;
  padding: 1rem;
  border-radius: 6px;
  margin: 0.5rem 0;
}

.result-box {
  background: linear-gradient(135deg, var(--accent), #27ae60);
  color: white;
  padding: 2rem;
  border-radius: 10px;
  margin-top: 1.5rem;
}

.result-box strong {
  display: block;
  font-size: 1.3rem;
  margin-bottom: 0.75rem;
}

.result-box .interpretation {
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 6px;
  margin-top: 1rem;
}

.result-box ul {
  margin-left: 1.5rem;
  margin-top: 0.5rem;
}

.success-message {
  color: var(--accent);
  font-weight: bold;
  font-size: 1.1rem;
}

.error-message {
  color: #e74c3c;
  font-weight: bold;
  font-size: 1.1rem;
}

.interactive-section {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: var(--shadow);
  margin-bottom: 2rem;
}

.interactive-section h3 {
  color: var(--secondary);
  margin-bottom: 1rem;
}

.input-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.input-group label {
  font-weight: 600;
  color: var(--secondary);
}

.data-input {
  padding: 0.75rem;
  border: 2px solid var(--light);
  border-radius: 6px;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.data-input:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
}

.btn {
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
}

.btn-primary {
  background: var(--primary);
  color: white;
}

.btn-primary:hover {
  background: var(--primary-dark);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(52, 152, 219, 0.3);
}

.btn-secondary {
  background: var(--gray);
  color: white;
}

.btn-secondary:hover {
  background: var(--dark);
  transform: translateY(-2px);
}

.result-display {
  background: var(--light);
  padding: 1.5rem;
  border-radius: 8px;
  margin-top: 1.5rem;
  border-left: 4px solid var(--accent);
}

.result-display h4 {
  color: var(--secondary);
  margin-bottom: 1rem;
}

.validation-box {
  background: #e8f5e9;
  border-left: 4px solid var(--accent);
  padding: 1rem;
  border-radius: 6px;
  margin: 1rem 0;
}

.validation-box.error {
  background: #ffebee;
  border-left-color: #e74c3c;
}

.distribution-params {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0;
}

.param-card {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.param-card h5 {
  color: var(--gray);
  margin-bottom: 0.75rem;
  font-size: 0.9rem;
  text-transform: uppercase;
}

.interpretation-box {
  background: #e3f2fd;
  border-left: 4px solid #2196f3;
  padding: 1.5rem;
  border-radius: 8px;
  margin: 1.5rem 0;
}

.interpretation-box h5 {
  color: #1976d2;
  margin-bottom: 0.75rem;
}

.interpretation-box ul {
  margin-left: 1.5rem;
  margin-top: 0.5rem;
}

.interpretation-box li {
  margin: 0.5rem 0;
}

.z-table {
  width: 100%;
  border-collapse: collapse;
  margin: 1.5rem 0;
  box-shadow: var(--shadow);
}

.z-table th,
.z-table td {
  padding: 1rem;
  text-align: center;
  border: 1px solid var(--light);
}

.z-table thead th {
  background: var(--secondary);
  color: white;
  font-weight: bold;
}

.z-table tbody tr:hover {
  background: var(--light);
}

.z-table .highlight-row {
  background: #fff3cd;
  font-weight: 600;
}

.insight-box {
  background: #f3e5f5;
  border-left: 4px solid #9c27b0;
  padding: 1.5rem;
  border-radius: 8px;
  margin: 1.5rem 0;
}

.insight-box h4 {
  color: #7b1fa2;
  margin-bottom: 0.75rem;
}

.insight-box ul {
  margin-left: 1.5rem;
  margin-top: 0.5rem;
}

.calc-summary {
  background: white;
  padding: 1rem;
  border-radius: 6px;
  margin: 1rem 0;
}

.summary-item {
  display: flex;
  justify-content: space-between;
  padding: 0.75rem;
  border-bottom: 1px solid var(--light);
}

.summary-item:last-child {
  border-bottom: none;
}

.summary-item .label {
  color: var(--gray);
  font-weight: 600;
}

.summary-item .value {
  color: var(--secondary);
  font-weight: bold;
}

.interval-result {
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  color: white;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  margin: 1.5rem 0;
}

.interval-result h5 {
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.interval-display {
  font-size: 2.5rem;
  font-weight: bold;
  margin: 1rem 0;
}

.interval-display .bracket {
  font-size: 3rem;
  margin: 0 0.5rem;
}

.interval-display .separator {
  margin: 0 1rem;
}

.interval-percentage {
  font-size: 1.3rem;
  margin-top: 0.5rem;
  opacity: 0.9;
}

.visual-interval {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  margin: 1.5rem 0;
}

.visual-interval h5 {
  color: var(--secondary);
  margin-bottom: 1rem;
}

.interval-bar {
  margin: 2rem 0;
}

.bar-container {
  position: relative;
  height: 60px;
  background: var(--light);
  border-radius: 8px;
  margin-bottom: 0.5rem;
}

.confidence-bar {
  position: absolute;
  height: 100%;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.bar-label {
  color: white;
  font-weight: bold;
}

.point-estimate {
  position: absolute;
  top: -10px;
  width: 4px;
  height: 80px;
  background: #e74c3c;
  transform: translateX(-2px);
}

.point-label {
  position: absolute;
  top: -25px;
  left: 50%;
  transform: translateX(-50%);
  background: #e74c3c;
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.85rem;
  font-weight: bold;
  white-space: nowrap;
}

.bar-scale {
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
  color: var(--gray);
  padding: 0 0.5rem;
}

.exercises-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.exercise-card {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: var(--shadow);
  border-left: 4px solid var(--primary);
}

.exercise-card h3 {
  color: var(--secondary);
  margin-bottom: 1rem;
}

.exercise-statement {
  background: var(--light);
  padding: 1.5rem;
  border-radius: 8px;
  margin: 1rem 0;
}

.solution {
  margin-top: 1.5rem;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.tab-navigation {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 2px solid var(--light);
  flex-wrap: wrap;
}

.nav-btn {
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1.05rem;
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border: none;
}

.nav-btn-prev {
  background: white;
  color: var(--primary);
  border: 2px solid var(--primary);
}

.nav-btn-prev:hover {
  background: var(--primary);
  color: white;
  transform: translateX(-5px);
}

.nav-btn-next {
  background: var(--primary);
  color: white;
  border: 2px solid var(--primary);
  margin-left: auto;
}

.nav-btn-next:hover {
  background: var(--primary-dark);
  transform: translateX(5px);
}

@media (max-width: 768px) {
  .input-grid {
    grid-template-columns: 1fr;
  }

  .distribution-params {
    grid-template-columns: 1fr;
  }

  .tab-navigation {
    flex-direction: column;
  }

  .nav-btn {
    width: 100%;
    justify-content: center;
  }

  .nav-btn-next {
    margin-left: 0;
  }

  .interval-display {
    font-size: 1.8rem;
  }

  .interval-display .bracket {
    font-size: 2.2rem;
  }
}
</style>
