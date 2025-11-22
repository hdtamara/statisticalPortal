<template>
  <div class="factor-correccion-view">
    <h1>📐 Factor de Corrección para Poblaciones Finitas</h1>
    <p class="intro">
      Aprende cuándo y cómo aplicar el factor de corrección al trabajar con poblaciones finitas,
      mejorando la precisión de tus estimaciones.
    </p>

    <!-- Tabs de navegación -->
    <div class="tabs">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        :class="['tab-button', { active: activeTab === tab.id }]"
        @click="activeTab = tab.id"
      >
        {{ tab.label }}
      </button>
    </div>

    <!-- Concepto de Población Finita -->
    <div v-if="activeTab === 'concepto'" class="content-section">
      <h2>🎯 ¿Qué es una Población Finita?</h2>

      <div class="theory-box">
        <h3>Definición</h3>
        <p>
          Una <strong>población finita</strong> es aquella que tiene un límite superior definido, es
          decir, podemos contar todos sus elementos.
        </p>
      </div>

      <div class="examples-grid">
        <div class="example-card">
          <div class="example-icon">🎓</div>
          <h4>Ejemplo Académico</h4>
          <p>Hay <strong>12,179 estudiantes</strong> matriculados en Eastern Illinois University</p>
        </div>

        <div class="example-card">
          <div class="example-icon">🏭</div>
          <h4>Ejemplo Empresarial</h4>
          <p>Hay <strong>40 empleados</strong> en la empresa Spence Sprockets</p>
        </div>

        <div class="example-card">
          <div class="example-icon">🚗</div>
          <h4>Ejemplo Industrial</h4>
          <p>
            Chrysler ensambló <strong>917 Jeeps Wrangler</strong> en la planta de Alexis Avenue ayer
          </p>
        </div>

        <div class="example-card">
          <div class="example-icon">🏥</div>
          <h4>Ejemplo Médico</h4>
          <p>
            Había <strong>65 pacientes</strong> programados para cirugía en St. Rose Memorial
            Hospital ayer
          </p>
        </div>
      </div>

      <div class="concept-card">
        <h3>Características de Poblaciones Finitas</h3>
        <ul>
          <li>✅ Tiene un número específico y contable de elementos (N)</li>
          <li>
            ✅ Puede ser pequeña (estudiantes en un curso) o grande (personas mayores en Florida)
          </li>
          <li>✅ Los elementos son identificables y enumerables</li>
          <li>
            ✅ Requiere ajustes especiales cuando la muestra es una porción significativa de la
            población
          </li>
        </ul>
      </div>

      <div class="theory-box">
        <h3>¿Cuándo es Necesario el Factor de Corrección?</h3>
        <p>
          Cuando trabajamos con poblaciones finitas y la muestra representa una
          <strong>porción significativa</strong> de la población, debemos ajustar los errores
          estándar en nuestros cálculos de intervalos de confianza.
        </p>

        <div class="warning-box">
          <h4>⚠️ Regla General</h4>
          <p>
            Si la muestra es mayor al <strong>5% de la población</strong> (n/N &gt; 0.05), debes
            aplicar el factor de corrección.
          </p>
        </div>
      </div>

      <!-- Navegación -->
      <div class="tab-navigation">
        <button @click="activeTab = 'formula'" class="nav-btn nav-btn-next">
          Siguiente: Fórmula del FCP →
        </button>
      </div>
    </div>

    <!-- Fórmula del FCP -->
    <div v-if="activeTab === 'formula'" class="content-section">
      <h2>📐 Fórmula del Factor de Corrección</h2>

      <div class="theory-box formula-section">
        <h3>Factor de Corrección de Población Finita (FCP)</h3>

        <div class="formula-box-large">
          <div v-html="renderLatexDisplay('FCP = \\sqrt{\\frac{N - n}{N - 1}}')"></div>
          <p class="formula-note">
            donde:<br />
            <strong>N:</strong> tamaño total de la población<br />
            <strong>n:</strong> tamaño de la muestra
          </p>
        </div>
      </div>

      <div class="concept-card">
        <h3>💡 ¿Por qué Necesitamos este Factor?</h3>
        <p>
          <strong>Lógica:</strong> Si la muestra es un porcentaje significativo de la población, el
          estimador es <strong>más preciso</strong>. El factor de corrección reduce el error
          estándar, reflejando esta mayor precisión.
        </p>
      </div>

      <div class="example-section">
        <h3>Ejemplo Numérico del Efecto del FCP</h3>
        <p>
          Supongamos una población de <strong>N = 1,000</strong> y una muestra de
          <strong>n = 100</strong>:
        </p>

        <div class="calculation-steps">
          <div class="step">
            <h4>Paso 1: Calcular la razón</h4>
            <div class="calculation">
              <div
                v-html="
                  renderLatex(
                    '\\frac{N - n}{N - 1} = \\frac{1000 - 100}{1000 - 1} = \\frac{900}{999}',
                  )
                "
              ></div>
            </div>
          </div>

          <div class="step">
            <h4>Paso 2: Extraer la raíz cuadrada</h4>
            <div class="calculation">
              <div v-html="renderLatex('FCP = \\sqrt{\\frac{900}{999}} = 0.9492')"></div>
            </div>
          </div>

          <div class="step">
            <h4>Paso 3: Interpretar el resultado</h4>
            <div class="result-box">
              <p>
                El factor de corrección de <strong>0.9492</strong> reduce el error estándar
                aproximadamente un <strong>5%</strong> (1 - 0.9492 = 0.0508)
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="theory-box">
        <h3>Tabla de Efectos del FCP</h3>
        <p>
          Para una población de N = 1,000, observe cómo diferentes tamaños de muestra afectan el
          FCP:
        </p>

        <table class="fcp-table">
          <thead>
            <tr>
              <th>Tamaño de Muestra (n)</th>
              <th>Porcentaje de la Población</th>
              <th>FCP</th>
              <th>Reducción del Error (%)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>50</td>
              <td>5%</td>
              <td>0.9747</td>
              <td>2.53%</td>
            </tr>
            <tr>
              <td>100</td>
              <td>10%</td>
              <td>0.9492</td>
              <td>5.08%</td>
            </tr>
            <tr class="highlight-row">
              <td>200</td>
              <td>20%</td>
              <td>0.8949</td>
              <td>10.51%</td>
            </tr>
            <tr>
              <td>300</td>
              <td>30%</td>
              <td>0.8367</td>
              <td>16.33%</td>
            </tr>
            <tr>
              <td>500</td>
              <td>50%</td>
              <td>0.7071</td>
              <td>29.29%</td>
            </tr>
          </tbody>
        </table>

        <div class="insight-box">
          <p>
            <strong>Observación clave:</strong> A mayor porcentaje muestral, mayor es la reducción
            del error estándar, resultando en intervalos de confianza más estrechos y precisos.
          </p>
        </div>
      </div>

      <!-- Navegación -->
      <div class="tab-navigation">
        <button @click="activeTab = 'concepto'" class="nav-btn nav-btn-prev">
          ← Anterior: Concepto
        </button>
        <button @click="activeTab = 'aplicacion'" class="nav-btn nav-btn-next">
          Siguiente: Aplicación →
        </button>
      </div>
    </div>

    <!-- Aplicación del FCP -->
    <div v-if="activeTab === 'aplicacion'" class="content-section">
      <h2>🔧 Aplicación del Factor de Corrección</h2>

      <div class="theory-box">
        <h3>Intervalos de Confianza con FCP</h3>
        <p>
          Cuando trabajamos con poblaciones finitas, debemos ajustar las fórmulas de los intervalos
          de confianza multiplicando el error estándar por el FCP.
        </p>
      </div>

      <div class="formulas-grid">
        <div class="formula-card">
          <h4>Para la Media Poblacional (σ conocida)</h4>
          <div class="formula-box">
            <div
              v-html="
                renderLatexDisplay(
                  'IC = \\bar{X} \\pm z \\cdot \\frac{\\sigma}{\\sqrt{n}} \\cdot \\sqrt{\\frac{N-n}{N-1}}',
                )
              "
            ></div>
          </div>
        </div>

        <div class="formula-card">
          <h4>Para la Media Poblacional (σ desconocida)</h4>
          <div class="formula-box">
            <div
              v-html="
                renderLatexDisplay(
                  'IC = \\bar{X} \\pm t \\cdot \\frac{s}{\\sqrt{n}} \\cdot \\sqrt{\\frac{N-n}{N-1}}',
                )
              "
            ></div>
          </div>
        </div>

        <div class="formula-card">
          <h4>Para Proporciones</h4>
          <div class="formula-box">
            <div
              v-html="
                renderLatexDisplay(
                  'IC = \\hat{p} \\pm z \\cdot \\sqrt{\\frac{\\hat{p}(1-\\hat{p})}{n}} \\cdot \\sqrt{\\frac{N-n}{N-1}}',
                )
              "
            ></div>
          </div>
        </div>
      </div>

      <div class="example-section">
        <h3>📝 Ejemplo Completo: Contribuciones a la Iglesia</h3>
        <p>
          Hay <strong>250 familias</strong> en Scandia, Pennsylvania. Una muestra aleatoria de
          <strong>40 familias</strong> revela que la contribución anual media fue de
          <strong>$450</strong>, con una desviación estándar de <strong>$75</strong>. Construye un
          intervalo de confianza del 90% para la media poblacional.
        </p>

        <div class="solution-steps">
          <div class="step">
            <h4>Paso 1: Identificar los datos</h4>
            <ul>
              <li>N = 250 (tamaño de la población)</li>
              <li>n = 40 (tamaño de la muestra)</li>
              <li><span v-html="renderLatex('\\bar{X} = \\$450')"></span> (media muestral)</li>
              <li>s = $75 (desviación estándar muestral)</li>
              <li>Nivel de confianza = 90%</li>
            </ul>
          </div>

          <div class="step">
            <h4>Paso 2: Verificar si necesitamos FCP</h4>
            <div class="calculation">
              <div v-html="renderLatex('\\frac{n}{N} = \\frac{40}{250} = 0.16 = 16\\%')"></div>
              <p class="highlight-text">
                16% &gt; 5%, por lo tanto <strong>SÍ necesitamos aplicar el FCP</strong>
              </p>
            </div>
          </div>

          <div class="step">
            <h4>Paso 3: Calcular el FCP</h4>
            <div class="calculation">
              <div
                v-html="
                  renderLatex(
                    'FCP = \\sqrt{\\frac{N-n}{N-1}} = \\sqrt{\\frac{250-40}{250-1}} = \\sqrt{\\frac{210}{249}}',
                  )
                "
              ></div>
              <div v-html="renderLatex('FCP = \\sqrt{0.8434} = 0.9184')"></div>
            </div>
          </div>

          <div class="step">
            <h4>Paso 4: Determinar el valor crítico</h4>
            <p>Para un 90% de confianza con gl = n - 1 = 39, usamos t = 1.685</p>
          </div>

          <div class="step">
            <h4>Paso 5: Calcular el error estándar ajustado</h4>
            <div class="calculation">
              <div
                v-html="
                  renderLatex(
                    'EE_{ajustado} = \\frac{s}{\\sqrt{n}} \\cdot FCP = \\frac{75}{\\sqrt{40}} \\cdot 0.9184',
                  )
                "
              ></div>
              <div v-html="renderLatex('EE_{ajustado} = 11.858 \\cdot 0.9184 = 10.89')"></div>
            </div>
          </div>

          <div class="step">
            <h4>Paso 6: Calcular el margen de error</h4>
            <div class="calculation">
              <div v-html="renderLatex('ME = t \\cdot EE_{ajustado} = 1.685 \\cdot 10.89')"></div>
              <div v-html="renderLatex('ME = 18.35')"></div>
            </div>
          </div>

          <div class="step">
            <h4>Paso 7: Construir el intervalo de confianza</h4>
            <div class="calculation">
              <div v-html="renderLatex('IC = 450 \\pm 18.35 = [431.65, 468.35]')"></div>
            </div>
          </div>

          <div class="result-box">
            <h4>Interpretación:</h4>
            <p>
              Con un 90% de confianza, la contribución anual media de todas las familias en Scandia
              está entre <strong>$431.65 y $468.35</strong>.
            </p>
            <p class="comparison-text">
              <strong>Nota:</strong> Sin el FCP, el margen de error habría sido $19.98. La
              aplicación del FCP redujo el margen de error en aproximadamente 8%, reflejando la
              mayor precisión al muestrear el 16% de la población.
            </p>
          </div>
        </div>
      </div>

      <!-- Navegación -->
      <div class="tab-navigation">
        <button @click="activeTab = 'formula'" class="nav-btn nav-btn-prev">
          ← Anterior: Fórmula
        </button>
        <button @click="activeTab = 'calculadora'" class="nav-btn nav-btn-next">
          Siguiente: Calculadora →
        </button>
      </div>
    </div>

    <!-- Calculadora del FCP -->
    <div v-if="activeTab === 'calculadora'" class="content-section">
      <h2>🧮 Calculadora del Factor de Corrección</h2>

      <div class="interactive-section">
        <h3>Calculadora de FCP e Intervalo de Confianza</h3>
        <p>
          Ingresa los datos de tu población y muestra para calcular el FCP y el intervalo de
          confianza ajustado:
        </p>

        <div class="input-grid">
          <div class="input-group">
            <label>Tamaño de la población (N):</label>
            <input
              v-model.number="calc.N"
              type="number"
              min="1"
              step="1"
              placeholder="Ej: 250"
              class="data-input"
            />
          </div>

          <div class="input-group">
            <label>Tamaño de la muestra (n):</label>
            <input
              v-model.number="calc.n"
              type="number"
              min="1"
              step="1"
              placeholder="Ej: 40"
              class="data-input"
            />
          </div>

          <div class="input-group">
            <label>Media muestral (X̄):</label>
            <input
              v-model.number="calc.media"
              type="number"
              step="0.01"
              placeholder="Ej: 450"
              class="data-input"
            />
          </div>

          <div class="input-group">
            <label>Desviación estándar (s):</label>
            <input
              v-model.number="calc.desv"
              type="number"
              min="0"
              step="0.01"
              placeholder="Ej: 75"
              class="data-input"
            />
          </div>

          <div class="input-group">
            <label>Nivel de confianza:</label>
            <select v-model.number="calc.confianza" class="data-input">
              <option :value="90">90%</option>
              <option :value="95">95%</option>
              <option :value="99">99%</option>
            </select>
          </div>
        </div>

        <button @click="calcularFCP" class="btn btn-primary">Calcular FCP e Intervalo</button>

        <div v-if="calc.resultado !== null" class="result-display">
          <h4>Resultados:</h4>

          <div class="calc-summary">
            <div class="summary-item">
              <span class="label">Porcentaje muestral:</span>
              <span class="value">{{ calc.resultado.porcentaje.toFixed(2) }}%</span>
            </div>
            <div class="summary-item">
              <span class="label">¿Aplicar FCP?:</span>
              <span :class="calc.resultado.necesitaFCP ? 'value-yes' : 'value-no'">
                {{ calc.resultado.necesitaFCP ? 'SÍ' : 'NO' }}
              </span>
            </div>
            <div class="summary-item">
              <span class="label">FCP:</span>
              <span class="value-highlight">{{ calc.resultado.fcp.toFixed(4) }}</span>
            </div>
            <div class="summary-item">
              <span class="label">Reducción del error:</span>
              <span class="value">{{ calc.resultado.reduccion.toFixed(2) }}%</span>
            </div>
          </div>

          <div class="interval-section">
            <h5>Intervalo de Confianza:</h5>
            <div class="interval-display">
              <span class="bracket">[</span>
              <span class="value">{{ calc.resultado.limiteInf.toFixed(2) }}</span>
              <span class="separator">,</span>
              <span class="value">{{ calc.resultado.limiteSup.toFixed(2) }}</span>
              <span class="bracket">]</span>
            </div>
            <p class="margin-text">Margen de error: ±{{ calc.resultado.margen.toFixed(2) }}</p>
          </div>

          <div class="interpretation-box">
            <h5>💡 Interpretación:</h5>
            <p v-if="calc.resultado.necesitaFCP">
              La muestra representa el <strong>{{ calc.resultado.porcentaje.toFixed(1) }}%</strong>
              de la población, por lo que es necesario aplicar el FCP. Con un
              <strong>{{ calc.confianza }}% de confianza</strong>, la media poblacional está entre
              <strong>{{ calc.resultado.limiteInf.toFixed(2) }}</strong> y
              <strong>{{ calc.resultado.limiteSup.toFixed(2) }}</strong
              >.
            </p>
            <p v-else>
              La muestra representa solo el
              <strong>{{ calc.resultado.porcentaje.toFixed(1) }}%</strong>
              de la población (menos del 5%), por lo que el FCP tiene un efecto mínimo. El intervalo
              sin FCP sería prácticamente el mismo.
            </p>
          </div>

          <div v-if="calc.resultado.necesitaFCP" class="comparison-box">
            <h5>📊 Comparación con y sin FCP:</h5>
            <table class="comparison-table-small">
              <thead>
                <tr>
                  <th>Métrica</th>
                  <th>Sin FCP</th>
                  <th>Con FCP</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Error estándar</td>
                  <td>{{ calc.resultado.eeSinFCP.toFixed(2) }}</td>
                  <td>{{ calc.resultado.eeConFCP.toFixed(2) }}</td>
                </tr>
                <tr>
                  <td>Margen de error</td>
                  <td>{{ calc.resultado.margenSinFCP.toFixed(2) }}</td>
                  <td>{{ calc.resultado.margen.toFixed(2) }}</td>
                </tr>
                <tr>
                  <td>Amplitud del intervalo</td>
                  <td>{{ (calc.resultado.margenSinFCP * 2).toFixed(2) }}</td>
                  <td>{{ (calc.resultado.margen * 2).toFixed(2) }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- Navegación -->
      <div class="tab-navigation">
        <button @click="activeTab = 'aplicacion'" class="nav-btn nav-btn-prev">
          ← Anterior: Aplicación
        </button>
        <router-link to="/inferencial" class="nav-btn nav-btn-next">
          Volver a Estadística Inferencial →
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import katex from 'katex'
import 'katex/dist/katex.min.css'

const activeTab = ref('concepto')

const tabs = [
  { id: 'concepto', label: 'Concepto' },
  { id: 'formula', label: 'Fórmula del FCP' },
  { id: 'aplicacion', label: 'Aplicación' },
  { id: 'calculadora', label: 'Calculadora' },
]

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

// Calculadora del FCP
const calc = ref({
  N: null as number | null,
  n: null as number | null,
  media: null as number | null,
  desv: null as number | null,
  confianza: 90,
  resultado: null as {
    porcentaje: number
    necesitaFCP: boolean
    fcp: number
    reduccion: number
    valorT: number
    eeSinFCP: number
    eeConFCP: number
    margenSinFCP: number
    margen: number
    limiteInf: number
    limiteSup: number
  } | null,
})

// Tabla de valores t para diferentes grados de libertad y niveles de confianza
const getTValue = (gl: number, confianza: number): number => {
  // Valores t aproximados para diferentes niveles de confianza
  // Para gl grandes (>30), usamos valores z
  if (gl > 30) {
    const zValues: Record<number, number> = {
      90: 1.645,
      95: 1.96,
      99: 2.576,
    }
    return zValues[confianza] || 1.96
  }

  // Tabla simplificada de valores t (aproximados)
  const tTable: Record<number, Record<number, number>> = {
    90: { 10: 1.812, 20: 1.725, 30: 1.697, 39: 1.685, 40: 1.684 },
    95: { 10: 2.228, 20: 2.086, 30: 2.042, 39: 2.023, 40: 2.021 },
    99: { 10: 3.169, 20: 2.845, 30: 2.75, 39: 2.708, 40: 2.704 },
  }

  // Buscar el valor más cercano en la tabla
  const confTable = tTable[confianza] || tTable[95]
  const glOptions = Object.keys(confTable)
    .map(Number)
    .sort((a, b) => Math.abs(a - gl) - Math.abs(b - gl))
  return confTable[glOptions[0]] || 2.0
}

const calcularFCP = () => {
  if (
    calc.value.N === null ||
    calc.value.n === null ||
    calc.value.media === null ||
    calc.value.desv === null
  ) {
    alert('Por favor completa todos los campos')
    return
  }

  if (calc.value.n > calc.value.N) {
    alert('El tamaño de la muestra no puede ser mayor que la población')
    return
  }

  if (calc.value.desv <= 0) {
    alert('La desviación estándar debe ser positiva')
    return
  }

  const N = calc.value.N
  const n = calc.value.n
  const media = calc.value.media
  const s = calc.value.desv

  // Calcular porcentaje muestral
  const porcentaje = (n / N) * 100

  // Determinar si necesita FCP (>5%)
  const necesitaFCP = porcentaje > 5

  // Calcular FCP
  const fcp = Math.sqrt((N - n) / (N - 1))

  // Reducción del error
  const reduccion = (1 - fcp) * 100

  // Valor t para el nivel de confianza
  const gl = n - 1
  const valorT = getTValue(gl, calc.value.confianza)

  // Error estándar sin FCP
  const eeSinFCP = s / Math.sqrt(n)

  // Error estándar con FCP
  const eeConFCP = eeSinFCP * fcp

  // Margen de error sin FCP
  const margenSinFCP = valorT * eeSinFCP

  // Margen de error con FCP
  const margen = valorT * eeConFCP

  // Límites del intervalo
  const limiteInf = media - margen
  const limiteSup = media + margen

  calc.value.resultado = {
    porcentaje,
    necesitaFCP,
    fcp,
    reduccion,
    valorT,
    eeSinFCP,
    eeConFCP,
    margenSinFCP,
    margen,
    limiteInf,
    limiteSup,
  }
}
</script>

<style scoped>
@import '@/assets/styles/main.css';

.factor-correccion-view {
  padding-bottom: var(--spacing-2xl);
}

h1 {
  color: var(--primary);
  margin-bottom: var(--spacing-md);
  font-size: 2.5rem;
}

.intro {
  font-size: 1.2rem;
  color: var(--text-secondary);
  margin-bottom: var(--spacing-xl);
  line-height: 1.6;
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

.theory-box {
  background: var(--neutral-50);
  border-left: 5px solid var(--secondary);
  padding: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
  border-radius: var(--radius-lg);
}

.theory-box h3 {
  color: var(--primary);
  margin-bottom: var(--spacing-md);
}

.examples-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-lg);
  margin: var(--spacing-xl) 0;
}

