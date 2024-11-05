import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Board from './components/Board/Board';
import { fetchKanbanData } from './services/api';
import './App.css';

function App() {  // Remove the {} here
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [grouping, setGrouping] = useState('status');
  const [sorting, setSorting] = useState('priority');

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchKanbanData();
        setTickets(data.tickets);
        setUsers(data.users);
      } catch (error) {
        console.error("Error fetching data:", error);
        // You can also set an error state here if needed
      }
    };
    loadData();
  }, []);

  return (  // Add a return statement
    <div className="App">
      <Header 
        grouping={grouping}
        setGrouping={setGrouping}
        sorting={sorting}
        setSorting={setSorting}
      />
      <Board 
        tickets={tickets}
        users={users}
        grouping={grouping}
        sorting={sorting}
      />
    </div>
  );
}

export default App;