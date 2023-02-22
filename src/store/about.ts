import { Store } from '../core/core'

interface State {
  photo: string
  name: string
  email: string
  blog: string
  github: string
  repository: string
}

export default new Store<State>({
  photo: 'https://heropy.blog/css/images/logo.png',
  name: 'WOWBA / Lee YeongUk',
  email: 'leeyuwk54@gmail.com',
  blog: 'https://heropy.blog',
  github: 'https://github.com/wowba',
  repository: 'https://github.com/wowba?tab=repositories'
})