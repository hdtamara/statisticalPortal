<template>
  <div class="tipos-datos-view">
    <div class="container">
      <div class="hero">
        <h1>Tipos de Datos y Tabulación</h1>
        <p>Aprende a clasificar, organizar y tabular datos para el análisis estadístico</p>
      </div>

      <div class="nav-tabs">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          class="tab"
          :class="{ active: activeTab === tab.id }"
          @click="activeTab = tab.id"
        >
          {{ tab.label }}
        </button>
      </div>

      <!-- TIPOS DE DATOS -->
      <div v-if="activeTab === 'tipos'" class="content-section">
        <h2>Tipos de Datos Estadísticos</h2>

        <div class="explanation-box">
          <p>
            Los datos estadísticos se clasifican en dos grandes categorías según su naturaleza y
            forma de medición. Esta clasificación es fundamental porque determina qué técnicas
            estadísticas podemos aplicar.
          </p>
        </div>

        <div class="data-types">
          <div class="data-type-category">
            <h3>Datos Cualitativos (Atributos)</h3>
            <p>Describen cualidades o características no numéricas. Se dividen en:</p>

            <div class="type-cards">
              <ContentCard
                title="Nominales"
                content="Datos que representan categorías sin orden inherente. Ejemplos: género (masculino/femenino), color favorito, tipo de vivienda."
                card-type="descriptive"
              />

              <ContentCard
                title="Ordinales"
                content="Datos que representan categorías con un orden o jerarquía. Ejemplos: nivel educativo (primaria, secundaria, universidad), satisfacción (insatisfecho, neutral, satisfecho)."
                card-type="descriptive"
              />
            </div>

            <div class="example-box">
              <h4>Ejemplos de Datos Cualitativos</h4>
              <div class="examples-grid">
                <div class="example-item">
                  <strong>Nominal:</strong> Tipo de transporte (autobús, metro, bicicleta, coche)
                </div>
                <div class="example-item">
                  <strong>Ordinal:</strong> Nivel de dolor (leve, moderado, severo)
                </div>
                <div class="example-item">
                  <strong>Nominal:</strong> Estado civil (soltero, casado, divorciado, viudo)
                </div>
                <div class="example-item">
                  <strong>Ordinal:</strong> Calificación de servicio (mala, regular, buena,
                  excelente)
                </div>
              </div>
            </div>
          </div>

          <div class="data-type-category">
            <h3>Datos Cuantitativos (Variables)</h3>
            <p>Representan cantidades numéricas. Se dividen en:</p>

            <div class="type-cards">
              <ContentCard
                title="Discretos"
                content="Toman valores enteros específicos, generalmente resultado de conteos. Ejemplos: número de hijos, cantidad de habitaciones, número de empleados."
                card-type="descriptive"
              />

              <ContentCard
                title="Continuos"
                content="Pueden tomar cualquier valor dentro de un rango, resultado de mediciones. Ejemplos: estatura, peso, temperatura, tiempo."
                card-type="descriptive"
              />
            </div>

            <div class="example-box">
              <h4>Ejemplos de Datos Cuantitativos</h4>
              <div class="examples-grid">
                <div class="example-item">
                  <strong>Discreto:</strong> Número de hermanos (0, 1, 2, 3...)
                </div>
                <div class="example-item">
                  <strong>Continuo:</strong> Peso corporal (60.5 kg, 72.3 kg, 58.1 kg)
                </div>
                <div class="example-item">
                  <strong>Discreto:</strong> Calificación en un examen (0, 1, 2, ..., 100)
                </div>
                <div class="example-item">
                  <strong>Continuo:</strong> Tiempo de recorrido (25.7 minutos, 33.2 minutos)
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="interactive-activity">
          <h3>Clasificación de Datos</h3>
          <p>Arrastra cada ejemplo a la categoría correcta:</p>

          <div class="clasification-game">
            <div class="game-items">
              <div
                v-for="(item, index) in itemsParaClasificar"
                :key="index"
                class="draggable-item"
                draggable="true"
                @dragstart="onDragStart($event, index)"
              >
                {{ item.text }}
              </div>
            </div>

            <div class="game-targets">
              <div class="target" @drop="onDrop($event, 'cualitativo-nominal')" @dragover.prevent>
                <h4>Cualitativo Nominal</h4>
                <div class="target-items">
                  <div
                    v-for="(item, index) in itemsClasificados['cualitativo-nominal']"
                    :key="index"
                    class="item-in-target"
                  >
                    {{ item.text }}
                  </div>
                </div>
              </div>

              <div class="target" @drop="onDrop($event, 'cualitativo-ordinal')" @dragover.prevent>
                <h4>Cualitativo Ordinal</h4>
                <div class="target-items">
                  <div
                    v-for="(item, index) in itemsClasificados['cualitativo-ordinal']"
                    :key="index"
                    class="item-in-target"
                  >
                    {{ item.text }}
                  </div>
                </div>
              </div>

              <div class="target" @drop="onDrop($event, 'cuantitativo-discreto')" @dragover.prevent>
                <h4>Cuantitativo Discreto</h4>
                <div class="target-items">
                  <div
                    v-for="(item, index) in itemsClasificados['cuantitativo-discreto']"
                    :key="index"
                    class="item-in-target"
                  >
                    {{ item.text }}
                  </div>
                </div>
              </div>

              <div class="target" @drop="onDrop($event, 'cuantitativo-continuo')" @dragover.prevent>
                <h4>Cuantitativo Continuo</h4>
                <div class="target-items">
                  <div
                    v-for="(item, index) in itemsClasificados['cuantitativo-continuo']"
                    :key="index"
                    class="item-in-target"
                  >
                    {{ item.text }}
                  </div>
                </div>
              </div>
            </div>

            <button @click="reiniciarJuego" class="btn btn-secondary">Reiniciar</button>
          </div>
        </div>
      </div>

      <!-- FRECUENCIAS -->
      <div v-if="activeTab === 'frecuencias'" class="content-section">
        <h2>Tabulación de Datos: Frecuencias</h2>

        <div class="explanation-box">
          <p>
            La tabulación de datos es el proceso de organizar y resumir datos en forma de tablas
            para facilitar su análisis. Las frecuencias nos indican cuántas veces aparece cada valor
            o categoría.
          </p>
        </div>

        <div class="frequency-types">
          <div class="frequency-card">
            <h3>Frecuencia Absoluta (f)</h3>
            <p>Número de veces que se repite cada valor o categoría en el conjunto de datos.</p>
            <div class="formula">f = conteo directo</div>
          </div>

          <div class="frequency-card">
            <h3>Frecuencia Relativa (fr)</h3>
            <p>Proporción que representa cada valor respecto al total de observaciones.</p>
            <div class="formula">fr = f / N</div>
            <p>Donde N es el total de observaciones</p>
          </div>

          <div class="frequency-card">
            <h3>Frecuencia Porcentual (f%)</h3>
            <p>Porcentaje que representa cada valor respecto al total de observaciones.</p>
            <div class="formula">f% = (f / N) × 100</div>
          </div>
        </div>

        <div class="interactive-example">
          <h3>Ejemplo de Cálculo de Frecuencias</h3>

          <div class="example-controls">
            <div class="control-group">
              <label>Selecciona un conjunto de datos de ejemplo:</label>
              <select v-model="ejemploSeleccionado" @change="cargarEjemplo">
                <option value="colores">Colores favoritos</option>
                <option value="calificaciones">Calificaciones de examen</option>
                <option value="edades">Edades de estudiantes</option>
              </select>
            </div>
          </div>

          <div class="example-data">
            <h4>Datos Originales:</h4>
            <div class="raw-data">
              <span v-for="(dato, index) in datosEjemplo" :key="index" class="data-point">
                {{ dato }}
              </span>
            </div>

            <h4>Tabla de Frecuencias:</h4>
            <div class="frequency-table">
              <table>
                <thead>
                  <tr>
                    <th>Valor</th>
                    <th>Frecuencia Absoluta (f)</th>
                    <th>Frecuencia Relativa (fr)</th>
                    <th>Frecuencia Porcentual (f%)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(fila, valor) in tablaFrecuencias" :key="valor">
                    <td>{{ valor }}</td>
                    <td>{{ fila.absoluta }}</td>
                    <td>{{ fila.relativa.toFixed(3) }}</td>
                    <td>{{ fila.porcentual.toFixed(1) }}%</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td><strong>Total</strong></td>
                    <td>
                      <strong>{{ totalDatos }}</strong>
                    </td>
                    <td><strong>1.000</strong></td>
                    <td><strong>100.0%</strong></td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>

        <div class="practice-activity">
          <h3>Calcula Tú Mismo las Frecuencias</h3>

          <div class="practice-container">
            <div class="input-section">
              <h4>Ingresa tus propios datos:</h4>
              <div class="data-input">
                <input
                  v-model="nuevoDato"
                  @keyup.enter="agregarDato"
                  placeholder="Escribe un dato y presiona Enter"
                />
                <button @click="agregarDato" class="btn btn-primary">Agregar</button>
              </div>

              <div class="user-data">
                <h5>Tus datos:</h5>
                <div class="data-list">
                  <div v-for="(dato, index) in datosUsuario" :key="index" class="user-data-point">
                    {{ dato }}
                    <button @click="eliminarDato(index)" class="delete-btn">×</button>
                  </div>
                </div>
                <button @click="limpiarDatos" class="btn btn-secondary">Limpiar todo</button>
              </div>
            </div>

            <div class="results-section">
              <h4>Resultados:</h4>
              <div class="user-frequency-table" v-if="datosUsuario.length > 0">
                <table>
                  <thead>
                    <tr>
                      <th>Valor</th>
                      <th>Frecuencia Absoluta</th>
                      <th>Frecuencia Relativa</th>
                      <th>Frecuencia %</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(fila, valor) in tablaFrecuenciasUsuario" :key="valor">
                      <td>{{ valor }}</td>
                      <td>{{ fila.absoluta }}</td>
                      <td>{{ fila.relativa.toFixed(3) }}</td>
                      <td>{{ fila.porcentual.toFixed(1) }}%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div v-else class="no-data">
                <p>Ingresa algunos datos para ver la tabla de frecuencias</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- DATOS AGRUPADOS -->
      <div v-if="activeTab === 'agrupados'" class="content-section">
        <h2>Datos Agrupados y No Agrupados</h2>

        <div class="explanation-box">
          <p>
            Dependiendo de la naturaleza y cantidad de datos, podemos trabajar con datos en su forma
            original o agruparlos en intervalos para facilitar su análisis.
          </p>
        </div>

        <div class="data-grouping">
          <div class="grouping-type">
            <h3>Datos No Agrupados</h3>
            <p>Se trabajan con los valores individuales sin agrupar. apropiado cuando:</p>
            <ul>
              <li>El número de valores diferentes es pequeño</li>
              <li>Los datos son cualitativos o discretos con pocos valores</li>
              <li>Queremos preservar la información individual</li>
            </ul>

            <div class="example-box">
              <h4>Ejemplo: Datos No Agrupados</h4>
              <p>Calificaciones: 5, 7, 8, 6, 9, 7, 8, 5, 6, 7, 8, 9, 10, 6, 7</p>
              <p>Se analiza cada calificación individualmente</p>
            </div>
          </div>

          <div class="grouping-type">
            <h3>Datos Agrupados</h3>
            <p>Se agrupan en intervalos o clases. apropiado cuando:</p>
            <ul>
              <li>El número de valores diferentes es grande</li>
              <li>Los datos son continuos</li>
              <li>Queremos simplificar el análisis</li>
              <li>Necesitamos resumir la información</li>
            </ul>

            <div class="example-box">
              <h4>Ejemplo: Datos Agrupados</h4>
              <p>Edades: 18-25, 26-33, 34-41, 42-49, 50-57, 58-65</p>
              <p>Se analizan por grupos de edad en lugar de individualmente</p>
            </div>
          </div>
        </div>

        <div class="grouping-process">
          <h3>Proceso de Agrupación de Datos</h3>

          <div class="process-steps">
            <div class="step">
              <div class="step-number">1</div>
              <div class="step-content">
                <h4>Determinar el Rango</h4>
                <p>Rango = Valor máximo - Valor mínimo</p>
              </div>
            </div>

            <div class="step">
              <div class="step-number">2</div>
              <div class="step-content">
                <h4>Determinar el Número de Clases</h4>
                <p>Usualmente entre 5 y 20 clases. Regla de Sturges: k = 1 + 3.322 log(n)</p>
              </div>
            </div>

            <div class="step">
              <div class="step-number">3</div>
              <div class="step-content">
                <h4>Calcular la Amplitud del Intervalo</h4>
                <p>Amplitud = Rango / Número de clases (redondear convenientemente)</p>
              </div>
            </div>

            <div class="step">
              <div class="step-number">4</div>
              <div class="step-content">
                <h4>Establecer los Límites de Clase</h4>
                <p>Definir los intervalos que cubran todo el rango sin superposiciones</p>
              </div>
            </div>

            <div class="step">
              <div class="step-number">5</div>
              <div class="step-content">
                <h4>Contar las Frecuencias</h4>
                <p>Determinar cuántos valores caen en cada intervalo</p>
              </div>
            </div>
          </div>
        </div>

        <div class="interactive-grouping">
          <h3>Simulador de Agrupación de Datos</h3>

          <div class="grouping-controls">
            <div class="control-group">
              <label>Selecciona conjunto de datos:</label>
              <select v-model="datosParaAgrupar" @change="prepararDatosAgrupacion">
                <option value="ejemplo1">Edades de 50 personas</option>
                <option value="ejemplo2">Salarios mensuales</option>
                <option value="ejemplo3">Tiempos de reacción</option>
              </select>
            </div>

            <div class="control-group">
              <label>Número de clases:</label>
              <input
                type="number"
                v-model="numeroClases"
                min="3"
                max="15"
                @change="calcularAgrupacion"
              />
            </div>
          </div>

          <div class="grouping-results">
            <div class="original-data">
              <h4>Datos Originales ({{ datosOriginales.length }} valores)</h4>
              <div class="data-summary">
                <p>Mínimo: {{ minimo }}</p>
                <p>Máximo: {{ maximo }}</p>
                <p>Rango: {{ rango }}</p>
              </div>
            </div>

            <div class="grouping-calculation">
              <h4>Cálculos de Agrupación</h4>
              <div class="calculation-results">
                <p>Número de clases: {{ numeroClases }}</p>
                <p>Amplitud aproximada: {{ (rango / numeroClases).toFixed(2) }}</p>
                <p>Amplitud utilizada: {{ amplitud }}</p>
              </div>
            </div>

            <div class="frequency-distribution">
              <h4>Distribución de Frecuencias Agrupadas</h4>
              <table>
                <thead>
                  <tr>
                    <th>Intervalo</th>
                    <th>Límite Inferior</th>
                    <th>Límite Superior</th>
                    <th>Marca de Clase</th>
                    <th>Frecuencia</th>
                    <th>Frecuencia %</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(intervalo, index) in intervalos" :key="index">
                    <td>{{ intervalo.inferior }} - {{ intervalo.superior }}</td>
                    <td>{{ intervalo.inferior }}</td>
                    <td>{{ intervalo.superior }}</td>
                    <td>{{ intervalo.marca }}</td>
                    <td>{{ intervalo.frecuencia }}</td>
                    <td>
                      {{ ((intervalo.frecuencia / datosOriginales.length) * 100).toFixed(1) }}%
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div class="navigation-buttons">
        <router-link to="/descriptiva" class="btn btn-secondary">
          Volver a Estadística Descriptiva
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import ContentCard from '@/components/common/ContentCard.vue'

