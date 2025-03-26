// interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = props => {
  return <input {...props} />
}

export { Input }
