import { useDispatch } from "react-redux";
import {Link} from 'react-router-dom';
import { deleteRecipe } from '../../actions/recipes';
import moment from 'moment';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export default function Recipe({ recipe }) {

    const { _id, title, selectedFile, createdAt } = recipe;
    const dispatch = useDispatch();

    function handleDelete() {
        dispatch(deleteRecipe(_id))
    };

    return (
        <div className="recipe-card">
            <DeleteForeverIcon onClick={handleDelete} className="delete-icon" />
            <div className="image-container">
                <img src={selectedFile} alt="" />
            </div>
            <Link className="recipe-title" to={`/${_id}`}>{title}</Link>
            <p>{moment(createdAt).fromNow()}</p>
        </div>
    )
};