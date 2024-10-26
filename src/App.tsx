import ReclaimDemo from "./components/Reclaim";
import { Shield } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="w-10 h-10 text-blue-700" />
            <h1 className="text-4xl font-bold text-gray-900">HandleCheck</h1>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Verify social media accounts instantly with our secure verification
            system
          </p>
        </div>

        {/* Main Content */}
        <ReclaimDemo onProofReceived={(proof) => console.log(proof)} />

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
