import { useState } from 'react'
import {spring} from "motion/react";
import './styles/main.scss';
import './App.scss'

function App(): React.ReactElement {
  const [moveBox, setMoveBox] = useState(false);

  return (
    <div className="page-container">
       <div className="container">
          <button className="button mb-5" data-state={moveBox} onMouseEnter={() => setMoveBox(!moveBox)}>Sign In</button>
        </div>
       {/* Perhaps we'll need Tailwind in conjuction to avoid style tags */}
      <style>
        {`
          .container .button {
              transition: transform ${spring(0.5,0.8)};
              transform: translateX(-100%);
          }

          .container .button[data-state="true"] {
              transform: translateX(${Math.random()*100}%) translateY(${Math.random()*100}%) rotate(${Math.random()*360}deg);
          }
        `
        }
      </style>
    </div>
   
  )
}

export default App
