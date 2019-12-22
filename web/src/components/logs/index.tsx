import React from 'react'
import styled from 'styled-components';

const Log = styled.li`
  list-style: none;
`;

const Content = styled.ul`
  padding: 30px;
  display: block;
`;

const Logs: React.FunctionComponent<{logs: Array<any>}> = (props) => {
  const logs = props.logs;
  return (
    <Content>
      {logs.map((log: any) => (
          <Log key={log._id}>
            <pre>{JSON.stringify(log, null, 2)}</pre>
            <hr/>
          </Log>
      ))}
    </Content>
  )
};

export default Logs;