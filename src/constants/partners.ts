import { CDN_URL } from "@/lib/cdn";

export interface Partner {
  name: string;
  logo: string;
}

export const PARTNERS: Partner[] = [
  { name: "ICICI Bank", logo: `${CDN_URL}/assets/banks/icici.webp` },
  { name: "Small Finance Bank", logo: `${CDN_URL}/assets/banks/sf.webp` },
  { name: "HDFC BANK", logo: `${CDN_URL}/assets/banks/hdfc.webp` },
  { name: "AXIS BANK", logo: `${CDN_URL}/assets/banks/axisbank.webp` },
  { name: "Godrej Capital", logo: `${CDN_URL}/assets/banks/godrej.webp` },
  { name: "FEDERAL BANK", logo: `${CDN_URL}/assets/banks/federal.webp` },
  { name: "IOB Bank", logo: `${CDN_URL}/assets/banks/iob.webp` },
  { name: "BOB Bank", logo: `${CDN_URL}/assets/banks/bob.webp` },
  { name: "IndusInd Bank", logo: `${CDN_URL}/assets/banks/indusind.webp` },
  { name: "Deutsche Bank", logo: `${CDN_URL}/assets/banks/deutsche.webp` },
  { name: "Axis Finance", logo: `${CDN_URL}/assets/banks/axisfin.webp` },
  { name: "TATA CAPITAL", logo: `${CDN_URL}/assets/banks/tatacapital.webp` },
  { name: "Poonawalla", logo: `${CDN_URL}/assets/banks/poonawalla.webp` },
  { name: "Cholamandalam", logo: `${CDN_URL}/assets/banks/cholamandalam.webp` },
  { name: "Aditya Birla Capital", logo: `${CDN_URL}/assets/banks/adityabirla.webp` },
  { name: "Bank of Baroda", logo: `${CDN_URL}/assets/banks/bob.webp` },
  { name: "Piramal", logo: `${CDN_URL}/assets/banks/piramal.webp` },
  { name: "SMFG", logo: `${CDN_URL}/assets/banks/smfg.webp` },
  { name: "BAJAJ FINSERV", logo: `${CDN_URL}/assets/banks/bajajfin.webp` },
];
