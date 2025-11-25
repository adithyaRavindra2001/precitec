export function SiteFooter() {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="container mx-auto px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  News & Media
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Corporate Address</h3>
            <address className="not-italic space-y-1 text-sm">
              <p>PRECITEC Machines Pvt. Ltd.</p>
              <p>Industrial Estate, Sector 12</p>
              <p>Manufacturing Hub, 560001</p>
              <p className="mt-3">
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:info@precitec.com"
                  className="hover:text-white transition-colors"
                >
                  info@precitec.com
                </a>
              </p>
              <p>
                <strong>Phone:</strong> +91 80 1234 5678
              </p>
            </address>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Certifications</h3>
            <p className="text-sm mb-3">
              ISO 9001:2015 Certified
              <br />
              Quality Management Systems
            </p>
            <p className="text-sm italic">
              "Engineering Tomorrow's Precision Today"
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-4 text-sm text-center">
          <p>
            &copy; {new Date().getFullYear()} PRECITEC Machines. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
