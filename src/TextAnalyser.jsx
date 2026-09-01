import { useEffect,useState } from "react";
function TextAnalyzer(){
    const[text,setText]=useState("");
    const words=text.trim()===""?0:text.trim().split(/\s+/).length;

    useEffect(()=>{
        document.title=`words:${words}`;

    },[words]);

    return(
        <div>
            <h2>text analyzer</h2>
            <textarea value={text} on change={(e)=>setText(e.target.value)}placeholder="enter text"/>
            <p>text:{text}</p>
            <p>characters:{text.length}</p>
            <p>words:{words}</p>
        </div>
    );
}

export default TextAnalyzer;