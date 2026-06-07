import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

/* ═══════════════════════════════════════════════════════════════════
   XAECCOX — GLOBAL SUPPLY CHAIN INTELLIGENCE PLATFORM
═══════════════════════════════════════════════════════════════════ */

const G = `
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

h1.hero-h{font-family:var(--fd);font-weight:900;font-size:clamp(42px,5.5vw,86px);line-height:.94;letter-spacing:-.035em;margin-bottom:24px}
h1.hero-h .arc{background:linear-gradient(90deg,var(--blu),var(--vio));-webkit-background-clip:text;background-clip:text;color:transparent;display:inline-block}
h1.hero-h .serif{font-family:var(--fb);font-weight:300;font-style:italic;color:var(--w2);font-size:.85em;display:block;margin-top:6px;letter-spacing:-.01em}

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
  nav,nav.sc{padding:16px 24px}
  .nav-links{display:none}
  section{padding:80px 24px}
  .hero-right{display:none}
  .rf-wrap,.meth-wrap{grid-template-columns:1fr}
  .market-grid,.sol-grid,.erp-diag-grid{grid-template-columns:1fr}
  .erp-systems,.eco-grid{grid-template-columns:repeat(2,1fr)}
  .met-row{grid-template-columns:repeat(2,1fr)}
  .pricing-grid,.dp-grid{grid-template-columns:1fr}
  .plat-intro,.agent-split,.erp-intro,.section-head-split{grid-template-columns:1fr;gap:40px}
  .dash-body{grid-template-columns:1fr}.d-side,.d-right{display:none}
  .ft-grid{grid-template-columns:1fr 1fr;gap:36px}
  footer{padding:40px 24px}
  .ft-bottom{flex-direction:column;align-items:flex-start}
}
@media(max-width:640px){
  .erp-systems,.eco-grid,.met-row{grid-template-columns:1fr}
  .sol-grid{grid-template-columns:1fr}
  .ft-grid{grid-template-columns:1fr}
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

const CITIES=[
  {id:'Lagos',   x:274, y:256, c:'#F5A623', l:'Lagos'},
  {id:'Nairobi', x:313, y:275, c:'#F5A623', l:'Nairobi'},
  {id:'London',  x:270, y:150, c:'#5282FF', l:'London'},
  {id:'Rotterdam',x:277,y:148, c:'#5282FF', l:'Rotterdam'},
  {id:'NewYork', x:184, y:175, c:'#A259FF', l:'New York'},
  {id:'LA',      x:132, y:191, c:'#A259FF', l:'L.A.'},
  {id:'SaoPaulo',x:216, y:326, c:'#A259FF', l:'São Paulo'},
  {id:'Dubai',   x:334, y:212, c:'#00E5C8', l:'Dubai'},
  {id:'Mumbai',  x:355, y:226, c:'#00E5C8', l:'Mumbai'},
  {id:'Singapore',x:391,y:268, c:'#00E5C8', l:'Singapore'},
  {id:'Shanghai',x:412, y:197, c:'#00E5C8', l:'Shanghai'},
  {id:'Tokyo',   x:433, y:187, c:'#00E5C8', l:'Tokyo'},
];

const ROUTES=[
  {d:'M274,256 Q272,183 270,150',dur:'5s',beg:'0s',   c:'#F5A623'},
  {d:'M274,256 Q200,165 184,175',dur:'6s',beg:'1.2s', c:'#F5A623'},
  {d:'M274,256 Q300,192 334,212',dur:'4.5s',beg:'.5s',c:'#5282FF'},
  {d:'M274,256 Q340,152 412,197',dur:'7.5s',beg:'2s', c:'#00E5C8'},
  {d:'M270,150 Q228,110 184,175',dur:'5.5s',beg:'1.5s',c:'#5282FF'},
  {d:'M270,150 Q300,115 334,212',dur:'5s',beg:'.8s',  c:'#5282FF'},
  {d:'M270,150 Q332,108 391,268',dur:'8s',beg:'3s',   c:'#A259FF'},
  {d:'M184,175 Q157,162 132,191',dur:'4s',beg:'0s',   c:'#A259FF'},
  {d:'M184,175 Q196,252 216,326',dur:'5s',beg:'1s',   c:'#A259FF'},
  {d:'M334,212 Q362,210 391,268',dur:'4.5s',beg:'.5s',c:'#00E5C8'},
  {d:'M391,268 Q401,222 412,197',dur:'4s',beg:'0s',   c:'#00E5C8'},
  {d:'M412,197 Q270,78 132,191', dur:'9s',beg:'2.5s', c:'#A259FF'},
  {d:'M412,197 Q422,182 433,187',dur:'3.5s',beg:'0s', c:'#00E5C8'},
  {d:'M313,275 Q323,238 334,212',dur:'4s',beg:'1s',   c:'#F5A623'},
  {d:'M132,191 Q160,262 216,326',dur:'5s',beg:'.5s',  c:'#A259FF'},
];

const TICKS=[
  {l:'USD/NGN Parallel',v:'₦1,548',d:1},
  {l:'USD/NGN Official',v:'₦1,492',d:1},
  {l:'Apapa Port Dwell',v:'8.3d',d:1},
  {l:'Tin Can Wait',v:'6.1d',d:-1},
  {l:'PH–Lagos Trucking',v:'72hr',d:1},
  {l:'NAFDAC Avg Clearance',v:'14d',d:-1},
  {l:'CBN OMO Rate',v:'24.8%',d:1},
  {l:'LA→Lagos 40HC',v:'$4,820',d:-1},
  {l:'Houston→Lagos 40HC',v:'$5,140',d:1},
  {l:'BDC Spread (avg)',v:'2.4%',d:-1},
  {l:'Brent Crude',v:'$87.4',d:-1},
  {l:'NGX All-Share',v:'104,892',d:1},
];

const LOGS=[
  {t:'09:41:03',msg:'PO-8821 Shanghai→Rotterdam · ETA recalculated · 2-day delay flagged',type:'ex'},
  {t:'09:41:47',msg:'Invoice mismatch detected · PO-8815 · Customs hold risk · Document queued',type:'fl'},
  {t:'09:42:11',msg:'Letter of credit validated · PO-8820 · Singapore→New York · Approved',type:'ok'},
  {t:'09:42:55',msg:'FX window open · EUR/USD spread optimal · Payment execution queued',type:'fl'},
  {t:'09:43:14',msg:'SWIFT MT103 dispatched · ACK received · Supplier notified · T+1',type:'ok'},
  {t:'09:43:52',msg:'Customs hold · PO-8800 · Hamburg port · HS code query · Escalated',type:'es'},
  {t:'09:44:20',msg:'Port congestion alert · LA Long Beach · Alt routing via Seattle identified',type:'fl'},
  {t:'09:44:51',msg:'PO-8791 cleared customs · London Heathrow · Final mile updated',type:'ok'},
];

const MARKETS=[
  {cls:'depth', icon:'🟢', reg:'Active · The Proof', title:'US ↔ Nigeria', ghost:'NOW',
   accent:'linear-gradient(90deg,#F5A623,#FF9500)', ghostC:'#F5A623',
   desc:'Where we go deep. Lagos, Philadelphia, Los Angeles, Houston. CBN compliance, NAFDAC clearance, BDC routing, container consolidation, customs clearing, last-mile to Lagos. Live engagements running.',
   hubs:['Lagos','Philadelphia','Los Angeles','Houston','Abuja']},
  {cls:'roadmap1', icon:'🟡', reg:'12-Month Roadmap', title:'UK ↔ Nigeria', ghost:'12M',
   accent:'linear-gradient(90deg,#5282FF,#7BA3FF)', ghostC:'#5282FF',
   desc:'London ↔ Lagos. Diaspora trade depth, FCA-aligned payment rails, EU customs interoperability for Anglo-Nigerian flows. Sequencing after US–NG operational maturity.',
   hubs:['London','Manchester','Lagos','Abuja']},
  {cls:'roadmap2', icon:'🟡', reg:'18-Month Roadmap', title:'EU ↔ Nigeria', ghost:'18M',
   accent:'linear-gradient(90deg,#A259FF,#C084FC)', ghostC:'#A259FF',
   desc:'Frankfurt, Rotterdam, Antwerp ↔ Lagos. EU Customs Code, EORI registration, SEPA payment rails, REACH compliance for goods crossing Schengen into West Africa.',
   hubs:['Frankfurt','Rotterdam','Antwerp','Lagos']},
  {cls:'roadmap3', icon:'🟡', reg:'24-Month Roadmap', title:'US ↔ Ghana', ghost:'24M',
   accent:'linear-gradient(90deg,#00E5C8,#00B8A3)', ghostC:'#00E5C8',
   desc:'Accra, Tema ↔ US. West Africa expansion via the second-largest English-speaking market on the continent. BoG payment compliance, AfCFTA-enabled cross-border lanes.',
   hubs:['Accra','Tema','New York','Houston']},
];

const SOLUTIONS=[
  {n:'01',t:'CBN & NAFDAC Compliance',d:'Live tracking of CBN circulars, BDC and IMTO licensing posture, NAFDAC registration and product clearance workflows — operationalised against real importer flows, not policy theatre.',tags:['CBN','NAFDAC','BDC Licensing','IMTO']},
  {n:'02',t:'BDC & IMTO Routing',d:'Intelligent payment routing across CBN-licensed BDCs and IMTOs, with audit-grade documentation of every leg. Built for diaspora flows, business cross-border payables, and stablecoin-to-naira settlement.',tags:['BDC Routing','IMTO','Stablecoin','SWIFT MT103']},
  {n:'03',t:'Container Consolidation',d:'US-side consolidation across diaspora suppliers in Philadelphia, LA, Houston. Mixed-cargo lanes for African grocery, restaurant supply, e-commerce imports, and individual diaspora shipments to Lagos.',tags:['LCL','FCL','Diaspora Cargo','Multi-Supplier']},
  {n:'04',t:'Customs Clearing & HS Coding',d:'Apapa, Tin Can, MMIA cargo. HS code review against current Nigerian Customs CET, duty pre-calculation, NAFDAC and SON pre-clearance coordination, and broker oversight to reduce demurrage exposure.',tags:['Apapa','Tin Can','HS Codes','SON','NAFDAC']},
  {n:'05',t:'Last-Mile to Lagos',d:'Container drop, deconsolidation, and last-mile delivery across Lagos and onward to Abuja, Port Harcourt, Ibadan. Visibility from US warehouse pickup to recipient signature.',tags:['Lagos Drop','Deconsolidation','Last-Mile','Track-to-Door']},
  {n:'06',t:'FX & USD/NGN Settlement',d:'Real-time visibility into parallel vs official USD/NGN spreads, FX window timing, multi-leg settlement orchestration, and structured invoice-to-payment matching for corridor flows.',tags:['USD/NGN','FX Spread','Settlement','Invoice Match']},
];

const ERP_SYSTEMS=[
  {name:'SAP S/4HANA',type:'ERP Core',color:'#5282FF',status:'ready'},
  {name:'SAP Ariba',type:'Procurement',color:'#A259FF',status:'ready'},
  {name:'SAP BTP',type:'Integration Platform',color:'#00E5C8',status:'ready'},
  {name:'MuleSoft',type:'API Middleware',color:'#F5A623',status:'ready'},
];

const ERP_DIAGS=[
  {icon:'⚡',title:'S/4HANA Performance Diagnostic',
   desc:'AI-assisted scan of your SAP S/4HANA environment — identifying RICEF bottlenecks, master data inconsistencies, workflow failures, and integration gaps before they cascade into supply chain failures.',
   tags:['RICEF Analysis','Master Data','Workflow Audit'],
   c:'linear-gradient(90deg,#5282FF,#7BA3FF)',tc:'#5282FF',tbc:'rgba(82,130,255,.22)',tbg:'rgba(82,130,255,.05)'},
  {icon:'🔗',title:'Ariba Procurement Intelligence',
   desc:'Deep audit of your Ariba supplier network — contract compliance scoring, payment terms analysis, supplier risk classification, and PO-to-invoice cycle time benchmarking against global standards.',
   tags:['Contract Compliance','Supplier Risk','Cycle Time'],
   c:'linear-gradient(90deg,#A259FF,#C084FC)',tc:'#A259FF',tbc:'rgba(162,89,255,.22)',tbg:'rgba(162,89,255,.05)'},
  {icon:'🌐',title:'BTP Integration Health Check',
   desc:'Comprehensive review of your SAP BTP integration flows — identifying latency bottlenecks, failed event triggers, API error patterns, and data synchronisation gaps across connected enterprise systems.',
   tags:['Integration Flows','API Health','Event Triggers'],
   c:'linear-gradient(90deg,#00E5C8,#00B8A3)',tc:'#00E5C8',tbc:'rgba(0,229,200,.22)',tbg:'rgba(0,229,200,.05)'},
  {icon:'🔀',title:'MuleSoft API Optimisation',
   desc:'Automated analysis of your MuleSoft Anypoint Platform — mapping API call chains, identifying latency hotspots, rate limit exposures, and inefficient data transformation patterns in active integrations.',
   tags:['API Mapping','Rate Limits','Data Transformation'],
   c:'linear-gradient(90deg,#F5A623,#FF9500)',tc:'#F5A623',tbc:'rgba(245,166,35,.22)',tbg:'rgba(245,166,35,.05)'},
  {icon:'📊',title:'ERP Data Quality Audit',
   desc:'AI-powered scan across your ERP data estate — detecting duplicate master records, vendor data inconsistencies, GL coding errors, and spend data anomalies that distort procurement analytics.',
   tags:['Master Data','Vendor Records','Spend Analytics'],
   c:'linear-gradient(90deg,#FF4D6D,#FF6B8A)',tc:'#FF4D6D',tbc:'rgba(255,77,109,.22)',tbg:'rgba(255,77,109,.05)'},
  {icon:'🛡️',title:'Compliance & Controls Assessment',
   desc:'Systematic review of ERP segregation of duties, approval workflow controls, audit trail integrity, and regulatory compliance posture across your full SAP and integrated system landscape.',
   tags:['Segregation of Duties','Controls','Audit Trail'],
   c:'linear-gradient(90deg,#00D68F,#00B87A)',tc:'#00D68F',tbc:'rgba(0,214,143,.22)',tbg:'rgba(0,214,143,.05)'},
];

function Globe(){
  return(
    <div className="globe-scene">
      <div className="globe-outer-ring"/>
      <div className="globe-mid-ring"/>
      <div className="globe-glow"/>
      <svg className="globe-svg" viewBox="0 0 540 540">
        <defs>
          <radialGradient id="gFill" cx="35%" cy="30%" r="65%">
            <stop offset="0%" stopColor="#1A2D55"/>
            <stop offset="55%" stopColor="#0A1528"/>
            <stop offset="100%" stopColor="#040810"/>
          </radialGradient>
          <radialGradient id="gRim" cx="50%" cy="50%" r="50%">
            <stop offset="80%" stopColor="transparent"/>
            <stop offset="100%" stopColor="rgba(82,130,255,0.2)"/>
          </radialGradient>
          <clipPath id="gc"><circle cx="270" cy="270" r="212"/></clipPath>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.5" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <radialGradient id="atmosGrad" cx="50%" cy="50%" r="50%">
            <stop offset="88%" stopColor="transparent"/>
            <stop offset="100%" stopColor="rgba(82,130,255,0.1)"/>
          </radialGradient>
        </defs>
        <circle cx="270" cy="270" r="212" fill="url(#gFill)"/>
        <circle cx="270" cy="270" r="212" fill="url(#gRim)"/>
        <circle cx="270" cy="270" r="212" fill="none" stroke="rgba(82,130,255,0.12)" strokeWidth="1"/>
        <circle cx="270" cy="270" r="220" fill="url(#atmosGrad)"/>
        <circle cx="270" cy="270" r="224" fill="none" stroke="rgba(82,130,255,0.06)" strokeWidth="4"/>
        <g clipPath="url(#gc)" fill="none" stroke="rgba(82,130,255,0.08)" strokeWidth="0.5">
          <ellipse cx="270" cy="128" rx="106" ry="7"/>
          <ellipse cx="270" cy="200" rx="182" ry="8"/>
          <ellipse cx="270" cy="270" rx="212" ry="9"/>
          <ellipse cx="270" cy="340" rx="182" ry="8"/>
          <ellipse cx="270" cy="412" rx="106" ry="7"/>
          <ellipse cx="270" cy="270" rx="62"  ry="212"/>
          <ellipse cx="270" cy="270" rx="132" ry="212"/>
          <ellipse cx="270" cy="270" rx="212" ry="76" transform="rotate(90,270,270)"/>
        </g>
        {ROUTES.map((r,i)=>(
          <g key={i}>
            <path id={`rp${i}`} d={r.d} fill="none" stroke={r.c} strokeWidth=".9"
              strokeDasharray="800" strokeDashoffset="800" opacity=".38"
              className="r-path" style={{animationDelay:`${i*.1}s`}}/>
            <circle r="2.5" fill={r.c} opacity=".95" filter="url(#glow)">
              <animateMotion dur={r.dur} begin={r.beg} repeatCount="indefinite">
                <mpath href={`#rp${i}`}/>
              </animateMotion>
            </circle>
          </g>
        ))}
        {CITIES.map(c=>(
          <g key={c.id}>
            <circle cx={c.x} cy={c.y} r="14" fill={c.c} opacity=".06">
              <animate attributeName="r" values="8;16;8" dur="3s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values=".07;.02;.07" dur="3s" repeatCount="indefinite"/>
            </circle>
            <circle cx={c.x} cy={c.y} r="4" fill={c.c} filter="url(#glow)"/>
            <circle cx={c.x} cy={c.y} r="4" fill="none" stroke={c.c} strokeWidth="1" opacity=".45">
              <animate attributeName="r" values="4;10;4" dur="2.5s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values=".45;0;.45" dur="2.5s" repeatCount="indefinite"/>
            </circle>
            <text x={c.x+7} y={c.y-6} fill={c.c} fontSize="6.5" fontFamily="IBM Plex Mono,monospace" opacity=".85" fontWeight="700">{c.l}</text>
          </g>
        ))}
        <text x="16" y="30" fill="rgba(82,130,255,0.25)" fontSize="7" fontFamily="IBM Plex Mono,monospace" fontWeight="700">CONCEPT · GLOBAL TRADE NETWORK</text>
        <text x="16" y="42" fill="rgba(82,130,255,0.15)" fontSize="6" fontFamily="IBM Plex Mono,monospace">12 HUBS · 15 CORRIDORS · ILLUSTRATIVE</text>
      </svg>
      <div className="float-card" style={{top:'12%',left:'-18%','--dur':'4.2s','--c':'#5282FF'}}>
        <div className="fc-label">Concept · Agents</div>
        <div className="fc-val"><span className="fc-dot" style={{background:'#5282FF'}}/>6 Designed</div>
      </div>
      <div className="float-card" style={{top:'35%',right:'-20%','--dur':'3.8s','--c':'#00E5C8'}}>
        <div className="fc-label">Sample View</div>
        <div className="fc-val"><span className="fc-dot" style={{background:'#00E5C8'}}/>147 Tracked</div>
      </div>
      <div className="float-card" style={{bottom:'25%',left:'-22%','--dur':'5s','--c':'#A259FF'}}>
        <div className="fc-label">Sample View</div>
        <div className="fc-val"><span className="fc-dot" style={{background:'#A259FF'}}/>2,841 Docs</div>
      </div>
      <div className="float-card" style={{bottom:'8%',right:'-15%','--dur':'4.5s','--c':'#F5A623'}}>
        <div className="fc-label">FX Concept</div>
        <div className="fc-val"><span className="fc-dot" style={{background:'#F5A623'}}/>Window Open</div>
      </div>
    </div>
  );
}

