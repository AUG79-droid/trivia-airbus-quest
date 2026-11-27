import type { Question } from './types';
// Authored scenario-based educational cases. No real platform or operational data.
export const EXTRA_CLIMATE_QUESTIONS: (Question & {difficulty: 'foundation' | 'applied' | 'advanced'})[] = [
  {
    "id": 2001,
    "category": 0,
    "text": "Un aeródromo registra noches más cálidas y los equipos no se enfrían entre jornadas. ¿Qué vulnerabilidad o mecanismo de riesgo es más directamente relevante?",
    "options": [
      "Acumulación térmica entre ciclos de uso",
      "Exposición de activos críticos sin caracterizar",
      "Incertidumbre de escenario y modelo a largo plazo",
      "Interdependencia entre adaptación y capacidad energética"
    ],
    "correctIndex": 0,
    "explanation": "Mecanismo relevante: Acumulación térmica entre ciclos de uso. Respuesta pertinente: Evaluar recuperación térmica entre turnos y condiciones de funcionamiento. Evidencia a revisar: Series de temperatura interna y ciclos de trabajo representativos. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "foundation"
  },
  {
    "id": 2002,
    "category": 0,
    "text": "Un aeródromo registra noches más cálidas y los equipos no se enfrían entre jornadas. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Evaluar dependencia de ventilación y alternativas seguras",
      "Evaluar recuperación térmica entre turnos y condiciones de funcionamiento",
      "Revisar drenaje del conjunto y efectos aguas abajo",
      "Analizar intensidades y duraciones de precipitación"
    ],
    "correctIndex": 1,
    "explanation": "Mecanismo relevante: Acumulación térmica entre ciclos de uso. Respuesta pertinente: Evaluar recuperación térmica entre turnos y condiciones de funcionamiento. Evidencia a revisar: Series de temperatura interna y ciclos de trabajo representativos. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 2003,
    "category": 0,
    "text": "Un aeródromo registra noches más cálidas y los equipos no se enfrían entre jornadas. Respuesta propuesta: Evaluar recuperación térmica entre turnos y condiciones de funcionamiento. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Rango de resultados regionales y sensibilidad de la decisión",
      "Carga térmica y demanda eléctrica simultáneas en condiciones extremas",
      "Series de temperatura interna y ciclos de trabajo representativos",
      "Balance hídrico estacional y restricciones de extracción aplicables"
    ],
    "correctIndex": 2,
    "explanation": "Mecanismo relevante: Acumulación térmica entre ciclos de uso. Respuesta pertinente: Evaluar recuperación térmica entre turnos y condiciones de funcionamiento. Evidencia a revisar: Series de temperatura interna y ciclos de trabajo representativos. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 2004,
    "category": 0,
    "text": "Una planta dispone de mapas de inundación para 2050 pero desconoce dónde están sus cuadros eléctricos. ¿Qué vulnerabilidad o mecanismo de riesgo es más directamente relevante?",
    "options": [
      "Diferente capacidad de respuesta ante igual amenaza",
      "Transferencia de riesgo a terceros",
      "Los promedios ocultan extremos relevantes",
      "Exposición de activos críticos sin caracterizar"
    ],
    "correctIndex": 3,
    "explanation": "Mecanismo relevante: Exposición de activos críticos sin caracterizar. Respuesta pertinente: Cruzar cotas de equipos y escenarios de inundación. Evidencia a revisar: Inventario georreferenciado de equipos y niveles de agua por escenario. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "foundation"
  },
  {
    "id": 2005,
    "category": 0,
    "text": "Una planta dispone de mapas de inundación para 2050 pero desconoce dónde están sus cuadros eléctricos. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Cruzar cotas de equipos y escenarios de inundación",
      "Comparar escenarios y conjuntos de modelos pertinentes",
      "Comparar protección pasiva y activa bajo restricciones energéticas",
      "Evaluar consumo crítico y alternativas de suministro compatibles"
    ],
    "correctIndex": 0,
    "explanation": "Mecanismo relevante: Exposición de activos críticos sin caracterizar. Respuesta pertinente: Cruzar cotas de equipos y escenarios de inundación. Evidencia a revisar: Inventario georreferenciado de equipos y niveles de agua por escenario. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 2006,
    "category": 0,
    "text": "Una planta dispone de mapas de inundación para 2050 pero desconoce dónde están sus cuadros eléctricos. Respuesta propuesta: Cruzar cotas de equipos y escenarios de inundación. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Modelización de escorrentía antes y después en toda la zona",
      "Inventario georreferenciado de equipos y niveles de agua por escenario",
      "Curvas intensidad-duración-frecuencia pertinentes y capacidad de drenaje",
      "Indicadores de exposición y fechas de revisión vinculadas a umbrales"
    ],
    "correctIndex": 1,
    "explanation": "Mecanismo relevante: Exposición de activos críticos sin caracterizar. Respuesta pertinente: Cruzar cotas de equipos y escenarios de inundación. Evidencia a revisar: Inventario georreferenciado de equipos y niveles de agua por escenario. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 2007,
    "category": 0,
    "text": "Dos talleres soportan el mismo calor; uno tiene ventilación de reserva y otro no. ¿Qué vulnerabilidad o mecanismo de riesgo es más directamente relevante?",
    "options": [
      "Incertidumbre de escenario y modelo a largo plazo",
      "Interdependencia entre adaptación y capacidad energética",
      "Diferente capacidad de respuesta ante igual amenaza",
      "Riesgo físico de escasez de agua en la cuenca"
    ],
    "correctIndex": 2,
    "explanation": "Mecanismo relevante: Diferente capacidad de respuesta ante igual amenaza. Respuesta pertinente: Evaluar dependencia de ventilación y alternativas seguras. Evidencia a revisar: Pruebas de continuidad de ventilación y límites térmicos de ambos talleres. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "foundation"
  },
  {
    "id": 2008,
    "category": 0,
    "text": "Dos talleres soportan el mismo calor; uno tiene ventilación de reserva y otro no. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Revisar drenaje del conjunto y efectos aguas abajo",
      "Analizar intensidades y duraciones de precipitación",
      "Definir medidas escalonadas y umbrales de revisión",
      "Evaluar dependencia de ventilación y alternativas seguras"
    ],
    "correctIndex": 3,
    "explanation": "Mecanismo relevante: Diferente capacidad de respuesta ante igual amenaza. Respuesta pertinente: Evaluar dependencia de ventilación y alternativas seguras. Evidencia a revisar: Pruebas de continuidad de ventilación y límites térmicos de ambos talleres. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 2009,
    "category": 0,
    "text": "Dos talleres soportan el mismo calor; uno tiene ventilación de reserva y otro no. Respuesta propuesta: Evaluar dependencia de ventilación y alternativas seguras. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Pruebas de continuidad de ventilación y límites térmicos de ambos talleres",
      "Carga térmica y demanda eléctrica simultáneas en condiciones extremas",
      "Balance hídrico estacional y restricciones de extracción aplicables",
      "Series de temperatura interna y ciclos de trabajo representativos"
    ],
    "correctIndex": 0,
    "explanation": "Mecanismo relevante: Diferente capacidad de respuesta ante igual amenaza. Respuesta pertinente: Evaluar dependencia de ventilación y alternativas seguras. Evidencia a revisar: Pruebas de continuidad de ventilación y límites térmicos de ambos talleres. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 2010,
    "category": 0,
    "text": "Un programa utiliza proyecciones de un único modelo climático para 2080. ¿Qué vulnerabilidad o mecanismo de riesgo es más directamente relevante?",
    "options": [
      "Transferencia de riesgo a terceros",
      "Incertidumbre de escenario y modelo a largo plazo",
      "Los promedios ocultan extremos relevantes",
      "Riesgo de decisiones rígidas ante futuros divergentes"
    ],
    "correctIndex": 1,
    "explanation": "Mecanismo relevante: Incertidumbre de escenario y modelo a largo plazo. Respuesta pertinente: Comparar escenarios y conjuntos de modelos pertinentes. Evidencia a revisar: Rango de resultados regionales y sensibilidad de la decisión. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "foundation"
  },
  {
    "id": 2011,
    "category": 0,
    "text": "Un programa utiliza proyecciones de un único modelo climático para 2080. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Comparar protección pasiva y activa bajo restricciones energéticas",
      "Evaluar consumo crítico y alternativas de suministro compatibles",
      "Comparar escenarios y conjuntos de modelos pertinentes",
      "Evaluar recuperación térmica entre turnos y condiciones de funcionamiento"
    ],
    "correctIndex": 2,
    "explanation": "Mecanismo relevante: Incertidumbre de escenario y modelo a largo plazo. Respuesta pertinente: Comparar escenarios y conjuntos de modelos pertinentes. Evidencia a revisar: Rango de resultados regionales y sensibilidad de la decisión. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 2012,
    "category": 0,
    "text": "Un programa utiliza proyecciones de un único modelo climático para 2080. Respuesta propuesta: Comparar escenarios y conjuntos de modelos pertinentes. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Curvas intensidad-duración-frecuencia pertinentes y capacidad de drenaje",
      "Indicadores de exposición y fechas de revisión vinculadas a umbrales",
      "Inventario georreferenciado de equipos y niveles de agua por escenario",
      "Rango de resultados regionales y sensibilidad de la decisión"
    ],
    "correctIndex": 3,
    "explanation": "Mecanismo relevante: Incertidumbre de escenario y modelo a largo plazo. Respuesta pertinente: Comparar escenarios y conjuntos de modelos pertinentes. Evidencia a revisar: Rango de resultados regionales y sensibilidad de la decisión. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 2013,
    "category": 0,
    "text": "Un taller se protege frente a lluvias intensas desviando el agua hacia otro edificio. ¿Qué vulnerabilidad o mecanismo de riesgo es más directamente relevante?",
    "options": [
      "Transferencia de riesgo a terceros",
      "Interdependencia entre adaptación y capacidad energética",
      "Riesgo físico de escasez de agua en la cuenca",
      "Acumulación térmica entre ciclos de uso"
    ],
    "correctIndex": 0,
    "explanation": "Mecanismo relevante: Transferencia de riesgo a terceros. Respuesta pertinente: Revisar drenaje del conjunto y efectos aguas abajo. Evidencia a revisar: Modelización de escorrentía antes y después en toda la zona. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "foundation"
  },
  {
    "id": 2014,
    "category": 0,
    "text": "Un taller se protege frente a lluvias intensas desviando el agua hacia otro edificio. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Analizar intensidades y duraciones de precipitación",
      "Revisar drenaje del conjunto y efectos aguas abajo",
      "Definir medidas escalonadas y umbrales de revisión",
      "Cruzar cotas de equipos y escenarios de inundación"
    ],
    "correctIndex": 1,
    "explanation": "Mecanismo relevante: Transferencia de riesgo a terceros. Respuesta pertinente: Revisar drenaje del conjunto y efectos aguas abajo. Evidencia a revisar: Modelización de escorrentía antes y después en toda la zona. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 2015,
    "category": 0,
    "text": "Un taller se protege frente a lluvias intensas desviando el agua hacia otro edificio. Respuesta propuesta: Revisar drenaje del conjunto y efectos aguas abajo. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Balance hídrico estacional y restricciones de extracción aplicables",
      "Series de temperatura interna y ciclos de trabajo representativos",
      "Modelización de escorrentía antes y después en toda la zona",
      "Pruebas de continuidad de ventilación y límites térmicos de ambos talleres"
    ],
    "correctIndex": 2,
    "explanation": "Mecanismo relevante: Transferencia de riesgo a terceros. Respuesta pertinente: Revisar drenaje del conjunto y efectos aguas abajo. Evidencia a revisar: Modelización de escorrentía antes y después en toda la zona. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 2016,
    "category": 0,
    "text": "Una medida frente al calor requiere energía adicional durante picos de demanda. ¿Qué vulnerabilidad o mecanismo de riesgo es más directamente relevante?",
    "options": [
      "Los promedios ocultan extremos relevantes",
      "Riesgo de decisiones rígidas ante futuros divergentes",
      "Exposición de activos críticos sin caracterizar",
      "Interdependencia entre adaptación y capacidad energética"
    ],
    "correctIndex": 3,
    "explanation": "Mecanismo relevante: Interdependencia entre adaptación y capacidad energética. Respuesta pertinente: Comparar protección pasiva y activa bajo restricciones energéticas. Evidencia a revisar: Carga térmica y demanda eléctrica simultáneas en condiciones extremas. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "foundation"
  },
  {
    "id": 2017,
    "category": 0,
    "text": "Una medida frente al calor requiere energía adicional durante picos de demanda. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Comparar protección pasiva y activa bajo restricciones energéticas",
      "Evaluar consumo crítico y alternativas de suministro compatibles",
      "Evaluar recuperación térmica entre turnos y condiciones de funcionamiento",
      "Evaluar dependencia de ventilación y alternativas seguras"
    ],
    "correctIndex": 0,
    "explanation": "Mecanismo relevante: Interdependencia entre adaptación y capacidad energética. Respuesta pertinente: Comparar protección pasiva y activa bajo restricciones energéticas. Evidencia a revisar: Carga térmica y demanda eléctrica simultáneas en condiciones extremas. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 2018,
    "category": 0,
    "text": "Una medida frente al calor requiere energía adicional durante picos de demanda. Respuesta propuesta: Comparar protección pasiva y activa bajo restricciones energéticas. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Indicadores de exposición y fechas de revisión vinculadas a umbrales",
      "Carga térmica y demanda eléctrica simultáneas en condiciones extremas",
      "Inventario georreferenciado de equipos y niveles de agua por escenario",
      "Rango de resultados regionales y sensibilidad de la decisión"
    ],
    "correctIndex": 1,
    "explanation": "Mecanismo relevante: Interdependencia entre adaptación y capacidad energética. Respuesta pertinente: Comparar protección pasiva y activa bajo restricciones energéticas. Evidencia a revisar: Carga térmica y demanda eléctrica simultáneas en condiciones extremas. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 2019,
    "category": 0,
    "text": "Una instalación registra lluvia anual estable pero episodios de precipitación más concentrados. ¿Qué vulnerabilidad o mecanismo de riesgo es más directamente relevante?",
    "options": [
      "Riesgo físico de escasez de agua en la cuenca",
      "Acumulación térmica entre ciclos de uso",
      "Los promedios ocultan extremos relevantes",
      "Diferente capacidad de respuesta ante igual amenaza"
    ],
    "correctIndex": 2,
    "explanation": "Mecanismo relevante: Los promedios ocultan extremos relevantes. Respuesta pertinente: Analizar intensidades y duraciones de precipitación. Evidencia a revisar: Curvas intensidad-duración-frecuencia pertinentes y capacidad de drenaje. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "foundation"
  },
  {
    "id": 2020,
    "category": 0,
    "text": "Una instalación registra lluvia anual estable pero episodios de precipitación más concentrados. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Definir medidas escalonadas y umbrales de revisión",
      "Cruzar cotas de equipos y escenarios de inundación",
      "Comparar escenarios y conjuntos de modelos pertinentes",
      "Analizar intensidades y duraciones de precipitación"
    ],
    "correctIndex": 3,
    "explanation": "Mecanismo relevante: Los promedios ocultan extremos relevantes. Respuesta pertinente: Analizar intensidades y duraciones de precipitación. Evidencia a revisar: Curvas intensidad-duración-frecuencia pertinentes y capacidad de drenaje. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 2021,
    "category": 0,
    "text": "Una instalación registra lluvia anual estable pero episodios de precipitación más concentrados. Respuesta propuesta: Analizar intensidades y duraciones de precipitación. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Curvas intensidad-duración-frecuencia pertinentes y capacidad de drenaje",
      "Series de temperatura interna y ciclos de trabajo representativos",
      "Pruebas de continuidad de ventilación y límites térmicos de ambos talleres",
      "Modelización de escorrentía antes y después en toda la zona"
    ],
    "correctIndex": 0,
    "explanation": "Mecanismo relevante: Los promedios ocultan extremos relevantes. Respuesta pertinente: Analizar intensidades y duraciones de precipitación. Evidencia a revisar: Curvas intensidad-duración-frecuencia pertinentes y capacidad de drenaje. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 2022,
    "category": 0,
    "text": "Un proveedor depende de agua en una cuenca con sequías recurrentes. ¿Qué vulnerabilidad o mecanismo de riesgo es más directamente relevante?",
    "options": [
      "Riesgo de decisiones rígidas ante futuros divergentes",
      "Riesgo físico de escasez de agua en la cuenca",
      "Exposición de activos críticos sin caracterizar",
      "Incertidumbre de escenario y modelo a largo plazo"
    ],
    "correctIndex": 1,
    "explanation": "Mecanismo relevante: Riesgo físico de escasez de agua en la cuenca. Respuesta pertinente: Evaluar consumo crítico y alternativas de suministro compatibles. Evidencia a revisar: Balance hídrico estacional y restricciones de extracción aplicables. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "foundation"
  },
  {
    "id": 2023,
    "category": 0,
    "text": "Un proveedor depende de agua en una cuenca con sequías recurrentes. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Evaluar recuperación térmica entre turnos y condiciones de funcionamiento",
      "Evaluar dependencia de ventilación y alternativas seguras",
      "Evaluar consumo crítico y alternativas de suministro compatibles",
      "Revisar drenaje del conjunto y efectos aguas abajo"
    ],
    "correctIndex": 2,
    "explanation": "Mecanismo relevante: Riesgo físico de escasez de agua en la cuenca. Respuesta pertinente: Evaluar consumo crítico y alternativas de suministro compatibles. Evidencia a revisar: Balance hídrico estacional y restricciones de extracción aplicables. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 2024,
    "category": 0,
    "text": "Un proveedor depende de agua en una cuenca con sequías recurrentes. Respuesta propuesta: Evaluar consumo crítico y alternativas de suministro compatibles. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Inventario georreferenciado de equipos y niveles de agua por escenario",
      "Rango de resultados regionales y sensibilidad de la decisión",
      "Carga térmica y demanda eléctrica simultáneas en condiciones extremas",
      "Balance hídrico estacional y restricciones de extracción aplicables"
    ],
    "correctIndex": 3,
    "explanation": "Mecanismo relevante: Riesgo físico de escasez de agua en la cuenca. Respuesta pertinente: Evaluar consumo crítico y alternativas de suministro compatibles. Evidencia a revisar: Balance hídrico estacional y restricciones de extracción aplicables. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 2025,
    "category": 0,
    "text": "Un equipo planifica adaptación para 2030 y 2070 con incertidumbre creciente. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Definir medidas escalonadas y umbrales de revisión",
      "Cruzar cotas de equipos y escenarios de inundación",
      "Comparar escenarios y conjuntos de modelos pertinentes",
      "Comparar protección pasiva y activa bajo restricciones energéticas"
    ],
    "correctIndex": 0,
    "explanation": "Mecanismo relevante: Riesgo de decisiones rígidas ante futuros divergentes. Respuesta pertinente: Definir medidas escalonadas y umbrales de revisión. Evidencia a revisar: Indicadores de exposición y fechas de revisión vinculadas a umbrales. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 2026,
    "category": 0,
    "text": "Un equipo planifica adaptación para 2030 y 2070 con incertidumbre creciente. Respuesta propuesta: Definir medidas escalonadas y umbrales de revisión. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Pruebas de continuidad de ventilación y límites térmicos de ambos talleres",
      "Indicadores de exposición y fechas de revisión vinculadas a umbrales",
      "Modelización de escorrentía antes y después en toda la zona",
      "Curvas intensidad-duración-frecuencia pertinentes y capacidad de drenaje"
    ],
    "correctIndex": 1,
    "explanation": "Mecanismo relevante: Riesgo de decisiones rígidas ante futuros divergentes. Respuesta pertinente: Definir medidas escalonadas y umbrales de revisión. Evidencia a revisar: Indicadores de exposición y fechas de revisión vinculadas a umbrales. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 2027,
    "category": 1,
    "text": "Un compartimento electrónico opera cerca de su límite térmico durante días más cálidos. ¿Qué vulnerabilidad o mecanismo de riesgo es más directamente relevante?",
    "options": [
      "Cambio de densidad del aire y márgenes de prestaciones",
      "Obstrucción y pérdida de transferencia térmica",
      "Reducción del margen térmico de componentes",
      "Daño por impacto y posible degradación funcional"
    ],
    "correctIndex": 2,
    "explanation": "Mecanismo relevante: Reducción del margen térmico de componentes. Respuesta pertinente: Revisar disipación, límites y protección térmica con Ingeniería. Evidencia a revisar: Temperaturas de componentes bajo cargas y ambientes representativos. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "foundation"
  },
  {
    "id": 2028,
    "category": 1,
    "text": "Un compartimento electrónico opera cerca de su límite térmico durante días más cálidos. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Evaluar protección y mantenimiento frente a erosión",
      "Revisar protección anticorrosiva e inspección de zonas expuestas",
      "Revisar compatibilidad de materiales y uniones bajo ciclos térmicos",
      "Revisar disipación, límites y protección térmica con Ingeniería"
    ],
    "correctIndex": 3,
    "explanation": "Mecanismo relevante: Reducción del margen térmico de componentes. Respuesta pertinente: Revisar disipación, límites y protección térmica con Ingeniería. Evidencia a revisar: Temperaturas de componentes bajo cargas y ambientes representativos. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 2029,
    "category": 1,
    "text": "Un compartimento electrónico opera cerca de su límite térmico durante días más cálidos. Respuesta propuesta: Revisar disipación, límites y protección térmica con Ingeniería. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Temperaturas de componentes bajo cargas y ambientes representativos",
      "Caída de presión y transferencia térmica antes y después de ensuciamiento",
      "Ensayos de impacto representativos y medidas funcionales posteriores",
      "Evaluación especializada de requisitos y ensayos de protección eléctrica"
    ],
    "correctIndex": 0,
    "explanation": "Mecanismo relevante: Reducción del margen térmico de componentes. Respuesta pertinente: Revisar disipación, límites y protección térmica con Ingeniería. Evidencia a revisar: Temperaturas de componentes bajo cargas y ambientes representativos. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 2030,
    "category": 1,
    "text": "Un aeródromo elevado afronta temperaturas superiores a las históricas. ¿Qué vulnerabilidad o mecanismo de riesgo es más directamente relevante?",
    "options": [
      "Erosión progresiva de superficies",
      "Cambio de densidad del aire y márgenes de prestaciones",
      "Corrosión dependiente de humedad y sales",
      "Fatiga térmica y tensiones por expansión diferencial"
    ],
    "correctIndex": 1,
    "explanation": "Mecanismo relevante: Cambio de densidad del aire y márgenes de prestaciones. Respuesta pertinente: Solicitar análisis de prestaciones con datos autorizados de configuración. Evidencia a revisar: Resultados de modelos aprobados para presión, temperatura y configuración. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "foundation"
  },
  {
    "id": 2031,
    "category": 1,
    "text": "Un aeródromo elevado afronta temperaturas superiores a las históricas. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Evaluar filtración y acceso de limpieza dentro de requisitos",
      "Evaluar resistencia a impacto y función electromagnética con especialistas",
      "Solicitar análisis de prestaciones con datos autorizados de configuración",
      "Contrastar protección frente a rayos y evidencias de cualificación"
    ],
    "correctIndex": 2,
    "explanation": "Mecanismo relevante: Cambio de densidad del aire y márgenes de prestaciones. Respuesta pertinente: Solicitar análisis de prestaciones con datos autorizados de configuración. Evidencia a revisar: Resultados de modelos aprobados para presión, temperatura y configuración. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 2032,
    "category": 1,
    "text": "Un aeródromo elevado afronta temperaturas superiores a las históricas. Respuesta propuesta: Solicitar análisis de prestaciones con datos autorizados de configuración. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Evolución de corrosión en ciclos representativos de humedad y salinidad",
      "Inspecciones y propiedades funcionales tras ciclos térmicos representativos",
      "Estanqueidad y propiedades del sellante tras envejecimiento térmico",
      "Resultados de modelos aprobados para presión, temperatura y configuración"
    ],
    "correctIndex": 3,
    "explanation": "Mecanismo relevante: Cambio de densidad del aire y márgenes de prestaciones. Respuesta pertinente: Solicitar análisis de prestaciones con datos autorizados de configuración. Evidencia a revisar: Resultados de modelos aprobados para presión, temperatura y configuración. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 2033,
    "category": 1,
    "text": "Partículas minerales impactan repetidamente en superficies expuestas. ¿Qué vulnerabilidad o mecanismo de riesgo es más directamente relevante?",
    "options": [
      "Erosión progresiva de superficies",
      "Obstrucción y pérdida de transferencia térmica",
      "Daño por impacto y posible degradación funcional",
      "Riesgo eléctrico asociado a descargas atmosféricas"
    ],
    "correctIndex": 0,
    "explanation": "Mecanismo relevante: Erosión progresiva de superficies. Respuesta pertinente: Evaluar protección y mantenimiento frente a erosión. Evidencia a revisar: Pérdida de material y propiedades tras exposición representativa a partículas. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "foundation"
  },
  {
    "id": 2034,
    "category": 1,
    "text": "Partículas minerales impactan repetidamente en superficies expuestas. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Revisar protección anticorrosiva e inspección de zonas expuestas",
      "Evaluar protección y mantenimiento frente a erosión",
      "Revisar compatibilidad de materiales y uniones bajo ciclos térmicos",
      "Evaluar materiales de sellado compatibles con el entorno previsto"
    ],
    "correctIndex": 1,
    "explanation": "Mecanismo relevante: Erosión progresiva de superficies. Respuesta pertinente: Evaluar protección y mantenimiento frente a erosión. Evidencia a revisar: Pérdida de material y propiedades tras exposición representativa a partículas. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 2035,
    "category": 1,
    "text": "Partículas minerales impactan repetidamente en superficies expuestas. Respuesta propuesta: Evaluar protección y mantenimiento frente a erosión. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Ensayos de impacto representativos y medidas funcionales posteriores",
      "Evaluación especializada de requisitos y ensayos de protección eléctrica",
      "Pérdida de material y propiedades tras exposición representativa a partículas",
      "Temperaturas de componentes bajo cargas y ambientes representativos"
    ],
    "correctIndex": 2,
    "explanation": "Mecanismo relevante: Erosión progresiva de superficies. Respuesta pertinente: Evaluar protección y mantenimiento frente a erosión. Evidencia a revisar: Pérdida de material y propiedades tras exposición representativa a partículas. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 2036,
    "category": 1,
    "text": "Polvo fino se deposita en intercambiadores térmicos. ¿Qué vulnerabilidad o mecanismo de riesgo es más directamente relevante?",
    "options": [
      "Corrosión dependiente de humedad y sales",
      "Fatiga térmica y tensiones por expansión diferencial",
      "Degradación de propiedades de sellado por temperatura",
      "Obstrucción y pérdida de transferencia térmica"
    ],
    "correctIndex": 3,
    "explanation": "Mecanismo relevante: Obstrucción y pérdida de transferencia térmica. Respuesta pertinente: Evaluar filtración y acceso de limpieza dentro de requisitos. Evidencia a revisar: Caída de presión y transferencia térmica antes y después de ensuciamiento. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "foundation"
  },
  {
    "id": 2037,
    "category": 1,
    "text": "Polvo fino se deposita en intercambiadores térmicos. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Evaluar filtración y acceso de limpieza dentro de requisitos",
      "Evaluar resistencia a impacto y función electromagnética con especialistas",
      "Contrastar protección frente a rayos y evidencias de cualificación",
      "Revisar disipación, límites y protección térmica con Ingeniería"
    ],
    "correctIndex": 0,
    "explanation": "Mecanismo relevante: Obstrucción y pérdida de transferencia térmica. Respuesta pertinente: Evaluar filtración y acceso de limpieza dentro de requisitos. Evidencia a revisar: Caída de presión y transferencia térmica antes y después de ensuciamiento. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 2038,
    "category": 1,
    "text": "Polvo fino se deposita en intercambiadores térmicos. Respuesta propuesta: Evaluar filtración y acceso de limpieza dentro de requisitos. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Inspecciones y propiedades funcionales tras ciclos térmicos representativos",
      "Caída de presión y transferencia térmica antes y después de ensuciamiento",
      "Estanqueidad y propiedades del sellante tras envejecimiento térmico",
      "Resultados de modelos aprobados para presión, temperatura y configuración"
    ],
    "correctIndex": 1,
    "explanation": "Mecanismo relevante: Obstrucción y pérdida de transferencia térmica. Respuesta pertinente: Evaluar filtración y acceso de limpieza dentro de requisitos. Evidencia a revisar: Caída de presión y transferencia térmica antes y después de ensuciamiento. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 2039,
    "category": 1,
    "text": "Un conjunto metálico permanece más tiempo en ambientes húmedos y salinos. ¿Qué vulnerabilidad o mecanismo de riesgo es más directamente relevante?",
    "options": [
      "Daño por impacto y posible degradación funcional",
      "Riesgo eléctrico asociado a descargas atmosféricas",
      "Corrosión dependiente de humedad y sales",
      "Reducción del margen térmico de componentes"
    ],
    "correctIndex": 2,
    "explanation": "Mecanismo relevante: Corrosión dependiente de humedad y sales. Respuesta pertinente: Revisar protección anticorrosiva e inspección de zonas expuestas. Evidencia a revisar: Evolución de corrosión en ciclos representativos de humedad y salinidad. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "foundation"
  },
  {
    "id": 2040,
    "category": 1,
    "text": "Un conjunto metálico permanece más tiempo en ambientes húmedos y salinos. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Revisar compatibilidad de materiales y uniones bajo ciclos térmicos",
      "Evaluar materiales de sellado compatibles con el entorno previsto",
      "Solicitar análisis de prestaciones con datos autorizados de configuración",
      "Revisar protección anticorrosiva e inspección de zonas expuestas"
    ],
    "correctIndex": 3,
    "explanation": "Mecanismo relevante: Corrosión dependiente de humedad y sales. Respuesta pertinente: Revisar protección anticorrosiva e inspección de zonas expuestas. Evidencia a revisar: Evolución de corrosión en ciclos representativos de humedad y salinidad. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 2041,
    "category": 1,
    "text": "Un conjunto metálico permanece más tiempo en ambientes húmedos y salinos. Respuesta propuesta: Revisar protección anticorrosiva e inspección de zonas expuestas. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Evolución de corrosión en ciclos representativos de humedad y salinidad",
      "Evaluación especializada de requisitos y ensayos de protección eléctrica",
      "Temperaturas de componentes bajo cargas y ambientes representativos",
      "Pérdida de material y propiedades tras exposición representativa a partículas"
    ],
    "correctIndex": 0,
    "explanation": "Mecanismo relevante: Corrosión dependiente de humedad y sales. Respuesta pertinente: Revisar protección anticorrosiva e inspección de zonas expuestas. Evidencia a revisar: Evolución de corrosión en ciclos representativos de humedad y salinidad. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 2042,
    "category": 1,
    "text": "Un radomo está expuesto a impactos de granizo en escenarios hipotéticos. ¿Qué vulnerabilidad o mecanismo de riesgo es más directamente relevante?",
    "options": [
      "Fatiga térmica y tensiones por expansión diferencial",
      "Daño por impacto y posible degradación funcional",
      "Degradación de propiedades de sellado por temperatura",
      "Cambio de densidad del aire y márgenes de prestaciones"
    ],
    "correctIndex": 1,
    "explanation": "Mecanismo relevante: Daño por impacto y posible degradación funcional. Respuesta pertinente: Evaluar resistencia a impacto y función electromagnética con especialistas. Evidencia a revisar: Ensayos de impacto representativos y medidas funcionales posteriores. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "foundation"
  },
  {
    "id": 2043,
    "category": 1,
    "text": "Un radomo está expuesto a impactos de granizo en escenarios hipotéticos. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Contrastar protección frente a rayos y evidencias de cualificación",
      "Revisar disipación, límites y protección térmica con Ingeniería",
      "Evaluar resistencia a impacto y función electromagnética con especialistas",
      "Evaluar protección y mantenimiento frente a erosión"
    ],
    "correctIndex": 2,
    "explanation": "Mecanismo relevante: Daño por impacto y posible degradación funcional. Respuesta pertinente: Evaluar resistencia a impacto y función electromagnética con especialistas. Evidencia a revisar: Ensayos de impacto representativos y medidas funcionales posteriores. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 2044,
    "category": 1,
    "text": "Un radomo está expuesto a impactos de granizo en escenarios hipotéticos. Respuesta propuesta: Evaluar resistencia a impacto y función electromagnética con especialistas. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Estanqueidad y propiedades del sellante tras envejecimiento térmico",
      "Resultados de modelos aprobados para presión, temperatura y configuración",
      "Caída de presión y transferencia térmica antes y después de ensuciamiento",
      "Ensayos de impacto representativos y medidas funcionales posteriores"
    ],
    "correctIndex": 3,
    "explanation": "Mecanismo relevante: Daño por impacto y posible degradación funcional. Respuesta pertinente: Evaluar resistencia a impacto y función electromagnética con especialistas. Evidencia a revisar: Ensayos de impacto representativos y medidas funcionales posteriores. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 2045,
    "category": 1,
    "text": "Un equipo exterior sufre ciclos repetidos de calor y enfriamiento. ¿Qué vulnerabilidad o mecanismo de riesgo es más directamente relevante?",
    "options": [
      "Fatiga térmica y tensiones por expansión diferencial",
      "Riesgo eléctrico asociado a descargas atmosféricas",
      "Reducción del margen térmico de componentes",
      "Erosión progresiva de superficies"
    ],
    "correctIndex": 0,
    "explanation": "Mecanismo relevante: Fatiga térmica y tensiones por expansión diferencial. Respuesta pertinente: Revisar compatibilidad de materiales y uniones bajo ciclos térmicos. Evidencia a revisar: Inspecciones y propiedades funcionales tras ciclos térmicos representativos. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "foundation"
  },
  {
    "id": 2046,
    "category": 1,
    "text": "Un equipo exterior sufre ciclos repetidos de calor y enfriamiento. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Evaluar materiales de sellado compatibles con el entorno previsto",
      "Revisar compatibilidad de materiales y uniones bajo ciclos térmicos",
      "Solicitar análisis de prestaciones con datos autorizados de configuración",
      "Evaluar filtración y acceso de limpieza dentro de requisitos"
    ],
    "correctIndex": 1,
    "explanation": "Mecanismo relevante: Fatiga térmica y tensiones por expansión diferencial. Respuesta pertinente: Revisar compatibilidad de materiales y uniones bajo ciclos térmicos. Evidencia a revisar: Inspecciones y propiedades funcionales tras ciclos térmicos representativos. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 2047,
    "category": 1,
    "text": "Un equipo exterior sufre ciclos repetidos de calor y enfriamiento. Respuesta propuesta: Revisar compatibilidad de materiales y uniones bajo ciclos térmicos. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Temperaturas de componentes bajo cargas y ambientes representativos",
      "Pérdida de material y propiedades tras exposición representativa a partículas",
      "Inspecciones y propiedades funcionales tras ciclos térmicos representativos",
      "Evolución de corrosión en ciclos representativos de humedad y salinidad"
    ],
    "correctIndex": 2,
    "explanation": "Mecanismo relevante: Fatiga térmica y tensiones por expansión diferencial. Respuesta pertinente: Revisar compatibilidad de materiales y uniones bajo ciclos térmicos. Evidencia a revisar: Inspecciones y propiedades funcionales tras ciclos térmicos representativos. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 2048,
    "category": 1,
    "text": "Una zona de operación puede experimentar cambios en exposición a rayos. ¿Qué vulnerabilidad o mecanismo de riesgo es más directamente relevante?",
    "options": [
      "Degradación de propiedades de sellado por temperatura",
      "Cambio de densidad del aire y márgenes de prestaciones",
      "Obstrucción y pérdida de transferencia térmica",
      "Riesgo eléctrico asociado a descargas atmosféricas"
    ],
    "correctIndex": 3,
    "explanation": "Mecanismo relevante: Riesgo eléctrico asociado a descargas atmosféricas. Respuesta pertinente: Contrastar protección frente a rayos y evidencias de cualificación. Evidencia a revisar: Evaluación especializada de requisitos y ensayos de protección eléctrica. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "foundation"
  },
  {
    "id": 2049,
    "category": 1,
    "text": "Una zona de operación puede experimentar cambios en exposición a rayos. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Contrastar protección frente a rayos y evidencias de cualificación",
      "Revisar disipación, límites y protección térmica con Ingeniería",
      "Evaluar protección y mantenimiento frente a erosión",
      "Revisar protección anticorrosiva e inspección de zonas expuestas"
    ],
    "correctIndex": 0,
    "explanation": "Mecanismo relevante: Riesgo eléctrico asociado a descargas atmosféricas. Respuesta pertinente: Contrastar protección frente a rayos y evidencias de cualificación. Evidencia a revisar: Evaluación especializada de requisitos y ensayos de protección eléctrica. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 2050,
    "category": 1,
    "text": "Una zona de operación puede experimentar cambios en exposición a rayos. Respuesta propuesta: Contrastar protección frente a rayos y evidencias de cualificación. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Resultados de modelos aprobados para presión, temperatura y configuración",
      "Evaluación especializada de requisitos y ensayos de protección eléctrica",
      "Caída de presión y transferencia térmica antes y después de ensuciamiento",
      "Ensayos de impacto representativos y medidas funcionales posteriores"
    ],
    "correctIndex": 1,
    "explanation": "Mecanismo relevante: Riesgo eléctrico asociado a descargas atmosféricas. Respuesta pertinente: Contrastar protección frente a rayos y evidencias de cualificación. Evidencia a revisar: Evaluación especializada de requisitos y ensayos de protección eléctrica. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 2051,
    "category": 1,
    "text": "Un sistema de sellado está expuesto a temperaturas fuera de su historial de servicio. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Solicitar análisis de prestaciones con datos autorizados de configuración",
      "Evaluar filtración y acceso de limpieza dentro de requisitos",
      "Evaluar materiales de sellado compatibles con el entorno previsto",
      "Evaluar resistencia a impacto y función electromagnética con especialistas"
    ],
    "correctIndex": 2,
    "explanation": "Mecanismo relevante: Degradación de propiedades de sellado por temperatura. Respuesta pertinente: Evaluar materiales de sellado compatibles con el entorno previsto. Evidencia a revisar: Estanqueidad y propiedades del sellante tras envejecimiento térmico. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 2052,
    "category": 1,
    "text": "Un sistema de sellado está expuesto a temperaturas fuera de su historial de servicio. Respuesta propuesta: Evaluar materiales de sellado compatibles con el entorno previsto. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Pérdida de material y propiedades tras exposición representativa a partículas",
      "Evolución de corrosión en ciclos representativos de humedad y salinidad",
      "Inspecciones y propiedades funcionales tras ciclos térmicos representativos",
      "Estanqueidad y propiedades del sellante tras envejecimiento térmico"
    ],
    "correctIndex": 3,
    "explanation": "Mecanismo relevante: Degradación de propiedades de sellado por temperatura. Respuesta pertinente: Evaluar materiales de sellado compatibles con el entorno previsto. Evidencia a revisar: Estanqueidad y propiedades del sellante tras envejecimiento térmico. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 2053,
    "category": 2,
    "text": "Un programa debe revisar un requisito ambiental antiguo antes de una nueva variante. ¿Qué vulnerabilidad o mecanismo de riesgo es más directamente relevante?",
    "options": [
      "Desajuste potencial entre entorno previsto y requisito histórico",
      "Representatividad limitada de un ensayo estacionario",
      "Incertidumbre de extrapolación por escala y geometría",
      "Degradación de prestaciones durante la vida útil"
    ],
    "correctIndex": 0,
    "explanation": "Mecanismo relevante: Desajuste potencial entre entorno previsto y requisito histórico. Respuesta pertinente: Realizar análisis de brechas y elevar cambios al proceso de requisitos. Evidencia a revisar: Matriz trazable de exposición, requisito, evidencia y brecha. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "foundation"
  },
  {
    "id": 2054,
    "category": 2,
    "text": "Un programa debe revisar un requisito ambiental antiguo antes de una nueva variante. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Comparar configuraciones equivalentes con restricciones multidisciplinares",
      "Realizar análisis de brechas y elevar cambios al proceso de requisitos",
      "Evaluar compatibilidad, seguridad y requisitos del circuito",
      "Actualizar el perfil ambiental y revisar cobertura de requisitos"
    ],
    "correctIndex": 1,
    "explanation": "Mecanismo relevante: Desajuste potencial entre entorno previsto y requisito histórico. Respuesta pertinente: Realizar análisis de brechas y elevar cambios al proceso de requisitos. Evidencia a revisar: Matriz trazable de exposición, requisito, evidencia y brecha. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 2055,
    "category": 2,
    "text": "Un programa debe revisar un requisito ambiental antiguo antes de una nueva variante. Respuesta propuesta: Realizar análisis de brechas y elevar cambios al proceso de requisitos. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Correlación entre probetas, modelos y ensayos del conjunto",
      "Curvas de degradación y cumplimiento tras ciclos de envejecimiento",
      "Matriz trazable de exposición, requisito, evidencia y brecha",
      "Evidencia de aislamiento y comportamiento frente al fuego según requisitos aplicables"
    ],
    "correctIndex": 2,
    "explanation": "Mecanismo relevante: Desajuste potencial entre entorno previsto y requisito histórico. Respuesta pertinente: Realizar análisis de brechas y elevar cambios al proceso de requisitos. Evidencia a revisar: Matriz trazable de exposición, requisito, evidencia y brecha. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 2056,
    "category": 2,
    "text": "Un prototipo térmico funciona en una cámara con carga constante. ¿Qué vulnerabilidad o mecanismo de riesgo es más directamente relevante?",
    "options": [
      "Compromiso entre protección, masa y mantenibilidad",
      "Riesgos de compatibilidad química y de sistema",
      "Falta de representatividad ambiental de datos de entrada",
      "Representatividad limitada de un ensayo estacionario"
    ],
    "correctIndex": 3,
    "explanation": "Mecanismo relevante: Representatividad limitada de un ensayo estacionario. Respuesta pertinente: Definir perfiles de carga y transitorios pertinentes. Evidencia a revisar: Resultados bajo ciclos y transitorios representativos con criterios previos. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "foundation"
  },
  {
    "id": 2057,
    "category": 2,
    "text": "Un prototipo térmico funciona en una cámara con carga constante. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Definir perfiles de carga y transitorios pertinentes",
      "Planificar validación representativa del conjunto y modos de fallo",
      "Definir criterios de durabilidad y mantenimiento en servicio",
      "Evaluar ambas funciones y efectos secundarios antes de seleccionar"
    ],
    "correctIndex": 0,
    "explanation": "Mecanismo relevante: Representatividad limitada de un ensayo estacionario. Respuesta pertinente: Definir perfiles de carga y transitorios pertinentes. Evidencia a revisar: Resultados bajo ciclos y transitorios representativos con criterios previos. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 2058,
    "category": 2,
    "text": "Un prototipo térmico funciona en una cámara con carga constante. Respuesta propuesta: Definir perfiles de carga y transitorios pertinentes. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Ensayos de materiales y funcionamiento del circuito con el fluido propuesto",
      "Resultados bajo ciclos y transitorios representativos con criterios previos",
      "Comparación documentada de perfiles ambientales y límites cualificados",
      "Demostración de integración y sustitución con control de configuración"
    ],
    "correctIndex": 1,
    "explanation": "Mecanismo relevante: Representatividad limitada de un ensayo estacionario. Respuesta pertinente: Definir perfiles de carga y transitorios pertinentes. Evidencia a revisar: Resultados bajo ciclos y transitorios representativos con criterios previos. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 2059,
    "category": 2,
    "text": "Una protección contra polvo aumenta la masa y dificulta el acceso de mantenimiento. ¿Qué vulnerabilidad o mecanismo de riesgo es más directamente relevante?",
    "options": [
      "Incertidumbre de extrapolación por escala y geometría",
      "Degradación de prestaciones durante la vida útil",
      "Compromiso entre protección, masa y mantenibilidad",
      "Interacción entre adaptación térmica y requisitos de seguridad"
    ],
    "correctIndex": 2,
    "explanation": "Mecanismo relevante: Compromiso entre protección, masa y mantenibilidad. Respuesta pertinente: Comparar configuraciones equivalentes con restricciones multidisciplinares. Evidencia a revisar: Masa, eficacia de protección y tiempo de acceso medidos por configuración. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "foundation"
  },
  {
    "id": 2060,
    "category": 2,
    "text": "Una protección contra polvo aumenta la masa y dificulta el acceso de mantenimiento. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Evaluar compatibilidad, seguridad y requisitos del circuito",
      "Actualizar el perfil ambiental y revisar cobertura de requisitos",
      "Definir interfaces controladas y revisar intercambiabilidad",
      "Comparar configuraciones equivalentes con restricciones multidisciplinares"
    ],
    "correctIndex": 3,
    "explanation": "Mecanismo relevante: Compromiso entre protección, masa y mantenibilidad. Respuesta pertinente: Comparar configuraciones equivalentes con restricciones multidisciplinares. Evidencia a revisar: Masa, eficacia de protección y tiempo de acceso medidos por configuración. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 2061,
    "category": 2,
    "text": "Una protección contra polvo aumenta la masa y dificulta el acceso de mantenimiento. Respuesta propuesta: Comparar configuraciones equivalentes con restricciones multidisciplinares. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Masa, eficacia de protección y tiempo de acceso medidos por configuración",
      "Curvas de degradación y cumplimiento tras ciclos de envejecimiento",
      "Evidencia de aislamiento y comportamiento frente al fuego según requisitos aplicables",
      "Matriz trazable de exposición, requisito, evidencia y brecha"
    ],
    "correctIndex": 0,
    "explanation": "Mecanismo relevante: Compromiso entre protección, masa y mantenibilidad. Respuesta pertinente: Comparar configuraciones equivalentes con restricciones multidisciplinares. Evidencia a revisar: Masa, eficacia de protección y tiempo de acceso medidos por configuración. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 2062,
    "category": 2,
    "text": "Una pieza ensayada a escala reducida muestra buen comportamiento ante impacto. ¿Qué vulnerabilidad o mecanismo de riesgo es más directamente relevante?",
    "options": [
      "Riesgos de compatibilidad química y de sistema",
      "Incertidumbre de extrapolación por escala y geometría",
      "Falta de representatividad ambiental de datos de entrada",
      "Dependencia de interfaces y configuración para futuras adaptaciones"
    ],
    "correctIndex": 1,
    "explanation": "Mecanismo relevante: Incertidumbre de extrapolación por escala y geometría. Respuesta pertinente: Planificar validación representativa del conjunto y modos de fallo. Evidencia a revisar: Correlación entre probetas, modelos y ensayos del conjunto. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "foundation"
  },
  {
    "id": 2063,
    "category": 2,
    "text": "Una pieza ensayada a escala reducida muestra buen comportamiento ante impacto. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Definir criterios de durabilidad y mantenimiento en servicio",
      "Evaluar ambas funciones y efectos secundarios antes de seleccionar",
      "Planificar validación representativa del conjunto y modos de fallo",
      "Realizar análisis de brechas y elevar cambios al proceso de requisitos"
    ],
    "correctIndex": 2,
    "explanation": "Mecanismo relevante: Incertidumbre de extrapolación por escala y geometría. Respuesta pertinente: Planificar validación representativa del conjunto y modos de fallo. Evidencia a revisar: Correlación entre probetas, modelos y ensayos del conjunto. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 2064,
    "category": 2,
    "text": "Una pieza ensayada a escala reducida muestra buen comportamiento ante impacto. Respuesta propuesta: Planificar validación representativa del conjunto y modos de fallo. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Comparación documentada de perfiles ambientales y límites cualificados",
      "Demostración de integración y sustitución con control de configuración",
      "Resultados bajo ciclos y transitorios representativos con criterios previos",
      "Correlación entre probetas, modelos y ensayos del conjunto"
    ],
    "correctIndex": 3,
    "explanation": "Mecanismo relevante: Incertidumbre de extrapolación por escala y geometría. Respuesta pertinente: Planificar validación representativa del conjunto y modos de fallo. Evidencia a revisar: Correlación entre probetas, modelos y ensayos del conjunto. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 2065,
    "category": 2,
    "text": "Una alternativa de refrigeración introduce un fluido distinto. ¿Qué vulnerabilidad o mecanismo de riesgo es más directamente relevante?",
    "options": [
      "Riesgos de compatibilidad química y de sistema",
      "Degradación de prestaciones durante la vida útil",
      "Interacción entre adaptación térmica y requisitos de seguridad",
      "Desajuste potencial entre entorno previsto y requisito histórico"
    ],
    "correctIndex": 0,
    "explanation": "Mecanismo relevante: Riesgos de compatibilidad química y de sistema. Respuesta pertinente: Evaluar compatibilidad, seguridad y requisitos del circuito. Evidencia a revisar: Ensayos de materiales y funcionamiento del circuito con el fluido propuesto. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "foundation"
  },
  {
    "id": 2066,
    "category": 2,
    "text": "Una alternativa de refrigeración introduce un fluido distinto. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Actualizar el perfil ambiental y revisar cobertura de requisitos",
      "Evaluar compatibilidad, seguridad y requisitos del circuito",
      "Definir interfaces controladas y revisar intercambiabilidad",
      "Definir perfiles de carga y transitorios pertinentes"
    ],
    "correctIndex": 1,
    "explanation": "Mecanismo relevante: Riesgos de compatibilidad química y de sistema. Respuesta pertinente: Evaluar compatibilidad, seguridad y requisitos del circuito. Evidencia a revisar: Ensayos de materiales y funcionamiento del circuito con el fluido propuesto. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 2067,
    "category": 2,
    "text": "Una alternativa de refrigeración introduce un fluido distinto. Respuesta propuesta: Evaluar compatibilidad, seguridad y requisitos del circuito. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Evidencia de aislamiento y comportamiento frente al fuego según requisitos aplicables",
      "Matriz trazable de exposición, requisito, evidencia y brecha",
      "Ensayos de materiales y funcionamiento del circuito con el fluido propuesto",
      "Masa, eficacia de protección y tiempo de acceso medidos por configuración"
    ],
    "correctIndex": 2,
    "explanation": "Mecanismo relevante: Riesgos de compatibilidad química y de sistema. Respuesta pertinente: Evaluar compatibilidad, seguridad y requisitos del circuito. Evidencia a revisar: Ensayos de materiales y funcionamiento del circuito con el fluido propuesto. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 2068,
    "category": 2,
    "text": "Una solución cumple al inicio pero pierde rendimiento tras envejecimiento. ¿Qué vulnerabilidad o mecanismo de riesgo es más directamente relevante?",
    "options": [
      "Falta de representatividad ambiental de datos de entrada",
      "Dependencia de interfaces y configuración para futuras adaptaciones",
      "Representatividad limitada de un ensayo estacionario",
      "Degradación de prestaciones durante la vida útil"
    ],
    "correctIndex": 3,
    "explanation": "Mecanismo relevante: Degradación de prestaciones durante la vida útil. Respuesta pertinente: Definir criterios de durabilidad y mantenimiento en servicio. Evidencia a revisar: Curvas de degradación y cumplimiento tras ciclos de envejecimiento. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "foundation"
  },
  {
    "id": 2069,
    "category": 2,
    "text": "Una solución cumple al inicio pero pierde rendimiento tras envejecimiento. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Definir criterios de durabilidad y mantenimiento en servicio",
      "Evaluar ambas funciones y efectos secundarios antes de seleccionar",
      "Realizar análisis de brechas y elevar cambios al proceso de requisitos",
      "Comparar configuraciones equivalentes con restricciones multidisciplinares"
    ],
    "correctIndex": 0,
    "explanation": "Mecanismo relevante: Degradación de prestaciones durante la vida útil. Respuesta pertinente: Definir criterios de durabilidad y mantenimiento en servicio. Evidencia a revisar: Curvas de degradación y cumplimiento tras ciclos de envejecimiento. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 2070,
    "category": 2,
    "text": "Una solución cumple al inicio pero pierde rendimiento tras envejecimiento. Respuesta propuesta: Definir criterios de durabilidad y mantenimiento en servicio. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Demostración de integración y sustitución con control de configuración",
      "Curvas de degradación y cumplimiento tras ciclos de envejecimiento",
      "Resultados bajo ciclos y transitorios representativos con criterios previos",
      "Correlación entre probetas, modelos y ensayos del conjunto"
    ],
    "correctIndex": 1,
    "explanation": "Mecanismo relevante: Degradación de prestaciones durante la vida útil. Respuesta pertinente: Definir criterios de durabilidad y mantenimiento en servicio. Evidencia a revisar: Curvas de degradación y cumplimiento tras ciclos de envejecimiento. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 2071,
    "category": 2,
    "text": "Un diseño utiliza datos de una región templada para una futura región cálida y húmeda. ¿Qué vulnerabilidad o mecanismo de riesgo es más directamente relevante?",
    "options": [
      "Interacción entre adaptación térmica y requisitos de seguridad",
      "Desajuste potencial entre entorno previsto y requisito histórico",
      "Falta de representatividad ambiental de datos de entrada",
      "Compromiso entre protección, masa y mantenibilidad"
    ],
    "correctIndex": 2,
    "explanation": "Mecanismo relevante: Falta de representatividad ambiental de datos de entrada. Respuesta pertinente: Actualizar el perfil ambiental y revisar cobertura de requisitos. Evidencia a revisar: Comparación documentada de perfiles ambientales y límites cualificados. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "foundation"
  },
  {
    "id": 2072,
    "category": 2,
    "text": "Un diseño utiliza datos de una región templada para una futura región cálida y húmeda. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Definir interfaces controladas y revisar intercambiabilidad",
      "Definir perfiles de carga y transitorios pertinentes",
      "Planificar validación representativa del conjunto y modos de fallo",
      "Actualizar el perfil ambiental y revisar cobertura de requisitos"
    ],
    "correctIndex": 3,
    "explanation": "Mecanismo relevante: Falta de representatividad ambiental de datos de entrada. Respuesta pertinente: Actualizar el perfil ambiental y revisar cobertura de requisitos. Evidencia a revisar: Comparación documentada de perfiles ambientales y límites cualificados. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 2073,
    "category": 2,
    "text": "Un diseño utiliza datos de una región templada para una futura región cálida y húmeda. Respuesta propuesta: Actualizar el perfil ambiental y revisar cobertura de requisitos. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Comparación documentada de perfiles ambientales y límites cualificados",
      "Matriz trazable de exposición, requisito, evidencia y brecha",
      "Masa, eficacia de protección y tiempo de acceso medidos por configuración",
      "Ensayos de materiales y funcionamiento del circuito con el fluido propuesto"
    ],
    "correctIndex": 0,
    "explanation": "Mecanismo relevante: Falta de representatividad ambiental de datos de entrada. Respuesta pertinente: Actualizar el perfil ambiental y revisar cobertura de requisitos. Evidencia a revisar: Comparación documentada de perfiles ambientales y límites cualificados. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 2074,
    "category": 2,
    "text": "Un cambio de material afecta simultáneamente aislamiento térmico y comportamiento frente al fuego. ¿Qué vulnerabilidad o mecanismo de riesgo es más directamente relevante?",
    "options": [
      "Dependencia de interfaces y configuración para futuras adaptaciones",
      "Interacción entre adaptación térmica y requisitos de seguridad",
      "Representatividad limitada de un ensayo estacionario",
      "Incertidumbre de extrapolación por escala y geometría"
    ],
    "correctIndex": 1,
    "explanation": "Mecanismo relevante: Interacción entre adaptación térmica y requisitos de seguridad. Respuesta pertinente: Evaluar ambas funciones y efectos secundarios antes de seleccionar. Evidencia a revisar: Evidencia de aislamiento y comportamiento frente al fuego según requisitos aplicables. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "foundation"
  },
  {
    "id": 2075,
    "category": 2,
    "text": "Un cambio de material afecta simultáneamente aislamiento térmico y comportamiento frente al fuego. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Realizar análisis de brechas y elevar cambios al proceso de requisitos",
      "Comparar configuraciones equivalentes con restricciones multidisciplinares",
      "Evaluar ambas funciones y efectos secundarios antes de seleccionar",
      "Evaluar compatibilidad, seguridad y requisitos del circuito"
    ],
    "correctIndex": 2,
    "explanation": "Mecanismo relevante: Interacción entre adaptación térmica y requisitos de seguridad. Respuesta pertinente: Evaluar ambas funciones y efectos secundarios antes de seleccionar. Evidencia a revisar: Evidencia de aislamiento y comportamiento frente al fuego según requisitos aplicables. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 2076,
    "category": 2,
    "text": "Un cambio de material afecta simultáneamente aislamiento térmico y comportamiento frente al fuego. Respuesta propuesta: Evaluar ambas funciones y efectos secundarios antes de seleccionar. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Resultados bajo ciclos y transitorios representativos con criterios previos",
      "Correlación entre probetas, modelos y ensayos del conjunto",
      "Curvas de degradación y cumplimiento tras ciclos de envejecimiento",
      "Evidencia de aislamiento y comportamiento frente al fuego según requisitos aplicables"
    ],
    "correctIndex": 3,
    "explanation": "Mecanismo relevante: Interacción entre adaptación térmica y requisitos de seguridad. Respuesta pertinente: Evaluar ambas funciones y efectos secundarios antes de seleccionar. Evidencia a revisar: Evidencia de aislamiento y comportamiento frente al fuego según requisitos aplicables. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 2077,
    "category": 2,
    "text": "Una propuesta modular permitiría actualizar protecciones climáticas futuras. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Definir interfaces controladas y revisar intercambiabilidad",
      "Definir perfiles de carga y transitorios pertinentes",
      "Planificar validación representativa del conjunto y modos de fallo",
      "Definir criterios de durabilidad y mantenimiento en servicio"
    ],
    "correctIndex": 0,
    "explanation": "Mecanismo relevante: Dependencia de interfaces y configuración para futuras adaptaciones. Respuesta pertinente: Definir interfaces controladas y revisar intercambiabilidad. Evidencia a revisar: Demostración de integración y sustitución con control de configuración. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 2078,
    "category": 2,
    "text": "Una propuesta modular permitiría actualizar protecciones climáticas futuras. Respuesta propuesta: Definir interfaces controladas y revisar intercambiabilidad. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Masa, eficacia de protección y tiempo de acceso medidos por configuración",
      "Demostración de integración y sustitución con control de configuración",
      "Ensayos de materiales y funcionamiento del circuito con el fluido propuesto",
      "Comparación documentada de perfiles ambientales y límites cualificados"
    ],
    "correctIndex": 1,
    "explanation": "Mecanismo relevante: Dependencia de interfaces y configuración para futuras adaptaciones. Respuesta pertinente: Definir interfaces controladas y revisar intercambiabilidad. Evidencia a revisar: Demostración de integración y sustitución con control de configuración. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 2079,
    "category": 3,
    "text": "Una estación de apoyo pierde capacidad de refrigeración durante un pico de calor. ¿Qué vulnerabilidad o mecanismo de riesgo es más directamente relevante?",
    "options": [
      "Pérdida de acceso o integridad del inventario",
      "Variabilidad de plazos por exposición de la ruta",
      "Interrupción de funciones dependientes de refrigeración",
      "Fallo común de redundancias por exposición compartida"
    ],
    "correctIndex": 2,
    "explanation": "Mecanismo relevante: Interrupción de funciones dependientes de refrigeración. Respuesta pertinente: Priorizar cargas críticas y evaluar capacidad de refrigeración de respaldo. Evidencia a revisar: Horas de continuidad térmica de cargas críticas bajo escenario de calor. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "foundation"
  },
  {
    "id": 2080,
    "category": 3,
    "text": "Una estación de apoyo pierde capacidad de refrigeración durante un pico de calor. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Revisar dependencia hídrica y alternativas cualificadas con el proveedor",
      "Evaluar reservas y alternativas de suministro autorizadas",
      "Evaluar planificación y controles térmicos con responsables de seguridad",
      "Priorizar cargas críticas y evaluar capacidad de refrigeración de respaldo"
    ],
    "correctIndex": 3,
    "explanation": "Mecanismo relevante: Interrupción de funciones dependientes de refrigeración. Respuesta pertinente: Priorizar cargas críticas y evaluar capacidad de refrigeración de respaldo. Evidencia a revisar: Horas de continuidad térmica de cargas críticas bajo escenario de calor. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 2081,
    "category": 3,
    "text": "Una estación de apoyo pierde capacidad de refrigeración durante un pico de calor. Respuesta propuesta: Priorizar cargas críticas y evaluar capacidad de refrigeración de respaldo. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Horas de continuidad térmica de cargas críticas bajo escenario de calor",
      "Distribución de plazos y disponibilidad de rutas durante eventos",
      "Pruebas de disponibilidad de fuentes bajo inundación y pérdida de red",
      "Registros de temperatura y respuesta ante fallo simulado de climatización"
    ],
    "correctIndex": 0,
    "explanation": "Mecanismo relevante: Interrupción de funciones dependientes de refrigeración. Respuesta pertinente: Priorizar cargas críticas y evaluar capacidad de refrigeración de respaldo. Evidencia a revisar: Horas de continuidad térmica de cargas críticas bajo escenario de calor. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 2082,
    "category": 3,
    "text": "Un almacén de repuestos se ubica en una zona con inundación potencial. ¿Qué vulnerabilidad o mecanismo de riesgo es más directamente relevante?",
    "options": [
      "Interrupción de producción por restricciones hídricas",
      "Pérdida de acceso o integridad del inventario",
      "Dependencia de ventanas logísticas estacionales",
      "Exposición de procesos y personas a estrés térmico"
    ],
    "correctIndex": 1,
    "explanation": "Mecanismo relevante: Pérdida de acceso o integridad del inventario. Respuesta pertinente: Evaluar ubicación, protección y distribución alternativa del inventario. Evidencia a revisar: Inventario accesible y tiempos de reposición bajo escenarios de inundación. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "foundation"
  },
  {
    "id": 2083,
    "category": 3,
    "text": "Un almacén de repuestos se ubica en una zona con inundación potencial. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Comparar rutas alternativas y ventanas de entrega realistas",
      "Revisar independencia física y protección de fuentes de respaldo",
      "Evaluar ubicación, protección y distribución alternativa del inventario",
      "Evaluar monitorización, alarmas y contingencia de almacenamiento"
    ],
    "correctIndex": 2,
    "explanation": "Mecanismo relevante: Pérdida de acceso o integridad del inventario. Respuesta pertinente: Evaluar ubicación, protección y distribución alternativa del inventario. Evidencia a revisar: Inventario accesible y tiempos de reposición bajo escenarios de inundación. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 2084,
    "category": 3,
    "text": "Un almacén de repuestos se ubica en una zona con inundación potencial. Respuesta propuesta: Evaluar ubicación, protección y distribución alternativa del inventario. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Cobertura de demanda y autonomía durante interrupciones representativas",
      "Mediciones de condiciones térmicas y cumplimiento de límites del proceso",
      "Disponibilidad de accesos y tiempo de recuperación en escenarios pertinentes",
      "Inventario accesible y tiempos de reposición bajo escenarios de inundación"
    ],
    "correctIndex": 3,
    "explanation": "Mecanismo relevante: Pérdida de acceso o integridad del inventario. Respuesta pertinente: Evaluar ubicación, protección y distribución alternativa del inventario. Evidencia a revisar: Inventario accesible y tiempos de reposición bajo escenarios de inundación. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 2085,
    "category": 3,
    "text": "Una fábrica depende de un proveedor que necesita mucha agua durante sequías. ¿Qué vulnerabilidad o mecanismo de riesgo es más directamente relevante?",
    "options": [
      "Interrupción de producción por restricciones hídricas",
      "Variabilidad de plazos por exposición de la ruta",
      "Fallo común de redundancias por exposición compartida",
      "Pérdida de condiciones de almacenamiento por fallo térmico"
    ],
    "correctIndex": 0,
    "explanation": "Mecanismo relevante: Interrupción de producción por restricciones hídricas. Respuesta pertinente: Revisar dependencia hídrica y alternativas cualificadas con el proveedor. Evidencia a revisar: Capacidad de producción bajo restricciones hídricas y planes comprobados. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "foundation"
  },
  {
    "id": 2086,
    "category": 3,
    "text": "Una fábrica depende de un proveedor que necesita mucha agua durante sequías. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Evaluar reservas y alternativas de suministro autorizadas",
      "Revisar dependencia hídrica y alternativas cualificadas con el proveedor",
      "Evaluar planificación y controles térmicos con responsables de seguridad",
      "Evaluar accesos alternativos y continuidad de servicios esenciales"
    ],
    "correctIndex": 1,
    "explanation": "Mecanismo relevante: Interrupción de producción por restricciones hídricas. Respuesta pertinente: Revisar dependencia hídrica y alternativas cualificadas con el proveedor. Evidencia a revisar: Capacidad de producción bajo restricciones hídricas y planes comprobados. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 2087,
    "category": 3,
    "text": "Una fábrica depende de un proveedor que necesita mucha agua durante sequías. Respuesta propuesta: Revisar dependencia hídrica y alternativas cualificadas con el proveedor. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Pruebas de disponibilidad de fuentes bajo inundación y pérdida de red",
      "Registros de temperatura y respuesta ante fallo simulado de climatización",
      "Capacidad de producción bajo restricciones hídricas y planes comprobados",
      "Horas de continuidad térmica de cargas críticas bajo escenario de calor"
    ],
    "correctIndex": 2,
    "explanation": "Mecanismo relevante: Interrupción de producción por restricciones hídricas. Respuesta pertinente: Revisar dependencia hídrica y alternativas cualificadas con el proveedor. Evidencia a revisar: Capacidad de producción bajo restricciones hídricas y planes comprobados. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 2088,
    "category": 3,
    "text": "Una ruta logística sufre cierres recurrentes por calor y deterioro de infraestructura. ¿Qué vulnerabilidad o mecanismo de riesgo es más directamente relevante?",
    "options": [
      "Dependencia de ventanas logísticas estacionales",
      "Exposición de procesos y personas a estrés térmico",
      "Dependencia de un acceso común para personal y suministros",
      "Variabilidad de plazos por exposición de la ruta"
    ],
    "correctIndex": 3,
    "explanation": "Mecanismo relevante: Variabilidad de plazos por exposición de la ruta. Respuesta pertinente: Comparar rutas alternativas y ventanas de entrega realistas. Evidencia a revisar: Distribución de plazos y disponibilidad de rutas durante eventos. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "foundation"
  },
  {
    "id": 2089,
    "category": 3,
    "text": "Una ruta logística sufre cierres recurrentes por calor y deterioro de infraestructura. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Comparar rutas alternativas y ventanas de entrega realistas",
      "Revisar independencia física y protección de fuentes de respaldo",
      "Evaluar monitorización, alarmas y contingencia de almacenamiento",
      "Priorizar cargas críticas y evaluar capacidad de refrigeración de respaldo"
    ],
    "correctIndex": 0,
    "explanation": "Mecanismo relevante: Variabilidad de plazos por exposición de la ruta. Respuesta pertinente: Comparar rutas alternativas y ventanas de entrega realistas. Evidencia a revisar: Distribución de plazos y disponibilidad de rutas durante eventos. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 2090,
    "category": 3,
    "text": "Una ruta logística sufre cierres recurrentes por calor y deterioro de infraestructura. Respuesta propuesta: Comparar rutas alternativas y ventanas de entrega realistas. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Mediciones de condiciones térmicas y cumplimiento de límites del proceso",
      "Distribución de plazos y disponibilidad de rutas durante eventos",
      "Disponibilidad de accesos y tiempo de recuperación en escenarios pertinentes",
      "Inventario accesible y tiempos de reposición bajo escenarios de inundación"
    ],
    "correctIndex": 1,
    "explanation": "Mecanismo relevante: Variabilidad de plazos por exposición de la ruta. Respuesta pertinente: Comparar rutas alternativas y ventanas de entrega realistas. Evidencia a revisar: Distribución de plazos y disponibilidad de rutas durante eventos. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 2091,
    "category": 3,
    "text": "Una base remota afronta interrupciones estacionales del transporte de combustible. ¿Qué vulnerabilidad o mecanismo de riesgo es más directamente relevante?",
    "options": [
      "Fallo común de redundancias por exposición compartida",
      "Pérdida de condiciones de almacenamiento por fallo térmico",
      "Dependencia de ventanas logísticas estacionales",
      "Interrupción de funciones dependientes de refrigeración"
    ],
    "correctIndex": 2,
    "explanation": "Mecanismo relevante: Dependencia de ventanas logísticas estacionales. Respuesta pertinente: Evaluar reservas y alternativas de suministro autorizadas. Evidencia a revisar: Cobertura de demanda y autonomía durante interrupciones representativas. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "foundation"
  },
  {
    "id": 2092,
    "category": 3,
    "text": "Una base remota afronta interrupciones estacionales del transporte de combustible. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Evaluar planificación y controles térmicos con responsables de seguridad",
      "Evaluar accesos alternativos y continuidad de servicios esenciales",
      "Evaluar ubicación, protección y distribución alternativa del inventario",
      "Evaluar reservas y alternativas de suministro autorizadas"
    ],
    "correctIndex": 3,
    "explanation": "Mecanismo relevante: Dependencia de ventanas logísticas estacionales. Respuesta pertinente: Evaluar reservas y alternativas de suministro autorizadas. Evidencia a revisar: Cobertura de demanda y autonomía durante interrupciones representativas. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 2093,
    "category": 3,
    "text": "Una base remota afronta interrupciones estacionales del transporte de combustible. Respuesta propuesta: Evaluar reservas y alternativas de suministro autorizadas. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Cobertura de demanda y autonomía durante interrupciones representativas",
      "Registros de temperatura y respuesta ante fallo simulado de climatización",
      "Horas de continuidad térmica de cargas críticas bajo escenario de calor",
      "Capacidad de producción bajo restricciones hídricas y planes comprobados"
    ],
    "correctIndex": 0,
    "explanation": "Mecanismo relevante: Dependencia de ventanas logísticas estacionales. Respuesta pertinente: Evaluar reservas y alternativas de suministro autorizadas. Evidencia a revisar: Cobertura de demanda y autonomía durante interrupciones representativas. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 2094,
    "category": 3,
    "text": "Una instalación de emergencia depende de dos generadores en la misma zona inundable. ¿Qué vulnerabilidad o mecanismo de riesgo es más directamente relevante?",
    "options": [
      "Exposición de procesos y personas a estrés térmico",
      "Fallo común de redundancias por exposición compartida",
      "Dependencia de un acceso común para personal y suministros",
      "Pérdida de acceso o integridad del inventario"
    ],
    "correctIndex": 1,
    "explanation": "Mecanismo relevante: Fallo común de redundancias por exposición compartida. Respuesta pertinente: Revisar independencia física y protección de fuentes de respaldo. Evidencia a revisar: Pruebas de disponibilidad de fuentes bajo inundación y pérdida de red. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "foundation"
  },
  {
    "id": 2095,
    "category": 3,
    "text": "Una instalación de emergencia depende de dos generadores en la misma zona inundable. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Evaluar monitorización, alarmas y contingencia de almacenamiento",
      "Priorizar cargas críticas y evaluar capacidad de refrigeración de respaldo",
      "Revisar independencia física y protección de fuentes de respaldo",
      "Revisar dependencia hídrica y alternativas cualificadas con el proveedor"
    ],
    "correctIndex": 2,
    "explanation": "Mecanismo relevante: Fallo común de redundancias por exposición compartida. Respuesta pertinente: Revisar independencia física y protección de fuentes de respaldo. Evidencia a revisar: Pruebas de disponibilidad de fuentes bajo inundación y pérdida de red. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 2096,
    "category": 3,
    "text": "Una instalación de emergencia depende de dos generadores en la misma zona inundable. Respuesta propuesta: Revisar independencia física y protección de fuentes de respaldo. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Disponibilidad de accesos y tiempo de recuperación en escenarios pertinentes",
      "Inventario accesible y tiempos de reposición bajo escenarios de inundación",
      "Distribución de plazos y disponibilidad de rutas durante eventos",
      "Pruebas de disponibilidad de fuentes bajo inundación y pérdida de red"
    ],
    "correctIndex": 3,
    "explanation": "Mecanismo relevante: Fallo común de redundancias por exposición compartida. Respuesta pertinente: Revisar independencia física y protección de fuentes de respaldo. Evidencia a revisar: Pruebas de disponibilidad de fuentes bajo inundación y pérdida de red. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 2097,
    "category": 3,
    "text": "Un taller programa trabajos sensibles al calor en horas de máxima temperatura. ¿Qué vulnerabilidad o mecanismo de riesgo es más directamente relevante?",
    "options": [
      "Exposición de procesos y personas a estrés térmico",
      "Pérdida de condiciones de almacenamiento por fallo térmico",
      "Interrupción de funciones dependientes de refrigeración",
      "Interrupción de producción por restricciones hídricas"
    ],
    "correctIndex": 0,
    "explanation": "Mecanismo relevante: Exposición de procesos y personas a estrés térmico. Respuesta pertinente: Evaluar planificación y controles térmicos con responsables de seguridad. Evidencia a revisar: Mediciones de condiciones térmicas y cumplimiento de límites del proceso. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "foundation"
  },
  {
    "id": 2098,
    "category": 3,
    "text": "Un taller programa trabajos sensibles al calor en horas de máxima temperatura. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Evaluar accesos alternativos y continuidad de servicios esenciales",
      "Evaluar planificación y controles térmicos con responsables de seguridad",
      "Evaluar ubicación, protección y distribución alternativa del inventario",
      "Comparar rutas alternativas y ventanas de entrega realistas"
    ],
    "correctIndex": 1,
    "explanation": "Mecanismo relevante: Exposición de procesos y personas a estrés térmico. Respuesta pertinente: Evaluar planificación y controles térmicos con responsables de seguridad. Evidencia a revisar: Mediciones de condiciones térmicas y cumplimiento de límites del proceso. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 2099,
    "category": 3,
    "text": "Un taller programa trabajos sensibles al calor en horas de máxima temperatura. Respuesta propuesta: Evaluar planificación y controles térmicos con responsables de seguridad. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Horas de continuidad térmica de cargas críticas bajo escenario de calor",
      "Capacidad de producción bajo restricciones hídricas y planes comprobados",
      "Mediciones de condiciones térmicas y cumplimiento de límites del proceso",
      "Cobertura de demanda y autonomía durante interrupciones representativas"
    ],
    "correctIndex": 2,
    "explanation": "Mecanismo relevante: Exposición de procesos y personas a estrés térmico. Respuesta pertinente: Evaluar planificación y controles térmicos con responsables de seguridad. Evidencia a revisar: Mediciones de condiciones térmicas y cumplimiento de límites del proceso. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 2100,
    "category": 3,
    "text": "Una cadena de frío de materiales depende de un único sistema de climatización. ¿Qué vulnerabilidad o mecanismo de riesgo es más directamente relevante?",
    "options": [
      "Dependencia de un acceso común para personal y suministros",
      "Pérdida de acceso o integridad del inventario",
      "Variabilidad de plazos por exposición de la ruta",
      "Pérdida de condiciones de almacenamiento por fallo térmico"
    ],
    "correctIndex": 3,
    "explanation": "Mecanismo relevante: Pérdida de condiciones de almacenamiento por fallo térmico. Respuesta pertinente: Evaluar monitorización, alarmas y contingencia de almacenamiento. Evidencia a revisar: Registros de temperatura y respuesta ante fallo simulado de climatización. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "foundation"
  },
  {
    "id": 2101,
    "category": 3,
    "text": "Una cadena de frío de materiales depende de un único sistema de climatización. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Evaluar monitorización, alarmas y contingencia de almacenamiento",
      "Priorizar cargas críticas y evaluar capacidad de refrigeración de respaldo",
      "Revisar dependencia hídrica y alternativas cualificadas con el proveedor",
      "Evaluar reservas y alternativas de suministro autorizadas"
    ],
    "correctIndex": 0,
    "explanation": "Mecanismo relevante: Pérdida de condiciones de almacenamiento por fallo térmico. Respuesta pertinente: Evaluar monitorización, alarmas y contingencia de almacenamiento. Evidencia a revisar: Registros de temperatura y respuesta ante fallo simulado de climatización. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 2102,
    "category": 3,
    "text": "Una cadena de frío de materiales depende de un único sistema de climatización. Respuesta propuesta: Evaluar monitorización, alarmas y contingencia de almacenamiento. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Inventario accesible y tiempos de reposición bajo escenarios de inundación",
      "Registros de temperatura y respuesta ante fallo simulado de climatización",
      "Distribución de plazos y disponibilidad de rutas durante eventos",
      "Pruebas de disponibilidad de fuentes bajo inundación y pérdida de red"
    ],
    "correctIndex": 1,
    "explanation": "Mecanismo relevante: Pérdida de condiciones de almacenamiento por fallo térmico. Respuesta pertinente: Evaluar monitorización, alarmas y contingencia de almacenamiento. Evidencia a revisar: Registros de temperatura y respuesta ante fallo simulado de climatización. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 2103,
    "category": 3,
    "text": "Un centro de mantenimiento comparte acceso por carretera con otras instalaciones expuestas a tormentas. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Evaluar ubicación, protección y distribución alternativa del inventario",
      "Comparar rutas alternativas y ventanas de entrega realistas",
      "Evaluar accesos alternativos y continuidad de servicios esenciales",
      "Revisar independencia física y protección de fuentes de respaldo"
    ],
    "correctIndex": 2,
    "explanation": "Mecanismo relevante: Dependencia de un acceso común para personal y suministros. Respuesta pertinente: Evaluar accesos alternativos y continuidad de servicios esenciales. Evidencia a revisar: Disponibilidad de accesos y tiempo de recuperación en escenarios pertinentes. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 2104,
    "category": 3,
    "text": "Un centro de mantenimiento comparte acceso por carretera con otras instalaciones expuestas a tormentas. Respuesta propuesta: Evaluar accesos alternativos y continuidad de servicios esenciales. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Capacidad de producción bajo restricciones hídricas y planes comprobados",
      "Cobertura de demanda y autonomía durante interrupciones representativas",
      "Mediciones de condiciones térmicas y cumplimiento de límites del proceso",
      "Disponibilidad de accesos y tiempo de recuperación en escenarios pertinentes"
    ],
    "correctIndex": 3,
    "explanation": "Mecanismo relevante: Dependencia de un acceso común para personal y suministros. Respuesta pertinente: Evaluar accesos alternativos y continuidad de servicios esenciales. Evidencia a revisar: Disponibilidad de accesos y tiempo de recuperación en escenarios pertinentes. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 2105,
    "category": 4,
    "text": "Un incendio cercano genera humo que puede afectar a equipos y personas. ¿Qué vulnerabilidad o mecanismo de riesgo es más directamente relevante?",
    "options": [
      "Exposición a partículas y deterioro de condiciones de trabajo",
      "Pérdida de especificidad de detección",
      "Pérdida de intercambio de información crítica",
      "Pérdida de protección de equipos frente a intemperie"
    ],
    "correctIndex": 0,
    "explanation": "Mecanismo relevante: Exposición a partículas y deterioro de condiciones de trabajo. Respuesta pertinente: Evaluar exposición y aplicar procedimientos autorizados de protección. Evidencia a revisar: Mediciones pertinentes de partículas y registros de aplicación de procedimientos. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "foundation"
  },
  {
    "id": 2106,
    "category": 4,
    "text": "Un incendio cercano genera humo que puede afectar a equipos y personas. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Evaluar drenaje, retención y rutas seguras con responsables",
      "Evaluar exposición y aplicar procedimientos autorizados de protección",
      "Evaluar ambos riesgos simultáneamente y priorizar funciones esenciales",
      "Evaluar suelo, drenaje y protección contra erosión"
    ],
    "correctIndex": 1,
    "explanation": "Mecanismo relevante: Exposición a partículas y deterioro de condiciones de trabajo. Respuesta pertinente: Evaluar exposición y aplicar procedimientos autorizados de protección. Evidencia a revisar: Mediciones pertinentes de partículas y registros de aplicación de procedimientos. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 2107,
    "category": 4,
    "text": "Un incendio cercano genera humo que puede afectar a equipos y personas. Respuesta propuesta: Evaluar exposición y aplicar procedimientos autorizados de protección. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Disponibilidad y tiempos de restablecimiento de comunicaciones en pruebas",
      "Inspecciones estructurales autorizadas y tiempo de recuperación de funciones",
      "Mediciones pertinentes de partículas y registros de aplicación de procedimientos",
      "Distribución de latencia y porcentaje de datos útiles a tiempo"
    ],
    "correctIndex": 2,
    "explanation": "Mecanismo relevante: Exposición a partículas y deterioro de condiciones de trabajo. Respuesta pertinente: Evaluar exposición y aplicar procedimientos autorizados de protección. Evidencia a revisar: Mediciones pertinentes de partículas y registros de aplicación de procedimientos. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 2108,
    "category": 4,
    "text": "Un detector de incendios recibe reflejos solares que generan alertas erróneas. ¿Qué vulnerabilidad o mecanismo de riesgo es más directamente relevante?",
    "options": [
      "Acumulación superficial de agua y afectación de accesos",
      "Evento compuesto que limita refrigeración y energía",
      "Riesgo de escorrentía y erosión tras condiciones secas",
      "Pérdida de especificidad de detección"
    ],
    "correctIndex": 3,
    "explanation": "Mecanismo relevante: Pérdida de especificidad de detección. Respuesta pertinente: Evaluar clasificación y revisión de alertas con datos etiquetados. Evidencia a revisar: Tasas de falsos positivos y detecciones correctas en condiciones variadas. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "foundation"
  },
  {
    "id": 2109,
    "category": 4,
    "text": "Un detector de incendios recibe reflejos solares que generan alertas erróneas. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Evaluar clasificación y revisión de alertas con datos etiquetados",
      "Evaluar canales de comunicación alternativos e independencia",
      "Evaluar daños y medidas de recuperación con responsables de infraestructura",
      "Evaluar latencia extremo a extremo y necesidades de usuarios autorizados"
    ],
    "correctIndex": 0,
    "explanation": "Mecanismo relevante: Pérdida de especificidad de detección. Respuesta pertinente: Evaluar clasificación y revisión de alertas con datos etiquetados. Evidencia a revisar: Tasas de falsos positivos y detecciones correctas en condiciones variadas. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 2110,
    "category": 4,
    "text": "Un detector de incendios recibe reflejos solares que generan alertas erróneas. Respuesta propuesta: Evaluar clasificación y revisión de alertas con datos etiquetados. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Resultados de pruebas con calor y capacidad eléctrica reducida simultáneos",
      "Tasas de falsos positivos y detecciones correctas en condiciones variadas",
      "Medidas de infiltración, escorrentía y erosión bajo condiciones pertinentes",
      "Pruebas de recuperación de funciones completas y tiempos por dependencia"
    ],
    "correctIndex": 1,
    "explanation": "Mecanismo relevante: Pérdida de especificidad de detección. Respuesta pertinente: Evaluar clasificación y revisión de alertas con datos etiquetados. Evidencia a revisar: Tasas de falsos positivos y detecciones correctas en condiciones variadas. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 2111,
    "category": 4,
    "text": "Lluvia intensa supera la capacidad de drenaje de un recinto. ¿Qué vulnerabilidad o mecanismo de riesgo es más directamente relevante?",
    "options": [
      "Pérdida de intercambio de información crítica",
      "Pérdida de protección de equipos frente a intemperie",
      "Acumulación superficial de agua y afectación de accesos",
      "Pérdida de oportunidad de información para la respuesta"
    ],
    "correctIndex": 2,
    "explanation": "Mecanismo relevante: Acumulación superficial de agua y afectación de accesos. Respuesta pertinente: Evaluar drenaje, retención y rutas seguras con responsables. Evidencia a revisar: Niveles de agua y tiempos de evacuación de escorrentía por escenario. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "foundation"
  },
  {
    "id": 2112,
    "category": 4,
    "text": "Lluvia intensa supera la capacidad de drenaje de un recinto. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Evaluar ambos riesgos simultáneamente y priorizar funciones esenciales",
      "Evaluar suelo, drenaje y protección contra erosión",
      "Identificar secuencia segura de recuperación y dependencias de procesos",
      "Evaluar drenaje, retención y rutas seguras con responsables"
    ],
    "correctIndex": 3,
    "explanation": "Mecanismo relevante: Acumulación superficial de agua y afectación de accesos. Respuesta pertinente: Evaluar drenaje, retención y rutas seguras con responsables. Evidencia a revisar: Niveles de agua y tiempos de evacuación de escorrentía por escenario. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 2113,
    "category": 4,
    "text": "Lluvia intensa supera la capacidad de drenaje de un recinto. Respuesta propuesta: Evaluar drenaje, retención y rutas seguras con responsables. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Niveles de agua y tiempos de evacuación de escorrentía por escenario",
      "Inspecciones estructurales autorizadas y tiempo de recuperación de funciones",
      "Distribución de latencia y porcentaje de datos útiles a tiempo",
      "Mediciones pertinentes de partículas y registros de aplicación de procedimientos"
    ],
    "correctIndex": 0,
    "explanation": "Mecanismo relevante: Acumulación superficial de agua y afectación de accesos. Respuesta pertinente: Evaluar drenaje, retención y rutas seguras con responsables. Evidencia a revisar: Niveles de agua y tiempos de evacuación de escorrentía por escenario. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 2114,
    "category": 4,
    "text": "Una tormenta interrumpe comunicaciones de un centro de coordinación. ¿Qué vulnerabilidad o mecanismo de riesgo es más directamente relevante?",
    "options": [
      "Evento compuesto que limita refrigeración y energía",
      "Pérdida de intercambio de información crítica",
      "Riesgo de escorrentía y erosión tras condiciones secas",
      "Dependencias de recuperación distintas del suministro eléctrico"
    ],
    "correctIndex": 1,
    "explanation": "Mecanismo relevante: Pérdida de intercambio de información crítica. Respuesta pertinente: Evaluar canales de comunicación alternativos e independencia. Evidencia a revisar: Disponibilidad y tiempos de restablecimiento de comunicaciones en pruebas. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "foundation"
  },
  {
    "id": 2115,
    "category": 4,
    "text": "Una tormenta interrumpe comunicaciones de un centro de coordinación. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Evaluar daños y medidas de recuperación con responsables de infraestructura",
      "Evaluar latencia extremo a extremo y necesidades de usuarios autorizados",
      "Evaluar canales de comunicación alternativos e independencia",
      "Evaluar exposición y aplicar procedimientos autorizados de protección"
    ],
    "correctIndex": 2,
    "explanation": "Mecanismo relevante: Pérdida de intercambio de información crítica. Respuesta pertinente: Evaluar canales de comunicación alternativos e independencia. Evidencia a revisar: Disponibilidad y tiempos de restablecimiento de comunicaciones en pruebas. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 2116,
    "category": 4,
    "text": "Una tormenta interrumpe comunicaciones de un centro de coordinación. Respuesta propuesta: Evaluar canales de comunicación alternativos e independencia. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Medidas de infiltración, escorrentía y erosión bajo condiciones pertinentes",
      "Pruebas de recuperación de funciones completas y tiempos por dependencia",
      "Tasas de falsos positivos y detecciones correctas en condiciones variadas",
      "Disponibilidad y tiempos de restablecimiento de comunicaciones en pruebas"
    ],
    "correctIndex": 3,
    "explanation": "Mecanismo relevante: Pérdida de intercambio de información crítica. Respuesta pertinente: Evaluar canales de comunicación alternativos e independencia. Evidencia a revisar: Disponibilidad y tiempos de restablecimiento de comunicaciones en pruebas. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 2117,
    "category": 4,
    "text": "Una ola de calor coincide con una restricción de electricidad. ¿Qué vulnerabilidad o mecanismo de riesgo es más directamente relevante?",
    "options": [
      "Evento compuesto que limita refrigeración y energía",
      "Pérdida de protección de equipos frente a intemperie",
      "Pérdida de oportunidad de información para la respuesta",
      "Exposición a partículas y deterioro de condiciones de trabajo"
    ],
    "correctIndex": 0,
    "explanation": "Mecanismo relevante: Evento compuesto que limita refrigeración y energía. Respuesta pertinente: Evaluar ambos riesgos simultáneamente y priorizar funciones esenciales. Evidencia a revisar: Resultados de pruebas con calor y capacidad eléctrica reducida simultáneos. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "foundation"
  },
  {
    "id": 2118,
    "category": 4,
    "text": "Una ola de calor coincide con una restricción de electricidad. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Evaluar suelo, drenaje y protección contra erosión",
      "Evaluar ambos riesgos simultáneamente y priorizar funciones esenciales",
      "Identificar secuencia segura de recuperación y dependencias de procesos",
      "Evaluar clasificación y revisión de alertas con datos etiquetados"
    ],
    "correctIndex": 1,
    "explanation": "Mecanismo relevante: Evento compuesto que limita refrigeración y energía. Respuesta pertinente: Evaluar ambos riesgos simultáneamente y priorizar funciones esenciales. Evidencia a revisar: Resultados de pruebas con calor y capacidad eléctrica reducida simultáneos. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 2119,
    "category": 4,
    "text": "Una ola de calor coincide con una restricción de electricidad. Respuesta propuesta: Evaluar ambos riesgos simultáneamente y priorizar funciones esenciales. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Distribución de latencia y porcentaje de datos útiles a tiempo",
      "Mediciones pertinentes de partículas y registros de aplicación de procedimientos",
      "Resultados de pruebas con calor y capacidad eléctrica reducida simultáneos",
      "Niveles de agua y tiempos de evacuación de escorrentía por escenario"
    ],
    "correctIndex": 2,
    "explanation": "Mecanismo relevante: Evento compuesto que limita refrigeración y energía. Respuesta pertinente: Evaluar ambos riesgos simultáneamente y priorizar funciones esenciales. Evidencia a revisar: Resultados de pruebas con calor y capacidad eléctrica reducida simultáneos. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 2120,
    "category": 4,
    "text": "Un temporal causa daños en cubiertas de una instalación de apoyo. ¿Qué vulnerabilidad o mecanismo de riesgo es más directamente relevante?",
    "options": [
      "Riesgo de escorrentía y erosión tras condiciones secas",
      "Dependencias de recuperación distintas del suministro eléctrico",
      "Pérdida de especificidad de detección",
      "Pérdida de protección de equipos frente a intemperie"
    ],
    "correctIndex": 3,
    "explanation": "Mecanismo relevante: Pérdida de protección de equipos frente a intemperie. Respuesta pertinente: Evaluar daños y medidas de recuperación con responsables de infraestructura. Evidencia a revisar: Inspecciones estructurales autorizadas y tiempo de recuperación de funciones. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "foundation"
  },
  {
    "id": 2121,
    "category": 4,
    "text": "Un temporal causa daños en cubiertas de una instalación de apoyo. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Evaluar daños y medidas de recuperación con responsables de infraestructura",
      "Evaluar latencia extremo a extremo y necesidades de usuarios autorizados",
      "Evaluar exposición y aplicar procedimientos autorizados de protección",
      "Evaluar drenaje, retención y rutas seguras con responsables"
    ],
    "correctIndex": 0,
    "explanation": "Mecanismo relevante: Pérdida de protección de equipos frente a intemperie. Respuesta pertinente: Evaluar daños y medidas de recuperación con responsables de infraestructura. Evidencia a revisar: Inspecciones estructurales autorizadas y tiempo de recuperación de funciones. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 2122,
    "category": 4,
    "text": "Un temporal causa daños en cubiertas de una instalación de apoyo. Respuesta propuesta: Evaluar daños y medidas de recuperación con responsables de infraestructura. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Pruebas de recuperación de funciones completas y tiempos por dependencia",
      "Inspecciones estructurales autorizadas y tiempo de recuperación de funciones",
      "Tasas de falsos positivos y detecciones correctas en condiciones variadas",
      "Disponibilidad y tiempos de restablecimiento de comunicaciones en pruebas"
    ],
    "correctIndex": 1,
    "explanation": "Mecanismo relevante: Pérdida de protección de equipos frente a intemperie. Respuesta pertinente: Evaluar daños y medidas de recuperación con responsables de infraestructura. Evidencia a revisar: Inspecciones estructurales autorizadas y tiempo de recuperación de funciones. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 2123,
    "category": 4,
    "text": "Una región registra episodios de sequía seguidos de lluvias intensas. ¿Qué vulnerabilidad o mecanismo de riesgo es más directamente relevante?",
    "options": [
      "Pérdida de oportunidad de información para la respuesta",
      "Exposición a partículas y deterioro de condiciones de trabajo",
      "Riesgo de escorrentía y erosión tras condiciones secas",
      "Acumulación superficial de agua y afectación de accesos"
    ],
    "correctIndex": 2,
    "explanation": "Mecanismo relevante: Riesgo de escorrentía y erosión tras condiciones secas. Respuesta pertinente: Evaluar suelo, drenaje y protección contra erosión. Evidencia a revisar: Medidas de infiltración, escorrentía y erosión bajo condiciones pertinentes. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "foundation"
  },
  {
    "id": 2124,
    "category": 4,
    "text": "Una región registra episodios de sequía seguidos de lluvias intensas. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Identificar secuencia segura de recuperación y dependencias de procesos",
      "Evaluar clasificación y revisión de alertas con datos etiquetados",
      "Evaluar canales de comunicación alternativos e independencia",
      "Evaluar suelo, drenaje y protección contra erosión"
    ],
    "correctIndex": 3,
    "explanation": "Mecanismo relevante: Riesgo de escorrentía y erosión tras condiciones secas. Respuesta pertinente: Evaluar suelo, drenaje y protección contra erosión. Evidencia a revisar: Medidas de infiltración, escorrentía y erosión bajo condiciones pertinentes. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 2125,
    "category": 4,
    "text": "Una región registra episodios de sequía seguidos de lluvias intensas. Respuesta propuesta: Evaluar suelo, drenaje y protección contra erosión. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Medidas de infiltración, escorrentía y erosión bajo condiciones pertinentes",
      "Mediciones pertinentes de partículas y registros de aplicación de procedimientos",
      "Niveles de agua y tiempos de evacuación de escorrentía por escenario",
      "Resultados de pruebas con calor y capacidad eléctrica reducida simultáneos"
    ],
    "correctIndex": 0,
    "explanation": "Mecanismo relevante: Riesgo de escorrentía y erosión tras condiciones secas. Respuesta pertinente: Evaluar suelo, drenaje y protección contra erosión. Evidencia a revisar: Medidas de infiltración, escorrentía y erosión bajo condiciones pertinentes. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 2126,
    "category": 4,
    "text": "Un servicio de observación de incendios transmite datos con retrasos variables. ¿Qué vulnerabilidad o mecanismo de riesgo es más directamente relevante?",
    "options": [
      "Dependencias de recuperación distintas del suministro eléctrico",
      "Pérdida de oportunidad de información para la respuesta",
      "Pérdida de especificidad de detección",
      "Pérdida de intercambio de información crítica"
    ],
    "correctIndex": 1,
    "explanation": "Mecanismo relevante: Pérdida de oportunidad de información para la respuesta. Respuesta pertinente: Evaluar latencia extremo a extremo y necesidades de usuarios autorizados. Evidencia a revisar: Distribución de latencia y porcentaje de datos útiles a tiempo. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "foundation"
  },
  {
    "id": 2127,
    "category": 4,
    "text": "Un servicio de observación de incendios transmite datos con retrasos variables. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Evaluar exposición y aplicar procedimientos autorizados de protección",
      "Evaluar drenaje, retención y rutas seguras con responsables",
      "Evaluar latencia extremo a extremo y necesidades de usuarios autorizados",
      "Evaluar ambos riesgos simultáneamente y priorizar funciones esenciales"
    ],
    "correctIndex": 2,
    "explanation": "Mecanismo relevante: Pérdida de oportunidad de información para la respuesta. Respuesta pertinente: Evaluar latencia extremo a extremo y necesidades de usuarios autorizados. Evidencia a revisar: Distribución de latencia y porcentaje de datos útiles a tiempo. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 2128,
    "category": 4,
    "text": "Un servicio de observación de incendios transmite datos con retrasos variables. Respuesta propuesta: Evaluar latencia extremo a extremo y necesidades de usuarios autorizados. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Tasas de falsos positivos y detecciones correctas en condiciones variadas",
      "Disponibilidad y tiempos de restablecimiento de comunicaciones en pruebas",
      "Inspecciones estructurales autorizadas y tiempo de recuperación de funciones",
      "Distribución de latencia y porcentaje de datos útiles a tiempo"
    ],
    "correctIndex": 3,
    "explanation": "Mecanismo relevante: Pérdida de oportunidad de información para la respuesta. Respuesta pertinente: Evaluar latencia extremo a extremo y necesidades de usuarios autorizados. Evidencia a revisar: Distribución de latencia y porcentaje de datos útiles a tiempo. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 2129,
    "category": 4,
    "text": "Una instalación recupera electricidad tras una tormenta pero no puede reiniciar todos sus procesos. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Identificar secuencia segura de recuperación y dependencias de procesos",
      "Evaluar clasificación y revisión de alertas con datos etiquetados",
      "Evaluar canales de comunicación alternativos e independencia",
      "Evaluar daños y medidas de recuperación con responsables de infraestructura"
    ],
    "correctIndex": 0,
    "explanation": "Mecanismo relevante: Dependencias de recuperación distintas del suministro eléctrico. Respuesta pertinente: Identificar secuencia segura de recuperación y dependencias de procesos. Evidencia a revisar: Pruebas de recuperación de funciones completas y tiempos por dependencia. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 2130,
    "category": 4,
    "text": "Una instalación recupera electricidad tras una tormenta pero no puede reiniciar todos sus procesos. Respuesta propuesta: Identificar secuencia segura de recuperación y dependencias de procesos. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Niveles de agua y tiempos de evacuación de escorrentía por escenario",
      "Pruebas de recuperación de funciones completas y tiempos por dependencia",
      "Resultados de pruebas con calor y capacidad eléctrica reducida simultáneos",
      "Medidas de infiltración, escorrentía y erosión bajo condiciones pertinentes"
    ],
    "correctIndex": 1,
    "explanation": "Mecanismo relevante: Dependencias de recuperación distintas del suministro eléctrico. Respuesta pertinente: Identificar secuencia segura de recuperación y dependencias de procesos. Evidencia a revisar: Pruebas de recuperación de funciones completas y tiempos por dependencia. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 2131,
    "category": 5,
    "text": "Un equipo afirma que una protección térmica mejora la disponibilidad usando solo datos simulados. ¿Qué vulnerabilidad o mecanismo de riesgo es más directamente relevante?",
    "options": [
      "Comparación sesgada por exposición no equivalente",
      "Compromiso entre continuidad y coste de ciclo de vida",
      "Confusión entre resultado condicional y beneficio verificado",
      "Dependencia de una condición futura no demostrada"
    ],
    "correctIndex": 2,
    "explanation": "Mecanismo relevante: Confusión entre resultado condicional y beneficio verificado. Respuesta pertinente: Limitar la afirmación al escenario y solicitar validación pertinente. Evidencia a revisar: Resultados comparables de ensayos o datos de servicio autorizados. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "foundation"
  },
  {
    "id": 2132,
    "category": 5,
    "text": "Un equipo afirma que una protección térmica mejora la disponibilidad usando solo datos simulados. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Documentar fuente, región, horizonte, escenario e incertidumbre",
      "Revisar distribución, extremos y criterio de aceptación aplicable",
      "Definir métrica de continuidad y escenario de referencia",
      "Limitar la afirmación al escenario y solicitar validación pertinente"
    ],
    "correctIndex": 3,
    "explanation": "Mecanismo relevante: Confusión entre resultado condicional y beneficio verificado. Respuesta pertinente: Limitar la afirmación al escenario y solicitar validación pertinente. Evidencia a revisar: Resultados comparables de ensayos o datos de servicio autorizados. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 2133,
    "category": 5,
    "text": "Un equipo afirma que una protección térmica mejora la disponibilidad usando solo datos simulados. Respuesta propuesta: Limitar la afirmación al escenario y solicitar validación pertinente. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Resultados comparables de ensayos o datos de servicio autorizados",
      "Horas de interrupción y costes durante un horizonte común",
      "Hitos de cualificación y criterios de activación de la alternativa",
      "Análisis de sensibilidad con fuentes y rangos de coste"
    ],
    "correctIndex": 0,
    "explanation": "Mecanismo relevante: Confusión entre resultado condicional y beneficio verificado. Respuesta pertinente: Limitar la afirmación al escenario y solicitar validación pertinente. Evidencia a revisar: Resultados comparables de ensayos o datos de servicio autorizados. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 2134,
    "category": 5,
    "text": "Dos medidas se comparan con escenarios de temperatura distintos. ¿Qué vulnerabilidad o mecanismo de riesgo es más directamente relevante?",
    "options": [
      "Falta de trazabilidad del escenario climático",
      "Comparación sesgada por exposición no equivalente",
      "La media oculta incumplimientos individuales",
      "Necesidad de indicador vinculado a exposición y función"
    ],
    "correctIndex": 1,
    "explanation": "Mecanismo relevante: Comparación sesgada por exposición no equivalente. Respuesta pertinente: Repetir la comparación con condiciones y función equivalentes. Evidencia a revisar: Resultados de ambas alternativas bajo el mismo perfil ambiental. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "foundation"
  },
  {
    "id": 2135,
    "category": 5,
    "text": "Dos medidas se comparan con escenarios de temperatura distintos. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Comparar beneficios y costes con criterios de decisión explícitos",
      "Definir condición de decisión y alternativa si no se cumple",
      "Repetir la comparación con condiciones y función equivalentes",
      "Evaluar rangos y umbrales que cambian la decisión"
    ],
    "correctIndex": 2,
    "explanation": "Mecanismo relevante: Comparación sesgada por exposición no equivalente. Respuesta pertinente: Repetir la comparación con condiciones y función equivalentes. Evidencia a revisar: Resultados de ambas alternativas bajo el mismo perfil ambiental. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 2136,
    "category": 5,
    "text": "Dos medidas se comparan con escenarios de temperatura distintos. Respuesta propuesta: Repetir la comparación con condiciones y función equivalentes. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Resultados individuales, variabilidad y número de incumplimientos",
      "Horas de pérdida de función bajo inundaciones comparables",
      "Registro de revisión, responsable y decisión con evidencia trazable",
      "Resultados de ambas alternativas bajo el mismo perfil ambiental"
    ],
    "correctIndex": 3,
    "explanation": "Mecanismo relevante: Comparación sesgada por exposición no equivalente. Respuesta pertinente: Repetir la comparación con condiciones y función equivalentes. Evidencia a revisar: Resultados de ambas alternativas bajo el mismo perfil ambiental. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 2137,
    "category": 5,
    "text": "Un informe de adaptación utiliza una proyección sin indicar horizonte ni región. ¿Qué vulnerabilidad o mecanismo de riesgo es más directamente relevante?",
    "options": [
      "Falta de trazabilidad del escenario climático",
      "Compromiso entre continuidad y coste de ciclo de vida",
      "Dependencia de una condición futura no demostrada",
      "Sensibilidad de la selección a costes no consolidados"
    ],
    "correctIndex": 0,
    "explanation": "Mecanismo relevante: Falta de trazabilidad del escenario climático. Respuesta pertinente: Documentar fuente, región, horizonte, escenario e incertidumbre. Evidencia a revisar: Registro de fuentes y supuestos vinculado a cada conclusión. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "foundation"
  },
  {
    "id": 2138,
    "category": 5,
    "text": "Un informe de adaptación utiliza una proyección sin indicar horizonte ni región. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Revisar distribución, extremos y criterio de aceptación aplicable",
      "Documentar fuente, región, horizonte, escenario e incertidumbre",
      "Definir métrica de continuidad y escenario de referencia",
      "Documentar hipótesis y remitirla al responsable técnico pertinente"
    ],
    "correctIndex": 1,
    "explanation": "Mecanismo relevante: Falta de trazabilidad del escenario climático. Respuesta pertinente: Documentar fuente, región, horizonte, escenario e incertidumbre. Evidencia a revisar: Registro de fuentes y supuestos vinculado a cada conclusión. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 2139,
    "category": 5,
    "text": "Un informe de adaptación utiliza una proyección sin indicar horizonte ni región. Respuesta propuesta: Documentar fuente, región, horizonte, escenario e incertidumbre. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Hitos de cualificación y criterios de activación de la alternativa",
      "Análisis de sensibilidad con fuentes y rangos de coste",
      "Registro de fuentes y supuestos vinculado a cada conclusión",
      "Resultados comparables de ensayos o datos de servicio autorizados"
    ],
    "correctIndex": 2,
    "explanation": "Mecanismo relevante: Falta de trazabilidad del escenario climático. Respuesta pertinente: Documentar fuente, región, horizonte, escenario e incertidumbre. Evidencia a revisar: Registro de fuentes y supuestos vinculado a cada conclusión. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 2140,
    "category": 5,
    "text": "Una medida reduce horas de interrupción pero aumenta costes de mantenimiento. ¿Qué vulnerabilidad o mecanismo de riesgo es más directamente relevante?",
    "options": [
      "La media oculta incumplimientos individuales",
      "Necesidad de indicador vinculado a exposición y función",
      "Riesgo de actuar sin competencia ni aprobación",
      "Compromiso entre continuidad y coste de ciclo de vida"
    ],
    "correctIndex": 3,
    "explanation": "Mecanismo relevante: Compromiso entre continuidad y coste de ciclo de vida. Respuesta pertinente: Comparar beneficios y costes con criterios de decisión explícitos. Evidencia a revisar: Horas de interrupción y costes durante un horizonte común. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "foundation"
  },
  {
    "id": 2141,
    "category": 5,
    "text": "Una medida reduce horas de interrupción pero aumenta costes de mantenimiento. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Comparar beneficios y costes con criterios de decisión explícitos",
      "Definir condición de decisión y alternativa si no se cumple",
      "Evaluar rangos y umbrales que cambian la decisión",
      "Limitar la afirmación al escenario y solicitar validación pertinente"
    ],
    "correctIndex": 0,
    "explanation": "Mecanismo relevante: Compromiso entre continuidad y coste de ciclo de vida. Respuesta pertinente: Comparar beneficios y costes con criterios de decisión explícitos. Evidencia a revisar: Horas de interrupción y costes durante un horizonte común. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 2142,
    "category": 5,
    "text": "Una medida reduce horas de interrupción pero aumenta costes de mantenimiento. Respuesta propuesta: Comparar beneficios y costes con criterios de decisión explícitos. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Horas de pérdida de función bajo inundaciones comparables",
      "Horas de interrupción y costes durante un horizonte común",
      "Registro de revisión, responsable y decisión con evidencia trazable",
      "Resultados de ambas alternativas bajo el mismo perfil ambiental"
    ],
    "correctIndex": 1,
    "explanation": "Mecanismo relevante: Compromiso entre continuidad y coste de ciclo de vida. Respuesta pertinente: Comparar beneficios y costes con criterios de decisión explícitos. Evidencia a revisar: Horas de interrupción y costes durante un horizonte común. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 2143,
    "category": 5,
    "text": "Un ensayo muestra mejora media pero algunas muestras incumplen el límite. ¿Qué vulnerabilidad o mecanismo de riesgo es más directamente relevante?",
    "options": [
      "Dependencia de una condición futura no demostrada",
      "Sensibilidad de la selección a costes no consolidados",
      "La media oculta incumplimientos individuales",
      "Confusión entre resultado condicional y beneficio verificado"
    ],
    "correctIndex": 2,
    "explanation": "Mecanismo relevante: La media oculta incumplimientos individuales. Respuesta pertinente: Revisar distribución, extremos y criterio de aceptación aplicable. Evidencia a revisar: Resultados individuales, variabilidad y número de incumplimientos. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "foundation"
  },
  {
    "id": 2144,
    "category": 5,
    "text": "Un ensayo muestra mejora media pero algunas muestras incumplen el límite. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Definir métrica de continuidad y escenario de referencia",
      "Documentar hipótesis y remitirla al responsable técnico pertinente",
      "Repetir la comparación con condiciones y función equivalentes",
      "Revisar distribución, extremos y criterio de aceptación aplicable"
    ],
    "correctIndex": 3,
    "explanation": "Mecanismo relevante: La media oculta incumplimientos individuales. Respuesta pertinente: Revisar distribución, extremos y criterio de aceptación aplicable. Evidencia a revisar: Resultados individuales, variabilidad y número de incumplimientos. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 2145,
    "category": 5,
    "text": "Un ensayo muestra mejora media pero algunas muestras incumplen el límite. Respuesta propuesta: Revisar distribución, extremos y criterio de aceptación aplicable. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Resultados individuales, variabilidad y número de incumplimientos",
      "Análisis de sensibilidad con fuentes y rangos de coste",
      "Resultados comparables de ensayos o datos de servicio autorizados",
      "Registro de fuentes y supuestos vinculado a cada conclusión"
    ],
    "correctIndex": 0,
    "explanation": "Mecanismo relevante: La media oculta incumplimientos individuales. Respuesta pertinente: Revisar distribución, extremos y criterio de aceptación aplicable. Evidencia a revisar: Resultados individuales, variabilidad y número de incumplimientos. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 2146,
    "category": 5,
    "text": "Una alternativa depende de que una tecnología futura esté cualificada a tiempo. ¿Qué vulnerabilidad o mecanismo de riesgo es más directamente relevante?",
    "options": [
      "Necesidad de indicador vinculado a exposición y función",
      "Dependencia de una condición futura no demostrada",
      "Riesgo de actuar sin competencia ni aprobación",
      "Comparación sesgada por exposición no equivalente"
    ],
    "correctIndex": 1,
    "explanation": "Mecanismo relevante: Dependencia de una condición futura no demostrada. Respuesta pertinente: Definir condición de decisión y alternativa si no se cumple. Evidencia a revisar: Hitos de cualificación y criterios de activación de la alternativa. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "foundation"
  },
  {
    "id": 2147,
    "category": 5,
    "text": "Una alternativa depende de que una tecnología futura esté cualificada a tiempo. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Evaluar rangos y umbrales que cambian la decisión",
      "Limitar la afirmación al escenario y solicitar validación pertinente",
      "Definir condición de decisión y alternativa si no se cumple",
      "Documentar fuente, región, horizonte, escenario e incertidumbre"
    ],
    "correctIndex": 2,
    "explanation": "Mecanismo relevante: Dependencia de una condición futura no demostrada. Respuesta pertinente: Definir condición de decisión y alternativa si no se cumple. Evidencia a revisar: Hitos de cualificación y criterios de activación de la alternativa. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 2148,
    "category": 5,
    "text": "Una alternativa depende de que una tecnología futura esté cualificada a tiempo. Respuesta propuesta: Definir condición de decisión y alternativa si no se cumple. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Registro de revisión, responsable y decisión con evidencia trazable",
      "Resultados de ambas alternativas bajo el mismo perfil ambiental",
      "Horas de interrupción y costes durante un horizonte común",
      "Hitos de cualificación y criterios de activación de la alternativa"
    ],
    "correctIndex": 3,
    "explanation": "Mecanismo relevante: Dependencia de una condición futura no demostrada. Respuesta pertinente: Definir condición de decisión y alternativa si no se cumple. Evidencia a revisar: Hitos de cualificación y criterios de activación de la alternativa. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 2149,
    "category": 5,
    "text": "Un equipo quiere medir si una intervención reduce el riesgo de inundación. ¿Qué vulnerabilidad o mecanismo de riesgo es más directamente relevante?",
    "options": [
      "Necesidad de indicador vinculado a exposición y función",
      "Sensibilidad de la selección a costes no consolidados",
      "Confusión entre resultado condicional y beneficio verificado",
      "Falta de trazabilidad del escenario climático"
    ],
    "correctIndex": 0,
    "explanation": "Mecanismo relevante: Necesidad de indicador vinculado a exposición y función. Respuesta pertinente: Definir métrica de continuidad y escenario de referencia. Evidencia a revisar: Horas de pérdida de función bajo inundaciones comparables. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "foundation"
  },
  {
    "id": 2150,
    "category": 5,
    "text": "Un equipo quiere medir si una intervención reduce el riesgo de inundación. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Documentar hipótesis y remitirla al responsable técnico pertinente",
      "Definir métrica de continuidad y escenario de referencia",
      "Repetir la comparación con condiciones y función equivalentes",
      "Comparar beneficios y costes con criterios de decisión explícitos"
    ],
    "correctIndex": 1,
    "explanation": "Mecanismo relevante: Necesidad de indicador vinculado a exposición y función. Respuesta pertinente: Definir métrica de continuidad y escenario de referencia. Evidencia a revisar: Horas de pérdida de función bajo inundaciones comparables. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 2151,
    "category": 5,
    "text": "Un equipo quiere medir si una intervención reduce el riesgo de inundación. Respuesta propuesta: Definir métrica de continuidad y escenario de referencia. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Resultados comparables de ensayos o datos de servicio autorizados",
      "Registro de fuentes y supuestos vinculado a cada conclusión",
      "Horas de pérdida de función bajo inundaciones comparables",
      "Resultados individuales, variabilidad y número de incumplimientos"
    ],
    "correctIndex": 2,
    "explanation": "Mecanismo relevante: Necesidad de indicador vinculado a exposición y función. Respuesta pertinente: Definir métrica de continuidad y escenario de referencia. Evidencia a revisar: Horas de pérdida de función bajo inundaciones comparables. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 2152,
    "category": 5,
    "text": "Una decisión se basa en un coste de adaptación muy incierto. ¿Qué vulnerabilidad o mecanismo de riesgo es más directamente relevante?",
    "options": [
      "Riesgo de actuar sin competencia ni aprobación",
      "Comparación sesgada por exposición no equivalente",
      "Compromiso entre continuidad y coste de ciclo de vida",
      "Sensibilidad de la selección a costes no consolidados"
    ],
    "correctIndex": 3,
    "explanation": "Mecanismo relevante: Sensibilidad de la selección a costes no consolidados. Respuesta pertinente: Evaluar rangos y umbrales que cambian la decisión. Evidencia a revisar: Análisis de sensibilidad con fuentes y rangos de coste. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "foundation"
  },
  {
    "id": 2153,
    "category": 5,
    "text": "Una decisión se basa en un coste de adaptación muy incierto. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Evaluar rangos y umbrales que cambian la decisión",
      "Limitar la afirmación al escenario y solicitar validación pertinente",
      "Documentar fuente, región, horizonte, escenario e incertidumbre",
      "Revisar distribución, extremos y criterio de aceptación aplicable"
    ],
    "correctIndex": 0,
    "explanation": "Mecanismo relevante: Sensibilidad de la selección a costes no consolidados. Respuesta pertinente: Evaluar rangos y umbrales que cambian la decisión. Evidencia a revisar: Análisis de sensibilidad con fuentes y rangos de coste. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 2154,
    "category": 5,
    "text": "Una decisión se basa en un coste de adaptación muy incierto. Respuesta propuesta: Evaluar rangos y umbrales que cambian la decisión. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Resultados de ambas alternativas bajo el mismo perfil ambiental",
      "Análisis de sensibilidad con fuentes y rangos de coste",
      "Horas de interrupción y costes durante un horizonte común",
      "Hitos de cualificación y criterios de activación de la alternativa"
    ],
    "correctIndex": 1,
    "explanation": "Mecanismo relevante: Sensibilidad de la selección a costes no consolidados. Respuesta pertinente: Evaluar rangos y umbrales que cambian la decisión. Evidencia a revisar: Análisis de sensibilidad con fuentes y rangos de coste. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 2155,
    "category": 5,
    "text": "Un empleado identifica una vulnerabilidad climática fuera de su autoridad técnica. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Repetir la comparación con condiciones y función equivalentes",
      "Comparar beneficios y costes con criterios de decisión explícitos",
      "Documentar hipótesis y remitirla al responsable técnico pertinente",
      "Definir condición de decisión y alternativa si no se cumple"
    ],
    "correctIndex": 2,
    "explanation": "Mecanismo relevante: Riesgo de actuar sin competencia ni aprobación. Respuesta pertinente: Documentar hipótesis y remitirla al responsable técnico pertinente. Evidencia a revisar: Registro de revisión, responsable y decisión con evidencia trazable. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 2156,
    "category": 5,
    "text": "Un empleado identifica una vulnerabilidad climática fuera de su autoridad técnica. Respuesta propuesta: Documentar hipótesis y remitirla al responsable técnico pertinente. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Registro de fuentes y supuestos vinculado a cada conclusión",
      "Resultados individuales, variabilidad y número de incumplimientos",
      "Horas de pérdida de función bajo inundaciones comparables",
      "Registro de revisión, responsable y decisión con evidencia trazable"
    ],
    "correctIndex": 3,
    "explanation": "Mecanismo relevante: Riesgo de actuar sin competencia ni aprobación. Respuesta pertinente: Documentar hipótesis y remitirla al responsable técnico pertinente. Evidencia a revisar: Registro de revisión, responsable y decisión con evidencia trazable. La conclusión queda limitada a las condiciones evaluadas y los requisitos aplicables.",
    "difficulty": "advanced"
  }
];
