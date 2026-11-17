import {initTRPC} from '@trpc/server';
import { asyncLocalStorage } from '../../utils/helpers/request.helpers';

const t = initTRPC.create();

export const router = t.router;
export const publicProcedure = t.procedure;

export const createContext = () => {
    return {
        correlationId: asyncLocalStorage.getStore()?.correlationId
    }
}
