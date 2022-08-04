import { useNavigate, useParams } from "react-router-dom";
import { deleteUser, getUser } from "../users";

const User = () => {
    const params = useParams();
    const navigate = useNavigate();

    const user = getUser(parseInt(params.userId));

    const handleReturn = () => {
        navigate("/users");
    };
    const handleDelete = () => {
        deleteUser(user.id);
        navigate("/users");
    }

    return(
        <div>
            <h2>{user.name}</h2>
            <hr/>
            <strong>Phone: </strong><br/> {user.phone}
            <strong>Website: </strong> {user.website}
            <hr/>

            <button onClick={handleReturn}>Regresar</button>
            <button onClick={handleDelete}>Eliminar Usuario</button>

        </div>
    );
}
export default User;