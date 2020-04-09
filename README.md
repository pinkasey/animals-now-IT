# animals-now-IT
Integration Tests for Animals-Now

## Install dependencies:
`npm i`

## Running tests on Dev machine
### Start web driver
`webdriver-start-attached`

### run tests
`npm run test`


### Running tests on Jenkins (headless, no browser)
### Start web driver
`nohup npm run webdriver-start || true`

### run tests
`npm run test`


## Troubleshoot
#### Driver version need update
`[16:48:49] E/launcher - SessionNotCreatedError: session not created: This version of ChromeDriver only supports Chrome version 75`
- for reasons that elude me, webdriver-manager doesn't "see" the latest chromedriver when you run `webdriver-manager update`. You have to run it manually:
  - `webdriver-manager update --versions.chrome 80.0.3987.106`
  -`webdriver-manager start --versions.chrome 80.0.3987.106`
