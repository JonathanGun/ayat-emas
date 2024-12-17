import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import slinger from "../images/slinger.webp";
import bg from "../images/bg.png";

type Scripture = {
  verse: string;
  text: string;
};

function hashStringToIndex(s: string, n: number): number {
  let hash = 0;

  for (let i = 0; i < s.length; i++) {
    hash = (hash * 31 + s.charCodeAt(i)) % 0x7fffffff;
  }

  return Math.abs(hash) % n;
}

const scriptures: Scripture[] = [
  {
    verse: "1 Petrus 5:7",
    text: "Serahkanlah segala kekuatiranmu kepada-Nya, sebab Ia yang memelihara kamu.",
  },
  {
    verse: "1 Tesalonika 5:18",
    text: "Mengucap syukurlah dalam segala hal, sebab itulah yang dikehendaki Allah di dalam Kristus Yesus bagi kamu.",
  },
  {
    verse: "1 Timotius 4:12",
    text: "Jangan seorangpun menganggap engkau rendah karena engkau muda. Jadilah teladan bagi orang-orang percaya, dalam perkataanmu, dalam tingkah lakumu, dalam kasihmu, dalam kesetiaanmu dan dalam kesucianmu.",
  },
  {
    verse: "1 Yohanes 1:9",
    text: "Jika kita mengaku dosa kita, maka Ia adalah setia dan adil, sehingga Ia akan mengampuni segala dosa kita dan menyucikan kita dari segala kejahatan.",
  },
  {
    verse: "1 Yohanes 2:23",
    text: "Sebab barangsiapa menyangkal Anak, ia juga tidak memiliki Bapa. Barangsiapa mengaku Anak, ia juga memiliki Bapa.",
  },
  {
    verse: "1 Yohanes 5:12",
    text: "Barangsiapa memiliki Anak, ia memiliki hidup; barangsiapa tidak memiliki Anak, ia tidak memiliki hidup.",
  },
  {
    verse: "1 Yohanes 1:5",
    text: "Dan inilah berita, yang telah kami dengar dari Dia, dan yang kami sampaikan kepada kamu: Allah adalah terang dan di dalam Dia sama sekali tidak ada kegelapan.",
  },
  {
    verse: "1 Yohanes 4:4",
    text: "Kamu berasal dari Allah, anak-anakku, dan kamu telah mengalahkan nabi-nabi palsu itu; sebab Roh yang ada di dalam kamu, lebih besar dari pada roh yang ada di dalam dunia.",
  },
  {
    verse: "1 Yohanes 4:7",
    text: "Saudara-saudaraku yang kekasih, marilah kita saling mengasihi, sebab kasih itu berasal dari Allah; dan setiap orang yang mengasihi, lahir dari Allah dan mengenal Allah.",
  },
  {
    verse: "2 Korintus 4:18",
    text: "Sebab kami tidak memperhatikan yang kelihatan, melainkan yang tak kelihatan, karena yang kelihatan adalah sementara, sedangkan yang tak kelihatan adalah kekal.",
  },
  {
    verse: "2 Korintus 5:17",
    text: "Jadi siapa yang ada di dalam Kristus, ia adalah ciptaan baru: yang lama sudah berlalu, sesungguhnya yang baru sudah datang.",
  },
  {
    verse: "2 Timotius 3:16",
    text: "Segala tulisan yang diilhamkan Allah memang bermanfaat untuk mengajar, untuk menyatakan kesalahan, untuk memperbaiki kelakuan dan untuk mendidik orang dalam kebenaran.",
  },
  {
    verse: "Amsal 10:11",
    text: "Harta yang cepat diperoleh akan berkurang, tetapi siapa mengumpulkan sedikit demi sedikit, menjadi kaya.",
  },
  {
    verse: "Amsal 10:12",
    text: "Kebencian menimbulkan pertengkaran, tetapi kasih menutupi segala pelanggaran.",
  },
  {
    verse: "Amsal 10:4",
    text: "Tangan yang lamban membuat miskin, tetapi tangan orang rajin menjadikan kaya.",
  },
  {
    verse: "Amsal 12:27",
    text: "Orang malas tidak akan menangkap buruannya, tetapi orang rajin akan memperoleh harta yang berharga.",
  },
  {
    verse: "Amsal 12:9",
    text: "Kekuatiran dalam hati membungkukkan orang, tetapi perkataan yang baik menggembirakan dia.",
  },
  {
    verse: "Amsal 17:22",
    text: "Hati yang gembira adalah obat yang manjur, tetapi semangat yang patah mengeringkan tulang.",
  },
  {
    verse: "Amsal 18:10",
    text: "Nama TUHAN adalah menara yang kuat, ke sanalah orang benar berlari dan ia menjadi selamat.",
  },
  {
    verse: "Amsal 28:5",
    text: "Orang yang jahat tidak mengerti keadilan, tetapi mencari TUHAN mengerti segala sesuatu.",
  },
  {
    verse: "Amsal 3:5-6",
    text: "Percayalah kepada TUHAN dengan segenap hatimu, dan janganlah bersandar kepada pengertianmu sendiri. Akuilah Dia dalam segala lakumu, maka Ia akan meluruskan jalanmu.",
  },
  {
    verse: "Amsal 4:23",
    text: "Jagalah hatimu dengan segala kewaspadaan, karena dari situlah terpancar kehidupan.",
  },
  {
    verse: "Ayub 5:17",
    text: "Sesungguhnya, berbahagialah manusia yang ditegur Allah; sebab itu janganlah engkau menolak didikan Yang Mahakuasa.",
  },
  {
    verse: "Ayub 42:2",
    text: "Aku tahu, bahwa Engkau sanggup melakukan segala sesuatu, dan tidak ada rencana-Mu yang gagal.",
  },
  {
    verse: "Efesus 4:2",
    text: "Hendaklah kamu selalu rendah hati, lemah lembut, dan sabar. Tunjukkanlah kasihmu dalam hal saling membantu.",
  },
  {
    verse: "Efesus 5:20",
    text: "Ucaplah syukur senantiasa atas segala sesuatu dalam nama Tuhan kita Yesus Kristus kepada Allah dan Bapa kita.",
  },
  {
    verse: "Efesus 6:1",
    text: "Hai anak-anak, taatilah orang tuamu di dalam Tuhan, karena haruslah demikian.",
  },
  {
    verse: "Efesus 6:2-3",
    text: "Hormatilah ayahmu dan ibumu-ini adalah suatu perintah yang penting, seperti yang nyata dari janji ini: Supaya kamu berbahagia dan panjang umurmu di bumi.",
  },
  {
    verse: "Efesus 2:8-9",
    text: "Sebab karena kasih karunia kamu diselamatkan oleh iman; itu bukan hasil usahamu, tetapi pemberian Allah, 9 itu bukan hasil pekerjaanmu: jangan ada orang yang memegahkan diri.",
  },
  {
    verse: "Filipi 1:21",
    text: "Karena bagiku hidup adalah Kristus dan mati adalah keuntungan.",
  },
  {
    verse: "Filipi 4:4",
    text: "Bersukacitalah senantiasa dalam Tuhan! Sekali lagi kukatakan: Bersukacitalah!",
  },
  {
    verse: "Kejadian 12:2",
    text: "Aku akan membuat engkau menjadi bangsa yang besar, dan memberkati engkau serta membuat namamu masyhur; dan engkau akan menjadi berkat.",
  },
  {
    verse: "Kejadian 2:24",
    text: "Sebab itu seorang laki-laki akan meninggalkan ayahnya dan ibunya dan bersatu dengan isterinya, sehingga keduanya menjadi satu daging.",
  },
  {
    verse: "Kejadian 3:15",
    text: "Aku akan mengadakan permusuhan antara engkau dan perempuan ini, antara keturunanmu dan keturunannya; keturunannya akan meremukkan kepalamu, dan engkau akan meremukkan tumitnya.",
  },
  {
    verse: "Keluaran 20:12",
    text: "Hormatilah ayahmu dan ibumu, supaya lanjut umurmu di tanah yang diberikan TUHAN, Allahmu, kepadamu.",
  },
  {
    verse: "Kisah Para Rasul 1:8",
    text: "Tetapi kamu akan menerima kuasa, kalau Roh Kudus turun ke atas kamu, dan kamu akan menjadi saksi-Ku di Yerusalem dan di seluruh Yudea dan Samaria dan sampai ke ujung bumi.",
  },
  {
    verse: "Kolose 3:13",
    text: "Sabarlah kamu seorang terhadap yang lain, dan ampunilah seorang akan yang lain apabila yang seorang menaruh dendam terhadap yang lain, sama seperti Tuhan telah mengampuni kamu, kamu perbuat jugalah demikian.",
  },
  {
    verse: "Kolose 3:20",
    text: "Hai anak-anak, taatilah orang tuamu dalam segala hal, karena itulah yang indah di dalam Tuhan.",
  },
  {
    verse: "Kolose 3:23",
    text: "Apapun juga yang kamu perbuat, perbuatlah dengan segenap hatimu seperti untuk Tuhan dan bukan untuk manusia.",
  },
  {
    verse: "Lukas 12:31-32",
    text: "Tetapi carilah Kerajaan-Nya, maka semuanya itu akan ditambahkan juga kepadamu. Janganlah takut, hai kamu kawanan kecil! Karena Bapamu telah berkenan memberikan kamu Kerajaan itu.",
  },
  {
    verse: "Lukas 14:11",
    text: "Sebab barangsiapa meninggikan diri, ia akan direndahkan dan barangsiapa merendahkan diri, ia akan ditinggikan.",
  },
  {
    verse: "Matius 11:28",
    text: "Marilah kepada-Ku, semua yang letih lesu dan berbeban berat, Aku akan memberi kelegaan kepadamu.",
  },
  {
    verse: "Matius 11:29",
    text: "Pikullah kuk yang Kupasang dan belajarlah pada-Ku, karena Aku lemah lembut dan rendah hati dan jiwamu akan mendapat ketenangan.",
  },
  {
    verse: "Matius 19:6",
    text: "Demikianlah mereka bukan lagi dua, melainkan satu. Karena itu, apa yang telah dipersatukan Allah, tidak boleh diceraikan manusia.",
  },
  {
    verse: "Matius 21:22",
    text: "Dan apa saja yang kamu minta dalam doa dengan penuh kepercayaan, kamu akan menerimanya.",
  },
  {
    verse: "Matius 24:35",
    text: "Langit dan bumi akan berlalu, tetapi perkataan-Ku tidak akan berlalu.",
  },
  {
    verse: "Matius 26:41",
    text: "Berjaga-jagalah dan berdoalah, supaya kamu jangan jatuh ke dalam pencobaan: roh memang penurut, tetapi daging lemah.",
  },
  {
    verse: "Matius 28:19",
    text: "Karena itu pergilah, jadikanlah semua bangsa murid-Ku dan baptislah mereka dalam nama Bapa dan Anak dan Roh Kudus.",
  },
  {
    verse: "Matius 5:10",
    text: "Berbahagialah orang yang dianiaya oleh sebab kebenaran, karena merekalah yang empunya Kerajaan Sorga.",
  },
  {
    verse: "Matius 5:13",
    text: "Kamu adalah garam dunia. Jika garam itu menjadi tawar, dengan apakah ia diasinkan? Tidak ada lagi gunanya selain dibuang dan diinjak orang.",
  },
  {
    verse: "Matius 5:14",
    text: "Kamu adalah terang dunia. Kota yang terletak di atas gunung tidak mungkin tersembunyi.",
  },
  {
    verse: "Matius 5:16",
    text: "Demikianlah hendaknya terangmu bercahaya di depan orang, supaya mereka melihat perbuatanmu yang baik dan memuliakan Bapamu yang di sorga.",
  },
  {
    verse: "Matius 5:3",
    text: "Berbahagialah orang yang miskin di hadapan Allah, karena merekalah yang empunya Kerajaan Sorga.",
  },
  {
    verse: "Matius 5:4",
    text: "Berbahagialah orang yang berdukacita, karena mereka akan dihibur.",
  },
  {
    verse: "Matius 5:44",
    text: "Tetapi Aku berkata kepadamu: Kasihilah musuhmu dan berdoalah bagi mereka yang menganiaya kamu.",
  },
  {
    verse: "Matius 5:5",
    text: "Berbahagialah orang yang lemah lembut, karena mereka akan memiliki bumi.",
  },
  {
    verse: "Matius 5:6",
    text: "Berbahagialah orang yang lapar dan haus akan kebenaran, karena mereka akan dipuaskan.",
  },
  {
    verse: "Matius 5:7",
    text: "Berbahagialah orang yang murah hatinya, karena mereka akan beroleh kemurahan.",
  },
  {
    verse: "Matius 5:8",
    text: "Berbahagialah orang yang suci hatinya, karena mereka akan melihat Allah.",
  },
  {
    verse: "Matius 5:9",
    text: "Berbahagialah orang yang membawa damai, karena mereka akan disebut anak-anak Allah.",
  },
  {
    verse: "Matius 6:22",
    text: "Mata adalah pelita tubuh. Jika matamu baik, teranglah seluruh tubuhmu.",
  },
  {
    verse: "Matius 6:33",
    text: "Tetapi carilah dahulu Kerajaan Allah dan kebenarannya, maka semuanya itu akan ditambahkan kepadamu.",
  },
  {
    verse: "Matius 6:34",
    text: "Sebab itu janganlah kamu kuatir akan hari besok, karena hari besok mempunyai kesusahannya sendiri. Kesusahan sehari cukuplah untuk sehari.",
  },
  {
    verse: "Matius 6:4",
    text: "Hendaklah sedekahmu itu diberikan dengan tersembunyi,maka Bapamu yang melihat yang tersembunyi akan membalasnya kepadamu.",
  },
  {
    verse: "Matius 7:7",
    text: "Mintalah, maka akan diberikan kepadamu; carilah, maka kamu akan mendapat; ketoklah, maka pintu akan dibukakan bagimu.",
  },
  {
    verse: "Mazmur 119:105",
    text: "Firman-Mu itu pelita bagi kakiku dan terang bagi jalanku.",
  },
  {
    verse: "Mazmur 46:2",
    text: "Allah itu bagi kita tempat perlindungan dan kekuatan, sebagai penolong dalam kesesakan sangat terbukti.",
  },
  {
    verse: "Mazmur 71:5",
    text: "Sebab Engkaulah harapanku, ya Tuhan, kepercayaanku sejak masa muda, ya ALLAH.",
  },
  {
    verse: "Mazmur 96:8",
    text: "Berilah kepada TUHAN kemuliaan nama-Nya, bawalah persembahan dan masuklah ke pelataran-Nya!",
  },
  {
    verse: "Mazmur 1:1-2",
    text: "Berbahagialah orang yang tidak berjalan menurut nasihat orang fasik, yang tidak berdiri di jalan orang berdosa, dan yang tidak duduk dalam kumpulan pencemooh, tetapi yang kesukaannya ialah Taurat TUHAN, dan yang merenungkan Taurat itu siang dan malam.",
  },
  {
    verse: "Mazmur 23:1",
    text: "TUHAN adalah gembalaku, takkan kekurangan aku.",
  },
  {
    verse: "Mazmur 27:1",
    text: "TUHAN adalah terangku dan keselamatanku, kepada siapakah aku harus takut? TUHAN adalah benteng hidupku, terhadap siapakah aku harus gemetar?",
  },
  {
    verse: "Mazmur 55:23",
    text: "Serahkanlah kuatirmu kepada TUHAN, maka Ia akan memelihara engkau! Tidak untuk selama-lamanya dibiarkan-Nya orang benar itu goyah.",
  },
  {
    verse: "Mazmur 73:26",
    text: "Sekalipun dagingku dan hatiku habis lenyap, gunung batuku dan bagianku tetaplah Allah selama-lamanya.",
  },
  {
    verse: "Roma 10:13",
    text: "Sebab, barangsiapa yang berseru kepada nama Tuhan, akan diselamatkan.",
  },
  {
    verse: "Roma 10:9",
    text: "Sebab jika kamu mengaku dengan mulutmu, bahwa Yesus adalah Tuhan, dan percaya dalam hatimu, bahwa Allah telah membangkitkan Dia dari antara orang mati, maka kamu akan diselamatkan.",
  },
  {
    verse: "Roma 12:20",
    text: "Tetapi, jika seterumu lapar, berilah dia makan; jika ia haus, berilah dia minum! Dengan berbuat demikian kamu menumpukkan bara api di atas kepalanya.",
  },
  {
    verse: "Roma 3:23",
    text: "Karena semua orang telah berbuat dosa dan telah kehilangan kemuliaan Allah.",
  },
  {
    verse: "Roma 6:23",
    text: "Sebab upah dosa ialah maut; tetapi karunia Allah ialah hidup yang kekal dalam Kristus Yesus, Tuhan kita.",
  },
  {
    verse: "Roma 8:28",
    text: "Kita tahu sekarang, bahwa Allah turut bekerja dalam segala sesuatu untuk mendatangkan kebaikan bagi mereka yang mengasihi Dia, yaitu bagi mereka yang terpanggil sesuai dengan rencana Allah.",
  },
  {
    verse: "Yakobus 2:26",
    text: "Sebab seperti tubuh tanpa roh adalah mati, demikian jugalah iman tanpa perbuatan-perbuatan adalah mati.",
  },
  {
    verse: "Yakobus 1:22",
    text: "Tetapi hendaklah kamu menjadi pelaku firman dan bukan hanya pendengar saja; sebab jika tidak demikian kamu menipu diri sendiri.",
  },
  {
    verse: "Yakobus 4:17",
    text: "Jadi jika seorang tahu bagaimana ia harus berbuat baik, tetapi ia tidak melakukannya, ia berdosa.",
  },
  {
    verse: "Yakobus 4:7",
    text: "Karena itu tunduklah kepada Allah, dan lawanlah Iblis, maka ia akan lari dari padamu!",
  },
  {
    verse: "Yakobus 5:16",
    text: "Karena itu hendaklah kamu saling mengaku dosamu dan saling mendoakan, supaya kamu sembuh. Doa orang yang benar, bila dengan yakin didoakan, sangat besar kuasanya.",
  },
  {
    verse: "Yehezkiel 36:26",
    text: "Kamu akan Kuberikan hati yang baru, dan roh yang baru di dalam batinmu dan Aku akan menjauhkan dari tubuhmu hati yang keras dan Kuberikan kepadamu hati yang taat.",
  },
  {
    verse: "Yohanes 1:12",
    text: "Tetapi semua orang yang menerima-Nya diberi-Nya kuasa supaya menjadi anak-anak Allah, yaitu mereka yang percaya dalam nama-Nya.",
  },
  {
    verse: "Yohanes 11:25",
    text: "Jawab Yesus: “Akulah kebangkitan dan hidup; barangsiapa percaya kepada-Ku, ia akan hidup walaupun ia sudah mati.",
  },
  {
    verse: "Yohanes 13:34",
    text: "Aku memberikan perintah baru kepada kamu, yaitu supaya kamu saling mengasihi; sama seperti Aku telah mengasihi kamu demikian pula kamu harus saling mengasihi.",
  },
  {
    verse: "Yohanes 14:1",
    text: "Janganlah gelisah hatimu; percayalah kepada Allah, percayalah juga kepada-Ku.",
  },
  {
    verse: "Yohanes 14:6",
    text: "Kata Yesus kepadanya: “Akulah jalan dan kebenaran dan hidup. Tidak ada seorangpun yang datang kepada Bapa, kalau tidak melalui Aku.",
  },
  {
    verse: "Yohanes 15:15",
    text: "Aku tidak menyebut kamu lagi hamba, sebab hamba tidak tahu, apa yang diperbuat oleh tuannya, tetapi Aku menyebut kamu sahabat, karena Aku telah memberitahukan kepada kamu segala sesuatu yang telah Kudengar dari Bapa-Ku.",
  },
  {
    verse: "Yohanes 15:4",
    text: "Tinggallah di dalam Aku dan Aku di dalam kamu. Sama seperti ranting tidak dapat berbuah dari dirinya sendiri, kalau ia tidak tinggal pada pokok anggur, demikian juga kamu tidak berbuah, jikalau kamu tidak tinggal di dalam Aku.",
  },
  {
    verse: "Yohanes 15:9",
    text: "Seperti Bapa telah mengasihi Aku, demikianlah juga Aku telah mengasihi kamu; tinggallah di dalam kasih-Ku itu.",
  },
  {
    verse: "Amsal 27:17",
    text: "Besi menajamkan besi, orang menajamkan sesamanya.",
  },
  {
    verse: "Amsal 18:12",
    text: "Tinggi hati mendahului kehancuran, tetapi kerendahan hati mendahului kehormatan.",
  },
  {
    verse: "Amsal 16:18",
    text: "Kecongkakan mendahului kehancuran, dan tinggi hati mendahului kejatuhan.",
  },
  {
    verse: "Yesaya 41:10",
    text: "Janganlah takut, sebab Aku menyertai engkau, janganlah bimbang, sebab Aku ini Allahmu; Aku akan meneguhkan, bahkan akan menolong engkau; Aku akan memegang engkau dengan tangan kanan-Ku yang membawa kemenangan.",
  },
  {
    verse: "1 Korintus 16:13",
    text: "Berjaga-jagalah! Berdirilah dengan teguh dalam iman! Bersikaplah sebagai laki-laki! Dan tetap kuat!",
  },
  {
    verse: "Ibrani 11:1",
    text: "Iman adalah dasar dari segala sesuatu yang kita harapkan dan bukti dari segala sesuatu yang tidak kita lihat.",
  },
  {
    verse: "Lukas 1:37",
    text: "Sebab bagi Allah tidak ada yang mustahil.",
  },
];