function ERPFlowDiagram(){
  return(
    <div className="erp-flow-wrap fu">
      <div className="erp-flow-title">AI-Powered ERP Diagnostic & Resolution Flow</div>
      <svg className="erp-flow-svg" viewBox="0 0 900 200" style={{height:200}}>
        <defs>
          <linearGradient id="fg1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#5282FF"/><stop offset="100%" stopColor="#A259FF"/>
          </linearGradient>
          <linearGradient id="fg2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#A259FF"/><stop offset="100%" stopColor="#00E5C8"/>
          </linearGradient>
          <linearGradient id="fg3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00E5C8"/><stop offset="100%" stopColor="#F5A623"/>
          </linearGradient>
          <linearGradient id="fg4" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F5A623"/><stop offset="100%" stopColor="#00D68F"/>
          </linearGradient>
          <filter id="nf" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>
        {[[110,100,210,100,'fg1'],[300,100,390,100,'fg2'],[490,100,580,100,'fg3'],[670,100,760,100,'fg4']].map(([x1,y1,x2,y2,grad],i)=>(
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={`url(#${grad})`} strokeWidth="2" strokeDasharray="4,3" opacity=".6">
            <animate attributeName="stroke-dashoffset" values="0;-14" dur="1.5s" repeatCount="indefinite"/>
          </line>
        ))}
        {[
          {x:60,y:100,label:'ERP\nSystem',sub:'SAP / MuleSoft',c:'#5282FF',icon:'⬡'},
          {x:250,y:100,label:'AI\nDiagnostic',sub:'Pattern Detection',c:'#A259FF',icon:'◉'},
          {x:440,y:100,label:'Gap\nAnalysis',sub:'Risk Scoring',c:'#00E5C8',icon:'◈'},
          {x:625,y:100,label:'Agent\nDeploy',sub:'Auto-Resolution',c:'#F5A623',icon:'◆'},
          {x:810,y:100,label:'Optimised\nSystem',sub:'Continuous Learn',c:'#00D68F',icon:'✦'},
        ].map((n,i)=>(
          <g key={i}>
            <circle cx={n.x} cy={n.y} r="44" fill="none" stroke={n.c} strokeWidth=".5" opacity=".2">
              <animate attributeName="r" values="42;46;42" dur={`${3+i*.5}s`} repeatCount="indefinite"/>
              <animate attributeName="opacity" values=".2;.06;.2" dur={`${3+i*.5}s`} repeatCount="indefinite"/>
            </circle>
            <circle cx={n.x} cy={n.y} r="38" fill="rgba(10,22,40,0.9)" stroke={n.c} strokeWidth="1.2" filter="url(#nf)"/>
            <circle cx={n.x} cy={n.y} r="38" fill="none" stroke={n.c} strokeWidth=".5" opacity=".4"/>
            <text x={n.x} y={n.y-8} textAnchor="middle" fill={n.c} fontSize="16" fontFamily="monospace">{n.icon}</text>
            <text x={n.x} y={n.y+8} textAnchor="middle" fill="rgba(240,244,255,0.9)" fontSize="9" fontFamily="Outfit,sans-serif" fontWeight="700">{n.label.split('\n')[0]}</text>
            <text x={n.x} y={n.y+20} textAnchor="middle" fill="rgba(240,244,255,0.9)" fontSize="9" fontFamily="Outfit,sans-serif" fontWeight="700">{n.label.split('\n')[1]}</text>
            <text x={n.x} y={n.y+52} textAnchor="middle" fill={n.c} fontSize="7.5" fontFamily="IBM Plex Mono,monospace" opacity=".8">{n.sub}</text>
          </g>
        ))}
      </svg>
    </div>
  );
}

