import { calculateTax } from "./utils";

describe("calculateTax", () => {
  it("should calculate the correct tax for given income and tax brackets", () => {
    const taxBrackets = [
      { max: 50197, min: 0, rate: 0.15 },
      { max: 100392, min: 50197, rate: 0.205 },
      { max: 155625, min: 100392, rate: 0.26 },
      { max: 221708, min: 155625, rate: 0.29 },
      { min: 221708, rate: 0.33 },
    ];

    const tax = calculateTax(60000, taxBrackets);

    expect(tax).toBeCloseTo(9539.164); // This is the expected tax for an income of 60,000 based on the provided brackets
  });
});
