import React from 'react';

class NumberRows extends React.Component {

    render() {
        const { number, onAddSelectClick, onRemoveSelectClick, isSelected, isLockSelected} = this.props;

        return (
            <tr >
                <td>{ number }</td>
                <td>
                    <button className={`btn btn-${isSelected ? 'danger': 'primary'} ${isLockSelected ? 'disabled' : ''}`} 
                    onClick={isSelected ? onRemoveSelectClick : onAddSelectClick} >
                        {isSelected ? 'Remove from Selected' : 'Add to Selected'}
                    </button>
                </td>
            </tr>
        )
    }
}

export default NumberRows;