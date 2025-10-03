import { Button } from "antd"

import Titulo from "componentes/atomos/Titulo";
import Parrafo from "componentes/atomos/Parrafo";
import UIButton from "componentes/atomos/ButtonBanner"

interface FooterPagProps {
  titulo: string;
  parrafo: string;
  texBoton: string;
}

const FooterPag: React.FC<FooterPagProps> = ({ titulo, parrafo, texBoton }) => {
  return (
    <section className="footer-section">
      <div className="footer-container">
        <div className="footer-card">
          <div className="footer-title">
            <Titulo texto={titulo} />
          </div>
          <div className="footer-text">
            <Parrafo texto={parrafo} />
          </div>
          <div className="footer-actions">
            <UIButton variant="primary">{texBoton}</UIButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterPag;