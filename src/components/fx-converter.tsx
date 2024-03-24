import { useRef, useState } from "react";

function float_to_fixedpoint(input: string): string {
  let float = parseFloat(input);
  let abs_float = Math.abs(float);
  let int = Math.floor(abs_float);
  if (int > 2 << 51) {
    int = 2 << 51;
  }
  let sign = float < 0 ? "-" : "";
  let frac = Math.floor((abs_float % 1) * 4096.0);
  let frac_str = "";
  if (frac != 0) {
    frac_str = "." + frac;
  }

  return `${sign}${int}${frac_str}fx`;
}

export default function FxConverter() {
  const [num, setNum] = useState<string>("2.718");

  const outputRef = useRef(null);

  return (
    <div>
      <input
        type="text"
        defaultValue="2.718"
        onInput={(event) => setNum(event.target.value)}
      />
      <input
        type="button"
        defaultValue="to FixedPoint →"
        onClick={() => {
          outputRef.current.value = float_to_fixedpoint(num);
        }}
      />
      <input type="text" readonly ref={outputRef} />
    </div>
  );
}
