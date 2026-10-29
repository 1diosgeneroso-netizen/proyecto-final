# Chatbot del Estatuto Orgánico de la UASD

## Inicio rápido
Requiere Node.js 18+, conexión a Internet y una clave de API válida.

```bash
npm install
```

Copia `.env.example` como `.env` y configura la clave:

```env
OPENAI_API_KEY=tu_clave_real
OPENAI_MODEL=gpt-4.1-mini
PORT=3000
```

Descarga y extrae el Estatuto:

```bash
npm run preparar-estatuto
npm start
```

Abre http://localhost:3000

## Fuente oficial
https://postgrado.uasd.edu.do/wp-content/uploads/2024/06/ESTATUTO-ORGANICO-UASD.pdf

## Archivos principales
- `server.js`: servidor, recuperación de fragmentos e integración con IA.
- `public/index.html`: estructura.
- `public/css/styles.css`: diseño.
- `public/js/app.js`: interacción y preguntas sugeridas.
- `scripts/preparar-estatuto.js`: descarga y extracción del PDF.
- `docs/DOCUMENTACION_TECNICA.md`: documentación técnica.
- `docs/GUIA_EXPOSICION.md`: guion para presentar.

**Seguridad:** no compartas ni subas `.env` a GitHub. El uso de la API puede generar costes. La recuperación usa palabras clave y los fragmentos mostrados no son citas certificadas de artículos. Verifica siempre el documento oficial.

## Problemas comunes
- Página no abre: verifica que el servidor esté activo en `http://localhost:3000`.
- Falta el Estatuto: ejecuta `npm run preparar-estatuto` y reinicia.
- Error de clave: revisa `OPENAI_API_KEY`.
- Límite de API: revisa el saldo y la facturación de la cuenta.
- Error al descargar el PDF: verifica Internet y el enlace oficial.
