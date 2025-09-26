export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--color-brio-gray)] to-white flex items-center justify-center p-4">
      <div className="text-center space-y-8">
        {/* Loading Animation */}
        <div className="space-y-6">
          <div className="relative">
            {/* Main Loading Circle */}
            <div className="w-24 h-24 mx-auto relative">
              <div className="absolute inset-0 border-4 border-[var(--color-brio-blue)]/20 rounded-full"></div>
              <div className="absolute inset-0 border-4 border-transparent border-t-[var(--color-brio-blue)] rounded-full animate-spin"></div>

              {/* Inner cleaning icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 bg-[var(--color-brio-blue)] rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white animate-pulse"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.36 2.72L20.78 4.14L15.06 9.85C16.13 11.39 16.28 13.24 15.38 14.44L9.06 8.12C10.26 7.22 12.11 7.37 13.65 8.44L19.36 2.72M5.93 17.57C3.92 15.56 2.69 13.16 2.35 10.92L7.23 8.83L14.67 16.27L12.58 21.15C10.34 20.81 7.94 19.58 5.93 17.57Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Loading Text */}
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-[var(--color-brio-blue-dark)]">
              Facem totul impecabil
            </h2>
            <div className="space-y-2">
              <p className="text-[var(--color-brio-blue-dark)]/70">
                Te rugăm să aștepți, pregătim totul pentru tine...
              </p>

              {/* Loading Steps */}
              <div className="flex justify-center space-x-2 mt-4">
                <div className="w-2 h-2 bg-[var(--color-brio-blue)] rounded-full animate-bounce"></div>
                <div
                  className="w-2 h-2 bg-[var(--color-brio-blue)] rounded-full animate-bounce"
                  style={{ animationDelay: "0.1s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-[var(--color-brio-blue)] rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
              </div>
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="space-y-4 max-w-xs mx-auto">
            <div className="flex items-center space-x-3 text-sm text-[var(--color-brio-blue-dark)]/60">
              <div className="w-4 h-4 bg-[var(--color-brio-green)] rounded-full flex items-center justify-center">
                <svg
                  className="w-2 h-2 text-white"
                  fill="currentColor"
                  viewBox="0 0 8 8"
                >
                  <path d="M6.564.75l-3.59 3.612-1.538-1.55L0 4.26l2.974 2.99L8 2.193z" />
                </svg>
              </div>
              <span>Pregătim soluțiile de curățare</span>
            </div>

            <div className="flex items-center space-x-3 text-sm text-[var(--color-brio-blue-dark)]/60">
              <div className="w-4 h-4 border-2 border-[var(--color-brio-blue)] rounded-full animate-spin"></div>
              <span>Configurăm experiența ta</span>
            </div>

            <div className="flex items-center space-x-3 text-sm text-[var(--color-brio-blue-dark)]/40">
              <div className="w-4 h-4 border-2 border-gray-300 rounded-full"></div>
              <span>Aproape gata...</span>
            </div>
          </div>
        </div>

        {/* Bottom Message */}
        <div className="text-xs text-[var(--color-brio-blue-dark)]/40">
          Servicii de curățenie de calitate din 2022
        </div>
      </div>
    </div>
  );
}
