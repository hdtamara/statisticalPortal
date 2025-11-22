# Portal de Estadística 📊

Portal educativo interactivo para el aprendizaje de estadística descriptiva e inferencial, desarrollado con Vue 3, TypeScript y Vite.

## 🎯 Descripción del Proyecto

**Estadística Fácil** es una aplicación web educativa que proporciona herramientas interactivas, simuladores y explicaciones detalladas sobre conceptos estadísticos. El portal está dividido en dos secciones principales: Estadística Descriptiva y Estadística Inferencial.

## 🏗️ Arquitectura del Proyecto

### Stack Tecnológico

- **Framework Frontend**: Vue 3 (Composition API con `<script setup>`)
- **Lenguaje**: TypeScript
- **Build Tool**: Vite 7.x
- **Router**: Vue Router 4
- **Visualización de Datos**:
  - Chart.js + vue-chartjs
  - Plotly.js
- **Cálculos Estadísticos**: jstat
- **Renderizado Matemático**: KaTeX
- **Estilos**: CSS Vanilla con variables CSS personalizadas

### Estructura de Directorios

```
portal-estadistica/
├── public/                          # Archivos estáticos
│   ├── favicon.ico
│   ├── ejercicios-combinatoria.txt
│   └── images/                      # Imágenes públicas
│
├── src/
│   ├── App.vue                      # Componente raíz de la aplicación
│   ├── main.ts                      # Punto de entrada de la aplicación
│   │
│   ├── assets/                      # Recursos estáticos
│   │   ├── distribucion-t.webp
│   │   ├── distribucion-z.webp
│   │   └── styles/                  # Estilos globales
│   │       ├── main.css             # Estilos principales y utilidades
│   │       └── variables.css        # Variables CSS (colores, sombras, transiciones)
│   │
│   ├── components/                  # Componentes reutilizables
│   │   └── common/
│   │       ├── AppFooter.vue        # Footer de la aplicación
│   │       ├── ContentCard.vue      # Tarjeta de contenido reutilizable
│   │       └── NavBar.vue           # Barra de navegación
│   │
│   ├── router/                      # Configuración de rutas
│   │   └── index.ts                 # Definición de todas las rutas
│   │
│   ├── types/                       # Definiciones de tipos TypeScript
│   │   ├── plotly-dist.d.ts
│   │   └── plotly.d.ts
│   │
│   └── views/                       # Vistas/Páginas de la aplicación
│       ├── HomeView.vue             # Página de inicio
│       ├── DescriptiveView.vue      # Vista principal de estadística descriptiva
│       ├── InferentialView.vue      # Vista principal de estadística inferencial
│       │
│       ├── descriptive/             # Módulos de estadística descriptiva
│       │   ├── PoblacionMuestraView.vue
│       │   ├── SimuladorMuestreoView.vue
│       │   ├── TiposDatosView.vue
│       │   ├── GraficosCualitativosView.vue
│       │   ├── GraficosCuantitativosView.vue
│       │   ├── InstrumentosRecoleccionDatosView.vue
│       │   ├── MedidasTendenciaCentralView.vue
│       │   ├── MedidasPosicionView.vue
│       │   ├── MedidasDispersionView.vue
│       │   ├── CombinatoriaPermutacionesView.vue
│       │   └── EjercicioCompletoView.vue
│       │
│       └── inferential/             # Módulos de estadística inferencial
│           ├── DistribucionesMuestralesView.vue
│           ├── DistribucionesZTView.vue
│           ├── ComandosPythonExcelView.vue
│           ├── EstimacionParametrosView.vue
│           ├── IntervalosConfianzaView.vue
│           ├── TamanoMuestraView.vue
│           ├── FactorCorreccionView.vue
│           ├── DiferenciaMediasView.vue
│           ├── DiferenciaProporcionesView.vue
│           ├── PruebasHipotesisUnaMuestraView.vue
│           └── HipotesisDosMuestrasView.vue
│
├── dist/                            # Build de producción (generado)
├── node_modules/                    # Dependencias (generado)
│
├── .editorconfig                    # Configuración del editor
├── .gitignore                       # Archivos ignorados por Git
├── .prettierrc.json                 # Configuración de Prettier
├── eslint.config.ts                 # Configuración de ESLint
├── env.d.ts                         # Tipos de entorno
├── index.html                       # HTML principal
├── package.json                     # Dependencias y scripts
├── tsconfig.json                    # Configuración TypeScript raíz
├── tsconfig.app.json                # Configuración TypeScript para la app
├── tsconfig.node.json               # Configuración TypeScript para Node
├── vite.config.ts                   # Configuración de Vite
└── vercel.json                      # Configuración de despliegue en Vercel
```

## 🎨 Sistema de Diseño

### Paleta de Colores

El proyecto utiliza un sistema de colores basado en un gradiente tri-color:

- **Brand 1 (Fucsia)**: `#640066` - Color primario
- **Brand 2 (Índigo)**: `#142066` - Color secundario
- **Brand 3 (Teal)**: `#01aca9` - Color de acento

### Variables CSS

Todas las variables de diseño están centralizadas en `src/assets/styles/variables.css`:

- Colores de marca y gradientes
- Colores de superficie y texto
- Sombras y bordes
- Transiciones y animaciones
- Colores semánticos (success, warning, error, info)

### Clases Utilitarias

El archivo `src/assets/styles/main.css` proporciona clases utilitarias reutilizables:

