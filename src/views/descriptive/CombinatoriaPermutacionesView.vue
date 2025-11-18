<template>
  <div class="combinatoria-view">
    <div class="container">
      <div class="hero">
        <h1>Combinatoria y Permutaciones</h1>
        <p>
          Domina el conteo sistemático: experimentos aleatorios, eventos y técnicas fundamentales
          para calcular probabilidades.
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

      <!-- INTRO -->
      <div v-if="activeTab === 'introduccion'" class="content-section">
        <h2>Conceptos Fundamentales</h2>

        <div class="intro-box">
          <h3>📌 ¿Qué es la Combinatoria?</h3>
          <p>
            La combinatoria es la rama de las matemáticas que estudia las formas de
            <strong>contar de forma sistemática</strong> los posibles resultados de experimentos o
            eventos. En lugar de listar todos los resultados (lo cual sería impracticable con
            números grandes), usamos fórmulas para calcular cuántos hay.
          </p>
          <p style="margin-top: 1rem; font-weight: bold; color: var(--primary)">
            Aplicaciones prácticas: calcular probabilidades, análisis de carreras, permutaciones de
            objetos, combinaciones de selecciones, contraseñas, etc.
          </p>
        </div>

        <div class="concepts-grid">
          <div class="concept-card">
            <h3>🎲 Experimento Aleatorio</h3>
            <p>
              Un procedimiento que puede repetirse bajo las mismas condiciones y cuyo resultado es
              impredecible.
            </p>
            <div class="example-inline">
              <strong>Ejemplos:</strong>
              <ul>
                <li>Lanzar un dado</li>
                <li>Lanzar una moneda</li>
                <li>Sacar una carta de una baraja</li>
              </ul>
            </div>
          </div>

          <div class="concept-card">
            <h3>🎯 Espacio Muestral (Ω)</h3>
            <p>
              Conjunto de <strong>todos los resultados posibles</strong> de un experimento
              aleatorio.
            </p>
            <div class="example-inline">
              <strong>Ejemplos:</strong>
              <ul>
                <li>Dado: Ω = {1, 2, 3, 4, 5, 6}</li>
                <li>Moneda: Ω = {Cara, Sello}</li>
                <li>Dos dados: 36 pares ordenados</li>
              </ul>
            </div>
          </div>

          <div class="concept-card">
            <h3>📍 Evento</h3>
            <p>
              Subconjunto del espacio muestral; es decir, un resultado o conjunto de resultados que
              nos interesan.
            </p>
            <div class="example-inline">
              <strong>Ejemplos:</strong>
              <ul>
                <li>Dado par: A = {2, 4, 6}</li>
                <li>Moneda cara: B = {Cara}</li>
                <li>Mayor a 3: C = {4, 5, 6}</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="detailed-example">
          <h3>📚 Ejemplo Completo: Lanzar un Dado</h3>
          <div class="step-card">
            <div class="step-number">1</div>
            <div class="step-content">
              <h4>Definir el Experimento</h4>
              <p><strong>Experimento:</strong> Lanzar un dado común de 6 caras.</p>
            </div>
          </div>

          <div class="step-card">
            <div class="step-number">2</div>
            <div class="step-content">
              <h4>Identificar el Espacio Muestral</h4>
              <div class="formula-display">
                <span v-html="renderLatexDisplay('\\Omega = \\{1, 2, 3, 4, 5, 6\\}')"></span>
              </div>
              <p><strong>Total de resultados posibles:</strong> 6</p>
            </div>
          </div>

          <div class="step-card">
            <div class="step-number">3</div>
            <div class="step-content">
              <h4>Definir un Evento</h4>
              <p><strong>Evento A:</strong> Obtener un número par.</p>
              <div class="formula-display">
                <span v-html="renderLatexDisplay('A = \\{2, 4, 6\\}')"></span>
              </div>
              <p><strong>Resultados favorables:</strong> 3</p>
            </div>
          </div>

          <div class="step-card">
            <div class="step-number">4</div>
            <div class="step-content">
              <h4>Calcular la Probabilidad</h4>
              <div class="formula-display">
                <span
                  v-html="
                    renderLatexDisplay(
                      'P(A) = \\frac{|A|}{|\\Omega|} = \\frac{3}{6} = \\frac{1}{2} = 0.5',
                    )
                  "
                ></span>
              </div>
              <p>Hay un <strong>50% de probabilidad</strong> de obtener un número par.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- PERMUTACIONES -->
      <div v-if="activeTab === 'permutaciones'" class="content-section">
        <h2>Permutaciones: El Orden SÍ Importa</h2>

        <div class="analogy-box">
          <h3>💡 Idea Clave</h3>
          <p>
            Una <strong>permutación</strong> es un arreglo de elementos donde el
            <strong>orden es importante</strong>. Si cambias el orden, tienes una permutación
            diferente.
          </p>
          <p style="margin-top: 1rem">
            <strong>Analogía:</strong> Los códigos de acceso, las posiciones en una carrera, el
            orden de personas en una fila.
          </p>
        </div>

        <div
          class="info-box"
          style="
            background: #e3f2fd;
            border-left: 5px solid #1976d2;
            padding: 1.5rem;
            border-radius: 10px;
            margin-bottom: 1.5rem;
          "
        >
          <h3 style="color: #1565c0; margin-top: 0">ℹ️ ¿Qué es el Factorial?</h3>
          <p style="line-height: 1.7; color: #0d47a1">
            El <strong>factorial de n</strong> (escrito como <strong>n!</strong>) es el producto de
            todos los números enteros positivos desde 1 hasta n.
          </p>
          <div
            class="formula-display"
            v-html="
              renderLatexDisplay(
                'n! = n \\times (n-1) \\times (n-2) \\times \\cdots \\times 2 \\times 1',
              )
            "
          ></div>
          <p style="margin-top: 1rem; line-height: 1.7; color: #0d47a1">
            <strong>Ejemplos:</strong>
          </p>
          <ul style="line-height: 1.8; color: #0d47a1; margin-left: 1.5rem">
            <li>
              <span
                v-html="renderLatex('5! = 5 \\times 4 \\times 3 \\times 2 \\times 1 = 120')"
              ></span>
            </li>
            <li><span v-html="renderLatex('3! = 3 \\times 2 \\times 1 = 6')"></span></li>
            <li><span v-html="renderLatex('0! = 1')"></span> (por definición)</li>
          </ul>
          <p style="margin-top: 1rem; line-height: 1.7; color: #0d47a1">
            <strong>Interpretación:</strong> n! representa todas las formas posibles de ordenar n
            elementos distintos.
          </p>
        </div>

        <div class="formula-section">
          <h3>Fórmula de Permutaciones (sin repetición)</h3>
          <p style="margin-bottom: 1rem">
            Seleccionar y organizar k elementos de n elementos disponibles:
          </p>
          <div
            class="formula-display"
            v-html="
              renderLatexDisplay(
                'P(n,k) = P_n^k = \\frac{n!}{(n-k)!} = n \\times (n-1) \\times (n-2) \\times \\cdots \\times (n-k+1)',
              )
            "
          ></div>
        </div>

        <div class="formula-section">
          <h3>Fórmula de Permutaciones (con repetición/reposición)</h3>
          <p style="margin-bottom: 1rem">
            Cuando se permite repetir elementos (cada posición tiene n opciones):
          </p>
          <div class="formula-display" v-html="renderLatexDisplay('P_{rep}(n,k) = n^k')"></div>
          <p style="margin-top: 0.5rem; color: #666">
            <strong>Ejemplo:</strong> Contraseñas, códigos PIN, combinaciones de candados.
          </p>
        </div>

        <div class="detailed-example">
          <h3>📚 Ejemplo 1: Podio en una Carrera</h3>

          <div class="step-card">
            <div class="step-number">1</div>
            <div class="step-content">
              <h4>Entender el Problema</h4>
              <p>
                En una carrera hay <strong>4 corredores: A, B, C, D</strong>. Queremos saber de
                cuántas formas diferentes pueden ocupar los <strong>3 primeros lugares</strong>
                (1er, 2do, 3er puesto).
              </p>
              <p style="margin-top: 0.5rem">
                <strong>¿Por qué es permutación?</strong> Porque el orden importa: no es lo mismo
                llegar 1º que 2º.
              </p>
            </div>
          </div>

          <div class="step-card">
            <div class="step-number">2</div>
            <div class="step-content">
              <h4>Identificar n y k</h4>
              <ul>
                <li><strong>n = 4</strong> (total de corredores)</li>
                <li><strong>k = 3</strong> (posiciones a llenar: 1er, 2do, 3er)</li>
              </ul>
            </div>
          </div>

          <div class="step-card">
            <div class="step-number">3</div>
            <div class="step-content">
              <h4>Aplicar la Fórmula</h4>
              <div
                class="formula-display"
                v-html="
                  renderLatexDisplay(
                    'P(4,3) = \\frac{4!}{(4-3)!} = \\frac{4!}{1!} = \\frac{24}{1} = 24',
                  )
                "
              ></div>
            </div>
          </div>

          <div class="step-card">
            <div class="step-number">4</div>
            <div class="step-content">
              <h4>Pensar Intuitivamente</h4>
              <ul style="line-height: 1.8">
                <li>
                  <strong>Para el 1er puesto:</strong> 4 opciones (cualquiera de los 4 corredores)
                </li>
                <li><strong>Para el 2do puesto:</strong> 3 opciones (uno ya ganó, quedan 3)</li>
                <li><strong>Para el 3er puesto:</strong> 2 opciones (dos ya cruzaron, quedan 2)</li>
              </ul>
              <p style="margin-top: 1rem; font-weight: bold">
                Total: 4 × 3 × 2 = <span style="color: var(--primary); font-size: 1.2rem">24</span>
              </p>
            </div>
          </div>

          <div class="step-card">
            <div class="step-number">5</div>
            <div class="step-content">
              <h4>Código Python</h4>
              <div class="code-block">
                <pre><code>import math
