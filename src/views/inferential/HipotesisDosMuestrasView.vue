<template>
  <div class="hipotesis-dos-muestras-view">
    <div class="container">
      <div class="hero">
        <h1>Pruebas de Hipótesis de Dos Muestras</h1>
        <p>
          Aprende a comparar dos poblaciones o tratamientos mediante pruebas de hipótesis. Incluye
          ejemplos prácticos y una calculadora interactiva.
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
        <h2>Introducción a las Pruebas de Dos Muestras</h2>

        <div class="intro-content">
          <p>
            En situaciones del mundo real, frecuentemente necesitamos comparar dos grupos o
            poblaciones para determinar si difieren significativamente. Por ejemplo:
          </p>

          <ul>
            <li>¿Hay diferencia entre los salarios medios de plomeros y electricistas?</li>
            <li>¿Es más efectivo un insecticida que otro?</li>
            <li>
              ¿Difiere la proporción de estudiantes que aprueban un examen entre dos universidades?
            </li>
          </ul>

          <div class="definition-box">
            <h3>🎯 Concepto Clave</h3>
            <p>
              A diferencia de las pruebas de una muestra donde comparamos un valor muestral con un
              parámetro poblacional conocido, en las
              <strong>pruebas de dos muestras</strong> seleccionamos muestras aleatorias de
              <strong>dos poblaciones distintas</strong> para determinar si son iguales las medias o
              las proporciones.
            </p>
          </div>

          <h3>Tipos de Comparaciones</h3>
          <div class="comparison-grid">
            <div class="comparison-item">
              <h4>📊 Comparación de Medias</h4>
              <p>Determinar si dos grupos tienen medias poblacionales diferentes</p>
              <ul>
                <li>Muestras independientes (σ conocidas)</li>
                <li>Muestras independientes (σ desconocidas e iguales)</li>
                <li>Muestras independientes (σ desconocidas y desiguales)</li>
                <li>Muestras dependientes (pareadas)</li>
              </ul>
            </div>

            <div class="comparison-item">
              <h4>📈 Comparación de Proporciones</h4>
              <p>Determinar si dos grupos tienen proporciones poblacionales diferentes</p>
              <ul>
                <li>Variables cualitativas dicotómicas</li>
                <li>Muestras grandes (nπ ≥ 5 y n(1-π) ≥ 5)</li>
                <li>Uso de proporción conjunta</li>
                <li>Distribución normal (z)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- TIPOS DE MUESTRAS -->
      <div v-if="activeTab === 'tipos-muestras'" class="content-section">
        <h2>Tipos de Muestras: Independientes vs. Dependientes</h2>

        <div class="intro-content">
          <p>
            Antes de realizar cualquier prueba de dos muestras, es crucial identificar correctamente
            el tipo de muestras que tenemos, ya que esto determina qué procedimiento estadístico
            usar.
          </p>
        </div>

        <div class="test-types-container">
          <div class="test-type-card">
            <h3>🔀 Muestras Independientes</h3>
            <p>
              Las muestras son <strong>independientes</strong> cuando las observaciones de una
              muestra no están relacionadas de ninguna manera con las observaciones de la otra
              muestra.
            </p>

            <div class="definition-box">
              <h4>Características</h4>
              <ul>
                <li>Dos grupos completamente separados</li>
                <li>Sin conexión entre observaciones</li>
                <li>Diferentes sujetos en cada grupo</li>
                <li>Tamaños de muestra pueden ser diferentes</li>
              </ul>
            </div>

            <div class="examples-section">
              <h4>Ejemplos de Muestras Independientes:</h4>
              <div class="example">
                <strong>Ejemplo 1:</strong> Comparar los salarios de plomeros con los de
                electricistas (dos grupos diferentes de personas).
              </div>
              <div class="example">
                <strong>Ejemplo 2:</strong> Comparar el número de defectos en el turno matutino
                versus el turno vespertino.
              </div>
              <div class="example">
                <strong>Ejemplo 3:</strong> Comparar la efectividad de dos insecticidas aplicados a
                diferentes grupos de plantas.
              </div>
            </div>
          </div>

          <div class="test-type-card">
            <h3>🔗 Muestras Dependientes (Apareadas)</h3>
            <p>
              Las muestras son <strong>dependientes o apareadas</strong> cuando existe una relación
              o conexión entre las observaciones de ambas muestras.
            </p>

            <div class="definition-box">
              <h4>Dos Tipos de Muestras Dependientes:</h4>

              <div class="subtype">
                <h5>1. Estudios "Antes y Después"</h5>
                <p>Se mide a los mismos sujetos antes de una intervención y después.</p>
                <div class="example">
                  <strong>Ejemplo:</strong> Medir el peso de pacientes antes y después de un
                  programa de ejercicio.
                </div>
              </div>

              <div class="subtype">
                <h5>2. Observaciones Apareadas</h5>
                <p>Las mediciones están relacionadas por un elemento común.</p>
                <div class="example">
                  <strong>Ejemplo:</strong> Dos empresas de avalúo que valúan las mismas
                  propiedades.
                </div>
              </div>
            </div>

            <div class="important-note">
              <h4>💡 Ventaja de las Muestras Apareadas</h4>
              <p>
                Al aparear observaciones, se <strong>reduce la variación</strong> en la distribución
                del muestreo, eliminando la variabilidad entre sujetos y enfocándose solo en la
                diferencia entre tratamientos o condiciones.
              </p>
            </div>
          </div>
        </div>

        <div class="analogy-box">
          <h3>🎯 ¿Cómo Identificar el Tipo de Muestra?</h3>
          <p><strong>Pregunta clave:</strong> ¿Las observaciones están naturalmente emparejadas?</p>
          <ul>
            <li><strong>SÍ</strong> → Muestras dependientes (usa prueba t de datos pareados)</li>
            <li>
              <strong>NO</strong> → Muestras independientes (usa prueba z o t de dos muestras)
            </li>
          </ul>
        </div>
      </div>

      <!-- PROCEDIMIENTO DE 5 PASOS -->
      <div v-if="activeTab === 'cinco-pasos'" class="content-section">
        <h2>Procedimiento General de 5 Pasos</h2>

        <div class="intro-content">
          <p>
            El procedimiento para realizar pruebas de hipótesis de dos muestras sigue los mismos
            cinco pasos que las pruebas de una muestra, pero adaptado para comparar dos grupos.
          </p>
        </div>

        <div class="steps-container">
          <div class="step-card">
            <div class="step-number">1</div>
            <div class="step-content">
              <h3>Establecer las Hipótesis</h3>
              <p>Definir la hipótesis nula (H₀) y la hipótesis alternativa (H₁)</p>
              <div class="step-detail">
                <h4>Para Diferencia de Medias:</h4>
                <ul>
                  <li><strong>H₀:</strong> μ₁ = μ₂ o μ₁ - μ₂ = 0 (no hay diferencia)</li>
                  <li>
                    <strong>H₁:</strong> μ₁ ≠ μ₂ (dos colas), μ₁ &gt; μ₂ (cola derecha), o μ₁ &lt;
                    μ₂ (cola izquierda)
                  </li>
                </ul>

                <h4>Para Diferencia de Proporciones:</h4>
                <ul>
                  <li><strong>H₀:</strong> π₁ = π₂ o π₁ - π₂ = 0 (no hay diferencia)</li>
                  <li>
                    <strong>H₁:</strong> π₁ ≠ π₂ (dos colas), π₁ &gt; π₂ (cola derecha), o π₁ &lt;
                    π₂ (cola izquierda)
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="step-card">
            <div class="step-number">2</div>
            <div class="step-content">
              <h3>Seleccionar el Nivel de Significancia (α)</h3>
              <p>Establecer la probabilidad de cometer un error tipo I</p>
              <div class="step-detail">
                <div class="alpha-levels">
                  <div class="alpha-option">
                    <strong>α = 0.10 (10%)</strong> - Nivel más permisivo
                  </div>
                  <div class="alpha-option"><strong>α = 0.05 (5%)</strong> - Nivel más común</div>
                  <div class="alpha-option">
                    <strong>α = 0.01 (1%)</strong> - Nivel más estricto
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="step-card">
            <div class="step-number">3</div>
            <div class="step-content">
              <h3>Identificar el Estadístico de Prueba</h3>
              <p>Seleccionar z o t según el tipo de datos y condiciones</p>
              <div class="step-detail">
                <div class="important-note">
                  <h4>💡 Decisión del Estadístico</h4>
                  <ul>
                    <li><strong>z:</strong> Para proporciones o medias con σ conocidas</li>
                    <li><strong>t:</strong> Para medias con σ desconocidas (más común)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="step-card">
            <div class="step-number">4</div>
            <div class="step-content">
              <h3>Formular la Regla de Decisión</h3>
              <p>Determinar los valores críticos según α y el tipo de prueba</p>
              <div class="step-detail">
                <p>
                  Calcular los valores críticos de la distribución z o t según corresponda,
                  considerando si es prueba de una cola o dos colas.
                </p>
              </div>
            </div>
          </div>

          <div class="step-card">
            <div class="step-number">5</div>
            <div class="step-content">
              <h3>Calcular, Decidir e Interpretar</h3>
              <p>Calcular el estadístico de prueba y comparar con el valor crítico</p>
              <div class="step-detail">
                <div class="decision-rules">
                  <h4>Reglas de Decisión:</h4>
                  <ul>
                    <li>
                      <strong>Si</strong> el estadístico cae en la región de rechazo →
                      <em>Rechazar H₀</em>
                    </li>
                    <li>
                      <strong>Si</strong> el estadístico NO cae en la región de rechazo →
                      <em>No rechazar H₀</em>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ¿VARIANZAS IGUALES O DIFERENTES? -->
      <div v-if="activeTab === 'igualdad-varianzas'" class="content-section">
        <h2>¿Cómo Determinar si las Varianzas son Iguales o Diferentes?</h2>

        <div class="intro-box">
          <h3>❓ Pregunta Clave</h3>
          <p>
            <strong>No siempre se asume que las varianzas son iguales.</strong> La decisión depende
            del análisis de los datos y del contexto del problema. Esta elección determina qué
            fórmula usar en la prueba de hipótesis para dos medias con σ desconocidas.
          </p>
        </div>

        <div class="steps-container">
          <!-- Método 1: Observación Visual -->
          <div class="step-card">
            <div class="step-number">1</div>
            <div class="step-content">
              <h3>Observación Visual de los Datos</h3>
              <p>
                La primera verificación es <strong>observar la dispersión de los datos</strong>
                mediante gráficas de puntos, diagramas de caja o histogramas.
              </p>

              <div class="example-box">
                <h4>📊 Ejemplo: Toallas de Papel</h4>
                <p><strong>Datos observados:</strong></p>
                <ul>
                  <li>Marca 1: datos varían de 1 ml a 12 ml (rango = 11 ml)</li>
                  <li>Marca 2: datos varían de 6 ml a 12 ml (rango = 6 ml)</li>
                </ul>
                <div class="conclusion">
                  <strong>Conclusión:</strong> La gráfica de puntos reveló
                  <strong>mayor variación</strong> en la primera marca, por lo que se decidió
                  <strong>NO asumir varianzas iguales</strong>.
                </div>
              </div>
            </div>
          </div>

          <!-- Método 2: Comparación de Desviaciones Estándares -->
          <div class="step-card">
            <div class="step-number">2</div>
            <div class="step-content">
              <h3>Comparación de Desviaciones Estándares Muestrales</h3>
              <p><strong>Regla práctica común:</strong></p>

              <div class="formula-box">
                <p style="text-align: center; font-size: 1.2rem; margin: 1rem 0">
                  Si
                  <span v-html="renderLatex('\\frac{s_1}{s_2}')"></span>
                  o
                  <span v-html="renderLatex('\\frac{s_2}{s_1} > 2')"></span>
                </p>
                <p style="text-align: center; font-weight: bold; color: #d32f2f">
                  → Las varianzas probablemente <strong>NO son iguales</strong>
                </p>
              </div>

              <div class="comparison-grid">
                <div class="comparison-item">
                  <h4>✅ Ejemplo: Métodos de Ensamblaje</h4>
                  <ul>
                    <li>Método Welles: s₁ = 2.92</li>
                    <li>Método Atkins: s₂ = 2.10</li>
                    <li>Razón: 2.92 / 2.10 = 1.39</li>
                  </ul>
                  <div class="conclusion">
                    <strong>1.39 &lt; 2</strong> → Se asume
                    <strong>varianzas iguales</strong>
                  </div>
                </div>

                <div class="comparison-item">
                  <h4>❌ Ejemplo: Toallas de Papel</h4>
                  <ul>
                    <li>Marca 1: s₁ = 3.32</li>
                    <li>Marca 2: s₂ = 1.62</li>
                    <li>Razón: 3.32 / 1.62 = 2.05</li>
                  </ul>
                  <div class="conclusion">
                    <strong>2.05 &gt; 2</strong> → Se asume
                    <strong>varianzas desiguales</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Método 3: Contexto del Problema -->
          <div class="step-card">
            <div class="step-number">3</div>
            <div class="step-content">
              <h3>Contexto del Problema</h3>
              <p>
                A veces el <strong>conocimiento del contexto</strong> te ayuda a decidir antes de
                hacer cálculos:
              </p>

              <div class="test-types-container">
                <div class="test-type-card">
                  <h3>✅ Asumir Varianzas Iguales cuando:</h3>
                  <ul>
                    <li>
                      Los grupos provienen de poblaciones similares (ej. mismo turno de trabajo con
                      diferentes supervisores)
                    </li>
                    <li>Los procesos de medición son idénticos</li>
                    <li>Los tamaños muestrales son similares</li>
                    <li>Se trata de grupos homogéneos</li>
                  </ul>
                </div>

                <div class="test-type-card">
                  <h3>❌ Asumir Varianzas Desiguales cuando:</h3>
                  <ul>
                    <li>
                      Los grupos son muy diferentes (ej. expertos vs. principiantes, niños vs.
                      adultos)
                    </li>
                    <li>Diferentes condiciones experimentales</li>
                    <li>Uno de los grupos es mucho más variable por naturaleza</li>
                    <li>Tamaños muestrales muy diferentes</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- Método 4: Pruebas Estadísticas Formales -->
          <div class="step-card">
            <div class="step-number">4</div>
            <div class="step-content">
              <h3>Pruebas Estadísticas Formales (Avanzado)</h3>
              <p>
                Existen pruebas formales para verificar la igualdad de varianzas, aunque no son
                obligatorias:
              </p>

              <div class="definition-box">
                <h3>📐 Prueba F para Igualdad de Varianzas</h3>
                <ul>
                  <li>
                    <strong>H₀:</strong>
                    <span v-html="renderLatex('\\sigma_1^2 = \\sigma_2^2')"></span>
                    (varianzas iguales)
                  </li>
                  <li>
                    <strong>H₁:</strong>
                    <span v-html="renderLatex('\\sigma_1^2 \\neq \\sigma_2^2')"></span>
                    (varianzas diferentes)
                  </li>
                </ul>
                <p style="margin-top: 1rem">
                  <strong>Otras pruebas disponibles:</strong> Prueba de Levene, Prueba de Bartlett
                </p>
              </div>

              <div class="important-note">
                <strong>⚠️ Nota:</strong> Estas pruebas estadísticas formales están fuera del
                alcance de este curso básico, pero es útil saber que existen.
              </div>
            </div>
          </div>
        </div>

        <!-- ¿Qué hacer en cada caso? -->
        <h3 style="margin-top: 3rem; margin-bottom: 1.5rem; color: var(--primary)">
          ¿Qué Hacer en Cada Caso?
        </h3>

        <div class="test-types-container">
          <!-- Varianzas Iguales -->
          <div class="test-type-card">
            <h3>✅ Si ASUMES Varianzas IGUALES:</h3>

            <div class="formula-section">
              <h4>1. Calculas la Varianza Conjunta (Pooled Variance):</h4>
              <div
                class="latex-formula"
                v-html="
                  renderLatexDisplay('s_p^2 = \\frac{(n_1-1)s_1^2 + (n_2-1)s_2^2}{n_1 + n_2 - 2}')
                "
              ></div>
            </div>

            <div class="formula-section">
              <h4>2. Estadístico de Prueba:</h4>
              <div
                class="latex-formula"
                v-html="
                  renderLatexDisplay(
                    't = \\frac{(\\bar{X}_1 - \\bar{X}_2)}{\\sqrt{s_p^2\\left(\\frac{1}{n_1} + \\frac{1}{n_2}\\right)}}',
                  )
                "
              ></div>
            </div>

            <div class="formula-section">
              <h4>3. Grados de Libertad:</h4>
              <div class="latex-formula" v-html="renderLatexDisplay('gl = n_1 + n_2 - 2')"></div>
            </div>

            <div class="conclusion">
              <strong>✓ Ventaja:</strong> Más poder estadístico si la suposición es correcta.
              Combina la información de ambas muestras.
            </div>
          </div>

          <!-- Varianzas Desiguales -->
          <div class="test-type-card">
            <h3>❌ Si ASUMES Varianzas DESIGUALES:</h3>

            <div class="formula-section">
              <h4>1. NO calculas varianza conjunta, usas ambas por separado:</h4>
              <div
                class="latex-formula"
                v-html="
                  renderLatexDisplay(
                    't = \\frac{(\\bar{X}_1 - \\bar{X}_2)}{\\sqrt{\\frac{s_1^2}{n_1} + \\frac{s_2^2}{n_2}}}',
                  )
                "
              ></div>
            </div>

            <div class="formula-section">
              <h4>2. Grados de Libertad Ajustados (Fórmula de Welch):</h4>
              <div
                class="latex-formula"
                v-html="
                  renderLatexDisplay(
                    'gl = \\frac{\\left(\\frac{s_1^2}{n_1} + \\frac{s_2^2}{n_2}\\right)^2}{\\frac{(s_1^2/n_1)^2}{n_1-1} + \\frac{(s_2^2/n_2)^2}{n_2-1}}',
                  )
                "
              ></div>
              <p style="text-align: center; margin-top: 1rem">
                <em>(Se redondea hacia abajo)</em>
              </p>
            </div>

            <div class="conclusion">
              <strong>✓ Ventaja:</strong> Más robusto, no requiere supuestos estrictos. Es válido
              incluso si las varianzas son realmente iguales.
            </div>
          </div>
        </div>

        <!-- Recomendación Práctica -->
        <div class="important-note" style="margin-top: 2rem">
          <h3>💡 Recomendación Práctica</h3>
          <p>
            <strong>Cuando tengas duda, es más seguro asumir varianzas desiguales.</strong>
            La prueba con varianzas desiguales es más conservadora y sigue siendo válida incluso si
            las varianzas son iguales, mientras que lo contrario puede llevar a conclusiones
            erróneas.
          </p>
          <p style="margin-top: 1rem">
            <strong>⚠️ Regla importante:</strong> El problema debe indicar explícitamente que se
            asumen varianzas iguales. Si no se especifica, lo más prudente es usar el método de
            varianzas desiguales.
          </p>
        </div>

        <!-- Tabla Resumen Decisional -->
        <h3 style="margin-top: 3rem; margin-bottom: 1.5rem; color: var(--primary)">
          Resumen: Guía de Decisión
        </h3>

        <div class="comparison-table">
          <table>
            <thead>
              <tr>
                <th style="width: 50%">Evidencia</th>
                <th style="width: 50%">Decisión</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Razón s₁/s₂ &lt; 2 y contexto similar</td>
                <td><strong style="color: #388e3c">✓ Varianzas IGUALES</strong></td>
              </tr>
              <tr>
                <td>Razón s₁/s₂ &gt; 2 o dispersión visiblemente diferente</td>
                <td><strong style="color: #d32f2f">✗ Varianzas DESIGUALES</strong></td>
              </tr>
              <tr>
                <td>El problema dice "asuma varianzas iguales"</td>
                <td><strong style="color: #388e3c">✓ Varianzas IGUALES</strong></td>
              </tr>
              <tr>
                <td>Sin información clara o en duda</td>
                <td>
                  <strong style="color: #d32f2f">✗ Varianzas DESIGUALES (más conservador)</strong>
                </td>
              </tr>
              <tr>
                <td>Grupos muy diferentes por naturaleza</td>
                <td><strong style="color: #d32f2f">✗ Varianzas DESIGUALES</strong></td>
              </tr>
              <tr>
                <td>Grupos similares y homogéneos</td>
                <td><strong style="color: #388e3c">✓ Varianzas IGUALES</strong></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="analogy-box" style="margin-top: 2rem">
          <h3>🎯 Conclusión Clave</h3>
          <p>
            La elección entre asumir varianzas iguales o desiguales afecta directamente la fórmula
            del estadístico de prueba y los grados de libertad. Es una decisión fundamental que debe
            tomarse <strong>antes</strong> de realizar los cálculos de la prueba de hipótesis.
          </p>
          <p style="margin-top: 1rem">
            En los ejemplos siguientes verás cómo esta decisión se aplica en casos prácticos reales.
          </p>
        </div>
      </div>

      <!-- PRUEBAS PARA DOS MEDIAS (σ CONOCIDAS) -->
      <div v-if="activeTab === 'medias-sigma-conocida'" class="content-section">
        <h2>Pruebas para Dos Medias con σ Conocidas (Prueba z)</h2>

        <div class="intro-box">
          <h3>¿Cuándo usar esta prueba?</h3>
          <ul>
            <li>Las muestras provienen de poblaciones <strong>independientes</strong></li>
            <li>Ambas poblaciones siguen la <strong>distribución normal</strong></li>
            <li>
              Las <strong>desviaciones estándares poblacionales (σ₁ y σ₂) son conocidas</strong>
            </li>
          </ul>
        </div>

        <div class="formula-section">
          <h3>Fórmula del Estadístico de Prueba z</h3>
          <div
            v-html="
              renderLatexDisplay(
                'z = \\frac{(\\bar{X}_1 - \\bar{X}_2)}{\\sqrt{\\frac{\\sigma_1^2}{n_1} + \\frac{\\sigma_2^2}{n_2}}}',
              )
            "
          ></div>

          <p><strong>Donde:</strong></p>
          <ul>
            <li>
              <span v-html="renderLatex('\\bar{X}_1')"></span> y
              <span v-html="renderLatex('\\bar{X}_2')"></span> son las medias muestrales
            </li>
            <li>
              <span v-html="renderLatex('\\sigma_1')"></span> y
              <span v-html="renderLatex('\\sigma_2')"></span> son las desviaciones estándares
              poblacionales
            </li>
            <li>
              <span v-html="renderLatex('n_1')"></span> y
              <span v-html="renderLatex('n_2')"></span> son los tamaños muestrales
            </li>
          </ul>
        </div>

        <div class="examples-section">
          <h3>Ejemplo Completo: Sistema Fast Lane en FoodTown</h3>

          <div class="example-box">
            <p><strong>Situación:</strong></p>
            <p>
              Una cadena de supermercados quiere comparar el tiempo medio de pago entre el método
              tradicional y el nuevo sistema Fast Lane. Se sabe que σ₁ = 0.40 minutos para el método
              tradicional y σ₂ = 0.30 minutos para Fast Lane.
            </p>

            <h4>Paso 1: Establecer las Hipótesis</h4>
            <ul>
              <li>H₀: µ₁ ≤ µ₂ (Fast Lane no es más rápido)</li>
              <li>H₁: µ₁ &gt; µ₂ (Fast Lane es más rápido)</li>
            </ul>
            <p><em>Es una prueba de cola derecha</em></p>

            <h4>Paso 2: Nivel de Significancia</h4>
            <p>α = 0.01 (1%)</p>

            <h4>Paso 3: Datos de las Muestras</h4>
            <ul>
              <li>
                Método tradicional:
                <span v-html="renderLatex('\\bar{X}_1 = 5.50')"></span> min, n₁ = 50, σ₁ = 0.40
              </li>
              <li>
                Fast Lane: <span v-html="renderLatex('\\bar{X}_2 = 5.30')"></span> min, n₂ = 100, σ₂
                = 0.30
              </li>
            </ul>

            <h4>Paso 4: Determinar el Valor Crítico</h4>
            <p>Como es prueba de cola derecha con α = 0.01:</p>
            <div class="code-block">
              <strong>Python:</strong>
              <pre><code>from scipy.stats import norm
