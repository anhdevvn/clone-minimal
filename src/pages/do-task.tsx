import { Helmet } from "react-helmet-async";
import { DoTaskView } from "src/sections/do-task/view";

export default function DotaskPage() { 
  return (<>
    <Helmet>
        <title>Do task</title>
    </Helmet>
    <DoTaskView />
  </>)
}
