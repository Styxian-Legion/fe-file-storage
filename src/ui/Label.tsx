interface Label extends React.LabelHTMLAttributes<HTMLLabelElement> {
    children: React.ReactNode
}

export default function Label({ children, ...props }: Label) {
    return (
        <label {...props} className="block text-sm font-medium text-slate-700 mb-2">
            {children}
        </label>
    )
}