.example-card {
  background: white;
  border: 1px solid var(--border-light);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  text-align: center;
  transition: var(--transition);
  box-shadow: var(--shadow-sm);
}

.example-card:hover {
  border-color: var(--primary);
  box-shadow: var(--shadow-md);
  transform: translateY(-5px);
}

.example-icon {
  font-size: 3rem;
  margin-bottom: var(--spacing-md);
}

.example-card h4 {
  color: var(--primary);
  margin-bottom: var(--spacing-sm);
}

.example-card p {
  color: var(--text-secondary);
  line-height: 1.6;
}

.concept-card {
  background: white;
  border: 1px solid var(--primary-200);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
  box-shadow: var(--shadow-sm);
}

.concept-card h3 {
  color: var(--primary);
  margin-bottom: var(--spacing-md);
}

.concept-card ul {
  list-style: none;
  padding-left: 0;
}

.concept-card li {
  padding: var(--spacing-xs) 0;
  line-height: 1.6;
  color: var(--text-primary);
}

.warning-box {
  background: var(--warning-50);
  border: 1px solid var(--warning-200);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
  border-left: 4px solid var(--warning);
}

.warning-box h4 {
  color: var(--warning-700);
  margin-bottom: var(--spacing-sm);
}

.formula-section {
  background: var(--neutral-50);
  border-left: 5px solid var(--primary);
}

