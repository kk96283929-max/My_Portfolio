const Footer = () => {
  return (
    <footer className="py-8 bg-section-bg border-t border-border">
      <div className="container mx-auto px-4 text-center">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} MD TAFSHEEN. Built with React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
