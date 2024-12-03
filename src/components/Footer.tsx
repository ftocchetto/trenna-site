import { BRAND_COLORS } from '../constants/colors';

interface FooterColumnProps {
  title: string;
  children: React.ReactNode;
}

const FooterColumn = ({ title, children }: FooterColumnProps) => (
  <div className="flex-1 px-8">
    <h3 
      className="text-xl font-bold mb-4"
      style={{ color: BRAND_COLORS.COMPROMISSO }}
    >
      {title}
    </h3>
    <div 
      className="space-y-2"
      style={{ color: BRAND_COLORS.ESPRESSO }}
    >
      {children}
    </div>
  </div>
);

export const Footer = () => {
  return (
    <footer className="w-full bg-white/90 backdrop-blur-sm py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between">
        <FooterColumn title="Endereço">
          <p>Rua João Telles, 161</p>
          <p>Bom Fim, Porto Alegre/RS</p>
        </FooterColumn>

        <FooterColumn title="Contato">
          <p>E-mail: oi@trenna.co</p>
          <p>WhatsApp: +55 51 99999-9999</p>
        </FooterColumn>

        <FooterColumn title="Horários">
          <p>Segunda a Sábado:</p>
          <p>10h às 19h</p>
        </FooterColumn>
      </div>
    </footer>
  );
};