alpha = 0.01
z_critico = norm.ppf(1 - alpha)
print(f"Valor crítico: {z_critico:.3f}")
# Resultado: 2.326</code></pre>
            </div>
            <p class="highlight-result">✓ Valor crítico: z = 2.33</p>
            <p>Región de rechazo: z &gt; 2.33</p>

            <h4>Paso 5: Calcular el Estadístico de Prueba</h4>
            <div class="calculation">
              <div
                v-html="
                  renderLatexDisplay(
                    'z = \\frac{(5.50 - 5.30)}{\\sqrt{\\frac{0.40^2}{50} + \\frac{0.30^2}{100}}} = \\frac{0.20}{\\sqrt{0.0032 + 0.0009}} = \\frac{0.20}{0.064} = 3.13',
                  )
                "
              ></div>
            </div>

            <div class="code-block">
              <strong>Python:</strong>
              <pre><code>import math
x1_bar = 5.50
x2_bar = 5.30
sigma1 = 0.40
sigma2 = 0.30
n1 = 50
n2 = 100

z = (x1_bar - x2_bar) / math.sqrt((sigma1**2/n1) + (sigma2**2/n2))
print(f"Estadístico z: {z:.2f}")
# Resultado: 3.13</code></pre>
            </div>

            <h4>Paso 6: Tomar la Decisión</h4>
            <div class="decision-rule">
              <p><strong>Comparación:</strong> z = 3.13 &gt; 2.33</p>
              <p>El estadístico z SÍ cae en la región de rechazo</p>
              <div class="decision-highlight"><strong>Decisión:</strong> Rechazar H₀</div>
            </div>

            <div class="conclusion">
              <strong>Conclusión:</strong> Hay evidencia suficiente para afirmar que el método Fast
              Lane es significativamente más rápido que el método tradicional al nivel de
              significancia del 1%.
            </div>
          </div>
        </div>

        <div class="tip-section">
          <h3>💡 Interpretación del Valor p</h3>
          <p>Para este ejemplo, el valor p sería:</p>
          <div class="code-block">
            <pre><code>from scipy.stats import norm
