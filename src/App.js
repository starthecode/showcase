import React from 'react';

import { Features, Download, SectionWrapper } from './components';

import styles from './styles/Global';

import assets from './assets';


const App = () => {
  return (
    <>
     <SectionWrapper
     title='You own a store of Nifty NFTs. Start Selling and Growing'
     description='Buy, store, collect NFTS, exchange and earn crypto. Join 25+ million people using ProNef Market Place.'
     showBtn
     mockupImg={assets.homeHero}
     banner="banner"
     />

    <SectionWrapper
     title='SmartUser Interface Marketplace'
     description='Experiance a buttery UI Of ProNef NFT Marketplace. Smooth constent color of fluent UI Design.'
     mockupImg={assets.homeCards}
     reverse
     />

     <Features />

     <SectionWrapper
     title='Deployment'
     description='ProNef is built using Expo, Which runs natively on all users devices. You can easily get your app into peoples hand.'
     mockupImg={assets.feature}
     reverse
     />

    <SectionWrapper
     title='Creative way to showcase the store'
     description='The app contains two screens. The first screen list all NFTs, While the second one shows the details of specific NFT.'
     mockupImg={assets.mockup}
     banner='banner02'
     />

     <Download />

     <div className='px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04'>
       <p className={`${styles.pText} ${styles.whiteText}`}>
         Made with ❤️ By {' '}
         <b>
            Madan Malhotra
         </b>
       </p>
     </div>

    </>

  )
}


export default App;
