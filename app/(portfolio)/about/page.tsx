import Image from 'next/image';

import { TracingBeam } from '@/components/tracing-beam';

import { cn } from '@/lib/utils';

import { carrerExperiences } from '@/config/carrer';
import { educationExperiences } from '@/config/education';

export default function Page() {
  return (
    <TracingBeam>
      {/* Little history */}
      <article className={cn('flex flex-col space-y-8')}>
        <hgroup className={cn('flex flex-col')}>
          <h1 className={cn('text-2xl font-bold')}>About</h1>
          <p className={cn('text-sm text-muted-foreground')}>A little about me.</p>
        </hgroup>
        <p className={cn('text-justify text-sm leading-6')}>
          Passionate about creating interfaces that are not only functional but also
          beautiful and intuitive. My journey started in 2021 in web development with a
          focus on front-end development. Since then, I have been working on a variety of
          projects, from small websites to large scale applications and platforms.
        </p>
        <p className={cn('text-justify text-sm leading-6')}>
          At the end of 2024, I decided to start working on open-source projects and
          founding my own projects. Now, in 2025, I am working on a few projects, like{' '}
          <a
            href="https://github.com/h3rmel/guarahooks"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'underline underline-offset-1',
              'transition-all hover:underline-offset-4',
            )}
          >
            guarahooks
          </a>
          , a open-source collection of React custom hooks and{' '}
          <a
            href="https://github.com/magicuidesign/magicui"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'underline underline-offset-1',
              'transition-all hover:underline-offset-4',
            )}
          >
            magicui
          </a>
          , a UI React library for Design Engineers.
        </p>
        <p className={cn('text-justify text-sm leading-6')}>
          Beyond my passion for building and learning things, I am on a continuous mission
          to create the best applications and experiences. More than being recognized for
          my work, I want to be remembered by the impact I made on people&apos;s lives.
        </p>
      </article>
      <hr className={cn('my-8')} />
      {/* Carrer */}
      <article className={cn('flex flex-col space-y-8')}>
        <hgroup className={cn('flex flex-col')}>
          <h2 className={cn('text-xl font-bold')}>Carrer</h2>
          <p className={cn('text-sm text-muted-foreground')}>
            4+ years of professional development experience.
          </p>
        </hgroup>
        <p className={cn('text-justify text-sm leading-6')}>
          Front-end specialist with experience in startups and large companies. Developed
          and led technological projects in a variety of segments, from landing pages to
          E[T]L flows and Customer Success platforms. Currently, I serve as a Software
          Engineer at Zenvia, focused on the development of the company&apos;s CPaaS
          platform.
        </p>
        <ul className={cn('flex flex-col space-y-4')}>
          {carrerExperiences.map((carrer, index) => (
            <li key={index}>
              <div
                className={cn(
                  'relative',
                  'flex items-center space-x-4',
                  'lg:rounded-md lg:border lg:p-4',
                )}
              >
                <Image
                  src={carrer.companyLogoUrl}
                  alt={carrer.company}
                  width={48}
                  height={48}
                  className={cn('rounded-full object-cover', 'p-0.5 border')}
                />
                <div className={cn('flex flex-col space-y-1', 'w-full')}>
                  <div className={cn('flex items-center justify-between')}>
                    <h3 className={cn('text-sm lg:text-base font-medium line-clamp-1')}>
                      {carrer.company}
                    </h3>
                    <p className={cn('text-xs lg:text-sm text-muted-foreground')}>
                      {carrer.timestamp}
                    </p>
                  </div>
                  <p className={cn('text-sm text-muted-foreground line-clamp-1')}>
                    {carrer.position}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </article>
      <hr className={cn('my-8')} />
      {/* Education */}
      <article className={cn('flex flex-col space-y-8')}>
        <hgroup className={cn('flex flex-col')}>
          <h2 className={cn('text-xl font-bold')}>Education</h2>
          <p className={cn('text-sm text-muted-foreground')}>
            Currently finisigh my associate&apos;s degree.
          </p>
        </hgroup>
        <ul className={cn('flex flex-col space-y-4')}>
          {educationExperiences.map((education, index) => (
            <li key={index}>
              <div
                className={cn(
                  'relative',
                  'flex items-center space-x-4',
                  'lg:rounded-md lg:border lg:p-4',
                )}
              >
                <Image
                  src={education.institutionLogoUrl}
                  alt={education.institution}
                  width={48}
                  height={48}
                  className={cn('rounded-full object-cover', 'p-0.5 border')}
                />
                <div className={cn('flex flex-col space-y-1', 'w-full')}>
                  <div className={cn('flex items-center justify-between')}>
                    <h3
                      className={cn(
                        'text-sm lg:text-base font-medium max-w-[20ch] lg:max-w-full line-clamp-1',
                      )}
                    >
                      {education.institution}
                    </h3>
                    <p className={cn('text-xs lg:text-sm text-muted-foreground')}>
                      {education.timestamp}
                    </p>
                  </div>
                  <p className={cn('text-sm text-muted-foreground line-clamp-1')}>
                    {education.degree}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </article>
    </TracingBeam>
  );
}
