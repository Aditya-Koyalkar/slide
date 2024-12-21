import { Button } from "@/components/ui/button";
import { ActiveAutomation } from "@/icons/active-automation";
import Loader from "../loader";

type Props = {};

const ActivateAutomationButton = ({}: Props) => {
  return (
    <Button className="lg:px-10 bg-gradient-to-br hover:opacity-80 text-white rounded-full from-[#3352CC] font-medium to-[#1C2D70] ml-4">
      <Loader state={false}>
        <ActiveAutomation />
      </Loader>
    </Button>
  );
};

export default ActivateAutomationButton;