function Counter({target,suffix='',duration=1800}){
  const [val,setVal]=useState(0);
  const ref=useRef(); const started=useRef(false);
  useEffect(()=>{
    const obs=new IntersectionObserver(([e])=>{
      if(e.isIntersecting&&!started.current){
        started.current=true;
        const steps=60, inc=target/steps; let cur=0;
        const id=setInterval(()=>{
          cur=Math.min(cur+inc,target);setVal(Math.floor(cur));
          if(cur>=target)clearInterval(id);
        },duration/steps);
      }
    },{threshold:.5});
    if(ref.current)obs.observe(ref.current);
    return()=>obs.disconnect();
  },[target,duration]);
  return <span ref={ref}>{val.toLocaleString()}{suffix}</span>;
}

function AgentLog(){
  const [log,setLog]=useState(LOGS.slice(0,5));
  const [i,setI]=useState(5);
  useEffect(()=>{
    const id=setInterval(()=>{
      setI(n=>{const nx=n>=LOGS.length?0:n;setLog(p=>[LOGS[nx],...p.slice(0,5)]);return nx+1;});
    },2800);
    return()=>clearInterval(id);
  },[]);
  return(
    <div className="log-wrap">
      {log.map((e,i)=>(
        <div key={i} className={`le ${e.type}`} style={{opacity:1-i*.12}}>
          <span className="ts">{e.t} UTC</span>{e.msg}
        </div>
      ))}
    </div>
  );
}

function PriceCard({tier,isAnnual,onBook}){
  const monthPrice = isAnnual ? Math.floor(tier.monthly*.8) : tier.monthly;
  const fmtPrice = monthPrice.toLocaleString();
  const handleCta = () => { if(onBook) onBook(tier.diagId || 'full'); };
  return(
    <div className={`price-card edge-lit${tier.featured?' featured':''}`} style={{'--pc':tier.color}}>
      {tier.featured&&<span className="pc-badge pop">Most Popular</span>}
      {!tier.featured&&<span className="pc-badge std">{tier.badge}</span>}
      <div className="pc-name">{tier.name}</div>
      <div className="pc-desc">{tier.desc}</div>
      <div className={`pc-price${tier.featured?' grad':''}`} style={!tier.featured?{color:'var(--w)'}:{}}>
        <span className="pc-cur">$</span>
        {tier.custom?'Custom':fmtPrice}
        {!tier.custom&&<span className="pc-per">/mo</span>}
      </div>
      <div className="pc-sub">
        {tier.custom?'Contact for enterprise pricing':isAnnual?'billed annually':'billed monthly'}
      </div>
      <div className="pc-divider"/>
      <div className="pc-features">
        {tier.features.map((f,i)=>(
          <div className="pcf" key={i}>
            <span className={`pcf-ic${f.included?'':' x'}`}>{f.included?'✓':'–'}</span>
            <span style={f.included?{}:{color:'var(--w4)'}}>{f.label}</span>
          </div>
        ))}
      </div>
      <button className={`pc-cta ${tier.featured?'main':'outline'}`} onClick={handleCta}>{tier.cta}</button>
    </div>
  );
}

const DIAG_TYPES=[
  {id:'standard',icon:'🧭',scope:'Standard',name:'Standard Corridor Diagnostic',price:'$12,500',time:'3 weeks',desc:'Structured assessment of your corridor: trade flow analysis, compliance gap review (CBN, NAFDAC, US Customs), payment routing audit, logistics cost benchmarking, prioritised 90-day action plan.',tags:['Trade Flow','Compliance','Payment Audit','Logistics Cost'],dca:'linear-gradient(90deg,#5282FF,#7BA3FF)',col:'#5282FF'},
  {id:'deep',icon:'🔬',scope:'Deep · Hands-On',name:'Deep Corridor Diagnostic',price:'$25,000',time:'6 weeks',desc:'Everything in Standard, plus weekly working sessions with founder, hands-on partner introductions across the corridor, implementation-readiness deliverable, and 90-day async follow-up access.',tags:['Weekly Sessions','Partner Intros','Implementation','Action Plan'],dca:'linear-gradient(90deg,#A259FF,#C084FC)',col:'#A259FF'},
];
const BK_CORRIDORS=['Africa (Nigeria / Kenya / Ghana)','Americas (US / Canada / Brazil)','Europe (UK / EU-27 / Scandinavia)','Asia-Pacific (Singapore / China / India / UAE)','Africa → Europe','Africa → Americas','Asia → Africa','Asia → Americas','Global (Multiple regions)'];
const BK_TZ=['WAT – West Africa Time (Lagos)','CET – Central European Time (London/Paris)','EST – Eastern Standard Time (New York)','PST – Pacific Standard Time (Los Angeles)','GST – Gulf Standard Time (Dubai)','IST – India Standard Time (Mumbai)','SGT – Singapore Time','JST – Japan Standard Time (Tokyo)'];
const BK_TIMES=['08:00','09:00','10:00','11:00','13:00','14:00','15:00','16:00'];
const BK_UNAVAIL=[1,4,7];
const BK_ROLES=['CEO / MD','COO / Operations Director','CFO / Finance Director','Procurement Manager','Supply Chain Manager','IT / ERP Manager','Logistics Manager','Other'];
const BK_ERP=['SAP S/4HANA','SAP Ariba','SAP BTP','MuleSoft','Oracle','Microsoft Dynamics','NetSuite','None / Other'];
const BK_VOL=['Under $1M','$1M – $5M','$5M – $20M','$20M – $100M','Over $100M'];
const BK_FT_INFO={1:{l:'No commitment required',s:'Kickoff call is complimentary'},2:{l:'Your data is encrypted',s:'GDPR-compliant · Never shared'},3:{l:'Confirmed within 2 business hours',s:'Calendar invite sent immediately'},4:{l:'No payment required today',s:'Fees confirmed after formal scoping'}};

function bkGetDates(){
  const d=[];const n=new Date();n.setDate(n.getDate()+2);
  while(d.length<6){if(n.getDay()!==0&&n.getDay()!==6)d.push(new Date(n));n.setDate(n.getDate()+1);}
  return d;
}
function bkRef(){return'XCX-'+Math.random().toString(36).substring(2,6).toUpperCase()+'-'+Date.now().toString().slice(-4);}

