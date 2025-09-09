<template>
  <div class="poblacion-muestra-view">
    <div class="container">
      <div class="hero">
        <h1>Población, Muestra y Tipos de Muestreo</h1>
        <p>Una guía visual e interactiva para entender los conceptos fundamentales de la investigación estadística</p>
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

      <!-- Introducción -->
      <div v-if="activeTab === 'introduccion'" class="content-section">
        <h2>Introducción a la Investigación Estadística</h2>
        <p>En investigación, especialmente en ciencias sociales y de la salud, es común que queramos estudiar características de grupos grandes de personas (poblaciones). Sin embargo, casi siempre es imposible estudiar a todos los miembros de una población debido a limitaciones de tiempo, costo y recursos.</p>

        <div class="example-box">
          <h3>Ejemplo práctico</h3>
          <p>Imagina que queremos conocer la intención de voto de todos los ciudadanos de un país. Sería muy costoso y llevaría demasiado tiempo entrevistar a cada uno de los millones de votantes. En su lugar, seleccionamos un subconjunto representativo (muestra) y extrapolamos los resultados a toda la población.</p>
        </div>

        <p>Este aplicativo te guiará a través de los conceptos clave para entender cómo seleccionamos estas muestras y los diferentes métodos disponibles para hacerlo.</p>
      </div>

      <!-- Población y Muestra -->
      <div v-if="activeTab === 'poblacion-muestra'" class="content-section">
        <h2>Población y Muestra</h2>

        <h3>¿Qué es una Población?</h3>
        <p>La población es el conjunto completo de individuos, objetos o eventos que comparten características observables y que son de interés para una investigación. Es el grupo sobre el cual queremos generalizar los resultados.</p>

        <h3>¿Qué es una Muestra?</h3>
        <p>Una muestra es un subconjunto representativo de la población que seleccionamos para estudiar. Al examinar la muestra, podemos hacer inferencias sobre toda la población.</p>

        <div class="visualization">
          <div class="population-viz">
            <h3>Población</h3>
            <div class="dots-container">
              <div
                v-for="i in 100"
                :key="i"
                class="dot"
                :class="{ selected: muestraSeleccionada.includes(i-1) }"
                :style="{ backgroundColor: colores[i % colores.length] }"
              ></div>
            </div>
            <p>Total de elementos: <strong>100</strong></p>
          </div>

          <div class="sample-viz">
            <h3>Muestra</h3>
            <div class="dots-container">
              <div
                v-for="index in muestraSeleccionada"
                :key="index"
                class="dot"
                :style="{ backgroundColor: colores[index % colores.length] }"
              ></div>
            </div>
            <p>Elementos seleccionados: <strong>{{ muestraSeleccionada.length }}</strong></p>
          </div>
        </div>

        <div class="interactive-controls">
          <h3>Configuración de la Muestra</h3>
          <div class="control-group">
            <label for="sample-size">Tamaño de la muestra (% de la población):</label>
            <input type="range" id="sample-size" min="5" max="50" v-model="tamanoMuestra">
            <span>{{ tamanoMuestra }}%</span>
          </div>
          <button @click="seleccionarMuestraAleatoria" class="btn btn-primary">
            Seleccionar Muestra Aleatoria
          </button>
        </div>

        <div class="example-box">
          <h3>Ejemplo: Estudiantes Universitarios</h3>
          <p><strong>Población:</strong> Todos los estudiantes matriculados en una universidad (ej: 25,000 estudiantes).</p>
          <p><strong>Muestra:</strong> Un grupo de 500 estudiantes seleccionados mediante técnicas apropiadas para representar a toda la población universitaria.</p>
        </div>
      </div>

      <!-- Muestreo Probabilístico -->
      <div v-if="activeTab === 'muestreo-probabilistico'" class="content-section">
        <h2>Muestreo Probabilístico</h2>
        <p>En el muestreo probabilístico, todos los miembros de la población tienen una probabilidad conocida y diferente de cero de ser seleccionados. Esto permite calcular el error muestral y hacer generalizaciones estadísticas.</p>

        <div class="sampling-types">
          <ContentCard
            v-for="(card, index) in cardsMuestreoProbabilistico"
            :key="'prob-'+index"
            :title="card.title"
            :content="card.content"
            :card-type="'descriptive'"
          />
        </div>

      <div class="interactive-controls">
        <h3>Simulador de Muestreo Probabilístico</h3>
        <p>Explora interactivamente los diferentes métodos de muestreo probabilístico con nuestro simulador:</p>
        <router-link :to="{ name: 'sampling-simulator' }" class="btn btn-primary">
          Abrir Simulador de Muestreo
        </router-link>
      </div>
      </div>

      <!-- Muestreo No Probabilístico -->
      <div v-if="activeTab === 'muestreo-no-probabilistico'" class="content-section">
        <h2>Muestreo No Probabilístico</h2>
        <p>En el muestreo no probabilístico, la selección de los elementos no se basa en la probabilidad, sino en la conveniencia, el juicio del investigador u otros criterios no aleatorios. No permite calcular el error muestral.</p>

        <div class="sampling-types">
          <ContentCard
            v-for="(card, index) in cardsMuestreoNoProbabilistico"
            :key="'no-prob-'+index"
            :title="card.title"
            :content="card.content"
            :card-type="'inferential'"
          />
        </div>

        <div class="example-box">
          <h3>¿Cuándo usar muestreo no probabilístico?</h3>
          <ul>
            <li>Cuando la población es muy homogénea</li>
            <li>En estudios exploratorios o cualitativos</li>
            <li>Cuando no es posible obtener un marco muestral</li>
            <li>En investigaciones con limitaciones de tiempo y presupuesto</li>
            <li>Para poblaciones de difícil acceso</li>
          </ul>
        </div>
      </div>

      <!-- Comparación -->
      <div v-if="activeTab === 'comparacion'" class="content-section">
        <h2>Comparación entre Muestreo Probabilístico y No Probabilístico</h2>

        <table class="comparison-table">
          <thead>
            <tr>
              <th>Aspecto</th>
              <th>Muestreo Probabilístico</th>
              <th>Muestreo No Probabilístico</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, index) in tablaComparacion" :key="index">
              <td>{{ row.aspecto }}</td>
              <td>{{ row.probabilistico }}</td>
              <td>{{ row.noProbabilistico }}</td>
            </tr>
          </tbody>
        </table>

        <div class="example-box">
          <h3>¿Cuál elegir?</h3>
          <p>La elección entre uno u otro tipo de muestreo depende de:</p>
          <ul>
            <li><strong>Objetivos de la investigación:</strong> ¿Necesitas generalizar los resultados?</li>
            <li><strong>Recursos disponibles:</strong> ¿Cuentas con tiempo, presupuesto y marco muestral?</li>
            <li><strong>Naturaleza de la población:</strong> ¿Es accesible y homogénea?</li>
            <li><strong>Precisión requerida:</strong> ¿Necesitas calcular márgenes de error?</li>
          </ul>
          <p>En la práctica, muchos estudios utilizan enfoques mixtos que combinan elementos de ambos tipos de muestreo.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import ContentCard from '@/components/common/ContentCard.vue';

