import React from 'react';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import './Widgets.css';
function Widget() {
    const newsArticle=(heading,subtitle)=>{
       return(
        <div className="widgets__article">
        <div className="widgets__articleLeft">
            <FiberManualRecordIcon/>
        </div>
        <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
        </div>
    </div>
       )
    }
    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>
                    LinkedIn News
                </h2>
                <InfoIcon/>

            </div>
            {newsArticle("PAPA React is Back","Top news - 9099 readers")}
            {newsArticle("PAPA React is Back","Top news - 9099 readers")}
            {newsArticle("PAPA React is Back","Top news - 9099 readers")}
            {newsArticle("PAPA React is Back","Top news - 9099 readers")}

        </div>

    )
}

export default Widget