n, k = 4, 3
# Método 1: Usando math.perm (Python 3.8+)
resultado = math.perm(n, k)
print(f"P({n},{k}) = {resultado}")  # 24

# Método 2: Usando factorial
resultado2 = math.factorial(n) // math.factorial(n - k)
print(f"Usando factorial: {resultado2}")  # 24

# Método 3: Razonamiento multiplicativo
resultado3 = n * (n-1) * (n-2)
print(f"Forma directa: {resultado3}")  # 24</code></pre>
              </div>
            </div>
          </div>
        </div>

        <div class="detailed-example">
          <h3>📚 Ejemplo 2: Contraseñas con Dígitos</h3>

          <div class="step-card">
            <div class="step-number">1</div>
            <div class="step-content">
              <h4>Problema</h4>
              <p>
                Crear una contraseña de <strong>4 dígitos usando los números 0-9</strong>, donde
                <strong>SÍ se puede repetir</strong> (ej: 1111, 2277).
              </p>
            </div>
          </div>

          <div class="step-card">
            <div class="step-number">2</div>
            <div class="step-content">
              <h4>Solución: Principio Multiplicativo</h4>
              <p>Con repetición permitida, cada posición tiene n opciones:</p>
              <ul style="line-height: 1.8; margin-top: 0.5rem">
                <li><strong>Posición 1:</strong> 10 opciones (0-9)</li>
                <li><strong>Posición 2:</strong> 10 opciones (0-9)</li>
                <li><strong>Posición 3:</strong> 10 opciones (0-9)</li>
                <li><strong>Posición 4:</strong> 10 opciones (0-9)</li>
              </ul>
              <p style="margin-top: 1rem; font-weight: bold">
                Total: 10 × 10 × 10 × 10 = 10⁴ =
                <span style="color: var(--primary); font-size: 1.2rem">10,000</span>
              </p>
            </div>
          </div>

          <div class="step-card">
            <div class="step-number">3</div>
            <div class="step-content">
              <h4>Código Python</h4>
              <div class="code-block">
                <pre><code>n, k = 10, 4
