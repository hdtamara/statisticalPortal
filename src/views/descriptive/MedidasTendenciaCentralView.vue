<template>
  <div class="container">
    <div class="hero">
      <h1>Medidas de Tendencia Central</h1>
      <p>
        Las medidas de tendencia central nos indican el valor central o típico alrededor del cual se
        agrupan los datos.
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
        <h2>¿Qué son las Medidas de Tendencia Central?</h2>
        <p>
          Para transformar datos en bruto en información con significado, utilizamos la estadística
          descriptiva. Después de organizar y visualizar los datos, el siguiente paso es
          describirlos numéricamente usando medidas que señalan el valor central o típico de un
          conjunto de datos.
        </p>

        <p>
          Estas medidas responden a la pregunta:
          <strong>"¿Alrededor de qué valor se agrupan los datos?"</strong>
        </p>

        <h3>Las Tres Medidas Principales</h3>
        <div class="cards-container">
          <div class="info-card">
            <h4>Media Aritmética</h4>
            <p>
              El promedio de todos los valores. Se calcula sumando todos los valores y dividiendo
              entre el número total de observaciones.
            </p>
            <div class="formula" v-html="renderLatex('\\bar{X} = \\frac{\\sum X}{n}')"></div>
          </div>

          <div class="info-card">
            <h4>Mediana</h4>
            <p>
              El valor que se encuentra en el punto medio cuando los datos están ordenados. No se
              afecta por valores extremos.
            </p>
            <div class="formula">Valor central del conjunto ordenado</div>
          </div>

          <div class="info-card">
            <h4>Moda</h4>
            <p>
              El valor que aparece con mayor frecuencia en el conjunto de datos. Puede haber más de
              una moda.
            </p>
            <div class="formula">Valor más frecuente</div>
          </div>
        </div>

        <h3>Distribuciones y su Sesgo</h3>
        <p>
          La relación entre estas tres medidas nos indica la
          <strong>forma de la distribución</strong> de los datos. Esta información es crucial para
          elegir la medida de tendencia central más apropiada.
        </p>

        <div class="skewness-explanation">
          <h4>¿Qué es el Sesgo?</h4>
          <p>
            El sesgo (o asimetría) describe qué tan "desequilibrada" está la distribución de los
            datos. Una distribución simétrica tiene la misma forma a ambos lados del centro,
            mientras que una distribución sesgada tiene una "cola" más larga hacia un lado.
          </p>

          <div class="distribution-types">
            <div class="distribution-card">
              <h5>📊 Distribución Simétrica</h5>
              <div class="distribution-visual">
                <div class="symmetric-distribution">
                  <div class="bell-curve"></div>
                  <div class="center-line"></div>
                </div>
              </div>
              <div class="distribution-formula">
                <strong>Media = Mediana = Moda</strong>
              </div>
              <p class="distribution-desc">
                La distribución tiene la misma forma a ambos lados del centro. Es el caso ideal
                donde todas las medidas coinciden.
              </p>
              <div class="distribution-example">
                <strong>Ejemplo:</strong> Alturas de adultos en una población general.
              </div>
            </div>

            <div class="distribution-card">
              <h5>📈 Sesgo Positivo (Sesgada a la Derecha)</h5>
              <div class="distribution-visual">
                <div class="right-skewed-distribution">
                  <div class="right-skew-curve"></div>
                  <div class="center-line"></div>
                </div>
              </div>
              <div class="distribution-formula">
                <strong>Media &gt; Mediana &gt; Moda</strong>
              </div>
              <p class="distribution-desc">
                La cola de la distribución se alarga hacia la derecha. Hay valores extremos altos
                que "jalan" la media hacia arriba.
              </p>
              <div class="distribution-example">
                <strong>Ejemplo:</strong> Salarios en una empresa (pocos ejecutivos ganan mucho, la
                mayoría gana poco).
              </div>
            </div>

            <div class="distribution-card">
              <h5>📉 Sesgo Negativo (Sesgada a la Izquierda)</h5>
              <div class="distribution-visual">
                <div class="left-skewed-distribution">
                  <div class="left-skew-curve"></div>
                  <div class="center-line"></div>
                </div>
              </div>
              <div class="distribution-formula">
                <strong>Media &lt; Mediana &lt; Moda</strong>
              </div>
              <p class="distribution-desc">
                La cola de la distribución se alarga hacia la izquierda. Hay valores extremos bajos
                que "jalan" la media hacia abajo.
              </p>
              <div class="distribution-example">
                <strong>Ejemplo:</strong> Tiempos de espera en un restaurante (la mayoría espera
                poco, pocos esperan mucho tiempo).
              </div>
            </div>
          </div>

          <div class="skewness-importance">
            <h4>🎯 ¿Por qué es importante conocer el sesgo?</h4>
            <div class="importance-points">
              <div class="importance-point">
                <h5>Elección de Medida Apropiada</h5>
                <p>
                  En distribuciones simétricas, puedes usar cualquiera de las tres medidas. En
                  distribuciones sesgadas, la <strong>mediana</strong> suele ser más representativa.
                </p>
              </div>

              <div class="importance-point">
                <h5>Interpretación de Resultados</h5>
                <p>
                  Si la media es mucho mayor que la mediana, indica valores extremos altos. Si es
                  mucho menor, indica valores extremos bajos.
                </p>
              </div>

              <div class="importance-point">
                <h5>Análisis Estadístico</h5>
                <p>
                  Muchas técnicas estadísticas avanzadas asumen distribuciones simétricas. Conocer
                  el sesgo ayuda a elegir el método apropiado.
                </p>
              </div>
            </div>
          </div>

          <div class="skewness-calculation">
            <h4>🔍 Cómo Identificar el Sesgo</h4>
            <p>
              Para determinar si una distribución está sesgada, compara las posiciones relativas de
              media, mediana y moda:
            </p>

            <div class="calculation-steps">
              <div class="calc-step">
                <h5>1. Calcula las tres medidas</h5>
                <p>Media, mediana y moda del conjunto de datos.</p>
              </div>

              <div class="calc-step">
                <h5>2. Compara las posiciones</h5>
                <ul>
                  <li>Si <strong>Media ≈ Mediana ≈ Moda</strong> → Distribución simétrica</li>
                  <li>Si <strong>Media &gt; Mediana &gt; Moda</strong> → Sesgo positivo</li>
                  <li>Si <strong>Media &lt; Mediana &lt; Moda</strong> → Sesgo negativo</li>
                </ul>
              </div>

              <div class="calc-step">
                <h5>3. Interpreta el resultado</h5>
                <p>Elige la medida más apropiada según el contexto y el sesgo identificado.</p>
              </div>
            </div>
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

    <!-- Media Aritmética -->
    <div v-if="activeTab === 'media'" class="content-section">
      <h2>Media Aritmética</h2>

      <div class="theory-box">
        <h3>Definición</h3>
        <p>
          La media aritmética es la medida de tendencia central más utilizada. Se obtiene sumando
          todos los valores y dividiendo entre el número total de observaciones.
        </p>

        <h4>Fórmulas</h4>
        <div class="formula-box">
          <p><strong>Media Poblacional (μ):</strong></p>
          <div v-html="renderLatexDisplay('\\mu = \\frac{\\sum X}{N}')"></div>
          <p class="formula-note">Donde N es el número total de valores en la población</p>
        </div>

        <div class="formula-box">
          <p>
            <strong>Media Muestral (<span v-html="renderLatex('\\bar{X}')"></span>):</strong>
          </p>
          <div v-html="renderLatexDisplay('\\bar{X} = \\frac{\\sum X}{n}')"></div>
          <p class="formula-note">Donde n es el número de valores en la muestra</p>
        </div>

        <h4>Propiedades</h4>
        <ul>
          <li>Requiere datos de nivel de intervalo o de razón</li>
          <li>Utiliza todos los valores del conjunto de datos</li>
          <li>Es única para un conjunto de datos</li>
          <li>La suma de las desviaciones de cada valor con respecto a la media es siempre cero</li>
        </ul>

        <div class="warning-box">
          <strong>⚠️ Debilidad:</strong> Se ve muy afectada por valores extremos (outliers), lo que
          puede hacer que no sea representativa del conjunto.
        </div>
      </div>

      <div class="example-section">
        <h3>Ejemplo Práctico: Calificaciones de Estudiantes</h3>
        <p>Un profesor desea calcular la calificación promedio de 8 estudiantes en un examen:</p>

        <div class="data-display">
          <strong>Calificaciones:</strong> {{ ejemploMedia.datos.join(', ') }}
        </div>

        <div class="solution-steps">
          <div class="step">
            <h4>Paso 1: Sumar todos los valores</h4>
            <div class="calculation">
              <div v-html="renderLatex('\\sum X = ' + ejemploMedia.datos.join(' + '))"></div>
              <div v-html="renderLatex('\\sum X = ' + ejemploMedia.suma)"></div>
            </div>
          </div>

          <div class="step">
            <h4>Paso 2: Dividir entre el número de observaciones</h4>
            <div class="calculation">
              <div
                v-html="
                  renderLatex(
                    '\\bar{X} = \\frac{' + ejemploMedia.suma + '}{' + ejemploMedia.n + '}',
                  )
                "
              ></div>
              <div v-html="renderLatex('\\bar{X} = ' + ejemploMedia.media.toFixed(2))"></div>
            </div>
          </div>

          <div class="result-box">
            <strong>Resultado:</strong> La calificación promedio es
            {{ ejemploMedia.media.toFixed(2) }}
          </div>
        </div>
      </div>

      <!-- Calculadora Interactiva -->
      <div class="interactive-section">
        <h3>Calculadora de Media</h3>
        <p>Ingresa tus propios datos separados por comas:</p>

        <div class="input-group">
          <input
            v-model="inputMedia"
            type="text"
            placeholder="Ejemplo: 85, 90, 78, 92, 88"
            class="data-input"
          />
          <button @click="calcularMedia" class="btn btn-primary">Calcular</button>
        </div>

        <div v-if="resultadoMedia !== null" class="result-display">
          <h4>Resultados:</h4>
          <p><strong>Datos ingresados:</strong> {{ datosMedia.join(', ') }}</p>
          <p><strong>Número de datos (n):</strong> {{ datosMedia.length }}</p>
          <p><strong>Suma:</strong> {{ sumaMedia }}</p>
          <p><strong>Media:</strong> {{ resultadoMedia.toFixed(4) }}</p>
        </div>
      </div>
    </div>

    <!-- Mediana -->
    <div v-if="activeTab === 'mediana'" class="content-section">
      <h2>Mediana</h2>

      <div class="theory-box">
        <h3>Definición</h3>
        <p>
          La mediana es el valor que se encuentra en el punto medio de un conjunto de datos, una vez
          que estos han sido ordenados de menor a mayor.
        </p>

        <h4>Cálculo</h4>
        <ul>
          <li>
            Si el número de observaciones es <strong>impar</strong>, la mediana es el valor central.
          </li>
          <li>
            Si el número de observaciones es <strong>par</strong>, la mediana es el promedio de los
            dos valores centrales.
          </li>
        </ul>

        <h4>Propiedades</h4>
        <ul>
          <li>
            <strong>No se ve afectada por valores extremos</strong>, lo que la hace más robusta
            cuando los datos son asimétricos
          </li>
          <li>Se puede calcular para datos de nivel ordinal, de intervalo y de razón</li>
          <li>Es especialmente útil cuando hay outliers en los datos</li>
        </ul>
      </div>

      <div class="example-section">
        <h3>Ejemplo 1: Número Impar de Datos</h3>
        <p>Salarios mensuales (en miles) de 7 empleados:</p>

        <div class="data-display">
          <strong>Datos originales:</strong> {{ ejemploMediana1.datos.join(', ') }}
        </div>

        <div class="solution-steps">
          <div class="step">
            <h4>Paso 1: Ordenar los datos</h4>
            <div class="data-display">
              {{ ejemploMediana1.datosOrdenados.join(', ') }}
            </div>
          </div>

          <div class="step">
            <h4>Paso 2: Encontrar el valor central</h4>
            <p>
              Con n = {{ ejemploMediana1.n }}, la posición central es:
              {{ Math.ceil(ejemploMediana1.n / 2) }}
            </p>
            <div class="data-display highlighted">
              {{ ejemploMediana1.datosOrdenados.slice(0, 3).join(', ') }},
              <span class="highlight">{{ ejemploMediana1.mediana }}</span
              >,
              {{ ejemploMediana1.datosOrdenados.slice(4).join(', ') }}
            </div>
          </div>

          <div class="result-box">
            <strong>Resultado:</strong> La mediana es {{ ejemploMediana1.mediana }} mil
          </div>
        </div>
      </div>

      <div class="example-section">
        <h3>Ejemplo 2: Número Par de Datos</h3>
        <p>Edades de 8 participantes en un estudio:</p>

        <div class="data-display">
          <strong>Datos originales:</strong> {{ ejemploMediana2.datos.join(', ') }}
        </div>

        <div class="solution-steps">
          <div class="step">
            <h4>Paso 1: Ordenar los datos</h4>
            <div class="data-display">
              {{ ejemploMediana2.datosOrdenados.join(', ') }}
            </div>
          </div>

          <div class="step">
            <h4>Paso 2: Promediar los dos valores centrales</h4>
            <p>
              Los valores centrales son: {{ ejemploMediana2.valoresCentrales[0] }} y
              {{ ejemploMediana2.valoresCentrales[1] }}
            </p>
            <div class="calculation">
              <div
                v-html="
                  renderLatex(
                    '\\text{Mediana} = \\frac{' +
                      ejemploMediana2.valoresCentrales[0] +
                      ' + ' +
                      ejemploMediana2.valoresCentrales[1] +
                      '}{2}',
                  )
                "
              ></div>
              <div v-html="renderLatex('\\text{Mediana} = ' + ejemploMediana2.mediana)"></div>
            </div>
          </div>

          <div class="result-box">
            <strong>Resultado:</strong> La mediana es {{ ejemploMediana2.mediana }} años
          </div>
        </div>
      </div>

      <!-- Calculadora Interactiva -->
      <div class="interactive-section">
        <h3>Calculadora de Mediana</h3>
        <p>Ingresa tus propios datos separados por comas:</p>

        <div class="input-group">
          <input
            v-model="inputMediana"
            type="text"
            placeholder="Ejemplo: 25, 30, 28, 35, 22"
            class="data-input"
          />
          <button @click="calcularMediana" class="btn btn-primary">Calcular</button>
        </div>

        <div v-if="resultadoMediana !== null" class="result-display">
          <h4>Resultados:</h4>
          <p><strong>Datos originales:</strong> {{ datosMediana.join(', ') }}</p>
          <p><strong>Datos ordenados:</strong> {{ datosMedianaOrdenados.join(', ') }}</p>
          <p><strong>Número de datos (n):</strong> {{ datosMediana.length }}</p>
          <p><strong>Mediana:</strong> {{ resultadoMediana }}</p>
        </div>
      </div>
    </div>

    <!-- Moda -->
    <div v-if="activeTab === 'moda'" class="content-section">
      <h2>Moda</h2>

      <div class="theory-box">
        <h3>Definición</h3>
        <p>La moda es el valor que aparece con mayor frecuencia en un conjunto de datos.</p>

        <h4>Tipos de Distribuciones</h4>
        <ul>
          <li><strong>Sin moda:</strong> Todos los valores aparecen con la misma frecuencia</li>
          <li><strong>Unimodal:</strong> Un solo valor es el más frecuente</li>
          <li><strong>Bimodal:</strong> Dos valores tienen la mayor frecuencia</li>
          <li><strong>Multimodal:</strong> Más de dos valores tienen la mayor frecuencia</li>
        </ul>

        <h4>Propiedades</h4>
        <ul>
          <li>Es especialmente útil para datos de nivel nominal</li>
          <li>No se ve afectada por valores extremos</li>
          <li>Puede no existir o puede haber múltiples modas</li>
          <li>Es la única medida de tendencia central que se puede usar con datos cualitativos</li>
        </ul>
      </div>

      <div class="example-section">
        <h3>Ejemplo 1: Moda Unimodal</h3>
        <p>Tallas de zapatos vendidas en una tienda durante un día:</p>

        <div class="data-display"><strong>Datos:</strong> {{ ejemploModa1.datos.join(', ') }}</div>

        <div class="solution-steps">
          <div class="step">
            <h4>Conteo de Frecuencias</h4>
            <table class="frequency-table">
              <thead>
                <tr>
                  <th>Talla</th>
                  <th>Frecuencia</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(freq, talla) in ejemploModa1.frecuencias"
                  :key="talla"
                  :class="{ 'highlight-row': talla === ejemploModa1.moda }"
                >
                  <td>{{ talla }}</td>
                  <td>{{ freq }}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="result-box">
            <strong>Resultado:</strong> La moda es {{ ejemploModa1.moda }} (aparece
            {{ ejemploModa1.frecuenciaMaxima }} veces)
          </div>
        </div>
      </div>

      <div class="example-section">
        <h3>Ejemplo 2: Moda Bimodal</h3>
        <p>Colores favoritos de 20 estudiantes:</p>

        <div class="data-display"><strong>Datos:</strong> {{ ejemploModa2.datos.join(', ') }}</div>

        <div class="solution-steps">
          <div class="step">
            <h4>Conteo de Frecuencias</h4>
            <table class="frequency-table">
              <thead>
                <tr>
                  <th>Color</th>
                  <th>Frecuencia</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(freq, color) in ejemploModa2.frecuencias"
                  :key="color"
                  :class="{ 'highlight-row': ejemploModa2.modas.includes(color) }"
                >
                  <td>{{ color }}</td>
                  <td>{{ freq }}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="result-box">
            <strong>Resultado:</strong> Las modas son {{ ejemploModa2.modas.join(' y ') }} (cada una
            aparece {{ ejemploModa2.frecuenciaMaxima }} veces)
            <p class="note">Esta es una distribución bimodal</p>
          </div>
        </div>
      </div>

      <!-- Calculadora Interactiva -->
      <div class="interactive-section">
        <h3>Calculadora de Moda</h3>
        <p>Ingresa tus propios datos separados por comas:</p>

        <div class="input-group">
          <input
            v-model="inputModa"
            type="text"
            placeholder="Ejemplo: 5, 3, 5, 7, 5, 3, 8"
            class="data-input"
          />
          <button @click="calcularModa" class="btn btn-primary">Calcular</button>
        </div>

        <div v-if="resultadoModa !== null" class="result-display">
          <h4>Resultados:</h4>
          <p><strong>Datos ingresados:</strong> {{ datosModa.join(', ') }}</p>
          <p><strong>Número de datos (n):</strong> {{ datosModa.length }}</p>

          <h5>Tabla de Frecuencias:</h5>
          <table class="frequency-table">
            <thead>
              <tr>
                <th>Valor</th>
                <th>Frecuencia</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(freq, valor) in frecuenciasModa"
                :key="valor"
                :class="{ 'highlight-row': resultadoModa.includes(valor) }"
              >
                <td>{{ valor }}</td>
                <td>{{ freq }}</td>
              </tr>
            </tbody>
          </table>

          <p v-if="resultadoModa.length === 0">
            <strong>Moda:</strong> No hay moda (todos los valores tienen la misma frecuencia)
          </p>
          <p v-else-if="resultadoModa.length === 1">
            <strong>Moda:</strong> {{ resultadoModa[0] }}
          </p>
          <p v-else>
            <strong>Modas:</strong> {{ resultadoModa.join(', ') }} (distribución multimodal)
          </p>
        </div>
      </div>
    </div>

    <!-- Comparación -->
    <div v-if="activeTab === 'comparacion'" class="content-section">
      <h2>Comparación de Medidas</h2>

      <div class="comparison-section">
        <h3>¿Cuándo usar cada medida?</h3>

        <table class="comparison-table">
          <thead>
            <tr>
              <th>Medida</th>
              <th>Ventajas</th>
              <th>Desventajas</th>
              <th>Mejor uso</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Media</strong></td>
              <td>
                <ul>
                  <li>Usa todos los datos</li>
                  <li>Única para cada conjunto</li>
                  <li>Fácil de calcular</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>Afectada por valores extremos</li>
                  <li>Solo para datos numéricos</li>
                </ul>
              </td>
              <td>Datos simétricos sin outliers</td>
            </tr>
            <tr>
              <td><strong>Mediana</strong></td>
              <td>
                <ul>
                  <li>No afectada por extremos</li>
                  <li>Robusta</li>
                  <li>Funciona con datos ordinales</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>No usa todos los datos</li>
                  <li>Más compleja de calcular</li>
                </ul>
              </td>
              <td>Datos asimétricos o con outliers</td>
            </tr>
            <tr>
              <td><strong>Moda</strong></td>
              <td>
                <ul>
                  <li>Funciona con datos nominales</li>
                  <li>No afectada por extremos</li>
                  <li>Fácil de identificar</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>Puede no existir</li>
                  <li>Puede haber múltiples modas</li>
                  <li>No usa toda la información</li>
                </ul>
              </td>
              <td>Datos categóricos o preferencias</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="example-section">
        <h3>Ejemplo Comparativo</h3>
        <p>Analicemos el mismo conjunto de datos con las tres medidas:</p>

        <div class="data-display">
          <strong>Precios de casas (en miles):</strong> {{ ejemploComparacion.datos.join(', ') }}
        </div>

        <div class="solution-steps">
          <div class="step">
            <h4>Cálculos</h4>
            <div class="calc-grid">
              <div class="calc-item">
                <strong>Media:</strong>
                <div
                  v-html="
                    renderLatex(
                      '\\bar{X} = \\frac{' +
                        ejemploComparacion.suma +
                        '}{' +
                        ejemploComparacion.n +
                        '} = ' +
                        ejemploComparacion.media.toFixed(2),
                    )
                  "
                ></div>
              </div>
              <div class="calc-item">
                <strong>Mediana:</strong>
                <p>Datos ordenados: {{ ejemploComparacion.datosOrdenados.join(', ') }}</p>
                <p>Mediana = {{ ejemploComparacion.mediana }}</p>
              </div>
              <div class="calc-item">
                <strong>Moda:</strong>
                <p>Todas las frecuencias son iguales</p>
                <p>No hay moda</p>
              </div>
            </div>
          </div>

          <div class="insight-box">
            <h4>Análisis:</h4>
            <p>
              Observa que la <strong>media ({{ ejemploComparacion.media.toFixed(2) }})</strong> es
              mucho mayor que la <strong>mediana ({{ ejemploComparacion.mediana }})</strong>. Esto
              se debe al valor extremo de 450.
            </p>
            <p>
              En este caso, la <strong>mediana es más representativa</strong> del precio típico de
              las casas, ya que no se ve afectada por el valor extremadamente alto.
            </p>
            <p>
              Esto indica una <strong>distribución con sesgo positivo</strong> (sesgada a la
              derecha).
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Tips de Interpretación -->
    <div v-if="activeTab === 'interpretacion'" class="content-section">
      <h2>Tips de Interpretación</h2>

      <div class="tips-section">
        <div class="intro-tip">
          <h3>📚 Guía Rápida para Interpretar Medidas de Tendencia Central</h3>
          <p>
            Entender qué significan los números es tan importante como calcularlos. Aquí te
            presentamos consejos prácticos para interpretar correctamente cada medida.
          </p>
        </div>

        <div class="tips-grid">
          <!-- Tip 1: Contexto -->
          <div class="tip-card">
            <div class="tip-icon">🎯</div>
            <h4>1. Contexto es Clave</h4>
            <p>Siempre considera el contexto de los datos antes de interpretar.</p>
            <div class="tip-example">
              <strong>Ejemplo:</strong>
              <p>Una media de 70 puede ser:</p>
              <ul>
                <li>✅ Excelente si es una calificación de 0-100</li>
                <li>❌ Preocupante si es la edad promedio en una empresa</li>
                <li>💰 Un dato sin contexto si hablamos de precios</li>
              </ul>
            </div>
            <div class="tip-action">
              <strong>Acción:</strong> Siempre incluye unidades y contexto en tu interpretación.
            </div>
          </div>

          <!-- Tip 2: Comparar las tres medidas -->
          <div class="tip-card">
            <div class="tip-icon">📊</div>
            <h4>2. Compara las Tres Medidas</h4>
            <p>
              Nunca te quedes solo con una medida. Compara media, mediana y moda para entender la
              distribución.
            </p>
            <div class="tip-example">
              <strong>Señales de alerta:</strong>
              <ul>
                <li>Si <strong>Media ≠ Mediana</strong> → Hay valores extremos</li>
                <li>
                  Si <strong>Media &gt;&gt; Mediana</strong> → Valores extremos altos (sesgo
                  positivo)
                </li>
                <li>
                  Si <strong>Media &lt;&lt; Mediana</strong> → Valores extremos bajos (sesgo
                  negativo)
                </li>
              </ul>
            </div>
            <div class="tip-action">
              <strong>Acción:</strong> Si difieren mucho, usa la mediana como medida más
              representativa.
            </div>
          </div>

          <!-- Tip 3: Identifica outliers -->
          <div class="tip-card">
            <div class="tip-icon">🔍</div>
            <h4>3. Identifica Valores Extremos</h4>
            <p>Los valores atípicos (outliers) pueden distorsionar la media dramáticamente.</p>
            <div class="tip-example">
              <strong>Ejemplo:</strong>
              <p>Salarios: 30k, 32k, 35k, 28k, 500k</p>
              <ul>
                <li>Media: 125k (no representa a nadie)</li>
                <li>Mediana: 32k (más representativa)</li>
              </ul>
            </div>
            <div class="tip-action">
              <strong>Acción:</strong> Investiga si los outliers son errores o datos legítimos.
            </div>
          </div>

          <!-- Tip 4: Tamaño de muestra -->
          <div class="tip-card">
            <div class="tip-icon">📏</div>
            <h4>4. Considera el Tamaño de Muestra</h4>
            <p>Con pocos datos, las medidas pueden no ser representativas.</p>
            <div class="tip-example">
              <strong>Regla práctica:</strong>
              <ul>
                <li>n &lt; 10 → Datos insuficientes, cuidado con conclusiones</li>
                <li>10 ≤ n &lt; 30 → Suficiente para análisis básico</li>
                <li>n ≥ 30 → Buen tamaño para análisis confiable</li>
              </ul>
            </div>
            <div class="tip-action">
              <strong>Acción:</strong> Siempre reporta el tamaño de muestra (n) junto con tus
              resultados.
            </div>
          </div>

          <!-- Tip 5: Tipo de datos -->
          <div class="tip-card">
            <div class="tip-icon">🗂️</div>
            <h4>5. Respeta el Tipo de Datos</h4>
            <p>No todas las medidas son apropiadas para todos los tipos de datos.</p>
            <div class="tip-example">
              <strong>Guía rápida:</strong>
              <ul>
                <li><strong>Nominales:</strong> Solo moda (ej: colores, géneros)</li>
                <li><strong>Ordinales:</strong> Moda y mediana (ej: satisfacción: 1-5)</li>
                <li><strong>Numéricos:</strong> Todas las medidas (ej: edades, precios)</li>
              </ul>
            </div>
            <div class="tip-action">
              <strong>Acción:</strong> No calcules la media de datos ordinales o nominales.
            </div>
          </div>

          <!-- Tip 6: Frases de interpretación -->
          <div class="tip-card">
            <div class="tip-icon">💬</div>
            <h4>6. Usa Lenguaje Claro</h4>
            <p>Comunica tus hallazgos de manera que cualquiera pueda entender.</p>
            <div class="tip-example">
              <strong>Frases útiles:</strong>
              <ul>
                <li>"El valor típico es..."</li>
                <li>"La mitad de los datos está por debajo de..."</li>
                <li>"El valor más frecuente es..."</li>
                <li>"En promedio..."</li>
                <li>"Los datos tienden a agruparse alrededor de..."</li>
              </ul>
            </div>
            <div class="tip-action">
              <strong>Acción:</strong> Evita tecnicismos cuando te comuniques con audiencias no
              técnicas.
            </div>
          </div>
        </div>

        <!-- Checklist de interpretación -->
        <div class="interpretation-checklist">
          <h3>✅ Checklist de Interpretación</h3>
          <p>Antes de presentar tus resultados, verifica que hayas considerado:</p>

          <div class="checklist-items">
            <div class="checklist-item">
              <input type="checkbox" id="check1" />
              <label for="check1">¿He calculado las tres medidas (media, mediana, moda)?</label>
            </div>

            <div class="checklist-item">
              <input type="checkbox" id="check2" />
              <label for="check2">¿He comparado sus valores para identificar el sesgo?</label>
            </div>

            <div class="checklist-item">
              <input type="checkbox" id="check3" />
              <label for="check3">¿He identificado posibles valores extremos?</label>
            </div>

            <div class="checklist-item">
              <input type="checkbox" id="check4" />
              <label for="check4">¿Es el tamaño de muestra adecuado (n ≥ 30)?</label>
            </div>

            <div class="checklist-item">
              <input type="checkbox" id="check5" />
              <label for="check5">¿He usado la medida apropiada para el tipo de datos?</label>
            </div>

            <div class="checklist-item">
              <input type="checkbox" id="check6" />
              <label for="check6">¿He incluido contexto y unidades en mi interpretación?</label>
            </div>

            <div class="checklist-item">
              <input type="checkbox" id="check7" />
              <label for="check7">¿Puedo explicar mis hallazgos en lenguaje simple?</label>
            </div>
          </div>
        </div>

        <!-- Errores comunes -->
        <div class="common-errors">
          <h3>⚠️ Errores Comunes a Evitar</h3>

          <div class="error-cards">
            <div class="error-card">
              <h4>❌ Error 1: Usar solo la media</h4>
              <p><strong>Problema:</strong> La media puede ser engañosa con valores extremos.</p>
              <p><strong>Solución:</strong> Siempre calcula y compara con la mediana.</p>
            </div>

            <div class="error-card">
              <h4>❌ Error 2: Ignorar el contexto</h4>
              <p><strong>Problema:</strong> "La media es 50" no dice nada sin contexto.</p>
              <p>
                <strong>Solución:</strong> Siempre especifica: "El tiempo promedio de espera es 50
                minutos".
              </p>
            </div>

            <div class="error-card">
              <h4>❌ Error 3: Confundir mediana con media</h4>
              <p>
                <strong>Problema:</strong> Son conceptos diferentes con interpretaciones distintas.
              </p>
              <p>
                <strong>Solución:</strong> Media = promedio aritmético, Mediana = valor central.
              </p>
            </div>

            <div class="error-card">
              <h4>❌ Error 4: Calcular media de datos ordinales</h4>
              <p>
                <strong>Problema:</strong> No tiene sentido promediar "satisfecho", "neutral",
                "insatisfecho".
              </p>
              <p><strong>Solución:</strong> Usa moda o mediana para datos ordinales.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Ejercicio Completo -->
    <div v-if="activeTab === 'ejercicio-completo'" class="content-section">
      <h2>Ejercicio Completo: Análisis Paso a Paso</h2>

      <div class="exercise-intro">
        <h3>🎓 Caso de Estudio: Evaluación de Desempeño de Vendedores</h3>
        <p>
          Una empresa quiere analizar las ventas mensuales (en miles de dólares) de sus 15
          vendedores para entender el desempeño del equipo y tomar decisiones sobre bonificaciones.
        </p>
      </div>

      <div class="complete-example">
        <!-- Datos originales -->
        <div class="example-step">
          <h4>📋 Paso 1: Datos Recopilados</h4>
          <div class="data-display">
            <strong>Ventas mensuales (en miles $):</strong><br />
            {{ ejercicioCompleto.datos.join(', ') }}
          </div>
          <p><strong>Total de vendedores (n):</strong> {{ ejercicioCompleto.n }}</p>
        </div>

        <!-- Cálculo de Media -->
        <div class="example-step">
          <h4>📊 Paso 2: Calcular la Media</h4>
          <div class="calculation-detail">
            <p><strong>Fórmula:</strong></p>
            <div v-html="renderLatexDisplay('\\bar{X} = \\frac{\\sum X}{n}')"></div>

            <p><strong>Sustituyendo valores:</strong></p>
            <div class="calc-process">
              <div v-html="renderLatex('\\sum X = ' + ejercicioCompleto.datos.join(' + '))"></div>
              <div v-html="renderLatex('\\sum X = ' + ejercicioCompleto.suma)"></div>
              <div
                v-html="
                  renderLatex(
                    '\\bar{X} = \\frac{' +
                      ejercicioCompleto.suma +
                      '}{' +
                      ejercicioCompleto.n +
                      '} = ' +
                      ejercicioCompleto.media.toFixed(2),
                  )
                "
              ></div>
            </div>
          </div>

          <div class="interpretation-box">
            <h5>💡 Interpretación:</h5>
            <p>
              La <strong>venta promedio</strong> del equipo es de
              <strong>${{ ejercicioCompleto.media.toFixed(2) }}k</strong> mensuales. Esto significa
              que, si distribuyéramos todas las ventas equitativamente entre los vendedores, cada
              uno tendría esta cifra.
            </p>
          </div>
        </div>

        <!-- Cálculo de Mediana -->
        <div class="example-step">
          <h4>📊 Paso 3: Calcular la Mediana</h4>
          <div class="calculation-detail">
            <p><strong>Primero ordenamos los datos:</strong></p>
            <div class="data-display">
              {{ ejercicioCompleto.datosOrdenados.join(', ') }}
            </div>

            <p>
              <strong
                >Como n = {{ ejercicioCompleto.n }} (impar), la mediana es el valor central:</strong
              >
            </p>
            <p>Posición central: {{ Math.ceil(ejercicioCompleto.n / 2) }}</p>
            <div class="data-display highlighted">
              <span v-for="(val, idx) in ejercicioCompleto.datosOrdenados" :key="idx">
                <span v-if="idx === Math.floor(ejercicioCompleto.n / 2)" class="highlight">{{
                  val
                }}</span>
                <span v-else>{{ val }}</span>
                <span v-if="idx < ejercicioCompleto.n - 1">, </span>
              </span>
            </div>
            <div class="result-highlight">
              <strong>Mediana = ${{ ejercicioCompleto.mediana }}k</strong>
            </div>
          </div>

          <div class="interpretation-box">
            <h5>💡 Interpretación:</h5>
            <p>
              La <strong>venta mediana</strong> es de
              <strong>${{ ejercicioCompleto.mediana }}k</strong>. Esto significa que el 50% de los
              vendedores vende menos de ${{ ejercicioCompleto.mediana }}k y el otro 50% vende más.
              Es el punto que divide al equipo en dos mitades iguales.
            </p>
          </div>
        </div>

        <!-- Cálculo de Moda -->
        <div class="example-step">
          <h4>📊 Paso 4: Calcular la Moda</h4>
          <div class="calculation-detail">
            <p><strong>Tabla de frecuencias:</strong></p>
            <table class="frequency-table">
              <thead>
                <tr>
                  <th>Ventas ($k)</th>
                  <th>Frecuencia</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(freq, valor) in ejercicioCompleto.frecuencias"
                  :key="valor"
                  :class="{ 'highlight-row': ejercicioCompleto.modas.includes(Number(valor)) }"
                >
                  <td>{{ valor }}</td>
                  <td>{{ freq }}</td>
                </tr>
              </tbody>
            </table>

            <div class="result-highlight" v-if="ejercicioCompleto.modas.length > 0">
              <strong>Moda = ${{ ejercicioCompleto.modas.join(', $') }}k</strong>
              <p v-if="ejercicioCompleto.modas.length > 1">(Distribución bimodal)</p>
            </div>
            <div class="result-highlight" v-else>
              <strong>No hay moda</strong> (todos los valores tienen la misma frecuencia)
            </div>
          </div>

          <div class="interpretation-box">
            <h5>💡 Interpretación:</h5>
            <p v-if="ejercicioCompleto.modas.length === 1">
              El valor de ventas <strong>más frecuente</strong> es
              <strong>${{ ejercicioCompleto.modas[0] }}k</strong>. Este es el nivel de ventas que
              más vendedores alcanzan.
            </p>
            <p v-else-if="ejercicioCompleto.modas.length > 1">
              Hay <strong>dos valores igualmente frecuentes</strong>: ${{
                ejercicioCompleto.modas.join('k y $')
              }}k. Esto sugiere que hay dos "grupos" principales de desempeño en el equipo.
            </p>
            <p v-else>
              No hay un valor que se repita más que otros. Cada vendedor tiene un nivel de ventas
              único.
            </p>
          </div>
        </div>

        <!-- Comparación y Análisis de Sesgo -->
        <div class="example-step">
          <h4>🔍 Paso 5: Comparación y Análisis de Sesgo</h4>
          <div class="comparison-summary">
            <div class="measure-summary">
              <div class="measure-item">
                <h5>Media</h5>
                <div class="measure-value">${{ ejercicioCompleto.media.toFixed(2) }}k</div>
              </div>
              <div class="measure-item">
                <h5>Mediana</h5>
                <div class="measure-value">${{ ejercicioCompleto.mediana }}k</div>
              </div>
              <div class="measure-item" v-if="ejercicioCompleto.modas.length > 0">
                <h5>Moda</h5>
                <div class="measure-value">${{ ejercicioCompleto.modas.join(', $') }}k</div>
              </div>
            </div>

            <div class="skew-analysis">
              <h5>Análisis de Sesgo:</h5>
              <div
                v-if="ejercicioCompleto.media > ejercicioCompleto.mediana + 2"
                class="skew-positive"
              >
                <strong>📈 Sesgo Positivo (Derecha)</strong>
                <p>
                  La media (${{ ejercicioCompleto.media.toFixed(2) }}k) es
                  <strong>significativamente mayor</strong> que la mediana (${{
                    ejercicioCompleto.mediana
                  }}k).
                </p>
                <p>
                  <strong>Significado:</strong> Hay algunos vendedores con ventas muy altas que
                  están "jalando" la media hacia arriba. La mayoría del equipo vende menos que el
                  promedio.
                </p>
              </div>
              <div
                v-else-if="ejercicioCompleto.media < ejercicioCompleto.mediana - 2"
                class="skew-negative"
              >
                <strong>📉 Sesgo Negativo (Izquierda)</strong>
                <p>
                  La media (${{ ejercicioCompleto.media.toFixed(2) }}k) es
                  <strong>significativamente menor</strong> que la mediana (${{
                    ejercicioCompleto.mediana
                  }}k).
                </p>
                <p>
                  <strong>Significado:</strong> Hay algunos vendedores con ventas muy bajas que
                  están "jalando" la media hacia abajo.
                </p>
              </div>
              <div v-else class="skew-symmetric">
                <strong>📊 Distribución Aproximadamente Simétrica</strong>
                <p>
                  La media (${{ ejercicioCompleto.media.toFixed(2) }}k) y la mediana (${{
                    ejercicioCompleto.mediana
                  }}k) son <strong>muy similares</strong>.
                </p>
                <p>
                  <strong>Significado:</strong> Los datos están distribuidos equilibradamente. No
                  hay valores extremos que distorsionen el promedio.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Identificación de Valores Extremos -->
        <div class="example-step">
          <h4>🎯 Paso 6: Identificación de Valores Extremos</h4>
          <div class="outliers-analysis">
            <p><strong>Valor máximo:</strong> ${{ ejercicioCompleto.max }}k</p>
            <p><strong>Valor mínimo:</strong> ${{ ejercicioCompleto.min }}k</p>
            <p><strong>Rango:</strong> ${{ ejercicioCompleto.rango }}k</p>

            <div class="interpretation-box">
              <h5>💡 Análisis:</h5>
              <p>
                La diferencia entre el vendedor con mejores ventas (${{ ejercicioCompleto.max }}k) y
                el de menores ventas (${{ ejercicioCompleto.min }}k) es de ${{
                  ejercicioCompleto.rango
                }}k.
              </p>

              <div v-if="ejercicioCompleto.max > ejercicioCompleto.media + 20" class="alert-box">
                <strong>⚠️ Atención:</strong> El valor máximo (${{ ejercicioCompleto.max }}k) está
                muy por encima de la media (${{ ejercicioCompleto.media.toFixed(2) }}k). Este
                vendedor es un <strong>outlier positivo</strong> - un desempeño excepcional que
                puede ser estudiado como caso de éxito.
              </div>

              <div v-if="ejercicioCompleto.min < ejercicioCompleto.media - 20" class="alert-box">
                <strong>⚠️ Atención:</strong> El valor mínimo (${{ ejercicioCompleto.min }}k) está
                muy por debajo de la media (${{ ejercicioCompleto.media.toFixed(2) }}k). Este
                vendedor necesita apoyo o capacitación adicional.
              </div>
            </div>
          </div>
        </div>

        <!-- Recomendación de medida -->
        <div class="example-step">
          <h4>🎓 Paso 7: ¿Qué Medida Usar?</h4>
          <div class="recommendation-box">
            <div
              v-if="Math.abs(ejercicioCompleto.media - ejercicioCompleto.mediana) > 5"
              class="recommendation"
            >
              <h5>✅ Recomendación: Usar la MEDIANA</h5>
              <p>
                <strong>Razón:</strong> Existe una diferencia notable entre media y mediana, lo que
                indica presencia de valores extremos. La mediana (${{ ejercicioCompleto.mediana }}k)
                es más representativa del vendedor "típico".
              </p>

              <p>
                <strong>Para el gerente:</strong> "El vendedor típico genera ventas de ${{
                  ejercicioCompleto.mediana
                }}k mensuales. La mitad del equipo vende más y la mitad vende menos que esta cifra."
              </p>
            </div>
            <div v-else class="recommendation">
              <h5>✅ Recomendación: Puedes usar MEDIA o MEDIANA</h5>
              <p>
                <strong>Razón:</strong> Los valores son similares, lo que indica una distribución
                equilibrada sin valores extremos significativos.
              </p>

              <p>
                <strong>Para el gerente:</strong> "Las ventas promedio del equipo son de ${{
                  ejercicioCompleto.media.toFixed(2)
                }}k mensuales, y el vendedor típico (mediana) está en ${{
                  ejercicioCompleto.mediana
                }}k."
              </p>
            </div>
          </div>
        </div>

        <!-- Conclusión General -->
        <div class="example-step conclusion">
          <h4>🎯 Conclusión General</h4>
          <div class="conclusion-box">
            <h5>Resumen del Análisis de Ventas:</h5>

            <div class="conclusion-points">
              <div class="conclusion-point">
                <strong>1. Desempeño Central:</strong>
                <p>
                  El equipo de ventas tiene una mediana de ${{ ejercicioCompleto.mediana }}k, lo que
                  representa el nivel de ventas del vendedor típico.
                </p>
              </div>

              <div
                class="conclusion-point"
                v-if="ejercicioCompleto.media > ejercicioCompleto.mediana + 2"
              >
                <strong>2. Distribución Sesgada:</strong>
                <p>
                  La distribución muestra sesgo positivo (media > mediana), indicando que algunos
                  vendedores "estrella" están generando ventas significativamente superiores al
                  resto del equipo.
                </p>
              </div>

              <div class="conclusion-point" v-if="ejercicioCompleto.rango > 40">
                <strong>3. Alta Variabilidad:</strong>
                <p>
                  Existe una gran diferencia entre el mejor y peor vendedor (rango de ${{
                    ejercicioCompleto.rango
                  }}k), sugiriendo que el equipo tiene niveles de desempeño muy diversos.
                </p>
              </div>

              <div class="conclusion-point">
                <strong>4. Recomendaciones de Negocio:</strong>
                <ul>
                  <li v-if="ejercicioCompleto.max > ejercicioCompleto.media + 20">
                    <strong>Premiar excelencia:</strong> Reconocer al vendedor top (${{
                      ejercicioCompleto.max
                    }}k) y estudiar sus estrategias para replicarlas.
                  </li>
                  <li v-if="ejercicioCompleto.min < ejercicioCompleto.media - 20">
                    <strong>Apoyo focalizado:</strong> Brindar capacitación al vendedor con menor
                    desempeño (${{ ejercicioCompleto.min }}k).
                  </li>
                  <li>
                    <strong>Meta realista:</strong> Establecer metas en torno a la mediana (${{
                      ejercicioCompleto.mediana
                    }}k) como objetivo base, con bonos por superar este valor.
                  </li>
                  <li v-if="ejercicioCompleto.modas.length > 1">
                    <strong>Dos segmentos:</strong> La presencia de dos modas sugiere dos grupos de
                    vendedores con niveles de desempeño distintos. Considerar capacitación
                    diferenciada.
                  </li>
                </ul>
              </div>

              <div class="conclusion-point">
                <strong>5. Medida Recomendada para Reportes:</strong>
                <p>
                  Para comunicación con la dirección, usar la
                  <strong>mediana (${{ ejercicioCompleto.mediana }}k)</strong> como referencia del
                  vendedor típico, complementando con el promedio (${{
                    ejercicioCompleto.media.toFixed(2)
                  }}k) para mostrar el potencial total del equipo.
                </p>
              </div>
            </div>

            <div class="final-takeaway">
              <h5>💼 Mensaje Final para la Gerencia:</h5>
              <p>
                "Nuestro equipo de {{ ejercicioCompleto.n }} vendedores tiene un desempeño promedio
                de ${{ ejercicioCompleto.media.toFixed(2) }}k mensuales. Sin embargo, el vendedor
                típico genera ${{ ejercicioCompleto.mediana }}k.
                <span v-if="ejercicioCompleto.media > ejercicioCompleto.mediana + 5">
                  La diferencia entre estas cifras se debe a que tenemos algunos vendedores
                  excepcionales que elevan el promedio.
                </span>
                Recomendamos establecer metas escalonadas: base en ${{
                  ejercicioCompleto.mediana
                }}k, objetivo en ${{ ejercicioCompleto.media.toFixed(2) }}k, y excelencia por encima
                de ${{ Math.round(ejercicioCompleto.media * 1.2) }}k."
              </p>
            </div>
          </div>
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
  { id: 'media', label: 'Media' },
  { id: 'mediana', label: 'Mediana' },
  { id: 'moda', label: 'Moda' },
  { id: 'comparacion', label: 'Comparación' },
  { id: 'interpretacion', label: 'Tips de Interpretación' },
  { id: 'ejercicio-completo', label: 'Ejercicio Completo' },
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

