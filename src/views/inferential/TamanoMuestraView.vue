<template>
  <div class="tamano-muestra-view">
    <h1>📏 Determinación del Tamaño de Muestra</h1>
    <p class="intro">
      Aprende a calcular el tamaño de muestra necesario para realizar estimaciones precisas y
      confiables de parámetros poblacionales.
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

    <!-- Introducción -->
    <div v-if="activeTab === 'introduccion'" class="content-section">
      <h2>🎯 Importancia del Tamaño de Muestra</h2>

      <div class="theory-box">
        <h3>¿Por qué es importante?</h3>
        <p>
          El tamaño de la muestra no es una variable, sino una
          <strong>decisión estratégica</strong> que se toma para que la estimación del parámetro
          poblacional sea precisa y confiable.
        </p>
      </div>

      <div class="concept-card">
        <h3>🎯 Tres Variables Clave</h3>
        <p>Esta decisión se basa en tres variables fundamentales:</p>
        <ol>
          <li><strong>El margen de error</strong> que tolerará el investigador (E)</li>
          <li><strong>El nivel de confianza</strong> deseado (determina z)</li>
          <li>
            <strong>La variabilidad o dispersión</strong> de la población que se estudia (σ o π)
          </li>
        </ol>
      </div>

      <div class="theory-box">
        <h3>1️⃣ Margen de Error (E)</h3>
        <p>
          El <strong>margen de error</strong> es la magnitud máxima admisible que se suma y resta de
          la estimación muestral para determinar los puntos extremos del intervalo de confianza.
        </p>

        <div class="example-cards">
          <div class="example-card-small">
            <h5>💰 Ejemplo: Estudio de Salarios</h5>
            <p>
              Queremos estimar el salario promedio con un margen de error de
              <strong>±$1,000</strong>
            </p>
          </div>
          <div class="example-card-small">
            <h5>📊 Ejemplo: Encuesta de Opinión</h5>
            <p>Queremos estimar una proporción con un margen de error de <strong>±5%</strong></p>
          </div>
        </div>

        <div class="warning-box">
          <h4>⚖️ Compensación (Trade-off)</h4>
          <p>Existe una relación inversa entre el margen de error y el tamaño de muestra:</p>
          <ul>
            <li>
              📉 <strong>Margen de error pequeño</strong> → Muestra más grande → Más tiempo y dinero
            </li>
            <li>
              📈 <strong>Margen de error grande</strong> → Muestra más pequeña → Intervalo más
              amplio
            </li>
          </ul>
        </div>
      </div>

      <div class="theory-box">
        <h3>2️⃣ Nivel de Confianza</h3>
        <p>
          Lógicamente se eligen niveles de confianza relativamente altos. Los más comunes son
          <strong>95% y 99%</strong>.
        </p>

        <table class="comparison-table">
          <thead>
            <tr>
              <th>Nivel de Confianza</th>
              <th>Valor de z</th>
              <th>Tamaño de Muestra</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>90%</td>
              <td>1.645</td>
              <td>Menor</td>
            </tr>
            <tr class="highlight-row">
              <td>95%</td>
              <td>1.96</td>
              <td>Medio</td>
            </tr>
            <tr>
              <td>99%</td>
              <td>2.575</td>
              <td>Mayor</td>
            </tr>
          </tbody>
        </table>

        <div class="insight-box">
          <p>
            <strong>Nota:</strong> Muestras más grandes (con mayor tiempo y costo) corresponden a
            niveles de confianza más altos.
          </p>
        </div>
      </div>

      <div class="theory-box">
        <h3>3️⃣ Variabilidad de la Población</h3>
        <p>
          Si la población está muy dispersa, se requiere una muestra grande. Si está concentrada
          (homogénea), se requiere una muestra menor.
        </p>

        <h4>Métodos para Estimar la Desviación Estándar (σ)</h4>

        <div class="methods-grid">
          <div class="method-card">
            <div class="method-number">1</div>
            <h5>🧪 Estudio Piloto</h5>
            <p>
              <strong>Método más común.</strong> Realizar un pequeño estudio preliminar y usar su
              desviación estándar como estimador.
            </p>
            <div class="method-example">
              <strong>Ejemplo:</strong> Para saber cuántas horas trabajan estudiantes, encuestar a
              30 estudiantes primero y calcular s.
            </div>
          </div>

          <div class="method-card">
            <div class="method-number">2</div>
            <h5>📚 Estudio Comparativo</h5>
            <p>Usar datos de estudios similares previos o de dependencias gubernamentales.</p>
            <div class="method-example">
              <strong>Ejemplo:</strong> Para estudiar recolectores de basura, usar información del
              Departamento del Trabajo sobre la fuerza laboral.
            </div>
          </div>

          <div class="method-card">
            <div class="method-number">3</div>
            <h5>📐 Enfoque del Rango</h5>
            <p>Basado en la regla empírica: Rango ≈ 6σ, por lo tanto σ ≈ Rango/6</p>
            <div class="method-example">
              <strong>Ejemplo:</strong> Cheques mensuales: mínimo = 2, máximo = 50<br />
              Rango = 48, entonces σ ≈ 48/6 = 8 cheques
            </div>
          </div>
        </div>
      </div>

      <!-- Navegación -->
      <div class="tab-navigation">
        <button @click="activeTab = 'media'" class="nav-btn nav-btn-next">
          Siguiente: Tamaño de Muestra para Media →
        </button>
      </div>
    </div>

    <!-- Tamaño de Muestra para Media -->
    <div v-if="activeTab === 'media'" class="content-section">
      <h2>📐 Tamaño de Muestra para Estimar una Media Poblacional</h2>

      <div class="theory-box formula-section">
        <h3>Fórmula</h3>

        <div class="formula-box-large">
          <div
            v-html="renderLatexDisplay('n = \\left(\\frac{z \\cdot \\sigma}{E}\\right)^2')"
          ></div>
          <p class="formula-note">
            donde:<br />
            <strong>n:</strong> tamaño de la muestra<br />
            <strong>z:</strong> valor normal estándar del nivel de confianza<br />
            <strong>σ:</strong> desviación estándar de la población<br />
            <strong>E:</strong> margen de error máximo admisible
          </p>
        </div>

        <div class="warning-box">
          <p>
            <strong>⚠️ Importante:</strong> Si el resultado no es un número entero, siempre se
            <strong>redondea hacia arriba</strong> al siguiente entero. Por ejemplo, 201.21 → 202.
          </p>
        </div>
      </div>

      <div class="example-section">
        <h3>Ejemplo: Salarios de Consejos Ciudadanos</h3>
        <p>
          Un estudiante de administración pública desea determinar el salario promedio mensual de
          miembros de consejos ciudadanos. El error debe ser inferior a <strong>$100</strong>, con
          un nivel de confianza de <strong>95%</strong>. Un informe del Departamento del Trabajo
          indica que σ = <strong>$1,000</strong>. ¿Cuál es el tamaño de muestra requerido?
        </p>

        <div class="solution-steps">
          <div class="step">
            <h4>Datos:</h4>
            <ul>
              <li>E = $100</li>
              <li>Nivel de confianza = 95% → z = 1.96</li>
              <li>σ = $1,000</li>
            </ul>
          </div>

          <div class="step">
            <h4>Aplicar la fórmula:</h4>
            <div class="calculation">
              <div
                v-html="
                  renderLatex(
                    'n = \\left(\\frac{z \\cdot \\sigma}{E}\\right)^2 = \\left(\\frac{1.96 \\times 1000}{100}\\right)^2',
                  )
                "
              ></div>
              <div v-html="renderLatex('n = (19.6)^2 = 384.16')"></div>
              <div v-html="renderLatex('n = 385 \\text{ (redondeado)}')"></div>
            </div>
          </div>

          <div class="result-box">
            <strong>Respuesta:</strong> Se requiere una muestra de <strong>385 miembros</strong>
            para satisfacer las especificaciones.
          </div>
        </div>

        <div class="comparison-box">
          <h4>📊 Comparación: ¿Qué pasa si aumentamos la confianza al 99%?</h4>
          <div class="calculation">
            <p>Con 99% de confianza, z = 2.575:</p>
            <div
              v-html="
                renderLatex(
                  'n = \\left(\\frac{2.575 \\times 1000}{100}\\right)^2 = (25.75)^2 = 663.06',
                )
              "
            ></div>
            <div v-html="renderLatex('n = 664 \\text{ (redondeado)}')"></div>
          </div>
          <div class="insight-box">
            <p>
              <strong>Impacto:</strong> Un incremento del nivel de confianza de 95% a 99% resultó en
              un incremento de <strong>279 observaciones o 72.5%</strong> [(664/385)*100]. ¡Esto
              puede incrementar mucho el costo del estudio!
            </p>
          </div>
        </div>
      </div>

      <!-- Calculadora para Media -->
      <div class="interactive-section">
        <h3>🧮 Calculadora de Tamaño de Muestra para Media</h3>
        <p>Calcula el tamaño de muestra necesario para estimar una media poblacional:</p>

        <div class="input-grid">
          <div class="input-group">
            <label>Desviación estándar (σ):</label>
            <input
              v-model.number="calcTamMedia.sigma"
              type="number"
              min="0"
              step="0.01"
              placeholder="Ej: 1000"
              class="data-input"
            />
          </div>

          <div class="input-group">
            <label>Margen de error (E):</label>
            <input
              v-model.number="calcTamMedia.error"
              type="number"
              min="0"
              step="0.01"
              placeholder="Ej: 100"
              class="data-input"
            />
          </div>

          <div class="input-group">
            <label>Nivel de confianza:</label>
            <select v-model.number="calcTamMedia.confianza" class="data-input">
              <option :value="90">90%</option>
              <option :value="95">95%</option>
              <option :value="99">99%</option>
            </select>
          </div>
        </div>

        <button @click="calcularTamanoMedia" class="btn btn-primary">
          Calcular Tamaño de Muestra
        </button>

        <div v-if="calcTamMedia.resultado !== null" class="result-display">
          <h4>Resultados:</h4>
          <div class="calc-summary">
            <div class="summary-item">
              <span class="label">Valor de z:</span>
              <span class="value">{{ calcTamMedia.resultado.z }}</span>
            </div>
            <div class="summary-item">
              <span class="label">Tamaño calculado:</span>
              <span class="value">{{ calcTamMedia.resultado.nCalculado.toFixed(2) }}</span>
            </div>
            <div class="summary-item">
              <span class="label">Tamaño requerido:</span>
              <span class="value-highlight">{{ calcTamMedia.resultado.nRedondeado }}</span>
            </div>
          </div>

          <div class="interpretation-box">
            <h5>💡 Interpretación:</h5>
            <p>
              Se necesita una muestra de
              <strong>{{ calcTamMedia.resultado.nRedondeado }}</strong> observaciones para estimar
              la media poblacional con un margen de error de
              <strong>±{{ calcTamMedia.error }}</strong> y un nivel de confianza del
              <strong>{{ calcTamMedia.confianza }}%</strong>.
            </p>
          </div>
        </div>
      </div>

      <!-- Navegación -->
      <div class="tab-navigation">
        <button @click="activeTab = 'introduccion'" class="nav-btn nav-btn-prev">
          ← Anterior: Introducción
        </button>
        <button @click="activeTab = 'proporcion'" class="nav-btn nav-btn-next">
          Siguiente: Tamaño para Proporción →
        </button>
      </div>
    </div>

    <!-- Tamaño de Muestra para Proporción -->
    <div v-if="activeTab === 'proporcion'" class="content-section">
      <h2>📐 Tamaño de Muestra para Estimar una Proporción</h2>

      <div class="theory-box formula-section">
        <h3>Fórmula</h3>

        <div class="formula-box-large">
          <div v-html="renderLatexDisplay('n = \\pi(1-\\pi)\\left(\\frac{z}{E}\\right)^2')"></div>
          <p class="formula-note">
            donde:<br />
            <strong>n:</strong> tamaño de la muestra<br />
            <strong>z:</strong> valor normal estándar del nivel de confianza<br />
            <strong>π:</strong> proporción de la población<br />
            <strong>E:</strong> margen de error máximo admisible
          </p>
        </div>

        <div class="concept-card">
          <h4>💡 Caso Especial: Sin Estimador de π</h4>
          <p>
            Si <strong>no se conoce</strong> un valor confiable de π, se debe usar
            <strong>π = 0.50</strong>.
          </p>
          <p>
            <strong>Razón:</strong> El producto π(1-π) alcanza su
            <strong>valor máximo</strong> cuando π = 0.50, lo que da el tamaño de muestra más
            conservador (mayor).
          </p>
          <div class="calculation">
            <div
              v-html="renderLatex('\\pi(1-\\pi) = 0.5 \\times 0.5 = 0.25 \\text{ (valor máximo)}')"
            ></div>
          </div>
        </div>

        <div class="warning-box">
          <p>
            <strong>⚠️ Importante:</strong> Si el resultado no es un número entero, siempre se
            <strong>redondea hacia arriba</strong> al siguiente entero.
          </p>
        </div>
      </div>

      <div class="example-section">
        <h3>Ejemplo: Recolectores de Basura Privados</h3>
        <p>
          Se desea estimar la proporción de ciudades con recolectores de basura privados. El margen
          de error debe ser de <strong>0.10</strong>, el nivel de confianza deseado es de
          <strong>90%</strong>, y no hay estimador disponible de la proporción. ¿Cuál es el tamaño
          de muestra requerido?
        </p>

        <div class="solution-steps">
          <div class="step">
            <h4>Datos:</h4>
            <ul>
              <li>E = 0.10</li>
              <li>Nivel de confianza = 90% → z = 1.65</li>
              <li>π = 0.50 (sin estimador, usamos valor conservador)</li>
            </ul>
          </div>

          <div class="step">
            <h4>Aplicar la fórmula:</h4>
            <div class="calculation">
              <div v-html="renderLatex('n = \\pi(1-\\pi)\\left(\\frac{z}{E}\\right)^2')"></div>
              <div v-html="renderLatex('n = (0.5)(0.5)\\left(\\frac{1.65}{0.10}\\right)^2')"></div>
              <div v-html="renderLatex('n = 0.25 \\times (16.5)^2 = 0.25 \\times 272.25')"></div>
              <div v-html="renderLatex('n = 68.06')"></div>
              <div v-html="renderLatex('n = 69 \\text{ (redondeado)}')"></div>
            </div>
          </div>

          <div class="result-box">
            <strong>Respuesta:</strong> El investigador necesita una muestra aleatoria de
            <strong>69 ciudades</strong>.
          </div>
        </div>
      </div>

      <!-- Calculadora para Proporción -->
      <div class="interactive-section">
        <h3>🧮 Calculadora de Tamaño de Muestra para Proporción</h3>
        <p>Calcula el tamaño de muestra necesario para estimar una proporción poblacional:</p>

        <div class="input-grid">
          <div class="input-group">
            <label>Proporción estimada (π):</label>
            <input
              v-model.number="calcTamProp.pi"
              type="number"
              min="0"
              max="1"
              step="0.01"
              placeholder="Ej: 0.5 (dejar 0.5 si no se conoce)"
              class="data-input"
            />
            <small class="input-hint">Usar 0.5 si no tienes un estimador</small>
          </div>

          <div class="input-group">
            <label>Margen de error (E):</label>
            <input
              v-model.number="calcTamProp.error"
              type="number"
              min="0"
              max="1"
              step="0.01"
              placeholder="Ej: 0.10"
              class="data-input"
            />
            <small class="input-hint">En decimal (ej: 0.05 = 5%)</small>
          </div>

          <div class="input-group">
            <label>Nivel de confianza:</label>
            <select v-model.number="calcTamProp.confianza" class="data-input">
              <option :value="90">90%</option>
              <option :value="95">95%</option>
              <option :value="99">99%</option>
            </select>
          </div>
        </div>

        <button @click="calcularTamanoProp" class="btn btn-primary">
          Calcular Tamaño de Muestra
        </button>

        <div v-if="calcTamProp.resultado !== null" class="result-display">
          <h4>Resultados:</h4>
          <div class="calc-summary">
            <div class="summary-item">
              <span class="label">Valor de z:</span>
              <span class="value">{{ calcTamProp.resultado.z }}</span>
            </div>
            <div class="summary-item">
              <span class="label">π(1-π):</span>
              <span class="value">{{ calcTamProp.resultado.varianza.toFixed(4) }}</span>
            </div>
            <div class="summary-item">
              <span class="label">Tamaño calculado:</span>
              <span class="value">{{ calcTamProp.resultado.nCalculado.toFixed(2) }}</span>
            </div>
            <div class="summary-item">
              <span class="label">Tamaño requerido:</span>
              <span class="value-highlight">{{ calcTamProp.resultado.nRedondeado }}</span>
            </div>
          </div>

          <div v-if="calcTamProp.pi === 0.5" class="warning-box">
            <p>
              <strong>ℹ️ Nota:</strong> Estás usando π = 0.5, que es el
              <strong>valor más conservador</strong>. Si obtienes un estimador de π de un estudio
              piloto, podrás reducir el tamaño de muestra necesario.
            </p>
          </div>

          <div class="interpretation-box">
            <h5>💡 Interpretación:</h5>
            <p>
              Se necesita una muestra de <strong>{{ calcTamProp.resultado.nRedondeado }}</strong>
              observaciones para estimar la proporción poblacional con un margen de error de
              <strong
                >±{{
                  calcTamProp.error !== null ? (calcTamProp.error * 100).toFixed(1) : '0'
                }}%</strong
              >
              y un nivel de confianza del <strong>{{ calcTamProp.confianza }}%</strong>.
            </p>
          </div>
        </div>
      </div>

      <!-- Navegación -->
      <div class="tab-navigation">
        <button @click="activeTab = 'media'" class="nav-btn nav-btn-prev">
          ← Anterior: Tamaño para Media
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

