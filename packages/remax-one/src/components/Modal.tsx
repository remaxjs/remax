import * as React from 'react';
import { usePageContext, createPortal } from '@remax/runtime';

export default function Modal({ children }: React.PropsWithChildren<Record<string, any>>) {
  // context 一定存在
  const ctx = usePageContext()!;

  return createPortal(children, ctx.modalContainer);
}
