import { getUser } from "@/lib/data";

const AuthorDetails = async ({ userId }) => {
  const user = await getUser(userId)

  return (
      <div className="flex space-x-2">
        <span className="font-bold">Author:</span>
        <span>{user.username}</span>
      </div>
  );
};

export default AuthorDetails;