'use client';

// #region Imports

import { ComponentPropsWithoutRef, forwardRef } from 'react';

import Link from 'next/link';

import { BriefcaseBusiness, Linkedin, Mail, MessageCircle } from 'lucide-react';

import { useLanguage } from '@/ui/components/language';
import { Section } from '@/ui/components/layout';
import { Card, CardDescription, CardHeader, CardTitle } from '@/ui/components/ui/card';

import { CONTRACTABLE_SERVICES_DATA } from './data';
import { CONTRACTABLE_SERVICES_LANGUAGES } from './language';

// #endregion

interface ContractableServicesProps extends ComponentPropsWithoutRef<'section'> {}

/**
 * Contractable Services Section
 *
 * @component
 * @see ContractableServicesProps for the props interface.
 * @returns The Contractable Services Section with his ref being forwarded.
 */
export const ContractableServices = forwardRef<HTMLElement, ContractableServicesProps>(
  function RenderContractableServices(props, ref): JSX.Element {
    const { translate } = useLanguage();

    return (
      <Section {...props} ref={ref}>
        {/* Content */}
        <BriefcaseBusiness className="absolute right-4 top-4 h-6 w-6 text-muted-foreground opacity-30 duration-300 hover:opacity-100 sm:h-8 sm:w-8" />
        {/* Header */}
        <hgroup className="flex flex-col">
          <h2 className="text-2xl">{translate('contractable-services', CONTRACTABLE_SERVICES_LANGUAGES)}</h2>
          <p className="text-muted-foreground">
            {translate('contractable-services-list', CONTRACTABLE_SERVICES_LANGUAGES)}
          </p>
        </hgroup>
        {/* Grid */}
        <section className="flex flex-col gap-4 sm:grid sm:grid-cols-2">
          {CONTRACTABLE_SERVICES_DATA.map((contractableService) => (
            <Card key={contractableService.name} className="group h-full w-full duration-300 hover:border-emerald-500">
              <CardHeader>
                <CardTitle className="tracking-wide duration-300 group-hover:text-emerald-500">
                  {translate(contractableService.name, CONTRACTABLE_SERVICES_LANGUAGES)}
                </CardTitle>
                <CardDescription>
                  {translate(contractableService.desc, CONTRACTABLE_SERVICES_LANGUAGES)}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </section>
        {/* Links */}
        <section className="flex flex-col gap-6" id="contact-me">
          <hgroup className="flex flex-col">
            <h4 className="text-xl">{translate('contact-me', CONTRACTABLE_SERVICES_LANGUAGES)}</h4>
            <p className="text-muted-foreground">{translate('contact-me-desc', CONTRACTABLE_SERVICES_LANGUAGES)}</p>
          </hgroup>
          <section className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="https://www.linkedin.com/in/isaachermel/"
              target="_blank"
              className="flex-grow bg-gradient-to-br from-background/30 to-neutral-800/30 backdrop-blur-md"
            >
              <article className="group flex flex-col items-center gap-2 rounded-lg border border-dashed border-linkedin p-6 duration-300 hover:border-linkedin/60">
                <h4 className="text-xl tracking-wide text-linkedin duration-300 group-hover:text-linkedin/60">
                  LinkedIn
                </h4>
                <Linkedin
                  strokeWidth={1.2}
                  className="h-8 w-8 text-linkedin transition-colors group-hover:text-linkedin/60"
                />
              </article>
            </Link>
            <Link
              href="mailto:isaachermel@gmail.com"
              target="_blank"
              className="flex-grow bg-gradient-to-br from-background/30 to-neutral-800/30 backdrop-blur-md"
            >
              <article className="group flex flex-col items-center gap-2 rounded-lg border border-dashed border-gmail p-6 duration-300 hover:border-gmail/60">
                <h4 className="text-xl tracking-wide text-gmail duration-300 group-hover:text-gmail/60">E-mail</h4>
                <Mail strokeWidth={1.2} className="h-8 w-8 text-gmail transition-colors group-hover:text-gmail/60" />
              </article>
            </Link>
            <Link
              href="https://wa.me/+5551997099876"
              target="_blank"
              className="flex-grow bg-gradient-to-br from-background/30 to-neutral-800/30 backdrop-blur-md"
            >
              <article className="group flex flex-col items-center gap-2 rounded-lg border border-dashed border-whatsapp p-6 duration-300 hover:border-whatsapp/60">
                <h4 className="text-xl tracking-wide text-whatsapp duration-300 group-hover:text-whatsapp/60">
                  WhatsApp
                </h4>
                <MessageCircle
                  strokeWidth={1.2}
                  className="h-8 w-8 text-whatsapp transition-colors group-hover:text-whatsapp/60"
                />
              </article>
            </Link>
          </section>
        </section>
      </Section>
    );
  },
);
