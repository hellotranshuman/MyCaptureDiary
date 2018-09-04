// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,

  // 자바스크립트의 버전, 모둘 사용 여부 등을 설정 가능
  parserOptions: {
    parser: 'babel-eslint'
  },

  // 프로젝트의 사용 환경 표시 ex) browser, node, mocha
  env: {
    browser: true,
  },
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
  // 확장 설정
  extends: ['plugin:vue/essential', 'airbnb-base'],
  // required to lint *.vue files
  // 플로그인을 넣어줍니다 ex) html, import, jsx-a11y, react 등
  plugins: [
    'vue'
  ],
  // check if imports actually resolve
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  // extends와 plugins에 대한 세부 설정을 변경하는 코드를 추가 가능
  // 참고 : (0 규칙해제, 1 규칙 경고, 2 규칙 오류)  
  rules: {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never'
    }], 
    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions  
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'state', // for vuex state
        'acc', // for reduce accumulators
        'e' // for e.returnvalue
      ]
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      optionalDependencies: ['test/unit/index.js']
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    'no-var' : 0,
    'max-len' : 0,
    'space-before-blocks' : 0,
    'padded-blocks' : 0,
    'linebreak-style' : 0,
    'key-spacing' : 0,
    'object-curly-spacing' : 1,
    'semi' : 1,
    'quote-props' : 0,
    'no-multi-spaces' : 1, // 다중 공백(띄어쓰기) 허용 여부
    'indent' : 0,  // 들여쓰기
    'comma-dangle' : ["error", "always-multiline"], // 마지막 , 존재 여부 (현재는 있어야 되는 설정)

    'no-irregular-whitespace': 1,     // 문자열과 주석 이외의 불규칙한 공백을 허용하지 않는다. 
    'no-trailing-spaces': 1,          // 줄 끝에 공백을 허용하지 않는다.
    'keyword-spacing': 1,             // 키워드 전후에 일관된 간격을두기
    'no-unused-vars': 1,              // 사용되지 않는 변수를 허용하지 않는다.
    'no-multiple-empty-lines': 1,     // 여러개의 빈줄을 허용하지 않는다.
    'space-before-function-paren': 1, // 함수 정의 앞에 여백을 일관되게 적용하십시오.
    'eol-last': 1,                    // 파일의 끝에 개행을 요구하거나 허용하지 않는다.
    'no-redeclare': 1,                // 변수의 재선언을 금지한다.
    'curly': [2, "multi-line"],       // 모든 제어문에 일관된 중괄호 스타일 적용
    'camelcase': [2, {                // camelcase 명명 규칙 적용, properties가 never라는 것은 속성 이름을 확인하지 않는다는 것이다.
      "properties": "never"
    }]

  }
}
