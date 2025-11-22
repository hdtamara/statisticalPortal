<template>
  <div class="correlacion-regresion-view">
    <div class="container">
      <div class="hero">
        <h1>Correlación y Regresión Lineal</h1>
        <p>
          Descubre cómo se relacionan dos variables y aprende a hacer predicciones basadas en datos
          reales
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
      <div v-if="activeTab === 'intro'" class="content-section">
        <h2>¿Qué son la Correlación y la Regresión?</h2>
        <div class="theory-box">
          <h3>La Pregunta Principal</h3>
          <p>
            Imagina que eres dueño de una tienda y te preguntas:
            <strong>"¿Entre más gasto en publicidad, más vendo?"</strong> O quizás te interesa
            saber:
            <strong>"¿Cuánto aumentarán mis ventas si invierto $1000 más en publicidad?"</strong>
          </p>
          <p>
            El análisis de <strong>correlación y regresión</strong> te ayuda a responder estas
            preguntas cuando tienes dos variables numéricas que podrían estar relacionadas.
          </p>

          <div class="concept-card">
            <h4>En Términos Simples</h4>
            <p>
              <strong>Correlación:</strong> Te dice si dos cosas están relacionadas y qué tan fuerte
              es esa relación.
            </p>
            <p>
              <strong>Regresión:</strong> Te da una fórmula para predecir una cosa basándote en la
              otra.
            </p>
          </div>
        </div>

        <h2>Las Dos Variables en Juego</h2>
        <div class="theory-box">
          <p>Cuando analizamos la relación entre dos variables, siempre tenemos:</p>

          <div class="concept-card">
            <h4>Variable Independiente (X) - La que controlas o conoces</h4>
            <p>Es la variable que <strong>usas para hacer la predicción</strong>. Por ejemplo:</p>
            <ul>
              <li>Horas de estudio → Para predecir la calificación</li>
              <li>Años de experiencia → Para predecir el salario</li>
              <li>Inversión en publicidad → Para predecir las ventas</li>
              <li>Temperatura → Para predecir el consumo de helado</li>
            </ul>
            <p class="note">Se grafica en el <strong>eje horizontal (X)</strong></p>
          </div>

          <div class="concept-card">
            <h4>Variable Dependiente (Y) - La que quieres predecir</h4>
            <p>
              Es la variable que <strong>depende o podría ser afectada</strong> por la otra. Por
              ejemplo:
            </p>
            <ul>
              <li>Calificación obtenida</li>
              <li>Salario</li>
              <li>Ventas</li>
              <li>Litros de helado vendidos</li>
            </ul>
            <p class="note">Se grafica en el <strong>eje vertical (Y)</strong></p>
          </div>
        </div>

        <h2>El Diagrama de Dispersión: Tu Primera Pista</h2>
        <div class="theory-box">
          <h3>¿Qué es?</h3>
          <p>
            Es un <strong>gráfico de puntos</strong> donde cada punto representa una observación. Es
            como tomar una foto de tus datos para ver si existe algún patrón.
          </p>

          <div class="concept-card">
            <h4>Cómo se hace</h4>
            <ol>
              <li>En el eje horizontal (X) colocas la variable independiente</li>
              <li>En el eje vertical (Y) colocas la variable dependiente</li>
              <li>Cada punto representa un par de valores (X, Y)</li>
            </ol>
            <p class="note">
              <strong>Ejemplo:</strong> Si tienes datos de 10 estudiantes con sus horas de estudio
              (X) y calificación (Y), tendrías 10 puntos en el gráfico.
            </p>
          </div>

          <h3>¿Qué puedes ver en el diagrama?</h3>
          <div class="grid-3">
            <div class="visual-item">
              <strong>Relación Positiva</strong>
              <div id="plotPositive" class="mini-chart"></div>
              <p>Los puntos suben como una escalera de izquierda a derecha.</p>
              <p class="note">Significa: <em>Cuando X aumenta, Y también aumenta</em></p>
              <p><strong>Ejemplo:</strong> Más horas de estudio → Mayor calificación</p>
            </div>
            <div class="visual-item">
              <strong>Relación Negativa</strong>
              <div id="plotNegative" class="mini-chart"></div>
              <p>Los puntos bajan como un tobogán de izquierda a derecha.</p>
              <p class="note">Significa: <em>Cuando X aumenta, Y disminuye</em></p>
              <p><strong>Ejemplo:</strong> Más faltas a clase → Menor calificación</p>
            </div>
            <div class="visual-item">
              <strong>Sin Relación</strong>
              <div id="plotNoRelation" class="mini-chart"></div>
              <p>Los puntos están regados sin ningún patrón claro.</p>
              <p class="note">Significa: <em>X no afecta a Y</em></p>
              <p><strong>Ejemplo:</strong> Color de zapatos → Calificación</p>
            </div>
          </div>
        </div>

        <h2>Cuidado: ¡Correlación NO es Causalidad!</h2>
        <div class="theory-box">
          <div class="warning-box">
            <h3>La Trampa Más Común</h3>
            <p>
              <strong
                >Solo porque dos cosas estén relacionadas, NO significa que una causa la
                otra.</strong
              >
            </p>

            <h4>Ejemplos Curiosos (y Reales):</h4>
            <ul>
              <li>
                <strong>Ventas de helado vs Ahogamientos en piscinas</strong><br />
                Están correlacionados, pero comer helado no causa ahogamientos. La causa real:
                <em>el verano (hace calor)</em>
              </li>
              <li>
                <strong>Número de películas de Nicolas Cage vs Ahogamientos en piscinas</strong
                ><br />
                Tienen correlación alta, pero obviamente no hay relación causal. Es pura
                coincidencia.
              </li>
              <li>
                <strong>Tamaño del pie vs Habilidad de lectura en niños</strong><br />
                Están correlacionados, pero el tamaño del pie no te hace leer mejor. La variable
                oculta: <em>la edad</em>
              </li>
            </ul>
          </div>

          <div class="concept-card">
            <h4>Entonces, ¿cuándo sí hay relación causal?</h4>
            <p>Para afirmar que X <strong>causa</strong> Y, necesitas:</p>
            <ul>
              <li>Realizar experimentos controlados</li>
              <li>Tener una teoría lógica que lo explique</li>
              <li>Eliminar otras explicaciones posibles</li>
              <li>Que el efecto ocurra consistentemente</li>
            </ul>
            <p class="note">
              El análisis de correlación y regresión te dice <strong>"están relacionadas"</strong>,
              pero NO te dice <strong>"una causa la otra"</strong>.
            </p>
          </div>
        </div>
      </div>

      <!-- Correlación -->
      <div v-if="activeTab === 'correlacion'" class="content-section">
        <h2>El Coeficiente de Correlación (r): Midiendo la Relación</h2>
        <div class="theory-box">
          <h3>¿Qué es el Coeficiente de Correlación?</h3>
          <p>Es un <strong>número entre -1 y +1</strong> que te dice dos cosas importantes:</p>
          <ul>
            <li><strong>Qué tan fuerte</strong> es la relación (el tamaño del número)</li>
            <li><strong>En qué dirección</strong> va la relación (el signo + o -)</li>
          </ul>

          <div class="concept-card">
            <h4>El Coeficiente de Pearson (r)</h4>
            <p>
              Desarrollado por Karl Pearson, es la medida más común. Piensa en él como
              <strong>una calificación de qué tan bien relacionadas están dos variables</strong>.
            </p>
          </div>
        </div>

        <h2>Entendiendo los Valores de r</h2>
        <div class="theory-box">
          <div class="concept-card">
            <h4>Los Extremos</h4>
            <ul>
              <li>
                <strong>r = +1.00</strong> → Relación perfecta positiva (todos los puntos en línea
                recta ascendente)
              </li>
              <li>
                <strong>r = -1.00</strong> → Relación perfecta negativa (todos los puntos en línea
                recta descendente)
              </li>
              <li>
                <strong>r = 0.00</strong> → No hay relación lineal (puntos totalmente dispersos)
              </li>
            </ul>
            <p class="note">
              <strong>En la práctica:</strong> Casi nunca verás +1 o -1 perfectos. Los datos reales
              siempre tienen algo de variación.
            </p>
          </div>

          <div class="formula-box">
            <h4>La Fórmula</h4>
            <div
              v-html="
                renderLatexDisplay('r = \\frac{\\sum(X - \\bar{X})(Y - \\bar{Y})}{(n - 1)s_x s_y}')
              "
            ></div>
            <p class="formula-note">
              Donde:<br />
              <strong><span v-html="renderLatex('\\bar{X}, \\bar{Y}')"></span>:</strong> Los
              promedios de X e Y<br />
              <strong><span v-html="renderLatex('s_x, s_y')"></span>:</strong> Las desviaciones
              estándar<br />
              <strong>n:</strong> Cantidad de observaciones
            </p>
            <p class="note">
              <strong>Nota:</strong> Las calculadoras y software lo calculan por ti. Lo importante
              es saber interpretar el resultado.
            </p>
          </div>

          <h3>Guía de Interpretación: ¿Qué significa cada valor?</h3>
          <div class="table-container">
            <table>
              <thead>
                <tr>
                  <th>Valor de r</th>
                  <th>Fuerza</th>
                  <th>¿Qué significa?</th>
                  <th>Ejemplo cotidiano</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>0.00 a ±0.20</td>
                  <td>Muy débil</td>
                  <td>Casi no hay relación. No sirve para predecir.</td>
                  <td>Talla de camisa vs Nivel de inglés</td>
                </tr>
                <tr>
                  <td>±0.20 a ±0.40</td>
                  <td>Débil</td>
                  <td>Hay algo de relación, pero muy pequeña.</td>
                  <td>Horas de TV vs Calificaciones</td>
                </tr>
                <tr>
                  <td>±0.40 a ±0.60</td>
                  <td>Moderada</td>
                  <td>Relación notable. Puede ser útil para predecir.</td>
                  <td>Horas de ejercicio vs Peso perdido</td>
                </tr>
                <tr>
                  <td>±0.60 a ±0.80</td>
                  <td>Fuerte</td>
                  <td>Relación clara. Buena para hacer predicciones.</td>
                  <td>Años de experiencia vs Salario</td>
                </tr>
                <tr>
                  <td>±0.80 a ±1.00</td>
                  <td>Muy fuerte</td>
                  <td>Relación muy fuerte. Excelente predictor.</td>
                  <td>Altura de padres vs Altura de hijos</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="concept-card">
            <h4>Recuerda el Signo</h4>
            <p>
              <strong>Positivo (+):</strong> Ambas suben juntas. Ejemplo: r = +0.75<br />
              <strong>Negativo (-):</strong> Una sube, la otra baja. Ejemplo: r = -0.75<br />
              <em>¡Ambos tienen la misma fuerza! Solo cambia la dirección.</em>
            </p>
          </div>
        </div>

        <h2>¿Es Real la Correlación o Solo Suerte?</h2>
        <div class="theory-box">
          <h3>El Problema</h3>
          <p>
            Supón que calculas r = 0.45 con una muestra de 15 personas.
            <strong>¿Es esta correlación real o solo casualidad?</strong> Necesitas hacer una
            <strong>prueba de significancia</strong> para estar seguro.
          </p>

          <div class="concept-card">
            <h4>La Pregunta Principal</h4>
            <p>
              <strong
                >¿Esta correlación que veo en mi muestra realmente existe en toda la población, o es
                solo fruto del azar?</strong
              >
            </p>
          </div>

          <h3>Las Hipótesis</h3>
          <ul>
            <li>
              <strong>H₀ (Hipótesis nula):</strong> <span v-html="renderLatex('\\rho = 0')"></span
              ><br />
              <em>"No hay correlación en la población. Lo que vi fue casualidad."</em>
            </li>
            <li>
              <strong>H₁ (Hipótesis alternativa):</strong>
              <span v-html="renderLatex('\\rho \\neq 0')"></span><br />
              <em>"Sí hay correlación en la población. Mi resultado es real."</em>
            </li>
          </ul>

          <div class="formula-box">
            <h4>Estadístico de Prueba</h4>
            <div v-html="renderLatexDisplay('t = \\frac{r\\sqrt{n-2}}{\\sqrt{1-r^2}}')"></div>
            <p class="formula-note">
              Con <span v-html="renderLatex('n-2')"></span> grados de libertad<br />
              Donde <strong>n</strong> es tu tamaño de muestra
            </p>
          </div>

          <div class="concept-card">
            <h4>Cómo Tomar la Decisión</h4>
            <p><strong>Paso 1:</strong> Calcular el estadístico t con la fórmula anterior</p>
            <p>
              <strong>Paso 2:</strong> Buscar el valor crítico
              <span v-html="renderLatex('t_{\\alpha/2}')"></span> en:
            </p>
            <ul>
              <li>
                <strong>Tabla t-Student</strong> con
                <span v-html="renderLatex('n-2')"></span> grados de libertad y nivel de
                significancia α = 0.05
              </li>
              <li>O usar software (Excel: =T.INV.2T(0.05, n-2), R, Python, etc.)</li>
            </ul>
            <p><strong>Paso 3:</strong> Comparar:</p>
            <div class="decision-box">
              <p><strong>Si |t calculado| > t crítico:</strong></p>
              <p>
                → Rechazamos H₀. La correlación <strong>es estadísticamente significativa</strong>
              </p>
              <p><strong>Si |t calculado| ≤ t crítico:</strong></p>
              <p>→ No rechazamos H₀. La correlación podría ser casualidad</p>
            </div>
            <p class="note">
              <strong>Ejemplo:</strong> Con n=15, grados de libertad = 13, α=0.05, el valor crítico
              es t = 2.160.<br />
              Si tu t calculado = 2.5, entonces 2.5 > 2.160 → Rechazas H₀ (correlación
              significativa)
            </p>
          </div>
        </div>
      </div>

      <!-- Ejemplo de Correlación -->
      <div v-if="activeTab === 'ejemplo-correlacion'" class="content-section">
        <h2>Ejemplo Práctico: Calculando la Correlación</h2>

        <div class="theory-box">
          <h3>El Problema</h3>
          <p>
            Un profesor quiere saber si existe relación entre las
            <strong>horas de estudio</strong> y las <strong>calificaciones</strong>
            obtenidas por 8 estudiantes en un examen.
          </p>
        </div>

        <div class="theory-box">
          <h3>Datos Recopilados</h3>
          <div class="table-container">
            <table>
              <thead>
                <tr>
                  <th>Estudiante</th>
                  <th>Horas de Estudio (X)</th>
                  <th>Calificación (Y)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Ana</td>
                  <td>2</td>
                  <td>65</td>
                </tr>
                <tr>
                  <td>Bruno</td>
                  <td>4</td>
                  <td>75</td>
                </tr>
                <tr>
                  <td>Carlos</td>
                  <td>6</td>
                  <td>85</td>
                </tr>
                <tr>
                  <td>Diana</td>
                  <td>8</td>
                  <td>90</td>
                </tr>
                <tr>
                  <td>Elena</td>
                  <td>3</td>
                  <td>70</td>
                </tr>
                <tr>
                  <td>Franco</td>
                  <td>5</td>
                  <td>80</td>
                </tr>
                <tr>
                  <td>Gloria</td>
                  <td>7</td>
                  <td>88</td>
                </tr>
                <tr>
                  <td>Hugo</td>
                  <td>1</td>
                  <td>60</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="theory-box">
          <h3>Diagrama de Dispersión</h3>
          <div id="scatterCorrelation" class="chart-container"></div>
        </div>

        <div class="theory-box">
          <h3>Paso 1: Observar el Diagrama de Dispersión</h3>
          <p>
            En el gráfico podemos ver que los puntos forman un patrón ascendente de izquierda a
            derecha. Esto sugiere una <strong>relación positiva</strong>: a más horas de estudio,
            mayor calificación.
          </p>
        </div>

        <div class="theory-box">
          <h3>Paso 2: Calcular el Coeficiente de Correlación (r)</h3>
          <p>Para calcular r, usamos la fórmula:</p>
          <div class="formula-box">
            <div
              v-html="
                renderLatexDisplay('r = \\frac{\\sum(X - \\bar{X})(Y - \\bar{Y})}{(n - 1)s_x s_y}')
              "
            ></div>
          </div>

          <div class="solution-steps">
            <div class="step">
              <h4>Cálculos necesarios:</h4>
              <ul>
                <li>
                  <strong>Promedio de X:</strong>
                  <span v-html="renderLatex('\\bar{X} = 4.5')"></span> horas
                </li>
                <li>
                  <strong>Promedio de Y:</strong>
                  <span v-html="renderLatex('\\bar{Y} = 76.625')"></span> puntos
                </li>
                <li>
                  <strong>Desviación estándar de X:</strong>
                  <span v-html="renderLatex('s_x = 2.33')"></span>
                </li>
                <li>
                  <strong>Desviación estándar de Y:</strong>
                  <span v-html="renderLatex('s_y = 10.93')"></span>
                </li>
              </ul>
            </div>

            <div class="result-box">
              <h4>Resultado:</h4>
              <p><strong>r = 0.978</strong></p>
            </div>
          </div>
        </div>

        <div class="theory-box">
          <h3>Paso 3: Interpretar el Resultado</h3>
          <div class="concept-card">
            <h4>¿Qué significa r = 0.978?</h4>
            <ul>
              <li>
                <strong>El valor es positivo:</strong> La relación es directa (ambas variables
                aumentan juntas)
              </li>
              <li><strong>El valor está muy cerca de 1:</strong> La correlación es muy fuerte</li>
              <li>
                <strong>Conclusión:</strong> Existe una relación muy fuerte entre las horas de
                estudio y la calificación obtenida
              </li>
            </ul>
            <p class="note">
              <strong>Importante:</strong> Esto NO significa que estudiar <em>causa</em> una mejor
              calificación de forma automática, pero sí existe una relación muy clara entre ambas
              variables.
            </p>
          </div>
        </div>

        <div class="theory-box">
          <h3>Paso 4: Prueba de Significancia</h3>
          <p>¿Es esta correlación estadísticamente significativa o podría ser casualidad?</p>

          <div class="formula-box">
            <h4>Estadístico de prueba:</h4>
            <div
              v-html="
                renderLatexDisplay(
                  't = \\frac{r\\sqrt{n-2}}{\\sqrt{1-r^2}} = \\frac{0.978\\sqrt{8-2}}{\\sqrt{1-0.978^2}} = 11.58',
                )
              "
            ></div>
          </div>

          <div class="concept-card">
            <p>
              Con n-2 = 6 grados de libertad y un nivel de significancia de 0.05, el valor crítico
              es aproximadamente 2.447.
            </p>
            <p>
              <strong>Como t = 11.58 > 2.447, rechazamos H₀.</strong>
            </p>
            <p class="note">
              <strong>Conclusión:</strong> La correlación es estadísticamente significativa. No es
              producto del azar.
            </p>
          </div>
        </div>
      </div>

      <!-- Regresión -->
      <div v-if="activeTab === 'regresion'" class="content-section">
        <h2>Regresión Lineal: La Máquina de Predicciones</h2>
        <div class="theory-box">
          <h3>¿Qué es la Regresión Lineal?</h3>
          <p>
            Si la <strong>correlación</strong> te dice "estas dos cosas están relacionadas", la
            <strong>regresión</strong> te dice
            <strong>"aquí está la fórmula para hacer predicciones"</strong>.
          </p>

          <div class="concept-card">
            <h4>Objetivo Principal</h4>
            <p>
              Encontrar la <strong>mejor línea recta</strong> que pase lo más cerca posible de todos
              tus puntos de datos. Esta línea te sirve para
              <strong>predecir valores futuros</strong>.
            </p>
            <p class="note">
              <strong>Ejemplo:</strong> Si tienes datos de publicidad vs ventas, la regresión te da
              una ecuación para predecir cuánto venderás con cualquier cantidad de publicidad.
            </p>
          </div>
        </div>

        <h2>La Ecuación de Regresión: Tu Fórmula Mágica</h2>
        <div class="theory-box">
          <div class="highlight-box">
            <h3>La Fórmula de la Recta</h3>
            <div v-html="renderLatexDisplay('\\hat{Y} = a + bX')"></div>
          </div>

          <h3>Desglosando la Fórmula</h3>

          <div class="concept-card">
            <h4><span v-html="renderLatex('\\hat{Y}')"></span> (Y sombrero)</h4>
            <p>
              Es el <strong>valor que predices</strong>. Por ejemplo, si predices ventas,
              <span v-html="renderLatex('\\hat{Y}')"></span> sería "Ventas Estimadas".
            </p>
            <p class="note">El sombrero (ˆ) significa "estimado" o "predicho"</p>
          </div>

          <div class="concept-card">
            <h4>b (La Pendiente) - La parte más importante</h4>
            <p>Te dice <strong>cuánto cambia Y cuando X aumenta en 1 unidad</strong>.</p>
            <div v-html="renderLatexDisplay('b = r\\left(\\frac{s_y}{s_x}\\right)')"></div>
            <p><strong>Ejemplos de interpretación:</strong></p>
            <ul>
              <li>Si b = 5 → "Por cada unidad que aumenta X, Y aumenta 5"</li>
              <li>Si b = -3 → "Por cada unidad que aumenta X, Y disminuye 3"</li>
              <li>Si b = 0.5 → "Por cada unidad que aumenta X, Y aumenta 0.5"</li>
            </ul>
          </div>

          <div class="concept-card">
            <h4>a (La Intersección)</h4>
            <p>
              Es el <strong>valor de Y cuando X = 0</strong>. Es donde la línea cruza el eje
              vertical.
            </p>
            <div v-html="renderLatexDisplay('a = \\bar{Y} - b\\bar{X}')"></div>
            <p class="note">
              <strong>Importante:</strong> A veces "a" no tiene sentido en la práctica. Por ejemplo,
              si X es "años de experiencia", ¿qué significa "salario con 0 años"? No te preocupes
              mucho por "a", enfocate en "b".
            </p>
          </div>
        </div>

        <h2>¿Cómo Encuentra el Computador la "Mejor" Recta?</h2>
        <div class="theory-box">
          <h3>El Método de Mínimos Cuadrados</h3>
          <p>
            Imagina que tienes muchos puntos en un gráfico. ¿Cómo decides qué recta es la "mejor"?
            El <strong>principio de mínimos cuadrados</strong> es el método matemático que nos da la
            respuesta.
          </p>

          <div class="concept-card">
            <h4>Objetivo del Método</h4>
            <p>
              Encontrar los valores de <strong>a</strong> (intersección) y <strong>b</strong>
              (pendiente) que minimicen la suma de los cuadrados de las distancias verticales entre
              los puntos reales y la recta:
            </p>
            <div v-html="renderLatexDisplay('\\sum(Y - \\hat{Y})^2 = \\sum[Y - (a + bX)]^2')"></div>
            <p class="formula-note">
              Donde:<br />
              <strong>Y:</strong> Valores reales observados<br />
              <strong><span v-html="renderLatex('\\hat{Y}')"></span>:</strong> Valores estimados por
              la recta<br />
              <strong><span v-html="renderLatex('(Y - \\hat{Y})')"></span>:</strong> Residuales o
              errores de estimación
            </p>
          </div>

          <div class="concept-card">
            <h4>El Proceso</h4>
            <ol>
              <li>El computador traza una recta entre los puntos</li>
              <li>
                Mide la <strong>distancia vertical</strong> de cada punto a la recta (el "error" o
                residual)
              </li>
              <li>Eleva al cuadrado todas esas distancias y las suma</li>
              <li>
                Busca la recta que hace que esta suma sea <strong>lo más pequeña posible</strong>
              </li>
            </ol>
            <p class="note">
              <strong>Importante:</strong> Las distancias son verticales porque estamos midiendo qué
              tan lejos está cada Y real del Y predicho por la recta.
            </p>
          </div>

          <div class="concept-card">
            <h4>¿Por qué elevar al cuadrado?</h4>
            <ul>
              <li>
                <strong>Elimina el problema de signos:</strong> Los errores positivos y negativos no
                se cancelan entre sí
              </li>
              <li>
                <strong>Penaliza más los errores grandes:</strong> Un error de 10 pesa más que dos
                errores de 5
              </li>
              <li>
                <strong>Produce una solución única:</strong> Es matemáticamente más fácil de
                resolver y garantiza que encontremos LA mejor recta
              </li>
            </ul>
          </div>

          <h3>Fórmulas para Calcular Mínimos Cuadrados</h3>
          <div class="concept-card">
            <h4>Pendiente (b)</h4>
            <p>Hay dos formas de calcularla (dan el mismo resultado):</p>
            <div
              v-html="
                renderLatexDisplay(
                  'b = \\frac{\\sum(X - \\bar{X})(Y - \\bar{Y})}{\\sum(X - \\bar{X})^2}',
                )
              "
            ></div>
            <p>O la forma computacional (más fácil con calculadora):</p>
            <div
              v-html="
                renderLatexDisplay(
                  'b = \\frac{n\\sum XY - \\sum X \\sum Y}{n\\sum X^2 - (\\sum X)^2}',
                )
              "
            ></div>
          </div>

          <div class="concept-card">
            <h4>Intersección (a)</h4>
            <p>Una vez que tienes b, calculas a con:</p>
            <div v-html="renderLatexDisplay('a = \\bar{Y} - b\\bar{X}')"></div>
            <p class="note">
              <strong>Truco:</strong> Esta fórmula garantiza que la recta siempre pase por el punto
              medio <span v-html="renderLatex('(\\bar{X}, \\bar{Y})')"></span>
            </p>
          </div>

          <h3>Propiedades de la Recta de Mínimos Cuadrados</h3>
          <div class="concept-card">
            <ol>
              <li>
                <strong>Pasa por el punto medio:</strong> La recta siempre cruza por
                <span v-html="renderLatex('(\\bar{X}, \\bar{Y})')"></span>
              </li>
              <li>
                <strong>Minimiza la suma de cuadrados:</strong> Ninguna otra recta tendría una suma
                menor
              </li>
              <li>
                <strong>Los residuales suman cero:</strong>
                <span v-html="renderLatex('\\sum(Y - \\hat{Y}) = 0')"></span>
              </li>
              <li>
                <strong>Es la mejor estimación lineal:</strong> Según el criterio de Gauss-Markov,
                es insesgada y de mínima varianza
              </li>
            </ol>
          </div>

          <h3>Ejemplo: Comparando Diferentes Rectas</h3>
          <div class="concept-card">
            <p>
              Para nuestro ejemplo de llamadas vs ventas, si probáramos diferentes rectas
              candidatas:
            </p>
            <div class="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Ecuación</th>
                    <th>Suma de Cuadrados de Residuales</th>
                    <th>¿Es la mejor?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span v-html="renderLatex('\\hat{Y} = 18.95 + 1.18X')"></span> (Mínimos
                      cuadrados)
                    </td>
                    <td><strong>784.21</strong></td>
                    <td>✓ SÍ (mínimo)</td>
                  </tr>
                  <tr>
                    <td><span v-html="renderLatex('\\hat{Y} = 19 + 1.2X')"></span></td>
                    <td>786.00</td>
                    <td>✗ No</td>
                  </tr>
                  <tr>
                    <td><span v-html="renderLatex('\\hat{Y} = 20 + X')"></span></td>
                    <td>900.00</td>
                    <td>✗ No</td>
                  </tr>
                  <tr>
                    <td><span v-html="renderLatex('\\hat{Y} = 15 + 1.5X')"></span></td>
                    <td>850.00</td>
                    <td>✗ No</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p class="note">
              <strong>Conclusión:</strong> La recta de mínimos cuadrados tiene la suma más pequeña
              de cuadrados de residuales, por eso es la "mejor" recta de ajuste.
            </p>
          </div>
        </div>

        <h2>¿Qué tan Buena es tu Ecuación de Regresión?</h2>
        <div class="theory-box">
          <p>
            Ya tienes tu ecuación, pero <strong>¿qué tan confiable es?</strong> Necesitas saber qué
            tan bien funciona.
          </p>

          <h3>R² (R Cuadrado) - Tu Calificación de Predicción</h3>
          <div class="concept-card">
            <h4>¿Qué es?</h4>
            <p>
              Es un
              <strong
                >porcentaje que te dice qué tanto de la variación en Y puedes explicar con X</strong
              >. Va de 0% a 100%.
            </p>
          </div>

          <div class="concept-card">
            <h4>Interpretación Fácil</h4>
            <ul>
              <li>
                <strong><span v-html="renderLatex('r^2 = 0.80')"></span> (80%):</strong><br />
                "El 80% de los cambios en Y se explican por X. El 20% restante es por otros factores
                que no mediste."
              </li>
              <li>
                <strong><span v-html="renderLatex('r^2 = 0.25')"></span> (25%):</strong><br />
                "Solo el 25% se explica por X. Hay muchas otras cosas afectando Y que no estás
                considerando."
              </li>
              <li>
                <strong><span v-html="renderLatex('r^2 = 0.95')"></span> (95%):</strong><br />
                "¡Excelente! El 95% se explica por X. Tu modelo predice muy bien."
              </li>
            </ul>
          </div>

          <div class="concept-card">
            <h4>📈 ¿Qué es un "buen" R²?</h4>
            <p>Depende del campo:</p>
            <ul>
              <li><strong>Ciencias físicas:</strong> R² > 0.90 es común</li>
              <li><strong>Negocios/Marketing:</strong> R² > 0.40 ya es útil</li>
              <li><strong>Ciencias sociales:</strong> R² > 0.30 puede ser aceptable</li>
            </ul>
            <p class="note">
              <strong>Regla general:</strong> R² > 0.50 significa que tu modelo es razonablemente
              bueno para hacer predicciones.
            </p>
          </div>
        </div>

        <h2>Error Estándar: ¿Qué Tan Precisas Son Tus Predicciones?</h2>
        <div class="theory-box">
          <h3>¿Qué es?</h3>
          <p>
            Te dice <strong>cuánto se equivocan tus predicciones en promedio</strong>. Es como la
            "desviación estándar de los errores".
          </p>

          <div class="formula-box">
            <div
              v-html="
                renderLatexDisplay(
                  's_{y\\cdot x} = \\sqrt{\\frac{\\sum(Y_{real} - Y_{predicho})^2}{n-2}}',
                )
              "
            ></div>
          </div>

          <div class="concept-card">
            <h4>Cómo Interpretarlo</h4>
            <p><strong>Ejemplo práctico:</strong></p>
            <p>
              Si estás prediciendo ventas y tu error estándar es <strong>s = 5</strong> unidades:
            </p>
            <ul>
              <li>Significa que tus predicciones se equivocan por 5 unidades en promedio</li>
              <li>Si predices 100 unidades, espera estar entre 90 y 110 aproximadamente</li>
              <li><strong>Mientras más pequeño sea s, mejores son tus predicciones</strong></li>
            </ul>
          </div>
        </div>

        <h2>Intervalos de Predicción: Dándole un Rango a tu Predicción</h2>
        <div class="theory-box">
          <h3>¿Por qué usar intervalos?</h3>
          <p>
            Decir "venderé exactamente 100 unidades" es muy arriesgado. Es mejor decir
            <strong>"venderé entre 90 y 110 unidades con 95% de confianza"</strong>.
          </p>

          <div class="concept-card">
            <h4>La Fórmula</h4>
            <p>Para predecir un <strong>valor individual</strong> de Y:</p>
            <div
              v-html="
                renderLatexDisplay(
                  '\\hat{Y} \\pm t \\times s_{y\\cdot x} \\times \\sqrt{1 + \\frac{1}{n} + \\frac{(X-\\bar{X})^2}{\\sum(X-\\bar{X})^2}}',
                )
              "
            ></div>
          </div>

          <div class="concept-card">
            <h4>Algo Importante</h4>
            <p>El intervalo es <strong>más ancho</strong> (menos preciso) cuando:</p>
            <ul>
              <li>Te alejas mucho del promedio de X</li>
              <li>Tu muestra es pequeña</li>
            </ul>
            <p class="note">
              <strong>Moraleja:</strong> Las predicciones son más confiables cuando estás dentro del
              rango de datos que usaste para crear el modelo.
            </p>
          </div>
        </div>
      </div>

      <!-- Ejemplo -->
      <div v-if="activeTab === 'ejemplo'" class="content-section">
        <h2>Ejemplo Práctico: Llamadas vs Ventas de Copiadoras</h2>

        <div class="theory-box">
          <h3>El Contexto</h3>
          <p>
            Una empresa de copiadoras quiere saber si existe relación entre el
            <strong>número de llamadas de ventas</strong> que hacen sus representantes y el
            <strong>número de copiadoras vendidas</strong>.
          </p>
          <p>
            <strong>La pregunta clave:</strong> ¿Puede la empresa predecir cuántas copiadoras
            venderá un representante basándose en cuántas llamadas hace?
          </p>
        </div>

        <div class="example-grid">
          <div class="data-panel">
            <h3>Datos</h3>
            <div class="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Representante</th>
                    <th>Llamadas (X)</th>
                    <th>Ventas (Y)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in exampleData" :key="index">
                    <td>{{ item.name }}</td>
                    <td>{{ item.x }}</td>
                    <td>{{ item.y }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="chart-panel">
            <h3>Diagrama de Dispersión y Recta de Regresión</h3>
            <div id="scatterPlot" class="chart-container"></div>
          </div>
        </div>

        <h3>Resultados del Análisis</h3>
        <div class="results-panel">
          <div class="result-card">
            <h4>1. Correlación</h4>
            <p><strong>Coeficiente (r):</strong> {{ correlation.toFixed(3) }}</p>
            <div class="concept-card">
              <p><strong>¿Qué significa?</strong></p>
              <p v-if="Math.abs(correlation) >= 0.6">
                Existe una correlación <strong>fuerte</strong>
                {{ correlation > 0 ? 'positiva' : 'negativa' }}.
                {{
                  correlation > 0 ? 'A más llamadas, más ventas.' : 'A más llamadas, menos ventas.'
                }}
              </p>
              <p v-else-if="Math.abs(correlation) >= 0.4">
                Existe una correlación <strong>moderada</strong>
                {{ correlation > 0 ? 'positiva' : 'negativa' }}. Hay relación, pero no es muy
                fuerte.
              </p>
              <p v-else>
                La correlación es <strong>débil</strong>. Las llamadas no predicen bien las ventas.
              </p>
            </div>
          </div>

          <div class="result-card">
            <h4>2. Ecuación de Regresión</h4>
            <div class="highlight-box">
              <div
                v-html="
                  renderLatexDisplay(`\\hat{Y} = ${intercept.toFixed(2)} + ${slope.toFixed(2)}X`)
                "
              ></div>
            </div>
            <div class="concept-card">
              <p><strong>¿Cómo usarla?</strong></p>
              <p>
                <strong>Pendiente ({{ slope.toFixed(2) }}):</strong>
                Por cada llamada adicional, se venden aproximadamente
                <strong>{{ slope.toFixed(2) }} copiadoras más</strong>.
              </p>
              <p>
                <strong>Ejemplo de predicción:</strong><br />
                Si un representante hace 25 llamadas:<br />
                Ventas estimadas = {{ intercept.toFixed(2) }} + {{ slope.toFixed(2) }} × 25 =
                <strong>{{ (intercept + slope * 25).toFixed(1) }} copiadoras</strong>
              </p>
            </div>
          </div>

          <div class="result-card">
            <h4>3. ¿Qué tan bueno es el modelo?</h4>
            <p>
              <strong>R² (Coeficiente de Determinación):</strong>
              {{ rSquared.toFixed(3) }} (<strong>{{ (rSquared * 100).toFixed(1) }}%</strong>)
            </p>
            <div class="concept-card">
              <p><strong>Interpretación:</strong></p>
              <p>
                El <strong>{{ (rSquared * 100).toFixed(1) }}%</strong> de la variación en las ventas
                se explica por el número de llamadas. El {{ (100 - rSquared * 100).toFixed(1) }}%
                restante se debe a otros factores (experiencia del vendedor, calidad del producto,
                suerte, etc.)
              </p>
              <p v-if="rSquared >= 0.7" class="note">
                <strong>¡Excelente modelo!</strong> Puedes confiar en las predicciones.
              </p>
              <p v-else-if="rSquared >= 0.5" class="note">
                <strong>Buen modelo.</strong> Las predicciones son razonablemente confiables.
              </p>
              <p v-else-if="rSquared >= 0.3" class="note">
                <strong>Modelo moderado.</strong> Úsalo con precaución.
              </p>
              <p v-else class="note">
                <strong>Modelo débil.</strong> No es muy confiable para predicciones.
              </p>
            </div>
            <p><strong>Error Estándar:</strong> {{ stdError.toFixed(2) }} copiadoras</p>
            <div class="concept-card">
              <p><strong>¿Qué significa?</strong></p>
              <p>
                En promedio, tus predicciones se equivocan por ±{{ stdError.toFixed(2) }}
                copiadoras. Entonces, si predices 50 ventas, espera que el valor real esté entre
                {{ (50 - stdError).toFixed(0) }} y {{ (50 + stdError).toFixed(0) }} aproximadamente.
              </p>
            </div>
          </div>
        </div>

        <h3>Cálculos Detallados: Aplicando Mínimos Cuadrados</h3>
        <div class="theory-box">
          <h4>Tabla Completa de Cálculos</h4>
          <p>
            Para aplicar el método de mínimos cuadrados, necesitamos calcular algunas columnas
            adicionales:
          </p>
          <div class="table-container">
            <table>
              <thead>
                <tr>
                  <th>Representante</th>
                  <th>X</th>
                  <th>Y</th>
                  <th>X²</th>
                  <th>Y²</th>
                  <th>XY</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in exampleData" :key="index">
                  <td>{{ item.name }}</td>
                  <td>{{ item.x }}</td>
                  <td>{{ item.y }}</td>
                  <td>{{ item.x * item.x }}</td>
                  <td>{{ item.y * item.y }}</td>
                  <td>{{ item.x * item.y }}</td>
                </tr>
                <tr class="total-row">
                  <td><strong>Total</strong></td>
                  <td>
                    <strong>{{ sumX }}</strong>
                  </td>
                  <td>
                    <strong>{{ sumY }}</strong>
                  </td>
                  <td>
                    <strong>{{ sumX2 }}</strong>
                  </td>
                  <td>
                    <strong>{{ sumY2 }}</strong>
                  </td>
                  <td>
                    <strong>{{ sumXY }}</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h4>Aplicando las Fórmulas de Mínimos Cuadrados</h4>
          <div class="concept-card">
            <p><strong>Paso 1: Calcular la pendiente (b)</strong></p>
            <div
              v-html="
                renderLatexDisplay(
                  'b = \\frac{n\\sum XY - \\sum X \\sum Y}{n\\sum X^2 - (\\sum X)^2}',
                )
              "
            ></div>
            <p>Sustituyendo los valores:</p>
            <div
              v-html="
                renderLatexDisplay(
                  `b = \\frac{${n}(${sumXY}) - (${sumX})(${sumY})}{${n}(${sumX2}) - (${sumX})^2}`,
                )
              "
            ></div>
            <div
              v-html="
                renderLatexDisplay(
                  `b = \\frac{${n * sumXY} - ${sumX * sumY}}{${n * sumX2} - ${sumX * sumX}} = \\frac{${n * sumXY - sumX * sumY}}{${n * sumX2 - sumX * sumX}} = ${slope.toFixed(4)}`,
                )
              "
            ></div>
          </div>

          <div class="concept-card">
            <p><strong>Paso 2: Calcular la intersección (a)</strong></p>
            <div v-html="renderLatexDisplay('a = \\bar{Y} - b\\bar{X}')"></div>
            <p>Sustituyendo los valores:</p>
            <div
              v-html="
                renderLatexDisplay(
                  `a = ${meanY.toFixed(2)} - ${slope.toFixed(4)}(${meanX.toFixed(2)}) = ${intercept.toFixed(4)}`,
                )
              "
            ></div>
          </div>

          <div class="highlight-box">
            <p><strong>Ecuación de Regresión Final:</strong></p>
            <div
              v-html="
                renderLatexDisplay(`\\hat{Y} = ${intercept.toFixed(2)} + ${slope.toFixed(2)}X`)
              "
            ></div>
          </div>
        </div>

        <h3>Verificación: Calculando los Residuales</h3>
        <div class="theory-box">
          <p>
            Para verificar que nuestra recta es la mejor, calculamos los residuales (errores) para
            cada punto y comprobamos que su suma de cuadrados es mínima:
          </p>
          <div class="table-container">
            <table>
              <thead>
                <tr>
                  <th>Representante</th>
                  <th>Y real</th>
                  <th>Ŷ estimado</th>
                  <th>Residual (Y-Ŷ)</th>
                  <th>(Y-Ŷ)²</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in exampleData" :key="index">
                  <td>{{ item.name }}</td>
                  <td>{{ item.y }}</td>
                  <td>{{ (intercept + slope * item.x).toFixed(2) }}</td>
                  <td>{{ (item.y - (intercept + slope * item.x)).toFixed(2) }}</td>
                  <td>{{ Math.pow(item.y - (intercept + slope * item.x), 2).toFixed(2) }}</td>
                </tr>
                <tr class="total-row">
                  <td colspan="3"><strong>Suma de Cuadrados de Residuales (SCR)</strong></td>
                  <td colspan="2">
                    <strong>{{ sumSquaredResiduals.toFixed(2) }}</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="concept-card">
            <h4>Propiedad Fundamental</h4>
            <p>
              <strong
                >Ninguna otra recta tendría una suma de cuadrados de residuales menor que
                {{ sumSquaredResiduals.toFixed(2) }}</strong
              >. Esta es la recta óptima según el criterio de mínimos cuadrados.
            </p>
            <p class="note">
              <strong>Nota:</strong> Si observas cuidadosamente, la suma de los residuales (columna
              Y-Ŷ) es aproximadamente cero. Esto es una propiedad matemática de la recta de mínimos
              cuadrados.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, nextTick, onMounted } from 'vue'
