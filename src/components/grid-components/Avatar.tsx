import Image from "next/image";

export default function Avatar() {
  return (
    <div className="h-full w-full relative">
      <Image
        src="/assets/pictures/avatar_image.png"
        alt="Avatar"
        sizes="100%"
        fill
      />
    </div>
  );
}
