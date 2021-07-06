import React from 'react';

import {FormControl, InputLabel, InputAdornment, Input, IconButton} from '@material-ui/core';
import {Visibility, VisibilityOff} from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    input: {
      width: "100%",
      marginTop: "25px",
      marginBottom: "25px"
      }
  }));

type Props = {
    mode: "LogIn" | "SignUp",
    confirm? : Boolean,
    cbChangeForm(event:React.ChangeEvent<HTMLInputElement>):void

}

const InputPassword: React.FC<Props> = (props) => {

    const classes = useStyles();

    const [showPassword, setShowPassword] = React.useState<Boolean>(false)
    
    const handleClickShowPassword = () => { //отобразить или спрятать пароль
        setShowPassword(!showPassword);
    };

    return (
        <FormControl className={classes.input}>
          <InputLabel htmlFor={`${props.mode}_password${props.confirm && '_conf'}`}>Password</InputLabel>
          <Input
            id={`${props.mode}_password${props.confirm ? '_conf':''}`}
            type={showPassword ? 'text' : 'password'}
            name='password'
            placeholder={props.confirm?"ПОВТОРИТЕ ПАРОЛЬ":"ВВЕДИТЕ ПАРОЛЬ"} 
            onChange={props.cbChangeForm}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword.bind(null, 0)}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
    )
}

export default InputPassword