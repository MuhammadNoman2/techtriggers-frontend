import { Fragment, createElement, useEffect, useRef, useState } from 'react'
import { useInView } from './useInView'

// Everything here renders its final content on the server, so search engines and
// no-JavaScript visitors always see the text. The CSS only hides items for the
// animation after the page has loaded (see the `js` class in index.html).

const prefersReduced = () =>
  typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches

export function Reveal({ as: Tag = 'div', anim = 'up', delay = 0, className = '', children, ...rest }) {
  const [ref, seen] = useInView()
  return createElement(
    Tag,
    { ref, 'data-anim': anim, className: `reveal${seen ? ' in' : ''} ${className}`.trim(), style: { '--d': `${delay}ms` }, ...rest },
    children,
  )
}

// Headline whose words rise into view one after another. Words starting with * are highlighted.
export function SplitText({ as: Tag = 'h2', text, className = '', delay = 0, ...rest }) {
  const [ref, seen] = useInView(0.3)
  const words = text.split(' ')
  const plain = text.replace(/\*/g, '')
  return createElement(
    Tag,
    { ref, className: `split${seen ? ' in' : ''} ${className}`.trim(), 'aria-label': plain, ...rest },
    (() => {
      let inHl = false
      return words.map((w, i) => {
        let word = w
        if (word.startsWith('*')) { inHl = true; word = word.slice(1) }
        const closes = word.endsWith('*')
        if (closes) word = word.slice(0, -1)
        const hl = inHl
        if (closes) inHl = false
        return (
          <Fragment key={i}>
            <span className="w" aria-hidden="true">
              <span className={hl ? 'hl' : undefined} style={{ '--i': i + delay }}>{word}</span>
            </span>
            {i < words.length - 1 ? ' ' : null}
          </Fragment>
        )
      })
    })(),
  )
}

export function CountUp({ to, suffix = '', duration = 1700 }) {
  const [ref, seen] = useInView(0.5)
  const [val, setVal] = useState(to)
  useEffect(() => {
    if (!seen || prefersReduced()) return undefined
    let raf
    let start
    const tick = (t) => {
      if (start === undefined) start = t
      const k = Math.min(1, (t - start) / duration)
      const eased = 1 - Math.pow(1 - k, 3)
      setVal(Math.round(to * eased))
      if (k < 1) raf = requestAnimationFrame(tick)
    }
    setVal(0)
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [seen, to, duration])
  return <span ref={ref}>{val.toLocaleString('en-US')}{suffix}</span>
}

export function ScrollProgress() {
  const bar = useRef(null)
  useEffect(() => {
    let raf = 0
    const update = () => {
      raf = 0
      const h = document.documentElement.scrollHeight - window.innerHeight
      const k = h > 0 ? Math.min(1, window.scrollY / h) : 0
      if (bar.current) bar.current.style.transform = `scaleX(${k})`
    }
    const on = () => { if (!raf) raf = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', on, { passive: true })
    window.addEventListener('resize', on)
    return () => { window.removeEventListener('scroll', on); window.removeEventListener('resize', on) }
  }, [])
  return <div className="progress" aria-hidden="true"><span ref={bar} /></div>
}

export function Carousel({ children, label }) {
  const track = useRef(null)
  const go = (dir) => {
    const el = track.current
    if (!el) return
    const step = Math.max(280, el.clientWidth * 0.8)
    el.scrollBy({ left: dir * step, behavior: 'smooth' })
  }
  return (
    <div className="carousel" role="region" aria-label={label}>
      <div className="carousel-track" ref={track} tabIndex={0}>{children}</div>
      <div className="carousel-nav">
        <button type="button" onClick={() => go(-1)} aria-label="Previous">&larr;</button>
        <button type="button" onClick={() => go(1)} aria-label="Next">&rarr;</button>
      </div>
    </div>
  )
}
