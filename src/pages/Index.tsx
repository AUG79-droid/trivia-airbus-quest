import { useGameState } from '@/hooks/useGameState';
import SetupScreen from '@/components/game/SetupScreen';
import GameScreen from '@/components/game/GameScreen';
import VictoryScreen from '@/components/game/VictoryScreen';

export default function Index() {
  const game = useGameState();

  if (game.state.phase === 'setup') {
    return <SetupScreen onStart={game.startGame} />;
  }

  if (game.state.phase === 'victory') {
    const winner = game.state.players[game.state.currentPlayerIndex];
    return <VictoryScreen winner={winner} onPlayAgain={game.resetGame} />;
  }

  return (
    <GameScreen
      state={game.state}
      rollDie={game.rollDie}
      selectDestination={game.selectDestination}
      selectCategory={game.selectCategory}
      answerQuestion={game.answerQuestion}
      dismissFeedback={game.dismissFeedback}
    />
  );
}
