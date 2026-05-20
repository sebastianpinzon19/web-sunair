# Sun Air - Heating & A/C Supply

Sitio web moderno, escalable y responsivo para Sun Air. Construido con **Next.js 14**, **React 18**, y **Tailwind CSS** con colores corporativos azul (#0052CC) y amarillo (#FFC107).

---

## 📁 Estructura del Proyecto

```
sun-air-web/
├── src/
│   ├── components/                 # Componentes reutilizables
│   │   ├── Header.jsx             # Navegación con menu mobile
│   │   ├── Footer.jsx             # Pie de página
│   │   ├── Hero.jsx               # Sección hero
│   │   ├── TabsSection.jsx        # Sección de tabs (productos)
│   │   ├── ContactForm.jsx        # Formulario de contacto
│   │   └── ProductCard.jsx        # Tarjeta de producto
│   ├── pages/                      # Páginas del sitio
│   │   ├── index.js               # Página inicio
│   │   ├── contact.js             # Página contacto
│   │   ├── catalog.js             # Página catálogo
│   │   ├── warranty.js            # Página garantía
│   │   ├── distributors.js        # Página distribuidores
│   │   ├── _app.js                # Configuración global
│   │   └── _document.js           # HTML base
│   ├── styles/
│   │   └── globals.css            # Estilos globales + utilidades
│   ├── lib/                        # Funciones auxiliares
│   └── utils/                      # Utilidades
├── public/
│   └── images/                     # Imágenes y assets
├── package.json                    # Dependencias
├── next.config.js                  # Configuración Next.js
├── tailwind.config.js              # Configuración Tailwind (colores)
├── tsconfig.json                   # TypeScript config
├── postcss.config.js               # PostCSS config
├── .gitignore                      # Git ignore
└── README.md                       # Este archivo
```

---

## 🚀 Instalación y Uso

### 1. **Instalar Dependencias**
```bash
npm install
```

### 2. **Desarrollo Local**
```bash
npm run dev
```
Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### 3. **Producción - Build**
```bash
npm run build
npm start
```

### 4. **Linting**
```bash
npm run lint
```

---

## 🎨 Colores Corporativos

| Color | Hex | Uso |
|-------|-----|-----|
| Azul Primario | #0052CC | Encabezados, botones, enlaces |
| Azul Oscuro | #003DA5 | Hover, gradientes |
| Amarillo | #FFC107 | Acentos, destacados |
| Amarillo Oscuro | #FFB900 | Hover |

**En Tailwind**: Usa `bg-sun-blue`, `text-sun-yellow`, `hover:bg-sun-blue-dark`, etc.

---

## 📄 Páginas Disponibles

| Página | Ruta | Descripción |
|--------|------|-------------|
| Inicio | `/` | Página principal con productos y CTA |
| Contacto | `/contact` | Formulario de contacto e información |
| Catálogo | `/catalog` | Lista de productos con descripciones |
| Garantía | `/warranty` | Información de garantía y cobertura |
| Distribuidores | `/distributors` | Información para socios y distribuidores |

---

## 🧩 Componentes Reutilizables

### **Header**
Navegación principal con menú responsive para móvil.
```jsx
import Header from '@/components/Header';
export default () => <Header />;
```

### **Footer**
Pie de página con información de contacto y enlaces.
```jsx
import Footer from '@/components/Footer';
export default () => <Footer />;
```

### **Hero**
Sección hero con fondo opcional y texto.
```jsx
import Hero from '@/components/Hero';
<Hero 
  title="Mi Título" 
  subtitle="Mi Subtítulo"
  backgroundImage="/images/bg.jpg"
/>
```

### **TabsSection**
Componente de tabs para mostrar múltiples opciones.
```jsx
import TabsSection from '@/components/TabsSection';
const tabs = [
  { 
    label: 'Tab 1', 
    content: 'Contenido 1',
    features: ['Feature 1', 'Feature 2']
  },
];
<TabsSection tabs={tabs} />
```

### **ContactForm**
Formulario de contacto con validación.
```jsx
import ContactForm from '@/components/ContactForm';
<ContactForm />
```

### **ProductCard**
Tarjeta de producto reutilizable.
```jsx
import ProductCard from '@/components/ProductCard';
<ProductCard 
  title="Mi Producto" 
  description="Descripción"
  icon="🔧"
/>
```

---

## 📱 Características

✅ **Responsive Design** - Funciona en móvil, tablet y desktop  
✅ **SEO Optimizado** - Meta tags y estructura semántica  
✅ **Tailwind CSS** - Estilos modernos y rápidos  
✅ **Componentes Reutilizables** - Mantenimiento fácil  
✅ **Performance** - Optimizado para velocidad  
✅ **Mobile First** - Diseño enfocado en móvil  
✅ **Formularios Interactivos** - Con validación  
✅ **Escalable** - Fácil de expandir  

---

## 🔧 Agregar Nueva Página

1. Crea archivo en `src/pages/nueva-pagina.js`:
```jsx
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NuevaPagina() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Tu contenido aquí */}
      </main>
      <Footer />
    </div>
  );
}
```

2. Se accede automáticamente en `/nueva-pagina`

---

## 🔧 Agregar Nuevo Componente

1. Crea archivo en `src/components/MiComponente.jsx`:
```jsx
export default function MiComponente({ prop1, prop2 }) {
  return (
    <div className="bg-white p-4 rounded-lg">
      {prop1}
    </div>
  );
}
```

2. Importa donde lo necesites:
```jsx
import MiComponente from '@/components/MiComponente';
```

---

## 🎯 Personalización

### Cambiar Colores
Edita `tailwind.config.js` en la sección `theme.extend.colors`:
```js
'sun-blue': '#0052CC',
'sun-yellow': '#FFC107',
```

### Cambiar Logo
Reemplaza el texto del logo en `Header.jsx`:
```jsx
<Link href="/" className="flex items-center gap-2">
  <img src="/logo.png" alt="Sun Air" className="h-10" />
</Link>
```

### Agregar Fuente Personalizada
En `tailwind.config.js`:
```js
theme: {
  fontFamily: {
    sans: ['Poppins', 'sans-serif'],
  }
}
```

---

## 📧 Configurar Email de Contacto

En `src/components/ContactForm.jsx`, reemplaza la lógica del `handleSubmit`:
```jsx
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
});
```

Luego crea `src/pages/api/contact.js` para procesar el email.

---

## 🌐 Deployment

### **Vercel (Recomendado)**
```bash
npm i -g vercel
vercel
```

### **Netlify**
Conecta tu repositorio de GitHub a Netlify y despliega automáticamente.

### **Servidor Propio**
```bash
npm run build
npm start
```

---

## 📦 Dependencias

- **Next.js 14** - Framework React
- **React 18** - Librería UI
- **Tailwind CSS** - Estilos utilities
- **PostCSS** - Procesador CSS
- **Autoprefixer** - Compatibilidad browsers

---

## 🐛 Solución de Problemas

**Puerto 3000 en uso:**
```bash
npm run dev -- -p 3001
```

**Errores de compilación:**
```bash
rm -rf .next node_modules
npm install
npm run build
```

**Tailwind no se actualiza:**
Asegúrate de que `tailwind.config.js` incluya las rutas correctas en `content`.

---

## 📝 Notas

- El proyecto está listo para producción
- Todos los colores usan las variables de Tailwind
- Los componentes son reutilizables y escalables
- Estructura organizada para fácil mantenimiento
- Responsive y mobile-first

---

## 👤 Autor

Sun Air - Heating & A/C Supply  
Creado: May 2026

---

**¿Preguntas?** Contacta a: info@sunair-usa.com | +1 (813) 443-0757
