import React,{useEffect, useState} from "react";
import axios from "axios";


export default function Motivation (){
    // useState to store massage
    // use effect to fetch messages 
    // axios to import the data
    // yeah!

    const [message, setMessage] = useState('');
    
    useEffect(() => {
    
    
    let time;
     setTimeout(()=>{
        fetchMessage()
    },60000)
      return () => {
        
      }
    }, [message])
    

     function fetchMessage() {

        axios.get("https://api.kanye.rest")
        
        .then((response)=>{
            var data = response.data;

            console.log(data);
            setMessage(data)
        })
        .catch((err)=>{
            console.log('fetch error', err)
        })


        
    }
    // console.log("Message",message.title)

    return(<>
    <h2>{message.quote} - Kanye West</h2>
    </>)

    // fetchMessage();
}