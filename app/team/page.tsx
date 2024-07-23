import TrainerCard, { ContactCard } from '@/components/visuals/cards'
import trainer from '@/data/trainer.yaml'
import path from 'path'

import Config from '@/app/app.config'
import { ContactRecord } from '@/data/datatypes'

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

export default async function TeamPage() {

  const boardMembers = await fetchBoardMembers();

  // console.log(`Number of contacts in group [Vorstand]: ${boardMembers.length}`);

  return (
    <div className="w-screen min-h-screen landscape:parallax-team portrait:parallax-team-portrait pt-20 lg:pt-32 pb-20 text-center">
      <div className=""><h2 className="title inline-block">Unser Team</h2></div>
      <h3 className="text-2xl text-oxford-blue-200 uppercase tracking-widest font-bold mb-6 opacity-0 animate-blend-in animation-delay-1000">Trainerinnen</h3>
      <div className="relative flex flex-wrap justify-center items-center font-poppins mx-8 lg:mx-10 xl:mx-20 2xl:mx-48 opacity-0 animate-blend-in animation-delay-1000">
        {trainer.map( (t,i) => <TrainerCard {...t} key={i}/>)}
      </div>
      <h3 className="text-2xl text-oxford-blue-200 uppercase tracking-widest font-bold mt-[70px] mb-6 opacity-0 animate-blend-in animation-delay-1000">Vorstand</h3>
      <div className="relative flex flex-wrap justify-center items-center font-poppins mx-8 lg:mx-10 xl:mx-20 2xl:mx-48 opacity-0 animate-blend-in animation-delay-1000">
        {boardMembers.map( (t,i) => <ContactCard name={t.personal.humanNameShort} image={`https://api.campai.com/storage/download/${t.personal.avatar?.path}`} key={i}/>)}
      </div>
    </div>
  )

}
