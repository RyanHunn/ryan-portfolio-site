// tweaks.jsx — in-design Tweaks panel for the portfolio
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#b5311f",
  "ground": ["#e7ddc6", "#f1e9d6", "#ddd0b3"],
  "monogram": "square",
  "diagonals": true,
  "motion": true
}/*EDITMODE-END*/;

function Tweaks() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--red', t.accent);
    const g = t.ground || [];
    if (g[0]) root.style.setProperty('--ground', g[0]);
    if (g[1]) root.style.setProperty('--ground-2', g[1]);
    if (g[2]) root.style.setProperty('--ground-3', g[2]);
    root.classList.remove('mono-circle', 'mono-outline', 'mono-solid');
    if (t.monogram === 'circle') root.classList.add('mono-circle');
    else if (t.monogram === 'outline') root.classList.add('mono-outline');
    else if (t.monogram === 'solid') root.classList.add('mono-solid');
    root.classList.toggle('no-diag', !t.diagonals);
    root.classList.toggle('no-motion', !t.motion);
  }, [t.accent, JSON.stringify(t.ground), t.monogram, t.diagonals, t.motion]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Ink & paper" />
      <TweakColor label="Accent ink" value={t.accent}
        options={['#b5311f', '#bd8a2c', '#9c4426', '#5b6b4a', '#356a6a']}
        onChange={(v) => setTweak('accent', v)} />
      <TweakColor label="Paper tone" value={t.ground}
        options={[
          ['#e7ddc6', '#f1e9d6', '#ddd0b3'],
          ['#e2d4b6', '#ede0c4', '#d4c2a0'],
          ['#efe7d4', '#f7f0e0', '#e2d6bd'],
        ]}
        onChange={(v) => setTweak('ground', v)} />
      <TweakSection label="Monogram" />
      <TweakSelect label="Mark style" value={t.monogram}
        options={['square', 'circle', 'outline', 'solid']}
        onChange={(v) => setTweak('monogram', v)} />
      <TweakSection label="Composition" />
      <TweakToggle label="Diagonal accents" value={t.diagonals}
        onChange={(v) => setTweak('diagonals', v)} />
      <TweakToggle label="Motion / reveals" value={t.motion}
        onChange={(v) => setTweak('motion', v)} />
    </TweaksPanel>
  );
}
window.Tweaks = Tweaks;
