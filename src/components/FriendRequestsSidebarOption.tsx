"use client";

import { User } from "lucide-react";
import Link from "next/link";
import { FC, useState } from "react";

interface FriendRequestsSidebarOptionsProps {
  sessionId: string;
  initialUnseenRequestCount: number;
}

const FriendRequestsSidebarOptions: FC<FriendRequestsSidebarOptionsProps> = ({
  sessionId,
  initialUnseenRequestCount,
}) => {
  const [unseenRequestCount, setUnseenRequestCount] = useState<number>(
    initialUnseenRequestCount
  );

  return (
    <Link
      href="/dashboard/requests"
      className="flex gap-x-3 items-center p-2 text-sm font-semibold leading-6 text-gray-700 rounded-md hover:text-indigo-600 hover:bg-gray-50 group"
    >
      <div className="flex justify-center items-center w-6 h-6 font-medium text-gray-400 bg-white rounded-lg border border-gray-200 group-hover:text-indigo-600 group-hover:border-indigo-600 shrink-0 text-[0.625rem]">
        <User className="w-4 h-4" />
      </div>
      <p className="truncate">Friend requests</p>
      {unseenRequestCount > 0 ? (
        <div className="flex justify-center items-center w-5 h-5 text-xs text-white bg-indigo-600 rounded-full">
          {unseenRequestCount}
        </div>
      ) : null}
    </Link>
  );
};

export default FriendRequestsSidebarOptions;
