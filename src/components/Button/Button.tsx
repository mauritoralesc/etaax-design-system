import { forwardRef } from 'react'
import type { ButtonHTMLAttributes, ReactNode } from 'react'
import './Button.css'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style of the button. @default 'primary' */
  variant?: ButtonVariant
  /** Size of the button. @default 'md' */
  size?: ButtonSize
  children?: ReactNode
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className, type = 'button', ...props }, ref) => {
    const classNames = ['button-root', `button-${variant}`, `button-${size}`, className]
      .filter(Boolean)
      .join(' ')

    return <button ref={ref} type={type} className={classNames} {...props} />
  },
)

Button.displayName = 'Button'
