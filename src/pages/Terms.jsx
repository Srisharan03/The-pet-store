import React from 'react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms & Conditions</h1>
          
          <div className="prose prose-lg max-w-none text-gray-600 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
              <p>
                By accessing and using PetStore, you accept and agree to be bound by the terms and 
                provision of this agreement. If you do not agree to abide by the above, please do 
                not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Product Information</h2>
              <p>
                We strive to provide accurate product descriptions and pricing information. However, 
                we do not warrant that product descriptions or other content is accurate, complete, 
                reliable, current, or error-free. Colors and images may vary from actual products.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Orders and Payment</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>All orders are subject to acceptance and availability</li>
                <li>We reserve the right to refuse or cancel any order</li>
                <li>Payment must be received before items are shipped</li>
                <li>Prices are subject to change without notice</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Shipping and Delivery</h2>
              <p>
                We aim to process and ship orders within 1-2 business days. Delivery times may vary 
                based on location and shipping method selected. PetStore is not responsible for delays 
                caused by shipping carriers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Returns and Refunds</h2>
              <p>
                Items may be returned within 30 days of purchase in original condition and packaging. 
                Some items may not be eligible for return for hygiene reasons. Return shipping costs 
                are the responsibility of the customer unless the item was defective.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. User Accounts</h2>
              <p>
                You are responsible for maintaining the confidentiality of your account information 
                and password. You agree to notify us immediately of any unauthorized use of your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Privacy Policy</h2>
              <p>
                Your privacy is important to us. Our Privacy Policy explains how we collect, use, 
                and protect your information when you use our service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Limitation of Liability</h2>
              <p>
                In no event shall PetStore be liable for any indirect, incidental, special, 
                consequential, or punitive damages, including without limitation, loss of profits, 
                data, use, goodwill, or other intangible losses.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Pet Safety</h2>
              <p>
                Pet owners are responsible for supervising their pets with all products. Please 
                read all product instructions and warnings. Remove damaged toys immediately. 
                If your pet shows signs of illness after using any product, consult your veterinarian.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Modifications</h2>
              <p>
                We reserve the right to modify these terms at any time. Changes will be effective 
                immediately upon posting on the website. Your continued use of the service constitutes 
                acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Information</h2>
              <p>
                If you have any questions about these Terms & Conditions, please contact us at 
                support@petstore.com or call +1 (555) 123-4567.
              </p>
            </section>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Last updated: January 1, 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;