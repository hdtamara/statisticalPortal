<template>
  <div class="container">
    <div class="hero">
      <h1>Medidas de posición: cuantiles, percentiles y deciles</h1>
      <p>
        Aprende a calcular y entender cuantiles (cuartiles), percentiles y deciles. Incluye ejemplos
        y una calculadora interactiva para tus datos.
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
        <h2>Cuartiles, Deciles y Percentiles</h2>
        <p>
          Los cuartiles, deciles y percentiles son medidas de posición que dividen un conjunto de
          datos ordenados en partes iguales. Estas medidas son especialmente útiles para comprender
          la distribución de los datos y ubicar valores específicos dentro de un conjunto.
        </p>

        <h3>Conceptos Fundamentales</h3>
        <div class="cards-container">
          <div class="info-card">
            <h4>📊 Cuartiles</h4>
            <p>
              Dividen el conjunto de datos en <strong>cuatro partes iguales</strong>. El 25% de las
              observaciones son menores que el primer cuartil (Q1), el 50% son menores que el
              segundo cuartil (Q2 o mediana), y el 75% son menores que el tercer cuartil (Q3).
            </p>
          </div>

          <div class="info-card">
            <h4>📈 Deciles</h4>
            <p>
              Dividen el conjunto de datos en <strong>diez partes iguales</strong>. Cada decil
              representa el 10%, 20%, 30%, etc., de los datos ordenados.
            </p>
          </div>

          <div class="info-card">
            <h4>📉 Percentiles</h4>
            <p>
              Dividen el conjunto de datos en <strong>cien partes iguales</strong>. Un percentil P
              indica que el P% de las observaciones son menores o iguales a ese valor.
            </p>
          </div>
        </div>

        <div class="importance-box">
          <h3>💡 Importancia de las Medidas de Posición</h3>
          <p>Las medidas de posición permiten:</p>
          <ul>
            <li>Identificar la posición relativa de un valor dentro de un conjunto de datos</li>
            <li>Comparar diferentes conjuntos de datos</li>
            <li>Detectar valores atípicos o extremos</li>
            <li>Analizar la dispersión y distribución de los datos</li>
          </ul>
        </div>
      </div>

      <!-- Call to Action para Ejercicio Completo -->
      <div class="exercise-cta">
        <div class="cta-content">
          <div class="cta-icon">🎓</div>
          <div class="cta-text">
            <h3>¿Quieres ver todo esto en acción?</h3>
            <p>Realiza un ejercicio completo que integra medidas de posición con datos reales</p>
          </div>
          <router-link to="/descriptiva/ejercicio-completo" class="cta-button">
            Ver Ejercicio Completo
          </router-link>
        </div>
      </div>

      <!-- Navegación entre pestañas -->
      <div class="tab-navigation">
        <router-link to="/descriptiva" class="nav-btn nav-btn-prev">
          ← Volver a Estadística Descriptiva
        </router-link>
        <button @click="activeTab = 'formula'" class="nav-btn nav-btn-next">
          Siguiente: Fórmula de Localización →
        </button>
      </div>
    </div>

    <!-- Fórmula de Localización -->
    <div v-if="activeTab === 'formula'" class="content-section">
      <h2>Fórmula de Localización de un Percentil</h2>

      <div class="theory-box">
        <h3>Definición</h3>
        <p>
          Para formalizar el proceso de cálculo, suponga que
          <strong>L<sub>p</sub></strong> representa la ubicación de cierto percentil que se busca.
          De esta manera:
        </p>
        <ul>
          <li>
            Si quiere encontrar el <strong>trigésimo tercer percentil</strong>, utilizaría L<sub
              >33</sub
            >
          </li>
          <li>Si buscara la <strong>mediana</strong> (percentil 50), entonces L<sub>50</sub></li>
        </ul>

        <h3>Fórmula de Localización</h3>
        <div class="formula-box">
          <div class="formula-main">L<sub>p</sub> = (n + 1) × P/100</div>
          <div class="formula-description">
            <p><strong>Donde:</strong></p>
            <ul>
              <li>
                <strong>L<sub>p</sub></strong> = Ubicación del percentil P
              </li>
              <li><strong>n</strong> = Número de observaciones</li>
              <li><strong>P</strong> = Percentil que se busca (1 a 99)</li>
            </ul>
          </div>
        </div>

        <div class="note-box">
          <h4>📝 Nota Importante</h4>
          <p>
            La posición del valor central (mediana) se encuentra en <strong>(n + 1)/2</strong>, o
            podría escribir esta expresión como <strong>(n + 1)(P/100)</strong>, donde P representa
            el percentil que busca.
          </p>
        </div>
      </div>

      <div class="interpretation-box">
        <h3>Interpretación de Resultados</h3>
        <div class="interpretation-cases">
          <div class="case">
            <h4>Caso 1: Resultado Entero</h4>
            <p>
              Si la fórmula arroja un <strong>número entero</strong>, el percentil es el valor que
              ocupa exactamente esa posición en la serie ordenada.
            </p>
            <p class="example-text">
              <strong>Ejemplo:</strong> Si L<sub>25</sub> = 4, el primer cuartil es el cuarto valor
              en la serie ordenada.
            </p>
          </div>

          <div class="case">
            <h4>Caso 2: Resultado Decimal</h4>
            <p>
              Si la fórmula arroja un <strong>número decimal</strong>, debe interpolarse entre dos
              valores consecutivos.
            </p>
            <p class="example-text">
              <strong>Ejemplo:</strong> Si L<sub>25</sub> = 5.25, localice el quinto valor y
              desplácese 0.25 de la distancia entre el quinto y sexto valores.
            </p>
          </div>
        </div>
      </div>

      <!-- Navegación entre pestañas -->
      <div class="tab-navigation">
        <button @click="activeTab = 'introduccion'" class="nav-btn nav-btn-prev">
          ← Anterior: Introducción
        </button>
        <button @click="activeTab = 'ejemplo1'" class="nav-btn nav-btn-next">
          Siguiente: Ejemplo 1 →
        </button>
      </div>
    </div>

    <!-- Ejemplo 1: Comisiones de Corredores -->
    <div v-if="activeTab === 'ejemplo1'" class="content-section">
      <h2>Ejemplo 1: Comisiones de Corredores de Bolsa</h2>

      <div class="problem-statement">
        <h3>📋 Planteamiento del Problema</h3>
        <p>
          En seguida aparecen las comisiones que ganó el último mes una muestra de
          <strong>15 corredores de bolsa</strong> de la oficina de Salomon Smith Barney's Oakland,
          California:
        </p>
        <div class="data-display">
          {{ ejemplo1.datosOriginales.join(', ') }}
        </div>
      </div>

      <div class="solution-section">
        <h3>📊 Solución Paso a Paso</h3>

        <div class="step">
          <h4>Paso 1: Ordenar los datos de menor a mayor</h4>
          <div class="data-display ordered">
            {{ ejemplo1.datosOrdenados.join(', ') }}
          </div>
        </div>

        <div class="step">
          <h4>Paso 2: Calcular la Mediana (L<sub>50</sub>)</h4>
          <p>
            El valor mediano es la observación que se encuentra en el centro. El valor central, o
            L<sub>50</sub>, se localiza en:
          </p>
          <div class="calculation">
            <div class="calc-line">L<sub>50</sub> = (n + 1) × (50/100)</div>
            <div class="calc-line">L<sub>50</sub> = (15 + 1) × (50/100)</div>
            <div class="calc-line">L<sub>50</sub> = 16 × 0.5</div>
            <div class="calc-line result">L<sub>50</sub> = 8</div>
          </div>
          <p class="interpretation">
            La octava comisión más grande es de
            <strong>${{ ejemplo1.mediana.toLocaleString() }}</strong
            >. Ésta es la mediana: la mitad de los corredores obtiene comisiones mayores que ${{
              ejemplo1.mediana.toLocaleString()
            }}, y la mitad gana menos.
          </p>
        </div>

        <div class="step">
          <h4>Paso 3: Calcular el Primer Cuartil (L<sub>25</sub>)</h4>
          <p>
            Los cuartiles dividen el conjunto de observaciones en cuatro partes iguales. Por
            consiguiente, 25% de las observaciones serán menores que el primer cuartil.
          </p>
          <div class="calculation">
            <div class="calc-line">L<sub>25</sub> = (n + 1) × (P/100)</div>
            <div class="calc-line">L<sub>25</sub> = (15 + 1) × (25/100)</div>
            <div class="calc-line">L<sub>25</sub> = 16 × 0.25</div>
            <div class="calc-line result">L<sub>25</sub> = 4</div>
          </div>
          <p class="interpretation">
            El cuarto valor en la serie ordenada es
            <strong>${{ ejemplo1.q1.toLocaleString() }}</strong
            >. Este es el primer cuartil.
          </p>
        </div>

        <div class="step">
          <h4>Paso 4: Calcular el Tercer Cuartil (L<sub>75</sub>)</h4>
          <p>
            Setenta y cinco por ciento de las observaciones serán menores que el tercer cuartil.
          </p>
          <div class="calculation">
            <div class="calc-line">L<sub>75</sub> = (n + 1) × (P/100)</div>
            <div class="calc-line">L<sub>75</sub> = (15 + 1) × (75/100)</div>
            <div class="calc-line">L<sub>75</sub> = 16 × 0.75</div>
            <div class="calc-line result">L<sub>75</sub> = 12</div>
          </div>
          <p class="interpretation">
            El decimosegundo valor en la serie ordenada es
            <strong>${{ ejemplo1.q3.toLocaleString() }}</strong
            >. Este es el tercer cuartil.
          </p>
        </div>

        <div class="result-box">
          <h4>📈 Resumen de Resultados</h4>
          <div class="results-grid">
            <div class="result-item">
              <span class="label">Q1 (Primer Cuartil):</span>
              <span class="value">${{ ejemplo1.q1.toLocaleString() }}</span>
            </div>
            <div class="result-item">
              <span class="label">Q2 (Mediana):</span>
              <span class="value">${{ ejemplo1.mediana.toLocaleString() }}</span>
            </div>
            <div class="result-item">
              <span class="label">Q3 (Tercer Cuartil):</span>
              <span class="value">${{ ejemplo1.q3.toLocaleString() }}</span>
            </div>
          </div>
          <p class="conclusion">
            Por lo tanto, los valores del primer y tercer cuartiles se localizan en las posiciones 4
            y 12 respectivamente. Esto significa que el 25% de los corredores gana menos de ${{
              ejemplo1.q1.toLocaleString()
            }}, y el 75% gana menos de ${{ ejemplo1.q3.toLocaleString() }}.
          </p>
        </div>
      </div>

      <!-- Navegación entre pestañas -->
      <div class="tab-navigation">
        <button @click="activeTab = 'formula'" class="nav-btn nav-btn-prev">
          ← Anterior: Fórmula
        </button>
        <button @click="activeTab = 'ejemplo2'" class="nav-btn nav-btn-next">
          Siguiente: Ejemplo 2 →
        </button>
      </div>
    </div>

    <!-- Ejemplo 2: Interpolación -->
    <div v-if="activeTab === 'ejemplo2'" class="content-section">
      <h2>Ejemplo 2: Interpolación entre Valores</h2>

      <div class="problem-statement">
        <h3>📋 Planteamiento del Problema</h3>
        <p>
          Suponga que un conjunto de datos contiene los siguientes seis valores y que desea
          localizar el primer cuartil:
        </p>
        <div class="data-display">
          {{ ejemplo2.datosOriginales.join(', ') }}
        </div>
      </div>

      <div class="solution-section">
        <h3>📊 Solución Paso a Paso</h3>

        <div class="step">
          <h4>Paso 1: Ordenar los valores de menor a mayor</h4>
          <div class="data-display ordered">
            {{ ejemplo2.datosOrdenados.join(', ') }}
          </div>
        </div>

        <div class="step">
          <h4>Paso 2: Aplicar la fórmula de localización</h4>
          <p>Para localizar el primer cuartil (P = 25):</p>
          <div class="calculation">
            <div class="calc-line">L<sub>25</sub> = (n + 1) × (P/100)</div>
            <div class="calc-line">L<sub>25</sub> = (6 + 1) × (25/100)</div>
            <div class="calc-line">L<sub>25</sub> = 7 × 0.25</div>
            <div class="calc-line result">L<sub>25</sub> = {{ ejemplo2.posicionL25 }}</div>
          </div>
          <div class="alert-box">
            <strong>⚠️ Importante:</strong> La fórmula de localización indica que el primer cuartil
            se ubica entre el primero y segundo valores, lo que representa
            <strong>0.75 de la distancia</strong> entre ellos.
          </div>
        </div>

        <div class="step">
          <h4>Paso 3: Interpolar entre valores</h4>
          <p>Como la posición es 1.75, debemos:</p>
          <ol>
            <li>
              Identificar el primer valor: <strong>{{ ejemplo2.valor1 }}</strong>
            </li>
            <li>
              Identificar el segundo valor: <strong>{{ ejemplo2.valor2 }}</strong>
            </li>
            <li>Calcular la distancia entre ambos valores</li>
            <li>Desplazarnos 0.75 de esa distancia desde el primer valor</li>
          </ol>

          <div class="calculation">
            <div class="calc-line">Distancia = Valor<sub>2</sub> - Valor<sub>1</sub></div>
            <div class="calc-line">Distancia = {{ ejemplo2.valor2 }} - {{ ejemplo2.valor1 }}</div>
            <div class="calc-line result">Distancia = {{ ejemplo2.distancia }}</div>
          </div>
        </div>

        <div class="step">
          <h4>Paso 4: Calcular el desplazamiento</h4>
          <p>
            Al localizar el primer cuartil, necesitamos desplazarnos una distancia de 0.75 entre el
            primero y segundo valores:
          </p>
          <div class="calculation">
            <div class="calc-line">Desplazamiento = 0.75 × Distancia</div>
            <div class="calc-line">Desplazamiento = 0.75 × {{ ejemplo2.distancia }}</div>
            <div class="calc-line result">Desplazamiento = {{ ejemplo2.desplazamiento }}</div>
          </div>
        </div>

        <div class="step">
          <h4>Paso 5: Calcular el primer cuartil</h4>
          <p>Para completar el procedimiento, sume el desplazamiento al primer valor:</p>
          <div class="calculation">
            <div class="calc-line">Q<sub>1</sub> = Valor<sub>1</sub> + Desplazamiento</div>
            <div class="calc-line">
              Q<sub>1</sub> = {{ ejemplo2.valor1 }} + {{ ejemplo2.desplazamiento }}
            </div>
            <div class="calc-line result">Q<sub>1</sub> = {{ ejemplo2.q1 }}</div>
          </div>
        </div>

        <div class="result-box">
          <h4>📈 Resultado Final</h4>
          <p class="conclusion">
            El primer cuartil es <strong>{{ ejemplo2.q1 }}</strong
            >. Esto significa que el 25% de los valores en el conjunto de datos son menores o
            iguales a {{ ejemplo2.q1 }}.
          </p>
          <div class="interpretation-note">
            <strong>💡 Nota:</strong> Como en el caso de la mediana, el cuartil
            <strong>no necesita ser uno de los valores exactos</strong> del conjunto de datos. La
            interpolación nos permite obtener un valor más preciso.
          </div>
        </div>
      </div>

      <div class="theory-extension">
        <h3>📚 Extensión a Deciles y Percentiles</h3>
        <p>
          Es posible ampliar esta idea para incluir tanto deciles como percentiles. El procedimiento
          es exactamente el mismo:
        </p>

        <div class="example-box">
          <h4>Ejemplo: Percentil 23 con 80 observaciones</h4>
          <p>Para localizar el 23º percentil en una muestra de 80 observaciones:</p>
          <div class="calculation">
            <div class="calc-line">L<sub>23</sub> = (n + 1) × (P/100)</div>
            <div class="calc-line">L<sub>23</sub> = (80 + 1) × (23/100)</div>
            <div class="calc-line">L<sub>23</sub> = 81 × 0.23</div>
            <div class="calc-line result">L<sub>23</sub> = 18.63</div>
          </div>
          <p class="interpretation">
            Para determinar el valor correspondiente al 23º percentil, localice el
            <strong>18º valor</strong> y el <strong>19º valor</strong>, y determine la distancia
            entre ambos. Luego, multiplique esta diferencia por <strong>0.63</strong> y sume el
            resultado al valor más pequeño. El resultado sería el 23º percentil.
          </p>
        </div>

        <div class="example-box">
          <h4>Caso: n = 20, buscando Q<sub>1</sub></h4>
          <p>Si hubiera 20 observaciones en la muestra y quisiera localizar el primer cuartil:</p>
          <div class="calculation">
            <div class="calc-line">L<sub>25</sub> = (n + 1) × (P/100)</div>
            <div class="calc-line">L<sub>25</sub> = (20 + 1) × (25/100)</div>
            <div class="calc-line">L<sub>25</sub> = 21 × 0.25</div>
            <div class="calc-line result">L<sub>25</sub> = {{ ejemplo3.posicionL25 }}</div>
          </div>
          <p class="interpretation">
            Localizaría el <strong>quinto valor</strong> en la serie ordenada y en seguida se
            desplazaría una distancia de <strong>0.25</strong>
            entre los valores quinto y sexto, señalando a éste como el primer cuartil.
          </p>
        </div>
      </div>

      <!-- Navegación entre pestañas -->
      <div class="tab-navigation">
        <button @click="activeTab = 'ejemplo1'" class="nav-btn nav-btn-prev">
          ← Anterior: Ejemplo 1
        </button>
        <button @click="activeTab = 'diagrama-cajas'" class="nav-btn nav-btn-next">
          Siguiente: Diagrama de Cajas →
        </button>
      </div>
    </div>

    <!-- Diagrama de Cajas (Box Plot) -->
    <div v-if="activeTab === 'diagrama-cajas'" class="content-section">
      <h2>Diagrama de Cajas y Bigotes (Box Plot)</h2>

      <div class="intro-content">
        <p>
          El <strong>diagrama de cajas y bigotes</strong> (box plot o box-and-whisker plot) es una
          representación gráfica que muestra la distribución de un conjunto de datos a través de sus
          cuartiles. Es una herramienta visual extremadamente útil para identificar la dispersión,
          simetría y valores atípicos.
        </p>
      </div>

      <div class="theory-box">
        <h3>Componentes del Diagrama de Cajas</h3>
        <p>Un diagrama de cajas típico incluye los siguientes elementos:</p>

        <div class="boxplot-components">
          <div class="component-card">
            <h4>📊 La Caja (Box)</h4>
            <ul>
              <li><strong>Límite inferior:</strong> Primer cuartil (Q1 o percentil 25)</li>
              <li><strong>Línea central:</strong> Mediana (Q2 o percentil 50)</li>
              <li><strong>Límite superior:</strong> Tercer cuartil (Q3 o percentil 75)</li>
            </ul>
            <p class="note">
              La altura de la caja representa el <strong>Rango Intercuartílico (IQR)</strong>: IQR =
              Q3 - Q1
            </p>
          </div>

          <div class="component-card">
            <h4>📏 Los Bigotes (Whiskers)</h4>
            <ul>
              <li>
                <strong>Bigote inferior:</strong> Se extiende desde Q1 hasta el valor mínimo (dentro
                de 1.5 × IQR)
              </li>
              <li>
                <strong>Bigote superior:</strong> Se extiende desde Q3 hasta el valor máximo (dentro
                de 1.5 × IQR)
              </li>
            </ul>
          </div>

          <div class="component-card">
            <h4>🔴 Valores Atípicos (Outliers)</h4>
            <p>Son valores que están fuera del rango:</p>
            <ul>
              <li><strong>Outliers inferiores:</strong> Valores &lt; Q1 - 1.5 × IQR</li>
              <li><strong>Outliers superiores:</strong> Valores &gt; Q3 + 1.5 × IQR</li>
            </ul>
            <p class="note">Se representan como puntos individuales fuera de los bigotes</p>
          </div>
        </div>
      </div>

      <div class="example-section">
        <h3>Ejemplo Visual: Comisiones de Corredores</h3>
        <p>Usando los datos del Ejemplo 1:</p>

        <div class="data-summary">
          <div class="stat-item">
            <span class="label">Mínimo:</span>
            <span class="value">${{ ejemplo1.datosOrdenados[0].toLocaleString() }}</span>
          </div>
          <div class="stat-item">
            <span class="label">Q1:</span>
            <span class="value">${{ ejemplo1.q1.toLocaleString() }}</span>
          </div>
          <div class="stat-item">
            <span class="label">Mediana (Q2):</span>
            <span class="value">${{ ejemplo1.mediana.toLocaleString() }}</span>
          </div>
          <div class="stat-item">
            <span class="label">Q3:</span>
            <span class="value">${{ ejemplo1.q3.toLocaleString() }}</span>
          </div>
          <div class="stat-item">
            <span class="label">Máximo:</span>
            <span class="value"
              >${{ ejemplo1.datosOrdenados[ejemplo1.n - 1].toLocaleString() }}</span
            >
          </div>
        </div>

        <div class="boxplot-visual">
          <h4>Diagrama de Cajas</h4>
          <div class="chart-container">
            <div ref="boxplotDiv" class="plotly-chart"></div>
          </div>
        </div>

        <div class="calculation">
          <h4>Cálculos del Diagrama</h4>
          <div class="calc-line">
            <strong>Rango Intercuartílico (IQR):</strong> Q3 - Q1 = ${{
              ejemplo1.q3.toLocaleString()
            }}
            - ${{ ejemplo1.q1.toLocaleString() }} = ${{
              (ejemplo1.q3 - ejemplo1.q1).toLocaleString()
            }}
          </div>
          <div class="calc-line">
            <strong>Límite inferior para outliers:</strong> Q1 - 1.5 × IQR = ${{
              ejemplo1.q1.toLocaleString()
            }}
            - 1.5 × ${{ (ejemplo1.q3 - ejemplo1.q1).toLocaleString() }} = ${{
              (ejemplo1.q1 - 1.5 * (ejemplo1.q3 - ejemplo1.q1)).toLocaleString()
            }}
          </div>
          <div class="calc-line">
            <strong>Límite superior para outliers:</strong> Q3 + 1.5 × IQR = ${{
              ejemplo1.q3.toLocaleString()
            }}
            + 1.5 × ${{ (ejemplo1.q3 - ejemplo1.q1).toLocaleString() }} = ${{
              (ejemplo1.q3 + 1.5 * (ejemplo1.q3 - ejemplo1.q1)).toLocaleString()
            }}
          </div>
        </div>
      </div>

      <div class="interpretation-box">
        <h3>💡 Interpretación del Diagrama de Cajas</h3>

        <div class="interpretation-grid">
          <div class="interpretation-item">
            <h4>Simetría</h4>
            <ul>
              <li>
                <strong>Simétrico:</strong> La mediana está centrada en la caja y los bigotes son de
                longitud similar
              </li>
              <li>
                <strong>Sesgado a la derecha:</strong> La mediana está más cerca de Q1 y el bigote
                derecho es más largo
              </li>
              <li>
                <strong>Sesgado a la izquierda:</strong> La mediana está más cerca de Q3 y el bigote
                izquierdo es más largo
              </li>
            </ul>
          </div>

          <div class="interpretation-item">
            <h4>Dispersión</h4>
            <ul>
              <li>
                Una <strong>caja más ancha</strong> indica mayor variabilidad en el 50% central de
                los datos
              </li>
              <li><strong>Bigotes largos</strong> sugieren datos más dispersos en los extremos</li>
              <li>
                Una <strong>caja estrecha</strong> indica que los datos están concentrados alrededor
                de la mediana
              </li>
            </ul>
          </div>

          <div class="interpretation-item">
            <h4>Valores Atípicos</h4>
            <ul>
              <li>Los <strong>puntos fuera de los bigotes</strong> son valores inusuales</li>
              <li>Pueden indicar errores de medición o valores legítimos pero extremos</li>
              <li>Requieren investigación adicional para determinar su origen</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="advantages-box">
        <h3>✅ Ventajas del Diagrama de Cajas</h3>
        <div class="advantages-grid">
          <div class="advantage-item">
            <span class="icon">📊</span>
            <h4>Visualización Clara</h4>
            <p>
              Muestra de forma compacta cinco estadísticas importantes: mínimo, Q1, mediana, Q3 y
              máximo
            </p>
          </div>
          <div class="advantage-item">
            <span class="icon">🔍</span>
            <h4>Detección de Outliers</h4>
            <p>Identifica fácilmente valores atípicos que requieren atención especial</p>
          </div>
          <div class="advantage-item">
            <span class="icon">📈</span>
            <h4>Comparación de Grupos</h4>
            <p>Permite comparar múltiples distribuciones lado a lado de manera efectiva</p>
          </div>
          <div class="advantage-item">
            <span class="icon">⚖️</span>
            <h4>Evaluación de Simetría</h4>
            <p>Facilita determinar si los datos están sesgados o son simétricos</p>
          </div>
        </div>
      </div>

      <!-- Navegación entre pestañas -->
      <div class="tab-navigation">
        <button @click="activeTab = 'ejemplo2'" class="nav-btn nav-btn-prev">
          ← Anterior: Ejemplo 2
        </button>
        <button @click="activeTab = 'calculadora'" class="nav-btn nav-btn-next">
          Siguiente: Calculadora →
        </button>
      </div>
    </div>

    <!-- Calculadora -->
    <div v-if="activeTab === 'ejemplo'" class="content-section">
      <h2>Ejemplo Práctico</h2>
      <div class="example-section">
        <p>Datos (salarios mensuales en USD): 1200, 1500, 1700, 2000, 2100, 2300, 2600</p>
        <ol>
          <li>Ordenados: ya están ordenados arriba.</li>
          <li>n = 7</li>
          <li>Para el cuartil Q1 (k = 25): pos = 0.25*(7+1) = 2 → Q1 = x(2) = 1500</li>
          <li>Para la mediana Q2 (k = 50): pos = 0.5*(8) = 4 → Q2 = x(4) = 2000</li>
        </ol>
      </div>

      <div class="summary card">
        <h3>Cuartiles y Mediana</h3>
        <p>
          Q1: <strong>{{ q1 }}</strong> — Q2 (mediana): <strong>{{ q2 }}</strong> — Q3:
          <strong>{{ q3 }}</strong>
        </p>
      </div>

      <!-- Navegación entre pestañas -->
      <div class="tab-navigation">
        <button @click="activeTab = 'teoria'" class="nav-btn nav-btn-prev">
          ← Anterior: Teoría
        </button>
        <button @click="activeTab = 'calculadora'" class="nav-btn nav-btn-next">
          Siguiente: Calculadora →
        </button>
      </div>
    </div>

    <!-- Calculadora -->
    <div v-if="activeTab === 'calculadora'" class="content-section">
      <h2>Calculadora de Cuartiles, Deciles y Percentiles</h2>

      <div class="calculator-intro">
        <p>
          Con un paquete de software de estadística, resulta relativamente sencillo ordenar los
          datos de menor a mayor y localizar percentiles y deciles. Utiliza esta calculadora
          interactiva para:
        </p>
        <ul>
          <li>Calcular cualquier percentil (P1 a P99)</li>
          <li>Determinar deciles (D1 a D9)</li>
          <li>Encontrar cuartiles (Q1, Q2, Q3)</li>
        </ul>
      </div>

      <div class="calculator-section">
        <h3>Ingresa tus datos</h3>
        <p>Introduce los valores numéricos separados por comas o espacios:</p>

        <textarea
          v-model="input"
          placeholder="Ejemplo: 2038, 1758, 1721, 1637, 2097, 2047, 2205, 1787, 2287"
          rows="3"
          class="data-area"
        ></textarea>

        <div class="controls">
          <div class="control-group">
            <label>Selecciona el tipo de medida:</label>
            <select v-model="tipo" class="select">
              <option value="percentil">Percentil</option>
              <option value="decil">Decil</option>
              <option value="cuartil">Cuartil</option>
            </select>
          </div>

          <div class="control-group">
            <label v-if="tipo === 'percentil'">Percentil (1-99):</label>
            <label v-else-if="tipo === 'decil'">Decil (1-9):</label>
            <label v-else>Cuartil (1-3):</label>
            <input v-model.number="k" type="number" class="input-small" :min="minK" :max="maxK" />
          </div>

          <button class="btn btn-primary" @click="calcular">Calcular</button>
        </div>

        <div v-if="resultado" class="result">
          <h3>📊 Resultados del Cálculo</h3>

          <div class="result-item">
            <span class="label">Valor calculado:</span>
            <span class="value">{{ resultado.valor.toFixed(2) }}</span>
          </div>

          <div class="result-item">
            <span class="label">Posición (L<sub>p</sub>):</span>
            <span class="value">{{ resultado.pos.toFixed(3) }}</span>
          </div>

          <div v-if="resultado.interpolacion" class="interpolation-details">
            <h4>Detalles de la Interpolación</h4>
            <p>
              Como la posición es un valor decimal, se realizó una interpolación entre dos valores
              consecutivos:
            </p>
            <ul>
              <li>
                Valor en posición {{ resultado.i }}: <strong>{{ resultado.xi }}</strong>
              </li>
              <li>
                Valor en posición {{ resultado.j }}: <strong>{{ resultado.xj }}</strong>
              </li>
              <li>
                Fracción de desplazamiento:
                <strong>{{ (resultado.pos - (resultado.i || 0)).toFixed(3) }}</strong>
              </li>
            </ul>
            <p class="formula-text">
              Resultado = {{ resultado.xi }} +
              {{ (resultado.pos - (resultado.i || 0)).toFixed(3) }} × ({{ resultado.xj }} -
              {{ resultado.xi }}) = {{ resultado.valor.toFixed(2) }}
            </p>
          </div>
          <div v-else class="no-interpolation">
            <p>
              ✓ La posición es un número entero, por lo que el valor se toma directamente de la
              posición {{ Math.floor(resultado.pos) }} en la serie ordenada.
            </p>
          </div>

          <div class="interpretation">
            <h4>💡 Interpretación</h4>
            <p v-if="tipo === 'percentil'">
              El {{ k }}% de los datos son menores o iguales a
              <strong>{{ resultado.valor.toFixed(2) }}</strong
              >.
            </p>
            <p v-else-if="tipo === 'decil'">
              El decil {{ k }} indica que el {{ k * 10 }}% de los datos son menores o iguales a
              <strong>{{ resultado.valor.toFixed(2) }}</strong
              >.
            </p>
            <p v-else>
              El cuartil {{ k }} (Q{{ k }}) indica que el {{ k * 25 }}% de los datos son menores o
              iguales a <strong>{{ resultado.valor.toFixed(2) }}</strong
              >.
            </p>
          </div>
        </div>
      </div>

      <!-- Navegación entre pestañas -->
      <div class="tab-navigation">
        <button @click="activeTab = 'ejemplo2'" class="nav-btn nav-btn-prev">
          ← Anterior: Ejemplo 2
        </button>
        <router-link to="/descriptiva" class="nav-btn nav-btn-next">
          Volver a Estadística Descriptiva
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch, nextTick } from 'vue'

