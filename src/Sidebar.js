import React from 'react'
import './Sidebar.css'
import { Avatar } from '@material-ui/core'
function Sidebar() {
    const recentItem=(topic)=>(<div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>)
    
    return (
        <div className="sidebar">
           <div className="sidebar__top">
               <img src="https://source.unsplash.com/random/1920x1080/?wallpaper,landscape" alt=""/>
               <Avatar src=""/>
            <h2>Shreyas Kanchan</h2>

            <h4>kanchanshreyas@gmail.com</h4>
           </div>
           <div className="sidebar__stats">
               <div className="sidebar__stat">
                   <p>Who viewed you</p>
                   <p className="sidebar__statNumber">2,523</p>
               </div>
               <div className="sidebar__stat">
                    <p>Views on post</p>
                   <p className="sidebar__statNumber">2,448</p>
               </div>

           </div>
           <div className="sidebar__bottom">
               <p>Recent</p>
               {recentItem('reactjs')}
               {recentItem('programming')}
               {recentItem('softwareengineering')}
               {recentItem('design')}
               {recentItem('developer')}
               
           </div>
    
        </div>
    )
}

export default Sidebar
