import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import { useHttp } from "../hooks/http.hook";
import { setMovies } from '../redux/actionsMovie';
import { AppStateType } from '../redux/rootReducer';

import Card from './Card'
import Loading from './Loading';
import { FilmFormType } from './AddFilmForm';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: '#363a40'
    },
  }),
);

const CardsList:React.FC<any> = (props) => {

    const classes = useStyles();
    
    const {loading, request, error, clearError}  = useHttp();

    useEffect(() => {
        if (props.movieData === null ) showMoviesHandler()
    }, [props.movieData])

    const showMoviesHandler = async () => {
        try {
            const data = await request('/api/movie/getAllMovies', 'GET')
            props.setMovies(JSON.parse(JSON.stringify(data)))
            clearError()
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <>
        <Grid spacing={0} container className={classes.root}>
            {loading ? 
                <Loading/> :
                (props.movieData && props.movieData.map((v:{id:string, data: FilmFormType}) => (
                    <Grid key={v.id} item xs={12} sm={6} md={4} lg={3} xl={2}> 
                        <Card title={v.data.movieTitle} id={v.id} image={v.data.cardImg}/>
                    </Grid>
                )))
            }
        </Grid>
        </>
    )

}

const mapStatetoProps  = (state:AppStateType) => {
    return {
      movieData: state.movie.moviesArr
    }
}

const mapDispatchToProps = {
    setMovies
}

export default connect(mapStatetoProps , mapDispatchToProps)(CardsList)

// export default CardsList