// #region Imports

import { ComponentPropsWithoutRef, forwardRef } from 'react';

import Link from 'next/link';

import { BriefcaseBusiness, Linkedin, Mail, MessageCircle } from 'lucide-react';

import { useLanguage } from '@/ui/components/language';
import { Section } from '@/ui/components/layout';
import { buttonVariants } from '@/ui/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/ui/components/ui/card';

import { CONTRACTABLE_SERVICES_DATA } from '@/data/contractable-services';
import { CONTRACTABLE_SERVICES_LANGUAGES } from '@/i18n/contractable-services.lng';

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
        <hgroup className="flex flex-col gap-1">
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
        <section className="flex flex-col gap-2" id="contact-me">
          <hgroup className="flex flex-col gap-1">
            <h4 className="text-xl">{translate('contact-me', CONTRACTABLE_SERVICES_LANGUAGES)}</h4>
            <p className="text-muted-foreground">{translate('contact-me-desc', CONTRACTABLE_SERVICES_LANGUAGES)}</p>
          </hgroup>
          <ul className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <li className={`${buttonVariants({ variant: 'linkedin' })} group`}>
              <Link
                href="https://www.linkedin.com/in/isaachermel/"
                target="_blank"
                className="inline-flex items-center gap-2"
              >
                LinkedIn <Linkedin className="h-4 w-4 text-linkedin transition-colors group-hover:text-linkedin/60" />
              </Link>
            </li>
            <li className={`${buttonVariants({ variant: 'gmail' })} group`}>
              <Link href="mailto:isaachermel@gmail.com" target="_blank" className="inline-flex items-center gap-2">
                E-mail <Mail className="h-4 w-4 text-gmail transition-colors group-hover:text-gmail/60" />
              </Link>
            </li>
            <li className={`${buttonVariants({ variant: 'whatsapp' })} group`}>
              <Link href="https://wa.me/+5551997099876" target="_blank" className="inline-flex items-center gap-2">
                WhatsApp{' '}
                <MessageCircle className="h-4 w-4 text-whatsapp transition-colors group-hover:text-whatsapp/60" />
              </Link>
            </li>
          </ul>
        </section>
      </Section>
    );
  },
);
