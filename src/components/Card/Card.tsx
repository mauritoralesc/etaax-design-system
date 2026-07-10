import type { HTMLAttributes, ReactNode } from 'react'
import './Card.css'

export interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  title?: ReactNode
  subtitle?: ReactNode
  footer?: ReactNode
  children?: ReactNode
}

export function Card({ title, subtitle, footer, children, className, ...props }: CardProps) {
  const classNames = ['card-root', className].filter(Boolean).join(' ')

  return (
    <div className={classNames} {...props}>
      {(title || subtitle) && (
        <div className="card-header">
          {title && <h3 className="card-title">{title}</h3>}
          {subtitle && <p className="card-subtitle">{subtitle}</p>}
        </div>
      )}
      {children && <div className="card-body">{children}</div>}
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  )
}
