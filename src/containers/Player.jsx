import React, { useEffect } from "react";
import  { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import { getVideoSource } from "../actions";
import '../assets/styles/components/Player.scss';

const Player = (props) => {
    const { id } = props.match.params;
    const hasPlaying = Object.keys(props.playing).lenght > 0;

    useEffect(() => {
        props.getVideoSource(id);
    },[]);

  return (
    <div className="Player">
      <video controls autoPlay>
        <source src={props.playing.source} type="video/mp4" />
      </video>
      <div className="Player-back">
          <button type="button" onClick={() => props.history.goBack()}>
              Regresar
          </button>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
    return {
        playing: state.playing,
    }
}

const mapDispatchToProps = {
    getVideoSource,
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);
