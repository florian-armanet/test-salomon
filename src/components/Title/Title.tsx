import { cva, type VariantProps } from 'class-variance-authority'
import { ComponentProps } from 'react'

const titleVariants = cva(['font-semibold'], {
    variants: {
        colors: {
            primary: 'text-highlight',
            secondary: 'text-dark'
        },
        size: {
            sm: ['text-sm'],
            base: ['text-sm', 'lg:text-base'],
            xl: ['lg:text-xl']
        }
    },
    defaultVariants: {
        colors: 'primary',
        size: 'xl'
    }
})

type titleType = VariantProps<typeof titleVariants> & ComponentProps<'h2'>

const Title = ({ size, colors, className, ...props }: titleType) => {
    return (
        <h2 {...props} className={titleVariants({ size, colors, className })} />
    )
}

export default Title