const input = ref('')
const tipo = ref<'percentil' | 'decil' | 'cuartil'>('percentil')
const k = ref<number>(50)

const activeTab = ref('introduccion')

const tabs = [
  { id: 'introduccion', label: 'Introducción' },
  { id: 'formula', label: 'Fórmula' },
  { id: 'ejemplo1', label: 'Ejemplo 1' },
  { id: 'ejemplo2', label: 'Ejemplo 2' },
  { id: 'diagrama-cajas', label: 'Diagrama de Cajas' },
  { id: 'calculadora', label: 'Calculadora' },
]

// Ejemplo 1: Comisiones de corredores
const ejemplo1 = {
  datosOriginales: [
    2038, 1758, 1721, 1637, 2097, 2047, 2205, 1787, 2287, 1940, 2311, 2054, 2406, 1471, 1460,
  ],
  datosOrdenados: [
    1460, 1471, 1637, 1721, 1758, 1787, 1940, 2038, 2047, 2054, 2097, 2205, 2287, 2311, 2406,
  ],
  n: 15,
  mediana: 2038,
  q1: 1721,
  q3: 2205,
}

// Ejemplo 2: Valores con interpolación
const ejemplo2Datos = [91, 75, 61, 101, 43, 104]
const ejemplo2Ordenados = [...ejemplo2Datos].sort((a, b) => a - b)
const ejemplo2 = {
  datosOriginales: ejemplo2Datos,
  datosOrdenados: ejemplo2Ordenados,
  n: 6,
  posicionL25: 1.75,
  valor1: ejemplo2Ordenados[0],
  valor2: ejemplo2Ordenados[1],
  distancia: ejemplo2Ordenados[1] - ejemplo2Ordenados[0],
  desplazamiento: 0.75 * (ejemplo2Ordenados[1] - ejemplo2Ordenados[0]),
  q1: ejemplo2Ordenados[0] + 0.75 * (ejemplo2Ordenados[1] - ejemplo2Ordenados[0]),
}

