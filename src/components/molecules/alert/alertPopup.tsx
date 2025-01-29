import { Alert, Typography } from "@mui/material";
import useAlert from "@/hooks/alertProvider/useAlert";
import styled from "./styled.module.scss";

const AlertPopup = () => {
  const { text, type } = useAlert();
  const style = `${styled.alert} ${styled[type]}`;

  if (text && type) {
    return (
      <Alert severity={type as "error" | "warning" | "info" | "success"} className={style}>
        <Typography dangerouslySetInnerHTML={{ __html: text }} />
      </Alert>
    );
  } else {
    return <></>;
  }
};

export default AlertPopup;
