import React, { useEffect, useState } from 'react'

export const Message = () => {
    
    const [coordinates, setcoords] = useState({x:0,y:0})

    const {x, y} = coordinates
    
    useEffect(() => {
        const mouseMove = (e) =>{
            const coordinates = { x: e.x, y:e.y }
            setcoords(coordinates)
        }
        
        window.addEventListener('mousemove', mouseMove)
        
        return () => {
            window.removeEventListener('mousemove', mouseMove)
        }
    }, [])

    return (
        <>
          <h3>Component message</h3>
          <p>
              x : {x} , y : {y}
          </p>
        </>
    )
}
