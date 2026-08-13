# GuaraTiers

Plataforma estática y open-source de rankings competitivos de Minecraft PvP. Su estética y sistema son originales; no está afiliada a Mojang, Microsoft, PvP Club ni MCPvP.

> **DEMO DATA:** todos los jugadores, testers, tiers y resultados incluidos son ficticios y sirven únicamente para demostrar el producto.

## Características

- Leaderboard global y por modalidad: Sword, UHC, Crystal, Netherite Pot, Diamond Pot, SMP, Axe, Mace y Sumo.
- Tiers configurables desde un único módulo, LT5 a HT1, con puntos y colores centralizados.
- Puntuación global basada en `peak` de forma predeterminada; cambiar `scoreSource` a `current` en `src/config/site.js` modifica el cálculo completo.
- Desempate: cantidad de HT1, LT1, HT2 y LT2; después, fecha de registro.
- Perfiles, historial de tests, directorio de testers, tendencia, búsqueda instantánea y diseño responsive.
- Panel administrativo funcional en el navegador: alta de jugadores/testers, registro de tests, importación/exportación JSON y borrador persistente en `localStorage`.

## Arquitectura y límites de GitHub Pages

La aplicación es HTML/CSS/JavaScript sin servidor: el build copia una versión estática a `dist/`, que GitHub Actions publica en GitHub Pages. Las rutas usan hash (`#/player/Netox`), por lo que funcionan al refrescar sin configuración de servidor.

GitHub Pages no puede ejecutar un backend ni guardar cambios autorizados desde un navegador. Por ello, el panel **no finge publicación remota**: sus cambios se guardan localmente y se pueden exportar como JSON. Para publicar datos reales se deben versionar esos datos en GitHub y hacer push a `main`, o añadir más adelante un adaptador con autenticación hacia un servicio gratuito (por ejemplo Supabase Free) o una GitHub App/Action. Nunca se deben incluir claves con privilegios en el frontend.

## Desarrollo local

Requiere Node.js 22+.

```bash
npm ci
npm run build
npx serve dist
```

## Configuración

- `src/config/site.js`: nombre, mensaje, fuente de puntos, tiers, `getTierPoints`, desempates y modalidades.
- `src/data/demo.js`: datos ficticios iniciales de jugadores, testers y tests.
- `src/styles/main.css`: identidad visual y breakpoints.

Para añadir una modalidad, agrega su definición a `gamemodes`; para cambiar puntos o colores, modifica solamente el arreglo `tiers`. Los cálculos y la UI derivan de esa fuente centralizada.

## Publicar con GitHub Pages

1. Crea un repositorio y sube este proyecto a la rama `main`.
2. En **Settings → Pages**, selecciona **GitHub Actions** como fuente.
3. Cada push a `main` activa `.github/workflows/deploy.yml`: instala, construye `dist` y despliega el artefacto con GitHub Pages.

No se suben archivos compilados manualmente. El workflow usa acciones oficiales de GitHub Pages y no requiere secretos.

## Datos de Minecraft

Los avatares usan `mc-heads.net` como mejora visual gratuita. Si falla, la interfaz y los rankings siguen operativos. Para producción, se recomienda cachear avatares aprobados como assets del repositorio o implementar una fuente con caché mediante el adaptador de datos.

## Licencia

MIT. Consulta [LICENSE](LICENSE).
