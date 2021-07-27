import React from 'react';

import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { Accordion, AccordionSummary, AccordionDetails, Typography} from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';

import AddFilmForm from './AddFilmForm';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    heading: {
      fontSize: theme.typography.pxToRem(25),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }),
);

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
                <AccordionDetails>
                    <AddFilmForm />
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel2a-content"
                id="panel2a-header"
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
                aria-controls="panel2a-content"
                id="panel2a-header"
                >
                    <Typography className={classes.heading}>Добавить Администратора</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget.
                </Typography>
                </AccordionDetails>
            </Accordion>
        </>
    )

}

export default AdminBtns