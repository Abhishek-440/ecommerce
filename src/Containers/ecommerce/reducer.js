const initialState = {
  expenses: [],
};

export default function expenseReducer(state = initialState, action) {
  switch (action.type) {
    case "expenses/expenseAdded": {
      const expense = action.payload;
      return {
        expenses: [...state.expenses, expense],
      };
    }

    case "expenses/expensesLoaded": {
      return {
        expenses: action.payload.map((expense) => {
          // console.log(expense);
          return expense;
        }),
      };
    }

    case "expenses/expensesUpdated": {
      const { id } = action.payload;
      return {
        expenses: state.expenses.map((expense) => {
          if (Number(expense.id) === Number(id)) return action.payload;
          return expense;
        }),
      };
    }

    case "expenses/expensesDeleted": {
      return {
        expenses: state.expenses.filter(
          (item) => Number(item.id) !== Number(action.payload)
        ),
      };
    }

    default:
      return state;
  }
}

export const selectExpenses = (state) => state.expense.expenses;

export const selectExpenseById = (state, expenseId) => {
  return state.expense.expenses.find((state) => state.id === expenseId);
};
