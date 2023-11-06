import Navbar from '../../component/Admin/Navbar'
import TopNavbar from '../../component/Admin/TopNavbar'

const IndexAdmin = () => {
  return (
    <>
      <div className="p-5 font-jura">
        <div className="grid grid-cols-12">
          <div className="col-span-2">
            <Navbar />
          </div>
          <div className="col-span-10">
            <TopNavbar />
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexAdmin;
