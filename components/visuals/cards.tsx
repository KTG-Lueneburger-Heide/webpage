import ReactMarkdown from "react-markdown"

import styles from "./cards.module.css"

export type TrainerCardProps = {
  name: string,
  image?: string,
  teams?: string[],
  license?: string,
  text?: string
}



export default function TrainerCard( data : TrainerCardProps ) {

  const LicenseBatch = ( {type} : {type: string} ) => {
    return (
      <div className={styles.license}>
        <div className={styles.type}>{ type }</div>
        <div>Lizenz</div>
      </div>
    )
  }

  const Picture = ( {url} : {url: string} ) => {
    return (
      <><img src={url} loading="lazy"/><div className={styles.line} /></>
    )
  }

  const Teams = ( {teams} : { teams: string[]} ) => {
    return (
      <div className={styles.team}>
        <div className={styles.teamTitle}>Team{teams && teams.length > 1 ? "s" : ""}:</div>
        { teams ? teams.map( (t,i) => <div className={styles.tag} key="i">{t}</div> ) : <></> }
      </div>
    )
  }

  return (
    <div className={styles.card}>
        { data.license ? <LicenseBatch type={data.license} /> : <></>}
        <div className={styles.imgBx}>
          { data.image ? <Picture url={data.image} /> : <></>}
        </div>
        <div className={styles.contentBx}>
          <h2>{ data.name }</h2>
          {data.teams && data.teams.length > 0 ? <Teams teams={data.teams} /> : <></>}
          <div className={styles.description}>
            <ReactMarkdown>{data.text}</ReactMarkdown>
          </div>
        </div>
      </div>  
  )

}

export type ContactCardProps = {
  name: string,
  image: string
}

export function ContactCard( {name,image} : ContactCardProps ) {

  const Picture = ( {url} : {url: string} ) => {
    return (
      <><img src={url} loading="lazy"/></>
    )
  }

  return (
    <div className={styles.contact}>
        <div className={styles.imgRoundBx}>
          { image ? <Picture url={image} /> : <></>}
        </div>
        <div className={styles.contentBx}>
          <h2>{ name }</h2>
        </div>
      </div>  
  )

}