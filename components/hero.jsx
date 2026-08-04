// hero.jsx — Prairie/Bauhaus opening
function Hero() {
  // a Wright-style art-glass tower built from rectangles
  const ArtGlassTower = () => {
    const C = {
      o:'var(--ochre)', r:'var(--rust)', s:'var(--sage)', t:'var(--teal)',
      red:'var(--red)', g:'var(--ground-2)', ink:'var(--ink)',
    };
    const cell = (bg, gr, gc, extra={}) => ({
      gridRow:gr, gridColumn:gc, background:bg, ...extra,
    });
    return (
      <div style={{
        display:'grid',
        gridTemplateColumns:'repeat(6, 1fr)',
        gridTemplateRows:'repeat(10, 1fr)',
        gap:6, width:'100%', height:'100%',
        border:'2px solid var(--ink)', background:'var(--ink)', padding:6,
      }}>
        <div style={cell(C.g, '1 / 4', '1 / 5')} />
        <div style={cell(C.o, '1 / 3', '5 / 7')} />
        <div style={cell(C.g, '3 / 6', '5 / 7')} />
        <div style={cell(C.r, '4 / 7', '1 / 3')} />
        <div style={cell(C.g, '4 / 6', '3 / 5')} />
        <div style={cell(C.s, '6 / 9', '3 / 7')} />
        <div style={cell(C.g, '7 / 11', '1 / 3')} />
        <div style={cell(C.t, '9 / 11', '3 / 5')} />
        <div style={cell(C.g, '9 / 11', '5 / 7')} />
        {/* the red boss */}
        <div style={cell(C.red, '3 / 4', '5 / 6')} />
      </div>
    );
  };

  return (
    <section id="top" ref={useReveal()} style={{ position:'relative', minHeight:'100vh', display:'flex', alignItems:'center', overflow:'hidden' }}>
      {/* horizontal Prairie rules */}
      <div style={{ position:'absolute', left:0, right:0, top:'24%', height:1, background:'var(--line)' }} />
      <div style={{ position:'absolute', left:0, right:0, bottom:'18%', height:1, background:'var(--line)' }} />
      {/* red diagonal (letterpress) */}
      <div className="diag" style={{ top:'-10%', left:'58%', width:2, height:'130%', background:'var(--red)', transform:'rotate(18deg)' }} />

      <div className="wrap" style={{ width:'100%', paddingTop:96 }}>
        {/* kicker */}
        <div className="kicker reveal" style={{ color:'var(--rust)', marginBottom:22 }}>
          Vienna · MMXXV
        </div>
        {/* name — one line, full width */}
        <h1 className="reveal" style={{ fontFamily:'var(--deco)', lineHeight:0.9, margin:0, fontSize:'clamp(38px,9.4vw,150px)', letterSpacing:'0.005em', whiteSpace:'nowrap', color:'var(--ink)' }}>
          R.&nbsp;Hunneshagen
        </h1>

        <div style={{ display:'grid', gridTemplateColumns:'1.5fr 1fr', gap:60, alignItems:'center', marginTop:38 }}>
          {/* left — type */}
          <div>
            <div className="reveal" style={{ display:'flex', gap:0, flexDirection:'column', fontFamily:'var(--deco)', fontSize:'clamp(28px,3.4vw,48px)', lineHeight:1.02 }}>
              <span style={{ color:'var(--rust)' }}>Copywriter.</span>
              <span style={{ color:'var(--sage)', marginLeft:'1.6em' }}>Strategist.</span>
              <span style={{ color:'var(--ochre)', marginLeft:'3.2em' }}>Essayist.</span>
            </div>
            <p className="reveal" style={{ fontFamily:'var(--serif)', fontSize:21, fontStyle:'italic', color:'var(--ink-soft)', maxWidth:460, marginTop:30 }}>
              Let's find your voice and develop it to say exactly what you want,
              clearly.
            </p>
            <div className="reveal" style={{ display:'flex', gap:16, marginTop:32 }}>
              <a href="#contact" className="btn btn-red">CONTACT RYAN</a>
            </div>
          </div>

          {/* right — art glass */}
          <div className="reveal" style={{ height:'min(64vh, 520px)' }}>
            <ArtGlassTower />
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <div style={{ position:'absolute', bottom:30, left:'50%', transform:'translateX(-50%)', fontFamily:'var(--sans)', fontSize:11, letterSpacing:'0.32em', textTransform:'uppercase', color:'var(--ink-soft)' }}>
        Scroll ↓
      </div>
    </section>
  );
}
window.Hero = Hero;
