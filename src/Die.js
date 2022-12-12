import React from "react"

export default function Die (props) {

    const styles = {
        background: props.isHeld ? "#59E391" : "white"
    } 

    return(
        <div className="number-container" style={styles} onClick={props.onClick}><p>{props.value}</p></div>
    )
}