// Ejemplo 3: n = 20
const ejemplo3 = {
  n: 20,
  posicionL25: 5.25,
}

const minK = computed(() => (tipo.value === 'percentil' ? 1 : 1))
const maxK = computed(() => (tipo.value === 'percentil' ? 99 : tipo.value === 'decil' ? 9 : 3))

interface Resultado {
  valor: number
  pos: number
  i?: number
  j?: number
  xi?: number
  xj?: number
  interpolacion?: boolean
}

const resultado = ref<Resultado | null>(null)

const parseData = (text: string): number[] => {
  if (!text) return []
  // split by comma or whitespace
  const tokens = text.split(/[ ,;\n\t]+/).filter(Boolean)
  const nums = tokens.map((t) => Number(t)).filter((n) => !Number.isNaN(n))
  return nums.sort((a, b) => a - b)
}

const quantileValue = (data: number[], kPercent: number): Resultado | null => {
  const n = data.length
  if (n === 0) return null
  const pos = (kPercent / 100) * (n + 1)
  if (pos <= 1) return { valor: data[0], pos }
  if (pos >= n) return { valor: data[n - 1], pos }

  const i = Math.floor(pos) // position lower
  const j = i + 1
  const xi = data[i - 1]
  const xj = data[j - 1]
  const frac = pos - i
  if (frac === 0) {
    return { valor: data[i - 1], pos, i, j, xi, xj, interpolacion: false }
  }
  const valor = xi + frac * (xj - xi)
  return { valor, pos, i, j, xi, xj, interpolacion: true }
}

