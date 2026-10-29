# Guía de exposición y demostración

## Guion sugerido (5–7 minutos)

### Introducción
“Mi proyecto se llama Chatbot Web Inteligente para Consulta del Estatuto Orgánico de la UASD. Busca facilitar que estudiantes y miembros de la comunidad universitaria consulten el Estatuto mediante preguntas en lenguaje natural.”

### Problema
“Leer un documento normativo extenso para encontrar un dato puede tomar tiempo. El chatbot permite formular una pregunta y recibir una respuesta breve junto con extractos recuperados del documento.”

### Tecnologías
“HTML construye la página; CSS le da estilo y adaptación a móviles; JavaScript maneja la interacción. Node.js y Express procesan las preguntas en el servidor. pdf-parse extrae texto del PDF y la API de OpenAI genera la respuesta.”

### Funcionamiento de la IA
“El servidor busca fragmentos que coincidan con palabras de la pregunta. Después envía esos fragmentos al modelo junto con instrucciones para responder en español, no inventar artículos y reconocer cuando falta evidencia. Esto reduce el riesgo de errores, pero no lo elimina.”

### Demostración
1. Mostrar la pantalla principal y preguntas sugeridas.
2. Seleccionar una pregunta.
3. Explicar el indicador de consulta.
4. Mostrar la respuesta y sus fragmentos de referencia.
5. Formular otra pregunta.
6. Abrir el enlace al Estatuto oficial.
7. Reducir el ancho del navegador para mostrar la versión móvil.

### Arquitectura
“El frontend es la parte visible. El backend busca los fragmentos y llama a la API. La clave permanece en el servidor, nunca en el JavaScript público.”

### Limitaciones y mejoras
“Esta versión busca por palabras clave. En una versión futura podría utilizar embeddings, búsqueda vectorial, referencias exactas de artículo y página, almacenamiento de conversaciones y controles adicionales para producción.”

### Cierre
“El proyecto aplica desarrollo web e IA a una necesidad académica. Facilita la consulta, pero no sustituye el documento oficial, que debe verificarse para asuntos normativos.”

## Preguntas que puede hacer el docente

**¿Por qué Node.js?** Permite procesar la consulta y proteger la clave de API en el servidor.

**¿Dónde se integra la IA?** En la solicitud que el backend realiza a la Responses API.

**¿Cómo se reducen las respuestas inventadas?** Se suministran fragmentos del Estatuto y reglas para limitarse a esa evidencia. No se garantiza infalibilidad.

**¿Qué ocurre si la pregunta no está en el documento?** Si no se recuperan coincidencias, se informa que no hay información suficiente.

**¿Por qué no poner la clave en JavaScript?** El navegador permite inspeccionar el código; la clave debe permanecer en una variable de entorno del servidor.

## Lista antes de exponer
- Instalar dependencias.
- Configurar `.env`.
- Ejecutar `npm run preparar-estatuto`.
- Ejecutar `npm start`.
- Probar varias preguntas.
- Llevar conexión a Internet.
- No mostrar ni publicar la clave.