function BookingModal({onClose,preselect=''}){
  const TOTAL=4;
  const [step,setStep]=useState(1);
  const [data,setData]=useState({diagnostic:preselect,firstName:'',lastName:'',email:'',phone:'',company:'',role:'',tradeVolume:'',erp:'',corridors:[],context:'',timezone:'',date:'',time:'',meetingFormat:''});
  const [errors,setErrors]=useState({});
  const [terms,setTerms]=useState(false);
  const [submitting,setSubmitting]=useState(false);
  const [submitError,setSubmitError]=useState('');
  const [done,setDone]=useState(false);
  const [ref]=useState(bkRef());
  const bodyRef=useRef();
  const dates=bkGetDates();

  const dtype=DIAG_TYPES.find(d=>d.id===data.diagnostic);
  const fmtDate=data.date?new Date(data.date).toLocaleDateString('en-GB',{weekday:'short',day:'numeric',month:'short'}):null;

  useEffect(()=>{document.body.style.overflow='hidden';return()=>{document.body.style.overflow='';};},[]);
  useEffect(()=>{if(bodyRef.current)bodyRef.current.scrollTop=0;},[step]);

  const set=(k,v)=>setData(p=>({...p,[k]:v}));
  const toggleCorr=(c)=>set('corridors',(data.corridors||[]).includes(c)?data.corridors.filter(x=>x!==c):[...(data.corridors||[]),c]);

  const validate=()=>{
    const e={};
    if(step===1&&!data.diagnostic)e.diagnostic=true;
    if(step===2){
      if(!data.firstName?.trim())e.firstName=true;
      if(!data.lastName?.trim())e.lastName=true;
      if(!data.email?.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))e.email='Enter a valid email';
      if(!data.phone?.trim())e.phone=true;
      if(!data.company?.trim())e.company=true;
      if(!data.role)e.role=true;
    }
    if(step===3){
      if(!data.timezone)e.timezone=true;
      if(!data.date)e.date=true;
      if(!data.time)e.time=true;
    }
    if(step===4&&!terms)e.terms=true;
    setErrors(e);return Object.keys(e).length===0;
  };

  const handleNext=async()=>{
    if(!validate())return;
    if(step<TOTAL){setStep(s=>s+1);return;}
    setSubmitting(true);
    setSubmitError('');
    try {
      const formId = import.meta.env.VITE_FORMSPREE_ID || 'xpqbpjky';
      if (!formId) throw new Error('NOT_CONFIGURED');
      const res = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        headers: {'Content-Type':'application/json','Accept':'application/json'},
        body: JSON.stringify({
          _subject: `XaeccoX Diagnostic Booking — ${dtype?.name || 'Unknown'} — ${data.firstName} ${data.lastName}`,
          reference: ref,
          diagnostic_type: dtype?.name,
          diagnostic_scope: dtype?.scope,
          diagnostic_price: dtype?.price,
          diagnostic_timeline: dtype?.time,
          first_name: data.firstName,
          last_name: data.lastName,
          email: data.email,
          phone: data.phone,
          company: data.company,
          role: data.role,
          trade_volume: data.tradeVolume,
          erp_system: data.erp,
          corridors: (data.corridors||[]).join(', '),
          challenge_context: data.context,
          timezone: data.timezone,
          kickoff_date: fmtDate,
          kickoff_time: data.time,
          meeting_format: data.meetingFormat,
        }),
      });
      if (!res.ok) throw new Error('SUBMIT_FAILED');
      setDone(true);
    } catch (err) {
      setSubmitError(
        err.message === 'NOT_CONFIGURED'
          ? 'Bookings will open shortly. Please email okoli.chukie@gmail.com to reserve a slot.'
          : 'Something went wrong on submit. Please try again, or email okoli.chukie@gmail.com directly.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  const handleBack=()=>{setErrors({});setSubmitError('');setStep(s=>s-1);};

  return(
    <div className="bk-overlay" onClick={e=>{if(e.target===e.currentTarget)onClose();}}>
      <div className="bk-modal">
        <div className="bkh">
          <div className="bkh-l">
            <div className="bkh-ey">Diagnostic Booking</div>
            <div className="bkh-title">Book your <span>Supply Chain Diagnostic</span></div>
            <div className="bkh-sub">Select your assessment, share context, schedule a kickoff — our team takes it from there.</div>
          </div>
          <button className="bkh-close" onClick={onClose}>✕</button>
        </div>

        <div className="bk-progress">
          {Array.from({length:TOTAL}).map((_,i)=>(
            <div key={i} className={`bkp-seg${i+1<step?' done':i+1===step?' active':''}`}/>
          ))}
          <div className="bkp-label">Step <span>{step}</span> of {TOTAL}</div>
          {dtype&&<div className="bkp-dtype" style={{color:dtype.col}}>{dtype.name}</div>}
        </div>

        {!done?(
          <>
            <div className="bk-body" ref={bodyRef}>
              {step===1&&(
                <div className="bk-step-in">
                  <div className="bks-label">Step 1 of 4</div>
                  <div className="bks-h">Choose your diagnostic</div>
                  <div className="bks-d">Select the assessment type that best matches your supply chain complexity and timeline.</div>
                  <div className="diag-type-grid">
                    {DIAG_TYPES.map(d=>(
                      <div key={d.id} className={`dtype-card${data.diagnostic===d.id?' selected':''}`} onClick={()=>set('diagnostic',d.id)}>
                        <div className="dtype-check">✓</div>
                        <div className="dtype-ic">{d.icon}</div>
                        <div className="dtype-scope" style={{color:d.col}}>{d.scope}</div>
                        <div className="dtype-name">{d.name}</div>
                        <div className="dtype-price">{d.price}</div>
                        <div className="dtype-time">⏱ {d.time}</div>
                        <div className="dtype-desc">{d.desc}</div>
                        <div className="dtype-tags">{d.tags.map(t=><span className="dtag" key={t}>{t}</span>)}</div>
                      </div>
                    ))}
                  </div>
                  {errors.diagnostic&&<div className="bk-field-err">⚠ Please select a diagnostic type to continue</div>}
                </div>
              )}

              {step===2&&(
                <div className="bk-step-in">
                  <div className="bks-label">Step 2 of 4</div>
                  <div className="bks-h">Tell us about your business</div>
                  <div className="bks-d">Helps us assign the right specialist team and tailor the diagnostic scope.</div>
                  <div className="bk-form-row">
                    <div className="bk-field">
                      <label className="bk-label">First Name <span className="bk-req">*</span></label>
                      <input className={`bk-input${errors.firstName?' err':''}`} placeholder="e.g. Chukwura" value={data.firstName} onChange={e=>set('firstName',e.target.value)}/>
                      {errors.firstName&&<div className="bk-field-error">⚠ Required</div>}
                    </div>
                    <div className="bk-field">
                      <label className="bk-label">Last Name <span className="bk-req">*</span></label>
                      <input className={`bk-input${errors.lastName?' err':''}`} placeholder="e.g. Obi" value={data.lastName} onChange={e=>set('lastName',e.target.value)}/>
                      {errors.lastName&&<div className="bk-field-error">⚠ Required</div>}
                    </div>
                  </div>
                  <div className="bk-form-row">
                    <div className="bk-field">
                      <label className="bk-label">Work Email <span className="bk-req">*</span></label>
                      <input className={`bk-input${errors.email?' err':''}`} type="email" placeholder="name@company.com" value={data.email} onChange={e=>set('email',e.target.value)}/>
                      {errors.email&&<div className="bk-field-error">⚠ {errors.email}</div>}
                    </div>
                    <div className="bk-field">
                      <label className="bk-label">Phone / WhatsApp <span className="bk-req">*</span></label>
                      <input className={`bk-input${errors.phone?' err':''}`} placeholder="+234 800 000 0000" value={data.phone} onChange={e=>set('phone',e.target.value)}/>
                      {errors.phone&&<div className="bk-field-error">⚠ Required</div>}
                    </div>
                  </div>
                  <div className="bk-form-row">
                    <div className="bk-field">
                      <label className="bk-label">Company Name <span className="bk-req">*</span></label>
                      <input className={`bk-input${errors.company?' err':''}`} placeholder="Your company" value={data.company} onChange={e=>set('company',e.target.value)}/>
                      {errors.company&&<div className="bk-field-error">⚠ Required</div>}
                    </div>
                    <div className="bk-field">
                      <label className="bk-label">Your Role <span className="bk-req">*</span></label>
                      <select className={`bk-input bk-select${errors.role?' err':''}`} value={data.role} onChange={e=>set('role',e.target.value)}>
                        <option value="">Select your role</option>
                        {BK_ROLES.map(r=><option key={r} value={r}>{r}</option>)}
                      </select>
                      {errors.role&&<div className="bk-field-error">⚠ Required</div>}
                    </div>
                  </div>
                  <div className="bk-form-row" style={{marginBottom:14}}>
                    <div className="bk-field">
                      <label className="bk-label">Annual Trade Volume</label>
                      <select className="bk-input bk-select" value={data.tradeVolume} onChange={e=>set('tradeVolume',e.target.value)}>
                        <option value="">Select range</option>
                        {BK_VOL.map(v=><option key={v} value={v}>{v}</option>)}
                      </select>
                    </div>
                    <div className="bk-field">
                      <label className="bk-label">Primary ERP System</label>
                      <select className="bk-input bk-select" value={data.erp} onChange={e=>set('erp',e.target.value)}>
                        <option value="">Select ERP</option>
                        {BK_ERP.map(e=><option key={e} value={e}>{e}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className="bk-field" style={{marginBottom:14}}>
                    <label className="bk-label">Active Trade Corridors</label>
                    <div className="corridor-chips">
                      {BK_CORRIDORS.map(c=>{
                        const sel=(data.corridors||[]).includes(c);
                        return(
                          <div key={c} className={`corr-chip${sel?' sel':''}`} onClick={()=>toggleCorr(c)}>
                            <div className="cc-dot">{sel?'✓':''}</div>{c}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="bk-form-row full">
                    <div className="bk-field">
                      <label className="bk-label">Key Challenge or Context</label>
                      <textarea className="bk-input bk-textarea" placeholder="Describe your biggest supply chain or ERP challenge — customs delays, bank rejections, SAP data issues, payment mismatches..." value={data.context} onChange={e=>set('context',e.target.value)}/>
                    </div>
                  </div>
                </div>
              )}

              {step===3&&(
                <div className="bk-step-in">
                  <div className="bks-label">Step 3 of 4</div>
                  <div className="bks-h">Schedule your kickoff call</div>
                  <div className="bks-d">Pick a date and time for your 30-minute diagnostic kickoff call. Times shown in your selected timezone.</div>
                  <div className="bk-field" style={{marginBottom:18}}>
                    <label className="bk-label">Your Timezone <span className="bk-req">*</span></label>
                    <select className={`bk-input bk-select${errors.timezone?' err':''}`} value={data.timezone} onChange={e=>set('timezone',e.target.value)}>
                      <option value="">Select timezone</option>
                      {BK_TZ.map(t=><option key={t} value={t}>{t}</option>)}
                    </select>
                    {errors.timezone&&<div className="bk-field-error">⚠ Please select your timezone</div>}
                  </div>
                  <div className="bk-field" style={{marginBottom:18}}>
                    <label className="bk-label">Preferred Date <span className="bk-req">*</span></label>
                    <div className="date-grid">
                      {dates.map((d,i)=>{
                        const s=d.toDateString();const sel=data.date===s;
                        return(
                          <div key={i} className={`date-slot${sel?' sel':''}`} onClick={()=>set('date',s)}>
                            <div className="ds-wd">{d.toLocaleDateString('en-GB',{weekday:'short'})}</div>
                            <div className="ds-dt">{d.toLocaleDateString('en-GB',{day:'numeric',month:'short'})}</div>
                          </div>
                        );
                      })}
                    </div>
                    {errors.date&&<div className="bk-field-error" style={{marginTop:8}}>⚠ Please select a date</div>}
                  </div>
                  <div className="bk-field" style={{marginBottom:18}}>
                    <label className="bk-label">Preferred Time <span className="bk-req">*</span></label>
                    <div className="time-grid">
                      {BK_TIMES.map((t,i)=>{
                        const na=BK_UNAVAIL.includes(i);const sel=data.time===t;
                        return(
                          <div key={t} className={`time-slot${sel?' sel':''}${na?' unavail':''}`} onClick={()=>!na&&set('time',t)}>
                            {t}{na?' ✕':''}
                          </div>
                        );
                      })}
                    </div>
                    {errors.time&&<div className="bk-field-error" style={{marginTop:8}}>⚠ Please select a time</div>}
                  </div>
                  <div className="bk-field">
                    <label className="bk-label">Meeting Format</label>
                    <div className="radio-group">
                      {[{v:'zoom',l:'Zoom Video Call',s:'Link sent 1 hour before the call'},{v:'teams',l:'Microsoft Teams',s:'Calendar invite with Teams link'},{v:'phone',l:'Phone / WhatsApp Call',s:'We call you at your provided number'}].map(o=>(
                        <div key={o.v} className={`radio-opt${data.meetingFormat===o.v?' sel':''}`} onClick={()=>set('meetingFormat',o.v)}>
                          <div className="radio-ring"><div className="radio-inner"/></div>
                          <div><div className="radio-lbl">{o.l}</div><div className="radio-sub">{o.s}</div></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {step===4&&(
                <div className="bk-step-in">
                  <div className="bks-label">Step 4 of 4</div>
                  <div className="bks-h">Review & confirm</div>
                  <div className="bks-d">Please review your details. Our team confirms within 2 business hours.</div>
                  <div className="review-grid">
                    <div className="rv-card">
                      <div className="rv-hd">Diagnostic Selected</div>
                      <div className="rv-rows">
                        <div className="rv-row"><span className="rv-lbl">Type</span><span className="rv-val ac">{dtype?.name}</span></div>
                        <div className="rv-row"><span className="rv-lbl">Scope</span><span className="rv-val">{dtype?.scope}</span></div>
                        <div className="rv-row"><span className="rv-lbl">Timeline</span><span className="rv-val">{dtype?.time}</span></div>
                        {data.erp&&<div className="rv-row"><span className="rv-lbl">ERP</span><span className="rv-val">{data.erp}</span></div>}
                        {data.corridors?.length>0&&<div className="rv-row"><span className="rv-lbl">Corridors</span><span className="rv-val" style={{fontSize:11}}>{data.corridors.join(', ')}</span></div>}
                      </div>
                    </div>
                    <div className="rv-card">
                      <div className="rv-hd">Contact Details</div>
                      <div className="rv-rows">
                        <div className="rv-row"><span className="rv-lbl">Name</span><span className="rv-val">{data.firstName} {data.lastName}</span></div>
                        <div className="rv-row"><span className="rv-lbl">Email</span><span className="rv-val" style={{fontSize:11}}>{data.email}</span></div>
                        <div className="rv-row"><span className="rv-lbl">Phone</span><span className="rv-val">{data.phone}</span></div>
                        <div className="rv-row"><span className="rv-lbl">Company</span><span className="rv-val">{data.company}</span></div>
                        <div className="rv-row"><span className="rv-lbl">Role</span><span className="rv-val">{data.role}</span></div>
                      </div>
                    </div>
                  </div>
                  <div className="rv-card" style={{marginTop:12}}>
                    <div className="rv-hd">Scheduled Kickoff</div>
                    <div style={{display:'flex',flexWrap:'wrap',gap:16}}>
                      <div className="rv-row"><span className="rv-lbl">Date</span><span className="rv-val ac">{fmtDate||'—'}</span></div>
                      <div className="rv-row"><span className="rv-lbl">Time</span><span className="rv-val">{data.time||'—'}</span></div>
                      <div className="rv-row"><span className="rv-lbl">Timezone</span><span className="rv-val" style={{fontSize:11}}>{data.timezone||'—'}</span></div>
                      <div className="rv-row"><span className="rv-lbl">Format</span><span className="rv-val">{data.meetingFormat||'—'}</span></div>
                    </div>
                  </div>
                  <div className="price-box">
                    <div className="pb-row"><span className="pb-l">Diagnostic type</span><span className="pb-v">{dtype?.name}</span></div>
                    <div className="pb-row"><span className="pb-l">Kickoff consultation</span><span className="pb-v" style={{color:'var(--jade)'}}>Complimentary</span></div>
                    <div className="pb-row"><span className="pb-l">Engagement fee</span><span className="pb-total">{dtype?.price}</span></div>
                  </div>
                  <div className="terms-row" onClick={()=>setTerms(!terms)}>
                    <div className={`terms-box${terms?' chk':''}`}>{terms?'✓':''}</div>
                    <div className="terms-txt">
                      I agree to the XaeccoX Terms of Service and Privacy Policy. Engagement fees are confirmed upon project scoping and formal proposal acceptance. The kickoff call is complimentary with no obligation.
                    </div>
                  </div>
                  {errors.terms&&<div className="bk-field-error" style={{marginTop:8}}>⚠ Please accept the terms to continue</div>}
                </div>
              )}
            </div>

            {submitError && <div className="bk-submit-err">⚠ {submitError}</div>}

            <div className="bk-footer">
              <div className="bk-footer-info">
                <strong>{BK_FT_INFO[step].l}</strong>
                {BK_FT_INFO[step].s}
              </div>
              <div className="bk-footer-btns">
                {step>1&&<button className="btn-bk-back" onClick={handleBack} disabled={submitting}>← Back</button>}
                <button className="btn-bk-next" onClick={handleNext} disabled={submitting}>
                  {submitting
                    ?<span style={{display:'flex',alignItems:'center',gap:10}}><span className="bk-spinner"/>Submitting…</span>
                    :step===TOTAL?'Confirm Booking →':'Continue →'
                  }
                </button>
              </div>
            </div>
          </>
        ):(
          <div className="bk-success">
            <div className="bks-icon">✓</div>
            <div className="bks-tag">Booking Received</div>
            <div className="bks-h">You're booked in.</div>
            <div className="bks-sub">Your diagnostic kickoff has been received. A member of the XaeccoX team will confirm within 2 business hours and send your calendar invite.</div>
            <div className="bks-ref">Reference: <span>{ref}</span></div>
            <div className="bks-cards">
              <div className="bksc"><div className="bksc-ic">📋</div><div className="bksc-lbl">Diagnostic</div><div className="bksc-val">{dtype?.name}</div></div>
              <div className="bksc"><div className="bksc-ic">📅</div><div className="bksc-lbl">Kickoff Call</div><div className="bksc-val">{fmtDate} · {data.time}</div></div>
              <div className="bksc"><div className="bksc-ic">📧</div><div className="bksc-lbl">Confirmation to</div><div className="bksc-val" style={{fontSize:11}}>{data.email}</div></div>
            </div>
            <div className="bks-next">
              <strong>What happens next</strong>
              Confirmation email arrives within 2 business hours at <strong>{data.email}</strong>. You'll receive a calendar invite with {data.meetingFormat==='teams'?'Teams':data.meetingFormat==='phone'?'call details':'Zoom'} for your {data.time} kickoff. Our analyst team begins pre-processing your corridor and ERP data ahead of the call. Full diagnostic delivery: {dtype?.time} from project kick-off.
            </div>
            <div className="bks-actions">
              <button className="btn-bks p" onClick={onClose}>Return to XaeccoX</button>
              <button className="btn-bks g" onClick={()=>window.print()}>Download Confirmation</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const DASH_VIEWS = {
  'Dashboard': {
    title: 'Corridor Operations Centre',
    kpis: [{v:'147',l:'Active Shipments'},{v:'$4.2M',l:'In-Transit Value'},{v:'6',l:'Agents Running'}],
    list: [
      {id:'PO-9104',r:'Shanghai → Rotterdam',s:'ss-tr',sl:'In Transit'},
      {id:'PO-9098',r:'Singapore → Los Angeles',s:'ss-ok',sl:'Cleared'},
      {id:'PO-9091',r:'Dubai → Frankfurt',s:'ss-ho',sl:'On Hold'},
      {id:'PO-9088',r:'Mumbai → London',s:'ss-ok',sl:'Cleared'},
      {id:'PO-9082',r:'São Paulo → Antwerp',s:'ss-tr',sl:'In Transit'},
    ],
  },
  'Shipments': {
    title: 'Active Shipments',
    kpis: [{v:'147',l:'In Transit'},{v:'82',l:'Cleared (7d)'},{v:'4',l:'On Hold'}],
    list: [
      {id:'PO-9104',r:'Shanghai → Rotterdam · Maersk',s:'ss-tr',sl:'In Transit'},
      {id:'PO-9098',r:'Singapore → Los Angeles · COSCO',s:'ss-ok',sl:'Cleared'},
      {id:'PO-9091',r:'Dubai → Frankfurt · DHL',s:'ss-ho',sl:'On Hold'},
      {id:'PO-9088',r:'Mumbai → London · MSC',s:'ss-ok',sl:'Cleared'},
      {id:'PO-9082',r:'São Paulo → Antwerp · Hapag-Lloyd',s:'ss-tr',sl:'In Transit'},
      {id:'PO-9076',r:'Lagos → Hamburg · CMA CGM',s:'ss-tr',sl:'In Transit'},
      {id:'PO-9069',r:'Tokyo → Seattle · ONE',s:'ss-ok',sl:'Cleared'},
    ],
  },
  'Agents': {
    title: 'Active Agents',
    kpis: [{v:'6',l:'Running'},{v:'341',l:'Actions Today'},{v:'2',l:'Escalations'}],
    list: [
      {id:'AG-01',r:'Customs Watcher · 40+ jurisdictions',s:'ss-ok',sl:'Active'},
      {id:'AG-02',r:'Payment Router · SWIFT compliance',s:'ss-ok',sl:'Active'},
      {id:'AG-03',r:'FX Sentinel · live spread monitor',s:'ss-ok',sl:'Active'},
      {id:'AG-04',r:'Document Generator · multi-jurisdiction',s:'ss-ok',sl:'Active'},
      {id:'AG-05',r:'Port Congestion Monitor · global',s:'ss-tr',sl:'Scanning'},
      {id:'AG-06',r:'Supplier Risk Scorer · daily refresh',s:'ss-ok',sl:'Active'},
    ],
  },
  'Documents': {
    title: 'Document Engine',
    kpis: [{v:'24',l:'Generated Today'},{v:'3',l:'Pending Review'},{v:'1,247',l:'Filed (30d)'}],
    list: [
      {id:'DOC-3401',r:'Commercial Invoice · PO-9104 · EU',s:'ss-ok',sl:'Filed'},
      {id:'DOC-3400',r:'SWIFT MT103 · PO-9098 · US',s:'ss-ok',sl:'Approved'},
      {id:'DOC-3399',r:'Cert of Origin · PO-9091 · DE',s:'ss-ho',sl:'Review'},
      {id:'DOC-3398',r:'Customs Declaration · PO-9088 · UK',s:'ss-ok',sl:'Filed'},
      {id:'DOC-3397',r:'Letter of Credit · PO-9082 · BE',s:'ss-ok',sl:'Approved'},
      {id:'DOC-3396',r:'Bill of Lading · PO-9076 · NG',s:'ss-tr',sl:'Drafting'},
    ],
  },
  'Payments': {
    title: 'Payment Operations',
    kpis: [{v:'$2.1M',l:'Pending Settle'},{v:'OPEN',l:'FX Window'},{v:'$18.4M',l:'This Month'}],
    list: [
      {id:'PMT-921',r:'$840K · USD → EUR · Rotterdam supplier',s:'ss-tr',sl:'Queued'},
      {id:'PMT-920',r:'$215K · USD → SGD · Singapore freight',s:'ss-ok',sl:'Settled'},
      {id:'PMT-919',r:'$92K · USD → AED · Dubai broker',s:'ss-ok',sl:'Settled'},
      {id:'PMT-918',r:'$1.4M · USD → CNY · Shanghai supplier',s:'ss-tr',sl:'In Flight'},
      {id:'PMT-917',r:'$310K · USD → GBP · UK customs duty',s:'ss-ok',sl:'Settled'},
    ],
  },
  'ERP Diagnostics': {
    title: 'ERP Health',
    kpis: [{v:'4/4',l:'Systems Connected'},{v:'2',l:'Open Issues'},{v:'2h',l:'Last Scan'}],
    list: [
      {id:'SAP',r:'SAP S/4HANA · Production tenant',s:'ss-ok',sl:'Healthy'},
      {id:'ARIBA',r:'SAP Ariba · Procurement network',s:'ss-ho',sl:'2 Warnings'},
      {id:'BTP',r:'SAP BTP · Integration layer',s:'ss-ok',sl:'Healthy'},
      {id:'MULE',r:'MuleSoft · Anypoint API gateway',s:'ss-tr',sl:'1 Critical'},
    ],
  },
  'Settings': {
    title: 'Account Settings',
    kpis: [],
    list: [
      {id:'ORG',r:'Organisation · Acme Trade Co.',s:'ss-ok',sl:'Active'},
      {id:'REG',r:'Active Regions · Africa + Asia-Pacific',s:'ss-ok',sl:'Set'},
      {id:'TZ',r:'Default Timezone · WAT (Lagos)',s:'ss-ok',sl:'Set'},
      {id:'API',r:'Traxora API Keys · 3 active',s:'ss-ok',sl:'Active'},
      {id:'ALR',r:'Alert Channels · Email + WhatsApp',s:'ss-ok',sl:'On'},
      {id:'BIL',r:'Billing · XaeccoPS Advisor tier',s:'ss-ok',sl:'Active'},
    ],
  },
};

export default function XaeccoXWebsite(){
  const [scrolled,setScrolled]=useState(false);
  const [annual,setAnnual]=useState(false);
  const [pricingTab,setPricingTab]=useState('platform');
  const [booking,setBooking]=useState(false);
  const [bookPreselect,setBookPreselect]=useState('');
  const [dashView,setDashView]=useState('Dashboard');
  const refs=useRef([]);

  const openBook=(id='')=>{setBookPreselect(id);setBooking(true);};
  const closeBook=()=>setBooking(false);

  useEffect(()=>{
    const onS=()=>setScrolled(window.scrollY>50);
    window.addEventListener('scroll',onS,{passive:true});
    return()=>window.removeEventListener('scroll',onS);
  },[]);

  useEffect(()=>{
    const obs=new IntersectionObserver(
      entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('v');}),
      {threshold:.1}
    );
    refs.current.forEach(r=>r&&obs.observe(r));
    return()=>obs.disconnect();
  },[]);

  const r=el=>{if(el&&!refs.current.includes(el))refs.current.push(el);};
  const go=id=>document.getElementById(id)?.scrollIntoView({behavior:'smooth'});

  const PLATFORM_TIERS=[
    {name:'XaeccoPS Scout',badge:'Entry',monthly:799,color:'var(--teal)',featured:false,diagId:'snapshot',
     desc:'For supply chain professionals getting started with AI-assisted trade management.',
     cta:'Join the Beta',
     features:[
       {label:'XaeccoPS dashboard — up to 100 shipments',included:true},
       {label:'Traxo shipment tracking included',included:true},
       {label:'Compliance document library + templates',included:true},
       {label:'Multi-jurisdiction filing templates',included:true},
       {label:'Email and WhatsApp alerts',included:true},
       {label:'1 AI monitoring agent',included:true},
       {label:'SAP/ERP integration',included:false},
       {label:'Multi-corridor intelligence',included:false},
     ]},
    {name:'XaeccoPS Advisor',badge:'Growth',monthly:2500,color:'var(--blu)',featured:true,diagId:'full',
     desc:'For growing businesses managing multi-corridor trade with compliance complexity.',
     cta:'Join the Beta',
     features:[
       {label:'Full XaeccoPS + Traxo platform',included:true},
       {label:'Unlimited active shipment tracking',included:true},
       {label:'AI-generated multi-jurisdiction compliance docs',included:true},
       {label:'5 AI agents deployed',included:true},
       {label:'SAP Ariba + MuleSoft integration',included:true},
       {label:'Live FX intelligence + payment window alerts',included:true},
       {label:'Quarterly ERP diagnostic scan',included:true},
       {label:'Dedicated agent manager',included:false},
     ]},
    {name:'XaeccoPS Autopilot',badge:'Enterprise',monthly:8500,color:'var(--vio)',featured:false,diagId:'enterprise',
     desc:'For enterprise operations requiring full agentic automation across all corridors.',
     cta:'Book a Demo',custom:false,
     features:[
       {label:'Full XaeccoPS + Traxora API (10K calls/mo)',included:true},
       {label:'Unlimited AI agents deployed',included:true},
       {label:'Full SAP S/4HANA + Ariba + BTP integration',included:true},
       {label:'Multi-jurisdiction compliance engine',included:true},
       {label:'ERP diagnostics on demand — unlimited',included:true},
       {label:'Dedicated named agent manager',included:true},
       {label:'Custom agent training on your trade data',included:true},
       {label:'2-hour SLA + quarterly strategy review',included:true},
     ]},
  ];

  return(
    <>
      <style>{G}</style>
      <div className="mesh-bg"/>

      {booking&&<BookingModal onClose={closeBook} preselect={bookPreselect}/>}

      <nav className={scrolled?'sc':''}>
        <a className="logo" onClick={()=>go('hero')} style={{cursor:'pointer'}}>
          Xaecco<span className="logo-x">X</span>
          <span className="logo-badge">Corridor-first</span>
        </a>
        <ul className="nav-links">
          {[['Products','products'],['Diagnostics','pricing'],['Corridor','corridor'],['About','founder']].map(([l,id])=>(
            <li key={l}><a onClick={()=>go(id)} style={{cursor:'pointer'}}>{l}</a></li>
          ))}
        </ul>
        <div className="nav-right">
          <button className="btn-nav-ghost" onClick={()=>go('founder')}>Talk to the founder</button>
          <button className="btn-nav-cta" onClick={()=>openBook()}>Book diagnostic</button>
        </div>
      </nav>

      <section id="hero" style={{padding:'140px 72px 80px',minHeight:'100vh',display:'grid',gridTemplateColumns:'1fr 1fr',alignItems:'center',gap:60,position:'relative',zIndex:2,overflow:'hidden'}}>
        <div className="hero-glow"/>
        <div className="hero-ring"/>
        <div className="hero-ring2"/>
        <div className="hero-left">
          <div className="hero-status">
            <span className="hs-dot"/><span className="hs-txt">Corridor Diagnostics Open · XaePay launches June 2026</span>
          </div>
          <h1 className="hero-h">
            The cross-border<br/>
            commerce platform for the<br/>
            <span className="arc">US–Nigeria corridor.</span>
            <span className="serif">Intelligence, payments, and logistics for businesses moving goods, money, and ideas between Africa and the world.</span>
          </h1>
          <p className="hero-desc">
            XaeccoX is built corridor-first. We start where the depth is — US ↔ Nigeria — and extend Africa-broad as the operational ground is proven. Three product layers: <strong style={{color:'var(--w)'}}>XaePay</strong> for compliant cross-border payments, <strong style={{color:'var(--w)'}}>XaePro</strong> for operations and logistics, <strong style={{color:'var(--w)'}}>XaeTrade</strong> for curated commerce.
          </p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={()=>openBook()}>Book a corridor diagnostic</button>
            <button className="btn-secondary" onClick={()=>go('products')}>Explore XaePay →</button>
          </div>
          <div className="hero-stats">
            {[['US→NG','Corridor of focus'],['3','Product layers'],['$12.5k','Diagnostic from'],['Jun 2026','XaePay live']].map(([n,l])=>(
              <div className="hstat" key={l}>
                <div className="hstat-n">{n}</div>
                <div className="hstat-l">{l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-right"><Globe/></div>
      </section>

      <div className="ticker-wrap" style={{position:'relative',zIndex:2}}>
        <div className="tick-label"><span className="tick-pulse"/>CORRIDOR SIGNALS · SAMPLE</div>
        <div className="tick-scroll">
          <div className="tick-track">
            {[...TICKS,...TICKS].map((t,i)=>(
              <span className="ti" key={i}>
                {t.l} <span className="tv">{t.v}</span>
                {t.d>0&&<span className="up">↑</span>}
                {t.d<0&&<span className="dn">↓</span>}
                <span className="ti-dot">◆</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <section className="alt">
        <div className="fu" ref={r}>
          <div className="stag">The XaeccoX Difference</div>
          <h2 className="sh" style={{maxWidth:680}}>
            Consulting tells you what to fix.<br/>
            Software gives you tools.<br/>
            <span style={{fontFamily:'var(--fb)',fontWeight:300,fontStyle:'italic',color:'var(--w2)',fontSize:'.9em'}}>XaeccoX sends agents to finish the job.</span>
          </h2>
        </div>
        <div className="rf-wrap fu" ref={r}>
          {[
            {h:'Traditional Consulting',hi:false,rows:['PDF report, project ends','Analysts review data periodically','You implement the recommendations','One-time engagement only','Generic frameworks, not your market'],badge:'Yesterday'},
            {h:'Enterprise Software',hi:false,rows:['Tools you configure yourself','Dashboard you monitor manually','Workflow you define from scratch','Support ticket when something breaks','Built for Western markets, retrofitted elsewhere'],badge:'Not Enough'},
            {h:'XaeccoX',hi:true,rows:['Diagnosis + redesign + deployed operations','Founder runs the corridor with you','Outcomes delivered, not slides handed over','Persistent intelligence relationship','Corridor-first: US ↔ NG today, Africa-broad next'],badge:'The New Standard'},
          ].map(col=>(
            <div key={col.h} className={`rf-col${col.hi?' hi':''}`}>
              <div className="rf-hd">{col.h}</div>
              {col.rows.map((row,i)=>(
                <div className="rf-row" key={i}>
                  <span className="rf-ic">{col.hi?'✓':'–'}</span>{row}
                </div>
              ))}
              <span className="rf-badge">{col.badge}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="corridor">
        <div className="fu" ref={r}>
          <div className="stag">The Corridor</div>
          <h2 className="sh">Start where<br/><span className="acc">the depth is.</span></h2>
        </div>
        <div className="agent-split fu" ref={r} style={{marginTop:48,marginBottom:24}}>
          <div>
            <p className="agent-prose" style={{margin:0}}>
              The US–Nigeria corridor moves billions of dollars annually in goods, services, and remittances — and almost none of it is supported by infrastructure built for the corridor's actual realities. <strong>CBN circulars, NAFDAC documentation, container consolidation across diaspora suppliers, BDC routing, last-mile delivery to Lagos</strong> — these are not abstractions. They are operational facts.
            </p>
          </div>
          <div>
            <p className="agent-prose" style={{margin:0}}>
              XaeccoX is built <em>corridor-first.</em> Africa-broad is the roadmap; US ↔ Nigeria is the proof of depth. We design every product, every integration, every workflow against the specific frictions of moving capital and cargo between Lagos, Philadelphia, Los Angeles, and Houston — not against a generic "global trade" abstraction.
            </p>
          </div>
        </div>
        <div className="market-grid">
          {MARKETS.map((m,i)=>(
            <div key={m.cls} className="market-card fu" ref={r}
              data-ghost={m.ghost}
              style={{transitionDelay:`${i*.09}s`,'--accent':m.accent,'--ghost-c':m.ghostC}}>
              <div className="mc-icon">{m.icon}</div>
              <div className="mc-reg" style={{background:m.accent,WebkitBackgroundClip:'text',backgroundClip:'text',color:'transparent'}}>{m.reg}</div>
              <div className="mc-title">{m.title}</div>
              <div className="mc-desc">{m.desc}</div>
              <div className="mc-hubs">{m.hubs.map(h=><span className="hub-chip" key={h}>{h}</span>)}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="built-for">
        <div className="fu" ref={r}>
          <div className="stag">Built For</div>
          <h2 className="sh">Four operators<br/><span className="acc">we build with.</span></h2>
          <p className="sdesc">Cross-border commerce is not one buyer. Each of these has a different problem and a different XaeccoX surface that solves it.</p>
        </div>
        <div className="sol-grid" style={{gridTemplateColumns:'repeat(2,1fr)',marginTop:60}}>
          {[
            {ic:'🏦',t:'BDC Operators & IMTOs',d:'You move USD↔NGN at volume under a CBN licence. You need defensible audit trails, compliant routing, partner liquidity, and a fast way to prove every leg.',first:'XaePay'},
            {ic:'🛒',t:'Diaspora Importers',d:'You ship containers from the US to Lagos for personal, family, or small-business use. You need consolidation across multiple US suppliers, predictable customs and NAFDAC, and reliable last-mile.',first:'XaePro'},
            {ic:'🍲',t:'African Grocery & Restaurant Chains',d:'You source African goods into US storefronts. You need stable supplier relationships in Lagos, container economics that work, and US-side fulfillment that doesn\'t break.',first:'XaePro + XaeTrade'},
            {ic:'📦',t:'Nigerian Importers',d:'You buy from US, UK, or Asia and clear into Apapa or Tin Can. You need FX-window timing, BDC routing, supplier vetting, and invoice-to-payment matching that holds up against CBN scrutiny.',first:'XaePay + XaePro'},
          ].map((b,i)=>(
            <div key={b.t} className="sol-card fu" ref={r} style={{transitionDelay:`${i*.07}s`}}>
              <div style={{fontSize:28,marginBottom:14}}>{b.ic}</div>
              <div className="sol-t" style={{marginBottom:10}}>{b.t}</div>
              <div className="sol-d">{b.d}</div>
              <div className="sol-tags" style={{marginTop:18}}>
                <span className="sol-tag">Start with: {b.first}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="alt">
        <div className="fu" ref={r}>
          <div className="stag">How It Works</div>
          <h2 className="sh">From diagnostic to <span className="acc">deployed operations</span> in four moves.</h2>
        </div>
        <div className="meth-wrap fu" ref={r}>
          {[
            {tag:'Step 01',t:'Diagnose',d:'Three weeks of structured assessment across your corridor: trade flows, compliance posture, payment routing, logistics cost. Surfaces the specific frictions costing you money or delaying delivery.'},
            {tag:'Step 02',t:'Redesign',d:'A corridor-specific blueprint: new payment routes, consolidation plans, customs and NAFDAC workflows, partner introductions. Built for your goods, your counterparties, your timelines.'},
            {tag:'Step 03',t:'Deploy',d:'We execute alongside you. Container moves, payment legs, customs filings — coordinated and tracked. Founder-led on Deep engagements; analyst-supported on Standard.'},
            {tag:'Step 04',t:'Compound',d:'Each engagement feeds back into our corridor playbook. Cycle by cycle, your operation gets faster, cheaper, and more defensible against the corridor\'s recurring shocks.'},
          ].map((s,i)=>(
            <div className="meth-step" key={i}>
              <div className="meth-n">0{i+1}</div>
              <div className="meth-tag">{s.tag}</div>
              <div className="meth-title">{s.t}</div>
              <div className="meth-desc">{s.d}</div>
              {i<3&&<div className="meth-connector">→</div>}
            </div>
          ))}
        </div>
      </section>

      <section id="solutions">
        <div className="fu" ref={r}>
          <div className="stag">Corridor Capabilities</div>
          <h2 className="sh">Six things the<br/>corridor actually <span className="acc">needs to work.</span></h2>
          <p className="sdesc">Not "supply chain transformation" abstractions. Specific operational fronts where US ↔ Nigeria flows succeed or fail.</p>
        </div>
        <div className="sol-grid">
          {SOLUTIONS.map((s,i)=>(
            <div key={s.n} className="sol-card fu" ref={r} style={{transitionDelay:`${i*.07}s`}}>
              <div className="sol-n">{s.n}</div>
              <div className="sol-t">{s.t}</div>
              <div className="sol-d">{s.d}</div>
              <div className="sol-tags">{s.tags.map(t=><span className="sol-tag" key={t}>{t}</span>)}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="platform">
        <div className="plat-intro fu" ref={r}>
          <div>
            <div className="stag">XaePro · Operations Layer</div>
            <h2 className="sh">The operations<br/><span className="acc">control room.</span></h2>
            <p className="sdesc">Sourcing, container consolidation, customs clearing, and last-mile — unified into a single corridor operations view. Launching Fall 2026; design preview below.</p>
          </div>
          <div className="plat-feats">
            {[
              {ic:'📦',t:'Container Consolidation',d:'US-side multi-supplier consolidation across Philadelphia, LA, Houston. LCL + FCL lanes purpose-built for diaspora and importer cargo.'},
              {ic:'🛃',t:'Customs Clearing',d:'Apapa, Tin Can, MMIA. HS code review, duty pre-calculation, NAFDAC + SON pre-clearance, broker oversight.'},
              {ic:'🚚',t:'Last-Mile to Lagos',d:'Deconsolidation and onward delivery across Lagos and to Abuja, Port Harcourt, Ibadan. Track-to-door visibility.'},
              {ic:'📋',t:'Trade Documentation',d:'CBN, NAFDAC, Nigerian Customs document sets generated against real consignment data — invoices, SONCAP, Form M, PAAR.'},
            ].map(f=>(
              <div className="pfeat" key={f.t}>
                <div className="pfeat-ic">{f.ic}</div>
                <div><div className="pfeat-t">{f.t}</div><div className="pfeat-d">{f.d}</div></div>
              </div>
            ))}
          </div>
        </div>
        <div className="dash-wrap fu" ref={r}>
          <span className="preview-tag">⚙ Illustrative · Design Preview</span>
          <div className="dash">
            <div className="dash-bar">
              <div className="db r"/><div className="db y"/><div className="db g"/>
              <div className="dash-url">xaepro.xaeccox.io / corridor-ops</div>
            </div>
            <div className="dash-body">
              <div className="d-side">
                <div className="d-side-logo">Xae<span>Pro</span></div>
                {[{ic:'📊',l:'Dashboard'},{ic:'🚢',l:'Shipments'},{ic:'🤖',l:'Agents'},{ic:'📋',l:'Documents'},{ic:'💱',l:'Payments'},{ic:'⬡',l:'ERP Diagnostics'},{ic:'⚙️',l:'Settings'}].map(it=>(
                  <div key={it.l} className={`d-nav-item${dashView===it.l?' on':''}`} onClick={()=>setDashView(it.l)}><span>{it.ic}</span>{it.l}</div>
                ))}
              </div>
              <div className="d-main">
                {(()=>{
                  const v=DASH_VIEWS[dashView];
                  return(
                    <>
                      <div className="dm-top">
                        <div className="dm-title">{v.title}</div>
                        <div className="live-chip"><span className="lc-dot"/>Preview · Sample Data</div>
                      </div>
                      {v.kpis.length>0&&(
                        <div className="dm-kpis">
                          {v.kpis.map(m=>(
                            <div className="dk" key={m.l}><div className="dk-v">{m.v}</div><div className="dk-l">{m.l}</div></div>
                          ))}
                        </div>
                      )}
                      <div className="ship-list">
                        {v.list.map(s=>(
                          <div className="ship" key={s.id}>
                            <div className="ship-id">{s.id}</div>
                            <div className="ship-r">{s.r}</div>
                            <div className={`ship-s ${s.s}`}>{s.sl}</div>
                          </div>
                        ))}
                      </div>
                    </>
                  );
                })()}
              </div>
              <div className="d-right">
                <div className="dr-hd"><span className="dr-dot"/>Agent Activity (Sample)</div>
                <AgentLog/>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="stag fu" ref={r}>Agentic AI · Concept · In Development</div>
        <div className="agent-split fu" ref={r}>
          <div>
            <h2 className="sh">What does an<br/><span className="acc">AI agent actually do?</span></h2>
            <p className="agent-prose">
              Most AI tools <strong>answer questions.</strong><br/>An agent <em>acts on them.</em>
              <br/><br/>
              A XaeccoX AI agent continuously <strong>monitors</strong> a defined part of your supply chain, <strong>makes decisions</strong> within set parameters, <strong>executes tasks</strong> without waiting for instruction, and <strong>escalates</strong> to humans when judgment is required.
              <br/><br/>
              It doesn't sleep. It doesn't lose context across time zones. It doesn't miss a shipment exception at 3am in Singapore, a customs hold in Rotterdam, or a payment failure in New York.
            </p>
          </div>
          <div className="agent-loop">
            <div className="al-hd" style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:12}}>
              <span>⬡ Agentic Loop — Execution Pattern</span>
              <span style={{fontFamily:'var(--fm)',fontSize:8,letterSpacing:'.16em',color:'var(--gold)',background:'rgba(245,166,35,.07)',border:'1px solid rgba(245,166,35,.25)',padding:'3px 9px',borderRadius:'var(--rpill)'}}>Concept · In Dev</span>
            </div>
            <div className="al-steps">
              {[
                {tag:'Perception',t:'Monitor',d:'Agent reads live data from ports, customs authorities, freight forwarders, ERP systems, and payment banks across every active corridor — continuously, in every timezone.'},
                {tag:'Cognition',t:'Assess',d:'Compliance models covering 40+ jurisdictions — EU Customs Code, US CBP, SWIFT, MAS, local regulatory frameworks — classify the situation in milliseconds.'},
                {tag:'Execution',t:'Act',d:'Routine: agent generates the document set, files electronically, updates your ERP. Zero human touchpoints required.'},
                {tag:'Escalation',t:'Escalate',d:'Exception: agent creates a prioritised alert with context, recommended action, and time window for the human team.'},
                {tag:'Learning',t:'Improve',d:'Every resolution feeds back into the decision model. The next similar situation is resolved faster, with higher accuracy.'},
              ].map(s=>(
                <div className="als" key={s.t}>
                  <div className="als-conn"><div className="als-dot"/><div className="als-line"/></div>
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

      <section>
        <div className="fu" ref={r}>
          <div className="stag">Market Context · Industry Sources</div>
          <h2 className="sh">The size of <span className="acc">what we're working on.</span></h2>
          <p className="sdesc">These are <strong style={{color:'var(--w)'}}>industry-wide market figures</strong> from SWIFT and McKinsey — the addressable problem cross-border commerce platforms exist to chip at. They are not XaeccoX results; our own corridor numbers will appear here as engagements close.</p>
        </div>
        <div className="met-row fu" ref={r}>
          {[
            {target:72,suffix:'%',static:null,label:'Of payment exceptions on the SWIFT network are caused by formatting errors, account issues, and invalid data',note:'SWIFT · cross-border payments research'},
            {target:null,suffix:'',static:'$6.5B',label:'Annual industry savings unlocked by digitising paper bills of lading',note:'McKinsey · "The multi-billion-dollar paper jam"'},
            {target:20,suffix:'%',static:null,label:'Cost reduction achievable through AI-enabled customs clearance',note:'McKinsey · trade digitisation analysis'},
            {target:null,suffix:'',static:'$1.6B',label:'Spent each year by financial institutions investigating delayed cross-border payments',note:'SWIFT · global payments investigations'},
          ].map(m=>(
            <div className="mb" key={m.label}>
              <div className="mb-val">
                {m.static ? m.static : <Counter target={m.target} suffix={m.suffix}/>}
              </div>
              <div className="mb-label">{m.label}</div>
              <div className="mb-note">{m.note}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="alt" id="pricing">
        <div className="fu" ref={r}>
          <div className="stag">Diagnostics</div>
          <h2 className="sh">Start with a<br/><span className="acc">corridor diagnostic.</span></h2>
          <p className="sdesc">A structured assessment of your trade flows, compliance posture, payment routing, and logistics cost — delivered in three or six weeks. The commercial heart of every engagement.</p>
        </div>

        <div className="pricing-grid fu" ref={r} style={{gridTemplateColumns:'1fr 1fr',maxWidth:980,margin:'60px auto 0'}}>
          <div className="price-card edge-lit" style={{'--pc':'var(--blu)'}}>
            <span className="pc-badge std">Standard</span>
            <div className="pc-name">Standard Corridor Diagnostic</div>
            <div className="pc-desc">A structured 3-week assessment of your corridor — flows, compliance, payment routing, logistics cost.</div>
            <div className="pc-price" style={{color:'var(--w)'}}>
              <span className="pc-cur">$</span>12,500<span className="pc-per"> / 3 weeks</span>
            </div>
            <div className="pc-sub">single fixed-fee engagement</div>
            <div className="pc-divider"/>
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
              ].map(f=>(
                <div className="pcf" key={f}><span className="pcf-ic">✓</span><span>{f}</span></div>
              ))}
            </div>
            <button className="pc-cta outline" onClick={()=>openBook('standard')}>Book Standard Diagnostic →</button>
          </div>

          <div className="price-card edge-lit featured" style={{'--pc':'var(--vio)'}}>
            <span className="pc-badge pop">Deep · Hands-On</span>
            <div className="pc-name">Deep Corridor Diagnostic</div>
            <div className="pc-desc">Everything in Standard, plus weekly working sessions, partner introductions, and an implementation-ready deliverable.</div>
            <div className="pc-price grad">
              <span className="pc-cur">$</span>25,000<span className="pc-per"> / 6 weeks</span>
            </div>
            <div className="pc-sub">single fixed-fee engagement</div>
            <div className="pc-divider"/>
            <div className="pc-features">
              {[
                'Everything in Standard',
                'Weekly working sessions with founder',
                'Hands-on partner introductions across the corridor',
                'Implementation-readiness deliverable',
                '90-day async follow-up access',
              ].map(f=>(
                <div className="pcf" key={f}><span className="pcf-ic">✓</span><span>{f}</span></div>
              ))}
            </div>
            <button className="pc-cta main" onClick={()=>openBook('deep')}>Book Deep Diagnostic →</button>
          </div>
        </div>

        <p style={{textAlign:'center',color:'var(--w3)',fontSize:13,marginTop:36,fontFamily:'var(--fd)',maxWidth:680,marginLeft:'auto',marginRight:'auto'}}>
          For enterprise engagements, custom scopes, or media inquiries — <a href="mailto:info@xaeccox.io?subject=XaeccoX%20enterprise%20inquiry" style={{color:'var(--blu)',textDecoration:'underline'}}>contact the founder directly.</a>
        </p>
      </section>

      <section id="products">
        <div className="fu" ref={r}>
          <div className="stag">Products</div>
          <h2 className="sh">Three layers,<br/><span className="acc">one corridor.</span></h2>
          <p className="sdesc">XaeccoX is the parent platform. Three product layers operate underneath, sequenced for corridor depth — payments first, operations second, commerce last.</p>
        </div>

        <div className="fu" ref={r} style={{marginTop:60,display:'flex',flexDirection:'column',gap:20}}>
          <div className="market-card" style={{padding:'48px 52px','--accent':'linear-gradient(90deg,#5282FF,#A259FF)','--ghost-c':'#5282FF'}} data-ghost="PAY">
            <div style={{display:'inline-flex',alignItems:'center',gap:10,marginBottom:20}}>
              <span style={{fontFamily:'var(--fm)',fontSize:8.5,letterSpacing:'.2em',textTransform:'uppercase',color:'var(--gold)',background:'rgba(245,166,35,.08)',border:'1px solid rgba(245,166,35,.25)',padding:'4px 10px',borderRadius:'var(--rpill)'}}>Launching June 2026</span>
            </div>
            <div className="mc-title" style={{fontSize:34,marginBottom:10,background:'linear-gradient(90deg,var(--blu),var(--vio))',WebkitBackgroundClip:'text',backgroundClip:'text',color:'transparent'}}>XaePay</div>
            <div style={{fontFamily:'var(--fb)',fontStyle:'italic',fontWeight:300,fontSize:18,color:'var(--w2)',marginBottom:18,letterSpacing:'-.01em'}}>The AI compliance and routing layer for cross-border payments.</div>
            <div className="mc-desc" style={{fontSize:15,maxWidth:720,lineHeight:1.7,marginBottom:28}}>Built for BDCs, IMTOs, payment agents, and businesses moving funds between USD, NGN, and stablecoin rails. Routes intelligently across licensed partners, generates compliance documentation, and defends every transaction with audit-grade logging.</div>
            <a href="mailto:info@xaeccox.io?subject=XaePay%20early%20access%20list&body=Add%20me%20to%20the%20XaePay%20early%20access%20list.%0A%0AName%3A%20%0ACompany%3A%20%0AUse%20case%3A%20" className="btn-nav-cta" style={{display:'inline-block',textDecoration:'none',padding:'12px 26px',fontSize:13}}>Join the early access list →</a>
          </div>

          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:20}}>
            <div className="market-card" style={{padding:'36px 40px','--accent':'linear-gradient(90deg,#00E5C8,#5282FF)','--ghost-c':'#00E5C8'}} data-ghost="PRO">
              <div style={{display:'inline-flex',alignItems:'center',gap:10,marginBottom:18}}>
                <span style={{fontFamily:'var(--fm)',fontSize:8.5,letterSpacing:'.2em',textTransform:'uppercase',color:'var(--gold)',background:'rgba(245,166,35,.08)',border:'1px solid rgba(245,166,35,.25)',padding:'4px 10px',borderRadius:'var(--rpill)'}}>Launching Fall 2026</span>
              </div>
              <div className="mc-title" style={{fontSize:26,marginBottom:8,background:'linear-gradient(90deg,#00E5C8,#5282FF)',WebkitBackgroundClip:'text',backgroundClip:'text',color:'transparent'}}>XaePro</div>
              <div style={{fontFamily:'var(--fb)',fontStyle:'italic',fontWeight:300,fontSize:15,color:'var(--w2)',marginBottom:14,letterSpacing:'-.01em'}}>Operations, sourcing, and logistics across the corridor.</div>
              <div className="mc-desc" style={{marginBottom:22}}>Container consolidation, procurement, customs clearing, and last-mile delivery — US to Nigeria, Nigeria to US.</div>
              <a href="mailto:info@xaeccox.io?subject=XaePro%20notify%20list&body=Notify%20me%20when%20XaePro%20launches.%0A%0AName%3A%20%0ACompany%3A%20" className="btn-nav-ghost" style={{display:'inline-block',textDecoration:'none'}}>Get notified →</a>
            </div>

            <div className="market-card" style={{padding:'36px 40px','--accent':'linear-gradient(90deg,#F5A623,#A259FF)','--ghost-c':'#F5A623'}} data-ghost="TRADE">
              <div style={{display:'inline-flex',alignItems:'center',gap:10,marginBottom:18}}>
                <span style={{fontFamily:'var(--fm)',fontSize:8.5,letterSpacing:'.2em',textTransform:'uppercase',color:'var(--gold)',background:'rgba(245,166,35,.08)',border:'1px solid rgba(245,166,35,.25)',padding:'4px 10px',borderRadius:'var(--rpill)'}}>Launching January 2027</span>
              </div>
              <div className="mc-title" style={{fontSize:26,marginBottom:8,background:'linear-gradient(90deg,#F5A623,#A259FF)',WebkitBackgroundClip:'text',backgroundClip:'text',color:'transparent'}}>XaeTrade</div>
              <div style={{fontFamily:'var(--fb)',fontStyle:'italic',fontWeight:300,fontSize:15,color:'var(--w2)',marginBottom:14,letterSpacing:'-.01em'}}>Curated cross-border commerce.</div>
              <div className="mc-desc" style={{marginBottom:22}}>A commerce platform connecting US and Nigerian markets — built on top of XaePay and XaePro.</div>
              <a href="mailto:info@xaeccox.io?subject=XaeTrade%20notify%20list&body=Notify%20me%20when%20XaeTrade%20launches.%0A%0AName%3A%20%0ACompany%3A%20" className="btn-nav-ghost" style={{display:'inline-block',textDecoration:'none'}}>Get notified →</a>
            </div>
          </div>
        </div>
      </section>

      <section id="founder">
        <div className="fu" ref={r}>
          <div className="stag">Founder</div>
        </div>
        <div className="agent-split fu" ref={r} style={{marginTop:24,alignItems:'center'}}>
          <div style={{display:'flex',justifyContent:'center'}}>
            <div style={{width:280,height:280,borderRadius:'var(--r16)',background:'linear-gradient(135deg,rgba(82,130,255,.18),rgba(162,89,255,.18))',border:'1px solid var(--b2)',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'var(--fd)',fontWeight:900,fontSize:96,letterSpacing:'-.04em',background:'linear-gradient(135deg,rgba(82,130,255,.12),rgba(162,89,255,.12))',position:'relative',overflow:'hidden'}}>
              <div style={{position:'absolute',inset:0,background:'radial-gradient(circle at 30% 30%,rgba(82,130,255,.25),transparent 60%)'}}/>
              <span style={{background:'linear-gradient(135deg,var(--blu),var(--vio))',WebkitBackgroundClip:'text',backgroundClip:'text',color:'transparent',position:'relative',zIndex:1}}>CO</span>
            </div>
          </div>
          <div>
            <h2 className="sh" style={{fontSize:'clamp(26px,3vw,38px)',marginBottom:8}}>Chukwura Okoli</h2>
            <div style={{fontFamily:'var(--fm)',fontSize:11,letterSpacing:'.16em',textTransform:'uppercase',color:'var(--blu)',marginBottom:20}}>Founder, XaeccoX</div>
            <p className="agent-prose" style={{margin:'0 0 18px',fontSize:15}}>
              Operator and architect across the US ↔ Nigeria trade corridor. Nearly a decade in global supply chain, AI solutions architecture, and ERP-grade process design — currently shipping containers and building infrastructure between Lagos, Philadelphia, Los Angeles, and Houston.
            </p>
            <p className="agent-prose" style={{margin:'0 0 22px',fontSize:15,color:'var(--w2)'}}>
              XaeccoX is the platform he wishes existed when he started.
            </p>
            <a href="mailto:info@xaeccox.io?subject=Hello%20from%20xaeccox.io" style={{fontFamily:'var(--fd)',fontWeight:600,fontSize:14,color:'var(--blu)',textDecoration:'none',borderBottom:'1px solid var(--ba)',paddingBottom:2}}>Talk to the founder →</a>
          </div>
        </div>
      </section>

      <section className="alt" id="next">
        <div className="fu" ref={r} style={{textAlign:'center',maxWidth:760,margin:'0 auto'}}>
          <div className="stag" style={{justifyContent:'center'}}>What's Next</div>
          <h2 className="sh">Beyond <span className="acc">the corridor.</span></h2>
          <p className="sdesc" style={{margin:'18px auto 0',textAlign:'center'}}>
            The US ↔ Nigeria corridor is the proof. The roadmap extends to UK ↔ Nigeria, EU ↔ Nigeria, and US ↔ Ghana within 24 months. Africa to the world — with the operational depth to back it.
          </p>
        </div>
      </section>

      <section className="cta-section" id="contact">
        <div className="cta-glow"/><div className="cta-grid-lines"/>
        <div className="stag fu" ref={r} style={{justifyContent:'center'}}>Start the conversation</div>
        <h2 className="cta-h fu" ref={r}>
          Move goods, money, and ideas across <span className="acc">the corridor.</span>
        </h2>
        <p className="cta-sub">A corridor diagnostic is the entry point. Three weeks of structured work; a written assessment; a 90-day action plan you can run.</p>
        <div className="cta-actions">
          <button className="btn-cta-p" onClick={()=>openBook()}>Book a corridor diagnostic</button>
          <a href="mailto:info@xaeccox.io?subject=Hello%20from%20xaeccox.io" className="btn-cta-g" style={{textDecoration:'none',display:'inline-block'}}>Talk to the founder →</a>
        </div>
        <div className="cta-trust">
          {['US ↔ Nigeria · Active','UK · EU · Ghana · Roadmap','Founder-led','XaePay June 2026','XaePro Fall 2026','XaeTrade Jan 2027'].map(b=>(
            <span className="trust-badge" key={b}>{b}</span>
          ))}
        </div>
      </section>

      <footer>
        <div className="ft-grid">
          <div>
            <div className="ft-logo">Xaecco<span>X</span></div>
            <div className="ft-tagline">Cross-border commerce, defended. The US ↔ Nigeria corridor — intelligence, payments, and logistics.</div>
            <div className="ft-socials">
              <a href="https://www.linkedin.com/company/xaeccox" target="_blank" rel="noopener noreferrer" className="ft-soc" style={{textDecoration:'none',color:'inherit'}} title="LinkedIn">in</a>
              <a href="mailto:info@xaeccox.io" className="ft-soc" style={{textDecoration:'none',color:'inherit'}} title="Email founder">@</a>
            </div>
          </div>
          {[
            {h:'Products',links:[['XaePay','products'],['XaePro','products'],['XaeTrade','products']]},
            {h:'Engage',links:[['Diagnostics','pricing'],['Corridor','corridor'],['Built for','built-for'],['Contact','contact']]},
            {h:'Company',links:[['About the founder','founder'],['What\'s next','next']]},
          ].map(col=>(
            <div key={col.h}>
              <div className="ft-col-hd">{col.h}</div>
              <ul className="ft-links">{col.links.map(([l,id])=>(
                <li key={l}><a href={`#${id}`} onClick={e=>{e.preventDefault();document.getElementById(id)?.scrollIntoView({behavior:'smooth'});}}>{l}</a></li>
              ))}</ul>
            </div>
          ))}
        </div>

        <div style={{borderTop:'1px solid var(--b1)',padding:'24px 0 18px',marginTop:8,fontSize:12,color:'var(--w3)',lineHeight:1.75,fontFamily:'var(--fd)'}}>
          <strong style={{color:'var(--w2)',fontWeight:600}}>XAECCOX LLC</strong> · Delaware limited liability company · doing business as XaeccoX
          <br/>
          Registered office: 651 N Broad St, Middletown, Delaware 19709, United States
          <span style={{margin:'0 8px',color:'var(--w4)'}}>·</span>
          Operated by Chukwura Okoli
          <br/>
          Operating regions: Lagos · Philadelphia · Los Angeles · Houston
          <span style={{margin:'0 8px',color:'var(--w4)'}}>·</span>
          Email <a href="mailto:info@xaeccox.io" style={{color:'var(--blu)',textDecoration:'none'}}>info@xaeccox.io</a>
          <span style={{margin:'0 8px',color:'var(--w4)'}}>·</span>
          Phone / WhatsApp <a href="tel:+12673618234" style={{color:'var(--blu)',textDecoration:'none'}}>+1 (267) 361-8234</a>
        </div>

        <div className="ft-bottom">
          <span>© 2026 XaeccoX · Built corridor-first</span>
          <div className="ft-badges">
            <Link to="/privacy" style={{color:'inherit',textDecoration:'none'}}><span className="ft-b">Privacy</span></Link>
            <Link to="/terms" style={{color:'inherit',textDecoration:'none'}}><span className="ft-b">Terms</span></Link>
            <span className="ft-b">US ↔ NG · Active</span>
            <span className="ft-b">Africa-broad · Roadmap</span>
          </div>
        </div>
      </footer>
    </>
  );
}
