import type { SocialMedia } from '@/data/datatypes'
import social from '@/data/socialmedia.yaml'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function SocialMedia() {

  return (
    <div className='bg-oxford-blue-900 w-full text-oxford-blue-400'>
      <ul className='flex p-4 text-5xl justify-center'>
        {social.facebook ? <li className='px-10 py-10'><a className='hover:text-oxford-blue-300' href={social.facebook}><FontAwesomeIcon icon={faFacebook}/></a></li> : <></>}
        {social.instagram ? <li className='px-10 py-10'><a className='hover:text-oxford-blue-300' href={social.instagram}><FontAwesomeIcon icon={faInstagram}/></a></li> : <></>}
      </ul>
    </div>
  )
}