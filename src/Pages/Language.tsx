import React, { useEffect, useState } from 'react'
import { Word } from '../Components/Data'
import { NavLink } from 'react-router-dom'
import { WordID } from '../Components/Type'

interface WordProps {
  word: WordID
}

export default function Language(props: WordProps) {
  const [num, setNum] = useState(0)
  const [numYes, setNumYes] = useState(0)
  const [numNo, setNumNo] = useState(0)
  const [seconds, setSeconds] = useState<number>(30);
  const [isActive, setIsActive] = useState(false);


  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds(prev => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const handleReset = () => {
    setSeconds(30);
    setIsActive(false);
    setNum(getRandomNumber());
    setNumNo(0);
    setNumYes(0);
  };


  const getRandomNumber = () => {
    return Math.floor(Math.random() * Word.length);
  };

  let prev = -1;

  const random = () => {
    let num = getRandomNumber();
    while (num === prev) {
      num = getRandomNumber();
    }
    prev = num; 
    return num; 
};

  const course = () => {
    setNum(random());
    setNumYes(prev => prev + 1);
  };

  const dontcourse = () => {
    setNum(random());
    setNumNo(prev => prev + 1);
  };

  return (

    <>

    <div className='lang-wrap-block'>

            <div className='lang-question-block'>

                <div className='bar-block'>

                  <div className='lang-timer-block'>
                    <h2>{seconds} seconds</h2>
                    {seconds === 0 && <p>Time's up!</p>}
                  </div>
                  
                            <p className='russian-word'>{Word[num].rus}</p>
                            <p className='english-word'>{Word[num].eng}</p>
                           <p className='armenian-word'>{Word[num].arm}</p>

                        {seconds < 30 && seconds > 0 &&
                           <div className='bar-block-but'>

                            <button onClick={dontcourse} className='bar-block-but-no'>Нет</button>
                            <button onClick={course} className='bar-block-but-yes'>Да</button>

                           </div>
                                }

                </div>
                    
            </div>

    </div>



      <div className='container-num'>
        <div className='num-block'>

            <div className='dontcors-block'>
                    <p className='answ-num'>{numNo}</p>
            </div>

            <div className='nav-button-num'>
                {seconds === 30 && <button onClick={toggleTimer} className='button-start'>Старт</button>}

                {seconds === 0 && (<button className='button-back nul-but' onClick={handleReset}>Заново</button>)}

                {seconds === 30 && <NavLink to="/"><button className='button-back'>Назад</button></NavLink>}
                


            </div>
            
            <div className='cours-block'>
                    <p className='answ-num'>{numYes}</p>
            </div>

        </div>
       </div>

    </>
  )
}