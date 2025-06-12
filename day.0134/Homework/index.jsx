import React, { useState } from 'react';

function MessageComponent() {
  // useState არის React Hook (კაუჭი), რომელიც საშუალებას გვაძლევს შევინახოთ და ვცვალოთ მონაცემი კომპონენტში
  const [message, setMessage] = useState("This Is The Message On My Web Page");

  // ფუნქცია, რომელიც შეცვლის ტექსტს
  const changeMessage = () => {
    setMessage("This Is The Second Message On My Web Page");
  };

  return (
    <div>
      <h1>{message}</h1> {/* აქ ვაჩვენებთ ტექსტს */}
      <button onClick={changeMessage}>Change Message</button> {/* ღილაკზე დაჭერისას იძახებს changeMessage */}
    </div>
  );
}

export default MessageComponent;
