export const Footer = () => {
    return (
      <footer className="mt-12 py-4 text-center text-xs text-gray-400">
        <div className="space-x-4 mb-2">
          <a
            href="mailto:olic.a@northeastern.edu"
            className="hover:underline"
          >
            Email
          </a>
          <a
            href="https://linkedin.com/in/aleksandar-olic"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LinkedIn
          </a>
        </div>
        <div>© {new Date().getFullYear()} AJ Olic. All rights reserved.</div>
      </footer>
    );
  };
  