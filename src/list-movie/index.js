import React, { Component } from 'react'
import Movie from './movie'
import { actFetchListMovie } from "./../store/list-movie/action"
import { connect } from "react-redux";

export class ListMovie extends Component {
    componentDidMount() {
        this.props.fetchData();
    }

    renderListMovie = () => {
        const { data, loading } = this.props;
        if(loading) return <div>Loading...</div>;
        if (data && data.length > 0) {
            return data?.map((movie, index) => <Movie key={movie.maPhim} movie={movie} />)
        }
    }


    render() {
        return (
            <div className="container">
                <h3>ListMovie</h3>
                <div className="row">{this.renderListMovie()} </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.listMovieReducer.loading,
        data: state.listMovieReducer.data,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => {       //props
            dispatch(actFetchListMovie());
        },
    };
};
 
export default connect(mapStateToProps, mapDispatchToProps) (ListMovie);
