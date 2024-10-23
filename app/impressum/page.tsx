import { BalanceBeam } from "@/components/icons/gymnasts"
import LoadingIcon, { SuccessIcon } from "@/components/icons/loading"
import { HeaderTransparencyBorder } from "@/components/visuals/header"
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
      <p>Kunstturngemeinschaft Lüneburger Heide (Verein in Gründung)</p>
      
      <p>E-Mail: ktg.lueneburger.heide@gmail.com</p>

      <h3 className="text-lg font-bold mt-10 mb-2">Internetauftritt</h3>

      <h4 className="font-bold mt-3 mb-2 text-oxford-blue-200">Informationen i.S.v. § 5 DDG</h4>
      <p>Die KTG Lüneburger Heide wird satzungsgemäß vertreten durch den Vorstand. Der Vorstand wird vertreten durch ihre Vorsitzende, Kristina von Tronchin.</p>
      <p>Geschäftsführung: Antje Kramer</p>

      <h4 className="font-bold mt-5 mb-2 text-oxford-blue-200">Technische Umsetzung/Gestaltung</h4>
      Die Webseite wurde 2024 von Denis Kramer erstellt.

      <h4 className="font-bold mt-5 mb-2 text-oxford-blue-200">Verantwortliche für Abteilungs- und Unterbereiche</h4>
      Verantwortlich für die Inhalte sind die jeweiligen Autoren der Beiträge.
      Zudem werden Teile des Internetauftritts von den Abteilungen des Vereins inhaltlich in eigener Verantwortung gepflegt.

      <h3 className="text-lg font-bold mt-10 mb-2">Haftungsausschluss</h3>

      <Enum number="1" title="Inhalt des Onlineangebotes">
      Der Autor übernimmt keinerlei Gewähr für die Aktualität, Korrektheit, Vollständigkeit oder Qualität der bereitgestellten Informationen. Haftungsansprüche gegen den Autor, welche sich auf Schäden materieller oder ideeller Art beziehen, die durch die Nutzung oder Nichtnutzung der dargebotenen Informationen bzw. durch die Nutzung fehlerhafter und unvollständiger Informationen verursacht wurden, sind grundsätzlich ausgeschlossen, sofern seitens des Autors kein nachweislich vorsätzliches oder grob fahrlässiges Verschulden vorliegt. Alle Angebote sind freibleibend und unverbindlich. Der Autor behält es sich ausdrücklich vor, Teile der Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.
      </Enum>

      <Enum number="2" title="Verweise und Links">
      Bei direkten oder indirekten Verweisen auf fremde Internetseiten („Links“), die außerhalb des Verantwortungsbereiches des Autors liegen, würde eine Haftungsverpflichtung ausschließlich in dem Fall in Kraft treten, in dem der Autor von den Inhalten Kenntnis hat und es ihm technisch möglich und zumutbar wäre, die Nutzung im Falle rechtswidriger Inhalte zu verhindern. Der Autor erklärt hiermit ausdrücklich, dass zum Zeitpunkt der Linksetzung keine illegalen Inhalte auf den zu verlinkenden Seiten erkennbar waren. Auf die aktuelle und zukünftige Gestaltung, die Inhalte oder die Urheberschaft der gelinkten/verknüpften Seiten hat der Autor keinerlei Einfluss. Deshalb distanziert er sich hiermit ausdrücklich von allen Inhalten aller gelinkten /verknüpften Seiten, die nach der Linksetzung verändert wurden. Diese Feststellung gilt für alle innerhalb des eigenen Internetangebotes gesetzten Links und Verweise sowie für Fremdeinträge in vom Autor eingerichteten Gästebüchern, Diskussionsforen und Mailinglisten. Für illegale, fehlerhafte oder unvollständige Inhalte und insbesondere für Schäden, die aus der Nutzung oder Nichtnutzung solcherart dargebotener Informationen entstehen, haftet allein der Anbieter der Seite, auf welche verwiesen wurde, nicht derjenige, der über Links auf die jeweilige Veröffentlichung lediglich verweist.
      </Enum>

      <Enum number="3" title="Urheber- und Kennzeichenrecht">
      Der Autor ist bestrebt, in allen Publikationen die Urheberrechte der verwendeten Grafiken, Tondokumente, Videosequenzen und Texte zu beachten, von ihm selbst erstellte Grafiken, Tondokumente, Videosequenzen und Texte zu nutzen oder auf lizenzfreie Grafiken, Tondokumente, Videosequenzen und Texte zurückzugreifen. Alle innerhalb des Internetangebotes genannten und ggf. durch Dritte geschützten Marken- und Warenzeichen unterliegen uneingeschränkt den Bestimmungen des jeweils gültigen Kennzeichenrechts und den Besitzrechten der jeweiligen eingetragenen Eigentümer. Allein aufgrund der bloßen Nennung ist nicht der Schluß zu ziehen, dass Markenzeichen nicht durch Rechte Dritter geschützt sind! Das Copyright für veröffentlichte, vom Autor selbst erstellte Objekte bleibt allein beim Autor der Seiten. Eine Vervielfältigung oder Verwendung solcher Grafiken, Tondokumente, Videosequenzen und Texte in anderen elektronischen oder gedruckten Publikationen ist ohne ausdrückliche Zustimmung des Autors nicht gestattet.
      </Enum>

      <Enum number="4" title="Datenschutz">
      Sofern innerhalb des Internetangebotes die Möglichkeit zur Eingabe persönlicher oder geschäftlicher Daten (Emailadressen, Namen, Anschriften) besteht, so erfolgt die Preisgabe dieser Daten seitens des Nutzers auf ausdrücklich freiwilliger Basis. Die Inanspruchnahme und Bezahlung aller angebotenen Dienste ist – soweit technisch möglich und zumutbar – auch ohne Angabe solcher Daten bzw. unter Angabe anonymisierter Daten oder eines Pseudonyms gestattet.
      </Enum>

      <Enum number="5" title="Rechtswirksamkeit dieses Haftungsausschlusses">
      Dieser Haftungsausschluss ist als Teil des Internetangebotes zu betrachten, von dem aus auf diese Seite verwiesen wurde. Sofern Teile oder einzelne Formulierungen dieses Textes der geltenden Rechtslage nicht, nicht mehr oder nicht vollständig entsprechen sollten, bleiben die übrigen Teile des Dokumentes in ihrem Inhalt und ihrer Gültigkeit davon unberührt.
      </Enum>
      </div>
    </div>
  )
}