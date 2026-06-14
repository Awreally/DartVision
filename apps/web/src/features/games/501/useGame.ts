import { useState } from 'react'

export function useGame() {
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

  return {
    scores,
    throws,
    currentPlayer,
    multiplier,
    winner,
    handleThrow,
    resetGame,
    setMultiplier,
  }
}