# Permutaciones con repetición: n^k
contraseñas = n ** k
print(f"Contraseñas posibles: {contraseñas}")  # 10000</code></pre>
              </div>
            </div>
          </div>
        </div>

        <div class="tip-section">
          <h3>🎯 Resumen Permutaciones</h3>
          <table class="summary-table">
            <thead>
              <tr>
                <th>Tipo</th>
                <th>Fórmula</th>
                <th>Uso</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Sin repetición</strong></td>
                <td v-html="renderLatex('P(n,k) = \\frac{n!}{(n-k)!}')"></td>
                <td>Seleccionar k de n sin reutilizar</td>
              </tr>
              <tr>
                <td><strong>Con repetición</strong></td>
                <td v-html="renderLatex('n^k')"></td>
                <td>Cada posición: n opciones</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- COMBINACIONES -->
      <div v-if="activeTab === 'combinaciones'" class="content-section">
        <h2>Combinaciones: El Orden NO Importa</h2>

        <div class="analogy-box">
          <h3>💡 Idea Clave</h3>
          <p>
            Una <strong>combinación</strong> es una selección de elementos donde el
            <strong>orden NO es importante</strong>. Si cambias el orden de los mismos elementos,
            tienes la MISMA combinación.
          </p>
          <p style="margin-top: 1rem">
            <strong>Analogía:</strong> Elegir miembros para un comité, seleccionar cartas de una
            baraja, escoger ingredientes para una pizza.
          </p>
        </div>

        <div class="comparison-box">
          <h3>⚖️ Permutaciones vs. Combinaciones</h3>
          <p style="margin-bottom: 1rem">
            <strong>Diferencia clave:</strong>
          </p>
          <ul style="line-height: 1.8">
            <li>
              <strong style="color: #d32f2f">Permutación:</strong> {A, B, C} ≠ {B, A, C} (orden
              importa)
            </li>
            <li>
              <strong style="color: #388e3c">Combinación:</strong> {A, B, C} = {B, A, C} (orden no
              importa)
            </li>
          </ul>
        </div>

        <div class="formula-section">
          <h3>Fórmula de Combinaciones (sin repetición)</h3>
          <p style="margin-bottom: 1rem">
            Seleccionar k elementos de n elementos disponibles (sin considerar el orden):
          </p>
          <div
            class="formula-display"
            v-html="renderLatexDisplay('C(n,k) = \\binom{n}{k} = \\frac{n!}{k!(n-k)!}')"
          ></div>
        </div>

        <div class="formula-section">
          <h3>Fórmula de Combinaciones (con repetición/reposición)</h3>
          <p style="margin-bottom: 1rem">
            Seleccionar k elementos de n tipos cuando se permite repetir (con reemplazo):
          </p>
          <div
            class="formula-display"
            v-html="renderLatexDisplay('C_{rep}(n,k) = C(n+k-1,k) = \\frac{(n+k-1)!}{k!(n-1)!}')"
          ></div>
          <p style="margin-top: 0.5rem; color: #666">
            <strong>Ejemplo:</strong> Seleccionar helados donde se pueden repetir sabores,
            distribuir objetos idénticos.
          </p>
        </div>

        <div class="detailed-example">
          <h3>📚 Ejemplo 1: Comité de 3 Personas</h3>

          <div class="step-card">
            <div class="step-number">1</div>
            <div class="step-content">
              <h4>Entender el Problema</h4>
              <p>
                En una clase hay <strong>10 estudiantes</strong> y necesitamos elegir a
                <strong>3 para un comité</strong>.
              </p>
              <p style="margin-top: 0.5rem">
                <strong>¿Por qué es combinación?</strong> No importa el orden: el comité {Juan,
                María, Pedro} es igual al {María, Juan, Pedro}.
              </p>
            </div>
          </div>

          <div class="step-card">
            <div class="step-number">2</div>
            <div class="step-content">
              <h4>¿Cuál sería si fuera Permutación?</h4>
              <p>Si el orden importara (ej: presidente, secretario, tesorero):</p>
              <div
                class="formula-display"
                v-html="
                  renderLatexDisplay('P(10,3) = \\frac{10!}{7!} = 10 \\times 9 \\times 8 = 720')
                "
              ></div>
              <p style="margin-top: 0.5rem">Habría <strong>720 formas diferentes</strong>.</p>
            </div>
          </div>

          <div class="step-card">
            <div class="step-number">3</div>
            <div class="step-content">
              <h4>Aplicar la Fórmula de Combinación</h4>
              <div
                class="formula-display"
                v-html="
                  renderLatexDisplay(
                    'C(10,3) = \\frac{10!}{3! \\cdot 7!} = \\frac{10 \\times 9 \\times 8}{3 \\times 2 \\times 1} = \\frac{720}{6} = 120',
                  )
                "
              ></div>
            </div>
          </div>

          <div class="step-card">
            <div class="step-number">4</div>
            <div class="step-content">
              <h4>Pensarlo Intuitivamente</h4>
              <p>
                Las 720 permutaciones incluyen varias que son el "mismo comité". Cada grupo de 3
                personas se cuenta 3! = 6 veces (una por cada ordenamiento).
              </p>
              <div
                class="formula-display"
                v-html="renderLatexDisplay('C(10,3) = \\frac{P(10,3)}{3!} = \\frac{720}{6} = 120')"
              ></div>
              <p style="margin-top: 0.5rem">
                Hay exactamente <strong>120 comités diferentes</strong>.
              </p>
            </div>
          </div>

          <div class="step-card">
            <div class="step-number">5</div>
            <div class="step-content">
              <h4>Código Python</h4>
              <div class="code-block">
                <pre><code>import math
