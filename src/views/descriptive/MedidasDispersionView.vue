<template>
  <div class="container">
    <div class="hero">
      <h1>Medidas de Dispersión</h1>
      <p>
        Las medidas de dispersión nos indican qué tan esparcidos o diseminados están los datos
        respecto al centro.
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

    <!-- Introducción -->
    <div v-if="activeTab === 'introduccion'" class="content-section">
      <div class="intro-content">
        <h2>¿Qué son las Medidas de Dispersión?</h2>
        <p>
          Una vez que conocemos el centro de los datos (con medidas de tendencia central),
          necesitamos saber qué tan dispersos están. Las medidas de dispersión responden a la
          pregunta: <strong>"¿Cuán diferentes son los datos entre sí?"</strong>
        </p>

        <div class="importance-box">
          <h3>⚠️ Importancia</h3>
          <p>
            Una dispersión pequeña significa que los datos están agrupados cerca de la media,
            haciéndola más representativa. Una dispersión grande indica que los datos están muy
            esparcidos y la media puede no ser tan representativa.
          </p>
          <p>
            <strong
              >Un promedio por sí solo puede llevar a conclusiones incorrectas si no se toma en
              cuenta la variabilidad de los datos.</strong
            >
          </p>
        </div>

        <h3>Las Principales Medidas de Dispersión</h3>
        <div class="cards-container">
          <div class="info-card">
            <h4>Rango</h4>
            <p>
              La diferencia entre el valor máximo y el mínimo. Es la medida más simple pero también
              la más limitada.
            </p>
            <div class="formula">Rango = Máximo - Mínimo</div>
          </div>

          <div class="info-card">
            <h4>Varianza</h4>
            <p>
              La media de las desviaciones al cuadrado respecto a la media. Mide la dispersión
              promedio.
            </p>
            <div
              class="formula"
              v-html="renderLatex('s^2 = \\frac{\\sum (X - \\bar{X})^2}{n-1}')"
            ></div>
          </div>

          <div class="info-card">
            <h4>Desviación Estándar</h4>
            <p>La raíz cuadrada de la varianza. Es la medida de dispersión más utilizada.</p>
            <div class="formula" v-html="renderLatex('s = \\sqrt{s^2}')"></div>
          </div>
        </div>
      </div>

      <!-- Call to Action para Ejercicio Completo -->
      <div class="exercise-cta">
        <div class="cta-content">
          <div class="cta-icon">🎓</div>
          <div class="cta-text">
            <h3>¿Quieres ver todo esto en acción?</h3>
            <p>
              Realiza un ejercicio completo que integra medidas de tendencia central y dispersión
              con datos reales
            </p>
          </div>
          <router-link to="/descriptiva/ejercicio-completo" class="cta-button">
            Ver Ejercicio Completo
          </router-link>
        </div>
      </div>
    </div>

    <!-- Rango -->
    <div v-if="activeTab === 'rango'" class="content-section">
      <h2>Rango</h2>

      <div class="theory-box">
        <h3>Definición</h3>
        <p>
          El rango es la medida de dispersión más simple. Se calcula como la diferencia entre el
          valor máximo y el valor mínimo del conjunto de datos.
        </p>

        <div class="formula-box">
          <div
            v-html="
              renderLatexDisplay('\\text{Rango} = \\text{Valor máximo} - \\text{Valor mínimo}')
            "
          ></div>
        </div>

        <h4>Ventajas</h4>
        <ul>
          <li>Muy fácil de calcular</li>
          <li>Fácil de interpretar</li>
          <li>Da una idea rápida de la dispersión total</li>
        </ul>

        <div class="warning-box">
          <strong>⚠️ Desventaja Principal:</strong> Solo considera dos valores (el máximo y el
          mínimo), por lo que es muy sensible a valores extremos y puede no reflejar la verdadera
          variabilidad del resto de los datos.
        </div>
      </div>

      <div class="example-section">
        <h3>Ejemplo: Temperaturas Diarias</h3>
        <p>Temperaturas máximas registradas durante una semana (en °C):</p>

        <div class="data-display"><strong>Datos:</strong> {{ ejemploRango.datos.join(', ') }}</div>

        <div class="solution-steps">
          <div class="step">
            <h4>Paso 1: Identificar el valor máximo y mínimo</h4>
            <p><strong>Valor máximo:</strong> {{ ejemploRango.max }}°C</p>
            <p><strong>Valor mínimo:</strong> {{ ejemploRango.min }}°C</p>
          </div>

          <div class="step">
            <h4>Paso 2: Calcular el rango</h4>
            <div class="calculation">
              <div
                v-html="
                  renderLatex('\\text{Rango} = ' + ejemploRango.max + ' - ' + ejemploRango.min)
                "
              ></div>
              <div v-html="renderLatex('\\text{Rango} = ' + ejemploRango.rango + '°C')"></div>
            </div>
          </div>

          <div class="result-box">
            <strong>Resultado:</strong> El rango de temperaturas es {{ ejemploRango.rango }}°C
            <p class="note">
              Esto significa que la diferencia entre la temperatura más alta y más baja fue de
              {{ ejemploRango.rango }} grados.
            </p>
          </div>
        </div>
      </div>

      <!-- Calculadora Interactiva -->
      <div class="interactive-section">
        <h3>Calculadora de Rango</h3>
        <p>Ingresa tus propios datos separados por comas:</p>

        <div class="input-group">
          <input
            v-model="inputRango"
            type="text"
            placeholder="Ejemplo: 25, 28, 22, 30, 26"
            class="data-input"
          />
          <button @click="calcularRango" class="btn btn-primary">Calcular</button>
        </div>

        <div v-if="resultadoRango !== null" class="result-display">
          <h4>Resultados:</h4>
          <p><strong>Datos ingresados:</strong> {{ datosRango.join(', ') }}</p>
          <p><strong>Valor máximo:</strong> {{ maxRango }}</p>
          <p><strong>Valor mínimo:</strong> {{ minRango }}</p>
          <p><strong>Rango:</strong> {{ resultadoRango }}</p>
        </div>
      </div>
    </div>

    <!-- Varianza -->
    <div v-if="activeTab === 'varianza'" class="content-section">
      <h2>Varianza</h2>

      <div class="theory-box">
        <h3>Definición</h3>
        <p>
          La varianza es la media de las desviaciones al cuadrado de cada valor con respecto a la
          media. Mide la dispersión promedio alrededor de la media.
        </p>

        <h4>Fórmulas</h4>
        <div class="formula-box">
          <p><strong>Varianza Muestral (s²):</strong></p>
          <div v-html="renderLatexDisplay('s^2 = \\frac{\\sum (X - \\bar{X})^2}{n-1}')"></div>
          <p class="formula-note">
            Se utiliza n-1 en el denominador para obtener una estimación insesgada de la varianza
            poblacional
          </p>
        </div>

        <div class="formula-box">
          <p><strong>Varianza Poblacional (σ²):</strong></p>
          <div v-html="renderLatexDisplay('\\sigma^2 = \\frac{\\sum (X - \\mu)^2}{N}')"></div>
        </div>

        <h4>Interpretación</h4>
        <ul>
          <li>Una varianza pequeña indica que los datos están agrupados cerca de la media</li>
          <li>Una varianza grande indica que los datos están muy dispersos</li>
          <li>La varianza nunca puede ser negativa</li>
        </ul>

        <div class="warning-box">
          <strong>⚠️ Desventaja:</strong> Sus unidades están al cuadrado (p. ej., dólares al
          cuadrado), lo que dificulta su interpretación directa. Por eso se prefiere usar la
          desviación estándar.
        </div>
      </div>

      <div class="example-section">
        <h3>Ejemplo: Calificaciones de Estudiantes</h3>
        <p>Calificaciones de 5 estudiantes en un examen:</p>

        <div class="data-display">
          <strong>Datos:</strong> {{ ejemploVarianza.datos.join(', ') }}
        </div>

        <div class="solution-steps">
          <div class="step">
            <h4>Paso 1: Calcular la media</h4>
            <div class="calculation">
              <div
                v-html="
                  renderLatex(
                    '\\bar{X} = \\frac{' +
                      ejemploVarianza.suma +
                      '}{' +
                      ejemploVarianza.n +
                      '} = ' +
                      ejemploVarianza.media,
                  )
                "
              ></div>
            </div>
          </div>

          <div class="step">
            <h4>Paso 2: Calcular las desviaciones y elevarlas al cuadrado</h4>
            <table class="calculation-table">
              <thead>
                <tr>
                  <th>X</th>
                  <th v-html="renderLatex('X - \\bar{X}')"></th>
                  <th v-html="renderLatex('(X - \\bar{X})^2')"></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(dato, index) in ejemploVarianza.datos" :key="index">
                  <td>{{ dato }}</td>
                  <td>{{ (dato - ejemploVarianza.media).toFixed(2) }}</td>
                  <td>{{ Math.pow(dato - ejemploVarianza.media, 2).toFixed(2) }}</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="2"><strong>Suma:</strong></td>
                  <td>
                    <strong>{{ ejemploVarianza.sumaCuadrados.toFixed(2) }}</strong>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>

          <div class="step">
            <h4>Paso 3: Dividir entre n-1</h4>
            <div class="calculation">
              <div
                v-html="
                  renderLatex(
                    's^2 = \\frac{' +
                      ejemploVarianza.sumaCuadrados.toFixed(2) +
                      '}{' +
                      (ejemploVarianza.n - 1) +
                      '}',
                  )
                "
              ></div>
              <div v-html="renderLatex('s^2 = ' + ejemploVarianza.varianza.toFixed(2))"></div>
            </div>
          </div>

          <div class="result-box">
            <strong>Resultado:</strong> La varianza es {{ ejemploVarianza.varianza.toFixed(2) }}
          </div>
        </div>
      </div>

      <!-- Calculadora Interactiva -->
      <div class="interactive-section">
        <h3>Calculadora de Varianza</h3>
        <p>Ingresa tus propios datos separados por comas:</p>

        <div class="input-group">
          <input
            v-model="inputVarianza"
            type="text"
            placeholder="Ejemplo: 85, 90, 78, 92, 88"
            class="data-input"
          />
          <button @click="calcularVarianza" class="btn btn-primary">Calcular</button>
        </div>

        <div v-if="resultadoVarianza !== null" class="result-display">
          <h4>Resultados:</h4>
          <p><strong>Datos ingresados:</strong> {{ datosVarianza.join(', ') }}</p>
          <p><strong>Media:</strong> {{ mediaVarianza.toFixed(4) }}</p>
          <p><strong>Varianza (s²):</strong> {{ resultadoVarianza.toFixed(4) }}</p>

          <h5>Tabla de Cálculos:</h5>
          <table class="calculation-table">
            <thead>
              <tr>
                <th>X</th>
                <th v-html="renderLatex('X - \\bar{X}')"></th>
                <th v-html="renderLatex('(X - \\bar{X})^2')"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(dato, index) in datosVarianza" :key="index">
                <td>{{ dato }}</td>
                <td>{{ (dato - mediaVarianza).toFixed(4) }}</td>
                <td>{{ Math.pow(dato - mediaVarianza, 2).toFixed(4) }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Desviación Estándar -->
    <div v-if="activeTab === 'desviacion'" class="content-section">
      <h2>Desviación Estándar</h2>

      <div class="theory-box">
        <h3>Definición</h3>
        <p>
          La desviación estándar es la medida de dispersión más utilizada. Se define como la raíz
          cuadrada de la varianza. Su principal ventaja es que se expresa en las
          <strong>mismas unidades que los datos originales</strong>, lo que facilita su
          interpretación.
        </p>

        <h4>Fórmulas</h4>
        <div class="formula-box">
          <p><strong>Desviación Estándar Muestral (s):</strong></p>
          <div v-html="renderLatexDisplay('s = \\sqrt{\\frac{\\sum (X - \\bar{X})^2}{n-1}}')"></div>
        </div>

        <div class="formula-box">
          <p><strong>Desviación Estándar Poblacional (σ):</strong></p>
          <div v-html="renderLatexDisplay('\\sigma = \\sqrt{\\frac{\\sum (X - \\mu)^2}{N}}')"></div>
        </div>

        <h4>Interpretación</h4>
        <ul>
          <li>Indica qué tan lejos, en promedio, están los datos de la media</li>
          <li>Se expresa en las mismas unidades que los datos originales</li>
          <li>Valores más altos indican mayor dispersión</li>
          <li>Es fundamental para muchos análisis estadísticos avanzados</li>
        </ul>
      </div>

      <div class="example-section">
        <h3>Ejemplo: Tiempos de Entrega</h3>
        <p>Tiempos de entrega (en días) de 6 pedidos:</p>

        <div class="data-display">
          <strong>Datos:</strong> {{ ejemploDesviacion.datos.join(', ') }}
        </div>

        <div class="solution-steps">
          <div class="step">
            <h4>Paso 1: Calcular la media</h4>
            <div class="calculation">
              <div
                v-html="
                  renderLatex(
                    '\\bar{X} = \\frac{' +
                      ejemploDesviacion.suma +
                      '}{' +
                      ejemploDesviacion.n +
                      '} = ' +
                      ejemploDesviacion.media.toFixed(2),
                  )
                "
              ></div>
            </div>
          </div>

          <div class="step">
            <h4>Paso 2: Calcular la varianza</h4>
            <table class="calculation-table">
              <thead>
                <tr>
                  <th>X</th>
                  <th v-html="renderLatex('X - \\bar{X}')"></th>
                  <th v-html="renderLatex('(X - \\bar{X})^2')"></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(dato, index) in ejemploDesviacion.datos" :key="index">
                  <td>{{ dato }}</td>
                  <td>{{ (dato - ejemploDesviacion.media).toFixed(2) }}</td>
                  <td>{{ Math.pow(dato - ejemploDesviacion.media, 2).toFixed(2) }}</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="2"><strong>Suma:</strong></td>
                  <td>
                    <strong>{{ ejemploDesviacion.sumaCuadrados.toFixed(2) }}</strong>
                  </td>
                </tr>
              </tfoot>
            </table>
            <div class="calculation">
              <div
                v-html="
                  renderLatex(
                    's^2 = \\frac{' +
                      ejemploDesviacion.sumaCuadrados.toFixed(2) +
                      '}{' +
                      (ejemploDesviacion.n - 1) +
                      '} = ' +
                      ejemploDesviacion.varianza.toFixed(2),
                  )
                "
              ></div>
            </div>
          </div>

          <div class="step">
            <h4>Paso 3: Calcular la desviación estándar (raíz cuadrada de la varianza)</h4>
            <div class="calculation">
              <div
                v-html="renderLatex('s = \\sqrt{' + ejemploDesviacion.varianza.toFixed(2) + '}')"
              ></div>
              <div
                v-html="
                  renderLatex('s = ' + ejemploDesviacion.desviacion.toFixed(2) + ' \\text{ días}')
                "
              ></div>
            </div>
          </div>

          <div class="result-box">
            <strong>Resultado:</strong> La desviación estándar es
            {{ ejemploDesviacion.desviacion.toFixed(2) }} días
            <p class="note">
              Esto significa que, en promedio, los tiempos de entrega se desvían
              {{ ejemploDesviacion.desviacion.toFixed(2) }} días de la media ({{
                ejemploDesviacion.media.toFixed(2)
              }}
              días).
            </p>
          </div>
        </div>
      </div>

      <!-- Calculadora Interactiva -->
      <div class="interactive-section">
        <h3>Calculadora de Desviación Estándar</h3>
        <p>Ingresa tus propios datos separados por comas:</p>

        <div class="input-group">
          <input
            v-model="inputDesviacion"
            type="text"
            placeholder="Ejemplo: 3, 5, 4, 6, 3, 5"
            class="data-input"
          />
          <button @click="calcularDesviacion" class="btn btn-primary">Calcular</button>
        </div>

        <div v-if="resultadoDesviacion !== null" class="result-display">
          <h4>Resultados:</h4>
          <p><strong>Datos ingresados:</strong> {{ datosDesviacion.join(', ') }}</p>
          <p><strong>Media:</strong> {{ mediaDesviacion.toFixed(4) }}</p>
          <p><strong>Varianza (s²):</strong> {{ varianzaDesviacion.toFixed(4) }}</p>
          <p><strong>Desviación Estándar (s):</strong> {{ resultadoDesviacion.toFixed(4) }}</p>
        </div>
      </div>
    </div>

    <!-- Interpretación -->
    <div v-if="activeTab === 'interpretacion'" class="content-section">
      <h2>Interpretación de la Desviación Estándar</h2>

      <div class="theory-box">
        <h3>Teorema de Chebyshev</h3>
        <p>
          Se aplica a <strong>cualquier conjunto de datos</strong>, sin importar la forma de su
          distribución.
        </p>

        <div class="formula-box">
          <p>
            La proporción mínima de valores que se encuentran dentro de k desviaciones estándar de
            la media es de al menos:
          </p>
          <div v-html="renderLatexDisplay('1 - \\frac{1}{k^2} \\text{ para } k > 1')"></div>
        </div>

        <h4>Casos Específicos</h4>
        <ul>
          <li>
            Para k=2: Al menos el <strong>75%</strong> de los datos está entre
            <span v-html="renderLatex('\\bar{X} \\pm 2s')"></span>
          </li>
          <li>
            Para k=3: Al menos el <strong>88.9%</strong> de los datos está entre
            <span v-html="renderLatex('\\bar{X} \\pm 3s')"></span>
          </li>
        </ul>
      </div>

      <div class="theory-box">
        <h3>Regla Empírica (Regla Normal)</h3>
        <p>
          Se aplica solo a distribuciones que son
          <strong>simétricas y con forma de campana</strong>. Proporciona una aproximación más
          precisa:
        </p>

        <div class="empirical-rule">
          <div class="rule-item">
            <div class="rule-percentage">≈ 68%</div>
            <div class="rule-range" v-html="renderLatex('\\bar{X} \\pm 1s')"></div>
            <p>Aproximadamente el 68% de los datos</p>
          </div>
          <div class="rule-item">
            <div class="rule-percentage">≈ 95%</div>
            <div class="rule-range" v-html="renderLatex('\\bar{X} \\pm 2s')"></div>
            <p>Aproximadamente el 95% de los datos</p>
          </div>
          <div class="rule-item">
            <div class="rule-percentage">≈ 99.7%</div>
            <div class="rule-range" v-html="renderLatex('\\bar{X} \\pm 3s')"></div>
            <p>Aproximadamente el 99.7% (casi todos) los datos</p>
          </div>
        </div>
      </div>

      <div class="example-section">
        <h3>Ejemplo de Aplicación: Pesos de Estudiantes</h3>
        <p>
          En una clase de 100 estudiantes, el peso promedio es 70 kg con una desviación estándar de
          8 kg. Los datos tienen distribución aproximadamente normal.
        </p>

        <div class="solution-steps">
          <div class="step">
            <h4>Aplicando la Regla Empírica:</h4>

            <div class="interpretation-box">
              <h5>1 Desviación Estándar (≈68%)</h5>
              <div class="calculation">
                <div v-html="renderLatex('\\bar{X} \\pm 1s = 70 \\pm 8 = [62, 78]')"></div>
              </div>
              <p>
                <strong>Interpretación:</strong> Aproximadamente el 68% de los estudiantes (≈68
                estudiantes) pesan entre 62 kg y 78 kg.
              </p>
            </div>

            <div class="interpretation-box">
              <h5>2 Desviaciones Estándar (≈95%)</h5>
              <div class="calculation">
                <div v-html="renderLatex('\\bar{X} \\pm 2s = 70 \\pm 16 = [54, 86]')"></div>
              </div>
              <p>
                <strong>Interpretación:</strong> Aproximadamente el 95% de los estudiantes (≈95
                estudiantes) pesan entre 54 kg y 86 kg.
              </p>
            </div>

            <div class="interpretation-box">
              <h5>3 Desviaciones Estándar (≈99.7%)</h5>
              <div class="calculation">
                <div v-html="renderLatex('\\bar{X} \\pm 3s = 70 \\pm 24 = [46, 94]')"></div>
              </div>
              <p>
                <strong>Interpretación:</strong> Aproximadamente el 99.7% de los estudiantes (≈100
                estudiantes) pesan entre 46 kg y 94 kg.
              </p>
            </div>
          </div>

          <div class="insight-box">
            <h4>🎯 Conclusión:</h4>
            <p>
              Si un estudiante pesa 95 kg, está más allá de 3 desviaciones estándar de la media, lo
              cual es muy inusual (menos del 0.3% de probabilidad en una distribución normal).
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Tips de Interpretación -->
    <div v-if="activeTab === 'tips'" class="content-section">
      <h2>Tips de Interpretación de Medidas de Dispersión</h2>

      <div class="tips-section">
        <div class="tip-card">
          <div class="tip-icon">📊</div>
          <div class="tip-content">
            <h4>1. Interpreta siempre en contexto</h4>
            <p>
              Una desviación estándar de 5 puede ser
              <strong>grande o pequeña dependiendo del contexto</strong>:
            </p>
            <div class="tip-example">
              <p>✅ Temperatura corporal: s = 0.5°C es normal (temperatura estable)</p>
              <p>✅ Ventas mensuales: s = $5,000 puede ser aceptable</p>
              <p>⚠️ Medición de precisión: s = 5 mm puede ser demasiado alto</p>
            </div>
            <div class="tip-action">
              <strong>Acción:</strong> Compara la dispersión con la magnitud de la media usando el
              Coeficiente de Variación (CV = s/media × 100%).
            </div>
          </div>
        </div>

        <div class="tip-card">
          <div class="tip-icon">🎯</div>
          <div class="tip-content">
            <h4>2. Usa el Coeficiente de Variación para comparar</h4>
            <p>El CV permite comparar la dispersión de diferentes conjuntos de datos:</p>
            <div class="tip-example">
              <div class="cv-rule">
                <p><strong>CV &lt; 15%:</strong> Baja variabilidad (datos muy homogéneos)</p>
                <p><strong>15% ≤ CV &lt; 30%:</strong> Variabilidad moderada</p>
                <p><strong>CV ≥ 30%:</strong> Alta variabilidad (datos heterogéneos)</p>
              </div>
            </div>
            <div class="tip-action">
              <strong>Ejemplo:</strong> Equipo A: Media=$50k, s=$5k, CV=10% (muy consistente)<br />
              Equipo B: Media=$50k, s=$20k, CV=40% (muy variable, necesita atención)
            </div>
          </div>
        </div>

        <div class="tip-card">
          <div class="tip-icon">🔍</div>
          <div class="tip-content">
            <h4>3. Identifica outliers con la Regla Empírica</h4>
            <p>Usa desviaciones estándar para detectar valores atípicos:</p>
            <div class="tip-example">
              <p>
                <strong>Valor dentro de [media - 2s, media + 2s]:</strong> Normal (95% de los datos)
              </p>
              <p>
                <strong>Valor fuera de ese rango:</strong> Potencial outlier (solo 5% de
                probabilidad)
              </p>
              <p>
                <strong>Valor fuera de [media - 3s, media + 3s]:</strong> Outlier muy probable
                (0.3%)
              </p>
            </div>
            <div class="tip-action">
              <strong>Acción:</strong> Investiga los outliers. Pueden ser errores de medición o
              casos especiales que requieren análisis separado.
            </div>
          </div>
        </div>

        <div class="tip-card">
          <div class="tip-icon">⚖️</div>
          <div class="tip-content">
            <h4>4. Considera el tamaño de la muestra</h4>
            <p>La confiabilidad de las medidas de dispersión depende del tamaño de la muestra:</p>
            <div class="tip-example">
              <p>⚠️ <strong>n &lt; 30:</strong> Las estimaciones pueden ser inestables</p>
              <p>
                ✅ <strong>n ≥ 30:</strong> Estimaciones más confiables (Teorema del Límite Central)
              </p>
              <p>✅ <strong>n ≥ 100:</strong> Estimaciones muy precisas</p>
            </div>
            <div class="tip-action">
              <strong>Recomendación:</strong> Con muestras pequeñas (n&lt;30), sé cauteloso al hacer
              generalizaciones sobre la dispersión poblacional.
            </div>
          </div>
        </div>

        <div class="tip-card">
          <div class="tip-icon">📈</div>
          <div class="tip-content">
            <h4>5. Relaciona dispersión con decisiones de negocio</h4>
            <p>La dispersión tiene implicaciones prácticas importantes:</p>
            <div class="tip-example">
              <p><strong>Baja dispersión:</strong></p>
              <ul>
                <li>✅ Procesos de producción consistentes</li>
                <li>✅ Desempeño predecible</li>
                <li>✅ Menor riesgo en proyecciones</li>
              </ul>
              <p><strong>Alta dispersión:</strong></p>
              <ul>
                <li>⚠️ Mayor incertidumbre en pronósticos</li>
                <li>⚠️ Necesidad de controles más estrictos</li>
                <li>⚠️ Posible necesidad de segmentación</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="tip-card">
          <div class="tip-icon">💡</div>
          <div class="tip-content">
            <h4>6. Combina con medidas de tendencia central</h4>
            <p>
              Las medidas de dispersión
              <strong>siempre deben reportarse junto con la media</strong>:
            </p>
            <div class="tip-example">
              <p>❌ <strong>Reporte incompleto:</strong> "Las ventas promedio son $42k"</p>
              <p>
                ✅ <strong>Reporte completo:</strong> "Las ventas promedio son $42k (s = $5.8k, CV =
                13.8%)"
              </p>
            </div>
            <div class="tip-action">
              <strong>Formato sugerido:</strong> "Medida ± Dispersión" → "$42k ± $5.8k"<br />
              Esto indica que la mayoría de los valores están entre $36.2k y $47.8k.
            </div>
          </div>
        </div>
      </div>

      <div class="interpretation-checklist">
        <h3>✅ Checklist de Interpretación</h3>
        <p>Antes de presentar resultados de dispersión, verifica:</p>
        <div class="checklist-grid">
          <div class="checklist-item">
            <input type="checkbox" id="check1" />
            <label for="check1">¿Calculé y reporté la media junto con la dispersión?</label>
          </div>
          <div class="checklist-item">
            <input type="checkbox" id="check2" />
            <label for="check2">¿Calculé el Coeficiente de Variación para contexto?</label>
          </div>
          <div class="checklist-item">
            <input type="checkbox" id="check3" />
            <label for="check3">¿Identifiqué posibles outliers?</label>
          </div>
          <div class="checklist-item">
            <input type="checkbox" id="check4" />
            <label for="check4"
              >¿Expliqué qué significa la dispersión en términos del negocio?</label
            >
          </div>
          <div class="checklist-item">
            <input type="checkbox" id="check5" />
            <label for="check5">¿Comparé con períodos anteriores o benchmarks?</label>
          </div>
          <div class="checklist-item">
            <input type="checkbox" id="check6" />
            <label for="check6">¿Propuse acciones basadas en el nivel de variabilidad?</label>
          </div>
        </div>
      </div>

      <div class="common-errors">
        <h3>⚠️ Errores Comunes a Evitar</h3>
        <div class="error-grid">
          <div class="error-card">
            <h4>❌ Reportar solo la media</h4>
            <p>Sin dispersión, no sabes qué tan representativa es la media.</p>
            <p><strong>Solución:</strong> Siempre incluye s o CV.</p>
          </div>
          <div class="error-card">
            <h4>❌ Ignorar outliers</h4>
            <p>Los valores extremos pueden distorsionar la desviación estándar.</p>
            <p>
              <strong>Solución:</strong> Identifícalos y decide si excluirlos o reportarlos por
              separado.
            </p>
          </div>
          <div class="error-card">
            <h4>❌ Comparar desviaciones estándar de diferentes escalas</h4>
            <p>No puedes comparar s=5 de pesos con s=1000 de precios.</p>
            <p><strong>Solución:</strong> Usa Coeficiente de Variación (CV) para comparar.</p>
          </div>
          <div class="error-card">
            <h4>❌ Confundir varianza con desviación estándar</h4>
            <p>La varianza está en unidades cuadradas, difícil de interpretar.</p>
            <p>
              <strong>Solución:</strong> Reporta siempre la desviación estándar (raíz de varianza).
            </p>
          </div>
        </div>
      </div>

      <!-- Enlace al ejercicio completo -->
      <div class="exercise-cta">
        <div class="cta-content">
          <div class="cta-icon">🎯</div>
          <div class="cta-text">
            <h3>¡Aplica estos tips en un caso real!</h3>
            <p>Realiza un ejercicio completo paso a paso que integra todas las medidas</p>
          </div>
          <router-link to="/descriptiva/ejercicio-completo" class="cta-button">
            Ir al Ejercicio Completo
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
  { id: 'introduccion', label: 'Introducción' },
  { id: 'rango', label: 'Rango' },
  { id: 'varianza', label: 'Varianza' },
  { id: 'desviacion', label: 'Desviación Estándar' },
  { id: 'interpretacion', label: 'Interpretación' },
  { id: 'tips', label: 'Tips de Interpretación' },
]

