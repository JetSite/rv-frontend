'use client'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const EventPage = () => {
  const router = useRouter()

  useEffect(() => {
    router.push('/events/calendar')
  }, [])
  return <div></div>
}

export default EventPage
