import { Module } from 'vuex';
import { IncomeForm } from '../utils/types';
import { RootState } from './store';

export interface IIncomeState {
  incomeLists: IncomeForm[];
}

export const IncomeStore: Module<IIncomeState, RootState> = {
  namespaced: true,
  state: {
    incomeLists: [],
  },
  mutations: {
    addIncomeItem: (state, payload: IncomeForm) => {
      state.incomeLists = [...state.incomeLists, payload];
    },
  },
  actions: {
    addIncomeItem: ({ commit }, payload: IncomeForm) => {
      commit('addIncomeItem', payload);
    },
  },
};
