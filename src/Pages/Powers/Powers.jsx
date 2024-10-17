import { fadeIn } from "../../utils/motion";
import "./Powers.css";
import { motion } from 'framer-motion';

const Powers = ({ Ability }) => {
  return (
    <div className="Power-box">
      <div className="power-box-left">
        <div className="power-line-1" />
        <motion.div
          key={Ability.key}
          initial='hidden'
          animate='show'
          variants={fadeIn("up-right", "tween", 1, 1)}
          className="power-box-1" />
        <motion.div
          key={Ability.key}
          initial='hidden'
          animate='show'
          variants={fadeIn("down", "tween", 1, 1)}
          className="power-dot-1" />
      </div>
      <div className="power-box-right">
        {Ability.map((source, key) => (
          <motion.div
            key={Ability.key}
            initial='hidden'
            animate='show'
            variants={fadeIn("right", "spring", key === 0 ? 1 : 1 + key / 10, 1)}
            className="power-box-right-img-box"
            >
            <div className="power-img-box">
              <div className="power-img-box-outline">
                <div className="img-box-bg" />
              </div>
              <img
                src={source.img}
                alt=""
              />
            </div>
            <div className="power-img-text">
              <div className="power-img-text-title">{source.name}</div>
              <div className="power-img-text-description">{source.desc}</div>
            </div>
          </motion.div>
        ))}

      </div>
    </div>
  );
};

export default Powers;
