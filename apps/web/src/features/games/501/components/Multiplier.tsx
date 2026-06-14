interface MultiplierProps {
  multiplier: number
  setMultiplier: (value: number) => void
}

export default function Multiplier({ multiplier, setMultiplier }: MultiplierProps) {
  return (
    <div>
      <button onClick={() => setMultiplier(1)}>Single</button>
      <button onClick={() => setMultiplier(2)}>Double</button>
      <button onClick={() => setMultiplier(3)}>Treble</button>
    </div>
  )
}
