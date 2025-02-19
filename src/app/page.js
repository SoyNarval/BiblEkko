"use client"
import Champ from "../../components/Champ";
import Map from "../../components/Map";
import React, { useState } from 'react';
import { ChampProvider } from "../../context/ChampContext";
import BestComp from "../../components/BestComp";


export default function Home() {

  
  const [rol, setRol] = useState("");
  const [dificulty, setDificulty] = useState("Fácil");
  const [showBest, setShowBest] = useState(false);

  return (

    <ChampProvider>
      <div className="h-screen w-screen flex flex-col items-center justify-center gap-4">
        <h1 className="text-4xl font-bold">BiblEkko</h1>
        
        <div>
          <Champ
            rol={rol}
            setRol={setRol}
            setShowBest={setShowBest}
          />
        </div>
        <div className="max-md:hidden w-1/2 h-1/2">
          <Map
            rol={rol}
            setRol={setRol}
          />
        </div>

        <div className={`${showBest ? "" : "hidden"} absolute h-screen w-screen flex flex-col items-center justify-center gap-4 bg-black bg-opacity-95`}>
          <BestComp
            setShowBest={setShowBest}
            dificulty={dificulty}
          />
        </div>
        
      </div>
    </ChampProvider>

  );
}