.formula-box-large {
  background: white;
  border: 1px solid var(--primary-200);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
  margin: var(--spacing-lg) 0;
  text-align: center;
  box-shadow: var(--shadow-sm);
}

.formula-note {
  text-align: left;
  background: var(--neutral-50);
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  margin-top: var(--spacing-lg);
  line-height: 1.8;
  color: var(--text-secondary);
}

.calculation-steps {
  margin: var(--spacing-xl) 0;
}

.step {
  background: white;
  border-left: 4px solid var(--primary);
  padding: var(--spacing-lg);
  margin: var(--spacing-md) 0;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
}

.step h4 {
  color: var(--primary);
  margin-bottom: var(--spacing-md);
}

.step ul {
  margin-left: var(--spacing-lg);
  line-height: 1.8;
}

.calculation {
  background: var(--neutral-50);
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  margin: var(--spacing-md) 0;
  border: 1px solid var(--border-light);
}

.highlight-text {
  color: var(--primary);
  font-weight: 600;
  margin-top: var(--spacing-sm);
}

.result-box {
  background: var(--gradient-primary);
  color: white;
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
  margin: var(--spacing-lg) 0;
  text-align: center;
  box-shadow: var(--shadow-md);
}

.result-box h4 {
  margin-bottom: var(--spacing-md);
  font-size: 1.2rem;
  color: white;
}

