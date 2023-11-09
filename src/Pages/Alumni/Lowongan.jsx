import CardLowongan from '../../component/Alumni/CardLowongan';
import Footer from '../../component/Alumni/Footer';
import Navbar from '../../component/Alumni/Navbar';

const AlumniLowongan = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="container-full">
        <h1 className='text-center font-jura font-bold text-3xl m-10'>LOWONGAN</h1>
        <div class="grid grid-cols-2 gap-4 mx-4 my-7">
            <CardLowongan/>
            <CardLowongan/>
            <CardLowongan/>
            <CardLowongan/>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default AlumniLowongan;
