export const Greetings = ({ lang, children }) => {
    if (lang === 'de') {
      return (
        <div>
          German
          <p>Hallo {children}</p>
        </div>
      );
    }
  
    if (lang === 'en') {
      return (
        <div>
          English
          <p>Hi {children}</p>
        </div>
      );
    }
  
    if (lang === 'es') {
      return (
        <div>
          Spanish
          <p>Hola {children}</p>
        </div>
      );
    }
  
    if (lang === 'fr') {
      return (
        <div>
          French
          <p>Bonjour {children}</p>
        </div>
      );
    }
  };