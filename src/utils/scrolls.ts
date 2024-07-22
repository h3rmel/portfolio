import { RefObject } from 'react';

/**
 * Renders the scroll to the desired section.
 *
 * @param ref - The reference of the desired section.
 */
function handleScrollToRef(ref: RefObject<HTMLHeadingElement>) {
  window.scrollTo({
    top: (ref.current?.offsetTop ?? 0) - 96,
    left: 0,
    behavior: 'smooth',
  });
}

/**
 * Renders the scroll to the desired section.
 *
 * @param id - The id of the desired section.
 */
function handleScrollToId(id: string) {
  const element = document.getElementById(id);

  if (element) element.scrollIntoView();
}

/**
 * Renders the scroll to the desired section.
 *
 * @param type - The type of the desired section.
 * @param value - The value of the desired section.
 */
export function handleScroll(type: 'id' | 'ref', value: string | RefObject<HTMLHeadingElement>) {
  if (type === 'id') {
    handleScrollToId(value as string);
  } else {
    handleScrollToRef(value as RefObject<HTMLHeadingElement>);
  }
}
