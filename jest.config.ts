import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  verbose: true,
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '.*\\.(css|less|styl|scss|sass)$': '<rootDir>/jest/cssModule.js',
    '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|svg\\?component|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|ico)$':
            '<rootDir>/jest/image.js'
  },
  extensionsToTreatAsEsm: ['.tsx']
}

export default config
