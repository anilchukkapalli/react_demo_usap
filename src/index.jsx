import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';

// Basics 1: React Create Element & Render methods
// const elementFull = React.createElement(
//   'h1',
//   {className: 'greeting'},
//   'Hello, world!'
// );

// var elementBasic = (
//   <h1 className="greeting">
//     Hello, world!
//   </h1>
// );

// ReactDOM.render(
//   elementBasic,
//   document.getElementById('root'),
// );

// Basics 2: React Element & Props
// class Welcome extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// const element = <Welcome name="Anil" />;
// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );

// Basics 3: State & Lifecycle


// Bad clock: no state, non reusable
// function Clock(props) {
//   return (
//     <div>
//       <h1>Clock</h1>
//       <h2>It is {props.date.toLocaleTimeString()}.</h2>
//     </div>
//   );
// }

// function tick() {
//   ReactDOM.render(
//     <Clock date={new Date()} />,
//     document.getElementById('root')
//   );
// }

// setInterval(tick, 1000)

// Good Clock 1: Moved to class
// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {date: new Date()};
//   }

//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
// }

// ReactDOM.render(
//   <Clock />,
//   document.getElementById('root')
// );
// Good Clock 2: Adding life cycle methods
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    //runs after component has been rendered to DOM
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    // will tear down the component we used
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);


//----------------------------------------
// Advanced
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root'),
// );
// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
