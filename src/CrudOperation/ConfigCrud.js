import { Route, Routes } from "react-router";
import CreateUser from "./CrudCreate";
import ReadUsers from "./CrudRead";
import UpdateUser from "./CrudUpdate";

export default function RouteConfig(){
    return<>
    <Routes>
        <Route path="/read" element={<ReadUsers></ReadUsers>}></Route>
        <Route path="/create" element={<CreateUser></CreateUser>}></Route>
        <Route path="UpdateUser" element={<UpdateUser></UpdateUser>}></Route>
    </Routes>
    </>
}