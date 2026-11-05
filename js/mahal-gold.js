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
  document.querySelectorAll('div[style*="background-image:url(images/themes/mahal-gold/"]').forEach((el) => {
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
    'images/photos/f83d243670c753a3a8de98002b84126e357b748067b4099372400e34a15278ba.webp',
    'images/photos/cb444178a6dd5753046eb92dd6c85bc433fcafb9139d14ff843aa96c9a29efa1.webp',
    'images/photos/e44778eff5ba6bce43ff44630d64afd998314f6599a504de52c4604889658464.webp',
    'images/photos/b572d32a98e5893a0a485e35ce0016d85fc6e35e03ca4b27151124f0e1f91fd8.webp',
    'images/photos/1ca6ea249bd32431f552ad193f4cb9e109c3e3e01016a76ddd6d67572da63d21.webp',
    'images/photos/e2b7e8a5add0cd52c62a4d326dbf25285299afb96bf9130aa0330c5f37282f7e.webp',
    'images/photos/65c80c596d85f34befd4f244b1ed0d45d147ffcededcea5a44611fdcfedb9755.webp',
    'images/photos/c4aa84136b7a0436d5dcfe8acf1a06740412334756beadfd1acfc9924a4895a8.webp',
    'images/photos/390c49fca6f000eaab3de4113fc3ac4c5e555a0a9e6c21867e919d47392ee185.webp',
    'images/photos/b72a19c1721e965eea6fd2853d550c3ffe2bfb753db8b9034155c6456fff40b0.webp',
    'images/photos/faf693fa483740c47624845c2978025af25a83b87800c0eaef7923438ce83c41.webp'
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
