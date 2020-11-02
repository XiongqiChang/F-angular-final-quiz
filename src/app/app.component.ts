import { Component } from '@angular/core';

// TODO GTB-1: * 组件样式没有实现
// TODO GTB-1: * 添加讲师、学员功能没有实现
// TODO GTB-3: * 对样式和标签理解不够到位
// TODO GTB-3: * 对angular的模版语法理解不够到位
// TODO GTB-3: * 组件划分合理，层次分明，参数传递运用正确
// TODO GTB-3: * 服务注入和http模块运用合理，Observable基础掌握
// TODO GTB-4: * 小步提交实践不完善，comment不清晰
// TODO GTB-4: * 存在逻辑相同的组件，应该抽象成通用公共组件
// TODO GTB-4: * 存在lint错误没有修复

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-final-quiz';
}
