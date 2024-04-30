import Card from "@/components/UI/Card";
import { Post } from "../../lib/dbConnect";
import HeroSection from "@/components/UI/heroSection";

export default function Home() {
  return (
    <main>
      <div className=" rounded-md w-[100%] bg-white  gap-6  m-auto   flex flex-col justify-center  items-center">
        <HeroSection />

        <h1 className=" font-semibold text-2xl">Recommended Courses</h1>
        <div class="grid grid-cols-1 md:grid-cols-3 p-3 gap-4">
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
      </div>
    </main>
  );
}
