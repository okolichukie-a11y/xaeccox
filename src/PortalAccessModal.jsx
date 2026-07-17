import { useState, useEffect, useRef } from 'react';

function pRef() {
  return 'XCX-P-' + Math.random().toString(36).substring(2, 6).toUpperCase() + '-' + Date.now().toString().slice(-4);
}

export default function PortalAccessModal({ onClose, mode = 'signin' }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [useCase, setUseCase] = useState('');
  const [role, setRole] = useState('');
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [done, setDone] = useState(false);
  const [ref] = useState(pRef());
  const bodyRef = useRef();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const isSignIn = mode === 'signin';

  const validate = () => {
    const e = {};
    if (!firstName.trim()) e.firstName = true;
    if (!lastName.trim()) e.lastName = true;
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = true;
    if (!useCase.trim()) e.useCase = true;
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    setSubmitting(true);
    setSubmitError('');
    try {
      const formId = import.meta.env.VITE_FORMSPREE_ID || 'xpqbpjky';
      const res = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `XaeccoX Portal Access Request — ${firstName} ${lastName}${company ? ' · ' + company : ''}`,
          reference: ref,
          request_type: 'Portal Access Request',
          request_mode: isSignIn ? 'Existing customer sign-in interest' : 'New user sign-up interest',
          first_name: firstName,
          last_name: lastName,
          email,
          company,
          role,
          use_case: useCase,
        }),
      });
      if (!res.ok) throw new Error('SUBMIT_FAILED');
      setDone(true);
    } catch {
      setSubmitError('Something went wrong. Please try again or email info@xaeccox.io directly.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bk-overlay" onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="bk-modal" style={{ maxWidth: 560 }}>
        <div className="bkh">
          <div className="bkh-l">
            <div className="bkh-ey">{isSignIn ? 'Portal · Sign In' : 'Portal · Sign Up'}</div>
            <div className="bkh-title">Customer <span>portal</span> access</div>
            <div className="bkh-sub">
              The XaeccoX customer portal launches alongside our first paying orders. Request access — we'll notify you when your account is ready and invite you to sign in.
            </div>
          </div>
          <button className="bkh-close" onClick={onClose}>✕</button>
        </div>

        {!done ? (
          <>
            <div className="bk-body" ref={bodyRef}>
              <div className="legal-callout" style={{ background: 'rgba(245,166,35,.07)', border: '1px solid rgba(245,166,35,.22)', borderLeft: '3px solid var(--gold)', borderRadius: 8, padding: '14px 16px', marginBottom: 18, fontSize: 13, color: 'var(--w2)', lineHeight: 1.6 }}>
                <strong style={{ color: 'var(--gold)', display: 'block', marginBottom: 4, fontFamily: 'var(--fm)', fontSize: 9, letterSpacing: '.18em', textTransform: 'uppercase' }}>Preview · Portal in development</strong>
                No password is stored today. Access requests go directly to the founder. When the portal ships, we'll email you an invite and set up your account.
              </div>

              <div className="bk-form-row">
                <div className="bk-field">
                  <label className="bk-label">First Name <span className="bk-req">*</span></label>
                  <input className={`bk-input${errors.firstName ? ' err' : ''}`} value={firstName} onChange={e => setFirstName(e.target.value)} />
                </div>
                <div className="bk-field">
                  <label className="bk-label">Last Name <span className="bk-req">*</span></label>
                  <input className={`bk-input${errors.lastName ? ' err' : ''}`} value={lastName} onChange={e => setLastName(e.target.value)} />
                </div>
              </div>
              <div className="bk-form-row full">
                <div className="bk-field">
                  <label className="bk-label">Email <span className="bk-req">*</span></label>
                  <input className={`bk-input${errors.email ? ' err' : ''}`} type="email" placeholder="you@company.com" value={email} onChange={e => setEmail(e.target.value)} />
                </div>
              </div>
              <div className="bk-form-row">
                <div className="bk-field">
                  <label className="bk-label">Company (optional)</label>
                  <input className="bk-input" value={company} onChange={e => setCompany(e.target.value)} />
                </div>
                <div className="bk-field">
                  <label className="bk-label">Role (optional)</label>
                  <input className="bk-input" placeholder="e.g. Founder, Ops, Buyer" value={role} onChange={e => setRole(e.target.value)} />
                </div>
              </div>
              <div className="bk-form-row full">
                <div className="bk-field">
                  <label className="bk-label">What would you use the portal for? <span className="bk-req">*</span></label>
                  <textarea className={`bk-input bk-textarea${errors.useCase ? ' err' : ''}`} placeholder="e.g. tracking my container from Philly to Lagos · sourcing goods from Nigerian suppliers · managing recurring imports of medical equipment" value={useCase} onChange={e => setUseCase(e.target.value)} />
                </div>
              </div>
            </div>

            {submitError && <div className="bk-submit-err">⚠ {submitError}</div>}

            <div className="bk-footer">
              <div className="bk-footer-info">
                <strong>We reply within 1 business day</strong>
                No commitment · Your data never sold or shared
              </div>
              <div className="bk-footer-btns">
                <button className="btn-bk-next" onClick={handleSubmit} disabled={submitting}>
                  {submitting
                    ? <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}><span className="bk-spinner" />Sending…</span>
                    : 'Request access →'}
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="bk-success">
            <div className="bks-icon">✓</div>
            <div className="bks-tag">Access request received</div>
            <div className="bks-h">You're on the list.</div>
            <div className="bks-sub">We'll email <strong>{email}</strong> when the customer portal is ready for your account. Reference number below for your records.</div>
            <div className="bks-ref">Reference: <span>{ref}</span></div>
            <div className="bks-actions">
              <button className="btn-bks p" onClick={onClose}>Back to XaeccoX</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
