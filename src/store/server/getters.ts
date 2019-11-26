import { GetterTree } from 'vuex';
import { ServerState } from './types';
import { RootState } from '../types';

export const getters: GetterTree<ServerState, RootState> = {
  // it's useless, yeah, I'm just trying to do something
  returnServer(state): string {
    const { server } = state;

    return `${JSON.stringify(server)}`;
  }
};