const calcular = () => {
  const data = parseData(input.value)
  if (data.length === 0) {
    alert('Introduce una lista de números válida')
    return
  }

  let kPercent = 50
  if (tipo.value === 'percentil') {
    if (k.value < 1 || k.value > 99) {
      alert('k debe estar entre 1 y 99')
      return
    }
    kPercent = k.value
  } else if (tipo.value === 'decil') {
    if (k.value < 1 || k.value > 9) {
      alert('Decil debe estar entre 1 y 9')
      return
    }
    kPercent = k.value * 10
  } else {
    if (k.value < 1 || k.value > 3) {
      alert('Cuartil debe estar entre 1 y 3')
      return
    }
    kPercent = k.value * 25
  }

  const res = quantileValue(data, kPercent)
  if (res) resultado.value = res
}

// cálculos rápidos de Q1,Q2,Q3
const datosEjemplo = ref([1200, 1500, 1700, 2000, 2100, 2300, 2600])

const q1 = computed(() => {
  const r = quantileValue(datosEjemplo.value, 25)
  return r ? r.valor : '-'
})

const q2 = computed(() => {
  const r = quantileValue(datosEjemplo.value, 50)
  return r ? r.valor : '-'
})

const q3 = computed(() => {
  const r = quantileValue(datosEjemplo.value, 75)
  return r ? r.valor : '-'
})

