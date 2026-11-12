import '../site_css/3a04a65e7d85aece.css';
import '../site_css/08fc569d88870472.css';
import '../css/mahal-gold.css';

export const metadata = {
  title: 'Niraj & Anita Wedding Invitation | The Maurya Family',
  description: 'Together with the blessings of Lord Ganesha and our beloved elders, we invite you to celebrate the wedding of Niraj Maurya & Anita Maurya (Aanchal) on 03 December 2026. The Maurya Family.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" data-theme="garden">
      <head>
        <link rel="preload" href="/fonts/TheNautigal-Regular.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/AlexBrush-Regular.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
      </head>
      <body className="font-sans antialiased text-[#640e1b] bg-white selection:bg-[#ab7a4520]">
        {children}
      </body>
    </html>
  );
}
