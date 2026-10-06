export default function WhatsAppContact({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex flex-wrap items-center justify-between gap-3.5 bg-white border-[1.5px] border-[#2CB5CA]/35 rounded-2xl px-4 py-4 ${className}`}
    >
      <p className="text-gray-800 text-sm font-semibold max-w-[320px]">
        Nebo nám pište a volejte na{" "}
        <a href="tel:+420702026586" className="text-[#25a3b7] font-extrabold">
          +420 702 026 586
        </a>
      </p>
      <a
        href="https://wa.me/420702026586"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs px-4 py-2.5 rounded-full transition-colors shadow-md whitespace-nowrap"
      >
        WhatsApp
      </a>
    </div>
  );
}
