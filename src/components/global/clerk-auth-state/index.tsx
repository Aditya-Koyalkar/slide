import { ClerkLoading, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { User } from "lucide-react";
import Loader from "../loader/index";
import { Button } from "@/components/ui/button";

type Props = {};

const ClerkAuthState = ({}: Props) => {
  return (
    <div>
      <ClerkLoading>
        <Loader state>
          <></>
        </Loader>
      </ClerkLoading>
      <SignedOut>
        <SignInButton>
          <Button className="rounded-xl text-white hover:bg-[#252525]/70">
            <User />
            Login
          </Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton>
          <UserButton.UserProfileLink label="Dashboard" url="/dashboard" labelIcon={<User size={16} />} />
        </UserButton>
      </SignedIn>
    </div>
  );
};
export default ClerkAuthState;