p_value = 1 - norm.cdf(3.13)
print(f"Valor p: {p_value:.4f}")
# Resultado: 0.0009</code></pre>
          </div>
          <p>
            Un valor p de 0.0009 es muy pequeño, indicando fuerte evidencia contra H₀. La
            probabilidad de observar una diferencia tan grande (o mayor) por azar es de solo 0.09%.
          </p>
        </div>
      </div>

      <!-- PRUEBAS PARA DOS PROPORCIONES -->
      <div v-if="activeTab === 'proporciones'" class="content-section">
        <h2>Pruebas para Dos Proporciones (Prueba z)</h2>

        <div class="intro-box">
          <h3>¿Cuándo usar esta prueba?</h3>
          <ul>
            <li>Se comparan proporciones o porcentajes de dos poblaciones</li>
            <li>Las muestras son lo suficientemente grandes (nπ ≥ 5 y n(1-π) ≥ 5)</li>
            <li>Los datos provienen de conteos con dos resultados posibles (éxito/fracaso)</li>
          </ul>
        </div>

        <div class="formula-section">
          <h3>Fórmula del Estadístico de Prueba z</h3>
          <div
            v-html="
              renderLatexDisplay(
                'z = \\frac{(p_1 - p_2)}{\\sqrt{p_c(1-p_c)\\left(\\frac{1}{n_1} + \\frac{1}{n_2}\\right)}}',
              )
            "
          ></div>

          <p>
            <strong>Donde p<sub>c</sub> es la proporción conjunta, calculada como:</strong>
          </p>
          <div v-html="renderLatexDisplay('p_c = \\frac{X_1 + X_2}{n_1 + n_2}')"></div>

          <ul>
            <li>p₁ y p₂ son las proporciones muestrales</li>
            <li>X₁ y X₂ son el número de éxitos en cada muestra</li>
            <li>n₁ y n₂ son los tamaños muestrales</li>
            <li>
              p<sub>c</sub> es la proporción combinada (se usa bajo el supuesto de que H₀ es
              verdadera)
            </li>
          </ul>
        </div>

        <div class="examples-section">
          <h3>Ejemplo Completo: Perfume Heavenly</h3>

          <div class="example-box">
            <p><strong>Situación:</strong></p>
            <p>
              Una compañía quiere saber si hay diferencia entre las proporciones de mujeres jóvenes
              y mayores que comprarían su nuevo perfume.
            </p>

            <h4>Paso 1: Establecer las Hipótesis</h4>
            <ul>
              <li>H₀: π₁ = π₂ (no hay diferencia entre las proporciones)</li>
              <li>H₁: π₁ ≠ π₂ (hay diferencia entre las proporciones)</li>
            </ul>
            <p><em>Es una prueba de dos colas</em></p>

            <h4>Paso 2: Nivel de Significancia</h4>
            <p>α = 0.05 (5%)</p>

            <h4>Paso 3: Datos de las Muestras</h4>
            <ul>
              <li>Mujeres jóvenes: 19 de 100 comprarían (p₁ = 0.19)</li>
              <li>Mujeres mayores: 62 de 200 comprarían (p₂ = 0.31)</li>
            </ul>

            <h4>Paso 4: Calcular la Proporción Conjunta</h4>
            <div class="calculation">
              <div
                v-html="
                  renderLatexDisplay('p_c = \\frac{19 + 62}{100 + 200} = \\frac{81}{300} = 0.27')
                "
              ></div>
            </div>

            <h4>Paso 5: Determinar el Valor Crítico</h4>
            <p>Como es prueba de dos colas con α = 0.05:</p>
            <div class="code-block">
              <strong>Python:</strong>
              <pre><code>from scipy.stats import norm
