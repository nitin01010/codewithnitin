import Card from "@/components/UI/Card";
import { Post } from "../../lib/dbConnect";

export default function Home() {
  return (
    <main className=" p-2">
      <div className=" rounded-md w-[100%] gap-6 md:w-[70%] m-auto p-2  flex flex-col justify-center  items-center">
        {
          Post.map((ItemPost) => {
            return (
              <div key={ ItemPost.id }>
                <Card data={ ItemPost } />
              </div>
            )
          })
        }
      </div>
    </main>
  );
}