import * as katex from 'katex'
import 'katex/dist/katex.min.css'
import Plotly from 'plotly.js-dist-min'

const activeTab = ref('intro')

const tabs = [
  { id: 'intro', label: 'Introducción' },
  { id: 'correlacion', label: 'Correlación' },
  { id: 'ejemplo-correlacion', label: 'Ejemplo Correlación' },
  { id: 'regresion', label: 'Regresión' },
  { id: 'ejemplo', label: 'Ejemplo Completo' },
]

const exampleData = [
  { name: 'Tom Keller', x: 20, y: 30 },
  { name: 'Jeff Hall', x: 40, y: 60 },
  { name: 'Brian Virost', x: 20, y: 40 },
  { name: 'Greg Fish', x: 30, y: 60 },
  { name: 'Susan Welch', x: 10, y: 30 },
  { name: 'Carlos Ramírez', x: 10, y: 40 },
  { name: 'Rich Niles', x: 20, y: 40 },
  { name: 'Mike Kiel', x: 20, y: 50 },
  { name: 'Mark Reynolds', x: 20, y: 30 },
  { name: 'Soni Jones', x: 30, y: 70 },
]

// Cálculos
const n = computed(() => exampleData.length)
const sumX = computed(() => exampleData.reduce((acc, item) => acc + item.x, 0))
const sumY = computed(() => exampleData.reduce((acc, item) => acc + item.y, 0))
const sumXY = computed(() => exampleData.reduce((acc, item) => acc + item.x * item.y, 0))
const sumX2 = computed(() => exampleData.reduce((acc, item) => acc + item.x ** 2, 0))
const sumY2 = computed(() => exampleData.reduce((acc, item) => acc + item.y ** 2, 0))

