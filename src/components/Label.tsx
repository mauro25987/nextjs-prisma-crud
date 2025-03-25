interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode
}

const Label: React.FC<LabelProps> = ({ children, ...res }) => {
  return <label {...res}>{children}</label>
}

export default Label