// Ref para el gráfico de Plotly
const boxplotDiv = ref<HTMLElement>()

// Función para crear el box plot con Plotly
const crearBoxPlot = async () => {
  if (!boxplotDiv.value) return

  const Plotly = await import('plotly.js-dist-min')

  const trace = {
    y: ejemplo1.datosOrdenados,
    type: 'box' as const,
    name: 'Comisiones de Corredores',
    marker: {
      color: '#667eea',
      outliercolor: 'rgba(219, 64, 82, 0.6)',
      line: {
        outliercolor: 'rgba(219, 64, 82, 1.0)',
        outlierwidth: 2,
      },
    },
    boxmean: 'sd' as const, // Muestra la media y desviación estándar
    boxpoints: 'outliers' as const, // Muestra solo los outliers como puntos
  }

  const layout = {
    title: {
      text: 'Diagrama de Cajas: Comisiones de Corredores',
      font: { size: 18, color: '#2c3e50' },
    },
    yaxis: {
      title: {
        text: 'Comisión ($)',
        font: { size: 14 },
      },
      zeroline: false,
      gridcolor: '#e0e0e0',
    },
    xaxis: {
      showticklabels: false,
    },
    plot_bgcolor: '#f8f9fa',
    paper_bgcolor: 'white',
    showlegend: false,
    height: 500,
    margin: {
      l: 60,
      r: 40,
      t: 80,
      b: 40,
    },
  }

  const config: Partial<Plotly.Config> = {
    responsive: true,
    displayModeBar: true,
    displaylogo: false,
  }

  Plotly.default.newPlot(boxplotDiv.value, [trace], layout, config)
}

