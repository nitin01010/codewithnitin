import Card from "@/components/UI/Card";
import { Post } from "../../lib/dbConnect";

export default function Home() {
  return (
    <main className=" p-2">
      <div className=" bg-slate-200 rounded-md w-[100%] gap-6 md:w-[70%] m-auto p-2  flex flex-col justify-center  items-center">
        {
          Post.map((ItemPost) => {
            return (
              <Card data={ ItemPost } />
            )
          })
        }
      </div>
    </main>
  );
}
