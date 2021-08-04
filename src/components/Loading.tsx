import React from 'react';
import { CircularProgress } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: theme.spacing(1),
    },
  }),
);

const Loading:React.FC = () => {
  const classes = useStyles();      
  return (
    <div className={classes.root}>
      <CircularProgress />
    </div>
  )
}

export default Loading