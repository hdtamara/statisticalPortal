<template>
  <div class="distribuciones-view">
    <div class="container">
      <div class="hero">
        <h1>Distribuciones de Probabilidad</h1>
        <p>
          Comprende las variables aleatorias y las distribuciones más importantes: binomial,
          uniforme y normal.
        </p>
      </div>

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

      <!-- MÓDULO 1: VARIABLES ALEATORIAS -->
      <div v-if="activeTab === 'variables'" class="content-section">
        <h2>Variables Aleatorias</h2>

        <div class="intro-box">
          <h3>💡 Explicación Intuitiva</h3>
          <p>
            Una distribución de probabilidad es como un <strong>mapa completo</strong> que te dice
            qué tan probable es cada resultado posible. En lugar de calcular la probabilidad de un
            solo evento, la distribución te da el panorama completo de todos los resultados.
          </p>
        </div>

        <div class="detailed-example">
          <h3>🎲 ¿Qué es una Variable Aleatoria?</h3>
          <p>
            Una <strong>variable aleatoria</strong> es simplemente un número que resulta de un
            experimento aleatorio. Le asignamos un valor numérico a cada resultado posible.
          </p>
          <div class="example-inline">
            <strong>Ejemplo:</strong>
            <p>
              Si lanzas una moneda 3 veces, puedes definir X = "número de caras". X puede ser 0, 1,
              2 o 3. Esos números son los valores de la variable aleatoria.
            </p>
          </div>
        </div>

        <div class="concepts-grid">
          <div class="concept-card">
            <h3>🔢 Variable Aleatoria Discreta</h3>
            <p>
              Solo puede tomar valores <strong>específicos y contables</strong>. Puedes listar todos
              los valores posibles.
            </p>
            <div class="example-inline">
              <strong>Ejemplos:</strong>
              <ul style="margin: 0.5rem 0; padding-left: 1.5rem">
                <li>Número de caras al lanzar 3 monedas: {0, 1, 2, 3}</li>
                <li>Número de defectos en un producto: {0, 1, 2, 3, ...}</li>
                <li>Número de estudiantes en una clase: {0, 1, 2, ..., 50}</li>
              </ul>
            </div>
          </div>

          <div class="concept-card">
            <h3>📏 Variable Aleatoria Continua</h3>
            <p>
              Puede tomar <strong>cualquier valor</strong> dentro de un rango. No puedes listar
              todos los valores porque hay infinitos.
            </p>
            <div class="example-inline">
              <strong>Ejemplos:</strong>
              <ul style="margin: 0.5rem 0; padding-left: 1.5rem">
                <li>Altura de personas: cualquier valor entre 1.40m y 2.10m</li>
                <li>Tiempo de espera: cualquier valor entre 0 y 60 minutos</li>
                <li>Temperatura: cualquier valor entre -10°C y 40°C</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="comparison-box" style="margin-top: 2rem">
          <h3>⚖️ Comparación: Discretas vs. Continuas</h3>
          <table class="comparison-table">
            <thead>
              <tr>
                <th>Característica</th>
                <th>Discreta</th>
                <th>Continua</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Valores posibles</strong></td>
                <td>Contables, separados</td>
                <td>Infinitos, en un rango</td>
              </tr>
              <tr>
                <td><strong>Ejemplo típico</strong></td>
                <td>Contar cosas</td>
                <td>Medir cosas</td>
              </tr>
              <tr>
                <td><strong>Representación</strong></td>
                <td>P(X = k)</td>
                <td>f(x) - función de densidad</td>
              </tr>
              <tr>
                <td><strong>Probabilidad en un punto</strong></td>
                <td>Puede ser > 0</td>
                <td>Siempre es 0 (se calcula por áreas)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 style="margin-top: 2rem">¿Qué es una Distribución de Probabilidad?</h3>

        <div class="detailed-example">
          <h3>📊 Definición</h3>
          <p>
            Una <strong>distribución de probabilidad</strong> describe cómo se distribuyen las
            probabilidades entre todos los valores posibles de una variable aleatoria.
          </p>
          <p style="margin-top: 1rem">
            <strong>Analogía:</strong> Imagina que tienes un presupuesto de 100% de probabilidad
            para repartir entre todos los resultados posibles. La distribución te dice cómo se
            reparte ese 100%.
          </p>
        </div>

        <div class="analogy-box">
          <h3>🔑 Diferencia Clave</h3>
          <ul style="line-height: 1.8; margin-top: 1rem">
            <li>
              <strong>Distribución Discreta:</strong> Lista las probabilidades de cada valor
              específico. Ejemplo: P(X=0)=0.125, P(X=1)=0.375, P(X=2)=0.375, P(X=3)=0.125
            </li>
            <li>
              <strong>Distribución Continua:</strong> Usa una curva (función de densidad) donde las
              probabilidades se calculan como áreas bajo la curva.
            </li>
          </ul>
        </div>
      </div>

      <!-- MÓDULO 2: DISTRIBUCIÓN BINOMIAL -->
      <div v-if="activeTab === 'binomial'" class="content-section">
        <h2>Distribución Binomial</h2>

        <div class="intro-box">
          <h3>🎯 Explicación Intuitiva</h3>
          <p>
            La distribución binomial se usa cuando tienes un experimento de
            <strong>"éxito o fracaso"</strong> que repites varias veces. Por ejemplo: lanzar
            monedas, productos defectuosos/no defectuosos, respuestas correctas/incorrectas.
          </p>
        </div>

        <div class="detailed-example">
          <h3>📋 Características y Condiciones</h3>
          <p>Para usar la distribución binomial, el experimento debe cumplir:</p>
          <ul style="line-height: 1.8; margin-top: 1rem">
            <li>
              <strong>Número fijo de ensayos (n):</strong> Sabes de antemano cuántas veces repetirás
              el experimento.
            </li>
            <li>
              <strong>Solo dos resultados posibles:</strong> Éxito o fracaso (cara/cruz,
              defectuoso/no defectuoso).
            </li>
            <li>
              <strong>Probabilidad constante (p):</strong> La probabilidad de éxito es la misma en
              cada ensayo.
            </li>
            <li>
              <strong>Ensayos independientes:</strong> El resultado de un ensayo no afecta a los
              demás.
            </li>
          </ul>
        </div>

        <div class="formula-section">
          <h3>Fórmula de la Distribución Binomial</h3>
          <p style="margin-bottom: 1rem">
            La probabilidad de obtener exactamente <strong>k éxitos</strong> en
            <strong>n ensayos</strong>:
          </p>
          <div
            class="formula-display"
            v-html="
              renderLatexDisplay(
                'P(X = k) = C(n,k) \\cdot p^k \\cdot (1-p)^{n-k} = \\binom{n}{k} p^k (1-p)^{n-k}',
              )
            "
          ></div>
          <p style="margin-top: 1rem"><strong>Donde:</strong></p>
          <ul style="line-height: 1.8">
            <li><span v-html="renderLatex('n')"></span> = número total de ensayos</li>
            <li><span v-html="renderLatex('k')"></span> = número de éxitos que queremos</li>
            <li><span v-html="renderLatex('p')"></span> = probabilidad de éxito en cada ensayo</li>
            <li>
              <span v-html="renderLatex('C(n,k)')"></span> o
              <span v-html="renderLatex('\\binom{n}{k}')"></span> = combinaciones de n tomados de k
              en k
            </li>
          </ul>
        </div>

        <div class="detailed-example" style="margin-top: 2rem">
          <h3>📚 Ejemplo Paso a Paso: Lanzar 5 Monedas</h3>
          <p style="margin-bottom: 1rem">
            <strong>Problema:</strong> Lanzas una moneda justa 5 veces. ¿Cuál es la probabilidad de
            obtener exactamente 3 caras?
          </p>

          <div class="step-card">
            <div class="step-number">1</div>
            <div class="step-content">
              <h4>Verificar que es binomial</h4>
              <ul style="line-height: 1.8">
                <li>✓ Número fijo: n = 5 lanzamientos</li>
                <li>✓ Dos resultados: cara (éxito) o cruz (fracaso)</li>
                <li>✓ Probabilidad constante: p = 0.5 en cada lanzamiento</li>
                <li>✓ Independientes: un lanzamiento no afecta al otro</li>
              </ul>
            </div>
          </div>

          <div class="step-card">
            <div class="step-number">2</div>
            <div class="step-content">
              <h4>Identificar los valores</h4>
              <ul style="line-height: 1.8">
                <li>n = 5 (número de lanzamientos)</li>
                <li>k = 3 (queremos exactamente 3 caras)</li>
                <li>p = 0.5 (probabilidad de cara)</li>
              </ul>
            </div>
          </div>

          <div class="step-card">
            <div class="step-number">3</div>
            <div class="step-content">
              <h4>Calcular las combinaciones</h4>
              <div
                class="formula-display"
                v-html="
                  renderLatexDisplay(
                    'C(5,3) = \\binom{5}{3} = \\frac{5!}{3!(5-3)!} = \\frac{5!}{3!2!} = \\frac{5 \\times 4}{2 \\times 1} = 10',
                  )
                "
              ></div>
            </div>
          </div>

          <div class="step-card">
            <div class="step-number">4</div>
            <div class="step-content">
              <h4>Aplicar la fórmula</h4>
              <div
                class="formula-display"
                v-html="renderLatexDisplay('P(X = 3) = C(5,3) \\cdot (0.5)^3 \\cdot (0.5)^{5-3}')"
              ></div>
              <div
                class="formula-display"
                v-html="
                  renderLatexDisplay(
                    'P(X = 3) = 10 \\cdot (0.5)^3 \\cdot (0.5)^2 = 10 \\cdot 0.125 \\cdot 0.25',
                  )
                "
              ></div>
              <div
                class="formula-display"
                v-html="renderLatexDisplay('P(X = 3) = 10 \\cdot 0.03125 = 0.3125')"
              ></div>
            </div>
          </div>

          <div class="step-card">
            <div class="step-number">5</div>
            <div class="step-content">
              <h4>Interpretación</h4>
              <p>
                Hay una <strong>probabilidad del 31.25%</strong> de obtener exactamente 3 caras al
                lanzar 5 monedas. Esto significa que si repites este experimento muchas veces,
                aproximadamente 31 de cada 100 veces obtendrás exactamente 3 caras.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- MÓDULO 3: DISTRIBUCIÓN UNIFORME -->
      <div v-if="activeTab === 'uniforme'" class="content-section">
        <h2>Distribución Uniforme</h2>

        <div class="intro-box">
          <h3>⚖️ Explicación Intuitiva</h3>
          <p>
            La distribución uniforme es la más simple:
            <strong>todos los resultados tienen la misma probabilidad</strong>. Es como un dado
            justo donde cada número tiene la misma chance de salir.
          </p>
        </div>

        <div class="detailed-example">
          <h3>🎲 Distribución Uniforme Discreta</h3>
          <p>Cuando tienes un número finito de valores, todos igualmente probables.</p>
          <div class="formula-section">
            <h3>Fórmula</h3>
            <p style="margin-bottom: 1rem">
              Si hay <strong>n valores posibles</strong>, la probabilidad de cada uno es:
            </p>
            <div
              class="formula-display"
              v-html="renderLatexDisplay('P(X = x) = \\frac{1}{n}')"
            ></div>
          </div>
          <div class="example-inline">
            <strong>Ejemplo:</strong>
            <p>
              Lanzar un dado de 6 caras. Cada número (1, 2, 3, 4, 5, 6) tiene probabilidad P(X = x)
              = 1/6 ≈ 0.1667 o 16.67%.
            </p>
          </div>
        </div>

        <div class="detailed-example">
          <h3>📏 Distribución Uniforme Continua</h3>
          <p>
            Cuando la variable puede tomar cualquier valor en un intervalo [a, b], todos igualmente
            probables.
          </p>
          <div class="formula-section">
            <h3>Función de Densidad</h3>
            <div
              class="formula-display"
              v-html="
                renderLatexDisplay(
                  'f(x) = \\begin{cases} \\frac{1}{b-a} & \\text{si } a \\leq x \\leq b \\\\ 0 & \\text{en otro caso} \\end{cases}',
                )
              "
            ></div>
            <p style="margin-top: 1rem"><strong>Probabilidad en un intervalo:</strong></p>
            <div
              class="formula-display"
              v-html="renderLatexDisplay('P(c \\leq X \\leq d) = \\frac{d - c}{b - a}')"
            ></div>
          </div>
        </div>

        <div class="detailed-example" style="margin-top: 2rem">
          <h3>📚 Ejemplo Paso a Paso: Tiempo de Espera</h3>
          <p style="margin-bottom: 1rem">
            <strong>Problema:</strong> Un autobús llega en cualquier momento entre las 8:00 y las
            8:10 (10 minutos). El tiempo de espera X está uniformemente distribuido entre 0 y 10
            minutos. ¿Cuál es la probabilidad de esperar entre 2 y 5 minutos?
          </p>

          <div class="step-card">
            <div class="step-number">1</div>
            <div class="step-content">
              <h4>Identificar los parámetros</h4>
              <ul style="line-height: 1.8">
                <li>a = 0 (tiempo mínimo de espera)</li>
                <li>b = 10 (tiempo máximo de espera)</li>
                <li>c = 2, d = 5 (intervalo de interés)</li>
              </ul>
            </div>
          </div>

          <div class="step-card">
            <div class="step-number">2</div>
            <div class="step-content">
              <h4>Aplicar la fórmula</h4>
              <div
                class="formula-display"
                v-html="
                  renderLatexDisplay(
                    'P(2 \\leq X \\leq 5) = \\frac{5 - 2}{10 - 0} = \\frac{3}{10} = 0.30',
                  )
                "
              ></div>
            </div>
          </div>

          <div class="step-card">
            <div class="step-number">3</div>
            <div class="step-content">
              <h4>Interpretación</h4>
              <p>
                Hay una <strong>probabilidad del 30%</strong> de esperar entre 2 y 5 minutos. Esto
                tiene sentido porque 3 minutos (de 2 a 5) representan el 30% del intervalo total de
                10 minutos.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- MÓDULO 4: DISTRIBUCIÓN NORMAL -->
      <div v-if="activeTab === 'normal'" class="content-section">
        <h2>Distribución Normal (Curva de Campana)</h2>

        <div class="intro-box">
          <h3>🔔 Explicación Intuitiva</h3>
          <p>
            La distribución normal es la más importante en estadística. Describe fenómenos donde la
            mayoría de los valores se agrupan cerca del promedio, y los valores extremos son raros.
            Su forma es la famosa <strong>"curva de campana"</strong>.
          </p>
        </div>

        <div class="detailed-example">
          <h3>📊 Características de la Distribución Normal</h3>
          <ul style="line-height: 1.8; margin-top: 1rem">
            <li>
              <strong>Simétrica:</strong> La mitad de los datos está a la izquierda de la media y la
              otra mitad a la derecha.
            </li>
            <li>
              <strong>Forma de campana:</strong> Los valores más probables están cerca del centro
              (la media).
            </li>
            <li>
              <strong>Asintótica:</strong> La curva se acerca cada vez más al eje horizontal pero
              nunca lo toca.
            </li>
            <li>
              <strong>Media = Mediana = Moda:</strong> Todos coinciden en el centro de la
              distribución.
            </li>
          </ul>
        </div>

        <div class="formula-section">
          <h3>Parámetros de la Distribución Normal</h3>
          <p style="margin-bottom: 1rem">
            La distribución normal se denota como
            <span v-html="renderLatex('N(\\mu, \\sigma^2)')"></span> o
            <span v-html="renderLatex('N(\\mu, \\sigma)')"></span> y tiene dos parámetros:
          </p>
          <ul style="line-height: 1.8">
            <li>
              <strong><span v-html="renderLatex('\\mu')"></span> (mu):</strong> La media, determina
              el centro de la curva.
            </li>
            <li>
              <strong><span v-html="renderLatex('\\sigma')"></span> (sigma):</strong> La desviación
              estándar, determina qué tan dispersos están los datos (ancho de la campana).
            </li>
          </ul>
        </div>

        <div class="visual-placeholder">
          <div class="placeholder-box">
            <h4>📊 Visualización: Curva Normal</h4>
            <div
              style="
                display: flex;
                justify-content: center;
                padding: 2rem;
                background: white;
                border-radius: 8px;
                margin: 1rem 0;
              "
            >
              <img
                src="@/assets/distribucion-z.webp"
                alt="Distribución Normal Estándar (Z)"
                style="max-width: 100%; height: auto; border-radius: 8px"
              />
            </div>
            <p style="font-style: italic; color: #666">
              <strong>Interpretación:</strong> La curva muestra cómo se distribuyen los datos
              alrededor de la media (μ). El área sombreada representa aproximadamente el 68% de los
              datos (dentro de 1 desviación estándar).
            </p>
          </div>
        </div>

        <div class="analogy-box" style="margin-top: 2rem">
          <h3>🔑 Regla Empírica (68-95-99.7)</h3>
          <p>
            Esta es una de las propiedades más útiles de la distribución normal. Te dice qué
            porcentaje de los datos cae dentro de cierta distancia de la media:
          </p>
          <ul style="line-height: 2; margin-top: 1rem">
            <li>
              <strong>68%</strong> de los datos están dentro de
              <strong>1 desviación estándar</strong> de la media (entre μ-σ y μ+σ)
            </li>
            <li>
              <strong>95%</strong> de los datos están dentro de
              <strong>2 desviaciones estándar</strong> (entre μ-2σ y μ+2σ)
            </li>
            <li>
              <strong>99.7%</strong> de los datos están dentro de
              <strong>3 desviaciones estándar</strong> (entre μ-3σ y μ+3σ)
            </li>
          </ul>
        </div>

        <!-- DISTRIBUCIÓN NORMAL ESTÁNDAR (Z) -->
        <h3 style="margin-top: 2rem">Distribución Normal Estándar (Z)</h3>

        <div class="intro-box">
          <h3>🎯 ¿Qué es la Distribución Normal Estándar?</h3>
          <p>
            La <strong>distribución normal estándar</strong> es una distribución normal especial con
            <strong>media μ = 0</strong> y <strong>desviación estándar σ = 1</strong>. Se denota
            como <span v-html="renderLatex('Z \\sim N(0,1)')"></span>.
          </p>
          <p style="margin-top: 1rem">
            <strong>¿Por qué es importante?</strong> Cualquier distribución normal se puede
            <strong>transformar</strong> a la distribución normal estándar usando el puntaje Z. Esto
            nos permite usar una sola tabla (la tabla Z) para calcular probabilidades de cualquier
            distribución normal.
          </p>
        </div>

        <div class="formula-section">
          <h3>Fórmula de Estandarización (Puntaje Z)</h3>
          <p style="margin-bottom: 1rem">
            Para convertir cualquier valor X de una distribución normal a su puntaje Z equivalente:
          </p>
          <div
            class="formula-display"
            v-html="renderLatexDisplay('Z = \\frac{X - \\mu}{\\sigma}')"
          ></div>
          <p style="margin-top: 1rem"><strong>Donde:</strong></p>
          <ul style="line-height: 1.8">
            <li><span v-html="renderLatex('X')"></span> = valor original</li>
            <li><span v-html="renderLatex('\\mu')"></span> = media de la distribución</li>
            <li><span v-html="renderLatex('\\sigma')"></span> = desviación estándar</li>
            <li>
              <span v-html="renderLatex('Z')"></span> = puntaje estandarizado (número de
              desviaciones estándar desde la media)
            </li>
          </ul>
        </div>

        <div class="analogy-box">
          <h3>💡 Interpretación del Puntaje Z</h3>
          <p>
            El puntaje Z te dice <strong>cuántas desviaciones estándar</strong> está un valor de la
            media:
          </p>
          <ul style="line-height: 1.8; margin-top: 1rem">
            <li><strong>Z = 0:</strong> El valor está exactamente en la media</li>
            <li>
              <strong>Z = 1:</strong> El valor está 1 desviación estándar por encima de la media
            </li>
            <li>
              <strong>Z = -1:</strong> El valor está 1 desviación estándar por debajo de la media
            </li>
            <li>
              <strong>Z = 2.5:</strong> El valor está 2.5 desviaciones estándar por encima de la
              media
            </li>
            <li>
              <strong>Z = -1.8:</strong> El valor está 1.8 desviaciones estándar por debajo de la
              media
            </li>
          </ul>
        </div>

        <div class="detailed-example" style="margin-top: 2rem">
          <h3>📚 Ejemplo 1: Calculando Puntajes Z</h3>
          <p style="margin-bottom: 1rem">
            <strong>Problema:</strong> Las calificaciones de un examen siguen una distribución
            normal con μ = 75 y σ = 10. Calcula el puntaje Z para las siguientes calificaciones:
          </p>

          <div class="step-card">
            <div class="step-number">1</div>
            <div class="step-content">
              <h4>Calificación de 85</h4>
              <div
                class="formula-display"
                v-html="renderLatexDisplay('Z = \\frac{85 - 75}{10} = \\frac{10}{10} = 1.0')"
              ></div>
              <p>
                <strong>Interpretación:</strong> Una calificación de 85 está
                <strong>1 desviación estándar por encima</strong> de la media.
              </p>
            </div>
          </div>

          <div class="step-card">
            <div class="step-number">2</div>
            <div class="step-content">
              <h4>Calificación de 60</h4>
              <div
                class="formula-display"
                v-html="renderLatexDisplay('Z = \\frac{60 - 75}{10} = \\frac{-15}{10} = -1.5')"
              ></div>
              <p>
                <strong>Interpretación:</strong> Una calificación de 60 está
                <strong>1.5 desviaciones estándar por debajo</strong> de la media.
              </p>
            </div>
          </div>

          <div class="step-card">
            <div class="step-number">3</div>
            <div class="step-content">
              <h4>Calificación de 75</h4>
              <div
                class="formula-display"
                v-html="renderLatexDisplay('Z = \\frac{75 - 75}{10} = \\frac{0}{10} = 0')"
              ></div>
              <p>
                <strong>Interpretación:</strong> Una calificación de 75 está
                <strong>exactamente en la media</strong>.
              </p>
            </div>
          </div>
        </div>

        <h3 style="margin-top: 2rem">Uso de la Tabla Z</h3>

        <div class="detailed-example">
          <h3>📊 ¿Cómo usar la Tabla Z?</h3>
          <p>
            La tabla Z nos da la <strong>probabilidad acumulada</strong> desde -∞ hasta un valor Z
            específico. Es decir, P(Z ≤ z).
          </p>

          <div class="tip-section" style="margin-top: 1rem">
            <p><strong>Valores importantes de la tabla Z:</strong></p>
            <ul style="line-height: 1.8; margin-top: 0.5rem">
              <li>P(Z ≤ 0) = 0.5000 (50% de los datos están por debajo de la media)</li>
              <li>P(Z ≤ 1) = 0.8413 (84.13% de los datos están por debajo de Z=1)</li>
              <li>P(Z ≤ -1) = 0.1587 (15.87% de los datos están por debajo de Z=-1)</li>
              <li>P(Z ≤ 2) = 0.9772 (97.72% de los datos están por debajo de Z=2)</li>
              <li>P(Z ≤ 1.96) = 0.9750 (97.5% - valor crítico para 95% de confianza)</li>
            </ul>
          </div>

          <div class="analogy-box" style="margin-top: 1rem">
            <h3>🔑 Reglas para usar la Tabla Z</h3>
            <ul style="line-height: 1.8; margin-top: 1rem">
              <li><strong>P(Z ≤ z):</strong> Busca directamente en la tabla</li>
              <li><strong>P(Z ≥ z):</strong> Calcula 1 - P(Z ≤ z)</li>
              <li><strong>P(a ≤ Z ≤ b):</strong> Calcula P(Z ≤ b) - P(Z ≤ a)</li>
              <li><strong>Para Z negativos:</strong> Usa la simetría: P(Z ≤ -z) = 1 - P(Z ≤ z)</li>
            </ul>
          </div>
        </div>

        <div class="detailed-example" style="margin-top: 2rem">
          <h3>📚 Ejemplo 2: Probabilidades con Puntajes Z</h3>
          <p style="margin-bottom: 1rem">
            <strong>Problema:</strong> Las alturas de estudiantes siguen N(170, 10). Calcula:
          </p>
          <ul style="line-height: 1.8">
            <li>a) P(X ≤ 180)</li>
            <li>b) P(X ≥ 185)</li>
            <li>c) P(165 ≤ X ≤ 180)</li>
          </ul>

          <div class="step-card">
            <div class="step-number">1</div>
            <div class="step-content">
              <h4>Parte a) P(X ≤ 180)</h4>
              <p style="margin-bottom: 0.5rem"><strong>Paso 1:</strong> Estandarizar</p>
              <div
                class="formula-display"
                v-html="renderLatexDisplay('Z = \\frac{180 - 170}{10} = \\frac{10}{10} = 1.0')"
              ></div>
              <p style="margin-top: 0.5rem"><strong>Paso 2:</strong> Buscar en tabla Z</p>
              <p>P(Z ≤ 1.0) = 0.8413</p>
              <p style="margin-top: 0.5rem">
                <strong>Respuesta:</strong> El 84.13% de los estudiantes miden 180 cm o menos.
              </p>
            </div>
          </div>

          <div class="step-card">
            <div class="step-number">2</div>
            <div class="step-content">
              <h4>Parte b) P(X ≥ 185)</h4>
              <p style="margin-bottom: 0.5rem"><strong>Paso 1:</strong> Estandarizar</p>
              <div
                class="formula-display"
                v-html="renderLatexDisplay('Z = \\frac{185 - 170}{10} = \\frac{15}{10} = 1.5')"
              ></div>
              <p style="margin-top: 0.5rem"><strong>Paso 2:</strong> Buscar en tabla Z</p>
              <p>P(Z ≤ 1.5) = 0.9332</p>
              <p style="margin-top: 0.5rem"><strong>Paso 3:</strong> Calcular complemento</p>
              <div
                class="formula-display"
                v-html="
                  renderLatexDisplay('P(Z \\geq 1.5) = 1 - P(Z \\leq 1.5) = 1 - 0.9332 = 0.0668')
                "
              ></div>
              <p><strong>Respuesta:</strong> El 6.68% de los estudiantes miden 185 cm o más.</p>
            </div>
          </div>

          <div class="step-card">
            <div class="step-number">3</div>
            <div class="step-content">
              <h4>Parte c) P(165 ≤ X ≤ 180)</h4>
              <p style="margin-bottom: 0.5rem">
                <strong>Paso 1:</strong> Estandarizar ambos valores
              </p>
              <div
                class="formula-display"
                v-html="renderLatexDisplay('Z_1 = \\frac{165 - 170}{10} = -0.5')"
              ></div>
              <div
                class="formula-display"
                v-html="renderLatexDisplay('Z_2 = \\frac{180 - 170}{10} = 1.0')"
              ></div>
              <p style="margin-top: 0.5rem"><strong>Paso 2:</strong> Buscar en tabla Z</p>
              <ul style="line-height: 1.8">
                <li>P(Z ≤ -0.5) = 0.3085</li>
                <li>P(Z ≤ 1.0) = 0.8413</li>
              </ul>
              <p style="margin-top: 0.5rem"><strong>Paso 3:</strong> Calcular diferencia</p>
              <div
                class="formula-display"
                v-html="
                  renderLatexDisplay(
                    'P(-0.5 \\leq Z \\leq 1.0) = P(Z \\leq 1.0) - P(Z \\leq -0.5) = 0.8413 - 0.3085 = 0.5328',
                  )
                "
              ></div>
              <p>
                <strong>Respuesta:</strong> El 53.28% de los estudiantes miden entre 165 cm y 180
                cm.
              </p>
            </div>
          </div>
        </div>

        <div class="detailed-example" style="margin-top: 2rem">
          <h3>📚 Ejemplo 3: Encontrar Valores a partir de Probabilidades</h3>
          <p style="margin-bottom: 1rem">
            <strong>Problema:</strong> Las calificaciones siguen N(75, 10). ¿Qué calificación separa
            el 10% superior de los estudiantes?
          </p>

          <div class="step-card">
            <div class="step-number">1</div>
            <div class="step-content">
              <h4>Entender el problema</h4>
              <p>
                Queremos encontrar X tal que P(X ≥ x) = 0.10, o equivalentemente P(X ≤ x) = 0.90
              </p>
            </div>
          </div>

          <div class="step-card">
            <div class="step-number">2</div>
            <div class="step-content">
              <h4>Buscar Z en la tabla</h4>
              <p>
                Buscamos en la tabla Z el valor que corresponde a una probabilidad acumulada de 0.90
              </p>
              <p style="margin-top: 0.5rem">Z ≈ 1.28 (porque P(Z ≤ 1.28) ≈ 0.90)</p>
            </div>
          </div>

          <div class="step-card">
            <div class="step-number">3</div>
            <div class="step-content">
              <h4>Despejar X de la fórmula Z</h4>
              <p style="margin-bottom: 0.5rem">De la fórmula Z = (X - μ)/σ, despejamos X:</p>
              <div
                class="formula-display"
                v-html="renderLatexDisplay('X = \\mu + Z \\cdot \\sigma')"
              ></div>
              <div
                class="formula-display"
                v-html="renderLatexDisplay('X = 75 + 1.28 \\times 10 = 75 + 12.8 = 87.8')"
              ></div>
            </div>
          </div>

          <div class="step-card">
            <div class="step-number">4</div>
            <div class="step-content">
              <h4>Interpretación</h4>
              <p>
                <strong>Respuesta:</strong> Una calificación de aproximadamente
                <strong>87.8 puntos</strong> separa el 10% superior de los estudiantes. Es decir,
                solo el 10% de los estudiantes obtiene 87.8 o más.
              </p>
            </div>
          </div>
        </div>

        <div class="detailed-example" style="margin-top: 2rem">
          <h3>📚 Ejemplo Paso a Paso: Alturas de Estudiantes</h3>
          <p style="margin-bottom: 1rem">
            <strong>Problema:</strong> Las alturas de estudiantes universitarios siguen una
            distribución normal con media μ = 170 cm y desviación estándar σ = 10 cm. Usa la regla
            empírica para responder:
          </p>
          <ul style="line-height: 1.8">
            <li>a) ¿Entre qué alturas se encuentra el 68% de los estudiantes?</li>
            <li>b) ¿Entre qué alturas se encuentra el 95% de los estudiantes?</li>
            <li>c) ¿Qué porcentaje de estudiantes mide más de 190 cm?</li>
          </ul>

          <div class="step-card">
            <div class="step-number">1</div>
            <div class="step-content">
              <h4>Identificar los parámetros</h4>
              <ul style="line-height: 1.8">
                <li>μ = 170 cm (media)</li>
                <li>σ = 10 cm (desviación estándar)</li>
              </ul>
            </div>
          </div>

          <div class="step-card">
            <div class="step-number">2</div>
            <div class="step-content">
              <h4>Parte a) 68% de los estudiantes</h4>
              <p style="margin-bottom: 0.5rem">El 68% está dentro de 1 desviación estándar:</p>
              <div
                class="formula-display"
                v-html="
                  renderLatexDisplay(
                    '[\\mu - \\sigma, \\mu + \\sigma] = [170 - 10, 170 + 10] = [160, 180]',
                  )
                "
              ></div>
              <p><strong>Respuesta:</strong> Entre 160 cm y 180 cm</p>
            </div>
          </div>

          <div class="step-card">
            <div class="step-number">3</div>
            <div class="step-content">
              <h4>Parte b) 95% de los estudiantes</h4>
              <p style="margin-bottom: 0.5rem">El 95% está dentro de 2 desviaciones estándar:</p>
              <div
                class="formula-display"
                v-html="
                  renderLatexDisplay(
                    '[\\mu - 2\\sigma, \\mu + 2\\sigma] = [170 - 20, 170 + 20] = [150, 190]',
                  )
                "
              ></div>
              <p><strong>Respuesta:</strong> Entre 150 cm y 190 cm</p>
            </div>
          </div>

          <div class="step-card">
            <div class="step-number">4</div>
            <div class="step-content">
              <h4>Parte c) Estudiantes con más de 190 cm</h4>
              <p style="margin-bottom: 0.5rem">
                190 cm = μ + 2σ. Sabemos que el 95% está entre μ-2σ y μ+2σ, entonces el 5% restante
                está fuera de ese rango. Por simetría, la mitad (2.5%) está por debajo de 150 cm y
                la otra mitad (2.5%) está por encima de 190 cm.
              </p>
              <p>
                <strong>Respuesta:</strong> Aproximadamente el 2.5% de los estudiantes mide más de
                190 cm
              </p>
            </div>
          </div>

          <div class="step-card">
            <div class="step-number">5</div>
            <div class="step-content">
              <h4>Interpretación General</h4>
              <p>
                La regla empírica nos permite hacer estimaciones rápidas sin necesidad de tablas o
                calculadoras. Es especialmente útil para identificar valores inusuales: cualquier
                valor más allá de 3 desviaciones estándar (μ ± 3σ) es extremadamente raro (menos del
                0.3% de probabilidad).
              </p>
            </div>
          </div>
        </div>

        <div class="tip-section" style="margin-top: 2rem">
          <p>
            <strong>💡 Aplicaciones de la Distribución Normal:</strong> La distribución normal
            aparece en muchos fenómenos naturales y sociales: alturas, pesos, calificaciones de
            exámenes, errores de medición, tiempos de reacción, y muchos más. Es la base de muchas
            técnicas estadísticas avanzadas.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import katex from 'katex'
