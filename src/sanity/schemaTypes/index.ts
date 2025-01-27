import { type SchemaTypeDefinition } from 'sanity'
import { product } from '../product'

import { team } from '../team'
import { teamone } from '../teamone'



export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,team,teamone],
}


