// import {
//   hintHeaderStyle,
//   hintContentGrey,
//   arrowStyle,
// } from "./styles";

import { getStyles } from "./styles";


type Props = {
  index: number;
  text: string;
  open: boolean;
  toggle: (key: number) => void;
};

export default function HintItem({ index, text, open, toggle }: Props) {
  const styles = getStyles();
  return (
    <div>
      <div style={styles.hintHeaderStyle} onClick={() => toggle(index)}>
        <span style={styles.arrowStyle}>{open ? "▼" : "▶"}</span>
        <span>Hint {index + 1}</span>
      </div>
      {open && <div style={styles.hintContentGrey}>{text}</div>}
    </div>
  );
}

