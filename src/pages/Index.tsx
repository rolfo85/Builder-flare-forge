import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
      <div className="text-center">
        <h1 className="text-2xl font-semibold text-slate-800 mb-6">
          Vue.js Integration Demo
        </h1>
        <Link
          to="/product"
          className="inline-block px-6 py-3 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors"
        >
          View Product Form
        </Link>
      </div>
    </div>
  );
};

export default Index;
