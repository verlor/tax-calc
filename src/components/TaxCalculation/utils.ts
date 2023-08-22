/* eslint-disable import/prefer-default-export, no-restricted-syntax */
import { TaxBracket } from "./mutations";

export const calculateTax = (income: number, taxBrackets: TaxBracket[]) => {
  let taxOwed = 0;

  for (const bracket of taxBrackets) {
    if (income > (bracket.max || 0) || !bracket.max) {
      taxOwed += ((bracket.max || 0) - (bracket.min || 0)) * bracket.rate;
    } else if (income > (bracket.min || 0)) {
      taxOwed += (income - (bracket.min || 0)) * bracket.rate;
      break;
    }
  }

  return taxOwed;
};
