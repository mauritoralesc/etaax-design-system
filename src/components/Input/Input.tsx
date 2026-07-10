import { forwardRef, useId } from 'react'
import type { InputHTMLAttributes } from 'react'
import './Input.css'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Label displayed above the field. */
  label?: string
  /** Helper text displayed below the field. Hidden when `error` is set. */
  hint?: string
  /** Error message displayed below the field, and applies invalid styling. */
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, hint, error, id, className, ...props }, ref) => {
    const generatedId = useId()
    const inputId = id ?? generatedId
    const describedBy = error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined

    const classNames = ['input-field', error && 'input-field-invalid', className]
      .filter(Boolean)
      .join(' ')

    return (
      <div className="input-wrapper">
        {label && (
          <label className="input-label" htmlFor={inputId}>
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={classNames}
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy}
          {...props}
        />
        {error ? (
          <span id={`${inputId}-error`} className="input-error">
            {error}
          </span>
        ) : hint ? (
          <span id={`${inputId}-hint`} className="input-hint">
            {hint}
          </span>
        ) : null}
      </div>
    )
  },
)

Input.displayName = 'Input'
