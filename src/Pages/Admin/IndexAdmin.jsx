import Navbar from '../../component/Admin/Navbar'
import TopNavbar from '../../component/Admin/TopNavbar'

const IndexAdmin = () => {
  return (
    <>
      <div className="p-5 font-jura h-screen">
        <div className="grid grid-cols-12 h-fit">
          <div className="col-span-2 h-[calc(100vh-2.5rem)] sticky top-5">
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
