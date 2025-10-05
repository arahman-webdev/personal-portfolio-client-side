"use client";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";

interface ProfileOpenProps {
  name?: string;
  role?: string;
  MyDashboard?: string;
  logout: () => void;
}

export function ProfileOpen({
  name,
  role,
  logout,
}: ProfileOpenProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="text-sm font-medium">
          {name || "Profile"}
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-60 p-4">
        <div className="flex flex-col gap-3 text-sm">
          <div className="flex flex-col">
            <span className="font-semibold">{name}</span>
            {role && (
              <span className="text-gray-500 text-xs uppercase">
                {role}
              </span>
            )}
          </div>

          <hr className="my-2 border-gray-200" />

          <Link
            href={`/dashboard`}
            className="text-indigo-600 hover:underline"
          >
            My Dashboard
          </Link>

          <Button
            onClick={logout}
            className="bg-red-500 text-white w-full hover:bg-red-600"
          >
            Logout
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
