import { Question } from './types';

export const QUESTIONS: Question[] = [
  // Especies (0)
  { id: 1, category: 0, text: '¿Cuál es el animal terrestre más grande del mundo?', options: ['Rinoceronte blanco', 'Elefante africano', 'Hipopótamo', 'Jirafa'], correctIndex: 1 },
  { id: 2, category: 0, text: '¿Qué ave es famosa por su danza de cortejo en las Galápagos?', options: ['Fragata', 'Piquero de patas azules', 'Albatros', 'Pingüino'], correctIndex: 1 },
  { id: 3, category: 0, text: '¿Cuál es el felino más rápido del planeta?', options: ['León', 'Leopardo', 'Guepardo', 'Puma'], correctIndex: 2 },
  { id: 4, category: 0, text: '¿Qué especie de tortuga marina es la más grande?', options: ['Tortuga verde', 'Tortuga laúd', 'Tortuga carey', 'Tortuga boba'], correctIndex: 1 },
  { id: 5, category: 0, text: '¿Cuántas especies de pingüinos existen aproximadamente?', options: ['8', '12', '18', '25'], correctIndex: 2 },
  { id: 6, category: 0, text: '¿Qué animal es considerado el más venenoso del mundo marino?', options: ['Pulpo de anillos azules', 'Medusa caja', 'Pez piedra', 'Serpiente marina'], correctIndex: 1 },

  // Ecosistemas (1)
  { id: 7, category: 1, text: '¿Qué ecosistema alberga la mayor biodiversidad del planeta?', options: ['Sabana africana', 'Selva tropical', 'Arrecife de coral', 'Bosque boreal'], correctIndex: 1 },
  { id: 8, category: 1, text: '¿Cómo se llama la zona del océano donde no llega la luz solar?', options: ['Zona fótica', 'Zona abisal', 'Zona pelágica', 'Zona litoral'], correctIndex: 1 },
  { id: 9, category: 1, text: '¿Qué porcentaje de la superficie terrestre cubren los océanos?', options: ['51%', '61%', '71%', '81%'], correctIndex: 2 },
  { id: 10, category: 1, text: '¿En qué continente se encuentra la selva del Congo?', options: ['Asia', 'Sudamérica', 'África', 'Oceanía'], correctIndex: 2 },
  { id: 11, category: 1, text: '¿Qué tipo de ecosistema es un manglar?', options: ['Terrestre', 'Costero', 'De agua dulce', 'Desértico'], correctIndex: 1 },
  { id: 12, category: 1, text: '¿Qué ecosistema se caracteriza por permafrost?', options: ['Estepa', 'Tundra', 'Taiga', 'Pradera'], correctIndex: 1 },

  // Soluciones (2)
  { id: 13, category: 2, text: '¿Qué significa "rewilding" en conservación?', options: ['Caza controlada', 'Restaurar ecosistemas a su estado salvaje', 'Crear zoológicos', 'Plantar árboles urbanos'], correctIndex: 1 },
  { id: 14, category: 2, text: '¿Qué es un corredor biológico?', options: ['Un río', 'Una franja que conecta hábitats', 'Un tipo de reserva', 'Una ruta migratoria fija'], correctIndex: 1 },
  { id: 15, category: 2, text: '¿Qué acuerdo internacional protege humedales?', options: ['Protocolo de Kyoto', 'Convenio Ramsar', 'Acuerdo de París', 'Protocolo de Montreal'], correctIndex: 1 },
  { id: 16, category: 2, text: '¿Qué es la agroecología?', options: ['Agricultura industrial', 'Agricultura con principios ecológicos', 'Agricultura sin agua', 'Ganadería extensiva'], correctIndex: 1 },
  { id: 17, category: 2, text: '¿Qué tecnología ayuda a monitorear la deforestación desde el espacio?', options: ['Drones submarinos', 'Satélites de observación', 'Sismógrafos', 'Radares meteorológicos'], correctIndex: 1 },
  { id: 18, category: 2, text: '¿Qué son los bancos de semillas?', options: ['Entidades financieras', 'Repositorios de diversidad genética vegetal', 'Plantaciones masivas', 'Viveros comerciales'], correctIndex: 1 },

  // Indicadores (3)
  { id: 19, category: 3, text: '¿Qué mide el Índice Planeta Vivo (LPI)?', options: ['Contaminación', 'Tendencia de poblaciones de vertebrados', 'Temperatura global', 'Nivel del mar'], correctIndex: 1 },
  { id: 20, category: 3, text: '¿En qué porcentaje han disminuido las poblaciones de vertebrados desde 1970 según WWF?', options: ['30%', '50%', '69%', '80%'], correctIndex: 2 },
  { id: 21, category: 3, text: '¿Qué organización gestiona la Lista Roja de especies amenazadas?', options: ['ONU', 'UICN', 'UNESCO', 'WWF'], correctIndex: 1 },
  { id: 22, category: 3, text: '¿Qué indicador mide la huella ecológica de un país?', options: ['PIB verde', 'Hectáreas globales per cápita', 'Índice de desarrollo humano', 'Emisiones de CO₂'], correctIndex: 1 },
  { id: 23, category: 3, text: '¿Cuántas especies están catalogadas como en peligro crítico en la Lista Roja (aprox.)?', options: ['2.000', '5.000', '9.000', '15.000'], correctIndex: 2 },
  { id: 24, category: 3, text: '¿Qué es la biocapacidad?', options: ['Capacidad de producir energía', 'Capacidad de los ecosistemas para regenerar recursos', 'Capacidad de reciclaje', 'Capacidad industrial'], correctIndex: 1 },

  // Amenazas (4)
  { id: 25, category: 4, text: '¿Cuál es la principal causa de pérdida de biodiversidad?', options: ['Cambio climático', 'Contaminación', 'Destrucción de hábitats', 'Caza furtiva'], correctIndex: 2 },
  { id: 26, category: 4, text: '¿Qué son las especies invasoras?', options: ['Especies protegidas', 'Especies no nativas que dañan el ecosistema local', 'Especies en peligro', 'Especies migratorias'], correctIndex: 1 },
  { id: 27, category: 4, text: '¿Qué isla de plástico flota en el Pacífico Norte?', options: ['Isla Henderson', 'Gran Mancha de Basura del Pacífico', 'Isla de Pascua', 'Isla Clipperton'], correctIndex: 1 },
  { id: 28, category: 4, text: '¿Qué fenómeno causa el blanqueamiento de los corales?', options: ['Mareas rojas', 'Aumento de temperatura del agua', 'Contaminación lumínica', 'Pesca con dinamita'], correctIndex: 1 },
  { id: 29, category: 4, text: '¿Cuántas hectáreas de bosque se pierden al año aproximadamente?', options: ['1 millón', '5 millones', '10 millones', '20 millones'], correctIndex: 2 },
  { id: 30, category: 4, text: '¿Qué gas es el principal responsable del efecto invernadero?', options: ['Metano', 'Óxido nitroso', 'Dióxido de carbono', 'Ozono'], correctIndex: 2 },

  // Airbus (5)
  { id: 31, category: 5, text: '¿En qué año se fundó Airbus?', options: ['1960', '1969', '1975', '1980'], correctIndex: 1 },
  { id: 32, category: 5, text: '¿Qué combustible alternativo investiga Airbus para aviación?', options: ['Gas natural', 'Hidrógeno', 'Etanol', 'Propano'], correctIndex: 1 },
  { id: 33, category: 5, text: '¿Cómo se llama el programa de Airbus para aviones de cero emisiones?', options: ['ZEROe', 'GreenJet', 'EcoFly', 'CleanWing'], correctIndex: 0 },
  { id: 34, category: 5, text: '¿En qué ciudad europea tiene Airbus su sede principal?', options: ['París', 'Toulouse', 'Hamburgo', 'Madrid'], correctIndex: 1 },
  { id: 35, category: 5, text: '¿Qué satélite de Airbus monitorea el medio ambiente terrestre?', options: ['Hubble', 'Sentinel', 'Voyager', 'Galileo'], correctIndex: 1 },
  { id: 36, category: 5, text: '¿Cuál es el avión comercial más grande de Airbus?', options: ['A320', 'A350', 'A380', 'A330'], correctIndex: 2 },
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