// Observar cambios en el tab activo para renderizar el gráfico
watch(activeTab, async (newTab) => {
  if (newTab === 'diagrama-cajas') {
    await nextTick()
    crearBoxPlot()
  }
})

// Crear el gráfico al montar si ya está en ese tab
onMounted(() => {
  if (activeTab.value === 'diagrama-cajas') {
    nextTick(() => crearBoxPlot())
  }
})
</script>

<style scoped>
@import '@/assets/styles/main.css';

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

.content-section {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: var(--shadow);
  margin-bottom: 2rem;
}

.content-section h2 {
  color: var(--secondary);
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  border-bottom: 3px solid var(--primary);
  padding-bottom: 0.5rem;
}

.intro-content h2,
.intro-content h3 {
  color: var(--secondary);
  margin-bottom: 1.5rem;
}

.cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.info-card {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: var(--shadow);
  border-left: 4px solid var(--primary);
  transition: transform 0.3s ease;
}

.info-card:hover {
  transform: translateY(-5px);
}

.info-card h4 {
  color: var(--secondary);
  margin-bottom: 0.75rem;
  font-size: 1.2rem;
}

.importance-box {
  background: #e3f2fd;
  border-left: 4px solid #2196f3;
  padding: 1.5rem;
  margin: 2rem 0;
  border-radius: 8px;
}

