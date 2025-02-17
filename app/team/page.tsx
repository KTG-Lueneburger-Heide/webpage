'use client'

import TrainerCard, { ContactCard } from '@/components/visuals/cards'
import trainer from '@/data/trainer.yaml'
import vorstand from '@/data/vorstand.yaml'

import { ContactRecord } from '@/data/datatypes'
import { HeaderTransparencyBorder } from '@/components/visuals/header'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './page.module.css';


export default function TeamPage() {

  const Vorstand = () => (
    <>
      <h3 className="text-2xl h-10 text-oxford-blue-200 uppercase tracking-widest font-bold opacity-0 animate-blend-in animation-delay-1000">Vorstand</h3>
      <div className={`${styles.container} relative flex flex-wrap justify-center items-center font-poppins mx-0 lg:mx-10 xl:mx-20 2xl:mx-48 opacity-0 animate-blend-in animation-delay-1000`}>
        {/* {vorstand.map( (t,i) => <ContactCard name={t.personal.humanNameShort} image={`https://api.campai.com/storage/download/${t.personal.avatar?.path}`} key={i}/>)}  */}
        {vorstand.map( (t,i) => <ContactCard name={t.name} image={t.image} text={t.position} key={i}/>)}
      </div>
    </>
  )

  const Trainer = () => (
    <>
      <h3 className="text-2xl h-10 text-oxford-blue-200 uppercase tracking-widest font-bold opacity-0 animate-blend-in animation-delay-1000">Trainerinnen</h3>
      <div className={`${styles.container} relative flex flex-wrap justify-center font-poppins mx-0 lg:mx-10 xl:mx-20 2xl:mx-48 opacity-0 animate-blend-in-flex animation-delay-1000`}>
        {trainer.map( (t,i) => <TrainerCard {...t} key={i}/>)}
      </div>
    </>
  )

  return (
    <div className="w-screen min-h-screen landscape:parallax-team portrait:parallax-team-portrait pt-20 lg:pt-32 pb-20 text-center">
      <div className="h-20 sm:h-auto"><h2 className="title inline-block">Unser Team</h2></div>
      <HeaderTransparencyBorder/>
      <Swiper className={styles.swiper}
              modules={[Navigation]}
              slidesPerView={1}
              navigation
              onSwiper={(swiper) => console.log(swiper)}
              >
        <SwiperSlide>
          <Trainer/>
        </SwiperSlide>
        <SwiperSlide>
          <Vorstand/>
        </SwiperSlide>
      </Swiper>
    </div>
  )

}
