import { Company } from "../layout/Company/Company";
import { withLayout } from "../layout/Layout";

function PageCompany() {
  return (
    <>
      <Company/>
    </>
  );
}

export default withLayout(PageCompany);
