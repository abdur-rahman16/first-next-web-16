import React from "react";
import Link from "next/link";

export default async function Products() {
  const fetchData = await fetch(
    "https://657c3d02853beeefdb98fa7c.mockapi.io/posts"
  );
  const res = await fetchData.json();
  console.log(res);
  return (
    <div className="bg-blue-400">
      <h3 className="text-3xl px-5 text-center font-bold py-4">Products Page</h3>
      <ol className="grid grid-cols-4 gap-4 ">
        {res.map((item: any, i: number) => {
          return (
            <div>
              <div className="bg-blue-300 rounded-xl px-10 font-semibold text-xl p-2 hover:bg-blue-400 cursor-pointer">
                <Link href={`products/${item.id}`}>{item.title}</Link>
              </div>
            </div>
          );
        })}
      </ol>
    </div>
  );
}
