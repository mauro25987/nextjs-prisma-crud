interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const TextArea: React.FC<TextAreaProps> = props => {
  return <textarea {...props}></textarea>
}

export default TextArea
