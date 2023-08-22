import { useState } from "react";
import { Button, TextField, Container, Typography } from "@mui/material";
import { useTaxRates } from "./mutations";
import { calculateTax } from "./utils";

export default function TaxCalculator() {
  const [income, setIncome] = useState<string | number>("");
  const [taxYear, setTaxYear] = useState<string>("");

  const mutation = useTaxRates(taxYear);

  const handleSubmit = () => {
    mutation.mutate();
  };

  return (
    <Container>
      <Typography variant="h4">Tax Calculator</Typography>
      <TextField
        label="Annual Income"
        value={income}
        onChange={(e) => setIncome(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Tax Year"
        value={taxYear}
        onChange={(e) => setTaxYear(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        disabled={mutation.isLoading}
      >
        {mutation.isLoading ? "Loading" : "Calculate"}
      </Button>
      {mutation.isSuccess && (
        <Typography variant="h6">
          Tax Owed: {calculateTax(Number(income), mutation.data.tax_brackets)}
        </Typography>
      )}
      {mutation.isError && (
        <Typography color="error">Error calculating tax</Typography>
      )}
    </Container>
  );
}