// Ejemplos de Media
const ejemploMedia = {
  datos: [85, 90, 78, 92, 88, 76, 95, 82],
  n: 8,
  suma: 686,
  media: 85.75,
}

// Calculadora de Media
const inputMedia = ref('')
const datosMedia = ref<number[]>([])
const resultadoMedia = ref<number | null>(null)
const sumaMedia = ref(0)

const calcularMedia = () => {
  try {
    const valores = inputMedia.value
      .split(',')
      .map((v) => parseFloat(v.trim()))
      .filter((v) => !isNaN(v))
    if (valores.length === 0) {
      alert('Por favor ingresa datos válidos')
      return
    }
    datosMedia.value = valores
    sumaMedia.value = valores.reduce((sum, val) => sum + val, 0)
    resultadoMedia.value = sumaMedia.value / valores.length
  } catch {
    alert('Error al procesar los datos')
  }
}

// Ejemplos de Mediana
const ejemploMediana1 = {
  datos: [32, 28, 35, 40, 30, 45, 38],
  datosOrdenados: [28, 30, 32, 35, 38, 40, 45],
  n: 7,
  mediana: 35,
}

const ejemploMediana2 = {
  datos: [25, 30, 28, 35, 22, 40, 27, 33],
  datosOrdenados: [22, 25, 27, 28, 30, 33, 35, 40],
  valoresCentrales: [28, 30],
  mediana: 29,
}