// Definir interfaces para mejorar el tipado
interface ItemClasificacion {
  id: number
  text: string
  tipo: string
}

interface ItemsClasificados {
  'cualitativo-nominal': ItemClasificacion[]
  'cualitativo-ordinal': ItemClasificacion[]
  'cuantitativo-discreto': ItemClasificacion[]
  'cuantitativo-continuo': ItemClasificacion[]
}

// Configuración de pestañas
const tabs = [
  { id: 'tipos', label: 'Tipos de Datos' },
  { id: 'frecuencias', label: 'Frecuencias' },
  { id: 'agrupados', label: 'Datos Agrupados' },
]

const activeTab = ref('tipos')

// Juego de clasificación de datos
const itemsParaClasificar = ref<ItemClasificacion[]>([
  { id: 1, text: 'Tipo de sangre (A, B, AB, O)', tipo: 'cualitativo-nominal' },
  { id: 2, text: 'Temperatura corporal (°C)', tipo: 'cuantitativo-continuo' },
  { id: 3, text: 'Nivel educativo', tipo: 'cualitativo-ordinal' },
  { id: 4, text: 'Número de hijos', tipo: 'cuantitativo-discreto' },
  { id: 5, text: 'Color de ojos', tipo: 'cualitativo-nominal' },
  { id: 6, text: 'Estatura (cm)', tipo: 'cuantitativo-continuo' },
  { id: 7, text: 'Satisfacción laboral', tipo: 'cualitativo-ordinal' },
  { id: 8, text: 'Cantidad de habitaciones', tipo: 'cuantitativo-discreto' },
])

