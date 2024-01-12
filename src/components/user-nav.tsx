"use client";

import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";

interface UserNavProps {
  logout: () => void;
}

export function UserNav({ logout }: UserNavProps) {
  // Using the useSession hook from next-auth to get user session data.
  const { data: session }: any = useSession();

  // Function to generate a random color for AvatarFallback background.
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // State to manage the fallback color, retrieving from localStorage or generating a new one
  const [fallbackColor, setFallbackColor] = useState<string | null>(() => {
    const storedColor = localStorage.getItem("fallbackColor");
    return storedColor || getRandomColor();
  });

  // Effect to update localStorage with the current fallbackColor whenever it changes
  useEffect(() => {
    localStorage.setItem("fallbackColor", fallbackColor || "");
  }, [fallbackColor]);

  return (
    <div className="bg-[#0A0A0A] flex items-center justify-start space-x-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className="h-9 w-9">
            {/* AvatarImage displaying the user's profile image. */}
            <AvatarImage alt={`@${session?.user.name}`} src={`${session?.user.image}`} />
            {/* AvatarFallback as a fallback with a random background color. */}
            <AvatarFallback style={{ backgroundColor: fallbackColor || '#777' }}>
              {session?.user.name ? session.user.name.charAt(0).toUpperCase() : ''}
            </AvatarFallback>
            {/* A visually hidden span for accessibility, indicating the purpose of the avatar. */}
            <span className="sr-only">Toggle user menu</span>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-[#0A0A0A] w-56">
          {/* Displaying the user's name in the dropdown. */}
          <DropdownMenuLabel className="text-white">{session?.user.name}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="text-gray-300" disabled>
            Dashboard
          </DropdownMenuItem>
          <DropdownMenuItem className="text-white cursor-pointer" onClick={() => logout()}>
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
