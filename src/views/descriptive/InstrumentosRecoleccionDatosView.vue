<template>
  <div class="instrumentos-view">
    <div class="container">
      <div class="hero">
        <h1>Instrumentos de Recolección de Datos</h1>
        <p>Aprende sobre las herramientas principales para recopilar información en estudios estadísticos</p>
      </div>

      <div class="content-section">
        <h2>¿Qué es un Instrumento de Recolección de Datos?</h2>
        <p>Un <strong>instrumento de recolección de datos</strong> es cualquier herramienta o recurso que utiliza un investigador para obtener la información necesaria para su estudio. La elección del instrumento correcto es fundamental para garantizar que los datos sean confiables y válidos. Dos de los instrumentos más comunes son las encuestas y la observación.</p>
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

      <!-- ENCUESTA -->
      <div v-if="activeTab === 'encuesta'" class="content-section">
        <h2>La Encuesta 📝</h2>
        <p>La encuesta es un método que consiste en hacer una serie de <strong>preguntas estandarizadas</strong> a un grupo de personas para recopilar información sobre sus opiniones, actitudes, comportamientos o características demográficas. El instrumento principal de la encuesta es el <strong>cuestionario</strong>.</p>

        <h3>Tipos de Preguntas en un Cuestionario:</h3>

        <div class="question-types">
          <div class="question-type">
            <h4>Preguntas Cerradas:</h4>
            <p>Ofrecen al encuestado un conjunto limitado de opciones de respuesta. Son fáciles de analizar estadísticamente.</p>
            <ul>
              <li><strong>Dicotómicas:</strong> Solo dos opciones. Ejemplo: *¿Tiene usted un teléfono inteligente? (Sí / No)*.</li>
              <li><strong>Opción Múltiple:</strong> Varias opciones para elegir una o varias. Ejemplo: *¿Cuál es su red social preferida? (Facebook / Instagram / TikTok / X)*.</li>
              <li><strong>Escala de Likert:</strong> Mide el grado de acuerdo o desacuerdo. Ejemplo: *El servicio al cliente fue excelente. (Totalmente en desacuerdo / En desacuerdo / Neutral / De acuerdo / Totalmente de acuerdo)*.</li>
            </ul>
          </div>

          <div class="question-type">
            <h4>Preguntas Abiertas:</h4>
            <p>Permiten al encuestado responder con sus propias palabras, sin opciones predefinidas. Proporcionan información más profunda y cualitativa, pero son más difíciles de analizar.</p>
            <p>Ejemplo: *¿Qué sugerencias tiene para mejorar nuestro servicio?*</p>
          </div>
        </div>

        <h3>Ventajas y Desventajas de la Encuesta:</h3>
        <div class="advantages-disadvantages">
          <div class="advantages">
            <h4>Ventajas 👍</h4>
            <ul>
              <li><strong>Alcance Amplio:</strong> Permite recopilar datos de una gran cantidad de personas de forma eficiente.</li>
              <li><strong>Estandarización:</strong> Todos responden las mismas preguntas, lo que facilita la comparación y el análisis.</li>
              <li><strong>Anonimato:</strong> Puede alentar a las personas a dar respuestas más honestas sobre temas sensibles.</li>
              <li><strong>Costo-Efectividad:</strong> Las encuestas en línea, en particular, son una forma económica de recolectar datos.</li>
            </ul>
          </div>
          <div class="disadvantages">
            <h4>Desventajas 👎</h4>
            <ul>
              <li><strong>Respuestas Superficiales:</strong> Las preguntas cerradas pueden no capturar la complejidad de la opinión de una persona.</li>
              <li><strong>Baja Tasa de Respuesta:</strong> Es común que muchas personas no respondan, lo que puede afectar la representatividad de la muestra.</li>
              <li><strong>Sesgo de Deseabilidad Social:</strong> Los encuestados pueden dar respuestas que creen que son socialmente aceptables en lugar de sus verdaderas opiniones.</li>
              <li><strong>Falta de Contexto:</strong> No se puede observar el lenguaje corporal o el entorno del encuestado.</li>
            </ul>
          </div>
        </div>

        <h3>Ejemplo Práctico de Encuesta</h3>
        <div class="example-box">
          <h4>Encuesta sobre Hábitos de Estudio</h4>
          <div class="questionnaire">
            <div class="question">
              <p><strong>1. Género:</strong></p>
              <div class="options">
                <label><input type="radio" name="gender" value="masculino"> Masculino</label>
                <label><input type="radio" name="gender" value="femenino"> Femenino</label>
                <label><input type="radio" name="gender" value="otro"> Otro</label>
              </div>
            </div>

            <div class="question">
              <p><strong>2. ¿Cuántas horas dedicas al estudio diario?</strong></p>
              <div class="options">
                <label><input type="radio" name="hours" value="1-2"> 1-2 horas</label>
                <label><input type="radio" name="hours" value="3-4"> 3-4 horas</label>
                <label><input type="radio" name="hours" value="5+"> Más de 5 horas</label>
              </div>
            </div>

            <div class="question">
              <p><strong>3. En una escala del 1 al 5, ¿qué tan satisfecho estás con tus métodos de estudio?</strong></p>
              <div class="likert-scale">
                <span>1 (Muy insatisfecho)</span>
                <label><input type="radio" name="satisfaction" value="1"> 1</label>
                <label><input type="radio" name="satisfaction" value="2"> 2</label>
                <label><input type="radio" name="satisfaction" value="3"> 3</label>
                <label><input type="radio" name="satisfaction" value="4"> 4</label>
                <label><input type="radio" name="satisfaction" value="5"> 5</label>
                <span>(Muy satisfecho)</span>
              </div>
            </div>

            <div class="question">
              <p><strong>4. ¿Qué técnicas de estudio utilizas? (Puedes seleccionar múltiples)</strong></p>
              <div class="options">
                <label><input type="checkbox" name="techniques" value="resumen"> Hacer resúmenes</label>
                <label><input type="checkbox" name="techniques" value="mapas"> Mapas mentales</label>
                <label><input type="checkbox" name="techniques" value="grupos"> Estudio en grupo</label>
                <label><input type="checkbox" name="techniques" value="flashcards"> Tarjetas de memoria</label>
                <label><input type="checkbox" name="techniques" value="repeticion"> Repetición espaciada</label>
              </div>
            </div>

            <div class="question">
              <p><strong>5. ¿Qué sugerencias tienes para mejorar los métodos de estudio en tu institución?</strong></p>
              <textarea placeholder="Escribe tu respuesta aquí..." rows="3"></textarea>
            </div>
          </div>
        </div>
      </div>

      <!-- OBSERVACIÓN -->
      <div v-if="activeTab === 'observacion'" class="content-section">
        <h2>La Observación 👀</h2>
        <p>La observación es una técnica que implica <strong>mirar y registrar sistemáticamente</strong> el comportamiento de personas, objetos o eventos en su entorno natural o en un entorno controlado. El investigador no pregunta, simplemente observa.</p>

        <h3>Tipos de Observación:</h3>

        <div class="observation-types">
          <div class="observation-type">
            <h4>Según la Participación del Observador:</h4>
            <ul>
              <li><strong>Observación Participante:</strong> El investigador se integra y forma parte del grupo que está estudiando para comprender la situación desde adentro.</li>
              <li><strong>Observación No Participante:</strong> El investigador observa desde fuera, sin involucrarse en las actividades del grupo.</li>
            </ul>
          </div>

          <div class="observation-type">
            <h4>Según la Estructuración:</h4>
            <ul>
              <li><strong>Observación Estructurada:</strong> El investigador define de antemano qué comportamientos específicos va a observar y utiliza una lista de cotejo o una plantilla para registrar la frecuencia de dichos comportamientos.</li>
              <li><strong>Observación No Estructurada:</strong> El investigador registra todos los comportamientos y eventos que le parecen relevantes, sin una guía predefinida. Es más exploratoria.</li>
            </ul>
          </div>
        </div>

        <h3>Ventajas y Desventajas de la Observación:</h3>
        <div class="advantages-disadvantages">
          <div class="advantages">
            <h4>Ventajas 👍</h4>
            <ul>
              <li><strong>Datos Reales y Directos:</strong> Captura el comportamiento real, no lo que las personas *dicen* que hacen.</li>
              <li><strong>Riqueza de Contexto:</strong> Proporciona una comprensión profunda del entorno y las circunstancias que rodean un comportamiento.</li>
              <li><strong>Independencia del Lenguaje:</strong> Es útil para estudiar a niños, animales o personas con barreras de comunicación.</li>
              <li><strong>Captura de lo Inconsciente:</strong> Revela hábitos o comportamientos que las personas no saben que tienen.</li>
            </ul>
          </div>
          <div class="disadvantages">
            <h4>Desventajas 👎</h4>
            <ul>
              <li><strong>Efecto Observador (Efecto Hawthorne):</strong> Las personas pueden cambiar su comportamiento si saben que están siendo observadas.</li>
              <li><strong>Subjetividad del Investigador:</strong> La interpretación de lo que se observa puede estar sesgada por las creencias del propio investigador.</li>
              <li><strong>Dificultad para Generalizar:</strong> Los hallazgos de un grupo pequeño y específico pueden no ser aplicables a una población más grande.</li>
              <li><strong>Consume Tiempo y Recursos:</strong> Generalmente, requiere más tiempo y esfuerzo que aplicar una encuesta.</li>
            </ul>
          </div>
        </div>

        <h3>Ejemplo Práctico de Observación</h3>
        <div class="example-box">
          <h4>Estudio del Comportamiento en una Cafetería Universitaria</h4>
          <div class="observation-scenario">
            <h5>Objetivo del Estudio:</h5>
            <p>Analizar cómo los estudiantes utilizan el tiempo durante sus descansos en la cafetería para identificar patrones de comportamiento social y hábitos de alimentación.</p>

            <h5>Método Utilizado:</h5>
            <p><strong>Observación No Participante Estructurada</strong> durante 5 días hábiles, de 12:00 a 14:00 horas.</p>

            <h5>Lista de Cotejo (Variables Observadas):</h5>
            <div class="checklist">
              <div class="checklist-item">
                <span>👥 Número de estudiantes solos vs. en grupo</span>
              </div>
              <div class="checklist-item">
                <span>⏱️ Tiempo promedio en la cafetería</span>
              </div>
              <div class="checklist-item">
                <span>📱 Uso de dispositivos electrónicos</span>
              </div>
              <div class="checklist-item">
                <span>🍽️ Tipo de alimentos consumidos</span>
              </div>
              <div class="checklist-item">
                <span>💬 Nivel de interacción social</span>
              </div>
              <div class="checklist-item">
                <span>📚 Actividades académicas (estudio, lectura)</span>
              </div>
            </div>

            <h5>Resultados Observados (Datos de Muestra):</h5>
            <div class="observation-results">
              <div class="result-item">
                <strong>Día 1:</strong> 45 estudiantes observados. 60% en grupos de 2-4 personas. Tiempo promedio: 28 minutos. 70% usando teléfonos. Mayor consumo de bebidas energéticas.
              </div>
              <div class="result-item">
                <strong>Día 3:</strong> 52 estudiantes. 55% solos. Mayor actividad de estudio (40% con libros/materiales). Consumo equilibrado entre comidas rápidas y saludables.
              </div>
              <div class="result-item">
                <strong>Día 5:</strong> 38 estudiantes. 75% en grupos grandes. Alto nivel de interacción social. Predominio de snacks y bebidas.
              </div>
            </div>

            <h5>Conclusiones Preliminares:</h5>
            <ul>
              <li>Los estudiantes en grupo tienden a permanecer más tiempo y consumir más alimentos</li>
              <li>El uso de dispositivos electrónicos es común, especialmente entre estudiantes solos</li>
              <li>Los días de exámenes muestran mayor actividad académica durante los descansos</li>
            </ul>
          </div>
        </div>
      </div>

    <!-- TIPOS DE ENCUESTA -->
    <div v-if="activeTab === 'tipos-encuesta'" class="content-section">
      <h2>Tipos de Encuesta</h2>
      <p>Las encuestas se pueden clasificar de varias maneras, principalmente según su <strong>método de administración</strong> y su <strong>marco temporal</strong>.</p>

      <h3>Según el Método de Administración</h3>
      <p>Esto se refiere a cómo se entrega el cuestionario y se recogen las respuestas.</p>

      <div class="survey-types">
        <div class="survey-category">
          <h4>Encuestas Autoadministradas</h4>
          <p>La persona responde por sí misma, sin la intervención de un entrevistador.</p>

          <div class="sub-types">
            <div class="sub-type">
              <h5>📬 Encuesta por Correo Postal</h5>
              <p>Se envía el cuestionario físico por correo. Es un método tradicional, cada vez menos usado por su baja tasa de respuesta y lentitud.</p>
            </div>

            <div class="sub-type">
              <h5>💻 Encuesta en Línea (Online)</h5>
              <p>Se distribuye a través de email, redes sociales o un sitio web (ej. Google Forms, SurveyMonkey).</p>
              <div class="pros-cons">
                <strong>Ventajas:</strong> Es rápida, económica y los datos se registran automáticamente.<br>
                <strong>Desventajas:</strong> No llega a personas sin acceso a internet (brecha digital).
              </div>
            </div>

            <div class="sub-type">
              <h5>📝 Encuesta Entregada en Persona</h5>
              <p>Se entrega el cuestionario directamente a la persona para que lo llene en el momento o lo devuelva más tarde.</p>
            </div>
          </div>
        </div>

        <div class="survey-category">
          <h4>Encuestas Administradas por un Entrevistador</h4>
          <p>Un entrevistador hace las preguntas directamente al encuestado.</p>

          <div class="sub-types">
            <div class="sub-type">
              <h5>👥 Encuesta Cara a Cara (Personal)</h5>
              <p>El entrevistador y el entrevistado están físicamente en el mismo lugar.</p>
              <div class="pros-cons">
                <strong>Ventajas:</strong> Permite aclarar dudas y observar el lenguaje no verbal, logrando una mayor tasa de participación.<br>
                <strong>Desventajas:</strong> Es el método más costoso y lento.
              </div>
            </div>

            <div class="sub-type">
              <h5>📞 Encuesta Telefónica</h5>
              <p>Se realiza la entrevista por teléfono.</p>
              <div class="pros-cons">
                <strong>Ventajas:</strong> Más rápida y económica que la personal, permitiendo un amplio alcance geográfico.<br>
                <strong>Desventajas:</strong> La gente desconfía de las llamadas y es fácil que cuelguen; no se pueden usar apoyos visuales.
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3>Según el Marco Temporal</h3>

      <div class="temporal-types">
        <div class="temporal-type">
          <h4>📸 Encuesta Transversal (Cross-Sectional)</h4>
          <p>Se realiza en <strong>un único momento en el tiempo</strong>. Es como tomar una fotografía de las opiniones o características de una población en un instante específico.</p>
          <p><em>Ejemplo: Una encuesta de opinión política una semana antes de las elecciones.</em></p>
        </div>

        <div class="temporal-type">
          <h4>🎬 Encuesta Longitudinal</h4>
          <p>Se realiza <strong>a lo largo del tiempo</strong>, midiendo a la misma muestra en repetidas ocasiones. Es como una película, que permite ver cambios y evoluciones.</p>
          <p><em>Ejemplo: Un estudio que encuesta a los mismos graduados universitarios cada dos años para ver su desarrollo profesional.</em></p>
        </div>
      </div>
    </div>

    <!-- TIPOS DE PREGUNTAS -->
    <div v-if="activeTab === 'tipos-preguntas'" class="content-section">
      <h2>Tipos de Preguntas en un Cuestionario</h2>
      <p>Profundizando en los tipos de preguntas, podemos detallar más las cerradas.</p>

      <h3>Preguntas Cerradas (Estructuradas)</h3>

      <div class="question-types-detailed">
        <div class="question-type-detail">
          <h4>🔘 Dicotómicas</h4>
          <p>Solo dos opciones de respuesta.</p>
          <p><em>Ejemplo: ¿Asistió al evento de bienvenida? (Sí / No)</em></p>
        </div>

        <div class="question-type-detail">
          <h4>☑️ Opción Múltiple</h4>
          <p>Se presenta una lista de opciones.</p>
          <div class="sub-questions">
            <div class="sub-question">
              <strong>De respuesta única:</strong> Solo se puede elegir una opción.<br>
              <em>Ejemplo: ¿Cuál es su nivel de estudio más alto? (Primaria / Secundaria / Pregrado / Postgrado)</em>
            </div>
            <div class="sub-question">
              <strong>De respuesta múltiple:</strong> Se pueden elegir varias opciones.<br>
              <em>Ejemplo: ¿Qué dispositivos electrónicos utiliza a diario? (Marque todos los que apliquen: Smartphone / Laptop / Tablet / Smartwatch)</em>
            </div>
          </div>
        </div>

        <div class="question-type-detail">
          <h4>📊 Escala de Likert</h4>
          <p>Mide el nivel de acuerdo o desacuerdo con una afirmación. Es ideal para medir actitudes y opiniones.</p>
          <div class="likert-example">
            <p><em>Ejemplo: "La plataforma de aprendizaje es fácil de usar".</em></p>
            <div class="scale-options">
              <span>1. Totalmente en desacuerdo</span>
              <span>2. En desacuerdo</span>
              <span>3. Ni de acuerdo ni en desacuerdo</span>
              <span>4. De acuerdo</span>
              <span>5. Totalmente de acuerdo</span>
            </div>
          </div>
        </div>

        <div class="question-type-detail">
          <h4>⚖️ Escala de Diferencial Semántico</h4>
          <p>Se pide al encuestado que valore un concepto usando adjetivos opuestos en los extremos de una escala.</p>
          <div class="semantic-example">
            <p><em>Ejemplo: Valore nuestro servicio al cliente.</em></p>
            <div class="semantic-scale">
              <div class="scale-item">
                <span>Ineficiente</span>
                <span class="scale-numbers">[1] [2] [3] [4] [5]</span>
                <span>Eficiente</span>
              </div>
              <div class="scale-item">
                <span>Lento</span>
                <span class="scale-numbers">[1] [2] [3] [4] [5]</span>
                <span>Rápido</span>
              </div>
            </div>
          </div>
        </div>

        <div class="question-type-detail">
          <h4>📈 De Ordenamiento o Ranking</h4>
          <p>Se pide al encuestado que ordene una lista de elementos según su preferencia o importancia.</p>
          <p><em>Ejemplo: Ordene los siguientes factores al elegir un restaurante, donde 1 es el más importante y 4 el menos importante: (___ Precio, ___ Calidad de la comida, ___ Ambiente, ___ Ubicación)</em></p>
        </div>
      </div>

      <h3>Preguntas Abiertas (No Estructuradas)</h3>
      <p>Permiten una respuesta libre y detallada, capturando la perspectiva del encuestado sin restricciones. Son excelentes para obtener ideas nuevas y entender el "porqué" de una respuesta.</p>

      <div class="open-questions">
        <div class="open-example">
          <p><em>Ejemplo: ¿Qué es lo que más le gustó de su visita a nuestro museo?</em></p>
        </div>
        <div class="open-example">
          <p><em>Ejemplo: ¿Cómo podríamos mejorar su experiencia de compra en línea?</em></p>
        </div>
      </div>
    </div>

    <!-- TIPOS DE OBSERVACIÓN -->
    <div v-if="activeTab === 'tipos-observacion'" class="content-section">
      <h2>Tipos de Observación</h2>
      <p>La observación también tiene clasificaciones más detalladas según el entorno y el nivel de control.</p>

      <div class="observation-types-detailed">
        <div class="observation-type-detail">
          <h4>🌍 Observación de Campo (o Naturalista)</h4>
          <p>Se realiza en el <strong>entorno natural</strong> del sujeto, sin ninguna intervención por parte del investigador. El objetivo es observar el comportamiento tal como ocurre espontáneamente.</p>
          <p><em>Ejemplo: Un antropólogo viviendo en una comunidad indígena para estudiar sus costumbres.</em></p>
        </div>

        <div class="observation-type-detail">
          <h4>🔬 Observación de Laboratorio (o Controlada)</h4>
          <p>Se realiza en un <strong>entorno artificial y controlado</strong> por el investigador (como una sala de laboratorio). Esto permite aislar variables y enfocarse en comportamientos específicos.</p>
          <p><em>Ejemplo: Un estudio que observa cómo reaccionan los niños a un nuevo juguete en una sala de juegos diseñada para la investigación.</em></p>
        </div>

        <div class="observation-type-detail">
          <h4>🤝 Observación Participante</h4>
          <p>El investigador se involucra activamente y se convierte en un miembro del grupo que está estudiando. Esto le da una perspectiva "desde adentro".</p>
        </div>

        <div class="observation-type-detail">
          <h4>👁️ Observación No Participante</h4>
          <p>El investigador es un espectador externo que no interfiere en absoluto con el grupo. Es el clásico rol de "mosca en la pared".</p>
        </div>

        <div class="observation-type-detail">
          <h4>📋 Observación Estructurada (o Sistemática)</h4>
          <p>El investigador utiliza una <strong>plantilla o lista de cotejo (checklist)</strong> para registrar la frecuencia de comportamientos previamente definidos. Es muy cuantitativa.</p>
          <p><em>Ejemplo: Anotar cada 5 minutos cuántos clientes en una tienda están mirando su celular.</em></p>
        </div>

        <div class="observation-type-detail">
          <h4>🔍 Observación No Estructurada</h4>
          <p>El investigador registra de forma libre todo lo que considera relevante. Es cualitativa y exploratoria, ideal para las primeras fases de una investigación.</p>
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
import { ref } from 'vue'

