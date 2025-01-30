import { Grow, Alert as MaterialAlert } from "@mui/material";

import styled from "./styled.module.scss";

interface AlertProps {
  children: string;
  onClose: () => void;
  severity: "error" | "warning" | "info" | "success";
}

const Alert = ({ children, onClose, severity = "error" }: AlertProps) => {
  const style = `${styled.alert} ${styled[severity]}`;

  return (
    <Grow in={true}>
      <MaterialAlert severity={severity} className={style} onClose={onClose}>
        {children}
      </MaterialAlert>
    </Grow>
  );
};
export default Alert;
