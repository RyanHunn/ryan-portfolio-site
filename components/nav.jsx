// nav.jsx — sticky top navigation
const { useState: useStateNav, useEffect: useEffectNav } = React;
function Nav() {
  const [scrolled, setScrolled] = useStateNav(false);
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
      background: scrolled ? 'rgba(231,221,198,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(8px)' : 'none',
      borderBottom: scrolled ? '1.5px solid var(--ink)' : '1.5px solid transparent',
    }}>
      <div style={{
        maxWidth:'var(--maxw)', margin:'0 auto', padding:'0 56px', height:74,
        display:'flex', alignItems:'center', justifyContent:'space-between',
      }}>
        <a href="#top" style={{ textDecoration:'none', display:'flex', alignItems:'center', gap:13 }}>
          <span className="monogram"><span className="mono-letters">RH</span><i className="mono-accent" /></span>
          <span className="brand-word" style={{ fontFamily:'var(--sans)', fontSize:12, fontWeight:500, letterSpacing:'0.24em', textTransform:'uppercase', color:'var(--ink)', whiteSpace:'nowrap' }}></span>
        </a>
        <nav style={{ display:'flex', alignItems:'center', gap:30 }}>
          {links.map(([l, h]) => (
            <a key={l} href={h} className="nav-link" style={{
              fontFamily:'var(--sans)', fontSize:12, letterSpacing:'0.18em',
              textTransform:'uppercase', textDecoration:'none', color:'var(--ink)',
              paddingBottom:3, borderBottom:'1.5px solid transparent', transition:'border-color .2s, color .2s',
            }}>{l}</a>
          ))}
          <a href="#contact" className="btn btn-red" style={{ padding:'10px 20px' }}>Get in touch</a>
        </nav>
      </div>
    </header>
  );
}
window.Nav = Nav;
