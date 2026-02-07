export function SiteFooter() {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <a href="/about" className="text-sm sm:text-base hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/products" className="text-sm sm:text-base hover:text-white transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="/services" className="text-sm sm:text-base hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="text-sm sm:text-base hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Corporate Address</h3>
            <address className="not-italic space-y-1 text-xs sm:text-sm">
              <p>Precitec Precision Machineries Private Limited</p>
              <p># A-353(b), 8th Main Road,</p>
              <p>2nd Stage, Peenya Industrial Estate,</p>
              <p>Bengaluru, Karnataka 560058, India</p>
              <p className="mt-2 sm:mt-3">
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:info@precitec.co.in"
                  className="hover:text-white transition-colors break-all"
                >
                  info@precitec.co.in
                </a>
              </p>
              <p className="mt-2">
                <strong>Phone:</strong>
              </p>
              <p className="pl-2">+91 70220 24562</p>
            </address>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Certifications</h3>
            <p className="text-xs sm:text-sm mb-2 sm:mb-3">
              ISO 9001:2015 Certified
              <br />
              Quality Management Systems
            </p>
            <p className="text-xs sm:text-sm italic">
              "Think Machine, Think Precitec"
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-4 text-xs sm:text-sm text-center">
          <p>
            &copy; {new Date().getFullYear()} PRECITEC Machines. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
