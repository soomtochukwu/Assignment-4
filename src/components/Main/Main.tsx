import * as Tabs from "@radix-ui/react-tabs";
import { CreateLottery } from "./CreateLottery/CreateLottery";
import { Participant } from "./Participant/Participant";
import "./Main.css";

const Main = () => {
  return (
    <div className="Main">
      <Tabs.Root
        defaultValue="tab1"
        className="flex tab flex-col w-[560px] shadow-[0_2px_10px] rounded-md shadow-black/50"
      >
        <Tabs.List
          className="flex tab-title border-b border-gray-600 shrink-0"
          aria-label="Interact with Ethers.js"
        >
          <Tabs.Trigger
            id="Create"
            className="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-gray-700 select-none first:rounded-tl-md last:rounded-tr-md hover:text-purple-700 data-[state=active]:text-purple-700 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black outline-none cursor-default"
            value="tab1"
          >
            Create Participant
          </Tabs.Trigger>
          <Tabs.Trigger
            id="Participant"
            className="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-gray-700 select-none first:rounded-tl-md last:rounded-tr-md hover:text-purple-700 data-[state=active]:text-purple-700 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black outline-none cursor-default"
            value="tab2"
          >
            Participant
          </Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content
          className="grow  p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
          value="tab1"
        >
          <CreateLottery />
        </Tabs.Content>

        <Tabs.Content
          className="grow p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
          value="tab2"
        >
          <Participant />
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
};

export { Main };
