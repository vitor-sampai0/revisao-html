import localFont from "next/font/local";
import "./globals.css";
import Header from "../components/header/Header"

// Configurar fonte local baixada
const cormorantGaramond = localFont({
    src: [
        {
            path: "../../public/fonts/CormorantGaramond-Regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../../public/fonts/CormorantGaramond-Bold.ttf",
            weight: "700",
            style: "normal",
        },
    ],
    variable: "--font-cormorant",
    display: "swap",
});

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR" className={cormorantGaramond.variable}>
            <header>
                <Header/>
            </header>
            <body className={cormorantGaramond.className}>
                <main>{children}</main>
            </body>
        </html>
    );
}
