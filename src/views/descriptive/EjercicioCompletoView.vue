<template>
  <div class="container">
    <div class="hero">
      <h1>Ejercicio Completo de Análisis Estadístico</h1>
      <p>
        Análisis integral de un conjunto de datos aplicando medidas de tendencia central y
        dispersión
      </p>
    </div>

    <div class="exercise-intro">
      <h3>🎓 Caso de Estudio: Evaluación de Desempeño de Vendedores</h3>
      <p>
        Una empresa de tecnología quiere analizar las ventas mensuales (en miles de dólares) de sus
        15 vendedores durante el último mes. El objetivo es entender el desempeño del equipo,
        identificar vendedores destacados, detectar necesidades de capacitación y establecer metas
        realistas para el próximo período.
      </p>

      <div class="objectives">
        <h4>Objetivos del Análisis:</h4>
        <ul>
          <li>📊 Determinar el nivel de ventas típico del equipo</li>
          <li>📈 Identificar la dispersión en el desempeño</li>
          <li>🎯 Detectar vendedores con desempeño excepcional o bajo</li>
          <li>💼 Proporcionar recomendaciones basadas en datos</li>
        </ul>
      </div>
    </div>

    <div class="complete-example">
      <!-- PARTE 1: DATOS ORIGINALES -->
      <div class="section-header">
        <h2>PARTE 1: Recopilación de Datos</h2>
      </div>

      <div class="example-step">
        <h4>📋 Paso 1: Datos Recopilados</h4>
        <div class="data-display">
          <strong>Ventas mensuales (en miles $):</strong><br />
          {{ datos.join(', ') }}
        </div>
        <div class="data-info">
          <p><strong>Total de vendedores (n):</strong> {{ n }}</p>
          <p><strong>Período:</strong> Mes de septiembre 2025</p>
          <p><strong>Unidad:</strong> Miles de dólares (k)</p>
        </div>
      </div>

      <!-- PARTE 2: MEDIDAS DE TENDENCIA CENTRAL -->
      <div class="section-header">
        <h2>PARTE 2: Medidas de Tendencia Central</h2>
        <p class="section-desc">
          Estas medidas nos ayudan a identificar el valor "típico" o "central" de las ventas.
        </p>
      </div>

      <!-- Cálculo de Media -->
      <div class="example-step">
        <h4>📊 Paso 2: Calcular la Media (Promedio)</h4>
        <div class="calculation-detail">
          <p><strong>¿Qué es?</strong> El promedio aritmético de todas las ventas.</p>
          <p><strong>Fórmula:</strong></p>
          <div v-html="renderLatexDisplay('\\bar{X} = \\frac{\\sum X}{n}')"></div>

          <p><strong>Sustituyendo valores:</strong></p>
          <div class="calc-process">
            <div v-html="renderLatex('\\sum X = ' + datos.join(' + '))"></div>
            <div v-html="renderLatex('\\sum X = ' + suma)"></div>
            <div
              v-html="
                renderLatex(
                  '\\bar{X} = \\frac{' + suma + '}{' + n + '} = ' + media.toFixed(2) + ' \\text{k}',
                )
              "
            ></div>
          </div>
        </div>

        <div class="interpretation-box">
          <h5>💡 Interpretación:</h5>
          <p>
            La <strong>venta promedio</strong> del equipo es de
            <strong>${{ media.toFixed(2) }}k</strong> mensuales. Si todas las ventas se
            distribuyeran equitativamente entre los 15 vendedores, cada uno tendría esta cifra.
          </p>
          <p>
            <strong>Útil para:</strong> Calcular el ingreso total del equipo y establecer
            presupuestos.
          </p>
        </div>
      </div>

      <!-- Cálculo de Mediana -->
      <div class="example-step">
        <h4>📊 Paso 3: Calcular la Mediana (Valor Central)</h4>
        <div class="calculation-detail">
          <p><strong>¿Qué es?</strong> El valor que divide al equipo en dos mitades iguales.</p>
          <p><strong>Proceso:</strong> Primero ordenamos los datos de menor a mayor.</p>
          <div class="data-display">
            {{ datosOrdenados.join(', ') }}
          </div>

          <p>
            <strong
              >Como n = {{ n }} (impar), la mediana es el valor en la posición central:</strong
            >
          </p>
          <p>Posición: {{ Math.ceil(n / 2) }}</p>
          <div class="data-display highlighted">
            <span v-for="(val, idx) in datosOrdenados" :key="idx">
              <span v-if="idx === Math.floor(n / 2)" class="highlight">{{ val }}</span>
              <span v-else>{{ val }}</span>
              <span v-if="idx < n - 1">, </span>
            </span>
          </div>
          <div class="result-highlight">
            <strong>Mediana = ${{ mediana }}k</strong>
          </div>
        </div>

        <div class="interpretation-box">
          <h5>💡 Interpretación:</h5>
          <p>
            La <strong>mediana</strong> es de <strong>${{ mediana }}k</strong>. Esto significa que:
          </p>
          <ul>
            <li>
              ✅ El 50% de los vendedores vende <strong>menos de ${{ mediana }}k</strong>
            </li>
            <li>
              ✅ El 50% de los vendedores vende <strong>más de ${{ mediana }}k</strong>
            </li>
          </ul>
          <p>
            <strong>Útil para:</strong> Identificar el vendedor "típico" sin que afecten los valores
            extremos.
          </p>
        </div>
      </div>

      <!-- Cálculo de Moda -->
      <div class="example-step">
        <h4>📊 Paso 4: Calcular la Moda (Valor Más Frecuente)</h4>
        <div class="calculation-detail">
          <p><strong>¿Qué es?</strong> El nivel de ventas que más vendedores alcanzan.</p>
          <p><strong>Tabla de frecuencias:</strong></p>
          <table class="frequency-table">
            <thead>
              <tr>
                <th>Ventas ($k)</th>
                <th>Frecuencia</th>
                <th>Vendedores</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(freq, valor) in frecuencias"
                :key="valor"
                :class="{ 'highlight-row': modas.includes(Number(valor)) }"
              >
                <td>${{ valor }}k</td>
                <td>{{ freq }}</td>
                <td>{{ '⭐'.repeat(freq) }}</td>
              </tr>
            </tbody>
          </table>

          <div class="result-highlight" v-if="modas.length > 0">
            <strong v-if="modas.length === 1">Moda = ${{ modas[0] }}k</strong>
            <strong v-else>Modas = ${{ modas.join(', $') }}k (Distribución Bimodal)</strong>
          </div>
        </div>

        <div class="interpretation-box">
          <h5>💡 Interpretación:</h5>
          <p v-if="modas.length === 1">
            El valor de ventas <strong>más frecuente</strong> es <strong>${{ modas[0] }}k</strong>.
            {{ frecuencias[modas[0]] }} vendedores alcanzaron este nivel de ventas.
          </p>
          <p v-else-if="modas.length > 1">
            Hay <strong>dos valores igualmente frecuentes</strong>: ${{ modas.join('k y $') }}k.
            Esto sugiere que existen <strong>dos grupos principales</strong> de desempeño en el
            equipo.
          </p>
          <p>
            <strong>Útil para:</strong> Establecer metas alcanzables basadas en lo que ya logra la
            mayoría.
          </p>
        </div>
      </div>

      <!-- Comparación -->
      <div class="example-step">
        <h4>🔍 Paso 5: Comparación de las Tres Medidas</h4>
        <div class="comparison-summary">
          <div class="measure-summary">
            <div class="measure-item">
              <h5>Media</h5>
              <div class="measure-value">${{ media.toFixed(2) }}k</div>
              <p class="measure-label">Promedio aritmético</p>
            </div>
            <div class="measure-item">
              <h5>Mediana</h5>
              <div class="measure-value">${{ mediana }}k</div>
              <p class="measure-label">Valor central</p>
            </div>
            <div class="measure-item" v-if="modas.length > 0">
              <h5>Moda</h5>
              <div class="measure-value">${{ modas.join(', $') }}k</div>
              <p class="measure-label">Más frecuente</p>
            </div>
          </div>

          <div class="skew-analysis">
            <h5>📈 Análisis de la Distribución:</h5>
            <div v-if="media > mediana + 2" class="skew-positive">
              <strong>Sesgo Positivo (Derecha)</strong>
              <p>Media (${{ media.toFixed(2) }}k) > Mediana (${{ mediana }}k)</p>
              <p>
                <strong>Significado:</strong> Hay algunos vendedores "estrella" con ventas muy altas
                que elevan el promedio. La mayoría del equipo vende menos que el promedio.
              </p>
              <p><strong>Implicación:</strong> La mediana representa mejor al vendedor típico.</p>
            </div>
            <div v-else-if="media < mediana - 2" class="skew-negative">
              <strong>Sesgo Negativo (Izquierda)</strong>
              <p>Media (${{ media.toFixed(2) }}k) &lt; Mediana (${{ mediana }}k)</p>
              <p>
                <strong>Significado:</strong> Hay algunos vendedores con ventas muy bajas que
                reducen el promedio.
              </p>
            </div>
            <div v-else class="skew-symmetric">
              <strong>Distribución Aproximadamente Simétrica</strong>
              <p>Media (${{ media.toFixed(2) }}k) ≈ Mediana (${{ mediana }}k)</p>
              <p>
                <strong>Significado:</strong> Los datos están equilibrados. Tanto la media como la
                mediana son representativas.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- PARTE 3: MEDIDAS DE DISPERSIÓN -->
      <div class="section-header">
        <h2>PARTE 3: Medidas de Dispersión</h2>
        <p class="section-desc">
          Estas medidas nos indican qué tan variables son las ventas entre los vendedores.
        </p>
      </div>

      <!-- Rango -->
      <div class="example-step">
        <h4>📏 Paso 6: Calcular el Rango</h4>
        <div class="calculation-detail">
          <p><strong>¿Qué es?</strong> La diferencia entre las ventas más altas y más bajas.</p>
          <p><strong>Fórmula:</strong> Rango = Valor Máximo - Valor Mínimo</p>

          <div class="calc-process">
            <p><strong>Valor máximo:</strong> ${{ max }}k</p>
            <p><strong>Valor mínimo:</strong> ${{ min }}k</p>
            <div
              v-html="
                renderLatex('\\text{Rango} = ' + max + ' - ' + min + ' = ' + rango + ' \\text{k}')
              "
            ></div>
          </div>

          <div class="result-highlight">
            <strong>Rango = ${{ rango }}k</strong>
          </div>
        </div>

        <div class="interpretation-box">
          <h5>💡 Interpretación:</h5>
          <p>
            La <strong>diferencia</strong> entre el mejor vendedor (${{ max }}k) y el de menor
            desempeño (${{ min }}k) es de <strong>${{ rango }}k</strong>.
          </p>
          <p v-if="rango > 30">
            <strong>⚠️ Conclusión:</strong> Existe una <strong>alta variabilidad</strong> en el
            equipo. Hay una brecha significativa entre el mejor y peor desempeño.
          </p>
          <p v-else>
            <strong>✅ Conclusión:</strong> La variabilidad es <strong>moderada</strong>. El equipo
            tiene un desempeño relativamente homogéneo.
          </p>
          <p>
            <strong>Limitación:</strong> Solo considera dos valores, puede ser engañoso si hay
            outliers.
          </p>
        </div>
      </div>

      <!-- Varianza -->
      <div class="example-step">
        <h4>📊 Paso 7: Calcular la Varianza</h4>
        <div class="calculation-detail">
          <p>
            <strong>¿Qué es?</strong> El promedio de las desviaciones al cuadrado respecto a la
            media.
          </p>
          <p><strong>Fórmula:</strong></p>
          <div v-html="renderLatexDisplay('s^2 = \\frac{\\sum (X - \\bar{X})^2}{n-1}')"></div>

          <p><strong>Tabla de cálculos:</strong></p>
          <table class="calculation-table">
            <thead>
              <tr>
                <th>Ventas (X)</th>
                <th v-html="renderLatex('X - \\bar{X}')"></th>
                <th v-html="renderLatex('(X - \\bar{X})^2')"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(dato, index) in datos" :key="index">
                <td>${{ dato }}k</td>
                <td>{{ (dato - media).toFixed(2) }}</td>
                <td>{{ Math.pow(dato - media, 2).toFixed(2) }}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="2"><strong>Suma:</strong></td>
                <td>
                  <strong>{{ sumaCuadrados.toFixed(2) }}</strong>
                </td>
              </tr>
            </tfoot>
          </table>

          <div class="calc-process">
            <div
              v-html="
                renderLatex(
                  's^2 = \\frac{' +
                    sumaCuadrados.toFixed(2) +
                    '}{' +
                    (n - 1) +
                    '} = ' +
                    varianza.toFixed(2),
                )
              "
            ></div>
          </div>

          <div class="result-highlight">
            <strong>Varianza = {{ varianza.toFixed(2) }}</strong>
          </div>
        </div>

        <div class="interpretation-box">
          <h5>💡 Interpretación:</h5>
          <p>
            La <strong>varianza</strong> es de <strong>{{ varianza.toFixed(2) }}</strong
            >.
          </p>
          <p>
            <strong>Problema:</strong> Las unidades están "al cuadrado" (k²), lo que dificulta su
            interpretación directa.
          </p>
          <p>
            <strong>Solución:</strong> Calcular la desviación estándar (raíz cuadrada de la
            varianza).
          </p>
        </div>
      </div>

      <!-- Desviación Estándar -->
      <div class="example-step">
        <h4>📊 Paso 8: Calcular la Desviación Estándar</h4>
        <div class="calculation-detail">
          <p>
            <strong>¿Qué es?</strong> La raíz cuadrada de la varianza. Mide la dispersión promedio
            en las mismas unidades que los datos originales.
          </p>
          <p><strong>Fórmula:</strong></p>
          <div v-html="renderLatexDisplay('s = \\sqrt{s^2}')"></div>

          <div class="calc-process">
            <div
              v-html="
                renderLatex(
                  's = \\sqrt{' +
                    varianza.toFixed(2) +
                    '} = ' +
                    desviacion.toFixed(2) +
                    ' \\text{k}',
                )
              "
            ></div>
          </div>

          <div class="result-highlight">
            <strong>Desviación Estándar = ${{ desviacion.toFixed(2) }}k</strong>
          </div>
        </div>

        <div class="interpretation-box">
          <h5>💡 Interpretación:</h5>
          <p>
            La <strong>desviación estándar</strong> es de
            <strong>${{ desviacion.toFixed(2) }}k</strong>.
          </p>
          <p>
            <strong>Significado:</strong> En promedio, las ventas de cada vendedor se desvían
            aproximadamente ${{ desviacion.toFixed(2) }}k de la media (${{ media.toFixed(2) }}k).
          </p>

          <div v-if="desviacion < media * 0.2" class="insight-highlight">
            <p>
              ✅ <strong>Baja dispersión:</strong> El equipo tiene un desempeño
              <strong>homogéneo</strong>. La mayoría de vendedores está cerca del promedio.
            </p>
          </div>
          <div v-else-if="desviacion > media * 0.4" class="insight-highlight">
            <p>
              ⚠️ <strong>Alta dispersión:</strong> El equipo tiene un desempeño
              <strong>heterogéneo</strong>. Hay grandes diferencias entre vendedores.
            </p>
          </div>
          <div v-else class="insight-highlight">
            <p>
              📊 <strong>Dispersión moderada:</strong> Hay cierta variabilidad, pero no es excesiva.
            </p>
          </div>
        </div>
      </div>

      <!-- Coeficiente de Variación -->
      <div class="example-step">
        <h4>📊 Paso 9: Calcular el Coeficiente de Variación</h4>
        <div class="calculation-detail">
          <p>
            <strong>¿Qué es?</strong> La desviación estándar expresada como porcentaje de la media.
            Permite comparar variabilidades de diferentes conjuntos de datos.
          </p>
          <p><strong>Fórmula:</strong></p>
          <div v-html="renderLatexDisplay('CV = \\frac{s}{\\bar{X}} \\times 100\\%')"></div>

          <div class="calc-process">
            <div
              v-html="
                renderLatex(
                  'CV = \\frac{' +
                    desviacion.toFixed(2) +
                    '}{' +
                    media.toFixed(2) +
                    '} \\times 100\\% = ' +
                    coeficienteVariacion.toFixed(2) +
                    '\\%',
                )
              "
            ></div>
          </div>

          <div class="result-highlight">
            <strong>Coeficiente de Variación = {{ coeficienteVariacion.toFixed(2) }}%</strong>
          </div>
        </div>

        <div class="interpretation-box">
          <h5>💡 Interpretación:</h5>
          <p>
            El <strong>coeficiente de variación</strong> es de
            <strong>{{ coeficienteVariacion.toFixed(2) }}%</strong>.
          </p>

          <div v-if="coeficienteVariacion < 15" class="insight-highlight">
            <p>
              ✅ <strong>CV &lt; 15%:</strong> Variabilidad <strong>baja</strong>. Los datos son muy
              homogéneos.
            </p>
          </div>
          <div v-else-if="coeficienteVariacion < 30" class="insight-highlight">
            <p>
              📊 <strong>15% ≤ CV &lt; 30%:</strong> Variabilidad <strong>moderada</strong>.
              Dispersión normal en datos comerciales.
            </p>
          </div>
          <div v-else class="insight-highlight">
            <p>
              ⚠️ <strong>CV ≥ 30%:</strong> Variabilidad <strong>alta</strong>. Los datos son muy
              heterogéneos.
            </p>
          </div>

          <p>
            <strong>Útil para:</strong> Comparar la variabilidad de este equipo con otros equipos o
            períodos anteriores.
          </p>
        </div>
      </div>

      <!-- Regla Empírica -->
      <div class="example-step">
        <h4>📊 Paso 10: Aplicar la Regla Empírica (68-95-99.7)</h4>
        <div class="calculation-detail">
          <p>
            <strong>¿Qué es?</strong> Una regla que nos dice qué porcentaje de datos cae dentro de
            cierto número de desviaciones estándar de la media (válida para distribuciones
            aproximadamente normales).
          </p>

          <div class="empirical-rule-visual">
            <div class="rule-item">
              <h5>📊 1 Desviación Estándar (≈68%)</h5>
              <div class="calc-process">
                <div
                  v-html="
                    renderLatex(
                      '\\bar{X} \\pm 1s = ' + media.toFixed(2) + ' \\pm ' + desviacion.toFixed(2),
                    )
                  "
                ></div>
                <div
                  v-html="
                    renderLatex(
                      '[' +
                        (media - desviacion).toFixed(2) +
                        ', ' +
                        (media + desviacion).toFixed(2) +
                        ']',
                    )
                  "
                ></div>
              </div>
              <p>
                Aproximadamente <strong>68% de los vendedores</strong> (≈10 vendedores) deberían
                vender entre
                <strong
                  >${{ (media - desviacion).toFixed(2) }}k y ${{
                    (media + desviacion).toFixed(2)
                  }}k</strong
                >.
              </p>
            </div>

            <div class="rule-item">
              <h5>📊 2 Desviaciones Estándar (≈95%)</h5>
              <div class="calc-process">
                <div
                  v-html="
                    renderLatex(
                      '\\bar{X} \\pm 2s = ' +
                        media.toFixed(2) +
                        ' \\pm ' +
                        (2 * desviacion).toFixed(2),
                    )
                  "
                ></div>
                <div
                  v-html="
                    renderLatex(
                      '[' +
                        (media - 2 * desviacion).toFixed(2) +
                        ', ' +
                        (media + 2 * desviacion).toFixed(2) +
                        ']',
                    )
                  "
                ></div>
              </div>
              <p>
                Aproximadamente <strong>95% de los vendedores</strong> (≈14 vendedores) deberían
                vender entre
                <strong
                  >${{ (media - 2 * desviacion).toFixed(2) }}k y ${{
                    (media + 2 * desviacion).toFixed(2)
                  }}k</strong
                >.
              </p>
            </div>

            <div class="rule-item">
              <h5>📊 3 Desviaciones Estándar (≈99.7%)</h5>
              <div class="calc-process">
                <div
                  v-html="
                    renderLatex(
                      '\\bar{X} \\pm 3s = ' +
                        media.toFixed(2) +
                        ' \\pm ' +
                        (3 * desviacion).toFixed(2),
                    )
                  "
                ></div>
                <div
                  v-html="
                    renderLatex(
                      '[' +
                        (media - 3 * desviacion).toFixed(2) +
                        ', ' +
                        (media + 3 * desviacion).toFixed(2) +
                        ']',
                    )
                  "
                ></div>
              </div>
              <p>
                Aproximadamente <strong>99.7% de los vendedores</strong> (casi todos) deberían
                vender entre
                <strong
                  >${{ (media - 3 * desviacion).toFixed(2) }}k y ${{
                    (media + 3 * desviacion).toFixed(2)
                  }}k</strong
                >.
              </p>
            </div>
          </div>
        </div>

        <div class="interpretation-box">
          <h5>💡 Aplicación Práctica:</h5>
          <p>
            Vendedores
            <strong
              >fuera del rango [${{ (media - 2 * desviacion).toFixed(2) }}, ${{
                (media + 2 * desviacion).toFixed(2)
              }}]</strong
            >
            son <strong>atípicos</strong> (solo 5% de probabilidad):
          </p>
          <ul>
            <li v-if="max > media + 2 * desviacion">
              ✨ <strong>Vendedor estrella:</strong> ${{ max }}k está por encima de 2 desviaciones
              estándar. Desempeño excepcional.
            </li>
            <li v-if="min < media - 2 * desviacion">
              ⚠️ <strong>Vendedor con bajo desempeño:</strong> ${{ min }}k está por debajo de 2
              desviaciones estándar. Requiere atención.
            </li>
          </ul>
        </div>
      </div>

      <!-- PARTE 4: CONCLUSIONES Y RECOMENDACIONES -->
      <div class="section-header">
        <h2>PARTE 4: Conclusiones y Recomendaciones</h2>
      </div>

      <div class="example-step conclusion">
        <h4>🎯 Resumen Ejecutivo del Análisis</h4>
        <div class="conclusion-box">
          <div class="summary-grid">
            <div class="summary-card">
              <h5>📊 Medidas de Tendencia Central</h5>
              <ul>
                <li><strong>Media:</strong> ${{ media.toFixed(2) }}k (promedio del equipo)</li>
                <li><strong>Mediana:</strong> ${{ mediana }}k (vendedor típico)</li>
                <li>
                  <strong>Moda:</strong> ${{
                    modas.length > 0 ? '$' + modas.join(', $') + 'k' : 'No hay'
                  }}
                </li>
              </ul>
            </div>

            <div class="summary-card">
              <h5>📏 Medidas de Dispersión</h5>
              <ul>
                <li><strong>Rango:</strong> ${{ rango }}k</li>
                <li><strong>Desviación Estándar:</strong> ${{ desviacion.toFixed(2) }}k</li>
                <li>
                  <strong>Coeficiente de Variación:</strong> {{ coeficienteVariacion.toFixed(2) }}%
                </li>
              </ul>
            </div>
          </div>

          <div class="conclusion-points">
            <div class="conclusion-point">
              <h5>1️⃣ Nivel de Desempeño</h5>
              <p>
                El vendedor típico genera <strong>${{ mediana }}k</strong> en ventas mensuales. El
                promedio del equipo es de <strong>${{ media.toFixed(2) }}k</strong>.
              </p>
            </div>

            <div class="conclusion-point" v-if="media > mediana + 2">
              <h5>2️⃣ Distribución Sesgada</h5>
              <p>
                La distribución presenta <strong>sesgo positivo</strong>. Esto indica que algunos
                vendedores "estrella" están elevando significativamente el promedio, mientras que la
                mayoría vende menos que el promedio.
              </p>
            </div>

            <div class="conclusion-point">
              <h5>3️⃣ Variabilidad del Equipo</h5>
              <p v-if="coeficienteVariacion < 15">
                El equipo muestra <strong>baja variabilidad</strong> (CV={{
                  coeficienteVariacion.toFixed(2)
                }}%). El desempeño es muy <strong>homogéneo</strong>.
              </p>
              <p v-else-if="coeficienteVariacion < 30">
                El equipo muestra <strong>variabilidad moderada</strong> (CV={{
                  coeficienteVariacion.toFixed(2)
                }}%). Hay diferencias razonables entre vendedores.
              </p>
              <p v-else>
                El equipo muestra <strong>alta variabilidad</strong> (CV={{
                  coeficienteVariacion.toFixed(2)
                }}%). Existen grandes diferencias en el desempeño.
              </p>
            </div>

            <div
              class="conclusion-point"
              v-if="max > media + 2 * desviacion || min < media - 2 * desviacion"
            >
              <h5>4️⃣ Valores Atípicos Detectados</h5>
              <ul>
                <li v-if="max > media + 2 * desviacion">
                  ✨ <strong>Vendedor excepcional:</strong> ${{ max }}k (más de 2σ por encima de la
                  media)
                </li>
                <li v-if="min < media - 2 * desviacion">
                  ⚠️ <strong>Vendedor con dificultades:</strong> ${{ min }}k (más de 2σ por debajo
                  de la media)
                </li>
              </ul>
            </div>
          </div>

          <div class="recommendations">
            <h5>💼 Recomendaciones de Negocio</h5>

            <div class="recommendation-item">
              <h6>📈 Establecimiento de Metas</h6>
              <ul>
                <li><strong>Meta Base:</strong> ${{ mediana }}k (50% del equipo ya la alcanza)</li>
                <li>
                  <strong>Meta Desafiante:</strong> ${{ media.toFixed(2) }}k (promedio actual)
                </li>
                <li>
                  <strong>Meta de Excelencia:</strong> ${{ (media + desviacion).toFixed(2) }}k (1
                  desviación estándar arriba)
                </li>
              </ul>
            </div>

            <div class="recommendation-item" v-if="max > media + 2 * desviacion">
              <h6>🌟 Reconocimiento y Aprendizaje</h6>
              <p>
                Reconocer públicamente al vendedor top (${{ max }}k) y organizar sesiones donde
                comparta sus estrategias con el equipo.
              </p>
            </div>

            <div class="recommendation-item" v-if="min < media - 2 * desviacion">
              <h6>📚 Capacitación Focalizada</h6>
              <p>
                Brindar capacitación intensiva y mentoría al vendedor con menor desempeño (${{
                  min
                }}k). Considerar re-asignación de zona o productos si no mejora.
              </p>
            </div>

            <div class="recommendation-item" v-if="coeficienteVariacion > 30">
              <h6>⚖️ Nivelación del Equipo</h6>
              <p>
                La alta variabilidad sugiere implementar programas de capacitación escalonada y
                sistema de mentorías para reducir la brecha.
              </p>
            </div>

            <div class="recommendation-item">
              <h6>💰 Sistema de Bonificaciones</h6>
              <p>Propuesta de bonos escalonados:</p>
              <ul>
                <li>Bono Básico: Al alcanzar ${{ mediana }}k (50% del salario base)</li>
                <li>
                  Bono Intermedio: Al alcanzar ${{ media.toFixed(2) }}k (75% del salario base)
                </li>
                <li>
                  Bono Excelencia: Al superar ${{ (media + desviacion).toFixed(2) }}k (100% del
                  salario base)
                </li>
              </ul>
            </div>
          </div>

          <div class="final-takeaway">
            <h5>💼 Mensaje para la Gerencia</h5>
            <p>
              "Nuestro equipo de {{ n }} vendedores generó ventas promedio de
              <strong>${{ media.toFixed(2) }}k</strong> en septiembre. El vendedor típico está en
              <strong>${{ mediana }}k</strong>.
              <span v-if="media > mediana + 2">
                Tenemos vendedores excepcionales que elevan nuestro promedio, lo cual es excelente,
                pero también indica oportunidad de nivelar al equipo hacia arriba.
              </span>
              <span v-if="coeficienteVariacion > 25">
                La variabilidad de {{ coeficienteVariacion.toFixed(0) }}% indica que podemos mejorar
                la consistencia del equipo mediante capacitación.
              </span>
              Recomendamos establecer metas escalonadas: ${{ mediana }}k como base, ${{
                media.toFixed(2)
              }}k como objetivo y ${{ (media + desviacion).toFixed(2) }}k como excelencia, con un
              sistema de bonos proporcionales."
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import katex from 'katex'
import 'katex/dist/katex.min.css'

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

