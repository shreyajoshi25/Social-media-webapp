import React from 'react'
import "./rightBar.scss"

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span className='bold'>Suggestions for You</span>
          <hr />
          <div className="user">
            <div className="userInfo">
              <img src="https://media.licdn.com/dms/image/D4E03AQEtpEmW1OWfng/profile-displayphoto-shrink_800_800/0/1667319071310?e=2147483647&v=beta&t=k8SL_mApYLwX13cKc7OsHTeUlXyqzibx5PGwyvxeGHs" alt="" />
              <span>Jane Doe</span>
            </div>
            <div className="buttons">
              <span>Follow</span>
              <span>Dismiss</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://media.licdn.com/dms/image/D4E03AQEtpEmW1OWfng/profile-displayphoto-shrink_800_800/0/1667319071310?e=2147483647&v=beta&t=k8SL_mApYLwX13cKc7OsHTeUlXyqzibx5PGwyvxeGHs" alt="" />
              <span>Jane Doe</span>
            </div>
            <div className="buttons">
              <span>Follow</span>
              <span>Dismiss</span>
            </div>
          </div>
        </div>

        <div className="item">
          <span className='bold'>Latest Activities</span>
          <hr />

          <div className="user">
            <div className="userInfo">
              <img src="https://media.licdn.com/dms/image/D4E03AQEtpEmW1OWfng/profile-displayphoto-shrink_800_800/0/1667319071310?e=2147483647&v=beta&t=k8SL_mApYLwX13cKc7OsHTeUlXyqzibx5PGwyvxeGHs" alt="" />
              <p>
                <span>Jane Doe </span>
                changed their profile picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src="https://media.licdn.com/dms/image/D4E03AQEtpEmW1OWfng/profile-displayphoto-shrink_800_800/0/1667319071310?e=2147483647&v=beta&t=k8SL_mApYLwX13cKc7OsHTeUlXyqzibx5PGwyvxeGHs" alt="" />
              <p>
                <span>Jane Doe </span>
                changed their profile picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src="https://media.licdn.com/dms/image/D4E03AQEtpEmW1OWfng/profile-displayphoto-shrink_800_800/0/1667319071310?e=2147483647&v=beta&t=k8SL_mApYLwX13cKc7OsHTeUlXyqzibx5PGwyvxeGHs" alt="" />
              <p>
                <span>Jane Doe </span> 
                changed their profile picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src="https://media.licdn.com/dms/image/D4E03AQEtpEmW1OWfng/profile-displayphoto-shrink_800_800/0/1667319071310?e=2147483647&v=beta&t=k8SL_mApYLwX13cKc7OsHTeUlXyqzibx5PGwyvxeGHs" alt="" />
              <p>
                <span>Jane Doe </span> 
                changed their profile picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>

        <div className="item">
          <span className='bold'>Online Friends</span>
          <hr />
          <div className="user">
            <div className="userInfo">
              <img src="https://media.licdn.com/dms/image/D4E03AQEtpEmW1OWfng/profile-displayphoto-shrink_800_800/0/1667319071310?e=2147483647&v=beta&t=k8SL_mApYLwX13cKc7OsHTeUlXyqzibx5PGwyvxeGHs" alt="" />
              <div className="online"/>
              <span>Jane Doe </span> 
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://media.licdn.com/dms/image/D4E03AQEtpEmW1OWfng/profile-displayphoto-shrink_800_800/0/1667319071310?e=2147483647&v=beta&t=k8SL_mApYLwX13cKc7OsHTeUlXyqzibx5PGwyvxeGHs" alt="" />
              <div className="online"/>
              <span>Jane Doe </span> 
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://media.licdn.com/dms/image/D4E03AQEtpEmW1OWfng/profile-displayphoto-shrink_800_800/0/1667319071310?e=2147483647&v=beta&t=k8SL_mApYLwX13cKc7OsHTeUlXyqzibx5PGwyvxeGHs" alt="" />
              <div className="online"/>
              <span>Jane Doe </span> 
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://media.licdn.com/dms/image/D4E03AQEtpEmW1OWfng/profile-displayphoto-shrink_800_800/0/1667319071310?e=2147483647&v=beta&t=k8SL_mApYLwX13cKc7OsHTeUlXyqzibx5PGwyvxeGHs" alt="" />
              <div className="online"/>
              <span>Jane Doe </span> 
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://media.licdn.com/dms/image/D4E03AQEtpEmW1OWfng/profile-displayphoto-shrink_800_800/0/1667319071310?e=2147483647&v=beta&t=k8SL_mApYLwX13cKc7OsHTeUlXyqzibx5PGwyvxeGHs" alt="" />
              <div className="online"/>
              <span>Jane Doe </span> 
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightBar