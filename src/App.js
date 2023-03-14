import { useState } from 'react'
import { Typography, Button } from '@mui/material'
import useEventListener from '@use-it/event-listener'

const ENTER_KEY = ['13', 'Enter'];

function App() {
  const [textTable, setTextTable] = useState([
    "1, It is a wonderful day.",
    "2, It is a disastrous day.",
    "3, It is an okay day."
  ]);
  const [fontTable, setFontTable] = useState([
    "Roboto",
    "Helvetica",
    "Segoe UI"
  ]);
  
  const [tableID, setTableID] = useState(0)
  const [ fontID, setFontID ] = useState(0)
  const [isVisible, setIsVisible] = useState(true);
  const [isIntro, setIsIntro] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  function handler({ key }) {
    if (ENTER_KEY.includes(String(key))) {
      if (isIntro === true) {
          setIsIntro(false);
          const timer = setTimeout(() => {
            setIsVisible(false);
            console.log(tableID);
            console.log(fontID);
            
          }, 5000);
      
          return () => clearTimeout(timer);
      }
      else {
            // Update state with the input value
    setTableID(tableID + 1);
    setFontID(fontID + 1);
    setIsVisible(true);
    const secondTimer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    if (tableID > 1) {
      setIsEnd(true);
    }

    return () => clearTimeout(secondTimer);
      }
    }
  }
  useEventListener('keydown', handler);


  return (
    <div className="App">
      {isIntro ? (
      <Typography>
          When you are ready to start the experiment, press Enter-key.
        </Typography>
        ) : (
          isVisible && <Typography sx={{fontFamily: fontTable[fontID]}}>
          {textTable[tableID]}
        </Typography>
          )}
          {isEnd && <Typography>Experiment ended. Thank you for participating.</Typography>}
    </div>
  );
      }

export default App;
