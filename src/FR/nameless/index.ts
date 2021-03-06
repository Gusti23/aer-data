import { IExpansion } from 'aer-types'

import { nemeses } from './nemeses'
import { mages } from './mages'
import { cards } from './cards'
import { basicNemesisCards } from './basicNemesisCards'

export const namelessData: IExpansion = {
  id: "Nameless",
  name: "Les Sans-Noms",
  type: "mini",
  nemeses,
  mages,
  cards,
  basicNemesisCards,
}
