/* global __VIDEOS__ */
import { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from './UI'

function BgVideo({ src, active }) {
  const ref = useRef(null)
  const [failed, setFailed] = useState(false)
  useEffect(() => {
    const v = ref.current
    if (!v) return
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const saveData = navigator.connection && navigator.connection.saveData
    if (active && !reduce && !saveData) { const p = v.play(); if (p && p.catch) p.catch(() => {}) } else v.pause()
  }, [active])
  if (failed || !__VIDEOS__.includes(src)) return null
  return (
    <video ref={ref} className="slide-video" src={src} muted loop playsInline preload="metadata" aria-hidden="true" tabIndex={-1} onError={() => setFailed(true)} />
  )
}

export default function HeroSlider({ slides }) {
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)
  const [hold, setHold] = useState(false)
  const n = slides.length
  const go = useCallback((k) => setI((k + n) % n), [n])

  useEffect(() => {
    if (paused || hold) return undefined
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return undefined
    const t = setInterval(() => setI((x) => (x + 1) % n), 8000)
    return () => clearInterval(t)
  }, [paused, hold, n])

  return (
    <section
      className="hero-slider"
      aria-roledescription="carousel"
      aria-label="Highlights"
      onMouseEnter={() => setHold(true)}
      onMouseLeave={() => setHold(false)}
      onFocus={() => setHold(true)}
      onBlur={() => setHold(false)}
    >
      {slides.map((s, k) => {
        const Heading = k === 0 ? 'h1' : 'h2'
        const active = k === i
        return (
          <div key={s.title} className={`slide${active ? ' active' : ''}`} role="group" aria-roledescription="slide" aria-label={`${k + 1} of ${n}`} aria-hidden={!active}>
            <img className="slide-bg" src={s.poster} alt="" width="1600" height="900" {...(k === 0 ? { fetchPriority: 'high' } : { loading: 'lazy' })} />
            <BgVideo src={s.video} active={active} />
            <div className="slide-shade" />
            <div className="container slide-copy">
              <p className="kicker">{s.kicker}</p>
              <Heading className="slide-title">{s.title}</Heading>
              <p className="slide-text">{s.text}</p>
              <Link className="btn btn-ghost" to={s.cta.to} tabIndex={active ? 0 : -1}>{s.cta.label} <Icon name="ArrowRight" size={18} /></Link>
            </div>
          </div>
        )
      })}

      <button type="button" className="slide-arrow prev" onClick={() => go(i - 1)} aria-label="Previous slide"><Icon name="ChevronLeft" size={26} /></button>
      <button type="button" className="slide-arrow next" onClick={() => go(i + 1)} aria-label="Next slide"><Icon name="ChevronRight" size={26} /></button>

      <div className="slide-controls">
        <button type="button" className="slide-pause" onClick={() => setPaused(!paused)} aria-label={paused ? 'Play slideshow' : 'Pause slideshow'}>
          <Icon name={paused ? 'Play' : 'Pause'} size={14} />
        </button>
        <div className="dots" role="tablist" aria-label="Choose slide">
          {slides.map((s, k) => (
            <button key={s.title} type="button" role="tab" aria-selected={k === i} aria-label={`Slide ${k + 1}`} className={k === i ? 'on' : ''} onClick={() => go(k)} />
          ))}
        </div>
      </div>
    </section>
  )
}