n, k = 10, 3

# Método 1: Usando math.comb (Python 3.8+)
resultado = math.comb(n, k)
print(f"C({n},{k}) = {resultado}")  # 120

# Método 2: Usando factorial
resultado2 = math.factorial(n) // (math.factorial(k) * math.factorial(n - k))
print(f"Usando factorial: {resultado2}")  # 120</code></pre>
              </div>
            </div>
          </div>
        </div>

        <div class="detailed-example">
          <h3>📚 Ejemplo 2: Seleccionar Helados (Con Repetición)</h3>

          <div class="step-card">
            <div class="step-number">1</div>
            <div class="step-content">
              <h4>Problema</h4>
              <p>
                En una heladería hay <strong>5 sabores diferentes</strong> (chocolate, vainilla,
                fresa, limón, menta). Quieres comprar <strong>3 bolas de helado</strong> y
                <strong>puedes repetir sabores</strong>. ¿De cuántas formas diferentes puedes hacer
                tu selección?
              </p>
              <p style="margin-top: 0.5rem">
                <strong>¿Por qué usa combinaciones con repetición?</strong> El orden no importa
                (chocolate-vainilla-fresa = fresa-chocolate-vainilla) pero sí puedes repetir
                (chocolate-chocolate-chocolate).
              </p>
            </div>
          </div>

          <div class="step-card">
            <div class="step-number">2</div>
            <div class="step-content">
              <h4>Aplicar la Fórmula</h4>
              <p>Con n = 5 sabores, k = 3 bolas:</p>
              <div
                class="formula-display"
                v-html="
                  renderLatexDisplay(
                    'C_{rep}(5,3) = C(5+3-1,3) = C(7,3) = \\frac{7!}{3! \\cdot 4!} = \\frac{7 \\times 6 \\times 5}{3 \\times 2 \\times 1} = 35',
                  )
                "
              ></div>
            </div>
          </div>

          <div class="step-card">
            <div class="step-number">3</div>
            <div class="step-content">
              <h4>Código Python</h4>
              <div class="code-block">
                <pre><code>import math
