import { BalanceBeam } from "@/components/icons/gymnasts"
import LoadingIcon, { SuccessIcon } from "@/components/icons/loading"
import { HeaderTransparencyBorder } from "@/components/visuals/header"
import Link from "next/link"
import { PropsWithChildren } from "react"

export default function JoinPage() {

  const Enum = ({number, title, children} : PropsWithChildren<{number: string, title: string}>) => (
    <div className="mt-4 mb-3">
      <span className="font-bold w-0 inline-block overflow-visible text-oxford-blue-200">{number}.</span><span className="mx-5 font-bold text-oxford-blue-200">{title}</span>
      <div className="mx-5 text-sm mt-2 mb-3">{children}</div>
    </div>
  )

  return (
    <div className="w-screen min-h-screen parallax-pink-splash-sm md:parallax-pink-splash-md xl:parallax-pink-splash-xl portrait:parallax-pink-splash-portrait-sm portrait:md:parallax-pink-splash-portrait-md portrait:xl:parallax-pink-splash-portrait-xl pt-20 lg:pt-32 pb-20 text-center flex flex-col justify-center">
      <div className=""><h2 className="title inline-block">Impressum</h2></div>
      <HeaderTransparencyBorder />
      
      <div className="text-left lg:px-20 px-5 relative animate-blend-in animation-delay-400 opacity-0">
      <h3 className="text-lg font-bold mt-10 mb-2">Anschrift</h3> 
      <p>Kunstturngemeinschaft Lüneburger Heide e.V.</p>
      
      <p>E-Mail: info@ktg-lueneburger-heide.de</p>

      <h3 className="text-lg font-bold mt-10 mb-2">Satzung</h3>

      Die Satzung des Vereins kann <Link className="underline underline-offset-2" href="/docs/20240724_Satzung_KTG_Final.pdf">hier heruntergeladen</Link> werden.

      <h3 className="text-lg font-bold mt-10 mb-2">Internetauftritt</h3>

      <h4 className="font-bold mt-3 mb-2 text-oxford-blue-200">Informationen i.S.v. § 5 DDG</h4>
      <p>Die KTG Lüneburger Heide wird satzungsgemäß vertreten durch den Vorstand. Der Vorstand wird vertreten durch ihren Vorsitzenden, Michail Saatmann.</p>
      <p>Geschäftsführung: </p>
      </div>
    </div>
  )
}