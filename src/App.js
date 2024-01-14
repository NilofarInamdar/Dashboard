import React from 'react'
import Dashboard from './components/dashboard'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <Dashboard />
      </div>
    </DndProvider>
  )
}

export default App
