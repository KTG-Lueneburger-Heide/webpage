'use client'

import  Cookies  from 'js-cookie';
import { useEffect, useState } from 'react';
import { RegistrationDialog } from './registration';

export default function MembersPage() {

  const [apiToken,setApiToken] = useState<string>();

  const [initPhase, setInitPhase] = useState(true); 

  useEffect( () => {
    // Cookies.set('credentials', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjb250YWN0X2lkIjpbIjY3NDQ0Y2UxMjU3ZGY3NGNhMjhkOGE4YiJdLCJpYXQiOjE3Mzk4MzExODYsImV4cCI6MTc3MTM2NzE4NiwiZW1haWwiOiJrcmFtZXIuZGVuaXNAZ21haWwuY29tIn0.pm00MAWC1IXeSiu6aQQfDlh2-X16GUofe3cOnSxDJyM')
    setApiToken(Cookies.get('credentials'));
    setInitPhase(false);
  })
  
  return (
    <div className='w-screen min-h-screen parallax-pink-splash-sm md:parallax-pink-splash-md xl:parallax-pink-splash-xl portrait:parallax-pink-splash-portrait-sm portrait:md:parallax-pink-splash-portrait-md portrait:xl:parallax-pink-splash-portrait-xl pt-20 lg:pt-32 pb-20 text-center flex flex-col justify-center'>
      <div className=""><h2 className="title inline-block">Mitgliederbereich</h2></div>
      { initPhase ? <></> : apiToken ? <div>Member page</div> : <RegistrationDialog/> }
    </div>
  )
}