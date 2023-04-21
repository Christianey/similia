"use client";

import { FC, useState } from "react";
import Button from "./ui/Button";
import { signIn } from "next-auth/react";
import { toast } from "./ui/toast";

interface SignInButtonProps {}

const SignInButton: FC<SignInButtonProps> = ({}) => {
  const [isloading, setIsloading] = useState<boolean>(false);

  const signInWithGoogle = async () => {
    setIsloading(true);

    try {
      await signIn("google");
    } catch (error) {
      toast({
        title: "Error signing in",
        message: "Please try again",
        type: "error",
      });
    }
  };

  return (
    <Button onClick={signInWithGoogle} isLoading={isloading}>
      Sign In
    </Button>
  );
};

export default SignInButton;
