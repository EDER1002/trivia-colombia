/* =====================================================================
   preguntas.js — Banco de preguntas de Trivia Colombia
   ---------------------------------------------------------------------
   Aquí solo hay DATOS (no hay lógica). Para agregar una pregunta basta
   con añadir un objeto más al arreglo PREGUNTAS respetando la estructura:

     id          → número único
     categoria   → 'geografia' | 'historia' | 'cultura' | 'deportes' | 'naturaleza'
     dificultad  → 'facil' | 'medio' | 'dificil'
     enunciado   → texto de la pregunta
     opciones    → arreglo con 4 respuestas posibles
     correcta    → posición (0 a 3) de la respuesta correcta dentro de opciones
     explicacion → dato corto que se muestra después de responder

   El banco tiene 150 preguntas: 10 por cada combinación de categoría y
   dificultad, para que cualquier partida pueda tener 10 preguntas distintas.
   ===================================================================== */

"use strict";

// Categorías disponibles (la clave se usa en el código y el nombre se muestra en pantalla)
const CATEGORIAS = {
  todas: { nombre: "Todas", icono: "assets/img/todas.svg" },
  geografia: { nombre: "Geografía", icono: "assets/img/geografia.svg" },
  historia: { nombre: "Historia", icono: "assets/img/historia.svg" },
  cultura: { nombre: "Cultura y Tradiciones", icono: "assets/img/cultura.svg" },
  deportes: { nombre: "Deportes", icono: "assets/img/deportes.svg" },
  naturaleza: {
    nombre: "Ciencia y Naturaleza",
    icono: "assets/img/naturaleza.svg",
  },
};

// Niveles de dificultad (nombre que se muestra en pantalla)
const DIFICULTADES = {
  facil: { nombre: "Fácil" },
  medio: { nombre: "Medio" },
  dificil: { nombre: "Difícil" },
};

