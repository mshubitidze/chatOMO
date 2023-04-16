"use client";

import axios from "axios";
import { CheckIcon, UserPlus, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, FC } from "react";

interface FriendRequestsProps {
  incomingFriendRequests: IncomingFriendRequest[];
  sessionId: string;
}

const FriendRequests: FC<FriendRequestsProps> = ({
  incomingFriendRequests,
  sessionId,
}) => {
  const router = useRouter();
  const [friendRequests, setFriendRequests] = useState<IncomingFriendRequest[]>(
    incomingFriendRequests
  );

  const acceptFriend = async (senderId: string) => {
    await axios.post("/api/friends/accept", {
      id: senderId,
    });

    setFriendRequests((prev) =>
      prev.filter((request) => request.senderId !== senderId)
    );

    router.refresh();
  };

  const denyFriend = async (senderId: string) => {
    await axios.post("/api/friends/deny", {
      id: senderId,
    });

    setFriendRequests((prev) =>
      prev.filter((request) => request.senderId !== senderId)
    );

    router.refresh();
  };

  return (
    <>
      {friendRequests.length === 0 ? (
        <p className="text-sm text-zinc-500">Nothing to show here...</p>
      ) : (
        friendRequests.map((request) => (
          <div key={request.senderId} className="flex gap-4 items-center">
            <UserPlus className="text-black" />
            <p className="text-lg font-medium">{request.senderEmail}</p>
            <button
              aria-label="accept friend"
              className="grid place-items-center w-8 h-8 bg-indigo-600 rounded-full transition hover:bg-indigo-700 hover:shadow-md"
              onClick={() => acceptFriend(request.senderId)}
            >
              <CheckIcon className="w-3/4 h-3/4 font-semibold text-white" />
            </button>
            <button
              aria-label="deny friend"
              className="grid place-items-center w-8 h-8 bg-red-600 rounded-full transition hover:bg-red-700 hover:shadow-md"
              onClick={() => denyFriend(request.senderId)}
            >
              <X className="w-3/4 h-3/4 font-semibold text-white" />
            </button>
          </div>
        ))
      )}
    </>
  );
};

export default FriendRequests;
