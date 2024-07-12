// #region Imports

import { ComponentPropsWithoutRef, forwardRef } from 'react';

import { BriefcaseBusiness } from 'lucide-react';

import { CONTRACTABLE_SERVICES_LANGUAGES } from '@/app/_languages/contractable-services.lng';

import { useLanguage } from '@/ui/components/language';

// #endregion

interface ContractableServicesProps extends ComponentPropsWithoutRef<'section'> {}

export const ContractableServices = forwardRef<HTMLElement, ContractableServicesProps>(
  function RenderContractableServices(props, ref): JSX.Element {
    const { translate } = useLanguage();

    return (
      <section {...props} ref={ref} className="border-y border-dashed border-border">
        <section className="container relative border-x border-dashed border-border p-16">
          <BriefcaseBusiness className="absolute right-4 top-4 h-8 w-8 text-muted-foreground" />
          {/* Header */}
          <hgroup className="flex flex-col gap-1">
            <h2 className="text-2xl">{translate('contractable-services', CONTRACTABLE_SERVICES_LANGUAGES)}</h2>
            <p className="text-muted-foreground">
              {translate('contractable-services-list', CONTRACTABLE_SERVICES_LANGUAGES)}
            </p>
          </hgroup>
        </section>
      </section>
    );
  },
);
