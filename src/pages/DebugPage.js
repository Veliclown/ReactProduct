import React from 'react';
import DebugWindow from '../components/DebugWindow';
import useUserHistory from '../hooks/useUserHistory'; 

const DebugPage = () => {
    const { history, clearHistory } = useUserHistory(); 

    return (
        <div>
            <h2>Отладочное окно</h2>
            <DebugWindow history={history} clearHistory={clearHistory} />
        </div>
    );
};

export default DebugPage;
