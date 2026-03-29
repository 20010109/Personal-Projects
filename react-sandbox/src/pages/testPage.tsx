import { useState } from 'react'
//import  backButton from '../components/backButton.tsx'


function testPage() {
    
    const [ count, setCount ] = useState(0);
    
    function handleClick(){
        setCount(count + 1)
    }

    return(
        <>
            <div>
                <h1>This is a Test page!</h1>
                <button onClick={handleClick}>
                    Clicked {count} times
                </button>
                
            </div>
        </>
    )
    
}

export default testPage