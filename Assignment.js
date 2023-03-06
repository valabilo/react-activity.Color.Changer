import { useState } from "react";

  const  Assignment = () => {
    const [color, setColor] = useState ("")
    const click = color => {
        setColor(color)
    }
    return (
        <main className="content">
            
            <label className="content--label">
                TYPE A COLOR: 
            </label>
            <input 
                className="content--label"
                placeholder="Color (Hex, Decimal, RGB )"
                type="text"
                value={color}
                onChange={(e) =>setColor(e.target.value)}
            /> 
            <button onClick={(color) => {click("")}}>
                RESET
            </button>
            <div 
                className="content--text"
                style = {{background:color}}>
                MY BACKGROUND COLOR WILL BE CHANGED!
            </div>
            

        </main>
    )
}
export default Assignment;