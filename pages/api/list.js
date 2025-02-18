import { connectDB } from "@/util/database";

export default async function GetData(request, response) {
  const db = (await connectDB).db("forum");
  let dataA = await db.collection("post").find().toArray();
  return response.status(200).json(dataA);
}