.comparison-text {
  background: rgba(255, 255, 255, 0.1);
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  margin-top: var(--spacing-md);
}

.fcp-table {
  width: 100%;
  border-collapse: collapse;
  margin: var(--spacing-lg) 0;
  background: white;
  box-shadow: var(--shadow-sm);
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid var(--border);
}

.fcp-table thead {
  background: var(--primary);
  color: white;
}

.fcp-table th,
.fcp-table td {
  padding: var(--spacing-md);
  text-align: center;
  border-bottom: 1px solid var(--border-light);
}

.fcp-table th {
  font-weight: 600;
}

.fcp-table tbody tr:hover {
  background: var(--primary-50);
}

.fcp-table .highlight-row {
  background: var(--warning-50);
  font-weight: 600;
}

.insight-box {
  background: var(--info-50);
  border-left: 4px solid var(--info);
  padding: var(--spacing-md);
  margin: var(--spacing-lg) 0;
  border-radius: var(--radius-md);
}

.formulas-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-lg);
  margin: var(--spacing-xl) 0;
}

.formula-card {
  background: white;
  border: 1px solid var(--border-light);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  transition: var(--transition);
  box-shadow: var(--shadow-sm);
}

.formula-card:hover {
  border-color: var(--primary);
  box-shadow: var(--shadow-md);
}