const activeTab = ref('introduccion')

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

// Ejemplo de Rango
const ejemploRango = {
  datos: [28, 32, 25, 30, 27, 35, 29],
  max: 35,
  min: 25,
  rango: 10,
}

// Calculadora de Rango
const inputRango = ref('')
const datosRango = ref<number[]>([])
const resultadoRango = ref<number | null>(null)
const maxRango = ref(0)
const minRango = ref(0)

const calcularRango = () => {
  try {
    const valores = inputRango.value
      .split(',')
      .map((v) => parseFloat(v.trim()))
      .filter((v) => !isNaN(v))
    if (valores.length === 0) {
      alert('Por favor ingresa datos válidos')
      return
    }
    datosRango.value = valores
    maxRango.value = Math.max(...valores)
    minRango.value = Math.min(...valores)
    resultadoRango.value = maxRango.value - minRango.value
  } catch {
    alert('Error al procesar los datos')
  }
}

// Ejemplo de Varianza
const calcularVarianzaEjemplo = (datos: number[]) => {
  const n = datos.length
  const suma = datos.reduce((acc, val) => acc + val, 0)
  const media = suma / n
  const sumaCuadrados = datos.reduce((acc, val) => acc + Math.pow(val - media, 2), 0)
  const varianza = sumaCuadrados / (n - 1)
  return { n, suma, media, sumaCuadrados, varianza }
}

