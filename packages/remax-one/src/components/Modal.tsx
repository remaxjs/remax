import * as React from 'react';
import { usePageContext, createPortal } from '@remax/runtime';

export default function Modal({ children }: React.PropsWithChildren<{}>) {
  // context 一定存在
  const ctx = usePageContext()!;

  return createPortal(children, ctx.modalContainer);
}
