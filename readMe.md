# chrome扩展开发文档

## manifest.json 清单
* `manifest_version`: 指定扩展中清单文件格式版本
* `name`: 扩展标识字符串同short_name属性
* `version`: 扩展版本
* default_locale:
* description: 对扩展的描述文案
* icons:
* `browser_action`: 控制浏览器对扩展的交互，包括icon、tootip、badge、popup
* `page_action`: 同browser_action，推荐使用browser_action
* `action`:
* author:
* automation:
* background:
* background_page:
* chrome_settings_overrides:
* chrome_ui_overrides:
* chrome_ui_overrides:
* `commands`: 设置和扩展交互的快捷键
* content_capabilities:
* content_scripts:
* content_security_policy:
