import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

type Props = {
    text: String
}

export default function SimpleSnackbar(props:Props) {
  const [open, setOpen] = React.useState(true);

  const handleClose = (event: React.SyntheticEvent | React.MouseEvent) => {
    setOpen(false);
  };

  return (
    <Snackbar
    anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
    }}
    open={open}
    autoHideDuration={3000}
    onClose={handleClose}
    message={props.text}
    action={
        <React.Fragment>
        <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
            <CloseIcon fontSize="small" />
        </IconButton>
        </React.Fragment>
    }
    />
  );
}