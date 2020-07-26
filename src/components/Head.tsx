import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { changeState, chageSmth } from "../_actions/head";
import { HeadActionTypes } from "../_types/actions";
import { AppState } from "../_store/storeConf";

interface LinkStateProps {
    sstate: string,
    color: string
}

interface LinkDispatchProps {
    changeState: (sstate: string) => HeadActionTypes,
    chageSmth: (color: string) => HeadActionTypes,
}

class Head extends React.Component<LinkStateProps, LinkDispatchProps> {

    render() {
        return (
            <div >

            </div>
        );
    }
}

const mapStateToProps = (state: AppState): LinkStateProps => {
    return {
        sstate: state.head.sstate,
        color: state.head.color,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): LinkDispatchProps => ({
    changeState: (sstate: string) => dispatch(changeState(sstate)),
    chageSmth: (color: string) => dispatch(chageSmth(color))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Head);