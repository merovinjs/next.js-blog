import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";

const Deneme = async () => {
  const session = await getServerSession(options);
  const {
    user: { email },
  } = session;
  console.log(email);

  return <></>;
};

export default Deneme;
