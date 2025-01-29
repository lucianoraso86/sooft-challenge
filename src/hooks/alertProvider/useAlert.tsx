import { useContext } from "react";
import AlertContext from "./alertContext";

const useAlert = () => useContext(AlertContext);

export default useAlert;
