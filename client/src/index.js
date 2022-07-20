import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Header} from './header';

class Main extends React.Component{
  render(){
    return(
      <div>
        <Header/>
        <Content/>
      </div>
    );
  }
}

class Content extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: '',
      author: '',
      publish_date: '',
      edit_data:'',
      content:'',
      apiResponse: ''
    }
  }
  
  callAPI() {
    fetch("http://localhost:9000/testAPI")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }))
        .catch(err => err);
  }

  componentDidMount() {
    this.callAPI();
  }
  
  render(){
    const edit = () => {
      return this.state.edit_data ? <div className='edit_data'>Edited on:{this.state.edit_data}</div> : '';
    }
    return (
      <div>
        <h2 className='title'>{this.state.title}</h2>
        <div className='meta_data'>
          <div className='author'>By: {this.state.author}</div>
          <div className='publish_date'>On: {this.state.publish_date}</div>
          {edit()}
        </div>
        <div className='content'>
          here: {this.state.apiResponse}
        </div>
      </div>
    );
  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
