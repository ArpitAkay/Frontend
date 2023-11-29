import { Alert, AlertProps, Button, Snackbar } from "@mui/material";
import React, { forwardRef } from "react";

const MuiSnackBar = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const SnackBarAlert = forwardRef<HTMLDivElement, AlertProps>(
    function SnackBarAlert(props, ref) {
        return <Alert elevation={6} ref={ref} {...props} />;
    }
)

  return (
    <>
      <Button onClick={() => setOpen(true)}>Submit</Button>
      {/* <Snackbar
        message="Form submitted successfully"
        autoHideDuration={4000}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
            vertical: "top",
            horizontal: "center",
        }}
      ></Snackbar> */}
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <SnackBarAlert onClose={handleClose} severity="success">
            Form submitted successfully
        </SnackBarAlert>
      </Snackbar>
    </>
  );
};

export default MuiSnackBar;