// Calculadora de Mediana
const inputMediana = ref('')
const datosMediana = ref<number[]>([])
const datosMedianaOrdenados = ref<number[]>([])
const resultadoMediana = ref<number | null>(null)

const calcularMediana = () => {
  try {
    const valores = inputMediana.value
      .split(',')
      .map((v) => parseFloat(v.trim()))
      .filter((v) => !isNaN(v))
    if (valores.length === 0) {
      alert('Por favor ingresa datos válidos')
      return
    }
    datosMediana.value = valores
    const ordenados = [...valores].sort((a, b) => a - b)
    datosMedianaOrdenados.value = ordenados

    const n = ordenados.length
    if (n % 2 === 0) {
      resultadoMediana.value = (ordenados[n / 2 - 1] + ordenados[n / 2]) / 2
    } else {
      resultadoMediana.value = ordenados[Math.floor(n / 2)]
    }
  } catch {
    alert('Error al procesar los datos')
  }
}

// Ejemplos de Moda
const ejemploModa1 = {
  datos: [7, 8, 7, 9, 7, 8, 10, 7, 8, 9, 7],
  frecuencias: { '7': 5, '8': 3, '9': 2, '10': 1 },
  moda: '7',
  frecuenciaMaxima: 5,
}

const ejemploModa2 = {
  datos: [
    'Azul',
    'Rojo',
    'Verde',
    'Azul',
    'Rojo',
    'Verde',
    'Azul',
    'Rojo',
    'Amarillo',
    'Azul',
    'Rojo',
    'Verde',
    'Azul',
    'Rojo',
    'Azul',
    'Rojo',
    'Verde',
    'Azul',
    'Rojo',
    'Verde',
  ],
  frecuencias: { Azul: 7, Rojo: 7, Verde: 5, Amarillo: 1 },
  modas: ['Azul', 'Rojo'],
  frecuenciaMaxima: 7,
}

