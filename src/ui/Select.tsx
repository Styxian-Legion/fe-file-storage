interface Select extends React.SelectHTMLAttributes<HTMLSelectElement>{
    children: React.ReactNode
}

export default function Select({children, ...props}: Select) {
    return (
        <select {...props} className="w-full px-4 py-2.5 border border-slate-300 rounded-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all">
            {children}
        </select>
    )
}