const ejemploVarianza = {
  datos: [85, 90, 78, 92, 80],
  ...calcularVarianzaEjemplo([85, 90, 78, 92, 80]),
}

// Calculadora de Varianza
const inputVarianza = ref('')
const datosVarianza = ref<number[]>([])
const mediaVarianza = ref(0)
const resultadoVarianza = ref<number | null>(null)

const calcularVarianza = () => {
  try {
    const valores = inputVarianza.value
      .split(',')
      .map((v) => parseFloat(v.trim()))
      .filter((v) => !isNaN(v))
    if (valores.length === 0) {
      alert('Por favor ingresa datos válidos')
      return
    }
    datosVarianza.value = valores
    const n = valores.length
    const suma = valores.reduce((acc, val) => acc + val, 0)
    mediaVarianza.value = suma / n
    const sumaCuadrados = valores.reduce(
      (acc, val) => acc + Math.pow(val - mediaVarianza.value, 2),
      0,
    )
    resultadoVarianza.value = sumaCuadrados / (n - 1)
  } catch {
    alert('Error al procesar los datos')
  }
}

// Ejemplo de Desviación Estándar
const calcularDesviacionEjemplo = (datos: number[]) => {
  const resultado = calcularVarianzaEjemplo(datos)
  return {
    ...resultado,
    desviacion: Math.sqrt(resultado.varianza),
  }
}

