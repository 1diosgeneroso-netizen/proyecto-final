# Documento técnico — Chatbot del Estatuto Orgánico de la UASD

**Asignatura:** Laboratorio de Lenguaje de Programación III – Web  
**Versión:** 1.0

## 1. Descripción y objetivo
Aplicación web que permite formular preguntas en lenguaje natural sobre el Estatuto Orgánico de la Universidad Autónoma de Santo Domingo. El servidor recupera fragmentos del documento oficial y los envía a un modelo de IA para generar una respuesta contextualizada.

## 2. Tecnologías
- HTML5: estructura de la interfaz.
- CSS3: diseño responsivo.
- JavaScript: preguntas sugeridas, conversación y solicitudes HTTP.
- Node.js y Express: servidor y API privada.
- OpenAI Responses API: generación de respuestas.
- pdf-parse: extracción del texto del PDF.
- dotenv: gestión de variables de entorno.

## 3. Arquitectura
1. El navegador muestra la interfaz.
2. El usuario escribe una pregunta o elige una sugerencia.
3. El frontend envía la pregunta a `POST /api/chat`.
4. Node.js busca coincidencias entre la pregunta y fragmentos del texto extraído.
5. Los fragmentos mejor puntuados se envían junto con la pregunta a la IA.
6. La IA genera una respuesta con instrucciones para no inventar información y reconocer cuando falta evidencia.
7. El servidor devuelve la respuesta y extractos recuperados.

## 4. Fuente oficial
https://postgrado.uasd.edu.do/wp-content/uploads/2024/06/ESTATUTO-ORGANICO-UASD.pdf

`npm run preparar-estatuto` descarga el PDF y extrae su texto en `data/estatuto.txt`. La recuperación actual es léxica, basada en palabras clave; no es una búsqueda vectorial semántica avanzada. Los extractos son referencias de consulta, no citas certificadas por número de artículo.

## 5. Funcionalidades
- Diseño adaptable a escritorio y móvil.
- Campo de consulta y botón de envío.
- Envío con Enter; Shift+Enter agrega una línea.
- Preguntas preelaboradas.
- Conversaciones consecutivas e historial visible en la sesión.
- Indicador de carga y estado de configuración.
- Extractos de referencia.
- Validación de entrada y mensajes de error.
- Enlace al PDF oficial.

## 6. Instalación
Requisitos: Node.js 18+, Internet y una clave válida de API.
1. Descomprimir el proyecto.
2. Abrir terminal dentro de la carpeta.
3. Ejecutar `npm install`.
4. Copiar `.env.example` como `.env`.
5. Editar `.env` y configurar `OPENAI_API_KEY`.
6. Ejecutar `npm run preparar-estatuto`.
7. Ejecutar `npm start`.
8. Abrir `http://localhost:3000`.

En PowerShell: `Copy-Item .env.example .env`. En CMD: `copy .env.example .env`.

## 7. Pruebas
- Abrir el sitio y enviar una pregunta sugerida.
- Formular varias consultas consecutivas.
- Probar una pregunta fuera del Estatuto.
- Probar una clave inválida para comprobar los errores.
- Verificar el diseño en móvil.
- Confirmar que la clave no aparece en `public/`.

## 8. Limitaciones
- Una pregunta con sinónimos puede no recuperar el fragmento ideal.
- La extracción del PDF puede conservar saltos de línea imperfectos.
- El historial no se guarda después de recargar.
- La API requiere conexión y puede tener coste.
- La IA puede equivocarse; se debe verificar el Estatuto original.

## 9. Seguridad
No subir `.env` a GitHub. No compartir la clave de API. Si se publica por accidente, revocarla. Para despliegue público se recomienda agregar límites de frecuencia, HTTPS y monitoreo del consumo.

## 10. Conclusión
El proyecto combina interfaz web, backend, extracción documental y generación con IA. Busca fundamentar las respuestas en fragmentos del Estatuto y advertir cuando la evidencia disponible no es suficiente.
