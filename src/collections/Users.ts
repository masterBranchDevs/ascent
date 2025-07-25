import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
    group: 'Admin Users',
  },
  auth: true,
  fields: [
    // Email added by default
    {
      name: 'Name',
      type: 'text',
      required: true,
    },
    {
      name: 'Mobile',
      type: 'text',
      required: true,
      maxLength: 13,
      minLength: 13,
    },
  ],
}
