import { useState } from 'react';
import { CATEGORY_COLORS, CATEGORY_SHORT_NAMES, PLAYER_COLORS } from '../../game/board';

import { CLIMATE_MODE } from '../../game/climate';

interface SetupScreenProps {
  onStart: (names: string[]) => void;
}

export default function SetupScreen({ onStart }: SetupScreenProps) {
  const track = new URLSearchParams(window.location.search).get('track');
  const hasSelectedMode = track === 'general' || track === 'climate';
  const [startError, setStartError] = useState(false);
  const [count, setCount] = useState(1);
  const [names, setNames] = useState(['Participante 1', 'Participante 2', 'Participante 3', 'Participante 4']);

  const start = () => {
    const selectedNames = names
      .slice(0, count)
      .map((name, index) => name.trim() || `Participante ${index + 1}`);
    if (!hasSelectedMode) return;
    const handled = !document.dispatchEvent(new CustomEvent('sn-pilot:quest-start', {
      cancelable: true, detail: { start: () => onStart(selectedNames) }
    }));
    setStartError(!handled);
  };

  return (
    <main className="setup-page">
      <section className="setup-hero">
        <div className="brand-mark" aria-hidden="true">
          <span /><span /><span /><span /><span /><span />
        </div>
        <p className="eyebrow">APRENDER · DECIDIR · AVANZAR</p>
        <h1><span>{CLIMATE_MODE ? "Adaptación climática" : "Sustainability"}</span> Quest</h1>
        <p className="setup-lead">{CLIMATE_MODE ? "Practica decisiones aeronáuticas ficticias sobre riesgos físicos, vulnerabilidad del producto, diseño, operaciones, fenómenos extremos y evidencias. El juego no autoriza cambios técnicos ni operativos." : "Explora ecodiseño, operaciones, circularidad, cadena de suministro, gobernanza y gestión de riesgos en un tablero de seis categorías. Consigue las seis insignias de aprendizaje."}</p>
        <section className="quest-mode-picker" aria-labelledby="mode-title">
          <h2 id="mode-title">1. Elige la modalidad</h2>
          <p>Selecciona uno de los dos juegos. Cada uno tiene sus propias preguntas y evaluaciones.</p>
          <div className="quest-mode-grid">
            <a data-testid="mode-general" href="?track=general" className={'quest-mode-option' + (track === 'general' ? ' active' : '')} aria-current={track === 'general' ? 'true' : undefined}>
              <span className="quest-mode-label">MODALIDAD 1</span>
              <strong>Sostenibilidad general</strong>
              <span>Ecodiseño, operaciones, circularidad, suministro, gobernanza y riesgos.</span>
              <span className="quest-mode-cta">{track === 'general' ? '✓ Seleccionada' : 'Elegir esta modalidad →'}</span>
            </a>
            <a data-testid="mode-climate" href="?track=climate" className={'quest-mode-option climate' + (track === 'climate' ? ' active' : '')} aria-current={track === 'climate' ? 'true' : undefined}>
              <span className="quest-mode-label">MODALIDAD 2</span>
              <strong>Adaptación climática</strong>
              <span>Riesgos físicos, resiliencia del producto, diseño, operaciones y fenómenos extremos.</span>
              <span className="quest-mode-cta">{track === 'climate' ? '✓ Seleccionada' : 'Elegir esta modalidad →'}</span>
            </a>
          </div>
          <p className="quest-mode-hint">180 preguntas por modalidad · 6 categorías · 3 niveles</p>
        </section>

        <div className="mission-flow" aria-label="Cómo se juega">
          <div><strong>1</strong><span>Tira el dado</span></div>
          <div><strong>2</strong><span>Elige tu ruta</span></div>
          <div><strong>3</strong><span>Responde</span></div>
          <div><strong>4</strong><span>Gana insignias</span></div>
          <div><strong>5</strong><span>Supera la final</span></div>
        </div>

        <p className="setup-lead">180 preguntas · 30 por categoría · tres niveles. Se priorizan preguntas no respondidas en este navegador y se cambia el orden de las respuestas. Solo se repiten cuando se agotan las de una categoría en la partida.</p>
        <div className="category-strip">
          {CATEGORY_SHORT_NAMES.map((name, index) => (
            <span key={name}><i style={{ backgroundColor: CATEGORY_COLORS[index] }} />{name}</span>
          ))}
        </div>
      </section>

      <section className="setup-card" aria-labelledby="setup-title">
        <div>
          <p className="eyebrow">2. CONFIGURA LA PARTIDA</p>
          <h2 id="setup-title">¿Quién juega?</h2>
          <p>Elige de uno a cuatro participantes. Para medir el aprendizaje individual, juega en solitario; con varios participantes la evaluación es conjunta.</p>
        </div>

        <fieldset className="player-count">
          <legend>Número de participantes</legend>
          <div>
            {[1, 2, 3, 4].map((number) => (
              <button
                type="button"
                key={number}
                onClick={() => setCount(number)}
                className={count === number ? 'selected' : ''}
                aria-pressed={count === number}
              >
                {number}
              </button>
            ))}
          </div>
        </fieldset>

        <div className="player-inputs">
          {Array.from({ length: count }, (_, index) => (
            <label key={index}>
              <span className="player-color" style={{ backgroundColor: PLAYER_COLORS[index] }} />
              <span className="sr-only">Nombre del participante {index + 1}</span>
              <input
                value={names[index]}
                maxLength={18}
                onChange={(event) => {
                  const next = [...names];
                  next[index] = event.target.value;
                  setNames(next);
                }}
              />
            </label>
          ))}
        </div>

        <div className="quest-assessment-step">
          <p className="eyebrow">3. EVALUACIÓN INICIAL</p>
          <h3>Antes de jugar: 4 preguntas</h3>
          <p>Responde, consulta la corrección y comienza la partida. Al terminar tendrás una evaluación final.</p>
          <button type="button" className="primary-button start-button" disabled={!hasSelectedMode} onClick={start}>Realizar evaluación inicial →</button>
          {!hasSelectedMode && <p className="quest-mode-hint">Selecciona primero una modalidad en el paso 1.</p>}
          {startError && <p role="alert">La evaluación no está disponible. Recarga la página e inténtalo de nuevo.</p>}
        </div>
        <p className="privacy-note">La partida se guarda únicamente en este navegador para poder continuar tras recargar.</p>
      </section>
    </main>
  );
}
