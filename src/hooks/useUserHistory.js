import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const useUserHistory = () => {
    const [history, setHistory] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        
        setHistory((prevHistory) => [...prevHistory, location.pathname]);
    }, [location]);

    const clearHistory = () => {
        setHistory([]);
    };

    return { history, clearHistory };
};

export default useUserHistory;