const itemsClasificados = ref<ItemsClasificados>({
  'cualitativo-nominal': [],
  'cualitativo-ordinal': [],
  'cuantitativo-discreto': [],
  'cuantitativo-continuo': [],
})

const onDragStart = (event: DragEvent, index: number) => {
  event.dataTransfer!.setData('text/plain', index.toString())
}

const onDrop = (event: DragEvent, targetType: keyof ItemsClasificados) => {
  const index = parseInt(event.dataTransfer!.getData('text/plain'))
  const item = itemsParaClasificar.value[index]
  // Verificar si la clasificación es correcta
  if (item.tipo === targetType) {
    itemsClasificados.value[targetType].push(item)
    itemsParaClasificar.value.splice(index, 1)
  } else {
    alert('Clasificación incorrecta. Intenta de nuevo.')
  }
}

const reiniciarJuego = () => {
  itemsParaClasificar.value = [
    { id: 1, text: 'Tipo de sangre (A, B, AB, O)', tipo: 'cualitativo-nominal' },
    { id: 2, text: 'Temperatura corporal (°C)', tipo: 'cuantitativo-continuo' },
    { id: 3, text: 'Nivel educativo', tipo: 'cualitativo-ordinal' },
    { id: 4, text: 'Número de hijos', tipo: 'cuantitativo-discreto' },
    { id: 5, text: 'Color de ojos', tipo: 'cualitativo-nominal' },
    { id: 6, text: 'Estatura (cm)', tipo: 'cuantitativo-continuo' },
    { id: 7, text: 'Satisfacción laboral', tipo: 'cualitativo-ordinal' },
    { id: 8, text: 'Cantidad de habitaciones', tipo: 'cuantitativo-discreto' },
  ]

  itemsClasificados.value = {
    'cualitativo-nominal': [],
    'cualitativo-ordinal': [],
    'cuantitativo-discreto': [],
    'cuantitativo-continuo': [],
  }
}
// Ejemplos de frecuencias
const ejemploSeleccionado = ref('colores')
const datosEjemplo = ref<string[]>([])
const totalDatos = computed(() => datosEjemplo.value.length)

