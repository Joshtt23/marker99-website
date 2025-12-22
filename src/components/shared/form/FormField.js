import React from 'react';

import { Input } from '../../ui/input';
import { Label } from '../../ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../ui/select';
import { Textarea } from '../../ui/textarea';

export const FormField = ({
  id,
  label,
  required = false,
  error,
  children,
  className = '',
}) => {
  return (
    <div className={`space-y-2 ${className}`}>
      <Label htmlFor={id} className="text-foreground">
        {label}
        {required && <span className="text-red-500"> *</span>}
      </Label>
      {children}
      {error && (
        <p id={`${id}-error`} className="text-sm text-red-400" role="alert">
          {error.message}
        </p>
      )}
    </div>
  );
};

export const TextInput = ({
  id,
  register,
  error,
  type = 'text',
  placeholder,
  className = '',
  ...props
}) => {
  return (
    <Input
      id={id}
      type={type}
      {...register}
      className={`bg-background/50 border-foreground/20 ${className}`}
      placeholder={placeholder}
      aria-invalid={error ? 'true' : 'false'}
      aria-describedby={error ? `${id}-error` : undefined}
      {...props}
    />
  );
};

export const TextAreaInput = ({
  id,
  register,
  error,
  rows = 4,
  placeholder,
  className = '',
  ...props
}) => {
  return (
    <Textarea
      id={id}
      rows={rows}
      {...register}
      className={`bg-background/50 border-foreground/20 ${className}`}
      placeholder={placeholder}
      aria-invalid={error ? 'true' : 'false'}
      aria-describedby={error ? `${id}-error` : undefined}
      {...props}
    />
  );
};

export const SelectInput = ({
  id,
  value,
  onValueChange,
  error,
  placeholder,
  options,
  className = '',
  ...props
}) => {
  return (
    <>
      <Select value={value || ''} onValueChange={onValueChange}>
        <SelectTrigger
          id={id}
          className={`bg-background/50 border-foreground/20 ${className}`}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${id}-error` : undefined}
          {...props}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  );
};