// Calculadora de Moda
const inputModa = ref('')
const datosModa = ref<string[]>([])
const frecuenciasModa = ref<Record<string, number>>({})
const resultadoModa = ref<string[] | null>(null)

const calcularModa = () => {
  try {
    const valores = inputModa.value
      .split(',')
      .map((v) => v.trim())
      .filter((v) => v !== '')
    if (valores.length === 0) {
      alert('Por favor ingresa datos válidos')
      return
    }
    datosModa.value = valores

    const frecuencias: Record<string, number> = {}
    valores.forEach((valor) => {
      frecuencias[valor] = (frecuencias[valor] || 0) + 1
    })
    frecuenciasModa.value = frecuencias

    const maxFreq = Math.max(...Object.values(frecuencias))
    const modas = Object.keys(frecuencias).filter((key) => frecuencias[key] === maxFreq)

    // Si todos tienen la misma frecuencia, no hay moda
    if (modas.length === Object.keys(frecuencias).length) {
      resultadoModa.value = []
    } else {
      resultadoModa.value = modas
    }
  } catch {
    alert('Error al procesar los datos')
  }
}

// Ejemplo de Comparación
const ejemploComparacion = {
  datos: [150, 180, 200, 175, 190, 185, 450],
  datosOrdenados: [150, 175, 180, 185, 190, 200, 450],
  n: 7,
  suma: 1530,
  media: 218.57,
  mediana: 185,
}

