import { useState } from 'react';
import avatar from './Assets/avatar-michelle.jpg';
import facebook from './Assets/icon-facebook.svg';
import pinterest from './Assets/icon-pinterest.svg';
import share from './Assets/icon-share.svg';
import share2 from './Assets/icon-share2.svg';
import twitter from './Assets/icon-twitter.svg';
import styles from './style/App.module.scss';

function App() {

  const [active, setActive] = useState(false)
  const [pop, setPop] = useState(false)

  return (
    <div className={styles.container}>
     <div className={styles.CardContainer}>
      <div className={styles.CardContainerLeft}>
      </div>
      <div className={styles.CardContainerRight}>
        <h1>Shift the overall look and feel by adding these wordeful touches to furniture in your home</h1>
        <p>Ever been in a room and felt ike something was missing? Perhaps it felt slightly bare and uninviting. I've got some simple tips to help you make any room feel complete.</p>

        <div className={styles.data}>
          <div className={styles.containerAutor}>
            <img src={avatar} alt="avatar" />
            <div className={styles.texts}>
                <h3>Michelle Appleton</h3>
                <p>28 Jun 2020</p>
            </div>
          </div>
          <div 
          onClick={()=>{
              setPop(!pop)
              setActive(!active)
            }} className={!active ? styles.backgroundShared : styles.backgroundSharedActive}>
            {active ? <img className={styles.share} src={share2} alt="" /> : <img fill="red" className={styles.share} src={share} alt="" /> }
          </div>
        </div>

        {pop && <div className={styles.pop}>
            <p>SHARE</p>
                <div className={styles.social_media}>
                  <img src={facebook} alt="" />
                  <img src={twitter} alt="" />
                  <img src={pinterest} alt="" />
                  <div 
                  onClick={()=>{
                  setPop(!pop)
                  setActive(!active)
                }} className={styles.backgroundSharedActive}>
                {active ? <img className={styles.share} src={share2} alt="" /> : <img fill="red" className={styles.share} src={share} alt="" /> }
              </div>
            </div>
        </div>}
      </div>
         
     </div>
    </div>
  );
}

export default App;
