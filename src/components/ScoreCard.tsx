import { Component } from "solid-js";
import { Summary } from "./Summary";

export const ScoreCard:Component = () => {


    return ( 
    <main class='flex  max-w-[350px] min-w-[350px] h-screen 
    sm:max-w-2xl flex-col sm:flex-row sm:justify-center sm:items-center sm:h-full shadow-xl rounded-xl'>
        <header class="from-light-state-blue bg-gradient-to-b  to-light-loyal-blue  
    h-1/2 sm:h-full sm:w-60 rounded-b-3xl flex justify-center gap-2 flex-col items-center sm:rounded-t-3xl">
        <h3 class='text-neutral-300 font-semibold text-[17px]'>Your Result</h3>
        <div class='
        text-center py-7 px-9 bg-gradient-to-b  from-light-loyal-blue
        rounded-full'>
          <h1 class="text-neutral-200 text-5xl font-semibold">76</h1>
          <p class="text-neutral-400 text-sm" > of 100</p>
        </div>
        <div class='px-6 text-center pb-4'>
          <h2 class='text-neutral-200 font-bold text-2xl'>Great</h2>
          <h1 class='text-neutral-300  '>You scored higher yhan 65% of the people who have taken these tests.</h1>
        </div>
    </header>

    <Summary  />
   
  </main>);
}