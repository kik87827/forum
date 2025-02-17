import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import React from "react";

export default async function Detail({ params }) {
  const db = (await connectDB).db("forum");
  let dataDetail = await db
    .collection("post")
    .findOne({ _id: new ObjectId(params.id) });
  return (
    <div>
      <h4>상세페이지</h4>
      <h5>{dataDetail.date}</h5>
      <p>{dataDetail.content}</p>
    </div>
  );
}
