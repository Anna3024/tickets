import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    dropdown: {
      position: 'absolute',
      bottom: 28,
      right: 0,
      left: 0,
      zIndex: 1,
      backgroundColor: 'transparent',
      textAlign: 'center'
    }
  }));

const OpenTip:React.FC<{text: string}> = ({text}) => {
    
    const classes = useStyles();

    return (
        <div className={classes.dropdown}>
            {text}
        </div>
    )
}

export default OpenTip