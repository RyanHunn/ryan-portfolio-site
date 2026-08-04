// nav.jsx — sticky top navigation
const { useState: useStateNav, useEffect: useEffectNav } = React;
function Nav() {
  const [scrolled, setScrolled] = useStateNav(false);
  const [open, setOpen] = useStateNav(false);
  useEffectNav(() => {
    const on = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);

  const links = [
    ['Decks', '#decks'], ['Websites', '#websites'], ['Essays', '#essays'],
    ['Clients', '#clients'],
  ];

  return (
    <header style={{
      position:'fixed', top:0, left:0, right:0, zIndex:50,
      transition:'background .3s, box-shadow .3s, border-color .3s',
      background: (scrolled || open) ? 'rgba(231,221,198,0.96)' : 'transparent',
      backdropFilter: (scrolled || open) ? 'blur(8px)' : 'none',
      borderBottom: (scrolled || open) ? '1.5px solid var(--ink)' : '1.5px solid transparent',
    }}>
      <div className="nav-inner" style={{
        maxWidth:'var(--maxw)', margin:'0 auto', padding:'0 56px', height:74,
        display:'flex', alignItems:'center', justifyContent:'space-between',
      }}>
        <a href="#top" onClick={() => setOpen(false)} style={{ textDecoration:'none', display:'flex', alignItems:'center', gap:13 }}>
          <span className="monogram"><span className="mono-letters">RH</span><i className="mono-accent" /></span>
          <span className="brand-word" style={{ fontFamily:'var(--sans)', fontSize:12, fontWeight:500, letterSpacing:'0.24em', textTransform:'uppercase', color:'var(--ink)', whiteSpace:'nowrap' }}></span>
        </a>
        <nav className="nav-links" style={{ display:'flex', alignItems:'center', gap:30 }}>
          {links.map(([l, h]) => (
            <a key={l} href={h} className="nav-link" style={{
              fontFamily:'var(--sans)', fontSize:12, letterSpacing:'0.18em',
              textTransform:'uppercase', textDecoration:'none', color:'var(--ink)',
              paddingBottom:3, borderBottom:'1.5px solid transparent', transition:'border-color .2s, color .2s',
            }}>{l}</a>
          ))}
          <a href="#contact" className="btn btn-red" style={{ padding:'10px 20px' }}>Get in touch</a>
        </nav>
        <button
          className="nav-burger"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          style={{
            display:'none', flexDirection:'column', justifyContent:'center', alignItems:'center',
            gap:5, width:38, height:38, padding:0, border:'1.5px solid var(--ink)',
            background: open ? 'var(--ink)' : 'transparent', cursor:'pointer',
          }}
        >
          <span style={{ display:'block', width:18, height:1.5, background: open ? 'var(--ground-2)' : 'var(--ink)', transition:'transform .2s', transform: open ? 'translateY(3px) rotate(45deg)' : 'none' }} />
          <span style={{ display:'block', width:18, height:1.5, background: open ? 'var(--ground-2)' : 'var(--ink)', transition:'transform .2s', transform: open ? 'translateY(-3px) rotate(-45deg)' : 'none' }} />
        </button>
      </div>

      {open && (
        <div className="nav-mobile-panel" style={{
          display:'flex', flexDirection:'column', padding:'8px 24px 26px',
          borderTop:'1px solid var(--line)',
        }}>
          {links.map(([l, h]) => (
            <a key={l} href={h} onClick={() => setOpen(false)} style={{
              fontFamily:'var(--deco)', fontSize:26, textDecoration:'none', color:'var(--ink)',
              padding:'14px 0', borderBottom:'1px solid var(--line)',
            }}>{l}</a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="btn btn-red" style={{ marginTop:22, justifyContent:'center' }}>Get in touch</a>
        </div>
      )}
    </header>
  );
}
window.Nav = Nav;
