import React from 'react'
import './BackVid.css'
const BackVId = () => {
  return (
    <div className="back-vid">
        <video autoPlay muted loop playsInline>
            <source  src='https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/409ab2fc369ba5e1fe50bac10c6676d7d1365a9f.mp4' type='video/mp4'/>
        </video>
    </div>
  )
}

export default BackVId