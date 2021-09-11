import React from 'react'

let question2 = "Q2) Briefly explain with an example what's the difference between import Something from 'package' VS import {Something} from 'package'?"
let something = '{something}'
let something2 = '{something,something2}'
let something3 = '{something,something2,something3..}'





export default function Question2() {
    return (
        <div>
            <h4>{question2}</h4> <br />
           <h3 className="text-bold">A.) import Something from 'package' VS import {something} from 'package':</h3> <br />
           <h4>1.) import Something from 'package':</h4> 
           <h5>When we want to import a single function or Componenet Function from any folder then we used the "import Something from 'package' " method for importing a single function.</h5>
              <h4>For Example:</h4>
              <h5><ul>
                  <li>import Hello from './components.Hello'</li>
                  <li>import World from './components.World'</li>
                  <li>import Header from './components.Header'</li>
                  </ul></h5>

                  <h4>2.) import {something} from 'package':</h4>
           <h5>When we want to import more than one functions or Componenet Functions from any folder then we used the "import Something from 'package' " method for importing functions.</h5>

           <h5><ul>
                  <li>import {something2} from 'Componenet or Function Location'</li>
                  <li>import {something3} from 'Componenet or Function Location'</li>
                  </ul></h5>


        </div>

    )
}
