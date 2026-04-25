import { useEffect, useState } from 'react'
import gsap from 'gsap'

export function useGreetings(helloTextRef) {
  const greetings = [
    { text: 'Hello', lang: 'English' },
    { text: 'नमस्ते', lang: 'Hindi' },
    { text: 'नमस्कार', lang: 'Marathi' },
    { text: 'ನಮಸ್ಕಾರ', lang: 'Kannada' },
    { text: 'வணக்கம்', lang: 'Tamil' },
    { text: 'నమస్కారం', lang: 'Telugu' },
    { text: 'ਸਤ ਸ੍ਰੀ ਅਕਾਲ', lang: 'Punjabi' },
    { text: 'નમસ્તે', lang: 'Gujarati' },
    { text: 'Bonjour', lang: 'French' },
    { text: 'Hola', lang: 'Spanish' },
    { text: 'こんにちは', lang: 'Japanese' },
    { text: '你好', lang: 'Chinese' },
  ]

  const [currentGreeting, setCurrentGreeting] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreeting(prev => (prev + 1) % greetings.length)
    }, 2500)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (!helloTextRef.current) return

    gsap.fromTo(
      helloTextRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
    )
  }, [currentGreeting])

  return { greetings, currentGreeting }
}