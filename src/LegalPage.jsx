import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const LEGAL_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Fraunces:ital,opsz,wght@0,9..144,300;1,9..144,400&display=swap');
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{background:#01030A;color:#F0F4FF;font-family:'Outfit',sans-serif;font-size:16px;line-height:1.7;-webkit-font-smoothing:antialiased}
.legal-bg{position:fixed;inset:0;z-index:0;pointer-events:none;background:radial-gradient(ellipse 80% 60% at 15% 20%,rgba(82,130,255,.05) 0%,transparent 60%),radial-gradient(ellipse 60% 50% at 85% 70%,rgba(162,89,255,.04) 0%,transparent 60%),#030712}
.legal-nav{position:sticky;top:0;z-index:50;background:rgba(1,3,10,.88);backdrop-filter:blur(28px);-webkit-backdrop-filter:blur(28px);border-bottom:1px solid rgba(255,255,255,.08);padding:16px 32px;display:flex;align-items:center;justify-content:space-between}
.legal-nav a{color:#F0F4FF;text-decoration:none;font-family:'Outfit',sans-serif}
.legal-logo{font-weight:800;font-size:18px;letter-spacing:-.01em}
.legal-logo span{background:linear-gradient(135deg,#5282FF,#A259FF);-webkit-background-clip:text;background-clip:text;color:transparent}
.legal-back{font-size:13px;color:rgba(240,244,255,.6);transition:color .2s}
.legal-back:hover{color:#F0F4FF}
.legal-wrap{position:relative;z-index:2;max-width:780px;margin:0 auto;padding:64px 32px 96px}
.legal-eyebrow{font-family:'IBM Plex Mono',monospace;font-size:10px;letter-spacing:.25em;text-transform:uppercase;color:#5282FF;margin-bottom:18px}
.legal-h1{font-family:'Outfit',sans-serif;font-weight:800;font-size:clamp(34px,4.5vw,52px);letter-spacing:-.025em;line-height:1.05;margin-bottom:14px}
.legal-h1 span{background:linear-gradient(90deg,#5282FF,#A259FF);-webkit-background-clip:text;background-clip:text;color:transparent}
.legal-sub{font-family:'Fraunces',serif;font-style:italic;font-weight:300;color:rgba(240,244,255,.7);font-size:18px;margin-bottom:14px}
.legal-meta{font-family:'IBM Plex Mono',monospace;font-size:11px;color:rgba(240,244,255,.4);letter-spacing:.06em;margin-bottom:48px;padding-bottom:24px;border-bottom:1px solid rgba(255,255,255,.08)}
.legal-content h2{font-family:'Outfit',sans-serif;font-weight:700;font-size:22px;letter-spacing:-.01em;margin:48px 0 14px;color:#F0F4FF}
.legal-content h3{font-family:'Outfit',sans-serif;font-weight:600;font-size:16px;letter-spacing:.01em;margin:28px 0 10px;color:#F0F4FF}
.legal-content p{color:rgba(240,244,255,.75);margin-bottom:14px;font-size:15px;line-height:1.75}
.legal-content ul{margin:0 0 18px 22px;color:rgba(240,244,255,.7);font-size:15px;line-height:1.75}
.legal-content li{margin-bottom:6px}
.legal-content strong{color:#F0F4FF;font-weight:600}
.legal-content a{color:#5282FF;text-decoration:underline;text-underline-offset:2px}
.legal-content a:hover{color:#7BA3FF}
.legal-content code{font-family:'IBM Plex Mono',monospace;font-size:13px;background:rgba(82,130,255,.08);border:1px solid rgba(82,130,255,.2);padding:2px 6px;border-radius:4px;color:#F0F4FF}
.legal-callout{background:rgba(82,130,255,.06);border:1px solid rgba(82,130,255,.18);border-left:3px solid #5282FF;border-radius:8px;padding:18px 22px;margin:24px 0;font-size:14px;color:rgba(240,244,255,.85);line-height:1.7}
.legal-callout strong{color:#5282FF;display:block;margin-bottom:6px;font-family:'IBM Plex Mono',monospace;font-size:10px;letter-spacing:.18em;text-transform:uppercase}
.legal-footer{border-top:1px solid rgba(255,255,255,.08);padding:36px 32px;background:rgba(6,14,28,.6);position:relative;z-index:2;text-align:center;font-family:'IBM Plex Mono',monospace;font-size:11px;color:rgba(240,244,255,.4);line-height:1.8}
.legal-footer a{color:#5282FF;text-decoration:none;margin:0 8px}
.legal-footer a:hover{text-decoration:underline}
@media(max-width:640px){.legal-nav,.legal-footer{padding-left:20px;padding-right:20px}.legal-wrap{padding:40px 20px 64px}}
`;

export default function LegalPage({ eyebrow, title, titleAccent, subtitle, lastUpdated, children }) {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <>
      <style>{LEGAL_CSS}</style>
      <div className="legal-bg" />
      <nav className="legal-nav">
        <Link to="/" className="legal-logo">Xaecco<span>X</span></Link>
        <Link to="/" className="legal-back">← Back to home</Link>
      </nav>
      <main className="legal-wrap">
        <div className="legal-eyebrow">{eyebrow}</div>
        <h1 className="legal-h1">{title} {titleAccent && <span>{titleAccent}</span>}</h1>
        {subtitle && <p className="legal-sub">{subtitle}</p>}
        {lastUpdated && <div className="legal-meta">Last updated: {lastUpdated}</div>}
        <div className="legal-content">{children}</div>
      </main>
      <footer className="legal-footer">
        © 2026 XaeccoX · Built corridor-first ·
        <Link to="/privacy">Privacy</Link>·
        <Link to="/terms">Terms</Link>·
        <a href="mailto:info@xaeccox.io">info@xaeccox.io</a>
      </footer>
    </>
  );
}
