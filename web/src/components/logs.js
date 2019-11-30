import React from 'react'

const Logs = ({ logs }) => {
    return (
        <div>
            {/*TODO Format output of logs*/}
            {logs.map((log) => (
                <div>
                    <pre>{JSON.stringify(log)}</pre>
                </div>
            ))}
        </div>
    )
};

export default Logs