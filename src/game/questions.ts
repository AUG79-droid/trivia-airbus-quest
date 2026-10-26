import { Question } from './types';

/** 48 escenarios aplicados: ocho por categoría. Datos y decisiones didácticos, no aprobaciones reales de Airbus. */
export const QUESTIONS: Question[] = [
  {
    "id": 1,
    "category": 0,
    "text": "En un retrofit de aviónica, ¿qué comparación sirve para evaluar circularidad?",
    "options": [
      "Una placa nueva frente a cualquier reparación",
      "Dos soluciones que cumplen la misma función y requisitos, a lo largo del ciclo de vida",
      "El precio de compra únicamente",
      "La masa del embalaje"
    ],
    "correctIndex": 1,
    "explanation": "Primero se define una función equivalente, la conformidad y el horizonte de servicio. Después se comparan materiales, mantenimiento, energía, repuestos y fin de vida; una sola cifra no representa todo el ciclo."
  },
  {
    "id": 2,
    "category": 0,
    "text": "¿Qué debe incluir el alcance de un análisis de ciclo de vida de un componente aeronáutico?",
    "options": [
      "Solo las emisiones de fabricación",
      "Únicamente el reciclaje final",
      "Los procesos relevantes desde materiales hasta uso, mantenimiento y fin de vida",
      "La fotografía del proveedor"
    ],
    "correctIndex": 2,
    "explanation": "La frontera debe abarcar las etapas significativas para la decisión: extracción y procesamiento de materiales, fabricación, transporte, operación, mantenimiento y final de vida, evitando omisiones materiales."
  },
  {
    "id": 3,
    "category": 0,
    "text": "Un panel reparado pesa menos que otro nuevo, pero aún falta cualificar la reparación. ¿Qué procede?",
    "options": [
      "Instalarlo por su menor consumo de materiales",
      "Rechazar cualquier posibilidad de reparación",
      "Autorizarlo si el proveedor dice que es circular",
      "Completar las verificaciones técnicas antes de comparar opciones aptas"
    ],
    "correctIndex": 3,
    "explanation": "La reparabilidad solo aporta valor cuando el componente mantiene integridad, seguridad y configuración aprobadas. Primero se valida la reparación; después se comparan alternativas conformes."
  },
  {
    "id": 4,
    "category": 0,
    "text": "Una nueva pieza requiere más material, pero podría durar el doble. ¿Qué decide el análisis?",
    "options": [
      "Comparar impactos por una misma prestación durante un periodo definido",
      "Elegir siempre la más ligera",
      "Preferir automáticamente la vida útil más larga",
      "Elegir por el color del material"
    ],
    "correctIndex": 0,
    "explanation": "Una pieza más duradera podría reducir sustituciones, aunque su fabricación inicial tenga más carga. Deben examinarse durabilidad real, mantenimiento y condiciones de uso bajo una misma unidad funcional."
  },
  {
    "id": 5,
    "category": 0,
    "text": "¿Qué requisito de diseño facilita afrontar la obsolescencia en servicio?",
    "options": [
      "Sellar permanentemente el conjunto",
      "Facilitar acceso, sustitución controlada y documentación de interfaces",
      "Eliminar la información de configuración",
      "Diseñar solo para el menor precio inicial"
    ],
    "correctIndex": 1,
    "explanation": "La modularidad, el acceso y las interfaces documentadas pueden facilitar reparación y actualización. Su beneficio depende de validación técnica y de evitar costes o impactos desproporcionados en otros procesos."
  },
  {
    "id": 6,
    "category": 0,
    "text": "Un proveedor anuncia que un composite será «100 % reciclable». ¿Qué evidencias faltan?",
    "options": [
      "No falta nada si aparece en un folleto",
      "Solo el logotipo de reciclaje",
      "Proceso disponible, calidad de la salida, rendimientos y aplicación real",
      "La opinión de marketing"
    ],
    "correctIndex": 2,
    "explanation": "Que exista una tecnología de reciclado no demuestra recogida, viabilidad a escala ni calidad adecuada del material recuperado. La afirmación necesita límites, datos y una vía real de recuperación."
  },
  {
    "id": 7,
    "category": 0,
    "text": "¿Qué dato favorece decisiones verificables de diseño para reparación?",
    "options": [
      "La cantidad de presentaciones del proyecto",
      "Un eslogan de economía circular",
      "La antigüedad del diseño",
      "Tiempo, accesos, herramientas, desmontaje y criterios de aceptación medidos"
    ],
    "correctIndex": 3,
    "explanation": "Los indicadores de reparabilidad deben relacionarse con tareas reales: acceso, tiempo, herramientas, sustitución y criterios técnicos. Así pueden convertirse en requisitos de ingeniería evaluables."
  },
  {
    "id": 8,
    "category": 0,
    "text": "Dos alternativas tienen impactos muy similares dentro del margen de error. ¿Qué conviene hacer?",
    "options": [
      "Analizar sensibilidad y declarar la incertidumbre antes de jerarquizarlas",
      "Declarar vencedora la de menor cifra decimal",
      "Ocultar el margen de error",
      "Dar una aprobación ambiental global"
    ],
    "correctIndex": 0,
    "explanation": "Las diferencias pequeñas pueden carecer de significado cuando los inventarios son inciertos. Una evaluación honesta identifica datos sensibles y evita una clasificación artificialmente precisa."
  },
  {
    "id": 101,
    "category": 1,
    "text": "Un repuesto urgente debe llegar en 36 horas. ¿Qué opción debe revisarse primero?",
    "options": [
      "La ruta con menores emisiones sin revisar el plazo",
      "La disponibilidad de stock compatible y trazable dentro del plazo",
      "El medio más barato sin verificar configuración",
      "Un transportista seleccionado al azar"
    ],
    "correctIndex": 1,
    "explanation": "Verificar una pieza cercana compatible puede evitar un transporte y proteger disponibilidad. Solo se puede autorizar tras confirmar configuración, trazabilidad, tiempo real y cancelación del movimiento alternativo."
  },
  {
    "id": 102,
    "category": 1,
    "text": "La energía por metro cuadrado cae un 6 %, pero los kWh totales suben un 2 %. ¿Qué se informa?",
    "options": [
      "Que toda la instalación redujo energía un 6 %",
      "Solo el incremento absoluto",
      "Ambos resultados, periodo, actividad y variables relevantes",
      "Que ya no hay emisiones"
    ],
    "correctIndex": 2,
    "explanation": "La intensidad y el consumo absoluto miden cuestiones distintas. Presentarlos juntos evita que el crecimiento de actividad o cambios de superficie se conviertan en un titular engañoso."
  },
  {
    "id": 103,
    "category": 1,
    "text": "Una medida energética podría reducir el caudal de extracción de un taller. ¿Qué decisión es responsable?",
    "options": [
      "Implantarla sin ensayos",
      "Cancelar toda mejora para siempre",
      "Medir después y no informar",
      "Validar primero las condiciones técnicas y de seguridad con los responsables"
    ],
    "correctIndex": 3,
    "explanation": "Los controles ambientales y energéticos no pueden rebajar la seguridad del proceso. Deben verificarse los límites de ventilación, la operación y la medición del ahorro bajo condiciones permitidas."
  },
  {
    "id": 104,
    "category": 1,
    "text": "¿Qué hace comparables dos presupuestos de emisiones logísticas?",
    "options": [
      "Usar los mismos tramos, masa, unidad funcional y reglas de asignación",
      "Elegir la estimación comercial más baja",
      "Comparar distintos destinos",
      "Omitir el último trayecto"
    ],
    "correctIndex": 0,
    "explanation": "El mismo perímetro, modos, distancias y método de asignación permiten una comparación defendible. Las promesas de un proveedor no son equivalentes a actividad verificada."
  },
  {
    "id": 105,
    "category": 1,
    "text": "Para reducir viajes de mantenimiento, ¿qué se debe analizar además de los kilómetros?",
    "options": [
      "Solo el kilometraje teórico",
      "Consolidación de tareas, disponibilidad, repetición de trabajos y configuración",
      "El número de correos del equipo",
      "La marca del vehículo"
    ],
    "correctIndex": 1,
    "explanation": "Una visita combinada puede evitar desplazamientos, pero un fallo de planificación puede aumentar retrabajos o indisponibilidad. Debe compararse el servicio realmente completado."
  },
  {
    "id": 106,
    "category": 1,
    "text": "Un análisis de vuelos incluye CO₂, pero no efectos no CO₂. ¿Qué conclusión procede?",
    "options": [
      "Es una evaluación climática completa",
      "Los efectos no CO₂ siempre son nulos",
      "Informar del alcance y reconocer los efectos no evaluados",
      "Multiplicar arbitrariamente el CO₂"
    ],
    "correctIndex": 2,
    "explanation": "Los efectos de NOx y formación de estelas, entre otros, dependen de condiciones y requieren metodologías apropiadas. No deben inferirse reducciones climáticas totales a partir de un cálculo parcial."
  },
  {
    "id": 107,
    "category": 1,
    "text": "Un vuelo usa una mezcla SAF. ¿Qué afirmación es correcta?",
    "options": [
      "Ha sido un vuelo sin emisiones",
      "El combustible garantiza neutralidad climática",
      "No hace falta ninguna trazabilidad",
      "Su balance GEI de ciclo de vida puede estudiarse con método y evidencias definidos"
    ],
    "correctIndex": 3,
    "explanation": "La combustión sigue produciendo emisiones. Un posible beneficio relativo del SAF depende de vía de producción, mezcla, comparador, cadena de custodia y método; no implica cero emisiones en el avión."
  },
  {
    "id": 108,
    "category": 1,
    "text": "La factura eléctrica baja tras una reforma, pero también cambia el horario del edificio. ¿Qué falta?",
    "options": [
      "Comparar consumo medido con una línea base ajustada por actividad y condiciones",
      "Atribuir todo el descenso a la reforma",
      "Usar la factura como única prueba",
      "Excluir el cambio de horario sin anotarlo"
    ],
    "correctIndex": 0,
    "explanation": "Para atribuir ahorro a una intervención hay que separar sus efectos de clima, actividad, tarifas y horario. La factura económica y la energía física no son la misma medida."
  },
  {
    "id": 201,
    "category": 2,
    "text": "Un embalaje reutilizable se diseña para 20 ciclos, pero solo logra cuatro. ¿Qué dato se emplea?",
    "options": [
      "Los 20 ciclos prometidos",
      "Los ciclos observados, las pérdidas, la limpieza y el transporte de retorno",
      "El nombre comercial del embalaje",
      "Ninguna cifra"
    ],
    "correctIndex": 1,
    "explanation": "La comparación debe referirse a entregas intactas y usos reales. Diseñar para reutilizar no demuestra que el circuito de devolución y mantenimiento funcione."
  },
  {
    "id": 202,
    "category": 2,
    "text": "Una caja más ligera no ha superado el ensayo de vibración. ¿Qué procede?",
    "options": [
      "Usarla por su menor peso",
      "Considerarla aprobada por el proveedor",
      "Mantener la solución cualificada y completar la validación técnica",
      "Dejar de documentar el embalaje"
    ],
    "correctIndex": 2,
    "explanation": "La protección del componente forma parte de la función. Un daño podría generar nuevas piezas, residuos, costes y transportes, anulando cualquier aparente ventaja del menor peso."
  },
  {
    "id": 203,
    "category": 2,
    "text": "Un almacén imprime, firma y escanea todos sus documentos. ¿Es un proceso sin papel?",
    "options": [
      "Sí, porque queda un PDF",
      "Sí, si el escáner es eficiente",
      "No importa conservar trazabilidad",
      "No: hay que rediseñar el flujo manteniendo firma, control de versiones y contingencia"
    ],
    "correctIndex": 3,
    "explanation": "Digitalizar un documento no equivale a eliminar el proceso físico. La desmaterialización exige registros electrónicos válidos, accesibles y controlados, también ante incidencias del sistema."
  },
  {
    "id": 204,
    "category": 2,
    "text": "¿Cómo se mejora la recuperación de recortes de aleaciones?",
    "options": [
      "Separando materiales por especificación y conservando trazabilidad del lote",
      "Mezclando todas las virutas",
      "Eliminando etiquetas de material",
      "Declarando reciclaje sin evidencias"
    ],
    "correctIndex": 0,
    "explanation": "La clasificación por aleación y contaminación evita degradar materiales y permite definir destinos viables. La recuperación debe documentarse y respetar requisitos de seguridad y calidad."
  },
  {
    "id": 205,
    "category": 2,
    "text": "Tras una operación MRO aparecen residuos de recubrimientos y disolventes. ¿Qué enfoque corresponde?",
    "options": [
      "Arrojarlos al residuo común",
      "Identificar peligrosidad, segregarlos y documentar el gestor y la retirada",
      "Diluirlos con agua",
      "Contabilizarlos como material reciclado"
    ],
    "correctIndex": 1,
    "explanation": "La segregación, los recipientes adecuados y la trazabilidad dependen de la clasificación de residuos y normas aplicables. No se deben presentar como valorizados sin comprobación del tratamiento."
  },
  {
    "id": 206,
    "category": 2,
    "text": "Ante un actuador obsoleto, ¿cuándo tiene sentido reparar en lugar de sustituir?",
    "options": [
      "Siempre, aunque no cumpla requisitos",
      "Solo cuando lo anuncie el proveedor",
      "Cuando la reparación es técnicamente aprobable y se comparan impactos, disponibilidad y vida restante",
      "Nunca, porque las piezas nuevas son mejores"
    ],
    "correctIndex": 2,
    "explanation": "Una reparación viable puede extender vida útil y evitar producción adicional. Deben incluirse cualificación, límites de vida, consumo de recursos, seguridad y cumplimiento de configuración."
  },
  {
    "id": 207,
    "category": 2,
    "text": "Un material presume de contenido reciclado. ¿Qué documentación lo respalda?",
    "options": [
      "Una fotografía de chatarra",
      "Un color diferente",
      "Una afirmación sin fecha",
      "Trazabilidad y metodología verificable para el porcentaje y el alcance del producto"
    ],
    "correctIndex": 3,
    "explanation": "El porcentaje puede depender de mezcla de materias primas y reglas de asignación. Deben declararse el alcance y el respaldo documental, sin inferir automáticamente menor impacto total."
  },
  {
    "id": 208,
    "category": 2,
    "text": "¿Qué acción se sitúa antes de reciclar en una estrategia circular?",
    "options": [
      "Evitar consumo innecesario y prolongar el uso técnicamente aceptable",
      "Generar más residuos separables",
      "Comprar repuestos de sobra",
      "Sustituir componentes todavía aptos"
    ],
    "correctIndex": 0,
    "explanation": "Prevenir consumo, reparar y reutilizar cuando sea seguro suele evitar más recursos que gestionar el residuo una vez generado. La jerarquía debe aplicarse junto a requisitos técnicos y de seguridad."
  },
  {
    "id": 301,
    "category": 3,
    "text": "Una ficha de datos de seguridad (FDS) acompaña a un recubrimiento. ¿Qué demuestra por sí sola?",
    "options": [
      "La aprobación completa del retrofit",
      "Información de seguridad aplicable, no toda la conformidad REACH ni la cualificación técnica",
      "Que cualquier uso está autorizado",
      "Que la sustancia no requiere controles"
    ],
    "correctIndex": 1,
    "explanation": "La FDS tiene alcance y función determinados. Hay que comprobar obligaciones de sustancia, mezcla o artículo, uso previsto, restricciones, exposición y el proceso interno de aprobación."
  },
  {
    "id": 302,
    "category": 3,
    "text": "Un recubrimiento alternativo promete menos sustancias problemáticas. ¿Cuándo se puede liberar?",
    "options": [
      "Cuando marketing lo considere ecológico",
      "En cuanto llegue la muestra",
      "Después de completar las comprobaciones químicas, técnicas, de proceso y aprobación aplicables",
      "Si se prueba sin registro"
    ],
    "correctIndex": 2,
    "explanation": "La sustitución necesita evidencia de composición y obligaciones relevantes, rendimiento, compatibilidad y controles del proceso. Promesa ambiental y conformidad no son sinónimos."
  },
  {
    "id": 303,
    "category": 3,
    "text": "Un proveedor entrega una declaración de conformidad de hace cinco años. ¿Qué haces?",
    "options": [
      "Aceptarla sin revisión",
      "Ignorar cualquier otra prueba",
      "Renunciar a comprobar el uso del componente",
      "Verificar vigencia, alcance, revisión y correspondencia con la pieza suministrada"
    ],
    "correctIndex": 3,
    "explanation": "Una declaración puede ser útil, pero una versión antigua o genérica puede no cubrir materiales, umbrales o condiciones actuales. La evidencia debe vincularse a la pieza y obligación concreta."
  },
  {
    "id": 304,
    "category": 3,
    "text": "La trazabilidad de minerales 3TG termina en el distribuidor directo. ¿Cuál es la respuesta adecuada?",
    "options": [
      "Pedir información de niveles anteriores y documentar riesgos y diligencia debida",
      "Dar por resuelto todo el suministro",
      "Afirmar que no existen riesgos",
      "Cambiar la categoría del indicador"
    ],
    "correctIndex": 0,
    "explanation": "Las cadenas multicapa exigen información sobre proveedores y origen, dentro de los procesos aplicables de diligencia debida. No conocer niveles anteriores no prueba ausencia de riesgos."
  },
  {
    "id": 305,
    "category": 3,
    "text": "Surge un indicio de abuso laboral en un proveedor indirecto. ¿Qué respuesta es proporcionada?",
    "options": [
      "Ocultar el hallazgo por ser indirecto",
      "Evaluar la evidencia, escalar, investigar y establecer acciones correctivas y seguimiento",
      "Rescindir sin análisis en todos los casos",
      "Publicar que todo está conforme"
    ],
    "correctIndex": 1,
    "explanation": "La diligencia debida exige una respuesta basada en riesgo, con responsables, implicación del proveedor y medidas de prevención y reparación adecuadas. Un hallazgo requiere gestión, no negación."
  },
  {
    "id": 306,
    "category": 3,
    "text": "Una caja de madera tiene marca ISPM 15, pero también señales de daño. ¿Qué es razonable?",
    "options": [
      "La marca autoriza cualquier condición física",
      "Basta con fotografiarla",
      "Verificar marca y estado real; retener o escalar si existen indicios que lo justifiquen",
      "Aprobarla automáticamente por llevar sello"
    ],
    "correctIndex": 2,
    "explanation": "La marca fitosanitaria y la inspección física aportan evidencias distintas. La decisión debe seguir el procedimiento de embalajes y control de riesgo aplicable, sin presuponer conformidad total."
  },
  {
    "id": 307,
    "category": 3,
    "text": "Hay un repuesto más rápido, pero su configuración no está verificada. ¿Qué se autoriza?",
    "options": [
      "Instalarlo para evitar retraso",
      "Usarlo si el coste es menor",
      "Cambiar su etiqueta",
      "Detener la liberación hasta verificar compatibilidad y trazabilidad aprobadas"
    ],
    "correctIndex": 3,
    "explanation": "La rapidez no reemplaza configuración, conformidad ni aeronavegabilidad. La opción logística solo es válida cuando los requisitos técnicos y documentales están satisfechos."
  },
  {
    "id": 308,
    "category": 3,
    "text": "Una auditoría detecta una carencia documental repetida. ¿Qué cierra eficazmente el problema?",
    "options": [
      "Acción correctiva con causa raíz, responsable, plazo y verificación de eficacia",
      "Corregir solo el archivo encontrado",
      "Borrar la observación",
      "Esperar al próximo auditor"
    ],
    "correctIndex": 0,
    "explanation": "La corrección puntual remedia un ejemplo; una CAPA aborda causas y verifica que no reaparezca. El cierre debe acompañarse de evidencia de efectividad."
  },
  {
    "id": 401,
    "category": 4,
    "text": "Faltan datos primarios de un proveedor sobre emisiones indirectas. ¿Qué se reporta?",
    "options": [
      "Cero hasta recibirlos",
      "Estimaciones identificadas, fuente, límites y un plan para mejorar el dato",
      "Una reducción certificada por defecto",
      "Solo los datos favorables"
    ],
    "correctIndex": 1,
    "explanation": "Un dato ausente no es un impacto nulo. Pueden emplearse factores o proxies adecuados cuando se indiquen método, incertidumbre y plan de sustitución por datos de mayor calidad."
  },
  {
    "id": 402,
    "category": 4,
    "text": "Un informe afirma «producto sostenible» sin delimitar la comparación. ¿Qué problema existe?",
    "options": [
      "Ninguno, es un término técnico completo",
      "La frase basta si lleva un icono",
      "No define qué característica, contra qué referencia ni con qué evidencia",
      "Puede considerarse una homologación"
    ],
    "correctIndex": 2,
    "explanation": "Las declaraciones genéricas inducen a error si ocultan límites y criterios. Es preferible especificar, por ejemplo, la reducción estimada de un consumo concreto bajo condiciones definidas."
  },
  {
    "id": 403,
    "category": 4,
    "text": "Un impacto de un proyecto no está medido. ¿Cómo se introduce en la evaluación?",
    "options": [
      "Como cero",
      "No se menciona",
      "Como resultado verificado",
      "Como desconocido o estimado, con fuente y nivel de incertidumbre"
    ],
    "correctIndex": 3,
    "explanation": "La ausencia de medida no justifica contabilizar cero. Los intervalos y los análisis de sensibilidad ayudan a tomar decisiones sin fingir precisión."
  },
  {
    "id": 404,
    "category": 4,
    "text": "¿Qué mejora una comunicación pública sobre una reducción ambiental?",
    "options": [
      "Base de comparación, periodo, límite, método y revisión de la evidencia",
      "Una fotografía llamativa",
      "Suprimir las excepciones",
      "No incluir un responsable"
    ],
    "correctIndex": 0,
    "explanation": "La trazabilidad de una afirmación depende de saber qué se comparó, dónde, cuándo y con qué método, además de reconocer condiciones y aspectos excluidos."
  },
  {
    "id": 405,
    "category": 4,
    "text": "Un KPI mejora por unidad producida, pero empeora en valor absoluto. ¿Qué informe es defendible?",
    "options": [
      "Presentar solo la intensidad",
      "Mostrar ambos KPI y explicar cambios de actividad y límites",
      "Eliminar el dato absoluto",
      "Cambiar el año base sin explicarlo"
    ],
    "correctIndex": 1,
    "explanation": "La mejora relativa puede convivir con un aumento de impacto total. Un cuadro de mando fiable permite interpretar ambos y su contexto."
  },
  {
    "id": 406,
    "category": 4,
    "text": "Un comité aprueba continuar un proyecto con datos aún incompletos. ¿Qué debe constar?",
    "options": [
      "Solo una intención positiva",
      "Una nota sin fecha",
      "Riesgos, condiciones, responsables, decisión y puntos de revisión",
      "Una etiqueta «aprobado ambientalmente»"
    ],
    "correctIndex": 2,
    "explanation": "La decisión condicionada debe identificar asuntos que podrían modificarla y quién los cerrará. Evaluación de sostenibilidad y autorización técnica tienen ámbitos distintos."
  },
  {
    "id": 407,
    "category": 4,
    "text": "Una formación menciona una obligación legal. ¿Equivale a una aprobación de cumplimiento?",
    "options": [
      "Sí, tras aprobar el cuestionario",
      "Sí, si el resultado supera el 90 %",
      "Sí, si lo dice el juego",
      "No: el aprendizaje no sustituye las comprobaciones y autorizaciones aplicables"
    ],
    "correctIndex": 3,
    "explanation": "Una app puede ayudar a comprender requisitos, pero la conformidad exige evidencia, responsabilidades y procesos competentes para cada caso real."
  },
  {
    "id": 408,
    "category": 4,
    "text": "Un proyecto compra créditos de carbono y anuncia que ha eliminado sus emisiones. ¿Qué falta?",
    "options": [
      "Distinguir emisiones reales, reducciones propias y créditos según las reglas y afirmaciones aplicables",
      "Solo el justificante del pago",
      "Nada: cualquier crédito elimina emisiones físicamente",
      "Un logotipo de compensación"
    ],
    "correctIndex": 0,
    "explanation": "Comprar créditos no elimina las emisiones físicas del proyecto. La comunicación debe diferenciar reducciones directas, inventario y uso de créditos, evitando equivalencias no respaldadas."
  },
  {
    "id": 501,
    "category": 5,
    "text": "Un A400M está inmovilizado y se propone un repuesto próximo sin historial documental completo. ¿Qué prioridad tiene la decisión?",
    "options": [
      "Liberarlo por proximidad",
      "Verificar configuración, trazabilidad y aptitud antes de elegir el transporte",
      "Instalarlo y revisar papeles después",
      "Omitir el problema del informe"
    ],
    "correctIndex": 1,
    "explanation": "La resiliencia operativa no consiste en saltarse controles. Una alternativa local puede mejorar plazo y logística solo si el componente es elegible y la documentación está cerrada."
  },
  {
    "id": 502,
    "category": 5,
    "text": "Tres reparaciones generan siempre transporte urgente. ¿Cuál es una mejora duradera?",
    "options": [
      "Reducir el número de informes",
      "Prohibir todo transporte aéreo",
      "Investigar fallos recurrentes, previsión, stock y tiempos de reparación con responsables",
      "Cambiar el color del cuadro de mando"
    ],
    "correctIndex": 2,
    "explanation": "Atacar la causa de las urgencias puede mejorar disponibilidad y consumo de recursos simultáneamente. Deben medirse los resultados bajo condiciones comparables."
  },
  {
    "id": 503,
    "category": 5,
    "text": "Un componente crítico corre riesgo de obsolescencia. ¿Qué análisis anticipa mejor el problema?",
    "options": [
      "Comprar sin límite todas las unidades disponibles",
      "Esperar a la última avería",
      "Eliminar el plan de mantenimiento",
      "Evaluar vida restante, alternativas cualificables, reparabilidad y suministro"
    ],
    "correctIndex": 3,
    "explanation": "La gestión de obsolescencia conecta ingeniería, compras y operaciones. Las decisiones requieren datos sobre vida útil, configuración, validación y exposición del suministro."
  },
  {
    "id": 504,
    "category": 5,
    "text": "En un despliegue, el agua usada para limpieza podría salir fuera de un sistema controlado. ¿Qué procede?",
    "options": [
      "Identificar el flujo, contenerlo y aplicar los procedimientos y controles del emplazamiento",
      "Descargarla porque es agua",
      "Añadir detergente y continuar",
      "Registrar únicamente el volumen teórico"
    ],
    "correctIndex": 0,
    "explanation": "La continuidad operativa debe incorporar límites de instalación, vertidos y sustancias. No se debe asumir que un agua de proceso puede verterse sin revisión."
  },
  {
    "id": 505,
    "category": 5,
    "text": "Un proveedor clave anuncia un plazo de suministro incierto. ¿Qué respuesta aporta resiliencia?",
    "options": [
      "Confiar exclusivamente en su optimismo",
      "Revisar criticidad, alternativas técnicamente cualificadas, inventario y contingencia",
      "Aprobar piezas no verificadas",
      "Cancelar todo mantenimiento"
    ],
    "correctIndex": 1,
    "explanation": "Una respuesta sólida conecta evaluación de riesgos, configuración y acciones preventivas. La diversificación solo funciona si las alternativas cumplen los requisitos aplicables."
  },
  {
    "id": 506,
    "category": 5,
    "text": "Un fenómeno meteorológico interrumpe una ruta de repuestos. ¿Qué debe revisarse?",
    "options": [
      "Solo el coste inicial",
      "La imagen corporativa",
      "Seguridad, plazo, alternativas verificadas, nuevas rutas y evidencia del cambio",
      "La media anual de temperaturas"
    ],
    "correctIndex": 2,
    "explanation": "La decisión debe actualizarse con el contexto real de la interrupción. Mantener una estimación anterior sin revisar riesgos y movimientos adicionales conduce a conclusiones erróneas."
  },
  {
    "id": 507,
    "category": 5,
    "text": "Los técnicos reportan que un conjunto exige demasiados desmontajes para repararlo. ¿Qué uso tiene ese dato?",
    "options": [
      "No tiene valor fuera del taller",
      "Sirve únicamente para valorar a los técnicos",
      "Debe desaparecer al cerrar la incidencia",
      "Retroalimentar ingeniería con tiempos, accesos, riesgos y posibilidades de mejora"
    ],
    "correctIndex": 3,
    "explanation": "La experiencia MRO puede orientar un diseño más mantenible y prolongar la vida útil. Las propuestas deben someterse a los controles de ingeniería y seguridad pertinentes."
  },
  {
    "id": 508,
    "category": 5,
    "text": "Un proyecto se compara con datos de utilización muy inciertos. ¿Cómo se toma una decisión responsable?",
    "options": [
      "Analizar escenarios, umbrales y revisar la decisión con nuevos datos",
      "Usar siempre el escenario más optimista",
      "Introducir cifras sin fuente",
      "Presentar como definitiva la primera estimación"
    ],
    "correctIndex": 0,
    "explanation": "La sensibilidad identifica supuestos que pueden invertir la elección. Una decisión condicionada necesita responsables, límites y un mecanismo de revisión."
  }
];

export function getRandomQuestion(category: number, usedIds: number[]): Question | null {
  const categoryQuestions = QUESTIONS.filter((question) => question.category === category);
  const available = categoryQuestions.filter((question) => !usedIds.includes(question.id));
  const pool = available.length > 0 ? available : categoryQuestions;
  return pool[Math.floor(Math.random() * pool.length)] ?? null;
}
