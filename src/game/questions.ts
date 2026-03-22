import { Question } from './types';

export const QUESTIONS: Question[] = [
  // ===== Especies (0) =====
  { id: 1, category: 0, text: '¿Cuál es el animal terrestre más grande del mundo?', options: ['Rinoceronte blanco', 'Elefante africano', 'Hipopótamo', 'Jirafa'], correctIndex: 1 },
  { id: 2, category: 0, text: '¿Qué ave es famosa por su danza de cortejo en las Galápagos?', options: ['Fragata', 'Piquero de patas azules', 'Albatros', 'Pingüino'], correctIndex: 1 },
  { id: 3, category: 0, text: '¿Cuál es el felino más rápido del planeta?', options: ['León', 'Leopardo', 'Guepardo', 'Puma'], correctIndex: 2 },
  { id: 4, category: 0, text: '¿Qué especie de tortuga marina es la más grande?', options: ['Tortuga verde', 'Tortuga laúd', 'Tortuga carey', 'Tortuga boba'], correctIndex: 1 },
  { id: 5, category: 0, text: '¿Cuántas especies de pingüinos existen aproximadamente?', options: ['8', '12', '18', '25'], correctIndex: 2 },
  { id: 6, category: 0, text: '¿Qué animal es considerado el más venenoso del mundo marino?', options: ['Pulpo de anillos azules', 'Medusa caja', 'Pez piedra', 'Serpiente marina'], correctIndex: 1 },
  { id: 101, category: 0, text: '¿Qué mamífero puede volar de forma activa?', options: ['Ardilla voladora', 'Murciélago', 'Colugo', 'Zarigüeya'], correctIndex: 1 },
  { id: 102, category: 0, text: '¿Cuál es el ave más grande del mundo que no puede volar?', options: ['Emú', 'Avestruz', 'Casuario', 'Ñandú'], correctIndex: 1 },
  { id: 103, category: 0, text: '¿Qué animal tiene la gestación más larga?', options: ['Ballena azul', 'Elefante africano', 'Rinoceronte', 'Jirafa'], correctIndex: 1 },
  { id: 104, category: 0, text: '¿Qué anfibio es conocido por su capacidad de regenerar extremidades?', options: ['Rana dorada', 'Salamandra', 'Axolote', 'Tritón'], correctIndex: 2 },
  { id: 105, category: 0, text: '¿Cuál es el pez de agua dulce más grande del mundo?', options: ['Pez gato del Mekong', 'Esturión beluga', 'Arapaima', 'Piraña gigante'], correctIndex: 0 },
  { id: 106, category: 0, text: '¿Qué primate es el más cercano genéticamente al ser humano?', options: ['Gorila', 'Orangután', 'Bonobo', 'Gibón'], correctIndex: 2 },
  { id: 107, category: 0, text: '¿Qué insecto realiza la migración más larga conocida?', options: ['Langosta del desierto', 'Mariposa monarca', 'Libélula errante', 'Abeja melífera'], correctIndex: 1 },
  { id: 108, category: 0, text: '¿Qué animal marino tiene tres corazones?', options: ['Medusa', 'Pulpo', 'Estrella de mar', 'Calamar gigante'], correctIndex: 1 },
  { id: 109, category: 0, text: '¿Cuál es el reptil más grande del mundo?', options: ['Anaconda verde', 'Cocodrilo de agua salada', 'Dragón de Komodo', 'Pitón reticulada'], correctIndex: 1 },
  { id: 110, category: 0, text: '¿Qué especie de delfín habita en ríos de agua dulce?', options: ['Delfín mular', 'Delfín rosado del Amazonas', 'Delfín listado', 'Orca'], correctIndex: 1 },

  // ===== Ecosistemas (1) =====
  { id: 7, category: 1, text: '¿Qué ecosistema alberga la mayor biodiversidad del planeta?', options: ['Sabana africana', 'Selva tropical', 'Arrecife de coral', 'Bosque boreal'], correctIndex: 1 },
  { id: 8, category: 1, text: '¿Cómo se llama la zona del océano donde no llega la luz solar?', options: ['Zona fótica', 'Zona abisal', 'Zona pelágica', 'Zona litoral'], correctIndex: 1 },
  { id: 9, category: 1, text: '¿Qué porcentaje de la superficie terrestre cubren los océanos?', options: ['51%', '61%', '71%', '81%'], correctIndex: 2 },
  { id: 10, category: 1, text: '¿En qué continente se encuentra la selva del Congo?', options: ['Asia', 'Sudamérica', 'África', 'Oceanía'], correctIndex: 2 },
  { id: 11, category: 1, text: '¿Qué tipo de ecosistema es un manglar?', options: ['Terrestre', 'Costero', 'De agua dulce', 'Desértico'], correctIndex: 1 },
  { id: 12, category: 1, text: '¿Qué ecosistema se caracteriza por permafrost?', options: ['Estepa', 'Tundra', 'Taiga', 'Pradera'], correctIndex: 1 },
  { id: 201, category: 1, text: '¿Qué país contiene la mayor parte de la selva amazónica?', options: ['Colombia', 'Perú', 'Brasil', 'Venezuela'], correctIndex: 2 },
  { id: 202, category: 1, text: '¿Qué nombre recibe la capa de vegetación que forma el "techo" de la selva?', options: ['Sotobosque', 'Dosel', 'Estrato herbáceo', 'Epífito'], correctIndex: 1 },
  { id: 203, category: 1, text: '¿Qué es un ecosistema bentónico?', options: ['El fondo marino', 'La superficie del mar', 'Un bosque de montaña', 'Un desierto de sal'], correctIndex: 0 },
  { id: 204, category: 1, text: '¿Cuál es el arrecife de coral más grande del mundo?', options: ['Arrecife mesoamericano', 'Gran Barrera de Coral', 'Arrecife de Belice', 'Arrecife del Mar Rojo'], correctIndex: 1 },
  { id: 205, category: 1, text: '¿Qué bioma se caracteriza por inviernos largos y bosques de coníferas?', options: ['Estepa', 'Taiga', 'Pradera', 'Matorral mediterráneo'], correctIndex: 1 },
  { id: 206, category: 1, text: '¿Qué es un humedal?', options: ['Un desierto húmedo', 'Una zona inundada permanente o estacionalmente', 'Un lago profundo', 'Un tipo de glaciar'], correctIndex: 1 },
  { id: 207, category: 1, text: '¿Qué fenómeno oceanográfico calienta las aguas del Pacífico y altera el clima global?', options: ['La Niña', 'El Niño', 'Corriente del Golfo', 'Mareas vivas'], correctIndex: 1 },
  { id: 208, category: 1, text: '¿Cuál es el desierto más grande del mundo?', options: ['Sahara', 'Gobi', 'Antártida', 'Atacama'], correctIndex: 2 },
  { id: 209, category: 1, text: '¿Qué ecosistema se forma en la desembocadura de un río al mar?', options: ['Delta', 'Estuario', 'Fiordo', 'Atolón'], correctIndex: 1 },
  { id: 210, category: 1, text: '¿Qué son las praderas de posidonia?', options: ['Campos de trigo marino', 'Algas tóxicas', 'Praderas submarinas de plantas marinas', 'Formaciones de coral blando'], correctIndex: 2 },

  // ===== Soluciones (2) =====
  { id: 13, category: 2, text: '¿Qué significa "rewilding" en conservación?', options: ['Caza controlada', 'Restaurar ecosistemas a su estado salvaje', 'Crear zoológicos', 'Plantar árboles urbanos'], correctIndex: 1 },
  { id: 14, category: 2, text: '¿Qué es un corredor biológico?', options: ['Un río', 'Una franja que conecta hábitats', 'Un tipo de reserva', 'Una ruta migratoria fija'], correctIndex: 1 },
  { id: 15, category: 2, text: '¿Qué acuerdo internacional protege humedales?', options: ['Protocolo de Kyoto', 'Convenio Ramsar', 'Acuerdo de París', 'Protocolo de Montreal'], correctIndex: 1 },
  { id: 16, category: 2, text: '¿Qué es la agroecología?', options: ['Agricultura industrial', 'Agricultura con principios ecológicos', 'Agricultura sin agua', 'Ganadería extensiva'], correctIndex: 1 },
  { id: 17, category: 2, text: '¿Qué tecnología ayuda a monitorear la deforestación desde el espacio?', options: ['Drones submarinos', 'Satélites de observación', 'Sismógrafos', 'Radares meteorológicos'], correctIndex: 1 },
  { id: 18, category: 2, text: '¿Qué son los bancos de semillas?', options: ['Entidades financieras', 'Repositorios de diversidad genética vegetal', 'Plantaciones masivas', 'Viveros comerciales'], correctIndex: 1 },
  { id: 301, category: 2, text: '¿Qué es la economía circular?', options: ['Producir y desechar rápido', 'Reutilizar y reciclar recursos continuamente', 'Comercio internacional', 'Economía basada en el petróleo'], correctIndex: 1 },
  { id: 302, category: 2, text: '¿Qué práctica restaura suelos degradados capturando carbono?', options: ['Minería a cielo abierto', 'Agricultura regenerativa', 'Monocultivo intensivo', 'Pastoreo excesivo'], correctIndex: 1 },
  { id: 303, category: 2, text: '¿Qué es un área marina protegida (AMP)?', options: ['Un acuario', 'Una zona del océano con restricciones de uso', 'Un puerto pesquero', 'Una plataforma petrolífera'], correctIndex: 1 },
  { id: 304, category: 2, text: '¿Qué porcentaje de los océanos busca proteger el acuerdo "30x30"?', options: ['10%', '20%', '30%', '50%'], correctIndex: 2 },
  { id: 305, category: 2, text: '¿Qué es la biomimética?', options: ['Clonación animal', 'Innovación inspirada en la naturaleza', 'Biología molecular', 'Jardinería urbana'], correctIndex: 1 },
  { id: 306, category: 2, text: '¿Qué iniciativa global busca plantar un billón de árboles?', options: ['Trillion Trees', 'Green Planet', 'Forest First', 'Tree Nation'], correctIndex: 0 },
  { id: 307, category: 2, text: '¿Qué son las soluciones basadas en la naturaleza (SbN)?', options: ['Usar la naturaleza para resolver retos sociales y ambientales', 'Crear parques temáticos', 'Construir diques artificiales', 'Producir energía nuclear'], correctIndex: 0 },
  { id: 308, category: 2, text: '¿Qué es la certificación FSC en productos de madera?', options: ['Control de incendios', 'Gestión forestal sostenible', 'Fumigación obligatoria', 'Exportación de madera'], correctIndex: 1 },
  { id: 309, category: 2, text: '¿Qué rol cumplen los pueblos indígenas en la conservación?', options: ['Ninguno relevante', 'Protegen el 80% de la biodiversidad mundial', 'Solo cazan', 'Deforestan sus territorios'], correctIndex: 1 },
  { id: 310, category: 2, text: '¿Qué es el ecoturismo?', options: ['Turismo de lujo', 'Turismo responsable que conserva el entorno natural', 'Turismo de aventura extrema', 'Turismo gastronómico'], correctIndex: 1 },

  // ===== Indicadores (3) =====
  { id: 19, category: 3, text: '¿Qué mide el Índice Planeta Vivo (LPI)?', options: ['Contaminación', 'Tendencia de poblaciones de vertebrados', 'Temperatura global', 'Nivel del mar'], correctIndex: 1 },
  { id: 20, category: 3, text: '¿En qué porcentaje han disminuido las poblaciones de vertebrados desde 1970 según WWF?', options: ['30%', '50%', '69%', '80%'], correctIndex: 2 },
  { id: 21, category: 3, text: '¿Qué organización gestiona la Lista Roja de especies amenazadas?', options: ['ONU', 'UICN', 'UNESCO', 'WWF'], correctIndex: 1 },
  { id: 22, category: 3, text: '¿Qué indicador mide la huella ecológica de un país?', options: ['PIB verde', 'Hectáreas globales per cápita', 'Índice de desarrollo humano', 'Emisiones de CO₂'], correctIndex: 1 },
  { id: 23, category: 3, text: '¿Cuántas especies están catalogadas como en peligro crítico en la Lista Roja (aprox.)?', options: ['2.000', '5.000', '9.000', '15.000'], correctIndex: 2 },
  { id: 24, category: 3, text: '¿Qué es la biocapacidad?', options: ['Capacidad de producir energía', 'Capacidad de los ecosistemas para regenerar recursos', 'Capacidad de reciclaje', 'Capacidad industrial'], correctIndex: 1 },
  { id: 401, category: 3, text: '¿Qué es el Día del Sobregiro de la Tierra?', options: ['El día más caluroso del año', 'El día en que se agotan los recursos anuales del planeta', 'Un eclipse solar', 'El solsticio de verano'], correctIndex: 1 },
  { id: 402, category: 3, text: '¿Cuántas especies se estima que existen en la Tierra?', options: ['500.000', '2 millones', '8,7 millones', '50 millones'], correctIndex: 2 },
  { id: 403, category: 3, text: '¿Qué mide el Índice de Integridad de la Biodiversidad (BII)?', options: ['Calidad del aire', 'Estado de la biodiversidad respecto a su estado original', 'Número de zoológicos', 'Producción agrícola'], correctIndex: 1 },
  { id: 404, category: 3, text: '¿Cuánta superficie terrestre se considera área protegida actualmente?', options: ['5%', '10%', '17%', '30%'], correctIndex: 2 },
  { id: 405, category: 3, text: '¿Qué es la tasa de extinción de fondo?', options: ['La velocidad de evolución', 'La tasa natural de extinción sin intervención humana', 'El ritmo de deforestación', 'La velocidad de deshielo'], correctIndex: 1 },
  { id: 406, category: 3, text: '¿Cuántas veces más rápida es la extinción actual respecto a la tasa natural?', options: ['10 veces', '100 veces', '1.000 veces', '10.000 veces'], correctIndex: 2 },
  { id: 407, category: 3, text: '¿Qué es el IPBES?', options: ['Una empresa tecnológica', 'El panel intergubernamental sobre biodiversidad', 'Un tipo de indicador económico', 'Una ONG ambiental'], correctIndex: 1 },
  { id: 408, category: 3, text: '¿Qué porcentaje de los insectos polinizadores está en declive?', options: ['10%', '25%', '40%', '75%'], correctIndex: 2 },
  { id: 409, category: 3, text: '¿Qué son los servicios ecosistémicos?', options: ['Empresas de jardinería', 'Beneficios que la naturaleza proporciona a la humanidad', 'Parques nacionales', 'Programas de televisión'], correctIndex: 1 },
  { id: 410, category: 3, text: '¿Qué indicador mide la diversidad genética dentro de una especie?', options: ['Índice de Shannon', 'Heterocigosidad', 'PIB ecológico', 'Índice de biomasa'], correctIndex: 1 },

  // ===== Amenazas (4) =====
  { id: 25, category: 4, text: '¿Cuál es la principal causa de pérdida de biodiversidad?', options: ['Cambio climático', 'Contaminación', 'Destrucción de hábitats', 'Caza furtiva'], correctIndex: 2 },
  { id: 26, category: 4, text: '¿Qué son las especies invasoras?', options: ['Especies protegidas', 'Especies no nativas que dañan el ecosistema local', 'Especies en peligro', 'Especies migratorias'], correctIndex: 1 },
  { id: 27, category: 4, text: '¿Qué isla de plástico flota en el Pacífico Norte?', options: ['Isla Henderson', 'Gran Mancha de Basura del Pacífico', 'Isla de Pascua', 'Isla Clipperton'], correctIndex: 1 },
  { id: 28, category: 4, text: '¿Qué fenómeno causa el blanqueamiento de los corales?', options: ['Mareas rojas', 'Aumento de temperatura del agua', 'Contaminación lumínica', 'Pesca con dinamita'], correctIndex: 1 },
  { id: 29, category: 4, text: '¿Cuántas hectáreas de bosque se pierden al año aproximadamente?', options: ['1 millón', '5 millones', '10 millones', '20 millones'], correctIndex: 2 },
  { id: 30, category: 4, text: '¿Qué gas es el principal responsable del efecto invernadero?', options: ['Metano', 'Óxido nitroso', 'Dióxido de carbono', 'Ozono'], correctIndex: 2 },
  { id: 501, category: 4, text: '¿Qué es la acidificación de los océanos?', options: ['El agua se vuelve más salada', 'El pH del agua disminuye por absorción de CO₂', 'El agua se congela más rápido', 'Aumenta la salinidad'], correctIndex: 1 },
  { id: 502, category: 4, text: '¿Qué son los microplásticos?', options: ['Plásticos reciclables', 'Fragmentos de plástico menores a 5 mm', 'Envases biodegradables', 'Fibras naturales'], correctIndex: 1 },
  { id: 503, category: 4, text: '¿Qué actividad humana destruye más bosques tropicales?', options: ['Urbanización', 'Agricultura y ganadería', 'Minería', 'Turismo'], correctIndex: 1 },
  { id: 504, category: 4, text: '¿Qué es la eutrofización?', options: ['Exceso de nutrientes en el agua que agota el oxígeno', 'Aumento de la temperatura del agua', 'Desalinización natural', 'Formación de glaciares'], correctIndex: 0 },
  { id: 505, category: 4, text: '¿Qué porcentaje de las especies de tiburones está amenazado?', options: ['5%', '15%', '33%', '50%'], correctIndex: 2 },
  { id: 506, category: 4, text: '¿Qué es la fragmentación del hábitat?', options: ['La creación de reservas', 'La división de ecosistemas en parches aislados', 'La migración de especies', 'La expansión forestal'], correctIndex: 1 },
  { id: 507, category: 4, text: '¿Qué enfermedad fúngica ha devastado poblaciones de anfibios mundialmente?', options: ['Malaria', 'Quitridiomicosis', 'Rabia', 'Gripe aviar'], correctIndex: 1 },
  { id: 508, category: 4, text: '¿Qué es el comercio ilegal de fauna silvestre?', options: ['Venta legal de mascotas', 'Tráfico ilícito de animales y sus partes', 'Crianza doméstica', 'Protección de especies'], correctIndex: 1 },
  { id: 509, category: 4, text: '¿Qué contaminante afecta la capa de ozono?', options: ['CO₂', 'Metano', 'CFC (clorofluorocarbonos)', 'Nitrógeno'], correctIndex: 2 },
  { id: 510, category: 4, text: '¿Cuántas toneladas de plástico llegan al océano cada año?', options: ['1 millón', '8 millones', '20 millones', '50 millones'], correctIndex: 1 },

  // ===== Airbus (5) =====
  { id: 31, category: 5, text: '¿En qué año se fundó Airbus?', options: ['1960', '1969', '1975', '1980'], correctIndex: 1 },
  { id: 32, category: 5, text: '¿Qué combustible alternativo investiga Airbus para aviación?', options: ['Gas natural', 'Hidrógeno', 'Etanol', 'Propano'], correctIndex: 1 },
  { id: 33, category: 5, text: '¿Cómo se llama el programa de Airbus para aviones de cero emisiones?', options: ['ZEROe', 'GreenJet', 'EcoFly', 'CleanWing'], correctIndex: 0 },
  { id: 34, category: 5, text: '¿En qué ciudad europea tiene Airbus su sede principal?', options: ['París', 'Toulouse', 'Hamburgo', 'Madrid'], correctIndex: 1 },
  { id: 35, category: 5, text: '¿Qué satélite de Airbus monitorea el medio ambiente terrestre?', options: ['Hubble', 'Sentinel', 'Voyager', 'Galileo'], correctIndex: 1 },
  { id: 36, category: 5, text: '¿Cuál es el avión comercial más grande de Airbus?', options: ['A320', 'A350', 'A380', 'A330'], correctIndex: 2 },
  { id: 601, category: 5, text: '¿Qué iniciativa de Airbus usa SAF (combustible sostenible de aviación)?', options: ['FlyGreen', 'SAF Programme', 'BioFuel One', 'AirEco'], correctIndex: 1 },
  { id: 602, category: 5, text: '¿Qué filial de Airbus fabrica helicópteros?', options: ['Airbus Helicopters', 'Airbus Rotors', 'EuroHeli', 'HeliJet'], correctIndex: 0 },
  { id: 603, category: 5, text: '¿Qué programa de Airbus estudia formaciones de vuelo inspiradas en aves?', options: ['fello\'fly', 'BirdWing', 'FormFlight', 'SkyFlock'], correctIndex: 0 },
  { id: 604, category: 5, text: '¿Cuántos países participaron en la fundación de Airbus?', options: ['2', '3', '4', '5'], correctIndex: 2 },
  { id: 605, category: 5, text: '¿Qué avión de Airbus es el más vendido de la historia?', options: ['A350', 'A320', 'A380', 'A330'], correctIndex: 1 },
  { id: 606, category: 5, text: '¿Qué división de Airbus se dedica a defensa y espacio?', options: ['Airbus Defence and Space', 'Airbus Military', 'SpaceBus', 'AirForce Europe'], correctIndex: 0 },
  { id: 607, category: 5, text: '¿Qué material compuesto usa Airbus para reducir peso en sus aviones?', options: ['Aluminio puro', 'Fibra de carbono', 'Acero inoxidable', 'Titanio sólido'], correctIndex: 1 },
  { id: 608, category: 5, text: '¿Qué objetivo de reducción de emisiones tiene Airbus para 2050?', options: ['Reducir un 25%', 'Reducir un 50%', 'Cero emisiones netas', 'Mantener niveles actuales'], correctIndex: 2 },
  { id: 609, category: 5, text: '¿Qué proyecto de Airbus busca desarrollar taxis aéreos urbanos?', options: ['CityAirbus NextGen', 'SkyTaxi', 'UrbanWing', 'AirPod'], correctIndex: 0 },
  { id: 610, category: 5, text: '¿Qué constelación de satélites de Airbus ofrece imágenes de alta resolución de la Tierra?', options: ['Pléiades', 'Starlink', 'GPS III', 'Iridium'], correctIndex: 0 },
];

export function getRandomQuestion(category: number, usedIds: number[]): Question | null {
  const usedSet = new Set(usedIds);
  const available = QUESTIONS.filter(q => q.category === category && !usedSet.has(q.id));
  if (available.length === 0) {
    // Reset: allow repeats
    const all = QUESTIONS.filter(q => q.category === category);
    return all[Math.floor(Math.random() * all.length)] ?? null;
  }
  return available[Math.floor(Math.random() * available.length)];
}