alpha = 0.05
z_critico = norm.ppf(1 - alpha/2)
print(f"Valor crítico: ±{z_critico:.3f}")
# Resultado: ±1.960</code></pre>
            </div>
            <p class="highlight-result">✓ Valores críticos: z = ±1.96</p>
            <p>Región de rechazo: z &lt; -1.96 o z &gt; 1.96</p>

            <h4>Paso 6: Calcular el Estadístico de Prueba</h4>
            <div class="calculation">
              <div
                v-html="
                  renderLatexDisplay(
                    'z = \\frac{(0.19 - 0.31)}{\\sqrt{0.27(1-0.27)\\left(\\frac{1}{100} + \\frac{1}{200}\\right)}}',
                  )
                "
              ></div>
              <div
                v-html="
                  renderLatexDisplay(
                    'z = \\frac{-0.12}{\\sqrt{0.27 \\times 0.73 \\times 0.015}} = \\frac{-0.12}{\\sqrt{0.002955}} = \\frac{-0.12}{0.0543} = -2.21',
                  )
                "
              ></div>
            </div>

            <div class="code-block">
              <strong>Python:</strong>
              <pre><code>import math
x1 = 19
n1 = 100
x2 = 62
n2 = 200

p1 = x1 / n1
p2 = x2 / n2
pc = (x1 + x2) / (n1 + n2)

z = (p1 - p2) / math.sqrt(pc * (1 - pc) * (1/n1 + 1/n2))
print(f"Estadístico z: {z:.2f}")
# Resultado: -2.21</code></pre>
            </div>

            <h4>Paso 7: Tomar la Decisión</h4>
            <div class="decision-rule">
              <p><strong>Comparación:</strong> z = -2.21 &lt; -1.96</p>
              <p>El estadístico z SÍ cae en la región de rechazo</p>
              <div class="decision-highlight"><strong>Decisión:</strong> Rechazar H₀</div>
            </div>

            <div class="conclusion">
              <strong>Conclusión:</strong> Hay evidencia suficiente para afirmar que existe una
              diferencia significativa entre las proporciones de mujeres jóvenes y mayores que
              comprarían el perfume al nivel de significancia del 5%.
            </div>
          </div>
        </div>

        <div class="tip-section">
          <h3>⚠️ Verificación de Condiciones</h3>
          <p>Antes de realizar la prueba, verifica que se cumplan las condiciones:</p>
          <div class="code-block">
            <pre><code># Para este ejemplo:
n1 * p1 = 100 * 0.19 = 19 ≥ 5 ✓
n1 * (1-p1) = 100 * 0.81 = 81 ≥ 5 ✓
n2 * p2 = 200 * 0.31 = 62 ≥ 5 ✓
n2 * (1-p2) = 200 * 0.69 = 138 ≥ 5 ✓

Todas las condiciones se cumplen, podemos usar la prueba z.</code></pre>
          </div>
        </div>
      </div>

      <!-- PRUEBAS PARA DOS MEDIAS (σ DESCONOCIDAS E IGUALES) -->
      <div v-if="activeTab === 'medias-sigma-igual'" class="content-section">
        <h2>Pruebas para Dos Medias con σ Desconocidas e Iguales (Prueba t)</h2>

        <div class="intro-box">
          <h3>¿Cuándo usar esta prueba?</h3>
          <ul>
            <li>
              Las desviaciones estándares poblacionales <strong>no se conocen</strong> pero se
              suponen <strong>iguales</strong>
            </li>
            <li>Las poblaciones son independientes y siguen distribución normal</li>
            <li>Se utiliza la <strong>distribución t</strong> como estadístico de prueba</li>
          </ul>
        </div>

        <div class="formula-section">
          <h3>Fórmulas</h3>

          <h4>Varianza Conjunta (Pooled Variance):</h4>
          <div
            v-html="
              renderLatexDisplay('s_p^2 = \\frac{(n_1-1)s_1^2 + (n_2-1)s_2^2}{n_1 + n_2 - 2}')
            "
          ></div>

          <h4>Estadístico de Prueba:</h4>
          <div
            v-html="
              renderLatexDisplay(
                't = \\frac{(\\bar{X}_1 - \\bar{X}_2)}{\\sqrt{s_p^2\\left(\\frac{1}{n_1} + \\frac{1}{n_2}\\right)}}',
              )
            "
          ></div>

          <p><strong>Grados de libertad:</strong> gl = n₁ + n₂ - 2</p>
        </div>

        <div class="examples-section">
          <h3>Ejemplo Completo: Métodos de Ensamblaje</h3>

          <div class="example-box">
            <p><strong>Situación:</strong></p>
            <p>Una empresa compara dos métodos para ensamblar motores. Los datos obtenidos son:</p>

            <h4>Paso 1: Datos</h4>
            <ul>
              <li>
                Método Welles: n₁ = 5, <span v-html="renderLatex('\\bar{X}_1')"></span> = 4.00 min,
                s₁ = 2.92
              </li>
              <li>
                Método Atkins: n₂ = 6, <span v-html="renderLatex('\\bar{X}_2')"></span> = 5.00 min,
                s₂ = 2.10
              </li>
            </ul>

            <div class="important-note">
              <h4>🔍 Verificación: ¿Varianzas Iguales o Desiguales?</h4>
              <p><strong>Razón de desviaciones estándares:</strong></p>
              <div class="calculation">
                <div
                  v-html="renderLatexDisplay('\\frac{s_1}{s_2} = \\frac{2.92}{2.10} = 1.39')"
                ></div>
              </div>
              <div class="code-block">
                <strong>Python:</strong>
                <pre><code>razon = s1 / s2
print(f"Razón s1/s2: {razon:.2f}")
# Resultado: 1.39</code></pre>
              </div>
              <div class="conclusion">
                <strong>✓ Conclusión:</strong> Como 1.39 &lt; 2, podemos asumir
                <strong>varianzas iguales</strong> y usar la varianza conjunta (pooled variance).
              </div>
            </div>

            <h4>Paso 2: Establecer las Hipótesis</h4>
            <ul>
              <li>H₀: µ₁ = µ₂ (no hay diferencia entre los métodos)</li>
              <li>H₁: µ₁ ≠ µ₂ (hay diferencia entre los métodos)</li>
            </ul>

            <h4>Paso 3: Nivel de Significancia</h4>
            <p>α = 0.10 (10%)</p>
            <p>gl = 5 + 6 - 2 = 9</p>

            <h4>Paso 4: Calcular la Varianza Conjunta</h4>
            <div class="calculation">
              <div
                v-html="
                  renderLatexDisplay(
                    's_p^2 = \\frac{(5-1)(2.92)^2 + (6-1)(2.10)^2}{5 + 6 - 2} = \\frac{4(8.53) + 5(4.41)}{9} = \\frac{34.12 + 22.05}{9} = \\frac{56.17}{9} = 6.24',
                  )
                "
              ></div>
            </div>

            <div class="code-block">
              <strong>Python:</strong>
              <pre><code>import math
