export const MYSQLCONFIG:any = {
  type: "mysql", //数据库类型
  username: "root", //账号
  password: "799520cfyCFY.", //密码
  host: "175.178.216.33", //host
  port: 3306,
  database: "community", //库名
  synchronize: true, //synchronize字段代表是否自动将实体类同步到数据库
  retryDelay: 500, //重试连接数据库间隔
  retryAttempts: 10, //重试连接数据库的次数
  autoLoadEntities: true, //如果为true,将自动加载实体 forFeature()方
}
