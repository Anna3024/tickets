import React, {useState} from 'react';
import { useHistory, NavLink  } from 'react-router-dom';
import { useDispatch, connect } from 'react-redux';
import { compose } from 'redux';

import {Container, AppBar,  Tabs, Tab, Box, Typography, Paper} from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import { AppStateType } from '../redux/rootReducer';
import { userLogout } from '../redux/actions';
import { withAuthRedirect } from '../hoc/withAuthRedirect';

import Profile from '../components/Profile'
import BtnMain from '../components/BtnMain'
import ChangeEmailField from '../components/ChangeEmailField';
import ChangePasswordField from '../components/ChangePasswordField';

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: any;
  value: any;
}

const useStyles = makeStyles(() => ({
  appBar: {
    backgroundColor: '#0072ce',
  },
  tabs: {
    color: "white",
  }, 
  container: {
    marginBottom: '50px',
    minHeight: `${window.innerHeight - 60-350}px`
  }
}));


function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}
const Page_Cabinet: React.FC<any> = ({userData}) => { 
  
  const classes = useStyles();
  const history = useHistory()
  const dispatch = useDispatch() 

  const theme = useTheme();
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  const logOutHandler = async () => {
    try {
      dispatch(userLogout())
      history.push('/logIn')

    } catch (error) {
      console.log('Ошибка при выходе из аккаунта')
    }
  }
  
  return (
    <Container maxWidth="xl" className={classes.container}>
      ID:  {userData.uid}
        <AppBar position="static" className={classes.appBar}>
          <Tabs
            className={classes.tabs}
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            variant="fullWidth"
          >
            <Tab label="ПРОФИЛЬ" {...a11yProps(0)} />
            <Tab label="БИЛЕТЫ" {...a11yProps(1)} />
          </Tabs>
        </AppBar>

        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <Typography variant="h3" gutterBottom>Настройки профиля</Typography>
            <Profile />
            <ChangeEmailField/>
            <ChangePasswordField/>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <Typography variant="h3" gutterBottom>История покупки билетов</Typography>
            <Typography variant="h4" gutterBottom>Мои билеты</Typography>
            <Paper square className="p-3">
              Здесь будут отображаться купленные билеты. 
              <NavLink to="/movies"> Выбрать фильм</NavLink>
            </Paper>
          </TabPanel>
        </SwipeableViews>

        <BtnMain text="ВЫЙТИ ИЗ ПРОФИЛЯ" cbHendler={logOutHandler} />

    </Container>
  )
}

const mapStatetoProps  = (state:AppStateType) => {
  return {
    userData: state.user.userObj
  }
}

export default compose<any>(
  connect(mapStatetoProps, null),
  withAuthRedirect
)(Page_Cabinet)

// let AuthRedirectComponent = withAuthRedirect(Page_Cabinet)
    
// export default connect(mapStatetoProps, null)(AuthRedirectComponent);