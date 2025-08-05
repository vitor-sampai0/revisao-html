import './not-found.css';

export default function NotFound() {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="error-code">404</h1>
        <h2 className="error-title">Página não encontrada</h2>
        <p className="error-description">
          A página que você está procurando não existe ou foi movida.
        </p>
        <a href="/" className="back-home-btn">
          Voltar ao início
        </a>
      </div>
    </div>
  );
}