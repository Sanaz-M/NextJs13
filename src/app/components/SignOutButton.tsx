"use client"

import { FC, useState } from 'react';
import { signOut } from 'next-auth/react';

import Button from '@/ui/Button';

interface SignOutButtonProps {

}

const SignOutButton: FC<SignOutButtonProps> = ({ }) => {
  const [isLoading, setIsLoading] = useState<Boolean>(false);

  const signUserOut = async () => {
    setIsLoading(true);

    try {
      await signOut();
    } catch (error) {
      // toast({
      //   title: 'Error signing out',
      //   message: "Please try again later!",
      //   type: 'error',
      // })
    }
  }

  return (
    <Button onClick={signUserOut}>Sign Out</Button>
  );
}

export default SignOutButton;