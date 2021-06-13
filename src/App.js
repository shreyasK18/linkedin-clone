import React from 'react';
import Header from './Header';
import { Counter } from './features/counter/Counter';
import Feed from './Feed';
import Sidebar from './Sidebar';
import './App.css';
function App() {
  return (
    <div className="app">
     {/* Header */}
     <Header/>
     {/* App Body */}
     <div className="app__body">
         {/* sidebar */}
       <Sidebar/>
      
        {/* Feed */}
        <Feed/>
        {/* Widget */}
     </div>
       
    </div>
  );
}

export default App;
