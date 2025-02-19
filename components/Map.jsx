"use client"
import React, { useRef, useEffect, useState } from 'react';

export default function Map({rol, setRol, s}) {
    const imgRef = useRef(null);

    const adjustCoordinates = (originalCoords, imgWidth, imgHeight) => {
        const [ ...coords ] = originalCoords.split(',').map(Number);
        const scaleX = imgWidth / imgRef.current.naturalWidth;
        const scaleY = imgHeight / imgRef.current.naturalHeight;

        return coords.map((coord, index) => {
            if (index % 2 === 0) {
                return coord * scaleX;
            } else {
                return coord * scaleY;
            }
        }).join(',');
    };


    useEffect(() => {
        const imgElement = imgRef.current;
        
        if (imgElement) {
            const imgWidth = imgElement.clientWidth;
            const imgHeight = imgElement.clientHeight;

            const areas = document.querySelectorAll('area');
            areas.forEach(area => {
                const originalCoords = area.getAttribute('coords');
                const adjustedCoords = adjustCoordinates(originalCoords, imgWidth, imgHeight);
                area.setAttribute('coords', adjustedCoords);
            });
        }
    }, []);

    return (
        
        <div className='w-full h-full'>
            <img 
                ref={imgRef}
                className="w-full h-auto object-contain"
                src="BG.webp"
                usemap="#image-map"
                alt="Mapa de imagen"
            />

            <map name="image-map">
                <area 
                    onClick={() => setRol('BOT')}
                    className='cursor-pointer hover:brightness-150'
                    target=""
                    alt="Bot"
                    title="Bot"
                    href=""
                    coords="1679,777,1467,870,889,866,887,809,1489,767,1578,748,1503,360,1580,344,1643,584"
                    shape="poly"
                />
                <area 
                    onClick={() => setRol('TOP')}
                    className='cursor-pointer hover:brightness-150'
                    target=""
                    alt="Top"
                    title="Top"
                    href=""
                    coords="690,613,618,631,668,439,696,303,763,225,1293,196,1307,259,775,289"
                    shape="poly"
                />
                <area 
                    onClick={() => setRol('MID')}
                    className='cursor-pointer hover:brightness-150'
                    target=""
                    alt="Mid"
                    title="Mid"
                    href=""
                    coords="840,676,1331,320,1380,350,911,704"
                    shape="poly"
                />
                <area 
                    onClick={() => setRol('JNG')}
                    className='cursor-pointer hover:brightness-150'
                    target=""
                    alt="JNGTop"
                    title="JNGTop"
                    href=""
                    coords="733,589,822,633,1295,299,818,305"
                    shape="poly"
                />
                <area 
                    onClick={() => setRol('JNG')}
                    className='cursor-pointer hover:brightness-150'
                    target=""
                    alt="JNGBot"
                    title="JNGBot"
                    href=""
                    coords="977,710,1368,394,1473,390,1493,682,1032,738"
                    shape="poly"
                />
            </map>
        </div>
    );
}
