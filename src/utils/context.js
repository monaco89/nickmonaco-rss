import { createContext } from 'react';

export const UserContext = createContext({});
export const LoginContext = createContext(false);
export const RssContext = createContext(() => null);
export const MessageContext = createContext(() => {});
