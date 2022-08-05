import React from 'react'

const Modal = props => {
    if (!props.show) {
        return null
    }
    return (
        <div className ="modal">
            <div className ="modal-content">
                <div className ="modal-header">
                    <h4 className ="modal-title">Notification!</h4>
   </div>
   <div className="modal-body">
    Are you sure you want to delete?
    </div>
    <div className = "modal-footer">
    <button className ="modal-button">Delete</button> 
    <div className="space"></div>
        <button className ="modal-button">Close</button>
        </div>
        </div>
        </div> 
    )
}
export default  Modal