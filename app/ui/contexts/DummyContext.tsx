import { createContext, ReactNode, useContext } from 'react';

const DummyContext = createContext({ foo: 'bar' });

export const DummyContextProvider = ({ children }: { children: ReactNode }) => {
  return (
    <DummyContext.Provider value={{ foo: 'bar' }}>
      {children}
    </DummyContext.Provider>
  );
};

export const useDummyContext = () => {
  const context = useContext(DummyContext);
  return context;
};
