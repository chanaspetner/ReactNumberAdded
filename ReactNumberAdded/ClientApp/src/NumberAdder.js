import React from 'react';
import NumberRows from './NumberRows';
import NumbersSelected from './NumbersSelected';
import { produce } from 'immer';

class NumberAdder extends React.Component {
    state = {
        numbers: [],
        selectedNumbers: [],
        lockedNumbers: []
    }

    generateRandomNumber = max => {
        return Math.floor(Math.random() * max);
    }

    onAddClick = () => {
       const number = this.generateRandomNumber(1001);

       const newState = produce(this.state, draftState => {
        draftState.numbers.push(number);
    });

        this.setState(newState);
    }

    onAddSelectClick = n => {

        const newState = produce(this.state, draftState => {
            draftState.selectedNumbers.push(n);
        });

        this.setState(newState);
    }

    onRemoveSelectClick = n => {
        const selectedNumbers = this.state.selectedNumbers.filter(nu => nu !== n);
        this.setState({ selectedNumbers });
    }

    onLockSelectedClick = n => {
        const newState = produce(this.state, draftState => {
            draftState.lockedNumbers.push(n);
        });

        this.setState(newState);
    }

    onUnlockSelectedClick = n => {
        const lockedNumbers = this.state.lockedNumbers.filter(nu => nu !== n);
        this.setState({ lockedNumbers });
    }

    isSelected = n => {
        const { selectedNumbers } = this.state;
        return selectedNumbers.some(nu => nu === n);
    }

    isLockSelected = n => { 
        const { lockedNumbers } = this.state;
        return lockedNumbers.some(nu => nu === n);
    }

    render() {
        return (
            <div className='container mt-5'>
                <button className='btn btn-block btn-success' onClick={this.onAddClick}>Add</button>
                <table className='table table-hover table-striped table-bordered'>
                    <thead>
                        <tr>
                            <th>Number</th>
                            <th>Add/Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.numbers.map((n, i) => {
                            return <NumberRows
                                onAddSelectClick={() => this.onAddSelectClick(n)}
                                onRemoveSelectClick={() => this.onRemoveSelectClick(n)}
                                number={n}
                                isSelected={this.isSelected(n)}
                                isLockSelected={this.isLockSelected(n)}
                                key={i} />
                        })
                        }
                    </tbody>
                </table>
                <ul className='list-group'>
                        {this.state.selectedNumbers.map((n, i) => {
                            return <NumbersSelected
                                number={n}
                                key={i}
                                isLockSelected={this.isLockSelected(n)}
                                onLockSelectedClick={() => this.onLockSelectedClick(n)}
                                onUnlockSelectedClick={() => this.onUnlockSelectedClick(n)}
                            />
                        })
                        }
                </ul>
            </div>
        );

    }
}

export default NumberAdder;