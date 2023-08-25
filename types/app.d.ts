declare global {
  declare type RootState = import('../src/index').RootState;
  declare type AppDispatch = import('../src/index').AppDispatch;
}

export {};