import 'katex/dist/katex.min.css'
import { ref } from 'vue'

const tabs = [
  { id: 'variables', label: 'Variables Aleatorias' },
  { id: 'binomial', label: 'Binomial' },
  { id: 'uniforme', label: 'Uniforme' },
  { id: 'normal', label: 'Normal' },
]

const activeTab = ref('variables')

const renderLatex = (latex: string): string => {
  try {
    return katex.renderToString(latex, { throwOnError: false, displayMode: false })
  } catch (error) {
    console.error(error)
    return latex
  }
}

const renderLatexDisplay = (latex: string): string => {
  try {
    return katex.renderToString(latex, { throwOnError: false, displayMode: true })
  } catch (error) {
    console.error(error)
    return latex
  }
}
</script>

<style scoped>
@import '@/assets/styles/main.css';

.distribuciones-view {
  padding: 1rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
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
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
}

.tabs {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  background: white;
  border-radius: 50px;
  padding: 0.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.tab-button {
  border: none;
  padding: 0.7rem 1.2rem;
  background: transparent;
  color: #666;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.3s ease;
}

.tab-button:hover {
  background: #f0f0f0;
  color: var(--primary);
}

.tab-button.active {
  background: var(--primary);
  color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.content-section {
  background: white;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  margin-bottom: 2rem;
}

.content-section h2 {
  color: var(--primary);
  font-size: 2rem;
  margin-bottom: 1.5rem;
  border-bottom: 3px solid #ecf0f1;
  padding-bottom: 0.75rem;
}

.content-section h3 {
  color: #2c3e50;
  font-size: 1.3rem;
  margin: 1.5rem 0 0.75rem 0;
}

.intro-box {
  background: #e8f4f8;
  padding: 1.5rem;
  border-radius: 10px;
  border-left: 5px solid var(--primary);
  margin-bottom: 1.5rem;
}

.intro-box h3 {
  color: var(--primary);
  margin-top: 0;
}

.intro-box p,
.intro-box ul {
  line-height: 1.7;
  color: #2c3e50;
}

.analogy-box {
  background: #fff3cd;
  padding: 1.5rem;
  border-radius: 10px;
  border-left: 5px solid #ffc107;
  margin-bottom: 1.5rem;
}

.analogy-box h3 {
  color: #856404;
  margin-top: 0;
}

.analogy-box p,
.analogy-box ul {
  line-height: 1.7;
  color: #533f03;
}

.comparison-box {
  background: #e7f3ff;
  padding: 1.5rem;
  border-radius: 10px;
  border-left: 5px solid #2196f3;
  margin-bottom: 1.5rem;
}

.comparison-box h3 {
  color: #0c5460;
  margin-top: 0;
}

.concepts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.concept-card {
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  padding: 1.5rem;
  border-radius: 10px;
  border: 2px solid #e9ecef;
  transition: all 0.3s ease;
}

.concept-card:hover {
  border-color: var(--primary);
  box-shadow: 0 4px 12px rgba(33, 150, 243, 0.15);
  transform: translateY(-2px);
}

.concept-card h3 {
  color: var(--primary);
  font-size: 1.1rem;
  margin-top: 0;
}

.concept-card p {
  color: #555;
  line-height: 1.6;
  margin-bottom: 0.75rem;
}

.example-inline {
  background: white;
  padding: 0.75rem;
  border-radius: 6px;
  margin-top: 0.75rem;
}

.example-inline strong {
  color: var(--primary);
  display: block;
  margin-bottom: 0.5rem;
}

.example-inline p {
  margin: 0;
  font-size: 0.95rem;
}

.detailed-example {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 12px;
  margin: 2rem 0;
  border: 1px solid #e9ecef;
}

.detailed-example h3 {
  color: var(--primary);
  font-size: 1.25rem;
  margin-top: 0;
}

.step-card {
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  margin: 1rem 0;
  border-left: 4px solid var(--primary);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
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
  font-size: 1.1rem;
  flex-shrink: 0;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
}

.step-content h4 {
  color: var(--primary);
  font-size: 1.05rem;
  margin: 0 0 0.75rem 0;
}

.step-content p {
  color: #555;
  line-height: 1.7;
  margin: 0.5rem 0;
}

.step-content ul {
  margin: 0.75rem 0;
  padding-left: 1.5rem;
}

.step-content li {
  line-height: 1.8;
  margin: 0.4rem 0;
  color: #555;
}

.formula-section {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  margin: 1.5rem 0;
  border: 2px solid #e9ecef;
}

.formula-section h3 {
  color: var(--primary);
  margin-top: 0;
}

.formula-display {
  text-align: center;
  font-size: 1.2rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
  margin: 1rem 0;
}

.tip-section {
  background: #fff8e1;
  padding: 1.5rem;
  border-radius: 10px;
  border-left: 5px solid #ffc107;
  margin: 1.5rem 0;
}

.tip-section p {
  color: #533f03;
  line-height: 1.7;
  margin: 0.5rem 0;
}

.visual-placeholder {
  margin: 2rem 0;
}

.placeholder-box {
  background: linear-gradient(135deg, #fff9e6 0%, #fffbf0 100%);
  border: 2px dashed #ffc107;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
}

.placeholder-box h4 {
  color: #856404;
  margin-top: 0;
  font-size: 1.2rem;
}

.placeholder-box p {
  color: #533f03;
  line-height: 1.7;
  margin: 0.75rem 0;
}

.comparison-table {
  width: 100%;
  border-collapse: collapse;
  margin: 1.5rem 0;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
}

.comparison-table th {
  background: var(--primary);
  color: white;
  padding: 1rem;
  text-align: left;
  font-weight: 600;
}

.comparison-table td {
  padding: 1rem;
  border-bottom: 1px solid #e9ecef;
}

.comparison-table tr:last-child td {
  border-bottom: none;
}

.comparison-table tr:nth-child(even) {
  background: #f8f9fa;
}

.comparison-table tr:hover {
  background: #ecf0f1;
}

@media (max-width: 768px) {
  .hero {
    padding: 3rem 1.5rem;
  }

  .hero h1 {
    font-size: 2rem;
  }

  .content-section {
    padding: 1.5rem;
  }

  .content-section h2 {
    font-size: 1.5rem;
  }

  .tabs {
    gap: 0.25rem;
  }

  .tab-button {
    padding: 0.6rem 0.9rem;
    font-size: 0.85rem;
  }

  .step-card {
    flex-direction: column;
    gap: 1rem;
  }

  .step-number {
    width: 35px;
    height: 35px;
    font-size: 1rem;
  }

  .concepts-grid {
    grid-template-columns: 1fr;
  }
}
</style>