n1, n2 = 5, 6
s1, s2 = 2.92, 2.10

sp2 = ((n1-1)*s1**2 + (n2-1)*s2**2) / (n1 + n2 - 2)
print(f"Varianza conjunta: {sp2:.2f}")
# Resultado: 6.24</code></pre>
            </div>

            <h4>Paso 5: Determinar el Valor Crítico</h4>
            <p>Para prueba de dos colas con α = 0.10 y gl = 9:</p>
            <div class="code-block">
              <strong>Python:</strong>
              <pre><code>from scipy.stats import t
alpha = 0.10
gl = 9
t_critico = t.ppf(1 - alpha/2, gl)
print(f"Valor crítico: ±{t_critico:.3f}")
# Resultado: ±1.833</code></pre>
            </div>
            <p class="highlight-result">✓ Valores críticos: t = ±1.833</p>

            <h4>Paso 6: Calcular el Estadístico de Prueba</h4>
            <div class="calculation">
              <div
                v-html="
                  renderLatexDisplay(
                    't = \\frac{(4.00 - 5.00)}{\\sqrt{6.24\\left(\\frac{1}{5} + \\frac{1}{6}\\right)}} = \\frac{-1.00}{\\sqrt{6.24(0.367)}} = \\frac{-1.00}{\\sqrt{2.29}} = \\frac{-1.00}{1.513} = -0.662',
                  )
                "
              ></div>
            </div>

            <div class="code-block">
              <strong>Python:</strong>
              <pre><code>x1_bar, x2_bar = 4.00, 5.00
t_calc = (x1_bar - x2_bar) / math.sqrt(sp2 * (1/n1 + 1/n2))
print(f"Estadístico t: {t_calc:.3f}")
# Resultado: -0.662</code></pre>
            </div>

            <h4>Paso 7: Tomar la Decisión</h4>
            <div class="decision-rule">
              <p><strong>Comparación:</strong> -1.833 &lt; -0.662 &lt; 1.833</p>
              <p>El estadístico t NO cae en la región de rechazo</p>
              <div class="decision-highlight"><strong>Decisión:</strong> No rechazar H₀</div>
            </div>

            <div class="conclusion">
              <strong>Conclusión:</strong> No hay evidencia suficiente para afirmar que existe una
              diferencia significativa entre los dos métodos de ensamblaje al nivel de significancia
              del 10%.
            </div>
          </div>
        </div>
      </div>

      <!-- PRUEBAS PARA DOS MEDIAS (σ DESCONOCIDAS Y DESIGUALES) -->
      <div v-if="activeTab === 'medias-sigma-desigual'" class="content-section">
        <h2>Pruebas para Dos Medias con σ Desconocidas y Desiguales (Prueba t)</h2>

        <div class="intro-box">
          <h3>¿Cuándo usar esta prueba?</h3>
          <ul>
            <li>
              Las desviaciones estándares poblacionales <strong>no se conocen</strong> y
              <strong>no son iguales</strong>
            </li>
            <li>Las poblaciones son independientes</li>
            <li>Los grados de libertad se ajustan con una fórmula especial</li>
          </ul>
        </div>

        <div class="formula-section">
          <h3>Fórmulas</h3>

          <h4>Estadístico de Prueba:</h4>
          <div
            v-html="
              renderLatexDisplay(
                't = \\frac{(\\bar{X}_1 - \\bar{X}_2)}{\\sqrt{\\frac{s_1^2}{n_1} + \\frac{s_2^2}{n_2}}}',
              )
            "
          ></div>

          <h4>Grados de Libertad Ajustados:</h4>
          <div
            v-html="
              renderLatexDisplay(
                'gl = \\frac{\\left(\\frac{s_1^2}{n_1} + \\frac{s_2^2}{n_2}\\right)^2}{\\frac{(s_1^2/n_1)^2}{n_1-1} + \\frac{(s_2^2/n_2)^2}{n_2-1}}',
              )
            "
          ></div>
          <p><em>Se redondea hacia abajo</em></p>
        </div>

        <div class="examples-section">
          <h3>Ejemplo Completo: Absorbencia de Toallas de Papel</h3>

          <div class="example-box">
            <p><strong>Situación:</strong></p>
            <p>Se comparan dos marcas de toallas de papel. Los datos obtenidos son:</p>

            <h4>Paso 1: Datos</h4>
            <ul>
              <li>
                Marca 1: n₁ = 9, <span v-html="renderLatex('\\bar{X}_1')"></span> = 6.44 ml, s₁ =
                3.32
              </li>
              <li>
                Marca 2: n₂ = 12, <span v-html="renderLatex('\\bar{X}_2')"></span> = 9.42 ml, s₂ =
                1.62
              </li>
            </ul>

            <div class="important-note">
              <h4>🔍 Verificación: ¿Varianzas Iguales o Desiguales?</h4>
              <p><strong>Razón de desviaciones estándares:</strong></p>
              <div class="calculation">
                <div
                  v-html="renderLatexDisplay('\\frac{s_1}{s_2} = \\frac{3.32}{1.62} = 2.05')"
                ></div>
              </div>
              <div class="code-block">
                <strong>Python:</strong>
                <pre><code>s1, s2 = 3.32, 1.62
razon = s1 / s2
print(f"Razón s1/s2: {razon:.2f}")
# Resultado: 2.05</code></pre>
              </div>
              <div class="conclusion" style="background: #f8d7da; border-left-color: #d32f2f">
                <strong>✗ Conclusión:</strong> Como 2.05 &gt; 2, debemos asumir
                <strong>varianzas desiguales</strong> y usar la fórmula de Welch (sin varianza
                conjunta).
              </div>
              <p style="margin-top: 1rem">
                <strong>Observación adicional:</strong> Los datos de la Marca 1 varían de 1 ml a 12
                ml (rango = 11), mientras que la Marca 2 varía de 6 ml a 12 ml (rango = 6),
                confirmando visualmente la mayor dispersión en la Marca 1.
              </p>
            </div>

            <h4>Paso 2: Establecer las Hipótesis</h4>
            <ul>
              <li>H₀: µ₁ = µ₂ (no hay diferencia en la absorbencia)</li>
              <li>H₁: µ₁ ≠ µ₂ (hay diferencia en la absorbencia)</li>
            </ul>

            <h4>Paso 3: Nivel de Significancia</h4>
            <p>α = 0.10 (10%)</p>

            <h4>Paso 4: Calcular Grados de Libertad Ajustados</h4>
            <div class="calculation">
              <div
                v-html="
                  renderLatexDisplay(
                    'gl = \\frac{\\left(\\frac{3.32^2}{9} + \\frac{1.62^2}{12}\\right)^2}{\\frac{(3.32^2/9)^2}{8} + \\frac{(1.62^2/12)^2}{11}} = \\frac{(1.225 + 0.219)^2}{\\frac{1.501}{8} + \\frac{0.048}{11}} = \\frac{2.086}{0.192} = 10.86 \\approx 10',
                  )
                "
              ></div>
            </div>

            <div class="code-block">
              <strong>Python:</strong>
              <pre><code>import math
n1, n2 = 9, 12
s1, s2 = 3.32, 1.62

numerador = (s1**2/n1 + s2**2/n2)**2
denominador = (s1**2/n1)**2/(n1-1) + (s2**2/n2)**2/(n2-1)
gl = math.floor(numerador / denominador)
print(f"Grados de libertad: {gl}")
# Resultado: 10</code></pre>
            </div>

            <h4>Paso 5: Determinar el Valor Crítico</h4>
            <p>Para prueba de dos colas con α = 0.10 y gl = 10:</p>
            <div class="code-block">
              <strong>Python:</strong>
              <pre><code>from scipy.stats import t
t_critico = t.ppf(1 - 0.10/2, 10)
print(f"Valor crítico: ±{t_critico:.3f}")
# Resultado: ±1.812</code></pre>
            </div>
            <p class="highlight-result">✓ Valores críticos: t = ±1.812</p>

            <h4>Paso 6: Calcular el Estadístico de Prueba</h4>
            <div class="calculation">
              <div
                v-html="
                  renderLatexDisplay(
                    't = \\frac{(6.44 - 9.42)}{\\sqrt{\\frac{3.32^2}{9} + \\frac{1.62^2}{12}}} = \\frac{-2.98}{\\sqrt{1.225 + 0.219}} = \\frac{-2.98}{1.202} = -2.478',
                  )
                "
              ></div>
            </div>

            <div class="code-block">
              <strong>Python:</strong>
              <pre><code>x1_bar, x2_bar = 6.44, 9.42
