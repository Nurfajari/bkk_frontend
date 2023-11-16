import { IconSearch } from "@tabler/icons-react";
import HeadPage from "../../component/Admin/HeadPage";

const IndexAdmin = () => {
  return (
    <>
      <div className="card-admin font-jura">
        <HeadPage>
          <HeadPage.Title>Dashboard</HeadPage.Title>
          <HeadPage.SearchAdd></HeadPage.SearchAdd>
        </HeadPage>
      </div>
    </>
  );
};

export default IndexAdmin;
