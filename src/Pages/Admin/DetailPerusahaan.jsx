import CardLowongan from "../../component/Admin/CardLowongan";
import DetailP from "../../component/Admin/DetailP";
import HeadPage from "../../component/Admin/HeadPage";

const DetailPerusahaan = () =>
{
    return(
        <>
            <div className="card-admin flex flex-col gap-y-5 mb-5">
            <HeadPage>
                <HeadPage.Title>Detail Perusahaan</HeadPage.Title>
                {/* <HeadPage.SearchAdd></HeadPage.SearchAdd> */}
            </HeadPage>
            <DetailP>
                <DetailP.Logo>
                    <img src="/Img/RAS.png" className="w-[300px]" alt="" />
                </DetailP.Logo>
                <DetailP.Konten>
                    <h1 className="text-2xl mb-3">PT Lorem Ipsum</h1>
                    <p className="mb-2">Alamat :</p>
                    <p>Kontak :</p>
                </DetailP.Konten>
            </DetailP>
                <DetailP.Lowongan>
                    <CardLowongan></CardLowongan>
                </DetailP.Lowongan>
            </div>
        </>
    )
}

export default DetailPerusahaan;