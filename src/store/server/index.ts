import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { ServerState } from './types';
import { RootState } from '../types';

export const state: ServerState = {
  server: {
    serverHeader: 'codex-kepler'
  },
  error: false
};

const namespaced: boolean = true;

export const server: Module<ServerState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
};