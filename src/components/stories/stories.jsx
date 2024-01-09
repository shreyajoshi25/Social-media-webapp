import React, {useContext} from 'react'
import "./stories.scss"
import { AuthContext } from '../../context/authContext'


const Stories = () => {

    const {currentUser} = useContext(AuthContext);
    const stories = [
        {
            id: 1,
            name: "Shreya Joshi",
            img: "https://images.unsplash.com/photo-1580483046931-aaba29b81601?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cnVzc2lhbiUyMGdpcmx8ZW58MHx8MHx8fDA%3D"
        },
        {
            id: 2,
            name: "Aayushi",
            img: "https://i.pinimg.com/236x/69/2e/97/692e97e9d913b09254001379878ba65a.jpg" 
        },
        {
            id: 3, 
            name: "Shaurya Joshi", 
            img: "https://static1.bigstockphoto.com/3/3/7/large1500/733460.jpg"
        },
        {
            id: 4,
            name: "Harshit",
            img: "https://c.stocksy.com/a/yWDJ00/z9/4580248.jpg" 
        }
    ]

  return (
    <div className="stories">
        <div className="story">
            <img src={currentUser.profilePicture} alt="" />
            <span>{currentUser.name}</span>
            <button>+</button>
        </div>
        {stories.map(story => (
            <div className="story" key={story.id}>
                <img src={story.img} alt="" />
                <span>{story.name}</span>
            </div>
        ))}
    </div>
  )
}

export default Stories