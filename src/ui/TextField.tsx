interface TextField extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function TextField({...props}: TextField) {
    return (
        <input {...props} className="w-full h-12 px-2 rounded-md outline-none bg-slate-100 focus:bg-white focus:border focus:border-slate-200" />
    )
}