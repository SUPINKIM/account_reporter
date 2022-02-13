import { InjectionKey } from 'vue';
import { createStore, Store, useStore as baseStore } from 'vuex';
import { IModalState, ModalStore } from './ModalStore';
import { IIncomeState, IncomeStore } from './IncomeStore';

export interface RootState {
  ModalStore: IModalState;
  IncomeStore: IIncomeState;
  //ExpenditureStore: ExpenditureStore;
}

export const storeKey: InjectionKey<Store<RootState>> = Symbol();

export const store = createStore<RootState>({
  modules: { ModalStore, IncomeStore },
});

export const useStore = () => baseStore(storeKey);
