import './Heros.css';
import Powers from '../Powers/Powers';
import { useState, useEffect } from 'react';
import { AgentData } from '../../assets/data';
import { motion } from 'framer-motion';
import { slideIn, slideInFromLeftNew, slideInFromRight, slideInFromTop, rotate, showIn } from '../../utils/motion';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { ChevronUpIcon } from '@heroicons/react/24/outline';
import Loading from '../../components/Loading/Loading';


const Heros = () => {
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState(true);
  const [drowOpen, SetDrowOpen] = useState(false);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 15000); 
    return () => clearTimeout(timer);
  }, [current]);

  const nextPre = (next) => {
    if (next) {
      setNext(true);
      setCurrent(current >= AgentData.length - 1 ? 0 : current + 1);
    } else {
      setNext(false);
      setCurrent(current <= 0 ? AgentData.length - 1 : current - 1);
    }
  };

  const onClickAgent = (key) => {
    setCurrent(key);
    SetDrowOpen(false);
  };

  const handleImageLoad = () => {
    setLoading(false);
  };

  useEffect(() => {
    const agentCard = document.querySelector('.agent-card');

    if (agentCard) {

      const handleWheel = (event) => {
        event.preventDefault();
        agentCard.scrollLeft += event.deltaX;
      };

      agentCard.addEventListener('wheel', handleWheel);


      return () => {
        agentCard.removeEventListener('wheel', handleWheel);
      };
    }
  }, []);

  return (
    <>
      {loading ? (
        <div className="loading-agnt">
          <Loading />
        </div>
      ) : (
        <motion.div
          key={current}
          initial="hidden"
          animate="show"
          variants={slideIn(next ? 'right' : 'left', 'spring', 0, 1)}
          className="Heros"
          style={{
            background: `url(${AgentData[current].img})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '130% 100%',
            backdropFilter: 'opacity(0.5)',
          }}
        >
         <div className='valo-icon' onClick={() => window.open('https://playvalorant.com/en-gb/', '_blank')}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" height="50" viewBox="0 0 100 100" width="50"><path d="M99.25 48.66V10.28c0-.59-.75-.86-1.12-.39l-41.92 52.4a.627.627 0 00.49 1.02h30.29c.82 0 1.59-.37 2.1-1.01l9.57-11.96c.38-.48.59-1.07.59-1.68zM1.17 50.34L32.66 89.7c.51.64 1.28 1.01 2.1 1.01h30.29c.53 0 .82-.61.49-1.02L1.7 9.89c-.37-.46-1.12-.2-1.12.39v38.38c0 .61.21 1.2.59 1.68z" fill="#ff4655bf"></path></svg>
          </div>
          <motion.span
            initial="hidden"
            animate="visible"
            variants={slideInFromRight(0.3)}
            className="hero-name-back"
          >
            {AgentData[current].name}
          </motion.span>
          <div className="hero-left">
            <motion.span
              initial="hidden"
              animate="visible"
              variants={slideInFromLeftNew(0.5)}
              className="hero-name"
            >
              {AgentData[current].name}
            </motion.span>
            <motion.span
              initial="hidden"
              animate="visible"
              variants={slideInFromTop(1.1)}
              className="hero-details"
            >
              {AgentData[current].desc}
            </motion.span>
            <Powers Ability={AgentData[current].abilities} />
          </div>
          <div className="hero-right" />
          <div className="hero-role">
            <motion.span
              key={current}
              initial="hidden"
              animate="show"
              variants={rotate(1, 1)}
              style={{
                maskImage: `url(${AgentData[current].role.img})`,
                display: 'inline-block',
                maskRepeat: 'no-repeat',
                backgroundColor: 'rgba(255,70,85,0.75)',
                maskSize: 'contain',
                height: '200px',
                width: '200px',
              }}
            />
            <motion.span key={current} initial="hidden" animate="show" variants={showIn(2, 1)}>
              {AgentData[current].role.name}
            </motion.span>
          </div>
          <div className={`agent-select ${drowOpen ? 'drow-open' : ''}`}>
            <div
              className="up-btn btn-active"
              onClick={() => SetDrowOpen(!drowOpen)}
              style={{ rotate: drowOpen ? '180deg' : '' }}
            >
              <ChevronUpIcon sx={{ width: '40px', height: '40px', color: 'black' }} />
            </div>

            <div className="agent-card">
              {AgentData.map((data, key) => (
                <div key={key} onClick={() => onClickAgent(key)} className="agent-select-card">
                  <img src={data.shortImg} alt="" onLoad={handleImageLoad} />
                  <span style={{ textTransform: 'uppercase' }}>{data.name}</span>
                </div>
              ))}
            </div>
          </div>

        </motion.div>
      )}

      {!drowOpen ? !loading ? (
        <div className="btn-grp">
          <div className="btn-grp-btn" onClick={() => nextPre(false)}>
            <ChevronLeftIcon sx={{ width: '50px', height: '50px', color: '#ff4655bf' }} />
          </div>
          <div className="btn-grp-btn" onClick={() => nextPre(true)}>
            <ChevronRightIcon sx={{ width: '50px', height: '50px', color: '#ff4655bf' }} />
          </div>
        </div>
      ) : (
        ''
      ) : ('')}
    </>
  );
};

export default Heros;
