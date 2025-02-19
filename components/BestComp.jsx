"use client"
import React from 'react'

export default function BestComp({ setShowBest, dificulty }) {

    const img = "/spells/"
    return (
        <div className='flex flex-col gap-4 h-screen w-screen items-center justify-between p-4'>
            <button className='bg-blue-500 text-white p-2 rounded-md' onClick={() => setShowBest(false)}>X</button>


            <div>
                <h1 className='text-2xl font-bold text-white'>Esta es la mejor combinación</h1>
                <h2 className='text-xl font-bold text-white'>Dificultad: {dificulty}</h2>
                
            </div>


            <div className='grid grid-cols-3 gap-4'>
                <div className='flex flex-col gap-2 items-center'>
                    <h2 className='text-xl font-bold text-white'>Spells</h2>
                    <div className='flex gap-2'>
                        <img src='/spells/Flash.webp' className='h-24 w-24 border border-white'></img>
                        <img src='/spells/Ignite.webp' className='h-24 w-24 border border-white'></img>
                    </div>
                </div>
                <div className='flex flex-col gap-2 items-center'>
                    <h2 className='text-xl font-bold text-white'>Items</h2>
                    <div className='grid grid-cols-3 gap-2'>
                        <img src='/item/1001.png' className='h-24 w-24 border border-white'></img>
                        <img src='/item/1018.png' className='h-24 w-24 border border-white'></img>
                        <img src='/item/1026.png' className='h-24 w-24 border border-white'></img>
                        <img src='/item/1031.png' className='h-24 w-24 border border-white'></img>
                        <img src='/item/1035.png' className='h-24 w-24 border border-white'></img>
                        <img src='/item/1006.png' className='h-24 w-24 border border-white'></img>
                    </div>
                </div>
                <div className='flex flex-col gap-2 items-center'>
                    <h3 className='text-xl font-bold text-white'>Runes</h3>
                    <div className='flex gap-2'>
                        <div className='relative flex flex-col gap-2 items-center'>
                            <img src='/runes/domination.png' className='h-24 w-24 border border-white' title=''></img>
                            <div className='flex flex-col gap-2'>
                                <img src='/runes/Domination/Electrocute/Electrocute.png' className='h-16 w-16 border border-white'></img>
                                <img src='/runes/Domination/Electrocute/Electrocute.png' className='h-16 w-16 border border-white'></img>
                                <img src='/runes/Domination/Electrocute/Electrocute.png' className='h-16 w-16 border border-white'></img>
                                <img src='/runes/Domination/Electrocute/Electrocute.png' className='h-16 w-16 border border-white'></img>
                            </div>
                        </div>
                        
                        <div className='relative flex flex-col gap-2 items-center'>
                            <img src='/runes/sorcery.png' className='h-24 w-24 border border-white' title=''></img>
                            <div className='flex flex-col gap-2'>
                                <img src='/runes/Sorcery/LastStand/LastStand.png' className='h-16 w-16 border border-white'></img>
                                <img src='/runes/Sorcery/LastStand/LastStand.png' className='h-16 w-16 border border-white'></img>
                                <img src='/runes/Sorcery/LastStand/LastStand.png' className='h-16 w-16 border border-white'></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
