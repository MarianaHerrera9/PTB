import React, { useState, useEffect } from "react";
import data from "../../data/sample.json";
import ".././Series/Series.css"; 
import {useDispatch, useSelector} from 'react-redux';
import { setSeries, setPopupData } from "../../redux/reducers/series";
import Error from "../Error/Error";
import Loading from "../Loading/Loading";
const Series = () => {
    
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const series = useSelector(state => state.series.series);

    useEffect(() => {
        const fetchData = async () => {
        try{
        const filteredSeries = data.entries
            .filter(entry => entry.releaseYear >= 2010 && entry.programType === "series")
            .sort((a, b) => a.title.localeCompare(b.title))
            .slice(0, 20);

        dispatch(setSeries(filteredSeries));
        setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
};

fetchData();
}, [dispatch]); 
if(loading){
    return <Loading/>
}
if(error) {
return <Error/>
}

    return (
        <div>
            <nav className="bar2">
                <a className="title2">Popular Series</a>
            </nav>
            <div>
                <div className="movies-container">
                    {series.map(series => (
                        <div key={series.title} className="movie-container" onClick={() => dispatch(setPopupData(series))}>
                            <img src={series.images["Poster Art"].url} alt={series.title} className="movie-image"/>
                            <div className="mouse-positon">
                                <h2>{series.title}</h2>
                                <p>{series.description}</p>
                                <p>Release Year: {series.releaseYear}</p>
                            </div>
                            <h2>{series.title}</h2>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Series;
