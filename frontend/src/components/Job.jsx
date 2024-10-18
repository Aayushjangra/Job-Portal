import { Bookmark } from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";

const Job = () => {
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100">

    <div className="flex items-center justify-between">
    <p className="text-sm text-gray-500 ">2 days ago</p>
      <Button variant="outline" className="rounded-full" size="icon">
        <Bookmark />
      </Button>
    
    </div>
      

      <div className="flex items-center gap-2 my-2">
        <Button className="p-6" variant="outline" size="icon">
          <Avatar>
            <AvatarImage src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg" />
          </Avatar>
        </Button>
        <div>
        <h1 className="font-medium text-lg">company Name</h1>
        <p className="text-sm text-gray-500">India</p>
        
        </div>
        
      </div>
      <div>
      <h1 className="font-bold text-lg my-2 ">Title</h1>
      <p className="text-sm text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, possimus! Aperiam, ipsam! Nemo, labore!</p>
      </div>
      <div className="flex items-center gap-2 mt-4">
      <Badge className="text-[#c1395d] font-bold " variant="ghost">
          12 Position
        </Badge>
        <Badge className="text-[#406ec9] font-bold " variant="ghost">
          Part Time
        </Badge>
        <Badge className="text-[#7d631e] font-bold " variant="ghost">
          24LPA
        </Badge>
      </div>
      <div className="flex items-center gap-4 mt-4">
      <Button variant="outline">Details</Button>
      <Button className="bg-[#406ec9]">Save for later</Button>
      
      
      </div>
     
    </div>
  );
};

export default Job;
