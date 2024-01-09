import React from 'react'
import "./posts.scss"
import Post from '../post/post'


const Posts = () => {

  const posts = [
    {
      id: 1,
      name: "John Doe",
      userId: 1,
      profilePic: "https://evolve2023.in/wp-content/uploads/2014/10/speaker-3.jpg",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio excepturi incidunt eligendi tenetur cumque reiciendis dolores similique dignissimos, natus eum cum officiis error delectus blanditiis totam doloremque minus provident eaque.",
      img: "https://images.unsplash.com/photo-1533577254044-3c2b4b31183c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJ8ZW58MHx8MHx8fDA%3D"
    },
    {
      id: 2,
      name: "Shreya Joshi",
      userId: 1,
      profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZJNNh7a2Ux_Dmo9kmP07dcXLpKhyLk5AbKw&usqp=CAU",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio excepturi incidunt eligendi tenetur cumque reiciendis dolores similique dignissimos, natus eum cum officiis error delectus blanditiis totam doloremque minus provident eaque.",
      img: "https://images.unsplash.com/photo-1580483046931-aaba29b81601?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cnVzc2lhbiUyMGdpcmx8ZW58MHx8MHx8fDA%3D"
    },
  ]
  return (
    <div className="posts">
      {posts.map(post => (
        <Post post={post} key={post.id}/>
      ))}
    </div>
  )
}

export default Posts