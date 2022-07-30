import React from 'react'

const Modal = props => {
    return (
        <div className ="modal">
            <div className ="modal-content">
                <div className ="modal-header">
                    <h4 className ="modal-title">Notification !</h4>
   </div>
   <div className="modal-body">
    Are you sure you want to delete?
    </div>
    <div className = "modal-footer">
    <button className ="button" onClick >Delete</button> 
        <button className ="button">Close</button>
        </div>
        </div>
        </div> 
    )
}
export default  Modal