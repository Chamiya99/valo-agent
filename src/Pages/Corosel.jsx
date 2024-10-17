
import { useEffect, useState } from 'react'
import { ImgData } from '../assets/data'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { motion } from "framer-motion"
import { goLeft, slideInFromLeft, slideInFromTop, slideOutFromLeft } from '../utils/motion'

const Corosel = () => {
    const [initial, setInitial] = useState(true);

    const [c1, setC1] = useState(0);
    const [c2, setC2] = useState(1);
    const [c3, setC3] = useState(2);
    const [c4, setC4] = useState(3);
    const [c5, setC5] = useState(4);
  
    const [active_data1, setActive_data1] = useState(ImgData[c1].img)
    const [active_data2, setActive_data2] = useState(ImgData[c2].img)
    const [active_data3, setActive_data3] = useState(ImgData[c3].img)
    const [active_data4, setActive_data4] = useState(ImgData[c4].img)
    const [active_data5, setActive_data5] = useState(ImgData[c5].img)
  
    const [type, setType] = useState(false);
  
    const ClickChange = (type) => {
      setInitial(false);
      setType(type === 'next');
  
      // Update indices for "Next"
      if (type === 'next') {
        setC1((prev) => (prev + 1) % ImgData.length);
        setC2((prev) => (prev + 1) % ImgData.length);
        setC3((prev) => (prev + 1) % ImgData.length);
        setC4((prev) => (prev + 1) % ImgData.length);
        setC5((prev) => (prev + 1) % ImgData.length);
      } 
      // Update indices for "Previous"
      else if (type === 'pre') {
        setC1((prev) => (prev - 1 + ImgData.length) % ImgData.length);
        setC2((prev) => (prev - 1 + ImgData.length) % ImgData.length);
        setC3((prev) => (prev - 1 + ImgData.length) % ImgData.length);
        setC4((prev) => (prev - 1 + ImgData.length) % ImgData.length);
        setC5((prev) => (prev - 1 + ImgData.length) % ImgData.length);
      }
    };
  
    useEffect(() => {
      // Update active data for background images
      setActive_data1(ImgData[c1].img);
      setActive_data2(ImgData[c2].img);
      setActive_data3(ImgData[c3].img);
      setActive_data4(ImgData[c4].img);
      setActive_data5(ImgData[c5].img);
    }, [c1, c2, c3, c4, c5]);
  
    return (
      <div className='w-full h-[85vh] my-10 rounded-2xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] overflow-hidden'>
        {/* Main image container */}
        <motion.div
          className={`absolute w-[94.8vw] h-[85vh] z-[-1] overflow-hidden bg-center bg-cover  rounded-2xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]`}
          style={{ backgroundImage: `url(${active_data1})` }}
        >
          <motion.h1 key={c1} initial="hidden" animate="visible" variants={slideInFromTop(0.5)} className='ml-10 text-4xl'>
            {ImgData[c1].title}
          </motion.h1>
        </motion.div>
  
        {/* Middle image container */}
        <motion.div
          key={active_data1}
          initial="hidden"
          animate="visible"
          variants={initial ? '' : type ? slideInFromLeft(0) : slideOutFromLeft(0)}
          className={`relative w-full h-full m-0 p-10 z-10 overflow-hidden bg-center bg-cover flex items-center`}
          style={{ backgroundImage: `url(${active_data2})` }}
        >
          <motion.h1 key={c2} initial="hidden" animate="visible" variants={slideInFromTop(0.5)} className='ml-10 text-4xl'>
            {ImgData[c2].title}
          </motion.h1>
        </motion.div>
  
        {/* Navigation buttons */}
        <div
          onClick={() => ClickChange('pre')}
          className='absolute flex items-center justify-center hover:cursor-pointer hover:bg-sky-900 w-[40px] h-[40px] rounded-full bg-sky-950 ml-[5rem] mt-[-10rem] z-50'
        >
          <ChevronLeftIcon />
        </div>
        <div
          onClick={() => ClickChange('next')}
          className='absolute flex items-center justify-center hover:cursor-pointer hover:bg-sky-900 w-[40px] h-[40px] rounded-full bg-sky-950 ml-[9rem] mt-[-10rem] z-50'
        >
          <ChevronRightIcon />
        </div>
  
        {/* Thumbnails or smaller images */}
        <div className='flex gap-2 '>
          <motion.div
            className={`relative w-[180px] h-[250px] overflow-hidden left-[60%] translate-y-[-120%] rounded-[20px] shadow-[rgba(0,_0,_0,_0.3)_0px_25px_50px] bg-center bg-cover z-[100] transition-all`}
            style={{ backgroundImage: `url(${active_data3})` }}
          ></motion.div>
          <div
            className={`relative w-[180px] h-[250px] overflow-hidden left-[60%] translate-y-[-120%] rounded-[20px] shadow-[rgba(0,_0,_0,_0.3)_0px_25px_50px] bg-center bg-cover z-[100] transition-all`}
            style={{ backgroundImage: `url(${active_data4})` }}
          ></div>
          <div
            className={`relative w-[180px] h-[250px] overflow-hidden left-[60%] translate-y-[-120%] rounded-[20px] shadow-[rgba(0,_0,_0,_0.3)_0px_25px_50px] bg-center bg-cover z-[100] transition-all`}
            style={{ backgroundImage: `url(${active_data5})` }}
          ></div>
        </div>
      </div>
    );
}

export default Corosel