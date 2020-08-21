import React, {Component} from 'react';
import {Portfolio} from './Portfolio/Portfolio';
import './App.css';
import { about } from '../constants/About';
import {skills} from './../constants/Skills';
import {projects} from "./../constants/Projects";

export class App extends Component {
  constructor (){
    super();
    this.state={
      selectedSection:"",
      selectedHeading:"",
      selectedQuote:"",
      about:null,
      skills:null,
      projects:null
    };

  }
  componentDidMount()
  {
    this.setState({
      about,skills,projects,
      selectedHeading:about.heading,
      selectedQuote:about.quote,
      selectedSection:"about"
    });
  }
  handleSectionClick=(selectionName)=>{
    this.setState({
      selectedHeading:this.state[selectionName].heading,
      selectedQuote:this.state[selectionName].quote,
      selectedSection:selectionName
    });
  }
  render()
  {
    return(
      <div className="App">
      <Portfolio 
      about={this.state.about}
      skills={this.state.skills}
      projects={this.state.projects}
      selectedHeading={this.state.selectedHeading}
      selectedQuote={this.state.selectedQuote}
      selectedSection={this.state.selectedSection}
      handleSectionClick={this.handleSectionClick}
      />
      </div>
    );
  }
}

export default App;
