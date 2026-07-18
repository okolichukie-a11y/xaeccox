export const G = `
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,700;1,9..144,400&family=IBM+Plex+Mono:wght@400;500;700&display=swap');

*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --void:#01030A;--cosmos:#030712;--deep:#060E1C;--layer:#0A1628;
  --glass:#0F1E38;--surf:#132030;--panel:#162540;
  --b0:rgba(255,255,255,.05);--b1:rgba(255,255,255,.08);--b2:rgba(255,255,255,.12);
  --ba:rgba(82,130,255,.2);--bap:rgba(82,130,255,.4);
  --blu:#5282FF;--blu2:#7BA3FF;--blug:rgba(82,130,255,.16);--blub:rgba(82,130,255,.08);
  --vio:#A259FF;--viog:rgba(162,89,255,.14);
  --teal:#00E5C8;--tealg:rgba(0,229,200,.12);
  --gold:#F5A623;--goldg:rgba(245,166,35,.12);
  --rose:#FF4D6D;--jade:#00D68F;
  --w:#F0F4FF;--w2:rgba(240,244,255,.7);--w3:rgba(240,244,255,.4);--w4:rgba(240,244,255,.18);
  --fd:'Outfit',sans-serif;--fb:'Fraunces',serif;--fm:'IBM Plex Mono',monospace;
  --r4:4px;--r8:8px;--r12:12px;--r16:16px;--r24:24px;--rpill:100px;
}

html{scroll-behavior:smooth}
body{background:var(--void);color:var(--w);font-family:var(--fd);font-size:16px;line-height:1.6;overflow-x:hidden}

.mesh-bg{
  position:fixed;inset:0;z-index:0;pointer-events:none;
  background:
    radial-gradient(ellipse 80% 60% at 15% 20%, rgba(82,130,255,.06) 0%, transparent 60%),
    radial-gradient(ellipse 60% 50% at 85% 70%, rgba(162,89,255,.05) 0%, transparent 60%),
    radial-gradient(ellipse 50% 40% at 50% 10%, rgba(0,229,200,.04) 0%, transparent 60%),
    var(--cosmos);
  animation:meshShift 20s ease-in-out infinite alternate;
}
@keyframes meshShift{
  0%{background-position:0% 0%,100% 100%,50% 0%}
  100%{background-position:10% 10%,90% 90%,55% 5%}
}

body::before{
  content:'';position:fixed;inset:0;z-index:1;pointer-events:none;
  background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.04'/%3E%3C/svg%3E");
  opacity:.55;
}

::-webkit-scrollbar{width:2px}::-webkit-scrollbar-track{background:var(--void)}::-webkit-scrollbar-thumb{background:var(--blu);border-radius:1px}

.glass{background:rgba(15,30,56,.6);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border:1px solid var(--b1)}
.glass-card{background:linear-gradient(135deg,rgba(22,37,64,.7) 0%,rgba(10,22,40,.7) 100%);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border:1px solid var(--b1);transition:all .35s cubic-bezier(.25,.46,.45,.94)}
.glass-card:hover{border-color:var(--ba);background:linear-gradient(135deg,rgba(82,130,255,.08) 0%,rgba(22,37,64,.7) 100%);transform:translateY(-4px);box-shadow:0 20px 60px rgba(0,0,0,.4),0 0 0 1px var(--ba),inset 0 1px 0 var(--b2)}

.edge-lit{position:relative;overflow:hidden}
.edge-lit::before{content:'';position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,var(--blu),transparent);opacity:0;transition:opacity .35s}
.edge-lit:hover::before{opacity:1}

nav{position:fixed;inset:0 0 auto;z-index:900;display:flex;align-items:center;justify-content:space-between;padding:20px 72px;transition:all .4s cubic-bezier(.25,.46,.45,.94)}
nav.sc{background:rgba(1,3,10,.88);backdrop-filter:blur(28px);-webkit-backdrop-filter:blur(28px);border-bottom:1px solid var(--b1);padding:13px 72px}
.logo{display:flex;align-items:center;gap:10px;cursor:pointer;font-family:var(--fd);font-weight:800;font-size:20px;letter-spacing:-.01em;color:var(--w);text-decoration:none}
.logo-x{color:transparent;background:linear-gradient(135deg,var(--blu),var(--vio));-webkit-background-clip:text;background-clip:text}
.logo-badge{font-family:var(--fm);font-size:7px;letter-spacing:.2em;text-transform:uppercase;color:var(--w3);border:1px solid var(--b1);padding:3px 8px;border-radius:var(--r4);background:rgba(255,255,255,.03)}
.nav-links{display:flex;gap:32px;list-style:none}
.nav-links a{font-family:var(--fd);font-size:13px;font-weight:500;color:var(--w3);text-decoration:none;transition:color .2s;letter-spacing:.01em}
.nav-links a:hover{color:var(--w)}
.nav-right{display:flex;gap:10px;align-items:center}
.btn-nav-ghost{font-family:var(--fd);font-size:12px;font-weight:600;color:var(--w2);background:transparent;border:1px solid var(--b1);padding:8px 20px;border-radius:var(--r8);cursor:pointer;transition:all .25s}
.btn-nav-ghost:hover{border-color:var(--ba);color:var(--w)}
.btn-nav-cta{font-family:var(--fd);font-size:12px;font-weight:700;color:var(--void);background:linear-gradient(135deg,var(--blu),var(--vio));border:none;padding:9px 22px;border-radius:var(--r8);cursor:pointer;box-shadow:0 0 24px rgba(82,130,255,.35);transition:all .25s;position:relative;overflow:hidden}
.btn-nav-cta:hover{box-shadow:0 0 40px rgba(82,130,255,.5);transform:translateY(-1px)}

.hero-ring{position:absolute;right:5%;top:50%;transform:translateY(-50%);width:580px;height:580px;border-radius:50%;pointer-events:none;border:1px solid rgba(82,130,255,.06);animation:ringRotate 40s linear infinite}
.hero-ring::before{content:'';position:absolute;inset:-2px;border-radius:50%;border:1px solid transparent;border-top-color:rgba(82,130,255,.2);border-right-color:rgba(162,89,255,.15);animation:ringRotate 20s linear infinite reverse}
.hero-ring2{position:absolute;right:3%;top:50%;transform:translateY(-50%);width:700px;height:700px;border-radius:50%;pointer-events:none;border:1px solid rgba(162,89,255,.04);animation:ringRotate 60s linear infinite reverse}
@keyframes ringRotate{from{transform:translateY(-50%) rotate(0deg)}to{transform:translateY(-50%) rotate(360deg)}}

.hero-glow{position:absolute;right:10%;top:30%;width:600px;height:600px;background:radial-gradient(circle,rgba(82,130,255,.08) 0%,rgba(162,89,255,.05) 40%,transparent 70%);border-radius:50%;filter:blur(60px);pointer-events:none;animation:heroGlow 8s ease-in-out infinite}
@keyframes heroGlow{0%,100%{transform:scale(1)}50%{transform:scale(1.15)}}

.hero-left{position:relative;z-index:3}
.hero-right{position:relative;z-index:3;display:flex;align-items:center;justify-content:center}

.hero-status{display:inline-flex;align-items:center;gap:10px;padding:7px 14px 7px 10px;background:rgba(0,229,200,.06);border:1px solid rgba(0,229,200,.2);border-radius:var(--rpill);margin-bottom:28px}
.hs-dot{width:8px;height:8px;border-radius:50%;background:var(--teal);box-shadow:0 0 8px var(--teal);animation:hsDot 2s ease-in-out infinite}
@keyframes hsDot{0%,100%{opacity:1;box-shadow:0 0 8px var(--teal)}50%{opacity:.6;box-shadow:0 0 4px var(--teal)}}
.hs-txt{font-family:var(--fm);font-size:9px;letter-spacing:.2em;text-transform:uppercase;color:var(--teal)}

h1.hero-h{font-family:var(--fd);font-weight:700;font-size:clamp(34px,3.8vw,56px);line-height:1.08;letter-spacing:-.02em;margin-bottom:24px}
h1.hero-h .arc{background:linear-gradient(90deg,var(--blu),var(--vio));-webkit-background-clip:text;background-clip:text;color:transparent;display:inline-block}
h1.hero-h .serif{font-family:var(--fb);font-weight:400;font-style:italic;color:var(--w2);font-size:.5em;display:block;margin-top:20px;letter-spacing:-.005em;line-height:1.45}

.hero-desc{font-size:16px;color:var(--w3);max-width:480px;line-height:1.75;margin-bottom:40px}

.hero-actions{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:56px}
.btn-primary{font-family:var(--fd);font-weight:700;font-size:14px;color:var(--void);background:linear-gradient(135deg,var(--blu) 0%,var(--vio) 100%);border:none;padding:16px 40px;border-radius:var(--r12);cursor:pointer;box-shadow:0 0 48px rgba(82,130,255,.35),0 8px 32px rgba(0,0,0,.3);transition:all .3s;position:relative;overflow:hidden}
.btn-primary:hover{transform:translateY(-2px);box-shadow:0 0 64px rgba(82,130,255,.5),0 12px 40px rgba(0,0,0,.4)}
.btn-secondary{font-family:var(--fd);font-weight:600;font-size:14px;color:var(--w2);background:rgba(255,255,255,.04);border:1px solid var(--b1);padding:16px 32px;border-radius:var(--r12);cursor:pointer;backdrop-filter:blur(12px);transition:all .3s}
.btn-secondary:hover{border-color:var(--ba);color:var(--w);background:rgba(82,130,255,.06)}

.hero-stats{display:flex;gap:20px;flex-wrap:wrap}
.hstat{background:rgba(15,30,56,.6);backdrop-filter:blur(20px);border:1px solid var(--b1);border-radius:var(--r12);padding:14px 20px;min-width:120px;position:relative;overflow:hidden}
.hstat::before{content:'';position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,var(--blu),var(--vio),transparent);opacity:.6}
.hstat-n{font-family:var(--fd);font-weight:800;font-size:26px;letter-spacing:-.03em;background:linear-gradient(135deg,var(--w),var(--blu2));-webkit-background-clip:text;background-clip:text;color:transparent;line-height:1}
.hstat-l{font-family:var(--fm);font-size:8px;letter-spacing:.14em;text-transform:uppercase;color:var(--w3);margin-top:4px}

.globe-scene{position:relative;width:500px;height:500px}
.globe-outer-ring{position:absolute;inset:-40px;border-radius:50%;border:1px solid rgba(82,130,255,.08);animation:spinSlow 30s linear infinite}
.globe-outer-ring::after{content:'';position:absolute;top:50%;left:-3px;width:6px;height:6px;border-radius:50%;background:var(--blu);box-shadow:0 0 10px var(--blu);transform:translateY(-50%)}
.globe-mid-ring{position:absolute;inset:-15px;border-radius:50%;border:1px solid rgba(162,89,255,.06);animation:spinSlow 18s linear infinite reverse}
.globe-mid-ring::after{content:'';position:absolute;bottom:-3px;right:30%;width:4px;height:4px;border-radius:50%;background:var(--vio);box-shadow:0 0 8px var(--vio)}
@keyframes spinSlow{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
.globe-glow{position:absolute;inset:-60px;background:radial-gradient(circle,rgba(82,130,255,.08),rgba(162,89,255,.04) 50%,transparent 70%);border-radius:50%;filter:blur(30px);pointer-events:none}
.globe-svg{width:100%;height:100%;overflow:visible;position:relative;z-index:2}

.float-card{position:absolute;background:rgba(10,22,40,.85);backdrop-filter:blur(20px);border:1px solid var(--b1);border-radius:var(--r8);padding:10px 14px;white-space:nowrap;z-index:10;animation:cardFloat var(--dur,4s) ease-in-out infinite;font-size:11px}
.float-card::before{content:'';position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,var(--c,var(--blu)),transparent)}
@keyframes cardFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
.fc-label{font-family:var(--fm);font-size:8px;letter-spacing:.14em;text-transform:uppercase;color:var(--w4);margin-bottom:3px}
.fc-val{font-family:var(--fd);font-weight:700;font-size:13px;color:var(--w)}
.fc-dot{display:inline-block;width:5px;height:5px;border-radius:50%;margin-right:5px;vertical-align:middle}

.r-path{stroke-dasharray:800;stroke-dashoffset:800;animation:rDraw 2.5s ease forwards}
@keyframes rDraw{to{stroke-dashoffset:0}}

.ticker-wrap{position:relative;z-index:2;display:flex;overflow:hidden;background:rgba(10,22,40,.8);backdrop-filter:blur(20px);border-top:1px solid var(--b1);border-bottom:1px solid var(--b1)}
.tick-label{background:linear-gradient(135deg,var(--blu),var(--vio));color:var(--void);font-family:var(--fm);font-size:8.5px;letter-spacing:.2em;text-transform:uppercase;padding:13px 20px;flex-shrink:0;display:flex;align-items:center;gap:8px;white-space:nowrap;font-weight:700}
.tick-pulse{width:5px;height:5px;background:var(--void);border-radius:50%;animation:tp 1.5s ease-in-out infinite}
@keyframes tp{0%,100%{opacity:1}50%{opacity:.4}}
.tick-scroll{overflow:hidden;flex:1}
.tick-track{display:flex;width:max-content;animation:tickMove 60s linear infinite;padding:12px 0}
@keyframes tickMove{from{transform:translateX(0)}to{transform:translateX(-50%)}}
.ti{font-family:var(--fm);font-size:10px;color:var(--w3);padding:0 28px;white-space:nowrap;display:flex;align-items:center;gap:7px}
.ti .tv{color:var(--w);font-weight:700}
.ti .up{color:var(--jade)}.ti .dn{color:var(--rose)}
.ti-dot{color:var(--w4);margin:0 4px}

section{position:relative;z-index:2;padding:120px 72px}
section.alt{background:rgba(6,14,28,.5)}
.stag{font-family:var(--fm);font-size:8.5px;letter-spacing:.25em;text-transform:uppercase;color:var(--blu);margin-bottom:18px;display:flex;align-items:center;gap:12px}
.stag::before{content:'';display:block;width:16px;height:1px;background:linear-gradient(to right,var(--blu),var(--vio))}
h2.sh{font-family:var(--fd);font-weight:800;font-size:clamp(28px,3.5vw,56px);line-height:1.04;letter-spacing:-.025em}
h2.sh .acc{background:linear-gradient(90deg,var(--blu),var(--vio));-webkit-background-clip:text;background-clip:text;color:transparent}
.sdesc{font-size:16px;color:var(--w3);max-width:540px;line-height:1.75;margin-top:14px}
.section-head-split{display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:start;margin-bottom:64px}

.rf-wrap{display:grid;grid-template-columns:repeat(3,1fr);border:1px solid var(--b1);border-radius:var(--r16);overflow:hidden;margin-top:60px;background:rgba(6,14,28,.6)}
.rf-col{padding:40px 32px;border-right:1px solid var(--b1);transition:background .3s}
.rf-col:last-child{border-right:none}
.rf-col.hi{background:linear-gradient(135deg,rgba(82,130,255,.07) 0%,rgba(162,89,255,.04) 100%)}
.rf-hd{font-family:var(--fm);font-size:8.5px;letter-spacing:.2em;text-transform:uppercase;color:var(--w3);margin-bottom:24px;padding-bottom:14px;border-bottom:1px solid var(--b0)}
.rf-col.hi .rf-hd{color:var(--blu);border-bottom-color:rgba(82,130,255,.25)}
.rf-row{display:flex;gap:10px;margin-bottom:12px;font-size:13px;color:var(--w4);line-height:1.55;align-items:flex-start}
.rf-col.hi .rf-row{color:var(--w2)}
.rf-ic{flex-shrink:0;margin-top:1px;font-size:12px;width:16px}
.rf-badge{display:inline-flex;align-items:center;gap:6px;margin-top:24px;font-family:var(--fm);font-size:8px;letter-spacing:.14em;text-transform:uppercase;padding:5px 12px;border-radius:var(--rpill)}
.rf-col:not(.hi) .rf-badge{border:1px solid var(--b1);color:var(--w4)}
.rf-col.hi .rf-badge{background:linear-gradient(135deg,var(--blu),var(--vio));color:var(--void);font-weight:700}

.market-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:20px;margin-top:60px}
.market-card{border-radius:var(--r16);padding:40px;position:relative;overflow:hidden;background:linear-gradient(135deg,rgba(22,37,64,.6) 0%,rgba(10,22,40,.6) 100%);border:1px solid var(--b1);transition:all .4s cubic-bezier(.25,.46,.45,.94);cursor:default}
.market-card::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:var(--accent,linear-gradient(90deg,var(--blu),var(--vio)));opacity:.8}
.market-card::after{content:attr(data-ghost);position:absolute;top:-20px;right:-10px;font-family:var(--fd);font-weight:900;font-size:110px;line-height:1;color:var(--ghost-c,var(--blu));opacity:.04;pointer-events:none;letter-spacing:-.05em}
.market-card:hover{border-color:var(--ba);transform:translateY(-4px);box-shadow:0 24px 60px rgba(0,0,0,.4),0 0 0 1px var(--ba)}
.mc-icon{font-size:28px;width:52px;height:52px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,.04);border:1px solid var(--b1);border-radius:var(--r12);margin-bottom:20px}
.mc-reg{font-family:var(--fm);font-size:8.5px;letter-spacing:.2em;text-transform:uppercase;margin-bottom:6px}
.mc-title{font-family:var(--fd);font-weight:700;font-size:24px;letter-spacing:-.02em;margin-bottom:12px}
.mc-desc{font-size:13px;color:var(--w3);line-height:1.65;margin-bottom:22px}
.mc-hubs{display:flex;flex-wrap:wrap;gap:7px}
.hub-chip{font-family:var(--fm);font-size:8.5px;letter-spacing:.09em;text-transform:uppercase;color:var(--w3);border:1px solid var(--b1);padding:4px 10px;border-radius:var(--rpill);background:rgba(255,255,255,.02);transition:all .2s}
.market-card:hover .hub-chip{border-color:var(--ba);color:var(--w2)}

.meth-wrap{display:grid;grid-template-columns:repeat(4,1fr);border-radius:var(--r16);overflow:hidden;border:1px solid var(--b1);margin-top:60px;background:rgba(6,14,28,.6)}
.meth-step{padding:48px 30px;position:relative;border-right:1px solid var(--b1);transition:background .35s;cursor:default;overflow:hidden}
.meth-step:last-child{border-right:none}
.meth-step:hover{background:rgba(82,130,255,.04)}
.meth-n{font-family:var(--fd);font-weight:900;font-size:64px;color:rgba(255,255,255,.04);letter-spacing:-.06em;line-height:1;margin-bottom:24px;transition:color .35s}
.meth-step:hover .meth-n{color:rgba(82,130,255,.1)}
.meth-tag{font-family:var(--fm);font-size:8.5px;letter-spacing:.2em;text-transform:uppercase;color:var(--blu);margin-bottom:10px}
.meth-title{font-family:var(--fd);font-weight:700;font-size:19px;letter-spacing:-.01em;margin-bottom:10px}
.meth-desc{font-size:12.5px;color:var(--w3);line-height:1.7}
.meth-connector{position:absolute;right:-1px;top:50%;transform:translateY(-50%);width:22px;height:22px;background:var(--deep);border:1px solid var(--b1);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:9px;color:var(--blu);z-index:2}
.meth-step:last-child .meth-connector{display:none}

.sol-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:60px}
.sol-card{background:linear-gradient(135deg,rgba(22,37,64,.5) 0%,rgba(10,22,40,.5) 100%);border:1px solid var(--b1);border-radius:var(--r12);padding:36px 30px;position:relative;overflow:hidden;transition:all .35s cubic-bezier(.25,.46,.45,.94);cursor:default}
.sol-card:hover{border-color:var(--ba);transform:translateY(-4px);box-shadow:0 20px 50px rgba(0,0,0,.35)}
.sol-n{font-family:var(--fm);font-size:10px;letter-spacing:.16em;color:var(--blu);margin-bottom:22px;position:relative;z-index:1}
.sol-t{font-family:var(--fd);font-weight:700;font-size:17px;letter-spacing:-.01em;margin-bottom:10px;position:relative;z-index:1}
.sol-d{font-size:13px;color:var(--w3);line-height:1.65;position:relative;z-index:1}
.sol-tags{display:flex;flex-wrap:wrap;gap:6px;margin-top:18px;position:relative;z-index:1}
.sol-tag{font-family:var(--fm);font-size:8px;letter-spacing:.1em;text-transform:uppercase;color:var(--blu);border:1px solid rgba(82,130,255,.22);padding:3px 8px;border-radius:var(--r4);background:rgba(82,130,255,.04)}

.erp-section{background:linear-gradient(180deg,rgba(6,14,28,.8) 0%,rgba(1,3,10,.8) 100%);border-top:1px solid var(--b1);border-bottom:1px solid var(--b1)}
.erp-intro{display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:start;margin-bottom:72px}
.erp-desc{font-size:15px;color:var(--w3);line-height:1.8;margin-top:20px}
.erp-desc strong{color:var(--w);font-weight:600}

.erp-systems{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-bottom:52px}
.erp-sys{background:rgba(10,22,40,.7);backdrop-filter:blur(16px);border:1px solid var(--b1);border-radius:var(--r12);padding:22px 20px;text-align:center;transition:all .35s;cursor:default;position:relative;overflow:hidden}
.erp-sys::before{content:'';position:absolute;top:0;left:0;right:0;height:1px;background:var(--sys-color,linear-gradient(90deg,var(--blu),var(--vio)));opacity:.6}
.erp-sys:hover{border-color:var(--ba);transform:translateY(-3px);box-shadow:0 16px 40px rgba(0,0,0,.3)}
.erp-sys-logo{font-family:var(--fd);font-weight:800;font-size:15px;margin-bottom:6px;letter-spacing:-.01em}
.erp-sys-type{font-family:var(--fm);font-size:8px;letter-spacing:.14em;text-transform:uppercase;color:var(--w3);margin-bottom:14px}
.erp-sys-status{display:inline-flex;align-items:center;gap:5px;font-family:var(--fm);font-size:8.5px;letter-spacing:.1em;text-transform:uppercase;padding:4px 10px;border-radius:var(--rpill)}
.sys-ready{color:var(--jade);background:rgba(0,214,143,.08);border:1px solid rgba(0,214,143,.2)}

.erp-flow-wrap{background:rgba(10,22,40,.6);backdrop-filter:blur(20px);border:1px solid var(--b1);border-radius:var(--r16);padding:48px;margin-bottom:52px;overflow:hidden}
.erp-flow-title{font-family:var(--fm);font-size:9px;letter-spacing:.2em;text-transform:uppercase;color:var(--blu);margin-bottom:36px;display:flex;align-items:center;gap:10px}
.erp-flow-title::before{content:'';width:14px;height:1px;background:var(--blu)}
.erp-flow-svg{width:100%;overflow:visible}

.erp-diag-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
.erp-diag{background:rgba(10,22,40,.7);border:1px solid var(--b1);border-radius:var(--r12);padding:28px 24px;transition:all .35s;cursor:default;position:relative;overflow:hidden}
.erp-diag:hover{border-color:var(--ba);transform:translateY(-3px);box-shadow:0 16px 40px rgba(0,0,0,.3)}
.erp-diag::before{content:'';position:absolute;top:0;left:0;right:0;height:1px;background:var(--dc,linear-gradient(90deg,var(--blu),var(--vio)));opacity:.7}
.erp-diag-icon{font-size:24px;margin-bottom:16px}
.erp-diag-title{font-family:var(--fd);font-weight:700;font-size:15px;margin-bottom:8px;letter-spacing:-.01em}
.erp-diag-desc{font-size:12.5px;color:var(--w3);line-height:1.6;margin-bottom:16px}
.erp-diag-tags{display:flex;flex-wrap:wrap;gap:5px}
.erp-tag{font-family:var(--fm);font-size:7.5px;letter-spacing:.1em;text-transform:uppercase;padding:2px 7px;border-radius:var(--r4);color:var(--tc,var(--blu));border:1px solid var(--tbc,rgba(82,130,255,.2));background:var(--tbg,rgba(82,130,255,.04))}

.plat-intro{display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:start;margin-bottom:52px}
.plat-feats{display:flex;flex-direction:column;gap:12px;margin-top:20px}
.pfeat{display:flex;gap:14px;padding:16px 20px;background:rgba(15,30,56,.5);border:1px solid var(--b1);border-radius:var(--r8);transition:all .25s;align-items:flex-start}
.pfeat:hover{border-color:var(--ba);background:rgba(82,130,255,.05)}
.pfeat-ic{font-size:18px;flex-shrink:0;margin-top:1px}
.pfeat-t{font-family:var(--fd);font-weight:600;font-size:14px;margin-bottom:3px}
.pfeat-d{font-size:12px;color:var(--w3);line-height:1.5}

.dash-wrap{position:relative;margin-top:24px}
.preview-tag{position:absolute;top:-14px;right:0;font-family:var(--fm);font-size:8.5px;letter-spacing:.18em;text-transform:uppercase;color:var(--gold);background:rgba(245,166,35,.07);border:1px solid rgba(245,166,35,.25);padding:5px 12px;border-radius:var(--rpill);z-index:5}
.dash{background:rgba(8,14,28,.85);backdrop-filter:blur(32px);border:1px solid var(--b1);border-radius:var(--r16);overflow:hidden;box-shadow:0 40px 100px rgba(0,0,0,.5),0 0 0 1px var(--b0),inset 0 1px 0 var(--b2)}
.dash-bar{background:rgba(15,24,44,.8);border-bottom:1px solid var(--b1);padding:12px 20px;display:flex;align-items:center;gap:8px}
.db{width:10px;height:10px;border-radius:50%}
.db.r{background:#FF5F56}.db.y{background:#FFBD2E}.db.g{background:#27C93F}
.dash-url{font-family:var(--fm);font-size:10px;color:var(--w3);background:rgba(255,255,255,.04);border:1px solid var(--b1);border-radius:var(--r4);padding:3px 14px;margin-left:12px;flex:1;max-width:300px}
.dash-body{display:grid;grid-template-columns:200px 1fr 240px;min-height:420px}
.d-side{background:rgba(10,20,38,.8);border-right:1px solid var(--b1);padding:18px 0}
.d-side-logo{font-family:var(--fd);font-weight:800;font-size:13px;padding:0 18px 16px;border-bottom:1px solid var(--b1);margin-bottom:10px}
.d-side-logo span{background:linear-gradient(135deg,var(--blu),var(--vio));-webkit-background-clip:text;background-clip:text;color:transparent}
.d-nav-item{display:flex;align-items:center;gap:10px;padding:8px 18px;font-size:11.5px;font-weight:500;color:var(--w3);cursor:pointer;transition:all .2s}
.d-nav-item.on{color:var(--w);background:rgba(82,130,255,.1);border-right:2px solid var(--blu)}
.d-nav-item:hover:not(.on){color:var(--w)}
.d-main{padding:22px}
.dm-top{display:flex;justify-content:space-between;align-items:center;margin-bottom:18px}
.dm-title{font-family:var(--fd);font-weight:700;font-size:15px;letter-spacing:-.01em}
.live-chip{display:flex;align-items:center;gap:6px;font-family:var(--fm);font-size:8.5px;letter-spacing:.13em;text-transform:uppercase;color:var(--gold);background:rgba(245,166,35,.07);border:1px solid rgba(245,166,35,.2);padding:4px 10px;border-radius:var(--rpill)}
.lc-dot{width:5px;height:5px;background:var(--gold);border-radius:50%;animation:tp 2s ease-in-out infinite}
.dm-kpis{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:18px}
.dk{background:rgba(15,30,56,.6);border:1px solid var(--b1);border-radius:var(--r8);padding:13px;position:relative;overflow:hidden}
.dk::after{content:'';position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,var(--blu),transparent);opacity:.5}
.dk-v{font-family:var(--fd);font-weight:800;font-size:22px;letter-spacing:-.02em;background:linear-gradient(135deg,var(--w),var(--blu2));-webkit-background-clip:text;background-clip:text;color:transparent;line-height:1}
.dk-l{font-family:var(--fm);font-size:7.5px;letter-spacing:.12em;text-transform:uppercase;color:var(--w3);margin-top:4px}
.ship-list{display:flex;flex-direction:column;gap:5px}
.ship{display:grid;grid-template-columns:68px 1fr 74px;align-items:center;gap:10px;background:rgba(15,30,56,.5);border:1px solid var(--b1);border-radius:var(--r4);padding:7px 12px;transition:border-color .2s}
.ship:hover{border-color:var(--ba)}
.ship-id{font-family:var(--fm);font-size:9px;color:var(--w3)}
.ship-r{font-size:11.5px;font-weight:600;color:var(--w)}
.ship-s{font-family:var(--fm);font-size:7.5px;letter-spacing:.09em;text-transform:uppercase;padding:2px 7px;border-radius:var(--r4);text-align:center}
.ss-ok{color:var(--jade);background:rgba(0,214,143,.08);border:1px solid rgba(0,214,143,.18)}
.ss-tr{color:var(--blu);background:var(--blub);border:1px solid var(--ba)}
.ss-ho{color:var(--gold);background:rgba(245,166,35,.08);border:1px solid rgba(245,166,35,.18)}
.d-right{background:rgba(10,20,38,.8);border-left:1px solid var(--b1);padding:18px;display:flex;flex-direction:column}
.dr-hd{font-family:var(--fm);font-size:8.5px;letter-spacing:.18em;text-transform:uppercase;color:var(--w3);margin-bottom:14px;display:flex;align-items:center;gap:6px}
.dr-dot{width:5px;height:5px;border-radius:50%;background:var(--teal);box-shadow:0 0 6px var(--teal);animation:tp 2s ease-in-out infinite}
.log-wrap{flex:1;overflow:hidden;display:flex;flex-direction:column;gap:6px}
.le{font-family:var(--fm);font-size:8.5px;line-height:1.5;padding:7px 10px;border-radius:var(--r4);border-left:2px solid;background:rgba(15,30,56,.5);transition:opacity .3s}
.le.ex{border-color:var(--teal);color:var(--teal)}
.le.fl{border-color:var(--gold);color:var(--gold)}
.le.ok{border-color:var(--jade);color:var(--jade)}
.le.es{border-color:var(--rose);color:var(--rose)}
.le .ts{color:var(--w4);display:block;font-size:7.5px;margin-bottom:2px}

.agent-split{display:grid;grid-template-columns:1fr 1fr;gap:80px;margin-top:60px;align-items:start}
.agent-prose{font-size:16px;color:var(--w3);line-height:1.8;margin-top:22px}
.agent-prose strong{color:var(--w);font-weight:600}
.agent-prose em{background:linear-gradient(90deg,var(--blu),var(--vio));-webkit-background-clip:text;background-clip:text;color:transparent;font-style:italic}
.agent-loop{background:rgba(10,22,40,.7);backdrop-filter:blur(20px);border:1px solid var(--b1);border-radius:var(--r12);padding:32px}
.al-hd{font-family:var(--fm);font-size:8.5px;letter-spacing:.2em;text-transform:uppercase;color:var(--w3);margin-bottom:24px}
.al-steps{display:flex;flex-direction:column}
.als{display:grid;grid-template-columns:32px 1fr;gap:12px}
.als-conn{display:flex;flex-direction:column;align-items:center}
.als-dot{width:10px;height:10px;border-radius:50%;background:linear-gradient(135deg,var(--blu),var(--vio));box-shadow:0 0 12px rgba(82,130,255,.4);flex-shrink:0}
.als-line{flex:1;width:1px;background:linear-gradient(to bottom,rgba(82,130,255,.4),rgba(162,89,255,.1));margin:0 auto;min-height:18px}
.als:last-child .als-line{display:none}
.als-body{padding-bottom:20px}
.als-tag{font-family:var(--fm);font-size:8px;letter-spacing:.16em;text-transform:uppercase;color:var(--blu);margin-bottom:4px}
.als-title{font-family:var(--fd);font-weight:700;font-size:15px;margin-bottom:4px;letter-spacing:-.01em}
.als-desc{font-size:12px;color:var(--w3);line-height:1.6}

.met-row{display:grid;grid-template-columns:repeat(4,1fr);border:1px solid var(--b1);border-radius:var(--r16);overflow:hidden;margin-top:60px;background:rgba(6,14,28,.6)}
.mb{padding:48px 30px;text-align:center;border-right:1px solid var(--b1);transition:background .3s;cursor:default;position:relative;overflow:hidden}
.mb:last-child{border-right:none}
.mb:hover{background:rgba(82,130,255,.04)}
.mb-val{font-family:var(--fd);font-weight:900;font-size:52px;letter-spacing:-.05em;line-height:1;background:linear-gradient(135deg,var(--w),var(--blu2));-webkit-background-clip:text;background-clip:text;color:transparent;margin-bottom:6px}
.mb-label{font-family:var(--fm);font-size:8.5px;letter-spacing:.16em;text-transform:uppercase;color:var(--w3);line-height:1.55}
.mb-note{font-family:var(--fm);font-size:8.5px;color:var(--jade);margin-top:8px}

.pricing-toggle{display:flex;align-items:center;gap:12px;margin-top:28px;font-family:var(--fm);font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:var(--w3)}
.toggle-track{width:44px;height:24px;background:rgba(82,130,255,.15);border:1px solid var(--ba);border-radius:var(--rpill);cursor:pointer;position:relative;transition:background .25s}
.toggle-track.on{background:linear-gradient(135deg,var(--blu),var(--vio))}
.toggle-thumb{position:absolute;top:2px;left:2px;width:18px;height:18px;background:var(--w);border-radius:50%;transition:left .25s;box-shadow:0 2px 6px rgba(0,0,0,.3)}
.toggle-track.on .toggle-thumb{left:22px}
.toggle-save{background:linear-gradient(135deg,var(--jade),var(--teal));-webkit-background-clip:text;background-clip:text;color:transparent;font-weight:700}
.pricing-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:44px}
.price-card{border-radius:var(--r16);padding:36px 32px;position:relative;overflow:hidden;background:linear-gradient(135deg,rgba(22,37,64,.6) 0%,rgba(10,22,40,.6) 100%);border:1px solid var(--b1);transition:all .4s cubic-bezier(.25,.46,.45,.94);cursor:default}
.price-card.featured{background:linear-gradient(135deg,rgba(82,130,255,.12),rgba(162,89,255,.08));border-color:rgba(82,130,255,.4);box-shadow:0 0 60px rgba(82,130,255,.12),inset 0 1px 0 rgba(255,255,255,.06)}
.price-card::before{content:'';position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,var(--pc,var(--blu)),transparent);opacity:.7}
.price-card:hover{transform:translateY(-5px);box-shadow:0 28px 70px rgba(0,0,0,.4)}
.price-card.featured:hover{box-shadow:0 28px 70px rgba(82,130,255,.2)}
.pc-badge{display:inline-block;margin-bottom:20px;font-family:var(--fm);font-size:8px;letter-spacing:.18em;text-transform:uppercase;padding:4px 12px;border-radius:var(--rpill)}
.pc-badge.pop{background:linear-gradient(135deg,var(--blu),var(--vio));color:var(--void);font-weight:700}
.pc-badge.std{border:1px solid var(--b1);color:var(--w3)}
.pc-name{font-family:var(--fd);font-weight:700;font-size:22px;letter-spacing:-.02em;margin-bottom:8px}
.pc-desc{font-size:13px;color:var(--w3);line-height:1.55;margin-bottom:24px;min-height:40px}
.pc-price{font-family:var(--fd);font-weight:900;font-size:48px;letter-spacing:-.04em;line-height:1;margin-bottom:4px}
.pc-price.grad{background:linear-gradient(135deg,var(--w),var(--blu2));-webkit-background-clip:text;background-clip:text;color:transparent}
.pc-price .pc-cur{font-size:.45em;font-weight:600;vertical-align:top;margin-top:8px;display:inline-block}
.pc-price .pc-per{font-family:var(--fm);font-size:.3em;font-weight:400;color:var(--w3)}
.pc-sub{font-family:var(--fm);font-size:9px;letter-spacing:.1em;text-transform:uppercase;color:var(--w3);margin-bottom:28px}
.pc-divider{height:1px;background:var(--b1);margin-bottom:24px}
.pc-features{display:flex;flex-direction:column;gap:10px;margin-bottom:28px}
.pcf{display:flex;gap:10px;align-items:flex-start;font-size:13px;color:var(--w2)}
.pcf-ic{flex-shrink:0;font-size:12px;margin-top:2px;color:var(--jade)}
.pcf-ic.x{color:var(--w4)}
.pc-cta{width:100%;font-family:var(--fd);font-weight:700;font-size:13px;padding:14px;border-radius:var(--r8);cursor:pointer;transition:all .3s;letter-spacing:.01em}
.pc-cta.main{background:linear-gradient(135deg,var(--blu),var(--vio));color:var(--void);border:none;box-shadow:0 0 30px rgba(82,130,255,.25)}
.pc-cta.main:hover{box-shadow:0 0 50px rgba(82,130,255,.4);transform:translateY(-1px)}
.pc-cta.outline{background:transparent;color:var(--w2);border:1px solid var(--b2)}
.pc-cta.outline:hover{border-color:var(--ba);color:var(--w)}

.diag-pricing{margin-top:60px;background:rgba(10,22,40,.6);backdrop-filter:blur(20px);border:1px solid var(--b1);border-radius:var(--r16);overflow:hidden}
.dp-head{padding:24px 32px;border-bottom:1px solid var(--b1);display:flex;align-items:center;justify-content:space-between}
.dp-title{font-family:var(--fd);font-weight:700;font-size:18px;letter-spacing:-.01em}
.dp-sub{font-size:13px;color:var(--w3)}
.dp-grid{display:grid;grid-template-columns:repeat(4,1fr);border-top:1px solid var(--b1)}
.dp-item{padding:28px 24px;border-right:1px solid var(--b1);transition:background .25s;cursor:default}
.dp-item:last-child{border-right:none}
.dp-item:hover{background:rgba(82,130,255,.04)}
.dp-scope{font-family:var(--fm);font-size:8px;letter-spacing:.14em;text-transform:uppercase;color:var(--blu);margin-bottom:8px}
.dp-name{font-family:var(--fd);font-weight:700;font-size:15px;margin-bottom:8px;letter-spacing:-.01em}
.dp-price{font-family:var(--fd);font-weight:800;font-size:24px;letter-spacing:-.02em;background:linear-gradient(135deg,var(--w),var(--blu2));-webkit-background-clip:text;background-clip:text;color:transparent;margin-bottom:6px}
.dp-timeline{font-family:var(--fm);font-size:8.5px;color:var(--w3);margin-bottom:10px}
.dp-desc{font-size:11.5px;color:var(--w3);line-height:1.55}

.eco-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-top:60px}
.eco-card{background:rgba(10,22,40,.6);backdrop-filter:blur(16px);border:1px solid var(--b1);border-radius:var(--r12);padding:28px 24px;text-align:center;transition:all .35s;cursor:default;position:relative;overflow:hidden}
.eco-card::before{content:'';position:absolute;top:0;left:0;right:0;height:1px;background:var(--ec,linear-gradient(90deg,var(--blu),var(--vio)));opacity:.7}
.eco-card:hover{border-color:var(--ba);transform:translateY(-3px);box-shadow:0 16px 40px rgba(0,0,0,.3)}
.eco-name{font-family:var(--fd);font-weight:800;font-size:18px;letter-spacing:-.01em;margin-bottom:6px}
.eco-role{font-family:var(--fm);font-size:8.5px;letter-spacing:.12em;text-transform:uppercase;color:var(--w3);margin-bottom:12px}
.eco-desc{font-size:12px;color:var(--w4);line-height:1.5}

.cta-section{text-align:center;position:relative;overflow:hidden;padding:160px 72px}
.cta-glow{position:absolute;inset:0;pointer-events:none;background:radial-gradient(ellipse 60% 50% at 50% 50%,rgba(82,130,255,.07),transparent 70%),radial-gradient(ellipse 40% 40% at 30% 30%,rgba(162,89,255,.05),transparent 70%)}
.cta-grid-lines{position:absolute;inset:0;pointer-events:none;background-image:linear-gradient(rgba(82,130,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(82,130,255,.04) 1px,transparent 1px);background-size:50px 50px;mask-image:radial-gradient(ellipse 70% 70% at 50% 50%,black,transparent)}
h2.cta-h{font-family:var(--fd);font-weight:900;font-size:clamp(34px,5vw,78px);letter-spacing:-.04em;line-height:.96;max-width:800px;margin:0 auto 20px;position:relative;z-index:2}
h2.cta-h .acc{background:linear-gradient(90deg,var(--blu),var(--vio));-webkit-background-clip:text;background-clip:text;color:transparent}
.cta-sub{font-size:17px;color:var(--w3);max-width:460px;margin:0 auto 48px;line-height:1.75;position:relative;z-index:2}
.cta-actions{display:flex;gap:14px;justify-content:center;position:relative;z-index:2;flex-wrap:wrap}
.btn-cta-p{font-family:var(--fd);font-weight:700;font-size:15px;color:var(--void);background:linear-gradient(135deg,var(--blu),var(--vio));border:none;padding:18px 48px;border-radius:var(--r12);cursor:pointer;box-shadow:0 0 50px rgba(82,130,255,.3),0 8px 32px rgba(0,0,0,.3);transition:all .3s}
.btn-cta-p:hover{transform:translateY(-2px);box-shadow:0 0 72px rgba(82,130,255,.5)}
.btn-cta-g{font-family:var(--fd);font-weight:600;font-size:15px;color:var(--w2);background:rgba(255,255,255,.04);border:1px solid var(--b2);padding:18px 36px;border-radius:var(--r12);cursor:pointer;transition:all .3s;backdrop-filter:blur(12px)}
.btn-cta-g:hover{border-color:var(--bap);color:var(--w)}
.cta-trust{display:flex;gap:12px;justify-content:center;flex-wrap:wrap;margin-top:44px;position:relative;z-index:2}
.trust-badge{font-family:var(--fm);font-size:8px;letter-spacing:.12em;text-transform:uppercase;color:var(--w3);border:1px solid var(--b1);padding:5px 13px;border-radius:var(--r4);background:rgba(255,255,255,.02)}

footer{border-top:1px solid var(--b1);padding:64px 72px;background:rgba(6,14,28,.8);backdrop-filter:blur(20px);position:relative;z-index:2}
.ft-grid{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:56px;margin-bottom:48px}
.ft-logo{font-family:var(--fd);font-weight:800;font-size:18px;margin-bottom:10px}
.ft-logo span{background:linear-gradient(135deg,var(--blu),var(--vio));-webkit-background-clip:text;background-clip:text;color:transparent}
.ft-tagline{font-size:13px;color:var(--w3);line-height:1.65;max-width:240px;margin-bottom:20px}
.ft-socials{display:flex;gap:8px}
.ft-soc{width:34px;height:34px;background:rgba(255,255,255,.04);border:1px solid var(--b1);border-radius:var(--r8);display:flex;align-items:center;justify-content:center;font-size:13px;cursor:pointer;transition:all .2s}
.ft-soc:hover{border-color:var(--ba);background:var(--blub)}
.ft-col-hd{font-family:var(--fm);font-size:8px;letter-spacing:.2em;text-transform:uppercase;color:var(--w3);margin-bottom:16px}
.ft-links{list-style:none;display:flex;flex-direction:column;gap:10px}
.ft-links a{font-size:13px;color:var(--w3);text-decoration:none;transition:color .2s}
.ft-links a:hover{color:var(--w)}
.ft-bottom{display:flex;justify-content:space-between;align-items:center;padding-top:28px;border-top:1px solid var(--b1);font-family:var(--fm);font-size:9px;color:var(--w4);flex-wrap:wrap;gap:12px}
.ft-badges{display:flex;gap:8px;flex-wrap:wrap}
.ft-b{border:1px solid var(--b1);border-radius:var(--r4);padding:3px 9px;font-size:8px;letter-spacing:.1em;text-transform:uppercase}

.fu{opacity:0;transform:translateY(28px);transition:opacity .75s ease,transform .75s ease}
.fu.v{opacity:1;transform:translateY(0)}

@media(max-width:1100px){
  nav,nav.sc{padding:14px 20px}
  .nav-links{display:none}
  section{padding:80px 20px !important}
  .hero-right{display:none}
  .rf-wrap,.meth-wrap{grid-template-columns:1fr}
  .market-grid,.sol-grid,.erp-diag-grid{grid-template-columns:1fr}
  .erp-systems,.eco-grid{grid-template-columns:repeat(2,1fr)}
  .met-row{grid-template-columns:repeat(2,1fr) !important}
  .pricing-grid,.dp-grid{grid-template-columns:1fr !important}
  .plat-intro,.agent-split,.erp-intro,.section-head-split{grid-template-columns:1fr;gap:40px}
  .dash-body{grid-template-columns:1fr}.d-side,.d-right{display:none}
  .ft-grid{grid-template-columns:1fr 1fr !important;gap:36px}
  footer{padding:40px 20px}
  .ft-bottom{flex-direction:column;align-items:flex-start}
  .hero-ring,.hero-ring2,.hero-glow{display:none}
}

/* Tablet & mobile — force inline grid layouts to collapse, tighten heros, headings */
@media(max-width:900px){
  #hero{padding:120px 20px 60px !important;grid-template-columns:1fr !important;min-height:auto !important;gap:32px !important}
  h1.hero-h{font-size:clamp(28px,7vw,42px) !important;line-height:1.1 !important}
  h1.hero-h .serif{font-size:clamp(14px,4vw,18px) !important;margin-top:14px !important}
  .hero-desc{font-size:14.5px !important;max-width:none !important}
  .hero-status{padding:6px 12px 6px 9px !important}
  .hs-txt{font-size:8.5px !important}
  .hero-stats{gap:10px !important}
  .hstat{min-width:0 !important;padding:11px 14px !important;flex:1 1 45% !important}
  .hstat-n{font-size:22px !important}

  section [style*="grid-template-columns"]{grid-template-columns:1fr !important;max-width:100% !important}

  h2.sh{font-size:clamp(22px,5.5vw,32px) !important}
  h2.cta-h{font-size:clamp(24px,6vw,40px) !important}
  .cta-section{padding:100px 20px !important}
  .cta-actions{flex-direction:column !important;align-items:stretch !important}
  .cta-actions .btn-cta-p,.cta-actions .btn-cta-g{width:100% !important;text-align:center !important}

  .sdesc{font-size:14.5px !important;line-height:1.65 !important}
  .stag{font-size:8px !important}

  .ft-grid{grid-template-columns:1fr !important;gap:32px !important}
  .ticker-wrap{overflow:hidden}
  .ti{padding:0 20px !important;font-size:9.5px !important}
  .tick-label{padding:10px 14px !important;font-size:8px !important}

  .dash-bar .dash-url{display:none}

  .bk-modal{max-width:100% !important;border-radius:14px !important}
  .bkh{padding:20px 20px 14px !important}
  .bk-body{padding:20px !important}
  .bk-footer{padding:16px 20px 22px !important;flex-direction:column !important;align-items:stretch !important;gap:12px !important}
  .bk-footer-btns{width:100% !important}
  .btn-bk-next{width:100% !important;justify-content:center !important}
  .diag-type-grid{grid-template-columns:1fr !important}
  .bk-form-row{grid-template-columns:1fr !important}
  .date-grid{grid-template-columns:repeat(2,1fr) !important}
  .time-grid{grid-template-columns:repeat(3,1fr) !important}
  .review-grid{grid-template-columns:1fr !important}
  .bks-cards{grid-template-columns:1fr !important}
}

@media(max-width:640px){
  .erp-systems,.eco-grid,.met-row{grid-template-columns:1fr !important}
  .sol-grid{grid-template-columns:1fr}
  .ft-grid{grid-template-columns:1fr}
  section{padding:64px 18px !important}
  nav,nav.sc{padding:12px 16px !important}
  .btn-nav-cta{padding:8px 14px !important;font-size:11px !important}
  .btn-nav-ghost{padding:7px 12px !important;font-size:11px !important}
  .logo{font-size:17px !important;gap:8px !important}
  .logo-badge{display:none}
  h1.hero-h{font-size:clamp(26px,8vw,36px) !important}
  h2.sh{font-size:clamp(20px,6vw,28px) !important}
  .hstat{flex:1 1 100% !important}
}

.bk-overlay{position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px;background:rgba(1,3,10,.92);backdrop-filter:blur(28px) saturate(180%);-webkit-backdrop-filter:blur(28px) saturate(180%);animation:bkOvIn .3s ease}
@keyframes bkOvIn{from{opacity:0}to{opacity:1}}
.bk-modal{width:100%;max-width:880px;max-height:92vh;display:flex;flex-direction:column;background:rgba(8,16,36,.97);backdrop-filter:blur(40px);border:1px solid rgba(82,130,255,.3);border-radius:20px;overflow:hidden;box-shadow:0 0 0 1px rgba(82,130,255,.1),0 40px 120px rgba(0,0,0,.8),inset 0 1px 0 rgba(255,255,255,.06);animation:bkMdIn .4s cubic-bezier(.22,1,.36,1)}
@keyframes bkMdIn{from{opacity:0;transform:translateY(32px) scale(.96)}to{opacity:1;transform:translateY(0) scale(1)}}
.bk-modal::before{content:'';display:block;height:2px;flex-shrink:0;background:linear-gradient(90deg,transparent,var(--blu) 25%,var(--vio) 75%,transparent)}
.bkh{padding:26px 40px 20px;border-bottom:1px solid var(--b0);display:flex;align-items:flex-start;justify-content:space-between;gap:16px;flex-shrink:0}
.bkh-ey{font-family:var(--fm);font-size:8.5px;letter-spacing:.22em;text-transform:uppercase;color:var(--teal);margin-bottom:8px;display:flex;align-items:center;gap:10px}
.bkh-ey::before{content:'';width:12px;height:1px;background:var(--teal)}
.bkh-title{font-family:var(--fd);font-weight:800;font-size:clamp(17px,2.2vw,24px);letter-spacing:-.025em;line-height:1.1;margin-bottom:5px}
.bkh-title span{background:linear-gradient(90deg,var(--blu),var(--vio));-webkit-background-clip:text;background-clip:text;color:transparent}
.bkh-sub{font-size:13px;color:var(--w3);line-height:1.5;max-width:360px}
.bkh-close{width:34px;height:34px;background:rgba(255,255,255,.04);border:1px solid var(--b1);border-radius:7px;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:15px;color:var(--w3);transition:all .2s;flex-shrink:0}
.bkh-close:hover{background:rgba(244,63,94,.1);border-color:rgba(244,63,94,.3);color:var(--rose)}
.bk-progress{padding:14px 40px;border-bottom:1px solid rgba(255,255,255,.03);display:flex;align-items:center;gap:10px;flex-shrink:0}
.bkp-seg{width:34px;height:4px;border-radius:2px;background:var(--b1);transition:all .4s cubic-bezier(.22,1,.36,1)}
.bkp-seg.done{background:linear-gradient(90deg,var(--blu),var(--vio))}
.bkp-seg.active{background:var(--blu);box-shadow:0 0 8px rgba(82,130,255,.5)}
.bkp-label{font-family:var(--fm);font-size:9px;letter-spacing:.12em;text-transform:uppercase;color:var(--w3);margin-left:auto}
.bkp-label span{color:var(--blu)}
.bkp-dtype{font-family:var(--fm);font-size:8.5px;letter-spacing:.1em;text-transform:uppercase;margin-left:6px}
.bk-body{flex:1;overflow-y:auto;padding:28px 40px}
.bk-body::-webkit-scrollbar{width:3px}
.bk-body::-webkit-scrollbar-thumb{background:rgba(82,130,255,.3);border-radius:2px}
.bk-step-in{animation:stepIn .3s cubic-bezier(.22,1,.36,1)}
@keyframes stepIn{from{opacity:0;transform:translateX(20px)}to{opacity:1;transform:translateX(0)}}
.bks-label{font-family:var(--fm);font-size:8.5px;letter-spacing:.2em;text-transform:uppercase;color:var(--blu);margin-bottom:16px;display:flex;align-items:center;gap:8px}
.bks-label::before{content:'';width:10px;height:1px;background:var(--blu)}
.bks-h{font-family:var(--fd);font-weight:800;font-size:19px;letter-spacing:-.02em;margin-bottom:5px}
.bks-d{font-size:13px;color:var(--w3);line-height:1.5;margin-bottom:22px}
.diag-type-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:11px}
.dtype-card{background:rgba(15,30,56,.6);border:1px solid var(--b1);border-radius:12px;padding:18px 16px;cursor:pointer;transition:all .3s cubic-bezier(.22,1,.36,1);position:relative;overflow:hidden}
.dtype-card:hover{border-color:var(--ba);background:var(--blub);transform:translateY(-2px)}
.dtype-card.selected{border-color:rgba(82,130,255,.5);background:rgba(82,130,255,.1);box-shadow:0 0 0 1px rgba(82,130,255,.2)}
.dtype-check{position:absolute;top:10px;right:10px;width:20px;height:20px;border-radius:50%;background:linear-gradient(135deg,var(--blu),var(--vio));display:flex;align-items:center;justify-content:center;font-size:10px;color:#fff;opacity:0;transform:scale(.4);transition:all .25s cubic-bezier(.22,1,.36,1)}
.dtype-card.selected .dtype-check{opacity:1;transform:scale(1)}
.dtype-ic{font-size:20px;margin-bottom:10px}
.dtype-scope{font-family:var(--fm);font-size:8px;letter-spacing:.14em;text-transform:uppercase;margin-bottom:4px}
.dtype-name{font-family:var(--fd);font-weight:700;font-size:14px;letter-spacing:-.01em;margin-bottom:4px}
.dtype-price{font-family:var(--fd);font-weight:800;font-size:16px;letter-spacing:-.02em;background:linear-gradient(90deg,var(--w),var(--blu2));-webkit-background-clip:text;background-clip:text;color:transparent;margin-bottom:4px}
.dtype-time{font-family:var(--fm);font-size:8px;color:var(--w3);margin-bottom:6px}
.dtype-desc{font-size:12px;color:var(--w3);line-height:1.5}
.dtype-tags{display:flex;flex-wrap:wrap;gap:5px;margin-top:8px}
.dtag{font-family:var(--fm);font-size:7.5px;letter-spacing:.09em;text-transform:uppercase;color:var(--w4);border:1px solid var(--b1);padding:2px 7px;border-radius:3px}
.bk-field-err{font-family:var(--fm);font-size:8.5px;letter-spacing:.07em;color:var(--rose);display:flex;align-items:center;gap:5px;margin-top:10px}
.bk-form-row{display:grid;grid-template-columns:1fr 1fr;gap:13px;margin-bottom:13px}
.bk-form-row.full{grid-template-columns:1fr}
.bk-field{display:flex;flex-direction:column;gap:6px}
.bk-label{font-family:var(--fm);font-size:8.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--w3);display:flex;align-items:center;gap:6px}
.bk-req{color:var(--rose);font-size:10px}
.bk-input{background:rgba(15,30,56,.7);border:1px solid var(--b1);border-radius:7px;padding:11px 14px;color:var(--w);font-family:var(--fd);font-size:14px;outline:none;transition:all .25s;-webkit-appearance:none;appearance:none;width:100%}
.bk-input:focus{border-color:var(--blu);background:var(--blub);box-shadow:0 0 0 3px rgba(82,130,255,.12)}
.bk-input.err{border-color:var(--rose)!important;box-shadow:0 0 0 3px rgba(255,77,109,.1)!important}
.bk-input::placeholder{color:var(--w4)}
.bk-select{cursor:pointer;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%235282FF' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 12px center;padding-right:36px}
.bk-select option{background:#060E1C;color:var(--w)}
.bk-textarea{resize:vertical;min-height:80px;font-family:var(--fd);font-size:14px;line-height:1.55}
.bk-field-error{font-family:var(--fm);font-size:8.5px;letter-spacing:.07em;color:var(--rose);display:flex;align-items:center;gap:5px}
.corridor-chips{display:flex;flex-wrap:wrap;gap:8px}
.corr-chip{display:flex;align-items:center;gap:8px;padding:7px 13px;background:rgba(15,30,56,.6);border:1px solid var(--b1);border-radius:100px;cursor:pointer;transition:all .25s;font-size:12px;color:var(--w3)}
.corr-chip:hover{border-color:var(--ba);color:var(--w)}
.corr-chip.sel{border-color:rgba(82,130,255,.45);background:var(--blub);color:var(--w)}
.cc-dot{width:14px;height:14px;border-radius:50%;border:1.5px solid var(--b2);display:flex;align-items:center;justify-content:center;font-size:8px;transition:all .25s;flex-shrink:0}
.corr-chip.sel .cc-dot{background:linear-gradient(135deg,var(--blu),var(--vio));border-color:transparent;color:#fff}
.date-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:16px}
.date-slot{padding:10px 8px;background:rgba(15,30,56,.6);border:1px solid var(--b1);border-radius:8px;text-align:center;cursor:pointer;transition:all .25s}
.date-slot:hover{border-color:var(--ba)}
.date-slot.sel{border-color:rgba(82,130,255,.5);background:var(--blub);box-shadow:0 0 0 1px rgba(82,130,255,.2)}
.ds-wd{font-family:var(--fm);font-size:8px;letter-spacing:.1em;text-transform:uppercase;color:var(--w3);margin-bottom:3px}
.ds-dt{font-family:var(--fd);font-weight:700;font-size:15px;letter-spacing:-.01em;margin-bottom:3px}
.time-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:8px}
.time-slot{padding:9px 6px;background:rgba(15,30,56,.6);border:1px solid var(--b1);border-radius:7px;text-align:center;cursor:pointer;transition:all .25s;font-family:var(--fm);font-size:10px;color:var(--w3)}
.time-slot:hover:not(.unavail){border-color:var(--ba);color:var(--w)}
.time-slot.sel{border-color:rgba(82,130,255,.5);background:var(--blub);color:var(--blu)}
.time-slot.unavail{opacity:.3;cursor:not-allowed}
.radio-group{display:flex;flex-direction:column;gap:8px}
.radio-opt{display:flex;align-items:center;gap:12px;padding:11px 14px;background:rgba(15,30,56,.6);border:1px solid var(--b1);border-radius:8px;cursor:pointer;transition:all .25s}
.radio-opt:hover{border-color:var(--ba);background:var(--blub)}
.radio-opt.sel{border-color:rgba(82,130,255,.45);background:var(--blub)}
.radio-ring{width:18px;height:18px;border-radius:50%;border:2px solid var(--b2);flex-shrink:0;display:flex;align-items:center;justify-content:center;transition:all .25s}
.radio-opt.sel .radio-ring{border-color:var(--blu);background:linear-gradient(135deg,var(--blu),var(--vio))}
.radio-inner{width:6px;height:6px;border-radius:50%;background:#fff;opacity:0;transition:opacity .2s}
.radio-opt.sel .radio-inner{opacity:1}
.radio-lbl{font-size:13.5px;font-weight:500;color:var(--w2)}
.radio-sub{font-family:var(--fm);font-size:8.5px;letter-spacing:.07em;color:var(--w3);margin-top:2px}
.review-grid{display:grid;grid-template-columns:1fr 1fr;gap:13px}
.rv-card{background:rgba(15,30,56,.6);border:1px solid var(--b1);border-radius:10px;padding:18px 16px}
.rv-hd{font-family:var(--fm);font-size:8.5px;letter-spacing:.18em;text-transform:uppercase;color:var(--w3);margin-bottom:12px;padding-bottom:10px;border-bottom:1px solid var(--b0)}
.rv-rows{display:flex;flex-direction:column;gap:9px}
.rv-row{display:flex;justify-content:space-between;align-items:flex-start;gap:12px}
.rv-lbl{font-size:12px;color:var(--w3);flex-shrink:0}
.rv-val{font-size:12.5px;font-weight:600;color:var(--w);text-align:right}
.rv-val.ac{background:linear-gradient(90deg,var(--blu),var(--vio));-webkit-background-clip:text;background-clip:text;color:transparent;font-weight:700}
.price-box{background:rgba(82,130,255,.07);border:1px solid rgba(82,130,255,.2);border-radius:10px;padding:18px 16px;margin-top:12px}
.pb-row{display:flex;justify-content:space-between;font-size:13px;margin-bottom:8px}
.pb-row:last-child{margin-bottom:0;padding-top:10px;border-top:1px solid rgba(82,130,255,.15);font-weight:700;font-size:15px}
.pb-l{color:var(--w3)}.pb-v{color:var(--w);font-family:var(--fm)}
.pb-total{color:var(--blu);font-family:var(--fd);font-weight:900;font-size:20px}
.terms-row{display:flex;align-items:flex-start;gap:12px;margin-top:14px;cursor:pointer}
.terms-box{width:18px;height:18px;border:2px solid var(--b2);border-radius:4px;flex-shrink:0;margin-top:1px;display:flex;align-items:center;justify-content:center;font-size:10px;transition:all .25s}
.terms-box.chk{background:linear-gradient(135deg,var(--blu),var(--vio));border-color:transparent;color:#fff}
.terms-txt{font-size:12px;color:var(--w3);line-height:1.55}
.terms-txt a{color:var(--blu);text-decoration:none}
.bk-footer{padding:18px 40px 26px;border-top:1px solid var(--b0);display:flex;align-items:center;justify-content:space-between;gap:14px;flex-shrink:0}
.bk-footer-info strong{color:var(--w);display:block;font-size:13px;margin-bottom:2px}
.bk-footer-info{font-size:12px;color:var(--w3);line-height:1.5}
.bk-footer-btns{display:flex;gap:10px}
.btn-bk-back{font-family:var(--fd);font-size:13px;font-weight:600;color:var(--w3);background:transparent;border:1px solid var(--b1);padding:11px 22px;border-radius:7px;cursor:pointer;transition:all .25s}
.btn-bk-back:hover{color:var(--w);border-color:var(--b2)}
.btn-bk-next{font-family:var(--fd);font-size:13px;font-weight:700;color:#fff;background:linear-gradient(135deg,var(--blu),var(--vio));border:none;padding:11px 30px;border-radius:7px;cursor:pointer;transition:all .3s;position:relative;overflow:hidden;box-shadow:0 0 24px rgba(82,130,255,.28)}
.btn-bk-next:hover:not(:disabled){transform:translateY(-1px);box-shadow:0 0 40px rgba(82,130,255,.44)}
.btn-bk-next:disabled{opacity:.5;cursor:not-allowed}
.bk-spinner{width:16px;height:16px;border-radius:50%;border:2px solid rgba(255,255,255,.25);border-top-color:#fff;animation:bkSpin .65s linear infinite;display:inline-block}
@keyframes bkSpin{to{transform:rotate(360deg)}}
.bk-submit-err{margin:0 40px 14px;padding:11px 14px;background:rgba(255,77,109,.08);border:1px solid rgba(255,77,109,.25);border-radius:7px;font-family:var(--fm);font-size:11px;color:var(--rose);line-height:1.55}
.bk-success{padding:50px 40px;text-align:center;animation:bkMdIn .5s cubic-bezier(.22,1,.36,1)}
.bks-icon{width:70px;height:70px;border-radius:50%;margin:0 auto 22px;background:linear-gradient(135deg,var(--jade),rgba(0,214,143,.6));display:flex;align-items:center;justify-content:center;font-size:28px;box-shadow:0 0 40px rgba(0,214,143,.3);animation:bksIconPop .5s .2s cubic-bezier(.22,1,.36,1) both}
@keyframes bksIconPop{from{transform:scale(0)}to{transform:scale(1)}}
.bks-tag{font-family:var(--fm);font-size:8.5px;letter-spacing:.2em;text-transform:uppercase;color:var(--jade);margin-bottom:12px}
.bks-h{font-family:var(--fd);font-weight:900;font-size:26px;letter-spacing:-.025em;margin-bottom:10px}
.bks-sub{font-size:14px;color:var(--w3);line-height:1.65;max-width:440px;margin:0 auto 22px}
.bks-ref{font-family:var(--fm);font-size:12px;color:var(--w3);background:var(--blub);border:1px solid var(--ba);padding:10px 22px;border-radius:7px;display:inline-block;margin-bottom:22px}
.bks-ref span{color:var(--blu);font-weight:700;letter-spacing:.1em}
.bks-cards{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:20px}
.bksc{background:rgba(15,30,56,.7);border:1px solid var(--b1);border-radius:10px;padding:14px;text-align:center}
.bksc-ic{font-size:18px;margin-bottom:6px}
.bksc-lbl{font-family:var(--fm);font-size:8px;letter-spacing:.12em;text-transform:uppercase;color:var(--w3);margin-bottom:3px}
.bksc-val{font-size:12.5px;font-weight:600;color:var(--w)}
.bks-next{background:rgba(0,214,143,.06);border:1px solid rgba(0,214,143,.18);border-radius:10px;padding:16px 18px;margin-bottom:22px;font-size:13px;color:var(--w2);line-height:1.7;text-align:left}
.bks-next strong{color:var(--jade);display:block;margin-bottom:6px;font-size:11px;font-family:var(--fm);letter-spacing:.12em;text-transform:uppercase}
.bks-actions{display:flex;gap:10px;justify-content:center;flex-wrap:wrap}
.btn-bks{font-family:var(--fd);font-size:13px;font-weight:700;padding:11px 26px;border-radius:7px;cursor:pointer;transition:all .25s}
.btn-bks.p{background:linear-gradient(135deg,var(--blu),var(--vio));color:#fff;border:none;box-shadow:0 0 22px rgba(82,130,255,.25)}
.btn-bks.p:hover{transform:translateY(-1px)}
.btn-bks.g{background:transparent;color:var(--w2);border:1px solid var(--b2)}
.btn-bks.g:hover{border-color:var(--ba);color:var(--w)}

@media(max-width:680px){
  .bkh,.bk-body,.bk-footer{padding-left:20px;padding-right:20px}
  .bk-progress{padding-left:20px;padding-right:20px}
  .diag-type-grid,.review-grid,.bks-cards{grid-template-columns:1fr}
  .date-grid{grid-template-columns:repeat(2,1fr)}
  .time-grid{grid-template-columns:repeat(3,1fr)}
  .bk-form-row{grid-template-columns:1fr}
  .bk-success{padding:36px 20px}
  .bk-submit-err{margin-left:20px;margin-right:20px}
}
`;
