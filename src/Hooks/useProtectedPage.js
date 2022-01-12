import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { goToLogin } from "../Routes/Coordinator";

export const useProtectedPage = () => {
    const history = useHistory()

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token === null) {
          goToLogin(history);
        }
    }, [history]); 
} 