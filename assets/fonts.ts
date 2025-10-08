import { JetBrains_Mono } from 'next/font/google';

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jet-brains-mono',
  weight: ['300', '400', '500', '600', '700'],
});

export { jetBrainsMono };
