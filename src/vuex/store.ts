import { createStore } from 'vuex';

export type ModalView = 'INCOME_FORM' | 'EXPENDITURE_FORM';

interface IStoreState {
  modal: {
    isModalOpened: boolean;
    modalView: ModalView | null;
  };
  lnb: {
    isLnbOpened: boolean;
  };
  income: {
    incomeLists: string[];
  };
  expenditure: {
    expenditureLists: string[];
  };
}

export const store = createStore({
  state(): IStoreState {
    return {
      modal: {
        isModalOpened: false,
        modalView: null,
      },
      lnb: {
        isLnbOpened: false,
      },
      income: {
        incomeLists: [],
      },
      expenditure: {
        expenditureLists: [],
      },
    };
  },
  mutations: {
    openModal: (state: IStoreState) => {
      state.modal.isModalOpened = true;
    },
    closeModal: (state: IStoreState) => {
      state.modal.isModalOpened = false;
    },
    setModalView: (state: IStoreState, view: ModalView) => {
      state.modal.modalView = view;
    },
  },
  getters: {
    modalOpenState: (state) => {
      return state.modal.isModalOpened;
    },
    view: (state) => {
      return state.modal.modalView;
    },
  },
});
