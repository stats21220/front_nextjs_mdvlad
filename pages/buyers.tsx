import { Buyers } from "../layout/Buyers/Buyers";
import { withLayout } from "../layout/Layout";

function PageCompany() {
  return (
    <>
      <Buyers/>
    </>
  );
}

export default withLayout(PageCompany);
