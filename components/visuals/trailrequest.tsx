"use client"

import { useState } from "react"

import Config from '@/app/app.config'

import path from 'path'

enum FormState {SUBMITTED, SUBMITTING, ERROR, INITIAL}

export default function TrialRequestForm() {

  const [formState, setFormState] = useState(FormState.INITIAL)

  const Form = () => {

    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const submitFormData = async () => {

      const payload = JSON.stringify({
        email : email,
        message: message
      })

      const headers = new Headers();
      headers.append("Content-Type", "application/json")
      try {
        const res = await fetch(new URL("/v1/contact", Config.api.endpoint), {
          method: "POST",
          headers: headers,
          body: payload
        })
        setFormState(FormState.SUBMITTED)
      } catch (err) {
        setFormState(FormState.ERROR)
      }
    }
  
    const handleSubmission = async () => {
      setFormState(FormState.SUBMITTING)
      submitFormData()
    }

    return (
      <form className={`grid grid-rows-5 md:grid-rows-2 md:grid-cols-3 gap-5 ${formState == FormState.SUBMITTING ? 'isSubmitting ' : ''} ${formState === FormState.ERROR ? 'hasError ' : ''} ${formState === FormState.SUBMITTED ? 'isSubmitted ' : ''}`} onSubmit={handleSubmission}>
        <textarea className="md:col-span-3 row-span-4 text-base md:text-2xl bg-opacity-10 bg-oxford-blue-300 p-2 border-white border-solid border-2 rounded-md" 
                rows={6}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                required />
        <input className="md:col-span-2 text-base md:text-2xl bg-opacity-10 bg-oxford-blue-300 p-2 border-white border-solid border-2 rounded-md invalid:[&:not(:placeholder-shown):not(:focus)]:border-lipstick-700 peer" 
                type="email" 
                placeholder="meine@email.de" 
                pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required />
        <button className="text-sm md:text-base bg-lipstick-800 hover:bg-lipstick-600 tracking-widest rounded peer-invalid:bg-black-300 peer-invalid:bg-opacity-30 peer-invalid:text-black-300 peer-invalid:pointer-events-none peer-invalid:cursor-pointer min-h-12">Senden</button>
      </form>
    )
  }

  return (
    <Form/>
  )
}