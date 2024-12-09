import { PAGE_BREAD_CRUMBS } from "@/constants/pages";
import { usePaths } from "@/hooks/use-nav";
import Sheet from "../sheets";
import { Menu } from "lucide-react";
import Items from "../sidebar/Items";
import { Separator } from "@/components/ui/separator";
import ClerkAuthState from "../clerk-auth-state";
import { HelpDuoToneWhite } from "@/icons";
import UpgradeCard from "../sidebar/upgrade";
import { LogoSmall } from "@/svgs/logo-small";

type Props = {
  slug: string;
};

const NavBar = ({ slug }: Props) => {
  const { page } = usePaths();
  const currentPage = PAGE_BREAD_CRUMBS.includes(page) || page == slug;
  return (
    currentPage && (
      <div className="flex flex-col">
        <div className="flex gap-x-3 lg:gap-x-5 justify-end">
          <span className="lg:hidden flex items-center flex-1 gap-x-2">
            <Sheet side="left" trigger={<Menu />} className="lg:hidden">
              <div className="flex flex-col gap-y-5 w-full h-full p-3">
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
                <div className="flex  justify-center flex-1 items-end">
                  <UpgradeCard />
                </div>
              </div>
            </Sheet>
          </span>
        </div>
      </div>
    )
  );
};

export default NavBar;
