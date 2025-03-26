interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<InputProps> = ({ ...res }) => {
  return <input {...res} />
}

export { Input }
