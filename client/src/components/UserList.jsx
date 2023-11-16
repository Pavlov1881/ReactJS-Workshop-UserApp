import Search from "./Search";
import UserListTable from "./UserListTable";

const UserList = () => {

    return (

        <section className="card users-container">

            <Search></Search>

            <UserListTable></UserListTable>
        </section>

    );
};

export default UserList;