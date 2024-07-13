import { SponsorData } from '@/data/datatypes'
import sponsors from '@/data/sponsors.yaml'

export default function Sponsors() {

  const Logo = ({sponsor} : {sponsor : SponsorData}) => {

    return (<img className="h-[5em] my-6 m-10" src={sponsor.img} alt={sponsor.title}></img>)
  }

  return (
    <div className="bg-white w-full place-items-center px-10 lg:py-10">
      <h2 className="text-lipstick-700 p-4 lg:mx-10 uppercase font-sans tracking-[0.225em] font-extrabold lg:text-xl text-center">Unsere Sponsoren</h2>
      <ul className="flex flex-row flex-wrap grow-0 justify-evenly list-none text-center">
        {sponsors.map( (s,i) => <li key={i}><Logo sponsor={s} /></li> )}
      </ul>
    </div>
  )
}