n, k = 5, 3

# Combinaciones con repetición: C(n+k-1, k)
resultado = math.comb(n + k - 1, k)
print(f"Formas de seleccionar helados: {resultado}")  # 35</code></pre>
              </div>
              <p style="margin-top: 0.5rem">
                Hay <strong>35 formas diferentes</strong> de seleccionar tus 3 bolas de helado.
              </p>
            </div>
          </div>
        </div>

        <div class="detailed-example">
          <h3>📚 Ejemplo 3: Mano de Póker</h3>

          <div class="step-card">
            <div class="step-number">1</div>
            <div class="step-content">
              <h4>Problema</h4>
              <p>
                De una baraja de <strong>52 cartas</strong>, ¿de cuántas formas se puede sacar una
                <strong>mano de 5 cartas</strong>?
              </p>
            </div>
          </div>

          <div class="step-card">
            <div class="step-number">2</div>
            <div class="step-content">
              <h4>Aplicar Combinación</h4>
              <div
                class="formula-display"
                v-html="renderLatexDisplay('C(52,5) = \\frac{52!}{5! \\cdot 47!}')"
              ></div>
              <div class="code-block">
                <pre><code>import math
manos = math.comb(52, 5)
print(f"Manos de poker: {manos}")  # 2,598,960</code></pre>
              </div>
              <p style="margin-top: 0.5rem">
                Hay <strong>2,598,960 manos diferentes</strong> posibles.
              </p>
            </div>
          </div>

          <div class="step-card">
            <div class="step-number">3</div>
            <div class="step-content">
              <h4>Probabilidad de un Evento</h4>
              <p>
                Si queremos la probabilidad de obtener
                <strong>todas las cartas del mismo palo (color)</strong> (escalera de color):
              </p>
              <ul style="line-height: 1.8; margin: 0.5rem 0">
                <li>Hay 4 palos (corazones, diamantes, picas, tréboles)</li>
                <li>De cada palo, elegir 5 de 13 cartas: C(13,5)</li>
                <li>Manos favorables: 4 × C(13,5) = 4 × 1,287 = 5,148</li>
              </ul>
              <div
                class="formula-display"
                v-html="
                  renderLatexDisplay(
                    'P(\\text{mismo palo}) = \\frac{5,148}{2,598,960} \\approx 0.00198 = 0.198\\%',
                  )
                "
              ></div>
            </div>
          </div>
        </div>

        <div class="tip-section">
          <h3>🎯 Resumen Combinaciones</h3>
          <table class="summary-table">
            <thead>
              <tr>
                <th>Tipo</th>
                <th>Fórmula</th>
                <th>Uso</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Sin repetición</strong></td>
                <td v-html="renderLatex('C(n,k) = \\frac{n!}{k!(n-k)!}')"></td>
                <td>Seleccionar k de n, orden NO importa</td>
              </tr>
              <tr>
                <td><strong>Con repetición</strong></td>
                <td v-html="renderLatex('C(n+k-1,k)')"></td>
                <td>Con reemplazo, orden NO importa</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- PROBABILIDAD BASICA -->
      <div v-if="activeTab === 'probabilidad'" class="content-section">
        <h2>Aplicación: Probabilidad Básica</h2>

        <div class="intro-box">
          <h3>📊 Regla Clásica de Probabilidad</h3>
          <p>
            Si todos los resultados del experimento son <strong>igualmente probables</strong>, la
            probabilidad de que ocurra un evento A es:
          </p>
          <div
            class="formula-display"
            v-html="
              renderLatexDisplay(
                'P(A) = \\frac{\\text{Casos favorables}}{\\text{Casos totales}} = \\frac{|A|}{|\\Omega|}',
              )
            "
          ></div>
        </div>

        <div class="detailed-example">
          <h3>📚 Ejemplo 1: Lanzar un Dado</h3>
          <div class="step-card">
            <div class="step-number">1</div>
            <div class="step-content">
              <h4>Evento: Obtener número par</h4>
              <ul>
                <li><strong>Espacio muestral:</strong> Ω = {1, 2, 3, 4, 5, 6}</li>
                <li><strong>Evento A:</strong> Números pares = {2, 4, 6}</li>
              </ul>
            </div>
          </div>

          <div class="step-card">
            <div class="step-number">2</div>
            <div class="step-content">
              <h4>Calcular Probabilidad</h4>
              <div
                class="formula-display"
                v-html="
                  renderLatexDisplay(
                    'P(A) = \\frac{|A|}{|\\Omega|} = \\frac{3}{6} = \\frac{1}{2} = 50\\%',
                  )
                "
              ></div>
            </div>
          </div>
        </div>

        <div class="detailed-example">
          <h3>📚 Ejemplo 2: Sacar Cartas de Copas</h3>

          <div class="step-card">
            <div class="step-number">1</div>
            <div class="step-content">
              <h4>Problema</h4>
              <p>
                De una baraja de 52 cartas, extraer 3. ¿Cuál es la probabilidad de que todas sean
                del palo copas?
              </p>
            </div>
          </div>

          <div class="step-card">
            <div class="step-number">2</div>
            <div class="step-content">
              <h4>Casos Totales (espacio muestral)</h4>
              <p>Formas de elegir 3 cartas de 52:</p>
              <div
                class="formula-display"
                v-html="
                  renderLatexDisplay('|\\Omega| = C(52,3) = \\frac{52!}{3! \\cdot 49!} = 22,100')
                "
              ></div>
              <div class="code-block">
                <pre><code>import math
