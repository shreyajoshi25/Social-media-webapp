import React, { useContext } from 'react'
import { AuthContext } from '../../context/authContext';
import "./comments.scss"

const Comments = () => {
    const {currentUser} = useContext(AuthContext);
    const comments = [
        {
            id:1,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore vitae doloremque suscipit, magnam ipsam quidem, reiciendis esse delectus qui dignissimos a. Impedit iure recusandae reiciendis sit officiis iste corrupti ex",
            name: "John Doe",
            userId: 1,
            profilePicture: "https://evolve2023.in/wp-content/uploads/2014/10/speaker-3.jpg"
        },
        {
            id:2,
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem animi necessitatibus tempora quidem amet, illo saepe fugit voluptate magnam fuga recusandae iste dolor corporis excepturi, totam enim impedit. Saepe, eos",
            name: "Shreya Joshi",
            userId: 2,
            profilePicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZJNNh7a2Ux_Dmo9kmP07dcXLpKhyLk5AbKw&usqp=CAU"
        }

    ];

  return (
    <div className="comments">
        <div className="write">
            <img src={currentUser.profilePicture} alt="" />
            <input type="text" placeholder="Write a comment"/>
            <button>Send</button>
        </div>
        {comments.map(comment => (
            <div className="comment">
                <img src={comment.profilePicture} alt="" />
                <div className="info">
                    <span>{comment.name}</span>
                    <p>{comment.desc}</p>
                </div>
                <span className="date">1 hour ago</span>
            </div>
        ))}
    </div>
  )
}

export default Comments