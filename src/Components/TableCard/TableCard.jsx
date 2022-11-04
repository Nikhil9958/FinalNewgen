import React from 'react'
import './TableCard.css'

const TableCard = (props) => {
    const headers = ['Precesion', 'Timestamp', 'Scheduling', 'AreaUnderROC', 'View_Type', 'giniCoefficient', 'AreaUnderPR']

    return (
        <div className='tableCard'>
            {headers.map(header => (
                <div className='tableData' style={{fontWeight:'100'}}>{props.data[header]}</div>
            ))}
        </div>
    )
}

export default TableCard