t_calc = (x1_bar - x2_bar) / math.sqrt(s1**2/n1 + s2**2/n2)
print(f"Estadístico t: {t_calc:.3f}")
# Resultado: -2.478</code></pre>
            </div>

            <h4>Paso 7: Tomar la Decisión</h4>
            <div class="decision-rule">
              <p><strong>Comparación:</strong> -2.478 &lt; -1.812</p>
              <p>El estadístico t SÍ cae en la región de rechazo</p>
              <div class="decision-highlight"><strong>Decisión:</strong> Rechazar H₀</div>
            </div>

            <div class="conclusion">
              <strong>Conclusión:</strong> Hay evidencia suficiente para afirmar que las tasas de
              absorción medias son diferentes entre las dos marcas al nivel de significancia del
              10%.
            </div>
          </div>
        </div>

        <div class="tip-section">
          <h3>💡 ¿Cuándo usar esta prueba vs. la de varianzas iguales?</h3>
          <p>Usa esta prueba (varianzas desiguales) cuando:</p>
          <ul>
            <li>Los tamaños de muestra son muy diferentes (n₁ ≠ n₂)</li>
            <li>Las desviaciones estándares muestrales son muy diferentes (s₁ ≠ s₂)</li>
            <li>No tienes razón para creer que las varianzas poblacionales son iguales</li>
          </ul>
          <p>
            <strong>Regla práctica:</strong> Si s₁/s₂ &gt; 2 o s₁/s₂ &lt; 0.5, usa la prueba de
            varianzas desiguales.
          </p>
        </div>
      </div>

      <!-- PRUEBAS PARA MUESTRAS DEPENDIENTES (APAREADAS) -->
      <div v-if="activeTab === 'muestras-pareadas'" class="content-section">
        <h2>Pruebas para Muestras Dependientes (Apareadas)</h2>

        <div class="intro-box">
          <h3>Concepto Clave</h3>
          <p>
            En muestras apareadas, analizamos la <strong>distribución de las diferencias</strong>
            entre las observaciones apareadas. Solo hay una muestra: las diferencias.
          </p>
        </div>

        <div class="formula-section">
          <h3>Fórmula del Estadístico de Prueba</h3>
          <div v-html="renderLatexDisplay('t = \\frac{\\bar{d}}{s_d / \\sqrt{n}}')"></div>

          <p><strong>Donde:</strong></p>
          <ul>
            <li><span v-html="renderLatex('\\bar{d}')"></span> es la media de las diferencias</li>
            <li>s<sub>d</sub> es la desviación estándar de las diferencias</li>
            <li>n es el número de pares</li>
          </ul>

          <p><strong>Grados de libertad:</strong> gl = n - 1</p>
        </div>

        <div class="examples-section">
          <h3>Ejemplo Completo: Empresas de Avalúo</h3>

          <div class="example-box">
            <p><strong>Situación:</strong></p>
            <p>
              Una institución financiera compara los avalúos de dos empresas sobre las mismas 10
              propiedades. Las diferencias (Empresa 1 - Empresa 2) tienen media
              <span v-html="renderLatex('\\bar{d}')"></span> = 4.60 y desviación estándar s<sub
                >d</sub
              >
              = 4.40.
            </p>

            <h4>Paso 1: Establecer las Hipótesis</h4>
            <ul>
              <li>H₀: µ<sub>d</sub> = 0 (no hay diferencia entre los avalúos)</li>
              <li>H₁: µ<sub>d</sub> ≠ 0 (hay diferencia entre los avalúos)</li>
            </ul>

            <h4>Paso 2: Nivel de Significancia</h4>
            <p>α = 0.05 (5%)</p>
            <p>gl = 10 - 1 = 9</p>

            <h4>Paso 3: Determinar el Valor Crítico</h4>
            <p>Para prueba de dos colas con α = 0.05 y gl = 9:</p>
            <div class="code-block">
              <strong>Python:</strong>
              <pre><code>from scipy.stats import t
t_critico = t.ppf(1 - 0.05/2, 9)
print(f"Valor crítico: ±{t_critico:.3f}")
# Resultado: ±2.262</code></pre>
            </div>
            <p class="highlight-result">✓ Valores críticos: t = ±2.262</p>

            <h4>Paso 4: Calcular el Estadístico de Prueba</h4>
            <div class="calculation">
              <div
                v-html="
                  renderLatexDisplay(
                    't = \\frac{4.60}{4.40 / \\sqrt{10}} = \\frac{4.60}{4.40 / 3.162} = \\frac{4.60}{1.392} = 3.305',
                  )
                "
              ></div>
            </div>

            <div class="code-block">
              <strong>Python:</strong>
              <pre><code>import math
d_bar = 4.60
sd = 4.40
n = 10

