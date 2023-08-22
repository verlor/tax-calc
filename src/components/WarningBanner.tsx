import { Alert, AlertTitle } from "@mui/material";

export default function WarningBanner() {
  if (!process.env.REACT_APP_TAX_API_URL) {
    return (
      <Alert severity="warning">
        <AlertTitle>Warning</AlertTitle>
        TAX_API_URL is not set and the app will not work as expected
      </Alert>
    );
  }
  return null;
}