const IndexPage: React.FC<PageProps> = () => {
  const [name, setName] = React.useState<string>("");

  const [currentScripture, setCurrentScripture] = React.useState<Scripture>(
    scriptures[0]
  );
  React.useEffect(() => {
    if (!name) return;
    const currentYear = new Date().getFullYear();
    const index = hashStringToIndex(name + currentYear, scriptures.length);
    setCurrentScripture(scriptures[index]);
  }, [name]);

  return (
    <main className="min-h-screen min-w-screen flex items-center justify-center p-0 bg-[#0a4b51]">
      <img
        src={slinger}
        className="w-full object-cover absolute top-0 max-w-md"
        alt="slinger"
      ></img>
      <div className="min-h-screen min-w-screen flex flex-col items-center justify-center relative tracking-wider text-sky-100 space-y-6 max-w-md">
        <div>
          {name ? (
            <div className="flex flex-col items-center justify-center space-y-6">
              <div className="flex flex-col items-center justify-center">
                <p className="text-lg">
                  Halo, <b>{name}</b>!
                </p>
                <p className="text-lg">Ini Ayat emasmu :</p>
              </div>
              <div className="max-w-[80%] min-h-72 flex flex-col items-center justify-center text-center space-y-2 border-2 p-6">
                <p className="text-xl">{currentScripture.verse}</p>
                <p className="text-md">{currentScripture.text}</p>
              </div>
              <div className="flex flex-col items-center justify-center text-center font-[Tangerine] text-3xl max-w-[70%]">
                <p>Merry Christmas &</p>
                <p>Happy New Year</p>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center space-y-4">
              <input
                id="input-name"
                className="rounded-md p-3 text-black"
                type="text"
                placeholder="Nama"
              />
              <button
                className="rounded-xl p-2 px-4 bg-transparent border-2 text-black"
                onClick={(e) => {
                  e.preventDefault();
                  setName(
                    (document.getElementById("input-name") as HTMLInputElement)
                      .value
                  );
                }}
              >
                <p className="text-sky-50">Ambil Ayat Emas</p>
              </button>
            </div>
          )}
        </div>
        <footer className="flex flex-col items-center justify-center space-y-2 font-light">
          <p className="text-sm">@jkipurimarina</p>
          <p className="text-xs">Puri Anjasmoro blok G1 no 15 Semarang</p>
        </footer>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <link rel="preconnect" href="https://fonts.googleapis.com"></link>
    <link rel="preconnect" href="https://fonts.gstatic.com"></link>
    <link
      href="https://fonts.googleapis.com/css2?family=Tangerine:wght@400;700&display=swap"
      rel="stylesheet"
    ></link>
    <title>Ayat Emas</title>
  </>
);
