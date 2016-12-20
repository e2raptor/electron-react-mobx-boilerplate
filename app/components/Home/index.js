// @flow
import React, { Component } from 'react';
import { Button } from 'react-desktop/macOs';
import { ipcRenderer, remote } from 'electron';
import { Link } from 'react-router';
// import  store from '../../store';
import { observer } from "mobx-react";
import styles from './style.css';

@observer(["users"])
export default class Home extends Component {

    openNewWindow(){ 
       console.log("Opening a new window"); 
       ipcRenderer.send('open','new')  
    }

  render(){
    let users = this.props.users.list
    let usersList = users.map((u) => { 
        return <li key={u.id}>{u.name}</li>}
     )
    return (
      <ul>
       {usersList}
      </ul>
    );
  }
}