const tablaFrecuencias = computed(() => {
  const frecuencias: { [key: string]: { absoluta: number; relativa: number; porcentual: number } } =
    {}

  // Calcular frecuencias absolutas
  datosEjemplo.value.forEach((dato) => {
    if (!frecuencias[dato]) {
      frecuencias[dato] = { absoluta: 0, relativa: 0, porcentual: 0 }
    }
    frecuencias[dato].absoluta++
  })

  // Calcular frecuencias relativas y porcentuales
  Object.keys(frecuencias).forEach((key) => {
    frecuencias[key].relativa = frecuencias[key].absoluta / totalDatos.value
    frecuencias[key].porcentual = frecuencias[key].relativa * 100
  })

  return frecuencias
})

const cargarEjemplo = () => {
  if (ejemploSeleccionado.value === 'colores') {
    datosEjemplo.value = [
      'Azul',
      'Rojo',
      'Verde',
      'Azul',
      'Amarillo',
      'Rojo',
      'Azul',
      'Verde',
      'Rojo',
      'Azul',
      'Morado',
      'Verde',
      'Rojo',
      'Azul',
    ]
  } else if (ejemploSeleccionado.value === 'calificaciones') {
    datosEjemplo.value = [
      '8',
      '7',
      '9',
      '6',
      '8',
      '7',
      '10',
      '6',
      '8',
      '7',
      '9',
      '8',
      '7',
      '6',
      '8',
      '9',
      '7',
      '8',
      '6',
      '7',
    ]
  } else if (ejemploSeleccionado.value === 'edades') {
    datosEjemplo.value = [
      '20',
      '22',
      '21',
      '23',
      '20',
      '24',
      '22',
      '21',
      '20',
      '23',
      '22',
      '21',
      '20',
      '24',
      '22',
      '21',
      '23',
      '20',
    ]
  }
}

