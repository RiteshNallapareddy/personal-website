import { useState, useEffect } from 'react'
import '../styles/Slideshow.css'

function Slideshow(props) {
  const { photos } = props
  const [photoIndex, setPhotoIndex] = useState(0)

  // Advance on an interval. All photos stay mounted and cross-fade with
  // opacity only, so nothing has to load or decode when the slide changes.
  useEffect(() => {
    if (photos.length < 2) return
    const timer = setInterval(() => {
      setPhotoIndex((i) => (i + 1) % photos.length)
    }, 3500)
    return () => clearInterval(timer)
  }, [photos.length])

  return (
    <div className="slideshow">
      {photos.map((src, i) => (
        <img
          key={src}
          src={src}
          alt="slideshow"
          decoding="async"
          loading={i === 0 ? 'eager' : 'lazy'}
          className={i === photoIndex ? 'slide visible' : 'slide'}
        />
      ))}
    </div>
  )
}

export default Slideshow
