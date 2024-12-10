"use client";
import { usePaths } from "@/hooks/use-nav";
import { LogoSmall } from "@/svgs/logo-small";
import Items from "./Items";
import { Separator } from "@/components/ui/separator";
import ClerkAuthState from "../clerk-auth-state";
import { HelpDuoToneWhite } from "@/icons";
import UpgradeCard from "./upgrade";
import { SubscriptionPlan } from "../subscription-plan";

type Props = {
  slug: string;
};

const Sidebar = ({ slug }: Props) => {
  const { page, pathname } = usePaths();
  return (
    <div className="w-[250px] border-[1px] radial fixed left-0 hidden lg:inline-block border-[#545454] bg-gradient-to-b from-[#7688DD] via-[#171717] to-[#7688DD] bottom-0 top-0 m-3 rounded-3xl overflow-hidden">
      <div className="flex flex-col gap-y-5 w-full h-full p-3 bg-[#0e0e0e] bg-opacity-90 bg-clip-padding backdrop-filter backdrop--blur__safari backdrop-blur-3xl">
        <div className="flex gap-x-2 items-center p-5 justify-center">
          <LogoSmall />
        </div>
        <div className="flex flex-col gap-y-5 w-full">
          <Items slug={slug} page={page} />
        </div>
        <div className="px-16">
          <Separator orientation="horizontal" className="bg-[#898989]" />
        </div>
        <div className="px-3 flex flex-col gap-y-5">
          <div className="flex gap-x-2">
            <ClerkAuthState />
            <p className="text-[#989CA0]">Profile</p>
          </div>
          <div className="flex gap-x-3">
            <HelpDuoToneWhite />
            <p className="text-[#989CA0]">Help</p>
          </div>
        </div>
        <SubscriptionPlan type="FREE">
          <div className="flex  justify-center flex-1 items-end">
            <UpgradeCard />
          </div>
        </SubscriptionPlan>
      </div>
    </div>
  );
};

export default Sidebar;