// Tabs de navegación
const tabs = [
  { id: 'introduccion', label: 'Introducción' },
  { id: 'poblacion-muestra', label: 'Población y Muestra' },
  { id: 'muestreo-probabilistico', label: 'Muestreo Probabilístico' },
  { id: 'muestreo-no-probabilistico', label: 'Muestreo No Probabilístico' },
  { id: 'comparacion', label: 'Comparación' }
];

const activeTab = ref('introduccion');

// Datos para la visualización de población y muestra
const colores = ['#3498db', '#2ecc71', '#e74c3c', '#f39c12', '#9b59b6', '#1abc9c'];
const tamanoMuestra = ref(20);
const muestraSeleccionada = ref<number[]>([]);

// Métodos de muestreo probabilístico
const cardsMuestreoProbabilistico = [
  {
    title: 'Muestreo Aleatorio Simple',
    content: 'Cada miembro de la población tiene la misma probabilidad de ser seleccionado. Se utiliza cuando la población es homogénea. Ejemplo: Sortear nombres de una urna.'
  },
  {
    title: 'Muestreo Sistemático',
    content: 'Se selecciona un punto de inicio aleatorio y luego se elige cada k-ésimo elemento de la población. Ejemplo: Seleccionar cada décimo estudiante de una lista alfabética.'
  },
  {
    title: 'Muestreo Estratificado',
    content: 'La población se divide en estratos homogéneos y se selecciona una muestra de cada estrato. Ejemplo: Dividir por facultades en una universidad y muestrear proporcionalmente de cada una.'
  },
  {
    title: 'Muestreo por Conglomerados',
    content: 'La población se divide en grupos naturales (conglomerados) y se seleccionan algunos conglomerados aleatoriamente para estudiarlos completos. Ejemplo: Seleccionar ciertas aulas de una escuela y estudiar todos sus estudiantes.'
  }
];

