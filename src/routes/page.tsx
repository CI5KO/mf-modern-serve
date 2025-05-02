import "./index.css";
import { useLoaderData } from "@modern-js/runtime/router";

export default function Index() {
  const data: any = useLoaderData();
  console.log(data);
  return (
    <div className="container mx-auto max-w-[1440px]">
      <div className="grid h-screen content-center justify-center">
        <h1 className="text-2xl text-center">
          {data.message || "No user found"}
        </h1>
      </div>
    </div>
  );
}
