exports.config = {
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://www.liverpool.com.mx',
      show: true,
          waitForNavigation: 'domcontentloaded'
    }
  },
  include: {
    I: './steps_file.js',
   liverpoolPage: './pages/liverpoolPage.js',
     menuPage: './pages/menuPage.js'

  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
  screenshot: {
    enabled: true,
    on: 'fail'
  },
  allure: {
    enabled: true,
    require: '@codeceptjs/allure-legacy',
    outputDir: './output/allure-results'
        } 
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  tests: './tests/*_test.js',
  noGlobals: true,
  name: 'Liverpool-Vianey'
}