// Práctica de frecuencias por usuario
const nuevoDato = ref('')
const datosUsuario = ref<string[]>([])

const agregarDato = () => {
  if (nuevoDato.value.trim()) {
    datosUsuario.value.push(nuevoDato.value.trim())
    nuevoDato.value = ''
  }
}

const eliminarDato = (index: number) => {
  datosUsuario.value.splice(index, 1)
}

const limpiarDatos = () => {
  datosUsuario.value = []
}

const tablaFrecuenciasUsuario = computed(() => {
  const frecuencias: { [key: string]: { absoluta: number; relativa: number; porcentual: number } } =
    {}

  datosUsuario.value.forEach((dato) => {
    if (!frecuencias[dato]) {
      frecuencias[dato] = { absoluta: 0, relativa: 0, porcentual: 0 }
    }
    frecuencias[dato].absoluta++
  })

  Object.keys(frecuencias).forEach((key) => {
    frecuencias[key].relativa = frecuencias[key].absoluta / datosUsuario.value.length
    frecuencias[key].porcentual = frecuencias[key].relativa * 100
  })

  return frecuencias
})

// Agrupación de datos
const datosParaAgrupar = ref('ejemplo1')
const numeroClases = ref(5)
const datosOriginales = ref<number[]>([])
const minimo = computed(() => Math.min(...datosOriginales.value))
const maximo = computed(() => Math.max(...datosOriginales.value))
const rango = computed(() => maximo.value - minimo.value)
const amplitud = computed(() => Math.ceil(rango.value / numeroClases.value))

