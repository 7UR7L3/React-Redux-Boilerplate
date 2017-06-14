import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUserActionMethod} from '../actions/index'


class UserList extends Component {

    renderList() {
        return this.props.users.map( (user) =>
        {
            return( <li
                        key={user.id}
                        onClick={() => this.props.selectUser(user)}
                    >
                        {user.first} {user.last}
                    </li> ); /// dank comment to fix sublime's js colouring; 
        });
    }

    render()
    { return (
        <ul>
            {this.renderList()}
        </ul>
    ); }

}

export default connect // this is the container to reduxify this component
(
    function( state ) // mapping state to props [ pass state to UserList ]; this is the data the component has
    {
        return  {
                    users: state.users
                };
    },
    function( dispatch ) // mapping dispatch to props [ pass actions to UserList ]; these are the actions the component has
    {
        return bindActionCreators
        (
            {
                selectUser: selectUserActionMethod
            },
            dispatch
        );
    }
)( UserList );
