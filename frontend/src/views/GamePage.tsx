import * as React from 'react'

export const GamePage = () => {
  const [roomId, setRoomId] = React.useState('123');

  return (
    <div>
      <h1>Entered the room {roomId}</h1>
    </div>
  );
};