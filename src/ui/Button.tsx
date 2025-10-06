interface Button extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    children: React.ReactNode
}

export default function Button({className, children, ...props}: Button) {
    return (
        <button className={`w-full h-12 font-semibold rounded-md shadow-md hover:shadow-md transition-all duration-300 transform hover:scale-[1.01] active:scale-[0.98] ${className}`} {...props}>
            {children}
        </button>
    )
}