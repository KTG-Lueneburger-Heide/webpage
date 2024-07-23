"use client"

import { useState } from "react"

import Config from '@/app/app.config'

import path from 'path'

export default function TrialRequestForm() {

  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)
  const [submitting, setSubmitting] = useState(false)


  const Form = () => {

    const [email, setEmail] = useState('')

    const submitFormData = () => {

      const payload = JSON.stringify({
        formData :{Frage1: email}
      })

      /*
        We use the older XHR API here, because the new fetch API could not properly 
        implement CORS. This is probably due to a misspelled header value (Access-Control-Request-Headers: "contenttype" instead of "content-type")

        For reference, the fetch API implementation would look like this:
          
          const headers = new Headers();
          headers.append("Content-Type", "application/json")
          return fetch(path.join(Config.campai.endpoint, "formSubmissions", Config.campai.trial_form_id), {
            method: "POST",
            headers: headers,
            body: payload
          })
      */
      const xhr = new XMLHttpRequest(); 
      xhr.open('POST', path.join(Config.campai.endpoint, "formSubmissions", Config.campai.trial_form_id))
      xhr.setRequestHeader("Content-Type", "application/json")
      xhr.onload = (e) => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            setSubmitted(true)
        } else {
          setError(true)
        }
      }
      xhr.send(payload)
    }
  
    const handleSubmission = async () => {
      setSubmitting(true)
      submitFormData()
    }

    return (
      <form className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-3 gap-5" onSubmit={handleSubmission}>
        <input className="md:col-span-2 text-base md:text-2xl bg-opacity-10 bg-oxford-blue-300 p-2 border-white border-solid border-2 rounded-md invalid:[&:not(:placeholder-shown):not(:focus)]:border-lipstick-700 peer" 
                type="email" 
                placeholder="meine@email.de" 
                pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required />
        <button className="text-sm md:text-base bg-lipstick-800 hover:bg-lipstick-600 tracking-widest rounded peer-invalid:bg-black-300 peer-invalid:bg-opacity-30 peer-invalid:text-black-300 peer-invalid:pointer-events-none peer-invalid:cursor-pointer">Senden</button>
      </form>
      )}

  const Thanks = () => (
    <div className="text-center md:text-2xl text-oxford-blue-200 py-3">Danke! Wir melden uns bei dir</div>
  )

  const Error = () => {
    <div className="text-center text-2xl text-lipstick-700-blue-200 py-3">Ups! Da ist was schief gegangen. Bitte schickt uns eine eMail an ktg@lueneburger-heide.de</div>
  }
  return (
    !submitted ? <Form/> : <Thanks/>
  )
}