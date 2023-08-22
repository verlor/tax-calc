import { useMutation } from "react-query";

const apiUrl = process.env.REACT_APP_TAX_API_URL;

export type TaxBracket = {
  min?: number;
  max?: number;
  rate: number;
};

export type TaxResponse = {
  tax_brackets: TaxBracket[];
};

export const useTaxRates = (taxYear: string) => {
  return useMutation<TaxResponse, Error, void>(async () => {
    const response = await fetch(
      `${apiUrl}/tax-calculator/tax-year/${taxYear}`,
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });
};
