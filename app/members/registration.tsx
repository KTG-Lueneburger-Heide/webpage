'use client'

import Error from "@/components/icons/error";
import Success from "@/components/icons/success";
import path from "path";
import { useState, PropsWithChildren } from "react";
import Config from "@/app/app.config";
import LoadingIcon from "@/components/icons/loading";

const EMAIL_REGEX = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;

enum RegistrationDialogStatus {
  PENDING,
  SUBMITTED,
  SUCCESS,
  ERROR
}

interface ButtonProps extends PropsWithChildren {
  onClick : () => void,
  disabled : boolean
}

export function RegistrationDialog() {

  const [status,setStatus] = useState<RegistrationDialogStatus>(RegistrationDialogStatus.PENDING);

  const Button = ( props : ButtonProps = { onClick: () => {}, disabled: false} ) => (
    <button className="bg-lipstick-500 hover:bg-lipstick-700 text-white font-bold py-2 px-4 rounded-md min-w-48 m-4 disabled:bg-black-600" 
            disabled={props.disabled}
            onClick={() => props.onClick() }>{props.children ? props.children : "Click Me"}</button>
  );

  const handleSubmission = async (email:string) => {

    const payload = JSON.stringify({ email })
    const headers = new Headers();
    headers.append("Content-Type", "application/json")
    const resp = await fetch(path.join(Config.api.endpoint, "authenticate_member"), {
      method: "POST",
      headers: headers,
      body: payload
    })
    
    setStatus(resp.ok ? RegistrationDialogStatus.SUCCESS : RegistrationDialogStatus.ERROR);
  }

  const EmailDialog = () => {
    const [email,setEmail] = useState<string>("");
    const [validEmail,setValidEmail] = useState<boolean>(false);
    
    const updateEmail = (value : string) => {
      setEmail(value);
      setValidEmail(EMAIL_REGEX.test(value));
    }

    const onClick = () => {
      setStatus(RegistrationDialogStatus.SUBMITTED);
      handleSubmission(email);
    }

    return (
      <>
        <div className="md:text-lg xl:text-xl mt-8">
          <p>Dieser Bereich ist für unsere Mitglieder.</p>
          <p>Bitte registriere dich mit deiner Email Addresse.</p>
          {validEmail}
        </div>
        <div className="flex flex-row items-center flex-grow mt-4">
          <div className="grid w-full md:grid-col-2 grid-col-1">
            <input className="peer text-base min-w-72 md:text-2xl bg-opacity-10 bg-oxford-blue-300 p-2 m-4 border-white border-solid border-2 rounded-md invalid:[&:not(:placeholder-shown):not(:focus)]:border-lipstick-700" 
                type="email" 
                placeholder="meine@email.de" 
                pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                value={email}
                onChange={(event) => updateEmail(event.target.value)}
                required />
            <Button onClick={ onClick } disabled={!validEmail}>Registrieren</Button>
          </div>
        </div>
      </>
    )
  };

  const SuccessDialog = () => (
    <>
      <div className="md:text-lg xl:text-xl m-2 mt-8 grid grid-col-1 gap-3">
        <Success style={{ strokeWidth:"5"}} height={"8rem"}/>
        <p>Vielen Dank für deine Anfrage.</p>
        <p>Wir haben dir eine Email geschickt.</p>
      </div>
    </>
  );

  const SubmittedDialog = () => (
    <>
      <div className="md:text-lg xl:text-xl m-2 mt-8 flex items-center w-full">
        <span className="flex-grow text-center"></span>
        <LoadingIcon />
        <span className="flex-grow text-center"></span>
      </div>
    </>
  );

  const ErrorDialog = () => (
    <>
      <div className="md:text-lg xl:text-xl mt-8 m-2 grid grid-col-1 gap-3">
        <Error height="8rem" style={{strokeWidth:"1"}}/>
        <p>Es ist ein Fehler aufgetreten.</p>
        <p>Bitte stelle sicher, dass du eine uns bekannte Email Addresse verwendest.</p>
        <Button onClick={() => setStatus(RegistrationDialogStatus.PENDING)} disabled={false}>Erneut versuchen</Button>
      </div>
    </>
  
  )

  return (
    <div className="flex flex-col items-center">
        <div className="min-h-[35dvh] flex flex-col rounded-md border-2 md:p-10 m-4 w-11/12 md:w-2/3 max-w-screen-lg bg-oxford-blue-900 text-center bg-opacity-80">
          { status == RegistrationDialogStatus.PENDING ? <EmailDialog/> : <></> }
          { status == RegistrationDialogStatus.SUCCESS ? <SuccessDialog/> : <></> }
          { status == RegistrationDialogStatus.ERROR ? <ErrorDialog/> : <></>}
          { status == RegistrationDialogStatus.SUBMITTED ? <SubmittedDialog/> : <></> }
        </div>

    </div>
  )

}