'use client'

import TrainerCard, { ContactCard } from '@/components/visuals/cards'
import trainer from '@/data/trainer.yaml'
import vorstand from '@/data/vorstand.yaml'
import Image from 'next/image'

import { ContactRecord } from '@/data/datatypes'
import { HeaderTransparencyBorder } from '@/components/visuals/header'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './page.module.css';

// async function fetchBoardMembers() : Promise<ContactRecord[]> {

//   const headers : HeadersInit = {
//     'Content-Type': 'application/json',
//     "Authorization": Config.campai.api_key as string,
//   }

//   const query = new URLSearchParams({
//     'organisation': Config.campai.organistationID,
//     'tags': 'in:Vorstand'
//   })

//   const res = await fetch(path.join( Config.campai.endpoint, `/contacts?${query}`), {
//     headers: headers
//   })

//   return res.json() as Promise<ContactRecord[]>

// }

// async function fetchBoardMembers() : Promise<ContactRecord[]> {
//   // Dummy fetch returning an empty array
//   return new Promise<ContactRecord[]>( (resolve) => resolve([]) )
// }

const NameTag = ({fullname, position} : {fullname : String, position : String}) => (
  <div className='flex flex-col justify-center m-4'>
    <div className='text-black-300'>{position}</div>
    <div className='text-bold text-xl'>{fullname}</div>
  </div>
);

export default function TeamPage() {

  // const boardMembers = await fetchBoardMembers();
  // console.log(`Number of contacts in group [Vorstand]: ${boardMembers.length}`);

  const Vorstand = () => (
    <>
      <h3 className="text-2xl h-10 text-oxford-blue-200 uppercase tracking-widest font-bold opacity-0 animate-blend-in animation-delay-1000">Vorstand</h3>
      {/* <div className={`${styles.container} relative flex flex-wrap justify-center items-center font-poppins mx-0 lg:mx-10 xl:mx-20 2xl:mx-48 opacity-0 animate-blend-in animation-delay-1000`}>
        {vorstand.map( (t,i) => <ContactCard name={t.personal.humanNameShort} image={`https://api.campai.com/storage/download/${t.personal.avatar?.path}`} key={i}/>)}
        {vorstand.map( (t,i) => <ContactCard name={t.name} image={t.image} text={t.position} key={i}/>)}
      </div> */}
      <div className=' bg-black-950 bg-opacity-70 m-10 flex flex-col justify-center items-center rounded-xl pb-10'>
        <div><Image src='/images/people/vorstand_2025.png' 
               className='border-b-2 border-white'
               alt="Vorstand" 
               width='700' 
               height='300'/>
        </div>
        <div className={`${styles.container} relative flex flex-wrap justify-center items-center font-poppins mx-0 lg:mx-10 xl:mx-20 2xl:mx-48 opacity-0 animate-blend-in animation-delay-1000`}>
          {vorstand.map((t, i) => <NameTag fullname={t.name} position={t.position} key={i}/>)}
        </div>
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
