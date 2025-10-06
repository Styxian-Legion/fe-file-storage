interface TextArea extends React.InputHTMLAttributes<HTMLTextAreaElement> {

}

export default function TextArea({...props}: TextArea) {
    return (
        <textarea className="w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" {...props}>
        </textarea>
    )
}