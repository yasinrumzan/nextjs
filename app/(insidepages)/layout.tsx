export default function RootLayout({
  children,
}: Readonly<{
  
  children: React.ReactNode;
}>) {
  return (
   <div className="p-2">
     <div>back to home</div>{children}</div>
  );
}
