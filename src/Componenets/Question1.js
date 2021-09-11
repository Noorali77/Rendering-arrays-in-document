import React from 'react'

let question1 = 'Q1) Render these into component:'
let questionA = 'const name = "Hello World";'
let answerA = 'Hello World'

let questionB = 'const obj = {name: "Hello World Object"}'
let answerB = {name : 'Hello World Object'}

 let questionC = 'const data = ["We", "are", "United"] //Show these in seperate tags'
 const data = ["We", "are", "United"]

 let questionD = 'const list = [{name: "Hello World 1"}, {name: "Hello World 2"}, {name: "Hello World 3"}] //Show these in seperate tags'
 const list = [{name: "Hello World 1"}, {name: "Hello World 2"}, {name: "Hello World 3"}]

let questionE = " const complex = [{company: 'XYZ', jobs: ['Javascript,' 'React']}, {company: 'ABC', jobs: ['AngularJs' 'Ionic']}]"
const complex = [{company: 'XYZ', jobs: ['Javascript,' ,'React']}, {company: 'ABC', jobs: ['AngularJs','Ionic']}]

export default function Question1() {
 
    return (
        <div>
            <h4>{question1}</h4> <br />
            <h5>{questionA}</h5>
            <h5>A.) {answerA}</h5> <br />

            <h5>{questionB}</h5>
            <h5>A.) {answerB.name}</h5> <br />

            <h5>{questionC}</h5>
        
            <ul>
            
               {data.map((value,index)=> <li key={index}>  {value}   </li>)}  
            </ul > <br />  

            <h5>{questionD}</h5>
               
               <ul>
                   {list.map((value,index)=> <li key={index}> {value.name}  </li>)}
               </ul> <br />

           <h5>{questionE}</h5>
           <ul>
               {complex.map((value,index)=><li key={index}> Company: {value.company} and Jobs: {value.jobs} </li>)}
           </ul>

        </div>
    )
}
