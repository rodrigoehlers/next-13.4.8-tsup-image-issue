import Image from "next/image";

export const Header = ({ text }: { text: string }) => {
  return (
    <div>
      <h1>{text}</h1>
      {/* This would work if instead it was `<Image.default` (ignoring the TS issue) */}
      <Image
        alt="Example"
        height={300}
        width={200}
        src="https://fastly.picsum.photos/id/432/200/300.jpg?hmac=S0muAtaN6T0PXbBlf5O-UL0chTPM6i9FReOIs0IJlDU"
      />
    </div>
  );
};
