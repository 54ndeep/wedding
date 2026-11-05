# Mahal Gold - Royal Indian Palace Wedding Invitation (Next.js)

A luxury Indian Palace wedding invitation built with **Next.js (App Router)** and ready for **1-click deployment to Vercel**. Features include authentic animations, interactive opening envelope, romantic background music, 3D photo carousel, auspicious calendar, countdown timer, event timeline, RSVP, and gift registry.

## ✨ Features

- **Built with Next.js 14 App Router**: Optimized for instant deployment to Vercel.
- **Interactive Envelope Opening**: Ornate envelope with textured paper, ambient falling bougainvillea petals, pulsing wax seal, harmonic Web Audio chime, flying corners, and 32-petal explosion burst.
- **Royal Palace & Ganesha Header**: Sandstone palace mirrored in still water, temple bells, and Lord Ganesha motif.
- **Background Music Player**: Ambient background music track ("Perfect" by Ed Sheeran) with a floating rotating vinyl disc player, dancing equalizer bars, and play/pause controls.
- **Interactive 3D Photo Gallery**: 11 couple photos arranged in a 3D perspective carousel with touch swipe and lightbox modal.
- **Auspicious Calendar & Live Countdown**: Auspicious calendar frame with live days/hours/minutes countdown to the wedding date.
- **Day Timeline**: 9-step wedding day schedule with milestone medallions.
- **RSVP & Gift Box Modals**:
  - Interactive RSVP modal with attendance confirmation and guest blessings.
  - Digital Gift Box with copyable Zelle email and Venmo QR code.
- **Responsive Design**: Designed to work on mobile, tablet, and desktop screens.

## 🚀 Local Development

1. Install dependencies:
```bash
npm install
```

2. Start the Next.js development server:
```bash
npm run dev
```

3. Open in your browser:
- **Full experience (with envelope)**: `http://localhost:3000/`
- **Direct invitation (skip envelope)**: `http://localhost:3000/?open=1`

## ☁️ Deploy to Vercel

### Option 1: Automatic Deployment via GitHub
1. Connect your GitHub repository (`54ndeep/wedding`) in [Vercel](https://vercel.com).
2. Vercel automatically detects Next.js framework settings.
3. Click **Deploy**. Any future `git push` to `main` will automatically trigger a production deployment.

### Option 2: Deploy via Vercel CLI
```bash
npx vercel
```
