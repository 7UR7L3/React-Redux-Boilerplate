import React, {Component} from 'react';
import {connect} from 'react-redux';

class UserDetail extends Component
{
    render()
    {
        if( !this.props.user ) // if there is no active user
            return (<div>Select a user...</div>); /// I think ima need this after every closing tag :/   gotta learn jsx sublime highlighting or whatever
        return (
            <div>
                <img src={this.props.user.thumbnail} />
                <h2>{this.props.user.first} {this.props.user.last}</h2>
                <h3>Age: {this.props.user.age}</h3>
                <h3>Description: {this.props.user.description}</h3>
            </div> ///
        );
    }
}

export default connect
(
    function( state ) // mapping state to props; apparently state.activeUser is set in reducers/index.js
    {
        return  {
                    user: state.activeUser
                };
    }
)( UserDetail );
