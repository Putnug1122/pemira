import { useRouter } from 'next/router';
import { mockdata } from '../components/Berita/Mockdata';


export default function DetailBerita() {
    const router = useRouter();
    const { beritaId } = router.query;

  // Ambil data berita berdasarkan beritaId
  const berita = mockdata.find((article) => article.id === parseInt(beritaId as string));

  return (
    <div>
      <h1>{berita?.title}</h1>
      <p>{berita?.date}</p>
      <img src={berita?.image} alt={berita?.title} />
      <p>{berita?.excerpt}</p>
      {/* Tampilkan informasi berita lainnya */}
    </div>
  );
}
