# Playwright MCP 테스트 가이드

## 개요
이 문서는 Playwright MCP(멀티-에이전트 제어 프로토콜)를 활용하여 로컬 혹은 원격 개발 서버 페이지를 점검하는 절차를 정리한 것입니다. `@executeautomation/playwright-mcp-server`가 설치돼 있다는 가정 하에, 브라우저 준비부터 페이지 네비게이션, 스크린샷 캡처까지의 흐름을 다룹니다.

## 필수 실행 순서 (Playwright MCP 호출이 2분 이상 응답하지 않을 때)
1. **목표 서비스 상태 확인**: 점검하려는 웹 애플리케이션이 기동되어 있는지 재확인합니다. 필요한 경우 로컬 개발 서버나 미리보기 서버를 재시작하고, 브라우저로 직접 접속해 응답을 확인합니다.
2. **MCP 서버 재기동**: `npx -y @executeautomation/playwright-mcp-server`로 MCP 서버를 다시 실행해 세션을 초기화합니다. 이미 실행 중이었다면 종료 후 재시작합니다.
3. **Playwright 브라우저 재설치**: MCP가 참조하는 `PLAYWRIGHT_BROWSERS_PATH` 환경 변수를 지정한 뒤 `npx playwright install chromium`을 실행해 최신 바이너리를 받습니다. 경로는 MCP 서버의 `node_modules/playwright-core/.local-browsers` 등을 사용하면 됩니다.
4. **버전 디렉터리 동기화**: MCP가 특정 폴더명(예: `chromium-1179`)을 기대한다면, 새로 설치된 버전 경로와 일치하도록 심볼릭 링크를 갱신하거나 설정 파일을 수정합니다.
5. **명령 재실행 및 모니터링**: 위 단계를 모두 끝낸 뒤 Playwright MCP 명령을 다시 실행합니다. 여전히 지연된다면 네트워크 방화벽, 프록시, 인증 정보 등 환경 변수를 추가로 점검합니다.

이 다섯 단계는 다른 프로젝트에서도 동일하게 적용됩니다. 특히 2분 이상 응답이 없는 경우에는 반드시 위 순서를 차례대로 수행한 뒤 문제를 보고해야 합니다.

## 일반 준비 단계
1. **브라우저 바이너리 설치**  
   `PLAYWRIGHT_BROWSERS_PATH=<mcp-install-path>/node_modules/playwright-core/.local-browsers \
     npx playwright install chromium`
2. **버전 폴더 맞춤(필요 시)**  
   `ln -sfn <브라우저-실제-경로>/chromium-<설치버전> <브라우저-기대-경로>/chromium-<기존버전>`

## 테스트 절차
1. **페이지 접속**  
   `playwright_navigate` 도구를 사용해 검사 대상 URL로 이동합니다.
   ```json
   {"url": "http://<host>:<port>/<path>", "timeout": 120000}
   ```
2. **버튼 클릭 / 입력 상호작용**  
   - 버튼 클릭: `playwright_click`
     ```json
     {"selector": "button.primary"}
     ```
   - 텍스트 입력: `playwright_fill`
     ```json
     {"selector": "input[name=\"httpUrl\"]", "value": "http://<api-host>:<port>"}
     ```
   - 선택 상자 변경: `playwright_select`
     ```json
     {"selector": "select[name=\"authType\"]", "value": "<option-value>"}
     ```

3. **스크린샷 캡처**  
   전체 페이지 스크린샷은 `playwright_screenshot`으로 저장합니다.
   ```json
   {"name": "playwright-capture", "fullPage": true}
   ```
4. **텍스트 확인(선택)**  
   `playwright_get_visible_text`를 호출하면 현재 화면의 주요 텍스트를 확인할 수 있습니다.
   ```json
   {}
   ```
5. **콘솔 로그 확인(필요 시)**  
   브라우저 콘솔 메시지가 필요할 경우 `playwright_console_logs`를 활용합니다.

## 참고
- MCP 서버는 `npx -y @executeautomation/playwright-mcp-server`로 실행됩니다.
- 모든 Playwright 명령은 MCP 연결을 통해 실행되므로, 별도의 Playwright 테스트 파일을 작성할 필요가 없습니다.
- 브라우저 초기화 오류가 발생하면 `npx playwright install` 또는 기본 경로의 심볼릭 링크를 확인하세요.

### 예시: neo-flow-viz 프로젝트
- 브라우저 설치 경로 예시
  ```bash
  PLAYWRIGHT_BROWSERS_PATH=/Users/tw.kim/.nvm/versions/node/v22.14.0/lib/node_modules/@executeautomation/playwright-mcp-server/node_modules/playwright-core/.local-browsers \
    npx playwright install chromium
  ```
- MCP가 `chromium-1179` 경로를 기대할 때 심볼릭 링크 예시
  ```bash
  ln -sfn /Users/tw.kim/.nvm/.../.local-browsers/chromium-1193 \
         /Users/tw.kim/.nvm/.../.local-browsers/chromium-1179
  ```
- 자주 사용하는 Playwright MCP 호출 예시
  ```json
  {"url": "http://127.0.0.1:4173/test-6", "timeout": 120000}
  ```
- 샘플 입력/선택자 예시
  ```json
  {"selector": "input[name=\"httpUrl\"]", "value": "http://localhost:7474"}
  ```
  ```json
  {"selector": "select[name=\"authType\"]", "value": "bearer"}
  ```
