import { Component, For, JSXElement } from "solid-js";
import IconReaction from "../assets/icon-reaction";
import IconMemory from "../assets/icon-memory";
import IconVerbal from "../assets/icon-verbal";
import IconVisual from "../assets/icon-visual";

  const LIST_OF_CATEGORIES = [
    {
      icon:<IconReaction/>,
      nombre:'Reaction',
      score:80,
      styles:{
        textColor:'text-red-600',
        bgColor:'bg-red-50'
      }
  
    },
    {
      icon:<IconMemory/>,
      nombre:'Memory',
      score:92,
      styles:{
        textColor:'text-yellow-600',
        bgColor:'bg-yellow-50'
      }
    },
    {
      icon:<IconVerbal/>,
      nombre:'Verbal',
      score:61,
      styles:{
        textColor:'text-green-600',
        bgColor:'bg-green-50'
      }
    },
    {
      icon:<IconVisual/>,
      nombre:'Visual',
      score:72,
      styles:{
        textColor:'text-blue-600',
        bgColor:'bg-blue-50'
      }
    }
  ]

export const Summary:Component = (props) => {

    return (
      <main class='flex flex-col mx-5 sm:w-60'>
      <h1 class="font-semibold py-3"> Summary</h1>
      
      <For each={LIST_OF_CATEGORIES}>
      {
        (category => {
          return (
            <div class={`flex gap-2 justify-between p-2  rounded-lg my-2 ${category.styles.bgColor}`}>
              {category.icon}
              <p class={`flex-grow  font-semibold ${category.styles.textColor} `}> { category.nombre}</p>
              <p class='text-gray-400'>  <span class='font-bold text-black'> {category.score} </span>/ 100</p>
            </div>
          );
        })
      }
      </For>
      <button class="bg-blue-950 active:bg-light-loyal-blue text-neutral-100 my-5 p-2 rounded-3xl"> continue </button>
    </main>
    )
  
  }