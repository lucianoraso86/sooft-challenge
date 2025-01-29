import { FC, useEffect } from "react";
import { Grow, Alert as MaterialAlert } from "@mui/material";
import styled from "./styled.module.scss";

interface AlertProps {
  children: string;
  onClose: () => void;
  severity: "error" | "warning" | "info" | "success";
}

const Alert: FC<AlertProps> = ({ children, onClose, severity = "error" }) => {
  const style = `${styled.alert} ${styled[severity]}`;

  useEffect(() => {
    if (children) setTimeout(() => onClose(), 5000);
  }, [children, onClose]);

  return (
    <Grow in={true}>
      <MaterialAlert severity={severity} className={style} onClose={onClose}>
        {children}
      </MaterialAlert>
    </Grow>
  );
};
export default Alert;
