import React, { useState } from 'react';

import { IconButton, Dialog , DialogContent, DialogTitle, Button } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import ListGroup from 'react-bootstrap/ListGroup';
import { makeStyles } from '@material-ui/core/styles';

// import ChangeFilmForm from './ChangeFilmForm';
import { FilmFormType } from './AddFilmForm';
import AddFilmForm from './AddFilmForm'

const useStyles = makeStyles((theme) => ({
  btn: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    float: 'right',
    borderRadius: 0,
    borderColor: '#0072ce',
    color: '#0072ce'
  },
  root: {
    '& .MuiDialog-paper': {
      minWidth: '50vw'
    }
  },
  content: {
    display: "flex",
    flexDirection: "column"
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
}));

type Props = {
  info: FilmFormType,
  id: string,
  cdDelete: (id:string)=>void
}

const MoviesListAdmin:React.FC<any> = (props) => {
  
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
      <ListGroup.Item>
        {props.info.movieTitle}
        <Button variant="outlined" className={classes.btn} onClick={()=>{props.cdDelete(props.id)}}>Удалить</Button>
        <Button variant="outlined" className={classes.btn} onClick={handleClickOpen}>Редактировать</Button>

        <Dialog open={open} onClose={handleClose} className={classes.root} aria-labelledby="form-dialog-title" id="dialog">
          <DialogTitle id="form-dialog-title">
            Редактировать фильм
            <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>
              <CloseIcon />
            </IconButton>
            </DialogTitle>
          <DialogContent className={classes.content}>
            {/* <ChangeFilmForm movie = {props.info} movieId = {props.id}/> */}
            <AddFilmForm movie = {props.info} movieId = {props.id} />
          </DialogContent>
        </Dialog>
      </ListGroup.Item>
  )
}

export default MoviesListAdmin