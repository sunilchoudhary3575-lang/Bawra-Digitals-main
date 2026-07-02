import { siteData } from '../data/siteData';

export default function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hello Bawra Digitals, I am a doctor/healthcare provider and want to discuss digital marketing services for my practice."
  );
  
  const whatsappUrl = `https://wa.me/${siteData.whatsappNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#1ebd59] hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center group"
      aria-label="Contact us on WhatsApp"
    >
      {/* Tooltip */}
      <span className="absolute right-16 scale-0 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-md group-hover:scale-100 transition-all origin-right duration-200">
        Chat with a Healthcare Marketer
      </span>

      {/* WhatsApp SVG Icon */}
      <svg
        className="h-6 w-6 fill-current"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.062 5.321 5.378.002 11.893 0c3.16.001 6.129 1.233 8.358 3.467 2.23 2.235 3.457 5.205 3.455 8.368-.004 6.56-5.322 11.878-11.837 11.879-2.001 0-3.969-.508-5.717-1.478L0 24zm6.59-4.846c1.6.95 3.16 1.449 4.887 1.45 5.426-.003 9.842-4.414 9.845-9.835.002-2.627-1.02-5.1-2.871-6.953C16.597 1.962 14.12 1.433 11.89 1.43c-5.428 0-9.847 4.417-9.85 9.836-.002 1.802.488 3.562 1.418 5.116L2.48 21.562l5.167-1.355zM17.486 15c-.287-.144-1.695-.838-1.957-.934-.263-.096-.454-.144-.645.144-.19.287-.736.934-.903 1.122-.167.188-.334.212-.621.068-.287-.144-1.21-.446-2.305-1.424-.853-.759-1.428-1.7-1.595-1.986-.167-.288-.018-.444.125-.586.13-.127.287-.336.43-.504.143-.168.19-.288.287-.48.096-.192.048-.36-.024-.504-.072-.144-.645-1.56-.883-2.136-.232-.558-.468-.482-.643-.491-.167-.008-.358-.01-.55-.01s-.502.072-.765.36c-.263.288-1.004.984-1.004 2.4s1.028 2.784 1.171 2.976c.143.192 2.023 3.088 4.9 4.331.685.297 1.22.474 1.637.607.688.219 1.314.188 1.81.114.551-.082 1.695-.694 1.933-1.366.238-.672.238-1.248.167-1.368-.071-.12-.263-.192-.55-.336z" />
      </svg>
    </a>
  );
}
