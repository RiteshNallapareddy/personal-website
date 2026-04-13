import { useState, useEffect } from 'react'
import '../styles/Slideshow.css'

function Slideshow(props) {
  const [photoIndex, setPhotoIndex] = useState(0)
  const [visible, setVisible] = useState(true)

    useEffect(() => {
    const timer = setTimeout(() => {
        setVisible(false)
        setTimeout(() => {
        setPhotoIndex((photoIndex + 1) % props.photos.length)
        setVisible(true)
        }, 300)  // ← match the CSS transition time
    }, 3000)
    return () => clearTimeout(timer)
    }, [photoIndex])

  return (
    <div className="slideshow">
      <img
        src={props.photos[photoIndex]}
        alt="slideshow"
        className={visible ? "slide visible" : "slide"}
      />
    </div>
  )
}

export default Slideshow

