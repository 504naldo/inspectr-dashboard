import '../styles/globals.css'

export const metadata = {
  title: 'Inspectr Dashboard',
  description: 'Lookup devices by barcode',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className="bg-gray-50">
        {children}
      </body>
    </html>
  );
}