.importance-box h3 {
  color: #1976d2;
  margin-bottom: 1rem;
}

.importance-box ul {
  margin-left: 1.5rem;
}

.importance-box li {
  margin: 0.5rem 0;
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
  font-size: 1.3rem;
}

.formula-box {
  background: var(--light);
  padding: 2rem;
  border-radius: 8px;
  margin: 1.5rem 0;
  text-align: center;
}

.formula-main {
  font-size: 1.8rem;
  font-weight: bold;
  color: var(--secondary);
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: white;
  border-radius: 6px;
  font-family: 'Courier New', monospace;
}

.formula-description {
  text-align: left;
  background: white;
  padding: 1.5rem;
  border-radius: 6px;
  margin-top: 1rem;
}

.formula-description ul {
  margin-left: 1.5rem;
}

.formula-description li {
  margin: 0.5rem 0;
}

.note-box {
  background: #fff3cd;
  border-left: 4px solid #ffc107;
  padding: 1.5rem;
  margin: 1.5rem 0;
  border-radius: 6px;
}

.note-box h4 {
  color: #f57c00;
  margin-bottom: 0.75rem;
}

.interpretation-box {
  background: #f5f5f5;
  padding: 2rem;
  border-radius: 10px;
  margin-top: 2rem;
}

.interpretation-box h3 {
  color: var(--secondary);
  margin-bottom: 1.5rem;
}