const ejemploDesviacion = {
  datos: [3, 5, 4, 6, 3, 5],
  ...calcularDesviacionEjemplo([3, 5, 4, 6, 3, 5]),
}

// Calculadora de Desviación Estándar
const inputDesviacion = ref('')
const datosDesviacion = ref<number[]>([])
const mediaDesviacion = ref(0)
const varianzaDesviacion = ref(0)
const resultadoDesviacion = ref<number | null>(null)

const calcularDesviacion = () => {
  try {
    const valores = inputDesviacion.value
      .split(',')
      .map((v) => parseFloat(v.trim()))
      .filter((v) => !isNaN(v))
    if (valores.length === 0) {
      alert('Por favor ingresa datos válidos')
      return
    }
    datosDesviacion.value = valores
    const n = valores.length
    const suma = valores.reduce((acc, val) => acc + val, 0)
    mediaDesviacion.value = suma / n
    const sumaCuadrados = valores.reduce(
      (acc, val) => acc + Math.pow(val - mediaDesviacion.value, 2),
      0,
    )
    varianzaDesviacion.value = sumaCuadrados / (n - 1)
    resultadoDesviacion.value = Math.sqrt(varianzaDesviacion.value)
  } catch {
    alert('Error al procesar los datos')
  }
}
</script>

