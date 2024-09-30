
import React from 'react';

const DebugWindow = ({ history, clearHistory }) => {
    return (
        <div style={{ border: '1px solid black', padding: '10px', margin: '10px', background: 'lightgrey' }}>
            <h3>История посещений</h3>
            <ul>
                {history.map((path, index) => (
                    <li key={index}>{path}</li>
                ))}
            </ul>
            <button onClick={clearHistory}>Очистить историю</button>
        </div>
    );
};

export default DebugWindow;
