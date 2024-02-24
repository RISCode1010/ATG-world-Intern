import { users } from "../../data/users";
import List from "./List";

const UserList = () => {
  return (
    <ul className="d-flex flex-column gap-2 p-0">
      {users.map((user, i) => {
        return <List key={i} user={user} />;
      })}
    </ul>
  );
};

export default UserList;