.formula-card h4 {
  color: var(--primary);
  margin-bottom: var(--spacing-md);
  text-align: center;
}

.formula-box {
  background: var(--neutral-50);
  padding: var(--spacing-lg);
  border-radius: var(--radius-md);
  text-align: center;
  border: 1px solid var(--border-light);
}

.example-section {
  background: white;
  border: 1px solid var(--border-light);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
  margin: var(--spacing-xl) 0;
  box-shadow: var(--shadow-sm);
}

.example-section h3 {
  color: var(--primary);
  margin-bottom: var(--spacing-md);
}

.solution-steps {
  margin: var(--spacing-xl) 0;
}

.interactive-section {
  background: var(--neutral-50);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
  margin: var(--spacing-xl) 0;
}

.interactive-section h3 {
  color: var(--primary);
  margin-bottom: var(--spacing-md);
}

.input-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.input-group label {
  font-weight: 600;
  color: var(--text-primary);
}

.data-input {
  padding: 0.8rem;
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  font-size: 1rem;
  transition: var(--transition);
}

.data-input:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 3px var(--primary-100);
}

.btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: var(--radius-md);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
}

.btn-primary {
  background: var(--primary);
  color: white;
  box-shadow: var(--shadow-sm);
}

.btn-primary:hover {
  background: var(--primary-700);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.result-display {
  background: white;
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
  margin-top: var(--spacing-xl);
  border: 1px solid var(--primary-200);
  box-shadow: var(--shadow-md);
}

.result-display h4 {
  color: var(--primary);
  margin-bottom: var(--spacing-md);
}

.calc-summary {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-lg);
}

