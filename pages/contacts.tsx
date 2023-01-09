
import { Contacts } from "../layout/Contacts/Contacts";
import { withLayout } from "../layout/Layout";

function PageContacts() {
  return (
    <>
      <Contacts/>
    </>
  );
}

export default withLayout(PageContacts);
