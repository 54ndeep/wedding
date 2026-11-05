'use client';

import { useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';

const INVITATION_HTML = "<!-- Envelope Overlay Screen -->\n  <div style=\"background:linear-gradient(to bottom right, rgba(100,14,27,0.86), rgba(140,45,45,0.82), rgba(171,122,69,0.80)), url(/images/themes/mahal-gold/paper.webp) center / cover\" id=\"inviteEnvelope\" data-landing-screenshot-id=\"invite-envelope\" class=\"jsx-353cb38c53e4a74a fixed inset-0 z-50 flex items-center justify-center overflow-hidden\"><div style=\"z-index:1\" class=\"jsx-353cb38c53e4a74a absolute inset-0 pointer-events-none overflow-hidden\"><div style=\"left:53.16679248586297%;top:-30px;bottom:auto;color:#e0698f;font-size:17.659537674859166px;--sway:22.55483935587108px;animation:ambient-fall 18.553927581757307s ease-in-out -14.077463647379618s infinite\" class=\"jsx-353cb38c53e4a74a absolute\"><svg viewBox=\"0 0 24 24\" fill=\"currentColor\" width=\"1em\" height=\"1em\"><g><ellipse cx=\"12\" cy=\"5\" rx=\"2.2\" ry=\"4.5\"></ellipse><ellipse cx=\"12\" cy=\"5\" rx=\"2.2\" ry=\"4.5\" transform=\"rotate(60 12 12)\"></ellipse><ellipse cx=\"12\" cy=\"5\" rx=\"2.2\" ry=\"4.5\" transform=\"rotate(120 12 12)\"></ellipse><ellipse cx=\"12\" cy=\"5\" rx=\"2.2\" ry=\"4.5\" transform=\"rotate(180 12 12)\"></ellipse><ellipse cx=\"12\" cy=\"5\" rx=\"2.2\" ry=\"4.5\" transform=\"rotate(240 12 12)\"></ellipse><ellipse cx=\"12\" cy=\"5\" rx=\"2.2\" ry=\"4.5\" transform=\"rotate(300 12 12)\"></ellipse></g><circle cx=\"12\" cy=\"12\" r=\"1.8\" fill-opacity=\"0.45\"></circle></svg></div><div style=\"left:72.25860732840374%;top:-30px;bottom:auto;color:#d8407a;font-size:17.443320706486702px;--sway:-2.767608594149351px;animation:ambient-fall 25.811166992411017s ease-in-out -24.076911759216202s infinite\" class=\"jsx-353cb38c53e4a74a absolute\"><svg viewBox=\"0 0 24 24\" fill=\"currentColor\" width=\"1em\" height=\"1em\"><g><ellipse cx=\"12\" cy=\"5\" rx=\"2.2\" ry=\"4.5\"></ellipse><ellipse cx=\"12\" cy=\"5\" rx=\"2.2\" ry=\"4.5\" transform=\"rotate(60 12 12)\"></ellipse><ellipse cx=\"12\" cy=\"5\" rx=\"2.2\" ry=\"4.5\" transform=\"rotate(120 12 12)\"></ellipse><ellipse cx=\"12\" cy=\"5\" rx=\"2.2\" ry=\"4.5\" transform=\"rotate(180 12 12)\"></ellipse><ellipse cx=\"12\" cy=\"5\" rx=\"2.2\" ry=\"4.5\" transform=\"rotate(240 12 12)\"></ellipse><ellipse cx=\"12\" cy=\"5\" rx=\"2.2\" ry=\"4.5\" transform=\"rotate(300 12 12)\"></ellipse></g><circle cx=\"12\" cy=\"12\" r=\"1.8\" fill-opacity=\"0.45\"></circle></svg></div><div style=\"left:80.37113725440577%;top:-30px;bottom:auto;color:#f7e3cd;font-size:20.384264127351344px;--sway:-0.5319805629551411px;animation:ambient-fall 25.97842796333134s ease-in-out -21.88567556258385s infinite\" class=\"jsx-353cb38c53e4a74a absolute\"><svg viewBox=\"0 0 24 24\" fill=\"currentColor\" width=\"1em\" height=\"1em\"><g><ellipse cx=\"12\" cy=\"5\" rx=\"2.2\" ry=\"4.5\"></ellipse><ellipse cx=\"12\" cy=\"5\" rx=\"2.2\" ry=\"4.5\" transform=\"rotate(60 12 12)\"></ellipse><ellipse cx=\"12\" cy=\"5\" rx=\"2.2\" ry=\"4.5\" transform=\"rotate(120 12 12)\"></ellipse><ellipse cx=\"12\" cy=\"5\" rx=\"2.2\" ry=\"4.5\" transform=\"rotate(180 12 12)\"></ellipse><ellipse cx=\"12\" cy=\"5\" rx=\"2.2\" ry=\"4.5\" transform=\"rotate(240 12 12)\"></ellipse><ellipse cx=\"12\" cy=\"5\" rx=\"2.2\" ry=\"4.5\" transform=\"rotate(300 12 12)\"></ellipse></g><circle cx=\"12\" cy=\"12\" r=\"1.8\" fill-opacity=\"0.45\"></circle></svg></div><div style=\"left:18.698555501177907%;top:-30px;bottom:auto;color:#ab7a45;font-size:15.99872849136591px;--sway:-4.8254650086164474px;animation:ambient-fall 22.14944390952587s ease-in-out -14.454623560127624s infinite\" class=\"jsx-353cb38c53e4a74a absolute\"><svg viewBox=\"0 0 24 24\" fill=\"currentColor\" width=\"1em\" height=\"1em\"><g><ellipse cx=\"12\" cy=\"5\" rx=\"2.2\" ry=\"4.5\"></ellipse><ellipse cx=\"12\" cy=\"5\" rx=\"2.2\" ry=\"4.5\" transform=\"rotate(60 12 12)\"></ellipse><ellipse cx=\"12\" cy=\"5\" rx=\"2.2\" ry=\"4.5\" transform=\"rotate(120 12 12)\"></ellipse><ellipse cx=\"12\" cy=\"5\" rx=\"2.2\" ry=\"4.5\" transform=\"rotate(180 12 12)\"></ellipse><ellipse cx=\"12\" cy=\"5\" rx=\"2.2\" ry=\"4.5\" transform=\"rotate(240 12 12)\"></ellipse><ellipse cx=\"12\" cy=\"5\" rx=\"2.2\" ry=\"4.5\" transform=\"rotate(300 12 12)\"></ellipse></g><circle cx=\"12\" cy=\"12\" r=\"1.8\" fill-opacity=\"0.45\"></circle></svg></div><div style=\"left:32.943701760377735%;top:-30px;bottom:auto;color:#e0698f;font-size:21.26278126379475px;--sway:-4.776181653141975px;animation:ambient-fall 25.255555741488934s ease-in-out -15.090340201763473s infinite\" class=\"jsx-353cb38c53e4a74a absolute\"><svg viewBox=\"0 0 24 24\" fill=\"currentColor\" width=\"1em\" height=\"1em\"><g><ellipse cx=\"12\" cy=\"5\" rx=\"2.2\" ry=\"4.5\"></ellipse><ellipse cx=\"12\" cy=\"5\" rx=\"2.2\" ry=\"4.5\" transform=\"rotate(60 12 12)\"></ellipse><ellipse cx=\"12\" cy=\"5\" rx=\"2.2\" ry=\"4.5\" transform=\"rotate(120 12 12)\"></ellipse><ellipse cx=\"12\" cy=\"5\" rx=\"2.2\" ry=\"4.5\" transform=\"rotate(180 12 12)\"></ellipse><ellipse cx=\"12\" cy=\"5\" rx=\"2.2\" ry=\"4.5\" transform=\"rotate(240 12 12)\"></ellipse><ellipse cx=\"12\" cy=\"5\" rx=\"2.2\" ry=\"4.5\" transform=\"rotate(300 12 12)\"></ellipse></g><circle cx=\"12\" cy=\"12\" r=\"1.8\" fill-opacity=\"0.45\"></circle></svg></div><div style=\"left:32.48473870800808%;top:-30px;bottom:auto;color:#ab7a45;font-size:22.03585193771869px;--sway:15.195394651964307px;animation:ambient-fall 22.062417287379503s ease-in-out -0.6104661202095208s infinite\" class=\"jsx-353cb38c53e4a74a absolute\"><svg viewBox=\"0 0 24 24\" fill=\"currentColor\" width=\"1em\" height=\"1em\"><g><ellipse cx=\"12\" cy=\"5\" rx=\"2.2\" ry=\"4.5\"></ellipse><ellipse cx=\"12\" cy=\"5\" rx=\"2.2\" ry=\"4.5\" transform=\"rotate(60 12 12)\"></ellipse><ellipse cx=\"12\" cy=\"5\" rx=\"2.2\" ry=\"4.5\" transform=\"rotate(120 12 12)\"></ellipse><ellipse cx=\"12\" cy=\"5\" rx=\"2.2\" ry=\"4.5\" transform=\"rotate(180 12 12)\"></ellipse><ellipse cx=\"12\" cy=\"5\" rx=\"2.2\" ry=\"4.5\" transform=\"rotate(240 12 12)\"></ellipse><ellipse cx=\"12\" cy=\"5\" rx=\"2.2\" ry=\"4.5\" transform=\"rotate(300 12 12)\"></ellipse></g><circle cx=\"12\" cy=\"12\" r=\"1.8\" fill-opacity=\"0.45\"></circle></svg></div><div style=\"left:75.47909229528159%;top:-30px;bottom:auto;color:#ab7a45;font-size:19.965067834127694px;--sway:-14.88081157207489px;animation:ambient-fall 24.489038541913033s ease-in-out -9.43566641062472s infinite\" class=\"jsx-353cb38c53e4a74a absolute\"><svg viewBox=\"0 0 24 24\" fill=\"currentColor\" width=\"1em\" height=\"1em\"><g><ellipse cx=\"12\" cy=\"5\" rx=\"2.2\" ry=\"4.5\"></ellipse><ellipse cx=\"12\" cy=\"5\" rx=\"2.2\" ry=\"4.5\" transform=\"rotate(60 12 12)\"></ellipse><ellipse cx=\"12\" cy=\"5\" rx=\"2.2\" ry=\"4.5\" transform=\"rotate(120 12 12)\"></ellipse><ellipse cx=\"12\" cy=\"5\" rx=\"2.2\" ry=\"4.5\" transform=\"rotate(180 12 12)\"></ellipse><ellipse cx=\"12\" cy=\"5\" rx=\"2.2\" ry=\"4.5\" transform=\"rotate(240 12 12)\"></ellipse><ellipse cx=\"12\" cy=\"5\" rx=\"2.2\" ry=\"4.5\" transform=\"rotate(300 12 12)\"></ellipse></g><circle cx=\"12\" cy=\"12\" r=\"1.8\" fill-opacity=\"0.45\"></circle></svg></div><div style=\"left:15.815782337449491%;top:-30px;bottom:auto;color:#d8407a;font-size:22.58361534960568px;--sway:-13.435565340332687px;animation:ambient-fall 19.449566608294845s ease-in-out -0.9459785139143924s infinite\" class=\"jsx-353cb38c53e4a74a absolute\"><svg viewBox=\"0 0 24 24\" fill=\"currentColor\" width=\"1em\" height=\"1em\"><g><ellipse cx=\"12\" cy=\"5\" rx=\"2.2\" ry=\"4.5\"></ellipse><ellipse cx=\"12\" cy=\"5\" rx=\"2.2\" ry=\"4.5\" transform=\"rotate(60 12 12)\"></ellipse><ellipse cx=\"12\" cy=\"5\" rx=\"2.2\" ry=\"4.5\" transform=\"rotate(120 12 12)\"></ellipse><ellipse cx=\"12\" cy=\"5\" rx=\"2.2\" ry=\"4.5\" transform=\"rotate(180 12 12)\"></ellipse><ellipse cx=\"12\" cy=\"5\" rx=\"2.2\" ry=\"4.5\" transform=\"rotate(240 12 12)\"></ellipse><ellipse cx=\"12\" cy=\"5\" rx=\"2.2\" ry=\"4.5\" transform=\"rotate(300 12 12)\"></ellipse></g><circle cx=\"12\" cy=\"12\" r=\"1.8\" fill-opacity=\"0.45\"></circle></svg></div><div style=\"left:41.026240712963045%;top:-30px;bottom:auto;color:#f7e3cd;font-size:20.776848196517676px;--sway:3.784661334939301px;animation:ambient-fall 25.839554645121098s ease-in-out -9.650395671465752s infinite\" class=\"jsx-353cb38c53e4a74a absolute\"><svg viewBox=\"0 0 24 24\" fill=\"currentColor\" width=\"1em\" height=\"1em\"><g><ellipse cx=\"12\" cy=\"5\" rx=\"2.2\" ry=\"4.5\"></ellipse><ellipse cx=\"12\" cy=\"5\" rx=\"2.2\" ry=\"4.5\" transform=\"rotate(60 12 12)\"></ellipse><ellipse cx=\"12\" cy=\"5\" rx=\"2.2\" ry=\"4.5\" transform=\"rotate(120 12 12)\"></ellipse><ellipse cx=\"12\" cy=\"5\" rx=\"2.2\" ry=\"4.5\" transform=\"rotate(180 12 12)\"></ellipse><ellipse cx=\"12\" cy=\"5\" rx=\"2.2\" ry=\"4.5\" transform=\"rotate(240 12 12)\"></ellipse><ellipse cx=\"12\" cy=\"5\" rx=\"2.2\" ry=\"4.5\" transform=\"rotate(300 12 12)\"></ellipse></g><circle cx=\"12\" cy=\"12\" r=\"1.8\" fill-opacity=\"0.45\"></circle></svg></div><div style=\"left:87.74706789758056%;top:-30px;bottom:auto;color:#f7e3cd;font-size:19.96954926662147px;--sway:-10.175444120541215px;animation:ambient-fall 18.714616626501083s ease-in-out -9.191442209216298s infinite\" class=\"jsx-353cb38c53e4a74a absolute\"><svg viewBox=\"0 0 24 24\" fill=\"currentColor\" width=\"1em\" height=\"1em\"><g><ellipse cx=\"12\" cy=\"5\" rx=\"2.2\" ry=\"4.5\"></ellipse><ellipse cx=\"12\" cy=\"5\" rx=\"2.2\" ry=\"4.5\" transform=\"rotate(60 12 12)\"></ellipse><ellipse cx=\"12\" cy=\"5\" rx=\"2.2\" ry=\"4.5\" transform=\"rotate(120 12 12)\"></ellipse><ellipse cx=\"12\" cy=\"5\" rx=\"2.2\" ry=\"4.5\" transform=\"rotate(180 12 12)\"></ellipse><ellipse cx=\"12\" cy=\"5\" rx=\"2.2\" ry=\"4.5\" transform=\"rotate(240 12 12)\"></ellipse><ellipse cx=\"12\" cy=\"5\" rx=\"2.2\" ry=\"4.5\" transform=\"rotate(300 12 12)\"></ellipse></g><circle cx=\"12\" cy=\"12\" r=\"1.8\" fill-opacity=\"0.45\"></circle></svg></div><div style=\"left:76.53489121468738%;top:-30px;bottom:auto;color:#d8407a;font-size:18.414484293200076px;--sway:-3.9389435341581702px;animation:ambient-fall 25.272887896746397s ease-in-out -13.756926730072731s infinite\" class=\"jsx-353cb38c53e4a74a absolute\"><svg viewBox=\"0 0 24 24\" fill=\"currentColor\" width=\"1em\" height=\"1em\"><g><ellipse cx=\"12\" cy=\"5\" rx=\"2.2\" ry=\"4.5\"></ellipse><ellipse cx=\"12\" cy=\"5\" rx=\"2.2\" ry=\"4.5\" transform=\"rotate(60 12 12)\"></ellipse><ellipse cx=\"12\" cy=\"5\" rx=\"2.2\" ry=\"4.5\" transform=\"rotate(120 12 12)\"></ellipse><ellipse cx=\"12\" cy=\"5\" rx=\"2.2\" ry=\"4.5\" transform=\"rotate(180 12 12)\"></ellipse><ellipse cx=\"12\" cy=\"5\" rx=\"2.2\" ry=\"4.5\" transform=\"rotate(240 12 12)\"></ellipse><ellipse cx=\"12\" cy=\"5\" rx=\"2.2\" ry=\"4.5\" transform=\"rotate(300 12 12)\"></ellipse></g><circle cx=\"12\" cy=\"12\" r=\"1.8\" fill-opacity=\"0.45\"></circle></svg></div><div style=\"left:9.546159249730408%;top:-30px;bottom:auto;color:#ab7a45;font-size:23.63011828204617px;--sway:7.281699045561254px;animation:ambient-fall 21.56439889408648s ease-in-out -18.733316511415723s infinite\" class=\"jsx-353cb38c53e4a74a absolute\"><svg viewBox=\"0 0 24 24\" fill=\"currentColor\" width=\"1em\" height=\"1em\"><g><ellipse cx=\"12\" cy=\"5\" rx=\"2.2\" ry=\"4.5\"></ellipse><ellipse cx=\"12\" cy=\"5\" rx=\"2.2\" ry=\"4.5\" transform=\"rotate(60 12 12)\"></ellipse><ellipse cx=\"12\" cy=\"5\" rx=\"2.2\" ry=\"4.5\" transform=\"rotate(120 12 12)\"></ellipse><ellipse cx=\"12\" cy=\"5\" rx=\"2.2\" ry=\"4.5\" transform=\"rotate(180 12 12)\"></ellipse><ellipse cx=\"12\" cy=\"5\" rx=\"2.2\" ry=\"4.5\" transform=\"rotate(240 12 12)\"></ellipse><ellipse cx=\"12\" cy=\"5\" rx=\"2.2\" ry=\"4.5\" transform=\"rotate(300 12 12)\"></ellipse></g><circle cx=\"12\" cy=\"12\" r=\"1.8\" fill-opacity=\"0.45\"></circle></svg></div></div><div style=\"z-index:10\" class=\"jsx-353cb38c53e4a74a relative\"><div class=\"jsx-353cb38c53e4a74a relative w-[310px] sm:w-[340px] md:w-[520px] lg:w-[600px]\"><div style=\"top:50px;width:56px;height:56px;transform:translate(-50%, -50%);background:radial-gradient(circle at 30% 30%, #640e1b, rgb(70, 0, 0));--shadow-color:rgba(100, 14, 27, 0.5);box-shadow:0 4px 20px rgba(100, 14, 27, 0.5), inset 0 2px 4px rgba(255,255,255,0.3);z-index:30;animation:seal-pulse 2s ease-in-out infinite\" class=\"jsx-353cb38c53e4a74a absolute left-1/2 rounded-full flex items-center justify-center\" id=\"waxSeal\"><svg style=\"fill:#ffffff\" viewBox=\"0 0 24 24\" class=\"jsx-353cb38c53e4a74a w-7 h-7\"><path d=\"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z\" class=\"jsx-353cb38c53e4a74a\"></path></svg></div><div style=\"box-shadow:0 25px 60px -12px rgba(0, 0, 0, 0.45), 0 8px 24px rgba(0, 0, 0, 0.2), 0 0 40px rgba(171, 122, 69, 0.15)\" class=\"jsx-353cb38c53e4a74a relative rounded-lg\"><div style=\"background:rgba(247, 227, 205, 0.98);border:1px solid rgba(171, 122, 69, 0.15);clip-path:inset(0 round 8px)\" class=\"jsx-353cb38c53e4a74a absolute inset-0 rounded-lg overflow-hidden\"><img src=\"/images/themes/mahal-gold/flower1.webp\" alt=\"\" aria-hidden=\"true\" id=\"cornerFlowerTL\" class=\"jsx-353cb38c53e4a74a absolute pointer-events-none w-[46%] md:w-[38%] max-w-[220px] top-0 left-0 -translate-x-[22%] -translate-y-[24%] -scale-x-100\"/><img src=\"/images/themes/mahal-gold/flower1.webp\" alt=\"\" aria-hidden=\"true\" id=\"cornerFlowerBR\" class=\"jsx-353cb38c53e4a74a absolute pointer-events-none w-[42%] md:w-[34%] max-w-[200px] bottom-0 right-0 translate-x-[20%] translate-y-[18%] -scale-y-100\"/></div><div class=\"jsx-353cb38c53e4a74a relative z-10 text-center px-6 pt-28 pb-14 md:pt-24 md:pb-8\"><h1 style=\"color:#640e1b;font-family:&quot;The Nautigal&quot;, ChungDoiIndic, cursive\" class=\"jsx-353cb38c53e4a74a mb-2 flex flex-col items-center leading-tight text-3xl sm:text-4xl\"><span style=\"font-family:&quot;The Nautigal&quot;, ChungDoiIndic, cursive\" class=\"jsx-353cb38c53e4a74a block w-full text-center\">Andrew</span><span style=\"font-family:&quot;Alex Brush&quot;, ChungDoiIndic, cursive\" class=\"jsx-353cb38c53e4a74a block w-full text-center text-lg leading-none sm:text-xl\">&amp;</span><span style=\"font-family:&quot;The Nautigal&quot;, ChungDoiIndic, cursive\" class=\"jsx-353cb38c53e4a74a block w-full text-center\">Claire</span></h1><div class=\"jsx-353cb38c53e4a74a flex items-center justify-center gap-3 mb-2\"><div style=\"background:linear-gradient(to right, transparent, #ab7a45)\" class=\"jsx-353cb38c53e4a74a w-10 h-px\"></div><span style=\"color:#ab7a45;opacity:0.7\" class=\"jsx-353cb38c53e4a74a text-sm\">\u2766</span><div style=\"background:linear-gradient(to left, transparent, #ab7a45)\" class=\"jsx-353cb38c53e4a74a w-10 h-px\"></div></div><div style=\"color:rgba(100, 14, 27, 0.72);font-family:&quot;Lora&quot;, &quot;Times New Roman&quot;, ChungDoiIndic, serif\" class=\"jsx-353cb38c53e4a74a text-[18px] mb-5 flex flex-col items-center\"><span dir=\"auto\">June 15, 2027</span></div><div class=\"jsx-353cb38c53e4a74a mb-6 \"><p style=\"color:rgba(100, 14, 27, 0.72);font-family:&quot;Lora&quot;, &quot;Times New Roman&quot;, ChungDoiIndic, serif\" class=\"jsx-353cb38c53e4a74a text-[18px] font-light mb-2\"><span dir=\"auto\">Cordially Invites</span></p><div style=\"background-color:rgba(171, 122, 69, 0.10)\" class=\"jsx-353cb38c53e4a74a inline-block px-5 py-2.5 rounded-xl mb-2 max-w-full [overflow-wrap:anywhere]\"><h2 style=\"color:#640e1b;font-family:&quot;Lora&quot;, &quot;Times New Roman&quot;, ChungDoiIndic, serif\" class=\"jsx-353cb38c53e4a74a text-lg sm:text-xl font-semibold sm:font-medium\">Claire</h2></div><p style=\"color:rgba(100, 14, 27, 0.72);font-family:&quot;Lora&quot;, &quot;Times New Roman&quot;, ChungDoiIndic, serif\" class=\"jsx-353cb38c53e4a74a text-[16px] font-light \"><span dir=\"auto\">to celebrate with our family</span></p></div><a href=\"#open\" id=\"openInvitationBtn\" rel=\"nofollow\" aria-busy=\"false\" style=\"background-color:#640e1b;color:#ffffff;box-shadow:0 4px 14px rgba(100, 14, 27, 0.35);font-family:&quot;Lora&quot;, &quot;Times New Roman&quot;, ChungDoiIndic, serif;-webkit-touch-callout:none;-webkit-user-select:none;user-select:none\" class=\"jsx-353cb38c53e4a74a relative px-8 py-2.5 text-lg font-semibold sm:font-medium rounded-full shadow-lg no-underline cursor-pointer flex w-fit items-center justify-center mx-auto overflow-hidden\"><span dir=\"auto\">Open</span><div style=\"background:linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);animation:shine 3s ease-in-out infinite\" class=\"jsx-353cb38c53e4a74a absolute top-0 h-full w-8 pointer-events-none\"></div></a></div></div></div></div></div></div></div>\n\n  <!-- Main Invitation Content -->\n  <div id=\"invitationContent\">\n    <div class=\"demo-page\"><audio id=\"bgMusic\" src=\"/audio/perfect-ed-sheeran.mp3\" preload=\"auto\" loop></audio><div class=\"cursor-pointer\" data-landing-screenshot-id=\"invite-renderer\" data-video-invitation=\"true\" dir=\"ltr\" lang=\"en\"><div class=\"min-h-screen w-full bg-white\"><main class=\"min-h-screen w-full\"><div class=\"flex w-full justify-center overflow-x-clip bg-white overflow-clip scrollbar-none\" data-testid=\"mahal-gold-template\"><div data-showcase-root=\"\" class=\"relative w-full max-w-[480px] md:max-w-[900px] md:mx-auto overflow-hidden md:border md:border-[#ab7a4533] isolate !overflow-hidden\" style=\"background-color:#f7e3cd;color:#ab7a45\"><div aria-hidden=\"true\" class=\"pointer-events-none absolute inset-0 -z-20 mix-blend-darken\" style=\"background-image:url(/images/themes/mahal-gold/paper.webp);background-size:100% auto;background-repeat:repeat-y;opacity:0.4\"></div><section dir=\"ltr\" class=\"relative isolate w-full overflow-hidden pt-[13.2%] pb-[16.6%]\"><div class=\"relative mx-auto w-full max-w-[480px] md:max-w-[680px]\"><div aria-hidden=\"true\" class=\"pointer-events-none absolute bg-contain bg-center bg-no-repeat top-0 left-[1.4%] mt-[-17.9%] z-[2] w-[32.7%]\" style=\"aspect-ratio:1086/1448;background-image:url(/images/themes/mahal-gold/bells.webp)\"></div><div aria-hidden=\"true\" class=\"pointer-events-none absolute bg-contain bg-center bg-no-repeat top-0 md:top-[-5%] left-[40.6%] mt-[-17.5%] z-[3] w-[77.1%] md:w-[90%]\" style=\"aspect-ratio:1;background-image:url(/images/themes/mahal-gold/flower1.webp)\"></div><div class=\"relative mx-auto w-[96.1%]\" style=\"aspect-ratio:424/529\"><div aria-hidden=\"true\" class=\"pointer-events-none absolute inset-0 -z-10 bg-contain bg-center bg-no-repeat opacity-[0.54]\" style=\"background-image:url(/images/themes/mahal-gold/arch-frame.webp)\"></div><div aria-hidden=\"true\" class=\"pointer-events-none absolute left-1/2 top-[20.0%] w-[13.7%] -translate-x-1/2 bg-contain bg-center bg-no-repeat\" style=\"aspect-ratio:579/699;background-image:url(/images/themes/mahal-gold/ganesha.webp)\"></div><div class=\"absolute left-1/2 top-[43.9%] z-20 flex w-[68%] -translate-x-1/2 flex-col items-center gap-[1.2%] text-center leading-[1.15]\"><div class=\"w-full\"><span class=\"inline-block\" style=\"font-family:&quot;The Nautigal&quot;, ChungDoiIndic, cursive;color:#640e1b;font-size:clamp(30px, 12.5vw, 55px)\">Andrew</span></div><span class=\"block\" style=\"font-family:&quot;Alex Brush&quot;, &quot;The Nautigal&quot;, ChungDoiIndic, cursive;color:#640e1b;font-size:clamp(18px, 6.8vw, 30px)\">&amp;</span><div class=\"w-full\"><span class=\"inline-block\" style=\"font-family:&quot;The Nautigal&quot;, ChungDoiIndic, cursive;color:#640e1b;font-size:clamp(30px, 12.5vw, 55px)\">Claire</span></div></div></div><div class=\"relative z-0 mt-[-59.6%] w-full\" style=\"aspect-ratio:441/546\"><div aria-hidden=\"true\" class=\"pointer-events-none absolute bg-contain bg-center bg-no-repeat left-[74.8%] top-0 z-[2] w-[55.8%]\" style=\"aspect-ratio:808/1402;background-image:url(/images/themes/mahal-gold/sandstone.webp)\"></div><div aria-hidden=\"true\" class=\"pointer-events-none absolute bg-contain bg-center bg-no-repeat left-[-25.9%] top-[13.4%] z-[1] w-[176.6%]\" style=\"aspect-ratio:1635/962;background-image:url(/images/themes/mahal-gold/castle.webp)\"></div><div aria-hidden=\"true\" class=\"pointer-events-none absolute bg-contain bg-center bg-no-repeat left-[54.6%] md:left-[70%] top-[60.6%] z-[4] w-[47.6%]\" style=\"aspect-ratio:1;background-image:url(/images/themes/mahal-gold/flower2.webp)\"></div><div aria-hidden=\"true\" class=\"pointer-events-none absolute bg-contain bg-center bg-no-repeat right-[54.6%] md:right-[70%] top-[60.6%] z-[4] w-[47.6%]\" style=\"aspect-ratio:1;background-image:url(/images/themes/mahal-gold/flower2.webp);transform:scaleX(-1)\"></div><div aria-hidden=\"true\" class=\"pointer-events-none absolute bg-contain bg-center bg-no-repeat left-1/2 top-[75.5%] z-[3] w-[58.5%] -translate-x-1/2\" style=\"aspect-ratio:1774/887;background-image:url(/images/themes/mahal-gold/fence.webp)\"></div></div></div></section><section class=\"relative isolate z-10 w-full px-[8.5%] pt-[5.2%] md:px-[12%] md:pt-[5.2%]\"><div aria-hidden=\"true\" class=\"pointer-events-none absolute bg-contain bg-center bg-no-repeat -z-10 opacity-10 top-0 left-[-18.8%] mt-[12.0%] w-[244%] md:w-[170%]\" style=\"will-change:transform;aspect-ratio:1448/1086;background-image:url(/images/themes/mahal-gold/castle2.webp)\"></div><div aria-hidden=\"true\" class=\"pointer-events-none absolute bg-contain bg-center bg-no-repeat top-0 left-[6.1%] mt-[-9.5%] z-[1] w-[87.5%]\" style=\"aspect-ratio:1302/253;background-image:url(/images/themes/mahal-gold/pattern.webp)\"></div><div aria-hidden=\"true\" class=\"pointer-events-none absolute bg-contain bg-center bg-no-repeat top-0 left-[-40%] md:left-[-23%] mt-[15.6%] z-[1] w-[56.7%] md:w-[42%]\" style=\"will-change:transform;aspect-ratio:837/1843;background-image:url(/images/themes/mahal-gold/sandstone-flower.webp)\"></div><div aria-hidden=\"true\" class=\"pointer-events-none absolute bg-contain bg-center bg-no-repeat top-0 left-[80%] mt-[61.0%] z-[1] w-[52.4%] md:w-[40%]\" style=\"will-change:transform;aspect-ratio:806/1254;background-image:url(/images/themes/mahal-gold/flower3-decoration.webp)\"></div><div class=\"relative z-10 flex flex-col gap-6 md:gap-8\"><h2 class=\"font-bold text-[20px] md:text-[26px] text-center uppercase tracking-[0.04em]\" style=\"color:#640e1b;font-family:&quot;Times New Roman&quot;, Times, ChungDoiIndic, serif;font-weight:700;text-transform:uppercase\"><span dir=\"auto\">CEREMONY INFO</span></h2><div class=\"grid w-full grid-cols-[1fr_auto_1fr] grid-rows-[repeat(4,auto)] justify-center gap-x-3 gap-y-1 md:gap-x-7\" style=\"color:#640e1b;font-family:&quot;Baskerville&quot;, &quot;Libre Baskerville&quot;, &quot;Times New Roman&quot;, ChungDoiIndic, serif\"><div class=\"row-span-4 grid grid-rows-subgrid justify-items-center justify-self-center min-w-0 max-w-[170px] text-center md:max-w-[270px]\"><span class=\"text-[12px] md:text-[15px] mb-[2px]\" style=\"color:#ab7a45\"><span dir=\"auto\">Mr. &amp; Mrs.</span></span><span class=\"font-semibold [overflow-wrap:anywhere] [overflow-wrap:anywhere]\" style=\"font-family:&quot;Baskerville&quot;, &quot;Libre Baskerville&quot;, &quot;Times New Roman&quot;, ChungDoiIndic, serif;color:#640e1b;font-size:12px\"><span dir=\"auto\">James Donovan</span></span><span class=\"font-semibold [overflow-wrap:anywhere] [overflow-wrap:anywhere]\" style=\"font-family:&quot;Baskerville&quot;, &quot;Libre Baskerville&quot;, &quot;Times New Roman&quot;, ChungDoiIndic, serif;color:#640e1b;font-size:12px\"><span dir=\"auto\">Olivia Donovan</span></span></div><div class=\"row-span-4 h-[50px] w-[1px] self-center md:h-[70px]\" style=\"background-color:#ab7a45;opacity:0.6\"></div><div class=\"row-span-4 grid grid-rows-subgrid justify-items-center justify-self-center min-w-0 max-w-[170px] text-center md:max-w-[270px]\"><span class=\"text-[12px] md:text-[15px] mb-[2px]\" style=\"color:#ab7a45\"><span dir=\"auto\">Mr. &amp; Mrs.</span></span><span class=\"font-semibold [overflow-wrap:anywhere] [overflow-wrap:anywhere]\" style=\"font-family:&quot;Baskerville&quot;, &quot;Libre Baskerville&quot;, &quot;Times New Roman&quot;, ChungDoiIndic, serif;color:#640e1b;font-size:12px\"><span dir=\"auto\">Ethan Marlowe</span></span><span class=\"font-semibold [overflow-wrap:anywhere] [overflow-wrap:anywhere]\" style=\"font-family:&quot;Baskerville&quot;, &quot;Libre Baskerville&quot;, &quot;Times New Roman&quot;, ChungDoiIndic, serif;color:#640e1b;font-size:12px\"><span dir=\"auto\">Madison Marlowe</span></span></div></div><div class=\"relative flex flex-col gap-1 text-center text-[15px] uppercase md:text-[18px] mx-auto md:max-w-[560px]\" style=\"white-space:pre-line;font-family:&quot;Baskerville&quot;, &quot;Libre Baskerville&quot;, &quot;Times New Roman&quot;, ChungDoiIndic, serif;color:#640e1b\"><span dir=\"auto\">Together with our families\nwe invite you to our wedding</span></div><div data-showcase-keep=\"\" class=\"w-full min-w-0 relative flex w-full min-w-0 flex-col items-center text-center gap-3 md:gap-4\"><h3 class=\"w-[80%] min-h-[80px] flex items-center justify-center leading-[50px] md:leading-[68px] whitespace-nowrap\" style=\"font-size:43px;font-family:&quot;EB Garamond&quot;, ChungDoiIndic, serif;color:#640e1b\">Andrew Donovan</h3><div class=\"text-xs uppercase tracking-[0.2em]\" style=\"color:#ab7a45;font-family:&quot;Cormorant Garamond&quot;, &quot;Times New Roman&quot;, ChungDoiIndic, serif;letter-spacing:0.16em\"><span dir=\"auto\"></span></div><div class=\"text-[30px] md:text-[38px]\" style=\"color:#640e1b;font-family:&quot;EB Garamond&quot;, ChungDoiIndic, serif\">&amp;</div><h3 class=\"w-[80%] min-h-[80px] flex items-center justify-center leading-[50px] md:leading-[68px] whitespace-nowrap\" style=\"font-size:43px;font-family:&quot;EB Garamond&quot;, ChungDoiIndic, serif;color:#640e1b\">Claire Marlowe</h3><div class=\"text-xs uppercase tracking-[0.2em]\" style=\"color:#ab7a45;font-family:&quot;Cormorant Garamond&quot;, &quot;Times New Roman&quot;, ChungDoiIndic, serif;letter-spacing:0.16em\"><span dir=\"auto\"></span></div></div><div class=\"relative w-full\"><div class=\"relative flex flex-col items-center gap-4 md:gap-5 text-center\" style=\"font-family:&quot;Baskerville&quot;, &quot;Libre Baskerville&quot;, &quot;Times New Roman&quot;, ChungDoiIndic, serif\"><div style=\"color:#ab7a45\"><span dir=\"auto\" class=\"whitespace-pre-line font-normal text-[16px] md:text-[18px] text-center\">WEDDING CEREMONY\nCathedral of the Incarnation</span></div><p class=\"font-normal text-[14px] md:text-[15px] text-center uppercase\" style=\"color:#ab7a45\">AT<!-- --> <!-- -->18:00</p><div class=\"flex items-center gap-6\" style=\"color:#640e1b\"><span class=\"text-[12px] md:text-[16px]\" style=\"font-family:&quot;Baskerville&quot;, &quot;Libre Baskerville&quot;, &quot;Times New Roman&quot;, ChungDoiIndic, serif;text-align:right\"><span dir=\"auto\">TUESDAY</span></span><span class=\"flex items-center justify-center text-[20px] leading-none md:text-[26px]\" style=\"font-family:&quot;Baskerville&quot;, &quot;Libre Baskerville&quot;, &quot;Times New Roman&quot;, ChungDoiIndic, serif;color:#ab7a45;opacity:0.7\">|</span><span class=\"text-[30px] md:text-[40px]\" style=\"font-family:&quot;Baskerville&quot;, &quot;Libre Baskerville&quot;, &quot;Times New Roman&quot;, ChungDoiIndic, serif\">15</span><span class=\"flex items-center justify-center text-[20px] leading-none md:text-[26px]\" style=\"font-family:&quot;Baskerville&quot;, &quot;Libre Baskerville&quot;, &quot;Times New Roman&quot;, ChungDoiIndic, serif;color:#ab7a45;opacity:0.7\">|</span><span class=\"text-[12px] md:text-[16px]\" style=\"font-family:&quot;Baskerville&quot;, &quot;Libre Baskerville&quot;, &quot;Times New Roman&quot;, ChungDoiIndic, serif;text-align:left\"><span dir=\"auto\">JUNE</span></span></div><div class=\"text-[18px] md:text-[24px]\" style=\"color:#640e1b;font-family:&quot;Baskerville&quot;, &quot;Libre Baskerville&quot;, &quot;Times New Roman&quot;, ChungDoiIndic, serif\">2027</div></div><div class=\"relative flex flex-col items-center gap-4 md:gap-5 text-center\" style=\"font-family:&quot;Baskerville&quot;, &quot;Libre Baskerville&quot;, &quot;Times New Roman&quot;, ChungDoiIndic, serif\"><div style=\"color:#ab7a45\"><span dir=\"auto\" class=\"whitespace-pre-line font-normal text-[16px] md:text-[18px] text-center\">RECEPTION\nThe\u00a0Cordelle</span></div><p class=\"font-normal text-[14px] md:text-[15px] text-center uppercase\" style=\"color:#ab7a45\">AT<!-- --> <!-- -->19:30</p><div class=\"flex items-center gap-6\" style=\"color:#640e1b\"><span class=\"text-[12px] md:text-[16px]\" style=\"font-family:&quot;Baskerville&quot;, &quot;Libre Baskerville&quot;, &quot;Times New Roman&quot;, ChungDoiIndic, serif;text-align:right\"><span dir=\"auto\">TUESDAY</span></span><span class=\"flex items-center justify-center text-[20px] leading-none md:text-[26px]\" style=\"font-family:&quot;Baskerville&quot;, &quot;Libre Baskerville&quot;, &quot;Times New Roman&quot;, ChungDoiIndic, serif;color:#ab7a45;opacity:0.7\">|</span><span class=\"text-[30px] md:text-[40px]\" style=\"font-family:&quot;Baskerville&quot;, &quot;Libre Baskerville&quot;, &quot;Times New Roman&quot;, ChungDoiIndic, serif\">15</span><span class=\"flex items-center justify-center text-[20px] leading-none md:text-[26px]\" style=\"font-family:&quot;Baskerville&quot;, &quot;Libre Baskerville&quot;, &quot;Times New Roman&quot;, ChungDoiIndic, serif;color:#ab7a45;opacity:0.7\">|</span><span class=\"text-[12px] md:text-[16px]\" style=\"font-family:&quot;Baskerville&quot;, &quot;Libre Baskerville&quot;, &quot;Times New Roman&quot;, ChungDoiIndic, serif;text-align:left\"><span dir=\"auto\">JUNE</span></span></div><div class=\"text-[18px] md:text-[24px]\" style=\"color:#640e1b;font-family:&quot;Baskerville&quot;, &quot;Libre Baskerville&quot;, &quot;Times New Roman&quot;, ChungDoiIndic, serif\">2027</div></div><img src=\"/images/themes/mahal-gold/gold-line.webp\" alt=\"\" aria-hidden=\"true\" class=\"mx-auto block h-auto max-w-[300px] object-contain w-[64.8%] mt-6 md:mt-8\" loading=\"lazy\" decoding=\"async\"/></div></div></section><section class=\"relative isolate z-10 w-full px-[9%] pt-[7%] pb-[10.9%] md:px-[12%] md:pt-[4%] md:pb-[7%]\"><div class=\"relative z-10 flex w-full flex-col items-center\"><div class=\"relative z-10 flex w-full flex-col items-center\"><h2 class=\"font-bold text-[20px] md:text-[26px] text-center uppercase tracking-[0.04em] mb-5\" style=\"color:#640e1b;font-family:&quot;Times New Roman&quot;, Times, ChungDoiIndic, serif;font-weight:700;text-transform:uppercase\"><span dir=\"auto\">Photo Gallery</span></h2><div class=\"mt-6 w-full max-w-[432px] md:max-w-[600px]\"><div class=\"relative h-[340px] md:h-[520px] touch-pan-y\"><button type=\"button\" id=\"galleryPrevBtn\" aria-label=\"Previous photo\" class=\"hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-[200] w-8 h-8 items-center justify-center rounded-full bg-base-200/60 hover:bg-base-200 transition-colors\"><svg class=\"w-4 h-4\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" viewBox=\"0 0 24 24\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M15.75 19.5L8.25 12l7.5-7.5\"></path></svg></button><button type=\"button\" id=\"galleryNextBtn\" aria-label=\"Next photo\" class=\"hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-[200] w-8 h-8 items-center justify-center rounded-full bg-base-200/60 hover:bg-base-200 transition-colors\"><svg class=\"w-4 h-4\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" viewBox=\"0 0 24 24\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M8.25 4.5l7.5 7.5-7.5 7.5\"></path></svg></button><div class=\"relative w-full h-full flex items-center justify-center\" style=\"perspective:1000px\"><div data-gallery-index=\"0\" id=\"carouselCard0\" class=\"carousel-3d-card absolute h-[92%] rounded-2xl overflow-hidden shadow-xl cursor-pointer\" <div class=\"absolute h-[92%] rounded-2xl overflow-hidden shadow-xl cursor-pointer transition-all ease-in-out ring-2 ring-white/30\" style=\"aspect-ratio:0.6666666666666666;transition-duration:1100ms;transform:translateX(0%) translateZ(0px) rotateY(0deg) scale(1);opacity:1;z-index:100\"><img src=\"/images/photos/f83d243670c753a3a8de98002b84126e357b748067b4099372400e34a15278ba.webp\" alt=\"Wedding photo 1\" class=\"h-full w-full object-cover\" style=\"object-position:50% 50%\"/></div><div data-gallery-index=\"1\" id=\"carouselCard1\" class=\"carousel-3d-card absolute h-[92%] rounded-2xl overflow-hidden shadow-xl cursor-pointer\" <div class=\"absolute h-[92%] rounded-2xl overflow-hidden shadow-xl cursor-pointer transition-all ease-in-out \" style=\"aspect-ratio:0.6666666666666666;transition-duration:1100ms;transform:translateX(60%) translateZ(-150px) rotateY(45deg) scale(0.85);opacity:0.75;z-index:99\"><img src=\"/images/photos/cb444178a6dd5753046eb92dd6c85bc433fcafb9139d14ff843aa96c9a29efa1.webp\" alt=\"Wedding photo 2\" class=\"h-full w-full object-cover\" style=\"object-position:50% 50%\"/></div><div data-gallery-index=\"2\" id=\"carouselCard2\" class=\"carousel-3d-card absolute h-[92%] rounded-2xl overflow-hidden shadow-xl cursor-pointer\" <div class=\"absolute h-[92%] rounded-2xl overflow-hidden shadow-xl cursor-pointer transition-all ease-in-out \" style=\"aspect-ratio:0.6666666666666666;transition-duration:1100ms;transform:translateX(120%) translateZ(-300px) rotateY(90deg) scale(0.7);opacity:0.5;z-index:98\"><img src=\"/images/photos/e44778eff5ba6bce43ff44630d64afd998314f6599a504de52c4604889658464.webp\" alt=\"Wedding photo 3\" class=\"h-full w-full object-cover\" style=\"object-position:50% 50%\"/></div><div data-gallery-index=\"3\" id=\"carouselCard3\" class=\"carousel-3d-card absolute h-[92%] rounded-2xl overflow-hidden shadow-xl cursor-pointer\" <div class=\"absolute h-[92%] rounded-2xl overflow-hidden shadow-xl cursor-pointer transition-all ease-in-out \" style=\"aspect-ratio:0.6666666666666666;transition-duration:1100ms;transform:translateX(180%) translateZ(-450px) rotateY(135deg) scale(0.7);opacity:0.3;z-index:97\"><img src=\"/images/photos/b572d32a98e5893a0a485e35ce0016d85fc6e35e03ca4b27151124f0e1f91fd8.webp\" alt=\"Wedding photo 4\" class=\"h-full w-full object-cover\" style=\"object-position:50% 50%\"/></div><div data-gallery-index=\"4\" id=\"carouselCard4\" class=\"carousel-3d-card absolute h-[92%] rounded-2xl overflow-hidden shadow-xl cursor-pointer\" <div class=\"absolute h-[92%] rounded-2xl overflow-hidden shadow-xl cursor-pointer transition-all ease-in-out \" style=\"aspect-ratio:0.6666666666666666;transition-duration:1100ms;transform:translateX(240%) translateZ(-600px) rotateY(180deg) scale(0.7);opacity:0.3;z-index:96\"><img src=\"/images/photos/1ca6ea249bd32431f552ad193f4cb9e109c3e3e01016a76ddd6d67572da63d21.webp\" alt=\"Wedding photo 5\" class=\"h-full w-full object-cover\" style=\"object-position:50% 50%\"/></div><div data-gallery-index=\"5\" id=\"carouselCard5\" class=\"carousel-3d-card absolute h-[92%] rounded-2xl overflow-hidden shadow-xl cursor-pointer\" <div class=\"absolute h-[92%] rounded-2xl overflow-hidden shadow-xl cursor-pointer transition-all ease-in-out \" style=\"aspect-ratio:0.6666666666666666;transition-duration:1100ms;transform:translateX(300%) translateZ(-750px) rotateY(225deg) scale(0.7);opacity:0.3;z-index:95\"><img src=\"/images/photos/e2b7e8a5add0cd52c62a4d326dbf25285299afb96bf9130aa0330c5f37282f7e.webp\" alt=\"Wedding photo 6\" class=\"h-full w-full object-cover\" style=\"object-position:50% 50%\"/></div><div data-gallery-index=\"6\" id=\"carouselCard6\" class=\"carousel-3d-card absolute h-[92%] rounded-2xl overflow-hidden shadow-xl cursor-pointer\" <div class=\"absolute h-[92%] rounded-2xl overflow-hidden shadow-xl cursor-pointer transition-all ease-in-out \" style=\"aspect-ratio:0.6666666666666666;transition-duration:1100ms;transform:translateX(-300%) translateZ(-750px) rotateY(-225deg) scale(0.7);opacity:0.3;z-index:95\"><img src=\"/images/photos/65c80c596d85f34befd4f244b1ed0d45d147ffcededcea5a44611fdcfedb9755.webp\" alt=\"Wedding photo 7\" class=\"h-full w-full object-cover\" style=\"object-position:50% 50%\"/></div><div data-gallery-index=\"7\" id=\"carouselCard7\" class=\"carousel-3d-card absolute h-[92%] rounded-2xl overflow-hidden shadow-xl cursor-pointer\" <div class=\"absolute h-[92%] rounded-2xl overflow-hidden shadow-xl cursor-pointer transition-all ease-in-out \" style=\"aspect-ratio:0.6666666666666666;transition-duration:1100ms;transform:translateX(-240%) translateZ(-600px) rotateY(-180deg) scale(0.7);opacity:0.3;z-index:96\"><img src=\"/images/photos/c4aa84136b7a0436d5dcfe8acf1a06740412334756beadfd1acfc9924a4895a8.webp\" alt=\"Wedding photo 8\" class=\"h-full w-full object-cover\" style=\"object-position:50% 50%\"/></div><div data-gallery-index=\"8\" id=\"carouselCard8\" class=\"carousel-3d-card absolute h-[92%] rounded-2xl overflow-hidden shadow-xl cursor-pointer\" <div class=\"absolute h-[92%] rounded-2xl overflow-hidden shadow-xl cursor-pointer transition-all ease-in-out \" style=\"aspect-ratio:0.6666666666666666;transition-duration:1100ms;transform:translateX(-180%) translateZ(-450px) rotateY(-135deg) scale(0.7);opacity:0.3;z-index:97\"><img src=\"/images/photos/390c49fca6f000eaab3de4113fc3ac4c5e555a0a9e6c21867e919d47392ee185.webp\" alt=\"Wedding photo 9\" class=\"h-full w-full object-cover\" style=\"object-position:50% 50%\"/></div><div data-gallery-index=\"9\" id=\"carouselCard9\" class=\"carousel-3d-card absolute h-[92%] rounded-2xl overflow-hidden shadow-xl cursor-pointer\" <div class=\"absolute h-[92%] rounded-2xl overflow-hidden shadow-xl cursor-pointer transition-all ease-in-out \" style=\"aspect-ratio:0.6666666666666666;transition-duration:1100ms;transform:translateX(-120%) translateZ(-300px) rotateY(-90deg) scale(0.7);opacity:0.5;z-index:98\"><img src=\"/images/photos/b72a19c1721e965eea6fd2853d550c3ffe2bfb753db8b9034155c6456fff40b0.webp\" alt=\"Wedding photo 10\" class=\"h-full w-full object-cover\" style=\"object-position:50% 50%\"/></div><div data-gallery-index=\"10\" id=\"carouselCard10\" class=\"carousel-3d-card absolute h-[92%] rounded-2xl overflow-hidden shadow-xl cursor-pointer\" <div class=\"absolute h-[92%] rounded-2xl overflow-hidden shadow-xl cursor-pointer transition-all ease-in-out \" style=\"aspect-ratio:0.6666666666666666;transition-duration:1100ms;transform:translateX(-60%) translateZ(-150px) rotateY(-45deg) scale(0.85);opacity:0.75;z-index:99\"><img src=\"/images/photos/faf693fa483740c47624845c2978025af25a83b87800c0eaef7923438ce83c41.webp\" alt=\"Wedding photo 11\" class=\"h-full w-full object-cover\" style=\"object-position:50% 50%\"/></div></div></div><div class=\"flex justify-center mt-3\"><span id=\"galleryCounter\" class=\"text-sm tabular-nums opacity-60 font-medium\">1 / 11</span></div></div></div></div></section><section class=\"relative isolate z-10 w-full px-[8%] pt-[13%] md:px-[12%] md:pt-[9%]\"><div aria-hidden=\"true\" class=\"pointer-events-none absolute bg-contain bg-center bg-no-repeat -z-10 opacity-10 top-0 left-[-103.2%] mt-[71.7%] w-[244%] md:w-[170%]\" style=\"will-change:transform;aspect-ratio:1448/1086;background-image:url(/images/themes/mahal-gold/castle2.webp)\"></div><div aria-hidden=\"true\" class=\"pointer-events-none absolute bg-contain bg-center bg-no-repeat top-0 left-[6.1%] mt-[-5.9%] z-[1] w-[87.5%]\" style=\"aspect-ratio:1302/253;background-image:url(/images/themes/mahal-gold/pattern.webp)\"></div><div aria-hidden=\"true\" class=\"pointer-events-none absolute bg-contain bg-center bg-no-repeat top-0 left-[83%] mt-[-6.1%] z-[1] w-[56.7%] md:w-[42%]\" style=\"will-change:transform;aspect-ratio:837/1843;background-image:url(/images/themes/mahal-gold/sandstone-flower.webp)\"></div><div aria-hidden=\"true\" class=\"pointer-events-none absolute bg-contain bg-center bg-no-repeat top-0 md:top-[-15%] left-[-30%] md:left-[-17%] mt-[41.0%] z-[1] w-[52.4%] md:w-[40%]\" style=\"will-change:transform;aspect-ratio:806/1254;background-image:url(/images/themes/mahal-gold/flower3-decoration.webp)\"></div><div class=\"relative z-10 flex w-full flex-col items-center\"><h2 class=\"font-bold text-[20px] md:text-[26px] text-center uppercase tracking-[0.04em]\" style=\"color:#640e1b;font-family:&quot;Times New Roman&quot;, Times, ChungDoiIndic, serif;font-weight:700;text-transform:uppercase\"><span dir=\"auto\">RECEPTION INFO</span></h2><div class=\"mt-6 flex w-full flex-col items-center gap-6 md:mt-8\" style=\"font-family:&quot;Baskerville&quot;, &quot;Libre Baskerville&quot;, &quot;Times New Roman&quot;, ChungDoiIndic, serif;color:#ab7a45\" data-landing-screenshot-id=\"invite-reception\"><h3 class=\"text-[16px] md:text-[19px] uppercase flex flex-col items-center text-center tracking-[0.04em]\" style=\"font-family:&quot;Baskerville&quot;, &quot;Libre Baskerville&quot;, &quot;Times New Roman&quot;, ChungDoiIndic, serif;color:#640e1b;font-weight:600\"><span dir=\"auto\">The reception will take place\u00a0at:</span></h3><div class=\"text-[20px] md:text-[30px]\" style=\"color:#ab7a45;font-family:&quot;Baskerville&quot;, &quot;Libre Baskerville&quot;, &quot;Times New Roman&quot;, ChungDoiIndic, serif\">18:00</div><div class=\"flex items-center gap-6\" style=\"font-family:&quot;Baskerville&quot;, &quot;Libre Baskerville&quot;, &quot;Times New Roman&quot;, ChungDoiIndic, serif\"><span class=\"text-[12px] md:text-[16px] uppercase\" style=\"font-family:&quot;Baskerville&quot;, &quot;Libre Baskerville&quot;, &quot;Times New Roman&quot;, ChungDoiIndic, serif;text-align:right\"><span dir=\"auto\">TUESDAY</span></span><div class=\"h-6 w-[1px] md:h-8\" style=\"background-color:#ab7a45\"></div><span class=\"text-[30px] md:text-[40px]\" style=\"font-family:&quot;Baskerville&quot;, &quot;Libre Baskerville&quot;, &quot;Times New Roman&quot;, ChungDoiIndic, serif;color:#640e1b\">15</span><div class=\"h-6 w-[1px] md:h-8\" style=\"background-color:#ab7a45\"></div><span class=\"text-[12px] md:text-[16px] uppercase\" style=\"font-family:&quot;Baskerville&quot;, &quot;Libre Baskerville&quot;, &quot;Times New Roman&quot;, ChungDoiIndic, serif;text-align:left\"><span dir=\"auto\">JUNE</span></span></div><div class=\"text-[18px] md:text-[24px]\" style=\"color:#ab7a45;font-family:&quot;Baskerville&quot;, &quot;Libre Baskerville&quot;, &quot;Times New Roman&quot;, ChungDoiIndic, serif\">2027</div><div class=\"flex items-center justify-center gap-8 mt-4\"><div class=\"flex flex-col items-center\"><span class=\"text-xs uppercase tracking-wider\" style=\"color:#ab7a45;font-family:&quot;Baskerville&quot;, &quot;Libre Baskerville&quot;, &quot;Times New Roman&quot;, ChungDoiIndic, serif\"><span dir=\"auto\">Welcome</span></span><span class=\"text-lg md:text-xl font-medium mt-1\" style=\"color:#640e1b;font-family:&quot;Baskerville&quot;, &quot;Libre Baskerville&quot;, &quot;Times New Roman&quot;, ChungDoiIndic, serif\">17:00</span></div><div class=\"flex flex-col items-center\"><span class=\"text-xs uppercase tracking-wider\" style=\"color:#ab7a45;font-family:&quot;Baskerville&quot;, &quot;Libre Baskerville&quot;, &quot;Times New Roman&quot;, ChungDoiIndic, serif\"><span dir=\"auto\">Reception</span></span><span class=\"text-lg md:text-xl font-medium mt-1\" style=\"color:#640e1b;font-family:&quot;Baskerville&quot;, &quot;Libre Baskerville&quot;, &quot;Times New Roman&quot;, ChungDoiIndic, serif\">19:30</span></div></div><div class=\"flex items-center justify-center flex-col mt-4\"><h2 class=\"text-[15px] md:text-[17px] uppercase flex flex-col items-center text-center tracking-[0.06em]\" style=\"font-family:&quot;Baskerville&quot;, &quot;Libre Baskerville&quot;, &quot;Times New Roman&quot;, ChungDoiIndic, serif;color:#ab7a45\"><span dir=\"auto\">Countdown</span></h2><div id=\"countdownWidget\" class=\"text-center mt-2 text-sm md:text-lg\" style=\"color:#ab7a45;font-family:&quot;Baskerville&quot;, &quot;Libre Baskerville&quot;, &quot;Times New Roman&quot;, ChungDoiIndic, serif\"><p>Calculating...</p></div></div></div><div class=\"relative mx-auto mt-8 w-full max-w-[330px] md:mt-10 md:max-w-[470px]\" style=\"aspect-ratio:359/339\"><div aria-hidden=\"true\" class=\"pointer-events-none absolute inset-0 bg-contain bg-center bg-no-repeat\" style=\"background-image:url(/images/themes/mahal-gold/calendar-frame.webp)\"></div><div class=\"relative flex h-full w-full items-center justify-center px-[11%] py-[9%]\"><div dir=\"ltr\" data-showcase-keep=\"\" class=\"w-full max-w-[280px] md:max-w-[310px] mx-auto rounded-lg overflow-hidden border !max-w-none !rounded-none !border-0\" style=\"border-color:color-mix(in srgb, #640e1b 27%, transparent);color:#640e1b\"><div class=\"text-center py-2.5 text-[13px] md:text-[14px] font-semibold tracking-wide border-b text-[15px] md:text-[18px] font-bold\" style=\"border-color:color-mix(in srgb, #640e1b 27%, transparent);font-family:&quot;Times New Roman&quot;, Times, ChungDoiIndic, serif;color:#640e1b\">June 2027</div><div class=\"grid grid-cols-7 border-b-2\" style=\"border-color:#640e1b\"><div class=\"text-center py-1.5 text-[10px] md:text-[11px] font-medium opacity-60\">Mo</div><div class=\"text-center py-1.5 text-[10px] md:text-[11px] font-medium opacity-60\">Tu</div><div class=\"text-center py-1.5 text-[10px] md:text-[11px] font-medium opacity-60\">We</div><div class=\"text-center py-1.5 text-[10px] md:text-[11px] font-medium opacity-60\">Th</div><div class=\"text-center py-1.5 text-[10px] md:text-[11px] font-medium opacity-60\">Fr</div><div class=\"text-center py-1.5 text-[10px] md:text-[11px] font-medium opacity-60\">Sa</div><div class=\"text-center py-1.5 text-[10px] md:text-[11px] font-medium opacity-60\">Su</div></div><div class=\"grid grid-cols-7 gap-y-0.5 px-1 py-2\"><div class=\"flex items-center justify-center h-[30px] md:h-[34px]\"></div><div class=\"flex items-center justify-center h-[30px] md:h-[34px]\"><span class=\"text-[12px] md:text-[13px]\">1</span></div><div class=\"flex items-center justify-center h-[30px] md:h-[34px]\"><span class=\"text-[12px] md:text-[13px]\">2</span></div><div class=\"flex items-center justify-center h-[30px] md:h-[34px]\"><span class=\"text-[12px] md:text-[13px]\">3</span></div><div class=\"flex items-center justify-center h-[30px] md:h-[34px]\"><span class=\"text-[12px] md:text-[13px]\">4</span></div><div class=\"flex items-center justify-center h-[30px] md:h-[34px]\"><span class=\"text-[12px] md:text-[13px]\">5</span></div><div class=\"flex items-center justify-center h-[30px] md:h-[34px]\"><span class=\"text-[12px] md:text-[13px]\">6</span></div><div class=\"flex items-center justify-center h-[30px] md:h-[34px]\"><span class=\"text-[12px] md:text-[13px]\">7</span></div><div class=\"flex items-center justify-center h-[30px] md:h-[34px]\"><span class=\"text-[12px] md:text-[13px]\">8</span></div><div class=\"flex items-center justify-center h-[30px] md:h-[34px]\"><span class=\"text-[12px] md:text-[13px]\">9</span></div><div class=\"flex items-center justify-center h-[30px] md:h-[34px]\"><span class=\"text-[12px] md:text-[13px]\">10</span></div><div class=\"flex items-center justify-center h-[30px] md:h-[34px]\"><span class=\"text-[12px] md:text-[13px]\">11</span></div><div class=\"flex items-center justify-center h-[30px] md:h-[34px]\"><span class=\"text-[12px] md:text-[13px]\">12</span></div><div class=\"flex items-center justify-center h-[30px] md:h-[34px]\"><span class=\"text-[12px] md:text-[13px]\">13</span></div><div class=\"flex items-center justify-center h-[30px] md:h-[34px]\"><span class=\"text-[12px] md:text-[13px]\">14</span></div><div class=\"flex items-center justify-center h-[30px] md:h-[34px]\"><div class=\"relative w-[26px] h-[24px] md:w-[30px] md:h-[28px] flex items-center justify-center\"><svg viewBox=\"0 0 24 22\" class=\"absolute inset-0 w-full h-full drop-shadow-sm\" fill=\"#640e1b\"><path d=\"M12 21C12 21 1.5 13.5 1.5 7.5C1.5 4.46 3.96 2 7 2C8.76 2 10.35 2.81 11.4 4.09L12 4.8L12.6 4.09C13.65 2.81 15.24 2 17 2C20.04 2 22.5 4.46 22.5 7.5C22.5 13.5 12 21 12 21Z\"></path></svg><span class=\"relative z-10 text-[11px] md:text-[12px] font-bold\" style=\"color:#fff\">15</span></div></div><div class=\"flex items-center justify-center h-[30px] md:h-[34px]\"><span class=\"text-[12px] md:text-[13px]\">16</span></div><div class=\"flex items-center justify-center h-[30px] md:h-[34px]\"><span class=\"text-[12px] md:text-[13px]\">17</span></div><div class=\"flex items-center justify-center h-[30px] md:h-[34px]\"><span class=\"text-[12px] md:text-[13px]\">18</span></div><div class=\"flex items-center justify-center h-[30px] md:h-[34px]\"><span class=\"text-[12px] md:text-[13px]\">19</span></div><div class=\"flex items-center justify-center h-[30px] md:h-[34px]\"><span class=\"text-[12px] md:text-[13px]\">20</span></div><div class=\"flex items-center justify-center h-[30px] md:h-[34px]\"><span class=\"text-[12px] md:text-[13px]\">21</span></div><div class=\"flex items-center justify-center h-[30px] md:h-[34px]\"><span class=\"text-[12px] md:text-[13px]\">22</span></div><div class=\"flex items-center justify-center h-[30px] md:h-[34px]\"><span class=\"text-[12px] md:text-[13px]\">23</span></div><div class=\"flex items-center justify-center h-[30px] md:h-[34px]\"><span class=\"text-[12px] md:text-[13px]\">24</span></div><div class=\"flex items-center justify-center h-[30px] md:h-[34px]\"><span class=\"text-[12px] md:text-[13px]\">25</span></div><div class=\"flex items-center justify-center h-[30px] md:h-[34px]\"><span class=\"text-[12px] md:text-[13px]\">26</span></div><div class=\"flex items-center justify-center h-[30px] md:h-[34px]\"><span class=\"text-[12px] md:text-[13px]\">27</span></div><div class=\"flex items-center justify-center h-[30px] md:h-[34px]\"><span class=\"text-[12px] md:text-[13px]\">28</span></div><div class=\"flex items-center justify-center h-[30px] md:h-[34px]\"><span class=\"text-[12px] md:text-[13px]\">29</span></div><div class=\"flex items-center justify-center h-[30px] md:h-[34px]\"><span class=\"text-[12px] md:text-[13px]\">30</span></div></div></div></div></div><div class=\"mt-3 flex justify-center\"><a href=\"https://www.google.com/calendar/render?action=TEMPLATE&amp;text=Andrew%20Donovan%20%26%20Claire%20Marlowe&#x27;s%20Wedding&amp;dates=20270615T123000Z/20270615T143000Z&amp;ctz=Asia/Ho_Chi_Minh&amp;details=Join%20us%20to%20celebrate%20the%20wedding%20of%20Andrew%20Donovan%20%26%20Claire%20Marlowe%20at%20The%20Cordelle%0ANashville%2C%20TN&amp;location=The%20Cordelle%0ANashville%2C%20TN\" target=\"_blank\" rel=\"noopener noreferrer\" data-calendar-action=\"1\" class=\"btn-pointer inline-flex items-center justify-center text-[13px] underline decoration-1 underline-offset-4 transition-opacity hover:opacity-70 md:text-[15px]\" style=\"color:#ab7a45;font-family:&quot;Times New Roman&quot;, Times, ChungDoiIndic, serif\"><span dir=\"auto\">Add to Calendar</span></a></div><div class=\"relative z-10 flex flex-col items-center justify-center w-full mt-7 md:mt-9\" data-landing-screenshot-id=\"invite-rsvp\"><button type=\"button\" class=\"text-[13px] md:text-[15px] btn-pointer tracking-wider inline-flex items-center justify-center rounded-full px-7 py-2 transition-transform hover:scale-[1.03]\" id=\"rsvpTriggerBtn\" style=\"background-color:#640e1b;color:#ffffff;font-family:&quot;Baskerville&quot;, &quot;Libre Baskerville&quot;, &quot;Times New Roman&quot;, ChungDoiIndic, serif\"><span class=\"relative z-10 flex min-h-0 items-center justify-center gap-2\"><span dir=\"auto\">CONFIRM ATTENDANCE</span></span></button></div></div></section><div class=\"relative isolate z-10 w-full pt-[9%] md:pt-[5%]\"><div class=\"relative z-10 flex w-full flex-col items-center\"><section class=\"relative flex w-full flex-col gap-3 px-[10%] pb-6 md:px-[14%]\" data-landing-screenshot-id=\"invite-map\"><div class=\"relative text-center\"><h3 class=\"font-bold text-[18px] md:text-[24px] text-center uppercase tracking-[0.04em]\" style=\"color:#640e1b;font-family:&quot;Times New Roman&quot;, Times, ChungDoiIndic, serif;font-weight:700;text-transform:uppercase\"><span dir=\"auto\">Wedding Reception Venue</span></h3><div class=\"whitespace-pre-line mx-auto mt-1 max-w-[260px] md:max-w-[400px] text-center text-[12px] md:text-[14px] whitespace-pre-line flex flex-col items-center\" style=\"background-color:transparent;color:#ab7a45;font-family:&quot;Baskerville&quot;, &quot;Libre Baskerville&quot;, &quot;Times New Roman&quot;, ChungDoiIndic, serif\"><span dir=\"auto\">The Cordelle\nNashville, TN</span></div></div><div class=\"relative flex flex-col items-center gap-4 md:gap-5 w-full\" data-showcase-keep=\"\"><iframe class=\"w-full mt-3 rounded-[15px] h-[250px] md:h-[330px] overflow-hidden\" style=\"border-color:#ab7a45\" src=\"https://maps.google.com/maps?q=The%20Cordelle%2C%20Nashville%2C%20TN&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=&amp;output=embed\" loading=\"lazy\" allowFullScreen=\"\" referrerPolicy=\"no-referrer-when-downgrade\"></iframe><a href=\"https://www.google.com/maps/dir/?api=1&amp;destination=The%20Cordelle%2C%20Nashville%2C%20TN\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm md:text-base font-semibold transition-transform hover:scale-[1.03]\" style=\"background-color:transparent;color:#ab7a45;font-family:&quot;Baskerville&quot;, &quot;Libre Baskerville&quot;, &quot;Times New Roman&quot;, ChungDoiIndic, serif\"><svg class=\"h-4 w-4 shrink-0\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><polygon points=\"3 11 22 2 13 21 11 13 3 11\"></polygon></svg><span>Get directions</span></a></div></section><img src=\"/images/themes/mahal-gold/gold-line.webp\" alt=\"\" aria-hidden=\"true\" class=\"mx-auto block h-auto max-w-[300px] object-contain w-[53.7%] mt-2 md:mt-4\" loading=\"lazy\" decoding=\"async\"/></div></div><div class=\"relative isolate z-10 pt-[6%] md:pt-[3%]\"><div class=\"relative z-10 flex flex-col items-center gap-5 px-6 md:px-10 py-10 md:py-12 \"><div class=\"flex flex-col items-center gap-1\"><h2 class=\"font-bold text-[20px] md:text-[26px] text-center uppercase tracking-[0.04em]\" style=\"color:#640e1b;font-family:&quot;Times New Roman&quot;, Times, ChungDoiIndic, serif;font-weight:700;text-transform:uppercase\"><span dir=\"auto\">DRESS CODE</span></h2><p class=\"whitespace-pre-line text-sm md:text-base text-center\" style=\"color:#ab7a45;font-family:&quot;Roboto&quot;, system-ui, ChungDoiIndic, sans-serif\"><span dir=\"auto\">Party Attire</span></p></div><div class=\"flex flex-wrap justify-center gap-4 md:gap-6\"><div class=\"w-10 h-10 md:w-12 md:h-12 rounded-full shadow-md\" style=\"background-color:#432b14;border:none\"></div><div class=\"w-10 h-10 md:w-12 md:h-12 rounded-full shadow-md\" style=\"background-color:#6b533c;border:none\"></div><div class=\"w-10 h-10 md:w-12 md:h-12 rounded-full shadow-md\" style=\"background-color:#e3cbb4;border:1.5px solid #640e1b30\"></div></div></div></div><div class=\"relative isolate z-10\"><div aria-hidden=\"true\" class=\"pointer-events-none absolute bg-contain bg-center bg-no-repeat -z-10 opacity-10 top-0 left-[-133.1%] mt-[-53.3%] w-[244%] md:w-[170%]\" style=\"will-change:transform;aspect-ratio:1448/1086;background-image:url(/images/themes/mahal-gold/castle2.webp)\"></div><div aria-hidden=\"true\" class=\"pointer-events-none absolute bg-contain bg-center bg-no-repeat top-0 left-[80%] rtl:left-auto rtl:right-[80%] mt-[-20.6%] z-[1] w-[52.4%] md:w-[40%]\" style=\"will-change:transform;aspect-ratio:806/1254;background-image:url(/images/themes/mahal-gold/flower3-decoration.webp)\"></div><div class=\"relative z-10 flex flex-col gap-4 px-4 pt-[8%] pb-[8%] md:gap-6 md:pt-[5%] md:pb-[5%]\"><h2 class=\"font-bold text-[20px] md:text-[26px] text-center uppercase tracking-[0.04em]\" style=\"color:#640e1b;font-family:&quot;Times New Roman&quot;, Times, ChungDoiIndic, serif;font-weight:700;text-transform:uppercase\"><span dir=\"auto\">WEDDING DAY\u00a0SCHEDULE</span></h2><ol class=\"relative mx-auto grid w-full max-w-[460px] grid-cols-[minmax(0,1fr)_16px_minmax(0,1fr)] items-center gap-x-6 md:gap-x-8 gap-y-8 md:gap-y-10\" style=\"font-family:&quot;Times New Roman&quot;, Times, ChungDoiIndic, serif\"><li class=\"contents\"><span class=\"pt-0.5 text-right text-[16px] md:text-[17px] tabular-nums tracking-wide leading-snug\" style=\"color:#ab7a45;font-family:&quot;Times New Roman&quot;, Times, ChungDoiIndic, serif\">17:30</span><span aria-hidden=\"true\" class=\"relative flex items-center justify-center self-stretch\"><span class=\"absolute left-1/2 -translate-x-1/2 w-px top-1/2 -bottom-8 md:-bottom-10\" style=\"background-color:color-mix(in srgb, #640e1b 40%, transparent)\"></span><span class=\"relative block h-2.5 w-2.5 rounded-full\" style=\"background-color:#640e1b;box-shadow:0 0 0 2px color-mix(in srgb, #640e1b 13%, transparent)\"></span></span><span class=\"text-[13px] md:text-[16px]\" style=\"color:#ab7a45;font-family:&quot;Times New Roman&quot;, Times, ChungDoiIndic, serif\"><span dir=\"auto\">Guests arrive and are seated</span></span></li><li class=\"contents\"><span class=\"pt-0.5 text-right text-[16px] md:text-[17px] tabular-nums tracking-wide leading-snug\" style=\"color:#ab7a45;font-family:&quot;Times New Roman&quot;, Times, ChungDoiIndic, serif\">18:00</span><span aria-hidden=\"true\" class=\"relative flex items-center justify-center self-stretch\"><span class=\"absolute left-1/2 -translate-x-1/2 w-px -top-8 md:-top-10 -bottom-8 md:-bottom-10\" style=\"background-color:color-mix(in srgb, #640e1b 40%, transparent)\"></span><span class=\"relative block h-2.5 w-2.5 rounded-full\" style=\"background-color:#640e1b;box-shadow:0 0 0 2px color-mix(in srgb, #640e1b 13%, transparent)\"></span></span><span class=\"text-[13px] md:text-[16px]\" style=\"color:#ab7a45;font-family:&quot;Times New Roman&quot;, Times, ChungDoiIndic, serif\"><span dir=\"auto\">Processional and vows</span></span></li><li class=\"contents\"><span class=\"pt-0.5 text-right text-[16px] md:text-[17px] tabular-nums tracking-wide leading-snug\" style=\"color:#ab7a45;font-family:&quot;Times New Roman&quot;, Times, ChungDoiIndic, serif\">18:45</span><span aria-hidden=\"true\" class=\"relative flex items-center justify-center self-stretch\"><span class=\"absolute left-1/2 -translate-x-1/2 w-px -top-8 md:-top-10 -bottom-8 md:-bottom-10\" style=\"background-color:color-mix(in srgb, #640e1b 40%, transparent)\"></span><span class=\"relative block h-2.5 w-2.5 rounded-full\" style=\"background-color:#640e1b;box-shadow:0 0 0 2px color-mix(in srgb, #640e1b 13%, transparent)\"></span></span><span class=\"text-[13px] md:text-[16px]\" style=\"color:#ab7a45;font-family:&quot;Times New Roman&quot;, Times, ChungDoiIndic, serif\"><span dir=\"auto\">Confetti and group photographs</span></span></li><li class=\"contents\"><span class=\"pt-0.5 text-right text-[16px] md:text-[17px] tabular-nums tracking-wide leading-snug\" style=\"color:#ab7a45;font-family:&quot;Times New Roman&quot;, Times, ChungDoiIndic, serif\"><span class=\"relative inline-block\"><span aria-hidden=\"true\" class=\"absolute top-1/2 flex w-max items-center justify-center -translate-y-1/2 right-full\" style=\"margin-right:39px\"><span aria-hidden=\"true\" class=\"relative z-10 block shrink-0 bg-contain bg-center bg-no-repeat\" style=\"width:40px;height:52px;background-image:url(/images/themes/mahal-gold/medallion-coming.webp)\"></span></span>19:30</span></span><span aria-hidden=\"true\" class=\"relative flex items-center justify-center self-stretch\"><span class=\"absolute left-1/2 -translate-x-1/2 w-px -top-8 md:-top-10 -bottom-8 md:-bottom-10\" style=\"background-color:color-mix(in srgb, #640e1b 40%, transparent)\"></span><span class=\"relative block h-2.5 w-2.5 rounded-full\" style=\"background-color:#640e1b;box-shadow:0 0 0 2px color-mix(in srgb, #640e1b 13%, transparent)\"></span></span><span class=\"text-[13px] md:text-[16px]\" style=\"color:#ab7a45;font-family:&quot;Times New Roman&quot;, Times, ChungDoiIndic, serif\"><span dir=\"auto\">Cocktail hour</span></span></li><li class=\"contents\"><span class=\"pt-0.5 text-right text-[16px] md:text-[17px] tabular-nums tracking-wide leading-snug\" style=\"color:#ab7a45;font-family:&quot;Times New Roman&quot;, Times, ChungDoiIndic, serif\"><span class=\"relative inline-block\"><span aria-hidden=\"true\" class=\"absolute top-1/2 flex w-max items-center justify-center -translate-y-1/2 right-full\" style=\"margin-right:39px\"><span aria-hidden=\"true\" class=\"relative z-10 block shrink-0 bg-contain bg-center bg-no-repeat\" style=\"width:40px;height:53px;background-image:url(/images/themes/mahal-gold/medallion-gift.webp)\"></span></span>20:30</span></span><span aria-hidden=\"true\" class=\"relative flex items-center justify-center self-stretch\"><span class=\"absolute left-1/2 -translate-x-1/2 w-px -top-8 md:-top-10 -bottom-8 md:-bottom-10\" style=\"background-color:color-mix(in srgb, #640e1b 40%, transparent)\"></span><span class=\"relative block h-2.5 w-2.5 rounded-full\" style=\"background-color:#640e1b;box-shadow:0 0 0 2px color-mix(in srgb, #640e1b 13%, transparent)\"></span></span><span class=\"text-[13px] md:text-[16px]\" style=\"color:#ab7a45;font-family:&quot;Times New Roman&quot;, Times, ChungDoiIndic, serif\"><span dir=\"auto\">Wedding breakfast served</span></span></li><li class=\"contents\"><span class=\"pt-0.5 text-right text-[16px] md:text-[17px] tabular-nums tracking-wide leading-snug\" style=\"color:#ab7a45;font-family:&quot;Times New Roman&quot;, Times, ChungDoiIndic, serif\"><span class=\"relative inline-block\"><span aria-hidden=\"true\" class=\"absolute top-1/2 flex w-max items-center justify-center -translate-y-1/2 right-full\" style=\"margin-right:39px\"><span aria-hidden=\"true\" class=\"relative z-10 block shrink-0 bg-contain bg-center bg-no-repeat\" style=\"width:40px;height:54px;background-image:url(/images/themes/mahal-gold/medallion-cake.webp)\"></span></span>22:00</span></span><span aria-hidden=\"true\" class=\"relative flex items-center justify-center self-stretch\"><span class=\"absolute left-1/2 -translate-x-1/2 w-px -top-8 md:-top-10 -bottom-8 md:-bottom-10\" style=\"background-color:color-mix(in srgb, #640e1b 40%, transparent)\"></span><span class=\"relative block h-2.5 w-2.5 rounded-full\" style=\"background-color:#640e1b;box-shadow:0 0 0 2px color-mix(in srgb, #640e1b 13%, transparent)\"></span></span><span class=\"text-[13px] md:text-[16px]\" style=\"color:#ab7a45;font-family:&quot;Times New Roman&quot;, Times, ChungDoiIndic, serif\"><span dir=\"auto\">Speeches and toasts</span></span></li><li class=\"contents\"><span class=\"pt-0.5 text-right text-[16px] md:text-[17px] tabular-nums tracking-wide leading-snug\" style=\"color:#ab7a45;font-family:&quot;Times New Roman&quot;, Times, ChungDoiIndic, serif\">22:45</span><span aria-hidden=\"true\" class=\"relative flex items-center justify-center self-stretch\"><span class=\"absolute left-1/2 -translate-x-1/2 w-px -top-8 md:-top-10 -bottom-8 md:-bottom-10\" style=\"background-color:color-mix(in srgb, #640e1b 40%, transparent)\"></span><span class=\"relative block h-2.5 w-2.5 rounded-full\" style=\"background-color:#640e1b;box-shadow:0 0 0 2px color-mix(in srgb, #640e1b 13%, transparent)\"></span></span><span class=\"text-[13px] md:text-[16px]\" style=\"color:#ab7a45;font-family:&quot;Times New Roman&quot;, Times, ChungDoiIndic, serif\"><span dir=\"auto\">Cutting of the cake</span></span></li><li class=\"contents\"><span class=\"pt-0.5 text-right text-[16px] md:text-[17px] tabular-nums tracking-wide leading-snug\" style=\"color:#ab7a45;font-family:&quot;Times New Roman&quot;, Times, ChungDoiIndic, serif\">23:00</span><span aria-hidden=\"true\" class=\"relative flex items-center justify-center self-stretch\"><span class=\"absolute left-1/2 -translate-x-1/2 w-px -top-8 md:-top-10 -bottom-8 md:-bottom-10\" style=\"background-color:color-mix(in srgb, #640e1b 40%, transparent)\"></span><span class=\"relative block h-2.5 w-2.5 rounded-full\" style=\"background-color:#640e1b;box-shadow:0 0 0 2px color-mix(in srgb, #640e1b 13%, transparent)\"></span></span><span class=\"text-[13px] md:text-[16px]\" style=\"color:#ab7a45;font-family:&quot;Times New Roman&quot;, Times, ChungDoiIndic, serif\"><span dir=\"auto\">First dance</span></span></li><li class=\"contents\"><span class=\"pt-0.5 text-right text-[16px] md:text-[17px] tabular-nums tracking-wide leading-snug\" style=\"color:#ab7a45;font-family:&quot;Times New Roman&quot;, Times, ChungDoiIndic, serif\">01:00</span><span aria-hidden=\"true\" class=\"relative flex items-center justify-center self-stretch\"><span class=\"absolute left-1/2 -translate-x-1/2 w-px -top-8 md:-top-10 bottom-1/2\" style=\"background-color:color-mix(in srgb, #640e1b 40%, transparent)\"></span><span class=\"relative block h-2.5 w-2.5 rounded-full\" style=\"background-color:#640e1b;box-shadow:0 0 0 2px color-mix(in srgb, #640e1b 13%, transparent)\"></span></span><span class=\"text-[13px] md:text-[16px]\" style=\"color:#ab7a45;font-family:&quot;Times New Roman&quot;, Times, ChungDoiIndic, serif\"><span dir=\"auto\">Evening send-off</span></span></li></ol></div></div><div class=\"relative isolate z-10\"><section class=\"relative z-10 px-[9%] pt-[6%] pb-[5%] md:px-[14%]\" style=\"background-color:transparent;color:#ab7a45;font-family:&quot;Baskerville&quot;, &quot;Libre Baskerville&quot;, &quot;Times New Roman&quot;, ChungDoiIndic, serif\" data-landing-screenshot-id=\"invite-guestbook\" data-showcase-keep=\"\"><div class=\"text-center\"><h2 class=\"font-bold text-[20px] md:text-[26px] text-center uppercase tracking-[0.04em] mb-5\" style=\"color:#640e1b;font-family:&quot;Times New Roman&quot;, Times, ChungDoiIndic, serif;font-weight:700;text-transform:uppercase\"><span dir=\"auto\">Guestbook</span></h2></div><form id=\"guestbookForm\" class=\"mt-6 mx-auto w-full max-w-full md:max-w-[600px]\"><div class=\"\"><div class=\"mb-4\"><input type=\"text\" id=\"guestbookName\" placeholder=\"Enter your name*\" class=\"w-full rounded-lg border px-4 py-3 text-sm focus:outline-none\" style=\"border-color:#ab7a45;border-radius:6px;color:#640e1b;background-color:transparent;font-family:\\'Roboto\\', system-ui, sans-serif\" maxLength=\"500\" required=\"\" value=\"Claire\"/></div><textarea id=\"guestbookWish\" placeholder=\"Enter your wishes*\" class=\"w-full rounded-lg border px-4 py-3 text-sm focus:outline-none\" style=\"border-color:#ab7a45;border-radius:6px;color:#640e1b;background-color:transparent;font-family:\\'Roboto\\', system-ui, sans-serif\" rows=\"3\" required=\"\"></textarea><div class=\"mt-4 flex items-center justify-between text-xs\"><div class=\"flex items-center text-xs space-x-1\"><button type=\"button\" class=\"p-2 rounded-lg transition-all duration-200 hover:scale-110 text-base leading-none\" style=\"background-color:#640e1b1A;color:#640e1b\" title=\"Generate wish with AI\">\ud83e\ude84</button></div><button type=\"submit\" class=\"rounded-full px-6 py-2 text-sm font-semibold text-white transition-transform hover:scale-105 disabled:cursor-not-allowed disabled:opacity-60\" style=\"background-color:#640e1b;font-family:&quot;Times New Roman&quot;, Times, ChungDoiIndic, serif\"><span dir=\"auto\">SEND WISHES</span></button></div></div></form><div class=\"mt-8 w-full max-h-[500px] space-y-3 overflow-y-auto pr-2 mx-auto max-w-full md:max-w-[600px]\"><div class=\"rounded-md border p-4 text-sm\" style=\"border-color:rgba(171, 122, 69, 0.35);background-color:rgba(255,255,255,0.55)\"><div class=\"flex items-start justify-between\"><span class=\"font-semibold\" style=\"color:#640e1b\">Freya Lindqvist</span><span class=\"text-xs opacity-70\">2/21/2027, 9:00:00 AM</span></div><p class=\"mt-2 leading-relaxed\">Wishing you every happiness today and always. Thank you for letting us share it.</p></div><div class=\"rounded-md border p-4 text-sm\" style=\"border-color:rgba(171, 122, 69, 0.35);background-color:rgba(255,255,255,0.55)\"><div class=\"flex items-start justify-between\"><span class=\"font-semibold\" style=\"color:#640e1b\">Nadia Farouk</span><span class=\"text-xs opacity-70\">2/22/2027, 10:00:00 AM</span></div><p class=\"mt-2 leading-relaxed\">To a marriage as warm and generous as the two of you have always been.</p></div><div class=\"rounded-md border p-4 text-sm\" style=\"border-color:rgba(171, 122, 69, 0.35);background-color:rgba(255,255,255,0.55)\"><div class=\"flex items-start justify-between\"><span class=\"font-semibold\" style=\"color:#640e1b\">Ethan Clarke</span><span class=\"text-xs opacity-70\">2/23/2027, 11:00:00 AM</span></div><p class=\"mt-2 leading-relaxed\">What a day. Thank you for gathering us all in one room.</p></div><div class=\"rounded-md border p-4 text-sm\" style=\"border-color:rgba(171, 122, 69, 0.35);background-color:rgba(255,255,255,0.55)\"><div class=\"flex items-start justify-between\"><span class=\"font-semibold\" style=\"color:#640e1b\">Isabella Ramos</span><span class=\"text-xs opacity-70\">2/24/2027, 12:00:00 PM</span></div><p class=\"mt-2 leading-relaxed\">May the years be kind and may you keep making each other laugh.</p></div><div class=\"rounded-md border p-4 text-sm\" style=\"border-color:rgba(171, 122, 69, 0.35);background-color:rgba(255,255,255,0.55)\"><div class=\"flex items-start justify-between\"><span class=\"font-semibold\" style=\"color:#640e1b\">Kofi Boateng</span><span class=\"text-xs opacity-70\">2/25/2027, 1:00:00 PM</span></div><p class=\"mt-2 leading-relaxed\">Here is to a long life together, and to the friends who get to watch it.</p></div><div class=\"rounded-md border p-4 text-sm\" style=\"border-color:rgba(171, 122, 69, 0.35);background-color:rgba(255,255,255,0.55)\"><div class=\"flex items-start justify-between\"><span class=\"font-semibold\" style=\"color:#640e1b\">Mia Sullivan</span><span class=\"text-xs opacity-70\">2/26/2027, 2:00:00 PM</span></div><p class=\"mt-2 leading-relaxed\">You two have been family to me for years. Today just makes it official.</p></div><div class=\"rounded-md border p-4 text-sm\" style=\"border-color:rgba(171, 122, 69, 0.35);background-color:rgba(255,255,255,0.55)\"><div class=\"flex items-start justify-between\"><span class=\"font-semibold\" style=\"color:#640e1b\">Yusuf Demir</span><span class=\"text-xs opacity-70\">2/27/2027, 3:00:00 PM</span></div><p class=\"mt-2 leading-relaxed\">Wishing you patience on the hard days and joy on all the rest.</p></div><div class=\"rounded-md border p-4 text-sm\" style=\"border-color:rgba(171, 122, 69, 0.35);background-color:rgba(255,255,255,0.55)\"><div class=\"flex items-start justify-between\"><span class=\"font-semibold\" style=\"color:#640e1b\">Rachel Goldman</span><span class=\"text-xs opacity-70\">2/28/2027, 4:00:00 PM</span></div><p class=\"mt-2 leading-relaxed\">Congratulations. May your love keep growing quietly and stubbornly, year after year.</p></div><div class=\"rounded-md border p-4 text-sm\" style=\"border-color:rgba(171, 122, 69, 0.35);background-color:rgba(255,255,255,0.55)\"><div class=\"flex items-start justify-between\"><span class=\"font-semibold\" style=\"color:#640e1b\">Siti Nurhaliza</span><span class=\"text-xs opacity-70\">3/1/2027, 5:00:00 PM</span></div><p class=\"mt-2 leading-relaxed\">Thank you for a day we will be talking about for a very long time.</p></div><div class=\"rounded-md border p-4 text-sm\" style=\"border-color:rgba(171, 122, 69, 0.35);background-color:rgba(255,255,255,0.55)\"><div class=\"flex items-start justify-between\"><span class=\"font-semibold\" style=\"color:#640e1b\">Henry Ashcroft</span><span class=\"text-xs opacity-70\">3/2/2027, 6:00:00 PM</span></div><p class=\"mt-2 leading-relaxed\">To love, to family, and to the two of you who brought us all together.</p></div></div></section><div class=\"relative isolate\"><div aria-hidden=\"true\" class=\"pointer-events-none absolute bg-contain bg-center bg-no-repeat -z-10 opacity-10 top-0 left-[-35.7%] mt-[-30.6%] w-[244%] md:w-[170%]\" style=\"aspect-ratio:1448/1086;background-image:url(/images/themes/mahal-gold/castle2.webp)\"></div><div class=\"flex flex-col items-center justify-center py-8 relative z-10 px-[9%] pb-[6%] md:px-[14%]\" style=\"background-color:transparent\"><h2 class=\"mb-4 font-bold text-[20px] md:text-[26px] uppercase tracking-[0.04em]  flex flex-col items-center\" style=\"color:#640e1b;font-family:&quot;Times New Roman&quot;, Times, ChungDoiIndic, serif;text-transform:uppercase\"><span dir=\"auto\">Gift Box</span></h2><button type=\"button\" style=\"width:260px;height:280px\" aria-label=\"Open gift box\" class=\"jsx-dd7f1ef62680a11c group relative cursor-pointer outline-none border-none bg-transparent \"><div class=\"jsx-dd7f1ef62680a11c relative w-full h-full flex items-end justify-center pb-[26px]\"><span style=\"top:8%;left:14%;color:#ab7a45;font-size:22px\" class=\"jsx-dd7f1ef62680a11c igb-sparkle absolute pointer-events-none z-20\">\u2726</span><span style=\"top:18%;right:10%;color:#ab7a45;font-size:16px\" class=\"jsx-dd7f1ef62680a11c igb-sparkle-2 absolute pointer-events-none z-20\">\u2726</span><span style=\"top:32%;left:5%;color:#ab7a45;font-size:14.000000000000002px\" class=\"jsx-dd7f1ef62680a11c igb-sparkle-3 absolute pointer-events-none z-20\">\u2726</span><span style=\"top:26%;right:5%;color:#ab7a45;font-size:14.000000000000002px\" class=\"jsx-dd7f1ef62680a11c igb-sparkle-4 absolute pointer-events-none z-20\">\u2726</span><div style=\"bottom:187px;left:50%\" class=\"jsx-dd7f1ef62680a11c absolute pointer-events-none z-0\"><div class=\"igb-confetti igb-c1\" style=\"position:absolute;left:50%;top:0;opacity:0;margin-left:-5.5px;margin-top:-2.75px;pointer-events:none;will-change:transform, opacity;width:11px;height:5.5px;background-color:#ec4899;border-radius:2px\"></div><div class=\"igb-confetti igb-c2\" style=\"position:absolute;left:50%;top:0;opacity:0;margin-left:-5px;margin-top:-5px;pointer-events:none;will-change:transform, opacity;width:10px;height:10px;background-color:#ab7a45;border-radius:50%\"></div><div class=\"igb-confetti igb-c3\" style=\"position:absolute;left:50%;top:0;opacity:0;margin-left:-5.5px;margin-top:-2.75px;pointer-events:none;will-change:transform, opacity;width:11px;height:5.5px;background-color:#22c55e;border-radius:2px\"></div><div class=\"igb-confetti igb-c4\" style=\"position:absolute;left:50%;top:0;opacity:0;margin-left:-4.5px;margin-top:-4.5px;pointer-events:none;will-change:transform, opacity;width:9px;height:9px;background-color:#3b82f6;border-radius:50%\"></div><div class=\"igb-confetti igb-c5\" style=\"position:absolute;left:50%;top:0;opacity:0;margin-left:-6px;margin-top:-3px;pointer-events:none;will-change:transform, opacity;width:12px;height:6px;background-color:#a855f7;border-radius:2px\"></div><div class=\"igb-confetti igb-c6\" style=\"position:absolute;left:50%;top:0;opacity:0;margin-left:-5px;margin-top:-5px;pointer-events:none;will-change:transform, opacity;width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-bottom:10px solid #facc15\"></div><div class=\"igb-confetti igb-c7\" style=\"position:absolute;left:50%;top:0;opacity:0;margin-left:-5px;margin-top:-2.5px;pointer-events:none;will-change:transform, opacity;width:10px;height:5px;background-color:#640e1b;border-radius:2px\"></div><div class=\"igb-confetti igb-c8\" style=\"position:absolute;left:50%;top:0;opacity:0;margin-left:-4.5px;margin-top:-4.5px;pointer-events:none;will-change:transform, opacity;width:9px;height:9px;background-color:#f97316;border-radius:50%\"></div></div><div style=\"width:200px;height:220px\" class=\"jsx-dd7f1ef62680a11c igb-bob relative\"><div style=\"left:50%;bottom:-8px;width:144px;height:12px;margin-left:-72px;border-radius:50%;background-color:rgba(0,0,0,0.45);filter:blur(4px);z-index:0;will-change:transform, opacity\" class=\"jsx-dd7f1ef62680a11c igb-shadow absolute pointer-events-none\"></div><img src=\"/images/giftbox/mini/silk_flora_brown.webp\" alt=\"\" loading=\"lazy\" decoding=\"async\" class=\"igb-decor igb-decor-1 absolute pointer-events-none\" style=\"left:-20px;top:10px;width:34px;z-index:1;transform:rotate(-22deg);filter:drop-shadow(0 2px 3px rgba(0,0,0,0.25));will-change:transform, opacity\"/><img src=\"/images/giftbox/mini/minimalism_green.webp\" alt=\"\" loading=\"lazy\" decoding=\"async\" class=\"igb-decor igb-decor-2 absolute pointer-events-none\" style=\"left:168px;top:2px;width:38px;z-index:1;transform:rotate(20deg);filter:drop-shadow(0 2px 3px rgba(0,0,0,0.25));will-change:transform, opacity\"/><img src=\"/images/giftbox/mini/minimalism_darkred.webp\" alt=\"\" loading=\"lazy\" decoding=\"async\" class=\"igb-decor igb-decor-3 absolute pointer-events-none\" style=\"left:-16px;top:120px;width:26px;z-index:1;transform:rotate(-18deg);filter:drop-shadow(0 2px 3px rgba(0,0,0,0.25));will-change:transform, opacity\"/><img src=\"/images/giftbox/mini/jasmine_white.webp\" alt=\"\" loading=\"lazy\" decoding=\"async\" class=\"igb-decor igb-decor-4 absolute pointer-events-none\" style=\"left:182px;top:114px;width:24px;z-index:1;transform:rotate(14deg);filter:drop-shadow(0 2px 3px rgba(0,0,0,0.25));will-change:transform, opacity\"/><img src=\"/images/giftbox/mahal_gold.webp\" alt=\"\" loading=\"lazy\" decoding=\"async\" style=\"left:50%;bottom:0;width:170px;max-height:220px;object-fit:contain;margin-left:-85px;z-index:2;filter:drop-shadow(0 10px 18px rgba(0,0,0,0.25));will-change:transform\" id=\"giftBoxTrigger\" class=\"jsx-dd7f1ef62680a11c igb-box absolute cursor-pointer hover:scale-105 transition-transform\"/><img src=\"/images/giftbox/mini/silk_ribbon_darkred.webp\" alt=\"\" loading=\"lazy\" decoding=\"async\" class=\"igb-decor igb-decor-5 absolute pointer-events-none\" style=\"left:-8px;top:172px;width:44px;z-index:3;transform:rotate(8deg);filter:drop-shadow(0 2px 3px rgba(0,0,0,0.25));will-change:transform, opacity\"/><img src=\"/images/giftbox/mini/cherry_blossom_pink.webp\" alt=\"\" loading=\"lazy\" decoding=\"async\" class=\"igb-decor igb-decor-6 absolute pointer-events-none\" style=\"left:26px;top:182px;width:26px;z-index:3;transform:rotate(-10deg);filter:drop-shadow(0 2px 3px rgba(0,0,0,0.25));will-change:transform, opacity\"/><img src=\"/images/giftbox/mini/saraya_gold.webp\" alt=\"\" loading=\"lazy\" decoding=\"async\" class=\"igb-decor igb-decor-7 absolute pointer-events-none\" style=\"left:118px;top:176px;width:40px;z-index:3;transform:rotate(-14deg);filter:drop-shadow(0 2px 3px rgba(0,0,0,0.25));will-change:transform, opacity\"/></div></div><p style=\"color:#640e1b\" class=\"jsx-dd7f1ef62680a11c igb-hint absolute bottom-0 left-1/2 -translate-x-1/2 text-xs whitespace-nowrap font-medium\"><span dir=\"auto\">Tap to open</span></p></button><dialog id=\"giftModal\" class=\"modal modal-bottom sm:modal-middle\"><div class=\"modal-box max-w-lg sm:max-w-xl p-0 max-h-[90vh] overflow-y-auto\" style=\"background-color:#f7e3cd\"><div class=\"relative px-6 pt-6 pb-4 text-center\" style=\"background-color:#640e1b\"><button type=\"button\" id=\"giftCloseBtn\" class=\"btn btn-sm btn-circle btn-ghost absolute right-3 top-3 text-white/80 hover:text-white hover:bg-white/20\"><svg class=\"h-5 w-5\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 18L18 6M6 6l12 12\"></path></svg></button><h2 class=\"font-bold text-[20px] md:text-[26px] uppercase tracking-[0.04em] \" style=\"text-shadow:1px 1px 2px rgba(0,0,0,0.2);font-family:&quot;Times New Roman&quot;, Times, ChungDoiIndic, serif;color:white;text-transform:uppercase\">Gift Box</h2></div><div class=\"p-4 sm:p-6\"><div class=\"flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:items-start sm:justify-center\" style=\"color:#640e1b\"><div class=\"flex flex-col items-center flex-1 max-w-[180px] sm:max-w-none\"><div class=\"flex items-start gap-1.5 mb-2 min-h-[2rem]\"><img src=\"/icons/payments/zelle.svg\" alt=\"Zelle\" class=\"w-5 h-5 object-contain\"/><h3 class=\"text-xs font-medium text-center text-balance line-clamp-2\" style=\"color:#640e1b\">Groom - Zelle</h3></div><div class=\"mt-2 text-center space-y-0.5\"><p class=\"text-[11px] font-mono break-all font-semibold\" style=\"color:#640e1b\">wedding.demo@example.com</p><button type=\"button\" onclick=\"copyToClipboard('wedding.demo@example.com', 'Zelle email')\" class=\"mt-1 text-[10px] px-2.5 py-1 bg-[#640e1b] text-white rounded-full font-medium hover:bg-[#800000] transition-colors cursor-pointer\">Copy Email</button><p class=\"text-[10px]\" style=\"color:#640e1b\">Example Bank</p></div><p class=\"text-[10px] mt-2 text-center opacity-70\" style=\"color:#640e1b\">Guests send through their own US banking app. Zelle has no public QR link, so the card shows the info to copy.</p><div class=\"flex gap-1.5 mt-2 flex-wrap justify-center\"></div></div><div class=\"flex flex-col items-center flex-1 max-w-[180px] sm:max-w-none\"><div class=\"flex items-start gap-1.5 mb-2 min-h-[2rem]\"><img src=\"/icons/payments/venmo.svg\" alt=\"Venmo\" class=\"w-5 h-5 object-contain\"/><h3 class=\"text-xs font-medium text-center text-balance line-clamp-2\" style=\"color:#640e1b\">Bride - Venmo</h3></div><div class=\"w-32 h-32 sm:w-40 sm:h-40 bg-white rounded-xl p-2 shadow-lg flex items-center justify-center\" style=\"border:2px solid #640e1b20\"><img src=\"/images/venmo_qr.png\" alt=\"QR - Venmo\" class=\"w-full h-full object-contain\"/></div><div class=\"mt-2 text-center space-y-0.5\"><p class=\"text-[11px] font-mono break-all font-semibold\" style=\"color:#640e1b\">@wedding-demo</p><button type=\"button\" onclick=\"copyToClipboard('@wedding-demo', 'Venmo handle')\" class=\"mt-1 text-[10px] px-2.5 py-1 bg-[#008CFF] text-white rounded-full font-medium hover:bg-[#0070cc] transition-colors cursor-pointer\">Copy Venmo</button></div><div class=\"flex gap-1.5 mt-2 flex-wrap justify-center\"><a href=\"https://venmo.com/wedding-demo\" target=\"_blank\" rel=\"nofollow noopener noreferrer\" class=\"text-[10px] px-2 py-1 inline-flex items-center gap-1 font-medium rounded-full transition-colors whitespace-nowrap shrink-0\" style=\"color:#fff;background-color:#3D95CE\">Venmo</a><button type=\"button\" class=\"text-[10px] px-2 py-1 inline-flex items-center gap-1 font-medium rounded-full transition-colors\" style=\"color:#640e1b;background-color:#640e1b15\"><svg class=\"w-3 h-3\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\" stroke-width=\"2\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4\"></path></svg>Save QR</button></div></div></div></div></div><form class=\"modal-backdrop\" method=\"dialog\"><button type=\"submit\">close</button></form></dialog></div></div></div><div class=\"relative isolate z-10\"><footer class=\"relative z-20 flex flex-col items-center px-[9%] pb-[62%] text-center md:px-[14%] md:pb-[44%]\"><span class=\"whitespace-pre-line flex flex-col items-center gap-1 text-[11px] md:text-[14px] mx-auto md:max-w-[560px]\" style=\"color:#640e1b;font-family:&quot;Roboto&quot;, system-ui, ChungDoiIndic, sans-serif;font-weight:500\"><span dir=\"auto\">Your presence would be the greatest gift we could receive!</span></span><div class=\"mt-6 flex items-center justify-center md:mt-8\"><a href=\"https://chungdoi.com\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-xs opacity-50 hover:opacity-70 transition-opacity \" style=\"color:#640e1b\">\u2661 <!-- -->chungdoi.com</a></div></footer><img src=\"/images/themes/mahal-gold/castle.webp\" alt=\"\" aria-hidden=\"true\" class=\"pointer-events-none absolute bottom-[-15%] left-[-40.6%] z-0 h-auto w-[176.6%] max-w-none object-contain md:left-[-18%] md:w-[136%]\" loading=\"eager\" decoding=\"async\"/></div><dialog id=\"lightboxModal\" class=\"modal\"><div class=\"modal-box max-w-none w-auto h-auto bg-transparent shadow-none p-0 m-0 cursor-pointer\"><div class=\"flex flex-col items-center h-[100dvh] w-screen px-2 sm:px-4 pt-10 sm:pt-12 pb-4 sm:pb-6\"><form class=\"absolute right-2 sm:right-4 top-2 sm:top-4 z-10\" method=\"dialog\"><button class=\"btn btn-sm btn-circle btn-ghost text-white text-xl sm:text-2xl hover:bg-white/20\" id=\"lightboxClose\" aria-label=\"Close lightbox\">\u2715</button></form><div id=\"lightboxCounter\" class=\"absolute top-2 sm:top-4 left-2 sm:left-4 text-white text-sm sm:text-lg bg-black/40 px-2 sm:px-3 py-1 rounded-full shadow-md z-10\">1 / 11</div><div class=\"relative flex flex-1 w-full max-w-5xl items-center justify-center cursor-pointer px-8 sm:px-12 min-h-0 overscroll-none\" style=\"touch-action:none\"><button type=\"button\" class=\"btn btn-circle btn-ghost text-white text-2xl sm:text-4xl absolute left-0 sm:left-2 z-10 hover:bg-white/20 btn-sm sm:btn-md\" id=\"lightboxPrev\" aria-label=\"Previous image\">\u2039</button><img id=\"lightboxImg\" src=\"/images/photos/f83d243670c753a3a8de98002b84126e357b748067b4099372400e34a15278ba.webp\" alt=\"Wedding Photo\" class=\"max-h-full max-w-full rounded-xl sm:rounded-2xl object-contain shadow-2xl select-none cursor-default\" style=\"transform:translate(0px, 0px) scale(1);transition:transform 0.2s ease-out;will-change:transform;touch-action:none\" draggable=\"false\"/><button type=\"button\" class=\"btn btn-circle btn-ghost text-white text-2xl sm:text-4xl absolute right-0 sm:right-2 z-10 hover:bg-white/20 btn-sm sm:btn-md\" id=\"lightboxNext\" aria-label=\"Next image\">\u203a</button></div><div class=\"flex-shrink-0 flex gap-2 sm:gap-3 overflow-x-auto px-2 sm:px-4 py-2 sm:py-3 mt-3 sm:mt-4 bg-black/30 rounded-lg backdrop-blur-sm max-w-[90vw] sm:max-w-[80vw] cursor-default [&amp;::-webkit-scrollbar]:hidden\" style=\"scrollbar-width:none;-ms-overflow-style:none\"><button type=\"button\" data-thumb-index=\"0\" class=\"flex-shrink-0 h-12 w-12 sm:h-16 sm:w-16 rounded-md sm:rounded-lg overflow-hidden transition-all duration-200 scale-105 shadow-lg\" style=\"outline:2px solid #640e1b;outline-offset:2px\" aria-label=\"View image 1\" aria-current=\"true\"><img src=\"/images/photos/f83d243670c753a3a8de98002b84126e357b748067b4099372400e34a15278ba.webp\" class=\"h-full w-full object-cover\" alt=\"Thumbnail 1\" draggable=\"false\"/></button><button type=\"button\" data-thumb-index=\"1\" class=\"flex-shrink-0 h-12 w-12 sm:h-16 sm:w-16 rounded-md sm:rounded-lg overflow-hidden transition-all duration-200 opacity-60 hover:opacity-100\" aria-label=\"View image 2\"><img src=\"/images/photos/cb444178a6dd5753046eb92dd6c85bc433fcafb9139d14ff843aa96c9a29efa1.webp\" class=\"h-full w-full object-cover\" alt=\"Thumbnail 2\" draggable=\"false\"/></button><button type=\"button\" data-thumb-index=\"2\" class=\"flex-shrink-0 h-12 w-12 sm:h-16 sm:w-16 rounded-md sm:rounded-lg overflow-hidden transition-all duration-200 opacity-60 hover:opacity-100\" aria-label=\"View image 3\"><img src=\"/images/photos/e44778eff5ba6bce43ff44630d64afd998314f6599a504de52c4604889658464.webp\" class=\"h-full w-full object-cover\" alt=\"Thumbnail 3\" draggable=\"false\"/></button><button type=\"button\" data-thumb-index=\"3\" class=\"flex-shrink-0 h-12 w-12 sm:h-16 sm:w-16 rounded-md sm:rounded-lg overflow-hidden transition-all duration-200 opacity-60 hover:opacity-100\" aria-label=\"View image 4\"><img src=\"/images/photos/b572d32a98e5893a0a485e35ce0016d85fc6e35e03ca4b27151124f0e1f91fd8.webp\" class=\"h-full w-full object-cover\" alt=\"Thumbnail 4\" draggable=\"false\"/></button><button type=\"button\" data-thumb-index=\"4\" class=\"flex-shrink-0 h-12 w-12 sm:h-16 sm:w-16 rounded-md sm:rounded-lg overflow-hidden transition-all duration-200 opacity-60 hover:opacity-100\" aria-label=\"View image 5\"><img src=\"/images/photos/1ca6ea249bd32431f552ad193f4cb9e109c3e3e01016a76ddd6d67572da63d21.webp\" class=\"h-full w-full object-cover\" alt=\"Thumbnail 5\" draggable=\"false\"/></button><button type=\"button\" data-thumb-index=\"5\" class=\"flex-shrink-0 h-12 w-12 sm:h-16 sm:w-16 rounded-md sm:rounded-lg overflow-hidden transition-all duration-200 opacity-60 hover:opacity-100\" aria-label=\"View image 6\"><img src=\"/images/photos/e2b7e8a5add0cd52c62a4d326dbf25285299afb96bf9130aa0330c5f37282f7e.webp\" class=\"h-full w-full object-cover\" alt=\"Thumbnail 6\" draggable=\"false\"/></button><button type=\"button\" data-thumb-index=\"6\" class=\"flex-shrink-0 h-12 w-12 sm:h-16 sm:w-16 rounded-md sm:rounded-lg overflow-hidden transition-all duration-200 opacity-60 hover:opacity-100\" aria-label=\"View image 7\"><img src=\"/images/photos/65c80c596d85f34befd4f244b1ed0d45d147ffcededcea5a44611fdcfedb9755.webp\" class=\"h-full w-full object-cover\" alt=\"Thumbnail 7\" draggable=\"false\"/></button><button type=\"button\" data-thumb-index=\"7\" class=\"flex-shrink-0 h-12 w-12 sm:h-16 sm:w-16 rounded-md sm:rounded-lg overflow-hidden transition-all duration-200 opacity-60 hover:opacity-100\" aria-label=\"View image 8\"><img src=\"/images/photos/c4aa84136b7a0436d5dcfe8acf1a06740412334756beadfd1acfc9924a4895a8.webp\" class=\"h-full w-full object-cover\" alt=\"Thumbnail 8\" draggable=\"false\"/></button><button type=\"button\" data-thumb-index=\"8\" class=\"flex-shrink-0 h-12 w-12 sm:h-16 sm:w-16 rounded-md sm:rounded-lg overflow-hidden transition-all duration-200 opacity-60 hover:opacity-100\" aria-label=\"View image 9\"><img src=\"/images/photos/390c49fca6f000eaab3de4113fc3ac4c5e555a0a9e6c21867e919d47392ee185.webp\" class=\"h-full w-full object-cover\" alt=\"Thumbnail 9\" draggable=\"false\"/></button><button type=\"button\" data-thumb-index=\"9\" class=\"flex-shrink-0 h-12 w-12 sm:h-16 sm:w-16 rounded-md sm:rounded-lg overflow-hidden transition-all duration-200 opacity-60 hover:opacity-100\" aria-label=\"View image 10\"><img src=\"/images/photos/b72a19c1721e965eea6fd2853d550c3ffe2bfb753db8b9034155c6456fff40b0.webp\" class=\"h-full w-full object-cover\" alt=\"Thumbnail 10\" draggable=\"false\"/></button><button type=\"button\" data-thumb-index=\"10\" class=\"flex-shrink-0 h-12 w-12 sm:h-16 sm:w-16 rounded-md sm:rounded-lg overflow-hidden transition-all duration-200 opacity-60 hover:opacity-100\" aria-label=\"View image 11\"><img src=\"/images/photos/faf693fa483740c47624845c2978025af25a83b87800c0eaef7923438ce83c41.webp\" class=\"h-full w-full object-cover\" alt=\"Thumbnail 11\" draggable=\"false\"/></button></div></div></div><form class=\"modal-backdrop bg-black/85\" method=\"dialog\"><button>close</button></form></dialog></div></div></main></div></div></div>\n  </div>\n\n  <!-- Floating Music Player Button -->\n  <div id=\"floatingMusicWidget\" class=\"fixed bottom-14 right-4 z-40\" style=\"display: none;\">\n    <!-- Tooltip -->\n    <div id=\"musicTooltip\" style=\"animation-duration: 2s; display: none;\" class=\"absolute bottom-14 right-0 animate-bounce-gentle\">\n      <div style=\"background-color: #640e1b;\" class=\"relative px-3 py-2 rounded-lg shadow-lg text-white text-sm font-medium whitespace-nowrap\">\n        <span>Tap to play music</span>\n        <div style=\"border-top-color: #640e1b;\" class=\"absolute -bottom-2 right-4 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px]\"></div>\n      </div>\n    </div>\n    <!-- Ping ring -->\n    <div id=\"musicPingRing\" style=\"background-color: #640e1b; display: none;\" class=\"absolute inset-0 rounded-full animate-ping-slow opacity-60\"></div>\n    <!-- Player Button -->\n    <button id=\"musicPlayerBtn\" type=\"button\" aria-label=\"Play music\" class=\"relative w-12 h-12 rounded-full shadow-lg cursor-pointer focus:outline-none transition-all hover:scale-110 active:scale-95 hover:shadow-xl\">\n      <!-- Vinyl Disc Background -->\n      <div id=\"musicDisc\" style=\"background: linear-gradient(to bottom right, #640e1bcc, #640e1b, #640e1bdd);\" class=\"absolute inset-0 rounded-full\">\n        <div class=\"absolute inset-1 rounded-full border border-white/20\"></div>\n        <div class=\"absolute inset-0 rounded-full bg-gradient-to-tr from-white/30 via-transparent to-transparent\"></div>\n      </div>\n      <!-- Playing Icon (Equalizer Bars) -->\n      <div id=\"musicPlayingIcon\" class=\"absolute inset-0 flex items-center justify-center\" style=\"display: none;\">\n        <div class=\"flex items-end gap-0.5 h-4\">\n          <div class=\"w-1 bg-white rounded-full animate-dance-1\" style=\"height: 60%;\"></div>\n          <div class=\"w-1 bg-white rounded-full animate-dance-2\" style=\"height: 100%;\"></div>\n          <div class=\"w-1 bg-white rounded-full animate-dance-3\" style=\"height: 75%;\"></div>\n        </div>\n      </div>\n      <!-- Paused Icon (Play Triangle) -->\n      <div id=\"musicPausedIcon\" class=\"absolute inset-0 flex items-center justify-center\">\n        <svg class=\"w-5 h-5 text-white ml-0.5\" fill=\"currentColor\" viewBox=\"0 0 24 24\">\n          <path d=\"M8 5v14l11-7z\"></path>\n        </svg>\n      </div>\n    </button>\n  </div>\n\n  <!-- RSVP Modal Dialog -->\n  <dialog id=\"rsvpModal\" class=\"modal modal-bottom sm:modal-middle\">\n    <div class=\"modal-box max-w-lg p-0\" style=\"background-color:#f7e3cd;\">\n      <div class=\"relative px-6 pt-6 pb-4 text-center\" style=\"background-color:#640e1b;\">\n        <button id=\"rsvpCloseBtn\" type=\"button\" class=\"btn btn-sm btn-circle btn-ghost absolute right-3 top-3 text-white/80 hover:text-white hover:bg-white/20\">\n          <svg class=\"h-5 w-5\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\">\n            <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 18L18 6M6 6l12 12\"></path>\n          </svg>\n        </button>\n        <h2 class=\"font-bold text-[20px] md:text-[26px] uppercase tracking-[0.04em] text-white\" style=\"font-family:'Times New Roman', serif;\">\n          Wedding RSVP\n        </h2>\n      </div>\n      <div class=\"p-6\">\n        <form id=\"rsvpForm\" class=\"space-y-4\">\n          <div>\n            <label class=\"block text-xs font-semibold mb-1\" style=\"color: #640e1b;\">Full Name *</label>\n            <input type=\"text\" id=\"rsvpName\" required placeholder=\"Your Name\" value=\"Claire\" class=\"w-full rounded-lg border px-3 py-2 text-sm bg-transparent\" style=\"border-color:#ab7a45; color:#640e1b;\"/>\n          </div>\n          <div>\n            <label class=\"block text-xs font-semibold mb-2\" style=\"color: #640e1b;\">Will you attend? *</label>\n            <div class=\"grid grid-cols-2 gap-3\">\n              <label class=\"flex items-center gap-2 p-3 rounded-lg border cursor-pointer hover:bg-white/40 transition-colors\" style=\"border-color:#ab7a45;\">\n                <input type=\"radio\" name=\"attending\" value=\"yes\" checked class=\"text-[#640e1b]\"/>\n                <span class=\"text-xs font-medium\" style=\"color:#640e1b;\">Joyfully Accept</span>\n              </label>\n              <label class=\"flex items-center gap-2 p-3 rounded-lg border cursor-pointer hover:bg-white/40 transition-colors\" style=\"border-color:#ab7a45;\">\n                <input type=\"radio\" name=\"attending\" value=\"no\" class=\"text-[#640e1b]\"/>\n                <span class=\"text-xs font-medium\" style=\"color:#640e1b;\">Regretfully Decline</span>\n              </label>\n            </div>\n          </div>\n          <div>\n            <label class=\"block text-xs font-semibold mb-1\" style=\"color: #640e1b;\">Number of Guests</label>\n            <select id=\"rsvpCount\" class=\"w-full rounded-lg border px-3 py-2 text-sm bg-transparent\" style=\"border-color:#ab7a45; color:#640e1b;\">\n              <option value=\"1\">1 Person</option>\n              <option value=\"2\">2 Persons</option>\n              <option value=\"3\">3 Persons</option>\n              <option value=\"4\">4+ Persons</option>\n            </select>\n          </div>\n          <div>\n            <label class=\"block text-xs font-semibold mb-1\" style=\"color: #640e1b;\">Message for the Couple</label>\n            <textarea id=\"rsvpMsg\" rows=\"3\" placeholder=\"Leave your heartfelt wishes...\" class=\"w-full rounded-lg border px-3 py-2 text-sm bg-transparent\" style=\"border-color:#ab7a45; color:#640e1b;\"></textarea>\n          </div>\n          <button type=\"submit\" class=\"w-full py-3 rounded-full text-white font-medium text-sm tracking-wider uppercase shadow-md hover:opacity-95 transition-all cursor-pointer\" style=\"background-color: #640e1b;\">\n            Confirm RSVP\n          </button>\n        </form>\n        <div id=\"rsvpSuccess\" class=\"text-center py-6\" style=\"display:none;\">\n          <div class=\"w-14 h-14 mx-auto mb-3 rounded-full bg-emerald-100 flex items-center justify-center\">\n            <svg class=\"w-7 h-7 text-emerald-600\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\">\n              <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M5 13l4 4L19 7\"></path>\n            </svg>\n          </div>\n          <h3 class=\"text-xl font-bold mb-2\" style=\"color: #640e1b; font-family: 'EB Garamond', serif;\">RSVP Received</h3>\n          <p class=\"guest-ack text-sm mb-4\" style=\"color: #ab7a45;\">Thank you for confirming your attendance! We look forward to celebrating together.</p>\n          <button type=\"button\" onclick=\"document.getElementById('rsvpModal').close()\" class=\"px-6 py-2 rounded-full text-white text-xs uppercase tracking-wider cursor-pointer\" style=\"background-color: #640e1b;\">Close</button>\n        </div>\n      </div>\n    </div>\n    <form class=\"modal-backdrop\" method=\"dialog\"><button type=\"submit\">close</button></form>\n  </dialog>\n\n  <!-- Copy Toast Notification -->\n  <div id=\"copyToast\" class=\"copy-toast\">Copied to clipboard!</div>\n\n  <!-- JavaScript -->";

export default function WeddingInvitation() {
  const containerRef = useRef(null);
  const searchParams = useSearchParams();
  const shouldOpen = searchParams.get('open') === '1';

  useEffect(() => {
    // Interactive Engine
    // Mahal Gold Wedding Invitation Interactive Logic & Full Animation Engine

document.addEventListener('DOMContentLoaded', () => {
  // --- 1. Audio Elements & Web Audio API ---
  const bgMusic = document.getElementById('bgMusic');
  const musicPlayerBtn = document.getElementById('musicPlayerBtn');
  const musicDisc = document.getElementById('musicDisc');
  const musicPlayingIcon = document.getElementById('musicPlayingIcon');
  const musicPausedIcon = document.getElementById('musicPausedIcon');
  const musicTooltip = document.getElementById('musicTooltip');
  const pingRing = document.getElementById('musicPingRing');

  let isPlaying = false;
  let envelopeOpened = false;

  // Exact Web Audio API harmonic chime on envelope open
  function playEnvelopeChime() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const t = ctx.currentTime;
      // High chord
      [523.25, 659.25, 783.99, 1046.5].forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.type = 'sine';
        const startT = t + 0.1 * idx;
        osc.frequency.setValueAtTime(freq, startT);
        gain.gain.setValueAtTime(0, t);
        gain.gain.linearRampToValueAtTime(0.035 - 0.005 * idx, startT + 0.01);
        gain.gain.exponentialRampToValueAtTime(0.001, startT + 1.8);
        osc.start(startT);
        osc.stop(startT + 1.8);
      });
      // Harmonic accent
      [1567.98, 2093].forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.type = 'sine';
        const startT = t + 0.35 + 0.1 * idx;
        osc.frequency.setValueAtTime(freq, startT);
        gain.gain.setValueAtTime(0, t);
        gain.gain.linearRampToValueAtTime(0.015, startT + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, startT + 1.2);
        osc.start(startT);
        osc.stop(startT + 1.2);
      });
    } catch (e) {
      console.log('AudioContext initialized upon gesture:', e);
    }
  }

  function startMusic() {
    if (!bgMusic) return;
    bgMusic.volume = 0.5;
    bgMusic.play().then(() => {
      isPlaying = true;
      updateMusicUI();
      if (musicTooltip) musicTooltip.style.display = 'none';
      if (pingRing) pingRing.style.display = 'none';
    }).catch(err => {
      console.log('Autoplay deferred by browser:', err);
      isPlaying = false;
      updateMusicUI();
      if (musicTooltip) musicTooltip.style.display = 'block';
      if (pingRing) pingRing.style.display = 'block';
    });
  }

  function toggleMusic() {
    if (!bgMusic) return;
    if (isPlaying) {
      bgMusic.pause();
      isPlaying = false;
    } else {
      bgMusic.play().then(() => {
        isPlaying = true;
      }).catch(e => console.log(e));
    }
    updateMusicUI();
  }

  function updateMusicUI() {
    if (!musicPlayerBtn) return;
    if (isPlaying) {
      if (musicDisc) musicDisc.classList.add('animate-spin-cd');
      if (musicPlayingIcon) musicPlayingIcon.style.display = 'flex';
      if (musicPausedIcon) musicPausedIcon.style.display = 'none';
      musicPlayerBtn.setAttribute('aria-label', 'Pause music');
    } else {
      if (musicDisc) musicDisc.classList.remove('animate-spin-cd');
      if (musicPlayingIcon) musicPlayingIcon.style.display = 'none';
      if (musicPausedIcon) musicPausedIcon.style.display = 'flex';
      musicPlayerBtn.setAttribute('aria-label', 'Play music');
    }
  }

  if (musicPlayerBtn) {
    musicPlayerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMusic();
      if (musicTooltip) musicTooltip.style.display = 'none';
    });
  }

  const resumeOnInteraction = () => {
    if (bgMusic && bgMusic.paused && envelopeOpened) {
      bgMusic.play().then(() => {
        isPlaying = true;
        updateMusicUI();
        if (musicTooltip) musicTooltip.style.display = 'none';
      }).catch(() => {});
    }
  };
  ['click', 'touchstart'].forEach(evt => document.addEventListener(evt, resumeOnInteraction, { once: true }));

  // --- 2. Envelope Opening State Machine ---
  const envelope = document.getElementById('inviteEnvelope');
  const openBtn = document.getElementById('openInvitationBtn');
  const waxSeal = document.getElementById('waxSeal');
  const cornerTl = document.getElementById('cornerFlowerTL');
  const cornerBr = document.getElementById('cornerFlowerBR');
  const floatingMusicWidget = document.getElementById('floatingMusicWidget');
  const envelopeCardContainer = envelope ? envelope.querySelector('.relative.w-\\[310px\\]') || envelope.querySelector('[style*="box-shadow:0 25px 60px"]') : null;

  // Flower SVG template matching ChungDoi's exact shape
  function createFlowerSVG() {
    return `
      <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em">
        <g>
          <ellipse cx="12" cy="5" rx="2.2" ry="4.5"></ellipse>
          <ellipse cx="12" cy="5" rx="2.2" ry="4.5" transform="rotate(60 12 12)"></ellipse>
          <ellipse cx="12" cy="5" rx="2.2" ry="4.5" transform="rotate(120 12 12)"></ellipse>
          <ellipse cx="12" cy="5" rx="2.2" ry="4.5" transform="rotate(180 12 12)"></ellipse>
          <ellipse cx="12" cy="5" rx="2.2" ry="4.5" transform="rotate(240 12 12)"></ellipse>
          <ellipse cx="12" cy="5" rx="2.2" ry="4.5" transform="rotate(300 12 12)"></ellipse>
        </g>
        <circle cx="12" cy="12" r="1.8" fill-opacity="0.45"></circle>
      </svg>
    `;
  }

  // 32-particle radial explosion burst
  function triggerParticleBurst() {
    if (!envelope) return;
    const burstContainer = document.createElement('div');
    burstContainer.className = 'absolute inset-0 pointer-events-none overflow-hidden';
    burstContainer.style.zIndex = '100';

    const colors = ['#d8407a', '#e0698f', '#ab7a45', '#f7e3cd'];

    for (let t = 0; t < 32; t++) {
      const angle = (2 * Math.PI * t) / 32 + (Math.random() - 0.5) * 0.4;
      const radius = 25 + 60 * Math.random();
      const x = 50 + Math.cos(angle) * radius;
      const y = 50 + Math.sin(angle) * radius;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const size = 10 + 16 * Math.random();
      const rotStart = (Math.random() - 0.5) * 30;
      const rotEnd = (Math.random() - 0.5) * 360;
      const delay = 0.15 * Math.random();

      const pEl = document.createElement('div');
      pEl.className = 'absolute pointer-events-none';
      pEl.style.left = '50%';
      pEl.style.top = '50%';
      pEl.style.color = color;
      pEl.style.fontSize = `${size}px`;
      pEl.style.textShadow = `0 0 10px ${color}`;
      pEl.style.setProperty('--dx', `${(x - 50) * 5}px`);
      pEl.style.setProperty('--dy', `${(y - 50) * 5}px`);
      pEl.style.setProperty('--rot-start', `${rotStart}deg`);
      pEl.style.setProperty('--rot-end', `${rotEnd}deg`);
      pEl.style.animation = `particle-burst 1.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s forwards`;
      pEl.innerHTML = createFlowerSVG();

      burstContainer.appendChild(pEl);
    }

    envelope.appendChild(burstContainer);
  }

  function openEnvelope() {
    if (envelopeOpened) return;
    envelopeOpened = true;

    // T = 0ms: Play sound & break wax seal
    playEnvelopeChime();

    if (waxSeal) {
      waxSeal.classList.remove('seal-pulse-active');
      waxSeal.classList.add('seal-breaking');

      // Expanding seal ring ripple
      const ring = document.createElement('div');
      ring.className = 'absolute left-1/2 rounded-full pointer-events-none seal-ring-burst';
      ring.style.top = '50px';
      ring.style.width = '56px';
      ring.style.height = '56px';
      ring.style.border = '2px solid #640e1b';
      ring.style.zIndex = '29';
      waxSeal.parentElement.appendChild(ring);
    }

    // Flying corners
    if (cornerTl) cornerTl.classList.add('fly-flower-tl');
    if (cornerBr) cornerBr.classList.add('fly-flower-br');

    // Fade open button
    if (openBtn) {
      openBtn.style.transition = 'opacity 0.3s ease';
      openBtn.style.opacity = '0';
      openBtn.style.pointerEvents = 'none';
    }

    // T = 500ms: Particle burst explosion & card departure
    setTimeout(() => {
      triggerParticleBurst();

      const cardBox = envelope ? envelope.querySelector('[style*="box-shadow:0 25px 60px"]') || envelope.querySelector('.relative.w-\\[310px\\]') : null;
      if (cardBox) {
        cardBox.parentElement.classList.add('envelope-card-away');
      } else if (envelope) {
        envelope.classList.add('envelope-card-away');
      }
    }, 500);

    // T = 1300ms: Reveal invitation & start music
    setTimeout(() => {
      if (envelope) {
        envelope.style.transition = 'opacity 0.4s ease';
        envelope.style.opacity = '0';
        setTimeout(() => {
          envelope.style.display = 'none';
        }, 400);
      }
      if (floatingMusicWidget) {
        floatingMusicWidget.style.display = 'block';
      }
      startMusic();
    }, 1300);
  }

  if (openBtn) {
    openBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openEnvelope();
    });
  }

  if (waxSeal) {
    waxSeal.classList.add('seal-pulse-active');
    waxSeal.style.cursor = 'pointer';
    waxSeal.addEventListener('click', openEnvelope);
  }

  // Check ?open=1 parameter
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('open') === '1') {
    if (envelope) envelope.style.display = 'none';
    if (floatingMusicWidget) floatingMusicWidget.style.display = 'block';
    envelopeOpened = true;
  }

  // --- 3. Parallax Scroll Depth Engine ---
  const parallaxItems = [
    // Top Palace background
    { selector: 'div[style*="castle2.webp"]', speed: 0.1, maxPx: 40, template: 'translateY({y})' },
    // Sandstone flower pillars
    { selector: 'div[style*="sandstone-flower.webp"]', speed: 0.05, maxPx: 60, template: 'translateY({y})' },
    // Hanging bougainvillea garlands
    { selector: 'div[style*="flower3-decoration.webp"]', speed: -0.035, maxPx: 50, template: 'translateY({y})' }
  ];

  const registeredParallax = [];
  document.querySelectorAll('div[style*="background-image:url(/images/themes/mahal-gold/"]').forEach((el) => {
    const bg = el.style.backgroundImage || '';
    if (bg.includes('castle2.webp')) {
      const isFlipped = el.className.includes('left-[-103.2%]');
      registeredParallax.push({
        el,
        speed: 0.1,
        maxPx: 40,
        template: isFlipped ? 'translateY({y}) scaleX(-1)' : 'translateY({y})'
      });
    } else if (bg.includes('sandstone-flower.webp')) {
      const isFlipped = el.className.includes('left-[83%]');
      registeredParallax.push({
        el,
        speed: 0.05,
        maxPx: 60,
        template: isFlipped ? 'translateY({y}) scaleX(-1)' : 'translateY({y})'
      });
    } else if (bg.includes('flower3-decoration.webp')) {
      const isFlipped = el.className.includes('left-[-30%]');
      registeredParallax.push({
        el,
        speed: -0.035,
        maxPx: 50,
        template: isFlipped ? 'translateY({y}) scaleX(-1)' : 'translateY({y})'
      });
    }
  });

  let ticking = false;
  function onScrollParallax() {
    const scrollY = window.scrollY;
    registeredParallax.forEach(item => {
      let offset = scrollY * item.speed;
      if (item.maxPx !== undefined) {
        offset = Math.max(-item.maxPx, Math.min(offset, item.maxPx));
      }
      item.el.style.transform = item.template.replace('{y}', `${offset.toFixed(1)}px`);
    });
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(onScrollParallax);
      ticking = true;
    }
  }, { passive: true });

  // --- 4. Live Countdown Timer ---
  const countdownContainer = document.getElementById('countdownWidget');
  const targetDate = new Date('2027-06-15T18:00:00');

  function updateCountdown() {
    if (!countdownContainer) return;
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
      countdownContainer.innerHTML = '<p class="font-bold text-lg">The celebration has begun!</p>';
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    countdownContainer.innerHTML = `
      <div class="flex items-center justify-center gap-3 sm:gap-6 text-center">
        <div class="flex flex-col items-center">
          <span class="text-2xl sm:text-3xl font-bold" style="color: #640e1b; font-family: 'EB Garamond', serif;">${days}</span>
          <span class="text-[11px] sm:text-[13px] uppercase tracking-wider" style="color: #ab7a45;">Days</span>
        </div>
        <span class="text-xl sm:text-2xl opacity-40 -mt-3" style="color: #ab7a45;">:</span>
        <div class="flex flex-col items-center">
          <span class="text-2xl sm:text-3xl font-bold" style="color: #640e1b; font-family: 'EB Garamond', serif;">${String(hours).padStart(2, '0')}</span>
          <span class="text-[11px] sm:text-[13px] uppercase tracking-wider" style="color: #ab7a45;">Hours</span>
        </div>
        <span class="text-xl sm:text-2xl opacity-40 -mt-3" style="color: #ab7a45;">:</span>
        <div class="flex flex-col items-center">
          <span class="text-2xl sm:text-3xl font-bold" style="color: #640e1b; font-family: 'EB Garamond', serif;">${String(minutes).padStart(2, '0')}</span>
          <span class="text-[11px] sm:text-[13px] uppercase tracking-wider" style="color: #ab7a45;">Mins</span>
        </div>
        <span class="text-xl sm:text-2xl opacity-40 -mt-3" style="color: #ab7a45;">:</span>
        <div class="flex flex-col items-center">
          <span class="text-2xl sm:text-3xl font-bold" style="color: #640e1b; font-family: 'EB Garamond', serif;">${String(seconds).padStart(2, '0')}</span>
          <span class="text-[11px] sm:text-[13px] uppercase tracking-wider" style="color: #ab7a45;">Secs</span>
        </div>
      </div>
    `;
  }
  updateCountdown();
  setInterval(updateCountdown, 1000);

  // --- 5. 3D Gallery Carousel & Lightbox ---
  const carouselCards = document.querySelectorAll('.carousel-3d-card');
  const galleryPrevBtn = document.getElementById('galleryPrevBtn');
  const galleryNextBtn = document.getElementById('galleryNextBtn');
  const galleryCounter = document.getElementById('galleryCounter');
  const totalCards = carouselCards.length || 11;
  let activeCarouselIndex = 0;

  function updateCarousel3D(activeIdx) {
    activeCarouselIndex = (activeIdx + totalCards) % totalCards;

    carouselCards.forEach((card, idx) => {
      let offset = idx - activeCarouselIndex;
      if (offset > totalCards / 2) offset -= totalCards;
      if (offset < -totalCards / 2) offset += totalCards;

      const absOffset = Math.abs(offset);
      const sign = Math.sign(offset);

      let tx = sign * Math.min(absOffset, 5) * 60;
      let tz = -Math.min(absOffset, 5) * 150;
      let ry = sign * Math.min(absOffset, 5) * 45;
      let scale = absOffset === 0 ? 1 : absOffset === 1 ? 0.85 : 0.7;
      let opacity = absOffset === 0 ? 1 : absOffset === 1 ? 0.75 : absOffset === 2 ? 0.5 : 0.3;
      let zIndex = 100 - absOffset;

      card.style.transitionDuration = '600ms';
      card.style.transform = `translateX(${tx}%) translateZ(${tz}px) rotateY(${ry}deg) scale(${scale})`;
      card.style.opacity = `${opacity}`;
      card.style.zIndex = `${zIndex}`;

      if (absOffset === 0) {
        card.classList.add('ring-2', 'ring-white/30');
      } else {
        card.classList.remove('ring-2', 'ring-white/30');
      }
    });

    if (galleryCounter) {
      galleryCounter.textContent = `${activeCarouselIndex + 1} / ${totalCards}`;
    }
  }

  if (galleryPrevBtn) {
    galleryPrevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      updateCarousel3D(activeCarouselIndex - 1);
    });
  }

  if (galleryNextBtn) {
    galleryNextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      updateCarousel3D(activeCarouselIndex + 1);
    });
  }

  carouselCards.forEach((card, idx) => {
    card.addEventListener('click', () => {
      if (idx === activeCarouselIndex) {
        openLightbox(idx);
      } else {
        updateCarousel3D(idx);
      }
    });
  });

  // Carousel touch swipe
  const carouselTouchContainer = document.querySelector('.touch-pan-y');
  let cTouchStartX = 0;
  if (carouselTouchContainer) {
    carouselTouchContainer.addEventListener('touchstart', (e) => {
      cTouchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    carouselTouchContainer.addEventListener('touchend', (e) => {
      const cTouchEndX = e.changedTouches[0].screenX;
      if (cTouchEndX - cTouchStartX > 40) updateCarousel3D(activeCarouselIndex - 1);
      else if (cTouchStartX - cTouchEndX > 40) updateCarousel3D(activeCarouselIndex + 1);
    }, { passive: true });
  }

  // Lightbox Modal
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCounter = document.getElementById('lightboxCounter');
  const lightboxPrevBtn = document.getElementById('lightboxPrev');
  const lightboxNextBtn = document.getElementById('lightboxNext');
  const lightboxCloseBtn = document.getElementById('lightboxClose');
  const lightboxThumbnails = document.querySelectorAll('[data-thumb-index]');

  const galleryImages = [
    '/images/photos/f83d243670c753a3a8de98002b84126e357b748067b4099372400e34a15278ba.webp',
    '/images/photos/cb444178a6dd5753046eb92dd6c85bc433fcafb9139d14ff843aa96c9a29efa1.webp',
    '/images/photos/e44778eff5ba6bce43ff44630d64afd998314f6599a504de52c4604889658464.webp',
    '/images/photos/b572d32a98e5893a0a485e35ce0016d85fc6e35e03ca4b27151124f0e1f91fd8.webp',
    '/images/photos/1ca6ea249bd32431f552ad193f4cb9e109c3e3e01016a76ddd6d67572da63d21.webp',
    '/images/photos/e2b7e8a5add0cd52c62a4d326dbf25285299afb96bf9130aa0330c5f37282f7e.webp',
    '/images/photos/65c80c596d85f34befd4f244b1ed0d45d147ffcededcea5a44611fdcfedb9755.webp',
    '/images/photos/c4aa84136b7a0436d5dcfe8acf1a06740412334756beadfd1acfc9924a4895a8.webp',
    '/images/photos/390c49fca6f000eaab3de4113fc3ac4c5e555a0a9e6c21867e919d47392ee185.webp',
    '/images/photos/b72a19c1721e965eea6fd2853d550c3ffe2bfb753db8b9034155c6456fff40b0.webp',
    '/images/photos/faf693fa483740c47624845c2978025af25a83b87800c0eaef7923438ce83c41.webp'
  ];

  let currentGalleryIndex = 0;

  function showLightboxImage(idx) {
    if (idx < 0) idx = galleryImages.length - 1;
    if (idx >= galleryImages.length) idx = 0;
    currentGalleryIndex = idx;

    if (lightboxImg) lightboxImg.src = galleryImages[currentGalleryIndex];
    if (lightboxCounter) lightboxCounter.textContent = `${currentGalleryIndex + 1} / ${galleryImages.length}`;

    // Highlight active thumbnail
    lightboxThumbnails.forEach((btn, tIdx) => {
      if (tIdx === currentGalleryIndex) {
        btn.style.outline = '2px solid #640e1b';
        btn.style.outlineOffset = '2px';
        btn.classList.add('scale-105', 'opacity-100');
        btn.classList.remove('opacity-60');
        btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      } else {
        btn.style.outline = 'none';
        btn.classList.remove('scale-105', 'opacity-100');
        btn.classList.add('opacity-60');
      }
    });
  }

  function openLightbox(idx) {
    showLightboxImage(idx);
    if (lightboxModal) {
      if (typeof lightboxModal.showModal === 'function') {
        lightboxModal.showModal();
      } else {
        lightboxModal.setAttribute('open', '');
      }
    }
  }

  function closeLightbox() {
    if (lightboxModal) {
      if (typeof lightboxModal.close === 'function') {
        lightboxModal.close();
      } else {
        lightboxModal.removeAttribute('open');
      }
    }
  }

  if (lightboxPrevBtn) lightboxPrevBtn.addEventListener('click', (e) => { e.stopPropagation(); showLightboxImage(currentGalleryIndex - 1); });
  if (lightboxNextBtn) lightboxNextBtn.addEventListener('click', (e) => { e.stopPropagation(); showLightboxImage(currentGalleryIndex + 1); });
  if (lightboxCloseBtn) lightboxCloseBtn.addEventListener('click', closeLightbox);

  lightboxThumbnails.forEach((btn, idx) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      showLightboxImage(idx);
    });
  });

  document.addEventListener('keydown', (e) => {
    if (lightboxModal && lightboxModal.hasAttribute('open')) {
      if (e.key === 'ArrowLeft') showLightboxImage(currentGalleryIndex - 1);
      else if (e.key === 'ArrowRight') showLightboxImage(currentGalleryIndex + 1);
      else if (e.key === 'Escape') closeLightbox();
    }
  });

  // Touch Swipe for Lightbox
  let touchStartX = 0;
  if (lightboxModal) {
    lightboxModal.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    lightboxModal.addEventListener('touchend', (e) => {
      const touchEndX = e.changedTouches[0].screenX;
      if (touchEndX - touchStartX > 50) showLightboxImage(currentGalleryIndex - 1);
      else if (touchStartX - touchEndX > 50) showLightboxImage(currentGalleryIndex + 1);
    }, { passive: true });
  }

  // --- 6. Gift Box Modal & Copy Helpers ---
  const giftIllustration = document.getElementById('giftBoxTrigger');
  const giftModal = document.getElementById('giftModal');
  const giftCloseBtn = document.getElementById('giftCloseBtn');
  const copyToast = document.getElementById('copyToast');

  function showToast(msg) {
    if (!copyToast) return;
    copyToast.textContent = msg;
    copyToast.classList.add('show');
    setTimeout(() => {
      copyToast.classList.remove('show');
    }, 2500);
  }

  window.copyToClipboard = function(text, label) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(`${label || 'Details'} copied to clipboard!`);
    }).catch(() => {
      showToast(`Copied: ${text}`);
    });
  };

  function openGiftModal() {
    if (giftModal) {
      if (typeof giftModal.showModal === 'function') giftModal.showModal();
      else giftModal.setAttribute('open', '');
    }
  }

  if (giftIllustration) {
    giftIllustration.style.cursor = 'pointer';
    giftIllustration.addEventListener('click', openGiftModal);
  }

  if (giftCloseBtn) {
    giftCloseBtn.addEventListener('click', () => {
      if (giftModal) {
        if (typeof giftModal.close === 'function') giftModal.close();
        else giftModal.removeAttribute('open');
      }
    });
  }

  // --- 7. RSVP Modal & Form Submission ---
  const rsvpTrigger = document.getElementById('rsvpTriggerBtn');
  const rsvpModal = document.getElementById('rsvpModal');
  const rsvpCloseBtn = document.getElementById('rsvpCloseBtn');
  const rsvpForm = document.getElementById('rsvpForm');
  const rsvpSuccess = document.getElementById('rsvpSuccess');

  if (rsvpTrigger) {
    rsvpTrigger.addEventListener('click', () => {
      if (rsvpModal) {
        if (typeof rsvpModal.showModal === 'function') rsvpModal.showModal();
        else rsvpModal.setAttribute('open', '');
      }
    });
  }

  if (rsvpCloseBtn) {
    rsvpCloseBtn.addEventListener('click', () => {
      if (rsvpModal) {
        if (typeof rsvpModal.close === 'function') rsvpModal.close();
        else rsvpModal.removeAttribute('open');
      }
    });
  }

  if (rsvpForm) {
    rsvpForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const guestName = document.getElementById('rsvpName')?.value || 'Guest';
      rsvpForm.style.display = 'none';
      if (rsvpSuccess) {
        rsvpSuccess.style.display = 'block';
        const msg = rsvpSuccess.querySelector('.guest-ack');
        if (msg) msg.textContent = `Thank you, ${guestName}! We are overjoyed to celebrate with you.`;
      }
    });
  }

  // --- 8. Guestbook Submission ---
  const guestbookForm = document.getElementById('guestbookForm');
  const guestbookContainer = document.getElementById('guestbookCommentsContainer');

  if (guestbookForm && guestbookContainer) {
    guestbookForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameInput = document.getElementById('guestbookName');
      const wishInput = document.getElementById('guestbookWish');

      const name = (nameInput?.value || 'Guest').trim();
      const wish = (wishInput?.value || '').trim();

      if (!name || !wish) return;

      const dateStr = new Date().toLocaleDateString('en-US', {
        month: 'numeric',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      });

      const newCard = document.createElement('div');
      newCard.className = 'rounded-md border p-4 text-sm';
      newCard.style.borderColor = 'rgba(171, 122, 69, 0.35)';
      newCard.style.backgroundColor = 'rgba(255,255,255,0.7)';
      newCard.innerHTML = `
        <div class="flex items-start justify-between">
          <span class="font-semibold" style="color:#640e1b">${name}</span>
          <span class="text-xs opacity-70">${dateStr}</span>
        </div>
        <p class="mt-2 leading-relaxed" style="color: #640e1b;">${wish}</p>
      `;

      guestbookContainer.prepend(newCard);
      wishInput.value = '';
      showToast('Thank you for your blessings!');
    });
  }

  // --- 9. Add to Calendar (Google / iCal generator) ---
  const calendarLinks = document.querySelectorAll('[data-calendar-action]');
  calendarLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const icsData = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'PRODID:-//ChungDoi//Mahal Gold Invitation//EN',
        'BEGIN:VEVENT',
        'UID:andrew-claire-20270615@chungdoi.com',
        'DTSTAMP:20270615T180000Z',
        'DTSTART:20270615T180000',
        'DTEND:20270616T010000',
        'SUMMARY:Andrew & Claire Wedding Ceremony & Reception',
        'DESCRIPTION:Join us to celebrate the wedding of Andrew Donovan and Claire Marlowe.',
        'LOCATION:The Cordelle, Nashville, TN',
        'END:VEVENT',
        'END:VCALENDAR'
      ].join('\r\n');

      const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
      const dlLink = document.createElement('a');
      dlLink.href = window.URL.createObjectURL(blob);
      dlLink.setAttribute('download', 'Andrew-Claire-Wedding.ics');
      document.body.appendChild(dlLink);
      dlLink.click();
      document.body.removeChild(dlLink);
      showToast('Event added to Calendar!');
    });
  });

  // Modal backdrop click handler
  document.querySelectorAll('dialog.modal').forEach(dialog => {
    dialog.addEventListener('click', (e) => {
      if (e.target === dialog) {
        if (typeof dialog.close === 'function') dialog.close();
        else dialog.removeAttribute('open');
      }
    });
  });
});


    // Handle initial query param if open=1
    if (shouldOpen) {
      const env = document.getElementById('inviteEnvelope');
      const widget = document.getElementById('floatingMusicWidget');
      if (env) env.style.display = 'none';
      if (widget) widget.style.display = 'block';
    }
  }, [shouldOpen]);

  return (
    <div
      ref={containerRef}
      dangerouslySetInnerHTML={{ __html: INVITATION_HTML }}
    />
  );
}
