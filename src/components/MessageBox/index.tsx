import { Container } from './styles';

interface MessageBoxProps {
  title: string;
  description: string;
  footerText: string;
  icon: string;
}

function MessageBox({ title, description, footerText, icon }: MessageBoxProps) {
  return (
    <Container>
      <header>
        <h1>
          {title}
          <img src={icon} alt={title} />
        </h1>
      </header>
      <p>{description}</p>
      <footer>
        <span>{footerText}</span>
      </footer>
    </Container>
  );
}

export default MessageBox;
