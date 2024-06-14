(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const z of o.addedNodes)z.tagName==="LINK"&&z.rel==="modulepreload"&&s(z)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();const F=(e,a,i,s)=>{window.innerWidth<s?e.className=a:e.className=i},B=(e,a,i,s)=>{window.addEventListener("resize",()=>{window.innerWidth<s?e.className=a:e.className=i})},ae=()=>{const e=document.querySelector(".hero"),a=document.querySelector(".hero__div");if(B(e,"hero-small","hero",402),F(e,"hero-small","hero",402),e.className==="hero-small"){const i=document.createElement("div");i.classList.add("nav-container"),e.appendChild(i);const s=document.createElement("div");s.classList.add("flecha-next"),s.innerHTML="<div>></div>";const t=document.createElement("div");t.classList.add("flecha-prev"),t.innerHTML="<div><</div>",i.appendChild(t),i.appendChild(s),s.addEventListener("click",()=>{a.scrollBy({left:a.clientWidth,behavior:"smooth"}),t.style.background="white",s.style.background="#b0bca9",setTimeout(()=>{s.style.background="white"},500)}),t.addEventListener("click",()=>{a.scrollBy({left:-a.clientWidth,behavior:"smooth"}),s.style.background="white",t.style.background="#b0bca9",setTimeout(()=>{t.style.background="white"},500)})}},q=document.querySelector(".menu__icon"),A=document.querySelector(".nav"),d=document.querySelector("main"),ie=document.querySelector(".productos__destacados-container"),Q=document.querySelector(".productos__destacados");document.querySelector("#enlace-productos");const p=document.querySelector(".todos-productos"),L=document.querySelector(".pagina-productos"),N=document.querySelector(".h2-todos-productos"),k=document.querySelector(".product__icon"),O=document.querySelector(".productos-h2"),g=document.querySelector(".carrito-vacio"),c=document.querySelector(".login"),b=document.querySelector(".pagina-subcategorias"),u=document.querySelector(".pagina-blog"),se=()=>{A.style.overflow="hidden",q.addEventListener("click",()=>{q.classList.toggle("change"),q.style.display="block",q.className==="menu__icon change"?(e(),A.style.height="330px"):(A.style.height="7rem",setTimeout(()=>{te()},800))});const e=()=>{const a=document.querySelector(".nav__list");a.classList.add("menu__desplegado"),a.style.display="flex",a.style.flexDirection="column",a.style.justifyContent="flex-start"}},te=()=>{const e=document.querySelector(".nav__list");e.className==="menu__desplegado"&&(e.style.display="flex",e.style.flexDirection="row",e.style.justifyContent="space-between"),e.classList.remove("menu__desplegado")},r=[{id:0,producto:"Bloques con números",imagen:"/images/blocks-dog.png",descripcion:"Bloques con los números del uno al seis. Si consigues ordenar los números en el orden correcto verás el dibujo de un perrito Teckel. <br> Shhh... las pistas están escondidas en el color de fondo de los números.",precio:71.99,edad:"Para niños entre 0 y 1 año",dimensiones:"Cada bloque mide 4 x 4 cm",beneficios:"Este juego ayuda a aprender los números y desarrollar el pensamiento lógico y el creativo.",categoria:"0-1",subcategoria:"puzzles"},{id:1,producto:"Conejitos",imagen:"/images/bunnies.jpg",descripcion:"Dos conejitos de madera. Estos preciosos conejitos tienen ganas de hacer nuevos amigos! <br> Cada uno esta hecho de una pieza, así que preparate para que te acompañen durante años!",precio:52.99,edad:"Para niños entre 1 y 3 años",dimensiones:"Cada conejito mide 10 x 6 cm",beneficios:"Ayuda a desarrollar la observación y el respeto por la naturaleza",categoria:"1-3",subcategoria:"animales"},{id:2,producto:"Conejito",imagen:"/images/bunny-toddler.jpg",descripcion:"Conejito con carrito. Este conejito tiene ganas de dar largos paseos por el suelo de tu casa o en el parque. <br> Puedes llevarte a donde tu quieras! <br> A lo mejor nos puede ayudar a aprender las direcciones... vamos a la izquierda, derecha, para delante o para atrás?",precio:59.99,edad:"Para niños entre 1 y 3 años",dimensiones:"20 x 17 cm",beneficios:"Desarrollar capacidades motoras.",categoria:"1-3",subcategoria:"animales"},{id:3,producto:"Calendario",imagen:"/images/calendar.png",descripcion:"Es hora de aprender las fechas! Sabrás decir cuando es tu cumpleaños, cuanto tiempo queda para que empiezo el verano, o cuanto queda hasta Navidad! <br> El diseño de sus piezas capta la atención enseguida! Quien no tendría ganas de aprender las fechas con este divertido calendario!",precio:56.99,edad:"Para niños desde 3 años",dimensiones:"24 x 4 cm",beneficios:"Desarrolla habilidades cognitivas y de ubicación temporal",categoria:"3+",subcategoria:"didacticos"},{id:4,producto:"Cámara de fotos",imagen:"/images/camara.jpg",descripcion:"Este juguete está pensado para potenciar la creatividad y desarrollar la habilidad de observación. <br> Los niños podrán disfutar del juguete en casa o al aire libre, observando a través del lente el entorno que les rodea y la belleza de la naturaleza. <br> La observación hace que los niños aprendan a estar atentos de las cosas que suceden a su alrededor y ayuda a desarrollar otras habilidades cognitivas.",edad:"Para niños mayores de dos años",precio:89.99,edad:"Para niños desde 3 años",dimensiones:"60 x 40 cm",beneficios:"Desarrolla la habilidad de observación y el conocimiento del entorno.",categoria:"3+",subcategoria:"sets"},{id:5,producto:"Carrusel",imagen:"/images/carrusel.png",descripcion:"Caja musical con tapadera en forma de carrusel. Este producto no es un juguete, sino que está creado para ser usado como decoración. <br> El diseño está inspirado en el tiovivo de las ferias y la música ayudará a los niños a relajarse.",precio:91.99,edad:"Para niños desde 3 años",dimensiones:"25 x 14 cm",beneficios:"Ayuda para relajarse.",categoria:"3+",subcategoria:"sets"},{id:6,producto:"Camaleón",imagen:"/images/chameleon_baby.jpg",descripcion:"Camaleón de color verde con ruedas. Este precioso juguete está pensado para que tu niño empiece a desarrollar sus habilidades motoras. Es hora de empezar a gatear!",precio:54.99,edad:"Para niños entre 0 y 1 año",dimensiones:"14 x 22 cm",beneficios:"Ayuda a desarrollar capacidades motoras y a acercarse a la naturaleza.",categoria:"0-1",subcategoria:"animales"},{id:7,producto:"Relój",imagen:"/images/clock.jpg",descripcion:"Es hora de aprender las horas del relój! Este reloj con forma de león enseña número y horas. Los números son extraíbles y se puede intentar volver a ponerlos en su sitio, a modo de puzzle. Qué divertido!",precio:45.99,edad:"Desde 3 años",dimensiones:"22 x 4 cm",beneficios:"Desarrollo de habilidades cognitivas.",categoria:"3+",subcategoria:"didacticos"},{id:8,producto:"Cafetera",imagen:"/images/coffeemachine.jpg",descripcion:"Cafetera con taza y cucharita. Este juguete ayuda a los niños a acercarse al mundo de los mayores. Sabemos que los niños se fijan en todo y aprenden de nosotros. <br> A través de los juguetes que recuerdan a objetos cotidianos del mundo de los mayores, los niños desarrollan su imaginación y la proyección del futuro.",precio:79.99,edad:"Para niños desde 3 años",dimensiones:"20 x 14 cm",beneficios:"Ayuda a desarrollar la imaginación y la creatividad.",categoria:"3+",subcategoria:"sets"},{id:9,producto:"Vacas",imagen:"/images/cows.jpg",descripcion:"Una familia feliz de vacas pastando. A través del juego y la observación empezamos a enseñar al niño a reconocer los animales. <br> A través del juego con este juguete, podemos empezar a enseñar al niño el valor de la familia y la belleza de la naturaleza!",precio:32.99,edad:"Para niños entre 1 y 3 años",dimensiones:"10 x 7 cml, 7 x 4 cm",beneficios:"Ayuda a desarrollar la observación y el respeto por la naturaleza",categoria:"1-3",subcategoria:"animales"},{id:10,producto:"Bloques con letras",imagen:"/images/cubes-baby.jpg",descripcion:"Bloques de madera con las letras del abecedario. El primer contacto del niño con el abecedario.  Con este juego el niño se acercará por primera vez a las letras y su uso! Este duradero juguete podría ser su acompañante durante el viaje de aprender las letras y después, usarlas para componer palabras! ",precio:32.99,edad:"Para niños entre 1 y 3 años",dimensiones:"Cada bloque mide 4 x 4 cm",beneficios:"Ayuda a desarrollar la capacidad cognitiva y la creatividad.",categoria:"1-3",subcategoria:"puzzles"},{id:11,producto:"Ciervos",imagen:"/images/deer.jpg",descripcion:"Mamá cierva con su bebé cervatillo. Sabes qué aspecto tienen los ciervos? Donde viven? Con qué se alimentan? <br> Os los podeis llevar a un paseo por el bosque, a lo mejor teneis suerte y los podeis observar una familia de ciervos de vardad! ",precio:34.99,edad:"Para niños entre 1 y 3 años",dimensiones:"12 x 7 cm, 10 x 4 cm",beneficios:"Ayuda a desarrollar la observación y el respeto por la naturaleza",categoria:"1-3",subcategoria:"animales"},{id:12,producto:"Zorros",imagen:"/images/fox.jpg",descripcion:"Una parejita de zorros. Sabes donde puedes encontrar estos animales? Qué ruido hacen? Son unos animales con mucha energía por la noche y por el día les gusta el descanso. Te gustaría conocerlos?",precio:37.99,edad:"Para niños entre 1 y 3 años",dimensiones:"12 x 7 cm, 10 x 4 cm",beneficios:"Ayuda a desarrollar la observación y el respeto por la naturaleza",categoria:"1-3",subcategoria:"animales"},{id:13,producto:"Set jardinería",imagen:"/images/garden.jpg",descripcion:"Te gustaría tener tu propio huerto? O tu jardín de flores? <br> Con este set aprendemos a cuidar de las frutas y las verduras, para que crezcan sanas y bonitas y nos puedan aportar muchas vitaminas! <br> También podemos cuidar de nuestro jardín de flores y cuando sean grandes y bonitas, la pondremos en un jarrón para que todos las vean!",precio:78.99,edad:"Para niños desde 3 años",dimensiones:"La pieza más grande mide 38 x 30 cm",beneficios:"Ayuda a desarrollar la observación y el respeto por la naturaleza",categoria:"3+",subcategoria:"sets"},{id:14,producto:"Helicóptero",imagen:"/images/hellicopter.jpg",descripcion:"Los niños se lo pasarán en grande con este pequeño helicoptero! ",precio:34.99,edad:"Para niños desde 3 años",dimensiones:"10 x 16 cm",beneficios:"Ayuda a desarrollar la observación y el respeto por la naturaleza",categoria:"3+",subcategoria:"vehiculos"},{id:15,producto:"Hipopótamo",imagen:"/images/hippo.png",descripcion:"Un precioso hipopótamo con un diseño especial. <br> Como en todos nuestros juguetes, la pintura es natural y no toxica. <br> Conoces su habitat? Con qué se alimenta? Qué ruidos hace? Lo podrías aprender junto a tu nuevo amigo el hipopótamo.",precio:53.99,edad:"Para niños desde 3 años",dimensiones:"12 x 18 cm",beneficios:"Ayuda a desarrollar la observación y el respeto por la naturaleza",categoria:"3+",subcategoria:"animales"},{id:16,producto:"Todoterreno",imagen:"/images/jeep.png",descripcion:"Un todoterreno que consigue atravesar los terrenos más difíciles! Te lo puedes llevar a donde quieras y te acompañará en tus aventuras allá donde vayas.",precio:45.99,edad:"Para niños desde 3 años",dimensiones:"10 x 18 cm",beneficios:"Ayuda a desarrollar la imaginación.",categoria:"3+",subcategoria:"vehiculos"},{id:17,producto:"Tablas con los números",imagen:"/images/numbers.jpg",descripcion:"Te gustaría aprender los números hasta 10? Con este divertido puzzle aprendarás a sumar y restar con los números hasta 10 en un abrir y cerrar de ojos!",precio:35.99,edad:"Para niños desde 3 años",dimensiones:"La pieza más grande mide 10 x 3 cm",beneficios:"Ayuda a aprender los números y las operaciones básicas",categoria:"3+",subcategoria:"puzzles"},{id:18,producto:"Puzzle circulos",imagen:"/images/puzzle-circles.jpg",descripcion:"Un puzzle en forma de torre compuesto de circulos. <br> No hay un orden correcto! Puedes apilarlos de la manera que te guste. Los puedes ordenar por colores o por tamaños. Tú eliges!",precio:38.99,edad:"Para niños de 1 a 3 años",dimensiones:"24 x 17 cm",beneficios:"Ayuda a desarrollar la la lógica y la creatividad",categoria:"1-3",subcategoria:"puzzles"},{id:19,producto:"Puzzle Dino",imagen:"/images/puzzle-dino-baby.jpg",descripcion:"Un divertido puzzle en forma de dinosaurio. Este puzzle tiene una diseño muy original. <br> Hecho con piezas grandes para que los niños pequeños puedan juegar con él.",precio:45.99,edad:"Para niños de 1 a 3 años",dimensiones:"La pieza más grande mide 30 x 5 cm",beneficios:"Ayuda a desarrollar la lógica",categoria:"1-3",subcategoria:"puzzles"},{id:20,producto:"Puzzle Fresa",imagen:"/images/puzzle-strawberry.jpg",descripcion:"Un divertido puzzle en forma de fresa. Este puzzle es muy eneficioso para el desarrollo de la lógica, la memoria y la creatividad del niño.",precio:35.99,edad:"Para niños de 1 a 3 años",dimensiones:"18 x 12",beneficios:"Ayuda a desarrollar la lo lógica y la memoria",categoria:"1-3",subcategoria:"puzzles"},{id:21,producto:"Rinoceronte",imagen:"/images/rhino-baby.jpg",descripcion:"Un bonito rinoceronte con ruedas. Su tamaño es ideal para que los niños pequeños puedan jugar con él. <br> Llevatelo a todas partes, tanto en la guarde, como en paseo familiar o en la playa.",precio:37.99,edad:"Para niños de 0 a 1 año",dimensiones:"26 x 11 cm",beneficios:"Ayuda a desarrollar habilidades motoras.",categoria:"0-1",subcategoria:"animales"},{id:22,producto:"Cohete",imagen:"/images/rocket+human.jpg",descripcion:"Un cohete ultra rápido para explorar el espacio! Con este cohete podemos empezar a observar el espacio y los elementos que lo componen...<br> o simplemente divertirse un rato volando con la imaginación!",precio:38.99,edad:"Para niños de 1 a 3 años",dimensiones:"24 x 9 cm",beneficios:"Ayuda a desarrollar la observación y la imaginación",categoria:"1-3",subcategoria:"vehiculos"},{id:23,producto:"Safari",imagen:"/images/set_safari.jpg",descripcion:"Te apetece un safari por la Sabana?",precio:56.99,edad:"Para niños desde 3 años",dimensiones:"7 x 10 cm",beneficios:"Ayuda a desarrollar la observación y el respeto por la naturaleza",categoria:"3+",subcategoria:"sets"},{id:24,producto:"Set cocina",imagen:"/images/set-kitchen.jpg",descripcion:"Qué divertido es cocinar! De qué equipo eres, ¿dulce o salado? <br> Con este set los niños podrán acercarse al arte de cocinar. Quién sabe... A lo mejor pronto empezarán a ayudar en la elaboración de platos para toda la familia!",precio:95.99,edad:"Para niños desde 3 años",dimensiones:"La pieza más grande mide 15 x 28 cm",beneficios:"Ayuda a desarrollar la observación y la imaginación",categoria:"3+",subcategoria:"sets"},{id:25,producto:"Set matematicas",imagen:"/images/set-math3.jpg",descripcion:"Te apetece aprender a sumar y restar con bolitas fluffy? Estas bolitas son agradables al tacto y tienen muchos colores! <br> Aprender a sumar nunca fue tan divertido!",precio:34.99,edad:"Para niños desde 3 años",dimensiones:"La pieza más grande mide 14 x 14 cm",beneficios:"Ayuda a desarrrollar habilidades cognitivas y la creatividad.",categoria:"3+",subcategoria:"sets"},{id:26,producto:"Hora del té",imagen:"/images/set-tea-time.png",descripcion:"Ya es la hora del té? Esta será tu vajilla favorita de ahora en adelante! <br> Un precioso set para las tardes en el jardín con tu familia y amigos! Conoces algún personaje al que le gusta tomar el té con sus amigos en el jardín?",precio:89.99,edad:"Para niños desde 3 años",dimensiones:"La pieza más grande mide 32 x 30 cm",beneficios:"Ayuda a desarrollar la imaginación",categoria:"3+",subcategoria:"sets"},{id:27,producto:"Animales del bosque",imagen:"/images/set-wood.jpg",descripcion:"Un set en el que te puedes adentrar al bosque y conocer sus habitantes. Quizas os hacéis amigos! <br> Este precioso set contiene con varios animales y también su habitat. <br>Con estos juguetes los niños aprenderán más sobre los animales mientras se pasan en grande!",precio:57.99,edad:"Para niños desde 3 años",dimensiones:"La pieza más grande mide 16 x 4 cm",beneficios:"Ayuda a desarrollar la observación y el respeto por la naturaleza",categoria:"3+",subcategoria:"sets"},{id:28,producto:"Ovejas",imagen:"/images/sheeps.jpg",descripcion:"Unas cuantas ovejitas pastando en y disfrutando de su tranquilidad. Este set cuenta con una familia de ovejas, varias rocas y un pino, para que puedan echar una siesta en la sombra. <br> Son amimales domésticos o salvajes? Qué comen? Aprende esto y más con esté bonito set.",precio:31.99,edad:"Para niños desde 3 años",dimensiones:"La pieza más grande mide 14 x 4 cm",beneficios:"Ayuda a desarrollar la observación y el respeto por la naturaleza",categoria:"3+",subcategoria:"set"},{id:29,producto:"Taxi",imagen:"/images/taxi.png",descripcion:"El taxi más molón de la ciudad! Donde llevarás a tus amigos con tu nuevo coche? <br> El diseño de este juguete es único, inspirado el los clásicos taxis de Nueva York. Su diseño es increíble, ¿verdad?",precio:51.99,edad:"Para niños desde 3 años",dimensiones:"8 x 14 cm",beneficios:"Ayuda a desarrollar la imaginación",categoria:"3+",subcategoria:"vehiculos"},{id:30,producto:"Tren",imagen:"/images/train.jpg",descripcion:'Qué tren tan molón! Sabes qué es un tren de carga? Qué materiales puede transportar? Sobre qué se mueve el tren? <br> Hay muchas cosas de los trenes que nos gustan, pero lo que más nos gusta es el sonido "Tu-tuuuu!"',precio:51.99,edad:"Para niños desde 3 años",dimensiones:"La pieza más grande mide 38 x 30 cm",beneficios:"Ayuda a desarrollar habilidades cognitivas y la imaginación",categoria:"3+",subcategoria:"vehiculos"},{id:31,producto:"Extreterrestre",imagen:"/images/ufo-alien.png",descripcion:"El extraterrestre más molón de todo el Universo! Este juguete tan bonito está compuesto por varias piezas y es desmontable. <br> A que es el extraterreste más bonito y amigable que habeis visto nunca!",precio:39.99,edad:"Para niños desde 3 años",dimensiones:"El juguete montado mide 12 x 12 cm ",beneficios:"Ayuda a desarrollar la imaginación y la creatividad",categoria:"3+",subcategoria:"vehiculos"},{id:32,producto:"Estación meteorológica",imagen:"/images/weather.jpg",descripcion:"Sabes qué tiempo hace fuera? Si la respuesta es no, este juguete te ayudará a aprender. <br> Así sabras si llevarte un paraguas o unas gafas de sol... y saber si este fin de semana te podrás ir al parque a jugar!",precio:54.99,edad:"Para niños desde 3 años",dimensiones:"La pieza más grande mide 38 x 30 cm",beneficios:"Ayuda a desarrollar habilidades cognitivas",categoria:"3+",subcategoria:"didacticos"},{id:33,producto:"Leñador",imagen:"/images/woodcutter.jpg",descripcion:"Un leñador que está recogiendo leña para que su familia esté calentita durante el invierno. <br> Sabes para qué se utiliza la madera? Conoces su tacto? Y su olor? De donde se consigue este material? <br> Aprende todo esto y más con tu nievo amigo el leñador.",precio:36.99,edad:"Para niños desde 3 años",dimensiones:"27 x 14 cm",beneficios:"Ayuda a desarrollar la imaginación y el interes por los procesos que nos rodean",categoria:"3+",subcategoria:"vehiculos"},{id:34,producto:"Puzzle abstracto",imagen:"/images/wooden-rokcs.jpg",descripcion:"Son rocas o es madera? Te he pillado! Es madera! <br> A ver si puedes hacer una torre sin que se caiga! Este puzzle con su diseño tan original puede un pasatiempo muy divertido!",precio:39.99,edad:"De 1 a 3 años",dimensiones:"La pieza más grande mide 38 x 30 cm",beneficios:"Ayuda a desarrollar la creatividad y la paciencia",categoria:"1-3",subcategoria:"puzzles"},{id:35,producto:"Palabras",imagen:"/images/words.jpg",descripcion:"Sabes como se forman las palabras? Si conoces el abecedario ya tienes medio camino hecho! Esto será pan comido! <br> Con este juego los niños pueden aprender y descubrir nuevas palabras. La comunicación es una parte fundamental en el desarrollo de los niños.",precio:31.99,edad:"Desde 3 años",dimensiones:"La tabla mide 30 x 14 cm, las letras miden 3 x 3 cm",beneficios:"Ayuda a desarrollar la comunicación",categoria:"3+",subcategoria:"didacticos"}];let l=[];const S=()=>{document.querySelectorAll(".producto-active-aniadir").forEach(a=>a.addEventListener("click",()=>{const i=parseInt(a.getAttribute("data-id"));oe(i),g.textContent="Producto añadido a la cesta",g.style.display="block",setTimeout(()=>{g.style.display="none"},1500)}))},oe=e=>{const a=l.find(i=>i.producto.id===e);if(a)a.cantidad++,a.precioTotal=a.cantidad*a.producto.precio;else{const i=r.find(s=>s.id===e);i&&l.push({producto:i,cantidad:1,precioTotal:i.precio})}localStorage.setItem("carrito",JSON.stringify(l))},J=e=>{const a=document.querySelector(".carrito");a.innerHTML="",e.forEach(i=>{const s=document.createElement("li");s.innerHTML=`
    <div class="tarjeta-producto">
    <img src="${i.producto.imagen}"/>
    <div class="descripcion">
    <p class="titulo"><strong>${i.producto.producto}</strong></p>
    <p class="cantidad">Cantidad: <strong>${i.cantidad}</strong></p>
    <p class = "precio-producto">Precio: <strong>${i.precioTotal}€</strong></p>
    </div>
    </div>
    
    `,a.appendChild(s);const t=document.createElement("button");t.classList.add("boton-eliminar"),t.textContent="Eliminar producto de le cesta",s.appendChild(t),t.addEventListener("click",()=>{le(i.producto.id)})})},G=()=>{const e=l.reduce((a,i)=>a+i.precioTotal,0);document.querySelector("#precio-total").textContent=`Precio total: ${e.toFixed(2)}€`},re=()=>{ce(),document.querySelector("#icono-carrito").addEventListener("click",()=>{const a=document.querySelector(".carrito-main");l.length<1?(g.textContent="Tu carrito está vacío",g.style.display="block",setTimeout(()=>{g.style.display="none"},2e3)):(d.style.display="none",J(l),G(),a.style.display="flex")}),ne()},ne=()=>{const e=document.querySelector(".carrito-main"),a=document.querySelector("main");document.querySelector(".cerrar-carrito").addEventListener("click",()=>{e.style.display="none",a.style.display="block"})},le=e=>{l=l.filter(a=>a.producto.id!==e),G(),J(l),localStorage.setItem("carrito",JSON.stringify(l))},ce=()=>{if(localStorage.length!==0){const e=localStorage.getItem("carrito");JSON.parse(e).forEach(i=>{l.push(i)})}},v=document.querySelector(".carrito-main"),ue=document.querySelectorAll("a"),de=()=>{ue.forEach(e=>{const a=e.getAttribute("href");e.addEventListener("click",()=>{switch(a){case"#carrito-main":me();break;case"#pagina-productos":ge();break;case"#login":pe();break;case"#subcategorias":be();break;case"#blog":Z();break}})})},me=()=>{l.length>1&&(v.style.display="flex"),v.style.display==="flex"&&(b.style.display="none",p.style.display="none",c.style.display="none",d.style.display="none",u.style.display="none")},pe=()=>{c.style.display="flex",c.style.display==="flex"&&(b.style.display="none",v.style.display="none",p.style.display="none",d.style.display="none",u.style.display="none")},ge=()=>{p.style.display="flex",p.style.display==="flex"&&(b.style.display="none",v.style.display="none",c.style.display="none",d.style.display="none",u.style.display="none")},be=()=>{b.style.display="flex",b.style.display==="flex"&&(v.style.display="none",c.style.display="none",d.style.display="none",p.style.display="none",u.style.display="none")},Z=()=>{u.style.display="flex",u.style.display==="flex"&&(b.style.display="none",v.style.display="none",c.style.display="none",d.style.display="none",p.style.display="none")},ve=()=>{document.querySelector("#icono-usuario").addEventListener("click",()=>{d.style.display="none",ye()})},ye=()=>{if(!c.hasChildNodes()){c.style.display="flex",c.style.height="calc(100vh - var(--nav-height))";const e=document.createElement("div");e.classList.add("div-formulario"),c.append(e),e.innerHTML=`
  <div class="tab">
   <button type="button" class="tablinks-1">Iniciar sesíon</button>
   <button type="button" class="tablinks-2">Registrar usuario</button>
  </div>

  <!--Inicio de sesión-->
  <div class="tabcontent-1" id="inicio-sesion">
    <form action="" class="formulario inicio" autocomplete="on">
      <p>
        <input type="text" id="nombreInicio" placeholder="Nombre"/>
      </p>
      <p>
        <input type="password" id="passInicio" placeholder="Contraseña"
        autocomplete="current-password"/>
      </p>
      <p>
        <input type="submit" value="Iniciar sesion" />
      </p>
    </form>
    <div class="pass-olvidada">
    <p>¿Has olvidado tu contraseña?</p>
    </div>
    </div>


  <!--Registro-->
  <div class="tabcontent-2" id="registro">
    <form action="" class="formulario registro ">
      <p>
      <input type="text" id="nombreRegistro" placeholder="Nombre"
      autocomplete="new-name"/>
      </p>
      <p>
      <input type="password" id="passRegistro" placeholder="Contraseña"
      autocomplete="new-password"/>
      </p>
      <p>
      <input type="password" id="passRepetida" placeholder="Repite la contraseña"
      autocomplete="new-password"/>
      </p>
      <p>
        <input type="submit" value="Registrate" />
      </p>
    </form>
  </div>
  

  `,he(),qe()}},he=()=>{const e=document.querySelector(".tabcontent-1"),a=document.querySelector(".tabcontent-2"),i=document.querySelector(".tablinks-1"),s=document.querySelector(".tablinks-2");i.addEventListener("click",()=>{e.style.display="block",a.style.display="none"}),s.addEventListener("click",()=>{e.style.display="none",a.style.display="block"})},qe=()=>{document.querySelectorAll(".formulario").forEach(a=>{a.addEventListener("submit",()=>{if(a.classList.contains("registro")){const i=document.querySelector("#nombreRegistro").value;R(i)}else{const i=document.querySelector("#nombreInicio").value;R(i)}})})},R=e=>{c.innerHTML=`
  <h2 class="saludar-usuario">Hola ${e}!</h2>
  `,setTimeout(()=>{c.innerHTML="",c.style.display="none",d.style.display="block",window.scrollTo(0,0)},2e3)},h=document.createElement("div");h.classList.add("productos-main");const fe=()=>{document.querySelector("#enlace-productos").addEventListener("click",()=>{window.scrollTo(0,0),Ee()})},Ee=()=>{L.hasChildNodes()||(L.appendChild(h),Ce(h),Le(h),p.style.display="flex",L.style.display="flex",d.style.display="none")},Ce=e=>{r.forEach(a=>{const i=document.createElement("div");i.classList.add("productos__destacados-div"),i.innerHTML=`
      <img
        src="${a.imagen}"
        alt="${a.descripcion}"
        class="productos__destacados-img"
        data-id="${a.id}"
      />
      <p>${a.producto}<span>${a.precio}</span></p>
    `,e.appendChild(i)})},Le=e=>{document.querySelectorAll(".productos__destacados-img").forEach(i=>{i.addEventListener("click",()=>{window.scrollTo(0,0),P(i,e,L),S(),x()})})},f=document.querySelector(".categorias-h2"),W=e=>{switch(e.parentElement.getAttribute("class")){case"productos__destacados-container":E(O),k.style.display="block",k.addEventListener("click",()=>{Q.style.display="flex",e.style.display="none",k.style.display="none",C(O)});break;case"pagina-productos":E(N);const t=document.querySelector(".volver-productos");t.style.display="block",t.addEventListener("click",()=>{h.style.display="flex",e.style.display="none",t.style.display="none",C(N)});break;case"categorias-container":E(f),j(),U(e),C(f);break;case"pagina-subcategorias":E(f),U(e),Y(),C(f)}},E=e=>{let a=e.children[0];a.style.display="none"},C=e=>{let a=e.children[0];a.style.display="block"},U=e=>{const a=document.querySelector(".volver-productos-categoria"),i=document.querySelector(".volver-categorias"),s=document.querySelector(".productos-categoria");s&&s.style.display==="none"&&(a.style.display="block",i.style.display="none",a.addEventListener("click",()=>{s.style.display="flex",e&&(i.style.display="block",a.style.display="none",e.parentElement.removeChild(e))}))},j=()=>{const e=document.querySelector(".cat-h2"),a=document.querySelector(".volver-categorias"),i=document.querySelector(".categorias"),s=document.querySelector(".productos-categoria");a.style.display==="block"&&a.addEventListener("click",()=>{e.innerHTML="CATEGORIAS",s.style.display="none",s.innerHTML="",i.style.display="flex",a.style.display="none"})},Y=()=>{const e=document.querySelector(".cat-h2"),a=document.querySelector(".volver-categorias"),i=document.querySelector(".pagina-subcategorias");a.style.display==="block"&&a.addEventListener("click",()=>{e.innerHTML="",i.style.display="none",i.innerHTML="",a.style.display="none",d.style.display="flex"})},Se=()=>{document.querySelectorAll(".productos__destacados-img").forEach(a=>{a.addEventListener("click",()=>{window.scrollTo(250,700),P(a,Q,ie),x(),S()})})},P=(e,a,i)=>{const s=document.createElement("div"),t=e.getAttribute("data-id"),o=parseInt(t);F(s,"producto-active-small","producto-active",1200),B(s,"producto-active-small","producto-active",1200),s.innerHTML=`
    <img class="producto-active-img" src="${r[o].imagen}"/>
    
    <div class="producto-active-texto"> 

    <h2 class="producto-active-h2">${r[o].producto}</h2>

    <div class="producto-active-descripcion">
    <p class="producto-active-p">${r[o].descripcion}</p> 
    <p class="producto-active-precio">Precio: ${r[o].precio}€</p>
   
    <div class="desplegable">
      <button class="acordeon">Edad recomendada: </button>
        <div class="panel">
          <p> ${r[o].edad}</p>
        </div>

        <button class="acordeon">Dimensiones: </button>
        <div class="panel">
          <p>${r[o].dimensiones}</p>
        </div>

        <button class="acordeon">Beneficios: </button>
        <div class="panel">
          <p>${r[o].beneficios}</p>
        </div>
    </div>
 
    <div>
    <button class="producto-active-aniadir" data-id="${o}">Añadir producto a la cesta</button>
    </div>
    </div>
    `,i.appendChild(s),a.style.display="none",W(s)},x=()=>{document.querySelectorAll(".acordeon").forEach(a=>{a.addEventListener("click",()=>{a.classList.toggle("active");let i=a.nextElementSibling;i.style.display==="block"?i.style.display="none":i.style.display="block"})})},je=document.querySelector(".categorias-container"),Pe=document.querySelector(".categorias"),T=document.querySelector(".productos-categoria"),_=document.querySelector(".cat-h2"),xe=document.querySelector(".categoria-1"),ze=document.querySelector(".categoria-2"),Ae=document.querySelector(".categoria-3"),ke=()=>{Te(),Ie(),_e()},D=()=>{document.querySelectorAll(".productos__categoria-img").forEach(a=>{a.addEventListener("click",()=>{P(a,T,je),window.scrollTo(0,1750),x(),S()})})},M=e=>{const a=document.createElement("div");a.classList.add("productos__categorias-div"),a.innerHTML=`
          <img
            src="${e.imagen}"
            alt="${e.descripcion}"
            class="productos__categoria-img"
            data-id="${e.id}"
          />
          <p>${e.producto}<span>${e.precio}</span></p>
        `,T.appendChild(a),T.style.display="flex",Pe.style.display="none"},Te=()=>{xe.addEventListener("click",()=>{H(),_.innerHTML="CATEGORIA DE 0 A 1 AÑO",r.forEach(e=>{e.categoria==="0-1"&&(M(e),j())}),D()})},Ie=()=>{ze.addEventListener("click",()=>{H(),_.innerHTML="CATEGORIA DE 1 A 3 AÑOS",r.forEach(e=>{e.categoria==="1-3"&&(M(e),j())}),D()})},_e=()=>{Ae.addEventListener("click",()=>{H(),_.innerHTML="CATEGORIA DESDE 3 AÑOS",r.forEach(e=>{e.categoria==="3+"&&(M(e),j())}),D()})},H=()=>{const e=document.querySelector(".volver-categorias");e.style.display="block"},De=document.querySelectorAll(".text"),Me=()=>{De.forEach(e=>{e.addEventListener("click",()=>{He(),Y();const a=e.textContent,i=document.querySelector(".cat-h2");switch(a){case"Animales":r.forEach(s=>{s.subcategoria==="animales"&&(i.innerHTML="ANIMALES",y(s))});break;case"Vehículos":r.forEach(s=>{s.subcategoria==="vehiculos"&&(i.innerHTML="VEHÍCULOS",y(s))});break;case"Didácticos":r.forEach(s=>{s.subcategoria==="didacticos"&&(i.innerHTML="DIDÁCTICOS",y(s))});break;case"Puzzles":r.forEach(s=>{s.subcategoria==="puzzles"&&(i.innerHTML="PUZZLES",y(s))});break;case"Sets":r.forEach(s=>{s.subcategoria==="sets"&&(i.innerHTML="SETS",y(s))});break;default:console.log("No se ha encontrado la categoría");break}$e(),W()})})},He=()=>{const e=document.querySelector(".pagina-subcategorias");e.style.display="flex";const a=document.createElement("div");a.classList.add("categorias-h2"),a.innerHTML=`
  <h2 class="cat-h2"></h2>
  <a href="#subcategorias" class="volver-productos-categoria">
    < Volver a los productos
  </a>
  <a href="" class="volver-categorias">
    < Volver a inicio
  </a>
  `,e.appendChild(a);const i=document.createElement("div");i.classList.add("productos-categoria"),e.appendChild(i),d.style.display="none"},y=e=>{const a=document.querySelector(".productos-categoria"),i=document.createElement("div");i.classList.add("productos__categorias-div"),i.innerHTML=`
                <img
                  src="${e.imagen}"
                  alt="${e.descripcion}"
                  class="productos__categoria-img"
                  data-id="${e.id}"
                />
                <p>${e.producto}<span>${e.precio}</span></p>
              `,a.appendChild(i),a.style.display="flex"},$e=()=>{const e=document.querySelector(".productos-categoria"),a=document.querySelector(".pagina-subcategorias");document.querySelectorAll(".productos__categoria-img").forEach(s=>{s.addEventListener("click",()=>{P(s,e,a),window.scrollTo(0,0),x(),S()})})},n=[{id:0,titulo:"Porque nos encantan los juguetes de madera",imagen:"images/blog/entrada-0.jpg",altImagen:"Piezas tipo lego, de madera",introContenido:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices. Convallis tellus id interdum velit laoreet id donec.`,contenido:`
        Lorem ipsum dolor sit amet consectetur, adipiscing elit suscipit sapien lacinia molestie, sollicitudin cum cras orci. 
        Hendrerit facilisis ridiculus condimentum convallis velit ac mattis felis suspendisse sociosqu, tortor mauris taciti 
        himenaeos per scelerisque iaculis fermentum libero, non rhoncus vel sem dapibus id elementum aenean interdum. Nisl 
        platea senectus at cras congue tortor id donec, tristique arcu blandit odio sem fusce eleifend ultrices,  
        venenatis morbi aenean massa dapibus ullamcorper sociosqu. <br><br>

        In neque inceptos aliquam ornare fringilla nisi elementum a, duis taciti eleifend vulputate dignissim 
        libero arcu semper metus, netus lobortis hendrerit sociis lacus tempor enim. Dui mauris penatibus nam 
        tempus sapien laoreet parturient eget egestas nulla, rutrum vel neque tortor phasellus convallis nisi 
        lacinia aliquet, diam quisque nisl sollicitudin montes mollis augue vestibulum hac. Cursus hendrerit 
        senectus mauris molestie placerat enim morbi vehicula, hac venenatis aliquam per malesuada fermentum diam, 
        curabitur curae etiam penatibus ad massa rutrum laoreet, odio neque fames elementum nisi sodales. <br><br>

        Conubia ut dis duis sapien nibh taciti fermentum nullam porttitor, inceptos at turpis commodo mollis
         aliquet diam parturient purus, quisque curae natoque semper sollicitudin nam eros volutpat. Integer commodo
          primis tortor ac eget pharetra tincidunt, hendrerit quis scelerisque egestas parturient lectus sed nunc, ut orci accumsan inceptos hac cum. <br><br>

        Condimentum quam curae quis nascetur sem hendrerit sodales, tellus suspendisse duis accumsan curabitur mi ligula,
         mus ornare massa augue nunc velit. Eleifend sollicitudin ut pharetra etiam fringilla convallis habitasse penatibus 
         justo sem, imperdiet turpis magnis diam proin hendrerit dictum dictumst libero dignissim vulputate, pulvinar placerat 
         est aliquam mus gravida tristique duis leo. Libero feugiat cubilia iaculis metus bibendum dictum massa porta platea curabitur,
          vestibulum tortor sagittis vehicula placerat est posuere a vel, nascetur et litora habitant per risus urna morbi inceptos. 
          Maecenas sociosqu natoque sed nullam mauris consequat vitae rutrum facilisi mattis dapibus, hac elementum magna libero aptent 
          duis platea parturient felis pellentesque, penatibus quam pharetra himenaeos congue dis arcu class tellus semper.`},{id:1,titulo:"Cómo elegir los mejores juguetes para los peques",imagen:"images/blog/entrada-1.jpg",altImagen:"Set de arboles y animales del bosque",introContenido:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices. Convallis tellus id interdum velit laoreet id donec.`,contenido:`
        Lorem ipsum dolor sit amet consectetur, adipiscing elit suscipit sapien lacinia molestie, sollicitudin cum cras orci. 
        Hendrerit facilisis ridiculus condimentum convallis velit ac mattis felis suspendisse sociosqu, tortor mauris taciti 
        himenaeos per scelerisque iaculis fermentum libero, non rhoncus vel sem dapibus id elementum aenean interdum. Nisl 
        platea senectus at cras congue tortor id donec, tristique arcu blandit odio sem fusce eleifend ultrices,  
        venenatis morbi aenean massa dapibus ullamcorper sociosqu. <br><br>

        In neque inceptos aliquam ornare fringilla nisi elementum a, duis taciti eleifend vulputate dignissim 
        libero arcu semper metus, netus lobortis hendrerit sociis lacus tempor enim. Dui mauris penatibus nam 
        tempus sapien laoreet parturient eget egestas nulla, rutrum vel neque tortor phasellus convallis nisi 
        lacinia aliquet, diam quisque nisl sollicitudin montes mollis augue vestibulum hac. Cursus hendrerit 
        senectus mauris molestie placerat enim morbi vehicula, hac venenatis aliquam per malesuada fermentum diam, 
        curabitur curae etiam penatibus ad massa rutrum laoreet, odio neque fames elementum nisi sodales. <br><br>
          
        Conubia ut dis duis sapien nibh taciti fermentum nullam porttitor, inceptos at turpis commodo mollis
         aliquet diam parturient purus, quisque curae natoque semper sollicitudin nam eros volutpat. Integer commodo
          primis tortor ac eget pharetra tincidunt, hendrerit quis scelerisque egestas parturient lectus sed nunc, ut orci accumsan inceptos hac cum. <br><br>
          
        Condimentum quam curae quis nascetur sem hendrerit sodales, tellus suspendisse duis accumsan curabitur mi ligula,
         mus ornare massa augue nunc velit. Eleifend sollicitudin ut pharetra etiam fringilla convallis habitasse penatibus 
         justo sem, imperdiet turpis magnis diam proin hendrerit dictum dictumst libero dignissim vulputate, pulvinar placerat 
         est aliquam mus gravida tristique duis leo. Libero feugiat cubilia iaculis metus bibendum dictum massa porta platea curabitur,
          vestibulum tortor sagittis vehicula placerat est posuere a vel, nascetur et litora habitant per risus urna morbi inceptos. 
          Maecenas sociosqu natoque sed nullam mauris consequat vitae rutrum facilisi mattis dapibus, hac elementum magna libero aptent 
          duis platea parturient felis pellentesque, penatibus quam pharetra himenaeos congue dis arcu class tellus semper.`},{id:2,titulo:"La importancia del autodesarrollo",imagen:"images/blog/entrada-2.jpg",altImagen:"Una niña jugando con letras",introContenido:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices. Convallis tellus id interdum velit laoreet id donec.`,contenido:`
        Lorem ipsum dolor sit amet consectetur, adipiscing elit suscipit sapien lacinia molestie, sollicitudin cum cras orci. 
        Hendrerit facilisis ridiculus condimentum convallis velit ac mattis felis suspendisse sociosqu, tortor mauris taciti 
        himenaeos per scelerisque iaculis fermentum libero, non rhoncus vel sem dapibus id elementum aenean interdum. Nisl 
        platea senectus at cras congue tortor id donec, tristique arcu blandit odio sem fusce eleifend ultrices,  
        venenatis morbi aenean massa dapibus ullamcorper sociosqu. <br><br>

        In neque inceptos aliquam ornare fringilla nisi elementum a, duis taciti eleifend vulputate dignissim 
        libero arcu semper metus, netus lobortis hendrerit sociis lacus tempor enim. Dui mauris penatibus nam 
        tempus sapien laoreet parturient eget egestas nulla, rutrum vel neque tortor phasellus convallis nisi 
        lacinia aliquet, diam quisque nisl sollicitudin montes mollis augue vestibulum hac. Cursus hendrerit 
        senectus mauris molestie placerat enim morbi vehicula, hac venenatis aliquam per malesuada fermentum diam, 
        curabitur curae etiam penatibus ad massa rutrum laoreet, odio neque fames elementum nisi sodales. <br><br>
          
        Conubia ut dis duis sapien nibh taciti fermentum nullam porttitor, inceptos at turpis commodo mollis
         aliquet diam parturient purus, quisque curae natoque semper sollicitudin nam eros volutpat. Integer commodo
          primis tortor ac eget pharetra tincidunt, hendrerit quis scelerisque egestas parturient lectus sed nunc, ut orci accumsan inceptos hac cum. <br><br>
          
        Condimentum quam curae quis nascetur sem hendrerit sodales, tellus suspendisse duis accumsan curabitur mi ligula,
         mus ornare massa augue nunc velit. Eleifend sollicitudin ut pharetra etiam fringilla convallis habitasse penatibus 
         justo sem, imperdiet turpis magnis diam proin hendrerit dictum dictumst libero dignissim vulputate, pulvinar placerat 
         est aliquam mus gravida tristique duis leo. Libero feugiat cubilia iaculis metus bibendum dictum massa porta platea curabitur,
          vestibulum tortor sagittis vehicula placerat est posuere a vel, nascetur et litora habitant per risus urna morbi inceptos. 
          Maecenas sociosqu natoque sed nullam mauris consequat vitae rutrum facilisi mattis dapibus, hac elementum magna libero aptent 
          duis platea parturient felis pellentesque, penatibus quam pharetra himenaeos congue dis arcu class tellus semper.`},{id:3,titulo:"Tipo de juguetes según la edad",imagen:"images/blog/entrada-3.jpg",altImagen:"Juego de madera con bolitas de lana para aprender a sumar y restar",introContenido:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices. Convallis tellus id interdum velit laoreet id donec.`,contenido:`
      Lorem ipsum dolor sit amet consectetur, adipiscing elit suscipit sapien lacinia molestie, sollicitudin cum cras orci. 
      Hendrerit facilisis ridiculus condimentum convallis velit ac mattis felis suspendisse sociosqu, tortor mauris taciti 
      himenaeos per scelerisque iaculis fermentum libero, non rhoncus vel sem dapibus id elementum aenean interdum. Nisl 
      platea senectus at cras congue tortor id donec, tristique arcu blandit odio sem fusce eleifend ultrices,  
      venenatis morbi aenean massa dapibus ullamcorper sociosqu. <br><br>

      In neque inceptos aliquam ornare fringilla nisi elementum a, duis taciti eleifend vulputate dignissim 
      libero arcu semper metus, netus lobortis hendrerit sociis lacus tempor enim. Dui mauris penatibus nam 
      tempus sapien laoreet parturient eget egestas nulla, rutrum vel neque tortor phasellus convallis nisi 
      lacinia aliquet, diam quisque nisl sollicitudin montes mollis augue vestibulum hac. Cursus hendrerit 
      senectus mauris molestie placerat enim morbi vehicula, hac venenatis aliquam per malesuada fermentum diam, 
      curabitur curae etiam penatibus ad massa rutrum laoreet, odio neque fames elementum nisi sodales. <br><br>
        
      Conubia ut dis duis sapien nibh taciti fermentum nullam porttitor, inceptos at turpis commodo mollis
       aliquet diam parturient purus, quisque curae natoque semper sollicitudin nam eros volutpat. Integer commodo
        primis tortor ac eget pharetra tincidunt, hendrerit quis scelerisque egestas parturient lectus sed nunc, ut orci accumsan inceptos hac cum. <br><br>
        
      Condimentum quam curae quis nascetur sem hendrerit sodales, tellus suspendisse duis accumsan curabitur mi ligula,
       mus ornare massa augue nunc velit. Eleifend sollicitudin ut pharetra etiam fringilla convallis habitasse penatibus 
       justo sem, imperdiet turpis magnis diam proin hendrerit dictum dictumst libero dignissim vulputate, pulvinar placerat 
       est aliquam mus gravida tristique duis leo. Libero feugiat cubilia iaculis metus bibendum dictum massa porta platea curabitur,
        vestibulum tortor sagittis vehicula placerat est posuere a vel, nascetur et litora habitant per risus urna morbi inceptos. 
        Maecenas sociosqu natoque sed nullam mauris consequat vitae rutrum facilisi mattis dapibus, hac elementum magna libero aptent 
        duis platea parturient felis pellentesque, penatibus quam pharetra himenaeos congue dis arcu class tellus semper.`},{id:4,titulo:"Los primeros años de vida de tu peque",imagen:"images/blog/entrada-5.jpg",altImagen:"Un niño jugando",introContenido:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices. Convallis tellus id interdum velit laoreet id donec.`,contenido:`
        Lorem ipsum dolor sit amet consectetur, adipiscing elit suscipit sapien lacinia molestie, sollicitudin cum cras orci. 
        Hendrerit facilisis ridiculus condimentum convallis velit ac mattis felis suspendisse sociosqu, tortor mauris taciti 
        himenaeos per scelerisque iaculis fermentum libero, non rhoncus vel sem dapibus id elementum aenean interdum. Nisl 
        platea senectus at cras congue tortor id donec, tristique arcu blandit odio sem fusce eleifend ultrices,  
        venenatis morbi aenean massa dapibus ullamcorper sociosqu. <br><br>

        In neque inceptos aliquam ornare fringilla nisi elementum a, duis taciti eleifend vulputate dignissim 
        libero arcu semper metus, netus lobortis hendrerit sociis lacus tempor enim. Dui mauris penatibus nam 
        tempus sapien laoreet parturient eget egestas nulla, rutrum vel neque tortor phasellus convallis nisi 
        lacinia aliquet, diam quisque nisl sollicitudin montes mollis augue vestibulum hac. Cursus hendrerit 
        senectus mauris molestie placerat enim morbi vehicula, hac venenatis aliquam per malesuada fermentum diam, 
        curabitur curae etiam penatibus ad massa rutrum laoreet, odio neque fames elementum nisi sodales. <br><br>
          
        Conubia ut dis duis sapien nibh taciti fermentum nullam porttitor, inceptos at turpis commodo mollis
         aliquet diam parturient purus, quisque curae natoque semper sollicitudin nam eros volutpat. Integer commodo
          primis tortor ac eget pharetra tincidunt, hendrerit quis scelerisque egestas parturient lectus sed nunc, ut orci accumsan inceptos hac cum. <br><br>
          
        Condimentum quam curae quis nascetur sem hendrerit sodales, tellus suspendisse duis accumsan curabitur mi ligula,
         mus ornare massa augue nunc velit. Eleifend sollicitudin ut pharetra etiam fringilla convallis habitasse penatibus 
         justo sem, imperdiet turpis magnis diam proin hendrerit dictum dictumst libero dignissim vulputate, pulvinar placerat 
         est aliquam mus gravida tristique duis leo. Libero feugiat cubilia iaculis metus bibendum dictum massa porta platea curabitur,
          vestibulum tortor sagittis vehicula placerat est posuere a vel, nascetur et litora habitant per risus urna morbi inceptos. 
          Maecenas sociosqu natoque sed nullam mauris consequat vitae rutrum facilisi mattis dapibus, hac elementum magna libero aptent 
          duis platea parturient felis pellentesque, penatibus quam pharetra himenaeos congue dis arcu class tellus semper.`},{id:5,titulo:"Juegos de madera. ¿Por qué no?",imagen:"images/blog/entrada-6.jpg",altImagen:"Juego de madera con bolitas de lana para aprender a sumar y restar",introContenido:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices. Convallis tellus id interdum velit laoreet id donec.`,contenido:`
      Lorem ipsum dolor sit amet consectetur, adipiscing elit suscipit sapien lacinia molestie, sollicitudin cum cras orci. 
      Hendrerit facilisis ridiculus condimentum convallis velit ac mattis felis suspendisse sociosqu, tortor mauris taciti 
      himenaeos per scelerisque iaculis fermentum libero, non rhoncus vel sem dapibus id elementum aenean interdum. Nisl 
      platea senectus at cras congue tortor id donec, tristique arcu blandit odio sem fusce eleifend ultrices,  
      venenatis morbi aenean massa dapibus ullamcorper sociosqu. <br><br>

      In neque inceptos aliquam ornare fringilla nisi elementum a, duis taciti eleifend vulputate dignissim 
      libero arcu semper metus, netus lobortis hendrerit sociis lacus tempor enim. Dui mauris penatibus nam 
      tempus sapien laoreet parturient eget egestas nulla, rutrum vel neque tortor phasellus convallis nisi 
      lacinia aliquet, diam quisque nisl sollicitudin montes mollis augue vestibulum hac. Cursus hendrerit 
      senectus mauris molestie placerat enim morbi vehicula, hac venenatis aliquam per malesuada fermentum diam, 
      curabitur curae etiam penatibus ad massa rutrum laoreet, odio neque fames elementum nisi sodales. <br><br>
        
      Conubia ut dis duis sapien nibh taciti fermentum nullam porttitor, inceptos at turpis commodo mollis
       aliquet diam parturient purus, quisque curae natoque semper sollicitudin nam eros volutpat. Integer commodo
        primis tortor ac eget pharetra tincidunt, hendrerit quis scelerisque egestas parturient lectus sed nunc, ut orci accumsan inceptos hac cum. <br><br>
        
      Condimentum quam curae quis nascetur sem hendrerit sodales, tellus suspendisse duis accumsan curabitur mi ligula,
       mus ornare massa augue nunc velit. Eleifend sollicitudin ut pharetra etiam fringilla convallis habitasse penatibus 
       justo sem, imperdiet turpis magnis diam proin hendrerit dictum dictumst libero dignissim vulputate, pulvinar placerat 
       est aliquam mus gravida tristique duis leo. Libero feugiat cubilia iaculis metus bibendum dictum massa porta platea curabitur,
        vestibulum tortor sagittis vehicula placerat est posuere a vel, nascetur et litora habitant per risus urna morbi inceptos. 
        Maecenas sociosqu natoque sed nullam mauris consequat vitae rutrum facilisi mattis dapibus, hac elementum magna libero aptent 
        duis platea parturient felis pellentesque, penatibus quam pharetra himenaeos congue dis arcu class tellus semper.`},{id:6,titulo:"Conoces el juego de palabras?",imagen:"images/blog/entrada-7.jpg",altImagen:"Juego de madera cpara aprender a construir palabras cortas",introContenido:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices. Convallis tellus id interdum velit laoreet id donec.`,contenido:`
        Lorem ipsum dolor sit amet consectetur, adipiscing elit suscipit sapien lacinia molestie, sollicitudin cum cras orci. 
        Hendrerit facilisis ridiculus condimentum convallis velit ac mattis felis suspendisse sociosqu, tortor mauris taciti 
        himenaeos per scelerisque iaculis fermentum libero, non rhoncus vel sem dapibus id elementum aenean interdum. Nisl 
        platea senectus at cras congue tortor id donec, tristique arcu blandit odio sem fusce eleifend ultrices,  
        venenatis morbi aenean massa dapibus ullamcorper sociosqu. <br><br>

        In neque inceptos aliquam ornare fringilla nisi elementum a, duis taciti eleifend vulputate dignissim 
        libero arcu semper metus, netus lobortis hendrerit sociis lacus tempor enim. Dui mauris penatibus nam 
        tempus sapien laoreet parturient eget egestas nulla, rutrum vel neque tortor phasellus convallis nisi 
        lacinia aliquet, diam quisque nisl sollicitudin montes mollis augue vestibulum hac. Cursus hendrerit 
        senectus mauris molestie placerat enim morbi vehicula, hac venenatis aliquam per malesuada fermentum diam, 
        curabitur curae etiam penatibus ad massa rutrum laoreet, odio neque fames elementum nisi sodales. <br><br>
          
        Conubia ut dis duis sapien nibh taciti fermentum nullam porttitor, inceptos at turpis commodo mollis
         aliquet diam parturient purus, quisque curae natoque semper sollicitudin nam eros volutpat. Integer commodo
          primis tortor ac eget pharetra tincidunt, hendrerit quis scelerisque egestas parturient lectus sed nunc, ut orci accumsan inceptos hac cum. <br><br>
          
        Condimentum quam curae quis nascetur sem hendrerit sodales, tellus suspendisse duis accumsan curabitur mi ligula,
         mus ornare massa augue nunc velit. Eleifend sollicitudin ut pharetra etiam fringilla convallis habitasse penatibus 
         justo sem, imperdiet turpis magnis diam proin hendrerit dictum dictumst libero dignissim vulputate, pulvinar placerat 
         est aliquam mus gravida tristique duis leo. Libero feugiat cubilia iaculis metus bibendum dictum massa porta platea curabitur,
          vestibulum tortor sagittis vehicula placerat est posuere a vel, nascetur et litora habitant per risus urna morbi inceptos. 
          Maecenas sociosqu natoque sed nullam mauris consequat vitae rutrum facilisi mattis dapibus, hac elementum magna libero aptent 
          duis platea parturient felis pellentesque, penatibus quam pharetra himenaeos congue dis arcu class tellus semper.`},{id:7,titulo:"Es hora de empezar a aprender",imagen:"images/blog/entrada-8.jpg",altImagen:"Puzzle de madera con números",introContenido:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices. Convallis tellus id interdum velit laoreet id donec.`,contenido:`
        Lorem ipsum dolor sit amet consectetur, adipiscing elit suscipit sapien lacinia molestie, sollicitudin cum cras orci. 
        Hendrerit facilisis ridiculus condimentum convallis velit ac mattis felis suspendisse sociosqu, tortor mauris taciti 
        himenaeos per scelerisque iaculis fermentum libero, non rhoncus vel sem dapibus id elementum aenean interdum. Nisl 
        platea senectus at cras congue tortor id donec, tristique arcu blandit odio sem fusce eleifend ultrices,  
        venenatis morbi aenean massa dapibus ullamcorper sociosqu. <br><br>

        In neque inceptos aliquam ornare fringilla nisi elementum a, duis taciti eleifend vulputate dignissim 
        libero arcu semper metus, netus lobortis hendrerit sociis lacus tempor enim. Dui mauris penatibus nam 
        tempus sapien laoreet parturient eget egestas nulla, rutrum vel neque tortor phasellus convallis nisi 
        lacinia aliquet, diam quisque nisl sollicitudin montes mollis augue vestibulum hac. Cursus hendrerit 
        senectus mauris molestie placerat enim morbi vehicula, hac venenatis aliquam per malesuada fermentum diam, 
        curabitur curae etiam penatibus ad massa rutrum laoreet, odio neque fames elementum nisi sodales. <br><br>
          
        Conubia ut dis duis sapien nibh taciti fermentum nullam porttitor, inceptos at turpis commodo mollis
         aliquet diam parturient purus, quisque curae natoque semper sollicitudin nam eros volutpat. Integer commodo
          primis tortor ac eget pharetra tincidunt, hendrerit quis scelerisque egestas parturient lectus sed nunc, ut orci accumsan inceptos hac cum. <br><br>
          
        Condimentum quam curae quis nascetur sem hendrerit sodales, tellus suspendisse duis accumsan curabitur mi ligula,
         mus ornare massa augue nunc velit. Eleifend sollicitudin ut pharetra etiam fringilla convallis habitasse penatibus 
         justo sem, imperdiet turpis magnis diam proin hendrerit dictum dictumst libero dignissim vulputate, pulvinar placerat 
         est aliquam mus gravida tristique duis leo. Libero feugiat cubilia iaculis metus bibendum dictum massa porta platea curabitur,
          vestibulum tortor sagittis vehicula placerat est posuere a vel, nascetur et litora habitant per risus urna morbi inceptos. 
          Maecenas sociosqu natoque sed nullam mauris consequat vitae rutrum facilisi mattis dapibus, hac elementum magna libero aptent 
          duis platea parturient felis pellentesque, penatibus quam pharetra himenaeos congue dis arcu class tellus semper.`},{id:8,titulo:"El beneficio de pasar tiempo en la naturaleza",imagen:"images/blog/entrada-9.jpg",altImagen:"El monte en primavera",introContenido:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices. Convallis tellus id interdum velit laoreet id donec.`,contenido:`
        Lorem ipsum dolor sit amet consectetur, adipiscing elit suscipit sapien lacinia molestie, sollicitudin cum cras orci. 
        Hendrerit facilisis ridiculus condimentum convallis velit ac mattis felis suspendisse sociosqu, tortor mauris taciti 
        himenaeos per scelerisque iaculis fermentum libero, non rhoncus vel sem dapibus id elementum aenean interdum. Nisl 
        platea senectus at cras congue tortor id donec, tristique arcu blandit odio sem fusce eleifend ultrices,  
        venenatis morbi aenean massa dapibus ullamcorper sociosqu. <br><br>

        In neque inceptos aliquam ornare fringilla nisi elementum a, duis taciti eleifend vulputate dignissim 
        libero arcu semper metus, netus lobortis hendrerit sociis lacus tempor enim. Dui mauris penatibus nam 
        tempus sapien laoreet parturient eget egestas nulla, rutrum vel neque tortor phasellus convallis nisi 
        lacinia aliquet, diam quisque nisl sollicitudin montes mollis augue vestibulum hac. Cursus hendrerit 
        senectus mauris molestie placerat enim morbi vehicula, hac venenatis aliquam per malesuada fermentum diam, 
        curabitur curae etiam penatibus ad massa rutrum laoreet, odio neque fames elementum nisi sodales. <br><br>
          
        Conubia ut dis duis sapien nibh taciti fermentum nullam porttitor, inceptos at turpis commodo mollis
         aliquet diam parturient purus, quisque curae natoque semper sollicitudin nam eros volutpat. Integer commodo
          primis tortor ac eget pharetra tincidunt, hendrerit quis scelerisque egestas parturient lectus sed nunc, ut orci accumsan inceptos hac cum. <br><br>
          
        Condimentum quam curae quis nascetur sem hendrerit sodales, tellus suspendisse duis accumsan curabitur mi ligula,
         mus ornare massa augue nunc velit. Eleifend sollicitudin ut pharetra etiam fringilla convallis habitasse penatibus 
         justo sem, imperdiet turpis magnis diam proin hendrerit dictum dictumst libero dignissim vulputate, pulvinar placerat 
         est aliquam mus gravida tristique duis leo. Libero feugiat cubilia iaculis metus bibendum dictum massa porta platea curabitur,
          vestibulum tortor sagittis vehicula placerat est posuere a vel, nascetur et litora habitant per risus urna morbi inceptos. 
          Maecenas sociosqu natoque sed nullam mauris consequat vitae rutrum facilisi mattis dapibus, hac elementum magna libero aptent 
          duis platea parturient felis pellentesque, penatibus quam pharetra himenaeos congue dis arcu class tellus semper.`}],we=document.querySelector("#enlace-blog"),Ve=()=>{we.addEventListener("click",()=>{const e=document.querySelector(".contenedor-entrada"),a=document.querySelector(".pagina-blog-entradas");if(!e&&!a)K();else{u.removeChild(e);const i=document.querySelector(".pagina-blog-entradas");i.style.display="flex"}}),X()},K=()=>{const e=document.createElement("div");e.classList.add("pagina-blog-entradas"),n.forEach(a=>{const i=document.createElement("div");i.classList.add("blog__entradas-entrada"),i.innerHTML=`
            <h2>${a.titulo}</h2>
          
            <img class="blog__img" src="${a.imagen}" alt="${a.altImagen}"/>
        
            <p>${a.introContenido}
            <span><a href="#blog" class="blog__ver-mas" data-id="${a.id}">Ver más</a></span>
            </p>
        `,e.appendChild(i)}),u.appendChild(e),Ne()},Ne=()=>{document.querySelectorAll(".blog__ver-mas").forEach(a=>{a.addEventListener("click",()=>{const i=a.getAttribute("data-id"),s=parseInt(i);Oe(s)})})},Oe=e=>{const a=document.createElement("div");a.classList.add("contenedor-entrada");const i=document.querySelector(".pagina-blog-entradas");i.style.display="none",a.innerHTML=`
  <div class="imagen-entrada">
  <img class="blog__img-entrada" src="${n[e].imagen}" alt="${n[e].altImagen}"/>
  </div>

  <div class="titulo-contenido">
  <a href="#blog" class="volver-entradas"> < Volver atrás</a>
  <h2>${n[e].titulo}</h2>
      <p>${n[e].contenido}</p>
    </div>
      `,u.appendChild(a),X()},X=()=>{const e=document.querySelector(".volver-entradas");e&&e!==void 0&&e.addEventListener("click",()=>{const a=document.querySelector(".contenedor-entrada");u.removeChild(a);const i=document.querySelector(".pagina-blog-entradas");i.style.display="flex"})},Re=document.querySelector(".blog__container"),$=document.createElement("div");$.classList.add("blog__entradas");Re.appendChild($);const Ue=()=>{for(let e=0;e<=2;e++){document.createElement("div").classList.add("pagina-blog-entradas");const i=document.createElement("div");i.classList.add("blog__entradas-entrada"),i.innerHTML=`
              <h2>${n[e].titulo}</h2>
            
              <img class="blog__img" src="${n[e].imagen}" alt="${n[e].altImagen}"/>
          
              <p>${n[e].introContenido}
              <span><a href="#blog" class="blog__ver-mas" data-id="${n[e].id}">Ver más</a></span>
              </p>
          `,$.appendChild(i),Fe()}},Fe=()=>{document.querySelectorAll(".blog__ver-mas").forEach(a=>{a.addEventListener("click",()=>{const i=a.getAttribute("data-id"),s=parseInt(i);Z(),document.querySelector(".contenedor-entrada")||Be(s)})})},Be=e=>{const a=document.createElement("div");a.classList.add("contenedor-entrada"),a.innerHTML=`
  <div class="imagen-entrada">
  <img class="blog__img-entrada" src="${n[e].imagen}" alt="${n[e].altImagen}"/>
  </div>

  <div class="titulo-contenido">
  <a href="#blog" class="volver-entradas"> < Ver todas las entradas</a>
  <h2>${n[e].titulo}</h2>
      <p>${n[e].contenido}</p>
    </div>
      `,u.appendChild(a),document.querySelector(".volver-entradas").addEventListener("click",()=>{u.removeChild(a),K()})};document.querySelector(".carrito-main");const Qe=document.querySelector(".cerrar-carrito"),m=document.querySelector(".procesar-pedido"),w=document.querySelector(".carrito"),V=document.querySelector(".carrito-contenedor"),Je=()=>{m.addEventListener("click",()=>{const e=document.querySelector(".div-formulario-pedido");l.length!==0&&!e&&(I(),w.style.display="none",m.textContent="REALIZAR PEDIDO"),m.removeEventListener("click",I)})},I=()=>{const e=document.createElement("div");e.classList.add("div-formulario-pedido"),e.innerHTML=`
<form  class="formulario-pedido">
<div>
<label for="nombre">Nombre: </label><br>
<input type="text" id="nombre"  required>
</div>

<div>
<label for="apellidos">Apellidos: </label><br>
<input type="text" id="apellidos"  required>
</div>

<div>
<label for="email">Email:</label><br>
<input type="email" id="email" required>
</div>

<div>
<label for="direccion">Dirección: </label><br>
<input type="text" id="direccion" required">
</div>

<div>
<label for="provincia">Provincia:</label><br>
<input type="text" id="provincia" required>
</div>

<div>
<label for="codPostal">Código postal</label><br>
<input type="number" id="codPostal" max="99999" required>
</div>

<div>
<input type="submit" value="Enviar" id="enviar"> <br>
<input type="reset" value="Resetear">
</div>
<form>
`,V.appendChild(e),Ye(),Ge()},Ge=()=>{document.querySelector(".formulario-pedido").addEventListener("submit",a=>{a.preventDefault(),Ze()})},Ze=()=>{const e=document.querySelector(".div-formulario-pedido");e.classList.toggle("formulario-envio"),e.innerHTML=`
  <div class="metodo-envio">
  <form>
  <h2>Dónde enviamos tu pedido?</h2>
  <div class="label-input">
  <label for="casa">A casa: </label>
  <input type="radio" id="casa" name="envio" checked>
  </div>
  <br/>
  <div class="label-input">
  <label for="puntoRecogida">Punto de recogida</label>
  <input type="radio" id="puntoRecogida" name="envio">
  </div>
  </form>
  </div>

  <div class="metodo-pago">
  <form>
  <h2>Elige un método de pago</h2>
  <div class="label-input">
  <label for="payPal">PayPal</label>
  <input type="radio" id="payPal" name="pago">
  </div>
  <br/>
  <div class="label-input">
  <label for="tarjeta">Tarjeta</label>
  <input type="radio" id="tarjeta" name="pago" checked>
  </div>
  </form>
  </div>
  `,We()},We=()=>{m.addEventListener("click",ee)},ee=()=>{const e=document.querySelector(".carrito-main"),a=document.querySelector(".div-formulario-pedido");a.innerHTML="<h2 class='pedido-realizado'>PEDIDO REALIZADO CON ÉXITO</h2>",setTimeout(()=>{V.removeChild(a),e.style.display="none",d.style.display="block",l.length=0,localStorage.clear(),w.style.display="flex"},2e3)},Ye=()=>{const e=document.querySelector(".div-formulario-pedido"),a=document.createElement("p");a.innerHTML='<a class="volver-cesta"> / Volver a la cesta </a>',Qe.insertAdjacentElement("afterend",a),a.addEventListener("click",()=>{e&&(V.removeChild(e),w.style.display="flex",a.remove(),m.removeEventListener("click",ee),m.innerHTML="PROCESAR COMPRA",m.addEventListener("click",I))})};document.addEventListener("DOMContentLoaded",()=>{ae(),se(),de()});Me();re();Je();ve();ke();Se();fe();Ve();Ue();
