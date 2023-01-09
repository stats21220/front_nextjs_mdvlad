
import { withLayout } from "../layout/Layout";
import { Provider } from "../layout/Provider/Provider";

function PageProvider() {
  return (
    <>
      <Provider/>
    </>
  );
}

export default withLayout(PageProvider);