t_calc = d_bar / (sd / math.sqrt(n))
print(f"Estadístico t: {t_calc:.3f}")
# Resultado: 3.305</code></pre>
            </div>

            <h4>Paso 5: Tomar la Decisión</h4>
            <div class="decision-rule">
              <p><strong>Comparación:</strong> 3.305 &gt; 2.262</p>
              <p>El estadístico t SÍ cae en la región de rechazo</p>
              <div class="decision-highlight"><strong>Decisión:</strong> Rechazar H₀</div>
            </div>

            <div class="conclusion">
              <strong>Conclusión:</strong> Hay evidencia suficiente para afirmar que existe una
              diferencia significativa entre los avalúos de las dos empresas al nivel de
              significancia del 5%.
            </div>
          </div>
        </div>

        <div class="analogy-box">
          <h3>💡 Ventaja de las Muestras Apareadas</h3>
          <p>
            Al aparear observaciones, se <strong>reduce la variación</strong> en la distribución del
            muestreo, eliminando la variabilidad entre sujetos y enfocándose solo en la diferencia
            entre tratamientos o condiciones.
          </p>
          <p>
            <strong>Ejemplo:</strong> En un estudio de pérdida de peso, al medir a las mismas
            personas antes y después del tratamiento, eliminamos la variabilidad natural entre
            personas (metabolismo, edad, etc.) y nos concentramos solo en el efecto del tratamiento.
          </p>
        </div>
      </div>

      <!-- TABLA RESUMEN -->
      <div v-if="activeTab === 'tabla-resumen'" class="content-section">
        <h2>Tabla Resumen: ¿Qué Prueba Usar?</h2>

        <div class="intro-content">
          <p>
            Esta tabla te ayudará a seleccionar la prueba apropiada según el tipo de datos y las
            condiciones de tu problema.
          </p>
        </div>

        <div class="comparison-table">
          <table>
            <thead>
              <tr>
                <th>Situación</th>
                <th>Estadístico</th>
                <th>Condiciones</th>
                <th>Grados de Libertad</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Dos medias, σ conocidas</strong></td>
                <td>z</td>
                <td>Poblaciones independientes, normales, σ₁ y σ₂ conocidas</td>
                <td>No aplica</td>
              </tr>
              <tr>
                <td><strong>Dos proporciones</strong></td>
                <td>z</td>
                <td>Muestras grandes, datos de conteo binario</td>
                <td>No aplica</td>
              </tr>
              <tr>
                <td><strong>Dos medias, σ desconocidas e iguales</strong></td>
                <td>t</td>
                <td>Poblaciones independientes, normales, se agrupan varianzas</td>
                <td>n₁ + n₂ - 2</td>
              </tr>
              <tr>
                <td><strong>Dos medias, σ desconocidas y desiguales</strong></td>
                <td>t</td>
                <td>Poblaciones independientes, normales, gl ajustados</td>
                <td>Fórmula especial</td>
              </tr>
              <tr>
                <td><strong>Muestras apareadas</strong></td>
                <td>t</td>
                <td>Observaciones dependientes, se analizan diferencias</td>
                <td>n - 1</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="analogy-box">
          <h3>🎯 Diagrama de Decisión</h3>
          <div class="decision-flow">
            <div class="decision-step">
              <strong>1. ¿Qué estás comparando?</strong>
              <ul>
                <li>Medias → Continúa al paso 2</li>
                <li>Proporciones → Usa prueba z para proporciones</li>
              </ul>
            </div>

            <div class="decision-step">
              <strong>2. ¿Las observaciones están apareadas?</strong>
              <ul>
                <li>SÍ → Usa prueba t de muestras dependientes</li>
                <li>NO → Continúa al paso 3</li>
              </ul>
            </div>

            <div class="decision-step">
              <strong>3. ¿Conoces las desviaciones estándares poblacionales (σ)?</strong>
              <ul>
                <li>SÍ → Usa prueba z (raro en la práctica)</li>
                <li>NO → Continúa al paso 4</li>
              </ul>
            </div>

            <div class="decision-step">
              <strong>4. ¿Las varianzas poblacionales son iguales?</strong>
              <ul>
                <li>SÍ (o puedes asumirlo) → Usa prueba t con varianzas agrupadas</li>
                <li>NO → Usa prueba t con varianzas desiguales y gl ajustados</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- CALCULADORA INTERACTIVA -->
      <div v-if="activeTab === 'calculadora'" class="content-section">
        <h2>Calculadora Interactiva de Pruebas de Dos Muestras</h2>

        <div class="calculator-container">
          <div class="calculator-form">
            <h3>Parámetros de la Prueba</h3>

            <div class="form-group">
              <label>Tipo de Prueba:</label>
              <select v-model="tipoPrueba">
                <option value="medias-independientes">Diferencia de Medias (Independientes)</option>
                <option value="medias-pareadas">Diferencia de Medias (Pareadas)</option>
                <option value="proporciones">Diferencia de Proporciones</option>
              </select>
            </div>

            <!-- Formulario para Medias Independientes -->
            <div v-if="tipoPrueba === 'medias-independientes'">
              <h4>Muestra 1</h4>
              <div class="form-row">
                <div class="form-group">
                  <label>Media (x̄₁):</label>
                  <input v-model.number="media1" type="number" step="0.01" />
                </div>
                <div class="form-group">
                  <label>Desviación (s₁):</label>
                  <input v-model.number="desv1" type="number" step="0.01" />
                </div>
                <div class="form-group">
                  <label>Tamaño (n₁):</label>
                  <input v-model.number="n1" type="number" />
                </div>
              </div>

              <h4>Muestra 2</h4>
              <div class="form-row">
                <div class="form-group">
                  <label>Media (x̄₂):</label>
                  <input v-model.number="media2" type="number" step="0.01" />
                </div>
                <div class="form-group">
                  <label>Desviación (s₂):</label>
                  <input v-model.number="desv2" type="number" step="0.01" />
                </div>
                <div class="form-group">
                  <label>Tamaño (n₂):</label>
                  <input v-model.number="n2" type="number" />
                </div>
              </div>
            </div>

            <!-- Formulario para Medias Pareadas -->
            <div v-if="tipoPrueba === 'medias-pareadas'">
              <div class="form-group">
                <label>Media de diferencias (d̄):</label>
                <input v-model.number="mediaDiferencias" type="number" step="0.01" />
              </div>
              <div class="form-group">
                <label>Desviación de diferencias (s_d):</label>
                <input v-model.number="desvDiferencias" type="number" step="0.01" />
              </div>
              <div class="form-group">
                <label>Número de pares (n):</label>
                <input v-model.number="nPares" type="number" />
              </div>
            </div>

            <!-- Formulario para Proporciones -->
            <div v-if="tipoPrueba === 'proporciones'">
              <h4>Muestra 1</h4>
              <div class="form-row">
                <div class="form-group">
                  <label>Éxitos (x₁):</label>
                  <input v-model.number="exitos1" type="number" />
                </div>
                <div class="form-group">
                  <label>Tamaño (n₁):</label>
                  <input v-model.number="n1Prop" type="number" />
                </div>
              </div>

              <h4>Muestra 2</h4>
              <div class="form-row">
                <div class="form-group">
                  <label>Éxitos (x₂):</label>
                  <input v-model.number="exitos2" type="number" />
                </div>
                <div class="form-group">
                  <label>Tamaño (n₂):</label>
                  <input v-model.number="n2Prop" type="number" />
                </div>
              </div>
            </div>

            <div class="form-group">
              <label>Nivel de significancia (α):</label>
              <select v-model="alpha">
                <option value="0.10">0.10</option>
                <option value="0.05">0.05</option>
                <option value="0.01">0.01</option>
              </select>
            </div>

            <div class="form-group">
              <label>Tipo de hipótesis alternativa:</label>
              <select v-model="tipoHipotesis">
                <option value="two-tailed">Dos colas (≠)</option>
                <option value="left-tailed">Cola izquierda (&lt;)</option>
                <option value="right-tailed">Cola derecha (>)</option>
              </select>
            </div>

            <button @click="calcular" class="calculate-btn">Calcular</button>
          </div>

          <!-- Resultados -->
          <div v-if="resultado" class="calculator-results">
            <h3>Resultados</h3>

            <div class="result-item">
              <strong>Hipótesis:</strong>
              <div v-html="resultado.hipotesis"></div>
            </div>

            <div class="result-item">
              <strong>Estadístico calculado:</strong>
              <span v-html="resultado.estadistico"></span>
            </div>

            <div class="result-item">
              <strong>Valor crítico:</strong>
              <span v-html="resultado.valorCritico"></span>
            </div>

            <div class="result-item">
              <strong>Región de rechazo:</strong>
              <span v-html="resultado.regionRechazo"></span>
            </div>

            <div class="result-item">
              <strong>Decisión:</strong>
              <span :class="resultado.decisionClass" v-html="resultado.decision"></span>
            </div>

            <div v-if="resultado.conclusion" class="result-item">
              <strong>Conclusión:</strong>
              <span v-html="resultado.conclusion"></span>
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

// @ts-expect-error - jstat no tiene tipos oficiales
import * as jStat from 'jstat'

