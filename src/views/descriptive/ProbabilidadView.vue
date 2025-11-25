<template>
  <div class="probabilidad-view">
    <div class="container">
      <div class="hero">
        <h1>Probabilidad</h1>
        <p>
          Aprende a medir la incertidumbre: desde conceptos básicos hasta reglas de adición y
          multiplicación para calcular probabilidades.
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

      <!-- MÓDULO 1: FUNDAMENTOS Y TIPOS DE PROBABILIDAD -->
      <div v-if="activeTab === 'fundamentos'" class="content-section">
        <h2>Fundamentos y Tipos de Probabilidad</h2>

        <div class="intro-box">
          <h3>📊 Explicación Intuitiva</h3>
          <p>
            Antes de ver números, hay que entender la lógica. La probabilidad es simplemente el
            lenguaje que usamos para medir la incertidumbre. Imagina una escala del 0 al 1:
          </p>
          <ul style="line-height: 1.8; margin-top: 1rem">
            <li><strong>0:</strong> Imposible que ocurra (ej. que el sol desaparezca hoy)</li>
            <li><strong>1:</strong> Seguro que ocurra (ej. que salga el sol mañana)</li>
            <li>
              <strong>0.5:</strong> Tienes la misma chance de que pase o no (lanzar una moneda)
            </li>
          </ul>
        </div>

        <h3>Conceptos Clave</h3>
        <p style="margin-bottom: 1rem">
          Para hablar de probabilidad necesitamos definir tres cosas que suenan parecidas pero no lo
          son:
        </p>

        <div class="concepts-grid">
          <div class="concept-card">
            <h3>🎲 Experimento</h3>
            <p>Es la acción que realizamos.</p>
            <div class="example-inline">
              <strong>Ejemplo:</strong>
              <p>Lanzar un dado</p>
            </div>
          </div>

          <div class="concept-card">
            <h3>🎯 Resultado</h3>
            <p>Es lo que sale específicamente.</p>
            <div class="example-inline">
              <strong>Ejemplo:</strong>
              <p>Sale el número 2</p>
            </div>
          </div>

          <div class="concept-card">
            <h3>📍 Evento</h3>
            <p>Es lo que nos interesa analizar. Puede ser uno o varios resultados.</p>
            <div class="example-inline">
              <strong>Ejemplo:</strong>
              <p>"Que salga un número par", que incluye al 2, 4 y 6</p>
            </div>
          </div>
        </div>

        <h3 style="margin-top: 2rem">Definiciones Formales y Fórmulas</h3>
        <p>
          Existen tres formas (enfoques) de asignar probabilidad, dependiendo de qué tanta
          información tengas:
        </p>

        <div class="detailed-example">
          <h3>A. Probabilidad Clásica</h3>
          <p>
            Se usa cuando todos los resultados tienen <strong>la misma posibilidad</strong> de salir
            (como dados o cartas). No necesitas hacer el experimento, solo usar la lógica.
          </p>
          <div
            class="formula-display"
            v-html="
              renderLatexDisplay(
                'P(\\text{Evento}) = \\frac{\\text{Número de resultados favorables}}{\\text{Número total de posibles resultados}}',
              )
            "
          ></div>
        </div>

        <div class="detailed-example">
          <h3>B. Probabilidad Empírica (Frecuencia Relativa)</h3>
          <p>
            Se basa en <strong>datos históricos</strong> o experimentos pasados. Aquí aplica la "Ley
            de los Grandes Números": entre más veces repitas el experimento, más preciso será tu
            cálculo.
          </p>
          <div
            class="formula-display"
            v-html="
              renderLatexDisplay(
                'P(\\text{Evento}) = \\frac{\\text{Número de veces que el evento ocurre}}{\\text{Número total de observaciones}}',
              )
            "
          ></div>
        </div>

        <div class="detailed-example">
          <h3>C. Probabilidad Subjetiva</h3>
          <p>
            Se usa cuando no hay datos históricos ni lógica matemática clara. Se basa en la
            <strong>experiencia o intuición</strong> del experto (ej. "¿Qué probabilidad hay de que
            mi equipo gane el Super Bowl?").
          </p>
        </div>

        <div class="detailed-example" style="margin-top: 2rem">
          <h3>📚 Ejemplo Guiado (Paso a Paso)</h3>
          <p style="margin-bottom: 1rem">
            <strong>Problema:</strong> Una bolsa de verduras mixtas. Se analizaron 4,000 paquetes.
          </p>
          <ul style="line-height: 1.8">
            <li>100 tenían menos peso</li>
            <li>3,600 tenían peso satisfactorio</li>
            <li>300 tenían más peso</li>
            <li>
              <strong>Pregunta:</strong> ¿Cuál es la probabilidad de que un paquete tenga "más
              peso"?
            </li>
          </ul>

          <div class="step-card">
            <div class="step-number">1</div>
            <div class="step-content">
              <h4>Identificar el enfoque</h4>
              <p>Tenemos datos pasados, así que es <em>Probabilidad Empírica</em>.</p>
            </div>
          </div>

          <div class="step-card">
            <div class="step-number">2</div>
            <div class="step-content">
              <h4>Definir el evento</h4>
              <div
                class="formula-display"
                v-html="renderLatexDisplay('C = \\text{Más peso}')"
              ></div>
            </div>
          </div>

          <div class="step-card">
            <div class="step-number">3</div>
            <div class="step-content">
              <h4>Aplicar fórmula</h4>
              <div
                class="formula-display"
                v-html="renderLatexDisplay('P(C) = \\frac{300}{4000} = 0.075')"
              ></div>
            </div>
          </div>

          <div class="step-card">
            <div class="step-number">4</div>
            <div class="step-content">
              <h4>Interpretación</h4>
              <p>
                Hay un <strong>7.5% de probabilidad</strong> de que el próximo paquete tenga
                sobrepeso.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- MÓDULO 2: REGLAS DE LA ADICIÓN -->
      <div v-if="activeTab === 'adicion'" class="content-section">
        <h2>Reglas de la Adición (La lógica del "O")</h2>

        <div class="intro-box">
          <h3>💡 Explicación Intuitiva</h3>
          <p>
            Usamos estas reglas cuando queremos saber la probabilidad de que pase una cosa
            <strong>O</strong> la otra (ej. "¿Cuál es la probabilidad de que un paquete pese menos
            <strong>o</strong> pese más?").
          </p>
        </div>

        <div class="analogy-box">
          <h3>🔑 Concepto Vital: Mutuamente Excluyente</h3>
          <p>
            Significa que dos cosas <strong>no pueden pasar al mismo tiempo</strong>. (Ej. Un
            semáforo no puede estar en verde y en rojo a la vez).
          </p>
        </div>

        <h3>Ayudas Visuales</h3>

        <div class="visual-placeholder">
          <div class="placeholder-box">
            <h4>📊 Diagrama de Venn: Eventos Mutuamente Excluyentes</h4>
            <p style="margin-bottom: 1rem">
              <strong>Representación visual:</strong> Dos círculos separados sin intersección
            </p>
            <div style="display: flex; justify-content: center; padding: 2rem; background: white; border-radius: 8px; margin: 1rem 0">
              <svg width="300" height="150" viewBox="0 0 300 150">
                <!-- Círculo A -->
                <circle cx="80" cy="75" r="50" fill="#4CAF50" opacity="0.6" stroke="#2E7D32" stroke-width="2"/>
                <text x="80" y="80" text-anchor="middle" fill="white" font-size="20" font-weight="bold">A</text>
                
                <!-- Círculo B -->
                <circle cx="220" cy="75" r="50" fill="#2196F3" opacity="0.6" stroke="#1565C0" stroke-width="2"/>
                <text x="220" y="80" text-anchor="middle" fill="white" font-size="20" font-weight="bold">B</text>
                
                <!-- Etiquetas -->
                <text x="80" y="140" text-anchor="middle" font-size="12">Evento A</text>
                <text x="220" y="140" text-anchor="middle" font-size="12">Evento B</text>
              </svg>
            </div>
            <p style="font-style: italic; color: #666">
              <strong>Interpretación:</strong> Los eventos A y B no pueden ocurrir simultáneamente. 
              Por ejemplo: un paquete no puede "pesar menos" Y "pesar más" al mismo tiempo.
            </p>
            <p style="margin-top: 0.5rem">
              <strong>Fórmula aplicable:</strong> P(A o B) = P(A) + P(B)
            </p>
          </div>
        </div>

        <div class="visual-placeholder">
          <div class="placeholder-box">
            <h4>📊 Diagrama de Venn: Eventos NO Mutuamente Excluyentes</h4>
            <p style="margin-bottom: 1rem">
              <strong>Representación visual:</strong> Dos círculos con intersección
            </p>
            <div style="display: flex; justify-content: center; padding: 2rem; background: white; border-radius: 8px; margin: 1rem 0">
              <svg width="300" height="150" viewBox="0 0 300 150">
                <!-- Círculo A -->
                <circle cx="120" cy="75" r="50" fill="#4CAF50" opacity="0.5" stroke="#2E7D32" stroke-width="2"/>
                
                <!-- Círculo B -->
                <circle cx="180" cy="75" r="50" fill="#2196F3" opacity="0.5" stroke="#1565C0" stroke-width="2"/>
                
                <!-- Área de intersección (visualmente representada) -->
                <path d="M 150,75 m -20,-35 a 50,50 0 0,1 40,0" fill="#FF9800" opacity="0.7"/>
                <path d="M 150,75 m -20,35 a 50,50 0 0,0 40,0" fill="#FF9800" opacity="0.7"/>
                
                <!-- Etiquetas -->
                <text x="100" y="80" text-anchor="middle" fill="white" font-size="16" font-weight="bold">A</text>
                <text x="150" y="80" text-anchor="middle" fill="white" font-size="14" font-weight="bold">A∩B</text>
                <text x="200" y="80" text-anchor="middle" fill="white" font-size="16" font-weight="bold">B</text>
                
                <text x="100" y="140" text-anchor="middle" font-size="12">Solo A</text>
                <text x="150" y="140" text-anchor="middle" font-size="12">Ambos</text>
                <text x="200" y="140" text-anchor="middle" font-size="12">Solo B</text>
              </svg>
            </div>
            <p style="font-style: italic; color: #666">
              <strong>Interpretación:</strong> Los eventos A y B pueden ocurrir simultáneamente. 
              El área naranja (A∩B) representa la intersección que se contaría dos veces si solo sumamos.
            </p>
            <p style="margin-top: 0.5rem">
              <strong>Fórmula aplicable:</strong> P(A o B) = P(A) + P(B) - P(A y B)
            </p>
            <p style="margin-top: 0.5rem; color: #d32f2f; font-weight: 600">
              ⚠️ La intersección debe restarse para evitar el doble conteo
            </p>
          </div>
        </div>

        <h3 style="margin-top: 2rem">Fórmulas Formales</h3>

        <div class="formula-section">
          <h3>Regla Especial de la Adición</h3>
          <p style="margin-bottom: 1rem">
            <strong>Solo si son mutuamente excluyentes:</strong>
          </p>
          <div
            class="formula-display"
            v-html="renderLatexDisplay('P(A \\text{ o } B) = P(A) + P(B)')"
          ></div>
        </div>

        <div class="formula-section">
          <h3>Regla General de la Adición</h3>
          <p style="margin-bottom: 1rem"><strong>Para cualquier evento:</strong></p>
          <div
            class="formula-display"
            v-html="renderLatexDisplay('P(A \\text{ o } B) = P(A) + P(B) - P(A \\text{ y } B)')"
          ></div>
        </div>

        <div class="formula-section">
          <h3>Regla del Complemento</h3>
          <p style="margin-bottom: 1rem">
            <strong>Lo que falta para llegar al 100%:</strong>
          </p>
          <div class="formula-display" v-html="renderLatexDisplay('P(A) = 1 - P(\\sim A)')"></div>
          <div class="tip-section" style="margin-top: 1rem">
            <p>
              <strong>💡 Pro-Tip:</strong> La regla del complemento es tu mejor amiga. A veces es
              difícil calcular la probabilidad de que algo <em>pase</em>, pero es muy fácil calcular
              la de que <em>no pase</em>. Si calculas el "no", se lo restas a 1 y listo.
            </p>
          </div>
        </div>

        <div class="detailed-example" style="margin-top: 2rem">
          <h3>📚 Ejemplo 1: Eventos Mutuamente Excluyentes - Paquetes de Verduras</h3>
          <p style="margin-bottom: 1rem">
            <strong>Problema:</strong> Retomando el ejemplo de los 4,000 paquetes de verduras mixtas:
          </p>
          <ul style="line-height: 1.8">
            <li>100 paquetes tenían menos peso (evento A): P(A) = 100/4000 = 0.025</li>
            <li>3,600 paquetes tenían peso satisfactorio (evento B): P(B) = 3600/4000 = 0.90</li>
            <li>300 paquetes tenían más peso (evento C): P(C) = 300/4000 = 0.075</li>
            <li>
              <strong>Pregunta:</strong> ¿Cuál es la probabilidad de que un paquete en particular
              <strong>pese menos O pese más</strong>?
            </li>
          </ul>

          <div class="step-card">
            <div class="step-number">1</div>
            <div class="step-content">
              <h4>Analizar la exclusividad</h4>
              <p>
                ¿Son mutuamente excluyentes? <strong>Sí</strong>, porque un paquete NO puede pesar
                menos, tener peso satisfactorio y pesar más al mismo tiempo. Solo puede estar en una
                categoría.
              </p>
            </div>
          </div>

          <div class="step-card">
            <div class="step-number">2</div>
            <div class="step-content">
              <h4>Aplicar la Regla Especial de la Adición</h4>
              <p style="margin-bottom: 0.5rem">
                Como los eventos son mutuamente excluyentes, simplemente sumamos:
              </p>
              <div
                class="formula-display"
                v-html="
                  renderLatexDisplay('P(A \\text{ o } C) = P(A) + P(C) = 0.025 + 0.075 = 0.10')
                "
              ></div>
            </div>
          </div>

          <div class="step-card">
            <div class="step-number">3</div>
            <div class="step-content">
              <h4>Interpretación</h4>
              <p>
                Hay un <strong>10% de probabilidad</strong> de que un paquete seleccionado al azar
                tenga un peso inadecuado (ya sea menos o más del peso satisfactorio).
              </p>
            </div>
          </div>

          <div class="tip-section" style="margin-top: 1rem">
            <p>
              <strong>📌 Nota importante:</strong> Los eventos A, B y C son <strong>colectivamente
              exhaustivos</strong>, es decir, un paquete seleccionado debe caer en una de estas tres
              categorías. Por eso P(A) + P(B) + P(C) = 0.025 + 0.90 + 0.075 = 1.00 (100%).
            </p>
          </div>

          <div class="tip-section" style="margin-top: 1rem; background: #e8f5e9; border-left-color: #4caf50">
            <p>
              <strong>🔍 Aplicando la Regla del Complemento:</strong> También podríamos calcular la
              probabilidad de peso inadecuado usando el complemento: P(peso inadecuado) = 1 - P(peso
              satisfactorio) = 1 - 0.90 = 0.10. ¡Mismo resultado!
            </p>
          </div>
        </div>

        <div class="detailed-example" style="margin-top: 2rem">
          <h3>📚 Ejemplo 2: Eventos NO Mutuamente Excluyentes - Turistas en Florida</h3>
          <p style="margin-bottom: 1rem">
            <strong>Problema:</strong> Una encuesta de turistas en Florida.
          </p>
          <ul style="line-height: 1.8">
            <li>Total turistas: 200</li>
            <li>Visitaron Disney: 120</li>
            <li>Visitaron Busch Gardens: 100</li>
            <li>Visitaron <strong>ambos</strong>: 60</li>
            <li>
              <strong>Pregunta:</strong> ¿Probabilidad de que visitaran Disney <strong>O</strong>
              Busch Gardens?
            </li>
          </ul>

          <div class="step-card">
            <div class="step-number">1</div>
            <div class="step-content">
              <h4>Analizar la exclusividad</h4>
              <p>
                ¿Son mutuamente excluyentes? <strong>No</strong>, porque 60 personas fueron a
                <strong>ambos</strong> parques. Este es el problema clave.
              </p>
            </div>
          </div>

          <div class="step-card">
            <div class="step-number">2</div>
            <div class="step-content">
              <h4>Identificar el error común</h4>
              <p style="margin-bottom: 0.5rem">
                Si usamos erróneamente la regla especial: P(Disney) + P(Busch) = 120/200 + 100/200 =
                0.60 + 0.50 = 1.10
              </p>
              <p>
                <strong>¡Error!</strong> La probabilidad no puede ser mayor que 1. La explicación es
                que las 60 personas que visitaron <strong>ambas atracciones</strong> se han contado
                dos veces: una vez en Disney y otra en Busch Gardens.
              </p>
            </div>
          </div>

          <div class="step-card">
            <div class="step-number">3</div>
            <div class="step-content">
              <h4>Calcular probabilidades individuales</h4>
              <ul style="line-height: 1.8">
                <li>
                  <span v-html="renderLatex('P(\\text{Disney}) = 120/200 = 0.60')"></span>
                </li>
                <li>
                  <span v-html="renderLatex('P(\\text{Busch}) = 100/200 = 0.50')"></span>
                </li>
                <li>
                  <span v-html="renderLatex('P(\\text{Ambos}) = 60/200 = 0.30')"></span> (Esta es la
                  intersección que se contó dos veces)
                </li>
              </ul>
            </div>
          </div>

          <div class="step-card">
            <div class="step-number">4</div>
            <div class="step-content">
              <h4>Aplicar la Regla General de la Adición</h4>
              <p style="margin-bottom: 0.5rem">
                Debemos <strong>restar</strong> la intersección para no contar dos veces:
              </p>
              <div
                class="formula-display"
                v-html="
                  renderLatexDisplay(
                    'P(\\text{Disney} \\cup \\text{Busch}) = 0.60 + 0.50 - 0.30 = 0.80',
                  )
                "
              ></div>
            </div>
          </div>

          <div class="step-card">
            <div class="step-number">5</div>
            <div class="step-content">
              <h4>Interpretación</h4>
              <p>
                El <strong>80% de los turistas</strong> visitó al menos uno de los dos parques. La
                regla general nos permitió corregir el doble conteo.
              </p>
            </div>
          </div>

          <div class="tip-section" style="margin-top: 1rem">
            <p>
              <strong>🔑 Clave:</strong> La regla general de la adición siempre funciona, incluso
              cuando los eventos son mutuamente excluyentes (porque en ese caso P(A y B) = 0, y se
              convierte en la regla especial). Cuando tengas dudas, usa la regla general.
            </p>
          </div>
        </div>

        <div class="detailed-example">
          <h3>🔑 Resumen Comparativo</h3>
          <p>
            Ahora que has visto ambos ejemplos, puedes identificar fácilmente cuándo usar cada
            regla. La clave está en preguntarte: <strong>¿Pueden ocurrir ambos eventos al mismo
            tiempo?</strong>
          </p>
          
          <div class="tip-section" style="margin-top: 1rem">
            <p>
              <strong>🔑 Clave:</strong> La regla general de la adición siempre funciona, incluso
              cuando los eventos son mutuamente excluyentes (porque en ese caso P(A y B) = 0, y se
              convierte en la regla especial). Cuando tengas dudas, usa la regla general.
            </p>
          </div>
        </div>
      </div>

      <!-- MÓDULO 3: REGLAS DE LA MULTIPLICACIÓN -->
      <div v-if="activeTab === 'multiplicacion'" class="content-section">
        <h2>Reglas de la Multiplicación (La lógica del "Y")</h2>

        <div class="intro-box">
          <h3>💡 Explicación Intuitiva</h3>
          <p>
            Se usa cuando queremos que ocurran dos eventos simultáneamente o en secuencia (ej.
            Lanzar una moneda <strong>y</strong> que salga cara, <strong>y</strong> lanzar otra
            <strong>y</strong> que salga cruz).
          </p>
        </div>

        <div class="analogy-box">
          <h3>🔑 Concepto Clave: Independencia</h3>
          <p>Aquí la clave es entender si los eventos son independientes o dependientes:</p>
          <ul style="line-height: 1.8; margin-top: 1rem">
            <li>
              <strong>Independiente:</strong> El primer evento no afecta al segundo (ej. lanzar dos
              monedas).
            </li>
            <li>
              <strong>Dependiente:</strong> El primer evento cambia las probabilidades del segundo
              (ej. sacar un chocolate de una caja y comértelo; para la siguiente sacada quedan menos
              chocolates).
            </li>
          </ul>
        </div>

        <h3 style="margin-top: 2rem">Definiciones y Fórmulas</h3>

        <div class="formula-section">
          <h3>Probabilidad Conjunta (Regla Especial - Independientes)</h3>
          <p style="margin-bottom: 1rem">
            <strong>Cuando los eventos son independientes:</strong>
          </p>
          <div
            class="formula-display"
            v-html="renderLatexDisplay('P(A \\text{ y } B) = P(A) \\cdot P(B)')"
          ></div>
        </div>

        <div class="formula-section">
          <h3>Probabilidad Condicional (Dependientes)</h3>
          <p style="margin-bottom: 1rem">
            Se escribe <span v-html="renderLatex('P(B|A)')"></span>, que se lee "Probabilidad de B,
            dado que ya pasó A".
          </p>
          <div
            class="formula-display"
            v-html="renderLatexDisplay('P(B|A) = \\frac{P(A \\text{ y } B)}{P(A)}')"
          ></div>
        </div>

        <div class="formula-section">
          <h3>Regla General de la Multiplicación</h3>
          <p style="margin-bottom: 1rem"><strong>Para cualquier tipo de eventos:</strong></p>
          <div
            class="formula-display"
            v-html="renderLatexDisplay('P(A \\text{ y } B) = P(A) \\cdot P(B|A)')"
          ></div>
        </div>

        <div class="detailed-example" style="margin-top: 2rem">
          <h3>📚 Ejemplo 1: Camisas (Dependiente)</h3>
          <p style="margin-bottom: 1rem">
            <strong>Problema:</strong> Hay 12 camisas, 9 blancas y 3 azules. Sacas una, te la pones
            (no la devuelves) y sacas otra para mañana. ¿Probabilidad de que ambas sean blancas?
          </p>

          <div class="step-card">
            <div class="step-number">1</div>
            <div class="step-content">
              <h4>Identificar el tipo</h4>
              <p>
                Es un evento <strong>dependiente</strong> porque la segunda probabilidad cambia (hay
                una camisa menos).
              </p>
            </div>
          </div>

          <div class="step-card">
            <div class="step-number">2</div>
            <div class="step-content">
              <h4>Calcular</h4>
              <ul style="line-height: 1.8">
                <li>Primera camisa blanca: <span v-html="renderLatex('P(A) = 9/12')"></span></li>
                <li>
                  Segunda camisa blanca (dado que la primera fue blanca):
                  <span v-html="renderLatex('P(B|A) = 8/11')"></span>
                </li>
              </ul>
              <div
                class="formula-display"
                v-html="
                  renderLatexDisplay(
                    'P(\\text{ambas blancas}) = \\frac{9}{12} \\cdot \\frac{8}{11} = 0.55',
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
                Hay un <strong>55% de probabilidad</strong> de sacar dos camisas blancas cuando no
                hay reemplazo. Nota cómo la dependencia reduce la probabilidad de la segunda camisa.
              </p>
            </div>
          </div>
        </div>

        <div class="detailed-example">
          <h3>📚 Ejemplo 2: Lanzar Dos Monedas (Independiente)</h3>
          <p style="margin-bottom: 1rem">
            <strong>Problema:</strong> Lanzar dos monedas. ¿Probabilidad de que ambas salgan cara?
          </p>

          <div class="step-card">
            <div class="step-number">1</div>
            <div class="step-content">
              <h4>Identificar el tipo</h4>
              <p>
                Es un evento <strong>independiente</strong> porque el resultado de la primera moneda
                no afecta a la segunda.
              </p>
            </div>
          </div>

          <div class="step-card">
            <div class="step-number">2</div>
            <div class="step-content">
              <h4>Calcular</h4>
              <div
                class="formula-display"
                v-html="
                  renderLatexDisplay(
                    'P(\\text{ambas caras}) = P(\\text{cara}) \\cdot P(\\text{cara}) = \\frac{1}{2} \\cdot \\frac{1}{2} = \\frac{1}{4} = 0.25',
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
                Hay un <strong>25% de probabilidad</strong> de obtener dos caras. La independencia
                entre los lanzamientos hace que sea simplemente el producto de las probabilidades
                individuales.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- RESUMEN -->
      <div v-if="activeTab === 'resumen'" class="content-section">
        <h2>Resumen y Puntos Clave</h2>

        <div class="summary-cards">
          <div class="summary-card">
            <h3>📊 Probabilidad</h3>
            <p>Medida de incertidumbre en una escala de 0 (imposible) a 1 (seguro).</p>
          </div>

          <div class="summary-card">
            <h3>🎲 Tres Tipos</h3>
            <p>Clásica (equiprobable), Empírica (datos históricos), Subjetiva (experiencia).</p>
          </div>

          <div class="summary-card">
            <h3>➕ Regla de Adición</h3>
            <p>
              Para eventos "O". Si son excluyentes: P(A o B) = P(A) + P(B). Si no: resta la
              intersección.
            </p>
          </div>

          <div class="summary-card">
            <h3>✖️ Regla de Multiplicación</h3>
            <p>
              Para eventos "Y". Si son independientes: P(A y B) = P(A) × P(B). Si no: usa P(B|A).
            </p>
          </div>

          <div class="summary-card">
            <h3>🔄 Mutuamente Excluyente</h3>
            <p>Dos eventos que NO pueden ocurrir al mismo tiempo (ej. verde y rojo en semáforo).</p>
          </div>

          <div class="summary-card">
            <h3>🔗 Independiente</h3>
            <p>Un evento no afecta la probabilidad del otro (ej. lanzar dos monedas diferentes).</p>
          </div>
        </div>

        <div class="comparison-box" style="margin-top: 2rem">
          <h3>⚖️ Comparación: Conceptos Clave</h3>
          <table class="comparison-table">
            <thead>
              <tr>
                <th>Concepto</th>
                <th>Definición</th>
                <th>Ejemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Mutuamente Excluyente</strong></td>
                <td>No pueden ocurrir simultáneamente</td>
                <td>Sacar un 2 O un 5 en un dado</td>
              </tr>
              <tr>
                <td><strong>Inclusivo (No Excluyente)</strong></td>
                <td>Pueden ocurrir simultáneamente</td>
                <td>Sacar un Rey O un Corazón (existe Rey de Corazones)</td>
              </tr>
              <tr>
                <td><strong>Independiente</strong></td>
                <td>Un evento no afecta al otro</td>
                <td>Lanzar dos monedas</td>
              </tr>
              <tr>
                <td><strong>Dependiente</strong></td>
                <td>Un evento afecta la probabilidad del otro</td>
                <td>Sacar cartas sin reemplazo</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="important-note" style="margin-top: 2rem">
          <h3>⚡ Paso a Paso para Resolver Problemas</h3>
          <ol style="line-height: 2; margin-top: 1rem">
            <li><strong>Lee el problema</strong> cuidadosamente</li>
            <li><strong>Identifica si es "O" o "Y":</strong> Adición vs. Multiplicación</li>
            <li><strong>Pregúntate:</strong> ¿Son mutuamente excluyentes? ¿Son independientes?</li>
            <li><strong>Elige la fórmula</strong> correcta</li>
            <li><strong>Calcula</strong> paso a paso</li>
            <li><strong>Interpreta</strong> el resultado en el contexto del problema</li>
          </ol>
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
  { id: 'fundamentos', label: 'Fundamentos' },
  { id: 'adicion', label: 'Reglas de Adición' },
  { id: 'multiplicacion', label: 'Reglas de Multiplicación' },
  { id: 'resumen', label: 'Resumen' },
]

const activeTab = ref('fundamentos')

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

.probabilidad-view {
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

.code-block {
  background: #2d3748;
  color: #e2e8f0;
  padding: 1rem;
  border-radius: 8px;
  overflow-x: auto;
  margin: 1rem 0;
  border-left: 4px solid var(--primary);
}

.code-block pre {
  margin: 0;
  font-size: 0.9rem;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  line-height: 1.5;
}

.code-block code {
  color: #e2e8f0;
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

.important-note {
  background: #f8d7da;
  padding: 1.5rem;
  border-radius: 10px;
  border-left: 5px solid #d32f2f;
}

.important-note h3 {
  color: #721c24;
  margin-top: 0;
}

.important-note ol {
  margin: 1rem 0;
  padding-left: 1.5rem;
  color: #721c24;
}

.important-note li {
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

.summary-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.summary-card {
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  padding: 1.5rem;
  border-radius: 10px;
  border-left: 5px solid var(--primary);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.summary-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
}

.summary-card h3 {
  color: var(--primary);
  font-size: 1.1rem;
  margin-top: 0;
  margin-bottom: 0.75rem;
}

.summary-card p {
  color: #555;
  line-height: 1.6;
  margin: 0;
  font-size: 0.95rem;
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

  .summary-cards {
    grid-template-columns: 1fr;
  }
}
</style>
