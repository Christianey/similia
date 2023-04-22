import { FC } from "react";
import LargeHeading from "@/ui/LargeHeading";
import Paragraph from "@/ui/Paragraph";
import DocumentationTabs from "@/components/DocumentationTabs";
import "simplebar-react/dist/simplebar.min.css"

export const metadata = {
  title: "Similia | Docmuntation",
  description: "Free and open source text similarity API",
};

const Documentation: FC = ({}) => {
  return (
    <div className="container max-w-7xl mx-auto mt-12">
      <div className="flex flex-col items-center gap-6">
        <LargeHeading>Making a request</LargeHeading>
        <Paragraph>api/v1/similia</Paragraph >
        <DocumentationTabs />
      </div>
    </div>
  );
};

export default Documentation;
