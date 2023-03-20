import React , {useState} from 'react'
// import PropTypes from 'prop-types'

export default function Textform(props) {

    const handleupclick = () =>{
        let newText = text.toUpperCase() ;
        setText(newText) ;
    }

    const handleloclick = () =>{
        let newText = text.toLowerCase() ;
        setText(newText) ;
    }


    const handleclearclick = () =>{
        let newText = "" ;
        setText(newText) ;
    }


    const handleonchange = (event) =>{
        setText(event.target.value) ;
    }

    const handlecopyclick = () => {
        let text = document.getElementById("myBox")
        navigator.clipboard.writeText(text.value) ;
    }


    const handleextraspaces = () => {
        let newText = text.split(/[ ]+/) ;
        setText(newText.join(" "))  ;
    }

   


    const [text ,setText] = useState("enter the text(this is a default text)")
    return (
        <>
            <div className='container' style={{color : props.mode === 'dark' ? 'white' : 'black'}}>
                <h1>{props.heading}</h1>

                <div className="mb-3" >
                    <textarea className="form-control"  onChange={handleonchange} style={{backgroundColor : props.mode === 'light'?'white':'gray' ,color : props.mode === 'dark' ? 'white' : 'black'}} value={text} id="myBox" rows="8"></textarea>
                </div>
                 
                 <button className="btn btn-primary mx-2" onClick={handleupclick}>Covert to Uppercase</button>
                 <button className="btn btn-primary mx-2" onClick={handleloclick}>Covert to Lowercase</button>
                 <button className="btn btn-primary mx-2" onClick={handleclearclick}>Clear Text</button>
                 <button className="btn btn-primary mx-2" onClick={handlecopyclick}>Copy Text</button>
                 <button className="btn btn-primary mx-2" onClick={handleextraspaces}>Remove Extra Spaces</button>



            </div>
            <div className="container my-3" style={{color : props.mode === 'dark' ? 'white' : 'black'}}>
                <h2>Your text Summary</h2>
                <p>{text.split(" ").length}  words and {text.length} characters</p>
                <p>{0.008*text.split(" ").length} minutes needed to read the text</p>
                <h2>Preview the text</h2>
                <p>{text.length>0 ? text : "Enter the text in above box to preview it"}</p>
            </div>

        </>
    )
}
