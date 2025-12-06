<template>
  <div class="tecnicas-muestreo-view">
    <div class="container">
      <div class="hero">
        <h1>Técnicas de Muestreo</h1>
        <p>
          Aprende cómo seleccionar y calcular el tamaño de muestra para cada técnica de muestreo
          probabilístico: aleatorio simple, estratificado, sistemático y por conglomerados.
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

      <!-- MUESTREO ALEATORIO SIMPLE -->
      <div v-if="activeTab === 'simple'" class="content-section">
        <h2>Muestreo Aleatorio Simple (MAS)</h2>

        <div class="intro-box">
          <h3>🎯 Idea y Definición</h3>
          <p>
            Cada muestra posible de tamaño <span v-html="renderLatex('n')"></span> tiene la
            <strong>misma probabilidad</strong> de ser elegida.
          </p>
          <p style="margin-top: 0.5rem">
            Equivalente: cada individuo de la población tiene la misma probabilidad de entrar en la
            muestra.
          </p>
          <p class="note" style="margin-top: 1rem">
            <strong>Es el diseño base:</strong> Todo lo demás (estratificado, sistemático, etc.) se
            compara con el MAS.
          </p>
        </div>

        <div class="formula-section">
          <h3>Cómo se Selecciona</h3>
          <ol style="line-height: 2; margin-top: 1rem">
            <li>
              <strong>Tener marco muestral:</strong> Listado de los
              <span v-html="renderLatex('N')"></span> elementos numerados del 1 al
              <span v-html="renderLatex('N')"></span>
            </li>
            <li>
              <strong>Generar <span v-html="renderLatex('n')"></span> números aleatorios</strong>
              distintos entre 1 y <span v-html="renderLatex('N')"></span> (tabla, Excel, R, etc.)
            </li>
            <li><strong>Seleccionar esos elementos:</strong> ésa es la muestra</li>
          </ol>
          <p class="note" style="margin-top: 1rem">
            <strong>En Excel:</strong> Puedes usar =ALEATORIO.ENTRE(1;N)
          </p>
        </div>

        <h3 style="margin-top: 2rem">Tamaño Muestral para Media (Población Grande)</h3>

        <div class="formula-section">
          <p style="margin-bottom: 1rem">
            Supón que quieres estimar la <strong>media</strong> de una variable Y con error máximo
            <span v-html="renderLatex('B')"></span> y confianza 95%.
          </p>

          <h4>Fórmula General:</h4>
          <div
            class="formula-display"
            v-html="renderLatexDisplay('n = \\frac{Z_c^2 \\sigma^2}{B^2}')"
          ></div>

          <p style="margin-top: 1rem">
            Con 95% de confianza y usando <span v-html="renderLatex('Z_c \\approx 2')"></span>:
          </p>
          <div
            class="formula-display"
            v-html="renderLatexDisplay('n \\approx \\frac{4\\sigma^2}{B^2}')"
          ></div>

          <p style="margin-top: 1rem"><strong>Donde:</strong></p>
          <ul style="line-height: 1.8">
            <li>
              <span v-html="renderLatex('\\sigma^2')"></span> = varianza poblacional (desconocida,
              se aproxima con <span v-html="renderLatex('S^2')"></span> de un estudio previo)
            </li>
            <li><span v-html="renderLatex('B')"></span> = error máximo deseado</li>
            <li>
              <span v-html="renderLatex('Z_c')"></span> = valor crítico (1.96 para 95%, pero se
              redondea a 2)
            </li>
          </ul>

          <div class="tip-section" style="margin-top: 1rem">
            <p>
              <strong>Truco:</strong> Si no tienes <span v-html="renderLatex('\\sigma')"></span>, en
              muchas variables normales se cumple aproximadamente
              <span v-html="renderLatex('\\text{rango} \\approx 4\\sigma')"></span>, por lo que
              <span v-html="renderLatex('\\sigma \\approx \\frac{R}{4}')"></span>
            </p>
          </div>
        </div>

        <h3 style="margin-top: 2rem">Tamaño Muestral para Proporción (Población Grande)</h3>

        <div class="formula-section">
          <p style="margin-bottom: 1rem">
            Objetivo: estimar una proporción <span v-html="renderLatex('p')"></span> (ej. porcentaje
            de clientes satisfechos) con error máximo <span v-html="renderLatex('B')"></span>.
          </p>

          <h4>Fórmula:</h4>
          <div
            class="formula-display"
            v-html="renderLatexDisplay('n = \\frac{Z_c^2 \\cdot p \\cdot q}{B^2}')"
          ></div>

          <p style="margin-top: 1rem">
            Donde <span v-html="renderLatex('q = 1-p')"></span> y
            <span v-html="renderLatex('\\sigma^2 = pq = p(1-p)')"></span>
          </p>

          <p style="margin-top: 1rem"><strong>Si no conoces p:</strong></p>
          <ul style="line-height: 1.8">
            <li>
              Usa un valor preliminar <span v-html="renderLatex('\\hat{p}')"></span> de un estudio
              piloto
            </li>
            <li>
              O usa <span v-html="renderLatex('p=0.5')"></span> (caso más conservador, varianza
              máxima)
            </li>
          </ul>
        </div>

        <h3 style="margin-top: 2rem">Corrección por Población Finita (CPF)</h3>

        <div class="formula-section">
          <p style="margin-bottom: 1rem">
            Si <span v-html="renderLatex('N')"></span> no es muy grande y la muestra es una porción
            apreciable de la población, ajustas:
          </p>

          <h4>Para Media:</h4>
          <div
            class="formula-display"
            v-html="
              renderLatexDisplay(
                'n = \\frac{N \\cdot Z_c^2 \\cdot \\sigma^2}{B^2(N-1) + Z_c^2 \\cdot \\sigma^2}',
              )
            "
          ></div>

          <h4>Para Proporción:</h4>
          <div
            class="formula-display"
            v-html="
              renderLatexDisplay(
                'n = \\frac{N \\cdot Z_c^2 \\cdot p \\cdot q}{B^2(N-1) + Z_c^2 \\cdot p \\cdot q}',
              )
            "
          ></div>

          <p class="note" style="margin-top: 1rem">
            Esto es básicamente la fórmula con el factor
            <span v-html="renderLatex('\\frac{N-n}{N}')"></span> metido dentro de
            <span v-html="renderLatex('n')"></span>
          </p>
        </div>

        <div class="formula-section">
          <h3>Intervalos de Confianza en MAS</h3>
          <p style="margin-bottom: 1rem">
            <strong>Estructura general del IC:</strong> Siempre tiene la misma forma:
          </p>
          <div
            class="formula-display"
            v-html="renderLatexDisplay('\\text{Estimador} \\pm Z_c \\cdot \\text{Error estándar}')"
          ></div>

          <h4 style="margin-top: 1.5rem">IC para la Media:</h4>
          <div
            class="formula-display"
            v-html="
              renderLatexDisplay(
                '\\bar{y} \\pm Z_c \\cdot \\sqrt{\\frac{S^2}{n}\\left(\\frac{N-n}{N-1}\\right)}',
              )
            "
          ></div>
          <p style="margin-top: 0.5rem">
            Si no usas CPF (muestra ≤ 5% de N):
            <span v-html="renderLatex('\\bar{y} \\pm Z_c \\cdot \\frac{S}{\\sqrt{n}}')"></span>
          </p>

          <h4 style="margin-top: 1.5rem">IC para la Proporción:</h4>
          <div
            class="formula-display"
            v-html="
              renderLatexDisplay(
                '\\hat{p} \\pm Z_c \\cdot \\sqrt{\\frac{\\hat{p}\\hat{q}}{n}\\left(\\frac{N-n}{N-1}\\right)}',
              )
            "
          ></div>
          <p class="note" style="margin-top: 1rem">
            <strong>Lo que cambia entre técnicas de muestreo es el error estándar</strong>, porque
            la forma de seleccionar la muestra altera la varianza del estimador.
          </p>
        </div>

        <div class="detailed-example">
          <h3>📚 Ejemplo: Calcular Tamaño Muestral (Media)</h3>
          <p style="margin-bottom: 1rem">
            <strong>Problema:</strong> Quieres estimar el gasto medio mensual en supermercado.
            Tienes un estudio previo con <span v-html="renderLatex('S=40')"></span> € aprox. Quieres
            error máximo <span v-html="renderLatex('B=5')"></span> € y confianza 95%.
          </p>

          <div class="step-card">
            <div class="step-number">1</div>
            <div class="step-content">
              <h4>Aplicar la fórmula</h4>
              <div
                class="formula-display"
                v-html="
                  renderLatexDisplay(
                    'n \\approx \\frac{4 \\cdot S^2}{B^2} = \\frac{4 \\cdot 40^2}{5^2}',
                  )
                "
              ></div>
            </div>
          </div>

          <div class="step-card">
            <div class="step-number">2</div>
            <div class="step-content">
              <h4>Calcular</h4>
              <div
                class="formula-display"
                v-html="
                  renderLatexDisplay('n = \\frac{4 \\cdot 1600}{25} = \\frac{6400}{25} = 256')
                "
              ></div>
            </div>
          </div>

          <div class="step-card">
            <div class="step-number">3</div>
            <div class="step-content">
              <h4>Conclusión</h4>
              <p>Necesitas encuestar unas <strong>256 personas</strong> con MAS.</p>
            </div>
          </div>
        </div>

        <div class="detailed-example">
          <h3>📚 Ejemplo: Calcular Tamaño Muestral (Proporción)</h3>
          <p style="margin-bottom: 1rem">
            <strong>Problema:</strong> Quieres estimar la proporción de clientes satisfechos con
            error máximo <span v-html="renderLatex('B=0.05')"></span> (5%) y confianza 95%. No
            tienes información previa sobre p.
          </p>

          <div class="step-card">
            <div class="step-number">1</div>
            <div class="step-content">
              <h4>Usar p = 0.5 (caso conservador)</h4>
              <div
                class="formula-display"
                v-html="
                  renderLatexDisplay(
                    'n = \\frac{4 \\cdot p \\cdot q}{B^2} = \\frac{4 \\cdot 0.5 \\cdot 0.5}{0.05^2}',
                  )
                "
              ></div>
            </div>
          </div>

          <div class="step-card">
            <div class="step-number">2</div>
            <div class="step-content">
              <h4>Calcular</h4>
              <div
                class="formula-display"
                v-html="
                  renderLatexDisplay('n = \\frac{4 \\cdot 0.25}{0.0025} = \\frac{1}{0.0025} = 400')
                "
              ></div>
            </div>
          </div>

          <div class="step-card">
            <div class="step-number">3</div>
            <div class="step-content">
              <h4>Conclusión</h4>
              <p>
                Necesitas encuestar <strong>400 clientes</strong> para tener un margen de error del
                5%.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- MUESTREO SISTEMÁTICO -->
      <div v-if="activeTab === 'sistematico'" class="content-section">
        <h2>Muestreo Sistemático</h2>

        <div class="intro-box">
          <h3>🎯 Idea y Definición</h3>
          <p>
            Se selecciona <strong>1 de cada k elementos</strong> de una lista ordenada, empezando en
            un punto aleatorio.
          </p>
          <p style="margin-top: 0.5rem">
            <strong>Ventaja:</strong> Muy simple de aplicar y da buena cobertura de la población.
          </p>
        </div>

        <div class="formula-section">
          <h3>Cómo se Selecciona</h3>
          <ol style="line-height: 2; margin-top: 1rem">
            <li>
              <strong>Calcular el intervalo k:</strong> Dividir el tamaño de la población
              <span v-html="renderLatex('N')"></span> entre el tamaño de muestra
              <span v-html="renderLatex('n')"></span>:
              <div
                class="formula-display"
                v-html="renderLatexDisplay('k = \\left\\lfloor \\frac{N}{n} \\right\\rfloor')"
              ></div>
            </li>
            <li>
              <strong>Arranque aleatorio:</strong> Seleccionar un número
              <span v-html="renderLatex('r')"></span> al azar entre 1 y k
            </li>
            <li>
              <strong>Seleccionar elementos:</strong> Tomar los elementos en las posiciones r, r+k,
              r+2k, r+3k, ..., hasta completar n elementos
            </li>
          </ol>
        </div>

        <div class="formula-section">
          <h3>Tamaño Muestral e Intervalo de Confianza</h3>
          <p style="margin-bottom: 1rem">
            Cuando la población <strong>no tiene periodicidad</strong>, el muestreo sistemático usa
            las <strong>mismas fórmulas que MAS</strong>:
          </p>

          <h4>Tamaño de muestra:</h4>
          <p>Usa las fórmulas de MAS (media o proporción).</p>

          <h4 style="margin-top: 1rem">Intervalo de Confianza:</h4>
          <div
            class="formula-display"
            v-html="
              renderLatexDisplay(
                '\\bar{y}_{sy} \\pm Z_c \\cdot \\sqrt{\\frac{S^2}{n}\\left(\\frac{N-n}{N-1}\\right)}',
              )
            "
          ></div>
          <p style="margin-top: 0.5rem">
            <strong>Justificación:</strong> A falta de información adicional sobre la estructura de
            la población, se usa el mismo estimador de varianza que el MAS.
          </p>
          <p class="note" style="margin-top: 0.5rem">
            <strong>Excepción:</strong> Si la población tiene un patrón periódico o de tendencia, la
            varianza real puede ser mayor o menor. En cursos introductorios no se corrige—se usa el
            MAS.
          </p>
        </div>

        <div class="detailed-example">
          <h3>📚 Ejemplo Completo: Control de Calidad en Producción</h3>
          <p style="margin-bottom: 1rem">
            <strong>Contexto:</strong> Una fábrica produce N = 5,000 piezas diarias. Quieres estimar
            el porcentaje de piezas defectuosas. Históricamente, p ≈ 0.10 (10% defectuosas). Quieres
            un error de 3% con 95% de confianza.
          </p>

          <div class="step-card">
            <div class="step-number">1</div>
            <div class="step-content">
              <h4>Calcular n con fórmula de MAS (proporción)</h4>
              <p>Sin CPF:</p>
              <div
                class="formula-display"
                v-html="
                  renderLatexDisplay(
                    'n_0 = \\frac{4 \\cdot p \\cdot q}{B^2} = \\frac{4 \\cdot 0.10 \\cdot 0.90}{0.03^2} = \\frac{0.36}{0.0009} = 400',
                  )
                "
              ></div>
              <p style="margin-top: 0.5rem">Con CPF:</p>
              <div
                class="formula-display"
                v-html="
                  renderLatexDisplay(
                    'n = \\frac{400}{1 + \\frac{399}{5000}} = \\frac{400}{1.0798} \\approx 370',
                  )
                "
              ></div>
              <p style="margin-top: 0.5rem">
                Necesitamos inspeccionar <strong>n = 370 piezas</strong>.
              </p>
            </div>
          </div>

          <div class="step-card">
            <div class="step-number">2</div>
            <div class="step-content">
              <h4>Calcular el intervalo k</h4>
              <div
                class="formula-display"
                v-html="
                  renderLatexDisplay('k = \\left\\lfloor \\frac{5000}{370} \\right\\rfloor = 13')
                "
              ></div>
              <p>Vamos a inspeccionar 1 de cada 13 piezas.</p>
            </div>
          </div>

          <div class="step-card">
            <div class="step-number">3</div>
            <div class="step-content">
              <h4>Seleccionar arranque aleatorio</h4>
              <p>
                Genera un número aleatorio entre 1 y 13. Supongamos que sale <strong>r = 5</strong>.
              </p>
            </div>
          </div>

          <div class="step-card">
            <div class="step-number">4</div>
            <div class="step-content">
              <h4>Inspeccionar las piezas seleccionadas</h4>
              <p>Inspecciona las piezas en las posiciones:</p>
              <p style="margin-top: 0.5rem">
                <strong>5, 18, 31, 44, 57, 70, ..., 4981, 4994</strong>
              </p>
              <p style="margin-top: 0.5rem">
                Fórmula: Posición = 5 + 13i, donde i = 0, 1, 2, ..., 369
              </p>
            </div>
          </div>

          <div class="step-card">
            <div class="step-number">5</div>
            <div class="step-content">
              <h4>Calcular proporción muestral</h4>
              <p>Supongamos que encontraste 40 piezas defectuosas de las 370 inspeccionadas:</p>
              <div
                class="formula-display"
                v-html="renderLatexDisplay('\\hat{p} = \\frac{40}{370} = 0.108 = 10.8\\%')"
              ></div>
            </div>
          </div>

          <div class="step-card">
            <div class="step-number">6</div>
            <div class="step-content">
              <h4>Calcular error estándar (con CPF)</h4>
              <p>Cuando no hay periodicidad, usamos la misma fórmula que MAS:</p>
              <div
                class="formula-display"
                v-html="
                  renderLatexDisplay('SE = \\sqrt{\\frac{p \\cdot q}{n} \\cdot \\frac{N-n}{N-1}}')
                "
              ></div>
              <div
                class="formula-display"
                v-html="
                  renderLatexDisplay(
                    'SE = \\sqrt{\\frac{0.108 \\times 0.892}{370} \\cdot \\frac{4630}{4999}} = \\sqrt{0.000261 \\times 0.926} = 0.0155',
                  )
                "
              ></div>
            </div>
          </div>

          <div class="step-card">
            <div class="step-number">7</div>
            <div class="step-content">
              <h4>Construir intervalo de confianza (95%)</h4>
              <div
                class="formula-display"
                v-html="
                  renderLatexDisplay(
                    'IC = 0.108 \\pm 1.96(0.0155) = 0.108 \\pm 0.030 = [0.078, 0.138]',
                  )
                "
              ></div>
              <p style="margin-top: 0.5rem">
                <strong>Conclusión:</strong> El porcentaje de piezas defectuosas es 10.8%, con 95%
                de confianza el valor real está entre 7.8% y 13.8%.
              </p>
              <p style="margin-top: 0.5rem">
                <strong>Ventaja del sistemático:</strong> Solo generaste 1 número aleatorio en lugar
                de 370, facilitando mucho la selección en la línea de producción.
              </p>
            </div>
          </div>
        </div>

        <div class="analogy-box" style="margin-top: 2rem">
          <h3>⚠️ Cuidado con Patrones Periódicos</h3>
          <p>
            El muestreo sistemático puede dar problemas si la lista tiene un patrón que se repite
            cada k elementos. Por ejemplo, si k = 7 y la lista tiene un ciclo semanal, siempre
            caerías en el mismo día de la semana.
          </p>
          <p style="margin-top: 0.5rem">
            <strong>Solución:</strong> Verifica que la lista no tenga patrones periódicos, o usa MAS
            si sospechas que existen.
          </p>
        </div>
      </div>

      <!-- MUESTREO ESTRATIFICADO -->
      <div v-if="activeTab === 'estratificado'" class="content-section">
        <h2>Muestreo Estratificado</h2>

        <div class="intro-box">
          <h3>🎯 Idea y Definición</h3>
          <p>
            Se <strong>divide la población en estratos</strong> (subgrupos homogéneos internamente
            pero distintos entre sí), y luego se aplica <strong>MAS dentro de cada estrato</strong>.
          </p>
          <p style="margin-top: 0.5rem">
            <strong>Ventaja:</strong> Reduce la variabilidad total y asegura representación de todos
            los estratos.
          </p>
        </div>

        <div class="formula-section">
          <h3>Cómo se Selecciona</h3>
          <ol style="line-height: 2; margin-top: 1rem">
            <li>
              <strong>Definir estratos:</strong> Dividir la población de
              <span v-html="renderLatex('N')"></span> elementos en
              <span v-html="renderLatex('L')"></span> estratos no traslapados
            </li>
            <li>
              <strong>Determinar tamaños:</strong> Cada estrato h tiene
              <span v-html="renderLatex('N_h')"></span> elementos (con
              <span v-html="renderLatex('\\sum N_h = N')"></span>)
            </li>
            <li>
              <strong>Asignar muestra a cada estrato:</strong> Decidir cuántos elementos
              <span v-html="renderLatex('n_h')"></span> tomar de cada estrato
            </li>
            <li>
              <strong>Aplicar MAS en cada estrato:</strong> Seleccionar
              <span v-html="renderLatex('n_h')"></span> elementos aleatoriamente dentro de cada
              estrato h
            </li>
          </ol>
        </div>

        <div class="formula-section">
          <h3>Notación Básica</h3>
          <ul style="line-height: 1.8">
            <li><span v-html="renderLatex('L')"></span> = número de estratos</li>
            <li><span v-html="renderLatex('N_h')"></span> = tamaño del estrato h</li>
            <li><span v-html="renderLatex('n_h')"></span> = tamaño de muestra del estrato h</li>
            <li><span v-html="renderLatex('W_h = \\frac{N_h}{N}')"></span> = peso del estrato h</li>
          </ul>
        </div>

        <div class="formula-section">
          <h3>Asignación Proporcional (la más común)</h3>
          <p style="margin-bottom: 1rem">
            El tamaño de muestra de cada estrato es proporcional al tamaño del estrato:
          </p>
          <div
            class="formula-display"
            v-html="renderLatexDisplay('n_h = n \\cdot \\frac{N_h}{N}')"
          ></div>
          <p style="margin-top: 1rem">
            Donde <span v-html="renderLatex('n')"></span> es el tamaño total de la muestra que
            quieres obtener.
          </p>
        </div>

        <div class="formula-section">
          <h3>Tamaño Muestral Total</h3>
          <p style="margin-bottom: 1rem">
            <strong>Procedimiento práctico:</strong>
          </p>
          <ol style="line-height: 2">
            <li>
              Estima la varianza global de la población (puedes usar la varianza promedio ponderada
              entre estratos si conoces <span v-html="renderLatex('\\sigma_h')"></span> de cada
              estrato, o una estimación preliminar)
            </li>
            <li>
              Usa las fórmulas de MAS para calcular <span v-html="renderLatex('n')"></span> total
              (media o proporción)
            </li>
            <li>
              Distribuye <span v-html="renderLatex('n')"></span> entre los estratos usando
              asignación proporcional: <span v-html="renderLatex('n_h = n \\cdot (N_h/N)')"></span>
            </li>
          </ol>
        </div>

        <div class="formula-section">
          <h3>Media Estratificada e Intervalo de Confianza</h3>
          <p style="margin-bottom: 1rem">
            El estimador de la media poblacional es el <strong>promedio ponderado</strong> de las
            medias de cada estrato:
          </p>
          <div
            class="formula-display"
            v-html="renderLatexDisplay('\\bar{y}_{st} = \\sum_{h=1}^{L} W_h \\bar{y}_h')"
          ></div>
          <p style="margin-top: 1rem">
            Donde <span v-html="renderLatex('W_h = \\frac{N_h}{N}')"></span> es el peso del estrato
            h y <span v-html="renderLatex('\\bar{y}_h')"></span> es la media muestral del estrato h.
          </p>
        </div>

        <div class="formula-section">
          <h3>Varianza del Estimador</h3>
          <p style="margin-bottom: 1rem">
            <strong>Diferencia clave con MAS:</strong> No puedes usar la varianza simple del MAS.
            Debes combinar las varianzas dentro de cada estrato:
          </p>
          <div
            class="formula-display"
            v-html="
              renderLatexDisplay(
                'V(\\bar{y}_{st}) = \\sum_{h=1}^{L} W_h^2 \\cdot \\frac{S_h^2}{n_h} \\left(\\frac{N_h - n_h}{N_h - 1}\\right)',
              )
            "
          ></div>
          <p style="margin-top: 1rem">
            Donde <span v-html="renderLatex('S_h^2')"></span> es la varianza muestral del estrato h.
          </p>
          <p style="margin-top: 0.5rem">
            <strong>Nota:</strong> El término
            <span v-html="renderLatex('\\left(\\frac{N_h - n_h}{N_h - 1}\\right)')"></span> es el
            CPF por estrato. Si <span v-html="renderLatex('n_h/N_h \\leq 0.05')"></span> en todos
            los estratos, se puede omitir.
          </p>
        </div>

        <div class="formula-section">
          <h3>Intervalo de Confianza</h3>
          <p style="margin-bottom: 1rem">
            El IC tiene la misma estructura que en MAS, pero con el error estándar del estimador
            estratificado:
          </p>
          <div
            class="formula-display"
            v-html="
              renderLatexDisplay(
                'IC: \\quad \\bar{y}_{st} \\pm Z_c \\cdot \\sqrt{V(\\bar{y}_{st})}',
              )
            "
          ></div>
          <p style="margin-top: 1rem">
            Para 95% de confianza, <span v-html="renderLatex('Z_c = 1.96')"></span>.
          </p>
        </div>

        <div class="detailed-example">
          <h3>📚 Ejemplo Completo: Nivel de Estrés en Universidad</h3>
          <p style="margin-bottom: 1rem">
            <strong>Contexto:</strong> Una universidad con N = 1,000 estudiantes (divididos en 3
            carreras) quiere estimar el nivel promedio de estrés (escala 0-100). Estudios previos
            indican que σ ≈ 15. Se quiere un error máximo de 3 puntos con 95% de confianza.
          </p>
          <ul style="line-height: 1.8">
            <li>Ingeniería: N₁ = 600 estudiantes</li>
            <li>Ciencias: N₂ = 300 estudiantes</li>
            <li>Humanidades: N₃ = 100 estudiantes</li>
          </ul>

          <div class="step-card">
            <div class="step-number">1</div>
            <div class="step-content">
              <h4>Calcular n total con fórmula de MAS</h4>
              <p>Primero calculamos sin CPF:</p>
              <div
                class="formula-display"
                v-html="
                  renderLatexDisplay(
                    'n_0 = \\frac{4 \\cdot S^2}{B^2} = \\frac{4 \\cdot 15^2}{3^2} = \\frac{900}{9} = 100',
                  )
                "
              ></div>
              <p style="margin-top: 0.5rem">Aplicando CPF (N=1,000 no es muy grande):</p>
              <div
                class="formula-display"
                v-html="
                  renderLatexDisplay(
                    'n = \\frac{100}{1 + \\frac{99}{1000}} = \\frac{100}{1.099} \\approx 91',
                  )
                "
              ></div>
              <p style="margin-top: 0.5rem">
                Redondeamos a <strong>n = 100</strong> para facilitar cálculos.
              </p>
            </div>
          </div>

          <div class="step-card">
            <div class="step-number">2</div>
            <div class="step-content">
              <h4>Distribuir n entre estratos (asignación proporcional)</h4>
              <div
                class="formula-display"
                v-html="renderLatexDisplay('n_1 = 100 \\times \\frac{600}{1000} = 60')"
              ></div>
              <div
                class="formula-display"
                v-html="renderLatexDisplay('n_2 = 100 \\times \\frac{300}{1000} = 30')"
              ></div>
              <div
                class="formula-display"
                v-html="renderLatexDisplay('n_3 = 100 \\times \\frac{100}{1000} = 10')"
              ></div>
            </div>
          </div>

          <div class="step-card">
            <div class="step-number">3</div>
            <div class="step-content">
              <h4>Seleccionar la muestra (MAS en cada estrato)</h4>
              <ul style="line-height: 1.8">
                <li>
                  <strong>Ingeniería:</strong> Numera los 600 estudiantes (1-600) y selecciona 60
                  aleatoriamente
                </li>
                <li>
                  <strong>Ciencias:</strong> Numera los 300 estudiantes (1-300) y selecciona 30
                  aleatoriamente
                </li>
                <li>
                  <strong>Humanidades:</strong> Numera los 100 estudiantes (1-100) y selecciona 10
                  aleatoriamente
                </li>
              </ul>
            </div>
          </div>

          <div class="step-card">
            <div class="step-number">4</div>
            <div class="step-content">
              <h4>Calcular media estratificada</h4>
              <p>Supongamos que los resultados por estrato fueron:</p>
              <ul style="line-height: 1.8">
                <li>Ingeniería: x̄₁ = 72, S₁ = 14</li>
                <li>Ciencias: x̄₂ = 65, S₂ = 16</li>
                <li>Humanidades: x̄₃ = 58, S₃ = 12</li>
              </ul>
              <p style="margin-top: 0.5rem">Media estratificada (promedio ponderado):</p>
              <div
                class="formula-display"
                v-html="
                  renderLatexDisplay(
                    '\\bar{y}_{st} = 0.6(72) + 0.3(65) + 0.1(58) = 43.2 + 19.5 + 5.8 = 68.5',
                  )
                "
              ></div>
            </div>
          </div>

          <div class="step-card">
            <div class="step-number">5</div>
            <div class="step-content">
              <h4>Calcular varianza del estimador (con CPF)</h4>
              <p>Contribución de cada estrato con corrección por población finita:</p>
              <div
                class="formula-display"
                v-html="
                  renderLatexDisplay(
                    'V(\\bar{y}_{st}) = \\sum W_h^2 \\frac{S_h^2}{n_h} \\cdot \\frac{N_h - n_h}{N_h - 1}',
                  )
                "
              ></div>
              <div
                class="formula-display"
                v-html="
                  renderLatexDisplay(
                    'V(\\bar{y}_{st}) = (0.6)^2 \\frac{14^2}{60} \\cdot \\frac{540}{599} + (0.3)^2 \\frac{16^2}{30} \\cdot \\frac{270}{299} + (0.1)^2 \\frac{12^2}{10} \\cdot \\frac{90}{99}',
                  )
                "
              ></div>
              <div
                class="formula-display"
                v-html="
                  renderLatexDisplay(
                    'V(\\bar{y}_{st}) = 0.36(3.27)(0.901) + 0.09(8.53)(0.903) + 0.01(14.4)(0.909)',
                  )
                "
              ></div>
              <div
                class="formula-display"
                v-html="renderLatexDisplay('V(\\bar{y}_{st}) = 1.06 + 0.69 + 0.13 = 1.88')"
              ></div>
              <p style="margin-top: 0.5rem">Error estándar:</p>
              <div
                class="formula-display"
                v-html="renderLatexDisplay('SE = \\sqrt{1.88} = 1.37')"
              ></div>
            </div>
          </div>

          <div class="step-card">
            <div class="step-number">6</div>
            <div class="step-content">
              <h4>Construir intervalo de confianza (95%)</h4>
              <div
                class="formula-display"
                v-html="
                  renderLatexDisplay('IC = 68.5 \\pm 1.96(1.37) = 68.5 \\pm 2.69 = [65.81, 71.19]')
                "
              ></div>
              <p style="margin-top: 0.5rem">
                <strong>Conclusión:</strong> El nivel promedio de estrés es 68.5, con 95% de
                confianza el valor real está entre 65.8 y 71.2 puntos.
              </p>
              <p style="margin-top: 0.5rem">
                <strong>Ventaja del estratificado:</strong> Se garantizó representación de las 3
                carreras y se redujo la varianza total comparado con MAS simple. El CPF reduce aún
                más la varianza cuando n es grande respecto a N en cada estrato.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- MUESTREO POR CONGLOMERADOS -->
      <div v-if="activeTab === 'conglomerados'" class="content-section">
        <h2>Muestreo por Conglomerados (Una Etapa)</h2>

        <div class="intro-box">
          <h3>🎯 Idea y Definición</h3>
          <p>
            La población se divide en <strong>conglomerados</strong> (grupos naturales) y se
            <strong>seleccionan algunos conglomerados completos</strong> al azar. Se encuesta a
            <strong>todos</strong> los elementos de los conglomerados seleccionados.
          </p>
          <p style="margin-top: 0.5rem">
            <strong>Ventaja:</strong> Reduce costos de desplazamiento cuando la población está
            geográficamente dispersa.
          </p>
        </div>

        <div class="formula-section">
          <h3>Cómo se Selecciona (Muestreo por Conglomerados de Una Etapa)</h3>
          <ol style="line-height: 2; margin-top: 1rem">
            <li>
              <strong>Identificar conglomerados:</strong> Dividir la población en
              <span v-html="renderLatex('M')"></span> conglomerados (manzanas, escuelas, municipios,
              etc.)
            </li>
            <li>
              <strong>Seleccionar conglomerados:</strong> Elegir
              <span v-html="renderLatex('m')"></span> conglomerados al azar (usando MAS sobre los M
              conglomerados)
            </li>
            <li>
              <strong>Encuestar todos los elementos:</strong> Dentro de cada uno de los m
              conglomerados seleccionados, encuestar a <strong>todos</strong> sus elementos
            </li>
          </ol>
        </div>

        <div class="formula-section">
          <h3>Tamaño Muestral: Enfoque Práctico</h3>
          <p style="margin-bottom: 1rem">
            No hay una fórmula simple universal. El enfoque práctico es:
          </p>
          <ol style="line-height: 2">
            <li>
              <strong>Estimar el tamaño muestral de individuos</strong>
              <span v-html="renderLatex('n_{ind}')"></span> que necesitas (usando fórmulas de MAS)
            </li>
            <li>
              <strong>Estimar el tamaño promedio</strong> de un conglomerado
              <span v-html="renderLatex('\\bar{N}')"></span>
            </li>
            <li>
              <strong>Calcular el número de conglomerados</strong> necesarios:
              <div
                class="formula-display"
                v-html="renderLatexDisplay('m \\approx \\frac{n_{ind}}{\\bar{N}}')"
              ></div>
            </li>
          </ol>
          <p style="margin-top: 1rem">
            <strong>Nota:</strong> Como los elementos dentro de un conglomerado son similares, el
            tamaño efectivo puede ser menor que <span v-html="renderLatex('n_{ind}')"></span>. Suele
            ser necesario aumentar m para compensar el "efecto del diseño".
          </p>
        </div>

        <div class="formula-section">
          <h3>Media del Conglomerado e Intervalo de Confianza</h3>
          <p style="margin-bottom: 1rem">
            El estimador de la media poblacional es el promedio de las medias de los conglomerados
            seleccionados:
          </p>
          <div
            class="formula-display"
            v-html="renderLatexDisplay('\\bar{y}_c = \\frac{1}{m}\\sum_{i=1}^{m} \\bar{y}_i')"
          ></div>
          <p style="margin-top: 1rem">
            Donde <span v-html="renderLatex('\\bar{y}_i')"></span> es la media del conglomerado i.
          </p>
        </div>

        <div class="formula-section">
          <h3>Varianza del Estimador</h3>
          <p style="margin-bottom: 1rem">
            <strong>Diferencia clave:</strong> La varianza depende de la variabilidad
            <strong>ENTRE conglomerados</strong> (no dentro):
          </p>
          <div
            class="formula-display"
            v-html="
              renderLatexDisplay(
                'V(\\bar{y}_c) = \\frac{1}{m(m-1)} \\sum_{i=1}^{m} (\\bar{y}_i - \\bar{y}_c)^2',
              )
            "
          ></div>
          <p style="margin-top: 1rem">
            Esta es la varianza muestral de las medias de los m conglomerados.
          </p>
        </div>

        <div class="formula-section">
          <h3>Intervalo de Confianza</h3>
          <div
            class="formula-display"
            v-html="
              renderLatexDisplay('IC: \\quad \\bar{y}_c \\pm Z_c \\cdot \\sqrt{V(\\bar{y}_c)}')
            "
          ></div>
          <p style="margin-top: 1rem">
            <strong>Nota:</strong> Si usas t-Student (cuando m es pequeño), reemplaza
            <span v-html="renderLatex('Z_c')"></span> por
            <span v-html="renderLatex('t_{\\alpha/2, m-1}')"></span>.
          </p>
        </div>

        <div class="detailed-example">
          <h3>📚 Ejemplo Completo: Ingreso Familiar en Ciudad</h3>
          <p style="margin-bottom: 1rem">
            <strong>Contexto:</strong> Una ciudad tiene M = 100 manzanas con un promedio de 50
            hogares por manzana (total ≈ 5,000 hogares). Quieres estimar el ingreso mensual
            promedio. Estudios previos indican σ ≈ $400. Quieres un error de $50 con 95% de
            confianza.
          </p>

          <div class="step-card">
            <div class="step-number">1</div>
            <div class="step-content">
              <h4>Calcular n de individuos con fórmula de MAS</h4>
              <p>Sin CPF:</p>
              <div
                class="formula-display"
                v-html="
                  renderLatexDisplay(
                    'n_0 = \\frac{4 \\cdot S^2}{B^2} = \\frac{4 \\cdot 400^2}{50^2} = \\frac{640000}{2500} = 256',
                  )
                "
              ></div>
              <p style="margin-top: 0.5rem">Con CPF (N ≈ 5,000):</p>
              <div
                class="formula-display"
                v-html="
                  renderLatexDisplay(
                    'n = \\frac{256}{1 + \\frac{255}{5000}} = \\frac{256}{1.051} \\approx 244',
                  )
                "
              ></div>
              <p style="margin-top: 0.5rem">
                Necesitamos encuestar aproximadamente <strong>250 hogares</strong>.
              </p>
            </div>
          </div>

          <div class="step-card">
            <div class="step-number">2</div>
            <div class="step-content">
              <h4>Calcular número de conglomerados (manzanas) necesarios</h4>
              <div
                class="formula-display"
                v-html="
                  renderLatexDisplay(
                    'm = \\frac{n_{ind}}{\\bar{N}} = \\frac{250}{50} = 5 \\text{ manzanas}',
                  )
                "
              ></div>
              <p style="margin-top: 0.5rem">
                Nota: En la práctica, podrías aumentar a m = 6 o 7 manzanas para compensar el efecto
                del diseño (los hogares en la misma manzana son similares).
              </p>
            </div>
          </div>

          <div class="step-card">
            <div class="step-number">3</div>
            <div class="step-content">
              <h4>Seleccionar las manzanas aleatoriamente</h4>
              <p>Numera las 100 manzanas del 1 al 100.</p>
              <p style="margin-top: 0.5rem">
                Usa números aleatorios para seleccionar 5 manzanas. Por ejemplo: manzanas #7, #23,
                #58, #71, #94.
              </p>
            </div>
          </div>

          <div class="step-card">
            <div class="step-number">4</div>
            <div class="step-content">
              <h4>Encuestar TODOS los hogares de esas 5 manzanas</h4>
              <p>
                En la manzana #7 (supón 52 hogares) → encuesta los 52 hogares<br />
                En la manzana #23 (supón 48 hogares) → encuesta los 48 hogares<br />
                ... y así con las 5 manzanas.
              </p>
              <p style="margin-top: 0.5rem">Total: ≈ 5 × 50 = 250 hogares encuestados.</p>
            </div>
          </div>

          <div class="step-card">
            <div class="step-number">5</div>
            <div class="step-content">
              <h4>Calcular media de conglomerados</h4>
              <p>Supón que los ingresos promedio por manzana fueron:</p>
              <ul style="line-height: 1.8">
                <li>Manzana #7: ȳ₁ = $1,850</li>
                <li>Manzana #23: ȳ₂ = $2,100</li>
                <li>Manzana #58: ȳ₃ = $1,720</li>
                <li>Manzana #71: ȳ₄ = $1,980</li>
                <li>Manzana #94: ȳ₅ = $2,050</li>
              </ul>
              <p style="margin-top: 0.5rem">Promedio de las medias:</p>
              <div
                class="formula-display"
                v-html="
                  renderLatexDisplay(
                    '\\bar{y}_c = \\frac{1850 + 2100 + 1720 + 1980 + 2050}{5} = \\frac{9700}{5} = 1940',
                  )
                "
              ></div>
            </div>
          </div>

          <div class="step-card">
            <div class="step-number">6</div>
            <div class="step-content">
              <h4>Calcular varianza del estimador</h4>
              <p>Varianza entre las medias de conglomerados:</p>
              <div
                class="formula-display"
                v-html="
                  renderLatexDisplay(
                    'V(\\bar{y}_c) = \\frac{1}{m(m-1)} \\sum (\\bar{y}_i - \\bar{y}_c)^2',
                  )
                "
              ></div>
              <p style="margin-top: 0.5rem">Calculamos las desviaciones:</p>
              <ul style="line-height: 1.8; font-size: 0.9rem">
                <li>(1850 - 1940)² = 8,100</li>
                <li>(2100 - 1940)² = 25,600</li>
                <li>(1720 - 1940)² = 48,400</li>
                <li>(1980 - 1940)² = 1,600</li>
                <li>(2050 - 1940)² = 12,100</li>
                <li>Suma = 95,800</li>
              </ul>
              <div
                class="formula-display"
                v-html="
                  renderLatexDisplay(
                    'V(\\bar{y}_c) = \\frac{95800}{5 \\times 4} = \\frac{95800}{20} = 4790',
                  )
                "
              ></div>
              <p style="margin-top: 0.5rem">Error estándar:</p>
              <div
                class="formula-display"
                v-html="renderLatexDisplay('SE = \\sqrt{4790} = 69.2')"
              ></div>
            </div>
          </div>

          <div class="step-card">
            <div class="step-number">7</div>
            <div class="step-content">
              <h4>Construir intervalo de confianza (95%)</h4>
              <div
                class="formula-display"
                v-html="
                  renderLatexDisplay('IC = 1940 \\pm 1.96(69.2) = 1940 \\pm 136 = [1804, 2076]')
                "
              ></div>
              <p style="margin-top: 0.5rem">
                <strong>Conclusión:</strong> El ingreso promedio es $1,940, con 95% de confianza el
                valor real está entre $1,804 y $2,076.
              </p>
              <p style="margin-top: 0.5rem">
                <strong>Ventaja práctica:</strong> Solo visitaste 5 zonas (manzanas) en lugar de 250
                direcciones dispersas, reduciendo costos de transporte significativamente.
              </p>
              <p style="margin-top: 0.5rem" class="note">
                <strong>Nota:</strong> El IC es más amplio que si usaras MAS ($1,940 ± $50 aprox),
                reflejando la pérdida de eficiencia del muestreo por conglomerados debido a la
                homogeneidad dentro de las manzanas.
              </p>
            </div>
          </div>
        </div>

        <div class="analogy-box" style="margin-top: 2rem">
          <h3>💡 Comentario sobre Eficiencia vs Costo</h3>
          <p>
            El muestreo por conglomerados es generalmente <strong>menos eficiente</strong> que el
            MAS (mayor error para el mismo tamaño de muestra) porque los elementos dentro de un
            conglomerado se parecen entre sí.
          </p>
          <p style="margin-top: 0.5rem">
            <strong>Sin embargo:</strong> Es mucho más <strong>económico</strong> cuando hay costos
            altos de desplazamiento (estudios geográficos, encuestas en áreas rurales, etc.).
          </p>
          <p style="margin-top: 0.5rem">
            <strong>Regla práctica:</strong> Usa conglomerados cuando el ahorro en costo justifica
            el aumento en el error muestral.
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
  { id: 'simple', label: 'Aleatorio Simple' },
  { id: 'estratificado', label: 'Estratificado' },
  { id: 'sistematico', label: 'Sistemático' },
  { id: 'conglomerados', label: 'Conglomerados' },
]

const activeTab = ref('simple')

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

.tecnicas-muestreo-view {
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
  color: white;
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

.intro-box p {
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

.analogy-box p {
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
}
</style>
