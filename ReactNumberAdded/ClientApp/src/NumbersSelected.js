import React from 'react';

class NumbersSelected extends React.Component{
    render(){
        const {number, isLockSelected, onLockSelectedClick, onUnlockSelectedClick} = this.props;
        return(
            <li className='list-group-item'>
                {number}
                <button className='btn ml-3 btn-primary' onClick={isLockSelected ? onUnlockSelectedClick : onLockSelectedClick}>
                    {isLockSelected ? 'Unlock' : 'Lock'}</button>
            </li>
        );
    }
}

export default NumbersSelected;