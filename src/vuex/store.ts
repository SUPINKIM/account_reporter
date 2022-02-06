import { createStore } from 'vuex';
import { IModalState, ModalStore } from './ModalStore';
import { IIncomeState, IncomeStore } from './IncomeStore';

export interface RootState {
  ModalStore: IModalState;
  IncomeStore: IIncomeState;
  //ExpenditureStore: ExpenditureStore;
}

export const store = createStore<RootState>({
  modules: { ModalStore, IncomeStore },
});
