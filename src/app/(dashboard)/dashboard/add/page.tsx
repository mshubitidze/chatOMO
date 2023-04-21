import AddFriendButton from "@/components/AddFriendButton";
import { FC } from "react";

interface PageProps {}

const Page: FC<PageProps> = ({}) => {
  return (
    <main className="pt-8">
      <h1 className="mb-8 text-5xl font-bold">Add a friend</h1>
      <AddFriendButton />
    </main>
  );
};

export default Page;
