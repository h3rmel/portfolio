import { ComponentPropsWithoutRef, forwardRef } from 'react';

interface SectionProps extends ComponentPropsWithoutRef<'section'> {}

export const Section = forwardRef<HTMLElement, SectionProps>(function RenderSection(props, ref): JSX.Element {
  return (
    <section {...props} ref={ref} className="border-b border-dashed border-border">
      <section className="container relative flex flex-col gap-8 border-x border-dashed border-border p-16">
        {props.children}
      </section>
    </section>
  );
});
