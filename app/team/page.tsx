import TrainerCard, { ContactCard } from '@/components/visuals/cards'
import trainer from '@/data/trainer.yaml'
import vorstand from '@/data/vorstand.yaml'

import Config from '../app.config'

import { ContactRecord, CustomFieldDefinition, CustomFieldGroup } from '@/data/datatypes'
import { HeaderTransparencyBorder } from '@/components/visuals/header'
import { faLongArrowRight, faLongArrowLeft } from '@fortawesome/free-solid-svg-icons'
// import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
import styles from './page.module.css';
import { StickyContainer } from '@/components/visuals/StickyContainer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import getConfig from 'next/config'
import path from 'path'
import fs from 'fs'
import {Writable} from 'node:stream';

async function fetchBoardMembers() : Promise<ContactRecord[]> {

  const headers : HeadersInit = {
    'Content-Type': 'application/json',
    "Authorization": Config.campai.api_key as string,
  }

  const query = new URLSearchParams({
    'organisation': Config.campai.organistationID,
    'tags': 'in:Vorstand'
  })

  const res = await fetch(path.join( Config.campai.endpoint, `/contacts?${query}`), {
    headers: headers
  })

  return res.json() as Promise<ContactRecord[]>

}

async function getCustomFieldDefinition(group: string, name : string) : Promise<CustomFieldDefinition | undefined> {

  const headers : HeadersInit = {
    'Content-Type': 'application/json',
    "Authorization": Config.campai.api_key as string,
  }

  const query = new URLSearchParams({
    'organisation': Config.campai.organistationID,
  })

  const res = await fetch(path.join( Config.campai.endpoint, `/customFieldGroups?${query}`), {
    headers: headers
  })

  if (res.ok) {
    const groups = await res.json() as CustomFieldGroup[]
    
    const defs = groups.filter( g => g.name == group)
    for (const d of defs) {
      return d.customFields.filter( f => f.name == name ).pop()
    }
  }
  
}

/**
 * Obtain an avatar URL from capai. The image is loaded on compile time and 
 * stored as a blob. If no Avatar is found, a placeholder image is used
 * 
 * @param contact contact record with avatar information from Campai api
 * @returns an URL with the Avatar information
 */
async function getAvatarURL(contact: ContactRecord) : Promise<string> {

  if ( contact.personal.avatar ) {
    console.log(`https://api.campai.com/storage/download/${contact.personal.avatar?.path}`)
    const res = await fetch(`https://api.campai.com/storage/download/${contact.personal.avatar?.path}`)
    if (res.ok) {
      const blob = await res.blob()
      const p = path.join(getConfig().serverRuntimeConfig.PROJECT_ROOT, 'public', Config.avatars.cache,contact._id)
      fs.mkdirSync(p, {recursive: true} )
      const fileStream = fs.createWriteStream(path.join(p,contact.personal.avatar?.filename))
      await blob.stream().pipeTo(Writable.toWeb(fileStream))

      return path.join(Config.avatars.cache,contact._id, contact.personal.avatar?.filename)

      // const buffer = Buffer.from(await blob.arrayBuffer());
      // return "data:" + blob.type + ';base64,' + buffer.toString('base64');
    }
  }
  return ( contact.personal.type == "malePerson" ) ? Config.avatars.placeholder.male : Config.avatars.placeholder.female

}

// async function fetchBoardMembers() : Promise<ContactRecord[]> {
//   // Dummy fetch returning an empty array
//   return new Promise<ContactRecord[]>( (resolve) => resolve([]) )
// }

export default async function TeamPage() {

  const boardMembers = await fetchBoardMembers();
  const functionFieldDef = await getCustomFieldDefinition("Verwaltung", "Funktion")
  
  const Vorstand = async () => (
    <>
      <div className='z-10 bg-black-900 opacity-80 p-2'>
        <h3 className="text-2xl h-10 text-oxford-blue-200 uppercase tracking-widest font-bold">Vorstand</h3>  
      </div>
      <div className={`relative flex flex-wrap justify-center items-center font-poppins mx-0`}>
        {boardMembers.map( async (t,i) => <ContactCard name={t.personal.humanNameShort} 
                                                 image={await getAvatarURL(t)} 
                                                
                                                 text={functionFieldDef ? t.custom[functionFieldDef?.key] : ""}
                                                 key={i}/>)}
        {/* {vorstand.map( (t,i) => <ContactCard name={t.name} image={t.image} text={t.position} key={i}/>)} */}
      </div>
    </>
  )

  const Trainer = () => (
    <>
      <div className='z-10 bg-black-900 opacity-80 p-2'>
        <h3 className="text-2xl h-10 text-oxford-blue-200 uppercase tracking-widest font-bold">Trainerinnen</h3>  
      </div>
      <div className={`relative flex flex-wrap justify-center items-center font-poppins mx-0`}>
        {trainer.map( (t,i) => <TrainerCard {...t} key={i}/>)}
      </div>
    </>
  )

  return (
    <div className="w-screen min-h-screen landscape:parallax-team portrait:parallax-team-portrait pt-20 lg:pt-32 pb-20 text-center">
      <HeaderTransparencyBorder/>
      <div className="h-20 sm:h-auto"><h2 className="title inline-block">Unser Team</h2></div>
      {/* <Swiper className={styles.swiper}
              modules={[Navigation]}
              slidesPerView={1}
              navigation>
        <SwiperSlide><Trainer/></SwiperSlide>
        <SwiperSlide><Vorstand/></SwiperSlide>
      </Swiper> */}
      <Trainer/>
      <Vorstand/>
    </div>
  )

}
