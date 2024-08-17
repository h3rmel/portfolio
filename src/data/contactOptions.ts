import { PhEnvelope, PhLinkedinLogo, PhWhatsappLogo } from '@phosphor-icons/vue';
import type { Component } from 'vue';

export const contactOptionsData: {
  name: string;
  url: string;
  icon: Component;
  colors: {
    bg: string;
    text: string;
    border: string;
    glow: string;
  };
}[] = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/isaachermel/',
    icon: PhLinkedinLogo,
    colors: {
      bg: 'bg-[#086bca]',
      text: 'md:group-hover:text-[#086bca]',
      border: 'md:hover:border-[#086bca]',
      glow: 'md:hover:shadow-[0_0_16px_4px_rgba(8,107,202,0.4)]'
    }
  },
  {
    name: 'Email',
    url: 'mailto:isaachermel@gmail.com',
    icon: PhEnvelope,
    colors: {
      bg: 'bg-[#eb493b]',
      text: 'md:group-hover:text-[#eb493b]',
      border: 'md:hover:border-[#eb493b]',
      glow: 'md:hover:shadow-[0_0_16px_4px_rgba(235,73,59,0.4)]'
    }
  },
  {
    name: 'WhatsApp',
    url: 'https://wa.me/+5551997099876',
    icon: PhWhatsappLogo,
    colors: {
      bg: 'bg-[#39da56]',
      text: 'md:roup-hover:text-[#39da56]',
      border: 'md:hover:border-[#39da56]',
      glow: 'md:hover:shadow-[0_0_16px_4px_rgba(57,218,86,0.4)]'
    }
  }
];