const meanX = computed(() => sumX.value / n.value)
const meanY = computed(() => sumY.value / n.value)

// Pendiente (b)
const slope = computed(() => {
  const numerator = n.value * sumXY.value - sumX.value * sumY.value
  const denominator = n.value * sumX2.value - sumX.value ** 2
  return numerator / denominator
})

// Intersección (a)
const intercept = computed(() => meanY.value - slope.value * meanX.value)

// Correlación (r)
const correlation = computed(() => {
  const numerator = n.value * sumXY.value - sumX.value * sumY.value
  const denominator = Math.sqrt(
    (n.value * sumX2.value - sumX.value ** 2) * (n.value * sumY2.value - sumY.value ** 2),
  )
  return numerator / denominator
})

// R cuadrado
const rSquared = computed(() => correlation.value ** 2)

// Suma de cuadrados de residuales
const sumSquaredResiduals = computed(() => {
  return exampleData.reduce((acc, item) => {
    const yPred = intercept.value + slope.value * item.x
    return acc + (item.y - yPred) ** 2
  }, 0)
})

// Error estándar
const stdError = computed(() => {
  return Math.sqrt(sumSquaredResiduals.value / (n.value - 2))
})

// Renderizado de gráficos
const renderChart = () => {
  const xValues = exampleData.map((d) => d.x)
  const yValues = exampleData.map((d) => d.y)

  // Puntos de datos
  const trace1 = {
    x: xValues,
    y: yValues,
    mode: 'markers',
    type: 'scatter',
    name: 'Datos Observados',
    marker: { size: 10, color: '#3b82f6' },
  }

  // Línea de regresión
  const xRange = [Math.min(...xValues) - 5, Math.max(...xValues) + 5]
  const yRange = xRange.map((x) => intercept.value + slope.value * x)

  const trace2 = {
    x: xRange,
    y: yRange,
    mode: 'lines',
    type: 'scatter',
    name: 'Recta de Regresión',
    line: { color: '#ef4444', width: 3 },
  }

  const layout = {
    title: { text: 'Relación Llamadas vs Ventas' },
    xaxis: { title: { text: 'Número de Llamadas (X)' } },
    yaxis: { title: { text: 'Ventas de Copiadoras (Y)' } },
    showlegend: true,
    legend: { x: 0, y: 1 },
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Plotly.newPlot('scatterPlot', [trace1, trace2] as any, layout, { responsive: true })
}

// Renderizado del gráfico de correlación simple
const renderCorrelationChart = () => {
  const corrData = [
    { x: 2, y: 65 },
    { x: 4, y: 75 },
    { x: 6, y: 85 },
    { x: 8, y: 90 },
    { x: 3, y: 70 },
    { x: 5, y: 80 },
    { x: 7, y: 88 },
    { x: 1, y: 60 },
  ]

  const trace = {
    x: corrData.map((d) => d.x),
    y: corrData.map((d) => d.y),
    mode: 'markers',
    type: 'scatter',
    name: 'Estudiantes',
    marker: { size: 12, color: '#8b5cf6' },
  }

  const layout = {
    title: { text: 'Horas de Estudio vs Calificación' },
    xaxis: { title: { text: 'Horas de Estudio (X)' } },
    yaxis: { title: { text: 'Calificación (Y)' } },
    showlegend: false,
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Plotly.newPlot('scatterCorrelation', [trace] as any, layout, { responsive: true })
}

// Renderizar mini gráficos de ejemplo
const renderMiniCharts = () => {
  // Correlación positiva (r ≈ 0.9)
  const positiveData = {
    x: [1, 2, 3, 4, 5, 6, 7, 8],
    y: [2, 3.5, 4, 5.5, 6, 7.5, 8, 9],
  }

  const tracePositive = {
    x: positiveData.x,
    y: positiveData.y,
    mode: 'markers',
    type: 'scatter',
    marker: { size: 8, color: '#10b981' },
  }

  const layoutMini = {
    width: 200,
    height: 150,
    margin: { l: 30, r: 10, t: 10, b: 30 },
    xaxis: { showticklabels: false, showgrid: false },
    yaxis: { showticklabels: false, showgrid: false },
    showlegend: false,
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Plotly.newPlot('plotPositive', [tracePositive] as any, layoutMini, {
    staticPlot: true,
    displayModeBar: false,
  })

  // Correlación negativa (r ≈ -0.9)
  const negativeData = {
    x: [1, 2, 3, 4, 5, 6, 7, 8],
    y: [9, 8, 7, 6, 5, 4, 3, 2],
  }

  const traceNegative = {
    x: negativeData.x,
    y: negativeData.y,
    mode: 'markers',
    type: 'scatter',
    marker: { size: 8, color: '#ef4444' },
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Plotly.newPlot('plotNegative', [traceNegative] as any, layoutMini, {
    staticPlot: true,
    displayModeBar: false,
  })

  // Sin correlación (r ≈ 0)
  const noRelationData = {
    x: [1, 2, 3, 4, 5, 6, 7, 8],
    y: [5, 3, 7, 4, 6, 2, 5, 6],
  }

  const traceNoRelation = {
    x: noRelationData.x,
    y: noRelationData.y,
    mode: 'markers',
    type: 'scatter',
    marker: { size: 8, color: '#6b7280' },
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Plotly.newPlot('plotNoRelation', [traceNoRelation] as any, layoutMini, {
    staticPlot: true,
    displayModeBar: false,
  })
}

watch(activeTab, (newTab) => {
  if (newTab === 'ejemplo') {
    nextTick(() => {
      renderChart()
    })
  } else if (newTab === 'ejemplo-correlacion') {
    nextTick(() => {
      renderCorrelationChart()
    })
  } else if (newTab === 'intro') {
    nextTick(() => {
      renderMiniCharts()
    })
  }
})

onMounted(() => {
  // Renderizar mini gráficos al cargar si estamos en la pestaña intro (por defecto)
  if (activeTab.value === 'intro') {
    nextTick(() => {
      renderMiniCharts()
    })
  }
})

const renderLatex = (latex: string) => {
  try {
    return katex.renderToString(latex, { throwOnError: false })
  } catch {
    return latex
  }
}

const renderLatexDisplay = (latex: string) => {
  try {
    return katex.renderToString(latex, { throwOnError: false, displayMode: true })
  } catch {
    return latex
  }
}
</script>

<style scoped>
.correlacion-regresion-view {
  padding-bottom: 4rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.hero {
  text-align: center;
  margin-bottom: 3rem;
  background: var(--gradient-primary);
  padding: 4rem 2rem;
  border-radius: 1rem;
  color: white;
  box-shadow: 0 10px 25px -5px rgba(79, 70, 229, 0.2);
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 800;
  letter-spacing: -0.025em;
  color: white;
}

.hero p {
  font-size: 1.25rem;
  opacity: 1;
  max-width: 600px;
  margin: 0 auto;
  color: white;
}

.tabs {
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  justify-content: center;
  background: var(--surface);
  padding: 0.5rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
}

.tab-button {
  padding: 0.75rem 1.5rem;
  border: none;
  background: transparent;
  cursor: pointer;
  border-radius: 0.5rem;
  font-weight: 600;
  color: var(--text-secondary);
  transition: all 0.3s ease;
}

.tab-button:hover {
  color: var(--primary);
  background: var(--primary-50);
}

.tab-button.active {
  background: var(--primary);
  color: white;
  box-shadow: 0 4px 6px -1px rgba(79, 70, 229, 0.2);
}

.content-section {
  animation: fadeIn 0.5s ease;
}

.theory-box {
  background: var(--surface);
  padding: 2.5rem;
  border-radius: 1.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  margin-bottom: 2.5rem;
  border: 1px solid var(--border-light);
}

.theory-box h3 {
  color: var(--primary-800);
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.theory-box h3:first-child {
  margin-top: 0;
}

.formula-box {
  background: var(--neutral-50);
  padding: 2rem;
  border-radius: 1rem;
  margin: 2rem 0;
  text-align: center;
  border-left: 4px solid var(--primary);
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.02);
}

.formula-note {
  margin-top: 1rem;
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.concept-card {
  background: var(--primary-50);
  padding: 1.5rem;
  border-radius: 1rem;
  margin-top: 1.5rem;
  border: 1px solid var(--primary-100);
}

.warning-box {
  background: var(--accent-50);
  padding: 1.5rem;
  border-radius: 1rem;
  margin-top: 1.5rem;
  border: 1px solid var(--accent-100);
  color: var(--accent-900);
}

.warning-box h3 {
  color: var(--accent-700);
  margin-top: 0;
}

.highlight-box {
  background: var(--secondary-50);
  padding: 1.5rem;
  border-radius: 1rem;
  text-align: center;
  margin: 1.5rem 0;
  border: 1px solid var(--secondary-200);
}

.grid-3 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.visual-item {
  background: white;
  padding: 1rem;
  border-radius: 0.5rem;
  text-align: center;
  border: 1px solid var(--border);
}

.visual-item strong {
  display: block;
  color: var(--primary);
  margin-bottom: 0.5rem;
}

.definition-list li {
  margin-bottom: 1rem;
  padding-left: 1rem;
  border-left: 3px solid var(--secondary-300);
}

.table-container {
  overflow-x: auto;
  margin: 2rem 0;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
}

table {
  width: 100%;
  border-collapse: collapse;
  background: white;
}

th,
td {
  padding: 1.25rem;
  text-align: left;
  border-bottom: 1px solid var(--border);
}

th {
  background: var(--neutral-50);
  font-weight: 700;
  color: var(--text-primary);
  text-transform: uppercase;
  font-size: 0.85rem;
  letter-spacing: 0.05em;
}

tr:last-child td {
  border-bottom: none;
}

.total-row {
  background: var(--primary-50);
  font-weight: 700;
  border-top: 2px solid var(--primary);
}

.total-row td {
  color: var(--primary);
  font-size: 1rem;
}

.example-grid {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 2rem;
}

.chart-container {
  width: 100%;
  height: 520px;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  border: 1px solid var(--border);
  /* padding: 1rem; */
}

.results-panel {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.results-panel + .result-card,
.content-section h3 + .results-panel {
  margin-top: 1.5rem;
}

.result-card {
  background: var(--surface);
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  border-top: 4px solid var(--secondary);
  transition: transform 0.3s ease;
}

.result-card:hover {
  transform: translateY(-5px);
}

.result-card h4 {
  color: var(--text-primary);
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

@media (max-width: 1024px) {
  .example-grid {
    flex-direction: column;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 3rem 1.5rem;
  }

  .hero h1 {
    font-size: 2rem;
  }

  .theory-box {
    padding: 1.5rem;
  }
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

.mini-chart {
  width: 200px;
  height: 150px;
  border: 1px solid var(--border);
  border-radius: 0.5rem;
  background: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.decision-box {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 0.75rem;
  margin-top: 1rem;
  box-shadow: 0 4px 6px rgba(102, 126, 234, 0.25);
}

.decision-box h4 {
  margin-bottom: 0.75rem;
  font-size: 1.1rem;
}

.decision-box p {
  margin-bottom: 0.5rem;
  line-height: 1.6;
}
</style>
