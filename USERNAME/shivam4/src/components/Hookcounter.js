import React, {useState,useEffect} from 'react'

function Hookcounter() {
                  const [count,setCount] = useState(0)
                   const [name, setName] = useState('')
                   const [x, setX] = useState(0)
                   const[y,setY] = useState(0)


                    const logMousePosition = e => {
                        console.log('mouse event');
                        setX(e.clientX)
                        setY(e.clientY)
                    }

                  useEffect (()  =>  {
                      console.log('useEffect called');
                      window.addEventListener('mousemove',logMousePosition)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
                      
                    // document.title = `you clicked ${count} times` 0
                  },
                  [name])

                   


    return (
        <>
            <input type = "text" value= {name} onChange={e => setName(e.target.value)}  />
            <button onClick={() => setCount(count + 1)}>click {count}                </button>
            {x}  {y}                                                                                                         
        </>
    )
}
 
export default Hookcounter
