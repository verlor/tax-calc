import { fireEvent, render } from "@testing-library/react";
import { QueryClient, QueryClientProvider, useMutation } from "react-query";
import TaxCalculator from "./TaxCalculator";

const queryClient = new QueryClient();

const renderWithQueryClient = (component: React.ReactNode) => {
  return {
    ...render(
      <QueryClientProvider client={queryClient}>
        {component}
      </QueryClientProvider>,
    ),
  };
};

jest.mock("react-query", () => ({
  ...jest.requireActual("react-query"),
  useMutation: jest.fn(),
}));

describe("TaxCalculator", () => {
  it("renders correctly", () => {
    (useMutation as jest.Mock).mockReturnValue({
      mutate: jest.fn(),
      isLoading: false,
      isError: false,
    });

    const { getByText, getByLabelText } = renderWithQueryClient(
      <TaxCalculator />,
    );
    expect(getByText("Tax Calculator")).toBeInTheDocument();
    expect(getByLabelText("Annual Income")).toBeInTheDocument();
    expect(getByLabelText("Tax Year")).toBeInTheDocument();
  });

  it("displays loading state when calculating", () => {
    (useMutation as jest.Mock).mockReturnValue({
      mutate: jest.fn(),
      isLoading: true,
      isError: false,
    });

    const { getByText } = renderWithQueryClient(<TaxCalculator />);
    expect(getByText("Loading")).toBeInTheDocument();
  });

  it("displays error when mutation errors out", () => {
    (useMutation as jest.Mock).mockReturnValue({
      mutate: jest.fn(),
      isLoading: false,
      isError: true,
    });

    const { getByText } = renderWithQueryClient(<TaxCalculator />);
    expect(getByText("Error calculating tax")).toBeInTheDocument();
  });

  it("calls the mutate function when 'Calculate' is clicked", () => {
    const mockMutate = jest.fn();

    (useMutation as jest.Mock).mockReturnValue({
      mutate: mockMutate,
      isLoading: false,
    });

    const { getByText } = renderWithQueryClient(<TaxCalculator />);
    fireEvent.click(getByText("Calculate"));
    expect(mockMutate).toHaveBeenCalled();
  });
});
