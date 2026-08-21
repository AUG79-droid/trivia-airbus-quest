import { useState } from 'react';
import { CATEGORY_COLORS, CATEGORY_SHORT_NAMES, PLAYER_COLORS } from '../../game/board';

interface SetupScreenProps {
  onStart: (names: string[]) => void;
}

export default function SetupScreen({ onStart }: SetupScreenProps) {
  const [count, setCount] = useState(1);
  const [names, setNames] = useState(['Participante 1', 'Participante 2', 'Participante 3', 'Participante 4']);

  const start = () => {
    const selectedNames = names
      .slice(0, count)
      .map((name, index) => name.trim() || `Participante ${index + 1}`);
    onStart(selectedNames);
  };

  return (
    <main className="setup-page">
      <section className="setup-hero">
        <div className="brand-mark" aria-hidden="true">
          <span /><span /><span /><span /><span /><span />
        </div>
        <p className="eyebrow">APRENDER · DECIDIR · AVANZAR</p>
        <h1><span>TAS</span> Sustainability Quest</h1>
        <p className="setup-lead">
          Recorre el tablero, aplica criterios de sostenibilidad y reúne las seis insignias de misión.
        </p>

        <div className="mission-flow" aria-label="Cómo se juega">
          <div><strong>1</strong><span>Tira el dado</span></div>
          <div><strong>2</strong><span>Elige tu ruta</span></div>
          <div><strong>3</strong><span>Responde</span></div>
          <div><strong>4</strong><span>Gana insignias</span></div>
          <div><strong>5</strong><span>Supera la final</span></div>
        </div>

        <div className="category-strip">
          {CATEGORY_SHORT_NAMES.map((name, index) => (
            <span key={name}><i style={{ backgroundColor: CATEGORY_COLORS[index] }} />{name}</span>
          ))}
        </div>
      </section>

      <section className="setup-card" aria-labelledby="setup-title">
        <div>
          <p className="eyebrow">CONFIGURA LA PARTIDA</p>
          <h2 id="setup-title">¿Quién juega?</h2>
          <p>El modo individual está pensado para formación autónoma. También podéis competir hasta cuatro personas.</p>
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

        <button type="button" className="primary-button start-button" onClick={start}>Comenzar misión</button>
        <p className="privacy-note">La partida se guarda únicamente en este navegador para poder continuar tras recargar.</p>
      </section>
    </main>
  );
}
