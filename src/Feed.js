import React from 'react'
import './Feed.css';
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionIcon from '@material-ui/icons/Subscription';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';


import InputOption from './InputOption';
export const Feed = () => {
    return (
        <div className="feed">
           <div className="feed__inputContainer">
               <div className="feed__input">
                   <CreateIcon/>
                   <form action="">
                       <input type="text"/>
                       <button type="submit">Send</button>
                   </form>
               </div>
               <div className="feed__inputOptions">
                   {/* <InputOption Icon={ImageIcon} title='Photo' color="#70B5F9"/>
                   <InputOption Icon={SubscriptionIcon} title='Video' color="#EC7A3E"/>
                   <InputOption Icon={EventNoteIcon} title='Event' color="#C0CBCD"/> */}
                   {/* <InputOption Icon={CalendarViewDayIcon} title='Write article' color="#79C15E"/> */}

               </div>
           </div>
        </div>
    )
}
export default Feed;