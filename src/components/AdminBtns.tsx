import React from 'react';

import { Theme, createStyles, makeStyles, withStyles } from '@material-ui/core/styles';
import { Accordion, AccordionSummary, Typography} from '@material-ui/core';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import { ExpandMore } from '@material-ui/icons';

import AddFilmForm from './AddFilmForm';
import AddAdminForm from './AddAdminForm';
import ChangeFilmBase from  './ChangeFilmBase'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    heading: {
      fontSize: theme.typography.pxToRem(25),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }),
);

const AccordionDetails = withStyles((theme) => ({
    root: {
      flexDirection: "column" ,
      padding: theme.spacing(2),
    },
  }))(MuiAccordionDetails);

const AdminBtns:React.FC = () => {

    const classes = useStyles();

    return (
        <>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                    <Typography  className={classes.heading}>Добавить фильм</Typography>
                </AccordionSummary>
                <AccordionDetails >
                    <AddFilmForm/>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                >
                    <Typography  className={classes.heading}>Редактировать базу фильмов</Typography>
                </AccordionSummary>
                <AccordionDetails >
                    <ChangeFilmBase />
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel3a-content"
                id="panel3a-header"
                >
                    <Typography className={classes.heading}>Добавить кинотеатр</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget.
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel4a-content"
                id="panel4a-header"
                >
                    <Typography className={classes.heading}>Добавить Администратора</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <AddAdminForm />
                </AccordionDetails>
            </Accordion>
        </>
    )

}

export default AdminBtns