total = math.comb(52, 3)
print(f"Total de manos: {total}")  # 22100</code></pre>
              </div>
            </div>
          </div>

          <div class="step-card">
            <div class="step-number">3</div>
            <div class="step-content">
              <h4>Casos Favorables (evento A)</h4>
              <p>Formas de elegir 3 cartas que sean todas del palo copas (hay 13 copas):</p>
              <div
                class="formula-display"
                v-html="renderLatexDisplay('|A| = C(13,3) = \\frac{13!}{3! \\cdot 10!} = 286')"
              ></div>
              <div class="code-block">
                <pre><code>import math
favorables = math.comb(13, 3)
print(f"Manos de copas: {favorables}")  # 286</code></pre>
              </div>
            </div>
          </div>

          <div class="step-card">
            <div class="step-number">4</div>
            <div class="step-content">
              <h4>Calcular Probabilidad</h4>
              <div
                class="formula-display"
                v-html="renderLatexDisplay('P(A) = \\frac{286}{22,100} \\approx 0.0129 = 1.29\\%')"
              ></div>
              <div class="code-block">
                <pre><code>import math
total = math.comb(52, 3)
favorables = math.comb(13, 3)
prob = favorables / total
print(f"P(3 copas) = {prob:.4f} = {prob*100:.2f}%")</code></pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- GUÍA DE DECISIÓN -->
      <div v-if="activeTab === 'decision'" class="content-section">
        <h2>Guía de Decisión: ¿Qué Usar?</h2>

        <div class="decision-flowchart">
          <div class="decision-step">
            <h3>❓ Pregunta 1: ¿El orden importa?</h3>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 1rem">
              <div class="decision-yes">
                <strong style="color: #d32f2f">SÍ, el orden importa</strong>
                <p style="margin-top: 0.5rem">→ Usa PERMUTACIONES</p>
              </div>
              <div class="decision-no">
                <strong style="color: #388e3c">NO, el orden NO importa</strong>
                <p style="margin-top: 0.5rem">→ Usa COMBINACIONES</p>
              </div>
            </div>
          </div>

          <div class="decision-step">
            <h3>❓ Pregunta 2: ¿Se pueden repetir elementos?</h3>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 1rem">
              <div class="decision-yes">
                <strong style="color: var(--primary)">SÍ, se pueden repetir</strong>
                <p style="margin-top: 0.5rem">→ n^k o C(n+k-1,k)</p>
              </div>
              <div class="decision-no">
                <strong style="color: #6c757d">NO, sin repetición</strong>
                <p style="margin-top: 0.5rem">→ P(n,k) o C(n,k)</p>
              </div>
            </div>
          </div>
        </div>

        <h3 style="margin-top: 2rem">📊 Tabla Comparativa</h3>
        <table class="comparison-table">
          <thead>
            <tr>
              <th>Situación</th>
              <th>Fórmula</th>
              <th>Ejemplo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Orden SÍ Importa, Sin Repetición</strong></td>
              <td v-html="renderLatex('P(n,k) = \\frac{n!}{(n-k)!}')"></td>
              <td>Posiciones en carrera (1º, 2º, 3º)</td>
            </tr>
            <tr>
              <td><strong>Orden SÍ Importa, Con Repetición</strong></td>
              <td v-html="renderLatex('n^k')"></td>
              <td>Contraseña de 4 dígitos</td>
            </tr>
            <tr>
              <td><strong>Orden NO Importa, Sin Repetición</strong></td>
              <td v-html="renderLatex('C(n,k) = \\frac{n!}{k!(n-k)!}')"></td>
              <td>Comité de 3 personas</td>
            </tr>
            <tr>
              <td><strong>Orden NO Importa, Con Repetición</strong></td>
              <td v-html="renderLatex('C(n+k-1,k)')"></td>
              <td>Elegir helados (repetidos ok)</td>
            </tr>
          </tbody>
        </table>

        <div class="tip-section" style="margin-top: 2rem">
          <h3>💡 Mnemotecnia</h3>
          <p><strong>PERMUTA</strong>ciones = cambiar el ORDEN → "¡que se mueva el orden!"</p>
          <p style="margin-top: 0.5rem">
            <strong>COMBI</strong>naciones = Combinar sin importar ORDEN → "¡mezcla y listo!"
          </p>
        </div>
      </div>

      <!-- RESUMEN FINAL -->
      <div v-if="activeTab === 'resumen'" class="content-section">
        <h2>Resumen y Puntos Clave</h2>

        <div class="summary-cards">
          <div class="summary-card">
            <h3>🎲 Experimento Aleatorio</h3>
            <p>
              Proceso con resultado impredecible que se puede repetir bajo las mismas condiciones.
            </p>
          </div>

          <div class="summary-card">
            <h3>🎯 Espacio Muestral</h3>
            <p>Conjunto de TODOS los resultados posibles (representado con Ω).</p>
          </div>

          <div class="summary-card">
            <h3>📍 Evento</h3>
            <p>Resultado específico o subconjunto de resultados que nos interesa.</p>
          </div>

          <div class="summary-card">
            <h3>🔄 Permutación</h3>
            <p>Arreglo ordenado: el orden SÍ importa. P(n,k) = n!/(n-k)!</p>
          </div>

          <div class="summary-card">
            <h3>👥 Combinación</h3>
            <p>Selección sin orden: el orden NO importa. C(n,k) = n!/(k!(n-k)!)</p>
          </div>

          <div class="summary-card">
            <h3>📊 Probabilidad</h3>
            <p>P(A) = Casos favorables / Casos totales = |A| / |Ω|</p>
          </div>
        </div>

        <div class="important-note" style="margin-top: 2rem">
          <h3>⚡ Paso a Paso para Resolver Problemas</h3>
          <ol style="line-height: 2; margin-top: 1rem">
            <li><strong>Lee el problema</strong> cuidadosamente</li>
            <li><strong>Identifica n y k</strong> (elementos totales y a seleccionar)</li>
            <li><strong>Pregúntate:</strong> ¿El orden importa? ¿Se pueden repetir?</li>
            <li><strong>Elige la fórmula</strong> correcta</li>
            <li><strong>Calcula</strong> y verifica con código Python</li>
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
  { id: 'introduccion', label: 'Introducción' },
  { id: 'permutaciones', label: 'Permutaciones' },
  { id: 'combinaciones', label: 'Combinaciones' },
  { id: 'probabilidad', label: 'Probabilidad' },
  { id: 'decision', label: '¿Qué Usar?' },
  { id: 'resumen', label: 'Resumen' },
]

