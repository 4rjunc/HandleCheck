import { useState } from "react";
import ReclaimDemo from "./components/Reclaim";
import { Shield } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="w-10 h-10 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-900">HandleCheck</h1>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Verify social media accounts instantly with our secure verification
            system. Quick, reliable, and trustworthy.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <ReclaimDemo onProofReceived={(proof) => console.log(proof)} />
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-sm text-gray-500">
          <p>© 2024 HandleCheck. All rights reserved.</p>
          <p className="mt-1">Secure Social Media Verification</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
