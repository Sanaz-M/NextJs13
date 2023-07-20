import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';
import { ButtonHTMLAttributes, FC, forwardRef } from 'react';

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

const buttonVariants = cva("active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-color focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed dark:focus:ring-slate-400 disabled:pointer-events-none dark:focus:ring-offset-slate-900", {
  variants: {
    variant: {
      default:
        'bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-slate-100',
      destructive: 'text-white hover:bg-red-600 dark:hover:bg-red-600',
      outline:
        'bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-slate-100 border border-slate-200 dark:border-slate-700',
      subtle:
        'bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-100',
      ghost:
        'bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-slate-400 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent',
      link: 'bg-transparent dark:bg-transparent underline-offset-4 hover:underline text-slate-900 dark:text-slate-100 hover:bg-transparent dark:hover:bg-transparent',
    },
    size: {
      default: 'h-10 py-2 px-4',
      sm: 'h-9 px-2 rounded-md',
      lg: 'h-11 px-8 rounded-md',
    }
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  }
})

//forwardRef is a generic function that has type parameters for the type of the ref and the props
//It is higher-order component that takes a component as an argument and returns a new component that passes the ref to the original component. This allows the parent component to access the child component's ref, which can be used to access the underlying DOM node or component instance
const Button: FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>(({
  children, variant, isLoading, className, size, ...props
}, ref) => {
  return (
    <button className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      disabled={isLoading}
      {...props}
    ></button>
  );
})

export default Button;