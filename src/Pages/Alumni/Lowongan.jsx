import CardLowongan from '../../component/Alumni/CardLowongan';
import Footer from '../../component/Alumni/Footer';
import Navbar from '../../component/Alumni/Navbar';

const AlumniLowongan = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="container-full">
        <h1 className='text-center'>LOWONGAN</h1>
        <CardLowongan/>
      </div>
    </>
  );
};

export default AlumniLowongan;