<style scoped>
@import '@/assets/styles/main.css';

.tabs {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
  border-bottom: 2px solid var(--light);
  flex-wrap: wrap;
}

.tab-button {
  padding: 0.75rem 1.5rem;
  border: none;
  background: none;
  color: var(--gray);
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition);
  border-bottom: 3px solid transparent;
}

.tab-button:hover {
  color: var(--secondary);
}

.tab-button.active {
  color: var(--secondary);
  border-bottom-color: var(--secondary);
}

.theory-box {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: var(--shadow);
  margin-bottom: 2rem;
}

.importance-box {
  background: #fff3cd;
  border-left: 4px solid #ffc107;
  padding: 1.5rem;
  margin: 1.5rem 0;
  border-radius: 4px;
}

.importance-box h3 {
  color: #f57c00;
  margin-bottom: 0.5rem;
}

.formula-box {
  background: var(--light);
  padding: 1.5rem;
  border-radius: 8px;
  margin: 1rem 0;
  text-align: center;
}

.formula-note {
  font-size: 0.9rem;
  color: var(--gray);
  font-style: italic;
  margin-top: 0.5rem;
}

.warning-box {
  background: #ffebee;
  border-left: 4px solid #e74c3c;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 4px;
}

.example-section {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: var(--shadow);
  margin-bottom: 2rem;
}