// Ejercicio Completo
const calcularEjercicioCompleto = (datos: number[]) => {
  const n = datos.length
  const suma = datos.reduce((acc, val) => acc + val, 0)
  const media = suma / n

  const datosOrdenados = [...datos].sort((a, b) => a - b)
  const mediana =
    n % 2 === 0
      ? (datosOrdenados[n / 2 - 1] + datosOrdenados[n / 2]) / 2
      : datosOrdenados[Math.floor(n / 2)]

  const frecuencias: Record<number, number> = {}
  datos.forEach((valor) => {
    frecuencias[valor] = (frecuencias[valor] || 0) + 1
  })

  const maxFreq = Math.max(...Object.values(frecuencias))
  const modas = Object.keys(frecuencias)
    .map(Number)
    .filter((key) => frecuencias[key] === maxFreq)
    .filter((_, index, arr) => arr.length < Object.keys(frecuencias).length) // Solo si no todos son iguales

  const max = Math.max(...datos)
  const min = Math.min(...datos)
  const rango = max - min

  return {
    datos,
    n,
    suma,
    media,
    datosOrdenados,
    mediana,
    frecuencias,
    modas,
    max,
    min,
    rango,
  }
}

const ejercicioCompleto = calcularEjercicioCompleto([
  35, 42, 38, 55, 41, 37, 45, 39, 48, 40, 43, 36, 52, 44, 38,
])
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
  background: #fff3cd;
  border-left: 4px solid #ffc107;
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

