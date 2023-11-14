import CardLowongan from '../../component/Alumni/CardLowongan';

const AlumniLowongan = () => {
  return (
    <>
      <div className="container-full">
        <h1 className='text-center font-jura font-bold text-3xl m-10'>LOWONGAN</h1>
        <div class="grid grid-cols-2 gap-4 mx-4 my-7">
            <CardLowongan/>
            <CardLowongan/>
            <CardLowongan/>
            <CardLowongan/>
        </div>
      </div>
    </>
  );
};

export default AlumniLowongan;
