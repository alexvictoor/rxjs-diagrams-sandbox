import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'rxjs' // This imports all observables, operators, etc
import { Observable } from 'rxjs'
import { ChainDiagram, OperatorDiagram } from 'rxjs-diagrams'

// Somewhere in your components...


class App extends Component {
  render() {

    const emissions = [
      { x: 5, d: 10 },
      { x: 35, d: 23 },
      { x: 45, d: 7 },
      { x: 70, d: 42 }
    ]

    return (
          <div>          
            <ChainDiagram 
              end={100}
              completion={100} >
            
              <OperatorDiagram
                label="filter( value => value < 10 )"
                emissions={emissions}
                transform={
                  obs => obs.filter(x => x < 10)
                }             
              />
              
              <OperatorDiagram
                label="flatMap(value => range(0, value))"
                emissions={emissions}
                transform={
                  (obs, scheduler) => obs.flatMap(x => Observable.interval(5, scheduler).take(x))
                }             
              />
            </ChainDiagram>
          </div>
       
    );
  }
}

export default App;
