# Тестовый проект для демонстрации возможностей Redux Toolkit

## Целью проекта является продемонстировать особенность работы с *redux store* при помощи функций *createAction/createReducer* и *createSlice*

# Запуск
Проект собран при помощи утилиты [create-react-app](https://create-react-app.dev/)

Установите зависимости: `npm ci`

Запустите приложение: `npm run start`

Откройте в браузере URL: http://localhost:3000

# Структура проекта

Решение для каждого рассматриваемого случая описано в отдельной ветке:
- `raw_redux` - здесь решение на "сыром" redux без использования вспомогательных функций Redux Toolkit
- `todos_create_action_create_reducer` - здесь решение при помощи функций `createActions/createReducer`
- `todos_create_slice` - здесь решение при помощи функции `createSlice`
- `todos_recent_actions_using_slice` - здесь решение задачи сохранения последнего действия пользователя используя функцию `createSlice`
- `todos_recent_action_using_matcher` - здесь решение задачи сохранения последнего действия пользователя используя функцию `builder.addMatcher`