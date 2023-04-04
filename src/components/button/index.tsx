import * as React from "react";
import styles from "./button.module.scss";
import { observer } from "mobx-react";

const ColorButton = ({
  children,
  onClick,
}: {
  children: string;
  onClick: () => void;
}) => {
  return (
    <button className={styles.root} onClick={onClick}>
      {children}
    </button>
  );
};

export default observer(ColorButton);
