'use client';

import { useEffect, useRef } from 'react';

const INVITATION_HTML = "<!-- Envelope Overlay Screen -->\n<div style=\"background:linear-gradient(to bottom right, rgba(100,14,27,0.86), rgba(140,45,45,0.82), rgba(171,122,69,0.80)), url(/images/themes/mahal-gold/paper.webp) center / cover\" id=\"inviteEnvelope\" data-landing-screenshot-id=\"invite-envelope\" class=\"jsx-353cb38c53e4a74a fixed inset-0 z-50 flex items-center justify-center overflow-hidden\">\n  <div style=\"z-index:1\" class=\"jsx-353cb38c53e4a74a absolute inset-0 pointer-events-none overflow-hidden\">\n    <div style=\"left:53.16%;top:-30px;bottom:auto;color:#e0698f;font-size:17.6px;--sway:22.5px;animation:ambient-fall 18.5s ease-in-out -14s infinite\" class=\"jsx-353cb38c53e4a74a absolute\">\n      <svg viewBox=\"0 0 24 24\" fill=\"currentColor\" width=\"1em\" height=\"1em\"><g><ellipse cx=\"12\" cy=\"5\" rx=\"2.2\" ry=\"4.5\"></ellipse><ellipse cx=\"12\" cy=\"5\" rx=\"2.2\" ry=\"4.5\" transform=\"rotate(60 12 12)\"></ellipse><ellipse cx=\"12\" cy=\"5\" rx=\"2.2\" ry=\"4.5\" transform=\"rotate(120 12 12)\"></ellipse><ellipse cx=\"12\" cy=\"5\" rx=\"2.2\" ry=\"4.5\" transform=\"rotate(180 12 12)\"></ellipse><ellipse cx=\"12\" cy=\"5\" rx=\"2.2\" ry=\"4.5\" transform=\"rotate(240 12 12)\"></ellipse><ellipse cx=\"12\" cy=\"5\" rx=\"2.2\" ry=\"4.5\" transform=\"rotate(300 12 12)\"></ellipse></g><circle cx=\"12\" cy=\"12\" r=\"1.8\" fill-opacity=\"0.45\"></circle></svg>\n    </div>\n    <div style=\"left:20.5%;top:-30px;bottom:auto;color:#ab7a45;font-size:18px;--sway:-12px;animation:ambient-fall 21s ease-in-out -5s infinite\" class=\"jsx-353cb38c53e4a74a absolute\">\n      <svg viewBox=\"0 0 24 24\" fill=\"currentColor\" width=\"1em\" height=\"1em\"><g><ellipse cx=\"12\" cy=\"5\" rx=\"2.2\" ry=\"4.5\"></ellipse><ellipse cx=\"12\" cy=\"5\" rx=\"2.2\" ry=\"4.5\" transform=\"rotate(60 12 12)\"></ellipse><ellipse cx=\"12\" cy=\"5\" rx=\"2.2\" ry=\"4.5\" transform=\"rotate(120 12 12)\"></ellipse><ellipse cx=\"12\" cy=\"5\" rx=\"2.2\" ry=\"4.5\" transform=\"rotate(180 12 12)\"></ellipse><ellipse cx=\"12\" cy=\"5\" rx=\"2.2\" ry=\"4.5\" transform=\"rotate(240 12 12)\"></ellipse><ellipse cx=\"12\" cy=\"5\" rx=\"2.2\" ry=\"4.5\" transform=\"rotate(300 12 12)\"></ellipse></g><circle cx=\"12\" cy=\"12\" r=\"1.8\" fill-opacity=\"0.45\"></circle></svg>\n    </div>\n    <div style=\"left:78.2%;top:-30px;bottom:auto;color:#d8407a;font-size:20px;--sway:15px;animation:ambient-fall 24s ease-in-out -10s infinite\" class=\"jsx-353cb38c53e4a74a absolute\">\n      <svg viewBox=\"0 0 24 24\" fill=\"currentColor\" width=\"1em\" height=\"1em\"><g><ellipse cx=\"12\" cy=\"5\" rx=\"2.2\" ry=\"4.5\"></ellipse><ellipse cx=\"12\" cy=\"5\" rx=\"2.2\" ry=\"4.5\" transform=\"rotate(60 12 12)\"></ellipse><ellipse cx=\"12\" cy=\"5\" rx=\"2.2\" ry=\"4.5\" transform=\"rotate(120 12 12)\"></ellipse><ellipse cx=\"12\" cy=\"5\" rx=\"2.2\" ry=\"4.5\" transform=\"rotate(180 12 12)\"></ellipse><ellipse cx=\"12\" cy=\"5\" rx=\"2.2\" ry=\"4.5\" transform=\"rotate(240 12 12)\"></ellipse><ellipse cx=\"12\" cy=\"5\" rx=\"2.2\" ry=\"4.5\" transform=\"rotate(300 12 12)\"></ellipse></g><circle cx=\"12\" cy=\"12\" r=\"1.8\" fill-opacity=\"0.45\"></circle></svg>\n    </div>\n  </div>\n\n  <div id=\"envelopeCardWrapper\" style=\"z-index:10\" class=\"jsx-353cb38c53e4a74a relative\">\n    <div class=\"jsx-353cb38c53e4a74a relative w-[310px] sm:w-[350px] md:w-[520px] lg:w-[600px]\">\n      <div style=\"top:50px;width:56px;height:56px;transform:translate(-50%, -50%);background:radial-gradient(circle at 30% 30%, #640e1b, rgb(70, 0, 0));--shadow-color:rgba(100, 14, 27, 0.5);box-shadow:0 4px 20px rgba(100, 14, 27, 0.5), inset 0 2px 4px rgba(255,255,255,0.3);z-index:30;animation:seal-pulse 2s ease-in-out infinite\" class=\"jsx-353cb38c53e4a74a absolute left-1/2 rounded-full flex items-center justify-center cursor-pointer\" id=\"waxSeal\">\n        <svg style=\"fill:#ffffff\" viewBox=\"0 0 24 24\" class=\"jsx-353cb38c53e4a74a w-7 h-7\">\n          <path d=\"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z\" class=\"jsx-353cb38c53e4a74a\"></path>\n        </svg>\n      </div>\n      <div style=\"box-shadow:0 25px 60px -12px rgba(0, 0, 0, 0.45), 0 8px 24px rgba(0, 0, 0, 0.2), 0 0 40px rgba(171, 122, 69, 0.15)\" class=\"jsx-353cb38c53e4a74a relative rounded-lg\">\n        <div style=\"background:rgba(247, 227, 205, 0.98);border:1px solid rgba(171, 122, 69, 0.15);clip-path:inset(0 round 8px)\" class=\"jsx-353cb38c53e4a74a absolute inset-0 rounded-lg overflow-hidden\">\n          <img src=\"/images/themes/mahal-gold/flower1.webp\" alt=\"\" aria-hidden=\"true\" id=\"cornerFlowerTL\" class=\"jsx-353cb38c53e4a74a absolute pointer-events-none w-[46%] md:w-[38%] max-w-[220px] top-0 left-0 -translate-x-[22%] -translate-y-[24%] -scale-x-100\"/>\n          <img src=\"/images/themes/mahal-gold/flower1.webp\" alt=\"\" aria-hidden=\"true\" id=\"cornerFlowerBR\" class=\"jsx-353cb38c53e4a74a absolute pointer-events-none w-[42%] md:w-[34%] max-w-[200px] bottom-0 right-0 translate-x-[20%] translate-y-[18%] -scale-y-100\"/>\n        </div>\n        <div class=\"jsx-353cb38c53e4a74a relative z-10 text-center px-6 pt-28 pb-14 md:pt-24 md:pb-8\">\n          <div class=\"text-[12px] md:text-[14px] uppercase tracking-[0.25em] font-semibold mb-2\" style=\"color:#ab7a45;font-family:'Times New Roman', serif;\">\n            WEDDING INVITATION\n          </div>\n          <h1 style=\"color:#640e1b;font-family:&quot;The Nautigal&quot;, ChungDoiIndic, cursive\" class=\"jsx-353cb38c53e4a74a mb-2 flex flex-col items-center leading-tight text-5xl sm:text-6xl md:text-7xl\">\n            <span style=\"font-family:&quot;The Nautigal&quot;, ChungDoiIndic, cursive;font-size:clamp(44px, 12vw, 68px)\" class=\"jsx-353cb38c53e4a74a block w-full text-center\">Neeraj</span>\n            <span style=\"font-family:&quot;Alex Brush&quot;, ChungDoiIndic, cursive;font-size:clamp(22px, 6vw, 32px)\" class=\"jsx-353cb38c53e4a74a block w-full text-center leading-none my-0.5\">&amp;</span>\n            <span style=\"font-family:&quot;The Nautigal&quot;, ChungDoiIndic, cursive;font-size:clamp(44px, 12vw, 68px)\" class=\"jsx-353cb38c53e4a74a block w-full text-center\">Anita</span>\n          </h1>\n          <div class=\"jsx-353cb38c53e4a74a flex items-center justify-center gap-3 mb-2\">\n            <div style=\"background:linear-gradient(to right, transparent, #ab7a45)\" class=\"jsx-353cb38c53e4a74a w-10 h-px\"></div>\n            <span style=\"color:#ab7a45;opacity:0.7\" class=\"jsx-353cb38c53e4a74a text-sm\">&#10086;</span>\n            <div style=\"background:linear-gradient(to left, transparent, #ab7a45)\" class=\"jsx-353cb38c53e4a74a w-10 h-px\"></div>\n          </div>\n          <div style=\"color:rgba(100, 14, 27, 0.85);font-family:&quot;Lora&quot;, &quot;Times New Roman&quot;, ChungDoiIndic, serif\" class=\"jsx-353cb38c53e4a74a text-[16px] md:text-[18px] mb-3 flex flex-col items-center font-medium\">\n            <span dir=\"auto\">03 December 2026</span>\n            <span class=\"text-[12px] md:text-[13px] tracking-wider uppercase opacity-75 mt-0.5\">Thursday &bull; Shubh Vivah</span>\n          </div>\n          <div class=\"jsx-353cb38c53e4a74a mb-6\">\n            <p style=\"color:rgba(100, 14, 27, 0.72);font-family:&quot;Lora&quot;, &quot;Times New Roman&quot;, ChungDoiIndic, serif\" class=\"jsx-353cb38c53e4a74a text-[16px] font-light mb-1.5\">\n              <span dir=\"auto\">Cordially Invites</span>\n            </p>\n            <div class=\"jsx-353cb38c53e4a74a mb-2\">\n              <h2 style=\"color:#640e1b;font-family:&quot;Lora&quot;, &quot;Times New Roman&quot;, ChungDoiIndic, serif\" class=\"jsx-353cb38c53e4a74a text-lg sm:text-xl font-semibold tracking-wide\">You &amp; Your Family</h2>\n            </div>\n            <p style=\"color:rgba(100, 14, 27, 0.72);font-family:&quot;Lora&quot;, &quot;Times New Roman&quot;, ChungDoiIndic, serif\" class=\"jsx-353cb38c53e4a74a text-[14px] md:text-[15px] font-light\">\n              <span dir=\"auto\">to celebrate the sacred union with our family</span>\n            </p>\n          </div>\n          <a href=\"#open\" id=\"openInvitationBtn\" rel=\"nofollow\" aria-busy=\"false\" style=\"background-color:#640e1b;color:#ffffff;box-shadow:0 4px 14px rgba(100, 14, 27, 0.35);font-family:&quot;Lora&quot;, &quot;Times New Roman&quot;, ChungDoiIndic, serif;-webkit-touch-callout:none;-webkit-user-select:none;user-select:none\" class=\"jsx-353cb38c53e4a74a relative px-9 py-2.5 text-lg font-medium rounded-full shadow-lg no-underline cursor-pointer flex w-fit items-center justify-center mx-auto overflow-hidden\">\n            <span dir=\"auto\">Open</span>\n            <div style=\"background:linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);animation:shine 3s ease-in-out infinite\" class=\"jsx-353cb38c53e4a74a absolute top-0 h-full w-8 pointer-events-none\"></div>\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Main Invitation Content -->\n<div id=\"invitationContent\">\n  <div class=\"demo-page\">\n    <audio id=\"bgMusic\" src=\"/audio/perfect-ed-sheeran.mp3\" preload=\"auto\" loop></audio>\n\n    <div class=\"cursor-pointer\" data-landing-screenshot-id=\"invite-renderer\" data-video-invitation=\"true\" dir=\"ltr\" lang=\"en\">\n      <div class=\"min-h-screen w-full bg-white\">\n        <main class=\"min-h-screen w-full\">\n          <div class=\"flex w-full justify-center overflow-x-clip bg-white overflow-clip scrollbar-none\" data-testid=\"mahal-gold-template\">\n            <div data-showcase-root=\"\" class=\"relative w-full max-w-[480px] md:max-w-[900px] md:mx-auto overflow-hidden md:border md:border-[#ab7a4533] isolate !overflow-hidden\" style=\"background-color:#f7e3cd;color:#ab7a45\">\n              <div aria-hidden=\"true\" class=\"pointer-events-none absolute inset-0 -z-20 mix-blend-darken\" style=\"background-image:url(/images/themes/mahal-gold/paper.webp);background-size:100% auto;background-repeat:repeat-y;opacity:0.4\"></div>\n\n              <!-- SECTION 1: HERO ARCH WITH LORD GANESHA AND NEERAJ & ANITA -->\n              <section dir=\"ltr\" class=\"relative isolate w-full overflow-hidden pt-[13.2%] pb-[14%]\">\n                <div class=\"relative mx-auto w-full max-w-[480px] md:max-w-[680px]\">\n                  <div aria-hidden=\"true\" class=\"pointer-events-none absolute bg-contain bg-center bg-no-repeat top-0 left-[1.4%] mt-[-17.9%] z-[2] w-[32.7%]\" style=\"aspect-ratio:1086/1448;background-image:url(/images/themes/mahal-gold/bells.webp)\"></div>\n                  <div aria-hidden=\"true\" class=\"pointer-events-none absolute bg-contain bg-center bg-no-repeat top-0 md:top-[-5%] left-[40.6%] mt-[-17.5%] z-[3] w-[77.1%] md:w-[90%]\" style=\"aspect-ratio:1;background-image:url(/images/themes/mahal-gold/flower1.webp)\"></div>\n                  \n                  <div class=\"relative mx-auto w-[96.1%]\" style=\"aspect-ratio:424/529\">\n                    <div aria-hidden=\"true\" class=\"pointer-events-none absolute inset-0 -z-10 bg-contain bg-center bg-no-repeat opacity-[0.54]\" style=\"background-image:url(/images/themes/mahal-gold/arch-frame.webp)\"></div>\n                    \n                    <!-- Lord Ganesha in Upper Arch Dome (Completely Inside Arch Frame) -->\n                    <div aria-hidden=\"true\" class=\"pointer-events-none absolute left-1/2 -translate-x-1/2 bg-contain bg-center bg-no-repeat\" style=\"top:10%;width:13%;aspect-ratio:579/699;background-image:url(/images/themes/mahal-gold/ganesha.webp)\"></div>\n                    \n                    <!-- Om Shri Ganeshaya Namah (Inside Arch Frame) -->\n                    <div class=\"absolute left-1/2 -translate-x-1/2 text-center uppercase whitespace-nowrap\" style=\"top:23%;color:#640e1b;font-family:'Times New Roman', serif;font-size:clamp(10px, 2.7vw, 13px);font-weight:bold;letter-spacing:0.2em\">\n                      &#2384; &#2358;&#2381;&#2352;&#2368; &#2327;&#2339;&#2375;&#2358;&#2366;&#2351; &#2344;&#2350;&#2307;\n                    </div>\n\n                    <!-- Neeraj & Anita (Bigger & Perfectly Centered in the Arch Pattern) -->\n                    <div class=\"absolute left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex w-[90%] flex-col items-center justify-center text-center leading-[1.05]\" style=\"top:50%\">\n                      <div class=\"w-full\">\n                        <span class=\"inline-block\" style=\"font-family:&quot;The Nautigal&quot;, ChungDoiIndic, cursive;color:#640e1b;font-size:clamp(60px, 17vw, 96px);font-weight:700\">Neeraj</span>\n                      </div>\n                      <span class=\"block\" style=\"font-family:&quot;Alex Brush&quot;, &quot;The Nautigal&quot;, ChungDoiIndic, cursive;color:#640e1b;font-size:clamp(26px, 7vw, 40px);margin:-6px 0\">&amp;</span>\n                      <div class=\"w-full\">\n                        <span class=\"inline-block\" style=\"font-family:&quot;The Nautigal&quot;, ChungDoiIndic, cursive;color:#640e1b;font-size:clamp(60px, 17vw, 96px);font-weight:700\">Anita</span>\n                      </div>\n                    </div>\n                  </div>\n\n                  <div class=\"relative z-0 mt-[-59.6%] w-full\" style=\"aspect-ratio:441/546\">\n                    <div aria-hidden=\"true\" class=\"pointer-events-none absolute bg-contain bg-center bg-no-repeat left-[74.8%] top-0 z-[2] w-[55.8%]\" style=\"aspect-ratio:808/1402;background-image:url(/images/themes/mahal-gold/sandstone.webp)\"></div>\n                    <div aria-hidden=\"true\" class=\"pointer-events-none absolute bg-contain bg-center bg-no-repeat left-[-25.9%] top-[13.4%] z-[1] w-[176.6%]\" style=\"aspect-ratio:1635/962;background-image:url(/images/themes/mahal-gold/castle.webp)\"></div>\n                    <div aria-hidden=\"true\" class=\"pointer-events-none absolute bg-contain bg-center bg-no-repeat left-[54.6%] md:left-[70%] top-[60.6%] z-[4] w-[47.6%]\" style=\"aspect-ratio:1;background-image:url(/images/themes/mahal-gold/flower2.webp)\"></div>\n                    <div aria-hidden=\"true\" class=\"pointer-events-none absolute bg-contain bg-center bg-no-repeat right-[54.6%] md:right-[70%] top-[60.6%] z-[4] w-[47.6%]\" style=\"aspect-ratio:1;background-image:url(/images/themes/mahal-gold/flower2.webp);transform:scaleX(-1)\"></div>\n                    <div aria-hidden=\"true\" class=\"pointer-events-none absolute bg-contain bg-center bg-no-repeat left-1/2 top-[75.5%] z-[3] w-[58.5%] -translate-x-1/2\" style=\"aspect-ratio:1774/887;background-image:url(/images/themes/mahal-gold/fence.webp)\"></div>\n                  </div>\n                </div>\n\n                <!-- Tagline & Welcoming Blessings -->\n                <div class=\"relative z-10 px-6 mt-4 text-center max-w-[540px] mx-auto\">\n                  <p class=\"text-xs md:text-sm uppercase tracking-[0.22em] font-semibold mb-2\" style=\"color:#640e1b;font-family:'Times New Roman', serif;\">\n                    TWO HEARTS. ONE BEAUTIFUL JOURNEY.\n                  </p>\n                  <div class=\"flex items-center justify-center gap-3 mb-3\">\n                    <div style=\"background:linear-gradient(to right, transparent, #ab7a45)\" class=\"w-12 h-px\"></div>\n                    <span style=\"color:#ab7a45\" class=\"text-sm\">&#10086;</span>\n                    <div style=\"background:linear-gradient(to left, transparent, #ab7a45)\" class=\"w-12 h-px\"></div>\n                  </div>\n                  <p class=\"text-[14px] md:text-[16px] leading-relaxed mb-3 italic\" style=\"color:#640e1b;font-family:'Baskerville', serif;\">\n                    &ldquo;Together with the blessings of Lord Ganesha and our beloved elders, we invite you to celebrate the beginning of a beautiful new chapter in our lives.&rdquo;\n                  </p>\n                  <p class=\"text-[13px] md:text-[15px] leading-relaxed mb-2\" style=\"color:#ab7a45;font-family:'Baskerville', serif;\">\n                    Join us for a celebration filled with love, laughter, traditions and unforgettable memories.\n                  </p>\n                  <p class=\"text-xs md:text-sm uppercase tracking-wider font-semibold\" style=\"color:#640e1b;font-family:'Times New Roman', serif;\">\n                    With love, The Maurya Family\n                  </p>\n                </div>\n              </section>\n\n              <!-- SECTION 2: THE COUPLE (GROOM FIRST, THEN BRIDE) -->\n              <section class=\"relative isolate z-10 w-full px-[8.5%] pt-[5.2%] pb-[8%] md:px-[12%] md:pt-[5.2%]\">\n                <div aria-hidden=\"true\" class=\"pointer-events-none absolute bg-contain bg-center bg-no-repeat -z-10 opacity-10 top-0 left-[-18.8%] mt-[12.0%] w-[244%] md:w-[170%]\" style=\"will-change:transform;aspect-ratio:1448/1086;background-image:url(/images/themes/mahal-gold/castle2.webp)\"></div>\n                <div aria-hidden=\"true\" class=\"pointer-events-none absolute bg-contain bg-center bg-no-repeat top-0 left-[6.1%] mt-[-9.5%] z-[1] w-[87.5%]\" style=\"aspect-ratio:1302/253;background-image:url(/images/themes/mahal-gold/pattern.webp)\"></div>\n                <div aria-hidden=\"true\" class=\"pointer-events-none absolute bg-contain bg-center bg-no-repeat top-0 left-[-40%] md:left-[-23%] mt-[15.6%] z-[1] w-[56.7%] md:w-[42%]\" style=\"will-change:transform;aspect-ratio:837/1843;background-image:url(/images/themes/mahal-gold/sandstone-flower.webp)\"></div>\n                <div aria-hidden=\"true\" class=\"pointer-events-none absolute bg-contain bg-center bg-no-repeat top-0 left-[80%] mt-[61.0%] z-[1] w-[52.4%] md:w-[40%]\" style=\"will-change:transform;aspect-ratio:806/1254;background-image:url(/images/themes/mahal-gold/flower3-decoration.webp)\"></div>\n\n                <div class=\"relative z-10 flex flex-col gap-6 md:gap-8\">\n                  <div class=\"text-center\">\n                    <h2 class=\"font-bold text-[22px] md:text-[28px] text-center uppercase tracking-[0.06em]\" style=\"color:#640e1b;font-family:'Times New Roman', Times, ChungDoiIndic, serif;font-weight:700;\">\n                      <span dir=\"auto\">THE COUPLE</span>\n                    </h2>\n                    <p class=\"text-xs uppercase tracking-[0.18em] mt-1\" style=\"color:#ab7a45;font-family:'Baskerville', serif;\">\n                      Two Hearts &bull; One Soul &bull; Bound by Love\n                    </p>\n                  </div>\n\n                  <!-- Two Columns: Groom (Neeraj) First, Then Bride (Anita) (Pure Regal Flow Without Card Boxes) -->\n                  <div class=\"grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full max-w-[680px] mx-auto\">\n                    <!-- Groom -->\n                    <div class=\"py-4 md:py-6 px-2 relative text-center\">\n                      <div class=\"text-[12px] md:text-[13px] uppercase tracking-[0.2em] font-semibold mb-2\" style=\"color:#ab7a45;font-family:\'Times New Roman\', serif;\">\n                        Meet the Groom\n                      </div>\n                      <h3 class=\"text-2xl md:text-3xl font-bold mb-1\" style=\"color:#640e1b;font-family:\'EB Garamond\', serif;\">\n                        NEERAJ MAURYA\n                      </h3>\n                      <p class=\"text-xs md:text-sm font-medium tracking-wider mb-4 uppercase opacity-0 select-none\" style=\"color:#ab7a45\">\n                        &nbsp;\n                      </p>\n\n                      <div class=\"space-y-3 text-xs md:text-sm\" style=\"color:#640e1b;font-family:\'Baskerville\', serif;\">\n                        <div>\n                          <span class=\"block text-[11px] uppercase tracking-wider opacity-75 font-semibold\" style=\"color:#ab7a45\">Son of</span>\n                          <span class=\"font-semibold text-[13px] md:text-[14px]\">Shri Chhote Lal Maurya &amp; Smt. Geeta Maurya</span>\n                        </div>\n                        <div class=\"w-12 h-px mx-auto\" style=\"background-color:rgba(171,122,69,0.3)\"></div>\n                        <div>\n                          <span class=\"block text-[11px] uppercase tracking-wider opacity-75 font-semibold\" style=\"color:#ab7a45\">Grandson of</span>\n                          <span class=\"font-medium\">Shri Ramjatan Maurya &amp; Smt. Sona Maurya</span>\n                        </div>\n                        <div class=\"w-12 h-px mx-auto\" style=\"background-color:rgba(171,122,69,0.3)\"></div>\n                        <div class=\"pt-1\">\n                          <span class=\"block text-[11px] uppercase tracking-wider opacity-75 font-semibold\" style=\"color:#ab7a45\">Hailing from</span>\n                          <span class=\"italic text-[12px] md:text-[13px]\">Bari, Bhadwara, Jaunpur, Uttar Pradesh</span>\n                        </div>\n                      </div>\n                    </div>\n\n                    <!-- Bride -->\n                    <div class=\"py-4 md:py-6 px-2 relative text-center\">\n                      <div class=\"text-[12px] md:text-[13px] uppercase tracking-[0.2em] font-semibold mb-2\" style=\"color:#ab7a45;font-family:\'Times New Roman\', serif;\">\n                        Meet the Bride\n                      </div>\n                      <h3 class=\"text-2xl md:text-3xl font-bold mb-1\" style=\"color:#640e1b;font-family:\'EB Garamond\', serif;\">\n                        ANITA MAURYA\n                      </h3>\n                      <p class=\"text-xs md:text-sm font-medium tracking-wider mb-4 uppercase\" style=\"color:#ab7a45;font-family:\'Times New Roman\', serif;\">\n                        (Aanchal)\n                      </p>\n\n                      <div class=\"space-y-3 text-xs md:text-sm\" style=\"color:#640e1b;font-family:\'Baskerville\', serif;\">\n                        <div>\n                          <span class=\"block text-[11px] uppercase tracking-wider opacity-75 font-semibold\" style=\"color:#ab7a45\">Daughter of</span>\n                          <span class=\"font-semibold text-[13px] md:text-[14px]\">Shri Loknath Maurya &amp; Smt. Indravati Devi</span>\n                        </div>\n                        <div class=\"w-12 h-px mx-auto\" style=\"background-color:rgba(171,122,69,0.3)\"></div>\n                        <div>\n                          <span class=\"block text-[11px] uppercase tracking-wider opacity-75 font-semibold\" style=\"color:#ab7a45\">Granddaughter of</span>\n                          <span class=\"font-medium\">Late Shri Vikrama Maurya &amp; Late Smt. Prabhavati Devi</span>\n                        </div>\n                        <div class=\"w-12 h-px mx-auto\" style=\"background-color:rgba(171,122,69,0.3)\"></div>\n                        <div class=\"pt-1\">\n                          <span class=\"block text-[11px] uppercase tracking-wider opacity-75 font-semibold\" style=\"color:#ab7a45\">Hailing from</span>\n                          <span class=\"italic text-[12px] md:text-[13px]\">Pachwar, Kerakat, Jaunpur, Uttar Pradesh</span>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n\n                  <img src=\"/images/themes/mahal-gold/gold-line.webp\" alt=\"\" aria-hidden=\"true\" class=\"mx-auto block h-auto max-w-[300px] object-contain w-[64.8%] mt-4\" loading=\"lazy\" decoding=\"async\"/>\n                </div>\n              </section>\n\n              <!-- SECTION 3: PHOTO GALLERY (3D CAROUSEL) -->\n              <section class=\"relative isolate z-10 w-full px-[9%] pt-[4%] pb-[10.9%] md:px-[12%] md:pt-[2%] md:pb-[7%]\">\n                <div class=\"relative z-10 flex w-full flex-col items-center\">\n                  <h2 class=\"font-bold text-[20px] md:text-[26px] text-center uppercase tracking-[0.04em] mb-1\" style=\"color:#640e1b;font-family:'Times New Roman', serif;font-weight:700;\">\n                    <span dir=\"auto\">Photo Gallery</span>\n                  </h2>\n                  <p class=\"text-xs uppercase tracking-widest text-center mb-5\" style=\"color:#ab7a45;font-family:'Baskerville', serif;\">Moments of Togetherness</p>\n\n                  <div class=\"mt-4 w-full max-w-[432px] md:max-w-[600px]\">\n                    <div class=\"relative h-[340px] md:h-[520px] touch-pan-y\">\n                      <button type=\"button\" id=\"galleryPrevBtn\" aria-label=\"Previous photo\" class=\"hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-[200] w-8 h-8 items-center justify-center rounded-full bg-base-200/60 hover:bg-base-200 transition-colors\">\n                        <svg class=\"w-4 h-4\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" viewBox=\"0 0 24 24\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M15.75 19.5L8.25 12l7.5-7.5\"></path></svg>\n                      </button>\n                      <button type=\"button\" id=\"galleryNextBtn\" aria-label=\"Next photo\" class=\"hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-[200] w-8 h-8 items-center justify-center rounded-full bg-base-200/60 hover:bg-base-200 transition-colors\">\n                        <svg class=\"w-4 h-4\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" viewBox=\"0 0 24 24\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M8.25 4.5l7.5 7.5-7.5 7.5\"></path></svg>\n                      </button>\n\n                      <div class=\"relative w-full h-full flex items-center justify-center\" style=\"perspective:1000px\">\n                        <div data-gallery-index=\"0\" id=\"carouselCard0\" class=\"carousel-3d-card absolute h-[92%] rounded-2xl overflow-hidden shadow-xl cursor-pointer transition-all ease-in-out ring-2 ring-white/30\" style=\"aspect-ratio:0.6666666666666666;transition-duration:1100ms;transform:translateX(0%) translateZ(0px) rotateY(0deg) scale(1);opacity:1;z-index:100\"><img src=\"/images/photos/f83d243670c753a3a8de98002b84126e357b748067b4099372400e34a15278ba.webp\" alt=\"Wedding Celebration 1\" class=\"h-full w-full object-cover\" style=\"object-position:50% 50%\"/></div><div data-gallery-index=\"1\" id=\"carouselCard1\" class=\"carousel-3d-card absolute h-[92%] rounded-2xl overflow-hidden shadow-xl cursor-pointer transition-all ease-in-out \" style=\"aspect-ratio:0.6666666666666666;transition-duration:1100ms;transform:translateX(60%) translateZ(-150px) rotateY(45deg) scale(0.85);opacity:0.75;z-index:99\"><img src=\"/images/photos/cb444178a6dd5753046eb92dd6c85bc433fcafb9139d14ff843aa96c9a29efa1.webp\" alt=\"Wedding Celebration 2\" class=\"h-full w-full object-cover\" style=\"object-position:50% 50%\"/></div><div data-gallery-index=\"2\" id=\"carouselCard2\" class=\"carousel-3d-card absolute h-[92%] rounded-2xl overflow-hidden shadow-xl cursor-pointer transition-all ease-in-out \" style=\"aspect-ratio:0.6666666666666666;transition-duration:1100ms;transform:translateX(120%) translateZ(-300px) rotateY(90deg) scale(0.7);opacity:0.5;z-index:98\"><img src=\"/images/photos/e44778eff5ba6bce43ff44630d64afd998314f6599a504de52c4604889658464.webp\" alt=\"Wedding Celebration 3\" class=\"h-full w-full object-cover\" style=\"object-position:50% 50%\"/></div><div data-gallery-index=\"3\" id=\"carouselCard3\" class=\"carousel-3d-card absolute h-[92%] rounded-2xl overflow-hidden shadow-xl cursor-pointer transition-all ease-in-out \" style=\"aspect-ratio:0.6666666666666666;transition-duration:1100ms;transform:translateX(180%) translateZ(-450px) rotateY(135deg) scale(0.7);opacity:0.3;z-index:97\"><img src=\"/images/photos/b572d32a98e5893a0a485e35ce0016d85fc6e35e03ca4b27151124f0e1f91fd8.webp\" alt=\"Wedding Celebration 4\" class=\"h-full w-full object-cover\" style=\"object-position:50% 50%\"/></div><div data-gallery-index=\"4\" id=\"carouselCard4\" class=\"carousel-3d-card absolute h-[92%] rounded-2xl overflow-hidden shadow-xl cursor-pointer transition-all ease-in-out \" style=\"aspect-ratio:0.6666666666666666;transition-duration:1100ms;transform:translateX(240%) translateZ(-600px) rotateY(180deg) scale(0.7);opacity:0.3;z-index:96\"><img src=\"/images/photos/1ca6ea249bd32431f552ad193f4cb9e109c3e3e01016a76ddd6d67572da63d21.webp\" alt=\"Wedding Celebration 5\" class=\"h-full w-full object-cover\" style=\"object-position:50% 50%\"/></div><div data-gallery-index=\"5\" id=\"carouselCard5\" class=\"carousel-3d-card absolute h-[92%] rounded-2xl overflow-hidden shadow-xl cursor-pointer transition-all ease-in-out \" style=\"aspect-ratio:0.6666666666666666;transition-duration:1100ms;transform:translateX(300%) translateZ(-750px) rotateY(225deg) scale(0.7);opacity:0.3;z-index:95\"><img src=\"/images/photos/e2b7e8a5add0cd52c62a4d326dbf25285299afb96bf9130aa0330c5f37282f7e.webp\" alt=\"Wedding Celebration 6\" class=\"h-full w-full object-cover\" style=\"object-position:50% 50%\"/></div><div data-gallery-index=\"6\" id=\"carouselCard6\" class=\"carousel-3d-card absolute h-[92%] rounded-2xl overflow-hidden shadow-xl cursor-pointer transition-all ease-in-out \" style=\"aspect-ratio:0.6666666666666666;transition-duration:1100ms;transform:translateX(-300%) translateZ(-750px) rotateY(-225deg) scale(0.7);opacity:0.3;z-index:95\"><img src=\"/images/photos/65c80c596d85f34befd4f244b1ed0d45d147ffcededcea5a44611fdcfedb9755.webp\" alt=\"Wedding Celebration 7\" class=\"h-full w-full object-cover\" style=\"object-position:50% 50%\"/></div><div data-gallery-index=\"7\" id=\"carouselCard7\" class=\"carousel-3d-card absolute h-[92%] rounded-2xl overflow-hidden shadow-xl cursor-pointer transition-all ease-in-out \" style=\"aspect-ratio:0.6666666666666666;transition-duration:1100ms;transform:translateX(-240%) translateZ(-600px) rotateY(-180deg) scale(0.7);opacity:0.3;z-index:96\"><img src=\"/images/photos/c4aa84136b7a0436d5dcfe8acf1a06740412334756beadfd1acfc9924a4895a8.webp\" alt=\"Wedding Celebration 8\" class=\"h-full w-full object-cover\" style=\"object-position:50% 50%\"/></div><div data-gallery-index=\"8\" id=\"carouselCard8\" class=\"carousel-3d-card absolute h-[92%] rounded-2xl overflow-hidden shadow-xl cursor-pointer transition-all ease-in-out \" style=\"aspect-ratio:0.6666666666666666;transition-duration:1100ms;transform:translateX(-180%) translateZ(-450px) rotateY(-135deg) scale(0.7);opacity:0.3;z-index:97\"><img src=\"/images/photos/390c49fca6f000eaab3de4113fc3ac4c5e555a0a9e6c21867e919d47392ee185.webp\" alt=\"Wedding Celebration 9\" class=\"h-full w-full object-cover\" style=\"object-position:50% 50%\"/></div><div data-gallery-index=\"9\" id=\"carouselCard9\" class=\"carousel-3d-card absolute h-[92%] rounded-2xl overflow-hidden shadow-xl cursor-pointer transition-all ease-in-out \" style=\"aspect-ratio:0.6666666666666666;transition-duration:1100ms;transform:translateX(-120%) translateZ(-300px) rotateY(-90deg) scale(0.7);opacity:0.5;z-index:98\"><img src=\"/images/photos/b72a19c1721e965eea6fd2853d550c3ffe2bfb753db8b9034155c6456fff40b0.webp\" alt=\"Wedding Celebration 10\" class=\"h-full w-full object-cover\" style=\"object-position:50% 50%\"/></div><div data-gallery-index=\"10\" id=\"carouselCard10\" class=\"carousel-3d-card absolute h-[92%] rounded-2xl overflow-hidden shadow-xl cursor-pointer transition-all ease-in-out \" style=\"aspect-ratio:0.6666666666666666;transition-duration:1100ms;transform:translateX(-60%) translateZ(-150px) rotateY(-45deg) scale(0.85);opacity:0.75;z-index:99\"><img src=\"/images/photos/faf693fa483740c47624845c2978025af25a83b87800c0eaef7923438ce83c41.webp\" alt=\"Wedding Celebration 11\" class=\"h-full w-full object-cover\" style=\"object-position:50% 50%\"/></div>\n                      </div>\n                    </div>\n                    <div class=\"flex justify-center mt-3\">\n                      <span id=\"galleryCounter\" class=\"text-sm tabular-nums opacity-60 font-medium\">1 / 11</span>\n                    </div>\n                  </div>\n                </div>\n              </section>\n\n              <!-- SECTION 4: OUR WEDDING CELEBRATIONS (5 DAYS) & COUNTDOWN & CALENDAR -->\n              <section class=\"relative isolate z-10 w-full px-[8%] pt-[10%] pb-[10%] md:px-[12%] md:pt-[7%]\">\n                <div aria-hidden=\"true\" class=\"pointer-events-none absolute bg-contain bg-center bg-no-repeat -z-10 opacity-10 top-0 left-[-103.2%] mt-[71.7%] w-[244%] md:w-[170%]\" style=\"will-change:transform;aspect-ratio:1448/1086;background-image:url(/images/themes/mahal-gold/castle2.webp)\"></div>\n                <div aria-hidden=\"true\" class=\"pointer-events-none absolute bg-contain bg-center bg-no-repeat top-0 left-[6.1%] mt-[-5.9%] z-[1] w-[87.5%]\" style=\"aspect-ratio:1302/253;background-image:url(/images/themes/mahal-gold/pattern.webp)\"></div>\n                <div aria-hidden=\"true\" class=\"pointer-events-none absolute bg-contain bg-center bg-no-repeat top-0 left-[83%] mt-[-6.1%] z-[1] w-[56.7%] md:w-[42%]\" style=\"will-change:transform;aspect-ratio:837/1843;background-image:url(/images/themes/mahal-gold/sandstone-flower.webp)\"></div>\n                <div aria-hidden=\"true\" class=\"pointer-events-none absolute bg-contain bg-center bg-no-repeat top-0 md:top-[-15%] left-[-30%] md:left-[-17%] mt-[41.0%] z-[1] w-[52.4%] md:w-[40%]\" style=\"will-change:transform;aspect-ratio:806/1254;background-image:url(/images/themes/mahal-gold/flower3-decoration.webp)\"></div>\n\n                <div class=\"relative z-10 flex w-full flex-col items-center\">\n                  <h2 class=\"font-bold text-[22px] md:text-[28px] text-center uppercase tracking-[0.06em]\" style=\"color:#640e1b;font-family:'Times New Roman', serif;font-weight:700;\">\n                    <span dir=\"auto\">OUR WEDDING CELEBRATIONS</span>\n                  </h2>\n                  <p class=\"text-xs md:text-sm italic text-center mt-1 mb-8\" style=\"color:#ab7a45;font-family:'Baskerville', serif;\">\n                    &ldquo;Five beautiful days, countless memories and a lifetime of happiness.&rdquo;\n                  </p>\n\n                  <!-- 5 Celebration Events (Pure Regal Flow Without Card Boxes) -->\n                  <div class=\"w-full max-w-[640px] divide-y divide-[#ab7a4540]\">\n                    <!-- Day 1: TILAK CEREMONY -->\n                    <div class=\"py-5 relative text-left\">\n                      <div class=\"flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2\">\n                        <div class=\"flex items-center gap-2\">\n                          <span class=\"w-2 h-2 rounded-full\" style=\"background-color:#ab7a45\"></span>\n                          <span class=\"text-xs font-bold uppercase tracking-widest\" style=\"color:#ab7a45;font-family:'Times New Roman', serif;\">\n                            29 NOVEMBER 2026 &bull; SUNDAY\n                          </span>\n                        </div>\n                        <span class=\"text-xs font-bold uppercase tracking-wider mt-1 sm:mt-0\" style=\"color:#ab7a45\">\n                          Day 1\n                        </span>\n                      </div>\n                      <h3 class=\"text-xl md:text-2xl font-bold mb-1.5\" style=\"color:#640e1b;font-family:'EB Garamond', serif;\">\n                        TILAK CEREMONY\n                      </h3>\n                      <p class=\"text-xs md:text-sm leading-relaxed\" style=\"color:#640e1b;font-family:'Baskerville', serif;\">\n                        An auspicious beginning honoring traditions, sacred blessings, and joyous family togetherness.\n                      </p>\n                    </div>\n\n                    <!-- Day 2: HALDI CEREMONY -->\n                    <div class=\"py-5 relative text-left\">\n                      <div class=\"flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2\">\n                        <div class=\"flex items-center gap-2\">\n                          <span class=\"w-2 h-2 rounded-full\" style=\"background-color:#ab7a45\"></span>\n                          <span class=\"text-xs font-bold uppercase tracking-widest\" style=\"color:#ab7a45;font-family:'Times New Roman', serif;\">\n                            01 DECEMBER 2026 &bull; TUESDAY\n                          </span>\n                        </div>\n                        <span class=\"text-xs font-bold uppercase tracking-wider mt-1 sm:mt-0\" style=\"color:#ab7a45\">\n                          Day 2\n                        </span>\n                      </div>\n                      <h3 class=\"text-xl md:text-2xl font-bold mb-1.5\" style=\"color:#640e1b;font-family:'EB Garamond', serif;\">\n                        HALDI CEREMONY\n                      </h3>\n                      <p class=\"text-xs md:text-sm leading-relaxed\" style=\"color:#640e1b;font-family:'Baskerville', serif;\">\n                        Honouring our roots, embracing traditions, and beginning our wedding journey with blessings.\n                      </p>\n                    </div>\n\n                    <!-- Day 3: A TOUCH OF MEHNDI -->\n                    <div class=\"py-5 relative text-left\">\n                      <div class=\"flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2\">\n                        <div class=\"flex items-center gap-2\">\n                          <span class=\"w-2 h-2 rounded-full\" style=\"background-color:#ab7a45\"></span>\n                          <span class=\"text-xs font-bold uppercase tracking-widest\" style=\"color:#ab7a45;font-family:'Times New Roman', serif;\">\n                            02 DECEMBER 2026 &bull; WEDNESDAY\n                          </span>\n                        </div>\n                        <span class=\"text-xs font-bold uppercase tracking-wider mt-1 sm:mt-0\" style=\"color:#ab7a45\">\n                          Day 3\n                        </span>\n                      </div>\n                      <h3 class=\"text-xl md:text-2xl font-bold mb-1.5\" style=\"color:#640e1b;font-family:'EB Garamond', serif;\">\n                        A TOUCH OF MEHNDI\n                      </h3>\n                      <p class=\"text-xs md:text-sm leading-relaxed\" style=\"color:#640e1b;font-family:'Baskerville', serif;\">\n                        A little henna, a lot of love, and memories to cherish forever.\n                      </p>\n                    </div>\n\n                    <!-- Day 4: SHUBH VIVAH -->\n                    <div class=\"py-6 relative text-left\">\n                      <div class=\"flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2\">\n                        <div class=\"flex items-center gap-2\">\n                          <span class=\"w-2.5 h-2.5 rounded-full\" style=\"background-color:#640e1b\"></span>\n                          <span class=\"text-xs font-bold uppercase tracking-widest\" style=\"color:#640e1b;font-family:'Times New Roman', serif;\">\n                            03 DECEMBER 2026 &bull; THURSDAY\n                          </span>\n                        </div>\n                        <span class=\"text-xs font-bold uppercase tracking-wider mt-1 sm:mt-0\" style=\"color:#640e1b\">\n                          Main Day &bull; Day 4\n                        </span>\n                      </div>\n                      <h3 class=\"text-2xl md:text-3xl font-bold mb-2 flex items-center gap-2\" style=\"color:#640e1b;font-family:'EB Garamond', serif;\">\n                        <span>SHUBH VIVAH</span>\n                        <span class=\"text-base font-normal opacity-70\">&#10086;</span>\n                      </h3>\n                      <p class=\"text-xs md:text-sm leading-relaxed font-medium\" style=\"color:#640e1b;font-family:'Baskerville', serif;\">\n                        The most awaited day! Join us as Neeraj and Anita embark on their beautiful journey together, surrounded by the love and blessings of family and friends.\n                      </p>\n                    </div>\n\n                    <!-- Day 5: VIDAAI -->\n                    <div class=\"py-5 relative text-left\">\n                      <div class=\"flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2\">\n                        <div class=\"flex items-center gap-2\">\n                          <span class=\"w-2 h-2 rounded-full\" style=\"background-color:#ab7a45\"></span>\n                          <span class=\"text-xs font-bold uppercase tracking-widest\" style=\"color:#ab7a45;font-family:'Times New Roman', serif;\">\n                            04 DECEMBER 2026 &bull; FRIDAY\n                          </span>\n                        </div>\n                        <span class=\"text-xs font-bold uppercase tracking-wider mt-1 sm:mt-0\" style=\"color:#ab7a45\">\n                          Day 5\n                        </span>\n                      </div>\n                      <h3 class=\"text-xl md:text-2xl font-bold mb-1.5\" style=\"color:#640e1b;font-family:'EB Garamond', serif;\">\n                        VIDAAI &bull; A NEW BEGINNING\n                      </h3>\n                      <p class=\"text-xs md:text-sm leading-relaxed\" style=\"color:#640e1b;font-family:'Baskerville', serif;\">\n                        A heartfelt farewell filled with emotional moments, warm wishes and the promise of a beautiful new journey.\n                      </p>\n                    </div>\n                  </div>\n\n                  <!-- Add to Calendar Link -->\n                  <div class=\"mt-3 flex justify-center\">\n                    <a href=\"https://www.google.com/calendar/render?action=TEMPLATE&amp;text=Neeraj%20%26%20Anita%20Wedding%20Celebrations%20(Shubh%20Vivah)&amp;dates=20261203T123000Z/20261203T203000Z&amp;ctz=Asia/Kolkata&amp;details=Together%20with%20the%20blessings%20of%20Lord%20Ganesha%20and%20our%20beloved%20elders%2C%20we%20invite%20you%20to%20the%20wedding%20of%20Neeraj%20Maurya%20%26%20Anita%20Maurya%20(Aanchal).%0ABari%2C%20Bhadwara%2C%20Jaunpur%2C%20UP&amp;location=Bari%2C%20Bhadwara%2C%20Jaunpur%2C%20Uttar%20Pradesh%2C%20India\" target=\"_blank\" rel=\"noopener noreferrer\" data-calendar-action=\"1\" class=\"btn-pointer inline-flex items-center justify-center text-[13px] underline decoration-1 underline-offset-4 transition-opacity hover:opacity-70 md:text-[15px]\" style=\"color:#ab7a45;font-family:'Times New Roman', serif;\">\n                      <span dir=\"auto\">&#128197; Add to Calendar</span>\n                    </a>\n                  </div>\n\n                </div>\n              </section>\n\n              <!-- SECTION 5: THE WEDDING VENUE -->\n              <section class=\"relative isolate z-10 w-full px-[8%] py-[8%] md:px-[12%] md:py-[6%]\">\n                <div class=\"relative text-center\">\n                  <h2 class=\"font-bold text-[20px] md:text-[26px] text-center uppercase tracking-[0.04em]\" style=\"color:#640e1b;font-family:'Times New Roman', Times, ChungDoiIndic, serif;font-weight:700;\">\n                    <span dir=\"auto\">THE WEDDING VENUE</span>\n                  </h2>\n                  <div class=\"text-sm md:text-base font-semibold uppercase tracking-wider mt-1\" style=\"color:#ab7a45;font-family:'Times New Roman', serif;\">\n                    OUR FAMILY HOME\n                  </div>\n                  <p class=\"text-xs md:text-sm mt-1.5 max-w-[420px] mx-auto leading-relaxed\" style=\"color:#640e1b;font-family:'Baskerville', serif;\">\n                    All wedding ceremonies and celebrations will take place at our family residence:\n                  </p>\n                  \n                  <div class=\"py-3 max-w-[480px] mx-auto mt-2 text-center\">\n                    <p class=\"font-bold text-base md:text-lg mb-1\" style=\"color:#640e1b;font-family:'EB Garamond', serif;\">\n                      Bari Village\n                    </p>\n                    <p class=\"text-xs md:text-sm mb-0.5\" style=\"color:#640e1b;font-family:'Baskerville', serif;\">\n                      Bhadwara, District Jaunpur\n                    </p>\n                    <p class=\"text-xs md:text-sm font-semibold\" style=\"color:#ab7a45;font-family:'Baskerville', serif;\">\n                      Uttar Pradesh, India\n                    </p>\n                  </div>\n                </div>\n\n                <div class=\"relative flex flex-col items-center gap-4 md:gap-5 w-full mt-4\">\n                  <iframe class=\"w-full rounded-[15px] h-[250px] md:h-[330px] overflow-hidden\" style=\"border:1px solid #ab7a4566\" src=\"https://maps.google.com/maps?q=Bari%2C+Bhadwara%2C+Jaunpur%2C+Uttar+Pradesh&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=&amp;output=embed\" loading=\"lazy\" allowFullScreen=\"\" referrerPolicy=\"no-referrer-when-downgrade\"></iframe>\n                  \n                  <a href=\"https://www.google.com/maps/dir/?api=1&amp;destination=Bari,+Bhadwara,+Jaunpur,+Uttar+Pradesh\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm md:text-base font-semibold transition-transform hover:scale-[1.03] shadow\" style=\"background-color:#640e1b;color:#ffffff;font-family:'Baskerville', serif;\">\n                    <svg class=\"h-4 w-4 shrink-0\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><polygon points=\"3 11 22 2 13 21 11 13 3 11\"></polygon></svg>\n                    <span>Get Directions on Google Maps</span>\n                  </a>\n\n                  <p class=\"text-xs md:text-sm italic text-center mt-1\" style=\"color:#ab7a45;font-family:'Baskerville', serif;\">\n                    We look forward to welcoming you with open hearts and celebrating together.\n                  </p>\n                </div>\n              </section>\n\n              <!-- SECTION 6: A SPECIAL INVITATION FROM OUR LITTLE ONES -->\n              <section class=\"relative isolate z-10 w-full px-[8%] py-[8%] md:px-[12%] md:py-[6%]\">\n                <div class=\"py-4 relative text-center\">\n                  <div class=\"text-[11px] md:text-xs uppercase tracking-widest font-bold mb-2\" style=\"color:#ab7a45;font-family:'Times New Roman', serif;\">\n                    &#127881; Joyful Blessings &amp; Fun\n                  </div>\n                  \n                  <h2 class=\"font-bold text-[19px] md:text-[24px] uppercase tracking-[0.04em] mb-1\" style=\"color:#640e1b;font-family:'Times New Roman', serif;\">\n                    A SPECIAL INVITATION FROM THE LITTLE ONES\n                  </h2>\n                  <div class=\"text-xs md:text-sm font-semibold uppercase tracking-wider mb-4\" style=\"color:#ab7a45;font-family:'Times New Roman', serif;\">\n                    OUR DEAR CHACHU IS GETTING MARRIED!\n                  </div>\n\n                  <!-- Fun Poem -->\n                  <div class=\"max-w-[440px] mx-auto py-2 mb-4 space-y-1 text-sm md:text-base leading-relaxed italic\" style=\"color:#640e1b;font-family:'Baskerville', serif;\">\n                    <p>&ldquo;Our Chachu is all set to tie the knot,<br/>With music, laughter and love a lot!&rdquo;</p>\n                    <p class=\"font-semibold pt-1\" style=\"color:#ab7a45\">So come join the celebration,</p>\n                    <p class=\"text-xs md:text-sm opacity-90 not-italic\">And make memories filled with love and laughter.</p>\n                  </div>\n\n                  <div class=\"w-16 h-px mx-auto mb-4\" style=\"background-color:rgba(171,122,69,0.35)\"></div>\n\n                  <p class=\"text-xs uppercase tracking-widest font-semibold mb-3\" style=\"color:#ab7a45;font-family:'Times New Roman', serif;\">\n                    Your Little Host\n                  </p>\n                  <div class=\"flex justify-center max-w-[500px] mx-auto\">\n                    <span class=\"px-5 py-1.5 rounded-full text-sm font-semibold shadow-sm\" style=\"background-color:rgba(171,122,69,0.12);color:#640e1b;font-family:'EB Garamond', serif;letter-spacing:0.04em\">Sia</span>\n                  </div>\n                </div>\n              </section>\n\n              <!-- SECTION 7: WITH LOVE & BLESSINGS (THE MAURYA FAMILY) -->\n              <section class=\"relative isolate z-10 w-full px-[8%] py-[8%] md:px-[12%] md:py-[6%]\">\n                <div class=\"text-center mb-6\">\n                  <h2 class=\"font-bold text-[20px] md:text-[26px] text-center uppercase tracking-[0.06em]\" style=\"color:#640e1b;font-family:'Times New Roman', serif;\">\n                    WITH LOVE &amp; BLESSINGS\n                  </h2>\n                  <div class=\"text-sm md:text-base font-bold uppercase tracking-widest mt-1\" style=\"color:#ab7a45;font-family:'Times New Roman', serif;\">\n                    THE MAURYA FAMILY\n                  </div>\n                </div>\n\n                <div class=\"grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[720px] mx-auto\">\n                  <!-- Distant and Loving Family Members -->\n                  <div class=\"p-3 text-center flex flex-col justify-between\">\n                    <div>\n                      <div class=\"w-8 h-8 mx-auto mb-1 flex items-center justify-center text-sm\" style=\"color:#640e1b\">&#10084;</div>\n                      <h3 class=\"text-xs uppercase tracking-wider font-bold mb-3\" style=\"color:#ab7a45;font-family:'Times New Roman', serif;\">\n                        Loving Family Members\n                      </h3>\n                      <ul class=\"space-y-1 text-xs md:text-sm\" style=\"color:#640e1b;font-family:'Baskerville', serif;\">\n                        <li>Suraj Maurya</li>\n                        <li>Aman Maurya</li>\n                        <li>Devansh Maurya</li>\n                        <li>Shivam Maurya</li>\n                        <li>Shubham Maurya</li>\n                        <li>Aryan Maurya</li>\n                        <li>Lucky Maurya</li>\n                      </ul>\n                    </div>\n                    <p class=\"text-xs font-semibold mt-3 pt-2 border-t italic\" style=\"border-color:rgba(171,122,69,0.25);color:#ab7a45\">\n                      &amp; Entire Maurya Family\n                    </p>\n                  </div>\n\n                  <!-- Warm Welcome From -->\n                  <div class=\"p-3 text-center flex flex-col justify-between\">\n                    <div>\n                      <div class=\"w-8 h-8 mx-auto mb-1 flex items-center justify-center text-sm\" style=\"color:#640e1b\">&#10022;</div>\n                      <h3 class=\"text-xs uppercase tracking-wider font-bold mb-3\" style=\"color:#ab7a45;font-family:'Times New Roman', serif;\">\n                        Warm Welcome From\n                      </h3>\n                      <ul class=\"space-y-1.5 text-sm font-semibold\" style=\"color:#640e1b;font-family:'EB Garamond', serif;\">\n                        <li class=\"text-base\">Ekanand Maurya</li>\n                        <li class=\"text-base\">Sachin Maurya</li>\n                        <li class=\"text-base\">Sanoj Maurya</li>\n                        <li class=\"text-base\">Sandeep Maurya</li>\n                      </ul>\n                    </div>\n                    <p class=\"text-xs italic mt-3 pt-2 border-t\" style=\"border-color:rgba(171,122,69,0.25);color:#ab7a45\">\n                      With open hearts &amp; folded hands\n                    </p>\n                  </div>\n\n                  <!-- With Regards -->\n                  <div class=\"p-3 text-center flex flex-col justify-between\">\n                    <div>\n                      <div class=\"w-8 h-8 mx-auto mb-1 flex items-center justify-center text-sm\" style=\"color:#640e1b\">&#10048;</div>\n                      <h3 class=\"text-xs uppercase tracking-wider font-bold mb-3\" style=\"color:#ab7a45;font-family:'Times New Roman', serif;\">\n                        With Regards\n                      </h3>\n                      <ul class=\"space-y-2 text-sm font-semibold\" style=\"color:#640e1b;font-family:'EB Garamond', serif;\">\n                        <li class=\"text-base\">Shri Ramjatan Maurya</li>\n                        <li class=\"text-base\">Shri Chhote Lal Maurya</li>\n                        <li class=\"text-base\">Shri Loknath Maurya</li>\n                      </ul>\n                    </div>\n                    <p class=\"text-xs italic mt-3 pt-2 border-t\" style=\"border-color:rgba(171,122,69,0.25);color:#ab7a45\">\n                      Blessings &amp; Best Compliments\n                    </p>\n                  </div>\n                </div>\n              </section>\n\n              <!-- SECTION 8: CLOSING MESSAGE -->\n              <section class=\"relative isolate z-10 w-full px-[8%] py-[8%] md:px-[12%] md:py-[6%]\">\n                <div class=\"p-4 md:p-6 text-center mb-8\">\n                  <h2 class=\"font-bold text-[18px] md:text-[23px] uppercase tracking-[0.06em] mb-2\" style=\"color:#640e1b;font-family:'Times New Roman', serif;\">\n                    YOUR PRESENCE IS OUR GREATEST GIFT\n                  </h2>\n                  <p class=\"text-sm md:text-base leading-relaxed mb-4\" style=\"color:#640e1b;font-family:'Baskerville', serif;\">\n                    Your love, blessings and presence will make our special days even more memorable.\n                  </p>\n                  <p class=\"text-sm md:text-base italic mb-4\" style=\"color:#ab7a45;font-family:'Baskerville', serif;\">\n                    We cannot wait to celebrate this beautiful occasion with you!\n                  </p>\n                  <div class=\"w-16 h-px mx-auto mb-3\" style=\"background-color:#ab7a45\"></div>\n                  <p class=\"text-base md:text-lg font-bold tracking-wider\" style=\"color:#640e1b;font-family:'Times New Roman', serif;\">\n                    WITH LOVE,<br/>NEERAJ &amp; ANITA &#10084;&#65039;\n                  </p>\n                  <p class=\"text-xs uppercase tracking-widest mt-2\" style=\"color:#ab7a45;font-family:'Times New Roman', serif;\">\n                    Two families, one celebration, a lifetime of togetherness.\n                  </p>\n                </div>\n              </section>\n\n              <!-- Floating Vinyl Music Player Widget -->\n              <div id=\"floatingMusicWidget\" class=\"fixed bottom-5 right-5 z-40\" style=\"display:none;\">\n                <div class=\"relative group\">\n                  <div id=\"musicPingRing\" class=\"absolute -inset-1 rounded-full bg-[#640e1b]/30 animate-ping pointer-events-none\" style=\"display:none;\"></div>\n                  <button type=\"button\" id=\"musicPlayerBtn\" aria-label=\"Play music\" class=\"relative w-12 h-12 md:w-14 md:h-14 rounded-full shadow-2xl flex items-center justify-center cursor-pointer transition-transform hover:scale-105\" style=\"background:radial-gradient(circle, #640e1b, #2b040a);border:2px solid #ab7a45;\">\n                    <div id=\"musicDisc\" class=\"w-full h-full rounded-full flex items-center justify-center p-1.5\">\n                      <div class=\"w-4 h-4 rounded-full bg-[#ab7a45] flex items-center justify-center\">\n                        <div class=\"w-1.5 h-1.5 rounded-full bg-[#2b040a]\"></div>\n                      </div>\n                    </div>\n                    <div id=\"musicPlayingIcon\" class=\"absolute inset-0 flex items-center justify-center\" style=\"display:none;\">\n                      <svg class=\"w-5 h-5 text-white\" fill=\"currentColor\" viewBox=\"0 0 24 24\"><path d=\"M6 19h4V5H6v14zm8-14v14h4V5h-4z\"/></svg>\n                    </div>\n                    <div id=\"musicPausedIcon\" class=\"absolute inset-0 flex items-center justify-center\" style=\"display:none;\">\n                      <svg class=\"w-5 h-5 text-white ml-0.5\" fill=\"currentColor\" viewBox=\"0 0 24 24\"><path d=\"M8 5v14l11-7z\"/></svg>\n                    </div>\n                  </button>\n                  <div id=\"musicTooltip\" class=\"absolute bottom-full right-0 mb-2 px-3 py-1.5 bg-[#640e1b] text-white text-xs rounded-lg whitespace-nowrap shadow-lg pointer-events-none\" style=\"display:none;\">\n                    Click to play music &#9835;\n                  </div>\n                </div>\n              </div>\n\n            </div>\n          </div>\n        </main>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Lightbox Modal -->\n<dialog id=\"lightboxModal\" class=\"modal\">\n  <div class=\"modal-box max-w-4xl p-0 bg-transparent shadow-none border-none overflow-visible\">\n    <div class=\"relative flex flex-col items-center\">\n      <button type=\"button\" id=\"lightboxClose\" class=\"btn btn-sm btn-circle absolute -top-10 right-0 text-white bg-black/60 hover:bg-black/90 border-none cursor-pointer\">\n        <svg class=\"w-4 h-4\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 18L18 6M6 6l12 12\"/></svg>\n      </button>\n      <div class=\"relative w-full max-h-[70vh] flex items-center justify-center\">\n        <img id=\"lightboxImg\" src=\"\" alt=\"Full view\" class=\"max-h-[70vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl\"/>\n        <button type=\"button\" id=\"lightboxPrev\" class=\"absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/80 transition-colors cursor-pointer\">\n          <svg class=\"w-5 h-5\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M15 19l-7-7 7-7\"/></svg>\n        </button>\n        <button type=\"button\" id=\"lightboxNext\" class=\"absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/80 transition-colors cursor-pointer\">\n          <svg class=\"w-5 h-5\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 5l7 7-7 7\"/></svg>\n        </button>\n      </div>\n      <div class=\"mt-3 text-white text-xs tracking-wider\" id=\"lightboxCounter\">1 / 11</div>\n      <div class=\"mt-3 flex gap-2 overflow-x-auto max-w-full px-4 py-2\">\n        <button type=\"button\" data-thumb-index=\"0\" class=\"relative h-14 w-10 sm:h-16 sm:w-12 shrink-0 rounded-lg overflow-hidden transition-all opacity-100 scale-105\" style=\"outline:2px solid #640e1b;outline-offset:2px;\"><img src=\"/images/photos/f83d243670c753a3a8de98002b84126e357b748067b4099372400e34a15278ba.webp\" alt=\"Thumb 1\" class=\"h-full w-full object-cover\"/></button><button type=\"button\" data-thumb-index=\"1\" class=\"relative h-14 w-10 sm:h-16 sm:w-12 shrink-0 rounded-lg overflow-hidden transition-all opacity-60\" style=\"outline:none;outline-offset:2px;\"><img src=\"/images/photos/cb444178a6dd5753046eb92dd6c85bc433fcafb9139d14ff843aa96c9a29efa1.webp\" alt=\"Thumb 2\" class=\"h-full w-full object-cover\"/></button><button type=\"button\" data-thumb-index=\"2\" class=\"relative h-14 w-10 sm:h-16 sm:w-12 shrink-0 rounded-lg overflow-hidden transition-all opacity-60\" style=\"outline:none;outline-offset:2px;\"><img src=\"/images/photos/e44778eff5ba6bce43ff44630d64afd998314f6599a504de52c4604889658464.webp\" alt=\"Thumb 3\" class=\"h-full w-full object-cover\"/></button><button type=\"button\" data-thumb-index=\"3\" class=\"relative h-14 w-10 sm:h-16 sm:w-12 shrink-0 rounded-lg overflow-hidden transition-all opacity-60\" style=\"outline:none;outline-offset:2px;\"><img src=\"/images/photos/b572d32a98e5893a0a485e35ce0016d85fc6e35e03ca4b27151124f0e1f91fd8.webp\" alt=\"Thumb 4\" class=\"h-full w-full object-cover\"/></button><button type=\"button\" data-thumb-index=\"4\" class=\"relative h-14 w-10 sm:h-16 sm:w-12 shrink-0 rounded-lg overflow-hidden transition-all opacity-60\" style=\"outline:none;outline-offset:2px;\"><img src=\"/images/photos/1ca6ea249bd32431f552ad193f4cb9e109c3e3e01016a76ddd6d67572da63d21.webp\" alt=\"Thumb 5\" class=\"h-full w-full object-cover\"/></button><button type=\"button\" data-thumb-index=\"5\" class=\"relative h-14 w-10 sm:h-16 sm:w-12 shrink-0 rounded-lg overflow-hidden transition-all opacity-60\" style=\"outline:none;outline-offset:2px;\"><img src=\"/images/photos/e2b7e8a5add0cd52c62a4d326dbf25285299afb96bf9130aa0330c5f37282f7e.webp\" alt=\"Thumb 6\" class=\"h-full w-full object-cover\"/></button><button type=\"button\" data-thumb-index=\"6\" class=\"relative h-14 w-10 sm:h-16 sm:w-12 shrink-0 rounded-lg overflow-hidden transition-all opacity-60\" style=\"outline:none;outline-offset:2px;\"><img src=\"/images/photos/65c80c596d85f34befd4f244b1ed0d45d147ffcededcea5a44611fdcfedb9755.webp\" alt=\"Thumb 7\" class=\"h-full w-full object-cover\"/></button><button type=\"button\" data-thumb-index=\"7\" class=\"relative h-14 w-10 sm:h-16 sm:w-12 shrink-0 rounded-lg overflow-hidden transition-all opacity-60\" style=\"outline:none;outline-offset:2px;\"><img src=\"/images/photos/c4aa84136b7a0436d5dcfe8acf1a06740412334756beadfd1acfc9924a4895a8.webp\" alt=\"Thumb 8\" class=\"h-full w-full object-cover\"/></button><button type=\"button\" data-thumb-index=\"8\" class=\"relative h-14 w-10 sm:h-16 sm:w-12 shrink-0 rounded-lg overflow-hidden transition-all opacity-60\" style=\"outline:none;outline-offset:2px;\"><img src=\"/images/photos/390c49fca6f000eaab3de4113fc3ac4c5e555a0a9e6c21867e919d47392ee185.webp\" alt=\"Thumb 9\" class=\"h-full w-full object-cover\"/></button><button type=\"button\" data-thumb-index=\"9\" class=\"relative h-14 w-10 sm:h-16 sm:w-12 shrink-0 rounded-lg overflow-hidden transition-all opacity-60\" style=\"outline:none;outline-offset:2px;\"><img src=\"/images/photos/b72a19c1721e965eea6fd2853d550c3ffe2bfb753db8b9034155c6456fff40b0.webp\" alt=\"Thumb 10\" class=\"h-full w-full object-cover\"/></button><button type=\"button\" data-thumb-index=\"10\" class=\"relative h-14 w-10 sm:h-16 sm:w-12 shrink-0 rounded-lg overflow-hidden transition-all opacity-60\" style=\"outline:none;outline-offset:2px;\"><img src=\"/images/photos/faf693fa483740c47624845c2978025af25a83b87800c0eaef7923438ce83c41.webp\" alt=\"Thumb 11\" class=\"h-full w-full object-cover\"/></button>\n      </div>\n    </div>\n  </div>\n  <form class=\"modal-backdrop\" method=\"dialog\"><button type=\"submit\">close</button></form>\n</dialog>\n\n\n<!-- Copy Toast Notification -->\n<div id=\"copyToast\" class=\"copy-toast\">Copied to clipboard!</div>\n";

