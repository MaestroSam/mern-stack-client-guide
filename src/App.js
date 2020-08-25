import React from 'react';
import './App.css';

function App() {
  return (
    <pre className="App">{`
        This was spun up using create-react-app.

        I've attempted to strip it down to the barest minimum needed for this mini-project.

        Navigate to src/index.js. Look at where it renders "App.js" as <App /> inside the element it finds by the id, "root".

        Navigate to public/index.html. Find the element with id of root.

        In the .env file, the dev port is specified.

        Can you understand how this all links together?
        `}
    </pre>
  );
}

export default App;
