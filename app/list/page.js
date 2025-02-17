import React from "react";
import { connectDB } from "@/util/database";
import Link from "next/link";
import DetailLink from "./DetailLink";

export default async function List() {
  const db = (await connectDB).db("forum");
  let dataA = await db.collection("post").find().toArray();
  return (
    <div className="list-bg">
      {dataA.map((item) => (
        <div className="list-item" key={item._id.toString()}>
          <h4>
            <Link prefetch={false} href={"/detail/" + item._id.toString()}>
              {item.title}
            </Link>
            {/* <DetailLink url={"/detail/" + item._id.toString()}>
              {item.title}
            </DetailLink> */}
          </h4>
          <p>{item.date}</p>
        </div>
      ))}
    </div>
  );
}