.summary-item {
  background: var(--neutral-50);
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
  border: 1px solid var(--border-light);
}

.summary-item .label {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.summary-item .value {
  color: var(--primary);
  font-size: 1.3rem;
  font-weight: 600;
}

.summary-item .value-yes {
  color: var(--success);
  font-size: 1.3rem;
  font-weight: 700;
}

.summary-item .value-no {
  color: var(--warning);
  font-size: 1.3rem;
  font-weight: 700;
}

.summary-item .value-highlight {
  color: white;
  background: var(--primary);
  font-size: 1.5rem;
  font-weight: 700;
  padding: 0.5rem;
  border-radius: var(--radius-md);
  text-align: center;
}

.interval-section {
  margin: var(--spacing-xl) 0;
  text-align: center;
}

.interval-section h5 {
  color: var(--primary);
  margin-bottom: var(--spacing-md);
}

.interval-display {
  font-size: 2rem;
  font-weight: 600;
  color: var(--primary);
  margin: var(--spacing-md) 0;
}

.interval-display .bracket {
  font-size: 2.5rem;
  color: var(--secondary);
  margin: 0 0.5rem;
}

.interval-display .separator {
  margin: 0 1rem;
  color: var(--text-secondary);
}

.margin-text {
  color: var(--text-secondary);
  font-size: 1.1rem;
  margin-top: var(--spacing-sm);
}

.interpretation-box {
  background: var(--success-50);
  border-left: 4px solid var(--success);
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  margin: var(--spacing-lg) 0;
}

.interpretation-box h5 {
  color: var(--success-700);
  margin-bottom: var(--spacing-sm);
}

.comparison-box {
  background: var(--info-50);
  border: 1px solid var(--info-200);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  margin-top: var(--spacing-lg);
}

.comparison-box h5 {
  color: var(--info-700);
  margin-bottom: var(--spacing-md);
}

.comparison-table-small {
  width: 100%;
  border-collapse: collapse;
  margin-top: var(--spacing-md);
}

.comparison-table-small th,
.comparison-table-small td {
  padding: 0.8rem;
  text-align: center;
  border: 1px solid var(--info-200);
}

.comparison-table-small thead {
  background: var(--info);
  color: white;
}

.comparison-table-small tbody tr:nth-child(even) {
  background: var(--info-50);
}

.tab-navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: var(--spacing-2xl);
  gap: var(--spacing-md);
}

.nav-btn {
  padding: 0.8rem 1.5rem;
  border: 1px solid var(--primary);
  background: white;
  color: var(--primary);
  border-radius: var(--radius-md);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.nav-btn:hover {
  background: var(--primary-50);
  transform: translateX(-5px);
}

.nav-btn-prev {
  margin-right: auto;
}

.nav-btn-next {
  background: var(--primary);
  color: white;
  border: 1px solid var(--primary);
  margin-left: auto;
}

.nav-btn-next:hover {
  background: var(--primary-700);
  transform: translateX(5px);
  color: white;
}

@media (max-width: 768px) {
  .factor-correccion-view {
    padding: 1rem;
  }

  h1 {
    font-size: 2rem;
  }

  .input-grid {
    grid-template-columns: 1fr;
  }

  .examples-grid {
    grid-template-columns: 1fr;
  }

  .formulas-grid {
    grid-template-columns: 1fr;
  }

  .calc-summary {
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
    font-size: 1.5rem;
  }
}
</style>
