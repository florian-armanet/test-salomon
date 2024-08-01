import { cva, type VariantProps } from 'class-variance-authority'
import { ComponentProps } from 'react'

const textVariants = cva(['font-semibold', 'text-dark'], {
    variants: {
        size: {
            sm: ['text-sm'],
            base: ['text-sm', 'lg:text-base'],
            xl: ['lg:text-xl']
        }
    },
    defaultVariants: {
        size: 'base'
    }
})

type textType = VariantProps<typeof textVariants> & ComponentProps<'p'>

const Text = ({ size, className, ...props }: textType) => {
    return <p {...props} className={textVariants({ size, className })} />
}

export default Text
