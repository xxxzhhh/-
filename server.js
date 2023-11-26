const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 3000;
// 模拟用户数据库
const testdata5 =
{
  class: [
    {
      value: 'Option1-1',
      label: '一班',
    },
    {
      value: 'Option1-2',
      label: '二班',
    },
    {
      value: 'Option1-3',
      label: '三班',
    },
    {
      value: 'Option1-4',
      label: '四班',
    },
    {
      value: 'Option1-5',
      label: '五班',
    },
  ],
  exam: [
    {
      value: 'Option1-1',
      label: '第一次月考',
    },
    {
      value: 'Option1-2',
      label: '第二次月考',
    },
    {
      value: 'Option1-3',
      label: '第三次月考',
    },
    {
      value: 'Option1-4',
      label: '期中考试',
    },
    {
      value: 'Option1-5',
      label: '期末考试',
    },
  ],
}
const testdata6 = {
  inclassexam: [
    {
      name: '小一',
      score: 90,
    },
    {
      name: '小二',
      score: 86,
    },
    {
      name: '小三',
      score: 91,
    },
    {
      name: '小四',
      score: 89,
    },
    {
      name: '小五',
      score: 88,
    },
    {
      name: '小六',
      score: 95,
    },
  ],
  inclassexam1: [
    { name: '90-100分', value: 10 },
    { name: '80-90分', value: 12 },
    { name: '70-80分', value: 20 },
    { name: '60-70分', value: 15 },
    { name: '50-60分', value: 13 },
    { name: '40-50分', value: 12 },
    { name: '30-40分', value: 3 },
    { name: '20-30分', value: 2 },
    { name: '10-20分', value: 12 },
    { name: '0-10分', value: 5 },
  ],
}
const testdata7 = [
  {
    name: '一班',
    score: 900,
  },
  {
    name: '二班',
    score: 860,
  },
  {
    name: '三班',
    score: 910,
  },
  {
    name: '四班',
    score: 890,
  },
  {
    name: '五班',
    score: 880,
  },
  {
    name: '小六',
    score: 95,
  },
]
const testdata8 = [
  {
    id: 0,
    exam: '语文',
    name: '大傻',
    score: '10',
    ack: '是',
    more: '傻子一个，想捞分',
    sid: '12345678910'
  },
  {
    id: 1,
    exam: '数学',
    name: '大傻',
    score: '20',
    ack: '是',
    more: '傻子一个，想捞分',
    sid: '12345678910'
  },
  {
    id: 2,
    exam: '英语',
    name: '大傻',
    score: '30',
    ack: '是',
    more: '傻子一个，想捞分',
    sid: '12345678910'
  },
  {
    id: 3,
    exam: '物理',
    name: '大傻',
    score: '11',
    ack: '是',
    more: '傻子一个，想捞分',
    sid: '12345678910'
  },
  {
    id: 4,
    exam: '化学',
    name: '大傻',
    score: '12',
    ack: '是',
    more: '傻子一个，想捞分',
    sid: '12345678910'
  },
  {
    id: 5,
    exam: '生物',
    name: '大傻',
    score: '13',
    ack: '是',
    more: '傻子一个，想捞分',
    sid: '12345678910'
  },
  {
    id: 6,
    exam: '地理',
    name: '大傻',
    score: '11',
    ack: '是',
    more: '傻子一个，想捞分',
    sid: '12345678910'
  },
  {
    id: 7,
    exam: '历史',
    name: '大傻',
    score: '12',
    ack: '是',
    more: '傻子一个，想捞分',
    sid: '12345678910'
  },
  {
    id: 8,
    exam: '政治',
    name: '大傻',
    score: '13',
    ack: '是',
    more: '傻子一个，想捞分',
    sid: '12345678910'
  },
  {
    id: 9,
    exam: '体育',
    name: '大傻',
    score: '80',
    ack: '否',
    more: '就会这一个了',
    sid: '12345678910'
  },
  {
    id: 10,
    exam: '实验',
    name: '大傻',
    score: '10',
    ack: '是',
    more: '傻子一个，想捞分',
    sid: '12345678910'
  },
  {
    id: 11,
    exam: '综合素质',
    name: '大傻',
    score: '8',
    ack: '是',
    more: '傻子一个，想捞分',
    sid: '12345678910'
  },
]
const testdata9 = {
  examscore: [
    {
      name: '第一次月考',
      score: 90,
    },
    {
      name: '第二次月考',
      score: 86,
    },
    {
      name: '第三次月考',
      score: 91,
    },
    {
      name: '第四次月考',
      score: 89,
    },
    {
      name: '第五次月考',
      score: 88,
    },
    {
      name: '期中考试',
      score: 95,
    },
    {
      name: '期末考试',
      score: 98,
    },
  ],
  examsrank: [
    {
      name: '第一次月考',
      rank: 10,
      rank1: 100,
    },
    {
      name: '第二次月考',
      rank: 12,
      rank1: 120,
    },
    {
      name: '第三次月考',
      rank: 20,
      rank1: 200,
    },
    {
      name: '第四次月考',
      rank: 15,
      rank1: 150,
    },
    {
      name: '第五次月考',
      rank: 13,
      rank1: 130,
    },
    {
      name: '期中考试',
      rank: 12,
      rank1: 120,
    },
    {
      name: '期末考试',
      rank: 3,
      rank1: 3,
    },
  ],
}
const testdata10 = {
  exam: [
    {
      value: 'Option1-1',
      label: '第一次月考',
    },
    {
      value: 'Option1-2',
      label: '第二次月考',
    },
    {
      value: 'Option1-3',
      label: '第三次月考',
    },
    {
      value: 'Option1-4',
      label: '期中考试',
    },
    {
      value: 'Option1-5',
      label: '期末考试',
    },
  ],
}
const testdata11 = {
  totalscore: [
    {
      name: '小一',
      score: 900,
    },
    {
      name: '小二',
      score: 860,
    },
    {
      name: '小三',
      score: 910,
    },
    {
      name: '小四',
      score: 890,
    },
    {
      name: '小五',
      score: 880,
    },
    {
      name: '小六',
      score: 950,
    },
  ],
  totalavgscore: [
    {
      name: '一班',
      score: 900,
    },
    {
      name: '二班',
      score: 860,
    },
    {
      name: '三班',
      score: 910,
    },
    {
      name: '四班',
      score: 890,
    },
    {
      name: '五班',
      score: 880,
    },
    {
      name: '六班',
      score: 950,
    },
  ],
}
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(cors(
  {
    origin: 'http://localhost:5173',
    credentials: true
  }
));


