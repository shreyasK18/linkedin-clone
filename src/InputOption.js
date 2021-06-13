import React from 'react'
import { Icon } from '@material-ui/core'

const InputOption = ({Icon,title,color}) => {
    return (
        <div className="inputOption">
            <Icon style={{color:color}}/>
            <h4>{title}</h4>
        </div>
    )
}

export default InputOption
