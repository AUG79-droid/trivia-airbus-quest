import type { Question } from './types';
// Authored scenario-based educational cases. No real platform or operational data.
export const EXTRA_GENERAL_QUESTIONS: (Question & {difficulty: 'foundation' | 'applied' | 'advanced'})[] = [
  {
    "id": 600,
    "category": 0,
    "text": "Carcasa ligera con sustituciones frecuentes. ¿Qué cuestión es más directamente relevante?",
    "options": [
      "Impactos desplazados a reposición",
      "Barrera a desmontaje y reutilización",
      "Compromiso entre fabricación y uso",
      "Limitación de accesibilidad para inspección"
    ],
    "correctIndex": 0,
    "explanation": "Cuestión relevante: Impactos desplazados a reposición. Respuesta pertinente: Comparar función durante vida de servicio común. Evidencia a revisar: Sustituciones, materiales y energía por función. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "foundation"
  },
  {
    "id": 601,
    "category": 0,
    "text": "Carcasa ligera con sustituciones frecuentes. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Evaluar modularidad e interfaces controladas",
      "Comparar función durante vida de servicio común",
      "Evaluar durabilidad antes de comparar impactos",
      "Evaluar compatibilidad e intercambiabilidad controladas"
    ],
    "correctIndex": 1,
    "explanation": "Cuestión relevante: Impactos desplazados a reposición. Respuesta pertinente: Comparar función durante vida de servicio común. Evidencia a revisar: Sustituciones, materiales y energía por función. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 602,
    "category": 0,
    "text": "Carcasa ligera con sustituciones frecuentes. Respuesta propuesta: Comparar función durante vida de servicio común. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Energía de fabricación y uso por función equivalente",
      "Tiempo y cobertura de inspección",
      "Sustituciones, materiales y energía por función",
      "Inventarios comparables y análisis de sensibilidad"
    ],
    "correctIndex": 2,
    "explanation": "Cuestión relevante: Impactos desplazados a reposición. Respuesta pertinente: Comparar función durante vida de servicio común. Evidencia a revisar: Sustituciones, materiales y energía por función. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 603,
    "category": 0,
    "text": "Fijaciones destruidas durante desmontaje. ¿Qué cuestión es más directamente relevante?",
    "options": [
      "Acoplamiento excesivo entre módulos",
      "Incertidumbre de vida útil",
      "Estandarización con restricciones de configuración",
      "Barrera a desmontaje y reutilización"
    ],
    "correctIndex": 3,
    "explanation": "Cuestión relevante: Barrera a desmontaje y reutilización. Respuesta pertinente: Evaluar uniones reversibles cualificables. Evidencia a revisar: Tiempo de desmontaje y prestaciones tras ciclos. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "foundation"
  },
  {
    "id": 604,
    "category": 0,
    "text": "Fijaciones destruidas durante desmontaje. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Evaluar uniones reversibles cualificables",
      "Comparar energía de ciclo de vida según utilización",
      "Evaluar acceso e inspeccionabilidad con mantenimiento",
      "Armonizar alcance y documentar sensibilidad"
    ],
    "correctIndex": 0,
    "explanation": "Cuestión relevante: Barrera a desmontaje y reutilización. Respuesta pertinente: Evaluar uniones reversibles cualificables. Evidencia a revisar: Tiempo de desmontaje y prestaciones tras ciclos. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 605,
    "category": 0,
    "text": "Fijaciones destruidas durante desmontaje. Respuesta propuesta: Evaluar uniones reversibles cualificables. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Ensayos de envejecimiento y prestaciones",
      "Tiempo de desmontaje y prestaciones tras ciclos",
      "Matriz de configuraciones y pruebas de intercambio",
      "Sustituciones, materiales y energía por función"
    ],
    "correctIndex": 1,
    "explanation": "Cuestión relevante: Barrera a desmontaje y reutilización. Respuesta pertinente: Evaluar uniones reversibles cualificables. Evidencia a revisar: Tiempo de desmontaje y prestaciones tras ciclos. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 606,
    "category": 0,
    "text": "Actualizar una tarjeta exige sustituir todo el equipo. ¿Qué cuestión es más directamente relevante?",
    "options": [
      "Compromiso entre fabricación y uso",
      "Limitación de accesibilidad para inspección",
      "Acoplamiento excesivo entre módulos",
      "Inconsistencia temporal y geográfica"
    ],
    "correctIndex": 2,
    "explanation": "Cuestión relevante: Acoplamiento excesivo entre módulos. Respuesta pertinente: Evaluar modularidad e interfaces controladas. Evidencia a revisar: Demostración de actualización independiente de módulo. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "foundation"
  },
  {
    "id": 607,
    "category": 0,
    "text": "Actualizar una tarjeta exige sustituir todo el equipo. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Evaluar durabilidad antes de comparar impactos",
      "Evaluar compatibilidad e intercambiabilidad controladas",
      "Comparar función durante vida de servicio común",
      "Evaluar modularidad e interfaces controladas"
    ],
    "correctIndex": 3,
    "explanation": "Cuestión relevante: Acoplamiento excesivo entre módulos. Respuesta pertinente: Evaluar modularidad e interfaces controladas. Evidencia a revisar: Demostración de actualización independiente de módulo. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 608,
    "category": 0,
    "text": "Actualizar una tarjeta exige sustituir todo el equipo. Respuesta propuesta: Evaluar modularidad e interfaces controladas. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Demostración de actualización independiente de módulo",
      "Tiempo y cobertura de inspección",
      "Inventarios comparables y análisis de sensibilidad",
      "Tiempo de desmontaje y prestaciones tras ciclos"
    ],
    "correctIndex": 0,
    "explanation": "Cuestión relevante: Acoplamiento excesivo entre módulos. Respuesta pertinente: Evaluar modularidad e interfaces controladas. Evidencia a revisar: Demostración de actualización independiente de módulo. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 609,
    "category": 0,
    "text": "Diseño ligero con fabricación intensiva en energía. ¿Qué cuestión es más directamente relevante?",
    "options": [
      "Incertidumbre de vida útil",
      "Compromiso entre fabricación y uso",
      "Estandarización con restricciones de configuración",
      "Impactos desplazados a reposición"
    ],
    "correctIndex": 1,
    "explanation": "Cuestión relevante: Compromiso entre fabricación y uso. Respuesta pertinente: Comparar energía de ciclo de vida según utilización. Evidencia a revisar: Energía de fabricación y uso por función equivalente. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "foundation"
  },
  {
    "id": 610,
    "category": 0,
    "text": "Diseño ligero con fabricación intensiva en energía. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Evaluar acceso e inspeccionabilidad con mantenimiento",
      "Armonizar alcance y documentar sensibilidad",
      "Comparar energía de ciclo de vida según utilización",
      "Evaluar uniones reversibles cualificables"
    ],
    "correctIndex": 2,
    "explanation": "Cuestión relevante: Compromiso entre fabricación y uso. Respuesta pertinente: Comparar energía de ciclo de vida según utilización. Evidencia a revisar: Energía de fabricación y uso por función equivalente. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 611,
    "category": 0,
    "text": "Diseño ligero con fabricación intensiva en energía. Respuesta propuesta: Comparar energía de ciclo de vida según utilización. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Matriz de configuraciones y pruebas de intercambio",
      "Sustituciones, materiales y energía por función",
      "Demostración de actualización independiente de módulo",
      "Energía de fabricación y uso por función equivalente"
    ],
    "correctIndex": 3,
    "explanation": "Cuestión relevante: Compromiso entre fabricación y uso. Respuesta pertinente: Comparar energía de ciclo de vida según utilización. Evidencia a revisar: Energía de fabricación y uso por función equivalente. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 612,
    "category": 0,
    "text": "Material renovable sin datos de durabilidad. ¿Qué cuestión es más directamente relevante?",
    "options": [
      "Incertidumbre de vida útil",
      "Limitación de accesibilidad para inspección",
      "Inconsistencia temporal y geográfica",
      "Barrera a desmontaje y reutilización"
    ],
    "correctIndex": 0,
    "explanation": "Cuestión relevante: Incertidumbre de vida útil. Respuesta pertinente: Evaluar durabilidad antes de comparar impactos. Evidencia a revisar: Ensayos de envejecimiento y prestaciones. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "foundation"
  },
  {
    "id": 613,
    "category": 0,
    "text": "Material renovable sin datos de durabilidad. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Evaluar compatibilidad e intercambiabilidad controladas",
      "Evaluar durabilidad antes de comparar impactos",
      "Comparar función durante vida de servicio común",
      "Evaluar modularidad e interfaces controladas"
    ],
    "correctIndex": 1,
    "explanation": "Cuestión relevante: Incertidumbre de vida útil. Respuesta pertinente: Evaluar durabilidad antes de comparar impactos. Evidencia a revisar: Ensayos de envejecimiento y prestaciones. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 614,
    "category": 0,
    "text": "Material renovable sin datos de durabilidad. Respuesta propuesta: Evaluar durabilidad antes de comparar impactos. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Inventarios comparables y análisis de sensibilidad",
      "Tiempo de desmontaje y prestaciones tras ciclos",
      "Ensayos de envejecimiento y prestaciones",
      "Energía de fabricación y uso por función equivalente"
    ],
    "correctIndex": 2,
    "explanation": "Cuestión relevante: Incertidumbre de vida útil. Respuesta pertinente: Evaluar durabilidad antes de comparar impactos. Evidencia a revisar: Ensayos de envejecimiento y prestaciones. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 615,
    "category": 0,
    "text": "Pieza difícil de inspeccionar en servicio. ¿Qué cuestión es más directamente relevante?",
    "options": [
      "Estandarización con restricciones de configuración",
      "Impactos desplazados a reposición",
      "Acoplamiento excesivo entre módulos",
      "Limitación de accesibilidad para inspección"
    ],
    "correctIndex": 3,
    "explanation": "Cuestión relevante: Limitación de accesibilidad para inspección. Respuesta pertinente: Evaluar acceso e inspeccionabilidad con mantenimiento. Evidencia a revisar: Tiempo y cobertura de inspección. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "foundation"
  },
  {
    "id": 616,
    "category": 0,
    "text": "Pieza difícil de inspeccionar en servicio. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Evaluar acceso e inspeccionabilidad con mantenimiento",
      "Armonizar alcance y documentar sensibilidad",
      "Evaluar uniones reversibles cualificables",
      "Comparar energía de ciclo de vida según utilización"
    ],
    "correctIndex": 0,
    "explanation": "Cuestión relevante: Limitación de accesibilidad para inspección. Respuesta pertinente: Evaluar acceso e inspeccionabilidad con mantenimiento. Evidencia a revisar: Tiempo y cobertura de inspección. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 617,
    "category": 0,
    "text": "Pieza difícil de inspeccionar en servicio. Respuesta propuesta: Evaluar acceso e inspeccionabilidad con mantenimiento. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Sustituciones, materiales y energía por función",
      "Tiempo y cobertura de inspección",
      "Demostración de actualización independiente de módulo",
      "Ensayos de envejecimiento y prestaciones"
    ],
    "correctIndex": 1,
    "explanation": "Cuestión relevante: Limitación de accesibilidad para inspección. Respuesta pertinente: Evaluar acceso e inspeccionabilidad con mantenimiento. Evidencia a revisar: Tiempo y cobertura de inspección. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 618,
    "category": 0,
    "text": "Interfaces comunes para reducir variedad de piezas. ¿Qué cuestión es más directamente relevante?",
    "options": [
      "Inconsistencia temporal y geográfica",
      "Barrera a desmontaje y reutilización",
      "Estandarización con restricciones de configuración",
      "Compromiso entre fabricación y uso"
    ],
    "correctIndex": 2,
    "explanation": "Cuestión relevante: Estandarización con restricciones de configuración. Respuesta pertinente: Evaluar compatibilidad e intercambiabilidad controladas. Evidencia a revisar: Matriz de configuraciones y pruebas de intercambio. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "foundation"
  },
  {
    "id": 619,
    "category": 0,
    "text": "Interfaces comunes para reducir variedad de piezas. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Comparar función durante vida de servicio común",
      "Evaluar modularidad e interfaces controladas",
      "Evaluar durabilidad antes de comparar impactos",
      "Evaluar compatibilidad e intercambiabilidad controladas"
    ],
    "correctIndex": 3,
    "explanation": "Cuestión relevante: Estandarización con restricciones de configuración. Respuesta pertinente: Evaluar compatibilidad e intercambiabilidad controladas. Evidencia a revisar: Matriz de configuraciones y pruebas de intercambio. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 620,
    "category": 0,
    "text": "Interfaces comunes para reducir variedad de piezas. Respuesta propuesta: Evaluar compatibilidad e intercambiabilidad controladas. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Matriz de configuraciones y pruebas de intercambio",
      "Tiempo de desmontaje y prestaciones tras ciclos",
      "Energía de fabricación y uso por función equivalente",
      "Tiempo y cobertura de inspección"
    ],
    "correctIndex": 0,
    "explanation": "Cuestión relevante: Estandarización con restricciones de configuración. Respuesta pertinente: Evaluar compatibilidad e intercambiabilidad controladas. Evidencia a revisar: Matriz de configuraciones y pruebas de intercambio. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 621,
    "category": 0,
    "text": "Inventarios de materiales de años y regiones distintos. Respuesta propuesta: Armonizar alcance y documentar sensibilidad. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Demostración de actualización independiente de módulo",
      "Inventarios comparables y análisis de sensibilidad",
      "Ensayos de envejecimiento y prestaciones",
      "Matriz de configuraciones y pruebas de intercambio"
    ],
    "correctIndex": 1,
    "explanation": "Cuestión relevante: Inconsistencia temporal y geográfica. Respuesta pertinente: Armonizar alcance y documentar sensibilidad. Evidencia a revisar: Inventarios comparables y análisis de sensibilidad. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 622,
    "category": 1,
    "text": "Compresor consume energía fuera de producción. ¿Qué cuestión es más directamente relevante?",
    "options": [
      "Compromiso entre eficiencia y requisitos visuales",
      "Capacidad, degradación y seguridad de almacenamiento",
      "Demanda en vacío o fugas",
      "Impactos dependientes de uso y fuente energética"
    ],
    "correctIndex": 2,
    "explanation": "Cuestión relevante: Demanda en vacío o fugas. Respuesta pertinente: Medir demanda en reposo y revisar fugas. Evidencia a revisar: Potencia y caudal sin producción. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "foundation"
  },
  {
    "id": 623,
    "category": 1,
    "text": "Compresor consume energía fuera de producción. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Evaluar coincidencia de demanda y temperatura",
      "Mejorar eficiencia sin reducir controles requeridos",
      "Normalizar consumos según uso real",
      "Medir demanda en reposo y revisar fugas"
    ],
    "correctIndex": 3,
    "explanation": "Cuestión relevante: Demanda en vacío o fugas. Respuesta pertinente: Medir demanda en reposo y revisar fugas. Evidencia a revisar: Potencia y caudal sin producción. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 624,
    "category": 1,
    "text": "Compresor consume energía fuera de producción. Respuesta propuesta: Medir demanda en reposo y revisar fugas. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Potencia y caudal sin producción",
      "Energía útil y pérdidas durante ciclos",
      "Consumo por servicio e impactos de suministro energético",
      "Emisiones de transporte y cumplimiento de plazos"
    ],
    "correctIndex": 0,
    "explanation": "Cuestión relevante: Demanda en vacío o fugas. Respuesta pertinente: Medir demanda en reposo y revisar fugas. Evidencia a revisar: Potencia y caudal sin producción. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 625,
    "category": 1,
    "text": "Sustitución de luminarias en puestos de inspección. ¿Qué cuestión es más directamente relevante?",
    "options": [
      "Oportunidad de recuperación térmica",
      "Compromiso entre eficiencia y requisitos visuales",
      "Restricciones de calidad y seguridad sobre ahorro",
      "Variación de demanda por ocupación y clima"
    ],
    "correctIndex": 1,
    "explanation": "Cuestión relevante: Compromiso entre eficiencia y requisitos visuales. Respuesta pertinente: Evaluar niveles y uniformidad de iluminación. Evidencia a revisar: Consumo y mediciones de iluminación en puestos. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "foundation"
  },
  {
    "id": 626,
    "category": 1,
    "text": "Sustitución de luminarias en puestos de inspección. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Evaluar dimensionamiento según demanda y requisitos",
      "Comparar ciclos de trabajo e infraestructura",
      "Evaluar niveles y uniformidad de iluminación",
      "Comparar consolidación con restricciones de plazo"
    ],
    "correctIndex": 2,
    "explanation": "Cuestión relevante: Compromiso entre eficiencia y requisitos visuales. Respuesta pertinente: Evaluar niveles y uniformidad de iluminación. Evidencia a revisar: Consumo y mediciones de iluminación en puestos. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 627,
    "category": 1,
    "text": "Sustitución de luminarias en puestos de inspección. Respuesta propuesta: Evaluar niveles y uniformidad de iluminación. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Energía por ciclo y cumplimiento de condiciones",
      "Consumo, ocupación y meteorología por periodo",
      "Potencia y caudal sin producción",
      "Consumo y mediciones de iluminación en puestos"
    ],
    "correctIndex": 3,
    "explanation": "Cuestión relevante: Compromiso entre eficiencia y requisitos visuales. Respuesta pertinente: Evaluar niveles y uniformidad de iluminación. Evidencia a revisar: Consumo y mediciones de iluminación en puestos. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 628,
    "category": 1,
    "text": "Calor residual de equipo de proceso. ¿Qué cuestión es más directamente relevante?",
    "options": [
      "Oportunidad de recuperación térmica",
      "Capacidad, degradación y seguridad de almacenamiento",
      "Impactos dependientes de uso y fuente energética",
      "Compromiso entre transporte y nivel de servicio"
    ],
    "correctIndex": 0,
    "explanation": "Cuestión relevante: Oportunidad de recuperación térmica. Respuesta pertinente: Evaluar coincidencia de demanda y temperatura. Evidencia a revisar: Perfil simultáneo de calor disponible y demanda. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "foundation"
  },
  {
    "id": 629,
    "category": 1,
    "text": "Calor residual de equipo de proceso. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Mejorar eficiencia sin reducir controles requeridos",
      "Evaluar coincidencia de demanda y temperatura",
      "Normalizar consumos según uso real",
      "Medir demanda en reposo y revisar fugas"
    ],
    "correctIndex": 1,
    "explanation": "Cuestión relevante: Oportunidad de recuperación térmica. Respuesta pertinente: Evaluar coincidencia de demanda y temperatura. Evidencia a revisar: Perfil simultáneo de calor disponible y demanda. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 630,
    "category": 1,
    "text": "Calor residual de equipo de proceso. Respuesta propuesta: Evaluar coincidencia de demanda y temperatura. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Consumo por servicio e impactos de suministro energético",
      "Emisiones de transporte y cumplimiento de plazos",
      "Perfil simultáneo de calor disponible y demanda",
      "Consumo y mediciones de iluminación en puestos"
    ],
    "correctIndex": 2,
    "explanation": "Cuestión relevante: Oportunidad de recuperación térmica. Respuesta pertinente: Evaluar coincidencia de demanda y temperatura. Evidencia a revisar: Perfil simultáneo de calor disponible y demanda. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 631,
    "category": 1,
    "text": "Baterías para gestionar picos eléctricos. ¿Qué cuestión es más directamente relevante?",
    "options": [
      "Restricciones de calidad y seguridad sobre ahorro",
      "Variación de demanda por ocupación y clima",
      "Demanda en vacío o fugas",
      "Capacidad, degradación y seguridad de almacenamiento"
    ],
    "correctIndex": 3,
    "explanation": "Cuestión relevante: Capacidad, degradación y seguridad de almacenamiento. Respuesta pertinente: Evaluar dimensionamiento según demanda y requisitos. Evidencia a revisar: Energía útil y pérdidas durante ciclos. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "foundation"
  },
  {
    "id": 632,
    "category": 1,
    "text": "Baterías para gestionar picos eléctricos. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Evaluar dimensionamiento según demanda y requisitos",
      "Comparar ciclos de trabajo e infraestructura",
      "Comparar consolidación con restricciones de plazo",
      "Evaluar niveles y uniformidad de iluminación"
    ],
    "correctIndex": 0,
    "explanation": "Cuestión relevante: Capacidad, degradación y seguridad de almacenamiento. Respuesta pertinente: Evaluar dimensionamiento según demanda y requisitos. Evidencia a revisar: Energía útil y pérdidas durante ciclos. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 633,
    "category": 1,
    "text": "Baterías para gestionar picos eléctricos. Respuesta propuesta: Evaluar dimensionamiento según demanda y requisitos. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Consumo, ocupación y meteorología por periodo",
      "Energía útil y pérdidas durante ciclos",
      "Potencia y caudal sin producción",
      "Perfil simultáneo de calor disponible y demanda"
    ],
    "correctIndex": 1,
    "explanation": "Cuestión relevante: Capacidad, degradación y seguridad de almacenamiento. Respuesta pertinente: Evaluar dimensionamiento según demanda y requisitos. Evidencia a revisar: Energía útil y pérdidas durante ciclos. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 634,
    "category": 1,
    "text": "Proceso de pintura con extracción y temperatura controladas. ¿Qué cuestión es más directamente relevante?",
    "options": [
      "Impactos dependientes de uso y fuente energética",
      "Compromiso entre transporte y nivel de servicio",
      "Restricciones de calidad y seguridad sobre ahorro",
      "Compromiso entre eficiencia y requisitos visuales"
    ],
    "correctIndex": 2,
    "explanation": "Cuestión relevante: Restricciones de calidad y seguridad sobre ahorro. Respuesta pertinente: Mejorar eficiencia sin reducir controles requeridos. Evidencia a revisar: Energía por ciclo y cumplimiento de condiciones. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "foundation"
  },
  {
    "id": 635,
    "category": 1,
    "text": "Proceso de pintura con extracción y temperatura controladas. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Normalizar consumos según uso real",
      "Medir demanda en reposo y revisar fugas",
      "Evaluar coincidencia de demanda y temperatura",
      "Mejorar eficiencia sin reducir controles requeridos"
    ],
    "correctIndex": 3,
    "explanation": "Cuestión relevante: Restricciones de calidad y seguridad sobre ahorro. Respuesta pertinente: Mejorar eficiencia sin reducir controles requeridos. Evidencia a revisar: Energía por ciclo y cumplimiento de condiciones. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 636,
    "category": 1,
    "text": "Proceso de pintura con extracción y temperatura controladas. Respuesta propuesta: Mejorar eficiencia sin reducir controles requeridos. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Energía por ciclo y cumplimiento de condiciones",
      "Emisiones de transporte y cumplimiento de plazos",
      "Consumo y mediciones de iluminación en puestos",
      "Energía útil y pérdidas durante ciclos"
    ],
    "correctIndex": 0,
    "explanation": "Cuestión relevante: Restricciones de calidad y seguridad sobre ahorro. Respuesta pertinente: Mejorar eficiencia sin reducir controles requeridos. Evidencia a revisar: Energía por ciclo y cumplimiento de condiciones. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 637,
    "category": 1,
    "text": "Cambio de propulsión de vehículos de apoyo. ¿Qué cuestión es más directamente relevante?",
    "options": [
      "Variación de demanda por ocupación y clima",
      "Impactos dependientes de uso y fuente energética",
      "Demanda en vacío o fugas",
      "Oportunidad de recuperación térmica"
    ],
    "correctIndex": 1,
    "explanation": "Cuestión relevante: Impactos dependientes de uso y fuente energética. Respuesta pertinente: Comparar ciclos de trabajo e infraestructura. Evidencia a revisar: Consumo por servicio e impactos de suministro energético. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "foundation"
  },
  {
    "id": 638,
    "category": 1,
    "text": "Cambio de propulsión de vehículos de apoyo. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Comparar consolidación con restricciones de plazo",
      "Evaluar niveles y uniformidad de iluminación",
      "Comparar ciclos de trabajo e infraestructura",
      "Evaluar dimensionamiento según demanda y requisitos"
    ],
    "correctIndex": 2,
    "explanation": "Cuestión relevante: Impactos dependientes de uso y fuente energética. Respuesta pertinente: Comparar ciclos de trabajo e infraestructura. Evidencia a revisar: Consumo por servicio e impactos de suministro energético. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 639,
    "category": 1,
    "text": "Cambio de propulsión de vehículos de apoyo. Respuesta propuesta: Comparar ciclos de trabajo e infraestructura. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Potencia y caudal sin producción",
      "Perfil simultáneo de calor disponible y demanda",
      "Energía por ciclo y cumplimiento de condiciones",
      "Consumo por servicio e impactos de suministro energético"
    ],
    "correctIndex": 3,
    "explanation": "Cuestión relevante: Impactos dependientes de uso y fuente energética. Respuesta pertinente: Comparar ciclos de trabajo e infraestructura. Evidencia a revisar: Consumo por servicio e impactos de suministro energético. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 640,
    "category": 1,
    "text": "Climatización variable según ocupación. ¿Qué cuestión es más directamente relevante?",
    "options": [
      "Variación de demanda por ocupación y clima",
      "Compromiso entre transporte y nivel de servicio",
      "Compromiso entre eficiencia y requisitos visuales",
      "Capacidad, degradación y seguridad de almacenamiento"
    ],
    "correctIndex": 0,
    "explanation": "Cuestión relevante: Variación de demanda por ocupación y clima. Respuesta pertinente: Normalizar consumos según uso real. Evidencia a revisar: Consumo, ocupación y meteorología por periodo. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "foundation"
  },
  {
    "id": 641,
    "category": 1,
    "text": "Climatización variable según ocupación. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Medir demanda en reposo y revisar fugas",
      "Normalizar consumos según uso real",
      "Evaluar coincidencia de demanda y temperatura",
      "Mejorar eficiencia sin reducir controles requeridos"
    ],
    "correctIndex": 1,
    "explanation": "Cuestión relevante: Variación de demanda por ocupación y clima. Respuesta pertinente: Normalizar consumos según uso real. Evidencia a revisar: Consumo, ocupación y meteorología por periodo. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 642,
    "category": 1,
    "text": "Climatización variable según ocupación. Respuesta propuesta: Normalizar consumos según uso real. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Consumo y mediciones de iluminación en puestos",
      "Energía útil y pérdidas durante ciclos",
      "Consumo, ocupación y meteorología por periodo",
      "Consumo por servicio e impactos de suministro energético"
    ],
    "correctIndex": 2,
    "explanation": "Cuestión relevante: Variación de demanda por ocupación y clima. Respuesta pertinente: Normalizar consumos según uso real. Evidencia a revisar: Consumo, ocupación y meteorología por periodo. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 643,
    "category": 1,
    "text": "Consolidar envíos aumenta tiempos de espera. Respuesta propuesta: Comparar consolidación con restricciones de plazo. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Perfil simultáneo de calor disponible y demanda",
      "Energía por ciclo y cumplimiento de condiciones",
      "Consumo, ocupación y meteorología por periodo",
      "Emisiones de transporte y cumplimiento de plazos"
    ],
    "correctIndex": 3,
    "explanation": "Cuestión relevante: Compromiso entre transporte y nivel de servicio. Respuesta pertinente: Comparar consolidación con restricciones de plazo. Evidencia a revisar: Emisiones de transporte y cumplimiento de plazos. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 644,
    "category": 2,
    "text": "Recortes de aluminio mezclados con otras aleaciones. ¿Qué cuestión es más directamente relevante?",
    "options": [
      "Pérdida de calidad por mezcla",
      "Impacto de logística inversa",
      "Incertidumbre de trazabilidad para reutilización",
      "Contaminación y pérdida de calidad"
    ],
    "correctIndex": 0,
    "explanation": "Cuestión relevante: Pérdida de calidad por mezcla. Respuesta pertinente: Segregar aleaciones e identificar lotes. Evidencia a revisar: Composición y rendimiento de recuperación por lote. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "foundation"
  },
  {
    "id": 645,
    "category": 2,
    "text": "Recortes de aluminio mezclados con otras aleaciones. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Evaluar uniones y rutas de tratamiento viables",
      "Segregar aleaciones e identificar lotes",
      "Optimizar anidado respetando requisitos",
      "Evaluar reacondicionamiento y recalificación pertinente"
    ],
    "correctIndex": 1,
    "explanation": "Cuestión relevante: Pérdida de calidad por mezcla. Respuesta pertinente: Segregar aleaciones e identificar lotes. Evidencia a revisar: Composición y rendimiento de recuperación por lote. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 646,
    "category": 2,
    "text": "Recortes de aluminio mezclados con otras aleaciones. Respuesta propuesta: Segregar aleaciones e identificar lotes. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Configuración, condición e inspección aceptada",
      "Composición, límites y rendimiento de tratamiento",
      "Composición y rendimiento de recuperación por lote",
      "Distribución de composición y propiedades frente a especificación"
    ],
    "correctIndex": 2,
    "explanation": "Cuestión relevante: Pérdida de calidad por mezcla. Respuesta pertinente: Segregar aleaciones e identificar lotes. Evidencia a revisar: Composición y rendimiento de recuperación por lote. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 647,
    "category": 2,
    "text": "Embalaje retornable vuelve vacío a larga distancia. ¿Qué cuestión es más directamente relevante?",
    "options": [
      "Barrera de separación por unión permanente",
      "Pérdida de rendimiento de material",
      "Extensión de vida condicionada a prestaciones",
      "Impacto de logística inversa"
    ],
    "correctIndex": 3,
    "explanation": "Cuestión relevante: Impacto de logística inversa. Respuesta pertinente: Comparar retornos y ciclos efectivos. Evidencia a revisar: Distancia, tasa de retorno y ciclos reales. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "foundation"
  },
  {
    "id": 648,
    "category": 2,
    "text": "Embalaje retornable vuelve vacío a larga distancia. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Comparar retornos y ciclos efectivos",
      "Evaluar historial y condición mediante procesos autorizados",
      "Caracterizar contaminantes y tratamiento autorizado",
      "Evaluar especificación y control de lotes"
    ],
    "correctIndex": 0,
    "explanation": "Cuestión relevante: Impacto de logística inversa. Respuesta pertinente: Comparar retornos y ciclos efectivos. Evidencia a revisar: Distancia, tasa de retorno y ciclos reales. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 649,
    "category": 2,
    "text": "Embalaje retornable vuelve vacío a larga distancia. Respuesta propuesta: Comparar retornos y ciclos efectivos. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Rendimiento y conformidad de piezas por lote",
      "Distancia, tasa de retorno y ciclos reales",
      "Ciclos adicionales y conformidad tras reacondicionamiento",
      "Composición y rendimiento de recuperación por lote"
    ],
    "correctIndex": 1,
    "explanation": "Cuestión relevante: Impacto de logística inversa. Respuesta pertinente: Comparar retornos y ciclos efectivos. Evidencia a revisar: Distancia, tasa de retorno y ciclos reales. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 650,
    "category": 2,
    "text": "Adhesivo dificulta separar materiales. ¿Qué cuestión es más directamente relevante?",
    "options": [
      "Incertidumbre de trazabilidad para reutilización",
      "Contaminación y pérdida de calidad",
      "Barrera de separación por unión permanente",
      "Variabilidad de propiedades y control de calidad"
    ],
    "correctIndex": 2,
    "explanation": "Cuestión relevante: Barrera de separación por unión permanente. Respuesta pertinente: Evaluar uniones y rutas de tratamiento viables. Evidencia a revisar: Rendimiento de separación y propiedades de unión. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "foundation"
  },
  {
    "id": 651,
    "category": 2,
    "text": "Adhesivo dificulta separar materiales. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Optimizar anidado respetando requisitos",
      "Evaluar reacondicionamiento y recalificación pertinente",
      "Segregar aleaciones e identificar lotes",
      "Evaluar uniones y rutas de tratamiento viables"
    ],
    "correctIndex": 3,
    "explanation": "Cuestión relevante: Barrera de separación por unión permanente. Respuesta pertinente: Evaluar uniones y rutas de tratamiento viables. Evidencia a revisar: Rendimiento de separación y propiedades de unión. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 652,
    "category": 2,
    "text": "Adhesivo dificulta separar materiales. Respuesta propuesta: Evaluar uniones y rutas de tratamiento viables. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Rendimiento de separación y propiedades de unión",
      "Composición, límites y rendimiento de tratamiento",
      "Distribución de composición y propiedades frente a especificación",
      "Distancia, tasa de retorno y ciclos reales"
    ],
    "correctIndex": 0,
    "explanation": "Cuestión relevante: Barrera de separación por unión permanente. Respuesta pertinente: Evaluar uniones y rutas de tratamiento viables. Evidencia a revisar: Rendimiento de separación y propiedades de unión. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 653,
    "category": 2,
    "text": "Pieza retirada sin historial completo. ¿Qué cuestión es más directamente relevante?",
    "options": [
      "Pérdida de rendimiento de material",
      "Incertidumbre de trazabilidad para reutilización",
      "Extensión de vida condicionada a prestaciones",
      "Pérdida de calidad por mezcla"
    ],
    "correctIndex": 1,
    "explanation": "Cuestión relevante: Incertidumbre de trazabilidad para reutilización. Respuesta pertinente: Evaluar historial y condición mediante procesos autorizados. Evidencia a revisar: Configuración, condición e inspección aceptada. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "foundation"
  },
  {
    "id": 654,
    "category": 2,
    "text": "Pieza retirada sin historial completo. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Caracterizar contaminantes y tratamiento autorizado",
      "Evaluar especificación y control de lotes",
      "Evaluar historial y condición mediante procesos autorizados",
      "Comparar retornos y ciclos efectivos"
    ],
    "correctIndex": 2,
    "explanation": "Cuestión relevante: Incertidumbre de trazabilidad para reutilización. Respuesta pertinente: Evaluar historial y condición mediante procesos autorizados. Evidencia a revisar: Configuración, condición e inspección aceptada. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 655,
    "category": 2,
    "text": "Pieza retirada sin historial completo. Respuesta propuesta: Evaluar historial y condición mediante procesos autorizados. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Ciclos adicionales y conformidad tras reacondicionamiento",
      "Composición y rendimiento de recuperación por lote",
      "Rendimiento de separación y propiedades de unión",
      "Configuración, condición e inspección aceptada"
    ],
    "correctIndex": 3,
    "explanation": "Cuestión relevante: Incertidumbre de trazabilidad para reutilización. Respuesta pertinente: Evaluar historial y condición mediante procesos autorizados. Evidencia a revisar: Configuración, condición e inspección aceptada. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 656,
    "category": 2,
    "text": "Residuos de corte por errores de anidado. ¿Qué cuestión es más directamente relevante?",
    "options": [
      "Pérdida de rendimiento de material",
      "Contaminación y pérdida de calidad",
      "Variabilidad de propiedades y control de calidad",
      "Impacto de logística inversa"
    ],
    "correctIndex": 0,
    "explanation": "Cuestión relevante: Pérdida de rendimiento de material. Respuesta pertinente: Optimizar anidado respetando requisitos. Evidencia a revisar: Rendimiento y conformidad de piezas por lote. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "foundation"
  },
  {
    "id": 657,
    "category": 2,
    "text": "Residuos de corte por errores de anidado. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Evaluar reacondicionamiento y recalificación pertinente",
      "Optimizar anidado respetando requisitos",
      "Segregar aleaciones e identificar lotes",
      "Evaluar uniones y rutas de tratamiento viables"
    ],
    "correctIndex": 1,
    "explanation": "Cuestión relevante: Pérdida de rendimiento de material. Respuesta pertinente: Optimizar anidado respetando requisitos. Evidencia a revisar: Rendimiento y conformidad de piezas por lote. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 658,
    "category": 2,
    "text": "Residuos de corte por errores de anidado. Respuesta propuesta: Optimizar anidado respetando requisitos. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Distribución de composición y propiedades frente a especificación",
      "Distancia, tasa de retorno y ciclos reales",
      "Rendimiento y conformidad de piezas por lote",
      "Configuración, condición e inspección aceptada"
    ],
    "correctIndex": 2,
    "explanation": "Cuestión relevante: Pérdida de rendimiento de material. Respuesta pertinente: Optimizar anidado respetando requisitos. Evidencia a revisar: Rendimiento y conformidad de piezas por lote. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 659,
    "category": 2,
    "text": "Residuo contaminado como materia prima secundaria. ¿Qué cuestión es más directamente relevante?",
    "options": [
      "Extensión de vida condicionada a prestaciones",
      "Pérdida de calidad por mezcla",
      "Barrera de separación por unión permanente",
      "Contaminación y pérdida de calidad"
    ],
    "correctIndex": 3,
    "explanation": "Cuestión relevante: Contaminación y pérdida de calidad. Respuesta pertinente: Caracterizar contaminantes y tratamiento autorizado. Evidencia a revisar: Composición, límites y rendimiento de tratamiento. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "foundation"
  },
  {
    "id": 660,
    "category": 2,
    "text": "Residuo contaminado como materia prima secundaria. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Caracterizar contaminantes y tratamiento autorizado",
      "Evaluar especificación y control de lotes",
      "Comparar retornos y ciclos efectivos",
      "Evaluar historial y condición mediante procesos autorizados"
    ],
    "correctIndex": 0,
    "explanation": "Cuestión relevante: Contaminación y pérdida de calidad. Respuesta pertinente: Caracterizar contaminantes y tratamiento autorizado. Evidencia a revisar: Composición, límites y rendimiento de tratamiento. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 661,
    "category": 2,
    "text": "Residuo contaminado como materia prima secundaria. Respuesta propuesta: Caracterizar contaminantes y tratamiento autorizado. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Composición y rendimiento de recuperación por lote",
      "Composición, límites y rendimiento de tratamiento",
      "Rendimiento de separación y propiedades de unión",
      "Rendimiento y conformidad de piezas por lote"
    ],
    "correctIndex": 1,
    "explanation": "Cuestión relevante: Contaminación y pérdida de calidad. Respuesta pertinente: Caracterizar contaminantes y tratamiento autorizado. Evidencia a revisar: Composición, límites y rendimiento de tratamiento. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 662,
    "category": 2,
    "text": "Prolongar vida de herramientas mediante reacondicionamiento. ¿Qué cuestión es más directamente relevante?",
    "options": [
      "Variabilidad de propiedades y control de calidad",
      "Impacto de logística inversa",
      "Extensión de vida condicionada a prestaciones",
      "Incertidumbre de trazabilidad para reutilización"
    ],
    "correctIndex": 2,
    "explanation": "Cuestión relevante: Extensión de vida condicionada a prestaciones. Respuesta pertinente: Evaluar reacondicionamiento y recalificación pertinente. Evidencia a revisar: Ciclos adicionales y conformidad tras reacondicionamiento. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "foundation"
  },
  {
    "id": 663,
    "category": 2,
    "text": "Prolongar vida de herramientas mediante reacondicionamiento. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Segregar aleaciones e identificar lotes",
      "Evaluar uniones y rutas de tratamiento viables",
      "Optimizar anidado respetando requisitos",
      "Evaluar reacondicionamiento y recalificación pertinente"
    ],
    "correctIndex": 3,
    "explanation": "Cuestión relevante: Extensión de vida condicionada a prestaciones. Respuesta pertinente: Evaluar reacondicionamiento y recalificación pertinente. Evidencia a revisar: Ciclos adicionales y conformidad tras reacondicionamiento. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 664,
    "category": 2,
    "text": "Prolongar vida de herramientas mediante reacondicionamiento. Respuesta propuesta: Evaluar reacondicionamiento y recalificación pertinente. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Ciclos adicionales y conformidad tras reacondicionamiento",
      "Distancia, tasa de retorno y ciclos reales",
      "Configuración, condición e inspección aceptada",
      "Composición, límites y rendimiento de tratamiento"
    ],
    "correctIndex": 0,
    "explanation": "Cuestión relevante: Extensión de vida condicionada a prestaciones. Respuesta pertinente: Evaluar reacondicionamiento y recalificación pertinente. Evidencia a revisar: Ciclos adicionales y conformidad tras reacondicionamiento. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 665,
    "category": 2,
    "text": "Material reciclado con composición variable. Respuesta propuesta: Evaluar especificación y control de lotes. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Rendimiento de separación y propiedades de unión",
      "Distribución de composición y propiedades frente a especificación",
      "Rendimiento y conformidad de piezas por lote",
      "Ciclos adicionales y conformidad tras reacondicionamiento"
    ],
    "correctIndex": 1,
    "explanation": "Cuestión relevante: Variabilidad de propiedades y control de calidad. Respuesta pertinente: Evaluar especificación y control de lotes. Evidencia a revisar: Distribución de composición y propiedades frente a especificación. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 666,
    "category": 3,
    "text": "Dos proveedores dependen de la misma refinería. ¿Qué cuestión es más directamente relevante?",
    "options": [
      "Cambio no controlado de configuración",
      "Brecha de trazabilidad mineral",
      "Concentración aguas arriba oculta",
      "Riesgo social en niveles indirectos"
    ],
    "correctIndex": 2,
    "explanation": "Cuestión relevante: Concentración aguas arriba oculta. Respuesta pertinente: Mapear dependencias y fuentes alternativas cualificadas. Evidencia a revisar: Mapa de origen y capacidad independiente. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "foundation"
  },
  {
    "id": 667,
    "category": 3,
    "text": "Dos proveedores dependen de la misma refinería. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Revisar aplicabilidad, plazos y alternativas",
      "Evaluar capacidad, calidad y demanda",
      "Retener aceptación hasta revisión técnica y calidad",
      "Mapear dependencias y fuentes alternativas cualificadas"
    ],
    "correctIndex": 3,
    "explanation": "Cuestión relevante: Concentración aguas arriba oculta. Respuesta pertinente: Mapear dependencias y fuentes alternativas cualificadas. Evidencia a revisar: Mapa de origen y capacidad independiente. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 668,
    "category": 3,
    "text": "Dos proveedores dependen de la misma refinería. Respuesta propuesta: Mapear dependencias y fuentes alternativas cualificadas. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Mapa de origen y capacidad independiente",
      "Cadena de custodia y evaluación de riesgos de origen",
      "Evaluación y cierre de medidas correctivas",
      "Documentación de origen y aceptación autorizada"
    ],
    "correctIndex": 0,
    "explanation": "Cuestión relevante: Concentración aguas arriba oculta. Respuesta pertinente: Mapear dependencias y fuentes alternativas cualificadas. Evidencia a revisar: Mapa de origen y capacidad independiente. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 669,
    "category": 3,
    "text": "Proveedor cambia proceso sin aviso. ¿Qué cuestión es más directamente relevante?",
    "options": [
      "Riesgo regulatorio y dependencia de proceso",
      "Cambio no controlado de configuración",
      "Capacidad insuficiente ante picos",
      "Incompatibilidad documental con compra"
    ],
    "correctIndex": 1,
    "explanation": "Cuestión relevante: Cambio no controlado de configuración. Respuesta pertinente: Aplicar control de cambios y evaluar recalificación. Evidencia a revisar: Notificación, evaluación y aprobación trazable. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "foundation"
  },
  {
    "id": 670,
    "category": 3,
    "text": "Proveedor cambia proceso sin aviso. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Solicitar origen y aplicar diligencia debida basada en riesgo",
      "Evaluar riesgos y acordar medidas correctivas",
      "Aplicar control de cambios y evaluar recalificación",
      "Verificar canal, historial y requisitos de aceptación"
    ],
    "correctIndex": 2,
    "explanation": "Cuestión relevante: Cambio no controlado de configuración. Respuesta pertinente: Aplicar control de cambios y evaluar recalificación. Evidencia a revisar: Notificación, evaluación y aprobación trazable. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 671,
    "category": 3,
    "text": "Proveedor cambia proceso sin aviso. Respuesta propuesta: Aplicar control de cambios y evaluar recalificación. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Capacidad demostrada y entregas conformes",
      "Correspondencia entre especificación, lote y aceptación",
      "Mapa de origen y capacidad independiente",
      "Notificación, evaluación y aprobación trazable"
    ],
    "correctIndex": 3,
    "explanation": "Cuestión relevante: Cambio no controlado de configuración. Respuesta pertinente: Aplicar control de cambios y evaluar recalificación. Evidencia a revisar: Notificación, evaluación y aprobación trazable. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 672,
    "category": 3,
    "text": "Sustancia de fabricación con nueva restricción potencial. ¿Qué cuestión es más directamente relevante?",
    "options": [
      "Riesgo regulatorio y dependencia de proceso",
      "Brecha de trazabilidad mineral",
      "Riesgo social en niveles indirectos",
      "Riesgo de autenticidad y origen"
    ],
    "correctIndex": 0,
    "explanation": "Cuestión relevante: Riesgo regulatorio y dependencia de proceso. Respuesta pertinente: Revisar aplicabilidad, plazos y alternativas. Evidencia a revisar: Inventario de usos y evaluación legal. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "foundation"
  },
  {
    "id": 673,
    "category": 3,
    "text": "Sustancia de fabricación con nueva restricción potencial. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Evaluar capacidad, calidad y demanda",
      "Revisar aplicabilidad, plazos y alternativas",
      "Retener aceptación hasta revisión técnica y calidad",
      "Mapear dependencias y fuentes alternativas cualificadas"
    ],
    "correctIndex": 1,
    "explanation": "Cuestión relevante: Riesgo regulatorio y dependencia de proceso. Respuesta pertinente: Revisar aplicabilidad, plazos y alternativas. Evidencia a revisar: Inventario de usos y evaluación legal. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 674,
    "category": 3,
    "text": "Sustancia de fabricación con nueva restricción potencial. Respuesta propuesta: Revisar aplicabilidad, plazos y alternativas. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Evaluación y cierre de medidas correctivas",
      "Documentación de origen y aceptación autorizada",
      "Inventario de usos y evaluación legal",
      "Notificación, evaluación y aprobación trazable"
    ],
    "correctIndex": 2,
    "explanation": "Cuestión relevante: Riesgo regulatorio y dependencia de proceso. Respuesta pertinente: Revisar aplicabilidad, plazos y alternativas. Evidencia a revisar: Inventario de usos y evaluación legal. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 675,
    "category": 3,
    "text": "Origen responsable declarado sin identificar fundiciones. ¿Qué cuestión es más directamente relevante?",
    "options": [
      "Capacidad insuficiente ante picos",
      "Incompatibilidad documental con compra",
      "Concentración aguas arriba oculta",
      "Brecha de trazabilidad mineral"
    ],
    "correctIndex": 3,
    "explanation": "Cuestión relevante: Brecha de trazabilidad mineral. Respuesta pertinente: Solicitar origen y aplicar diligencia debida basada en riesgo. Evidencia a revisar: Cadena de custodia y evaluación de riesgos de origen. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "foundation"
  },
  {
    "id": 676,
    "category": 3,
    "text": "Origen responsable declarado sin identificar fundiciones. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Solicitar origen y aplicar diligencia debida basada en riesgo",
      "Evaluar riesgos y acordar medidas correctivas",
      "Verificar canal, historial y requisitos de aceptación",
      "Aplicar control de cambios y evaluar recalificación"
    ],
    "correctIndex": 0,
    "explanation": "Cuestión relevante: Brecha de trazabilidad mineral. Respuesta pertinente: Solicitar origen y aplicar diligencia debida basada en riesgo. Evidencia a revisar: Cadena de custodia y evaluación de riesgos de origen. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 677,
    "category": 3,
    "text": "Origen responsable declarado sin identificar fundiciones. Respuesta propuesta: Solicitar origen y aplicar diligencia debida basada en riesgo. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Correspondencia entre especificación, lote y aceptación",
      "Cadena de custodia y evaluación de riesgos de origen",
      "Mapa de origen y capacidad independiente",
      "Inventario de usos y evaluación legal"
    ],
    "correctIndex": 1,
    "explanation": "Cuestión relevante: Brecha de trazabilidad mineral. Respuesta pertinente: Solicitar origen y aplicar diligencia debida basada en riesgo. Evidencia a revisar: Cadena de custodia y evaluación de riesgos de origen. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 678,
    "category": 3,
    "text": "Proveedor alternativo rápido con capacidad limitada. ¿Qué cuestión es más directamente relevante?",
    "options": [
      "Riesgo social en niveles indirectos",
      "Riesgo de autenticidad y origen",
      "Capacidad insuficiente ante picos",
      "Cambio no controlado de configuración"
    ],
    "correctIndex": 2,
    "explanation": "Cuestión relevante: Capacidad insuficiente ante picos. Respuesta pertinente: Evaluar capacidad, calidad y demanda. Evidencia a revisar: Capacidad demostrada y entregas conformes. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "foundation"
  },
  {
    "id": 679,
    "category": 3,
    "text": "Proveedor alternativo rápido con capacidad limitada. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Retener aceptación hasta revisión técnica y calidad",
      "Mapear dependencias y fuentes alternativas cualificadas",
      "Revisar aplicabilidad, plazos y alternativas",
      "Evaluar capacidad, calidad y demanda"
    ],
    "correctIndex": 3,
    "explanation": "Cuestión relevante: Capacidad insuficiente ante picos. Respuesta pertinente: Evaluar capacidad, calidad y demanda. Evidencia a revisar: Capacidad demostrada y entregas conformes. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 680,
    "category": 3,
    "text": "Proveedor alternativo rápido con capacidad limitada. Respuesta propuesta: Evaluar capacidad, calidad y demanda. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Capacidad demostrada y entregas conformes",
      "Documentación de origen y aceptación autorizada",
      "Notificación, evaluación y aprobación trazable",
      "Cadena de custodia y evaluación de riesgos de origen"
    ],
    "correctIndex": 0,
    "explanation": "Cuestión relevante: Capacidad insuficiente ante picos. Respuesta pertinente: Evaluar capacidad, calidad y demanda. Evidencia a revisar: Capacidad demostrada y entregas conformes. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 681,
    "category": 3,
    "text": "Subcontratistas sin visibilidad de condiciones laborales. ¿Qué cuestión es más directamente relevante?",
    "options": [
      "Incompatibilidad documental con compra",
      "Riesgo social en niveles indirectos",
      "Concentración aguas arriba oculta",
      "Riesgo regulatorio y dependencia de proceso"
    ],
    "correctIndex": 1,
    "explanation": "Cuestión relevante: Riesgo social en niveles indirectos. Respuesta pertinente: Evaluar riesgos y acordar medidas correctivas. Evidencia a revisar: Evaluación y cierre de medidas correctivas. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "foundation"
  },
  {
    "id": 682,
    "category": 3,
    "text": "Subcontratistas sin visibilidad de condiciones laborales. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Verificar canal, historial y requisitos de aceptación",
      "Aplicar control de cambios y evaluar recalificación",
      "Evaluar riesgos y acordar medidas correctivas",
      "Solicitar origen y aplicar diligencia debida basada en riesgo"
    ],
    "correctIndex": 2,
    "explanation": "Cuestión relevante: Riesgo social en niveles indirectos. Respuesta pertinente: Evaluar riesgos y acordar medidas correctivas. Evidencia a revisar: Evaluación y cierre de medidas correctivas. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 683,
    "category": 3,
    "text": "Subcontratistas sin visibilidad de condiciones laborales. Respuesta propuesta: Evaluar riesgos y acordar medidas correctivas. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Mapa de origen y capacidad independiente",
      "Inventario de usos y evaluación legal",
      "Capacidad demostrada y entregas conformes",
      "Evaluación y cierre de medidas correctivas"
    ],
    "correctIndex": 3,
    "explanation": "Cuestión relevante: Riesgo social en niveles indirectos. Respuesta pertinente: Evaluar riesgos y acordar medidas correctivas. Evidencia a revisar: Evaluación y cierre de medidas correctivas. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 684,
    "category": 3,
    "text": "Material con certificado de otra especificación. ¿Qué cuestión es más directamente relevante?",
    "options": [
      "Incompatibilidad documental con compra",
      "Riesgo de autenticidad y origen",
      "Cambio no controlado de configuración",
      "Brecha de trazabilidad mineral"
    ],
    "correctIndex": 0,
    "explanation": "Cuestión relevante: Incompatibilidad documental con compra. Respuesta pertinente: Retener aceptación hasta revisión técnica y calidad. Evidencia a revisar: Correspondencia entre especificación, lote y aceptación. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "foundation"
  },
  {
    "id": 685,
    "category": 3,
    "text": "Material con certificado de otra especificación. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Mapear dependencias y fuentes alternativas cualificadas",
      "Retener aceptación hasta revisión técnica y calidad",
      "Revisar aplicabilidad, plazos y alternativas",
      "Evaluar capacidad, calidad y demanda"
    ],
    "correctIndex": 1,
    "explanation": "Cuestión relevante: Incompatibilidad documental con compra. Respuesta pertinente: Retener aceptación hasta revisión técnica y calidad. Evidencia a revisar: Correspondencia entre especificación, lote y aceptación. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 686,
    "category": 3,
    "text": "Material con certificado de otra especificación. Respuesta propuesta: Retener aceptación hasta revisión técnica y calidad. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Notificación, evaluación y aprobación trazable",
      "Cadena de custodia y evaluación de riesgos de origen",
      "Correspondencia entre especificación, lote y aceptación",
      "Evaluación y cierre de medidas correctivas"
    ],
    "correctIndex": 2,
    "explanation": "Cuestión relevante: Incompatibilidad documental con compra. Respuesta pertinente: Retener aceptación hasta revisión técnica y calidad. Evidencia a revisar: Correspondencia entre especificación, lote y aceptación. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 687,
    "category": 3,
    "text": "Compra urgente mediante intermediario nuevo. Respuesta propuesta: Verificar canal, historial y requisitos de aceptación. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Inventario de usos y evaluación legal",
      "Capacidad demostrada y entregas conformes",
      "Correspondencia entre especificación, lote y aceptación",
      "Documentación de origen y aceptación autorizada"
    ],
    "correctIndex": 3,
    "explanation": "Cuestión relevante: Riesgo de autenticidad y origen. Respuesta pertinente: Verificar canal, historial y requisitos de aceptación. Evidencia a revisar: Documentación de origen y aceptación autorizada. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 688,
    "category": 4,
    "text": "Indicador cambia metodología a mitad de año. ¿Qué cuestión es más directamente relevante?",
    "options": [
      "Ruptura de comparabilidad temporal",
      "Ausencia de referencia verificable",
      "Cobertura insuficiente de medición",
      "Doble contabilización o atribución incorrecta"
    ],
    "correctIndex": 0,
    "explanation": "Cuestión relevante: Ruptura de comparabilidad temporal. Respuesta pertinente: Documentar cambio y recalcular referencia si viable. Evidencia a revisar: Serie comparable y explicación metodológica. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "foundation"
  },
  {
    "id": 689,
    "category": 4,
    "text": "Indicador cambia metodología a mitad de año. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Asignar responsable, hitos y revisión",
      "Documentar cambio y recalcular referencia si viable",
      "Revisar causa y verificar nueva acción",
      "Definir propietarios, permisos y criterios de calidad"
    ],
    "correctIndex": 1,
    "explanation": "Cuestión relevante: Ruptura de comparabilidad temporal. Respuesta pertinente: Documentar cambio y recalcular referencia si viable. Evidencia a revisar: Serie comparable y explicación metodológica. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 690,
    "category": 4,
    "text": "Indicador cambia metodología a mitad de año. Respuesta propuesta: Documentar cambio y recalcular referencia si viable. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Cobertura y rango de incertidumbre",
      "Inventarios y reglas de consolidación trazables",
      "Serie comparable y explicación metodológica",
      "Ficha metodológica común o justificación de no comparabilidad"
    ],
    "correctIndex": 2,
    "explanation": "Cuestión relevante: Ruptura de comparabilidad temporal. Respuesta pertinente: Documentar cambio y recalcular referencia si viable. Evidencia a revisar: Serie comparable y explicación metodológica. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 691,
    "category": 4,
    "text": "Reducción de emisiones sin año base. ¿Qué cuestión es más directamente relevante?",
    "options": [
      "Falta de responsabilidad y seguimiento",
      "Ineficacia sobre causa raíz",
      "Gobernanza de acceso y calidad de datos",
      "Ausencia de referencia verificable"
    ],
    "correctIndex": 3,
    "explanation": "Cuestión relevante: Ausencia de referencia verificable. Respuesta pertinente: Definir año base, alcance y método. Evidencia a revisar: Inventario base y cálculo reproducible. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "foundation"
  },
  {
    "id": 692,
    "category": 4,
    "text": "Reducción de emisiones sin año base. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Definir año base, alcance y método",
      "Identificar datos faltantes y delimitar afirmación",
      "Separar alcances y reglas de atribución",
      "Alinear métricas o separar resultados con límites"
    ],
    "correctIndex": 0,
    "explanation": "Cuestión relevante: Ausencia de referencia verificable. Respuesta pertinente: Definir año base, alcance y método. Evidencia a revisar: Inventario base y cálculo reproducible. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 693,
    "category": 4,
    "text": "Reducción de emisiones sin año base. Respuesta propuesta: Definir año base, alcance y método. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Seguimiento de recurrencia en periodo definido",
      "Inventario base y cálculo reproducible",
      "Registro de fuentes autorizadas y validación",
      "Serie comparable y explicación metodológica"
    ],
    "correctIndex": 1,
    "explanation": "Cuestión relevante: Ausencia de referencia verificable. Respuesta pertinente: Definir año base, alcance y método. Evidencia a revisar: Inventario base y cálculo reproducible. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 694,
    "category": 4,
    "text": "Objetivo ambiental sin responsable. ¿Qué cuestión es más directamente relevante?",
    "options": [
      "Cobertura insuficiente de medición",
      "Doble contabilización o atribución incorrecta",
      "Falta de responsabilidad y seguimiento",
      "Incomparabilidad metodológica"
    ],
    "correctIndex": 2,
    "explanation": "Cuestión relevante: Falta de responsabilidad y seguimiento. Respuesta pertinente: Asignar responsable, hitos y revisión. Evidencia a revisar: Registro de responsables, avances y decisiones. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "foundation"
  },
  {
    "id": 695,
    "category": 4,
    "text": "Objetivo ambiental sin responsable. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Revisar causa y verificar nueva acción",
      "Definir propietarios, permisos y criterios de calidad",
      "Documentar cambio y recalcular referencia si viable",
      "Asignar responsable, hitos y revisión"
    ],
    "correctIndex": 3,
    "explanation": "Cuestión relevante: Falta de responsabilidad y seguimiento. Respuesta pertinente: Asignar responsable, hitos y revisión. Evidencia a revisar: Registro de responsables, avances y decisiones. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 696,
    "category": 4,
    "text": "Objetivo ambiental sin responsable. Respuesta propuesta: Asignar responsable, hitos y revisión. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Registro de responsables, avances y decisiones",
      "Inventarios y reglas de consolidación trazables",
      "Ficha metodológica común o justificación de no comparabilidad",
      "Inventario base y cálculo reproducible"
    ],
    "correctIndex": 0,
    "explanation": "Cuestión relevante: Falta de responsabilidad y seguimiento. Respuesta pertinente: Asignar responsable, hitos y revisión. Evidencia a revisar: Registro de responsables, avances y decisiones. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 697,
    "category": 4,
    "text": "Mejora de consumo con datos incompletos. ¿Qué cuestión es más directamente relevante?",
    "options": [
      "Ineficacia sobre causa raíz",
      "Cobertura insuficiente de medición",
      "Gobernanza de acceso y calidad de datos",
      "Ruptura de comparabilidad temporal"
    ],
    "correctIndex": 1,
    "explanation": "Cuestión relevante: Cobertura insuficiente de medición. Respuesta pertinente: Identificar datos faltantes y delimitar afirmación. Evidencia a revisar: Cobertura y rango de incertidumbre. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "foundation"
  },
  {
    "id": 698,
    "category": 4,
    "text": "Mejora de consumo con datos incompletos. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Separar alcances y reglas de atribución",
      "Alinear métricas o separar resultados con límites",
      "Identificar datos faltantes y delimitar afirmación",
      "Definir año base, alcance y método"
    ],
    "correctIndex": 2,
    "explanation": "Cuestión relevante: Cobertura insuficiente de medición. Respuesta pertinente: Identificar datos faltantes y delimitar afirmación. Evidencia a revisar: Cobertura y rango de incertidumbre. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 699,
    "category": 4,
    "text": "Mejora de consumo con datos incompletos. Respuesta propuesta: Identificar datos faltantes y delimitar afirmación. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Registro de fuentes autorizadas y validación",
      "Serie comparable y explicación metodológica",
      "Registro de responsables, avances y decisiones",
      "Cobertura y rango de incertidumbre"
    ],
    "correctIndex": 3,
    "explanation": "Cuestión relevante: Cobertura insuficiente de medición. Respuesta pertinente: Identificar datos faltantes y delimitar afirmación. Evidencia a revisar: Cobertura y rango de incertidumbre. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 700,
    "category": 4,
    "text": "Acción correctiva no evita recurrencia. ¿Qué cuestión es más directamente relevante?",
    "options": [
      "Ineficacia sobre causa raíz",
      "Doble contabilización o atribución incorrecta",
      "Incomparabilidad metodológica",
      "Ausencia de referencia verificable"
    ],
    "correctIndex": 0,
    "explanation": "Cuestión relevante: Ineficacia sobre causa raíz. Respuesta pertinente: Revisar causa y verificar nueva acción. Evidencia a revisar: Seguimiento de recurrencia en periodo definido. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "foundation"
  },
  {
    "id": 701,
    "category": 4,
    "text": "Acción correctiva no evita recurrencia. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Definir propietarios, permisos y criterios de calidad",
      "Revisar causa y verificar nueva acción",
      "Documentar cambio y recalcular referencia si viable",
      "Asignar responsable, hitos y revisión"
    ],
    "correctIndex": 1,
    "explanation": "Cuestión relevante: Ineficacia sobre causa raíz. Respuesta pertinente: Revisar causa y verificar nueva acción. Evidencia a revisar: Seguimiento de recurrencia en periodo definido. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 702,
    "category": 4,
    "text": "Acción correctiva no evita recurrencia. Respuesta propuesta: Revisar causa y verificar nueva acción. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Ficha metodológica común o justificación de no comparabilidad",
      "Inventario base y cálculo reproducible",
      "Seguimiento de recurrencia en periodo definido",
      "Cobertura y rango de incertidumbre"
    ],
    "correctIndex": 2,
    "explanation": "Cuestión relevante: Ineficacia sobre causa raíz. Respuesta pertinente: Revisar causa y verificar nueva acción. Evidencia a revisar: Seguimiento de recurrencia en periodo definido. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 703,
    "category": 4,
    "text": "Informe combina reducciones propias y de proveedores. ¿Qué cuestión es más directamente relevante?",
    "options": [
      "Gobernanza de acceso y calidad de datos",
      "Ruptura de comparabilidad temporal",
      "Falta de responsabilidad y seguimiento",
      "Doble contabilización o atribución incorrecta"
    ],
    "correctIndex": 3,
    "explanation": "Cuestión relevante: Doble contabilización o atribución incorrecta. Respuesta pertinente: Separar alcances y reglas de atribución. Evidencia a revisar: Inventarios y reglas de consolidación trazables. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "foundation"
  },
  {
    "id": 704,
    "category": 4,
    "text": "Informe combina reducciones propias y de proveedores. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Separar alcances y reglas de atribución",
      "Alinear métricas o separar resultados con límites",
      "Definir año base, alcance y método",
      "Identificar datos faltantes y delimitar afirmación"
    ],
    "correctIndex": 0,
    "explanation": "Cuestión relevante: Doble contabilización o atribución incorrecta. Respuesta pertinente: Separar alcances y reglas de atribución. Evidencia a revisar: Inventarios y reglas de consolidación trazables. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 705,
    "category": 4,
    "text": "Informe combina reducciones propias y de proveedores. Respuesta propuesta: Separar alcances y reglas de atribución. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Serie comparable y explicación metodológica",
      "Inventarios y reglas de consolidación trazables",
      "Registro de responsables, avances y decisiones",
      "Seguimiento de recurrencia en periodo definido"
    ],
    "correctIndex": 1,
    "explanation": "Cuestión relevante: Doble contabilización o atribución incorrecta. Respuesta pertinente: Separar alcances y reglas de atribución. Evidencia a revisar: Inventarios y reglas de consolidación trazables. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 706,
    "category": 4,
    "text": "Propuesta requiere datos internos de varias áreas. ¿Qué cuestión es más directamente relevante?",
    "options": [
      "Incomparabilidad metodológica",
      "Ausencia de referencia verificable",
      "Gobernanza de acceso y calidad de datos",
      "Cobertura insuficiente de medición"
    ],
    "correctIndex": 2,
    "explanation": "Cuestión relevante: Gobernanza de acceso y calidad de datos. Respuesta pertinente: Definir propietarios, permisos y criterios de calidad. Evidencia a revisar: Registro de fuentes autorizadas y validación. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "foundation"
  },
  {
    "id": 707,
    "category": 4,
    "text": "Propuesta requiere datos internos de varias áreas. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Documentar cambio y recalcular referencia si viable",
      "Asignar responsable, hitos y revisión",
      "Revisar causa y verificar nueva acción",
      "Definir propietarios, permisos y criterios de calidad"
    ],
    "correctIndex": 3,
    "explanation": "Cuestión relevante: Gobernanza de acceso y calidad de datos. Respuesta pertinente: Definir propietarios, permisos y criterios de calidad. Evidencia a revisar: Registro de fuentes autorizadas y validación. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 708,
    "category": 4,
    "text": "Propuesta requiere datos internos de varias áreas. Respuesta propuesta: Definir propietarios, permisos y criterios de calidad. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Registro de fuentes autorizadas y validación",
      "Inventario base y cálculo reproducible",
      "Cobertura y rango de incertidumbre",
      "Inventarios y reglas de consolidación trazables"
    ],
    "correctIndex": 0,
    "explanation": "Cuestión relevante: Gobernanza de acceso y calidad de datos. Respuesta pertinente: Definir propietarios, permisos y criterios de calidad. Evidencia a revisar: Registro de fuentes autorizadas y validación. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 709,
    "category": 4,
    "text": "Comité compara beneficios con métodos distintos. Respuesta propuesta: Alinear métricas o separar resultados con límites. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Registro de responsables, avances y decisiones",
      "Ficha metodológica común o justificación de no comparabilidad",
      "Seguimiento de recurrencia en periodo definido",
      "Registro de fuentes autorizadas y validación"
    ],
    "correctIndex": 1,
    "explanation": "Cuestión relevante: Incomparabilidad metodológica. Respuesta pertinente: Alinear métricas o separar resultados con límites. Evidencia a revisar: Ficha metodológica común o justificación de no comparabilidad. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 710,
    "category": 5,
    "text": "Equipo crítico falla repetidamente del mismo modo. ¿Qué cuestión es más directamente relevante?",
    "options": [
      "Inventario no utilizable por caducidad",
      "Dependencia de competencia sin cobertura",
      "Pérdida recurrente de disponibilidad",
      "Interacción de dependencias y recuperación"
    ],
    "correctIndex": 2,
    "explanation": "Cuestión relevante: Pérdida recurrente de disponibilidad. Respuesta pertinente: Analizar causa y prevención con Ingeniería. Evidencia a revisar: Frecuencia de fallo y disponibilidad antes y después. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "foundation"
  },
  {
    "id": 711,
    "category": 5,
    "text": "Equipo crítico falla repetidamente del mismo modo. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Evaluar redundancia y disponibilidad de herramienta",
      "Comparar alternativas bajo éxito y fallo",
      "Comparar plazo y escenarios de interrupción",
      "Analizar causa y prevención con Ingeniería"
    ],
    "correctIndex": 3,
    "explanation": "Cuestión relevante: Pérdida recurrente de disponibilidad. Respuesta pertinente: Analizar causa y prevención con Ingeniería. Evidencia a revisar: Frecuencia de fallo y disponibilidad antes y después. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 712,
    "category": 5,
    "text": "Equipo crítico falla repetidamente del mismo modo. Respuesta propuesta: Analizar causa y prevención con Ingeniería. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Frecuencia de fallo y disponibilidad antes y después",
      "Matriz de competencias y cobertura de turnos",
      "Ejercicios de continuidad con interrupciones combinadas",
      "Historial o supuestos trazables por tipo de fallo"
    ],
    "correctIndex": 0,
    "explanation": "Cuestión relevante: Pérdida recurrente de disponibilidad. Respuesta pertinente: Analizar causa y prevención con Ingeniería. Evidencia a revisar: Frecuencia de fallo y disponibilidad antes y después. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 713,
    "category": 5,
    "text": "Reserva de repuestos con vida de almacenamiento limitada. ¿Qué cuestión es más directamente relevante?",
    "options": [
      "Punto único de fallo de mantenimiento",
      "Inventario no utilizable por caducidad",
      "Retraso por reparación fallida",
      "Compromiso entre rapidez y concentración"
    ],
    "correctIndex": 1,
    "explanation": "Cuestión relevante: Inventario no utilizable por caducidad. Respuesta pertinente: Gestionar rotación y demanda autorizadas. Evidencia a revisar: Inventario utilizable y cobertura de demanda. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "foundation"
  },
  {
    "id": 714,
    "category": 5,
    "text": "Reserva de repuestos con vida de almacenamiento limitada. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Evaluar formación cruzada y cobertura autorizada",
      "Evaluar escenarios compuestos y funciones prioritarias",
      "Gestionar rotación y demanda autorizadas",
      "Distinguir escenarios y distribución de tiempos"
    ],
    "correctIndex": 2,
    "explanation": "Cuestión relevante: Inventario no utilizable por caducidad. Respuesta pertinente: Gestionar rotación y demanda autorizadas. Evidencia a revisar: Inventario utilizable y cobertura de demanda. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 715,
    "category": 5,
    "text": "Reserva de repuestos con vida de almacenamiento limitada. Respuesta propuesta: Gestionar rotación y demanda autorizadas. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Distribución de plazos y probabilidad de éxito",
      "Cumplimiento de plazo y recuperación en escenarios comparables",
      "Frecuencia de fallo y disponibilidad antes y después",
      "Inventario utilizable y cobertura de demanda"
    ],
    "correctIndex": 3,
    "explanation": "Cuestión relevante: Inventario no utilizable por caducidad. Respuesta pertinente: Gestionar rotación y demanda autorizadas. Evidencia a revisar: Inventario utilizable y cobertura de demanda. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 716,
    "category": 5,
    "text": "Servicio depende de una única herramienta de ensayo. ¿Qué cuestión es más directamente relevante?",
    "options": [
      "Punto único de fallo de mantenimiento",
      "Dependencia de competencia sin cobertura",
      "Interacción de dependencias y recuperación",
      "Variabilidad oculta por un valor único"
    ],
    "correctIndex": 0,
    "explanation": "Cuestión relevante: Punto único de fallo de mantenimiento. Respuesta pertinente: Evaluar redundancia y disponibilidad de herramienta. Evidencia a revisar: Indisponibilidad y capacidad alternativa demostrada. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "foundation"
  },
  {
    "id": 717,
    "category": 5,
    "text": "Servicio depende de una única herramienta de ensayo. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Comparar alternativas bajo éxito y fallo",
      "Evaluar redundancia y disponibilidad de herramienta",
      "Comparar plazo y escenarios de interrupción",
      "Analizar causa y prevención con Ingeniería"
    ],
    "correctIndex": 1,
    "explanation": "Cuestión relevante: Punto único de fallo de mantenimiento. Respuesta pertinente: Evaluar redundancia y disponibilidad de herramienta. Evidencia a revisar: Indisponibilidad y capacidad alternativa demostrada. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 718,
    "category": 5,
    "text": "Servicio depende de una única herramienta de ensayo. Respuesta propuesta: Evaluar redundancia y disponibilidad de herramienta. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Ejercicios de continuidad con interrupciones combinadas",
      "Historial o supuestos trazables por tipo de fallo",
      "Indisponibilidad y capacidad alternativa demostrada",
      "Inventario utilizable y cobertura de demanda"
    ],
    "correctIndex": 2,
    "explanation": "Cuestión relevante: Punto único de fallo de mantenimiento. Respuesta pertinente: Evaluar redundancia y disponibilidad de herramienta. Evidencia a revisar: Indisponibilidad y capacidad alternativa demostrada. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 719,
    "category": 5,
    "text": "Continuidad depende de una sola competencia especializada. ¿Qué cuestión es más directamente relevante?",
    "options": [
      "Retraso por reparación fallida",
      "Compromiso entre rapidez y concentración",
      "Pérdida recurrente de disponibilidad",
      "Dependencia de competencia sin cobertura"
    ],
    "correctIndex": 3,
    "explanation": "Cuestión relevante: Dependencia de competencia sin cobertura. Respuesta pertinente: Evaluar formación cruzada y cobertura autorizada. Evidencia a revisar: Matriz de competencias y cobertura de turnos. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "foundation"
  },
  {
    "id": 720,
    "category": 5,
    "text": "Continuidad depende de una sola competencia especializada. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Evaluar formación cruzada y cobertura autorizada",
      "Evaluar escenarios compuestos y funciones prioritarias",
      "Distinguir escenarios y distribución de tiempos",
      "Gestionar rotación y demanda autorizadas"
    ],
    "correctIndex": 0,
    "explanation": "Cuestión relevante: Dependencia de competencia sin cobertura. Respuesta pertinente: Evaluar formación cruzada y cobertura autorizada. Evidencia a revisar: Matriz de competencias y cobertura de turnos. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 721,
    "category": 5,
    "text": "Continuidad depende de una sola competencia especializada. Respuesta propuesta: Evaluar formación cruzada y cobertura autorizada. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Cumplimiento de plazo y recuperación en escenarios comparables",
      "Matriz de competencias y cobertura de turnos",
      "Frecuencia de fallo y disponibilidad antes y después",
      "Indisponibilidad y capacidad alternativa demostrada"
    ],
    "correctIndex": 1,
    "explanation": "Cuestión relevante: Dependencia de competencia sin cobertura. Respuesta pertinente: Evaluar formación cruzada y cobertura autorizada. Evidencia a revisar: Matriz de competencias y cobertura de turnos. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 722,
    "category": 5,
    "text": "Reparación rápida con éxito incierto. ¿Qué cuestión es más directamente relevante?",
    "options": [
      "Interacción de dependencias y recuperación",
      "Variabilidad oculta por un valor único",
      "Retraso por reparación fallida",
      "Inventario no utilizable por caducidad"
    ],
    "correctIndex": 2,
    "explanation": "Cuestión relevante: Retraso por reparación fallida. Respuesta pertinente: Comparar alternativas bajo éxito y fallo. Evidencia a revisar: Distribución de plazos y probabilidad de éxito. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "foundation"
  },
  {
    "id": 723,
    "category": 5,
    "text": "Reparación rápida con éxito incierto. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Comparar plazo y escenarios de interrupción",
      "Analizar causa y prevención con Ingeniería",
      "Evaluar redundancia y disponibilidad de herramienta",
      "Comparar alternativas bajo éxito y fallo"
    ],
    "correctIndex": 3,
    "explanation": "Cuestión relevante: Retraso por reparación fallida. Respuesta pertinente: Comparar alternativas bajo éxito y fallo. Evidencia a revisar: Distribución de plazos y probabilidad de éxito. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 724,
    "category": 5,
    "text": "Reparación rápida con éxito incierto. Respuesta propuesta: Comparar alternativas bajo éxito y fallo. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Distribución de plazos y probabilidad de éxito",
      "Historial o supuestos trazables por tipo de fallo",
      "Inventario utilizable y cobertura de demanda",
      "Matriz de competencias y cobertura de turnos"
    ],
    "correctIndex": 0,
    "explanation": "Cuestión relevante: Retraso por reparación fallida. Respuesta pertinente: Comparar alternativas bajo éxito y fallo. Evidencia a revisar: Distribución de plazos y probabilidad de éxito. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 725,
    "category": 5,
    "text": "Centro de servicio afronta interrupciones simultáneas. ¿Qué cuestión es más directamente relevante?",
    "options": [
      "Compromiso entre rapidez y concentración",
      "Interacción de dependencias y recuperación",
      "Pérdida recurrente de disponibilidad",
      "Punto único de fallo de mantenimiento"
    ],
    "correctIndex": 1,
    "explanation": "Cuestión relevante: Interacción de dependencias y recuperación. Respuesta pertinente: Evaluar escenarios compuestos y funciones prioritarias. Evidencia a revisar: Ejercicios de continuidad con interrupciones combinadas. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "foundation"
  },
  {
    "id": 726,
    "category": 5,
    "text": "Centro de servicio afronta interrupciones simultáneas. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Distinguir escenarios y distribución de tiempos",
      "Gestionar rotación y demanda autorizadas",
      "Evaluar escenarios compuestos y funciones prioritarias",
      "Evaluar formación cruzada y cobertura autorizada"
    ],
    "correctIndex": 2,
    "explanation": "Cuestión relevante: Interacción de dependencias y recuperación. Respuesta pertinente: Evaluar escenarios compuestos y funciones prioritarias. Evidencia a revisar: Ejercicios de continuidad con interrupciones combinadas. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 727,
    "category": 5,
    "text": "Centro de servicio afronta interrupciones simultáneas. Respuesta propuesta: Evaluar escenarios compuestos y funciones prioritarias. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Frecuencia de fallo y disponibilidad antes y después",
      "Indisponibilidad y capacidad alternativa demostrada",
      "Distribución de plazos y probabilidad de éxito",
      "Ejercicios de continuidad con interrupciones combinadas"
    ],
    "correctIndex": 3,
    "explanation": "Cuestión relevante: Interacción de dependencias y recuperación. Respuesta pertinente: Evaluar escenarios compuestos y funciones prioritarias. Evidencia a revisar: Ejercicios de continuidad con interrupciones combinadas. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 728,
    "category": 5,
    "text": "Entrega más rápida incrementa dependencia de un proveedor. ¿Qué cuestión es más directamente relevante?",
    "options": [
      "Compromiso entre rapidez y concentración",
      "Variabilidad oculta por un valor único",
      "Inventario no utilizable por caducidad",
      "Dependencia de competencia sin cobertura"
    ],
    "correctIndex": 0,
    "explanation": "Cuestión relevante: Compromiso entre rapidez y concentración. Respuesta pertinente: Comparar plazo y escenarios de interrupción. Evidencia a revisar: Cumplimiento de plazo y recuperación en escenarios comparables. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "foundation"
  },
  {
    "id": 729,
    "category": 5,
    "text": "Entrega más rápida incrementa dependencia de un proveedor. ¿Qué respuesta aborda mejor esta situación?",
    "options": [
      "Analizar causa y prevención con Ingeniería",
      "Comparar plazo y escenarios de interrupción",
      "Evaluar redundancia y disponibilidad de herramienta",
      "Comparar alternativas bajo éxito y fallo"
    ],
    "correctIndex": 1,
    "explanation": "Cuestión relevante: Compromiso entre rapidez y concentración. Respuesta pertinente: Comparar plazo y escenarios de interrupción. Evidencia a revisar: Cumplimiento de plazo y recuperación en escenarios comparables. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "applied"
  },
  {
    "id": 730,
    "category": 5,
    "text": "Entrega más rápida incrementa dependencia de un proveedor. Respuesta propuesta: Comparar plazo y escenarios de interrupción. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Inventario utilizable y cobertura de demanda",
      "Matriz de competencias y cobertura de turnos",
      "Cumplimiento de plazo y recuperación en escenarios comparables",
      "Ejercicios de continuidad con interrupciones combinadas"
    ],
    "correctIndex": 2,
    "explanation": "Cuestión relevante: Compromiso entre rapidez y concentración. Respuesta pertinente: Comparar plazo y escenarios de interrupción. Evidencia a revisar: Cumplimiento de plazo y recuperación en escenarios comparables. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "advanced"
  },
  {
    "id": 731,
    "category": 5,
    "text": "Un único tiempo de recuperación para todos los fallos. Respuesta propuesta: Distinguir escenarios y distribución de tiempos. ¿Qué evidencia permitiría evaluar más directamente la respuesta propuesta?",
    "options": [
      "Indisponibilidad y capacidad alternativa demostrada",
      "Distribución de plazos y probabilidad de éxito",
      "Cumplimiento de plazo y recuperación en escenarios comparables",
      "Historial o supuestos trazables por tipo de fallo"
    ],
    "correctIndex": 3,
    "explanation": "Cuestión relevante: Variabilidad oculta por un valor único. Respuesta pertinente: Distinguir escenarios y distribución de tiempos. Evidencia a revisar: Historial o supuestos trazables por tipo de fallo. Evalúa el resultado frente a la función, el alcance y los requisitos aplicables.",
    "difficulty": "advanced"
  }
];