// Interfaz para el resultado
interface ResultadoPrueba {
  hipotesis: string
  estadistico: string
  valorCritico: string
  regionRechazo: string
  decision: string
  decisionClass: string
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

// Configuración de pestañas
const tabs = [
  { id: 'introduccion', label: 'Introducción' },
  { id: 'tipos-muestras', label: 'Muestras Independientes vs. Dependientes' },
  { id: 'cinco-pasos', label: 'Procedimiento de 5 Pasos' },
  { id: 'igualdad-varianzas', label: '¿Varianzas Iguales o Diferentes?' },
  { id: 'medias-sigma-conocida', label: 'Dos Medias (σ Conocidas)' },
  { id: 'proporciones', label: 'Dos Proporciones' },
  { id: 'medias-sigma-igual', label: 'Dos Medias (σ Desconocidas e Iguales)' },
  { id: 'medias-sigma-desigual', label: 'Dos Medias (σ Desconocidas y Desiguales)' },
  { id: 'muestras-pareadas', label: 'Muestras Dependientes (Apareadas)' },
  { id: 'tabla-resumen', label: 'Tabla Resumen' },
  { id: 'calculadora', label: 'Calculadora Interactiva' },
]

const activeTab = ref('introduccion')

// Variables reactivas para la calculadora
const tipoPrueba = ref('medias-independientes')
const alpha = ref('0.05')
const tipoHipotesis = ref('two-tailed')

// Variables para medias independientes
const media1 = ref(0)
const desv1 = ref(0)
const n1 = ref(0)
const media2 = ref(0)
const desv2 = ref(0)
const n2 = ref(0)

// Variables para medias pareadas
const mediaDiferencias = ref(0)
const desvDiferencias = ref(0)
const nPares = ref(0)

// Variables para proporciones
const exitos1 = ref(0)
const n1Prop = ref(0)
const exitos2 = ref(0)
const n2Prop = ref(0)

const resultado = ref<ResultadoPrueba | null>(null)

// Función para calcular
const calcular = () => {
  let estadistico = 0
  let valorCritico = 0
  let gradosLibertad = 0
  let tipoEstadistico = 't'

  if (tipoPrueba.value === 'medias-independientes') {
    // Cálculo para medias independientes
    const sp2 =
      ((n1.value - 1) * desv1.value ** 2 + (n2.value - 1) * desv2.value ** 2) /
      (n1.value + n2.value - 2)
    estadistico = (media1.value - media2.value) / Math.sqrt(sp2 / n1.value + sp2 / n2.value)
    gradosLibertad = n1.value + n2.value - 2

    if (tipoHipotesis.value === 'two-tailed') {
      valorCritico = jStat.studentt.inv(1 - parseFloat(alpha.value) / 2, gradosLibertad)
    } else if (tipoHipotesis.value === 'right-tailed') {
      valorCritico = jStat.studentt.inv(1 - parseFloat(alpha.value), gradosLibertad)
    } else {
      valorCritico = -jStat.studentt.inv(1 - parseFloat(alpha.value), gradosLibertad)
    }
  } else if (tipoPrueba.value === 'medias-pareadas') {
    // Cálculo para medias pareadas
    estadistico = mediaDiferencias.value / (desvDiferencias.value / Math.sqrt(nPares.value))
    gradosLibertad = nPares.value - 1

    if (tipoHipotesis.value === 'two-tailed') {
      valorCritico = jStat.studentt.inv(1 - parseFloat(alpha.value) / 2, gradosLibertad)
    } else if (tipoHipotesis.value === 'right-tailed') {
      valorCritico = jStat.studentt.inv(1 - parseFloat(alpha.value), gradosLibertad)
    } else {
      valorCritico = -jStat.studentt.inv(1 - parseFloat(alpha.value), gradosLibertad)
    }
  } else if (tipoPrueba.value === 'proporciones') {
    // Cálculo para proporciones
    tipoEstadistico = 'z'
    const p1 = exitos1.value / n1Prop.value
    const p2 = exitos2.value / n2Prop.value
    const p = (exitos1.value + exitos2.value) / (n1Prop.value + n2Prop.value)

    estadistico = (p1 - p2) / Math.sqrt(p * (1 - p) * (1 / n1Prop.value + 1 / n2Prop.value))

    if (tipoHipotesis.value === 'two-tailed') {
      valorCritico = jStat.normal.inv(1 - parseFloat(alpha.value) / 2, 0, 1)
    } else if (tipoHipotesis.value === 'right-tailed') {
      valorCritico = jStat.normal.inv(1 - parseFloat(alpha.value), 0, 1)
    } else {
      valorCritico = -jStat.normal.inv(1 - parseFloat(alpha.value), 0, 1)
    }
  }

  // Determinar decisión
  let decision = ''
  let decisionClass = ''
  let conclusion = ''

  if (tipoHipotesis.value === 'two-tailed') {
    if (Math.abs(estadistico) > Math.abs(valorCritico)) {
      decision = 'Rechazar H₀'
      decisionClass = 'reject'
      conclusion = 'Hay evidencia suficiente para concluir que existe una diferencia significativa'
    } else {
      decision = 'No rechazar H₀'
      decisionClass = 'not-reject'
      conclusion =
        'No hay evidencia suficiente para concluir que existe una diferencia significativa'
    }
  } else {
    if (tipoHipotesis.value === 'right-tailed' && estadistico > valorCritico) {
      decision = 'Rechazar H₀'
      decisionClass = 'reject'
      conclusion =
        'Hay evidencia suficiente para concluir que el primer grupo es significativamente mayor'
    } else if (tipoHipotesis.value === 'left-tailed' && estadistico < valorCritico) {
      decision = 'Rechazar H₀'
      decisionClass = 'reject'
      conclusion =
        'Hay evidencia suficiente para concluir que el primer grupo es significativamente menor'
    } else {
      decision = 'No rechazar H₀'
      decisionClass = 'not-reject'
      conclusion =
        'No hay evidencia suficiente para concluir que existe una diferencia significativa'
    }
  }

  // Formatear hipótesis
  let hipotesis = ''
  if (tipoPrueba.value.includes('medias')) {
    hipotesis = renderLatexDisplay('H_0: \\mu_1 - \\mu_2 = 0')
    if (tipoHipotesis.value === 'two-tailed') {
      hipotesis += '<br>' + renderLatexDisplay('H_1: \\mu_1 - \\mu_2 \\neq 0')
    } else if (tipoHipotesis.value === 'right-tailed') {
      hipotesis += '<br>' + renderLatexDisplay('H_1: \\mu_1 - \\mu_2 > 0')
    } else {
      hipotesis += '<br>' + renderLatexDisplay('H_1: \\mu_1 - \\mu_2 < 0')
    }
  } else {
    hipotesis = renderLatexDisplay('H_0: p_1 - p_2 = 0')
    if (tipoHipotesis.value === 'two-tailed') {
      hipotesis += '<br>' + renderLatexDisplay('H_1: p_1 - p_2 \\neq 0')
    } else if (tipoHipotesis.value === 'right-tailed') {
      hipotesis += '<br>' + renderLatexDisplay('H_1: p_1 - p_2 > 0')
    } else {
      hipotesis += '<br>' + renderLatexDisplay('H_1: p_1 - p_2 < 0')
    }
  }

  // Formatear región de rechazo
  let regionRechazo = ''
  if (tipoHipotesis.value === 'two-tailed') {
    regionRechazo = renderLatex(
      `t < -${valorCritico.toFixed(3)} \\text{ o } t > ${valorCritico.toFixed(3)}`,
    )
  } else if (tipoHipotesis.value === 'right-tailed') {
    regionRechazo = renderLatex(`t > ${valorCritico.toFixed(3)}`)
  } else {
    regionRechazo = renderLatex(`t < ${valorCritico.toFixed(3)}`)
  }

  resultado.value = {
    hipotesis,
    estadistico: renderLatex(`${tipoEstadistico.toUpperCase()} = ${estadistico.toFixed(4)}`),
    valorCritico: renderLatex(
      `${tipoEstadistico.toUpperCase()}_{crítico} = ${tipoHipotesis.value === 'two-tailed' ? '±' : ''}${valorCritico.toFixed(3)}`,
    ),
    regionRechazo,
    decision,
    decisionClass,
    conclusion,
  }
}
</script>

<style scoped>
@import '@/assets/styles/main.css';

.hipotesis-dos-muestras-view {
  padding-bottom: var(--spacing-2xl);
}

/* Tabs */
.tabs {
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

.tab-button {
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

.tab-button.active {
  background: var(--primary);
  color: white;
  box-shadow: var(--shadow-sm);
}

.tab-button:hover:not(.active) {
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

/* Content Boxes */
.intro-box,
.definition-box,
.analogy-box,
.important-note,
.tip-section,
.decision-rule,
.conclusion,
.example-box,
.example-card {
  padding: var(--spacing-lg);
  border-radius: var(--radius-md);
  margin: var(--spacing-lg) 0;
  border: 1px solid transparent;
}

.intro-box {
  background: var(--primary-50);
  border-left: 4px solid var(--primary);
}
.intro-box h3 {
  color: var(--primary-900);
}

.definition-box {
  background: var(--secondary-50);
  border-left: 4px solid var(--secondary);
}
.definition-box h3 {
  color: var(--secondary-900);
}

.analogy-box,
.important-note,
.highlight-result {
  background: var(--warning-50);
  border-left: 4px solid var(--warning);
  color: var(--text-primary);
}
.analogy-box h3,
.important-note h3 {
  color: var(--warning-700);
}

.tip-section {
  background: var(--neutral-50);
  border-left: 4px solid var(--neutral-500);
}
.tip-section h3 {
  color: var(--neutral-700);
}

.conclusion {
  background: var(--success-50);
  border-left: 4px solid var(--success);
  color: var(--success-900);
}

.decision-rule {
  background: var(--primary-50);
  border: 1px solid var(--primary-200);
  text-align: center;
}
.decision-rule p {
  color: var(--primary-900);
  font-weight: 600;
}

/* Steps */
.steps-container {
  display: grid;
  gap: var(--spacing-lg);
}

.step-card {
  display: flex;
  gap: var(--spacing-lg);
  align-items: flex-start;
  background: var(--surface-variant);
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border);
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
  box-shadow: var(--shadow-sm);
}

.step-content {
  flex: 1;
}
.step-content h3 {
  color: var(--primary);
  margin-bottom: var(--spacing-sm);
}

/* Cards & Grids */
.test-types-container,
.comparison-grid,
.calculator-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-xl);
  margin-top: var(--spacing-lg);
}

.test-type-card,
.comparison-item {
  background: var(--surface-variant);
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border);
  border-left: 4px solid var(--primary);
}
.test-type-card h3 {
  color: var(--primary);
  margin-bottom: var(--spacing-md);
}

/* Tables */
.comparison-table,
.critical-values-table,
.excel-table,
.errors-table {
  overflow-x: auto;
  margin: var(--spacing-lg) 0;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border);
  background: var(--surface);
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: var(--spacing-md);
  border-bottom: 1px solid var(--border);
  text-align: left;
}

th {
  background: var(--primary-50);
  color: var(--primary-900);
  font-weight: 600;
}

tr:last-child td {
  border-bottom: none;
}
tr:nth-child(even) {
  background: var(--neutral-50);
}

/* Code & Math */
.code-block {
  background: var(--neutral-900);
  border-radius: var(--radius-md);
  padding: var(--spacing-md);
  margin: var(--spacing-md) 0;
  overflow-x: auto;
}

.code-block pre {
  color: var(--neutral-100);
  font-family: 'Fira Code', monospace;
  margin: 0;
}

.latex-formula {
  text-align: center;
  margin: var(--spacing-lg) 0;
  padding: var(--spacing-lg);
  background: var(--surface);
  border-radius: var(--radius-md);
  border: 1px solid var(--border);
  box-shadow: var(--shadow-sm);
  overflow-x: auto;
}

/* Calculator */
.calculator-form,
.calculator-results {
  background: var(--surface);
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border);
  box-shadow: var(--shadow-sm);
}

.form-group {
  margin-bottom: var(--spacing-lg);
}
.form-group label {
  display: block;
  margin-bottom: var(--spacing-xs);
  font-weight: 600;
  color: var(--text-primary);
}

.form-group input,
.form-group select {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--border-dark);
  border-radius: var(--radius-md);
  font-size: 1rem;
  transition: var(--transition);
}

.form-group input:focus,
.form-group select:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 3px var(--primary-100);
}

.calculate-btn {
  width: 100%;
  padding: var(--spacing-md);
  background: var(--primary);
  color: white;
  border: none;
  border-radius: var(--radius-md);
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
  box-shadow: var(--shadow-sm);
}

.calculate-btn:hover {
  background: var(--primary-700);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.result-item {
  margin-bottom: var(--spacing-md);
  padding: var(--spacing-md);
  background: var(--neutral-50);
  border-radius: var(--radius-md);
  border: 1px solid var(--border);
}

.decision-result {
  margin: var(--spacing-lg) 0;
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  font-weight: bold;
  text-align: center;
}

.decision-result.rechazar {
  background: var(--error-50);
  color: var(--error-900);
  border: 2px solid var(--error-400);
}

.decision-result.no-rechazar {
  background: var(--success-50);
  color: var(--success-900);
  border: 2px solid var(--success-400);
}

/* Responsive */
@media (max-width: 768px) {
  .step-card {
    flex-direction: column;
    text-align: center;
  }
  .step-number {
    margin: 0 auto;
  }
  .container {
    padding: 0 1rem;
  }
}
</style>
