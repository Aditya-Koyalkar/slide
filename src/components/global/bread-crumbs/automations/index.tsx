import { ChevronRight, PencilIcon } from "lucide-react";
import ActivateAutomationButton from "../../activate-automation-button";

type Props = {
  id: string;
};

const AutomationBreadCrumb = ({}: Props) => {
  return (
    <div className="rounded-full w-full p-5 bg-[#1818B11A] flex justify-between items-center">
      <div className="flex items-center gap-x-3 min-w-0">
        <p className="text-[#9B9CA0] truncate">Automations</p>
        <ChevronRight color="#9B9CA0" className="flex-shrink-0" />
        <span className="flex gap-x-3 items-center min-w-0">
          {/*  */}
          <p className="text-[#9B9CA0]">This is the automation title</p>
          <span className="cursor-pointer hover:opacity-75 duration-100 transition flex-shrink-0 mr-4">
            {" "}
            <PencilIcon size={14} />
          </span>
        </span>
      </div>
      <div className="flex gap-x-5 ml-auto">
        <p className="hidden md:block text-text-secondary/60 text-sm truncate min-w-0">All updates are automatically saved</p>
        <p className="text-text-secondary text-sm truncate min-w-0">Changes Saved</p>
        <p className="text-text-secondary text-sm truncate min-w-0">Undo | Redo</p>
      </div>
      <ActivateAutomationButton />
    </div>
  );
};

export default AutomationBreadCrumb;