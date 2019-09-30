/*------院校隶属------*/
export const collegeAttachDict = {
  '1': {
    name: '教育部'
  },
  '2': {
    name: '中央部委'
  },
  '3': {
    name: '地方'
  },
  '4': {
    name: '地方部委'
  }
};

export const collegeAttachList = Object.keys(collegeAttachDict).map(key => ({
  value: key,
  label: collegeAttachDict[key].name
}));

/*------院校特性-------*/
export const collegePropertyDict = {
  '1': {
    name: '985高校'
  },
  '2': {
    name: '211高校'
  },
  '3': {
    name: '世界一流大学'
  },
  '4': {
    name: '世界一流学科'
  },
  '5': {
    name: '自划线'
  },
  '6': {
    name: '推荐免试'
  },
  '7': {
    name: '博士点'
  }
};

export const collegePropertyList = Object.keys(collegePropertyDict).map(key => ({
  value: key,
  label: collegePropertyDict[key].name
}));

/*-------省份-------*/
export const provinceDict = {
  '9': {
    name: '北京',
    type: 1
  },
  '10': {
    name: '山东',
    type: 1
  },
  '11': {
    name: '浙江',
    type: 1
  },
  '12': {
    name: '江苏',
    type: 1
  },
  '13': {
    name: '湖南',
    type: 1
  },
  '14': {
    name: '湖北',
    type: 1
  },
  '15': {
    name: '四川',
    type: 1
  },
  '16': {
    name: '陕西',
    type: 1
  },
  '17': {
    name: '贵州',
    type: 2
  },
  '18': {
    name: '青海',
    type: 2
  },
  '19': {
    name: '河北',
    type: 1
  },
  '20': {
    name: '重庆',
    type: 1
  },
  '21': {
    name: '广东',
    type: 1
  },
  '22': {
    name: '新疆',
    type: 2
  },
  '23': {
    name: '河南',
    type: 1
  },
  '24': {
    name: '福建',
    type: 1
  },
  '25': {
    name: '内蒙古',
    type: 2
  },
  '26': {
    name: '上海',
    type: 1
  },
  '27': {
    name: '天津',
    type: 1
  },
  '28': {
    name: '安徽',
    type: 1
  },
  '29': {
    name: '吉林',
    type: 1
  },
  '30': {
    name: '云南',
    type: 2
  },
  '31': {
    name: '宁夏',
    type: 2
  },
  '32': {
    name: '辽宁',
    type: 1
  },
  '33': {
    name: '黑龙江',
    type: 1
  },
  '34': {
    name: '江西',
    type: 1
  },
  '35': {
    name: '山西',
    type: 1
  },
  '36': {
    name: '甘肃',
    type: 2
  },
  '37': {
    name: '广西',
    type: 2
  },
  '38': {
    name: '海南',
    type: 2
  },
  '39': {
    name: '西藏',
    type: 2
  }
};

export const provinceList = Object.keys(provinceDict).map(key => ({
  value: key,
  label: provinceDict[key].name,
  type: provinceDict[key].type
}));

/*-----院校类型------*/
export const collegeTypeDict = {
  '1': {
    name: '综合'
  },
  '2': {
    name: '理工'
  },
  '3': {
    name: '艺术'
  },
  '4': {
    name: '体育'
  },
  '5': {
    name: '财经'
  },
  '6': {
    name: '政法'
  },
  '7': {
    name: '语言'
  },
  '8': {
    name: '医药'
  },
  '9': {
    name: '农林'
  },
  '10': {
    name: '军事'
  },
  '11': {
    name: '民族'
  },
  '12': {
    name: '师范'
  },
  '13': {
    name: '其他'
  }
};

export const collegeTypeList = Object.keys(collegeTypeDict).map(key => ({
  value: key,
  label: collegeTypeDict[key].name
}));

/*--------适合人群--------*/
export const suitableDict = {
  '1': {
    name: '援藏计划'
  },
  '2': {
    name: '民族骨干'
  },
  '3': {
    name: '强军计划'
  },
  '4': {
    name: '同等学力'
  }
};

export const suitableList = Object.keys(suitableDict).map(key => ({
  value: key,
  label: suitableDict[key].name
}));

/*------专业特色------*/
export const featureDict = {
  '1': {
    name: '同等学力'
  },
  '2': {
    name: '在职报考'
  },
  '3': {
    name: '限制专业'
  },
  '4': {
    name: '中公特色'
  },
  '5': {
    name: '公务员'
  },
  '6': {
    name: '教师'
  }
};

export const featureList = Object.keys(featureDict).map(key => ({
  value: key,
  label: featureDict[key].name
}));

/*-----------------------------*/

/*-----考试方式-----*/
export const examTypeDict = {
  '1': {
    name: '全国统考'
  },
  '2': {
    name: '联合考试'
  },
  '3': {
    name: '单独考试'
  },
  '4': {
    name: '推免'
  }
};

export const examTypeList = Object.keys(examTypeDict).map(key => ({
  value: key,
  label: examTypeDict[key].name
}));

/*-----培养方式-----*/
export const cultureWayDict = {
  '1': {
    name: '全日制'
  },
  '2': {
    name: '非全日制'
  }
};

export const cultureWayList = Object.keys(cultureWayDict).map(key => ({
  value: key,
  label: cultureWayDict[key].name
}));

/*-----招生状态-----*/
export const admissionStatusDict = {
  '1': {
    name: '招生'
  },
  '2': {
    name: '停招'
  },
  '0': {
    name: '取消'
  }
};

export const admissionStatusList = Object.keys(admissionStatusDict).map(key => ({
  value: key,
  label: admissionStatusDict[key].name
}));

/*-----统考数学-----*/
export const extraDict = {
  '1': {
    name: '是'
  },
  '0': {
    name: '否'
  }
};

export const extraList = Object.keys(extraDict).map(key => ({
  value: key,
  label: extraDict[key].name
}));

/*-----毕业状态-----*/
export const graduateStatusDict = {
  '2': {
    name: '正常毕业'
  },
  '1': {
    name: '结业生及以上'
  },
  '0': {
    name: '肄业生及以上'
  }
};

export const graduateStatusList = Object.keys(graduateStatusDict).map(key => ({
  value: key,
  label: graduateStatusDict[key].name
}));

/*-----工作年限-----*/
export const yearList = [
  {
    value: 0,
    label: '不限'
  }, {
    value: 1,
    label: '1年'
  }, {
    value: 2,
    label: '2年'
  }, {
    value: 3,
    label: '3年'
  }, {
    value: 4,
    label: '4年'
  }, {
    value: 5,
    label: '5年'
  }
];

/*-----学历条件-----*/
export const knowledgeConditionDict = {
  '0': {
    name: '未知'
  },
  '1': {
    name: '大专'
  },
  '2': {
    name: '统招本科'
  },
  '3': {
    name: '非统招本科'
  }
};

export const knowledgeConditionList = Object.keys(knowledgeConditionDict).map(key => ({
  value: key,
  label: knowledgeConditionDict[key].name
}));

/*-----排名-----*/
export const rankDict = {
  '0': {
    name: '空'
  },
  '9': {
    name: 'C-'
  },
  '8': {
    name: 'C'
  },
  '7': {
    name: 'C+'
  },
  '6': {
    name: 'B-'
  },
  '5': {
    name: 'B'
  },
  '4': {
    name: 'B+'
  },
  '3': {
    name: 'A-'
  },
  '2': {
    name: 'A'
  },
  '1': {
    name: 'A+'
  }
};

export const rankList = Object.keys(rankDict).map(key => ({
  value: key,
  label: rankDict[key].name
}));


