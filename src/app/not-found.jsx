import style from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={style.container}>
      <h1 className={style.title}>404</h1>
      <h2 className={style.message}>Página não encontrada</h2>
      <p className={style.message}>
        A página que você está procurando não existe ou foi movida.
      </p>
      <a href="/" className={style.button}>
        Voltar ao início
      </a>
    </div>
  );
}