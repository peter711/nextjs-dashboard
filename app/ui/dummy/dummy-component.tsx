'use client';

import { DummyContextProvider } from '@/app/ui/contexts';

export function DummyComponent(props: { children?: React.ReactNode }) {
  return (
    <div>
      <p>This is dummy client component</p>
      {props.children}
    </div>
  );
}

export function DummyComponentWithContext(props: {
  children?: React.ReactNode;
}) {
  return (
    <DummyContextProvider>
      <DummyComponent>{props.children}</DummyComponent>
    </DummyContextProvider>
  );
}
