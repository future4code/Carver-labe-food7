import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { goToHome } from "../routes/Coordinator";

export const useUnprotectedPage = () => {
    const history = useHistory()

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
          goToHome(history);
        }
    }, [history]);
} 