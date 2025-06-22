import { useRef, useState } from "react"

function floatToFixedpoint(input: string): string {
  let float = parseFloat(input)
  if (isNaN(float)) return "Error!"

  let abs_float = Math.abs(float)
  let int = Math.floor(abs_float)
  if (int > 2 << 51) {
    int = 2 << 51
  }
  let sign = float < 0 ? "-" : ""
  let frac = Math.floor((abs_float % 1) * 4096.0)
  let frac_str = ""
  if (frac != 0) {
    frac_str = "." + frac
  }

  return `${sign}${int}${frac_str}fx`
}

export default function FxConverter() {
  const outputRef = useRef(null)

  return (
    <div>
      <input
        type="text"
        defaultValue="2.718"
        onChange={(event) => {
          outputRef.current.innerText = floatToFixedpoint(event.target.value)
        }}
      />
      <br />
      <code ref={outputRef}>2.2940fx</code>
    </div>
  )
}
