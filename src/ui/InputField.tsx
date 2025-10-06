interface InputField extends React.InputHTMLAttributes<HTMLInputElement> {
    icon?: React.ReactNode
}

export default function InputField({ icon, ...props }: InputField) {
    return (
        <div className="relative">
            {icon && (
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                    {icon}
                </div>
            )}
            <input className={`w-full ${icon ? 'pl-10' : 'pl-4'} pr-4 py-2.5 border border-slate-300 rounded-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all`} {...props}/>
        </div>
    )
}