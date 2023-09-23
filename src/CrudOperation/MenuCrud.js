import { Link } from "react-router-dom";

export default function CrudMenu(){
    return<>

    <Link to={'/read'}>read &nbsp;&nbsp;&nbsp;</Link>
    <Link to={'/create'}>create &nbsp;&nbsp;&nbsp;</Link>
    <Link to={'/UpdateUser'}> &nbsp;&nbsp;&nbsp;</Link>
    </>
}