.frequency-table {
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
}

.frequency-table th,
.frequency-table td {
  padding: 0.75rem;
  text-align: left;
  border-bottom: 1px solid var(--light);
}

.frequency-table th {
  background: var(--secondary);
  color: white;
  font-weight: bold;
}

.frequency-table .highlight-row {
  background: #fff3cd;
  font-weight: bold;
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

.skewness-explanation {
  margin-top: 2rem;
}

.skewness-explanation h4 {
  color: var(--secondary);
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.distribution-types {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.distribution-card {
  background: white;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: var(--shadow);
  border: 2px solid var(--light);
}

.distribution-card h5 {
  color: var(--secondary);
  margin-bottom: 1rem;
  text-align: center;
  font-size: 1.1rem;
}

.distribution-visual {
  display: flex;
  justify-content: center;
  margin: 1.5rem 0;
}

.symmetric-distribution,
.right-skewed-distribution,
.left-skewed-distribution {
  position: relative;
  width: 200px;
  height: 80px;
}

.bell-curve {
  width: 100%;
  height: 60px;
  background: linear-gradient(to right, transparent 20%, var(--primary) 50%, transparent 80%);
  border-radius: 50% 50% 50% 50% / 100% 100% 0% 0%;
  position: relative;
}

.right-skew-curve {
  width: 100%;
  height: 60px;
  background: linear-gradient(to right, var(--primary) 30%, transparent 70%);
  border-radius: 50% 20% 50% 50% / 100% 100% 0% 0%;
  position: relative;
}

.left-skew-curve {
  width: 100%;
  height: 60px;
  background: linear-gradient(to right, transparent 30%, var(--primary) 70%);
  border-radius: 20% 50% 50% 50% / 100% 100% 0% 0%;
  position: relative;
}

.center-line {
  position: absolute;
  top: 0;
  left: 50%;
  width: 2px;
  height: 100%;
  background: var(--secondary);
  transform: translateX(-50%);
}

.distribution-formula {
  text-align: center;
  font-size: 1.1rem;
  margin: 1rem 0;
  padding: 0.5rem;
  background: var(--light);
  border-radius: 4px;
}

.distribution-desc {
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 1rem 0;
}

.distribution-example {
  background: #e3f2fd;
  padding: 0.75rem;
  border-radius: 4px;
  font-size: 0.9rem;
  border-left: 3px solid var(--primary);
}

.skewness-importance {
  background: #fff3cd;
  border-left: 4px solid #ffc107;
  padding: 1.5rem;
  margin: 2rem 0;
  border-radius: 4px;
}

.skewness-importance h4 {
  color: #f57c00;
  margin-bottom: 1rem;
}

.importance-points {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.importance-point {
  background: white;
  padding: 1rem;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.importance-point h5 {
  color: var(--secondary);
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.skewness-calculation {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: var(--shadow);
  margin-top: 2rem;
}

.skewness-calculation h4 {
  color: var(--secondary);
  margin-bottom: 1rem;
}

.calculation-steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.calc-step {
  background: var(--light);
  padding: 1rem;
  border-radius: 6px;
  text-align: center;
}

.calc-step h5 {
  color: var(--secondary);
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.calc-step ul {
  text-align: left;
  margin: 0.5rem 0 0 0;
  padding-left: 1rem;
}

.calc-step li {
  margin: 0.25rem 0;
  font-size: 0.9rem;
}

.comparison-table {
  width: 100%;
  border-collapse: collapse;
  margin: 1.5rem 0;
}

.comparison-table th,
.comparison-table td {
  padding: 1rem;
  text-align: left;
  border: 1px solid var(--light);
}

.comparison-table th {
  background: var(--secondary);
  color: white;
  font-weight: bold;
}

.comparison-table ul {
  margin: 0;
  padding-left: 1.5rem;
}

.comparison-table ul li {
  margin: 0.25rem 0;
}

.insight-box {
  background: #e3f2fd;
  border-left: 4px solid #2196f3;
  padding: 1.5rem;
  margin-top: 1.5rem;
  border-radius: 4px;
}

.insight-box h4 {
  color: #1976d2;
  margin-bottom: 0.5rem;
}

.calc-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 1rem 0;
}

.calc-item {
  background: var(--light);
  padding: 1rem;
  border-radius: 8px;
}

.calc-item strong {
  color: var(--secondary);
  display: block;
  margin-bottom: 0.5rem;
}

.highlight {
  background: yellow;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-weight: bold;
}

/* Tips de Interpretación */
.tips-section {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: var(--shadow);
}

.intro-tip {
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  color: white;
  padding: 2rem;
  border-radius: 10px;
  margin-bottom: 2rem;
  text-align: center;
}

.intro-tip h3 {
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.tips-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.tip-card {
  background: white;
  border: 2px solid var(--light);
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: var(--transition);
}

.tip-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  border-color: var(--primary);
}

.tip-icon {
  font-size: 3rem;
  text-align: center;
  margin-bottom: 1rem;
}

.tip-card h4 {
  color: var(--secondary);
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.tip-example {
  background: var(--light);
  padding: 1rem;
  border-radius: 6px;
  margin: 1rem 0;
}

.tip-example strong {
  color: var(--primary);
  display: block;
  margin-bottom: 0.5rem;
}

.tip-example ul {
  margin-left: 1.5rem;
  margin-top: 0.5rem;
}

.tip-action {
  background: #e8f5e9;
  border-left: 3px solid var(--accent);
  padding: 0.75rem;
  margin-top: 1rem;
  border-radius: 4px;
  font-size: 0.95rem;
}

.interpretation-checklist {
  background: #fff3cd;
  border-left: 4px solid #ffc107;
  padding: 2rem;
  border-radius: 8px;
  margin: 2rem 0;
}

.interpretation-checklist h3 {
  color: #f57c00;
  margin-bottom: 1.5rem;
}

.checklist-items {
  display: grid;
  gap: 0.75rem;
}

.checklist-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  background: white;
  border-radius: 6px;
}

.checklist-item input[type='checkbox'] {
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.checklist-item label {
  cursor: pointer;
  flex: 1;
}

.common-errors {
  margin-top: 2rem;
}

.common-errors h3 {
  color: var(--secondary);
  margin-bottom: 1.5rem;
  text-align: center;
}

.error-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.error-card {
  background: #ffebee;
  border-left: 4px solid #e74c3c;
  padding: 1.5rem;
  border-radius: 8px;
}

.error-card h4 {
  color: #c0392b;
  margin-bottom: 0.75rem;
}

/* Ejercicio Completo */
.exercise-intro {
  background: linear-gradient(135deg, var(--accent), #27ae60);
  color: white;
  padding: 2rem;
  border-radius: 10px;
  margin-bottom: 2rem;
  text-align: center;
}

.exercise-intro h3 {
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.complete-example {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: var(--shadow);
}

.example-step {
  background: var(--light);
  padding: 2rem;
  border-radius: 10px;
  margin-bottom: 2rem;
  border-left: 4px solid var(--primary);
}

.example-step h4 {
  color: var(--secondary);
  margin-bottom: 1.5rem;
  font-size: 1.3rem;
}

.calculation-detail {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  margin: 1rem 0;
}

.calc-process {
  background: var(--light);
  padding: 1rem;
  border-radius: 6px;
  margin: 0.5rem 0;
}

.interpretation-box {
  background: #e3f2fd;
  border-left: 4px solid #2196f3;
  padding: 1.5rem;
  border-radius: 6px;
  margin-top: 1.5rem;
}

.interpretation-box h5 {
  color: #1976d2;
  margin-bottom: 0.75rem;
  font-size: 1.1rem;
}

.result-highlight {
  background: linear-gradient(135deg, var(--accent), #27ae60);
  color: white;
  padding: 1rem;
  border-radius: 6px;
  margin: 1rem 0;
  text-align: center;
  font-size: 1.1rem;
}

.comparison-summary {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  margin: 1rem 0;
}

.measure-summary {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.measure-item {
  background: var(--light);
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;
}

.measure-item h5 {
  color: var(--gray);
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  text-transform: uppercase;
}

.measure-value {
  font-size: 2rem;
  font-weight: bold;
  color: var(--secondary);
}

.skew-analysis {
  background: var(--light);
  padding: 1.5rem;
  border-radius: 8px;
}

.skew-positive,
.skew-negative,
.skew-symmetric {
  padding: 1rem;
  border-radius: 6px;
  margin-top: 1rem;
}

.skew-positive {
  background: #fff3cd;
  border-left: 4px solid #ffc107;
}

.skew-negative {
  background: #ffebee;
  border-left: 4px solid #e74c3c;
}

.skew-symmetric {
  background: #e8f5e9;
  border-left: 4px solid var(--accent);
}

.outliers-analysis {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
}

.alert-box {
  background: #fff3cd;
  border: 2px solid #ffc107;
  padding: 1rem;
  border-radius: 6px;
  margin-top: 1rem;
}

.recommendation-box {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
}

.recommendation {
  background: #e8f5e9;
  border-left: 4px solid var(--accent);
  padding: 1.5rem;
  border-radius: 6px;
}

.recommendation h5 {
  color: #2e7d32;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.conclusion {
  background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
  border: 3px solid var(--primary);
}

.conclusion-box {
  background: white;
  padding: 2rem;
  border-radius: 8px;
}

.conclusion-box h5 {
  color: var(--secondary);
  margin-bottom: 1.5rem;
  font-size: 1.3rem;
  text-align: center;
}

.conclusion-points {
  display: grid;
  gap: 1.5rem;
}

.conclusion-point {
  background: var(--light);
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid var(--primary);
}

.conclusion-point strong {
  color: var(--secondary);
  display: block;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}

.conclusion-point ul {
  margin-left: 1.5rem;
  margin-top: 0.5rem;
}

.final-takeaway {
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  color: white;
  padding: 2rem;
  border-radius: 10px;
  margin-top: 2rem;
  text-align: center;
}

.final-takeaway h5 {
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.final-takeaway p {
  font-size: 1.05rem;
  line-height: 1.8;
}

.final-takeaway p {
  font-size: 1.05rem;
  line-height: 1.8;
}

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

@media (max-width: 768px) {
  .input-group {
    flex-direction: column;
  }

  .tabs {
    overflow-x: auto;
  }

  .tips-grid,
  .error-cards {
    grid-template-columns: 1fr;
  }

  .measure-summary {
    grid-template-columns: 1fr;
  }
}
</style>
