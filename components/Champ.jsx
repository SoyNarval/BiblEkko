"use client"
import React, { useState } from 'react';
import { useChamp } from '../context/ChampContext';

export default function Champ({rol, setRol, setShowBest}) {

    const img = "/icons/"

    const [search, setSearch] = useState('');
    const [champ, setChamp] = useState('');

    const [showChamps, setShowChamps] = useState(false);

    const champs = useChamp();


    const renderChamps = () => {
        return champs
            .filter((champName) => champName.toLowerCase().includes(search.toLowerCase())) 
            .map((champName, index) => { 
                return (
                    <div className='flex gap-2 items-center border-2 border-black rounded-md p-2' key={index} onClick={() => {setChamp(champName); setShowChamps(false)}}>
                        <img
                            className='h-24 w-24'
                            src={`${img}${champName}_0.jpg`}
                            alt={champName}
                            key={index}
                        />
                        <p>{champName}</p>
                    </div>
                    
                );
            });
    }

    return (
        
        <div className='flex flex-col gap-2 h-full w-full'>

            <div className='relative flex gap-2 items-center'>
                <input className='border-2 border-black rounded-md p-2' type="text" placeholder="Buscar" onChange={(e) => {setSearch(e.target.value); setShowChamps(true)}}/>

                <div className={`absolute top-12 flex flex-col max-h-72 overflow-y-scroll bg-background ${showChamps ? "" : "hidden"}`}>
                    {renderChamps()}
                </div>

                <button className={`border-2 border-black rounded-md p-2 ${!champ || !rol ? "text-slate-400" : "text-black"} `} disabled={!champ || !rol} onClick={() => setShowBest(true)}>Mostrar la Mejor Combinación</button>
            </div>
            
            <div className='flex gap-2'>
                <div>
                    <img className='h-24 w-24' src={`${img}Ekko_0.jpg`}></img>
                    <datalist id="roles-list">
                        <option value="TOP" />
                        <option value="JNG" />
                        <option value="MID" />
                        <option value="BOT" />
                        <option value="SUP" />
                    </datalist>
                    <input 
                        type='search' 
                        placeholder={"Elige tu rol"} 
                        list="roles-list"
                        onChange={(e) => setRol(e.target.value)}
                    />
                </div>
                <h2>VS.</h2>
                <div className={`${champ ? "" : "hidden"}`}>
                    <img className='h-24 w-24' src={`${img}${champ}_0.jpg`}></img>
                </div>
            </div>
        </div>
    )
}
