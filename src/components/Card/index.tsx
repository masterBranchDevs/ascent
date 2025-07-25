'use client'
import { cn } from '@/utilities/ui'
import useClickableCard from '@/utilities/useClickableCard'
import Link from 'next/link'
import React from 'react'

import type { Post } from '@/payload-types'

import { Media } from '@/components/Media'

export type CardPostData = Pick<Post, 'slug' | 'categories' | 'meta' | 'title'>

export const Card: React.FC<{
  alignItems?: 'center'
  className?: string
  doc?: CardPostData
  relationTo?: 'posts'
  showCategories?: boolean
  title?: string
}> = (props) => {
  const { card, link } = useClickableCard({})
  const { className, doc, relationTo, showCategories, title: titleFromProps } = props

  const { slug, categories, meta, title } = doc || {}
  const { description, image: metaImage } = meta || {}

  const hasCategories = categories && Array.isArray(categories) && categories.length > 0
  const titleToUse = titleFromProps || title
  const sanitizedDescription = description?.replace(/\s/g, ' ') // replace non-breaking space with white space
  const href = `/${relationTo}/${slug}`

  return (
    <article
      className={cn(
        'group bg-white overflow-hidden rounded-2xl shadow-lg transition-transform duration-200 hover:scale-[1.025] hover:shadow-2xl flex flex-col',
        className,
      )}
      ref={card.ref}
    >
      <div className="relative w-full aspect-[16/9] bg-gray-100 flex items-center justify-center">
        {!metaImage && <div className="text-gray-400 text-sm">No image</div>}
        {metaImage && typeof metaImage !== 'string' && (
          <Media resource={metaImage} size="100vw" className="object-cover w-full h-full" />
        )}
      </div>
      <div className="flex-1 flex flex-col p-5 gap-3">
        {showCategories && hasCategories && (
          <div className="flex flex-wrap gap-2 mb-1">
            {categories?.map((category, index) => {
              if (typeof category === 'object') {
                const { title: titleFromCategory } = category
                const categoryTitle = titleFromCategory || 'Untitled category'
                return (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-0.5 rounded-full uppercase tracking-wide"
                  >
                    {categoryTitle}
                  </span>
                )
              }
              return null
            })}
          </div>
        )}
        {titleToUse && (
          <h3 className="text-lg font-bold leading-tight mb-1">
            <Link className="hover:underline" href={href} ref={link.ref}>
              {titleToUse}
            </Link>
          </h3>
        )}
        {description && (
          <p className="text-gray-600 text-sm line-clamp-3">{sanitizedDescription}</p>
        )}
      </div>
    </article>
  )
}
