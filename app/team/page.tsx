import TrainerCard from '@/components/visuals/cards'
import trainer from '@/data/trainer.yaml'

export default function TeamPage() {

  return (
    <div className="w-screen min-h-screen parallax-team px-10 pt-20 md:pt-32 text-center">
      <div className=""><h2 className="title inline-block">Unser Team</h2></div>
      <h3 className="text-2xl text-oxford-blue-200 uppercase tracking-widest font-bold mb-6 opacity-0 animate-blend-in animation-delay-1000">Trainerinnen</h3>
      <div className="relative flex flex-wrap justify-center items-center font-poppins md:mx-10 xl:mx-20 2xl:mx-48">
        {trainer.map( (t,i) => <TrainerCard {...t} key={i}/>)}
      </div>
    </div>
  )
}
