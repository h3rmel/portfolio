// #region Imports

import { ComponentPropsWithoutRef, forwardRef } from 'react';

import Link from 'next/link';

import { BriefcaseBusiness, Linkedin, Mail, MessageCircle } from 'lucide-react';

import { useLanguage } from '@/ui/components/language';
import { buttonVariants } from '@/ui/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/ui/components/ui/card';

import { CONTRACTABLE_SERVICES_DATA } from '@/data/contractable-services';
import { CONTRACTABLE_SERVICES_LANGUAGES } from '@/i18n/contractable-services.lng';

// #endregion

interface ContractableServicesProps extends ComponentPropsWithoutRef<'section'> {}

/**
 * Contractable Services Section
 *
 * @see ContractableServicesProps for the props interface.
 * @returns The Contractable Services Section with his ref being forwarded.
 */
export const ContractableServices = forwardRef<HTMLElement, ContractableServicesProps>(
  function RenderContractableServices(props, ref): JSX.Element {
    const { translate } = useLanguage();

    return (
      <section {...props} ref={ref} className="border-divider">
        {/* Content */}
        <section className="container relative flex flex-col gap-8 border-x border-dashed border-border p-16">
          <BriefcaseBusiness className="absolute right-4 top-4 h-8 w-8 text-muted-foreground" />
          {/* Header */}
          <hgroup className="flex flex-col gap-1">
            <h2 className="text-2xl">{translate('contractable-services', CONTRACTABLE_SERVICES_LANGUAGES)}</h2>
            <p className="text-muted-foreground">
              {translate('contractable-services-list', CONTRACTABLE_SERVICES_LANGUAGES)}
            </p>
          </hgroup>
          {/* Grid */}
          <section className="grid grid-cols-2 gap-4">
            {CONTRACTABLE_SERVICES_DATA.map((contractableService) => (
              <Card
                key={contractableService.name}
                className="group cursor-pointer duration-300 hover:border-emerald-500"
              >
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
          <section className="flex flex-col gap-2">
            <h4 className="text-lg text-muted-foreground">
              {translate('contact-me', CONTRACTABLE_SERVICES_LANGUAGES)}
            </h4>
            <ul className="inline-flex gap-4">
              <li className={`${buttonVariants({ variant: 'secondary' })}`}>
                <Link
                  href="https://www.linkedin.com/in/isaachermel/"
                  target="_blank"
                  className="inline-flex items-center gap-2"
                >
                  LinkedIn <Linkedin className="h-4 w-4" />
                </Link>
              </li>
              <li className={`${buttonVariants({ variant: 'secondary' })}`}>
                <Link href="mailto:isaachermel@gmail.com" target="_blank" className="inline-flex items-center gap-2">
                  E-mail <Mail className="h-4 w-4" />
                </Link>
              </li>
              <li className={`${buttonVariants({ variant: 'secondary' })}`}>
                <Link href="https://wa.me/+5551997099876" target="_blank" className="inline-flex items-center gap-2">
                  WhatsApp <MessageCircle className="h-4 w-4" />
                </Link>
              </li>
            </ul>
          </section>
        </section>
      </section>
    );
  },
);
