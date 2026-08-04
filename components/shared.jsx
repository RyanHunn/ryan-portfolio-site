// shared.jsx — reusable atoms for the portfolio
const { useState, useEffect, useRef } = React;

// scroll-reveal: rect-based scan (robust across contexts; IntersectionObserver
// can stay dormant in non-painting/offscreen documents).
let _revealInit = false;
function _revealScan() {
  const vh = window.innerHeight || document.documentElement.clientHeight;
  document.querySelectorAll('.reveal:not(.in)').forEach(n => {
    const r = n.getBoundingClientRect();
    if (r.top < vh * 0.9 && r.bottom > -40) n.classList.add('in');
  });
}
function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    if (!_revealInit) {
      _revealInit = true;
      const tick = () => requestAnimationFrame(_revealScan);
      window.addEventListener('scroll', tick, { passive: true });
      window.addEventListener('resize', tick);
      requestAnimationFrame(_revealScan);
      setTimeout(_revealScan, 250);
      setTimeout(_revealScan, 800);
    } else {
      requestAnimationFrame(_revealScan);
    }
  }, []);
  return ref;
}

// Numbered section header with asterisk + meta
function SectionHead({ num, title, meta }) {
  return (
    <div className="sec-head reveal">
      <span className="sec-num"></span>
      <h2 className="sec-title">{title} <span className="star">✳︎</span></h2>
      {meta && <div className="sec-meta">{meta}</div>}
    </div>
  );
}

// Wright-style rectilinear art-glass divider band
function ArtGlass({ flip }) {
  // a rhythmic row of colored verticals + small squares
  const palette = ['var(--ochre)','var(--rust)','var(--sage)','var(--ink)','var(--teal)'];
  const cells = [];
  const widths = [60,8,8,120,8,40,8,8,200,8,8,80,8,140,8,8,60,8,8,160,8,100,8,8,120,8,8,90,8,180];
  let ci = 0;
  widths.forEach((w, i) => {
    const isThin = w <= 8;
    cells.push(
      <i key={i} style={{
        flex: `0 0 ${w}px`,
        background: isThin ? palette[ci++ % palette.length] : 'transparent',
        borderRight: isThin ? 'none' : '1px solid var(--line)',
      }} />
    );
  });
  return (
    <div className="wrap">
      <div className="artglass" style={{ borderTop: '2px solid var(--ink)', borderBottom: '2px solid var(--ink)', transform: flip ? 'scaleX(-1)' : 'none' }}>
        {cells}
      </div>
    </div>
  );
}

// styled drop-target image placeholder
function Slot({ id, ratio = '16 / 9', label, src, fit, style = {} }) {
  return (
    <image-slot
      id={id}
      src={src}
      fit={fit || 'cover'}
      placeholder={label || 'Drop image'}
      style={{ display:'block', width:'100%', height:'auto', aspectRatio: ratio, ...style }}
    />
  );
}

Object.assign(window, { useReveal, SectionHead, ArtGlass, Slot });