// Datos del ejercicio
const datos = [35, 42, 38, 55, 41, 37, 45, 39, 48, 40, 43, 36, 52, 44, 38]
const n = datos.length

// Cálculos de Tendencia Central
const suma = computed(() => datos.reduce((acc, val) => acc + val, 0))
const media = computed(() => suma.value / n)

const datosOrdenados = computed(() => [...datos].sort((a, b) => a - b))
const mediana = computed(() => {
  return n % 2 === 0
    ? (datosOrdenados.value[n / 2 - 1] + datosOrdenados.value[n / 2]) / 2
    : datosOrdenados.value[Math.floor(n / 2)]
})

const frecuencias = computed(() => {
  const freq: Record<number, number> = {}
  datos.forEach((valor) => {
    freq[valor] = (freq[valor] || 0) + 1
  })
  return freq
})

const modas = computed(() => {
  const maxFreq = Math.max(...Object.values(frecuencias.value))
  const modasArray = Object.keys(frecuencias.value)
    .map(Number)
    .filter((key) => frecuencias.value[key] === maxFreq)

  // Solo devolver modas si no todos los valores tienen la misma frecuencia
  return modasArray.length === Object.keys(frecuencias.value).length ? [] : modasArray
})

// Cálculos de Dispersión
const max = computed(() => Math.max(...datos))
const min = computed(() => Math.min(...datos))
const rango = computed(() => max.value - min.value)