- `.gradient-text` - Texto con gradiente de marca
- `.modern-card` - Tarjetas con estilo moderno
- `.gradient-btn` - Botones con gradiente
- `.view-container` - Contenedor de vistas con padding responsive
- `.hero` - Sección hero para páginas principales

## 📚 Contenido Educativo

### Estadística Descriptiva

1. **Población y Muestra** - Conceptos básicos y diferencias
2. **Simulador de Muestreo** - Herramienta interactiva
3. **Tipos de Datos** - Cualitativos y cuantitativos
4. **Gráficos Cualitativos** - Barras, circular, etc.
5. **Gráficos Cuantitativos** - Histogramas, polígonos de frecuencia
6. **Instrumentos de Recolección de Datos**
7. **Medidas de Tendencia Central** - Media, mediana, moda
8. **Medidas de Posición** - Cuartiles, percentiles
9. **Medidas de Dispersión** - Varianza, desviación estándar
10. **Combinatoria y Permutaciones**
11. **Ejercicio Completo** - Práctica integral

### Estadística Inferencial

1. **Distribuciones Muestrales**
2. **Distribuciones Z y T** - Tablas y cálculos
3. **Comandos Python y Excel** - Referencia rápida
4. **Estimación de Parámetros**
5. **Intervalos de Confianza**
6. **Tamaño de Muestra**
7. **Factor de Corrección**
8. **Diferencia de Medias**
9. **Diferencia de Proporciones**
10. **Pruebas de Hipótesis (Una Muestra)**
11. **Pruebas de Hipótesis (Dos Muestras)**

## 🚀 Instalación y Uso

### Requisitos Previos

- Node.js `^20.19.0` o `>=22.12.0`
- npm (incluido con Node.js)

### Instalación

```bash
# Clonar el repositorio
git clone <repository-url>

# Navegar al directorio del proyecto
cd portal-estadistica

# Instalar dependencias
npm install
```

### Scripts Disponibles

```bash
# Servidor de desarrollo con hot-reload
npm run dev

# Compilar y verificar tipos
npm run type-check

# Compilar para producción
npm run build

# Compilar solo (sin verificación de tipos)
npm run build-only

# Vista previa del build de producción
npm run preview

# Ejecutar linter y auto-fix
npm run lint

# Formatear código con Prettier
npm run format
```

## 🔧 Configuración

### Alias de Rutas

El proyecto utiliza el alias `@` para importaciones absolutas:

```typescript
import Component from '@/components/common/Component.vue'
import { router } from '@/router'
```

### TypeScript

El proyecto usa TypeScript con configuración estricta. Los archivos de configuración son:

- `tsconfig.json` - Configuración raíz
- `tsconfig.app.json` - Configuración para código de la aplicación
- `tsconfig.node.json` - Configuración para scripts de Node

### Vite

Configuración personalizada en `vite.config.ts`:

- Plugin de Vue 3
- Vue DevTools
- Alias de rutas

## 📦 Dependencias Principales

### Producción

- `vue` (^3.5.18) - Framework principal
- `vue-router` (^4.5.1) - Enrutamiento
- `chart.js` (^4.5.0) - Gráficos
- `vue-chartjs` (^5.3.2) - Integración de Chart.js con Vue
- `plotly.js-dist-min` (^3.1.2) - Visualizaciones avanzadas
- `jstat` (^1.9.6) - Cálculos estadísticos
- `katex` (^0.16.23) - Renderizado de fórmulas matemáticas

### Desarrollo

- `typescript` (~5.8.0)
- `vite` (^7.0.6)
- `vue-tsc` (^3.0.4) - Verificación de tipos para Vue
- `eslint` (^9.31.0) - Linting
- `prettier` (3.6.2) - Formateo de código

## 🌐 Despliegue

El proyecto está configurado para desplegarse en Vercel (ver `vercel.json`).

```bash
# Build de producción
npm run build

# Los archivos compilados estarán en ./dist
```

## 🎓 Características Principales

- ✅ **Interfaz Interactiva** - Calculadoras y simuladores en tiempo real
- ✅ **Visualizaciones Dinámicas** - Gráficos interactivos con Chart.js y Plotly
- ✅ **Fórmulas Matemáticas** - Renderizado profesional con KaTeX
- ✅ **Diseño Responsive** - Adaptable a todos los dispositivos
- ✅ **TypeScript** - Código tipado y seguro
- ✅ **Navegación SPA** - Experiencia fluida sin recargas
- ✅ **Sistema de Diseño Consistente** - Variables CSS y componentes reutilizables

## 📝 Convenciones de Código

- **Componentes**: PascalCase (ej: `ContentCard.vue`)
- **Archivos de vistas**: PascalCase con sufijo `View` (ej: `HomeView.vue`)
- **Estilos**: CSS Vanilla con variables CSS
- **Scripts**: Composition API con `<script setup lang="ts">`
- **Importaciones**: Usar alias `@` para rutas absolutas

## 🤝 Contribución

Este es un proyecto educativo. Para contribuir:

1. Mantener la estructura de carpetas existente
2. Seguir las convenciones de código establecidas
3. Usar TypeScript para nuevos componentes
4. Documentar funciones complejas
5. Probar en diferentes dispositivos

## 📄 Licencia

Este proyecto es de uso educativo.

---

**Desarrollado con ❤️ para facilitar el aprendizaje de la estadística**
