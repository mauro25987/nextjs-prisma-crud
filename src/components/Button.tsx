interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant: 'default' | 'primary' | 'danger'
}

const buttonVariant = {
  default: 'bg-green-500 hover:bg-green-700',
  primary: 'bg-blue-500 hover:bg-blue-700',
  danger: 'bg-red-500 hover:bg-red-700',
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'default', ...res }) => {
  return (
    <button className={`rounded px-4 py-2 font-bold text-white ${buttonVariant[variant]}`} {...res}>
      {children}
    </button>
  )
}

export { Button }
