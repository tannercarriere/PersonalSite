import React from 'react';

function Bar(props){
    return <div className='menu-icon'/>
  }

function Menu(props){
  return (
      <div className="icon-holder">
        <Bar/>
        <Bar/>
        <Bar/>
      </div>
  );
}

export class Header extends React.Component {
  render() {
    return (
    <div>
      <Menu />
      <div className='header'>
        <h1 className="name">
        CLMR
        </h1>
      </div>
    </div>
    );
  }
}