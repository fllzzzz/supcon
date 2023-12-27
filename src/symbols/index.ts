import HTTP from '@/class/HTTP';

import { InjectionKey } from 'vue';

export const HttpKey :InjectionKey<HTTP> = Symbol('http');