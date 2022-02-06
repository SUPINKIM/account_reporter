import { Module } from 'vuex';
import { RootState } from './store';

export interface IIncomeState {
  incomeLists: number[];
}

export const IncomeStore: Module<IIncomeState, RootState> = {
  namespaced: true,
  state: {
    incomeLists: [],
  },
  mutations: {
    addIncomeItem: (state, payload: number) => {
      state.incomeLists = [...state.incomeLists, payload];
    },
  },
};
