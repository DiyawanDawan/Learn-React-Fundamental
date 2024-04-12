import React from 'react';

export default class ConterApp extends React.Component {
    constructor(props) {
        super(props)
        // console.log('Component create');
        this.state = {
            count: 0
        };
    }
    onClickEvenHeadler() {
        this.setState((perviesState) => {
            return {
                count: perviesState.count + 1
            }
        })
    }
    onResetHeadler() {
        this.setState(() => {
            return {
                const: 0,
            }
        })
        // console.log('say');
    }
    render() {
        return (
            <div>
                <IncrementsButton increase={this.onClickEvenHeadler.bind(this)}></IncrementsButton>
                <CounterDisplay count={this.state.count}></CounterDisplay>
                <ResetButton reset={this.onResetHeadler.bind(this)} />
            </div>
        )

    }
}

function CounterDisplay({ count }) {
    if (count === 0) {
        return <p>{count}</p>;
      }
     
      if (count % 5 === 0 && count % 7 === 0) {
        return <p>FizzBuzz</p>;
      }
     
      if (count % 5 === 0) {
        return <p>Fizz</p>;
      }
     
      if (count % 7 === 0) {
        return <p>Buzz</p>;
      }
     
      return <p>{count}</p>;
}

function IncrementsButton({ increase }) {
    return (
        <div>
            <button onClick={increase}>+ increase</button>
        </div>
    )
}

function ResetButton({ reset }) {
    return (
        <div>
            <button onClick={reset}>- reset</button>
        </div>
    )
}