import React, { useState } from 'react'
import './Counter.css'

function Counter() {
    const [count,setCount]=useState(0)
    const [history,setHistory]=useState([])
    const [redoList, setRedoList] = useState([]);
    const handleUndo=()=>{
        if(history.length){
            const historyCopy=[...history]
            const firstItem=historyCopy.shift()
            setHistory(historyCopy)
            setCount(firstItem.prev)

            const copyRedoList=[...redoList]
            copyRedoList.push(firstItem)
            setRedoList(copyRedoList)
        }
    }
    console.log(redoList)
    const maintainHistory=(key,prev,curr)=>{
        const obj={
            key,
            prev,
            curr
          }
      const copyHistory=[...history]
     
      copyHistory.unshift(obj)
      setHistory(copyHistory)
    }
    const calcFn=(val)=>{
  const value=parseInt(val)
  maintainHistory(val,count,count+value)
  setCount((prev)=>prev+value)
  
    }
    const handleRedo =()=>{
        if (redoList.length) {
            console.log('history -->',history)
        const redoCopy=[...redoList]
        const poppedValue=redoCopy.pop()
        setRedoList(redoCopy)
        const{key,prev,curr}=poppedValue
        setCount(curr)
        maintainHistory(key,prev,curr)
        }
    }
  return (
    <>
    <div className='outer-container'>
      Undoable Counter
      <div className='action-btns'>
      <button onClick={handleUndo}>Undo</button>
      <button onClick={handleRedo}>Redo</button>
      </div>
      <div className='action-container'>
        {[-100,-10,-1].map((btn)=>(
            <button onClick={()=>calcFn(btn)}>{btn}</button>
        ))}
        <div className='value-container'>{count}</div>
        {[1,10,100].map((btn)=>(
            <button onClick={()=>calcFn(btn)} >{btn}</button>
        ))}
      </div>
      <div className='history-container'>
        <h3>History</h3>
      {history.map((item)=>(
        <div className='history-box'>
        <div className='items-bar'>{item.key}</div>
        <div className='items-bar'>{`[${item.prev}---> ${item.curr}]`}</div>
        </div>
      ))}
      </div>
    </div>
   
    </>
  )
}

export default Counter
