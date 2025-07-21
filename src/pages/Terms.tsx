import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-4">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-6">
          <Link to="/signup">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Signup
            </Button>
          </Link>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold">Terms and Conditions</CardTitle>
            <CardDescription>
              Rural Watershed Oasis Management System
            </CardDescription>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-semibold mb-3">1. Acceptance of Terms</h2>
                <p className="text-gray-700 leading-relaxed">
                  By accessing and using the Rural Watershed Oasis Management System, you agree to be bound by these Terms and Conditions and all applicable laws and regulations.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">2. Use License</h2>
                <p className="text-gray-700 leading-relaxed">
                  Permission is granted to temporarily access and use this system for official watershed management purposes. This license shall automatically terminate if you violate any of these restrictions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">3. User Responsibilities</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Maintain the confidentiality of your account credentials</li>
                  <li>Use the system only for authorized watershed management activities</li>
                  <li>Report any unauthorized access or security breaches immediately</li>
                  <li>Ensure data accuracy and integrity in all submissions</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">4. Data Privacy</h2>
                <p className="text-gray-700 leading-relaxed">
                  We are committed to protecting your privacy and the confidentiality of watershed project data. All information collected is used solely for project management and reporting purposes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">5. System Availability</h2>
                <p className="text-gray-700 leading-relaxed">
                  While we strive to maintain continuous system availability, we do not guarantee uninterrupted access. Scheduled maintenance and updates may temporarily affect system availability.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">6. Limitation of Liability</h2>
                <p className="text-gray-700 leading-relaxed">
                  The Rural Watershed Oasis Management System is provided "as is" without warranties of any kind. We shall not be liable for any damages arising from the use of this system.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">7. Contact Information</h2>
                <p className="text-gray-700 leading-relaxed">
                  For questions about these Terms and Conditions, please contact the system administrator at admin@watershedoasis.org
                </p>
              </section>

              <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Last Updated:</strong> January 2024<br />
                  <strong>Version:</strong> 1.0
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Terms;
