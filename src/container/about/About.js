import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './About.scss';
import { client, urlFor } from '../../client.js';
import { images } from '../../constants';
import { AppWrap } from '../../wrapper';


/*const abouts = [
  {
    title: 'Front-end Development',
    description: 'I am a good software engineer,',
    imgUrl: images.about01,
  },
  {
    title: 'Full stack Development',
    description: 'I am a good software developer,',
    imgUrl: images.about04,
  },
  {
    title: 'UI/UX, Web Design',
    description: 'I am a good software developer,',
    imgUrl: images.about02,
  },
  {
    title: 'Web Animations',
    description: 'I am a good software developer,',
    imgUrl: images.about03,
  },
];*/

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = "*[_type=='abouts']";
    client.fetch(query).then(data => setAbouts(data));
  }, []);

  return (
    <>
      <h2 className="head-text">
        <span>Good Web Dev</span> <br />
        means <span>Good Business</span>. Let's do <span>it!</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap (About, 'about');
