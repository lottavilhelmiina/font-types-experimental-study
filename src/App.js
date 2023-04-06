import React from 'react';
import { useState, useEffect } from 'react'
import { Typography, Button, TextField } from '@mui/material'
import { Box } from '@mui/system';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import axios from 'axios'

function App(props) {
  const [remainingTime, setRemainingTime] = useState(0);

  const [textTable, setTextTable] = useState([
    {
      header: "The state of the world",
      pg1: "If your view of the world comes from watching the news and reading newspapers, you could be forgiven for lying awake at night worrying about the future. Apparently, rising violence and population rates mean humans are both killing each other in ever larger numbers and being born at rates the world's resources can't sustain. To make matters worse, all the wealth is concentrated on a handful of people in the world's richest countries. People in low-income countries live in poverty while the West gets richer. Depressing, isn't it?",
      description1: "Question 1: What does the word 'apparently' in the first paragraph tell us about the rise in violence we see in the news?",
      d1Choice1: "A: The rise is obviously true.",
      d1Choice2: "B: The rise seems true but evidence might show it isn't.",
      d1Choice3: "C: The rise seems false but evidence might show it's true."
    },
    {
      header: "A biography of Kilian Jornet",
      pg1: "When you picture mountain climbers scaling Mount Everest, what probably comes to mind are teams of climbers with Sherpa guides leading them to the summit, equipped with oxygen masks, supplies and tents. And in most cases you'd be right, as 97 per cent of climbers use oxygen to ascend to Everest's summit at 8,850 metres above sea level. The thin air at high altitudes makes most people breathless at 3,500 metres, and the vast majority of climbers use oxygen past 7,000 metres. A typical climbing group will have 8–15 people in it, with an almost equal number of guides, and they'll spend weeks to get to the top after reaching Base Camp.",
      pg2: "But ultra-distance and mountain runner Kilian Jornet Burgada ascended the mountain in May 2017 alone, without an oxygen mask or fixed ropes for climbing.",
      pg3: "Oh, and he did it in 26 hours.",
      pg4: "With food poisoning.",
      pg5: "And then, five days later, he did it again, this time in only 17 hours.",
      pg6: "Born in 1987, Kilian has been training for Everest his whole life. And that really does mean his whole life, as he grew up 2,000 metres above sea level in the Pyrenees in the ski resort of Lles de Cerdanya in Catalonia, north-eastern Spain. While other children his age were learning to walk, Kilian was on skis. At one and a half years old he did a five-hour hike with his mother, entirely under his own steam. He left his peers even further behind when he climbed his first mountain and competed in his first cross-country ski race at age three. By age seven, he had scaled a 4,000er and, at ten, he did a 42-day crossing of the Pyrenees.",
      pg7: "He was 13 when he says he started to take it 'seriously' and trained with the Ski Mountaineering Technical Centre (CTEMC) in Catalonia, entering competitions and working with a coach. At 18, he took over his own ski-mountaineering and trail-running training, with a schedule that only allows a couple of weeks of rest a year. He does as many as 1,140 hours of endurance training a year, plus strength training and technical workouts as well as specific training in the week before a race. For his record-breaking ascent and descent of the Matterhorn, he prepared by climbing the mountain ten times until he knew every detail of it, even including where the sun would be shining at every part of the day.",
      pg8: "Sleeping only seven hours a night, Kilian Jornet seems almost superhuman. His resting heartbeat is extremely low at 33 beats per minute, compared with the average man's 60 per minute or an athlete's 40 per minute. He breathes more efficiently than average people too, taking in more oxygen per breath, and he has a much faster recovery time after exercise as his body quickly breaks down lactic acid – the acid in muscles that causes pain after exercise.",
      pg9: "All this is thanks to his childhood in the mountains and to genetics, but it is his mental strength that sets him apart. He often sets himself challenges to see how long he can endure difficult conditions in order to truly understand what his body and mind can cope with. For example, he almost gave himself kidney failure after only drinking 3.5 litres of water on a 100km run in temperatures of around 40°C.",
      pg10: "It would take a book to list all the races and awards he's won and the mountains he's climbed. And even here, Kilian’s achievements exceed the average person as, somehow, he finds time to record his career on his blog and has written three books, Run or Die, The Invisible Border and Summits of My Life.",
      
      description1: "Question 1: The majority of climbers on Everest...",
      d1Choice1: "A: need oxygen to finish their ascent.",
      d1Choice2: "B: are accompanied.",
      d1Choice3: "C: make slow progress to the top.",
      d1Choice4: "D: (all of the above)",

      description2: "Question 2: Kilian Jornet is unlike most Everest climbers because...",
      d2Choice1: "A: he is a professional climber.",
      d2Choice2: "B: he ascended faster.",
      d2Choice3: "C: he found the climb difficult.",
      d2Choice4: "D: (all of the above)",

      description3: "Question 3: In his training now, Kilian...",
      d3Choice1: "A: demands a lot of himself.",
      d3Choice2: "B: takes a lot of rest periods.",
      d3Choice3: "C: uses a coach.",
      d3Choice4: "D: (none of the above)",

      description4: "Question 4: Kilian partly owes his incredible fitness to...",
      d4Choice1: "A: the way he makes extra time for sleep.",
      d4Choice2: "B: his ability to recover from injury.",
      d4Choice3: "C: where he grew up.",
      d4Choice4: "D: (all of the above)",

      description5: "Question 5: His training includes...",
      d5Choice1: "A: psychological preparation.",
      d5Choice2: "B: making sure he drinks enough water.",
      d5Choice3: "C: trying to reduce his recovery time.",
      d5Choice4: "D: (none of the above)",

      description6: "Question 6: Kilian's books are...",
      d6Choice1: "A: a long list of races and awards.",
      d6Choice2: "B: discouraging to average people.",
      d6Choice3: "C: best for an expert audience.",
      d6Choice4: "D: another example of his impressive accomplishments.",
    },
    {
      header: "A threat to bananas",
      pg1: "In the 1950s, Central American commercial banana growers were facing the death of their most lucrative product, the Gros Michel banana, known as Big Mike. And now it’s happening again to Big Mike’s successor – the Cavendish.",
      pg2: "With its easily transported, thick-skinned and sweet-tasting fruit, the Gros Michel banana plant dominated the plantations of Central America. United Fruit, the main grower and exporter in South America at the time, mass-produced its bananas in the most efficient way possible: it cloned shoots from the stems of plants instead of growing plants from seeds, and cultivated them in densely packed fields.",
      pg3: "Unfortunately, these conditions are also perfect for the spread of the fungus Fusarium oxysporum f. sp. cubense, which attacks the plant’s roots and prevents it from transporting water to the stem and leaves. The TR-1 strain of the fungus was resistant to crop sprays and travelled around on boots or the tyres of trucks, slowly infecting plantations across the region. In an attempt to escape the fungus, farmers abandoned infected fields, flooded them and then replanted crops somewhere else, often cutting down rainforest to do so.",
      pg4: "Their efforts failed. So, instead, they searched for a variety of banana that the fungus didn’t affect. They found the Cavendish, as it was called, in the greenhouse of a British duke. It wasn’t as well suited to shipping as the Gros Michel, but its bananas tasted good enough to keep consumers happy. Most importantly, TR-1 didn’t seem to affect it. In a few years, United Fruit had saved itself from bankruptcy by filling its plantations with thousands of the new plants, copying the same monoculture growing conditions Gros Michel had thrived in.",
      pg5: "While the operation was a huge success for the Latin American industry, the Cavendish banana itself is far from safe. In 2014, South East Asia, another major banana producer, exported four million tons of Cavendish bananas. But, in 2015, its exports had dropped by 46 per cent thanks to a combination of another strain of the fungus, TR-4, and bad weather.",
      pg6: "Growing practices in South East Asia haven’t helped matters. Growers can’t always afford the expensive lab-based methods to clone plants from shoots without spreading the disease. Also, they often aren’t strict enough about cleaning farm equipment and quarantining infected fields. As a result, the fungus has spread to Australia, the Middle East and Mozambique – and Latin America, heavily dependent on its monoculture Cavendish crops, could easily be next.",
      pg7: "Racing against the inevitable, scientists are working on solving the problem by genetically modifying the Cavendish with genes from TR-4-resistant banana species. Researchers at the Queensland University of Technology have successfully grown two kinds of modified plant which have remained resistant for three years so far. But some experts think this is just a sophisticated version of the same temporary solution the original Cavendish provided. If the new bananas are planted in the same monocultures as the Cavendish and the Gros Michel before it, the risk is that another strain of the disease may rise up to threaten the modified plants too.",
      
      description1: "Question 1: Mass-produced bananas are...",
      d1Choice1: "A: grown from seeds because it's efficient.",
      d1Choice2: "B: cloned because it's a fast and cheap way to grow them.",
      d1Choice3: "C: sweeter than other bananas.",
      d1Choice4: "D: exported to Central America.",

      description2: "Question 2: The spread of the TR-1 strain was...",
      d2Choice1: "A: caused by lack of water.",
      d2Choice2: "B: speeded up by the flooding of banana fields.",
      d2Choice3: "C: slowed down by crop spraying.",
      d2Choice4: "D: helped by the movement of people and vehicles.",

      description3: "Question 3: Which sentence is NOT true?",
      d3Choice1: "A: The Cavendish replaced the Gros Michel.",
      d3Choice2: "B: The Cavendish bananas were easier to transport than the Gros Michel.",
      d3Choice3: "C: The Cavendish was resistant to the fungus.",
      d3Choice4: "D: The Cavendish stopped United Fruit from losing more money.",

      description4: "Question 4: South East Asia's Cavendish exports fell in 2015 because...",
      d4Choice1: "A: a new strain of the fungus has developed.",
      d4Choice2: "B: farmers can't afford new farming technology.",
      d4Choice3: "C: they had to quarantine their fruit.",
      d4Choice4: "D: they depended too much on other countries.",

      description5: "Question 5: Genetically modifying bananas may...",
      d5Choice1: "A: mean farmers can grow the Gros Michel again.",
      d5Choice2: "B: cause farmers to repeat the mistakes of the past.",
      d5Choice3: "C: encourage farmers to try new growing methods.",
      d5Choice4: "D: only be a short-term solution.",

      description6: "Question 6: How would you describe the writer's opinion about the future of the Cavendish?",
      d6Choice1: "A: Optimistic",
      d6Choice2: "B: Pessimistic",
      d6Choice3: "C: Cautious",
      d6Choice4: "D: Uninterested",
    },
    {
      header: "Managing a problem",
      pg1: "To: Karl Anderson",
      pg2: "Date: 17 October",
      pg3: "Subject: Support for Judy",
      pg4: "Dear Karl,",
      pg5: "I received a call from Judy a couple of days ago to discuss some of the issues that she was having and I thought I'd give you a heads-up on what was said, seeing that you are Judy's project team leader.",
      pg6: "Judy really enjoys working with you and the team and finds the project very interesting, but I think she's feeling a bit lost and struggling to see the big picture. It seems that she's been given a fair amount of autonomy to carry out the tasks that you've given her, and of course this level of delegation is not uncommon in your branch. But I believe in her Tokyo office, she is used to a bit more managerial direction and guidance and so is finding this international project quite daunting.",
      pg7: "When I asked her about meeting her deadlines, she mentioned that due to the recent changes to the project timeline, her goalposts have been moved, and she doesn't seem to really understand why this has happened. Bearing in mind that she's also facing simultaneous deadlines from her department in Tokyo, we can presume that she might be feeling a bit stretched.",
      pg8: "Looking ahead, I was wondering if we could make it easier for Judy by offering her more direction when setting her tasks, at least until she learns the ropes and gets used to working unsupervised. I think she'd also appreciate you giving her a clearer idea on how her role in the team fits into the overview of things. Do you think you could maybe outline the group and individual targets at your next team meeting and that way, everyone not only gets a reminder of the end goal, but each team member, including Judy, might have a more holistic view of the whole project?",
      pg9: "I was also thinking it might help to touch base with her every so often to make sure that she's up to date with any changes to the overall plan of attack. In the meantime, I'll write to her manager in the Tokyo office and see how aware they are of the deadlines you've given her, and if they could in some way review her responsibilities and co-ordinate her tasks so that she doesn't constantly feel pulled in both directions.",
      pg10: "Judy is an extremely conscientious worker and is eager to contribute positively to the team. Personally, I think she is someone with high potential and will be an asset to our international projects if properly mentored. I'm keen to know your thoughts on the matter and am open to any suggestions on how we could better support Judy so that she has a more smooth-sailing experience on the team.",
      pg11: "Best regards,",
      pg12: "Jo Backhouse",
      pg13: "Head of Department",
      pg14: "International Projects",

      description1: "Question 1: Why is Jo writing to Karl?",
      d1Choice1: "A: To suggest that his management style is not suitable for the current members of his team",
      d1Choice2: "B: To let him know about the issues his team member is facing and help him manage them",
      d1Choice3: "C: To tell him how to solve his problems",
      d1Choice4: "D: To ask him to take it easy on Judy and not give her too much work",

      description2: "Question 2: What is Judy not used to?",
      d2Choice1: "A: Being told what to do",
      d2Choice2: "B: Collaborating with people internationally",
      d2Choice3: "C: Being left to do things on her own",
      d2Choice4: "D: Delegating work to other people",

      description3: "Question 3: Why is Judy confused by the changing targets?",
      d3Choice1: "A: She feels as if she needs to understand the reasons for the changes.",
      d3Choice2: "B: She has simultaneous deadlines from the Tokyo office.",
      d3Choice3: "C: She doesn't want to know the bigger picture, just her part.",
      d3Choice4: "D: She doesn't like meeting deadlines.",

      description4: "Question 4: Who might benefit from having a better overview of the project and a better understanding of how the individual tasks fit together to achieve the group target?",
      d4Choice1: "A: Only Judy",
      d4Choice2: "B: Judy and the Tokyo office",
      d4Choice3: "C: Judy and Karl",
      d4Choice4: "D: Judy and the rest of Karl's team",

      description5: "Question 5: What does Jo think of Judy?",
      d5Choice1: "A: Judy works well independently but isn't a good team player.",
      d5Choice2: "B: Judy is lazy and prefers managers to tell her exactly what to do.",
      d5Choice3: "C: Judy is very hard-working and capable and will go far in the company.",
      d5Choice4: "D: Judy is very enthusiastic but not very experienced.",

      description6: "Question 6: Which of these does Jo do in her email?",
      d6Choice1: "A: Mix positives in with the negatives",
      d6Choice2: "B: Focus on the solutions",
      d6Choice3: "C: Use language to show that she's expressing her own opinion or a possibility and not hard facts",
      d6Choice4: "D: All of the above"
    }
  ]);

  const [fontTable, setFontTable] = useState([
    "Segoe UI",
    "San Francisco",
    "Helvetica",
    "Roboto"
  ]);

  const [answer1, setAnswer1] = useState('');
  const [answer2, setAnswer2] = useState('');
  const [answer3, setAnswer3] = useState('');
  const [answer4, setAnswer4] = useState('');
  const [answer5, setAnswer5] = useState('');
  const [answer6, setAnswer6] = useState('');

  const [tableID, setTableID] = useState(0);

  const [isVisible, setIsVisible] = useState(true);
  const [isIntro, setIsIntro] = useState(true);
  const [isPilot, setIsPilot] = useState(false);
  const [isEnd, setIsEnd] = useState(false);

  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/answers')
      .then(response => {
        console.log('promise fulfilled')
        setAnswers(response.data)
        console.log(answers);
      })
  }, [])

  const formHandler1 = (event) => {
    // Handle input to include only one capital LETTER.
    event.target.value = event.target.value.replace(/\W|\d/g, '').substr(0, 1).toUpperCase();

    // If practice task, allow only values A-C and "" as input.
    if (isPilot) {
      const re = /^[A-C]+$/;
      if (event.target.value === "" || re.test(event.target.value)) {
        setAnswer1(event.target.value);
      }
    }

    // In other cases allow only values A-D and "" as input.
    else {
      // Allow only values A-D and "" as input.
      const re = /^[A-D]+$/;
      if (event.target.value === "" || re.test(event.target.value)) {
        setAnswer1(event.target.value);
      }
    }
  }


  const formHandler2 = (event) => {
    // Handle input to include only one capital LETTER.
    event.target.value = event.target.value.replace(/\W|\d/g, '').substr(0, 1).toUpperCase();

    // Allow only values A-D and "" as input.
    const re = /^[A-D]+$/;
    if (event.target.value === "" || re.test(event.target.value)) {
      setAnswer2(event.target.value);
    }
  }

  const formHandler3 = (event) => {
    // Handle input to include only one capital LETTER.
    event.target.value = event.target.value.replace(/\W|\d/g, '').substr(0, 1).toUpperCase();

    // Allow only values A-D and "" as input.
    const re = /^[A-D]+$/;
    if (event.target.value === "" || re.test(event.target.value)) {
      setAnswer3(event.target.value);
    }
  }

  const formHandler4 = (event) => {
    // Handle input to include only one capital LETTER.
    event.target.value = event.target.value.replace(/\W|\d/g, '').substr(0, 1).toUpperCase();

    // Allow only values A-D and "" as input.
    const re = /^[A-D]+$/;
    if (event.target.value === "" || re.test(event.target.value)) {
      setAnswer4(event.target.value);
    }
  }

  const formHandler5 = (event) => {
    // Handle input to include only one capital LETTER.
    event.target.value = event.target.value.replace(/\W|\d/g, '').substr(0, 1).toUpperCase();

    // Allow only values A-D and "" as input.
    const re = /^[A-D]+$/;
    if (event.target.value === "" || re.test(event.target.value)) {
      setAnswer5(event.target.value);
    }
  }

  const formHandler6 = (event) => {
    // Handle input to include only one capital LETTER.
    event.target.value = event.target.value.replace(/\W|\d/g, '').substr(0, 1).toUpperCase();

    // Allow only values A-D and "" as input.
    const re = /^[A-D]+$/;
    if (event.target.value === "" || re.test(event.target.value)) {
      setAnswer6(event.target.value);
    }
  }

  const addNote = () => {
    // Laitetaan ehto, ettei lisätä osallistujan vastauksia jos pilottitesti on käynnissä.
    if (tableID === 0) {
      const practiceObject = {
        description: "practice task",
        participantID: 1,
        question1: textTable[tableID].description1,
        answer1: answer1
      }
      axios
        .post('http://localhost:3001/answers', practiceObject)
        .then(response => {
          console.log(response)
        })
      setAnswer1("");
    }
    else {
      const noteObject = {
        description: "task " + tableID,
        participantID: 1,
        question1: textTable[tableID].description1,
        answer1: answer1,
        question2: textTable[tableID].description2,
        answer2: answer2,
        question3: textTable[tableID].description3,
        answer3: answer3,
        question4: textTable[tableID].description4,
        answer4: answer4,
        question5: textTable[tableID].description5,
        answer5: answer5,
        question6: textTable[tableID].description6,
        answer6: answer6
      }
      axios
        .post('http://localhost:3001/answers', noteObject)
        .then(response => {
          console.log(response)
        })

      setAnswer1("");
      setAnswer2("");
      setAnswer3("");
      setAnswer4("");
      setAnswer5("");
      setAnswer6("");
    }
  }

  const handleTestButtonClick = (event) => {
    setIsVisible(false);
  }

  const handleButtonClick = (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (isIntro === true) {
      setIsIntro(false);
      setIsPilot(true);
      setRemainingTime(600);


    }
    // Update state with the input value

    if (tableID === 3) {
      addNote();
      setIsEnd(true);
      setIsVisible(false);
      console.log("Participant 1");
      console.log(answers);
    }
    else {
      addNote();
      setIsPilot(false);
      setTableID(tableID + 1);
      setIsVisible(true);
setRemainingTime(600);

      setExerciseTimer();
    }
  }

  /**
   * Starts the exercise timer
   * @returns 
   */
  function setExerciseTimer() {
    const timer = setInterval(() => {
      setRemainingTime(
        // Each second, 1 sec is removed from the timer. When it reaches zero, stopExerciseTimer is called
        prevRemainingTime => ( prevRemainingTime <= 0) ? stopExerciseTimer(timer) : prevRemainingTime - 1);
    }, 1000);
    return () => clearInterval(timer);
  }

  /**
   * Stops the exercise timer and sets the page visibility to false
   * @param {*} timer 
   */
  function stopExerciseTimer(timer) {
    setIsVisible(false);
    clearInterval(timer);
  }

  function formatTime(timeInSeconds) {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }


  return (
    <div className="App">
      <Box sx={{ padding: "10% 15%" }}>
        {isIntro && <Typography sx={{ textAlign: 'left', fontFamily: 'Segoe UI', fontSize: '18px', fontWeight: 'bold', color: '#1A1A1A', marginBottom: '10px' }}>Read this information before starting the experiment:</Typography>}
        {isIntro && <Typography sx={{ textAlign: 'left', fontFamily: 'Segoe UI', fontSize: '17px', color: '#1A1A1A', marginBottom: '40px' }}>Each test has a time limit of 10 minutes. After this, the program automatically moves to the next phase. If you are ready before the time expires, you can press the button on the bottom of the page to move forward. <b>Do not press the button before finishing your answers!</b></Typography>}
        {isIntro && <Typography sx={{ textAlign: 'left', fontFamily: 'Segoe UI', fontSize: '17px', color: '#1A1A1A', marginBottom: '40px' }}>The first test is a practice test, that shows how to perform the upcoming tasks. After this, there are <b>three</b> tasks to complete. Answer to each text field with a plain alphabet letter from A to D, accordingly to the questions. If you do not know the answer, do not guess, instead leave the answer blank.</Typography>}
        {isIntro && <Typography sx={{ textAlign: 'left', fontFamily: 'Segoe UI', fontSize: '17px', color: '#1A1A1A', marginBottom: '40px' }}>Do not refresh the page at any point.</Typography>}

        {isIntro ? (
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button variant='contained' onClick={handleButtonClick}>Start the practice test</Button>
          </Box>
        ) : (
          isVisible && tableID < 4 && <div>
        <AppBar position='fixed'sx={{bgcolor: remainingTime > 60 ? "#D3D3D3" : "#FF9478"}}>
          <Toolbar>
            <AccessAlarmIcon sx={{color: 'black'}}/>
            <Typography sx={{color: 'black', fontSize: "18px"}} variant="h6" component="div">
            {formatTime(remainingTime)}
            </Typography>
            <br/>

          </Toolbar>
        </AppBar>
      <Toolbar />
      <Typography sx={{ textAlign: 'left', fontFamily: fontTable[tableID], fontSize: '15px', color: '#1A1A1A', marginBottom: '20px' }}>Each test has a time limit of 10 minutes. After this, the program automatically moves to the next phase. If you are ready before the time expires, you can press the button on the bottom of the page to move forward. Do not press the button before finishing your answers, nor refresh the page at any point!</Typography>
        <Typography sx={{ textAlign: 'left', fontFamily: fontTable[tableID], fontSize: '15px', color: '#1A1A1A', marginBottom: '80px' }}>Answer to each text field with a plain alphabet letter from A to D, accordingly to the questions. If you do not know the answer, do not guess, instead leave the answer blank.</Typography>

{tableID < 1 && <Typography sx={{ textAlign: 'left', fontFamily: fontTable[tableID], fontSize: '24px', fontWeight: 'bold', color: '#1A1A1A', marginBottom: '20px' }}>Practice test</Typography>}
{tableID > 0 && tableID < 4 && <Typography sx={{ textAlign: 'left', fontFamily: fontTable[tableID], fontSize: '24px', fontWeight: 'bold', color: '#1A1A1A', marginBottom: '20px' }}>Test {tableID}</Typography>}
            <Typography sx={{ fontFamily: fontTable[tableID], margin: '15px 0px', fontSize: '20px', fontWeight: 'bold', color: '#1A1A1A' }}>{textTable[tableID].header}</Typography>
            <Typography sx={{ fontFamily: fontTable[tableID], margin: '15px 0px', color: '#1A1A1A' }}>{textTable[tableID].pg1}</Typography>
            <Typography sx={{ fontFamily: fontTable[tableID], margin: '15px 0px', color: '#1A1A1A' }}>{textTable[tableID].pg2}</Typography>
            <Typography sx={{ fontFamily: fontTable[tableID], margin: '15px 0px', color: '#1A1A1A' }}>{textTable[tableID].pg3}</Typography>
            <Typography sx={{ fontFamily: fontTable[tableID], margin: '15px 0px', color: '#1A1A1A' }}>{textTable[tableID].pg4}</Typography>
            <Typography sx={{ fontFamily: fontTable[tableID], margin: '15px 0px', color: '#1A1A1A' }}>{textTable[tableID].pg5}</Typography>
            <Typography sx={{ fontFamily: fontTable[tableID], margin: '15px 0px', color: '#1A1A1A' }}>{textTable[tableID].pg6}</Typography>
            <Typography sx={{ fontFamily: fontTable[tableID], margin: '15px 0px', color: '#1A1A1A' }}>{textTable[tableID].pg7}</Typography>
            <Typography sx={{ fontFamily: fontTable[tableID], margin: '15px 0px', color: '#1A1A1A' }}>{textTable[tableID].pg8}</Typography>
            <Typography sx={{ fontFamily: fontTable[tableID], margin: '15px 0px', color: '#1A1A1A' }}>{textTable[tableID].pg9}</Typography>
            <Typography sx={{ fontFamily: fontTable[tableID], margin: '15px 0px', color: '#1A1A1A' }}>{textTable[tableID].pg10}</Typography>
            <Typography sx={{ fontFamily: fontTable[tableID], margin: '15px 0px', color: '#1A1A1A' }}>{textTable[tableID].pg11}</Typography>
            <Typography sx={{ fontFamily: fontTable[tableID], margin: '15px 0px', color: '#1A1A1A' }}>{textTable[tableID].pg12}</Typography>
            <Typography sx={{ fontFamily: fontTable[tableID], margin: '15px 0px', color: '#1A1A1A' }}>{textTable[tableID].pg13}</Typography>
            <Typography sx={{ fontFamily: fontTable[tableID], margin: '15px 0px', color: '#1A1A1A' }}>{textTable[tableID].pg14}</Typography>

            <div>
              <Typography sx={{ fontFamily: fontTable[tableID], marginTop: '65px', fontSize: '20px', fontWeight: 'bold', color: '#1A1A1A' }}>Questions</Typography>
              <Typography sx={{ fontFamily: fontTable[tableID], marginTop: '25px', marginBottom: '10px', fontWeight: 'bold', color: '#1A1A1A' }}>{textTable[tableID].description1}</Typography>
              <Typography sx={{ fontFamily: fontTable[tableID], color: '#1A1A1A' }}>{textTable[tableID].d1Choice1}</Typography>
              <Typography sx={{ fontFamily: fontTable[tableID], color: '#1A1A1A' }}>{textTable[tableID].d1Choice2}</Typography>
              <Typography sx={{ fontFamily: fontTable[tableID], color: '#1A1A1A' }}>{textTable[tableID].d1Choice3}</Typography>
              <Typography sx={{ fontFamily: fontTable[tableID], marginBottom: '10px', color: '#1A1A1A' }}>{textTable[tableID].d1Choice4}</Typography>
              <TextField sx={{ width: '40px', marginBottom: '10px' }} size="small" autoComplete='off' value={answer1} onChange={formHandler1} />

              <Typography sx={{ fontFamily: fontTable[tableID], marginTop: '25px', fontWeight: 'bold', color: '#1A1A1A' }}>{textTable[tableID].description2}</Typography>
              <Typography sx={{ fontFamily: fontTable[tableID], color: '#1A1A1A' }}>{textTable[tableID].d2Choice1}</Typography>
              <Typography sx={{ fontFamily: fontTable[tableID], color: '#1A1A1A' }}>{textTable[tableID].d2Choice2}</Typography>
              <Typography sx={{ fontFamily: fontTable[tableID], color: '#1A1A1A' }}>{textTable[tableID].d2Choice3}</Typography>
              <Typography sx={{ fontFamily: fontTable[tableID], color: '#1A1A1A', marginBottom: '10px' }}>{textTable[tableID].d2Choice4}</Typography>
              {!isPilot && <TextField sx={{ width: '40px', marginBottom: '10px' }} size="small" autoComplete='off' value={answer2} onChange={formHandler2} />}

              <Typography sx={{ fontFamily: fontTable[tableID], marginTop: '25px', fontWeight: 'bold', color: '#1A1A1A' }}>{textTable[tableID].description3}</Typography>
              <Typography sx={{ fontFamily: fontTable[tableID], color: '#1A1A1A' }}>{textTable[tableID].d3Choice1}</Typography>
              <Typography sx={{ fontFamily: fontTable[tableID], color: '#1A1A1A' }}>{textTable[tableID].d3Choice2}</Typography>
              <Typography sx={{ fontFamily: fontTable[tableID], color: '#1A1A1A' }}>{textTable[tableID].d3Choice3}</Typography>
              <Typography sx={{ fontFamily: fontTable[tableID], color: '#1A1A1A', marginBottom: '10px' }}>{textTable[tableID].d3Choice4}</Typography>
              {!isPilot && <TextField sx={{ width: '40px', marginBottom: '10px' }} size="small" autoComplete='off' value={answer3} onChange={formHandler3} />}

              <Typography sx={{ fontFamily: fontTable[tableID], marginTop: '25px', fontWeight: 'bold', color: '#1A1A1A' }}>{textTable[tableID].description4}</Typography>
              <Typography sx={{ fontFamily: fontTable[tableID], color: '#1A1A1A' }}>{textTable[tableID].d4Choice1}</Typography>
              <Typography sx={{ fontFamily: fontTable[tableID], color: '#1A1A1A' }}>{textTable[tableID].d4Choice2}</Typography>
              <Typography sx={{ fontFamily: fontTable[tableID], color: '#1A1A1A' }}>{textTable[tableID].d4Choice3}</Typography>
              <Typography sx={{ fontFamily: fontTable[tableID], color: '#1A1A1A', marginBottom: '10px' }}>{textTable[tableID].d4Choice4}</Typography>
              {!isPilot && <TextField sx={{ width: '40px', marginBottom: '10px' }} size="small" autoComplete='off' value={answer4} onChange={formHandler4} />}

              <Typography sx={{ fontFamily: fontTable[tableID], marginTop: '25px', fontWeight: 'bold', color: '#1A1A1A' }}>{textTable[tableID].description5}</Typography>
              <Typography sx={{ fontFamily: fontTable[tableID], color: '#1A1A1A' }}>{textTable[tableID].d5Choice1}</Typography>
              <Typography sx={{ fontFamily: fontTable[tableID], color: '#1A1A1A' }}>{textTable[tableID].d5Choice2}</Typography>
              <Typography sx={{ fontFamily: fontTable[tableID], color: '#1A1A1A' }}>{textTable[tableID].d5Choice3}</Typography>
              <Typography sx={{ fontFamily: fontTable[tableID], color: '#1A1A1A', marginBottom: '10px' }}>{textTable[tableID].d5Choice4}</Typography>
              {!isPilot && <TextField sx={{ width: '40px', marginBottom: '10px' }} size="small" autoComplete='off' value={answer5} onChange={formHandler5} />}

              <Typography sx={{ fontFamily: fontTable[tableID], marginTop: '25px', fontWeight: 'bold', color: '#1A1A1A' }}>{textTable[tableID].description6}</Typography>
              <Typography sx={{ fontFamily: fontTable[tableID], color: '#1A1A1A' }}>{textTable[tableID].d6Choice1}</Typography>
              <Typography sx={{ fontFamily: fontTable[tableID], color: '#1A1A1A' }}>{textTable[tableID].d6Choice2}</Typography>
              <Typography sx={{ fontFamily: fontTable[tableID], color: '#1A1A1A' }}>{textTable[tableID].d6Choice3}</Typography>
              <Typography sx={{ fontFamily: fontTable[tableID], color: '#1A1A1A', marginBottom: '10px' }}>{textTable[tableID].d6Choice4}</Typography>
              {!isPilot && <TextField sx={{ width: '40px', marginBottom: '10px' }} size="small" autoComplete='off' value={answer6} onChange={formHandler6} />}
            </div>

            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              {isPilot ? (<Button sx={{ marginTop: '40px' }} variant='contained' onClick={handleTestButtonClick}>Move to the experiment</Button>)
                : (<Button sx={{ marginTop: '40px', mt: 1 }} variant='contained' onClick={handleTestButtonClick}>Move to the next phase</Button>)}
            </Box>

          </div>
        )}

        {!isVisible && !isEnd && tableID < 1 && remainingTime === 0 && <Typography sx={{ textAlign: 'center', fontFamily: 'Segoe UI', fontWeight: 'bold', marginBottom: '50px', fontSize: '20px', color: '#1A1A1A' }}>Time limit for practice test has exceeded. Press the button below to move forward, when you are ready.</Typography>}
        {!isVisible && !isEnd && tableID < 1 && remainingTime > 0 && <Typography sx={{ textAlign: 'center', fontFamily: 'Segoe UI', fontWeight: 'bold', marginBottom: '50px', fontSize: '20px', color: '#1A1A1A' }}>Practice test has been completed. Press the button below to start the test number {tableID + 1}, when you are ready.</Typography>}

        {!isVisible && !isEnd && tableID > 0 && tableID < 3 && remainingTime === 0 && <Typography sx={{ textAlign: 'center', fontFamily: 'Segoe UI', fontWeight: 'bold', fontSize: '20px', color: '#1A1A1A', marginBottom: '50px' }}>Time limit for test {tableID} has exceeded. Press the button below to move forward, when you are ready.</Typography>}
        {!isVisible && !isEnd && tableID > 0 && tableID < 3 && remainingTime > 0 && <Typography sx={{ textAlign: 'center', fontFamily: 'Segoe UI', fontWeight: 'bold', fontSize: '20px', color: '#1A1A1A', marginBottom: '50px' }}>Test {tableID} has been completed. Press the button below to start the test number {tableID + 1}, when you are ready.</Typography>}

        {!isVisible && !isEnd && tableID > 0 && tableID === 3 && remainingTime === 0 && <Typography sx={{ textAlign: 'center', fontFamily: 'Segoe UI', fontWeight: 'bold', fontSize: '20px', color: '#1A1A1A', marginBottom: '50px' }}>Time limit for test {tableID} has exceeded. Press the button below to finish the experiment.</Typography>}
        {!isVisible && !isEnd && tableID > 0 && tableID === 3 && remainingTime > 0 && <Typography sx={{ textAlign: 'center', fontFamily: 'Segoe UI', fontWeight: 'bold', fontSize: '20px', color: '#1A1A1A', marginBottom: '50px' }}>Test {tableID} has been completed. Press the button below to finish the experiment.</Typography>}

        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          {!isVisible && !isEnd && tableID < 3 && <Button variant='contained' onClick={handleButtonClick}>Start test number {tableID + 1}</Button>}
          {!isVisible && !isEnd && tableID === 3 && <Button variant='contained' onClick={handleButtonClick}>Finish the experiment</Button>}
        </Box>

        {isEnd && <Typography sx={{ textAlign: 'center', fontFamily: 'Segoe UI', fontWeight: 'bold', fontSize: '20px', color: '#1A1A1A' }}>Experiment ended. Thank you for participating.</Typography>}
      </Box>
    </div>
  );
}

export default App;
