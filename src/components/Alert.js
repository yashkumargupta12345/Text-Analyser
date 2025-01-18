import React from 'react'

function Alert(props) {
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1) + "!";
    }

  return (
    <div className="container" style={{height: "50px", border: "1px solid transparent"}}>
      {props.alert && 
      <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert" style={{width: "100%"}}>
          <strong>{capitalize(props.alert.type)}</strong> {props.alert.msg}
      </div> }   
    </div>  
  )
}

export default Alert
