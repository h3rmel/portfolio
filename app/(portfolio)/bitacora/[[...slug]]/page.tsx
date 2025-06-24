import { notFound } from 'next/navigation';

import { DocsBody, DocsDescription, DocsTitle } from 'fumadocs-ui/page';

import { getMDXComponents } from '@/components/mdx-components';

import { source } from '@/lib/source';

export default async function Page(props: { params: Promise<{ slug?: string[] }> }) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <div className="">
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <hr className="mb-8" />
      <DocsBody>
        <MDX components={getMDXComponents()} />
      </DocsBody>
    </div>
  );
}
