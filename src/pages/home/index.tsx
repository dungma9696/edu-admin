import Reason from "./component/reason/index,";
import Collaborate from "./component/collaborate";
import Feature from "./component/features";
import Feedback from "./component/feedback";
import Hero from "./component/hero";
import Integration from "./component/integration";
import MoreFeature from "./component/more-feature";
import Pricing from "./component/pricing";

export default function Home() {
  return (
    <div>
      <Hero />
      <Reason />
      <Feature />
      <MoreFeature />
      <Collaborate />
      <Integration />
      <Feedback />
      <Pricing />
    </div>
  );
}