const activeTab = ref('introduccion')

const tabs = [
  { id: 'introduccion', label: 'Introducción' },
  { id: 'media', label: 'Tamaño para Media' },
  { id: 'proporcion', label: 'Tamaño para Proporción' },
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

// Calculadora de Tamaño de Muestra para Media
const calcTamMedia = ref({
  sigma: null as number | null,
  error: null as number | null,
  confianza: 95,
  resultado: null as {
    z: number
    nCalculado: number
    nRedondeado: number
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

const calcularTamanoMedia = () => {
  if (calcTamMedia.value.sigma === null || calcTamMedia.value.error === null) {
    alert('Por favor ingresa valores válidos')
    return
  }
  if (calcTamMedia.value.sigma <= 0 || calcTamMedia.value.error <= 0) {
    alert('La desviación estándar y el margen de error deben ser positivos')
    return
  }

  const z = getZValue(calcTamMedia.value.confianza)
  const nCalculado = Math.pow((z * calcTamMedia.value.sigma) / calcTamMedia.value.error, 2)

  calcTamMedia.value.resultado = {
    z,
    nCalculado,
    nRedondeado: Math.ceil(nCalculado),
  }
}

// Calculadora de Tamaño de Muestra para Proporción
const calcTamProp = ref({
  pi: 0.5,
  error: null as number | null,
  confianza: 95,
  resultado: null as {
    z: number
    varianza: number
    nCalculado: number
    nRedondeado: number
  } | null,
})

const calcularTamanoProp = () => {
  if (calcTamProp.value.pi === null || calcTamProp.value.error === null) {
    alert('Por favor ingresa valores válidos')
    return
  }
  if (calcTamProp.value.pi < 0 || calcTamProp.value.pi > 1) {
    alert('La proporción debe estar entre 0 y 1')
    return
  }
  if (calcTamProp.value.error <= 0 || calcTamProp.value.error > 1) {
    alert('El margen de error debe ser mayor que 0 y menor o igual a 1')
    return
  }

  const z = getZValue(calcTamProp.value.confianza)
  const varianza = calcTamProp.value.pi * (1 - calcTamProp.value.pi)
  const nCalculado = varianza * Math.pow(z / calcTamProp.value.error, 2)

  calcTamProp.value.resultado = {
    z,
    varianza,
    nCalculado,
    nRedondeado: Math.ceil(nCalculado),
  }
}
</script>

<style scoped>
@import '@/assets/styles/main.css';

.tamano-muestra-view {
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

.theory-box h4 {
  color: var(--secondary);
  margin-top: var(--spacing-lg);
  margin-bottom: var(--spacing-sm);
}

.concept-card {
  background: white;
  border: 1px solid var(--primary-200);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
  box-shadow: var(--shadow-sm);
}

.concept-card h3,
.concept-card h4 {
  color: var(--primary);
  margin-bottom: var(--spacing-md);
}

.concept-card ol {
  margin-left: var(--spacing-lg);
  line-height: 1.8;
}

.concept-card ol li {
  margin-bottom: var(--spacing-xs);
  color: var(--text-primary);
}

.example-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-md);
  margin-top: var(--spacing-md);
}

.example-card-small {
  background: white;
  border: 1px solid var(--border-light);
  border-radius: var(--radius-md);
  padding: var(--spacing-md);
  transition: var(--transition);
  box-shadow: var(--shadow-sm);
}

.example-card-small:hover {
  border-color: var(--secondary);
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

.example-card-small h5 {
  color: var(--secondary);
  margin-bottom: var(--spacing-xs);
  font-size: 1rem;
}

.example-card-small p {
  margin: 0;
  color: var(--text-secondary);
  font-size: 0.9rem;
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

.warning-box ul {
  margin-left: var(--spacing-lg);
  line-height: 1.8;
}

.comparison-table {
  width: 100%;
  border-collapse: collapse;
  margin: var(--spacing-lg) 0;
  background: white;
  box-shadow: var(--shadow-sm);
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid var(--border);
}

.comparison-table thead {
  background: var(--primary);
  color: white;
}

.comparison-table th,
.comparison-table td {
  padding: var(--spacing-md);
  text-align: center;
  border-bottom: 1px solid var(--border-light);
}

.comparison-table th {
  font-weight: 600;
}

.comparison-table tbody tr:hover {
  background: var(--primary-50);
}

.comparison-table .highlight-row {
  background: var(--warning-50);
  font-weight: 600;
}

.insight-box {
  background: var(--info-50);
  border-left: 4px solid var(--info);
  padding: var(--spacing-md);
  margin-top: var(--spacing-md);
  border-radius: var(--radius-md);
}

.methods-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--spacing-lg);
  margin-top: var(--spacing-lg);
}

.method-card {
  background: white;
  border: 1px solid var(--border-light);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  position: relative;
  transition: var(--transition);
  box-shadow: var(--shadow-sm);
}

.method-card:hover {
  border-color: var(--primary);
  box-shadow: var(--shadow-md);
  transform: translateY(-3px);
}

.method-number {
  position: absolute;
  top: -15px;
  left: 20px;
  background: var(--primary);
  color: white;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.1rem;
  box-shadow: var(--shadow-sm);
}

.method-card h5 {
  color: var(--primary);
  margin: 0.5rem 0 1rem 0;
  font-size: 1.1rem;
}

.method-card p {
  color: var(--text-secondary);
  margin-bottom: var(--spacing-md);
  line-height: 1.6;
}

.method-example {
  background: var(--neutral-50);
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  border-left: 4px solid var(--secondary);
  font-size: 0.9rem;
  margin-top: var(--spacing-md);
}

.method-example strong {
  color: var(--secondary);
  display: block;
  margin-bottom: 0.3rem;
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
  background: var(--neutral-50);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
  border: 1px solid var(--border-light);
}

.solution-steps .step {
  margin-bottom: var(--spacing-lg);
}

.solution-steps .step h4 {
  color: var(--primary);
  margin-bottom: var(--spacing-sm);
  font-size: 1.1rem;
}

.solution-steps ul {
  list-style: none;
  padding-left: 0;
}

.solution-steps li {
  padding: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;
  color: var(--text-primary);
}

.solution-steps li::before {
  content: '▸';
  position: absolute;
  left: 0;
  color: var(--primary);
}

.calculation {
  margin: var(--spacing-md) 0;
  padding: var(--spacing-md);
  background: white;
  border-radius: var(--radius-md);
  border: 1px solid var(--border-light);
}

.result-box {
  background: var(--gradient-primary);
  color: white;
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
  margin-top: var(--spacing-lg);
  text-align: center;
  font-size: 1.1rem;
  box-shadow: var(--shadow-md);
}

.result-box strong {
  display: block;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.comparison-box {
  background: var(--info-50);
  border: 1px solid var(--info-200);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  margin-top: var(--spacing-xl);
}

.comparison-box h4 {
  color: var(--info-700);
  margin-bottom: var(--spacing-md);
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
  border: 1px solid var(--border-light);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
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

.summary-item .value-highlight {
  color: white;
  background: var(--primary);
  font-size: 1.5rem;
  font-weight: 700;
  padding: 0.5rem;
  border-radius: var(--radius-md);
  text-align: center;
}

.interpretation-box {
  background: var(--success-50);
  border-left: 4px solid var(--success);
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
}

.interpretation-box h5 {
  color: var(--success-700);
  margin-bottom: 0.5rem;
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

.input-hint {
  display: block;
  color: var(--text-secondary);
  font-size: 0.85rem;
  margin-top: 0.3rem;
  font-style: italic;
}

@media (max-width: 768px) {
  .tamano-muestra-view {
    padding: 1rem;
  }

  h1 {
    font-size: 2rem;
  }

  .input-grid {
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

  .methods-grid {
    grid-template-columns: 1fr;
  }

  .calc-summary {
    grid-template-columns: 1fr;
  }

  .example-cards {
    grid-template-columns: 1fr;
  }
}
</style>