const activeTab = ref('introduccion')

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

.combinatoria-view {
  padding: 1rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.hero {
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  color: white;
  padding: 3rem 2rem;
  border-radius: 12px;
  text-align: center;
  margin-bottom: 2rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.hero p {
  font-size: 1.1rem;
  opacity: 0.95;
  max-width: 600px;
  margin: 0 auto;
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

.comparison-box ul {
  margin: 1rem 0;
  padding-left: 1.5rem;
}

.comparison-box li {
  margin: 0.5rem 0;
  line-height: 1.8;
}

.concepts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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

.example-inline ul {
  margin: 0.5rem 0;
  padding-left: 1.5rem;
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
  margin: 2rem 0;
}

.tip-section h3 {
  color: #856404;
  margin-top: 0;
}

.tip-section p {
  color: #533f03;
  line-height: 1.7;
  margin: 0.75rem 0;
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

.summary-table,
.comparison-table {
  width: 100%;
  border-collapse: collapse;
  margin: 1.5rem 0;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
}

.summary-table th,
.comparison-table th {
  background: var(--primary);
  color: white;
  padding: 1rem;
  text-align: left;
  font-weight: 600;
}

.summary-table td,
.comparison-table td {
  padding: 1rem;
  border-bottom: 1px solid #e9ecef;
}

.summary-table tr:last-child td,
.comparison-table tr:last-child td {
  border-bottom: none;
}

.summary-table tr:nth-child(even),
.comparison-table tr:nth-child(even) {
  background: #f8f9fa;
}

.summary-table tr:hover,
.comparison-table tr:hover {
  background: #ecf0f1;
}

.decision-flowchart {
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  padding: 2rem;
  border-radius: 12px;
  margin: 2rem 0;
  border: 2px dashed #2196f3;
}

.decision-step {
  margin: 2rem 0;
}

.decision-step h3 {
  color: var(--primary);
  font-size: 1.15rem;
  margin-bottom: 1rem;
}

.decision-yes,
.decision-no {
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
  font-weight: 600;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
}

.decision-yes {
  background: linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%);
  border: 2px solid #28a745;
}

.decision-no {
  background: linear-gradient(135deg, #f8d7da 0%, #f5c6cb 100%);
  border: 2px solid #d32f2f;
}

.decision-yes p {
  color: #155724;
}

.decision-no p {
  color: #721c24;
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
    padding: 2rem 1rem;
  }

  .hero h1 {
    font-size: 1.8rem;
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
