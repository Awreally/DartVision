interface ScoreBoardProps {
  scores: [number, number]
  throws: number[]
  currentPlayer: 0 | 1
  winner: 0 | 1 | null
}

export default function ScoreBoard({ scores, throws, currentPlayer, winner }: ScoreBoardProps) {
  return (
    <div>
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
    </div>
  )
}
