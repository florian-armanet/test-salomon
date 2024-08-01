import { cva, type VariantProps } from 'class-variance-authority'
import { ComponentProps } from 'react'

const tagVariants = cva('rounded-3xl font-semibold', {
    variants: {
        intent: {
            gray: ['bg-gray-light', 'text-gray-base'],
            dark: ['bg-dark', 'text-white']
        },
        size: {
            sm: ['px-2', 'py-0.5', 'text-sm'],
            base: ['px-3', 'py-1', 'text-sm', 'lg:text-base'],
            xl: ['px-4', 'py-2', 'text-lg']
        }
    },
    defaultVariants: {
        intent: 'gray',
        size: 'sm'
    }
})

type tagType = VariantProps<typeof tagVariants> & ComponentProps<'span'>

const Tag = ({ size, className, ...props }: tagType) => {
    return <span {...props} className={tagVariants({ size, className })} />
}

export default Tag
