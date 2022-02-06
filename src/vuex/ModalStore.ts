import { Module } from 'vuex';
import { RootState } from './store';

export type ModalView = 'INCOME_FORM' | 'EXPENDITURE_FORM';

export interface IModalState {
  isModalOpened: boolean;
  modalView: ModalView | null;
}

export const ModalStore: Module<IModalState, RootState> = {
  namespaced: true,
  state: {
    isModalOpened: false,
    modalView: null,
  },
  mutations: {
    openModal: (state) => {
      state.isModalOpened = true;
    },
    closeModal: (state) => {
      state.isModalOpened = false;
    },
    setModalView: (state, view: ModalView) => {
      state.modalView = view;
    },
  },
  getters: {
    modalOpenState: (state) => {
      return state.isModalOpened;
    },
    view: (state) => {
      return state.modalView;
    },
  },
};