export default function WeddingInvitation() {
  const containerRef = useRef(null);

  useEffect(() => {
    let countdownTimer = null;
    let cleanupAutoScroll = null;
    let cleanupCarousel = null;

    const initInteractive = () => {
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
          console.log('AudioContext gesture chime:', e);
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

      // --- Smooth Slow Auto-Scroll Engine (Interrupted on visitor action) ---
      let autoScrollActive = false;
      let autoScrollRaf = null;
      let autoScrollTimeout = null;
      let currentScrollPos = 0;
      const SCROLL_SPEED = 0.9; // Slow, elegant and readable speed (~55px/sec)

      const interruptionEvents = [
        'wheel',
        'touchstart',
        'touchmove',
        'pointerdown',
        'mousedown',
        'keydown'
      ];

      function stopAutoScroll() {
        if (!autoScrollActive && !autoScrollTimeout) return;
        autoScrollActive = false;
        if (autoScrollTimeout) {
          clearTimeout(autoScrollTimeout);
          autoScrollTimeout = null;
        }
        if (autoScrollRaf) {
          cancelAnimationFrame(autoScrollRaf);
          autoScrollRaf = null;
        }
        interruptionEvents.forEach(evt => {
          window.removeEventListener(evt, stopAutoScroll, { passive: true });
        });
      }

      cleanupAutoScroll = stopAutoScroll;

      function startSlowAutoScroll() {
        if (autoScrollActive || autoScrollTimeout) return;

        // Register interruption events so ANY touch, drag, wheel, click or keypress stops auto-scroll
        interruptionEvents.forEach(evt => {
          window.addEventListener(evt, stopAutoScroll, { passive: true });
        });

        // Begin gentle scroll 1.4s after envelope opens, allowing visitor to first appreciate the Hero Arch
        autoScrollTimeout = setTimeout(() => {
          autoScrollTimeout = null;
          autoScrollActive = true;
          currentScrollPos = window.scrollY || window.pageYOffset || 0;

          function stepScroll() {
            if (!autoScrollActive) return;

            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            if (currentScrollPos >= maxScroll - 5) {
              stopAutoScroll();
              return;
            }

            // Detect if visitor manually scrolled to a different offset
            const actualScroll = window.scrollY || window.pageYOffset || 0;
            if (Math.abs(actualScroll - currentScrollPos) > 6) {
              stopAutoScroll();
              return;
            }

            currentScrollPos += SCROLL_SPEED;
            window.scrollTo(0, currentScrollPos);

            autoScrollRaf = requestAnimationFrame(stepScroll);
          }

          autoScrollRaf = requestAnimationFrame(stepScroll);
        }, 1400);
      }

      function openEnvelope() {
        if (envelopeOpened) return;
        envelopeOpened = true;

        playEnvelopeChime();

        if (waxSeal) {
          waxSeal.classList.remove('seal-pulse-active');
          waxSeal.classList.add('seal-breaking');

          const ring = document.createElement('div');
          ring.className = 'absolute left-1/2 rounded-full pointer-events-none seal-ring-burst';
          ring.style.top = '50px';
          ring.style.width = '56px';
          ring.style.height = '56px';
          ring.style.border = '2px solid #640e1b';
          ring.style.zIndex = '29';
          waxSeal.parentElement.appendChild(ring);
        }

        if (cornerTl) cornerTl.classList.add('fly-flower-tl');
        if (cornerBr) cornerBr.classList.add('fly-flower-br');

        if (openBtn) {
          openBtn.style.transition = 'opacity 0.3s ease';
          openBtn.style.opacity = '0';
          openBtn.style.pointerEvents = 'none';
        }

        setTimeout(() => {
          triggerParticleBurst();

          const cardBox = document.getElementById('envelopeCardWrapper') || (envelope ? envelope.querySelector('[style*="box-shadow:0 25px 60px"]') : null);
          if (cardBox) {
            cardBox.classList.add('envelope-card-away');
          } else if (envelope) {
            envelope.classList.add('envelope-card-away');
          }
        }, 500);

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
          startSlowAutoScroll();
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

      try {
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('open') === '1') {
          if (envelope) envelope.style.display = 'none';
          if (floatingMusicWidget) floatingMusicWidget.style.display = 'block';
          envelopeOpened = true;
          startSlowAutoScroll();
        }
      } catch (e) {}

      // --- 3. Parallax Engine ---
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

      // --- 4. Live Countdown Timer to Shubh Vivah (03 Dec 2026 18:00:00 IST) ---
      const countdownContainer = document.getElementById('countdownWidget');
      const targetDate = new Date('2026-12-03T18:00:00');

      function updateCountdown() {
        if (!countdownContainer) return;
        const now = new Date();
        const diff = targetDate - now;

        if (diff <= 0) {
          countdownContainer.innerHTML = '<p class="font-bold text-lg" style="color:#640e1b">The Shubh Vivah celebrations have begun!</p>';
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
      countdownTimer = setInterval(updateCountdown, 1000);

      // --- 5. 3D Gallery Carousel & Lightbox ---
      const carouselCards = document.querySelectorAll('.carousel-3d-card');
      const galleryPrevBtn = document.getElementById('galleryPrevBtn');
      const galleryNextBtn = document.getElementById('galleryNextBtn');
      const galleryCounter = document.getElementById('galleryCounter');
      const totalCards = carouselCards.length || 11;
      let activeCarouselIndex = 0;

      let carouselInterval = null;

      function startCarouselTimer() {
        if (carouselInterval) clearInterval(carouselInterval);
        carouselInterval = setInterval(() => {
          updateCarousel3D(activeCarouselIndex + 1);
        }, 3000);
      }

      function resetCarouselTimer() {
        if (carouselInterval) clearInterval(carouselInterval);
        startCarouselTimer();
      }

      cleanupCarousel = () => {
        if (carouselInterval) clearInterval(carouselInterval);
      };

      // Auto-change images every 3 seconds
      startCarouselTimer();

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
          resetCarouselTimer();
          updateCarousel3D(activeCarouselIndex - 1);
        });
      }

      if (galleryNextBtn) {
        galleryNextBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          resetCarouselTimer();
          updateCarousel3D(activeCarouselIndex + 1);
        });
      }

      carouselCards.forEach((card, idx) => {
        card.addEventListener('click', () => {
          resetCarouselTimer();
          if (idx === activeCarouselIndex) {
            openLightbox(idx);
          } else {
            updateCarousel3D(idx);
          }
        });
      });

      // Touch swipe for 3D carousel
      const carouselTouchContainer = document.querySelector('.touch-pan-y');
      let cTouchStartX = 0;
      if (carouselTouchContainer) {
        carouselTouchContainer.addEventListener('touchstart', (e) => {
          cTouchStartX = e.changedTouches[0].screenX;
        }, { passive: true });
        carouselTouchContainer.addEventListener('touchend', (e) => {
          const cTouchEndX = e.changedTouches[0].screenX;
          if (cTouchEndX - cTouchStartX > 40) {
            resetCarouselTimer();
            updateCarousel3D(activeCarouselIndex - 1);
          } else if (cTouchStartX - cTouchEndX > 40) {
            resetCarouselTimer();
            updateCarousel3D(activeCarouselIndex + 1);
          }
        }, { passive: true });

        // Pause rotation on hover, resume on leave
        carouselTouchContainer.addEventListener('mouseenter', () => {
          if (carouselInterval) clearInterval(carouselInterval);
        });
        carouselTouchContainer.addEventListener('mouseleave', () => {
          startCarouselTimer();
        });
      }

      // Lightbox Modal
      const lightboxModal = document.getElementById('lightboxModal');
      const lightboxImg = document.getElementById('lightboxImg');
      const lightboxCounter = document.getElementById('lightboxCounter');
      const lightboxPrevBtn = document.getElementById('lightboxPrev');
      const lightboxNextBtn = document.getElementById('lightboxNext');
      const lightboxCloseBtn = document.getElementById('lightboxClose');
      const lightboxThumbnails = document.querySelectorAll('[data-thumb-index]');

      const galleryImages = ["/images/photos/f83d243670c753a3a8de98002b84126e357b748067b4099372400e34a15278ba.webp", "/images/photos/cb444178a6dd5753046eb92dd6c85bc433fcafb9139d14ff843aa96c9a29efa1.webp", "/images/photos/e44778eff5ba6bce43ff44630d64afd998314f6599a504de52c4604889658464.webp", "/images/photos/b572d32a98e5893a0a485e35ce0016d85fc6e35e03ca4b27151124f0e1f91fd8.webp", "/images/photos/1ca6ea249bd32431f552ad193f4cb9e109c3e3e01016a76ddd6d67572da63d21.webp", "/images/photos/e2b7e8a5add0cd52c62a4d326dbf25285299afb96bf9130aa0330c5f37282f7e.webp", "/images/photos/65c80c596d85f34befd4f244b1ed0d45d147ffcededcea5a44611fdcfedb9755.webp", "/images/photos/c4aa84136b7a0436d5dcfe8acf1a06740412334756beadfd1acfc9924a4895a8.webp", "/images/photos/390c49fca6f000eaab3de4113fc3ac4c5e555a0a9e6c21867e919d47392ee185.webp", "/images/photos/b72a19c1721e965eea6fd2853d550c3ffe2bfb753db8b9034155c6456fff40b0.webp", "/images/photos/faf693fa483740c47624845c2978025af25a83b87800c0eaef7923438ce83c41.webp"];
      let currentGalleryIndex = 0;

      function showLightboxImage(idx) {
        if (idx < 0) idx = galleryImages.length - 1;
        if (idx >= galleryImages.length) idx = 0;
        currentGalleryIndex = idx;

        if (lightboxImg) lightboxImg.src = galleryImages[currentGalleryIndex];
        if (lightboxCounter) lightboxCounter.textContent = `${currentGalleryIndex + 1} / ${galleryImages.length}`;

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
        if (carouselInterval) clearInterval(carouselInterval);
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
        startCarouselTimer();
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

      // --- 6. Toast Notification Helper ---
      const copyToast = document.getElementById('copyToast');
      function showToast(msg) {
        if (!copyToast) return;
        copyToast.textContent = msg;
        copyToast.classList.add('show');
        setTimeout(() => {
          copyToast.classList.remove('show');
        }, 2500);
      }

      // --- 9. Add to Calendar (Google / iCal generator) ---
      const calendarLinks = document.querySelectorAll('[data-calendar-action]');
      calendarLinks.forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const icsData = [
            'BEGIN:VCALENDAR',
            'VERSION:2.0',
            'PRODID:-//The Maurya Family//Neeraj & Anita Wedding//EN',
            'BEGIN:VEVENT',
            'UID:neeraj-anita-20261203@mauryafamily.com',
            'DTSTAMP:20261203T180000Z',
            'DTSTART:20261203T123000Z',
            'DTEND:20261203T210000Z',
            'SUMMARY:Neeraj & Anita Wedding Celebrations (Shubh Vivah)',
            'DESCRIPTION:Together with the blessings of Lord Ganesha and our beloved elders, celebrate the wedding of Neeraj Maurya & Anita Maurya (Aanchal).',
            'LOCATION:Bari, Bhadwara, Jaunpur, Uttar Pradesh, India',
            'END:VEVENT',
            'END:VCALENDAR'
          ].join('\r\n');

          const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
          const dlLink = document.createElement('a');
          dlLink.href = window.URL.createObjectURL(blob);
          dlLink.setAttribute('download', 'Neeraj-Anita-Wedding.ics');
          document.body.appendChild(dlLink);
          dlLink.click();
          document.body.removeChild(dlLink);
          showToast('Wedding event added to Calendar!');
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
    };

    try {
      initInteractive();
    } catch (err) {
      console.error('Interactive engine error:', err);
    }

    try {
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.get('open') === '1') {
        const env = document.getElementById('inviteEnvelope');
        const widget = document.getElementById('floatingMusicWidget');
        if (env) env.style.display = 'none';
        if (widget) widget.style.display = 'block';
      }
    } catch (err) {
      console.warn('URL param check error:', err);
    }

    return () => {
      if (cleanupCarousel) cleanupCarousel();
      if (cleanupAutoScroll) cleanupAutoScroll();
      if (countdownTimer) clearInterval(countdownTimer);
      const bgMusic = document.getElementById('bgMusic');
      if (bgMusic) bgMusic.pause();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: INVITATION_HTML }}
    />
  );
}
