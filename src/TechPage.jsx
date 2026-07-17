import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { G } from './styles';

export default function TechPage() {
  const [scrolled, setScrolled] = useState(false);
  const refs = useRef([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const onS = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onS, { passive: true });
    return () => window.removeEventListener('scroll', onS);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('v'); }),
      { threshold: 0.1 }
    );
    refs.current.forEach(r => r && obs.observe(r));
    return () => obs.disconnect();
  }, []);

  const r = el => { if (el && !refs.current.includes(el)) refs.current.push(el); };
  const go = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <>
      <style>{G}</style>
      <div className="mesh-bg" />

      <nav className={scrolled ? 'sc' : ''}>
        <Link to="/" className="logo" style={{ textDecoration: 'none' }}>
          Xaecco<span className="logo-x">X</span>
          <span className="logo-badge">Tech</span>
        </Link>
        <ul className="nav-links">
          <li><a onClick={() => go('products')} style={{ cursor: 'pointer' }}>Products</a></li>
          <li><a onClick={() => go('consulting')} style={{ cursor: 'pointer' }}>Consulting</a></li>
          <li><a onClick={() => go('agents')} style={{ cursor: 'pointer' }}>Agents</a></li>
          <li><Link to="/" style={{ color: 'var(--w3)', textDecoration: 'none' }}>← XaeccoX</Link></li>
        </ul>
        <div className="nav-right">
          <a href="mailto:info@xaeccox.io?subject=XaeTech%20inquiry" className="btn-nav-cta" style={{ textDecoration: 'none', display: 'inline-block' }}>Talk to us</a>
        </div>
      </nav>

      <section id="hero-tech" style={{ padding: '160px 72px 100px', position: 'relative', zIndex: 2, overflow: 'hidden' }}>
        <div className="hero-glow" style={{ right: '5%', top: '20%' }} />
        <div style={{ maxWidth: 900 }}>
          <div className="hero-status">
            <span className="hs-dot" /><span className="hs-txt">The Tech + AI Arm of XAECCOX LLC</span>
          </div>
          <h1 className="hero-h">
            Software, AI, and integration<br />
            for <span className="arc">cross-border commerce.</span>
            <span className="serif">Products, consulting, and agentic tooling built by operators who ship containers between Lagos and the US every week.</span>
          </h1>
          <p className="hero-desc" style={{ maxWidth: 620 }}>
            XaeTech is the software and AI products company under XAECCOX LLC. We build the infrastructure that powers XaeccoX's own trade operations — and license it to licensed operators, businesses, and enterprises across the corridor.
          </p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => go('consulting')}>Book a diagnostic</button>
            <button className="btn-secondary" onClick={() => go('products')}>Explore products →</button>
          </div>
        </div>
      </section>

      <section id="products">
        <div className="fu" ref={r}>
          <div className="stag">Products</div>
          <h2 className="sh">Three products,<br /><span className="acc">one operating layer.</span></h2>
          <p className="sdesc">Each product solves one crisp problem in cross-border commerce. Built for XaeccoX; licensed to operators, businesses, and integrators.</p>
        </div>

        <div className="fu" ref={r} style={{ marginTop: 60, display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div className="market-card" style={{ padding: '44px 48px', '--accent': 'linear-gradient(90deg,#5282FF,#A259FF)', '--ghost-c': '#5282FF' }} data-ghost="PAY">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
              <span style={{ fontFamily: 'var(--fm)', fontSize: 8.5, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--jade)', background: 'rgba(0,214,143,.08)', border: '1px solid rgba(0,214,143,.25)', padding: '4px 10px', borderRadius: 'var(--rpill)' }}>Live · Selling now</span>
            </div>
            <div className="mc-title" style={{ fontSize: 32, marginBottom: 8, background: 'linear-gradient(90deg,var(--blu),var(--vio))', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>XaePay</div>
            <div style={{ fontFamily: 'var(--fb)', fontStyle: 'italic', fontWeight: 300, fontSize: 17, color: 'var(--w2)', marginBottom: 16 }}>The operating layer for cross-border payments.</div>
            <div className="mc-desc" style={{ fontSize: 14.5, maxWidth: 720, lineHeight: 1.7, marginBottom: 24 }}>Rail-agnostic router built on licensed payment infrastructure (Cedar, Triple-A, more). Serves licensed operators (BDCs, IMTOs) and businesses moving funds across USD, NGN, and stablecoin rails. Compliance automation, audit-grade logging, cross-rail intelligence.</div>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <Link to="/xaepay" className="btn-nav-cta" style={{ display: 'inline-block', textDecoration: 'none', padding: '11px 24px', fontSize: 13 }}>Learn about XaePay →</Link>
              <a href="https://xaepay.com" target="_blank" rel="noopener noreferrer" className="btn-nav-ghost" style={{ display: 'inline-block', textDecoration: 'none' }}>Visit xaepay.com ↗</a>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            <div className="market-card" style={{ padding: '36px 40px', '--accent': 'linear-gradient(90deg,#00E5C8,#5282FF)', '--ghost-c': '#00E5C8' }} data-ghost="PRO">
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <span style={{ fontFamily: 'var(--fm)', fontSize: 8.5, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--gold)', background: 'rgba(245,166,35,.08)', border: '1px solid rgba(245,166,35,.25)', padding: '4px 10px', borderRadius: 'var(--rpill)' }}>In Development</span>
              </div>
              <div className="mc-title" style={{ fontSize: 24, marginBottom: 8, background: 'linear-gradient(90deg,#00E5C8,#5282FF)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>XaePro</div>
              <div style={{ fontFamily: 'var(--fb)', fontStyle: 'italic', fontWeight: 300, fontSize: 14.5, color: 'var(--w2)', marginBottom: 14 }}>AI agent tools for workflow and supply-chain automation.</div>
              <div className="mc-desc" style={{ marginBottom: 22 }}>Autonomous agents that monitor, decide, and execute across trade documentation, compliance checks, exception handling, and routine ops.</div>
              <a href="mailto:info@xaeccox.io?subject=XaePro%20early%20interest" className="btn-nav-ghost" style={{ display: 'inline-block', textDecoration: 'none' }}>Register early interest →</a>
            </div>

            <div className="market-card" style={{ padding: '36px 40px', '--accent': 'linear-gradient(90deg,#F5A623,#A259FF)', '--ghost-c': '#F5A623' }} data-ghost="OPS">
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <span style={{ fontFamily: 'var(--fm)', fontSize: 8.5, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--gold)', background: 'rgba(245,166,35,.08)', border: '1px solid rgba(245,166,35,.25)', padding: '4px 10px', borderRadius: 'var(--rpill)' }}>Roadmap</span>
              </div>
              <div className="mc-title" style={{ fontSize: 24, marginBottom: 8, background: 'linear-gradient(90deg,#F5A623,#A259FF)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>XaeOps</div>
              <div style={{ fontFamily: 'var(--fb)', fontStyle: 'italic', fontWeight: 300, fontSize: 14.5, color: 'var(--w2)', marginBottom: 14 }}>Trade-ops platform for third-party trade operators.</div>
              <div className="mc-desc" style={{ marginBottom: 22 }}>Vendor portal, catalogs, POs, logistics + customs docs, fulfillment. The operator platform above physical trade infrastructure — sold to freight forwarders, sourcing agents, diaspora commerce operators.</div>
              <a href="mailto:info@xaeccox.io?subject=XaeOps%20early%20interest" className="btn-nav-ghost" style={{ display: 'inline-block', textDecoration: 'none' }}>Register early interest →</a>
            </div>
          </div>
        </div>
      </section>

      <section className="alt" id="consulting">
        <div className="fu" ref={r}>
          <div className="stag">Consulting</div>
          <h2 className="sh">Two ways to<br /><span className="acc">start working with us.</span></h2>
          <p className="sdesc">Corridor diagnostics for businesses navigating US ↔ Nigeria trade complexity. Fixed scope, confirmed timeline, founder-led.</p>
        </div>

        <div className="pricing-grid fu" ref={r} style={{ gridTemplateColumns: '1fr 1fr', maxWidth: 980, margin: '60px auto 0' }}>
          <div className="price-card edge-lit" style={{ '--pc': 'var(--blu)' }}>
            <span className="pc-badge std">Standard</span>
            <div className="pc-name">Standard Corridor Diagnostic</div>
            <div className="pc-desc">A structured 3-week assessment of your corridor — flows, compliance, payment routing, logistics cost.</div>
            <div className="pc-price" style={{ color: 'var(--w)' }}>
              <span className="pc-cur">$</span>12,500<span className="pc-per"> / 3 weeks</span>
            </div>
            <div className="pc-sub">single fixed-fee engagement</div>
            <div className="pc-divider" />
            <div className="pc-features">
              {[
                'Trade flow analysis (volume, frequency, counterparties)',
                'Compliance gap review (CBN, NAFDAC, US Customs)',
                'Payment routing audit (FX exposure, settlement, fees)',
                'Logistics cost benchmarking (freight, customs, last-mile)',
                'Partner and vendor mapping',
                'Prioritised 90-day action plan',
                'Written report (20–30 pages)',
                '60-minute review session with founder',
                '30-day async follow-up access',
              ].map(f => (
                <div className="pcf" key={f}><span className="pcf-ic">✓</span><span>{f}</span></div>
              ))}
            </div>
            <a href="mailto:info@xaeccox.io?subject=Standard%20Corridor%20Diagnostic%20-%20booking%20request&body=I%27d%20like%20to%20book%20a%20Standard%20Corridor%20Diagnostic.%0A%0AName%3A%20%0ACompany%3A%20%0ATrade%20corridor%3A%20%0AContext%3A%20" className="pc-cta outline" style={{ display: 'block', textAlign: 'center', textDecoration: 'none' }}>Book Standard Diagnostic →</a>
          </div>

          <div className="price-card edge-lit featured" style={{ '--pc': 'var(--vio)' }}>
            <span className="pc-badge pop">Deep · Hands-On</span>
            <div className="pc-name">Deep Corridor Diagnostic</div>
            <div className="pc-desc">Everything in Standard, plus weekly working sessions, partner introductions, and an implementation-ready deliverable.</div>
            <div className="pc-price grad">
              <span className="pc-cur">$</span>25,000<span className="pc-per"> / 6 weeks</span>
            </div>
            <div className="pc-sub">single fixed-fee engagement</div>
            <div className="pc-divider" />
            <div className="pc-features">
              {[
                'Everything in Standard',
                'Weekly working sessions with founder',
                'Hands-on partner introductions across the corridor',
                'Implementation-readiness deliverable',
                '90-day async follow-up access',
              ].map(f => (
                <div className="pcf" key={f}><span className="pcf-ic">✓</span><span>{f}</span></div>
              ))}
            </div>
            <a href="mailto:info@xaeccox.io?subject=Deep%20Corridor%20Diagnostic%20-%20booking%20request&body=I%27d%20like%20to%20book%20a%20Deep%20Corridor%20Diagnostic.%0A%0AName%3A%20%0ACompany%3A%20%0ATrade%20corridor%3A%20%0AContext%3A%20" className="pc-cta main" style={{ display: 'block', textAlign: 'center', textDecoration: 'none' }}>Book Deep Diagnostic →</a>
          </div>
        </div>

        <p style={{ textAlign: 'center', color: 'var(--w3)', fontSize: 13, marginTop: 36, fontFamily: 'var(--fd)', maxWidth: 680, marginLeft: 'auto', marginRight: 'auto' }}>
          Enterprise engagements, custom scopes, and integration/software builds — <a href="mailto:info@xaeccox.io?subject=XaeTech%20enterprise%20inquiry" style={{ color: 'var(--blu)', textDecoration: 'underline' }}>contact the founder directly.</a>
        </p>
      </section>

      <section id="agents">
        <div className="stag fu" ref={r}>Agentic AI · Concept · In Development</div>
        <div className="agent-split fu" ref={r}>
          <div>
            <h2 className="sh">What does an<br /><span className="acc">AI agent actually do?</span></h2>
            <p className="agent-prose">
              Most AI tools <strong>answer questions.</strong><br />An agent <em>acts on them.</em>
              <br /><br />
              A XaeTech AI agent continuously <strong>monitors</strong> a defined part of your operation, <strong>makes decisions</strong> within set parameters, <strong>executes tasks</strong> without waiting for instruction, and <strong>escalates</strong> to humans when judgment is required.
              <br /><br />
              It doesn't sleep. It doesn't lose context across time zones. It doesn't miss a shipment exception at 3am in Singapore, a customs hold in Rotterdam, or a payment failure in New York.
            </p>
          </div>
          <div className="agent-loop">
            <div className="al-hd" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
              <span>⬡ Agentic Loop — Execution Pattern</span>
              <span style={{ fontFamily: 'var(--fm)', fontSize: 8, letterSpacing: '.16em', color: 'var(--gold)', background: 'rgba(245,166,35,.07)', border: '1px solid rgba(245,166,35,.25)', padding: '3px 9px', borderRadius: 'var(--rpill)' }}>Concept · In Dev</span>
            </div>
            <div className="al-steps">
              {[
                { tag: 'Perception', t: 'Monitor', d: 'Agent reads live data from ports, customs authorities, freight forwarders, ERP systems, and payment banks across every active corridor — continuously, in every timezone.' },
                { tag: 'Cognition', t: 'Assess', d: 'Compliance models covering CBN, NAFDAC, US Customs, SWIFT, and local regulatory frameworks — classify the situation in milliseconds.' },
                { tag: 'Execution', t: 'Act', d: 'Routine: agent generates the document set, files electronically, updates the operations system. Zero human touchpoints required.' },
                { tag: 'Escalation', t: 'Escalate', d: 'Exception: agent creates a prioritised alert with context, recommended action, and time window for the human team.' },
                { tag: 'Learning', t: 'Improve', d: 'Every resolution feeds back into the decision model. The next similar situation is resolved faster, with higher accuracy.' },
              ].map(s => (
                <div className="als" key={s.t}>
                  <div className="als-conn"><div className="als-dot" /><div className="als-line" /></div>
                  <div className="als-body">
                    <div className="als-tag">{s.tag}</div>
                    <div className="als-title">{s.t}</div>
                    <div className="als-desc">{s.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="founder" style={{ padding: '100px 72px 40px' }}>
        <div className="fu" ref={r} style={{ maxWidth: 780 }}>
          <div className="stag">Built By</div>
          <h2 className="sh" style={{ fontSize: 'clamp(26px,3vw,38px)', marginBottom: 12 }}>Chukwura Okoli</h2>
          <div style={{ fontFamily: 'var(--fm)', fontSize: 11, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--blu)', marginBottom: 22 }}>Founder · XAECCOX LLC</div>
          <p className="agent-prose" style={{ margin: '0 0 18px', fontSize: 15, maxWidth: 720 }}>
            Operator and architect across the US ↔ Nigeria trade corridor. Nearly a decade in global supply chain, AI solutions architecture, and ERP-grade process design — currently shipping containers and building infrastructure between Lagos, Philadelphia, Los Angeles, and Houston.
          </p>
          <p className="agent-prose" style={{ margin: '0 0 24px', fontSize: 15, color: 'var(--w2)', maxWidth: 720 }}>
            XaeTech products are built to fix the pain points he keeps hitting inside XaeccoX's own trade operations. Every product ships because the corridor needed it first.
          </p>
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
            <a href="https://www.linkedin.com/in/chukwuraokoli" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--fd)', fontWeight: 600, fontSize: 14, color: 'var(--blu)', textDecoration: 'none', borderBottom: '1px solid var(--ba)', paddingBottom: 2 }}>LinkedIn →</a>
            <a href="mailto:info@xaeccox.io?subject=XaeTech%20-%20founder%20conversation" style={{ fontFamily: 'var(--fd)', fontWeight: 600, fontSize: 14, color: 'var(--blu)', textDecoration: 'none', borderBottom: '1px solid var(--ba)', paddingBottom: 2 }}>Email →</a>
          </div>
        </div>
      </section>

      <section className="cta-section alt">
        <div className="cta-glow" /><div className="cta-grid-lines" />
        <div className="stag fu" ref={r} style={{ justifyContent: 'center' }}>Start the conversation</div>
        <h2 className="cta-h fu" ref={r}>
          Build corridor-native software<br />with a team that <span className="acc">ships containers.</span>
        </h2>
        <p className="cta-sub">Diagnostic engagements open today. Product early-access lists open now. Enterprise integrations quoted per scope.</p>
        <div className="cta-actions">
          <button className="btn-cta-p" onClick={() => go('consulting')}>Book a diagnostic</button>
          <a href="mailto:info@xaeccox.io?subject=XaeTech%20-%20talk%20to%20the%20founder" className="btn-cta-g" style={{ textDecoration: 'none', display: 'inline-block' }}>Talk to the founder →</a>
        </div>
      </section>

      <footer>
        <div className="ft-grid">
          <div>
            <div className="ft-logo">Xaecco<span>X</span> Tech</div>
            <div className="ft-tagline">The software + AI products arm of XAECCOX LLC. Cross-border commerce infrastructure, corridor-native.</div>
            <div className="ft-socials" style={{ marginTop: 20 }}>
              <a href="https://www.linkedin.com/in/chukwuraokoli" target="_blank" rel="noopener noreferrer" className="ft-soc" style={{ textDecoration: 'none', color: 'inherit' }} title="LinkedIn">in</a>
              <a href="mailto:info@xaeccox.io" className="ft-soc" style={{ textDecoration: 'none', color: 'inherit' }} title="Email">@</a>
            </div>
          </div>
          <div>
            <div className="ft-col-hd">Products</div>
            <ul className="ft-links">
              <li><Link to="/xaepay">XaePay ↗</Link></li>
              <li><a onClick={() => go('products')} style={{ cursor: 'pointer' }}>XaePro</a></li>
              <li><a onClick={() => go('products')} style={{ cursor: 'pointer' }}>XaeOps</a></li>
            </ul>
          </div>
          <div>
            <div className="ft-col-hd">Engage</div>
            <ul className="ft-links">
              <li><a onClick={() => go('consulting')} style={{ cursor: 'pointer' }}>Consulting</a></li>
              <li><a onClick={() => go('agents')} style={{ cursor: 'pointer' }}>Agentic AI</a></li>
              <li><a href="mailto:info@xaeccox.io">Contact</a></li>
            </ul>
          </div>
          <div>
            <div className="ft-col-hd">Company</div>
            <ul className="ft-links">
              <li><Link to="/">XaeccoX operator ↗</Link></li>
              <li><Link to="/privacy">Privacy</Link></li>
              <li><Link to="/terms">Terms</Link></li>
            </ul>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--b1)', padding: '24px 0 18px', marginTop: 8, fontSize: 12, color: 'var(--w3)', lineHeight: 1.75, fontFamily: 'var(--fd)' }}>
          <strong style={{ color: 'var(--w2)', fontWeight: 600 }}>XAECCOX LLC</strong> · Delaware limited liability company · doing business as XaeccoX and XaeTech
          <br />
          Registered office: 651 N Broad St, Middletown, Delaware 19709, United States
          <span style={{ margin: '0 8px', color: 'var(--w4)' }}>·</span>
          Operated by Chukwura Okoli
          <br />
          Email <a href="mailto:info@xaeccox.io" style={{ color: 'var(--blu)', textDecoration: 'none' }}>info@xaeccox.io</a>
          <span style={{ margin: '0 8px', color: 'var(--w4)' }}>·</span>
          Phone / WhatsApp <a href="tel:+12673618234" style={{ color: 'var(--blu)', textDecoration: 'none' }}>+1 (267) 361-8234</a>
        </div>

        <div className="ft-bottom">
          <span>© 2026 XAECCOX LLC · Built corridor-first</span>
          <div className="ft-badges">
            <Link to="/privacy" style={{ color: 'inherit', textDecoration: 'none' }}><span className="ft-b">Privacy</span></Link>
            <Link to="/terms" style={{ color: 'inherit', textDecoration: 'none' }}><span className="ft-b">Terms</span></Link>
            <span className="ft-b">Corridor-first · US ↔ NG</span>
          </div>
        </div>
      </footer>
    </>
  );
}