const PREGUNTAS = [
  // ===== GEOGRAFIA =====
  {
    id: 1,
    categoria: "geografia",
    dificultad: "facil",
    enunciado: "¿Cuál es la capital del departamento de Santander?",
    opciones: ["Cúcuta", "Bucaramanga", "Tunja", "Barrancabermeja"],
    correcta: 1,
    explicacion: "Bucaramanga, la «Ciudad Bonita», es la capital de Santander.",
  },
  {
    id: 2,
    categoria: "geografia",
    dificultad: "facil",
    enunciado: "¿Cuál es la capital de Colombia?",
    opciones: ["Bogotá", "Medellín", "Cali", "Cartagena"],
    correcta: 0,
    explicacion:
      "Bogotá es la capital del país y está a unos 2.600 metros sobre el nivel del mar.",
  },
  {
    id: 3,
    categoria: "geografia",
    dificultad: "facil",
    enunciado: "¿Qué océano baña la costa occidental de Colombia?",
    opciones: [
      "Océano Atlántico",
      "Océano Pacífico",
      "Océano Índico",
      "Océano Ártico",
    ],
    correcta: 1,
    explicacion:
      "La costa occidental de Colombia da al océano Pacífico; la costa norte, al mar Caribe.",
  },
  {
    id: 4,
    categoria: "geografia",
    dificultad: "facil",
    enunciado: "¿Cuál es la capital del departamento de Antioquia?",
    opciones: ["Manizales", "Pereira", "Medellín", "Montería"],
    correcta: 2,
    explicacion:
      "Medellín, la «Ciudad de la Eterna Primavera», es la capital de Antioquia.",
  },
  {
    id: 5,
    categoria: "geografia",
    dificultad: "facil",
    enunciado:
      "¿En cuántas cordilleras se divide la cordillera de los Andes al entrar a Colombia?",
    opciones: ["Tres", "Dos", "Cuatro", "Cinco"],
    correcta: 0,
    explicacion:
      "Los Andes se dividen en las cordilleras Occidental, Central y Oriental.",
  },
  {
    id: 6,
    categoria: "geografia",
    dificultad: "facil",
    enunciado: "¿Cuántos departamentos tiene Colombia?",
    opciones: ["32", "28", "30", "34"],
    correcta: 0,
    explicacion:
      "Colombia está dividida en 32 departamentos y un Distrito Capital.",
  },
  {
    id: 7,
    categoria: "geografia",
    dificultad: "facil",
    enunciado: "¿Qué mar baña la costa norte de Colombia?",
    opciones: ["Mar Mediterráneo", "Mar Rojo", "Mar Caribe", "Mar del Norte"],
    correcta: 2,
    explicacion:
      "La costa norte del país da al mar Caribe, que hace parte del océano Atlántico.",
  },
  {
    id: 8,
    categoria: "geografia",
    dificultad: "facil",
    enunciado: "¿Cuál es la capital del departamento del Valle del Cauca?",
    opciones: ["Cali", "Popayán", "Palmira", "Buenaventura"],
    correcta: 0,
    explicacion: "Santiago de Cali es la capital del Valle del Cauca.",
  },
  {
    id: 9,
    categoria: "geografia",
    dificultad: "facil",
    enunciado: "¿Qué ciudad colombiana es conocida como «La Heroica»?",
    opciones: ["Santa Marta", "Cartagena de Indias", "Barranquilla", "Mompox"],
    correcta: 1,
    explicacion:
      "Cartagena recibió ese título por resistir el sitio español de 1815.",
  },
  {
    id: 10,
    categoria: "geografia",
    dificultad: "facil",
    enunciado:
      "¿Con qué país comparte Colombia su frontera terrestre más larga?",
    opciones: ["Venezuela", "Ecuador", "Perú", "Panamá"],
    correcta: 0,
    explicacion: "La frontera con Venezuela mide más de 2.200 kilómetros.",
  },
  {
    id: 11,
    categoria: "geografia",
    dificultad: "medio",
    enunciado:
      "¿Cuál es el principal río de Colombia, que la recorre de sur a norte?",
    opciones: ["Río Magdalena", "Río Cauca", "Río Atrato", "Río Amazonas"],
    correcta: 0,
    explicacion:
      "El Magdalena recorre más de 1.500 km desde el Macizo Colombiano hasta el mar Caribe.",
  },
  {
    id: 12,
    categoria: "geografia",
    dificultad: "medio",
    enunciado: "¿Cuál es el departamento más extenso de Colombia?",
    opciones: ["Vichada", "Amazonas", "Caquetá", "Meta"],
    correcta: 1,
    explicacion:
      "Amazonas es el departamento más grande, con cerca de 110.000 km².",
  },
  {
    id: 13,
    categoria: "geografia",
    dificultad: "medio",
    enunciado:
      "¿En qué departamento se encuentra el Parque Nacional del Chicamocha (Panachi)?",
    opciones: ["Huila", "Nariño", "Tolima", "Santander"],
    correcta: 3,
    explicacion:
      "Panachi está en Santander, sobre el cañón del río Chicamocha.",
  },
  {
    id: 14,
    categoria: "geografia",
    dificultad: "medio",
    enunciado: "¿Cuál es la capital del departamento de Nariño?",
    opciones: ["Ipiales", "Pasto", "Tumaco", "Popayán"],
    correcta: 1,
    explicacion:
      "San Juan de Pasto es la capital de Nariño y está al pie del volcán Galeras.",
  },
  {
    id: 15,
    categoria: "geografia",
    dificultad: "medio",
    enunciado: "¿Qué desierto se encuentra en el departamento del Huila?",
    opciones: [
      "Desierto de La Guajira",
      "Desierto de la Candelaria",
      "Desierto de Atacama",
      "Desierto de la Tatacoa",
    ],
    correcta: 3,
    explicacion:
      "La Tatacoa, cerca de Neiva, es en realidad un bosque seco tropical.",
  },
  {
    id: 16,
    categoria: "geografia",
    dificultad: "medio",
    enunciado: "¿Cuál es el punto más al norte de Colombia y de Suramérica?",
    opciones: [
      "Punta Gallinas",
      "Cabo de la Vela",
      "Cabo Tiburón",
      "Punta Espada",
    ],
    correcta: 0,
    explicacion:
      "Punta Gallinas está en La Guajira y es el extremo norte del continente suramericano.",
  },
  {
    id: 17,
    categoria: "geografia",
    dificultad: "medio",
    enunciado:
      "¿Junto a qué ciudad desemboca el río Magdalena en el mar Caribe?",
    opciones: ["Cartagena", "Santa Marta", "Barranquilla", "Riohacha"],
    correcta: 2,
    explicacion:
      "El Magdalena desemboca en Bocas de Ceniza, junto a Barranquilla.",
  },
  {
    id: 18,
    categoria: "geografia",
    dificultad: "medio",
    enunciado: "¿Cuál es la capital del departamento del Chocó?",
    opciones: ["Istmina", "Nuquí", "Turbo", "Quibdó"],
    correcta: 3,
    explicacion: "Quibdó, a orillas del río Atrato, es la capital del Chocó.",
  },
  {
    id: 19,
    categoria: "geografia",
    dificultad: "medio",
    enunciado:
      "¿Qué archipiélago colombiano se ubica en el mar Caribe, frente a las costas de Nicaragua?",
    opciones: [
      "Islas del Rosario",
      "Archipiélago de San Bernardo",
      "Isla Gorgona",
      "San Andrés, Providencia y Santa Catalina",
    ],
    correcta: 3,
    explicacion:
      "El archipiélago de San Andrés, Providencia y Santa Catalina está a más de 700 km del territorio continental.",
  },
  {
    id: 20,
    categoria: "geografia",
    dificultad: "medio",
    enunciado: "¿Cuántos países tienen frontera terrestre con Colombia?",
    opciones: ["Tres", "Cuatro", "Seis", "Cinco"],
    correcta: 3,
    explicacion:
      "Colombia limita por tierra con Venezuela, Brasil, Perú, Ecuador y Panamá.",
  },
  {
    id: 21,
    categoria: "geografia",
    dificultad: "dificil",
    enunciado: "¿Cuál es el pico más alto de Colombia?",
    opciones: [
      "Pico Cristóbal Colón",
      "Nevado del Huila",
      "Nevado del Ruiz",
      "Ritacuba Blanco",
    ],
    correcta: 0,
    explicacion:
      "El pico Cristóbal Colón, en la Sierra Nevada de Santa Marta, supera los 5.700 metros.",
  },
  {
    id: 22,
    categoria: "geografia",
    dificultad: "dificil",
    enunciado: "¿En qué lugar nacen los ríos Magdalena y Cauca?",
    opciones: [
      "Nudo de los Pastos",
      "Nudo de Paramillo",
      "Macizo Colombiano",
      "Sierra de la Macarena",
    ],
    correcta: 2,
    explicacion:
      "El Macizo Colombiano es la «estrella fluvial» donde nacen el Magdalena, el Cauca, el Caquetá y el Patía.",
  },
  {
    id: 23,
    categoria: "geografia",
    dificultad: "dificil",
    enunciado: "¿Cuál es la capital del departamento de Vichada?",
    opciones: ["Puerto Carreño", "Inírida", "Mitú", "San José del Guaviare"],
    correcta: 0,
    explicacion:
      "Puerto Carreño está a orillas del río Orinoco, en la frontera con Venezuela.",
  },
  {
    id: 24,
    categoria: "geografia",
    dificultad: "dificil",
    enunciado:
      "¿Cuál es el único departamento colombiano con costas en el océano Pacífico y en el mar Caribe?",
    opciones: ["Antioquia", "Chocó", "Nariño", "Córdoba"],
    correcta: 1,
    explicacion:
      "Chocó es el único departamento con costas sobre los dos mares.",
  },
  {
    id: 25,
    categoria: "geografia",
    dificultad: "dificil",
    enunciado: "¿Cuál es el lago natural más grande de Colombia?",
    opciones: [
      "Laguna de la Cocha",
      "Lago de Tota",
      "Laguna de Fúquene",
      "Laguna de Guatavita",
    ],
    correcta: 1,
    explicacion:
      "El lago de Tota, en Boyacá, es el más grande del país y está a unos 3.000 metros de altura.",
  },
  {
    id: 26,
    categoria: "geografia",
    dificultad: "dificil",
    enunciado: "¿Cuál es la capital del departamento de Guainía?",
    opciones: ["Mitú", "Puerto Carreño", "Inírida", "Leticia"],
    correcta: 2,
    explicacion:
      "Inírida es la capital de Guainía, cerca de los cerros de Mavecure.",
  },
  {
    id: 27,
    categoria: "geografia",
    dificultad: "dificil",
    enunciado:
      "¿Qué río marca gran parte de la frontera entre Colombia y Perú?",
    opciones: ["Río Caquetá", "Río Vaupés", "Río Putumayo", "Río Guaviare"],
    correcta: 2,
    explicacion:
      "El río Putumayo sirve de límite natural con Perú en la mayor parte de la frontera.",
  },
  {
    id: 28,
    categoria: "geografia",
    dificultad: "dificil",
    enunciado: "¿En qué departamento se encuentra la Serranía de la Macarena?",
    opciones: ["Guaviare", "Caquetá", "Meta", "Casanare"],
    correcta: 2,
    explicacion:
      "La Serranía de la Macarena, hogar de Caño Cristales, está en el departamento del Meta.",
  },
  {
    id: 29,
    categoria: "geografia",
    dificultad: "dificil",
    enunciado: "¿Cuál es el páramo más grande del mundo, ubicado en Colombia?",
    opciones: [
      "Páramo de Sumapaz",
      "Páramo de Santurbán",
      "Páramo de Chingaza",
      "Páramo de Pisba",
    ],
    correcta: 0,
    explicacion:
      "El páramo de Sumapaz, al sur de Bogotá, es considerado el más extenso del planeta.",
  },
  {
    id: 30,
    categoria: "geografia",
    dificultad: "dificil",
    enunciado:
      "¿Qué isla colombiana del Pacífico está a unos 500 km de la costa y es santuario de fauna y flora?",
    opciones: [
      "Isla de Malpelo",
      "Isla Gorgona",
      "Isla Gorgonilla",
      "Isla Fuerte",
    ],
    correcta: 0,
    explicacion:
      "Malpelo es Patrimonio Natural de la Humanidad y es famosa por sus tiburones.",
  },

  // ===== HISTORIA =====
  {
    id: 31,
    categoria: "historia",
    dificultad: "facil",
    enunciado: "¿En qué año se firmó el Acta de Independencia de Colombia?",
    opciones: ["1819", "1810", "1830", "1886"],
    correcta: 1,
    explicacion:
      "El Acta de Independencia se firmó en Santa Fe el 20 de julio de 1810.",
  },
  {
    id: 32,
    categoria: "historia",
    dificultad: "facil",
    enunciado: "¿Qué día se celebra el Día de la Independencia de Colombia?",
    opciones: [
      "7 de agosto",
      "12 de octubre",
      "20 de julio",
      "11 de noviembre",
    ],
    correcta: 2,
    explicacion:
      "El 20 de julio se conmemora el grito de independencia de 1810.",
  },
  {
    id: 33,
    categoria: "historia",
    dificultad: "facil",
    enunciado: "¿Quién es conocido como «El Libertador»?",
    opciones: [
      "Francisco de Paula Santander",
      "Antonio Nariño",
      "Antonio José de Sucre",
      "Simón Bolívar",
    ],
    correcta: 3,
    explicacion:
      "Simón Bolívar lideró la independencia de varios países de Suramérica.",
  },
  {
    id: 34,
    categoria: "historia",
    dificultad: "facil",
    enunciado:
      "¿Qué batalla del 7 de agosto de 1819 selló la independencia de la Nueva Granada?",
    opciones: [
      "Batalla del Pantano de Vargas",
      "Batalla de Boyacá",
      "Batalla de Carabobo",
      "Batalla de Ayacucho",
    ],
    correcta: 1,
    explicacion:
      "La batalla del Puente de Boyacá abrió el camino de los patriotas hacia Santa Fe.",
  },
  {
    id: 35,
    categoria: "historia",
    dificultad: "facil",
    enunciado: "¿Cuáles son los colores de la bandera de Colombia?",
    opciones: [
      "Verde, blanco y rojo",
      "Azul, blanco y rojo",
      "Amarillo, verde y rojo",
      "Amarillo, azul y rojo",
    ],
    correcta: 3,
    explicacion:
      "La bandera tiene tres franjas: amarilla (la mitad), azul y roja.",
  },
  {
    id: 36,
    categoria: "historia",
    dificultad: "facil",
    enunciado: "¿Quién es conocido como «El Hombre de las Leyes»?",
    opciones: [
      "Simón Bolívar",
      "Francisco de Paula Santander",
      "Antonio Nariño",
      "Camilo Torres",
    ],
    correcta: 1,
    explicacion:
      "Santander recibió ese nombre por su defensa de las leyes y las instituciones.",
  },
  {
    id: 37,
    categoria: "historia",
    dificultad: "facil",
    enunciado:
      "Según la tradición, ¿qué objeto originó la disputa del 20 de julio de 1810?",
    opciones: ["Una espada", "Una bandera", "Un sombrero", "Un florero"],
    correcta: 3,
    explicacion:
      "El «Florero de Llorente» fue el pretexto que encendió la revuelta en Santa Fe.",
  },
  {
    id: 38,
    categoria: "historia",
    dificultad: "facil",
    enunciado:
      "¿Qué pueblo indígena habitaba el altiplano cundiboyacense a la llegada de los españoles?",
    opciones: ["Muiscas", "Taironas", "Wayuu", "Quimbayas"],
    correcta: 0,
    explicacion: "Los muiscas habitaban los actuales Cundinamarca y Boyacá.",
  },
  {
    id: 39,
    categoria: "historia",
    dificultad: "facil",
    enunciado:
      "¿En qué año se promulgó la Constitución Política que rige actualmente en Colombia?",
    opciones: ["1886", "1810", "1991", "2001"],
    correcta: 2,
    explicacion: "La Constitución de 1991 reemplazó a la de 1886.",
  },
  {
    id: 40,
    categoria: "historia",
    dificultad: "facil",
    enunciado:
      "¿Qué país europeo colonizó el territorio de la actual Colombia?",
    opciones: ["España", "Portugal", "Francia", "Inglaterra"],
    correcta: 0,
    explicacion:
      "El territorio hizo parte del Imperio español hasta la independencia.",
  },
  {
    id: 41,
    categoria: "historia",
    dificultad: "medio",
    enunciado:
      "¿Qué prócer tradujo al español la Declaración de los Derechos del Hombre y del Ciudadano?",
    opciones: [
      "Francisco José de Caldas",
      "Camilo Torres",
      "Antonio Nariño",
      "Francisco de Paula Santander",
    ],
    correcta: 2,
    explicacion:
      "Antonio Nariño, «El Precursor», la tradujo e imprimió en Santa Fe y fue encarcelado por ello.",
  },
  {
    id: 42,
    categoria: "historia",
    dificultad: "medio",
    enunciado:
      "¿Qué heroína de la independencia fue fusilada en Bogotá en 1817?",
    opciones: [
      "Policarpa Salavarrieta",
      "Manuela Beltrán",
      "Antonia Santos",
      "Manuela Sáenz",
    ],
    correcta: 0,
    explicacion:
      "«La Pola» fue fusilada el 14 de noviembre de 1817 por espiar para los patriotas.",
  },
  {
    id: 43,
    categoria: "historia",
    dificultad: "medio",
    enunciado: "¿En qué año se separó Panamá de Colombia?",
    opciones: ["1903", "1886", "1899", "1914"],
    correcta: 0,
    explicacion:
      "Panamá se separó el 3 de noviembre de 1903, poco después de la Guerra de los Mil Días.",
  },
  {
    id: 44,
    categoria: "historia",
    dificultad: "medio",
    enunciado:
      "¿Cómo se conoce la guerra civil que vivió Colombia entre 1899 y 1902?",
    opciones: [
      "Guerra de los Supremos",
      "Guerra de los Mil Días",
      "La Violencia",
      "Guerra con el Perú",
    ],
    correcta: 1,
    explicacion:
      "La Guerra de los Mil Días enfrentó a liberales y conservadores.",
  },
  {
    id: 45,
    categoria: "historia",
    dificultad: "medio",
    enunciado: "¿En qué ciudad murió Simón Bolívar en 1830?",
    opciones: ["Cartagena", "Bogotá", "Caracas", "Santa Marta"],
    correcta: 3,
    explicacion:
      "Bolívar murió el 17 de diciembre de 1830 en la Quinta de San Pedro Alejandrino.",
  },
  {
    id: 46,
    categoria: "historia",
    dificultad: "medio",
    enunciado: "¿Cuál es la ciudad más antigua de Colombia, fundada en 1525?",
    opciones: ["Cartagena", "Santa Marta", "Bogotá", "Popayán"],
    correcta: 1,
    explicacion: "Santa Marta fue fundada por Rodrigo de Bastidas en 1525.",
  },
  {
    id: 47,
    categoria: "historia",
    dificultad: "medio",
    enunciado: "¿Quién fundó Bogotá en 1538?",
    opciones: [
      "Sebastián de Belalcázar",
      "Gonzalo Jiménez de Quesada",
      "Pedro de Heredia",
      "Rodrigo de Bastidas",
    ],
    correcta: 1,
    explicacion:
      "Jiménez de Quesada fundó Santa Fe de Bogotá el 6 de agosto de 1538.",
  },
  {
    id: 48,
    categoria: "historia",
    dificultad: "medio",
    enunciado:
      "¿Qué líder político fue asesinado el 9 de abril de 1948, hecho que originó «El Bogotazo»?",
    opciones: [
      "Rafael Uribe Uribe",
      "Luis Carlos Galán",
      "Laureano Gómez",
      "Jorge Eliécer Gaitán",
    ],
    correcta: 3,
    explicacion:
      "El asesinato de Gaitán desató fuertes disturbios en Bogotá y en todo el país.",
  },
  {
    id: 49,
    categoria: "historia",
    dificultad: "medio",
    enunciado:
      "¿Qué movimiento de 1781 inició en El Socorro, Santander, contra los impuestos de la Corona?",
    opciones: [
      "La Patria Boba",
      "La Campaña Admirable",
      "Insurrección de los Comuneros",
      "La Reconquista",
    ],
    correcta: 2,
    explicacion:
      "La Insurrección de los Comuneros fue una de las primeras grandes protestas contra el gobierno colonial.",
  },
  {
    id: 50,
    categoria: "historia",
    dificultad: "medio",
    enunciado:
      "¿Cómo se llamó la república que unió a la Nueva Granada, Venezuela y Ecuador entre 1819 y 1831?",
    opciones: [
      "Confederación Granadina",
      "Estados Unidos de Colombia",
      "Provincias Unidas",
      "Gran Colombia",
    ],
    correcta: 3,
    explicacion:
      "La Gran Colombia fue el proyecto de unión impulsado por Simón Bolívar.",
  },
  {
    id: 51,
    categoria: "historia",
    dificultad: "dificil",
    enunciado:
      "¿En qué año se aprobó el derecho al voto de las mujeres en Colombia?",
    opciones: ["1936", "1954", "1945", "1961"],
    correcta: 1,
    explicacion:
      "Se aprobó en 1954 y las mujeres votaron por primera vez en el plebiscito de 1957.",
  },
  {
    id: 52,
    categoria: "historia",
    dificultad: "dificil",
    enunciado:
      "¿En qué año se aprobó la ley que abolió definitivamente la esclavitud en Colombia?",
    opciones: ["1821", "1810", "1851", "1863"],
    correcta: 2,
    explicacion:
      "La ley de abolición se aprobó el 21 de mayo de 1851, en el gobierno de José Hilario López.",
  },
  {
    id: 53,
    categoria: "historia",
    dificultad: "dificil",
    enunciado:
      "¿Qué congreso de 1821 dio a la Gran Colombia su primera constitución?",
    opciones: [
      "Congreso de Angostura",
      "Convención de Ocaña",
      "Congreso de Cúcuta",
      "Congreso de Panamá",
    ],
    correcta: 2,
    explicacion:
      "El Congreso de Cúcuta se reunió en Villa del Rosario y redactó la Constitución de 1821.",
  },
  {
    id: 54,
    categoria: "historia",
    dificultad: "dificil",
    enunciado: "¿Cómo se llamó el país entre 1863 y 1886?",
    opciones: [
      "Confederación Granadina",
      "Estados Unidos de Colombia",
      "República de la Nueva Granada",
      "Gran Colombia",
    ],
    correcta: 1,
    explicacion:
      "La Constitución de Rionegro (1863) creó los Estados Unidos de Colombia.",
  },
  {
    id: 55,
    categoria: "historia",
    dificultad: "dificil",
    enunciado:
      "¿Qué presidente lideró «La Regeneración» e impulsó la Constitución de 1886?",
    opciones: [
      "Tomás Cipriano de Mosquera",
      "Rafael Núñez",
      "Miguel Antonio Caro",
      "Rafael Reyes",
    ],
    correcta: 1,
    explicacion:
      "Rafael Núñez impulsó la Constitución de 1886, que estuvo vigente más de cien años.",
  },
  {
    id: 56,
    categoria: "historia",
    dificultad: "dificil",
    enunciado:
      "¿Cómo se llamó el acuerdo con el que liberales y conservadores se alternaron el poder entre 1958 y 1974?",
    opciones: [
      "La Regeneración",
      "Frente Nacional",
      "Unión Republicana",
      "La Revolución en Marcha",
    ],
    correcta: 1,
    explicacion:
      "En el Frente Nacional los dos partidos se turnaron la presidencia cada cuatro años.",
  },
  {
    id: 57,
    categoria: "historia",
    dificultad: "dificil",
    enunciado:
      "¿Qué militar gobernó Colombia entre 1953 y 1957 tras un golpe de Estado?",
    opciones: [
      "Rafael Reyes",
      "Gustavo Rojas Pinilla",
      "Laureano Gómez",
      "Alberto Lleras Camargo",
    ],
    correcta: 1,
    explicacion:
      "El general Rojas Pinilla tomó el poder el 13 de junio de 1953.",
  },
  {
    id: 58,
    categoria: "historia",
    dificultad: "dificil",
    enunciado:
      "¿Qué mujer rompió el edicto de los nuevos impuestos en El Socorro en 1781?",
    opciones: [
      "Policarpa Salavarrieta",
      "Antonia Santos",
      "Manuela Beltrán",
      "Mercedes Ábrego",
    ],
    correcta: 2,
    explicacion:
      "El gesto de Manuela Beltrán dio inicio a la Insurrección de los Comuneros.",
  },
  {
    id: 59,
    categoria: "historia",
    dificultad: "dificil",
    enunciado:
      "¿Cómo se conoce el período entre 1810 y 1816, marcado por las disputas entre centralistas y federalistas?",
    opciones: [
      "La Reconquista",
      "La Patria Boba",
      "La Regeneración",
      "El Olimpo Radical",
    ],
    correcta: 1,
    explicacion:
      "Las divisiones internas de la «Patria Boba» facilitaron la reconquista española.",
  },
  {
    id: 60,
    categoria: "historia",
    dificultad: "dificil",
    enunciado:
      "¿Qué militar español dirigió la Reconquista de la Nueva Granada en 1816?",
    opciones: [
      "José María Barreiro",
      "Juan de Sámano",
      "Miguel de la Torre",
      "Pablo Morillo",
    ],
    correcta: 3,
    explicacion:
      "Pablo Morillo, «El Pacificador», encabezó el llamado Régimen del Terror.",
  },

  // ===== CULTURA =====
  {
    id: 61,
    categoria: "cultura",
    dificultad: "facil",
    enunciado: "¿Quién escribió la novela «Cien años de soledad»?",
    opciones: [
      "Álvaro Mutis",
      "Jorge Isaacs",
      "Rafael Pombo",
      "Gabriel García Márquez",
    ],
    correcta: 3,
    explicacion: "García Márquez publicó «Cien años de soledad» en 1967.",
  },
  {
    id: 62,
    categoria: "cultura",
    dificultad: "facil",
    enunciado: "¿Cuál es el plato típico más representativo de Antioquia?",
    opciones: ["Ajiaco", "Bandeja paisa", "Sancocho de pescado", "Lechona"],
    correcta: 1,
    explicacion:
      "La bandeja paisa lleva fríjoles, arroz, chicharrón, carne molida, huevo, plátano y arepa.",
  },
  {
    id: 63,
    categoria: "cultura",
    dificultad: "facil",
    enunciado:
      "¿Qué sopa típica de Bogotá se prepara con pollo, varias clases de papa y guascas?",
    opciones: ["Mondongo", "Ajiaco", "Mote de queso", "Cuchuco"],
    correcta: 1,
    explicacion:
      "El ajiaco santafereño se sirve con mazorca, alcaparras y crema de leche.",
  },
  {
    id: 64,
    categoria: "cultura",
    dificultad: "facil",
    enunciado:
      "¿Qué producto agrícola colombiano es famoso en el mundo por su suavidad y calidad?",
    opciones: ["El café", "El trigo", "El té", "La cebada"],
    correcta: 0,
    explicacion:
      "El café colombiano se cultiva en las montañas y es reconocido internacionalmente.",
  },
  {
    id: 65,
    categoria: "cultura",
    dificultad: "facil",
    enunciado:
      "¿Qué sombrero tradicional de la costa Caribe es un símbolo cultural de Colombia?",
    opciones: [
      "Sombrero aguadeño",
      "Sombrero llanero",
      "Sombrero de copa",
      "Sombrero vueltiao",
    ],
    correcta: 3,
    explicacion: "El sombrero vueltiao se teje con fibra de caña flecha.",
  },
  {
    id: 66,
    categoria: "cultura",
    dificultad: "facil",
    enunciado:
      "¿Qué cantante barranquillera es mundialmente famosa por canciones como «Hips Don't Lie»?",
    opciones: ["Karol G", "Fanny Lu", "Shakira", "Totó la Momposina"],
    correcta: 2,
    explicacion: "Shakira nació en Barranquilla en 1977.",
  },
  {
    id: 67,
    categoria: "cultura",
    dificultad: "facil",
    enunciado:
      "¿Qué artista de Medellín es famoso por sus figuras voluminosas?",
    opciones: [
      "Alejandro Obregón",
      "Enrique Grau",
      "Fernando Botero",
      "Omar Rayo",
    ],
    correcta: 2,
    explicacion:
      "Las pinturas y esculturas de Fernando Botero se reconocen por sus formas exageradas.",
  },
  {
    id: 68,
    categoria: "cultura",
    dificultad: "facil",
    enunciado:
      "¿Qué alimento redondo hecho de maíz acompaña muchas comidas en Colombia?",
    opciones: ["La arepa", "El tamal", "El envuelto", "La almojábana"],
    correcta: 0,
    explicacion:
      "La arepa tiene decenas de variedades regionales en todo el país.",
  },
  {
    id: 69,
    categoria: "cultura",
    dificultad: "facil",
    enunciado:
      "¿Qué género musical se interpreta con acordeón, caja y guacharaca?",
    opciones: ["Vallenato", "Cumbia", "Joropo", "Bambuco"],
    correcta: 0,
    explicacion:
      "El vallenato nació en la región de Valledupar y es Patrimonio Inmaterial de la Humanidad.",
  },
  {
    id: 70,
    categoria: "cultura",
    dificultad: "facil",
    enunciado: "¿En qué ciudad se celebra la Feria de las Flores?",
    opciones: ["Medellín", "Cali", "Manizales", "Pereira"],
    correcta: 0,
    explicacion:
      "La Feria de las Flores se celebra en agosto, con el tradicional Desfile de Silleteros.",
  },
  {
    id: 71,
    categoria: "cultura",
    dificultad: "medio",
    enunciado:
      "¿En qué ciudad se celebra el carnaval declarado Patrimonio de la Humanidad por la UNESCO?",
    opciones: ["Cartagena", "Barranquilla", "Cali", "Medellín"],
    correcta: 1,
    explicacion:
      "El Carnaval de Barranquilla fue proclamado por la UNESCO en 2003.",
  },
  {
    id: 72,
    categoria: "cultura",
    dificultad: "medio",
    enunciado:
      "¿En qué año recibió Gabriel García Márquez el Premio Nobel de Literatura?",
    opciones: ["1982", "1967", "1975", "1990"],
    correcta: 0,
    explicacion: "García Márquez recibió el Nobel en Estocolmo en 1982.",
  },
  {
    id: 73,
    categoria: "cultura",
    dificultad: "medio",
    enunciado: "¿En qué ciudad se celebra el Carnaval de Negros y Blancos?",
    opciones: ["Popayán", "Pasto", "Ipiales", "Tumaco"],
    correcta: 1,
    explicacion:
      "El Carnaval de Negros y Blancos se celebra en Pasto a comienzos de enero.",
  },
  {
    id: 74,
    categoria: "cultura",
    dificultad: "medio",
    enunciado:
      "¿Qué plato típico del Tolima consiste en un cerdo relleno y horneado?",
    opciones: ["Tamal", "Fritanga", "Cabrito", "Lechona"],
    correcta: 3,
    explicacion:
      "La lechona tolimense se rellena con carne de cerdo y arveja y se hornea durante horas.",
  },
  {
    id: 75,
    categoria: "cultura",
    dificultad: "medio",
    enunciado: "¿Qué festival musical se celebra cada año en Valledupar?",
    opciones: [
      "Festival del Bambuco",
      "Festival de la Leyenda Vallenata",
      "Festival del Porro",
      "Festival de la Cumbia",
    ],
    correcta: 1,
    explicacion:
      "En el Festival de la Leyenda Vallenata se corona al Rey Vallenato del acordeón.",
  },
  {
    id: 76,
    categoria: "cultura",
    dificultad: "medio",
    enunciado: "¿Qué ciudad es conocida como la «capital mundial de la salsa»?",
    opciones: ["Barranquilla", "Cali", "Medellín", "Cartagena"],
    correcta: 1,
    explicacion:
      "Cali es famosa por sus escuelas de salsa y por la Feria de Cali.",
  },
  {
    id: 77,
    categoria: "cultura",
    dificultad: "medio",
    enunciado:
      "¿Qué baile y género musical es típico de los Llanos Orientales?",
    opciones: ["Currulao", "Mapalé", "Sanjuanero", "Joropo"],
    correcta: 3,
    explicacion: "El joropo se interpreta con arpa, cuatro y maracas.",
  },
  {
    id: 78,
    categoria: "cultura",
    dificultad: "medio",
    enunciado: "¿Quién escribió la novela «María»?",
    opciones: [
      "Jorge Isaacs",
      "José Eustasio Rivera",
      "Tomás Carrasquilla",
      "José Asunción Silva",
    ],
    correcta: 0,
    explicacion:
      "Jorge Isaacs publicó «María» en 1867; la historia transcurre en el Valle del Cauca.",
  },
  {
    id: 79,
    categoria: "cultura",
    dificultad: "medio",
    enunciado: "¿Qué insecto tostado es un manjar tradicional de Santander?",
    opciones: [
      "El mojojoy",
      "El saltamontes",
      "El escarabajo",
      "La hormiga culona",
    ],
    correcta: 3,
    explicacion:
      "Las hormigas culonas se recogen en la temporada de lluvias y se comen tostadas con sal.",
  },
  {
    id: 80,
    categoria: "cultura",
    dificultad: "medio",
    enunciado:
      "¿Qué ciudad es famosa por las procesiones de su Semana Santa, declaradas patrimonio por la UNESCO?",
    opciones: ["Mompox", "Popayán", "Pamplona", "Tunja"],
    correcta: 1,
    explicacion:
      "Las procesiones de Popayán se celebran desde la época colonial.",
  },
  {
    id: 81,
    categoria: "cultura",
    dificultad: "dificil",
    enunciado: "¿Quién escribió la novela «La vorágine»?",
    opciones: [
      "Jorge Isaacs",
      "Tomás Carrasquilla",
      "Eduardo Caballero Calderón",
      "José Eustasio Rivera",
    ],
    correcta: 3,
    explicacion:
      "«La vorágine» se publicó en 1924 y denuncia la explotación del caucho en la selva.",
  },
  {
    id: 82,
    categoria: "cultura",
    dificultad: "dificil",
    enunciado:
      "¿Qué pueblo indígena de La Guajira es reconocido por sus mochilas tejidas de colores?",
    opciones: ["Kogui", "Zenú", "Wayuu", "Embera"],
    correcta: 2,
    explicacion:
      "El tejido wayuu se transmite de generación en generación entre las mujeres.",
  },
  {
    id: 83,
    categoria: "cultura",
    dificultad: "dificil",
    enunciado: "¿Qué pueblo indígena creó el sombrero vueltiao?",
    opciones: ["Wayuu", "Muisca", "Zenú", "Arhuaco"],
    correcta: 2,
    explicacion:
      "El pueblo zenú, de Córdoba y Sucre, teje el sombrero vueltiao con caña flecha.",
  },
  {
    id: 84,
    categoria: "cultura",
    dificultad: "dificil",
    enunciado: "¿Quién compuso la música del Himno Nacional de Colombia?",
    opciones: [
      "Rafael Núñez",
      "José Rozo Contreras",
      "Oreste Síndici",
      "Luis A. Calvo",
    ],
    correcta: 2,
    explicacion:
      "El italiano Oreste Síndici compuso la música; la letra es de Rafael Núñez.",
  },
  {
    id: 85,
    categoria: "cultura",
    dificultad: "dificil",
    enunciado: "¿Qué escritor colombiano recibió el Premio Cervantes en 2001?",
    opciones: [
      "Gabriel García Márquez",
      "Álvaro Mutis",
      "Fernando Vallejo",
      "William Ospina",
    ],
    correcta: 1,
    explicacion: "Álvaro Mutis es el creador del personaje Maqroll el Gaviero.",
  },
  {
    id: 86,
    categoria: "cultura",
    dificultad: "dificil",
    enunciado: "¿Quién compuso la canción «Colombia tierra querida»?",
    opciones: [
      "José Barros",
      "Pacho Galán",
      "Lucho Bermúdez",
      "Rafael Escalona",
    ],
    correcta: 2,
    explicacion:
      "Lucho Bermúdez, nacido en El Carmen de Bolívar, compuso esta famosa cumbia.",
  },
  {
    id: 87,
    categoria: "cultura",
    dificultad: "dificil",
    enunciado: "¿Quién compuso la cumbia «La piragua»?",
    opciones: [
      "José Barros",
      "Lucho Bermúdez",
      "Rafael Escalona",
      "Crescencio Salcedo",
    ],
    correcta: 0,
    explicacion:
      "José Barros, nacido en El Banco (Magdalena), compuso «La piragua».",
  },
  {
    id: 88,
    categoria: "cultura",
    dificultad: "dificil",
    enunciado:
      "¿Qué instrumento de cuerda es considerado el instrumento nacional de Colombia?",
    opciones: ["El cuatro", "La bandola", "El tiple", "El charango"],
    correcta: 2,
    explicacion:
      "El tiple tiene doce cuerdas y acompaña bambucos y pasillos de la región andina.",
  },
  {
    id: 89,
    categoria: "cultura",
    dificultad: "dificil",
    enunciado: "¿Qué poeta bogotano escribió el poema «Nocturno III»?",
    opciones: [
      "Rafael Pombo",
      "José Asunción Silva",
      "Guillermo Valencia",
      "Porfirio Barba Jacob",
    ],
    correcta: 1,
    explicacion:
      "José Asunción Silva es uno de los precursores del modernismo.",
  },
  {
    id: 90,
    categoria: "cultura",
    dificultad: "dificil",
    enunciado: "¿A qué municipio de Bolívar pertenece San Basilio de Palenque?",
    opciones: ["Mahates", "Turbaco", "Arjona", "María La Baja"],
    correcta: 0,
    explicacion:
      "San Basilio de Palenque, corregimiento de Mahates, es considerado el primer pueblo libre de América.",
  },

  // ===== DEPORTES =====
  {
    id: 91,
    categoria: "deportes",
    dificultad: "facil",
    enunciado: "¿Cuál es el deporte nacional de Colombia?",
    opciones: ["El fútbol", "El tejo", "El ciclismo", "El béisbol"],
    correcta: 1,
    explicacion:
      "El tejo fue declarado deporte nacional por ley en el año 2000.",
  },
  {
    id: 92,
    categoria: "deportes",
    dificultad: "facil",
    enunciado:
      "¿Qué futbolista colombiano fue el goleador del Mundial de Brasil 2014?",
    opciones: [
      "Radamel Falcao García",
      "James Rodríguez",
      "Juan Guillermo Cuadrado",
      "Teófilo Gutiérrez",
    ],
    correcta: 1,
    explicacion: "James Rodríguez ganó la Bota de Oro con 6 goles.",
  },
  {
    id: 93,
    categoria: "deportes",
    dificultad: "facil",
    enunciado:
      "¿De qué color es la camiseta principal de la Selección Colombia de fútbol?",
    opciones: ["Amarilla", "Verde", "Blanca", "Naranja"],
    correcta: 0,
    explicacion: "La camiseta amarilla es la más tradicional de la «Tricolor».",
  },
  {
    id: 94,
    categoria: "deportes",
    dificultad: "facil",
    enunciado: "¿Qué futbolista colombiano es conocido como «El Tigre»?",
    opciones: [
      "James Rodríguez",
      "Carlos Bacca",
      "Radamel Falcao García",
      "Luis Díaz",
    ],
    correcta: 2,
    explicacion:
      "Falcao García es uno de los grandes goleadores de la historia de la Selección.",
  },
  {
    id: 95,
    categoria: "deportes",
    dificultad: "facil",
    enunciado:
      "¿Qué exfutbolista de cabellera rubia es conocido como «El Pibe»?",
    opciones: [
      "René Higuita",
      "Faustino Asprilla",
      "Carlos Valderrama",
      "Freddy Rincón",
    ],
    correcta: 2,
    explicacion:
      "«El Pibe» Valderrama fue capitán de Colombia en tres mundiales.",
  },
  {
    id: 96,
    categoria: "deportes",
    dificultad: "facil",
    enunciado: "¿En qué deporte se destaca Mariana Pajón?",
    opciones: ["Natación", "Atletismo", "Ciclismo BMX", "Tenis"],
    correcta: 2,
    explicacion: "Mariana Pajón es conocida como «la Reina del BMX».",
  },
  {
    id: 97,
    categoria: "deportes",
    dificultad: "facil",
    enunciado:
      "¿En qué ciudad está el estadio Metropolitano, donde la Selección Colombia suele jugar de local?",
    opciones: ["Bogotá", "Barranquilla", "Medellín", "Cali"],
    correcta: 1,
    explicacion:
      "El estadio Metropolitano Roberto Meléndez está en Barranquilla.",
  },
  {
    id: 98,
    categoria: "deportes",
    dificultad: "facil",
    enunciado:
      "¿Qué atleta colombiana ganó la medalla de oro en salto triple en los Olímpicos de Río 2016?",
    opciones: [
      "Mariana Pajón",
      "Ximena Restrepo",
      "Yuri Alvear",
      "Caterine Ibargüen",
    ],
    correcta: 3,
    explicacion:
      "Caterine Ibargüen también fue campeona mundial de salto triple.",
  },
  {
    id: 99,
    categoria: "deportes",
    dificultad: "facil",
    enunciado: "¿Qué piloto bogotano ganó carreras en la Fórmula 1?",
    opciones: [
      "Roberto Guerrero",
      "Carlos Muñoz",
      "Sebastián Saavedra",
      "Juan Pablo Montoya",
    ],
    correcta: 3,
    explicacion:
      "Montoya ganó 7 grandes premios de Fórmula 1, entre ellos el de Mónaco.",
  },
  {
    id: 100,
    categoria: "deportes",
    dificultad: "facil",
    enunciado:
      "¿Qué arquero colombiano se hizo famoso por la jugada del «Escorpión»?",
    opciones: [
      "Óscar Córdoba",
      "René Higuita",
      "Faryd Mondragón",
      "David Ospina",
    ],
    correcta: 1,
    explicacion:
      "Higuita hizo el «Escorpión» en 1995 en el estadio de Wembley.",
  },
  {
    id: 101,
    categoria: "deportes",
    dificultad: "medio",
    enunciado: "¿Qué ciclista colombiano ganó el Tour de Francia en 2019?",
    opciones: [
      "Nairo Quintana",
      "Rigoberto Urán",
      "Lucho Herrera",
      "Egan Bernal",
    ],
    correcta: 3,
    explicacion:
      "Egan Bernal, de Zipaquirá, fue el primer latinoamericano en ganar el Tour.",
  },
  {
    id: 102,
    categoria: "deportes",
    dificultad: "medio",
    enunciado: "¿Qué ciclista boyacense ganó el Giro de Italia en 2014?",
    opciones: [
      "Rigoberto Urán",
      "Nairo Quintana",
      "Esteban Chaves",
      "Miguel Ángel López",
    ],
    correcta: 1,
    explicacion: "Nairo Quintana también ganó la Vuelta a España en 2016.",
  },
  {
    id: 103,
    categoria: "deportes",
    dificultad: "medio",
    enunciado:
      "¿En qué año ganó la Selección Colombia de mayores su primera Copa América?",
    opciones: ["1993", "2001", "1998", "2014"],
    correcta: 1,
    explicacion:
      "Colombia fue campeona de la Copa América 2001 como local y sin recibir goles.",
  },
  {
    id: 104,
    categoria: "deportes",
    dificultad: "medio",
    enunciado:
      "¿Qué club ganó en 1989 la primera Copa Libertadores para Colombia?",
    opciones: [
      "América de Cali",
      "Millonarios",
      "Deportivo Cali",
      "Atlético Nacional",
    ],
    correcta: 3,
    explicacion:
      "Atlético Nacional venció a Olimpia de Paraguay en la definición por penales.",
  },
  {
    id: 105,
    categoria: "deportes",
    dificultad: "medio",
    enunciado: "¿Quién ganó la primera medalla de oro olímpica para Colombia?",
    opciones: [
      "María Isabel Urrutia",
      "Mariana Pajón",
      "Caterine Ibargüen",
      "Ximena Restrepo",
    ],
    correcta: 0,
    explicacion:
      "María Isabel Urrutia ganó el oro en levantamiento de pesas en Sídney 2000.",
  },
  {
    id: 106,
    categoria: "deportes",
    dificultad: "medio",
    enunciado: "¿Cuántas medallas de oro olímpicas ha ganado Mariana Pajón?",
    opciones: ["Una", "Tres", "Dos", "Cuatro"],
    correcta: 2,
    explicacion: "Mariana Pajón ganó el oro en Londres 2012 y en Río 2016.",
  },
  {
    id: 107,
    categoria: "deportes",
    dificultad: "medio",
    enunciado:
      "¿Qué beisbolista barranquillero fue el Jugador Más Valioso de la Serie Mundial de 2010?",
    opciones: [
      "Édgar Rentería",
      "Orlando Cabrera",
      "Julio Teherán",
      "José Quintana",
    ],
    correcta: 0,
    explicacion:
      "Édgar Rentería ganó ese premio con los Gigantes de San Francisco.",
  },
  {
    id: 108,
    categoria: "deportes",
    dificultad: "medio",
    enunciado: "¿Qué equipo colombiano ganó la Copa Libertadores en 2004?",
    opciones: [
      "Once Caldas",
      "Atlético Nacional",
      "Deportivo Cali",
      "Independiente Medellín",
    ],
    correcta: 0,
    explicacion:
      "Once Caldas, de Manizales, venció a Boca Juniors en la final.",
  },
  {
    id: 109,
    categoria: "deportes",
    dificultad: "medio",
    enunciado:
      "¿En qué ciudad colombiana se realizaron los Juegos Panamericanos de 1971?",
    opciones: ["Cali", "Bogotá", "Medellín", "Barranquilla"],
    correcta: 0,
    explicacion:
      "Por esos juegos Cali es conocida como la «capital deportiva» de Colombia.",
  },
  {
    id: 110,
    categoria: "deportes",
    dificultad: "medio",
    enunciado: "¿A qué selección goleó Colombia 5-0 como visitante en 1993?",
    opciones: ["Brasil", "Uruguay", "Argentina", "Perú"],
    correcta: 2,
    explicacion:
      "El 5-0 se jugó en Buenos Aires el 5 de septiembre de 1993, por las eliminatorias al Mundial.",
  },
  {
    id: 111,
    categoria: "deportes",
    dificultad: "dificil",
    enunciado:
      "¿Quién ganó la primera medalla olímpica de la historia de Colombia?",
    opciones: [
      "Clemente Rojas",
      "Alfonso Pérez",
      "Helmut Bellingrodt",
      "Jorge Eliécer Julio",
    ],
    correcta: 2,
    explicacion:
      "Helmut Bellingrodt ganó la plata en tiro deportivo en Múnich 1972.",
  },
  {
    id: 112,
    categoria: "deportes",
    dificultad: "dificil",
    enunciado: "¿Qué ciclista colombiano ganó la Vuelta a España en 1987?",
    opciones: [
      "Fabio Parra",
      "Oliverio Rincón",
      "Álvaro Mejía",
      "Lucho Herrera",
    ],
    correcta: 3,
    explicacion:
      "Luis «Lucho» Herrera, «El Jardinerito de Fusagasugá», ganó la Vuelta de 1987.",
  },
  {
    id: 113,
    categoria: "deportes",
    dificultad: "dificil",
    enunciado: "¿Cuál es el nombre del boxeador conocido como «Kid Pambelé»?",
    opciones: [
      "Antonio Cervantes",
      "Rodrigo Valdez",
      "Miguel «Happy» Lora",
      "Fidel Bassa",
    ],
    correcta: 0,
    explicacion:
      "Antonio Cervantes, de San Basilio de Palenque, fue campeón mundial desde 1972.",
  },
  {
    id: 114,
    categoria: "deportes",
    dificultad: "dificil",
    enunciado:
      "¿En qué año participó Colombia por primera vez en un Mundial de fútbol?",
    opciones: ["1962", "1950", "1974", "1990"],
    correcta: 0,
    explicacion: "Colombia debutó en el Mundial de Chile 1962.",
  },
  {
    id: 115,
    categoria: "deportes",
    dificultad: "dificil",
    enunciado:
      "¿Contra qué selección empató Colombia 4-4 en el Mundial de 1962?",
    opciones: ["Unión Soviética", "Uruguay", "Yugoslavia", "Chile"],
    correcta: 0,
    explicacion:
      "En ese partido Marcos Coll anotó el único gol olímpico de la historia de los mundiales.",
  },
  {
    id: 116,
    categoria: "deportes",
    dificultad: "dificil",
    enunciado:
      "¿Qué ciclista antioqueño fue campeón mundial de persecución individual en 1971?",
    opciones: [
      "Rafael Antonio Niño",
      "Efraín «El Zipa» Forero",
      "Martín Emilio «Cochise» Rodríguez",
      "Ramón Hoyos",
    ],
    correcta: 2,
    explicacion:
      "«Cochise» Rodríguez también impuso el récord mundial aficionado de la hora en 1970.",
  },
  {
    id: 117,
    categoria: "deportes",
    dificultad: "dificil",
    enunciado:
      "¿Qué pesista colombiano ganó la medalla de oro en los Juegos Olímpicos de Río 2016?",
    opciones: [
      "Luis Javier Mosquera",
      "Diego Salazar",
      "Jhonatan Rivas",
      "Óscar Figueroa",
    ],
    correcta: 3,
    explicacion: "Óscar Figueroa ganó el oro en la categoría de 62 kg.",
  },
  {
    id: 118,
    categoria: "deportes",
    dificultad: "dificil",
    enunciado: "¿Qué golfista antioqueño es apodado «El Hombre Araña»?",
    opciones: [
      "Sebastián Muñoz",
      "Camilo Villegas",
      "Nicolás Echavarría",
      "Marcelo Rozo",
    ],
    correcta: 1,
    explicacion:
      "Camilo Villegas recibió ese apodo por la forma en que se agacha para leer los greens.",
  },
  {
    id: 119,
    categoria: "deportes",
    dificultad: "dificil",
    enunciado:
      "¿Qué pareja de tenistas colombianos ganó el título de dobles de Wimbledon en 2019?",
    opciones: [
      "Santiago Giraldo y Alejandro Falla",
      "Daniel Galán y Nicolás Mejía",
      "Alejandro González y Nicolás Barrientos",
      "Juan Sebastián Cabal y Robert Farah",
    ],
    correcta: 3,
    explicacion: "Cabal y Farah también ganaron el US Open ese mismo año.",
  },
  {
    id: 120,
    categoria: "deportes",
    dificultad: "dificil",
    enunciado:
      "¿Qué técnico dirigió a la Selección Colombia campeona de la Copa América 2001?",
    opciones: [
      "Hernán Darío Gómez",
      "Francisco Maturana",
      "Reinaldo Rueda",
      "Jorge Luis Pinto",
    ],
    correcta: 1,
    explicacion:
      "Francisco «Pacho» Maturana dirigió al equipo campeón de 2001.",
  },

  // ===== NATURALEZA =====
  {
    id: 121,
    categoria: "naturaleza",
    dificultad: "facil",
    enunciado: "¿Cuál es el ave nacional de Colombia?",
    opciones: ["Guacamaya", "Cóndor de los Andes", "Colibrí", "Tucán"],
    correcta: 1,
    explicacion: "El cóndor de los Andes aparece en el escudo nacional.",
  },
  {
    id: 122,
    categoria: "naturaleza",
    dificultad: "facil",
    enunciado: "¿Cuál es la flor nacional de Colombia?",
    opciones: ["La rosa", "El girasol", "La orquídea", "El clavel"],
    correcta: 2,
    explicacion: "La orquídea «Cattleya trianae» es la flor nacional.",
  },
  {
    id: 123,
    categoria: "naturaleza",
    dificultad: "facil",
    enunciado: "¿Cuál es el árbol nacional de Colombia?",
    opciones: ["Palma de cera del Quindío", "Ceiba", "Guayacán", "Roble"],
    correcta: 0,
    explicacion: "La palma de cera puede superar los 50 metros de altura.",
  },
  {
    id: 124,
    categoria: "naturaleza",
    dificultad: "facil",
    enunciado: "¿Qué gran selva cubre el sur de Colombia?",
    opciones: [
      "La selva del Darién",
      "La selva amazónica",
      "El bosque de niebla",
      "La selva del Congo",
    ],
    correcta: 1,
    explicacion: "La Amazonía ocupa más del 40 % del territorio colombiano.",
  },
  {
    id: 125,
    categoria: "naturaleza",
    dificultad: "facil",
    enunciado:
      "¿Qué piedra preciosa verde ha hecho famosa a Colombia en el mundo?",
    opciones: ["El rubí", "La esmeralda", "El zafiro", "El diamante"],
    correcta: 1,
    explicacion:
      "Las esmeraldas colombianas, sobre todo las de Boyacá, están entre las más valoradas.",
  },
  {
    id: 126,
    categoria: "naturaleza",
    dificultad: "facil",
    enunciado:
      "¿En qué valle del Quindío se pueden ver las palmas de cera más famosas?",
    opciones: [
      "Valle de Tenza",
      "Valle de Aburrá",
      "Valle del Sibundoy",
      "Valle de Cocora",
    ],
    correcta: 3,
    explicacion: "El valle de Cocora está cerca de Salento, en el Quindío.",
  },
  {
    id: 127,
    categoria: "naturaleza",
    dificultad: "facil",
    enunciado:
      "¿Qué mamífero de color rosado habita los ríos Amazonas y Orinoco?",
    opciones: [
      "El manatí",
      "La nutria gigante",
      "El delfín rosado",
      "El chigüiro",
    ],
    correcta: 2,
    explicacion: "El delfín rosado también es conocido como tonina o bufeo.",
  },
  {
    id: 128,
    categoria: "naturaleza",
    dificultad: "facil",
    enunciado:
      "¿Cuál es el felino más grande de América, que habita las selvas colombianas?",
    opciones: ["El puma", "El ocelote", "El jaguar", "El tigrillo"],
    correcta: 2,
    explicacion: "El jaguar es el tercer felino más grande del mundo.",
  },
  {
    id: 129,
    categoria: "naturaleza",
    dificultad: "facil",
    enunciado:
      "¿Cuál es el único oso que vive en Suramérica y habita los Andes colombianos?",
    opciones: [
      "El oso pardo",
      "El oso negro",
      "El oso panda",
      "El oso de anteojos",
    ],
    correcta: 3,
    explicacion:
      "El oso de anteojos u oso andino debe su nombre a las manchas claras de su cara.",
  },
  {
    id: 130,
    categoria: "naturaleza",
    dificultad: "facil",
    enunciado:
      "Colombia es el país del mundo con más especies de un grupo de animales. ¿Cuál?",
    opciones: ["Mamíferos", "Reptiles", "Aves", "Peces"],
    correcta: 2,
    explicacion:
      "Colombia ocupa el primer lugar del mundo en número de especies de aves.",
  },
  {
    id: 131,
    categoria: "naturaleza",
    dificultad: "medio",
    enunciado: "¿Qué río es conocido como «el río de los cinco colores»?",
    opciones: ["Río Guatapurí", "Río Claro", "Caño Cristales", "Río Pance"],
    correcta: 2,
    explicacion:
      "Los colores de Caño Cristales se deben a la planta acuática «Macarenia clavigera».",
  },
  {
    id: 132,
    categoria: "naturaleza",
    dificultad: "medio",
    enunciado:
      "¿Qué volcán hizo erupción en 1985 y provocó la tragedia de Armero?",
    opciones: ["Galeras", "Nevado del Huila", "Puracé", "Nevado del Ruiz"],
    correcta: 3,
    explicacion:
      "La erupción del Nevado del Ruiz ocurrió el 13 de noviembre de 1985.",
  },
  {
    id: 133,
    categoria: "naturaleza",
    dificultad: "medio",
    enunciado:
      "Colombia posee cerca de la mitad de un ecosistema de alta montaña del planeta. ¿Cuál?",
    opciones: ["Los manglares", "Los glaciares", "Las sabanas", "Los páramos"],
    correcta: 3,
    explicacion:
      "Los páramos almacenan y regulan el agua que abastece a millones de personas.",
  },
  {
    id: 134,
    categoria: "naturaleza",
    dificultad: "medio",
    enunciado: "¿Qué planta de hojas afelpadas es el símbolo de los páramos?",
    opciones: ["La bromelia", "El helecho", "El cactus", "El frailejón"],
    correcta: 3,
    explicacion:
      "El frailejón capta el agua de la niebla y crece apenas un centímetro al año.",
  },
  {
    id: 135,
    categoria: "naturaleza",
    dificultad: "medio",
    enunciado:
      "¿Qué médico colombiano inventó una válvula para tratar la hidrocefalia?",
    opciones: [
      "Manuel Elkin Patarroyo",
      "Rodolfo Llinás",
      "Salomón Hakim",
      "Jorge Reynolds",
    ],
    correcta: 2,
    explicacion:
      "La válvula de Hakim se usa en todo el mundo desde los años sesenta.",
  },
  {
    id: 136,
    categoria: "naturaleza",
    dificultad: "medio",
    enunciado:
      "¿Qué científico colombiano desarrolló una vacuna sintética contra la malaria?",
    opciones: [
      "Manuel Elkin Patarroyo",
      "Salomón Hakim",
      "Rodolfo Llinás",
      "Raúl Cuero",
    ],
    correcta: 0,
    explicacion: "Patarroyo desarrolló la vacuna SPf66 en la década de 1980.",
  },
  {
    id: 137,
    categoria: "naturaleza",
    dificultad: "medio",
    enunciado:
      "¿Qué parque nacional del Caribe, cercano a Santa Marta, es famoso por sus playas y su selva?",
    opciones: [
      "Parque Los Nevados",
      "Parque Amacayacu",
      "Parque Utría",
      "Parque Tayrona",
    ],
    correcta: 3,
    explicacion:
      "El Parque Tayrona está al pie de la Sierra Nevada de Santa Marta.",
  },
  {
    id: 138,
    categoria: "naturaleza",
    dificultad: "medio",
    enunciado:
      "¿Qué ballenas llegan al Pacífico colombiano entre julio y octubre para tener sus crías?",
    opciones: ["Ballenas jorobadas", "Ballenas azules", "Orcas", "Cachalotes"],
    correcta: 0,
    explicacion:
      "Las ballenas jorobadas o yubartas viajan miles de kilómetros desde la Antártida.",
  },
  {
    id: 139,
    categoria: "naturaleza",
    dificultad: "medio",
    enunciado:
      "¿Qué lugar ocupa Colombia entre los países con mayor biodiversidad del mundo?",
    opciones: ["Primero", "Quinto", "Segundo", "Décimo"],
    correcta: 2,
    explicacion:
      "Colombia es el segundo país más biodiverso, después de Brasil.",
  },
  {
    id: 140,
    categoria: "naturaleza",
    dificultad: "medio",
    enunciado:
      "¿Qué pequeño mono de cresta blanca solo vive en el noroccidente de Colombia?",
    opciones: [
      "Mono aullador",
      "Mono araña",
      "Tití cabeciblanco",
      "Mono capuchino",
    ],
    correcta: 2,
    explicacion:
      "El tití cabeciblanco es una especie endémica y está en peligro crítico de extinción.",
  },
  {
    id: 141,
    categoria: "naturaleza",
    dificultad: "dificil",
    enunciado:
      "¿Cuál es el nombre científico de la orquídea que es flor nacional de Colombia?",
    opciones: [
      "Cattleya mossiae",
      "Masdevallia coccinea",
      "Dracula vampira",
      "Cattleya trianae",
    ],
    correcta: 3,
    explicacion: "Su nombre honra al botánico colombiano José Jerónimo Triana.",
  },
  {
    id: 142,
    categoria: "naturaleza",
    dificultad: "dificil",
    enunciado: "¿Cuál es el nombre científico de la palma de cera del Quindío?",
    opciones: [
      "Attalea butyracea",
      "Bactris gasipaes",
      "Mauritia flexuosa",
      "Ceroxylon quindiuense",
    ],
    correcta: 3,
    explicacion: "«Ceroxylon quindiuense» es la palma más alta del mundo.",
  },
  {
    id: 143,
    categoria: "naturaleza",
    dificultad: "dificil",
    enunciado:
      "¿Quién dirigió la Real Expedición Botánica del Nuevo Reino de Granada, iniciada en 1783?",
    opciones: [
      "Francisco José de Caldas",
      "Alexander von Humboldt",
      "José Celestino Mutis",
      "Jorge Tadeo Lozano",
    ],
    correcta: 2,
    explicacion:
      "La expedición de Mutis dejó miles de láminas de la flora del territorio.",
  },
  {
    id: 144,
    categoria: "naturaleza",
    dificultad: "dificil",
    enunciado: "¿Qué científico payanés es conocido como «El Sabio»?",
    opciones: [
      "Francisco José de Caldas",
      "José Celestino Mutis",
      "Francisco Antonio Zea",
      "Jorge Tadeo Lozano",
    ],
    correcta: 0,
    explicacion:
      "«El Sabio» Caldas fue astrónomo, botánico y prócer de la independencia.",
  },
  {
    id: 145,
    categoria: "naturaleza",
    dificultad: "dificil",
    enunciado:
      "¿Qué neurocientífico colombiano escribió el libro «El cerebro y el mito del yo»?",
    opciones: [
      "Salomón Hakim",
      "Manuel Elkin Patarroyo",
      "Rodolfo Llinás",
      "Jorge Reynolds",
    ],
    correcta: 2,
    explicacion:
      "Rodolfo Llinás es reconocido en el mundo por sus estudios sobre el cerebro.",
  },
  {
    id: 146,
    categoria: "naturaleza",
    dificultad: "dificil",
    enunciado:
      "¿Qué ingeniero colombiano desarrolló en 1958 uno de los primeros marcapasos externos?",
    opciones: [
      "Salomón Hakim",
      "Jorge Reynolds",
      "Rodolfo Llinás",
      "Raúl Cuero",
    ],
    correcta: 1,
    explicacion:
      "El primer marcapasos de Jorge Reynolds funcionaba con una batería de carro.",
  },
  {
    id: 147,
    categoria: "naturaleza",
    dificultad: "dificil",
    enunciado:
      "¿Qué rana del Pacífico colombiano es uno de los animales más venenosos del mundo?",
    opciones: [
      "Rana de cristal",
      "Rana arlequín",
      "Rana dardo dorada",
      "Rana toro",
    ],
    correcta: 2,
    explicacion:
      "La rana dardo dorada («Phyllobates terribilis») vive en las selvas del Cauca.",
  },
  {
    id: 148,
    categoria: "naturaleza",
    dificultad: "dificil",
    enunciado: "¿Cuál es el parque nacional natural más grande de Colombia?",
    opciones: [
      "Amacayacu",
      "Sierra Nevada de Santa Marta",
      "El Cocuy",
      "Serranía de Chiribiquete",
    ],
    correcta: 3,
    explicacion:
      "Chiribiquete es Patrimonio Mixto de la Humanidad por sus tepuyes y su arte rupestre.",
  },
  {
    id: 149,
    categoria: "naturaleza",
    dificultad: "dificil",
    enunciado: "¿Cuál es considerado el volcán más activo de Colombia?",
    opciones: ["Puracé", "Galeras", "Nevado del Tolima", "Cumbal"],
    correcta: 1,
    explicacion: "El volcán Galeras está junto a la ciudad de Pasto.",
  },
  {
    id: 150,
    categoria: "naturaleza",
    dificultad: "dificil",
    enunciado:
      "¿Aproximadamente cuántas especies de aves se han registrado en Colombia?",
    opciones: [
      "Cerca de 800",
      "Cerca de 1.200",
      "Más de 3.500",
      "Más de 1.900",
    ],
    correcta: 3,
    explicacion:
      "Con más de 1.900 especies, Colombia tiene cerca del 20 % de las aves del planeta.",
  },
];
