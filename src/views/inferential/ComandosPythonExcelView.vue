<template>
  <div class="container">
    <div class="hero">
      <h1>Comandos en Python y Excel</h1>
      <p>Guía completa para calcular probabilidades con distribuciones Z y t de Student</p>
    </div>

    <div class="intro-content">
      <h2>Instalación y Importación</h2>
      <p>Para usar los comandos en Python, asegúrate de tener SciPy instalado:</p>
      <div class="code-example">
        <pre><code># Instalar la librería (solo una vez en tu terminal)
# pip install scipy</code></pre>
      </div>
      <p>Importa los módulos necesarios en tu script:</p>
      <div class="code-example">
        <pre><code>from scipy.stats import norm, t</code></pre>
      </div>

      <h2>Distribución Z (Normal Estándar)</h2>
      <p>Usamos <code>scipy.stats.norm</code>. No requiere grados de libertad.</p>

      <h3>1. Cola Izquierda: P(Z &lt; z)</h3>
      <p>Calcula la probabilidad de que un valor sea menor que tu puntaje Z.</p>
      <div class="example-box">
        <strong>Ejemplo:</strong> ¿Cuál es la probabilidad de que Z sea menor que -1.96? P(Z &lt;
        -1.96) = 0.0250
      </div>
      <h4>Python:</h4>
      <div class="code-example python">
        <pre><code>z_score = -1.96
probabilidad = norm.cdf(z_score)
print(f"P(Z &lt; {z_score}) = {probabilidad:.4f}")</code></pre>
      </div>
      <h4>Excel (Español):</h4>
      <div class="code-example excel">
        <pre><code>=+DISTR.NORM.ESTAND.N(-1,96; VERDADERO)</code></pre>
      </div>

      <h3>2. Cola Derecha: P(Z > z)</h3>
      <p>Calcula la probabilidad de que un valor sea mayor que tu puntaje Z.</p>
      <div class="example-box">
        <strong>Ejemplo:</strong> ¿Cuál es la probabilidad de que Z sea mayor que 1.5? P(Z > 1.5) =
        0.0668
      </div>
      <h4>Python:</h4>
      <div class="code-example python">
        <pre><code>z_score = 1.5
probabilidad = norm.sf(z_score)
print(f"P(Z > {z_score}) = {probabilidad:.4f}")</code></pre>
      </div>
      <h4>Excel (Español):</h4>
      <div class="code-example excel">
        <pre><code>=+1-DISTR.NORM.ESTAND.N(1,5; VERDADERO)</code></pre>
      </div>

      <h3>3. Intervalo: P(a &lt; Z &lt; b)</h3>
      <p>Calcula la probabilidad de que un valor se encuentre entre dos puntajes Z.</p>
      <div class="example-box">
        <strong>Ejemplo:</strong> ¿Cuál es la probabilidad de que Z esté entre -1.96 y 1.96? P(-1.96
        &lt; Z &lt; 1.96) = 0.9500
      </div>
      <h4>Python:</h4>
      <div class="code-example python">
        <pre><code>z_inferior = -1.96
z_superior = 1.96
probabilidad = norm.cdf(z_superior) - norm.cdf(z_inferior)
print(f"P({z_inferior} &lt; Z &lt; {z_superior}) = {probabilidad:.4f}")</code></pre>
      </div>
      <h4>Excel (Español):</h4>
      <div class="code-example excel">
        <pre><code>=+DISTR.NORM.ESTAND.N(1,96; VERDADERO) - +DISTR.NORM.ESTAND.N(-1,96; VERDADERO)</code></pre>
      </div>

      <h2>Distribución t de Student</h2>
      <p>Usamos <code>scipy.stats.t</code>. Siempre requiere grados de libertad (df).</p>

      <h3>1. Cola Izquierda: P(T &lt; t)</h3>
      <p>Calcula la probabilidad de que un valor sea menor que tu estadístico t.</p>
      <div class="example-box">
        <strong>Ejemplo:</strong> Con una muestra de tamaño n=25 (df=24), ¿cuál es la probabilidad
        de que T sea menor que -2.064? P(T &lt; -2.064) con 24 df = 0.0250
      </div>
      <h4>Python:</h4>
      <div class="code-example python">
        <pre><code>t_score = -2.064
grados_libertad = 24
probabilidad = t.cdf(t_score, df=grados_libertad)
print(f"P(T &lt; {t_score}) con {grados_libertad} df = {probabilidad:.4f}")</code></pre>
      </div>
      <h4>Excel (Español):</h4>
      <div class="code-example excel">
        <pre><code>=+DISTR.T.N(-2,064; 24; VERDADERO)</code></pre>
      </div>

      <h3>2. Cola Derecha: P(T > t)</h3>
      <p>Calcula la probabilidad de que un valor sea mayor que tu estadístico t.</p>
      <div class="example-box">
        <strong>Ejemplo:</strong> Con una muestra de tamaño n=15 (df=14), ¿cuál es la probabilidad
        de que T sea mayor que 1.761? P(T > 1.761) con 14 df = 0.0500
      </div>
      <h4>Python:</h4>
      <div class="code-example python">
        <pre><code>t_score = 1.761