.interpretation-cases {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.case {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.case h4 {
  color: var(--primary);
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.example-text {
  background: var(--light);
  padding: 1rem;
  border-radius: 6px;
  margin-top: 0.75rem;
  font-style: italic;
}

.problem-statement {
  background: #e8f5e9;
  border-left: 4px solid var(--accent);
  padding: 1.5rem;
  margin-bottom: 2rem;
  border-radius: 8px;
}

.problem-statement h3 {
  color: #2e7d32;
  margin-bottom: 1rem;
}

.data-display {
  background: var(--light);
  padding: 1rem;
  border-radius: 8px;
  margin: 1rem 0;
  font-family: 'Courier New', monospace;
  font-size: 1.1rem;
  font-weight: 500;
  text-align: center;
}

.data-display.ordered {
  background: linear-gradient(135deg, #e3f2fd, #bbdefb);
  border: 2px solid #2196f3;
}

.solution-section {
  margin-top: 2rem;
}

.solution-section h3 {
  color: var(--secondary);
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
}

.step {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: var(--shadow);
  margin-bottom: 2rem;
  border-left: 4px solid var(--primary);
}

.step h4 {
  color: var(--secondary);
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.calculation {
  background: var(--light);
  padding: 1.5rem;
  border-radius: 8px;
  margin: 1rem 0;
  font-family: 'Courier New', monospace;
}

.calc-line {
  margin: 0.5rem 0;
  font-size: 1.1rem;
}

.calc-line.result {
  background: var(--accent);
  color: white;
  padding: 0.75rem 1rem;
  border-radius: 6px;
  margin-top: 1rem;
  font-weight: bold;
  font-size: 1.2rem;
}

.interpretation {
  background: #e8f5e9;
  border-left: 4px solid var(--accent);
  padding: 1.5rem;
  margin-top: 1rem;
  border-radius: 6px;
}

.result-box {
  background: linear-gradient(135deg, #e8f5e9, #c8e6c9);
  border: 3px solid var(--accent);
  padding: 2rem;
  border-radius: 10px;
  margin-top: 2rem;
}

.result-box h4 {
  color: #2e7d32;
  margin-bottom: 1.5rem;
  font-size: 1.3rem;
}

.results-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 1.5rem 0;
}

.result-item {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.result-item .label {
  font-weight: 500;
  color: var(--gray);
}

.result-item .value {
  font-size: 1.3rem;
  font-weight: bold;
  color: var(--secondary);
}

.conclusion {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  margin-top: 1rem;
  line-height: 1.6;
}

.alert-box {
  background: #fff3cd;
  border: 2px solid #ffc107;
  padding: 1.5rem;
  margin: 1.5rem 0;
  border-radius: 8px;
}

.theory-extension {
  background: #f5f5f5;
  padding: 2rem;
  border-radius: 10px;
  margin-top: 2rem;
}

.theory-extension h3 {
  color: var(--secondary);
  margin-bottom: 1.5rem;
}

.example-box {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  margin: 1.5rem 0;
  box-shadow: var(--shadow);
}

.example-box h4 {
  color: var(--primary);
  margin-bottom: 1rem;
}

.interpretation-note {
  background: #e3f2fd;
  padding: 1rem;
  border-radius: 6px;
  margin-top: 1rem;
}

.calculator-intro {
  background: #e3f2fd;
  border-left: 4px solid #2196f3;
  padding: 1.5rem;
  margin-bottom: 2rem;
  border-radius: 8px;
}

.calculator-intro ul {
  margin-left: 1.5rem;
  margin-top: 1rem;
}

.calculator-intro li {
  margin: 0.5rem 0;
}

.calculator-section {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  margin-top: 1.5rem;
}

.calculator-section h3 {
  color: var(--secondary);
  margin-bottom: 1rem;
}

.data-area {
  width: 100%;
  padding: 1rem;
  border: 2px solid var(--light);
  border-radius: 8px;
  margin: 1rem 0;
  font-family: 'Courier New', monospace;
  font-size: 1.05rem;
  resize: vertical;
}

.data-area:focus {
  outline: none;
  border-color: var(--primary);
}

.controls {
  display: flex;
  gap: 1rem;
  align-items: flex-end;
  flex-wrap: wrap;
  margin: 1.5rem 0;
}

.control-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.control-group label {
  font-weight: 500;
  color: var(--gray);
  font-size: 0.95rem;
}

.select,
.input-small {
  padding: 0.75rem;
  border: 2px solid var(--light);
  border-radius: 6px;
  font-size: 1rem;
  min-width: 150px;
}

.select:focus,
.input-small:focus {
  outline: none;
  border-color: var(--primary);
}

.btn {
  padding: 0.75rem 2rem;
  background: var(--primary);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: var(--transition);
  font-size: 1rem;
  font-weight: 500;
}

.btn:hover {
  background: var(--primary-dark);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.btn-primary {
  background: linear-gradient(135deg, var(--accent), #27ae60);
}

.btn-primary:hover {
  background: linear-gradient(135deg, #27ae60, var(--accent));
}

.result {
  background: linear-gradient(135deg, #e8f5e9, #c8e6c9);
  border-left: 4px solid var(--accent);
  padding: 2rem;
  border-radius: 10px;
  margin-top: 2rem;
}

.result h3 {
  color: #2e7d32;
  margin-bottom: 1.5rem;
}

.result h4 {
  color: #2e7d32;
  margin: 1.5rem 0 1rem 0;
}

.interpolation-details {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  margin-top: 1.5rem;
}

.interpolation-details ul {
  margin: 1rem 0;
  margin-left: 1.5rem;
}

.interpolation-details li {
  margin: 0.5rem 0;
}

.formula-text {
  background: var(--light);
  padding: 1rem;
  border-radius: 6px;
  margin-top: 1rem;
  font-family: 'Courier New', monospace;
  font-weight: 500;
}

.no-interpolation {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  margin-top: 1.5rem;
}

.exercise-cta {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  padding: 0.5rem;
  margin: 3rem 0;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
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
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(46, 204, 113, 0.5);
  background: linear-gradient(135deg, #27ae60, var(--accent));
}

.tab-navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 2px solid var(--light);
  gap: 1rem;
}

.nav-btn {
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  transition: var(--transition);
  display: inline-block;
  border: none;
  cursor: pointer;
  font-size: 1rem;
}

.nav-btn-prev {
  background: var(--light);
  color: var(--gray);
}

.nav-btn-prev:hover {
  background: var(--gray);
  color: white;
}

.nav-btn-next {
  background: var(--secondary);
  color: white;
}

.nav-btn-next:hover {
  background: var(--secondary-dark);
}

/* Estilos para Diagrama de Cajas */
.boxplot-components {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.component-card {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid var(--primary);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.component-card h4 {
  color: var(--primary);
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.component-card ul {
  list-style: none;
  padding: 0;
}

.component-card ul li {
  padding: 0.4rem 0;
  padding-left: 1.5rem;
  position: relative;
}

.component-card ul li::before {
  content: '▸';
  position: absolute;
  left: 0;
  color: var(--primary);
}

.component-card .note {
  background: #f0f7ff;
  padding: 0.8rem;
  border-radius: 6px;
  margin-top: 1rem;
  font-size: 0.9rem;
  border-left: 3px solid var(--accent);
}

.data-summary {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 1.5rem 0;
  padding: 1.5rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 100px;
}

.stat-item .label {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.3rem;
}

.stat-item .value {
  font-size: 1.3rem;
  font-weight: bold;
  color: var(--primary);
}

.boxplot-visual {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  margin: 2rem 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.boxplot-visual h4 {
  text-align: center;
  color: var(--primary);
  margin-bottom: 2rem;
}

.chart-container {
  width: 100%;
  min-height: 500px;
  margin: 1rem 0;
}

.plotly-chart {
  width: 100%;
  height: 100%;
}

.interpretation-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.interpretation-item {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.interpretation-item h4 {
  color: var(--primary);
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.interpretation-item ul {
  list-style: none;
  padding: 0;
}

.interpretation-item ul li {
  padding: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;
}

.interpretation-item ul li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: var(--accent);
  font-weight: bold;
}

.advantages-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.advantage-item {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.advantage-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.advantage-item .icon {
  font-size: 2.5rem;
  display: block;
  margin-bottom: 1rem;
}

.advantage-item h4 {
  color: var(--primary);
  margin-bottom: 0.8rem;
  font-size: 1.1rem;
}

.advantage-item p {
  font-size: 0.9rem;
  color: #555;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .hero {
    padding: 2rem 1rem;
  }

  .hero h1 {
    font-size: 2rem;
  }

  .tabs {
    flex-direction: column;
  }

  .tab-button {
    text-align: center;
  }

  .cta-content {
    flex-direction: column;
    text-align: center;
  }

  .tab-navigation {
    flex-direction: column;
  }

  .nav-btn {
    width: 100%;
    text-align: center;
  }

  .controls {
    flex-direction: column;
    align-items: stretch;
  }

  .control-group {
    width: 100%;
  }

  .select,
  .input-small {
    width: 100%;
  }

  .results-grid {
    grid-template-columns: 1fr;
  }

  .interpretation-cases {
    grid-template-columns: 1fr;
  }
}
</style>
