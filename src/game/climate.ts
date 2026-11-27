import type { Question } from './types';
import { EXTRA_CLIMATE_QUESTIONS } from './expanded-climate';
export const CLIMATE_MODE = typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('track') === 'climate';
export const CLIMATE_NAMES = ["Fundamentos climáticos","Resiliencia del producto","Diseño y validación","Operaciones y suministro","Fenómenos extremos","Evidencias y decisiones"];
export const CLIMATE_SHORT_NAMES = ["Clima","Producto","Diseño","Operaciones","Extremos","Evidencias"];
export const CLIMATE_QUESTIONS: Question[] = [
  {
    "id": 1001,
    "category": 0,
    "text": "Una planta reduce emisiones y protege equipos frente a futuras olas de calor. ¿Qué acción es adaptación?",
    "options": [
      "Proteger equipos frente al calor futuro",
      "Reducir únicamente emisiones",
      "Comprar compensaciones",
      "Medir la huella"
    ],
    "correctIndex": 0,
    "explanation": "La adaptación reduce riesgos físicos presentes o futuros; la mitigación limita las causas del cambio climático. Ambas pueden complementarse, pero no son equivalentes.",
    "difficulty": "foundation"
  },
  {
    "id": 1002,
    "category": 0,
    "text": "Un hangar está expuesto a calor creciente. ¿Qué caracteriza su vulnerabilidad?",
    "options": [
      "Temperatura regional por sí sola",
      "Sensibilidad de los sistemas y capacidad de afrontar el calor",
      "Ubicación sin datos de sistemas",
      "Inventario de emisiones"
    ],
    "correctIndex": 1,
    "explanation": "La amenaza es el calor, la exposición indica qué está afectado y la vulnerabilidad depende de la sensibilidad y capacidad de respuesta de los sistemas expuestos.",
    "difficulty": "foundation"
  },
  {
    "id": 1003,
    "category": 0,
    "text": "¿Cómo evaluar el riesgo climático de un producto con décadas de servicio?",
    "options": [
      "Solo el promedio del año pasado",
      "Una proyección global sin contexto",
      "Escenarios, regiones de uso, horizonte y requisitos técnicos",
      "Emisiones de fabricación"
    ],
    "correctIndex": 2,
    "explanation": "Los promedios históricos no bastan para una vida útil larga. Se necesitan escenarios pertinentes, exposición y límites técnicos, con incertidumbre explícita.",
    "difficulty": "applied"
  },
  {
    "id": 1004,
    "category": 0,
    "text": "Una medida mantiene una función durante una interrupción por calor. ¿Qué demuestra si se verifica?",
    "options": [
      "Ausencia de todo riesgo futuro",
      "Neutralidad climática",
      "Certificación de toda la aeronave",
      "Resiliencia de esa función bajo las condiciones evaluadas"
    ],
    "correctIndex": 3,
    "explanation": "La resiliencia consiste en mantener o recuperar funciones ante perturbaciones. La conclusión se limita a las condiciones, función y evidencias examinadas.",
    "difficulty": "advanced"
  },
  {
    "id": 1005,
    "category": 1,
    "text": "Ante calor extremo, ¿qué revisar antes de modificar un sistema de aviónica?",
    "options": [
      "Exposición térmica, límites, refrigeración y requisitos",
      "Aumentar refrigeración sin revisar restricciones",
      "Solo coste de adquisición",
      "Suponer que la cualificación cubre cualquier temperatura"
    ],
    "correctIndex": 0,
    "explanation": "El calor puede reducir márgenes térmicos. Ingeniería debe contrastar exposición y requisitos con datos y ensayos pertinentes antes de proponer cambios.",
    "difficulty": "foundation"
  },
  {
    "id": 1006,
    "category": 1,
    "text": "En condiciones más cálidas a igual presión, el aire puede ser menos denso. ¿Qué análisis procede?",
    "options": [
      "Aplicar un porcentaje fijo a todas las aeronaves",
      "Revisar prestaciones y márgenes con modelos autorizados",
      "Suponer que la densidad no afecta a prestaciones",
      "Modificar límites sin validación"
    ],
    "correctIndex": 1,
    "explanation": "La densidad del aire puede afectar a sustentación y prestaciones de propulsión. El efecto depende de configuración y condiciones; requiere análisis autorizado.",
    "difficulty": "foundation"
  },
  {
    "id": 1007,
    "category": 1,
    "text": "Un entorno presenta mayor exposición a partículas. ¿Qué debe distinguir Ingeniería?",
    "options": [
      "Solo el aspecto visual",
      "Polvo y abrasión como fenómeno idéntico",
      "Deposición, obstrucción, erosión y efectos sobre funciones",
      "Solo la masa del filtro"
    ],
    "correctIndex": 2,
    "explanation": "La acumulación y la erosión son mecanismos distintos. Los ensayos deben representar partículas y condiciones pertinentes, con criterios de aceptación específicos.",
    "difficulty": "applied"
  },
  {
    "id": 1008,
    "category": 1,
    "text": "Una proyección regional indica posible cambio de exposición a tormentas. ¿Qué respuesta es defendible?",
    "options": [
      "Declarar que todas las tormentas aumentarán en todas partes",
      "Rediseñar toda la plataforma inmediatamente",
      "Ignorar la proyección por su incertidumbre",
      "Analizar amenazas concretas, requisitos y brechas de evidencia"
    ],
    "correctIndex": 3,
    "explanation": "La evolución de las amenazas depende de la región y del fenómeno. Hay que evaluar exposición, requisitos y datos antes de concluir que existe una brecha.",
    "difficulty": "advanced"
  },
  {
    "id": 1009,
    "category": 2,
    "text": "¿Cómo iniciar una revisión de requisitos de diseño ante exposición climática futura?",
    "options": [
      "Comparar escenarios con requisitos y evidencias de cualificación",
      "Cambiar todos los requisitos sin análisis",
      "Usar solo un promedio mundial",
      "Eliminar los márgenes existentes"
    ],
    "correctIndex": 0,
    "explanation": "El análisis de brechas identifica qué requisitos y evidencias cubren la exposición y cuáles necesitan revisión. No sustituye los procesos de aprobación técnica.",
    "difficulty": "foundation"
  },
  {
    "id": 1010,
    "category": 2,
    "text": "Un recubrimiento bioinspirado reduce la deposición de polvo en laboratorio. ¿Qué falta?",
    "options": [
      "Nada: menor deposición prueba resistencia a abrasión",
      "Ensayos de erosión, durabilidad, compatibilidad y función",
      "Solo una fotografía",
      "Una declaración comercial"
    ],
    "correctIndex": 1,
    "explanation": "Menor deposición no implica menor erosión ni durabilidad. Deben comprobarse propiedades, efectos adversos y criterios técnicos antes de extrapolar resultados.",
    "difficulty": "foundation"
  },
  {
    "id": 1011,
    "category": 2,
    "text": "Dos protecciones térmicas tienen masas y consumos diferentes. ¿Cómo compararlas?",
    "options": [
      "Solo temperatura más baja",
      "Solo masa inicial",
      "Misma función y exposición, límites, masa, energía y mantenimiento",
      "Solo coste del prototipo"
    ],
    "correctIndex": 2,
    "explanation": "Una medida puede desplazar impactos o introducir restricciones. Una comparación equivalente considera requisitos, rendimiento, efectos adversos y vida útil.",
    "difficulty": "applied"
  },
  {
    "id": 1012,
    "category": 2,
    "text": "Un diseño supera el ensayo inicial, pero su vida útil ante ciclos de humedad es incierta. ¿Qué procede?",
    "options": [
      "Declarar vida útil ampliada",
      "Eliminar inspecciones",
      "Considerar suficiente el primer ensayo",
      "Ensayos de durabilidad, criterios y revisión especializada"
    ],
    "correctIndex": 3,
    "explanation": "La respuesta inicial no establece durabilidad. Los ciclos representativos y la evaluación de degradación permiten verificar la hipótesis bajo requisitos definidos.",
    "difficulty": "advanced"
  },
  {
    "id": 1013,
    "category": 3,
    "text": "Una ola de calor amenaza equipos de apoyo en tierra. ¿Qué evaluar primero?",
    "options": [
      "Funciones críticas, límites térmicos y medidas autorizadas",
      "Operar fuera de límites para evitar retrasos",
      "Reducir emisiones como única respuesta",
      "Sustituir todo sin diagnóstico"
    ],
    "correctIndex": 0,
    "explanation": "La adaptación operativa protege funciones dentro de límites aprobados. Identificar criticidad y exposición permite comparar medidas sin comprometer seguridad.",
    "difficulty": "foundation"
  },
  {
    "id": 1014,
    "category": 3,
    "text": "Una inundación puede interrumpir el suministro eléctrico. ¿Qué analizar?",
    "options": [
      "Solo consumo anual",
      "Exposición, cargas críticas, redundancia y recuperación",
      "Solo tarifa eléctrica",
      "Comprar equipos sin revisar ubicación"
    ],
    "correctIndex": 1,
    "explanation": "La continuidad requiere conocer las funciones dependientes de energía y si las alternativas comparten exposición. Las medidas deben verificarse bajo escenarios pertinentes.",
    "difficulty": "foundation"
  },
  {
    "id": 1015,
    "category": 3,
    "text": "Dos proveedores dependen del mismo puerto expuesto a inundación. ¿Qué implica?",
    "options": [
      "Redundancia garantizada por dos contratos",
      "Ausencia de riesgo por ser proveedores distintos",
      "Posible fallo común; revisar rutas independientes y alternativas cualificadas",
      "Ignorar la cualificación"
    ],
    "correctIndex": 2,
    "explanation": "La diversificación nominal no elimina dependencias comunes. La adaptación del suministro exige evaluar exposición, independencia, viabilidad y cualificación.",
    "difficulty": "applied"
  },
  {
    "id": 1016,
    "category": 3,
    "text": "Una base remota estudia combustible alternativo para reducir interrupciones. ¿Qué comprobar?",
    "options": [
      "Solo la etiqueta sostenible",
      "Cualquier mezcla es automáticamente apta",
      "Solo emisiones del transporte",
      "Disponibilidad, logística, almacenamiento, compatibilidad y autorizaciones"
    ],
    "correctIndex": 3,
    "explanation": "Reducir emisiones no garantiza seguridad de suministro. Una alternativa debe ser viable en condiciones locales y cumplir requisitos técnicos y de autorización.",
    "difficulty": "advanced"
  },
  {
    "id": 1017,
    "category": 4,
    "text": "El humo de un incendio forestal afecta a una zona de operaciones. ¿Qué información se necesita?",
    "options": [
      "Exposición, calidad de información, funciones y procedimientos autorizados",
      "Solo superficie quemada",
      "Pronóstico sin fuente",
      "Suponer que toda operación puede continuar"
    ],
    "correctIndex": 0,
    "explanation": "Los incendios pueden afectar a personas, infraestructuras y operaciones. La respuesta depende de información fiable, límites aplicables y coordinación autorizada.",
    "difficulty": "foundation"
  },
  {
    "id": 1018,
    "category": 4,
    "text": "Un sistema de detección de incendios genera alertas más rápidas. ¿Qué medir además?",
    "options": [
      "Solo número de alertas",
      "Falsas alarmas, omisiones, fiabilidad y utilidad para la respuesta",
      "Solo tamaño de pantalla",
      "Dar por probada la reducción de daños"
    ],
    "correctIndex": 1,
    "explanation": "La latencia es un indicador parcial. La calidad de detección y la integración con los responsables de respuesta deben evaluarse antes de afirmar un beneficio.",
    "difficulty": "foundation"
  },
  {
    "id": 1019,
    "category": 4,
    "text": "Una tormenta daña infraestructura de apoyo. ¿Cómo priorizar la recuperación?",
    "options": [
      "Solo activo de mayor coste",
      "Restaurar todo a la vez sin recursos",
      "Seguridad, funciones críticas, dependencias y objetivos de recuperación",
      "Ignorar dependencias externas"
    ],
    "correctIndex": 2,
    "explanation": "La recuperación protege a las personas y restablece funciones críticas según procedimientos, recursos y dependencias; los objetivos requieren seguimiento.",
    "difficulty": "applied"
  },
  {
    "id": 1020,
    "category": 4,
    "text": "Una protección frente al granizo funciona en una probeta. ¿Qué conclusión es válida?",
    "options": [
      "Protección garantizada frente a cualquier tormenta",
      "Aeronave cualificada automáticamente",
      "No se necesitan inspecciones",
      "Resultado limitado a probeta y condiciones; evaluar escalado y requisitos"
    ],
    "correctIndex": 3,
    "explanation": "Un ensayo de material no establece el comportamiento de una plataforma completa. Deben evaluarse representatividad, modos de fallo y requisitos con especialistas.",
    "difficulty": "advanced"
  },
  {
    "id": 1021,
    "category": 5,
    "text": "Un modelo ficticio estima menos horas de interrupción tras una medida. ¿Qué comunicar?",
    "options": [
      "Resultado condicionado a supuestos; requiere evidencia real",
      "Mejora operativa real demostrada",
      "Aprobación de la medida",
      "Disponibilidad de flota certificada"
    ],
    "correctIndex": 0,
    "explanation": "Una simulación permite explorar hipótesis, no demostrar resultados operativos. Deben comunicarse alcance, incertidumbre y validaciones pendientes.",
    "difficulty": "foundation"
  },
  {
    "id": 1022,
    "category": 5,
    "text": "¿Qué indicador ayuda a evaluar una protección térmica de un equipo?",
    "options": [
      "Número de reuniones",
      "Tiempo fuera del límite térmico bajo exposición equivalente",
      "Color del equipo",
      "Número de ideas sin ensayo"
    ],
    "correctIndex": 1,
    "explanation": "Un indicador debe relacionar la amenaza con la función y un criterio técnico verificable. La comparación requiere exposición y condiciones equivalentes.",
    "difficulty": "foundation"
  },
  {
    "id": 1023,
    "category": 5,
    "text": "Dos opciones cambian de posición según el escenario climático. ¿Qué hacer?",
    "options": [
      "Elegir siempre escenario favorable",
      "Ocultar resultados adversos",
      "Analizar sensibilidad, umbrales, incertidumbre y revisar con nuevos datos",
      "Promediar sin comprobar consecuencias"
    ],
    "correctIndex": 2,
    "explanation": "La sensibilidad identifica condiciones que cambian la decisión. Una recomendación defendible explicita escenarios, límites, responsables y criterios de revisión.",
    "difficulty": "applied"
  },
  {
    "id": 1024,
    "category": 5,
    "text": "¿Cómo trasladar el aprendizaje climático al trabajo?",
    "options": [
      "Proponer beneficio sin evidencia",
      "Aplicar cambios técnicos sin autorización",
      "Contar solo insignias",
      "Identificar función, amenaza, vulnerabilidad, medida, indicador y responsable"
    ],
    "correctIndex": 3,
    "explanation": "La transferencia profesional convierte una idea en hipótesis verificable y la canaliza hacia los responsables adecuados. El juego no autoriza cambios reales.",
    "difficulty": "advanced"
  },
  ...EXTRA_CLIMATE_QUESTIONS
];
