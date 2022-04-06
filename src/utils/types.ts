/* ModalView type */
export type ModalView = 'INCOME_FORM' | 'EXPENDITURE_FORM';

/* Income type */
export type Cycle = 'fixed' | 'non-fixed';
export type Category = 'income' | 'stock';

/* Button type */
export type ButtonType = 'primary' | 'secondary';

export type IncomeForm = {
  cycle: Cycle;
  category: Category;
  earning: number;
};

export type ExpenditureForm = Omit<IncomeForm, 'category'>;
