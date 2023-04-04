import type { Component } from 'solid-js';
import { ScoreCard } from './components/ScoreCard';



const App: Component = () => {
  return (
    <main class="bg-neutral-100 grid place-content-center h-screen">
      <ScoreCard />
    </main>
  );
};




export default App;
