# By Order of the Peaky Blinders

Sitio web multipágina inspirado en la serie *Peaky Blinders*, desarrollado como trabajo práctico para la materia **Programación IV** de la **Tecnicatura Universitaria en Programación (UTN Facultad Regional Haedo)**.

🔗 **Demo en vivo:** https://lrodriguez250.github.io/peaky-blinders-web/

Trabajo individual, sin frameworks ni librerías de terceros más allá de fuentes tipográficas e iconos — HTML, CSS y JavaScript escritos a mano de punta a punta.

---

## Estructura del sitio

| Página | Contenido |
|---|---|
| `index.html` | Inicio: hero principal con animación de humo, texto de presentación e imagen representativa |
| `temporadas.html` | Las 6 temporadas, cada una con 3 fotos representativas, sus 6 episodios con sinopsis sin spoilers, y el elenco correspondiente |
| `personajes.html` | Los 15 personajes principales agrupados en 3 bandos (Familia Shelby / Aliados / Enemigos) con un menú de categorías estilo Apple: pasás el cursor por cada bando y se despliega su lista |
| `galeria.html` | Mosaico fotográfico de las 6 temporadas con una progresión visual de tono (de neutro a rojo sangre, siguiendo la escalada de la historia) y lightbox para ampliar cada foto |
| `contacto.html` | Formulario de contacto (demostrativo) + mapa embebido de Birmingham, la ciudad donde transcurre la serie |

Cada temporada, personaje y foto de la galería está interconectado: por ejemplo, hacer clic en un personaje del elenco de una temporada te lleva directo a su ficha en Personajes, y cada personaje indica en qué temporada aparece.

---

## Tecnologías utilizadas

- **HTML5** semántico, 5 páginas enlazadas entre sí
- **CSS3**: Flexbox y CSS Grid para el layout, variables CSS (`:root`) para la paleta de colores, `filter` para el tratamiento sepia unificado de todas las imágenes, transiciones y animaciones (el humo del hero, el mosaico de la galería, hovers)
- **JavaScript vanilla** (sin librerías): sistema de fallback de imágenes, lightbox de la galería con navegación por teclado, menú de categorías con hover en Personajes
- **Google Fonts**: Cinzel (títulos, estética art-decó) + Oswald (cuerpo de texto, tono industrial)
- **Font Awesome**: iconos de redes sociales y del formulario de contacto
- **Google Maps Embed**: mapa de Birmingham en la página de Contacto
- **Git + GitHub Pages**: control de versiones y hosting del sitio

---

## Desafíos durante el desarrollo

Este proyecto arrancó como una idea simple (una página con temporadas) y terminó siendo bastante más ambicioso, con vueltas de rosca importantes en el camino:

- **El carrusel que no se pudo arreglar.** La primera versión de las fotos por temporada usaba un carrusel deslizable con `transform` y `overflow: hidden`. Terminamos descubriendo un bug real de renderizado en el navegador: combinar `filter` (el sepia) con una animación de `transform` dentro de un contenedor con `overflow: hidden` hacía que las imágenes se "filtraran" fuera de su contenedor durante la transición. Después de varias vueltas de diagnóstico (inspeccionando con DevTools, revisando la pestaña Network, probando con caché deshabilitada), la solución más robusta terminó siendo simplificar: reemplazar el carrusel animado por una grilla estática de fotos. A veces la solución más simple es la correcta.
- **Caché fantasma en GitHub Pages.** Más de una vez, un cambio subido correctamente al repositorio no se reflejaba en el sitio publicado, porque el CDN de GitHub Pages cacheaba una versión anterior del CSS. Se resolvió versionando el archivo (`estilos.css?v=2`) para forzar la actualización.
- **Reestructuración completa a mitad de proyecto.** Tras la devolución del profesor, el sitio pasó de una sola página con todo el contenido a una arquitectura de 5 páginas independientes (Inicio, Temporadas, Personajes, Galería, Contacto), con la sección de Personajes yendo y viniendo entre estar integrada a la Home y ser una página propia, hasta llegar al esquema final con el menú de categorías estilo Apple.
- **Primer contacto con la terminal y Git.** Todo el flujo de control de versiones (`git init`, `add`, `commit`, `push`, manejo de ramas, resolución de conflictos de renombrado de archivos al reorganizar carpetas) se aprendió de cero durante este proyecto.

---


## Autor

Desarrollado por **Lorenzo Rodriguez Wilson** — Tecnicatura Universitaria en Programación, UTN Facultad Regional Haedo.
