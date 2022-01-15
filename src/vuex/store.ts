import { createStore } from 'vuex';

interface IStoreState {
  modal: {
    isModalOpened: boolean;
  };
  income: {
    incomeLists: string[];
  };
}

export const store = createStore({
  state(): IStoreState {
    return {
      modal: {
        isModalOpened: false,
      },
      income: {
        incomeLists: [],
      },
    };
  },
  mutations: {
    openModal(state: IStoreState) {
      state.modal.isModalOpened = true;
    },
    closeModal(state: IStoreState) {
      state.modal.isModalOpened = false;
    },
  },
});