grados_libertad = 14
probabilidad = t.sf(t_score, df=grados_libertad)
print(f"P(T > {t_score}) con {grados_libertad} df = {probabilidad:.4f}")</code></pre>
      </div>
      <h4>Excel (Español):</h4>
      <div class="code-example excel">
        <pre><code>=+DISTR.T.CD(1,761; 14)</code></pre>
      </div>

      <h3>3. Intervalo: P(a &lt; T &lt; b)</h3>
      <p>Calcula la probabilidad de que un valor se encuentre entre dos estadísticos t.</p>
      <div class="example-box">
        <strong>Ejemplo:</strong> Con una muestra de tamaño n=30 (df=29), ¿cuál es la probabilidad
        de que T esté entre -2.045 y 2.045? P(-2.045 &lt; T &lt; 2.045) con 29 df = 0.9500
      </div>
      <h4>Python:</h4>
      <div class="code-example python">
        <pre><code>t_inferior = -2.045
t_superior = 2.045
grados_libertad = 29
probabilidad = t.cdf(t_superior, df=grados_libertad) - t.cdf(t_inferior, df=grados_libertad)
print(f"P({t_inferior} &lt; T &lt; {t_superior}) con {grados_libertad} df = {probabilidad:.4f}")</code></pre>
      </div>
      <h4>Excel (Español):</h4>
      <div class="code-example excel">
        <pre><code>=+DISTR.T.N(2,045; 29; VERDADERO) - +DISTR.T.N(-2,045; 29; VERDADERO)</code></pre>
      </div>
    </div>

    <div class="navigation-buttons">
      <router-link to="/inferencial/distribuciones-z-t" class="btn btn-secondary">
        Volver a Distribuciones Z y t
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
// No script needed for this static content view
</script>

<style scoped>
@import '@/assets/styles/main.css';

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: var(--spacing-xl);
  animation: fadeIn 0.5s ease-in;
}

.hero {
  text-align: center;
  margin-bottom: var(--spacing-2xl);
  padding: var(--spacing-2xl);
  background: var(--surface);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-md);
  border: 1px solid var(--border-light);
}

.hero h1 {
  color: var(--primary);
  font-size: 2.5rem;
  margin-bottom: var(--spacing-sm);
}

.hero p {
  color: var(--text-secondary);
  font-size: 1.2rem;
}

.intro-content {
  background: var(--surface);
  padding: var(--spacing-xl);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow);
  border: 1px solid var(--border);
}

h2 {
  color: var(--primary);
  margin-top: var(--spacing-xl);
  margin-bottom: var(--spacing-md);
  font-size: 1.8rem;
  border-bottom: 2px solid var(--border-light);
  padding-bottom: var(--spacing-sm);
}

h3 {
  color: var(--secondary);
  margin-top: var(--spacing-lg);
  margin-bottom: var(--spacing-sm);
  font-size: 1.4rem;
}

h4 {
  color: var(--text-primary);
  margin-top: var(--spacing-md);
  margin-bottom: var(--spacing-xs);
  font-size: 1.1rem;
}

p {
  color: var(--text-primary);
  line-height: 1.6;
  margin-bottom: var(--spacing-md);
}

.code-example {
  background: var(--neutral-50);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: var(--spacing-md);
  margin: var(--spacing-md) 0;
  font-family: 'Courier New', monospace;
  overflow-x: auto;
  box-shadow: var(--shadow-sm);
}

.code-example pre {
  margin: 0;
}

.code-example.python {
  border-left: 4px solid #3776ab;
}

.code-example.excel {
  border-left: 4px solid #217346;
}

.example-box {
  background: var(--info-50);
  border: 1px solid var(--info-200);
  border-radius: var(--radius-md);
  padding: var(--spacing-md);
  margin: var(--spacing-md) 0;
  color: var(--info-900);
  border-left: 4px solid var(--info);
}

.navigation-buttons {
  display: flex;
  justify-content: center;
  margin-top: var(--spacing-2xl);
}

.btn {
  display: inline-block;
  padding: 0.8rem 1.5rem;
  text-decoration: none;
  border-radius: var(--radius-md);
  font-weight: 600;
  transition: var(--transition);
}

.btn-secondary {
  background: white;
  color: var(--text-secondary);
  border: 1px solid var(--border);
}

.btn-secondary:hover {
  background: var(--neutral-100);
  color: var(--text-primary);
  border-color: var(--text-secondary);
  transform: translateY(-2px);
}
</style>
