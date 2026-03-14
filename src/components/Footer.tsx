export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} PharmaLocate. Built as part of a university web development project.</p>
        <p className="footer__disclaimer">
          This is a student project. Not intended for real medical use.
        </p>
      </div>
    </footer>
  );
}