import { useGame } from './useGame'
import ScoreBoard from './components/ScoreBoard'
import Multiplier from './components/Multiplier'
import NumberPad from './components/NumberPad'

export default function Game501() {
  const {
    scores,
    throws,
    currentPlayer,
    multiplier,
    winner,
    handleThrow,
    resetGame,
    setMultiplier,
  } = useGame()

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">DartVision</h1>
      <ScoreBoard scores={scores} throws={throws} currentPlayer={currentPlayer} winner={winner} />
      <Multiplier multiplier={multiplier} setMultiplier={setMultiplier} />
      <button onClick={() => handleThrow(50, true)}>Bull</button>
      <button onClick={() => handleThrow(25, true)}>Outer Bull</button>
      <div className="flex flex-wrap gap-2 max-w-sm">
        <NumberPad handleThrow={handleThrow} />
        <button onClick={resetGame}>New Game</button>
      </div>
    </div>
  )
}
