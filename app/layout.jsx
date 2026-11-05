import '../site_css/3a04a65e7d85aece.css';
import '../site_css/08fc569d88870472.css';
import '../css/mahal-gold.css';

export const metadata = {
  title: 'Mahal Gold Template - Indian Palace Wedding Invitation | ChungDoi',
  description: 'A regal South-Asian template with a Rajasthani sandstone palace mirrored in still water, a festival elephant and cascading magenta bougainvillea, framed by a gold arch on warm cream. Ideal for Indian and Mughal-style weddings.',
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
