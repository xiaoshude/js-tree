import {Tree, ArrayTree} from '../src/index.js'

let demoTree = [
  {
    "sort": 0,
    "icon": "default.png",
    "id": 1,
    "url": "/home/index",
    "path": "0-1",
    "name": "首页",
    "pid": 0
  },
  {
    "sort": 0,
    "icon": "default.png",
    "id": 9,
    "url": "#",
    "path": "0-9",
    "name": "用户管理",
    "pid": 0,
    "_child": [
      {
        "sort": 0,
        "icon": "",
        "id": 11,
        "url": "/user/storeemp/index",
        "path": "0-9-11",
        "name": "门店员工",
        "pid": 9
      },
      {
        "sort": 0,
        "icon": "",
        "id": 12,
        "url": "/user/operator/index",
        "path": "0-9-12",
        "name": "BO运营",
        "pid": 9
      }
    ]
  },
  {
    "sort": 0,
    "icon": "default.png",
    "id": 13,
    "url": "#",
    "path": "0-13",
    "name": "权限管理",
    "pid": 0,
    "_child": [
      {
        "sort": 0,
        "icon": "",
        "id": 14,
        "url": "/privilege/developer/index",
        "path": "0-13-14",
        "name": "开发者权限",
        "pid": 13
      },
      {
        "sort": 0,
        "icon": "",
        "id": 15,
        "url": "/privilege/storeemp/index",
        "path": "0-13-15",
        "name": "门店员工权限",
        "pid": 13
      },
      {
        "sort": 0,
        "icon": "",
        "id": 16,
        "url": "/privilege/operator/index",
        "path": "0-13-16",
        "name": "BO运营权限",
        "pid": 13
      },
      {
        "sort": 0,
        "icon": "",
        "id": 17,
        "url": "/system/node/index",
        "path": "0-13-17",
        "name": "菜单管理",
        "pid": 13
      },
      {
        "sort": 0,
        "icon": "",
        "id": 27,
        "url": "/system/role/index",
        "path": "0-13-27",
        "name": "角色管理",
        "pid": 13,
        "_child": [
          {
            "sort": 0,
            "icon": "",
            "id": 28,
            "url": "/system/role/add",
            "path": "0-13-27-28",
            "name": "新建角色",
            "pid": 27
          },
          {
            "sort": 0,
            "icon": "",
            "id": 31,
            "url": "/system/role/index",
            "path": "0-13-27-31",
            "name": "角色列表",
            "pid": 27
          }
        ]
      },
      {
        "sort": 5,
        "icon": "",
        "id": 21,
        "url": "/system/user/index",
        "path": "0-13-21",
        "name": "用户管理",
        "pid": 13
      }
    ]
  },
  {
    "sort": 2,
    "icon": "default.png",
    "id": 3,
    "url": "#",
    "path": "0-3",
    "name": "市场管理",
    "pid": 0,
    "_child": [
      {
        "sort": 0,
        "icon": "",
        "id": 4,
        "url": "/market/api/index",
        "path": "0-3-4",
        "name": "API审核",
        "pid": 3
      },
      {
        "sort": 0,
        "icon": "",
        "id": 6,
        "url": "/market/app/index",
        "path": "0-3-6",
        "name": "应用审核",
        "pid": 3
      },
      {
        "sort": 0,
        "icon": "",
        "id": 7,
        "url": "/market/module/index",
        "path": "0-3-7",
        "name": "组件审核",
        "pid": 3
      },
      {
        "sort": 0,
        "icon": "",
        "id": 8,
        "url": "/market/hardware/index",
        "path": "0-3-8",
        "name": "硬件审核",
        "pid": 3
      }
    ]
  }
];

let config = {
  childrenAttr: '_child',
  idAttr: 'id',
  parentAttr: 'pid',
  hrefAttr: 'url',
  textAttr: 'name',
  iconAttr: 'icon'
};

let data = {
  id: '_auto_root_',
  [config.childrenAttr]: demoTree
};

let tree = new Tree(data, config);

describe('tree', () => {
  it('traverseDF', () => {
    let result = [];
    tree.traverse(node => {
      result.push(parseInt(node.id))
    });
    expect(result.length).to.be.equal(19);
    expect(result[1]).to.be.equal(1);
    expect(result[2]).to.be.equal(9);
    expect(result[3]).to.be.equal(11);
  });

  it('getNodeById', () => {
    let targerNode = tree.getNodeById('2895');
    expect(targerNode.name).to.be.equal('组织架构管理');
  });

  it('traverseUp', () => {
    let result = [];
    tree.traverseUp({
      node_id: "2896",
      parent_id: "2895",
      application_id: "1",
      application_node_id: "2896",
      path: "0-2894-2895",
      name: "组织架构列表",
      url: "/Newsystem/Organization/index",
      is_del: "0",
      is_show_menu: "1",
      sort: "0",
      icon: "",
      sub_folder: "",
      remark: "",
      danger: "2",
      menu: "1",
      id: "2896",
      pid: "2895",
      appid: "1"
    }, node => {
      if(!node) {
        return true;
      }
      result.push(parseInt(node.id))
    });
    expect(result.length).to.be.equal(2);
    expect(result[0]).to.be.equal(2895);
    expect(result[1]).to.be.equal(2894);
  });
});



