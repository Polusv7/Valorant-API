import Link from "next/link";
import Image from "next/image";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className="text-3xl font-bold">CLD Valorant</h1>
        <hr className="my-4" />
        <p>Valorant - Informations</p>
      </div>

      <Image
        src="https://media.valorant-api.com/agents/0e38b510-41a8-5780-5e8f-568b2a4f2d6c/fullportrait.png"
        alt="Valorant Iso"
        className="animate-pulse"
        width={50}
        height={50}
        priority
        quality={100}
        unoptimized
        style={{
          width: "600px",
          height: "600px",
        }}
      />
      <div className="flex gap-3">
        <Link
          href="https://github.com/Cloudiano"
          target="_blank"
          className="underline hover:text-red-500 transition-all"
        >
          Cloud
        </Link>
        <Link
          href="https://valorant-api.com"
          target="_blank"
          className="underline hover:text-red-500 transition-all"
        >
          Valorant API
        </Link>
      </div>
    </main>
  );
}
