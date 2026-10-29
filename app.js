const items=[
["✦","¿Qué es la Universidad Autónoma de Santo Domingo?"],
["◎","¿Cuál es la misión de la UASD?"],
["⌘","¿Cuáles son los organismos de gobierno de la UASD?"],
["▤","¿Qué establece el Estatuto sobre la autonomía universitaria?"],
["♧","¿Cuáles son los derechos de los estudiantes?"],
["◇","¿Cuáles son las funciones del Rector?"],
["⌂","¿Cómo se organizan las Facultades?"],
["≋","¿Qué establece el Estatuto sobre la investigación?"],
["⚖","¿Qué establece el Estatuto sobre el régimen disciplinario?"],
["▣","¿Qué establece el Estatuto sobre el patrimonio universitario?"],
["♙","¿Cuáles son los deberes de los estudiantes?"],
["◈","¿Qué es el Consejo Universitario?"],
["◉","¿Qué es el Claustro Mayor?"],
["◌","¿Qué es el Claustro Menor?"],
["◇","¿Cuáles son las funciones de los Vicerrectores?"],
["▥","¿Qué son los Consejos Directivos de Facultad?"],
["♜","¿Cuáles son las funciones de los Decanos?"],
["▦","¿Cuáles son las funciones de los Directores de Escuela?"],
["♧","¿Qué establece el Estatuto sobre el personal docente?"],
["↗","¿Qué establece el Estatuto sobre la extensión universitaria?"]
];
const $=id=>document.getElementById(id), questions=$("questions"), side=$("sideQuestions"), messages=$("messages"), welcome=$("welcome"), form=$("chatForm"), input=$("question"), send=$("send"), typing=$("typing");
function button(item,small=false){const b=document.createElement("button");b.type="button";b.className=small?"side-question":"question-card";const icon=document.createElement("span");icon.className=small?"":"q-icon";icon.textContent=item[0];const label=document.createElement("span");label.className=small?"":"q-text";label.textContent=item[1];b.append(icon,label);if(!small){const arrow=document.createElement("span");arrow.className="q-arrow";arrow.textContent="↗";b.append(arrow)}b.addEventListener("click",()=>ask(item[1]));return b}
items.slice(0,8).forEach(x=>questions.append(button(x)));items.slice(0,12).forEach(x=>side.append(button(x,true)));
function addMessage(role,text,sources=[]){const row=document.createElement("article");row.className=`message ${role}`;if(role==="assistant"){const av=document.createElement("div");av.className="avatar";av.textContent="U";row.append(av)}const body=document.createElement("div");body.className="message-body";if(role==="assistant"){const name=document.createElement("div");name.className="message-name";name.textContent="ASISTENTE DEL ESTATUTO";const answer=document.createElement("div");answer.className="answer";answer.textContent=text;body.append(name,answer);if(sources.length){const box=document.createElement("div");box.className="sources";sources.forEach(s=>{const el=document.createElement("div");el.className="source";const b=document.createElement("b");b.textContent=`Referencia de consulta · ${s.label}`;const p=document.createElement("p");p.textContent=s.excerpt;el.append(b,p);box.append(el)});body.append(box)}}else body.textContent=text;row.append(body);messages.append(row);row.scrollIntoView({behavior:"smooth",block:"nearest"})}
async function ask(q){q=String(q||"").trim();if(!q||send.disabled)return;welcome.classList.add("hidden");addMessage("user",q);input.value="";resize();send.disabled=true;typing.classList.remove("hidden");try{const r=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:q})});const d=await r.json();if(!r.ok)throw Error(d.error||"No se pudo procesar la pregunta.");addMessage("assistant",d.answer||"No se recibió respuesta.",d.sources||[])}catch(e){addMessage("assistant",e.message||"No se pudo conectar con el servidor.")}finally{typing.classList.add("hidden");send.disabled=false;input.focus()}}
function resize(){input.style.height="auto";input.style.height=Math.min(input.scrollHeight,130)+"px"}
form.addEventListener("submit",e=>{e.preventDefault();ask(input.value)});input.addEventListener("input",resize);input.addEventListener("keydown",e=>{if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();form.requestSubmit()}});
$("newChat").addEventListener("click",()=>{messages.replaceChildren();welcome.classList.remove("hidden");input.value="";resize();input.focus()});
(async()=>{try{const r=await fetch("/api/status"),s=await r.json();if(s.ready){$("statusDot").classList.add("ready");$("statusTitle").textContent="Sistema preparado";$("statusText").textContent="IA y Estatuto disponibles"}else if(!s.apiConfigured&&!s.statuteLoaded){$("statusTitle").textContent="Configuración pendiente";$("statusText").textContent="Configura la API y carga el PDF"}else if(!s.apiConfigured){$("statusTitle").textContent="Falta configurar la IA";$("statusText").textContent="Revisa el archivo .env"}else{$("statusTitle").textContent="Falta cargar el Estatuto";$("statusText").textContent="Ejecuta npm run preparar-estatuto"}}catch{$("statusTitle").textContent="Servidor no disponible";$("statusText").textContent="Inicia Node.js"}})();
