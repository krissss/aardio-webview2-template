import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale-provider/zh_CN'
import './index.css';
import App from './App';
import store from "./store";

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider locale={zhCN}>
          <store.Provider>
                <App title="Typescript + React Hooks + Ant Design 演示"/>
          </store.Provider>
    </ConfigProvider>,
  </React.StrictMode>,
  document.getElementById('root')
);