.data-display {
  background: var(--light);
  padding: 1rem;
  border-radius: 8px;
  margin: 1rem 0;
  font-family: 'Courier New', monospace;
}

.solution-steps {
  margin-top: 1.5rem;
}

.step {
  margin-bottom: 2rem;
}

.step h4 {
  color: var(--secondary);
  margin-bottom: 1rem;
}

.calculation {
  background: var(--light);
  padding: 1rem;
  border-radius: 8px;
  margin: 0.5rem 0;
}

.calculation-table {
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
}

.calculation-table th,
.calculation-table td {
  padding: 0.75rem;
  text-align: center;
  border: 1px solid var(--light);
}

.calculation-table th {
  background: var(--secondary);
  color: white;
  font-weight: bold;
}

.calculation-table tfoot td {
  background: var(--light);
  font-weight: bold;
}

.result-box {
  background: linear-gradient(135deg, var(--accent), #27ae60);
  color: white;
  padding: 1.5rem;
  border-radius: 8px;
  margin-top: 1.5rem;
  font-size: 1.1rem;
}

.result-box .note {
  font-size: 0.9rem;
  margin-top: 0.5rem;
  opacity: 0.9;
}

.interactive-section {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: var(--shadow);
  margin-top: 2rem;
}

.input-group {
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
}

.data-input {
  flex: 1;
  padding: 0.75rem;
  border: 2px solid var(--light);
  border-radius: 8px;
  font-size: 1rem;
}

.data-input:focus {
  outline: none;
  border-color: var(--secondary);
}

.result-display {
  background: var(--light);
  padding: 1.5rem;
  border-radius: 8px;
  margin-top: 1.5rem;
}

.result-display h4,
.result-display h5 {
  color: var(--secondary);
  margin-bottom: 1rem;
}

.info-card {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: var(--shadow);
}

.info-card h4 {
  color: var(--secondary);
  margin-bottom: 0.5rem;
}

.formula {
  background: var(--light);
  padding: 1rem;
  border-radius: 4px;
  text-align: center;
  margin-top: 1rem;
  font-family: 'Courier New', monospace;
}

.empirical-rule {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.rule-item {
  background: var(--light);
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;
}

.rule-percentage {
  font-size: 2rem;
  font-weight: bold;
  color: var(--secondary);
  margin-bottom: 0.5rem;
}

.rule-range {
  font-size: 1.2rem;
  margin: 1rem 0;
  font-family: 'Courier New', monospace;
}

.interpretation-box {
  background: #e3f2fd;
  padding: 1.5rem;
  border-radius: 8px;
  margin: 1rem 0;
}

.interpretation-box h5 {
  color: #1976d2;
  margin-bottom: 0.5rem;
}

.insight-box {
  background: #e8f5e9;
  border-left: 4px solid var(--accent);
  padding: 1.5rem;
  margin-top: 1.5rem;
  border-radius: 4px;
}

.insight-box h4 {
  color: #2e7d32;
  margin-bottom: 0.5rem;
}

/* Estilos para ejercicio CTA */
.exercise-cta {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  padding: 0.5rem;
  margin: 3rem 0;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
  animation: subtle-pulse 3s ease-in-out infinite;
}

@keyframes subtle-pulse {
  0%,
  100% {
    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
  }
  50% {
    box-shadow: 0 10px 40px rgba(102, 126, 234, 0.5);
  }
}

.cta-content {
  background: white;
  border-radius: 10px;
  padding: 2.5rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.cta-icon {
  font-size: 4rem;
  flex-shrink: 0;
}

.cta-text {
  flex: 1;
  min-width: 250px;
}

.cta-text h3 {
  color: var(--secondary);
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
}

.cta-text p {
  color: var(--gray);
  font-size: 1.1rem;
  margin: 0;
}

.cta-button {
  background: linear-gradient(135deg, var(--accent), #27ae60);
  color: white;
  padding: 1.25rem 2.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: bold;
  transition: all 0.3s ease;
  display: inline-block;
  box-shadow: 0 4px 15px rgba(46, 204, 113, 0.3);
  white-space: nowrap;
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(46, 204, 113, 0.5);
  background: linear-gradient(135deg, #27ae60, var(--accent));
}

/* Estilos para Tips de Interpretación */
.tips-section {
  display: grid;
  gap: 2rem;
  margin: 2rem 0;
}

.tip-card {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1.5rem;
  transition: all 0.3s ease;
}

.tip-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.tip-icon {
  font-size: 3rem;
  display: flex;
  align-items: flex-start;
}

.tip-content h4 {
  color: var(--secondary);
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.tip-content > p {
  margin-bottom: 1rem;
  line-height: 1.6;
}

.tip-example {
  background: var(--light);
  padding: 1.5rem;
  border-radius: 8px;
  margin: 1rem 0;
  border-left: 4px solid var(--primary);
}

.tip-example p {
  margin: 0.5rem 0;
}

.tip-example ul {
  margin-left: 1.5rem;
  margin-top: 0.5rem;
}

.tip-example li {
  margin: 0.25rem 0;
}

.cv-rule {
  background: white;
  padding: 1rem;
  border-radius: 6px;
}

.cv-rule p {
  padding: 0.5rem;
  margin: 0.25rem 0;
  border-radius: 4px;
}

.cv-rule p:nth-child(1) {
  background: #e8f5e9;
  border-left: 3px solid var(--accent);
}

.cv-rule p:nth-child(2) {
  background: #fff3cd;
  border-left: 3px solid #ffc107;
}

.cv-rule p:nth-child(3) {
  background: #ffebee;
  border-left: 3px solid #e74c3c;
}

.tip-action {
  background: #e3f2fd;
  padding: 1rem;
  border-radius: 6px;
  margin-top: 1rem;
  border-left: 3px solid #2196f3;
}

.tip-action strong {
  color: #1976d2;
}

/* Checklist de Interpretación */
.interpretation-checklist {
  background: white;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: var(--shadow);
  margin: 3rem 0;
}

.interpretation-checklist h3 {
  color: var(--secondary);
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
}

.checklist-grid {
  display: grid;
  gap: 1rem;
  margin-top: 1.5rem;
}

.checklist-item {
  background: var(--light);
  padding: 1rem 1.5rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: all 0.3s ease;
}

.checklist-item:hover {
  background: #e8f5e9;
  transform: translateX(5px);
}

.checklist-item input[type='checkbox'] {
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.checklist-item label {
  font-size: 1.05rem;
  cursor: pointer;
  flex: 1;
}

.checklist-item input[type='checkbox']:checked + label {
  text-decoration: line-through;
  opacity: 0.7;
}

/* Errores Comunes */
.common-errors {
  background: white;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: var(--shadow);
  margin: 3rem 0;
}

.common-errors h3 {
  color: var(--secondary);
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
}

.error-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.error-card {
  background: #ffebee;
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #e74c3c;
  transition: all 0.3s ease;
}

.error-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(231, 76, 60, 0.2);
}

.error-card h4 {
  color: #c62828;
  margin-bottom: 0.75rem;
  font-size: 1.1rem;
}

.error-card p {
  margin: 0.5rem 0;
  font-size: 0.95rem;
}

.error-card p strong {
  color: var(--accent);
}

@media (max-width: 768px) {
  .input-group {
    flex-direction: column;
  }

  .tabs {
    overflow-x: auto;
  }

  .tip-card {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .cta-content {
    text-align: center;
    justify-content: center;
  }

  .error-grid {
    grid-template-columns: 1fr;
  }
}
</style>