// Métodos de muestreo no probabilístico
const cardsMuestreoNoProbabilistico = [
  {
    title: 'Muestreo por Conveniencia',
    content: 'Se seleccionan los elementos más accesibles o disponibles para el investigador. Ejemplo: Encuestar a personas en un centro comercial.'
  },
  {
    title: 'Muestreo por Juicio',
    content: 'El investigador selecciona los elementos que considera más representativos según su criterio. Ejemplo: Consultar a expertos en un tema específico.'
  },
  {
    title: 'Muestreo por Cuotas',
    content: 'Se establecen cuotas para diferentes tipos de elementos de la población y se seleccionan hasta completar las cuotas. Ejemplo: Encuestar a 50 hombres y 50 mujeres de diferentes grupos de edad.'
  },
  {
    title: 'Muestreo de Bola de Nieve',
    content: 'Los participantes iniciales refieren a otros participantes, creciendo la muestra como una bola de nieve. Ejemplo: Estudios con poblaciones de difícil acceso, como inmigrantes indocumentados.'
  }
];

// Tabla de comparación
const tablaComparacion = [
  { aspecto: 'Base de selección', probabilistico: 'Aleatoriedad', noProbabilistico: 'Conveniencia o juicio' },
  { aspecto: 'Representatividad', probabilistico: 'Alta (si está bien diseñado)', noProbabilistico: 'Variable (puede haber sesgos)' },
  { aspecto: 'Error muestral', probabilistico: 'Calculable', noProbabilistico: 'No calculable' },
  { aspecto: 'Generalización', probabilistico: 'Inferencia estadística', noProbabilistico: 'Limitada o teórica' },
  { aspecto: 'Complejidad', probabilistico: 'Alta (requiere marco muestral)', noProbabilistico: 'Baja (fácil implementación)' },
  { aspecto: 'Costo y tiempo', probabilistico: 'Generalmente alto', noProbabilistico: 'Generalmente bajo' },
  { aspecto: 'Aplicaciones típicas', probabilistico: 'Investigación cuantitativa, encuestas, estudios con necesidad de generalización', noProbabilistico: 'Estudios exploratorios, investigación cualitativa, casos de prueba' }
];


// Función para seleccionar muestra aleatoria
const seleccionarMuestraAleatoria = () => {
  const tamano = Math.floor((tamanoMuestra.value / 100) * 100);
  const todos = Array.from({ length: 100 }, (_, i) => i);

  // Mezclar array
  for (let i = todos.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [todos[i], todos[j]] = [todos[j], todos[i]];
  }

  muestraSeleccionada.value = todos.slice(0, tamano);
};



// Inicializar muestra al cargar el componente
onMounted(() => {
  seleccionarMuestraAleatoria();
});
</script>

<style scoped>
.poblacion-muestra-view {
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
  color: #3498db;
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
  background: #3498db;
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
  color: #3498db;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid #ecf0f1;
  padding-bottom: 0.5rem;
}

.content-section h3 {
  color: #2ecc71;
  margin: 1.5rem 0 1rem 0;
}

.content-section p {
  margin-bottom: 1rem;
}

.example-box {
  background: #ecf0f1;
  padding: 1.5rem;
  border-radius: 8px;
  margin: 1.5rem 0;
  border-left: 4px solid #3498db;
}

.visualization {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin: 2rem 0;
  justify-content: center;
}

.population-viz, .sample-viz {
  flex: 1;
  min-width: 300px;
  background: #ecf0f1;
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;
}

.dots-container {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  margin: 1rem 0;
  min-height: 120px;
}

.dot {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: inline-block;
}

.dot.selected {
  border: 2px solid #e74c3c;
  transform: scale(1.2);
}

.interactive-controls {
  background: #ecf0f1;
  padding: 1.5rem;
  border-radius: 8px;
  margin: 1.5rem 0;
}

.control-group {
  margin-bottom: 1rem;
}

.control-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.control-group select, .control-group input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  max-width: 300px;
}

.sampling-types {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.comparison-table {
  width: 100%;
  border-collapse: collapse;
  margin: 2rem 0;
}

.comparison-table th, .comparison-table td {
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.comparison-table th {
  background-color: #3498db;
  color: white;
}

.comparison-table tr:nth-child(even) {
  background-color: #f2f2f2;
}

.btn {
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  border: none;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;
}

.btn-primary {
  background: #3498db;
  color: white;
}

.btn-primary:hover {
  background: #2980b9;
}

@media (max-width: 768px) {
  .nav-tabs {
    flex-direction: column;
    border-radius: 10px;
  }

  .tab {
    border-radius: 0;
    text-align: center;
  }

  .tab:first-child {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .tab:last-child {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  .visualization {
    flex-direction: column;
  }
}
</style>
