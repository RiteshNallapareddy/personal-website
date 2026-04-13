import { useEffect, useRef, useState } from 'react'
import '../styles/ScrollReveal.css'

function ScrollReveal({ children }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={visible ? "reveal visible" : "reveal"}>
      {children}
    </div>
  )
}

export default ScrollReveal