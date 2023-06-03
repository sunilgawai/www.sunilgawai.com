import { CSSProperties, useEffect, useState } from "react";


const Pointer = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        // following mouse.
        window.addEventListener("mousemove", (e) => {
            // console.log(e.clientX, e.clientY);
            const { clientX, clientY } = e;
            setPosition({
                ...position,
                x: clientX,
                y: clientY
            })
        })
    }, [])

    return (
        <div
            style={{
                width: '15px',
                height: '15px',
                borderRadius: '50px',
                borderColor: 'pink',
                position: 'absolute',
                top: position.y,
                left: position.x,
                animation: '5s infinite',
                transition: 'ease-in-out'
            }}
            className="pointer">
        </div>
    )
}

const PointerStyles: CSSProperties = {
    width: '15px',
    height: '15px',
    borderRadius: '50px',
    borderColor: 'pink',
    position: 'absolute',
    // top: position.y,
    // left: position.x,
    animation: '5s infinite',
    transition: 'ease-in-out'
}

export default Pointer;