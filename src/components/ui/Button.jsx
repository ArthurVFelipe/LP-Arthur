export default function Button({
                                   children,
                                   variant = "primary",
                                   loading = false,
                                   className = "",
                                   ...props
                               }) {
    const base =
        "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sky-500/40 hover:cursor-pointer";

    const variants = {
        primary: `
      bg-gradient-to-r
      from-[color:var(--color-gradient-from)]
      to-[color:var(--color-gradient-to)]
      text-white
      hover:brightness-110
      hover:scale-[1.02]
      active:scale-[0.98]
      shadow-lg shadow-cyan-500/10
    `,
        outline: `
      border border-[color:var(--color-border)]
      text-[color:var(--color-text)]
      hover:bg-white/5
    `,
    };

    return (
        <button
            disabled={loading}
            className={`${base} ${variants[variant]} ${className} ${
                loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
            {...props}
        >
            {loading && (
                <span className="h-4 w-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
            )}
            {children}
        </button>
    );
}
