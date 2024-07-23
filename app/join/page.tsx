import { BalanceBeam } from "@/components/icons/gymnasts"
import TrialRequestForm from "@/components/visuals/trailrequest"

export default function JoinPage() {

  const submitTrailRequest = async (email : string) => {

  }

  return (
    <div className="w-screen min-h-screen parallax-pink-splash-sm md:parallax-pink-splash-md xl:parallax-pink-splash-xl portrait:parallax-pink-splash-portrait-sm portrait:md:parallax-pink-splash-portrait-md portrait:xl:parallax-pink-splash-portrait-xl pt-20 lg:pt-32 pb-20 text-center flex flex-col justify-center">
      <div className=""><h2 className="title inline-block">Mach mit</h2></div>
      <div className="h-1/2 m-10 portrait:m-5 p-5 md:p-10 bg-opacity-40 bg-oxford-blue-900 rounded-lg text-left flex items-center">
        <BalanceBeam className="h-[20em] w-[30em] portrait:hidden"/>
        <div>
          <p className="tracking-wider landscape:px-10 text-base lg:text-2xl">
            Gib uns einfach eine eMail Adresse unter der wir dich erreichen können. Wir verabreden dann einen Termin zum <b>Probetraining</b>, bei dem ihr mal Traingingsluft schnuppern könnt, 
            und bei dem wir dann alles Weitere besprechen.
          </p>
          <div className="m-10 portrait:mx-0">
            <TrialRequestForm />
          </div>
        </div>
      </div> 
      
    </div>
  )
}