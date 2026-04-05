import { ENV } from "@/config/env";


export const logger = {
  log: (...args: unknown[]) => {
    if (ENV.IS_DEV) {
      console.log(...args);
    }
  },

  warn: (...args: unknown[]) => {
    console.warn(...args);
  },

  error: (...args: unknown[]) => {
    console.error(...args);
  },
};