const intervalos = ref<{ inferior: number; superior: number; marca: number; frecuencia: number }[]>(
  [],
)

const prepararDatosAgrupacion = () => {
  if (datosParaAgrupar.value === 'ejemplo1') {
    // Edades de 50 personas
    datosOriginales.value = Array.from({ length: 50 }, () => Math.floor(Math.random() * 40) + 18)
  } else if (datosParaAgrupar.value === 'ejemplo2') {
    // Salarios mensuales
    datosOriginales.value = Array.from(
      { length: 50 },
      () => Math.floor(Math.random() * 4000) + 1000,
    )
  } else if (datosParaAgrupar.value === 'ejemplo3') {
    // Tiempos de reacción
    datosOriginales.value = Array.from({ length: 50 }, () => Math.floor(Math.random() * 400) + 100)
  }

  calcularAgrupacion()
}

const calcularAgrupacion = () => {
  intervalos.value = []

  let inicio = minimo.value
  for (let i = 0; i < numeroClases.value; i++) {
    const inferior = inicio
    const superior = inferior + amplitud.value
    const marca = (inferior + superior) / 2

    // Contar frecuencia
    const frecuencia = datosOriginales.value.filter(
      (dato) => dato >= inferior && dato < superior,
    ).length

    intervalos.value.push({ inferior, superior, marca, frecuencia })
    inicio = superior
  }

  // Ajustar el último intervalo para incluir el máximo
  if (intervalos.value.length > 0) {
    intervalos.value[intervalos.value.length - 1].superior = maximo.value + 1
  }
}

