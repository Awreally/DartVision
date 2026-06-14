interface NumberPadProps {
  handleThrow: (num: number, isBull?: boolean) => void
}

export default function NumberPad({ handleThrow}: NumberPadProps) {
    return (
        <div>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <button key={num} onClick={() => handleThrow(num)}>
            {num}
          </button>
        ))}
        </div>
    )
}