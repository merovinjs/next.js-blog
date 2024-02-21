import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";

const Deneme = async () => {
  const data = await getServerSession(options);

  console.log(data);

  return <></>;
};

export default Deneme;