app.post('/api/watchstudent', (req, res) => {
  if (req) {
    //在此处检查数据，传给后端待查询学生学号sid，传回前端examscore：学生各次考试的名称及总成绩；examsrank：学生各次考试的名称及排名
    return res.json(testdata9)
  }
})
app.get('/api/watchclass', (req, res) => {
  return res.json(testdata5)
  //获取所有班级的名称
})
app.post('/api/watchclass2', (req, res) => {
  if (req) {
    //传给后端选择的班级名称class，需要查询该班级所有的考试，并传给前端
    return res.json(testdata10)
  }
})
app.post('/api/watchclass0', (req, res) => {
  if (req) {
    //在此处检查数据，传给后端选择的班级名称及选择的考试名称class和exam，传回前端inclassexam，和inclassexam1，分别指该班级所有学生的姓名与此次考试的考试成绩，该班的此次考试成绩的分段（可自行分成绩段，只要返回分段的名称（如“80-100分”）与处于该分段的人数即可）
    return res.json(testdata6)
  }
})
app.post('/api/watchclass1', (req, res) => {
  if (req) {
    //在此处检查数据，传给后端选择的考试名称exam1，传回前端所有班级的名称与该次考试的平均成绩
    return res.json(testdata7)
  }
})
app.post('/api/watchclass3', (req, res) => {
  if (req) {
    return res.json(testdata11)
  }
})
app.post('/api/update/updatenew', (req, res) => {
  return res.json(testdata7)
})
app.post('/api/updatechange0', (req, res) => {
  if (req) {
    //在此处检查数据，传给后端学生学号sid，传给前端该学生的某些信息
    return res.json(testdata8)
  }
})
app.post('/api/updatechange1', (req, res) => {
  if (req) {
    //在此处检查数据，传给后端标识符id与修改后成绩score，要求后端在数据库修改成绩，不需要传给前端数据
    return res.json('')
  }
})
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
