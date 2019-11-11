import React, { Component } from "react";

const stepTitle = ["Personal Info", "Restaurant", "Menu", "Service", "Photos","Getting Paid","Terms"]

export default class Stepper extends Component {
    
    render() {
        return (
            <div className="stepper-container">
                {
                    stepTitle.map((title,index)=>{
                        return(
                            <span key={index}>
                                <div className={`stepper ${this.props.step === index+1 ? "active" : ""}`}>
                                    <span className="number">{index + 1}</span>
                                    <span className="text">{title}</span>
                                </div>    
                                {index !== stepTitle.length-1 && <div className="separator"/>}
                            </span>
                        )
                    })
                }
            </div>
        )
    }
}