// Configuración de pestañas
const tabs = [
  { id: 'encuesta', label: 'Encuesta' },
  { id: 'tipos-encuesta', label: 'Tipos de Encuesta' },
  { id: 'tipos-preguntas', label: 'Tipos de Preguntas' },
  { id: 'observacion', label: 'Observación' },
  { id: 'tipos-observacion', label: 'Tipos de Observación' },
]

const activeTab = ref('encuesta')
</script>

<style scoped>
.instrumentos-view {
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

.content-section h3 {
  color: #2c3e50;
  margin: 2rem 0 1rem 0;
}

.question-types,
.observation-types {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin: 2rem 0;
}

.question-type,
.observation-type {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
}

.question-type h4,
.observation-type h4 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.advantages-disadvantages {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin: 2rem 0;
}

.advantages,
.disadvantages {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
}

.advantages h4 {
  color: #27ae60;
}

.disadvantages h4 {
  color: #e74c3c;
}

.advantages ul,
.disadvantages ul {
  margin-left: 1.5rem;
}

.advantages li,
.disadvantages li {
  margin-bottom: 0.5rem;
}

.example-box {
  background: #ecf0f1;
  padding: 1.5rem;
  border-radius: 8px;
  margin: 2rem 0;
  border-left: 4px solid #3498db;
}

.example-box h4 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.questionnaire {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid #ddd;
}

.question {
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #eee;
}

.question:last-child {
  border-bottom: none;
  margin-bottom: 0;
}

.question p {
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #2c3e50;
}

.options {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.options label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}

.likert-scale {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.likert-scale span {
  font-size: 0.9rem;
  color: #7f8c8d;
}

textarea {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  resize: vertical;
}

.observation-scenario h5 {
  color: #2c3e50;
  margin: 1.5rem 0 0.5rem 0;
  font-size: 1.1rem;
}

.observation-scenario h5:first-child {
  margin-top: 0;
}

.checklist {
  background: white;
  padding: 1rem;
  border-radius: 6px;
  border: 1px solid #ddd;
  margin: 1rem 0;
}

.checklist-item {
  padding: 0.5rem 0;
  border-bottom: 1px solid #f0f0f0;
}

.checklist-item:last-child {
  border-bottom: none;
}

.observation-results {
  background: white;
  padding: 1rem;
  border-radius: 6px;
  border: 1px solid #ddd;
  margin: 1rem 0;
}

.result-item {
  padding: 0.5rem 0;
  border-bottom: 1px solid #f0f0f0;
}

.result-item:last-child {
  border-bottom: none;
}

.observation-scenario ul {
  margin-left: 1.5rem;
}

.observation-scenario li {
  margin-bottom: 0.5rem;
}

.survey-types,
.temporal-types {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin: 2rem 0;
}

.survey-category {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
}

.survey-category h4 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.sub-types {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-top: 1rem;
}

.sub-type {
  background: white;
  padding: 1rem;
  border-radius: 6px;
  border-left: 3px solid #3498db;
}

.sub-type h5 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.pros-cons {
  margin-top: 0.5rem;
  font-size: 0.9rem;
  line-height: 1.4;
}

.temporal-type {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #2ecc71;
}

.temporal-type h4 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.question-types-detailed {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin: 2rem 0;
}

.question-type-detail {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #9b59b6;
}

.question-type-detail h4 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.sub-questions {
  margin-top: 1rem;
}

.sub-question {
  margin-bottom: 1rem;
  padding-left: 1rem;
  border-left: 2px solid #ddd;
}

.sub-question:last-child {
  margin-bottom: 0;
}

.likert-example,
.semantic-example {
  margin-top: 1rem;
}

.scale-options {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.scale-options span {
  background: white;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  font-size: 0.9rem;
  border: 1px solid #ddd;
}

.semantic-scale {
  margin-top: 0.5rem;
}

.scale-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  background: white;
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ddd;
}

.scale-numbers {
  font-family: monospace;
  color: #e74c3c;
  font-weight: bold;
}

.open-questions {
  margin: 2rem 0;
}

.open-example {
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 6px;
  margin-bottom: 1rem;
  border-left: 4px solid #f39c12;
}

.open-example:last-child {
  margin-bottom: 0;
}

.observation-types-detailed {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin: 2rem 0;
}

.observation-type-detail {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #e67e22;
}

.observation-type-detail h4 {
  color: #2c3e50;
  margin-bottom: 1rem;
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

.btn-secondary {
  background: #7f8c8d;
  color: white;
}

.btn-secondary:hover {
  background: #6c7a7b;
}

@media (max-width: 768px) {
  .question-types,
  .observation-types,
  .advantages-disadvantages {
    grid-template-columns: 1fr;
  }

  .nav-tabs {
    flex-direction: column;
  }
}
</style>
