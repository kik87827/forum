import { connectDB } from "@/util/database";
import { MongoClient } from "mongodb";

export default async function Home() {
  const client = await connectDB;
  const db = client.db("forum");
  let dataA = await db.collection("post").find().toArray();
  return <>page 안녕</>;
}
