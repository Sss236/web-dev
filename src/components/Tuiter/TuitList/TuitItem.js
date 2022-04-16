import {useDispatch} from "react-redux";
import {updateTuit, deleteTuit} from "../actions/tuits-actions";

const TuitListItem = ({ data }) => {
    const dispatch = useDispatch();
    const likeTuit = async () => {
        const updatedTuit = {
            ...data,
            likes:data.likes+1
        };
        await updateTuit(dispatch, updatedTuit);
    };
    const dislikeTuit = async () => {
        const updatedTuit = {
            ...data,
            dislikes:data.dislikes+1
        };
        await updateTuit(dispatch, updatedTuit);
    };
    return(
        <div className="row pt-1 border">
            <span className="text-decoration-none text-secondary"> Autor: {data.username}</span>
            <br/>
            <span className="text-decoration-none text-secondary"> {data.tuit}</span>
            <span className="text-decoration-none text-secondary" onClick={likeTuit}>
                <i className="fas fa-thumbs-up"/>
                <span className="ps-3">{data.likes}</span>
            </span>
            <span className="text-decoration-none text-secondary" onClick={dislikeTuit}>
                <i className="fas fa-thumbs-down"/>
                <span className="ps-3">{data.dislikes}</span>
            </span>
            <i onClick={() => deleteTuit(dispatch, data)} className="fas fa-times"/>
        </div>
    )
 };

export default TuitListItem;