// Inicializar
onMounted(() => {
  cargarEjemplo()
  prepararDatosAgrupacion()
})
</script>

<style scoped>
.tipos-datos-view {
  padding: 1rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.hero {
  text-align: center;
  margin-bottom: 2rem;
  padding: 2rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.hero h1 {
  color: #2ecc71;
  margin-bottom: 1rem;
  font-size: 2.2rem;
}

.hero p {
  font-size: 1.1rem;
  color: #7f8c8d;
}

.nav-tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  background: white;
  border-radius: 50px;
  padding: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.tab {
  padding: 0.8rem 1.5rem;
  cursor: pointer;
  border-radius: 50px;
  transition: all 0.3s ease;
  font-weight: bold;
  border: none;
  background: none;
}

.tab.active {
  background: #2ecc71;
  color: white;
}

.tab:hover:not(.active) {
  background: #e0e0e0;
}

.content-section {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
}

.content-section h2 {
  color: #2ecc71;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid #ecf0f1;
  padding-bottom: 0.5rem;
}

.explanation-box {
  background: #e8f4f8;
  padding: 1rem;
  border-radius: 6px;
  margin-bottom: 1.5rem;
  border-left: 4px solid #3498db;
}

.data-types {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
}

.data-type-category h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.type-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.examples-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
}

.example-item {
  background: #f8f9fa;
  padding: 0.5rem;
  border-radius: 4px;
  font-size: 0.9rem;
}

.example-box {
  background: #ecf0f1;
  padding: 1.5rem;
  border-radius: 8px;
  margin: 1.5rem 0;
  border-left: 4px solid #3498db;
}

/* Estilos para el juego de clasificación */
.interactive-activity {
  margin: 2rem 0;
  padding: 1.5rem;
  background: #f9f9f9;
  border-radius: 8px;
}

.clasification-game {
  margin-top: 1rem;
}

.game-items {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.draggable-item {
  padding: 0.5rem 1rem;
  background: #3498db;
  color: white;
  border-radius: 20px;
  cursor: grab;
  user-select: none;
}

.draggable-item:active {
  cursor: grabbing;
}

.game-targets {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.target {
  background: #f8f9fa;
  padding: 1rem;
  border: 2px dashed #ccc;
  border-radius: 8px;
  min-height: 150px;
}

.target h4 {
  margin-top: 0;
  text-align: center;
  color: #2c3e50;
}

.target-items {
  min-height: 100px;
}

.item-in-target {
  background: #e8f4f8;
  padding: 0.3rem 0.6rem;
  border-radius: 12px;
  margin: 0.2rem;
  display: inline-block;
  font-size: 0.8rem;
}

/* Estilos para frecuencias */
.frequency-types {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin: 2rem 0;
}

.frequency-card {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;
}

.frequency-card h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.formula {
  font-size: 1.2rem;
  font-weight: bold;
  color: #e74c3c;
  margin: 1rem 0;
  padding: 0.5rem;
  background: white;
  border-radius: 4px;
}

.interactive-example {
  margin: 2rem 0;
}

.example-controls {
  margin-bottom: 1.5rem;
}

.raw-data {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
  margin-bottom: 1.5rem;
}

.data-point {
  background: #e8f4f8;
  padding: 0.3rem 0.6rem;
  border-radius: 12px;
  font-size: 0.9rem;
}

.frequency-table {
  overflow-x: auto;
}

.frequency-table table {
  width: 100%;
  border-collapse: collapse;
}

.frequency-table th,
.frequency-table td {
  padding: 0.8rem;
  text-align: center;
  border-bottom: 1px solid #ddd;
}

.frequency-table th {
  background-color: #2ecc71;
  color: white;
}

.frequency-table tr:nth-child(even) {
  background-color: #f9f9f9;
}

/* Práctica de frecuencias */
.practice-activity {
  margin: 2rem 0;
}

.practice-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.input-section,
.results-section {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
}

.data-input {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.data-input input {
  flex: 1;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.user-data {
  margin-top: 1rem;
}

.data-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 0.5rem 0;
}

.user-data-point {
  background: #e8f4f8;
  padding: 0.3rem 0.8rem;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.delete-btn {
  background: #e74c3c;
  color: white;
  border: none;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  cursor: pointer;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.user-frequency-table {
  overflow-x: auto;
}

.user-frequency-table table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;
}

.user-frequency-table th,
.user-frequency-table td {
  padding: 0.5rem;
  text-align: center;
  border-bottom: 1px solid #ddd;
}

.user-frequency-table th {
  background-color: #2ecc71;
  color: white;
}

.no-data {
  text-align: center;
  padding: 2rem;
  color: #7f8c8d;
}

/* Estilos para datos agrupados */
.data-grouping {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin: 2rem 0;
}

.grouping-type {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
}

.grouping-type h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.grouping-type ul {
  margin-left: 1.5rem;
}

.grouping-type li {
  margin-bottom: 0.5rem;
}

.grouping-process {
  margin: 2rem 0;
}

.process-steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.step {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.step-number {
  background: #2ecc71;
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  flex-shrink: 0;
}

.step-content h4 {
  margin: 0 0 0.5rem 0;
  color: #2c3e50;
}

.interactive-grouping {
  margin: 2rem 0;
}

.grouping-controls {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.grouping-results {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
}

.original-data,
.grouping-calculation {
  margin-bottom: 1.5rem;
}

.data-summary,
.calculation-results {
  display: flex;
  gap: 2rem;
}

.frequency-distribution {
  overflow-x: auto;
}

.frequency-distribution table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;
}

.frequency-distribution th,
.frequency-distribution td {
  padding: 0.5rem;
  text-align: center;
  border-bottom: 1px solid #ddd;
}

.frequency-distribution th {
  background-color: #2ecc71;
  color: white;
}

.navigation-buttons {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

.btn {
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  border: none;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;
  text-decoration: none;
  display: inline-block;
}

.btn-primary {
  background: #2ecc71;
  color: white;
}

.btn-primary:hover {
  background: #27ae60;
}

.btn-secondary {
  background: #7f8c8d;
  color: white;
}

.btn-secondary:hover {
  background: #6c7a7b;
}

@media (max-width: 768px) {
  .nav-tabs {
    flex-direction: column;
  }

  .data-types {
    grid-template-columns: 1fr;
  }

  .type-cards {
    grid-template-columns: 1fr;
  }

  .examples-grid {
    grid-template-columns: 1fr;
  }

  .frequency-types {
    grid-template-columns: 1fr;
  }

  .practice-container {
    grid-template-columns: 1fr;
  }

  .data-grouping {
    grid-template-columns: 1fr;
  }

  .process-steps {
    grid-template-columns: 1fr;
  }

  .grouping-controls {
    flex-direction: column;
  }

  .data-summary,
  .calculation-results {
    flex-direction: column;
    gap: 0.5rem;
  }

  .game-targets {
    grid-template-columns: 1fr;
  }
}
</style>
