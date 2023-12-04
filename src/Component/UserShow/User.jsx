
import UserShow from './UserShow';
import "./User.css"
const User = ({user}) => {
    console.log(user)
    return (
        <div>
            <div className="container">
              <div className="inner-flex">
              {
                    user.map((value,index)=>{
                        return(
                            <div key={index.toString()} className="main">
                                <UserShow sendData = {value}/>
                            </div>
                        )
                    })
                }
              </div>
            </div>
        </div>
    );
};

export default User;