"use client";

import { FC, useState } from "react";
import Button from "./ui/Button";
import { signIn, signOut } from "next-auth/react";

interface SignOutButtonProps {}

const SignOutButton: FC<SignOutButtonProps> = ({}) => {
  const [isloading, setIsloading] = useState<boolean>(false);

  const signUserOut = async () => {
    setIsloading(true);
    try {
      await signOut();
    } catch (error) {
      toast({
        title: "Error signing out",
        message: "Please try again",
        type: "error",
      });
    }
  };

  return (
    <Button onClick={signUserOut} isLoading={isloading}>
      Sign Out
    </Button>
  );
};

export default SignOutButton;
