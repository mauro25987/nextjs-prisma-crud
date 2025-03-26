// interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const TextArea: React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement>> = props => {
  return <textarea {...props}></textarea>
}

export { TextArea }
