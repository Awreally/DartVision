import { useState } from 'react'

export default function App() {
  const [scores, setScores] = useState<[number, number]>([501, 501])
  const [throws, setThrows] = useState<number[]>([])
  const [currentPlayer, setCurrentPlayer] = useState<0 | 1>(0)
  const [multiplier, setMultiplier] = useState<number>(1)
  const [winner, setWinner] = useState<0 | 1 | null>(null)

  function handleThrow(num: number, isBull = false) {
    const throwScore = isBull ? num : num * multiplier
    const nextThrows = [...throws, throwScore]
    const nextScore = scores[currentPlayer] - throwScore

    if (nextScore < 0 || nextScore === 1) {
      setThrows([])
      setCurrentPlayer((prev) => (prev === 0 ? 1 : 0))
      return
    }

    if (nextScore === 0) {
      setScores((prev) => {
        const next: [number, number] = [prev[0], prev[1]]
        next[currentPlayer] = 0
        return next
      })
      setThrows([])
      setWinner(currentPlayer)

      return
    }

    setScores((prevScores) => {
      const nextScores: [number, number] = [prevScores[0], prevScores[1]]
      nextScores[currentPlayer] = prevScores[currentPlayer] - throwScore
      return nextScores
    })

    if (nextThrows.length === 3) {
      setCurrentPlayer((prev) => (prev === 0 ? 1 : 0))
      setThrows([])
    } else {
      setThrows(nextThrows)
    }

    setMultiplier(1)
  }

  function resetGame() {
    setScores([501, 501])
    setThrows([])
    setCurrentPlayer(0)
    setMultiplier(1)
    setWinner(null)
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">DartVision</h1>

      <h2>Player 1 - {scores[0]}</h2>
      <div className="flex gap-2">
        {[0, 1, 2].map((j) => (
          <span key={j} className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded">
            {currentPlayer === 0 && throws[j] !== undefined ? throws[j] : '-'}
          </span>
        ))}
      </div>

      <h2>Player 2 - {scores[1]}</h2>
      <div className="flex gap-2">
        {[0, 1, 2].map((j) => (
          <span key={j} className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded">
            {currentPlayer === 1 && throws[j] !== undefined ? throws[j] : '-'}
          </span>
        ))}
      </div>
      <div>{winner !== null && <h2>Player {winner + 1} wins!</h2>}</div>

      <button onClick={() => setMultiplier(1)}>Single</button>
      <button onClick={() => setMultiplier(2)}>Double</button>
      <button onClick={() => setMultiplier(3)}>Treble</button>
      <button onClick={() => handleThrow(50, true)}>Bull</button>
      <button onClick={() => handleThrow(25, true)}>Outer Bull</button>
      <div className="flex flex-wrap gap-2 max-w-sm">
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <button key={num} onClick={() => handleThrow(num)}>
            {num}
          </button>
        ))}
        <button onClick={resetGame}>New Game</button>
      </div>
    </div>
  )
}
