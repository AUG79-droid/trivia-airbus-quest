import { Question } from '@/game/types';
import { CATEGORY_COLORS, CATEGORY_NAMES } from '@/game/board';

interface QuestionModalProps {
  question: Question;
  category: number;
  isFinal: boolean;
  onAnswer: (index: number) => void;
}

export default function QuestionModal({ question, category, isFinal, onAnswer }: QuestionModalProps) {
  const color = CATEGORY_COLORS[category];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="game-panel p-6 max-w-lg w-full animate-slide-in">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-4 h-4 rounded-full" style={{ backgroundColor: color }} />
          <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
            {CATEGORY_NAMES[category]}
            {isFinal && ' — Pregunta Final'}
          </span>
        </div>

        <h2 className="text-lg font-bold mb-6 leading-relaxed">{question.text}</h2>

        <div className="space-y-2.5">
          {question.options.map((option, i) => (
            <button
              key={i}
              onClick={() => onAnswer(i)}
              className="w-full text-left px-4 py-3 rounded-lg bg-secondary text-secondary-foreground hover:bg-muted transition-all duration-150 active:scale-[0.98] border border-transparent hover:border-border"
            >
              <span className="font-semibold text-muted-foreground mr-2">
                {String.fromCharCode(65 + i)}.
              </span>
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