const sumaCuadrados = computed(() => {
  return datos.reduce((acc, val) => acc + Math.pow(val - media.value, 2), 0)
})

const varianza = computed(() => sumaCuadrados.value / (n - 1))
const desviacion = computed(() => Math.sqrt(varianza.value))
const coeficienteVariacion = computed(() => (desviacion.value / media.value) * 100)
</script>

<style scoped>
@import '@/assets/styles/main.css';

.exercise-intro {
  background: linear-gradient(135deg, var(--accent), #27ae60);
  color: white;
  padding: 2.5rem;
  border-radius: 10px;
  margin-bottom: 2rem;
  box-shadow: var(--shadow);
}

.exercise-intro h3 {
  margin-bottom: 1rem;
  font-size: 1.8rem;
}

.objectives {
  background: rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: 8px;
  margin-top: 1.5rem;
}

.objectives h4 {
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.objectives ul {
  list-style: none;
  padding: 0;
}

.objectives li {
  padding: 0.5rem 0;
  font-size: 1.05rem;
}

.section-header {
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  color: white;
  padding: 2rem;
  border-radius: 10px;
  margin: 3rem 0 2rem 0;
  text-align: center;
}

.section-header h2 {
  margin-bottom: 0.5rem;
  font-size: 2rem;
}

.section-desc {
  font-size: 1.1rem;
  opacity: 0.95;
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
  font-size: 1.4rem;
}

.data-display {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  margin: 1rem 0;
  font-family: 'Courier New', monospace;
  border: 2px solid var(--primary);
}

.data-info {
  background: white;
  padding: 1rem;
  border-radius: 6px;
  margin-top: 1rem;
}

.data-info p {
  margin: 0.5rem 0;
}

.calculation-detail {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  margin: 1rem 0;
}

.calc-process {
  background: var(--light);
  padding: 1.5rem;
  border-radius: 6px;
  margin: 1rem 0;
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
  font-size: 1.2rem;
}

.interpretation-box ul {
  margin-left: 1.5rem;
  margin-top: 0.5rem;
}

.interpretation-box li {
  margin: 0.5rem 0;
}

.result-highlight {
  background: linear-gradient(135deg, var(--accent), #27ae60);
  color: white;
  padding: 1.5rem;
  border-radius: 6px;
  margin: 1rem 0;
  text-align: center;
  font-size: 1.3rem;
}

.frequency-table {
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
}

.frequency-table th,
.frequency-table td {
  padding: 0.75rem;
  text-align: center;
  border: 1px solid var(--light);
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

.calculation-table {
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
  font-size: 0.95rem;
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
  transition: var(--transition);
}

.measure-item:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow);
}

.measure-item h5 {
  color: var(--gray);
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  text-transform: uppercase;
}

.measure-value {
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--secondary);
  margin: 0.5rem 0;
}

.measure-label {
  font-size: 0.85rem;
  color: var(--gray);
  margin-top: 0.5rem;
}

.skew-analysis {
  background: var(--light);
  padding: 1.5rem;
  border-radius: 8px;
}

.skew-analysis h5 {
  color: var(--secondary);
  margin-bottom: 1rem;
}

.skew-positive,
.skew-negative,
.skew-symmetric {
  padding: 1.5rem;
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

.insight-highlight {
  background: #e8f5e9;
  border-left: 3px solid var(--accent);
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 4px;
}

.empirical-rule-visual {
  display: grid;
  gap: 1.5rem;
  margin: 1.5rem 0;
}

.rule-item {
  background: var(--light);
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid var(--primary);
}

.rule-item h5 {
  color: var(--secondary);
  margin-bottom: 1rem;
}

.conclusion {
  background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
  border: 3px solid var(--primary);
}

.conclusion-box {
  background: white;
  padding: 2.5rem;
  border-radius: 8px;
}

.summary-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.summary-card {
  background: var(--light);
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid var(--primary);
}

.summary-card h5 {
  color: var(--secondary);
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.summary-card ul {
  list-style: none;
  padding: 0;
}

.summary-card li {
  padding: 0.5rem 0;
  font-size: 1.05rem;
}

.conclusion-points {
  display: grid;
  gap: 1.5rem;
  margin: 2rem 0;
}

.conclusion-point {
  background: var(--light);
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid var(--accent);
}

.conclusion-point h5 {
  color: var(--secondary);
  margin-bottom: 0.75rem;
  font-size: 1.1rem;
}

.conclusion-point ul {
  margin-left: 1.5rem;
  margin-top: 0.5rem;
}

.recommendations {
  background: #fff3cd;
  padding: 2rem;
  border-radius: 8px;
  margin: 2rem 0;
}

.recommendations h5 {
  color: #f57c00;
  margin-bottom: 1.5rem;
  font-size: 1.3rem;
  text-align: center;
}

.recommendation-item {
  background: white;
  padding: 1.5rem;
  border-radius: 6px;
  margin-bottom: 1.5rem;
}

.recommendation-item h6 {
  color: var(--secondary);
  margin-bottom: 0.75rem;
  font-size: 1.1rem;
}

.recommendation-item ul {
  margin-left: 1.5rem;
  margin-top: 0.5rem;
}

.final-takeaway {
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  color: white;
  padding: 2.5rem;
  border-radius: 10px;
  margin-top: 2rem;
  text-align: center;
}

.final-takeaway h5 {
  margin-bottom: 1rem;
  font-size: 1.4rem;
}

.final-takeaway p {
  font-size: 1.1rem;
  line-height: 1.8;
}

.highlight {
  background: #fff3cd;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-weight: bold;
  color: var(--dark);
}

@media (max-width: 768px) {
  .measure-summary,
  .summary-grid {
    grid-template-columns: 1fr;
  }

  .exercise-intro h3 {
    font-size: 1.4rem;
  }

  .section-header h2 {
    font-size: 1.5rem;
  }
}
</style>
