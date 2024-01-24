"use client";

const getRandomNo = (count: number): number => {
  return Math.floor(Math.random() * 2);
};

export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const no = getRandomNo(2);
  if (no == 1) {
    throw new Error("Emrror loading page");
  } else {
    return (
      <div>
        {children}
        <h2>Features products</h2>
      </div>
    );
  }
}
