
import { useLoaderData } from 'react-router-dom';
import User from './../../Component/UserShow/User';


const CardPage = () => {
    const userDataApi = useLoaderData();

    return (
        <div>
           <User user= {userDataApi}/>
        </div>
    );
};

export default CardPage;