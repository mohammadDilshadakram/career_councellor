import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { useContext } from 'react'
import { Context } from '../../context/Context'


function Main() {

    const {onSent,recentPrompt,showResult,loading,resultData,setInput,input}=useContext(Context)


  return (
    <div className="main">
        <div className="nav">
            <p>Innov8rs</p>
            <img src={assets.img1} alt="" />
        </div>

        <div className="main-container">

{!showResult
?<>
   <div className="greet">
                <p><span>Career Counsellor</span></p>
                <p><i>"Empowering your journey, one step at a time. Let's turn your passion into a purpose."

</i></p>
            </div>
            {/* <div className="cards">
                <div className="card">
                    <p>Where you want to go today?</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>Summarize this concept</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>brainstoem iduhdwjd sbduib</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>Where you want to go today?</p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div> */}
</>
:<div className='result'>

    <div className="result-title">
        <img src={assets.img1} alt="" />
        <p>{recentPrompt}</p>
    </div>
<div className="result-data">
    <img src={assets.gemini_icon} alt="" />
    {loading
    ?<div className='loader'>
        <hr />
        <hr />
        <hr /> 

    </div>
    :<p dangerouslySetInnerHTML={{__html:resultData}}></p>

    }
    
</div>
</div>

}


         
            <div className="main-bottom">
                <div className="div search-box">
                    <input onChange={(e)=>setInput(e.target.value)} value={input} type="text"placeholder='Enter a prompt' />
                    <div className='search'>
                              
                       {input?<img onClick={()=>onSent()} src={assets.send_icon} alt="" />:null}               
                    </div>
                </div>

                <p className="bottom-info">
                   
                </p>
            </div>



            
        </div>
    </div>
  )
}

export default Main