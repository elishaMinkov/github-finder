import React,{useContext} from 'react';
import AlertContext from '../../context/alert/alertContext';


const About = () => {
const alertContext = useContext(AlertContext);

alertContext.removeAlert();
  return (
    <div>
      <h1>about this app</h1>
      <p>app to search users from gitHub</p>
      <p>version 1.0.1</p>
      
    </div>
  );
};
export default About;
